# Phase 3 Step 3 Task 3.2: Inline Critical CSS in HTML — Plan

**Date:** March 6, 2026  
**Phase:** Phase 3 Step 3 Task 3.2  
**Status:** 📋 **IMPLEMENTATION PLAN**  
**Duration:** 4-6 hours estimated

---

## Objective

Inline minified critical CSS in the HTML `<head>` for instant above-the-fold rendering. Load non-critical CSS asynchronously to prevent render-blocking while maintaining zero FOUC.

**Expected Impact:**
- +0.3-0.5s FCP improvement (on top of Week 1 gains)
- +2-3 Lighthouse points
- Lighthouse target: 95-96 desktop, 92-94 mobile
- Zero FOUC across all routes
- Instant header, hero, and navigation rendering

---

## Implementation Strategy

### Phase 1: Minify Critical CSS

**Goal:** Reduce critical.css size for inline inclusion

**Process:**
1. Remove all comments
2. Remove unnecessary whitespace
3. Minify CSS selectors where possible
4. Compress color values (e.g., #ffffff → #fff)
5. Target: ~2-3KB gzipped (from ~8.5KB uncompressed)

**Important:** DO NOT change:
- CSS variable names (design system compliance)
- Class names (BEM architecture)
- Semantic structure

### Phase 2: Inline Critical CSS in HTML

**Goal:** Place minified critical CSS directly in `<head>` for instant availability

**Implementation:**
```html
<head>
  <!-- Meta tags -->
  
  <!-- CRITICAL CSS (Inline for instant rendering) -->
  <style>
    /* Minified critical CSS here (~2-3KB gzipped) */
  </style>
  
  <!-- Preload non-critical CSS -->
  <link rel="preload" href="/src/styles/index.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/src/styles/index.css"></noscript>
  
  <!-- Preload fonts -->
  <link rel="preload" href="/fonts/lexend.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/manrope.woff2" as="font" type="font/woff2" crossorigin>
</head>
```

**Key Techniques:**
1. **Inline `<style>` tag:** Critical CSS in head (instant parsing)
2. **Preload with onload:** Load non-critical CSS asynchronously
3. **Noscript fallback:** Ensure styles load even without JavaScript
4. **Font preloading:** Prevent font flash (FOIT/FOUT)

### Phase 3: Async Load Non-Critical CSS

**Goal:** Load remaining CSS without blocking render

**Media Print Trick (Alternative):**
```html
<!-- Load as print media (non-blocking) -->
<link rel="stylesheet" href="/src/styles/index.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="/src/styles/index.css"></noscript>
```

**How it works:**
1. Browser loads CSS with `media="print"` (doesn't block render)
2. `onload` event fires when CSS loaded
3. JavaScript changes media to `all` (applies styles)
4. No JavaScript? `<noscript>` loads normally

**JavaScript Polyfill (for older browsers):**
```javascript
// Load CSS asynchronously (inline script)
!function(e){"use strict";var t=function(t,n,r){var o,i=e.document,c=i.createElement("link");if(n)o=n;else{var a=(i.body||i.getElementsByTagName("head")[0]).childNodes;o=a[a.length-1]}var l=i.styleSheets;c.rel="stylesheet",c.href=t,c.media="only x",function e(t){if(i.body)return t();setTimeout(function(){e(t)})}(function(){o.parentNode.insertBefore(c,n?o:o.nextSibling)});var s=function(e){for(var t=c.href,n=l.length;n--;)if(l[n].href===t)return e();setTimeout(function(){s(e)})};return c.addEventListener&&c.addEventListener("load",r),c.onloadcssdefined=s,s(r),c};"undefined"!=typeof exports?exports.loadCSS=t:e.loadCSS=t}("undefined"!=typeof global?global:this);
```

### Phase 4: Update Vite Configuration

**Goal:** Ensure critical CSS isn't bundled twice

**Vite Config Update:**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    cssCodeSplit: true, // Enable CSS code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor CSS
          'vendor-css': ['styles that are not critical']
        }
      }
    }
  }
})
```

---

## Critical CSS Content (What Gets Inlined)

**From `/src/styles/critical.css`:**

1. ✅ CSS Reset & Base (~0.5KB)
2. ✅ CSS Variables & Theme (~3-4KB) — CRITICAL
3. ✅ Typography base (~0.8KB)
4. ✅ Layout & Container (~0.5KB)
5. ✅ Site Header & Navigation (~1KB)
6. ✅ Hero Section (~1KB)
7. ✅ Buttons base state (~0.8KB)
8. ✅ Utility classes (~0.3KB)
9. ✅ Accessibility (~0.3KB)

**Total:** ~8.5KB uncompressed → ~2-3KB gzipped (inline in HTML)

---

## Non-Critical CSS (Loaded Async)

**What's deferred:**

1. ❌ Hover states (`:hover`)
2. ❌ Animations (`@keyframes`, `animation`)
3. ❌ Transitions (`transition` properties)
4. ❌ Below-fold patterns (testimonials, FAQ, footer)
5. ❌ Complex grids (multi-column layouts)
6. ❌ Forms (rarely above-the-fold)
7. ❌ Route-specific styles (loaded via CSS bundles)
8. ❌ Interactive states (focus, active, disabled)

**These load via:**
- `/src/styles/index.css` (non-critical core styles)
- Route bundles (e.g., `blog-bundle.css`, `services-bundle.css`)

---

## Testing Strategy

### Test 1: FOUC Detection ✅

**Goal:** Verify no Flash of Unstyled Content

**Method:**
1. Clear browser cache
2. Throttle network to "Slow 3G"
3. Navigate to 10 sample routes
4. Watch for unstyled flash during load

**Success Criteria:**
- ✅ No visible unstyled content
- ✅ Header renders immediately
- ✅ Hero renders immediately
- ✅ Navigation styled from first paint

**Routes to Test:**
- Homepage (/)
- Blog index (/insights)
- Single post (/insights/:slug)
- Services (/services)
- Portfolio (/work)
- About (/about)
- Contact (/contact)
- 404 page (/404)

### Test 2: Performance Measurement ✅

**Goal:** Measure FCP improvement

**Method:**
1. Run Lighthouse on 5 routes (before inlining)
2. Inline critical CSS
3. Run Lighthouse on same 5 routes (after inlining)
4. Compare FCP, LCP, TTI metrics

**Success Criteria:**
- ✅ +0.3-0.5s FCP improvement
- ✅ +2-3 Lighthouse points
- ✅ Lighthouse >95 desktop
- ✅ Lighthouse >92 mobile

**Routes to Test:**
- Homepage
- Blog index
- Services landing
- Portfolio archive
- About page

### Test 3: Slow Connection Behavior ✅

**Goal:** Verify graceful degradation on slow networks

**Method:**
1. Throttle to "Slow 3G" (400ms latency, 400kbps)
2. Navigate to 5 routes
3. Watch loading behavior

**Success Criteria:**
- ✅ Above-fold content renders immediately (critical CSS)
- ✅ Below-fold content renders after (non-critical CSS)
- ✅ No layout shifts (CLS <0.01)
- ✅ Loading states visible where appropriate

### Test 4: JavaScript Disabled ✅

**Goal:** Verify noscript fallback works

**Method:**
1. Disable JavaScript in browser
2. Navigate to 5 routes
3. Verify styles load correctly

**Success Criteria:**
- ✅ Critical CSS applies (inline)
- ✅ Non-critical CSS loads via `<noscript>` tag
- ✅ All styles eventually apply
- ✅ Site usable without JavaScript

### Test 5: Dark Mode ✅

**Goal:** Verify dark mode works with critical CSS

**Method:**
1. Toggle dark mode via StyleSwitcher
2. Refresh page
3. Verify dark mode persists

**Success Criteria:**
- ✅ Dark mode CSS variables in critical CSS
- ✅ Instant dark mode rendering (no flash)
- ✅ StyleSwitcher works correctly
- ✅ `prefers-color-scheme` respected

---

## Design System Compliance Checklist

**Critical Requirements:**

- [ ] ✅ All inlined CSS uses CSS variables (no hardcoded values)
- [ ] ✅ All fonts use `var(--font-primary)` or `var(--font-secondary)`
- [ ] ✅ All colors use semantic variables (e.g., `var(--primary)`)
- [ ] ✅ All spacing uses `var(--spacing-*)` tokens
- [ ] ✅ All border-radius uses `var(--radius*)` tokens
- [ ] ✅ User control maintained (can edit theme files)
- [ ] ✅ Dark mode support via CSS variables

**Why This Matters:**
Even though critical CSS is inlined, it MUST use CSS variables to maintain user control and design system consistency.

---

## Implementation Checklist

### Phase 1: Minify Critical CSS ⏳

- [ ] Create minified version of critical.css
- [ ] Remove comments
- [ ] Remove unnecessary whitespace
- [ ] Compress where possible
- [ ] Verify size: ~2-3KB gzipped
- [ ] Test minified CSS in browser

### Phase 2: Update index.html ⏳

- [ ] Add `<style>` tag in head
- [ ] Inline minified critical CSS
- [ ] Add preload link for non-critical CSS
- [ ] Add noscript fallback
- [ ] Add font preload links
- [ ] Test HTML in browser

### Phase 3: Test FOUC ⏳

- [ ] Test 10 routes on fast connection
- [ ] Test 10 routes on slow connection (3G)
- [ ] Test with JavaScript disabled
- [ ] Verify no unstyled flash
- [ ] Document any issues

### Phase 4: Measure Performance ⏳

- [ ] Run Lighthouse before inlining (5 routes)
- [ ] Inline critical CSS
- [ ] Run Lighthouse after inlining (5 routes)
- [ ] Calculate FCP improvement
- [ ] Calculate Lighthouse point improvement
- [ ] Document results

### Phase 5: Verify Dark Mode ⏳

- [ ] Test dark mode with critical CSS
- [ ] Test light mode with critical CSS
- [ ] Test auto mode (prefers-color-scheme)
- [ ] Verify no theme flash
- [ ] Document results

---

## Expected Results

### Performance Improvements

**Before Critical CSS Inline:**
- FCP Desktop: 0.9s
- FCP Mobile: 1.1s
- Lighthouse Desktop: 93
- Lighthouse Mobile: 90

**After Critical CSS Inline:**
- FCP Desktop: 0.5-0.6s (+0.3-0.4s)
- FCP Mobile: 0.7-0.8s (+0.3-0.4s)
- Lighthouse Desktop: 95-96 (+2-3 points)
- Lighthouse Mobile: 92-94 (+2-4 points)

### Bundle Sizes

**Critical CSS (Inline in HTML):**
- Uncompressed: ~8.5KB
- Minified: ~5-6KB
- Gzipped: ~2-3KB

**Non-Critical CSS (Loaded Async):**
- Core non-critical: ~50-55KB
- Route bundles: 7-18KB per bundle

### User Experience

- ✅ Instant header rendering
- ✅ Instant hero rendering
- ✅ Instant navigation rendering
- ✅ Zero FOUC across all routes
- ✅ Progressive enhancement (below-fold loads after)
- ✅ Graceful degradation on slow networks

---

## Success Criteria

**Task 3.2 complete when:**

- [ ] ✅ Critical CSS minified (~2-3KB gzipped)
- [ ] ✅ Critical CSS inlined in index.html
- [ ] ✅ Non-critical CSS loads asynchronously
- [ ] ✅ Noscript fallback implemented
- [ ] ✅ Font preloading implemented
- [ ] ✅ FOUC testing: 0 incidents across 10 routes
- [ ] ✅ Performance testing: +0.3-0.5s FCP improvement
- [ ] ✅ Lighthouse testing: +2-3 points improvement
- [ ] ✅ Dark mode testing: 100% functional
- [ ] ✅ 100% design system compliance maintained
- [ ] ✅ Documentation complete

---

## Timeline

**Task 3.2 Duration:** 4-6 hours

**Breakdown:**
- Phase 1: Minify critical CSS (1 hour)
- Phase 2: Update index.html (1 hour)
- Phase 3: Test FOUC (1 hour)
- Phase 4: Measure performance (1-2 hours)
- Phase 5: Verify dark mode (0.5-1 hour)
- Documentation (0.5-1 hour)

---

## Next Steps

**After Task 3.2 Complete:**

**Task 3.3: Verify Critical CSS Implementation** (4 hours)
- Test all 172 routes
- Comprehensive FOUC testing
- Performance comparison report
- Create Step 3 complete report

**Step 4: Pattern Lazy-Loading** (12-18 hours)
- Implement `useLazyPattern` hook
- Update 8-12 pattern components
- Test on slow connections

---

**Task 3.2 Status:** 📋 **READY TO START**  
**Next Action:** Phase 1 — Minify critical CSS  
**Expected Duration:** 4-6 hours

🎯 **READY TO INLINE CRITICAL CSS!** 🎯
