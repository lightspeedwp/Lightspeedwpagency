# Viewport Enhancement Guidelines

**Version:** 1.0  
**Last Updated:** January 09, 2025

---

## 🎯 Philosophy

This document defines **progressive enhancement** for tablet and desktop viewports using a **mobile-first approach**. All base styles are optimized for mobile, with enhancements added for larger screens.

**Core Principles:**
- **Mobile-first foundation** — All features work on mobile
- **Progressive enhancement** — Add capabilities for larger screens
- **Performance-conscious** — Don't load desktop features on mobile
- **WordPress FSE compatible** — Use CSS custom properties and media queries

---

## 📱 Viewport Breakpoints

### WordPress Standard Breakpoints

```css
/* Mobile (base) */
/* No media query needed - mobile-first */

/* Small tablets (portrait) */
@media (min-width: 640px) { /* sm: */ }

/* Tablets (landscape) */
@media (min-width: 768px) { /* md: */ }

/* Desktops */
@media (min-width: 1024px) { /* lg: */ }

/* Large desktops */
@media (min-width: 1280px) { /* xl: */ }

/* Extra large screens */
@media (min-width: 1536px) { /* 2xl: */ }
```

### Breakpoint Usage Matrix

| Viewport | Min Width | Max Width | Usage | Primary Device |
|----------|-----------|-----------|-------|----------------|
| Mobile | 0px | 639px | Base styles | Phones |
| Small Tablet | 640px | 767px | Minor enhancements | Portrait tablets |
| Tablet | 768px | 1023px | Layout shifts | Landscape tablets |
| Desktop | 1024px | 1279px | Full features | Laptops |
| Large Desktop | 1280px | 1535px | Expanded layouts | Desktops |
| XL Desktop | 1536px+ | ∞ | Maximum spacing | Large displays |

---

## 🎨 Progressive Enhancement Patterns

### 1. Typography Enhancements

**Mobile-first with fluid scaling:**

```tsx
// Base (mobile) - already fluid via WordPress
<h1 style={{
  fontSize: 'var(--wp--preset--font-size--800)',  // 4rem/64px max
  fontFamily: 'Lexend, sans-serif'
}}>

// No media queries needed - fluid typography handles it!
// Font scales automatically from mobile to desktop
```

**Fluid typography configuration (theme.json):**
```json
{
  "settings": {
    "typography": {
      "fluid": {
        "minFontSize": "0.875rem",
        "maxViewportWidth": "1440px",
        "minViewportWidth": "320px"
      }
    }
  }
}
```

**When to use responsive typography:**
- ❌ DON'T: Add media queries for font sizes (fluid handles it)
- ✅ DO: Add media queries for line-height adjustments
- ✅ DO: Add media queries for letter-spacing fine-tuning

**Example: Line-height enhancement**
```css
.heading {
  line-height: var(--line-height-snug);  /* 1.25 - mobile */
}

@media (min-width: 1024px) {
  .heading {
    line-height: var(--line-height-tight);  /* 1.1 - desktop */
  }
}
```

---

### 2. Spacing Enhancements

**Mobile-first spacing with desktop expansion:**

```css
/* Mobile base */
.section {
  padding-block: var(--wp--preset--spacing--40);  /* 40px mobile */
}

/* Tablet */
@media (min-width: 768px) {
  .section {
    padding-block: var(--wp--preset--spacing--60);  /* 60px tablet */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .section {
    padding-block: var(--wp--preset--spacing--80);  /* 80px desktop */
  }
}
```

**Spacing Enhancement Matrix:**

| Element | Mobile (0-767px) | Tablet (768-1023px) | Desktop (1024px+) |
|---------|------------------|---------------------|-------------------|
| Hero Section | `spacing--60` (60px) | `spacing--80` (80px) | `spacing--100` (100px) |
| Content Section | `spacing--40` (40px) | `spacing--60` (60px) | `spacing--80` (80px) |
| Card Padding | `spacing--20` (20px) | `spacing--30` (30px) | `spacing--40` (40px) |
| Grid Gap | `spacing--20` (20px) | `spacing--30` (30px) | `spacing--40` (40px) |

---

### 3. Layout Enhancements

**Grid column expansion:**

```tsx
// Mobile: single column
// Tablet: 2 columns
// Desktop: 3 columns
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 'var(--wp--preset--spacing--30)'
}}>
```

**CSS Grid responsive pattern:**
```css
/* Mobile: 1 column */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--20);
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--wp--preset--spacing--30);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--wp--preset--spacing--40);
  }
}
```

---

### 4. Navigation Enhancements

**Mobile: Hamburger menu**
**Tablet: Horizontal menu**
**Desktop: Mega menu**

```tsx
// Mobile hamburger (base)
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Tablet/Desktop: horizontal navigation
// Use CSS to show/hide based on viewport
```

**CSS media query pattern:**
```css
/* Mobile: Hamburger */
.mobile-menu-button {
  display: block;
}

.desktop-navigation {
  display: none;
}

/* Desktop: Full navigation */
@media (min-width: 1024px) {
  .mobile-menu-button {
    display: none;
  }
  
  .desktop-navigation {
    display: flex;
    gap: var(--wp--preset--spacing--40);
  }
}
```

---

### 5. Image Enhancements

**Mobile: Optimized images**
**Tablet: Larger images**
**Desktop: Full-resolution images**

```tsx
<img
  src="image-mobile.jpg"
  srcSet="
    image-mobile.jpg 640w,
    image-tablet.jpg 1024w,
    image-desktop.jpg 1920w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="Responsive image"
/>
```

**WordPress responsive images:**
```css
/* Mobile: full width */
.hero-image {
  width: 100%;
  height: auto;
}

/* Desktop: constrained width */
@media (min-width: 1024px) {
  .hero-image {
    width: 50%;
    margin: 0 auto;
  }
}
```

---

### 6. Interaction Enhancements

**Mobile: Touch-optimized (44×44px minimum)**
**Desktop: Hover states, smaller targets**

```css
/* Mobile: Large touch targets */
.button {
  min-height: 44px;
  min-width: 44px;
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--30);
}

/* Desktop: Hover states */
@media (min-width: 1024px) and (hover: hover) {
  .button:hover {
    background-color: var(--wp--preset--color--secondary);
    transform: translateY(-2px);
  }
}
```

**Hover media query:**
```css
/* Only apply hover on devices that support it */
@media (hover: hover) {
  .card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}
```

---

## 📐 Container Width Enhancements

**Mobile-first container widths:**

```css
/* Mobile: full width with padding */
.container {
  max-width: 100%;
  padding-inline: var(--wp--preset--spacing--20);
  margin-inline: auto;
}

/* Tablet: constrained width */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding-inline: var(--wp--preset--spacing--30);
  }
}

/* Desktop: full width */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding-inline: var(--wp--preset--spacing--40);
  }
}

/* Large desktop: maximum width */
@media (min-width: 1280px) {
  .container {
    max-width: 1400px;
  }
}
```

---

## ⚡ Performance Enhancements

### Lazy Loading (Desktop-First)

**Load heavy features only on desktop:**

```tsx
// Desktop-only features
const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

if (isDesktop) {
  // Load animations, parallax, etc.
}
```

### Conditional Loading

```tsx
// Load large images only on desktop
const imageSize = window.innerWidth >= 1024 ? 'large' : 'small';
```

---

## ✅ Best Practices

### Do's ✅

- ✅ **Start mobile-first** — Base styles for mobile
- ✅ **Use WordPress breakpoints** — 640px, 768px, 1024px, 1280px
- ✅ **Progressive enhancement** — Add features for larger screens
- ✅ **Use fluid typography** — Automatic scaling via theme.json
- ✅ **Test all viewports** — Mobile, tablet, desktop
- ✅ **Use hover media query** — `@media (hover: hover)`
- ✅ **Optimize images** — Use srcset and sizes
- ✅ **Touch-friendly mobile** — 44×44px minimum

### Don'ts ❌

- ❌ **Don't desktop-first** — Always start mobile
- ❌ **Don't hard-code breakpoints** — Use standard values
- ❌ **Don't duplicate code** — Use progressive enhancement
- ❌ **Don't assume hover** — Mobile doesn't have hover
- ❌ **Don't use px breakpoints** — Use rem/em for accessibility
- ❌ **Don't load desktop assets on mobile** — Conditional loading
- ❌ **Don't forget tablet** — Middle ground between mobile/desktop

---

## 📚 Related Documentation

- **[spacing.md](./spacing.md)** - WordPress spacing scale
- **[typography.md](./typography.md)** - WordPress typography scale
- **[mobile/typography.md](../mobile/typography.md)** - Mobile typography
- **[mobile/images.md](../mobile/images.md)** - Mobile images
- **[mobile/performance.md](../mobile/performance.md)** - Mobile performance

---

**Version:** 1.0  
**Last Updated:** January 09, 2025  
**System:** Mobile-first progressive enhancement  
**Breakpoints:** WordPress standard (640px, 768px, 1024px, 1280px, 1536px)
