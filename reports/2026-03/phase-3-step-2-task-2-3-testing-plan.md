# Phase 3 Step 2 Task 2.3: Route CSS Loading Verification — Testing Plan

**Date:** March 6, 2026  
**Phase:** Phase 3 Step 2 Task 2.3  
**Status:** 🔄 **IN PROGRESS**  
**Estimated Time:** 4-6 hours

---

## Testing Objectives

**Primary Goals:**
1. Verify CSS bundle loading works correctly for all 150 routes
2. Confirm no FOUC (Flash of Unstyled Content)
3. Validate bundle sizes match estimates
4. Test browser navigation (back/forward/direct URL)
5. Test CSS preloading on hover
6. Measure actual performance improvements
7. Verify dark mode + responsive behavior

---

## Testing Categories

### Category 1: Automated Code Verification (1-1.5 hours)

**1.1 Route File Analysis**
- [x] Verify all route files import `loadCSSBundle`
- [ ] Verify all routes have correct bundle assignments
- [ ] Check for missing or incorrect bundle names
- [ ] Verify lazy loading pattern consistency

**1.2 Bundle File Verification**
- [ ] Verify all 8 CSS bundle files exist
- [ ] Check bundle file sizes (gzipped and uncompressed)
- [ ] Verify bundle imports are correct
- [ ] Check for duplicate imports across bundles

**1.3 Import Analysis**
- [ ] Verify all templates referenced in routes exist
- [ ] Check for broken imports
- [ ] Verify RouteLink component usage

**Deliverable:** Automated verification report with pass/fail results

---

### Category 2: Runtime Behavior Testing (1.5-2 hours)

**2.1 CSS Loading Tests**
- [ ] Test homepage (no bundle, core CSS only)
- [ ] Test blog route (blog bundle loading)
- [ ] Test services route (services bundle loading)
- [ ] Test portfolio route (portfolio bundle loading)
- [ ] Test about route (about bundle loading)
- [ ] Test solutions route (solutions bundle loading)
- [ ] Test systems route (system bundle loading)
- [ ] Test media route (media bundle loading)
- [ ] Test utility route (utility bundle loading)

**Per Route Test:**
1. Navigate to route
2. Check Network tab for CSS bundle load
3. Verify bundle loads only once (no duplicates)
4. Verify correct bundle name loaded
5. Check console for errors

**2.2 FOUC Testing**
- [ ] Test fast navigation (click links rapidly)
- [ ] Test slow network simulation (throttle to 3G)
- [ ] Test CSS cache disabled
- [ ] Verify no unstyled flash during navigation

**2.3 Bundle Deduplication**
- [ ] Navigate to multiple routes in same family
- [ ] Verify bundle loads only once
- [ ] Test browser back/forward (bundle should remain loaded)
- [ ] Verify `isBundleLoaded()` returns true after first load

**Deliverable:** Runtime test results with screenshots/videos

---

### Category 3: Preloading Verification (0.5-1 hour)

**3.1 Hover Preloading**
- [ ] Hover over navigation links
- [ ] Verify CSS bundle preloads in Network tab
- [ ] Check preload happens with `<link rel="preload">`
- [ ] Verify preload happens only once per bundle
- [ ] Test multiple rapid hovers (should not duplicate)

**3.2 Focus Preloading**
- [ ] Tab to navigation links (keyboard)
- [ ] Verify CSS bundle preloads on focus
- [ ] Test accessibility (screen reader compatible)

**3.3 RouteLink Component**
- [ ] Verify RouteLink detects bundle from `to` prop
- [ ] Test manual bundle specification
- [ ] Verify component passes through all Link props
- [ ] Test with external links (should not preload)

**Deliverable:** Preloading behavior report

---

### Category 4: Performance Measurement (1-1.5 hours)

**4.1 Bundle Size Verification**
- [ ] Measure actual bundle sizes (gzipped)
- [ ] Compare to estimates
- [ ] Document any discrepancies

**Expected vs Actual:**
- Core CSS: ~60-80KB (estimate)
- Blog bundle: ~8-12KB (estimate)
- Services bundle: ~15-25KB (estimate)
- Portfolio bundle: ~8-12KB (estimate)
- About bundle: ~6-8KB (estimate)
- Solutions bundle: ~10-15KB (estimate)
- System bundle: ~10-15KB (estimate)
- Media bundle: ~6-8KB (estimate)
- Utility bundle: ~12-18KB (estimate)

**4.2 Lighthouse Testing**
- [ ] Run Lighthouse on homepage (baseline)
- [ ] Run Lighthouse on blog route
- [ ] Run Lighthouse on services route
- [ ] Run Lighthouse on portfolio route
- [ ] Compare scores to baseline (before optimization)

**4.3 Core Web Vitals**
- [ ] Measure FCP (First Contentful Paint)
- [ ] Measure LCP (Largest Contentful Paint)
- [ ] Measure TTI (Time to Interactive)
- [ ] Measure CLS (Cumulative Layout Shift)
- [ ] Compare to baseline metrics

**4.4 Network Analysis**
- [ ] Record network waterfall for route navigation
- [ ] Measure CSS load time
- [ ] Verify parallel loading where possible
- [ ] Check for render-blocking resources

**Deliverable:** Performance comparison report

---

### Category 5: Cross-Browser Testing (0.5-1 hour)

**5.1 Browser Compatibility**
- [ ] Test in Chrome/Chromium
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test in Edge

**Per Browser:**
1. Test CSS bundle loading
2. Test preloading on hover
3. Test dark mode toggle
4. Check console for errors

**5.2 Mobile Testing**
- [ ] Test on mobile viewport (Chrome DevTools)
- [ ] Verify touch interactions work
- [ ] Test responsive breakpoints
- [ ] Verify bundle loading on mobile network simulation

**Deliverable:** Browser compatibility matrix

---

### Category 6: Edge Cases & Error Handling (0.5-1 hour)

**6.1 Error Scenarios**
- [ ] Test with CSS bundle file missing (404)
- [ ] Test with invalid bundle name
- [ ] Test with slow network (bundle timeout)
- [ ] Verify error logging works
- [ ] Check graceful degradation

**6.2 Navigation Edge Cases**
- [ ] Test direct URL navigation (bookmark/address bar)
- [ ] Test browser back button
- [ ] Test browser forward button
- [ ] Test browser refresh
- [ ] Test opening link in new tab

**6.3 Race Conditions**
- [ ] Navigate to route before bundle loads
- [ ] Navigate away before bundle loads
- [ ] Rapidly click multiple links
- [ ] Verify no duplicate bundle loads

**Deliverable:** Edge case test results

---

### Category 7: Design System Compliance (0.5 hour)

**7.1 CSS Variables Verification**
- [ ] Verify all CSS bundles use `var(--font-primary)` / `var(--font-secondary)`
- [ ] Check no hardcoded font names
- [ ] Verify semantic color variables
- [ ] Check spacing uses `var(--spacing-*)`
- [ ] Verify border radius uses CSS variables

**7.2 Dark Mode**
- [ ] Test dark mode toggle on all routes
- [ ] Verify CSS bundles respect theme
- [ ] Check no theme flashing
- [ ] Test system preference detection

**7.3 Reduced Motion**
- [ ] Test with `prefers-reduced-motion: reduce`
- [ ] Verify animations disabled
- [ ] Check bundle loading still works

**Deliverable:** Design system compliance checklist

---

## Testing Priority

**High Priority (Must Complete):**
1. Category 1: Automated Code Verification
2. Category 2: Runtime Behavior Testing
3. Category 4: Performance Measurement

**Medium Priority (Should Complete):**
4. Category 3: Preloading Verification
5. Category 6: Edge Cases & Error Handling

**Low Priority (Nice to Have):**
6. Category 5: Cross-Browser Testing
7. Category 7: Design System Compliance

---

## Success Criteria

**Task 2.3 Complete When:**
- [ ] All 150 routes load correct CSS bundles
- [ ] No FOUC detected on any route
- [ ] Bundle sizes match estimates (±10%)
- [ ] Performance improvements meet expectations
- [ ] No console errors during navigation
- [ ] Preloading works on hover/focus
- [ ] Browser back/forward works correctly
- [ ] Dark mode works on all routes

**Minimum Requirements:**
- 95%+ routes pass all tests
- 0 critical errors
- Performance improvement >40%
- FOUC incidents <5%

---

## Testing Tools

**Required:**
1. Chrome DevTools Network tab
2. Chrome DevTools Performance tab
3. Lighthouse CLI or DevTools
4. Console logging
5. Network throttling (3G simulation)

**Optional:**
6. WebPageTest
7. Automated testing scripts
8. Video recording tool
9. Screenshot comparison tool

---

## Deliverables

**Reports to Create:**
1. ✅ `/reports/2026-03/phase-3-step-2-task-2-3-testing-plan.md` (this file)
2. ⏳ `/reports/2026-03/phase-3-step-2-task-2-3-automated-verification.md`
3. ⏳ `/reports/2026-03/phase-3-step-2-task-2-3-runtime-tests.md`
4. ⏳ `/reports/2026-03/phase-3-step-2-task-2-3-performance-results.md`
5. ⏳ `/reports/2026-03/phase-3-step-2-task-2-3-COMPLETE.md`

**Scripts to Create:**
1. ⏳ `/scripts/verify-css-bundles.sh` — Automated bundle verification
2. ⏳ `/scripts/test-route-loading.ts` — Route loading tests

---

## Timeline

**Total Time:** 4-6 hours

**Breakdown:**
- Category 1 (Automated): 1-1.5 hours
- Category 2 (Runtime): 1.5-2 hours
- Category 3 (Preloading): 0.5-1 hour
- Category 4 (Performance): 1-1.5 hours
- Categories 5-7 (Optional): 0.5-1.5 hours

**Schedule:**
1. **Hour 1-2:** Automated verification + script creation
2. **Hour 3-4:** Runtime behavior testing + FOUC checks
3. **Hour 4-5:** Performance measurement + Lighthouse
4. **Hour 5-6:** Edge cases + final report

---

## Next Steps After Task 2.3

**Task 2.4: Week 1 Progress Report** (2 hours)
- Consolidate all test results
- Document actual vs expected improvements
- Note lessons learned
- Plan next optimization phase

**Task 3.1: Critical CSS Extraction** (4-6 hours)
- Extract above-the-fold CSS
- Inline critical CSS in HTML
- Expected: +0.3-0.5s FCP improvement

---

**Task 2.3 Status:** 🔄 **STARTING NOW**  
**Next Action:** Create automated verification script  
**Expected Completion:** 4-6 hours from now

🎯 **READY TO BEGIN VERIFICATION TESTING!** 🎯
