# Phase 3: Advanced CSS Optimization — Task List

**Created:** March 6, 2026  
**Phase:** Phase 3 (Advanced Optimization)  
**Status:** 🚀 **IN PROGRESS** (Step 1)  
**Duration:** 3-4 weeks (76-122 hours estimated)  
**Goal:** 30-50% CSS bundle reduction, 20-40% faster FCP

---

## Overview

Phase 3 focuses on performance optimization through:
- Route-based CSS splitting
- Critical CSS extraction
- Pattern lazy-loading
- Media query consolidation
- Performance measurement

**Expected Impact:** 30-50% bundle reduction, 20-40% faster FCP, Lighthouse Score >95

---

## Week 1: Analysis & Route Splitting (28-40 hours)

### Step 1: CSS Bundle Analysis (Day 1-2, 8-12 hours)

- [x] **Task 1.1:** Generate CSS bundle size report
  - Count lines per file (templates, patterns, base files)
  - Calculate file sizes (uncompressed, gzipped)
  - Create per-file breakdown spreadsheet
  - **Deliverable:** `css-bundle-analysis.md` ✅ COMPLETE
  - **Estimated Time:** 2-3 hours
  - **Actual Time:** 2 hours

- [x] **Task 1.2:** Analyze template CSS usage by route
  - Map templates to routes (blog, services, portfolio, about, utility, system)
  - Identify shared vs. unique CSS per route
  - Calculate potential savings per route split
  - **Deliverable:** `route-to-css-mapping.md` ✅ COMPLETE
  - **Estimated Time:** 3-4 hours
  - **Actual Time:** 3 hours

- [x] **Task 1.3:** Identify critical vs. non-critical CSS
  - List above-fold CSS (hero, header, nav)
  - List below-fold CSS (testimonials, FAQ, footer)
  - Estimate critical CSS size
  - **Deliverable:** `critical-css-candidates.md` ✅ COMPLETE
  - **Estimated Time:** 2-3 hours
  - **Actual Time:** 2 hours

- [x] **Task 1.4:** Document baseline performance metrics
  - Lighthouse scores (all routes)
  - Bundle size metrics
  - FCP, LCP, CLS, TTI measurements
  - **Deliverable:** `baseline-performance.md` ✅ COMPLETE
  - **Estimated Time:** 1-2 hours
  - **Actual Time:** 2 hours

**STEP 1 COMPLETE:** All 4 analysis tasks finished. Total time: 9 hours (within 8-12 hour estimate).

---

### Step 2: Route Bundle Implementation (Day 3-5, 16-20 hours)

- [x] **Task 2.1:** Create route bundle directory structure
  - Create `/src/styles/bundles/` directory
  - Create 8 route bundle files (blog, services, portfolio, solutions, about, utility, media, system)
  - Move template imports into route bundles
  - **Deliverable:** 8 bundle files + README.md ✅ COMPLETE
  - **Estimated Time:** 4-6 hours
  - **Actual Time:** 2 hours

- [x] **Task 2.2:** Update React Router with dynamic CSS loading
  - Add `lazy` imports for route CSS
  - Implement CSS preloading on route hover
  - Test CSS loading on route navigation
  - **Deliverable:** Updated route files with CSS loading ✅ COMPLETE
  - **Estimated Time:** 6-8 hours
  - **Actual Time:** 7.5 hours

- [x] **Task 2.3:** Verify route CSS loading (testing & validation)
  - Test all 150 routes for correct CSS loading
  - Verify no FOUC on any route
  - Test preloading on hover/focus
  - Measure actual performance improvements
  - **Deliverable:** Verification reports + performance metrics ✅ COMPLETE
  - **Estimated Time:** 4-6 hours
  - **Actual Time:** 4 hours

- [x] **Task 2.4:** Create Week 1 progress report
  - Document bundle size reduction
  - Document route splitting implementation
  - Note any issues or regressions
  - **Deliverable:** `phase-3-week-1-report.md` ✅ COMPLETE
  - **Estimated Time:** 2 hours
  - **Actual Time:** 0.5 hours

---

## Week 2: Critical CSS & Lazy-Loading (24-34 hours)

### Step 3: Critical CSS Extraction (Day 1-3, 12-16 hours)

- [x] **Task 3.1:** Extract critical CSS selectors
  - Identify critical selectors (hero, header, nav, above-fold)
  - Extract into `critical.css` file (~5-10KB)
  - Remove critical CSS from main bundles
  - **Deliverable:** `critical.css` file ✅ COMPLETE
  - **Estimated Time:** 4-6 hours
  - **Actual Time:** 2 hours

- [x] **Task 3.2:** Inline critical CSS in HTML
  - Update `index.html` with inlined critical CSS
  - Implement non-critical CSS deferral (media="print" trick)
  - Test above-the-fold rendering (no FOUC)
  - **Deliverable:** Updated `index.html` ✅ COMPLETE
  - **Estimated Time:** 4-6 hours
  - **Actual Time:** 1 hour

- [x] **Task 3.3:** Verify critical CSS implementation
  - Test all routes for instant above-the-fold rendering
  - Verify no Flash of Unstyled Content (FOUC)
  - Check slow connection behavior (3G throttling)
  - **Deliverable:** `critical-css-verification.md` ✅ COMPLETE
  - **Estimated Time:** 4 hours
  - **Actual Time:** 1 hour

**STEP 3 COMPLETE:** All 3 critical CSS tasks finished. Total time: 4 hours (vs 12-16 hour estimate, 69-75% faster).

---

### Step 4: Pattern Lazy-Loading (Day 4-5, 12-18 hours)

- [x] **Task 4.1:** Implement lazy-loading hook
  - Create `useLazyPattern` hook with Intersection Observer
  - Add preload logic for fast connections
  - Test hook on sample pattern
  - **Deliverable:** `useLazyPattern.tsx` hook ✅ COMPLETE
  - **Estimated Time:** 4-6 hours
  - **Actual Time:** 1.5 hours

- [x] **Task 4.2:** Update pattern components with lazy-loading
  - Identify below-fold patterns (testimonials, FAQ, CTA, related content)
  - Update 8-12 pattern components
  - Add loading states where needed
  - **Deliverable:** 8-12 updated pattern components ✅ COMPLETE
  - **Estimated Time:** 6-8 hours
  - **Actual Time:** 1 hour

- [x] **Task 4.3:** Test lazy-loading on slow connections
  - Test 3G throttling
  - Verify no layout shifts
  - Check performance improvement
  - **Deliverable:** `lazy-loading-verification.md` ✅ COMPLETE
  - **Estimated Time:** 2-4 hours
  - **Actual Time:** 0.5 hours

- [x] **Task 4.4:** Create Week 2 progress report
  - Document critical CSS implementation
  - Document lazy-loading results
  - Calculate cumulative performance gains
  - **Deliverable:** `phase-3-week-2-report.md` ✅ COMPLETE
  - **Estimated Time:** 2 hours
  - **Actual Time:** 0.5 hours

**STEP 4 COMPLETE:** All 4 lazy-loading tasks finished. Total time: 3 hours (vs 12-18h, 78-83% faster).

---

**WEEK 2 COMPLETE:** Steps 3-4 finished. Total time: 7.5 hours (vs 24-34h, 78-85% faster).

---

**OPTIONAL: Template Migration (Sample Complete)**

- [x] **Sample Migration:** Migrate 2 high-priority templates
  - FrontPageTemplate (homepage, highest traffic) ✅ COMPLETE
  - SinglePostTemplate (blog posts, highest volume) ✅ COMPLETE
  - Zero breaking changes verified
  - Expected savings: ~17KB gzipped (2 templates)
  - **Deliverable:** Migration guide + batch script ✅ COMPLETE
  - **Estimated Time:** 2-3 hours (full migration)
  - **Actual Time:** 0.5 hours (sample only)

- [ ] **Full Migration:** Complete remaining 18 templates (optional)
  - Run batch migration script (~5 min)
  - Verify templates manually (~1h)
  - Test all routes (~30 min)
  - Measure performance (~30 min)
  - **Expected Time:** 1.5-2 hours
  - **Status:** Ready (batch script provided)

---

**WEEK 2 + SAMPLE MIGRATION COMPLETE:** Total time: 8 hours (vs 26-37h, 78-85% faster).

---

## Week 3: Consolidation & Validation (24-34 hours)

### Step 5: Media Query Consolidation (Day 1-2, 8-12 hours)

- [x] **Task 5.1:** Audit media queries across all templates
  - Count media query instances per file
  - Identify duplicate breakpoint rules
  - Calculate consolidation potential
  - **Deliverable:** `media-query-audit.md` ✅ COMPLETE
  - **Estimated Time:** 3-4 hours
  - **Actual Time:** 1.5 hours

- [ ] **Task 5.2:** Consolidate media queries in high-duplication files
  - [x] **Part 1:** Create responsive grid utilities (`responsive-grids.css`) ✅ COMPLETE
  - [ ] **Part 2:** Migrate high-duplication files to use utilities (4-6 hours)
    - [ ] Batch 1: Solution pages (mailchimp, lsx-search, lsx-sharing) — 2 hours
    - [ ] Batch 2: Utility pages (wetu, contact, team, blog-index) — 2 hours
    - [ ] Batch 3: WordPress blocks + service shared (4 files) — 2 hours
  - **Deliverable:** 11+ refactored files + responsive-grids.css
  - **Estimated Time:** 4-6 hours
  - **Actual Time (Part 1):** 0.75 hours