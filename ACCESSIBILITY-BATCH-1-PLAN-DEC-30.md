# Accessibility Improvements — Batch 1 Plan (December 30, 2024)

## 🎯 **Objective**

Implement comprehensive accessibility improvements across the LSX Design system to ensure WCAG 2.1 AAA compliance where possible, building on existing AA compliance.

---

## 📊 **Current State Assessment**

### **✅ Already Implemented (Strong Foundation)**

1. **WCAG 2.1 AA Color Contrast** — 100% compliance across light/dark modes
2. **Skip Links** — Implemented with proper focus management
3. **Touch Targets** — 44×44px minimum (WCAG AAA)
4. **Keyboard Navigation** — Tab, Enter, Space, Escape keys supported
5. **Focus Indicators** — 2px visible focus rings on all interactive elements
6. **Semantic HTML** — Proper landmarks (header, nav, main, footer)
7. **ARIA Labels** — Modal dialogs, form controls, navigation
8. **Screen Reader Support** — Basic aria-label, aria-describedby, role attributes
9. **Reduced Motion** — Respects prefers-reduced-motion

### **🔍 Areas for Enhancement**

1. **Live Regions** — Add aria-live for dynamic content updates
2. **Form Validation** — Enhance error messaging with aria-invalid, aria-errormessage
3. **Loading States** — Add aria-busy, loading announcements
4. **Navigation Announcements** — Route changes for screen readers
5. **Expanded/Collapsed States** — Better accordion/dropdown support
6. **Image Alt Text** — Audit and improve alt text quality
7. **Heading Hierarchy** — Verify logical structure across all templates
8. **Focus Management** — Enhance focus trap in modals, manage focus on route changes
9. **Keyboard Shortcuts** — Document and enhance existing shortcuts
10. **Status Messages** — Add proper status role for success/error messages

---

## 📋 **Batch 1: Critical Accessibility Enhancements**

### **Priority 1: Live Regions & Announcements** ⚡

#### **1.1 Route Change Announcements**
**File:** New file `/src/app/components/blocks/utility/RouteAnnouncer.tsx`

**Purpose:** Announce page changes to screen readers

**Implementation:**
```tsx
/**
 * Route Announcer
 * 
 * Announces page navigation changes to screen readers using aria-live region.
 * Non-visual component that improves navigation experience for assistive tech users.
 */
export function RouteAnnouncer() {
  const [announcement, setAnnouncement] = useState('');
  const location = useLocation(); // or equivalent

  useEffect(() => {
    // Announce page title on route change
    const pageTitle = document.title || 'Page';
    setAnnouncement(`Navigated to ${pageTitle}`);
    
    // Clear announcement after screen reader reads it
    const timer = setTimeout(() => setAnnouncement(''), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'absolute',
        left: '-10000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}
    >
      {announcement}
    </div>
  );
}
```

**Impact:** Improves navigation experience for screen reader users

---

#### **1.2 Loading State Announcements**
**File:** Update `/src/app/components/blocks/feedback/Skeleton.tsx`

**Enhancement:** Add aria-live region for loading states

**Implementation:**
```tsx
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <>
      {/* Screen reader announcement */}
      <span
        role="status"
        aria-live="polite"
        aria-label="Loading content"
        style={{
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      >
        Loading...
      </span>
      
      {/* Visual skeleton */}
      <div
        aria-busy="true"
        aria-hidden="false"
        className={cn("animate-pulse rounded-md bg-muted", className)}
        {...props}
      />
    </>
  );
}
```

**Impact:** Screen readers announce loading states

---

#### **1.3 Form Validation Announcements**
**File:** Update `/src/app/hooks/useFormValidation.tsx`

**Enhancement:** Add aria-describedby and aria-errormessage

**Implementation:**
```tsx
export function useFormValidation<T extends Record<string, any>>(
  initialValues: T,
  rules: ValidationRules<T>
) {
  // ... existing code ...

  const getFieldProps = (fieldName: keyof T) => ({
    'aria-invalid': !!errors[fieldName],
    'aria-describedby': errors[fieldName] 
      ? `${String(fieldName)}-error` 
      : undefined,
    'aria-errormessage': errors[fieldName]
      ? `${String(fieldName)}-error`
      : undefined
  });

  return {
    // ... existing returns ...
    getFieldProps,
    renderError: (fieldName: keyof T) => (
      errors[fieldName] && (
        <div
          id={`${String(fieldName)}-error`}
          role="alert"
          aria-live="polite"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--destructive)',
            marginTop: '4px'
          }}
        >
          {errors[fieldName]}
        </div>
      )
    )
  };
}
```

**Impact:** Form errors are properly announced to screen readers

---

### **Priority 2: Enhanced Focus Management** 🎯

#### **2.1 Focus Trap Enhancement**
**File:** New file `/src/app/hooks/useFocusTrap.tsx`

**Purpose:** Comprehensive focus trap for modals and popovers

**Implementation:**
```tsx
/**
 * Focus Trap Hook
 * 
 * Traps focus within a container (modal, popover, etc.) and manages
 * focus return when container closes.
 * 
 * WCAG 2.1 Level A: 2.1.2 No Keyboard Trap
 * 
 * @example
 * const modalRef = useFocusTrap(isOpen);
 * <div ref={modalRef}>...</div>
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Store currently focused element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Get all focusable elements
    const getFocusableElements = () => {
      if (!containerRef.current) return [];
      
      const selector = 
        'a[href], button:not([disabled]), textarea:not([disabled]), ' +
        'input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
      
      return Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(selector)
      );
    };

    // Focus first element
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Handle Tab key to trap focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) return;

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: Moving backwards
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: Moving forwards
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup: restore focus
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      // Return focus to previous element
      if (previousFocusRef.current && previousFocusRef.current.focus) {
        previousFocusRef.current.focus();
      }
    };
  }, [isActive]);

  return containerRef;
}
```

**Impact:** Proper focus management in all modal dialogs and popovers

---

#### **2.2 Focus Visible Utility**
**File:** New file `/src/app/utils/focusVisible.ts`

**Purpose:** Detect keyboard vs mouse focus for better UX

**Implementation:**
```tsx
/**
 * Focus Visible Utility
 * 
 * Adds focus-visible class only when navigating with keyboard.
 * Improves UX by not showing focus rings on mouse clicks.
 * 
 * Based on :focus-visible polyfill
 */
export function initFocusVisible() {
  let hadKeyboardEvent = true;
  let hadFocusVisibleRecently = false;
  let hadFocusVisibleRecentlyTimeout: number | null = null;

  const inputTypesAllowlist = new Set([
    'text', 'search', 'url', 'tel', 'email', 'password',
    'number', 'date', 'month', 'week', 'time', 'datetime',
    'datetime-local'
  ]);

  function isValidFocusTarget(el: Element): boolean {
    if (
      el.matches('input, textarea, select') &&
      !(el as HTMLInputElement).readOnly &&
      !(el as HTMLInputElement).disabled
    ) {
      return true;
    }
    return el.matches('a[href], button, [tabindex]:not([tabindex="-1"])');
  }

  function focusTriggersKeyboardModality(el: Element): boolean {
    const tagName = el.tagName.toLowerCase();
    const type = (el as HTMLInputElement).type;

    if (tagName === 'input' && inputTypesAllowlist.has(type)) {
      return true;
    }

    if (tagName === 'textarea') {
      return true;
    }

    return el.matches('[contenteditable="true"]');
  }

  function addFocusVisibleClass(el: Element) {
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  function removeFocusVisibleClass(el: Element) {
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Tab' || e.key === 'Shift') {
      hadKeyboardEvent = true;
    }
  }

  function onPointerDown() {
    hadKeyboardEvent = false;
  }

  function onFocus(e: FocusEvent) {
    const target = e.target as Element;

    if (isValidFocusTarget(target)) {
      if (hadKeyboardEvent || focusTriggersKeyboardModality(target)) {
        addFocusVisibleClass(target);
      }
    }
  }

  function onBlur(e: FocusEvent) {
    const target = e.target as Element;

    if (target.hasAttribute('data-focus-visible-added')) {
      hadFocusVisibleRecently = true;
      if (hadFocusVisibleRecentlyTimeout) {
        clearTimeout(hadFocusVisibleRecentlyTimeout);
      }
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);

      removeFocusVisibleClass(target);
    }
  }

  // Add event listeners
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);

  // Initial state
  document.body.classList.add('js-focus-visible');

  return () => {
    // Cleanup
    document.removeEventListener('keydown', onKeyDown, true);
    document.removeEventListener('mousedown', onPointerDown, true);
    document.removeEventListener('pointerdown', onPointerDown, true);
    document.removeEventListener('touchstart', onPointerDown, true);
    document.removeEventListener('focus', onFocus, true);
    document.removeEventListener('blur', onBlur, true);
  };
}
```

**Impact:** Better focus indicator UX (only shows on keyboard navigation)

---

### **Priority 3: Improved Status Messages** 📢

#### **3.1 Enhanced Toast Component**
**File:** Update `/src/app/hooks/useToast.tsx`

**Enhancement:** Add proper ARIA roles and live regions

**Implementation:**
```tsx
// In ToastContainer component
<div
  role="region"
  aria-label="Notifications"
  aria-live="polite"
  aria-atomic="false"
  style={{
    position: 'fixed',
    top: '80px',
    right: '20px',
    zIndex: 'var(--z-toast)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '400px'
  }}
>
  {toasts.map(toast => (
    <div
      key={toast.id}
      role="status"
      aria-live="polite"
      // ... rest of toast implementation
    >
```

**Impact:** Toast notifications properly announced to screen readers

---

## 📊 **Implementation Timeline**

### **Batch 1 (Estimated: 3-4 hours)**

1. **RouteAnnouncer** (30 min)
   - Create component
   - Integrate into App.tsx
   - Test with screen reader

2. **Loading State Announcements** (30 min)
   - Update Skeleton component
   - Add aria-busy to loading states
   - Test announcements

3. **Form Validation Enhancement** (45 min)
   - Update useFormValidation hook
   - Add aria-describedby, aria-errormessage
   - Test with screen reader

4. **Focus Trap Enhancement** (60 min)
   - Create useFocusTrap hook
   - Update EnquiryModal to use new hook
   - Update MobileFilterPopover
   - Test focus management

5. **Focus Visible Utility** (45 min)
   - Create focus-visible utility
   - Initialize in App.tsx
   - Add CSS styles
   - Test keyboard vs mouse focus

6. **Toast Enhancement** (30 min)
   - Update useToast hook
   - Add proper ARIA roles
   - Test screen reader announcements

---

## ✅ **Success Criteria**

1. ✅ Route changes announced to screen readers
2. ✅ Loading states announced with aria-live
3. ✅ Form errors use aria-invalid and aria-errormessage
4. ✅ Focus trapped in modals/popovers
5. ✅ Focus restored when modals close
6. ✅ Focus indicators only show on keyboard nav
7. ✅ Toast notifications announced to screen readers
8. ✅ All changes maintain WCAG 2.1 AA minimum
9. ✅ All changes use CSS variables (design system)
10. ✅ All changes fully tested with screen readers

---

## 🧪 **Testing Checklist**

### **Screen Reader Testing**
- [ ] NVDA (Windows) — Test all enhancements
- [ ] JAWS (Windows) — Test all enhancements
- [ ] VoiceOver (macOS) — Test all enhancements
- [ ] TalkBack (Android) — Test mobile experience

### **Keyboard Testing**
- [ ] Tab navigation works in all modals
- [ ] Shift+Tab works in all modals
- [ ] Escape closes modals and restores focus
- [ ] Focus visible only on keyboard nav
- [ ] All interactive elements reachable

### **Automated Testing**
- [ ] axe DevTools — 0 violations
- [ ] Lighthouse Accessibility — 100 score
- [ ] WAVE — 0 errors
- [ ] Pa11y — 0 errors

---

## 📚 **Documentation Updates**

After implementation, update:

1. `/guidelines/accessibility/screen-readers.md` (NEW)
2. `/guidelines/accessibility/keyboard-navigation.md` (UPDATE)
3. `/guidelines/accessibility/focus-management.md` (NEW)
4. `/guidelines/accessibility/live-regions.md` (NEW)
5. `/guidelines/testing/accessibility-testing.md` (UPDATE)

---

**Created:** December 30, 2024  
**Status:** Ready for Implementation  
**Priority:** High  
**Estimated Time:** 3-4 hours
