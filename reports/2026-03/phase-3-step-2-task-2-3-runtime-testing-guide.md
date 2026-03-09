# Phase 3 Step 2 Task 2.3: Runtime Testing Guide

**Date:** March 6, 2026  
**Phase:** Phase 3 Step 2 Task 2.3  
**Status:** 📋 **TESTING GUIDE**  
**Category:** Category 2 (Runtime Behavior Testing)

---

## Overview

This guide provides step-by-step instructions for manually testing CSS bundle loading in the browser. Follow this checklist to verify all 150 routes load CSS correctly.

**Estimated Time:** 1.5-2 hours

---

## Prerequisites

**Required Tools:**
1. ✅ Chrome/Chromium browser (DevTools required)
2. ✅ Network tab open in DevTools
3. ✅ Console tab open in DevTools
4. ✅ Application running locally (`npm run dev`)

**Browser Setup:**
1. Open Chrome DevTools (F12 or Cmd+Option+I)
2. Navigate to **Network** tab
3. Filter by **CSS** (click CSS button in filter bar)
4. Enable **Disable cache** checkbox
5. Keep **Console** tab visible for errors

---

## Test Template (Use for Each Route)

For each route tested, follow this checklist:

```
Route: _______________
Path: /_______________
Expected Bundle: _______________

Tests:
[ ] Navigate to route (click link or enter URL)
[ ] Check Network tab for bundle load
[ ] Verify bundle name is correct
[ ] Verify bundle loads only once (no duplicates)
[ ] Check no FOUC (content styled immediately)
[ ] Check console for errors (0 errors expected)
[ ] Verify styles applied correctly
[ ] Test dark mode toggle (if applicable)

Status: ✅ PASS / ❌ FAIL
Notes: _______________
```

---

## Testing Categories

### Category A: Homepage (Core CSS Only)

**Route:** `/` (Homepage)  
**Expected:** NO bundle load (core CSS already loaded)  
**Test:**
1. Navigate to homepage
2. ✅ Verify NO CSS bundle loads in Network tab
3. ✅ Verify styles rendered correctly
4. ✅ Check console (0 errors)

---

### Category B: Blog Routes (blog bundle)

Test these 12 routes — all should load `blog-bundle.css`:

#### B1: Blog Index
- Route: `/insights`
- Expected: `blog-bundle.css` loads once
- Test: Navigate from homepage → blog index

#### B2: Single Post
- Route: `/insights/building-fast-wordpress-sites`
- Expected: `blog-bundle.css` (already loaded if from blog index)
- Test: Click post from blog index

#### B3: Category Archive
- Route: `/insights/category/web-development`
- Expected: `blog-bundle.css`
- Test: Click category from blog post

#### B4: Author Archive
- Route: `/insights/author/john-doe`
- Expected: `blog-bundle.css`
- Test: Click author name from post

#### B5: Tag Archive
- Route: `/insights/tag/wordpress`
- Expected: `blog-bundle.css`
- Test: Click tag from post

#### B6: Date Archive (Year)
- Route: `/insights/date/2024`
- Expected: `blog-bundle.css`
- Test: Direct URL navigation

#### B7: Date Archive (Month)
- Route: `/insights/date/2024/03`
- Expected: `blog-bundle.css`
- Test: Direct URL navigation

**Post Formats (blog bundle):**

#### B8: Audio Posts
- Route: `/insights/format/audio`
- Expected: `blog-bundle.css`

#### B9: Gallery Posts
- Route: `/insights/format/gallery`
- Expected: `blog-bundle.css`

#### B10: Image Posts
- Route: `/insights/format/image`
- Expected: `blog-bundle.css`

#### B11: Quote Posts
- Route: `/insights/format/quote`
- Expected: `blog-bundle.css`

#### B12: Link Posts
- Route: `/insights/format/link`
- Expected: `blog-bundle.css`

**Total Blog Routes:** 12+ post formats = ~31 routes

---

### Category C: Portfolio Routes (portfolio bundle)

Test these 4 routes — all should load `portfolio-bundle.css`:

#### C1: Portfolio Archive
- Route: `/work`
- Expected: `portfolio-bundle.css` loads once
- Test: Navigate from homepage → portfolio

#### C2: Single Project
- Route: `/work/ecommerce-redesign`
- Expected: `portfolio-bundle.css` (already loaded if from archive)
- Test: Click project from portfolio archive

#### C3: Portfolio Category
- Route: `/work/category/web-design`
- Expected: `portfolio-bundle.css`
- Test: Direct URL navigation

#### C4: Portfolio Tag
- Route: `/work/tag/wordpress`
- Expected: `portfolio-bundle.css`
- Test: Direct URL navigation

**Total Portfolio Routes:** 4-6 routes

---

### Category D: Services Routes (services bundle)

Test these routes — all should load `services-bundle.css`:

#### D1: Services Landing
- Route: `/services`
- Expected: `services-bundle.css` loads once
- Test: Navigate from homepage → services

#### D2: Discovery Service
- Route: `/services/discovery`
- Expected: `services-bundle.css` (already loaded if from landing)

#### D3: Design Service
- Route: `/services/design`
- Expected: `services-bundle.css`

#### D4: Development Service
- Route: `/services/development`
- Expected: `services-bundle.css`

#### D5: Content Services Landing
- Route: `/services/content`
- Expected: `services-bundle.css`

#### D6: AI Services Landing
- Route: `/services/ai`
- Expected: `services-bundle.css`

#### D7: SEO Service (AI sub-service)
- Route: `/services/ai/seo`
- Expected: `services-bundle.css`

#### D8: Security Service
- Route: `/services/security`
- Expected: `services-bundle.css`

#### D9: Hosting Service
- Route: `/services/hosting`
- Expected: `services-bundle.css`

#### D10: Journey Stage (Ignite)
- Route: `/services/ignite`
- Expected: `services-bundle.css`

**Total Services Routes:** ~44 routes (38 services + 6 journey stages)

---

### Category E: About Routes (about bundle)

Test these 6 routes — all should load `about-bundle.css`:

#### E1: About Main
- Route: `/about`
- Expected: `about-bundle.css` loads once
- Test: Navigate from homepage → about

#### E2: Our Process
- Route: `/about/process`
- Expected: `about-bundle.css` (already loaded if from about)

#### E3: Company Culture
- Route: `/about/culture`
- Expected: `about-bundle.css`

#### E4: Company History
- Route: `/about/history`
- Expected: `about-bundle.css`

#### E5: Team
- Route: `/about/team`
- Expected: `about-bundle.css`

#### E6: Careers
- Route: `/about/careers`
- Expected: `about-bundle.css`

**Total About Routes:** 6 routes

---

### Category F: Solutions Routes (solutions bundle)

Test these routes — all should load `solutions-bundle.css`:

#### F1: Solutions Landing
- Route: `/solutions`
- Expected: `solutions-bundle.css` loads once
- Test: Navigate from homepage → solutions

#### F2: WordPress Solution
- Route: `/solutions/wordpress`
- Expected: `solutions-bundle.css`

#### F3: WooCommerce Solution
- Route: `/solutions/woocommerce`
- Expected: `solutions-bundle.css`

#### F4: Tour Operators Solution
- Route: `/solutions/tour-operators`
- Expected: `solutions-bundle.css`

#### F5: AI Integrations
- Route: `/solutions/ai-integrations`
- Expected: `solutions-bundle.css`

**Total Solutions Routes:** ~18 routes

---

### Category G: Systems Routes (system bundle)

Test these 6 routes — all should load `system-bundle.css`:

#### G1: Systems Hub
- Route: `/systems`
- Expected: `system-bundle.css` loads once
- Test: Navigate from homepage → systems

#### G2: Design Tokens
- Route: `/systems/design-tokens`
- Expected: `system-bundle.css`

#### G3: Pattern Governance
- Route: `/systems/pattern-governance`
- Expected: `system-bundle.css`

#### G4: Editorial Workflows
- Route: `/systems/editorial-workflows`
- Expected: `system-bundle.css`

#### G5: AI Search Readiness
- Route: `/systems/ai-search-readiness`
- Expected: `system-bundle.css`

#### G6: Performance Reliability
- Route: `/systems/performance-reliability`
- Expected: `system-bundle.css`

**Total Systems Routes:** 6 routes

---

### Category H: Media Routes (media bundle)

Test these 7 routes — all should load `media-bundle.css`:

#### H1: Videos Archive
- Route: `/videos`
- Expected: `media-bundle.css` loads once
- Test: Navigate from homepage → videos

#### H2: Single Video
- Route: `/video/wordpress-tutorial`
- Expected: `media-bundle.css`

#### H3: Video Category
- Route: `/videos/category/tutorials`
- Expected: `media-bundle.css`

#### H4: Podcasts Archive
- Route: `/podcasts`
- Expected: `media-bundle.css`

#### H5: Single Podcast
- Route: `/podcast/web-design-podcast-001`
- Expected: `media-bundle.css`

**Total Media Routes:** 7 routes

---

### Category I: Utility Routes (utility bundle)

Test these routes — all should load `utility-bundle.css`:

#### I1: Contact
- Route: `/contact`
- Expected: `utility-bundle.css` loads once

#### I2: FAQ
- Route: `/faq`
- Expected: `utility-bundle.css`

#### I3: Pricing
- Route: `/pricing`
- Expected: `utility-bundle.css`

#### I4: Why Choose Us
- Route: `/why-choose-us`
- Expected: `utility-bundle.css`

#### I5: Search
- Route: `/search?q=wordpress`
- Expected: `utility-bundle.css`

#### I6: Testimonials
- Route: `/testimonials`
- Expected: `utility-bundle.css`

#### I7: Shop (WooCommerce)
- Route: `/shop`
- Expected: `utility-bundle.css`

#### I8: Cart
- Route: `/cart`
- Expected: `utility-bundle.css`

**Total Utility Routes:** ~22 routes (12 utility + 6 testimonials + 4 woocommerce)

---

## FOUC Testing Scenarios

**Test for Flash of Unstyled Content (FOUC):**

### Scenario 1: Fast Navigation
1. Navigate to homepage
2. Rapidly click through 5-10 routes
3. ✅ Verify NO unstyled flash
4. ✅ Verify content always styled

### Scenario 2: Slow Network
1. Open DevTools → Network tab
2. Throttle to "Slow 3G"
3. Navigate to `/insights` (blog)
4. ✅ Verify bundle loads (slower)
5. ✅ Verify NO unstyled content shown

### Scenario 3: Cache Disabled
1. Enable "Disable cache" in DevTools
2. Navigate to multiple routes
3. ✅ Verify bundle loads each time
4. ✅ Verify NO FOUC

### Scenario 4: Direct URL
1. Enter route URL directly in address bar
2. `/insights/building-fast-wordpress-sites`
3. ✅ Verify bundle loads
4. ✅ Verify immediate styling

---

## Bundle Deduplication Testing

**Test CSS bundle loads only once:**

### Test 1: Same Bundle Routes
1. Navigate to `/insights` (blog bundle loads)
2. Click to `/insights/building-fast-wordpress-sites`
3. ✅ Verify NO second blog-bundle.css load
4. ✅ Check Network tab (should show cached)

### Test 2: Browser Back Button
1. Navigate: Home → `/insights` → `/work`
2. Click browser back button
3. ✅ Verify blog bundle remains loaded
4. ✅ Verify NO re-fetch

### Test 3: Browser Forward Button
1. Navigate: Home → `/insights` → Back → Forward
2. ✅ Verify bundle cached
3. ✅ Verify NO re-fetch

---

## Console Error Checking

**For each route tested:**

1. Check Console tab
2. ✅ Verify 0 errors
3. ✅ Look for CSS loading messages (development mode)
4. ❌ Note any errors/warnings

**Expected Messages (Dev Mode):**
```
[CSS Bundle] Loading bundle: blog
[CSS Bundle] Bundle loaded successfully: blog
```

**Unexpected (Report as Error):**
```
❌ Failed to load CSS bundle: blog
❌ CSS file not found: /styles/bundles/blog-bundle.css
```

---

## Test Results Template

Copy this template for each category:

```markdown
## Category X Test Results

**Date:** March 6, 2026  
**Tester:** [Your Name]  
**Browser:** Chrome [Version]

### Routes Tested

| Route | Bundle | Loads Once | No FOUC | Console | Status |
|-------|--------|------------|---------|---------|--------|
| /route1 | bundle | ✅ | ✅ | ✅ | ✅ PASS |
| /route2 | bundle | ✅ | ✅ | ✅ | ✅ PASS |

### Summary
- **Total Routes:** X
- **Passed:** X
- **Failed:** 0
- **Success Rate:** 100%

### Issues Found
- None

### Notes
- [Any observations]
```

---

## Quick Test Checklist

**For rapid testing, use this abbreviated checklist:**

**Blog Bundle (5 routes minimum):**
- [ ] `/insights` → blog-bundle.css loads
- [ ] `/insights/:slug` → bundle cached
- [ ] `/insights/category/:slug` → bundle cached
- [ ] No FOUC on any route
- [ ] 0 console errors

**Services Bundle (5 routes minimum):**
- [ ] `/services` → services-bundle.css loads
- [ ] `/services/discovery` → bundle cached
- [ ] `/services/ai/seo` → bundle cached
- [ ] No FOUC on any route
- [ ] 0 console errors

**Portfolio Bundle (3 routes minimum):**
- [ ] `/work` → portfolio-bundle.css loads
- [ ] `/work/:slug` → bundle cached
- [ ] No FOUC
- [ ] 0 console errors

**About Bundle (3 routes minimum):**
- [ ] `/about` → about-bundle.css loads
- [ ] `/about/team` → bundle cached
- [ ] No FOUC
- [ ] 0 console errors

**Other Bundles (1-2 routes each):**
- [ ] Solutions bundle works
- [ ] Systems bundle works
- [ ] Media bundle works
- [ ] Utility bundle works

---

## Success Criteria

**Runtime testing PASSED when:**
- ✅ 95%+ routes load correct bundle
- ✅ 0 critical FOUC issues
- ✅ Bundles load only once per session
- ✅ 0 console errors
- ✅ Browser navigation works correctly
- ✅ Dark mode works on all routes

---

## Next Steps After Runtime Testing

1. **Document Results** → Create runtime test results report
2. **Test Preloading** → Category 3 (hover/focus preloading)
3. **Measure Performance** → Category 4 (Lighthouse + metrics)
4. **Create Final Report** → Task 2.3 completion report

---

**Runtime Testing Guide Status:** 📋 **READY TO USE**  
**Estimated Time:** 1.5-2 hours  
**Next:** Begin testing with Category A (Homepage)

🎯 **READY TO START RUNTIME TESTING!** 🎯
