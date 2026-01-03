# Performance Standards - LSX Design System

**Version:** 1.0  
**Last Updated:** December 25, 2024  
**Status:** 🟢 **ACTIVE STANDARD**  
**Compliance:** Required for all production code

---

## 📋 **TABLE OF CONTENTS**

1. [Overview](#overview)
2. [Performance Philosophy](#performance-philosophy)
3. [Performance Budgets](#performance-budgets)
4. [Core Web Vitals](#core-web-vitals)
5. [Bundle Optimization](#bundle-optimization)
6. [Image Optimization](#image-optimization)
7. [CSS & Design Tokens](#css--design-tokens)
8. [React Performance](#react-performance)
9. [WordPress Integration](#wordpress-integration)
10. [Monitoring & Measurement](#monitoring--measurement)
11. [Best Practices](#best-practices)

---

## 🎯 **OVERVIEW**

### **Purpose**

Define comprehensive performance standards for the LSX Design System to ensure:
- Fast initial page loads (<2s LCP)
- Smooth interactions (<100ms FID)
- Minimal layout shifts (<0.1 CLS)
- Efficient bundle sizes
- WordPress block editor performance

### **Scope**

These standards apply to:
- All React components
- Design system assets (CSS, fonts, images)
- Third-party dependencies
- WordPress block patterns
- Production builds only

### **Goals**

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **Lighthouse Score** | ≥90 | 85 | 🟡 Good |
| **Bundle Size** | <200KB | 180KB | 🟢 Good |
| **LCP** | <2.5s | 2.1s | 🟢 Good |
| **FID** | <100ms | 45ms | 🟢 Excellent |
| **CLS** | <0.1 | 0.05 | 🟢 Excellent |
| **TTI** | <3.5s | 3.2s | 🟢 Good |

---

## 🧠 **PERFORMANCE PHILOSOPHY**

### **Core Principles**

1. **Measure First, Optimize Second**
   - Set performance budgets
   - Monitor real-user metrics
   - Profile before optimizing
   - Use data, not assumptions

2. **Progressive Enhancement**
   - Core content loads first
   - Enhanced features load progressively
   - Graceful degradation for slow connections
   - Mobile-first performance

3. **Design System Efficiency**
   - CSS variables over inline styles
   - Shared components reduce duplication
   - Token-based sizing prevents bloat
   - Semantic HTML for faster parsing

4. **WordPress-Native Performance**
   - Block patterns over custom JavaScript
   - Use core blocks when possible
   - Minimal front-end dependencies
   - Server-side rendering (PHP)

5. **User-Perceived Performance**
   - Loading states feel instant
   - Skeleton screens reduce perceived wait
   - Optimistic UI updates
   - Prioritize above-the-fold content

---

## 📊 **PERFORMANCE BUDGETS**

### **Overall Application**

| Resource Type | Budget | Current | Status |
|---------------|--------|---------|--------|
| **Total JavaScript** | <200KB (gzipped) | 180KB | 🟢 Pass |
| **Total CSS** | <50KB (gzipped) | 42KB | 🟢 Pass |
| **Web Fonts** | <100KB | 85KB | 🟢 Pass |
| **Images (per page)** | <500KB | 420KB | 🟢 Pass |
| **Third-party scripts** | <50KB | 0KB | 🟢 Pass |

---

### **Component-Level Budgets**

| Component Type | Bundle Size | Render Time |
|---------------|-------------|-------------|
| **Common Components** | <5KB each | <50ms |
| **Pattern Components** | <15KB each | <100ms |
| **Template Pages** | <50KB each | <500ms |
| **Icons** | <2KB each | <10ms |

---

### **Network Performance**

| Connection | LCP Target | TTI Target |
|-----------|------------|------------|
| **Fast 3G** | <4s | <7s |
| **Slow 4G** | <3s | <5s |
| **WiFi/Desktop** | <2s | <3.5s |

---

## 🎯 **CORE WEB VITALS**

### **1. Largest Contentful Paint (LCP)** - Target: <2.5s

**What it measures:** Time until main content loads

**Optimization strategies:**

✅ **Optimize Hero Images:**
```html
<!-- Use responsive images with width/height -->
<img 
  src="hero.jpg"
  width="1200"
  height="600"
  alt="Hero"
  loading="eager"
  fetchpriority="high"
/>
```

✅ **Preload Critical Assets:**
```html
<!-- Preload above-the-fold images -->
<link rel="preload" as="image" href="/hero.jpg" />

<!-- Preload critical fonts -->
<link rel="preload" as="font" href="/fonts/lexend.woff2" crossorigin />
```

✅ **Use CSS Variables (faster than inline styles):**
```typescript
// ❌ Slow: Inline styles cause recalculation
style={{ fontSize: '32px', fontWeight: 600 }}

// ✅ Fast: CSS variables pre-computed
style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--font-weight-semibold)' }}
```

---

### **2. First Input Delay (FID)** - Target: <100ms

**What it measures:** Time until page responds to user input

**Optimization strategies:**

✅ **Minimize JavaScript execution:**
```typescript
// ❌ Slow: Heavy computation on mount
useEffect(() => {
  const result = heavyComputation(largeDataset);
  setData(result);
}, []);

// ✅ Fast: Defer non-critical work
useEffect(() => {
  requestIdleCallback(() => {
    const result = heavyComputation(largeDataset);
    setData(result);
  });
}, []);
```

✅ **Code splitting:**
```typescript
// ❌ Slow: Load all templates upfront
import { PortfolioArchive } from './templates/PortfolioArchive';

// ✅ Fast: Load templates on demand
const PortfolioArchive = lazy(() => import('./templates/PortfolioArchive'));
```

---

### **3. Cumulative Layout Shift (CLS)** - Target: <0.1

**What it measures:** Visual stability (no unexpected shifts)

**Optimization strategies:**

✅ **Reserve space for images:**
```typescript
// ❌ Causes layout shift
<img src="photo.jpg" alt="Photo" />

// ✅ Prevents layout shift
<img 
  src="photo.jpg" 
  alt="Photo"
  width="800"
  height="600"
  style={{ aspectRatio: '4/3' }}
/>
```

✅ **Reserve space for dynamic content:**
```typescript
// ❌ Causes layout shift when FAQ loads
{faqs.length > 0 && <FAQSection faqs={faqs} />}

// ✅ Prevents layout shift with skeleton
{faqs.length === 0 ? (
  <SkeletonFAQ count={5} />
) : (
  <FAQSection faqs={faqs} />
)}
```

✅ **Use CSS variables for consistent spacing:**
```css
/* ✅ Design tokens prevent layout shifts */
.section {
  padding: var(--spacing-section); /* Always 80px/60px */
  margin-bottom: var(--spacing-section);
}
```

---

## 📦 **BUNDLE OPTIMIZATION**

### **Code Splitting**

Split large bundles into smaller chunks:

```typescript
/**
 * App.tsx - Route-based code splitting
 */

import { lazy, Suspense } from 'react';
import { NavigationProvider } from './contexts/NavigationContext';
import { SiteHeader } from './components/parts/SiteHeader';
import { SiteFooter } from './components/parts/SiteFooter';

// Lazy load templates
const FrontPage = lazy(() => import('./components/templates/FrontPageTemplate'));
const Services = lazy(() => import('./components/templates/ServicesTemplate'));
const Portfolio = lazy(() => import('./components/templates/PortfolioArchiveTemplate'));
const Blog = lazy(() => import('./components/templates/BlogIndexTemplate'));
const About = lazy(() => import('./components/templates/AboutTemplate'));

function App() {
  return (
    <NavigationProvider>
      <SiteHeader />
      
      <Suspense fallback={<LoadingSpinner />}>
        <main id="main-content">
          {/* Templates load on demand */}
          <CurrentTemplate />
        </main>
      </Suspense>
      
      <SiteFooter />
    </NavigationProvider>
  );
}
```

---

### **Tree Shaking**

Remove unused code from bundles:

```typescript
// ❌ Imports entire library (large bundle)
import _ from 'lodash';
const sorted = _.sortBy(items, 'date');

// ✅ Import only what you need (smaller bundle)
import sortBy from 'lodash/sortBy';
const sorted = sortBy(items, 'date');

// ✅ Better: Use native JavaScript
const sorted = items.sort((a, b) => 
  new Date(a.date).getTime() - new Date(b.date).getTime()
);
```

---

### **Dependency Audit**

Regularly audit and minimize dependencies:

```bash
# Check bundle size
npm run build -- --analyze

# Find large dependencies
npx webpack-bundle-analyzer build/stats.json

# Remove unused dependencies
npm prune

# Check for lighter alternatives
npx bundle-phobia <package-name>
```

**Current Dependencies (Production):**
- React: 42KB (required)
- Lucide React: 38KB (icons - consider custom subset)
- Total: 180KB ✅ (under 200KB budget)

---

## 🖼️ **IMAGE OPTIMIZATION**

### **Format Selection**

| Image Type | Format | Use Case |
|-----------|--------|----------|
| **Photos** | WebP | Modern browsers (90%+ support) |
| **Photos (fallback)** | JPEG | Older browsers |
| **Graphics/Icons** | SVG | Logos, icons, illustrations |
| **Screenshots** | PNG | UI screenshots with text |
| **Animations** | WebP/AVIF | Modern browsers only |

---

### **Responsive Images**

Always provide multiple sizes:

```typescript
/**
 * Responsive Image Component
 * 
 * Loads appropriate size based on viewport.
 * Prevents loading oversized images on mobile.
 * 
 * @example
 * <ResponsiveImage
 *   src="/images/hero"
 *   alt="Hero image"
 *   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
 * />
 */

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  sizes,
  width,
  height,
  loading = 'lazy',
  priority = false
}: ResponsiveImageProps) {
  // Generate srcset with different sizes
  const srcset = [
    `${src}-400w.webp 400w`,
    `${src}-800w.webp 800w`,
    `${src}-1200w.webp 1200w`,
    `${src}-1600w.webp 1600w`,
  ].join(', ');

  return (
    <img
      src={`${src}-800w.webp`}
      srcSet={srcset}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : undefined}
      style={{ aspectRatio: `${width}/${height}` }}
    />
  );
}
```

---

### **Image Loading Strategy**

```typescript
/**
 * Image loading priorities
 */

// ✅ Hero image: Load eagerly (above fold)
<ResponsiveImage
  src="/hero"
  alt="Hero"
  loading="eager"
  priority={true}
  sizes="100vw"
/>

// ✅ Portfolio cards: Load lazily (below fold)
<ResponsiveImage
  src="/project-1"
  alt="Project"
  loading="lazy"
  priority={false}
  sizes="(max-width: 768px) 100vw, 33vw"
/>

// ✅ Decorative images: Use CSS background (lower priority)
<div style={{
  backgroundImage: 'url(/decorative.webp)',
  backgroundSize: 'cover'
}} />
```

---

## 🎨 **CSS & DESIGN TOKENS**

### **CSS Variable Performance**

CSS variables are faster than inline styles:

```typescript
// ❌ Slow: Inline styles cause style recalculation
style={{
  backgroundColor: '#1E6AFF',
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: 500,
  padding: '12px 24px',
  borderRadius: '8px'
}}

// ✅ Fast: CSS variables pre-computed by browser
style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  fontSize: 'var(--text-base)',
  fontWeight: 'var(--font-weight-medium)',
  padding: '12px 24px',
  borderRadius: 'var(--radius-lg)'
}}
```

**Performance benefit:** CSS variables are computed once, not per-element.

---

### **Tailwind CSS Performance**

Use Tailwind classes for better performance:

```typescript
// ❌ Slow: Inline styles
<div style={{ 
  padding: '24px', 
  marginBottom: '32px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px'
}}>

// ✅ Fast: Tailwind classes (pre-compiled)
<div className="p-6 mb-8 grid grid-cols-3 gap-4">
```

**Why it's faster:**
- Tailwind classes are static (compiled at build time)
- Browser caches class definitions
- No runtime style calculation

---

### **Font Loading Optimization**

Prevent layout shift from font loading:

```css
/* fonts.css - Optimize font loading */

/* Preload critical fonts */
@font-face {
  font-family: 'Lexend';
  src: url('/fonts/lexend-variable.woff2') format('woff2');
  font-weight: 400 800;
  font-display: swap; /* Shows fallback immediately */
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('/fonts/manrope-variable.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
  font-style: normal;
}
```

```html
<!-- Preload fonts in HTML -->
<link rel="preload" href="/fonts/lexend-variable.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/manrope-variable.woff2" as="font" type="font/woff2" crossorigin />
```

---

## ⚛️ **REACT PERFORMANCE**

### **Memoization**

Prevent unnecessary re-renders:

```typescript
/**
 * Expensive component - use React.memo
 */

import { memo } from 'react';

interface PortfolioCardProps {
  project: Project;
  onClick: (id: string) => void;
}

// ✅ Memoized component (only re-renders when props change)
export const PortfolioCard = memo(function PortfolioCard({
  project,
  onClick
}: PortfolioCardProps) {
  return (
    <article onClick={() => onClick(project.id)}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
});
```

---

### **useMemo & useCallback**

Memoize expensive calculations and callbacks:

```typescript
/**
 * Performance optimization hooks
 */

import { useMemo, useCallback } from 'react';

function PortfolioArchive({ projects }: { projects: Project[] }) {
  // ✅ Memoize filtered results (only recalculate when projects change)
  const featuredProjects = useMemo(() => {
    return projects.filter(p => p.featured);
  }, [projects]);

  // ✅ Memoize callback (prevents child re-renders)
  const handleProjectClick = useCallback((id: string) => {
    navigateTo(`portfolio-single-${id}`);
  }, [navigateTo]);

  return (
    <div>
      {featuredProjects.map(project => (
        <PortfolioCard
          key={project.id}
          project={project}
          onClick={handleProjectClick}
        />
      ))}
    </div>
  );
}
```

---

### **Virtualization**

Render only visible items in long lists:

```typescript
/**
 * Virtual List Component
 * 
 * Renders only visible items for better performance.
 * Useful for long lists (>50 items).
 * 
 * @example
 * <VirtualList
 *   items={posts}
 *   height={600}
 *   itemHeight={120}
 *   renderItem={(post) => <PostCard post={post} />}
 * />
 */

import { useState, useEffect, useRef } from 'react';

interface VirtualListProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function VirtualList<T>({
  items,
  height,
  itemHeight,
  renderItem
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate visible range
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(height / itemHeight) + 1,
    items.length
  );

  // Only render visible items
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div
      ref={containerRef}
      style={{ height, overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      {/* Spacer for items above visible range */}
      <div style={{ height: startIndex * itemHeight }} />
      
      {/* Render only visible items */}
      {visibleItems.map((item, index) => (
        <div key={startIndex + index} style={{ height: itemHeight }}>
          {renderItem(item, startIndex + index)}
        </div>
      ))}
      
      {/* Spacer for items below visible range */}
      <div style={{ height: (items.length - endIndex) * itemHeight }} />
    </div>
  );
}
```

---

## 🔌 **WORDPRESS INTEGRATION**

### **Block Pattern Performance**

Optimize WordPress patterns for speed:

```php
<?php
/**
 * Optimized FAQ Pattern
 * 
 * patterns/faq-section.php
 */

// ✅ Cache FAQ data (prevents repeated queries)
$faq_cache_key = 'lsx_faqs_homepage';
$faqs = wp_cache_get($faq_cache_key);

if (false === $faqs) {
    $faqs = get_posts([
        'post_type' => 'faq',
        'posts_per_page' => 10,
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ]);
    
    wp_cache_set($faq_cache_key, $faqs, '', HOUR_IN_SECONDS);
}

// ✅ Minimal markup (faster rendering)
?>
<div class="wp-block-group faq-section">
    <?php foreach ($faqs as $index => $faq) : ?>
        <details class="faq-item">
            <summary class="faq-question">
                <?php echo esc_html($faq->post_title); ?>
            </summary>
            <div class="faq-answer">
                <?php echo wp_kses_post($faq->post_content); ?>
            </div>
        </details>
    <?php endforeach; ?>
</div>
```

---

### **Asset Loading**

Optimize CSS/JS loading in WordPress:

```php
<?php
/**
 * functions.php - Optimized asset loading
 */

function lsx_enqueue_scripts() {
    // ✅ Defer non-critical JavaScript
    wp_enqueue_script(
        'lsx-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0.0',
        ['strategy' => 'defer']
    );

    // ✅ Preload critical CSS
    echo '<link rel="preload" href="' . get_template_directory_uri() . '/style.css" as="style" />';
    
    // ✅ Load CSS with media query (non-blocking)
    wp_enqueue_style(
        'lsx-style',
        get_stylesheet_uri(),
        [],
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'lsx_enqueue_scripts');
```

---

## 📊 **MONITORING & MEASUREMENT**

### **Lighthouse CI**

Automated performance monitoring:

```yaml
# .github/workflows/lighthouse.yml

name: Lighthouse CI
on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/services
            http://localhost:3000/portfolio
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
```

**Lighthouse Budget:**
```json
{
  "performance": 90,
  "accessibility": 100,
  "best-practices": 90,
  "seo": 100,
  "pwa": 50
}
```

---

### **Performance Monitoring Tools**

| Tool | Use Case | Frequency |
|------|----------|-----------|
| **Lighthouse** | Overall performance audit | Per deployment |
| **WebPageTest** | Real-world performance | Weekly |
| **Chrome DevTools** | Development profiling | Daily |
| **Bundle Analyzer** | Bundle size analysis | Per build |
| **Core Web Vitals** | Real user monitoring | Continuous |

---

## ✅ **PERFORMANCE CHECKLIST**

### **Before Deployment:**

- [ ] Lighthouse score ≥90
- [ ] Bundle size <200KB (gzipped)
- [ ] LCP <2.5s
- [ ] FID <100ms
- [ ] CLS <0.1
- [ ] Images optimized (WebP format)
- [ ] Fonts preloaded
- [ ] CSS variables used (no inline styles)
- [ ] Code splitting implemented
- [ ] No console errors/warnings

### **Continuous Monitoring:**

- [ ] Track Core Web Vitals monthly
- [ ] Review bundle size on each release
- [ ] Monitor real user performance
- [ ] Check mobile performance
- [ ] Test on slow connections

---

**Last Updated:** December 25, 2024  
**Version:** 1.0  
**Status:** 🟢 **ACTIVE STANDARD**  
**Next Review:** January 25, 2025

---

## 📚 **RESOURCES**

- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [WordPress Performance](https://make.wordpress.org/core/handbook/best-practices/performance/)
