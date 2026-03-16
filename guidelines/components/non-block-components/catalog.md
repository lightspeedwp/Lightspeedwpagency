# Non-Block Components — Complete Catalog

**Category:** Components  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [non-block-components.md](../non-block-components.md)  

---

## 1. ScrollBackToTop (Back to Top Button)

**Purpose:** Smooth scroll back to top of page  
**Component:** `/src/app/components/ui/ScrollBackToTop.tsx`  
**CSS:** `/src/styles/ui/scroll-back-to-top.css`  
**Documentation:** [ScrollBackToTop.md](../ScrollBackToTop.md)

**Features:** Appears after scrolling down, smooth scroll animation, keyboard accessible, reduced motion support

**WordPress:** `assets/js/scroll-to-top.js`

---

## 2. ScrollDownArrow (Scroll Indicator)

**Purpose:** Indicates more content below fold on fullscreen heroes  
**Component:** `/src/app/components/ui/ScrollDownArrow.tsx`  
**CSS:** `/src/styles/ui/scroll-down-arrow.css`  
**Documentation:** [ScrollDownArrow.md](../ScrollDownArrow.md)

**Features:** Animated arrow/chevron, smooth scroll to next section, auto-hides after scroll, reduced motion support

**WordPress:** `assets/js/scroll-indicator.js`

---

## 3. StyleSwitcher (Theme Switcher)

**Purpose:** Toggle between light/dark mode  
**Component:** `/src/app/components/ui/StyleSwitcher.tsx`  
**CSS:** `/src/styles/ui/style-switcher.css`  
**Documentation:** [StyleSwitcher.md](../StyleSwitcher.md)

**Features:** Light/dark mode toggle, respects system preference, saves user preference (localStorage), smooth transition

**WordPress:** `assets/js/theme-switcher.js`

---

## 4. LayoutSwitcher (Grid/List View Toggle)

**Purpose:** Toggle between grid and list layouts for archives  
**Component:** `/src/app/components/ui/LayoutSwitcher.tsx`  
**CSS:** `/src/styles/ui/layout-switcher.css`  
**Documentation:** [LayoutSwitcher.md](../LayoutSwitcher.md)

**Features:** Grid vs list view toggle, saves user preference, keyboard accessible, smooth layout transition

**WordPress:** `assets/js/layout-switcher.js`

---

## 5. Skip Link (Accessibility Utility)

**Purpose:** Allow keyboard users to skip to main content  
**Implementation:** Typically inline in template, not separate component

```tsx
<a 
  href="#main-content"
  className="skip-link"
  style={{
    position: 'absolute',
    left: '-9999px',
    zIndex: 9999
  }}
>
  Skip to main content
</a>

<main id="main-content">
  {/* Page content */}
</main>
```

```css
.skip-link:focus {
  left: 0;
  top: 0;
  padding: var(--spacing-3);
  background: var(--primary);
  color: var(--primary-foreground);
}
```

**WordPress:** Built into theme header, no JavaScript required

---

## 6. Focus Ring / Focus-Visible Utilities

**Purpose:** Enhanced focus indicators for keyboard navigation  
**Implementation:** CSS-only, applied globally

```css
*:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}
```

**WordPress:** CSS in theme stylesheet, no JavaScript required

---

## 7. Typography/Token Enforcement Wrappers

**Purpose:** Enforce design system tokens

**Components:**
- `Container.tsx` — Max-width container with fluid padding
- `Section.tsx` — Section wrapper with spacing
- `Heading.tsx` — Headings with design system typography
- `Button.tsx` — Buttons with variants and states

**Location:** `/src/app/components/common/`

```tsx
<Container>
  <Section>
    <Heading level={1}>Title</Heading>
  </Section>
</Container>
```

**WordPress:** CSS classes and utilities, no JavaScript required

---

## 8. Smooth Scroll Behavior

**Purpose:** Enable smooth scrolling for anchor links  
**Implementation:** CSS + optional JavaScript enhancement

```css
html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

---

## 9. Loading States

**Purpose:** Show loading indicators during async operations

```tsx
<div className="loading-spinner" role="status">
  <span className="sr-only">Loading...</span>
</div>
```

```css
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .loading-spinner { animation: none; }
}
```

---

## 10. Modal/Dialog Management

**Purpose:** Manage modal focus trapping and keyboard behavior

**Features:** Focus trap within modal, close on Escape key, return focus to trigger, lock body scroll

```js
class FocusTrap {
  constructor(element) {
    this.element = element;
    this.previousFocus = document.activeElement;
  }
  activate() { /* Trap focus within element */ }
  deactivate() { /* Return focus to previous element */ }
}
```

---

**See also:** [guidelines.md](./guidelines.md)
