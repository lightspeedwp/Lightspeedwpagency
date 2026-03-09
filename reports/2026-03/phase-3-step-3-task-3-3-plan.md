# Phase 3 Step 3 Task 3.3: Verify Critical CSS Implementation — Plan

**Date:** March 6, 2026  
**Phase:** Phase 3 Step 3 Task 3.3  
**Status:** 📋 **VERIFICATION PLAN**  
**Duration:** 4 hours estimated

---

## Objective

Verify critical CSS implementation works correctly across all routes. Test for FOUC, measure performance improvements, verify dark mode, test slow connections, and ensure JavaScript-disabled fallback works.

**Expected Results:**
- Zero FOUC incidents across all routes
- +0.3-0.5s FCP improvement (on top of Week 1)
- +2-3 Lighthouse points
- 100% dark mode functionality
- 100% JavaScript-disabled fallback

---

## Verification Strategy

### Phase 1: Automated Testing (1 hour)

**Script:** `/scripts/verify-critical-css.sh`

**Tests:**
1. Sample routes accessibility check (8 routes)
2. Critical CSS presence check (inline styles, preload, noscript)
3. CSS variable usage check (design system compliance)
4. Critical CSS size check (<10KB gzipped target)
5. File existence check (critical.css, bundles, loader)
6. Route bundle integration check

**Expected Results:**
- 100% pass rate on automated tests
- Zero hardcoded values found
- 100% CSS variable usage
- Size within target

### Phase 2: Manual FOUC Testing (1 hour)

**Method:** Browser testing with network throttling

**Test Routes (20 routes):**

**Homepage Routes (2):**
1. / (homepage)
2. /sitemap (sitemap)

**Blog Routes (4):**
3. /insights (blog index)
4. /insights/wordpress-block-themes (single post)
5. /insights/category/wordpress (category archive)
6. /insights/format/tutorial (post format archive)

**Services Routes (4):**
7. /services (services landing)
8. /services/wordpress-development (single service)
9. /services/ai-search-visibility (service category)
10. /services/woocommerce-development (another service)

**Portfolio Routes (3):**
11. /work (portfolio archive)
12. /work/travel-operator-website (single project)
13. /work/industry/travel-and-tourism (industry archive)

**About Routes (4):**
14. /about (about page)
15. /about/team (team page)
16. /about/process (process page)
17. /about/systems (systems hub)

**Utility Routes (3):**
18. /contact (contact page)
19. /search?q=wordpress (search results)
20. /404 (404 error page)

**Test Procedure:**
1. Open Chrome DevTools
2. Set network throttle to "Slow 3G" (400ms latency, 400kbps)
3. Navigate to route
4. Watch for unstyled flash during load
5. Record result (Pass/Fail)

**Success Criteria:**
- ✅ No visible unstyled content on any route
- ✅ Header renders immediately with styling
- ✅ Hero renders immediately with styling
- ✅ Navigation styled from first paint
- ✅ No layout shifts after CSS loads

### Phase 3: Performance Measurement (1.5 hours)

**Method:** Lighthouse testing (before/after comparison)

**Test Routes (5 routes):**
1. Homepage (/)
2. Blog index (/insights)
3. Services landing (/services)
4. Portfolio archive (/work)
5. About page (/about)

**Metrics to Measure:**
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)
- Lighthouse Performance Score

**Test Procedure:**
1. Clear browser cache
2. Run Lighthouse (desktop + mobile)
3. Record FCP, LCP, TTI, CLS, Score
4. Compare with Week 1 baseline
5. Calculate improvements

**Success Criteria:**
- ✅ +0.3-0.5s FCP improvement (desktop)
- ✅ +0.3-0.4s FCP improvement (mobile)
- ✅ +2-3 Lighthouse points (desktop)
- ✅ +2-4 Lighthouse points (mobile)
- ✅ CLS <0.01 (no layout shifts)

### Phase 4: Dark Mode Testing (0.5 hours)

**Method:** Manual toggle testing

**Test Cases:**
1. Light mode → Dark mode (runtime toggle)
2. Dark mode → Light mode (runtime toggle)
3. Auto mode (prefers-color-scheme: dark)
4. Refresh page (verify persists)
5. Navigate to new route (verify persists)

**Test Routes (5 routes):**
- Homepage
- Blog index
- Services landing
- Portfolio archive
- About page

**Success Criteria:**
- ✅ Instant theme switching (no color flash)
- ✅ Critical CSS variables apply immediately
- ✅ Non-critical CSS respects theme
- ✅ Theme persists on refresh
- ✅ Theme persists on navigation

### Phase 5: JavaScript-Disabled Testing (0.5 hours)

**Method:** Disable JavaScript in browser

**Test Routes (5 routes):**
- Homepage
- Blog index
- Services landing
- Portfolio archive
- Contact page

**Test Procedure:**
1. Open browser settings
2. Disable JavaScript
3. Navigate to route
4. Verify styles load correctly
5. Check noscript fallback works

**Success Criteria:**
- ✅ Critical CSS applies (inline)
- ✅ Non-critical CSS loads via noscript
- ✅ All styles eventually apply
- ✅ Site usable without JavaScript
- ✅ No broken layouts

### Phase 6: Slow Connection Testing (0.5 hours)

**Method:** 3G network throttling

**Test Routes (5 routes):**
- Homepage
- Blog index (large content)
- Services landing (many sections)
- Portfolio archive (images)
- Single post (long content)

**Throttle Settings:**
- Network: Slow 3G (400ms latency, 400kbps down, 400kbps up)
- CPU: 4x slowdown

**Success Criteria:**
- ✅ Above-fold content renders immediately (critical CSS)
- ✅ Below-fold content renders progressively (non-critical CSS)
- ✅ No FOUC on slow connection
- ✅ Loading states visible where appropriate
- ✅ Route bundles load on demand

---

## Testing Checklist

### Automated Tests ✅

- [ ] Run `/scripts/verify-critical-css.sh`
- [ ] Verify 100% pass rate
- [ ] Check CSS variable usage (100%)
- [ ] Verify size within target (<10KB gzipped)
- [ ] Document any failures

### Manual FOUC Tests ⏳

- [ ] Test 20 routes with Slow 3G throttle
- [ ] Record FOUC incidents (target: 0)
- [ ] Document any layout shifts
- [ ] Take screenshots if issues found

### Performance Tests ⏳

- [ ] Run Lighthouse on 5 routes (desktop + mobile)
- [ ] Compare with Week 1 baseline
- [ ] Calculate FCP improvements
- [ ] Calculate Lighthouse point improvements
- [ ] Document results

### Dark Mode Tests ⏳

- [ ] Test light → dark → light toggle
- [ ] Test auto mode (prefers-color-scheme)
- [ ] Test theme persistence on refresh
- [ ] Test theme persistence on navigation
- [ ] Document any color flashes

### JavaScript-Disabled Tests ⏳

- [ ] Disable JavaScript in browser
- [ ] Test 5 routes for style loading
- [ ] Verify noscript fallback works
- [ ] Check site usability
- [ ] Document any issues

### Slow Connection Tests ⏳

- [ ] Throttle to Slow 3G + CPU slowdown
- [ ] Test 5 routes for progressive rendering
- [ ] Verify above-fold renders first
- [ ] Check route bundle loading
- [ ] Document loading behavior

---

## Expected Results

### Automated Tests

**Expected:** 100% pass rate (20-25 tests)

**Key Checks:**
- ✅ Critical CSS inlined in HTML
- ✅ Preload for non-critical CSS
- ✅ Noscript fallback present
- ✅ 100% CSS variable usage
- ✅ Zero hardcoded values
- ✅ Size <10KB gzipped

### Manual FOUC Tests

**Expected:** 0 FOUC incidents (20/20 routes pass)

**Validation:**
- ✅ Header visible immediately
- ✅ Hero styled from first paint
- ✅ Navigation styled immediately
- ✅ No white/unstyled flash
- ✅ Typography correct from start

### Performance Tests

**Before Critical CSS (Week 1 Results):**
- FCP Desktop: 0.9s
- FCP Mobile: 1.1s
- Lighthouse Desktop: 93
- Lighthouse Mobile: 90

**After Critical CSS (Expected):**
- FCP Desktop: 0.5-0.6s (+0.3-0.4s improvement)
- FCP Mobile: 0.7-0.8s (+0.3-0.4s improvement)
- Lighthouse Desktop: 95-96 (+2-3 points)
- Lighthouse Mobile: 92-94 (+2-4 points)

**Cumulative (Baseline → Week 1 → Task 3.2):**
- FCP Desktop: 1.4s → 0.9s → 0.5-0.6s (57-64% faster)
- Lighthouse Desktop: 87 → 93 → 95-96 (+8-9 points)

### Dark Mode Tests

**Expected:** 100% pass rate (5 test cases)

**Validation:**
- ✅ No color flash on toggle
- ✅ Variables update instantly
- ✅ Critical + non-critical CSS both respect theme
- ✅ Theme persists on refresh
- ✅ Theme persists on navigation

### JavaScript-Disabled Tests

**Expected:** 100% pass rate (5 routes)

**Validation:**
- ✅ Critical CSS applies immediately (inline)
- ✅ Non-critical CSS loads via noscript
- ✅ Styles complete after load
- ✅ Site fully functional
- ✅ No broken layouts

### Slow Connection Tests

**Expected:** 100% pass rate (5 routes)

**Validation:**
- ✅ Above-fold renders instantly
- ✅ Below-fold loads progressively
- ✅ No FOUC even on slow connection
- ✅ Route bundles load on demand
- ✅ User perceives fast load

---

## Design System Compliance Verification

**Critical Requirements:**

- [ ] ✅ All fonts in critical CSS use `var(--font-primary)` or `var(--font-secondary)`
- [ ] ✅ All colors in critical CSS use semantic variables (e.g., `var(--primary)`)
- [ ] ✅ All spacing in critical CSS uses `var(--spacing-*)` tokens
- [ ] ✅ All border-radius in critical CSS uses `var(--radius*)` tokens
- [ ] ✅ NO hardcoded hex colors in critical CSS
- [ ] ✅ NO hardcoded font names in critical CSS (e.g., 'Lexend, sans-serif')
- [ ] ✅ NO hardcoded px values for spacing in critical CSS
- [ ] ✅ Dark mode works via CSS variables (no hardcoded dark colors)

**Verification Method:**

1. Run automated script: `grep` for hardcoded values
2. Manual inspection of index.html inline styles
3. Test user control: Change CSS variable in theme file, verify updates

**Expected:** 100% compliance (zero violations)

---

## Documentation Requirements

### Automated Test Results

**File:** `critical-css-automated-verification.md`

**Contents:**
- Test execution timestamp
- Pass/fail status for each test
- Total tests / passed / failed
- Success rate percentage
- Any errors or warnings

### Manual FOUC Test Results

**File:** `critical-css-fouc-testing.md`

**Contents:**
- 20 routes tested
- FOUC incidents (target: 0)
- Layout shift observations
- Screenshots (if issues found)
- Success rate

### Performance Comparison Report

**File:** `critical-css-performance-comparison.md`

**Contents:**
- Lighthouse scores (before/after)
- FCP improvements (desktop + mobile)
- LCP improvements
- CLS measurements
- Comparison charts
- Cumulative improvements

### Dark Mode Verification

**File:** `critical-css-dark-mode-verification.md`

**Contents:**
- Test cases executed
- Toggle behavior observations
- Persistence verification
- Color flash incidents (target: 0)
- Success rate

### Complete Verification Report

**File:** `phase-3-step-3-task-3-3-complete.md`

**Contents:**
- All test results summary
- Performance improvements verified
- Design system compliance verification
- Issues found and resolutions
- Lessons learned
- Next steps

---

## Success Criteria

**Task 3.3 complete when:**

- [ ] ✅ Automated tests: 100% pass rate
- [ ] ✅ FOUC tests: 0 incidents across 20 routes
- [ ] ✅ Performance tests: +0.3-0.5s FCP improvement verified
- [ ] ✅ Lighthouse tests: +2-3 points verified
- [ ] ✅ Dark mode tests: 100% pass rate
- [ ] ✅ JavaScript-disabled tests: 100% pass rate
- [ ] ✅ Slow connection tests: 100% pass rate
- [ ] ✅ Design system compliance: 100%
- [ ] ✅ All documentation complete

---

## Timeline

**Task 3.3 Duration:** 4 hours

**Breakdown:**
- Phase 1: Automated testing (1 hour)
- Phase 2: Manual FOUC testing (1 hour)
- Phase 3: Performance measurement (1.5 hours)
- Phase 4: Dark mode testing (0.5 hours)
- Phase 5: JavaScript-disabled testing (0.5 hours)
- Phase 6: Slow connection testing (0.5 hours)
- Documentation (1 hour included above)

**Note:** Phases can overlap if multiple people testing

---

## Next Steps

**After Task 3.3 Complete:**

**Immediate:**
- Create Step 3 complete report
- Document any issues found
- Calculate cumulative Week 2 improvements

**Short-Term (Step 4):**
- **Step 4: Pattern Lazy-Loading** (12-18 hours)
- Task 4.1: Implement `useLazyPattern` hook (4-6h)
- Task 4.2: Update 8-12 pattern components (6-8h)
- Task 4.3: Test on slow connections (2-4h)
- Task 4.4: Create Week 2 progress report (2h)

**Expected Impact (Step 4):**
- Additional 5-10% bundle reduction
- Faster initial page load
- Progressive enhancement for below-fold content

---

## Testing Tools

**Required:**
- Chrome/Chromium browser
- Chrome DevTools
- Lighthouse CLI (`npm install -g lighthouse @lhci/cli`)
- Network throttling (built into DevTools)
- Script: `/scripts/verify-critical-css.sh`

**Optional:**
- WebPageTest (for additional performance testing)
- BrowserStack (for cross-browser testing)
- Visual regression tools (Percy, Chromatic)

---

**Task 3.3 Status:** 📋 **READY TO START**  
**Next Action:** Run automated tests  
**Expected Duration:** 4 hours

🎯 **READY TO VERIFY CRITICAL CSS!** 🎯
