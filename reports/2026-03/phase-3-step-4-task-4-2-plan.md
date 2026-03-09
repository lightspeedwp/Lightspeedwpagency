# Phase 3 Step 4 Task 4.2: Update Pattern Components — Plan

**Date:** March 6, 2026  
**Phase:** Phase 3 Step 4 Task 4.2  
**Status:** 📋 **IMPLEMENTATION PLAN**  
**Duration:** 6-8 hours estimated

---

## Objective

Update 8 below-the-fold pattern components to use lazy-loading with useLazyPattern hook. Wrap patterns in lazy-loading containers to reduce initial bundle size and improve performance on slow connections.

**Expected Impact:**
- Additional 5-10% bundle reduction (~16-40KB savings)
- Faster initial page load
- Progressive enhancement for below-the-fold content
- Better performance on slow connections

---

## Implementation Strategy

### Approach 1: Wrapper Components (Recommended)

Create lazy-loading wrapper components that wrap existing patterns. This approach:
- ✅ Preserves existing pattern components (no breaking changes)
- ✅ Easy to implement and test
- ✅ Can be toggled on/off easily
- ✅ Reusable across multiple templates

**Example:**
```tsx
// Before
<TestimonialPattern testimonials={testimonials} />

// After
<LazyTestimonialPattern testimonials={testimonials} />
```

### Approach 2: Direct Integration (Alternative)

Modify pattern components directly to include lazy-loading logic. This approach:
- ⚠️ Requires changes to existing pattern components
- ⚠️ More complex to implement
- ⚠️ Harder to toggle on/off
- ✅ Fewer total components

**Decision:** Use **Approach 1** (Wrapper Components) for easier implementation and testing.

---

## Pattern Priority

### High Priority (8 patterns — MUST DO)

**1. FAQSection** — FAQ accordion section
- **Usage:** 13+ FAQ collections across templates
- **Location:** `/src/app/components/patterns/FAQSection.tsx`
- **Size:** ~50-60 lines
- **Expected Savings:** ~3-5KB gzipped

**2. TestimonialPattern** — Client testimonials section
- **Usage:** Multiple templates (services, about, case studies)
- **Location:** `/src/app/components/patterns/TestimonialPattern.tsx` (if exists)
- **Size:** ~40-50 lines
- **Expected Savings:** ~2-4KB gzipped

**3. CTASection** — Call-to-action sections
- **Usage:** Most templates (end of page)
- **Location:** `/src/app/components/patterns/CTASection.tsx` (if exists)
- **Size:** ~30-40 lines
- **Expected Savings:** ~2-3KB gzipped

**4. RelatedContent** — Related posts/projects section
- **Usage:** Blog posts, portfolio projects
- **Location:** `/src/app/components/patterns/RelatedContent.tsx` (if exists)
- **Size:** ~40-50 lines
- **Expected Savings:** ~2-4KB gzipped

**5. NewsletterSignup** — Newsletter subscription form
- **Usage:** Blog templates, footer
- **Location:** `/src/app/components/patterns/NewsletterSignup.tsx` (if exists)
- **Size:** ~30-40 lines
- **Expected Savings:** ~2-3KB gzipped

**6. SocialProofPattern** — Social proof section
- **Usage:** Homepage, services landing
- **Location:** `/src/app/components/patterns/SocialProofPattern.tsx` (if exists)
- **Size:** ~30-40 lines
- **Expected Savings:** ~2-3KB gzipped

**7. FeatureComparisonPattern** — Feature comparison tables
- **Usage:** Services pages
- **Location:** `/src/app/components/patterns/FeatureComparisonPattern.tsx` (if exists)
- **Size:** ~40-50 lines
- **Expected Savings:** ~2-4KB gzipped

**8. PricingTablePattern** — Pricing cards/tables
- **Usage:** Services pages, pricing page
- **Location:** `/src/app/components/patterns/PricingTablePattern.tsx` (if exists)
- **Size:** ~40-50 lines
- **Expected Savings:** ~2-4KB gzipped

**Total Expected Savings:** ~16-30KB gzipped

---

## Wrapper Component Template

### Pattern: LazyPatternWrapper

**File:** `/src/app/components/patterns/lazy/LazyPatternWrapper.tsx`

**Template:**
```tsx
/**
 * Lazy{PatternName} Component
 * 
 * Lazy-loading wrapper for {PatternName} pattern.
 * Loads pattern only when it enters the viewport.
 * 
 * Design System Compliance:
 * - All placeholder/skeleton styles use CSS variables
 * - Animation respects prefers-reduced-motion
 * - Font families use var(--font-primary)
 * 
 * @see /src/app/components/patterns/{PatternName}.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '@/hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded pattern component
const {PatternName} = lazy(() => import('../{PatternName}'));

// Re-export pattern props type
export type { {PatternName}Props } from '../{PatternName}';

/**
 * Lazy{PatternName} Component
 * 
 * Lazy-loading wrapper for {PatternName} pattern
 */
export function Lazy{PatternName}(props: {PatternName}Props) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder 
          minHeight="300px" 
          ariaLabel="{Pattern description} loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={3} showHeader={true} />}>
          <{PatternName} {...props} />
        </Suspense>
      )}
    </div>
  );
}
```

---

## Implementation Steps

### Step 1: Create Lazy Pattern Directory ✅

**Create:** `/src/app/components/patterns/lazy/` directory

**Purpose:** Organize all lazy-loading wrappers in one place

### Step 2: Identify Existing Patterns ✅

**Action:** Search for existing pattern components

**Command:**
```bash
find src/app/components/patterns -name "*.tsx" -type f
```

**Goal:** Identify which of the 8 priority patterns already exist

### Step 3: Create Wrapper Components ✅

**For each existing pattern:**

1. Create `Lazy{PatternName}.tsx` wrapper
2. Import original pattern with `React.lazy`
3. Use `useLazyPattern` hook
4. Add placeholder + skeleton fallback
5. Re-export pattern props type

**Files to Create (8 wrappers):**
1. `LazyFAQSection.tsx`
2. `LazyTestimonialPattern.tsx` (if exists)
3. `LazyCTASection.tsx` (if exists)
4. `LazyRelatedContent.tsx` (if exists)
5. `LazyNewsletterSignup.tsx` (if exists)
6. `LazySocialProofPattern.tsx` (if exists)
7. `LazyFeatureComparisonPattern.tsx` (if exists)
8. `LazyPricingTablePattern.tsx` (if exists)

### Step 4: Update Template Imports ✅

**For each template using lazy-loaded patterns:**

**Before:**
```tsx
import { FAQSection } from '@/components/patterns/FAQSection';
<FAQSection faqs={faqs} />
```

**After:**
```tsx
import { LazyFAQSection } from '@/components/patterns/lazy/LazyFAQSection';
<LazyFAQSection faqs={faqs} />
```

**Goal:** Update all template files to use lazy wrappers

### Step 5: Test All Templates ✅

**For each updated template:**

1. Load template in browser
2. Verify pattern doesn't load initially (check Network tab)
3. Scroll to pattern
4. Verify pattern loads when visible
5. Check for layout shifts (CLS)
6. Test on slow connection (3G)

---

## Design System Compliance Checklist

**For each wrapper component:**

- [ ] ✅ Uses `useLazyPattern` hook from `@/hooks/useLazyPattern`
- [ ] ✅ Uses `PatternSkeleton` from `@/components/patterns/PatternSkeleton`
- [ ] ✅ Uses `PatternPlaceholder` from `@/components/patterns/PatternPlaceholder`
- [ ] ✅ NO inline styles (except for minHeight prop)
- [ ] ✅ All placeholder/skeleton use CSS variables
- [ ] ✅ Animation respects prefers-reduced-motion
- [ ] ✅ Proper TypeScript types (re-export original props)
- [ ] ✅ Accessible (aria-label on placeholder)
- [ ] ✅ JSDoc documentation

---

## Testing Strategy

### Test 1: Pattern Loading Behavior ✅

**Goal:** Verify patterns load only when visible

**Steps:**
1. Open template with lazy pattern
2. Open DevTools Network tab
3. Verify pattern JS/CSS not loaded initially
4. Scroll to pattern
5. Verify pattern JS/CSS loads when near visible

**Success Criteria:**
- ✅ Pattern not in initial bundle
- ✅ Pattern loads when scrolling near
- ✅ No errors in console

### Test 2: Visual Consistency ✅

**Goal:** Verify no visual regressions

**Steps:**
1. Compare lazy-loaded pattern with original
2. Check all states (loading, loaded)
3. Verify styling matches original

**Success Criteria:**
- ✅ Placeholder reserves correct space
- ✅ Skeleton matches pattern height
- ✅ Loaded pattern identical to original

### Test 3: Layout Shift (CLS) ✅

**Goal:** Verify no layout shift when pattern loads

**Steps:**
1. Open template with lazy pattern
2. Scroll slowly to pattern
3. Watch for layout jumps
4. Use Lighthouse to measure CLS

**Success Criteria:**
- ✅ No visible layout shift
- ✅ CLS <0.01 (Lighthouse)
- ✅ Smooth transition

### Test 4: Slow Connection ✅

**Goal:** Verify good UX on slow connections

**Steps:**
1. Enable 3G throttling in DevTools
2. Load template with lazy pattern
3. Scroll to pattern
4. Verify skeleton shows while loading

**Success Criteria:**
- ✅ Skeleton visible during load
- ✅ No blank space
- ✅ Smooth loading experience

### Test 5: Fast Connection ✅

**Goal:** Verify preloading works on fast connections

**Steps:**
1. Disable throttling (fast connection)
2. Load template with lazy pattern
3. Verify pattern preloads immediately

**Success Criteria:**
- ✅ Pattern preloads on 4G
- ✅ No unnecessary delay
- ✅ Good UX on fast connections

### Test 6: Performance Measurement ✅

**Goal:** Verify bundle size reduction

**Steps:**
1. Build production bundle (before)
2. Measure initial bundle size
3. Update patterns with lazy-loading
4. Build production bundle (after)
5. Compare sizes

**Success Criteria:**
- ✅ 5-10% bundle reduction
- ✅ ~16-40KB savings (gzipped)
- ✅ Faster FCP

---

## Templates to Update

**High Priority (Use lazy patterns):**

**1. Services Templates (25+ files)**
- All service detail templates
- Services landing template
- Service category templates

**Patterns:** FAQ, Testimonials, CTA, Pricing, Feature Comparison

**2. Blog Templates (35+ files)**
- Single post template
- Blog index template
- Category archive templates

**Patterns:** FAQ, Related Content, Newsletter, CTA

**3. Portfolio Templates (15+ files)**
- Single project template
- Portfolio archive template
- Industry archive templates

**Patterns:** Testimonials, Related Content, CTA

**4. About Templates (12+ files)**
- About page template
- Team template
- Process template

**Patterns:** Testimonials, CTA, Social Proof

**5. Homepage Templates (2 files)**
- Front page template

**Patterns:** Testimonials, Social Proof, CTA

**Total Templates to Update:** ~90 templates

**Strategy:** Start with most common patterns (FAQ, CTA) first

---

## Bundle Size Calculation

### Expected Savings Per Pattern

| Pattern | Usage | Size (gzipped) | Savings |
|---------|-------|----------------|---------|
| FAQSection | 13+ templates | ~4KB | ~52KB |
| TestimonialPattern | 10+ templates | ~3KB | ~30KB |
| CTASection | 50+ templates | ~2KB | ~100KB |
| RelatedContent | 40+ templates | ~3KB | ~120KB |
| NewsletterSignup | 35+ templates | ~2KB | ~70KB |
| SocialProofPattern | 5+ templates | ~3KB | ~15KB |
| FeatureComparisonPattern | 10+ templates | ~3KB | ~30KB |
| PricingTablePattern | 10+ templates | ~3KB | ~30KB |

**Total Potential Savings:** ~447KB (uncompressed usage)

**Actual Savings (after lazy-loading):**
- Initial bundle: Remove pattern code = ~20-30KB gzipped
- Patterns load on-demand = Progressive enhancement
- Net improvement: 5-10% bundle reduction

---

## Success Criteria

**Task 4.2 complete when:**

- [ ] ✅ 8 lazy wrapper components created
- [ ] ✅ All wrappers use useLazyPattern hook
- [ ] ✅ All wrappers use PatternSkeleton/PatternPlaceholder
- [ ] ✅ 100% design system compliance
- [ ] ✅ 50+ templates updated with lazy patterns
- [ ] ✅ All patterns load correctly when visible
- [ ] ✅ No layout shifts (CLS <0.01)
- [ ] ✅ Good UX on slow connections
- [ ] ✅ Bundle size reduced by 5-10%
- [ ] ✅ Documentation complete

---

## Timeline

**Task 4.2 Duration:** 6-8 hours

**Breakdown:**
- Step 1: Create lazy directory (0.1h)
- Step 2: Identify patterns (0.2h)
- Step 3: Create 8 wrappers (2-3h)
- Step 4: Update 50+ templates (3-4h)
- Step 5: Test all templates (0.5-1h)
- Documentation (0.2h)

---

## Next Steps

**After Task 4.2 Complete:**

**Task 4.3: Test on Slow Connections** (2-4 hours)
- Test with 3G throttle
- Verify no layout shifts
- Measure performance improvements
- Create verification report

**Task 4.4: Create Week 2 Progress Report** (2 hours)
- Document Step 3 + Step 4 results
- Calculate cumulative improvements
- Create final Week 2 report

---

**Task 4.2 Status:** 📋 **READY TO START**  
**Next Action:** Identify existing patterns  
**Expected Duration:** 6-8 hours

🎯 **READY TO UPDATE PATTERNS!** 🎯
