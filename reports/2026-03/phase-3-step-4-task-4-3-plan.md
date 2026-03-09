# Phase 3 Step 4 Task 4.3: Test Lazy-Loading on Slow Connections — Plan

**Date:** March 6, 2026  
**Phase:** Phase 3 Step 4 Task 4.3  
**Status:** 📋 **IMPLEMENTATION PLAN**  
**Duration:** 2-4 hours estimated

---

## Objective

Test lazy-loading patterns on slow connections, update 10-15 high-traffic templates, and verify no layout shifts or regressions. Measure actual bundle size reduction and performance improvements.

**Expected Impact:**
- 5-10% bundle size reduction measured
- Faster FCP on updated templates (+0.1-0.2s)
- Progressive enhancement validated
- Better UX on slow connections confirmed

---

## Templates to Update

### High Priority (20 templates identified with FAQSection)

**Blog Templates (7 templates):**
1. **SinglePostTemplate** — Blog post detail (highest traffic)
2. **BlogIndexTemplate** — Blog archive
3. **CategoryArchiveTemplate** — Category archives
4. **TagArchiveTemplate** — Tag archives

**Service Templates (3 templates):**
5. **ServicesTemplate** — Services landing (high traffic)
6. **ServiceDetailTemplate** — Service detail pages
7. **SecurityServiceTemplate** — Security service

**About Templates (5 templates):**
8. **AboutTemplate** — About page
9. **TeamTemplate** — Team page
10. **AboutProcessTemplate** — Process page
11. **AboutCultureTemplate** — Culture page
12. **AboutHistoryTemplate** — History page

**Other High-Traffic (5 templates):**
13. **FrontPageTemplate** — Homepage (highest priority!)
14. **ContactPageTemplate** — Contact page
15. **PortfolioArchiveTemplate** — Portfolio archive
16. **SolutionDetailTemplate** — Solution detail
17. **WhyChooseUsTemplate** — Why choose us

**Total:** 20 templates using FAQSection (can update all!)

---

## Pattern Usage Analysis

**From file_search results:**

| Pattern | Current Usage | Lazy Wrapper Available | Update Priority |
|---------|---------------|------------------------|-----------------|
| **FAQSection** | 20 templates | ✅ LazyFAQSection | HIGH |
| **FunkyCTA** | 20+ templates | ✅ LazyCTASection | HIGH |
| **TestimonialGrid** | 10+ templates | ✅ LazyTestimonialGrid | HIGH |
| **SocialProof** | 5+ templates | ✅ LazySocialProof | MEDIUM |
| **PricingTable** | 3+ templates | ✅ LazyPricingTable | MEDIUM |
| **FeatureComparison** | 2+ templates | ✅ LazyFeatureComparison | LOW |

---

## Update Strategy

### Phase 1: Update Import Statements ✅

**Before:**
```tsx
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
```

**After:**
```tsx
import { LazyFAQSection } from '../patterns/lazy/LazyFAQSection';
import { LazyCTASection } from '../patterns/lazy/LazyCTASection';
import { LazyTestimonialGrid } from '../patterns/lazy/LazyTestimonialGrid';
```

### Phase 2: Update Component Usage ✅

**Before:**
```tsx
<FAQSection faqs={postFAQs} />
<FunkyCTA 
  title="Ready to start?"
  description="Get in touch"
  primaryButtonText="Contact Us"
  primaryButtonPage="contact"
/>
```

**After:**
```tsx
<LazyFAQSection faqs={postFAQs} />
<LazyCTASection 
  title="Ready to start?"
  description="Get in touch"
  primaryButtonText="Contact Us"
  primaryButtonPage="contact"
/>
```

**Note:** FunkyCTA → LazyCTASection (wrapper wraps CTASection, not FunkyCTA)

### Phase 3: Verify No Breaking Changes ✅

**Checklist per template:**
- [ ] Import statements updated
- [ ] Component names updated
- [ ] Props unchanged (lazy wrappers pass through)
- [ ] No TypeScript errors
- [ ] Template compiles successfully

---

## Testing Strategy

### Test 1: Visual Regression Testing ✅

**Goal:** Verify templates look identical after lazy-loading

**Method:**
1. Load template in browser
2. Compare with original (before lazy-loading)
3. Check all states (loading, loaded)
4. Verify styling matches exactly

**Success Criteria:**
- ✅ No visual differences
- ✅ All patterns render correctly
- ✅ Loading states smooth

### Test 2: Slow Connection Testing (3G) ✅

**Goal:** Verify good UX on slow connections

**Method:**
1. Open Chrome DevTools
2. Network tab → Throttling → "Slow 3G"
3. Load template
4. Scroll to lazy patterns
5. Observe loading behavior

**Success Criteria:**
- ✅ Placeholder shows initially (reserves space)
- ✅ Skeleton shows while loading (animated)
- ✅ Pattern loads when scrolling near (200px margin)
- ✅ No blank space during loading
- ✅ Smooth loading experience

### Test 3: Layout Shift Measurement (CLS) ✅

**Goal:** Verify no layout shift when patterns load

**Method:**
1. Open Chrome DevTools
2. Run Lighthouse audit (Performance)
3. Check Cumulative Layout Shift (CLS) metric
4. Scroll slowly to lazy patterns
5. Watch for layout jumps

**Success Criteria:**
- ✅ CLS <0.01 (target: <0.1 for "Good")
- ✅ No visible layout jumps
- ✅ Placeholder reserves correct space

### Test 4: Fast Connection Testing (4G) ✅

**Goal:** Verify preloading works on fast connections

**Method:**
1. Disable throttling (fast connection)
2. Load template
3. Check Network tab
4. Verify patterns preload immediately

**Success Criteria:**
- ✅ Patterns preload immediately (4G detected)
- ✅ No unnecessary delay
- ✅ Good UX on fast connections

### Test 5: Bundle Size Measurement ✅

**Goal:** Measure actual bundle size reduction

**Method:**
1. Build production bundle (before lazy-loading)
2. Note initial bundle size
3. Update templates with lazy patterns
4. Build production bundle (after lazy-loading)
5. Compare sizes

**Commands:**
```bash
# Before
npm run build
# Check dist/assets/*.js size

# After (update templates)
npm run build
# Check dist/assets/*.js size (should be smaller)
```

**Success Criteria:**
- ✅ 5-10% bundle reduction
- ✅ Initial bundle smaller
- ✅ Patterns load on-demand

### Test 6: Performance Metrics (Lighthouse) ✅

**Goal:** Verify performance improvements

**Method:**
1. Run Lighthouse before lazy-loading
2. Run Lighthouse after lazy-loading
3. Compare metrics (FCP, LCP, TTI, CLS)

**Success Criteria:**
- ✅ FCP improvement (+0.1-0.2s)
- ✅ TTI improvement (+0.2-0.3s)
- ✅ CLS <0.01 (no regression)
- ✅ Overall performance score increase

---

## Automated Testing Script

**Create:** `/scripts/test-lazy-loading.sh`

**Purpose:** Automated testing script for lazy-loading verification

```bash
#!/bin/bash

# Test Lazy-Loading Implementation
# Tests slow connection, layout shift, bundle size

echo "🧪 Testing Lazy-Loading Implementation..."

# Test 1: Check for lazy imports
echo "✅ Test 1: Checking lazy pattern imports..."
grep -r "from '../patterns/lazy/" src/app/components/templates/ | wc -l

# Test 2: Build production bundle
echo "✅ Test 2: Building production bundle..."
npm run build

# Test 3: Measure bundle size
echo "✅ Test 3: Measuring bundle size..."
du -sh dist/assets/*.js | sort -h

# Test 4: Check for FOUC
echo "✅ Test 4: Checking for FOUC (manual test required)..."
echo "Open browser and test slow connection (3G)"

echo "🎯 Testing complete!"
```

---

## Expected Bundle Size Impact

### Before Lazy-Loading

**Initial Bundle (52KB gzipped):**
- Critical CSS: 1.7KB
- Base styles: 5KB
- Route-specific CSS: 10-15KB
- Pattern CSS: 20-25KB (FAQSection, CTA, Testimonials, etc.)
- Components JS: 10-15KB

**Total:** ~52KB gzipped

### After Lazy-Loading

**Initial Bundle (47-50KB gzipped):**
- Critical CSS: 1.7KB (same)
- Base styles: 5KB (same)
- Route-specific CSS: 10-15KB (same)
- Pattern CSS: 15-20KB (8 patterns removed → lazy-loaded)
- Components JS: 10-15KB (same)

**Lazy-Loaded on Demand:**
- FAQSection: ~4KB gzipped
- CTASection: ~2KB gzipped
- TestimonialGrid: ~3KB gzipped
- SocialProof: ~3KB gzipped
- PricingTable: ~3KB gzipped
- Others: ~5KB gzipped

**Total Initial:** ~47-50KB gzipped (5-10% reduction ✅)  
**Total On-Demand:** ~20KB gzipped (loads progressively)

**Net Improvement:**
- Initial load: 5-10% faster
- FCP: +0.1-0.2s improvement
- Better UX on slow connections

---

## Template Update Checklist

**For each template:**

- [ ] ✅ Read template file
- [ ] ✅ Identify patterns to lazy-load (FAQSection, CTA, Testimonials, etc.)
- [ ] ✅ Update import statements (add lazy prefix)
- [ ] ✅ Update component names (Lazy prefix)
- [ ] ✅ Verify props unchanged
- [ ] ✅ Check TypeScript types
- [ ] ✅ Build successfully
- [ ] ✅ Visual regression test
- [ ] ✅ Slow connection test (3G)
- [ ] ✅ Layout shift test (CLS)
- [ ] ✅ Fast connection test (4G)

---

## FunkyCTA → LazyCTASection Migration

**Important Note:** FunkyCTA is a custom CTA pattern, not the base CTASection.

**Options:**

**Option 1: Create LazyFunkyCTA wrapper**
```tsx
// LazyFunkyCTA.tsx
const FunkyCTA = lazy(() => import('../FunkyCTA'));
export function LazyFunkyCTA(props) { ... }
```

**Option 2: Use LazyCTASection with FunkyCTA props**
```tsx
// If FunkyCTA uses CTASection internally
<LazyCTASection {...funkyCtaProps} />
```

**Option 3: Keep FunkyCTA eager (if above-the-fold)**
```tsx
// Don't lazy-load if always visible
<FunkyCTA {...props} />
```

**Decision:** Check FunkyCTA usage patterns, create LazyFunkyCTA if mostly below-fold

---

## Success Criteria

**Task 4.3 complete when:**

- [ ] ✅ 10-15 templates updated with lazy patterns
- [ ] ✅ All templates compile successfully
- [ ] ✅ Visual regression tests pass (0 differences)
- [ ] ✅ Slow connection tests pass (good UX)
- [ ] ✅ Layout shift tests pass (CLS <0.01)
- [ ] ✅ Fast connection tests pass (preloading works)
- [ ] ✅ Bundle size reduced by 5-10% (measured)
- [ ] ✅ Performance metrics improved (Lighthouse)
- [ ] ✅ Verification report created
- [ ] ✅ Documentation updated

---

## Timeline

**Task 4.3 Duration:** 2-4 hours

**Breakdown:**
- Template updates (15-20 templates): 1-1.5h
- Slow connection testing: 0.5h
- Layout shift testing: 0.5h
- Bundle size measurement: 0.5h
- Performance measurement: 0.5h
- Verification report: 0.5h

---

## Deliverables

**1. Updated Templates** (15-20 files)
- Blog templates with lazy patterns
- Service templates with lazy patterns
- About templates with lazy patterns
- Homepage with lazy patterns

**2. LazyFunkyCTA Wrapper** (if needed)
- Lazy wrapper for FunkyCTA pattern

**3. Testing Script** (`/scripts/test-lazy-loading.sh`)
- Automated testing script

**4. Verification Report** (`phase-3-step-4-task-4-3-complete.md`)
- Test results
- Bundle size measurements
- Performance metrics
- Before/after screenshots

---

## Next Steps

**After Task 4.3 Complete:**

**Task 4.4: Create Week 2 Progress Report** (2 hours)
- Document Step 3 + Step 4 results
- Calculate cumulative improvements
- Create final Week 2 report
- Update CHANGELOG and task lists

---

**Task 4.3 Status:** 📋 **READY TO START**  
**Next Action:** Update FrontPageTemplate (homepage)  
**Expected Duration:** 2-4 hours

🎯 **READY TO TEST LAZY-LOADING!** 🎯
