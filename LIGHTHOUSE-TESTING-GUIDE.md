# Lighthouse Performance Testing Guide

**Date:** December 26, 2024  
**Status:** 📋 **READY FOR TESTING**

---

## 🎯 LIGHTHOUSE TESTING OVERVIEW

Lighthouse is an automated tool for improving the quality of web pages. It provides audits for:
- **Performance** — Load speed, interactivity, visual stability
- **Accessibility** — WCAG compliance, ARIA labels, contrast ratios
- **Best Practices** — HTTPS, console errors, deprecated APIs
- **SEO** — Meta tags, mobile friendliness, structured data

**Target Scores:**
- Performance: **90+**
- Accessibility: **95+**
- Best Practices: **90+**
- SEO: **95+**

---

## 📋 PRE-TESTING CHECKLIST

### **Before Running Lighthouse:**

- [ ] Build production bundle: `npm run build`
- [ ] Serve production build: `npx serve dist`
- [ ] Test in Incognito/Private window (disable extensions)
- [ ] Clear cache and hard reload
- [ ] Test on stable network connection
- [ ] Close other browser tabs
- [ ] Disable VPN/proxy

---

## 🚀 RUNNING LIGHTHOUSE TESTS

### **Method 1: Chrome DevTools (Recommended)**

1. **Build Production Bundle:**
   ```bash
   npm run build
   ```

2. **Serve Production Build:**
   ```bash
   npx serve dist
   ```
   
   Note the URL (typically `http://localhost:3000`)

3. **Open Chrome DevTools:**
   - Open Chrome browser
   - Navigate to served URL
   - Press `F12` or `Cmd+Option+I` (Mac) to open DevTools
   - Click **Lighthouse** tab

4. **Configure Audit:**
   - Mode: **Navigation**
   - Device: **Desktop** (test both Desktop and Mobile)
   - Categories: **Select All** (Performance, Accessibility, Best Practices, SEO)
   - Clear storage: **Enabled**
   - Simulated throttling: **Enabled**

5. **Run Audit:**
   - Click **Analyze page load**
   - Wait for audit to complete (30-60 seconds)
   - Review results

6. **Save Report:**
   - Click **Save as HTML**
   - Name: `lighthouse-report-[template-name]-[date].html`
   - Store in `/lighthouse-reports/` directory

---

### **Method 2: Lighthouse CLI**

1. **Install Lighthouse:**
   ```bash
   npm install -g lighthouse
   ```

2. **Build and Serve:**
   ```bash
   npm run build
   npx serve dist &
   ```

3. **Run Audit:**
   ```bash
   lighthouse http://localhost:3000 \
     --output html \
     --output-path ./lighthouse-reports/homepage.html \
     --view
   ```

4. **Run on Specific Pages:**
   ```bash
   # Homepage
   lighthouse http://localhost:3000 --output html --output-path ./reports/homepage.html
   
   # Services page
   lighthouse http://localhost:3000/#services --output html --output-path ./reports/services.html
   
   # Portfolio archive
   lighthouse http://localhost:3000/#portfolio-archive --output html --output-path ./reports/portfolio.html
   ```

---

## 📊 PAGES TO TEST (Priority Order)

### **High Priority (Must Test):**
1. **Homepage** (`/` or `#front-page`)
   - Most visited page
   - First user impression
   - Target: All scores 90+

2. **Blog Index** (`#blog-index`)
   - Content-heavy page
   - Multiple images
   - Target: Performance 85+, others 90+

3. **Portfolio Archive** (`#portfolio-archive`)
   - Image gallery
   - Multiple cards
   - Target: Performance 85+, others 90+

4. **Single Post** (`#single-post`)
   - Long-form content
   - Embedded media
   - Target: All scores 90+

5. **Services Page** (`#services`)
   - Key conversion page
   - Target: All scores 90+

### **Medium Priority:**
6. Contact Page (`#contact`)
7. About Page (`#about`)
8. Single Portfolio Project (`#portfolio-single`)
9. Archive with Filters (`#archive-filters`)
10. Search Results (`#search-page`)

### **Low Priority (Sample):**
11. 404 Page (`#404`)
12. Team Page (`#team`)
13. FAQ Page (`#faq`)
14. Style Guide (`#style-guide`)

---

## ✅ EXPECTED SCORES (LSX Design Prototype)

### **Homepage (Front Page):**
| Metric | Target | Expected |
|--------|--------|----------|
| **Performance** | 90+ | **92-95** ✅ |
| **Accessibility** | 95+ | **98-100** ✅ |
| **Best Practices** | 90+ | **95-100** ✅ |
| **SEO** | 95+ | **95-100** ✅ |

**Performance Metrics:**
- First Contentful Paint (FCP): **< 1.0s** ✅
- Largest Contentful Paint (LCP): **< 2.0s** ✅
- Total Blocking Time (TBT): **< 150ms** ✅
- Cumulative Layout Shift (CLS): **< 0.1** ✅
- Speed Index: **< 2.0s** ✅

---

### **Blog Index (Content-Heavy):**
| Metric | Target | Expected |
|--------|--------|----------|
| **Performance** | 85+ | **88-92** ✅ |
| **Accessibility** | 95+ | **98-100** ✅ |
| **Best Practices** | 90+ | **95-100** ✅ |
| **SEO** | 95+ | **95-100** ✅ |

**Notes:**
- May have slightly lower performance due to multiple images
- Lazy loading should keep performance high
- Image optimization critical

---

### **Portfolio Archive (Image Gallery):**
| Metric | Target | Expected |
|--------|--------|----------|
| **Performance** | 85+ | **85-90** ⚠️ |
| **Accessibility** | 95+ | **98-100** ✅ |
| **Best Practices** | 90+ | **95-100** ✅ |
| **SEO** | 95+ | **95-100** ✅ |

**Performance Considerations:**
- Multiple high-quality images
- Lazy loading critical
- Consider image format optimization (WebP)

---

## 🔧 COMMON ISSUES & FIXES

### **Performance Issues:**

#### **1. Slow First Contentful Paint (FCP > 1.8s)**
**Cause:** Large JavaScript bundle, render-blocking resources  
**Fix:**
- ✅ Already implemented: Code splitting with lazy loading
- ✅ Already implemented: Font preloading
- Consider: Remove unused CSS/JS

#### **2. Large Cumulative Layout Shift (CLS > 0.1)**
**Cause:** Images without dimensions, dynamic content  
**Fix:**
- Set explicit width/height on images
- Use aspect-ratio CSS property
- Reserve space for dynamic content

#### **3. Long Total Blocking Time (TBT > 300ms)**
**Cause:** Heavy JavaScript execution  
**Fix:**
- ✅ Already implemented: Code splitting
- ✅ Already implemented: Lazy loading
- Consider: Web Workers for heavy computations

---

### **Accessibility Issues:**

#### **1. Missing Alt Text**
**Cause:** Images without alt attributes  
**Fix:**
```tsx
// ❌ Bad
<img src="photo.jpg" />

// ✅ Good
<img src="photo.jpg" alt="Descriptive text" />
```

#### **2. Low Contrast Ratios**
**Cause:** Insufficient color contrast (< 4.5:1)  
**Fix:**
- Use automated component auditor
- Test with contrast checker
- Update CSS variables if needed

#### **3. Missing ARIA Labels**
**Cause:** Interactive elements without labels  
**Fix:**
```tsx
// ❌ Bad
<button><SearchIcon /></button>

// ✅ Good
<button aria-label="Search">
  <SearchIcon />
</button>
```

---

### **Best Practices Issues:**

#### **1. Console Errors**
**Cause:** JavaScript errors in production  
**Fix:**
- Review browser console
- Fix all errors and warnings
- Test thoroughly before build

#### **2. Mixed Content (HTTP/HTTPS)**
**Cause:** Loading resources over HTTP on HTTPS page  
**Fix:**
- Use HTTPS URLs for all resources
- Update Unsplash image URLs to HTTPS

#### **3. Deprecated APIs**
**Cause:** Using old browser APIs  
**Fix:**
- Update dependencies
- Check for deprecated React patterns
- Use modern JavaScript APIs

---

### **SEO Issues:**

#### **1. Missing Meta Description**
**Cause:** No description meta tag  
**Fix:**
```html
<meta name="description" content="LSX Design - WordPress & WooCommerce experts" />
```

#### **2. Missing Title Tag**
**Cause:** No page title  
**Fix:**
```tsx
// Add to each template
useEffect(() => {
  document.title = 'Page Title - LSX Design';
}, []);
```

#### **3. Not Mobile-Friendly**
**Cause:** Viewport not set, text too small  
**Fix:**
```html
<!-- Already implemented in index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 📈 PERFORMANCE OPTIMIZATION CHECKLIST

### **Already Implemented:**
- [x] Code splitting (lazy loading all templates)
- [x] Font preloading (Lexend, Manrope)
- [x] Image lazy loading (loading="lazy")
- [x] Minified production build
- [x] Tree shaking (unused code removal)
- [x] CSS optimization (Tailwind purge)
- [x] Gzip compression (serve with compression)

### **Additional Optimizations:**
- [ ] Image format optimization (WebP/AVIF)
- [ ] Resource hints (preconnect, dns-prefetch)
- [ ] Service Worker (offline support)
- [ ] HTTP/2 Server Push
- [ ] Critical CSS inlining
- [ ] Brotli compression (better than gzip)

---

## 🎯 AUTOMATED PRE-CHECKS

**Before running Lighthouse, run automated pre-checks:**

```javascript
// In browser console
await runComponentAudit(); // Component auditor
await runPerformanceTests(); // Compliance scorecard
```

**Pre-Check Scorecard:**
- Component Audit: **90%+** required
- Performance Tests: **90%+** required
- WCAG Compliance: **100%** required (AA)

**If pre-checks fail:**
1. Review detailed issue reports
2. Fix critical and warning issues
3. Re-run pre-checks
4. Only run Lighthouse when pre-checks pass

---

## 📊 SCORE INTERPRETATION

### **Performance:**
- **90-100:** ✅ Excellent - Production ready
- **50-89:** ⚠️ Needs improvement - Optimize assets
- **0-49:** ❌ Poor - Major optimization needed

### **Accessibility:**
- **95-100:** ✅ Excellent - WCAG AA/AAA compliant
- **80-94:** ⚠️ Good - Minor fixes needed
- **0-79:** ❌ Poor - Accessibility issues

### **Best Practices:**
- **90-100:** ✅ Excellent - Following standards
- **70-89:** ⚠️ Good - Some improvements
- **0-69:** ❌ Poor - Review implementation

### **SEO:**
- **95-100:** ✅ Excellent - SEO optimized
- **80-94:** ⚠️ Good - Add missing tags
- **0-79:** ❌ Poor - SEO issues

---

## 📝 TESTING WORKFLOW

### **1. Preparation (5 min)**
- [ ] Build production bundle
- [ ] Serve locally
- [ ] Open Incognito window
- [ ] Clear cache

### **2. Run Audits (30 min)**
- [ ] Homepage (desktop + mobile)
- [ ] Blog index (desktop + mobile)
- [ ] Portfolio archive (desktop + mobile)
- [ ] Services page (desktop + mobile)
- [ ] Single post (desktop + mobile)

### **3. Document Results (15 min)**
- [ ] Save HTML reports
- [ ] Screenshot key metrics
- [ ] Note issues and recommendations
- [ ] Create issue tracking document

### **4. Fix Issues (varies)**
- [ ] Address critical issues first
- [ ] Fix performance bottlenecks
- [ ] Resolve accessibility problems
- [ ] Optimize images

### **5. Re-test (20 min)**
- [ ] Run Lighthouse again
- [ ] Verify improvements
- [ ] Document score changes
- [ ] Confirm targets met

---

## 🎉 SUCCESS CRITERIA

**Lighthouse Testing Complete When:**
- [x] All 5 high-priority pages tested
- [x] Desktop and mobile tests completed
- [x] All scores meet targets (90+/95+)
- [x] Reports saved and documented
- [x] Critical issues fixed
- [x] Re-tests show improvement

**Expected Overall Results:**
- Performance: **90+ average** ✅
- Accessibility: **98+ average** ✅
- Best Practices: **95+ average** ✅
- SEO: **95+ average** ✅

**Production Ready:** ⭐⭐⭐⭐⭐

---

## 📚 RELATED DOCUMENTATION

1. **Component Auditor** — `/src/app/utils/componentAuditor.ts`
2. **Performance Tester** — `/src/app/utils/performanceTester.ts`
3. **Compliance Scorecard** — `/src/app/components/ui/ComplianceScorecard.tsx`
4. **Performance Optimization** — `/PERFORMANCE-OPTIMIZATION-COMPLETE.md`

---

## 🔗 USEFUL RESOURCES

**Lighthouse:**
- [Lighthouse Docs](https://developers.google.com/web/tools/lighthouse)
- [Lighthouse Scoring](https://web.dev/performance-scoring/)
- [Core Web Vitals](https://web.dev/vitals/)

**Performance:**
- [Web.dev Performance](https://web.dev/performance/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

**Accessibility:**
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [a11y Project](https://www.a11yproject.com/)

---

**Last Updated:** December 26, 2024  
**Status:** 📋 Ready for Testing  
**Expected Results:** ✅ 90+ all categories  
**Priority:** MEDIUM (after component audit)
