# Performance Standards — Budgets & Core Web Vitals

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [performance.md](../performance.md)  

---

## Overview

### Purpose

Define comprehensive performance standards for the LSX Design System to ensure:
- Fast initial page loads (<2s LCP)
- Smooth interactions (<100ms FID)
- Minimal layout shifts (<0.1 CLS)
- Efficient bundle sizes
- WordPress block editor performance

### Scope

These standards apply to:
- All React components
- Design system assets (CSS, fonts, images)
- Third-party dependencies
- WordPress block patterns
- Production builds only

### Goals

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **Lighthouse Score** | >=90 | 85 | Good |
| **Bundle Size** | <200KB | 180KB | Good |
| **LCP** | <2.5s | 2.1s | Good |
| **FID** | <100ms | 45ms | Excellent |
| **CLS** | <0.1 | 0.05 | Excellent |
| **TTI** | <3.5s | 3.2s | Good |

---

## Performance Philosophy

### Core Principles

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

## Performance Budgets

### Overall Application

| Resource Type | Budget | Current | Status |
|---------------|--------|---------|--------|
| **Total JavaScript** | <200KB (gzipped) | 180KB | Pass |
| **Total CSS** | <50KB (gzipped) | 42KB | Pass |
| **Web Fonts** | <100KB | 85KB | Pass |
| **Images (per page)** | <500KB | 420KB | Pass |
| **Third-party scripts** | <50KB | 0KB | Pass |

### Component-Level Budgets

| Component Type | Bundle Size | Render Time |
|---------------|-------------|-------------|
| **Common Components** | <5KB each | <50ms |
| **Pattern Components** | <15KB each | <100ms |
| **Template Pages** | <50KB each | <500ms |
| **Icons** | <2KB each | <10ms |

### Network Performance

| Connection | LCP Target | TTI Target |
|-----------|------------|------------|
| **Fast 3G** | <4s | <7s |
| **Slow 4G** | <3s | <5s |
| **WiFi/Desktop** | <2s | <3.5s |

---

## Core Web Vitals

### 1. Largest Contentful Paint (LCP) — Target: <2.5s

**What it measures:** Time until main content loads

**Optimize Hero Images:**
```html
<img 
  src="hero.jpg"
  width="1200"
  height="600"
  alt="Hero"
  loading="eager"
  fetchpriority="high"
/>
```

**Preload Critical Assets:**
```html
<link rel="preload" as="image" href="/hero.jpg" />
<link rel="preload" as="font" href="/fonts/lexend.woff2" crossorigin />
```

**Use CSS Variables (faster than inline styles):**
```typescript
// Slow: Inline styles cause recalculation
style={{ fontSize: '32px', fontWeight: 600 }}

// Fast: CSS variables pre-computed
style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--font-weight-semibold)' }}
```

---

### 2. First Input Delay (FID) — Target: <100ms

**What it measures:** Time until page responds to user input

**Minimize JavaScript execution:**
```typescript
// Slow: Heavy computation on mount
useEffect(() => {
  const result = heavyComputation(largeDataset);
  setData(result);
}, []);

// Fast: Defer non-critical work
useEffect(() => {
  requestIdleCallback(() => {
    const result = heavyComputation(largeDataset);
    setData(result);
  });
}, []);
```

---

### 3. Cumulative Layout Shift (CLS) — Target: <0.1

**What it measures:** Visual stability (no unexpected shifts)

**Reserve space for images:**
```typescript
// Prevents layout shift
<img 
  src="photo.jpg" 
  alt="Photo"
  width="800"
  height="600"
  style={{ aspectRatio: '4/3' }}
/>
```

**Reserve space for dynamic content:**
```typescript
// Prevents layout shift with skeleton
{faqs.length === 0 ? (
  <SkeletonFAQ count={5} />
) : (
  <FAQSection faqs={faqs} />
)}
```

**Use CSS variables for consistent spacing:**
```css
.section {
  padding: var(--spacing-section);
  margin-bottom: var(--spacing-section);
}
```

---

**See also:** [performance-optimization.md](./performance-optimization.md) | [performance-wordpress.md](./performance-wordpress.md)
