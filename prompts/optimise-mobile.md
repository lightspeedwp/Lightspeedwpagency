# Optimise Mobile — Mobile-Specific Performance

**Type:** Sub-Trigger  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise mobile`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes  
**Estimated Duration:** 45-50 minutes

---

## Purpose

Optimize mobile experience through touch target verification, mobile-specific bundle optimization, responsive image sizing, mobile typography, and mobile performance budgets.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope (5 Areas)

### 1. Touch Target Sizes

**WCAG 2.1 AA Requirement:** Minimum 44x44px touch targets

**Scan for:** Interactive elements smaller than 44x44px

```css
/* ❌ Too small for touch */
.wp-button {
  padding: var(--spacing-2) var(--spacing-4); /* Results in ~32px height */
}

/* ✅ Minimum touch target */
.wp-button {
  min-height: 44px;
  min-width: 44px;
  padding: var(--spacing-3) var(--spacing-6);
}

/* ✅ Comfortable touch target */
.wp-button--large {
  min-height: 48px;
  padding: var(--spacing-4) var(--spacing-8);
}
```

**Check all interactive elements:**
- Buttons
- Links
- Form inputs
- Icon buttons
- Navigation menu items
- Close buttons
- Toggle switches
- Checkbox/radio hitareas

---

### 2. Mobile Bundle Optimization

**Strategy:** Load mobile-optimized assets on mobile devices

```tsx
// Conditional loading based on viewport
const isMobile = window.innerWidth < 768;

// Load lighter components on mobile
const HeroComponent = isMobile 
  ? lazy(() => import('./components/HeroMobile'))
  : lazy(() => import('./components/HeroDesktop'));
```

---

### 3. Responsive Image Sizing

**Use proper image sizes for mobile:**

```tsx
// Before: Same large image on all devices
<img src="/images/hero-4k.jpg" alt="Hero" />

// After: Responsive images
<img 
  src="/images/hero-mobile.jpg"
  srcSet="
    /images/hero-mobile.jpg 480w,
    /images/hero-tablet.jpg 768w,
    /images/hero-desktop.jpg 1200w,
    /images/hero-4k.jpg 2400w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Hero"
  loading="lazy"
/>
```

---

### 4. Mobile Font Sizes

**Ensure readable text on mobile:**

```css
/* Base font sizes should scale appropriately */
:root {
  --text-base: 16px;  /* Never below 16px to avoid zoom on iOS */
  --text-sm: 14px;
  --text-xs: 12px;    /* Minimum for mobile */
}

/* Mobile-specific overrides */
@media (max-width: 768px) {
  .wp-heading-1 {
    font-size: var(--text-3xl);  /* Smaller on mobile */
  }
  
  .wp-heading-2 {
    font-size: var(--text-2xl);
  }
  
  .wp-body-text {
    font-size: var(--text-base);
    line-height: 1.6;  /* Increased line-height for readability */
  }
}
```

---

### 5. Mobile Performance Budget

**Targets for mobile:**
- Initial bundle: < 200KB
- Images per page: < 500KB total
- Time to Interactive: < 3s on 3G
- First Contentful Paint: < 1.5s

**Optimizations:**
- Lazy load below-the-fold content
- Defer non-critical JavaScript
- Inline critical CSS
- Preload critical assets

---

## Mobile Optimization Checklist

### Touch Targets
- [ ] All interactive elements ≥ 44x44px
- [ ] Adequate spacing between touch targets (min 8px)
- [ ] Icon buttons have proper tap area
- [ ] Form inputs have comfortable height (min 44px)

### Bundle Size
- [ ] Mobile bundle < 200KB
- [ ] Code splitting for mobile-specific features
- [ ] Heavy libraries conditionally loaded

### Images
- [ ] Responsive images with srcset
- [ ] Mobile-optimized image sizes
- [ ] WebP format with fallbacks
- [ ] Lazy loading for below-the-fold images

### Typography
- [ ] Base font size ≥ 16px (prevent iOS zoom)
- [ ] Line-height ≥ 1.5 for body text
- [ ] Mobile-specific heading sizes
- [ ] Adequate contrast (4.5:1 minimum)

### Performance
- [ ] Initial load < 200KB
- [ ] Time to Interactive < 3s on 3G
- [ ] No layout shift (CLS < 0.1)
- [ ] Critical CSS inlined

---

## Success Metrics

| Metric | Target |
|---|---|
| Touch targets < 44px | 0 |
| Mobile bundle size | < 200KB |
| Mobile image sizes | Optimized srcset |
| Font size violations | 0 (all ≥ 16px base) |
| Mobile performance score | > 85 |

---

## Deliverables

1. **Audit Report:** `/reports/YYYY-MM/mobile-optimisation-report-[date].md`
2. **Task List:** Add tasks to `/tasks/task-list.md`
3. **CHANGELOG Entry:** Document mobile optimizations

---

**Prompt Location:** `/prompts/optimise-mobile.md`  
**Category:** Optimisation  
**Difficulty:** Medium  
**Estimated Duration:** 45-50 minutes
