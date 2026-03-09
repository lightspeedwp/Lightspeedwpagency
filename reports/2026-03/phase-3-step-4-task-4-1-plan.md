# Phase 3 Step 4 Task 4.1: Implement useLazyPattern Hook — Plan

**Date:** March 6, 2026  
**Phase:** Phase 3 Step 4 Task 4.1  
**Status:** 📋 **IMPLEMENTATION PLAN**  
**Duration:** 4-6 hours estimated

---

## Objective

Implement a React hook for lazy-loading below-the-fold patterns using Intersection Observer API. Patterns load only when they enter the viewport, reducing initial bundle size and improving performance on slow connections.

**Expected Impact:**
- Additional 5-10% bundle reduction
- Faster initial page load
- Progressive enhancement for below-the-fold content
- Better performance on slow connections

---

## Hook Requirements

### Core Functionality

**1. Intersection Observer Integration**
- Detect when pattern container enters viewport
- Configurable threshold (default: 10% visible)
- Configurable root margin (default: 200px before visible)
- Support custom root element

**2. Pattern Loading**
- Load pattern component dynamically (`React.lazy`)
- Load pattern CSS dynamically (if needed)
- Support preloading on fast connections
- Handle loading states (loading, loaded, error)

**3. Progressive Enhancement**
- Render placeholder initially
- Show loading skeleton (optional)
- Render actual pattern when loaded
- Handle errors gracefully

**4. Performance Optimization**
- Disconnect observer after pattern loads
- Support SSR (no observer on server)
- Respect reduced motion preferences
- Support fast connection preloading

**5. Design System Compliance**
- All placeholder/skeleton styles use CSS variables
- All animations respect prefers-reduced-motion
- Font families use var(--font-primary)/var(--font-secondary)
- Colors use semantic CSS variables
- Spacing uses var(--spacing-*) tokens

---

## Hook API Design

### Basic Usage

```tsx
import { useLazyPattern } from '@/hooks/useLazyPattern';

function MyTemplate() {
  const { ref, isVisible, isLoaded } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px'
  });
  
  return (
    <section ref={ref}>
      {isLoaded ? (
        <TestimonialPattern />
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}
```

### Advanced Usage with Dynamic Import

```tsx
import { useLazyPattern } from '@/hooks/useLazyPattern';
import { lazy, Suspense } from 'react';

const TestimonialPattern = lazy(() => import('@/components/patterns/TestimonialPattern'));

function MyTemplate() {
  const { ref, isVisible, isLoaded } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true
  });
  
  return (
    <section ref={ref}>
      {isVisible ? (
        <Suspense fallback={<PatternSkeleton />}>
          <TestimonialPattern />
        </Suspense>
      ) : (
        <PatternPlaceholder />
      )}
    </section>
  );
}
```

---

## Hook Interface

### Parameters (Options)

```typescript
interface UseLazyPatternOptions {
  /**
   * Percentage of element that must be visible (0.0-1.0)
   * @default 0.1 (10%)
   */
  threshold?: number;
  
  /**
   * Margin around root element (CSS margin syntax)
   * @default '200px' (start loading 200px before visible)
   */
  rootMargin?: string;
  
  /**
   * Root element for intersection (null = viewport)
   * @default null
   */
  root?: Element | null;
  
  /**
   * Preload pattern on fast connections (4G, broadband)
   * @default true
   */
  preloadOnFastConnection?: boolean;
  
  /**
   * Disconnect observer after pattern loads
   * @default true
   */
  disconnectOnLoad?: boolean;
  
  /**
   * Enable debug logging
   * @default false
   */
  debug?: boolean;
}
```

### Return Value

```typescript
interface UseLazyPatternReturn {
  /**
   * Ref to attach to pattern container
   */
  ref: React.RefObject<HTMLElement>;
  
  /**
   * Whether pattern container is visible in viewport
   */
  isVisible: boolean;
  
  /**
   * Whether pattern has been loaded
   */
  isLoaded: boolean;
  
  /**
   * Loading error (if any)
   */
  error: Error | null;
  
  /**
   * Loading state enum
   */
  loadingState: 'idle' | 'loading' | 'loaded' | 'error';
}
```

---

## Implementation Strategy

### Phase 1: Core Hook Implementation

**File:** `/src/app/hooks/useLazyPattern.ts`

**Structure:**
```typescript
import { useEffect, useRef, useState } from 'react';

export function useLazyPattern(options?: UseLazyPatternOptions) {
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  
  useEffect(() => {
    // 1. Check if IntersectionObserver is supported
    // 2. Check for fast connection (preload)
    // 3. Create IntersectionObserver
    // 4. Observe element
    // 5. Cleanup on unmount
  }, [options]);
  
  return { ref, isVisible, isLoaded, error, loadingState };
}
```

**Key Implementation Details:**

1. **SSR Support:**
   ```typescript
   // Skip observer on server
   if (typeof window === 'undefined') return;
   ```

2. **Fast Connection Preloading:**
   ```typescript
   const connection = (navigator as any).connection;
   const isFastConnection = 
     connection?.effectiveType === '4g' || 
     connection?.downlink > 1.5;
   
   if (preloadOnFastConnection && isFastConnection) {
     setIsVisible(true); // Load immediately
     return;
   }
   ```

3. **Intersection Observer:**
   ```typescript
   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           setIsVisible(true);
           setLoadingState('loading');
           
           if (disconnectOnLoad) {
             observer.disconnect();
           }
         }
       });
     },
     { threshold, rootMargin, root }
   );
   ```

4. **Cleanup:**
   ```typescript
   return () => {
     if (observerRef.current) {
       observerRef.current.disconnect();
     }
   };
   ```

---

### Phase 2: Loading Skeleton Component

**File:** `/src/app/components/patterns/PatternSkeleton.tsx`

**Purpose:** Show loading state while pattern loads

**Requirements:**
- Use CSS variables for all colors (var(--muted), var(--background))
- Respect prefers-reduced-motion (no animation if reduced motion)
- Font families use var(--font-primary)
- Spacing uses var(--spacing-*) tokens

**Implementation:**
```tsx
/**
 * PatternSkeleton Component
 * 
 * Loading skeleton for lazy-loaded patterns
 * 
 * Design System Compliance:
 * - All colors use CSS variables (var(--muted), var(--background))
 * - Animation respects prefers-reduced-motion
 * - Spacing uses var(--spacing-*) tokens
 */

import '@/styles/patterns/pattern-skeleton.css';

export function PatternSkeleton() {
  return (
    <div className="pattern-skeleton" role="status" aria-label="Loading pattern">
      <div className="pattern-skeleton__header"></div>
      <div className="pattern-skeleton__content">
        <div className="pattern-skeleton__line"></div>
        <div className="pattern-skeleton__line"></div>
        <div className="pattern-skeleton__line pattern-skeleton__line--short"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
```

**CSS File:** `/src/styles/patterns/pattern-skeleton.css`

```css
/**
 * Pattern Skeleton Styles
 * 
 * Design System Compliance:
 * - All colors use CSS variables
 * - Animation respects prefers-reduced-motion
 * - Spacing uses var(--spacing-*) tokens
 */

.pattern-skeleton {
  /* Layout */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  padding: var(--spacing-8);
  
  /* Colors */
  background-color: var(--muted);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  
  /* Animation */
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

.pattern-skeleton__header {
  width: 60%;
  height: 32px;
  background-color: var(--background);
  border-radius: var(--radius);
}

.pattern-skeleton__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.pattern-skeleton__line {
  width: 100%;
  height: 16px;
  background-color: var(--background);
  border-radius: var(--radius);
}

.pattern-skeleton__line--short {
  width: 80%;
}

/* Pulse animation */
@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .pattern-skeleton {
    animation: none;
  }
}
```

---

### Phase 3: Pattern Placeholder Component

**File:** `/src/app/components/patterns/PatternPlaceholder.tsx`

**Purpose:** Reserve space before pattern loads (prevent layout shift)

**Requirements:**
- Same dimensions as actual pattern
- Minimal styling (just background)
- Use CSS variables for colors
- No animations

**Implementation:**
```tsx
/**
 * PatternPlaceholder Component
 * 
 * Reserves space for lazy-loaded patterns to prevent layout shift
 * 
 * Design System Compliance:
 * - All colors use CSS variables
 * - Spacing uses var(--spacing-*) tokens
 */

import '@/styles/patterns/pattern-placeholder.css';

interface PatternPlaceholderProps {
  minHeight?: string;
  className?: string;
}

export function PatternPlaceholder({ 
  minHeight = '400px',
  className = '' 
}: PatternPlaceholderProps) {
  return (
    <div 
      className={`pattern-placeholder ${className}`}
      style={{ minHeight }}
      aria-hidden="true"
    />
  );
}
```

**CSS File:** `/src/styles/patterns/pattern-placeholder.css`

```css
/**
 * Pattern Placeholder Styles
 * 
 * Design System Compliance:
 * - All colors use CSS variables
 */

.pattern-placeholder {
  /* Layout */
  width: 100%;
  
  /* Colors */
  background-color: var(--muted);
  border-radius: var(--radius-lg);
  
  /* No animations (just placeholder) */
}
```

---

## Patterns to Lazy-Load

**Target Patterns:** 8-12 below-the-fold patterns

**High Priority (Always Below-Fold):**
1. **TestimonialPattern** — Client testimonials section
2. **FAQSection** — FAQ accordion section
3. **CTASection** — Call-to-action sections
4. **RelatedContent** — Related posts/projects section
5. **NewsletterSignup** — Newsletter subscription form
6. **SocialProofPattern** — Social proof section

**Medium Priority (Sometimes Below-Fold):**
7. **FeatureComparisonPattern** — Feature comparison tables
8. **PricingTablePattern** — Pricing cards/tables
9. **TimelinePattern** — History/process timeline
10. **StatsGrid** — Statistics grid (if not hero)

**Low Priority (Usually Above-Fold, but could be lazy):**
11. **PostCard** — Blog post cards (grid lazy-loading)
12. **ServicesCard** — Services cards (grid lazy-loading)

---

## Testing Strategy

### Test 1: Intersection Observer Functionality ✅

**Goal:** Verify patterns load when entering viewport

**Test Cases:**
1. Pattern not visible initially → not loaded
2. Scroll to pattern → pattern loads
3. Pattern loads before fully visible (200px margin)
4. Observer disconnects after load

**Success Criteria:**
- ✅ Pattern doesn't load when off-screen
- ✅ Pattern loads when scrolling near
- ✅ Observer disconnects after load

### Test 2: Fast Connection Preloading ✅

**Goal:** Verify patterns preload on fast connections

**Test Conditions:**
- Connection: 4G or faster
- Network Info API available

**Success Criteria:**
- ✅ Pattern loads immediately on 4G
- ✅ Pattern waits for visibility on 3G
- ✅ Fallback works if Network Info API unavailable

### Test 3: Loading States ✅

**Goal:** Verify loading skeleton and placeholder work

**Test Cases:**
1. Initial state shows placeholder
2. Loading state shows skeleton
3. Loaded state shows actual pattern
4. Error state shows error message

**Success Criteria:**
- ✅ No layout shift (placeholder reserves space)
- ✅ Smooth transition between states
- ✅ Skeleton animation respects reduced motion

### Test 4: SSR Compatibility ✅

**Goal:** Verify hook doesn't break server-side rendering

**Test Cases:**
1. Hook doesn't error on server
2. Pattern renders on client
3. No hydration mismatches

**Success Criteria:**
- ✅ No SSR errors
- ✅ Client renders correctly
- ✅ No console warnings

### Test 5: Performance Measurement ✅

**Goal:** Verify lazy-loading improves performance

**Metrics to Measure:**
- Initial bundle size (before pattern loads)
- Total bundle size (after pattern loads)
- FCP (First Contentful Paint)
- LCP (Largest Contentful Paint)

**Expected Results:**
- ✅ 5-10% smaller initial bundle
- ✅ Same or better FCP
- ✅ Better performance on slow connections

### Test 6: Design System Compliance ✅

**Goal:** Verify all components use CSS variables

**Checks:**
- ✅ PatternSkeleton uses var(--muted), var(--background)
- ✅ PatternPlaceholder uses var(--muted)
- ✅ All spacing uses var(--spacing-*)
- ✅ No hardcoded colors, fonts, or spacing
- ✅ Animation respects prefers-reduced-motion

---

## Design System Compliance Checklist

**Hook Implementation:**
- [ ] ✅ No inline styles (hook only provides logic)
- [ ] ✅ CSS files use CSS variables exclusively
- [ ] ✅ Animation respects prefers-reduced-motion

**PatternSkeleton Component:**
- [ ] ✅ Background uses var(--muted)
- [ ] ✅ Content uses var(--background)
- [ ] ✅ Border uses var(--border)
- [ ] ✅ Border radius uses var(--radius-lg)
- [ ] ✅ Spacing uses var(--spacing-*) tokens
- [ ] ✅ Animation respects @media (prefers-reduced-motion: reduce)
- [ ] ✅ NO hardcoded colors, fonts, or spacing

**PatternPlaceholder Component:**
- [ ] ✅ Background uses var(--muted)
- [ ] ✅ Border radius uses var(--radius-lg)
- [ ] ✅ NO hardcoded colors or spacing

**User Control:**
Users can customize skeleton/placeholder by editing:
- `/src/styles/theme-light.css` (colors)
- `/src/styles/theme-dark.css` (dark mode colors)
- `/src/styles/theme-base.css` (spacing, border radius)

---

## Success Criteria

**Task 4.1 complete when:**

- [ ] ✅ useLazyPattern hook implemented
- [ ] ✅ Hook uses Intersection Observer API
- [ ] ✅ Fast connection preloading works
- [ ] ✅ SSR compatible (no errors)
- [ ] ✅ PatternSkeleton component created
- [ ] ✅ PatternPlaceholder component created
- [ ] ✅ All components use CSS variables (100%)
- [ ] ✅ Animation respects prefers-reduced-motion
- [ ] ✅ Hook tested on sample pattern
- [ ] ✅ Documentation complete

---

## Timeline

**Task 4.1 Duration:** 4-6 hours

**Breakdown:**
- Phase 1: Core hook implementation (2-3 hours)
- Phase 2: PatternSkeleton component (1 hour)
- Phase 3: PatternPlaceholder component (0.5 hour)
- Testing and verification (0.5-1 hour)
- Documentation (0.5-1 hour)

---

## Next Steps

**After Task 4.1 Complete:**

**Task 4.2: Update Pattern Components** (6-8 hours)
- Update 8-12 pattern components with lazy-loading
- Add loading states where needed
- Test all patterns

**Task 4.3: Test on Slow Connections** (2-4 hours)
- Test with 3G throttle
- Verify no layout shifts
- Measure performance improvements

**Task 4.4: Create Week 2 Progress Report** (2 hours)
- Document Step 3 + Step 4 results
- Calculate cumulative improvements
- Create final Week 2 report

---

**Task 4.1 Status:** 📋 **READY TO START**  
**Next Action:** Implement core hook  
**Expected Duration:** 4-6 hours

🎯 **READY TO IMPLEMENT LAZY-LOADING!** 🎯
