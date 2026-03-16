# Spacing Tokens — Scales & Usage

**Category:** Design Tokens  
**Version:** 2.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [spacing.md](../spacing.md)  

---

## Overview

All spacing uses CSS variables defined in `/src/styles/theme-base.css`. Two scales are available:

1. **Primary Scale** (`--spacing-*`) — Used throughout the prototype codebase (most common)
2. **WordPress Scale** (`--wp--preset--spacing--*`) — WordPress theme.json compatible (for block editor)

**Base Unit:** 4px (0.25rem)  
**System:** Tailwind-compatible primary scale + WordPress FSE numeric scale

---

## Primary Spacing Scale

The primary scale is based on a 4px unit and is the most commonly used throughout the codebase:

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `var(--spacing-0)` | 0 | 0px | Reset spacing |
| `var(--spacing-1)` | 0.25rem | 4px | Hairline gaps |
| `var(--spacing-1-5)` | 0.375rem | 6px | Tight inline spacing |
| `var(--spacing-2)` | 0.5rem | 8px | Small gaps, icon padding |
| `var(--spacing-3)` | 0.75rem | 12px | Standard inline spacing |
| `var(--spacing-4)` | 1rem | 16px | Card padding, list gaps |
| `var(--spacing-5)` | 1.25rem | 20px | Standard component gap |
| `var(--spacing-6)` | 1.5rem | 24px | Default block gap |
| `var(--spacing-7)` | 1.75rem | 28px | Between components |
| `var(--spacing-8)` | 2rem | 32px | Section inner padding |
| `var(--spacing-9)` | 2.25rem | 36px | Expanded gaps |
| `var(--spacing-10)` | 2.5rem | 40px | Section gaps |
| `var(--spacing-12)` | 3rem | 48px | Large section spacing |
| `var(--spacing-14)` | 3.5rem | 56px | Between sections |
| `var(--spacing-16)` | 4rem | 64px | Section padding |
| `var(--spacing-20)` | 5rem | 80px | Hero spacing |
| `var(--spacing-24)` | 6rem | 96px | Maximum spacing |
| `var(--spacing-28)` | 7rem | 112px | Extra large |
| `var(--spacing-32)` | 8rem | 128px | Jumbo spacing |
| `var(--spacing-36)` | 9rem | 144px | |
| `var(--spacing-40)` | 10rem | 160px | |
| `var(--spacing-48)` | 12rem | 192px | |
| `var(--spacing-56)` | 14rem | 224px | |
| `var(--spacing-64)` | 16rem | 256px | Maximum |

### Semantic Aliases

| Alias | Maps To | Pixels | Usage |
|-------|---------|--------|-------|
| `var(--spacing-xs)` | `var(--spacing-2)` | 8px | Tight elements |
| `var(--spacing-sm)` | `var(--spacing-4)` | 16px | Small components |
| `var(--spacing-md)` | `var(--spacing-6)` | 24px | Standard components |
| `var(--spacing-lg)` | `var(--spacing-8)` | 32px | Large components |
| `var(--spacing-xl)` | `var(--spacing-12)` | 48px | Sections |
| `var(--spacing-2xl)` | `var(--spacing-16)` | 64px | Large sections |
| `var(--spacing-3xl)` | `var(--spacing-24)` | 96px | Hero sections |
| `var(--spacing-4xl)` | `var(--spacing-32)` | 128px | Maximum |

### Fluid Section Padding Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `var(--section-padding-x)` | `clamp(1rem, 2vw + 0.5rem, 2rem)` | 16px to 32px horizontal |
| `var(--section-padding-y)` | `clamp(3rem, 4vw + 1rem, 5rem)` | 48px to 80px vertical |
| `var(--section-padding-y-sm)` | `clamp(0.5rem, 0.5vw + 0.375rem, 0.75rem)` | 8px to 12px compact |
| `var(--section-max-width)` | `var(--wp--style--global--wide-size)` | 1440px |

---

## WordPress Spacing Scale

### Numeric Spacing Units (theme.json)

| Slug | Value | Pixels | CSS Variable | Usage |
|------|-------|--------|--------------|-------|
| `10` | 0.625rem | 10px | `var(--wp--preset--spacing--10)` | Tiny gaps |
| `20` | 1.25rem | 20px | `var(--wp--preset--spacing--20)` | Small gaps |
| `30` | 1.875rem | 30px | `var(--wp--preset--spacing--30)` | Standard gaps |
| `40` | 2.5rem | 40px | `var(--wp--preset--spacing--40)` | Base spacing |
| `50` | 3.125rem | 50px | `var(--wp--preset--spacing--50)` | Medium sections |
| `60` | 3.75rem | 60px | `var(--wp--preset--spacing--60)` | Large spacing |
| `70` | 4.375rem | 70px | `var(--wp--preset--spacing--70)` | XL sections |
| `80` | 5rem | 80px | `var(--wp--preset--spacing--80)` | XXL sections |
| `90` | 5.625rem | 90px | `var(--wp--preset--spacing--90)` | Hero padding |
| `100` | 6.25rem | 100px | `var(--wp--preset--spacing--100)` | Maximum |

---

## CSS Variable Usage

```css
/* CORRECT - WordPress CSS variables */
.element {
  padding: var(--wp--preset--spacing--40);
  margin-block: var(--wp--preset--spacing--20);
  gap: var(--wp--preset--spacing--30);
}

/* WRONG - Hard-coded values */
.element {
  padding: 40px;
  margin-block: 20px;
  gap: 30px;
}
```

### Common Spacing Patterns

**Card Padding:**
```css
.card { padding: var(--wp--preset--spacing--30); }
.card-large { padding: var(--wp--preset--spacing--40); }
```

**Section Spacing:**
```css
.section { padding-block: var(--wp--preset--spacing--60); }
.section-hero { padding-block: var(--wp--preset--spacing--80); }
```

**Grid Gaps:**
```css
.grid { gap: var(--wp--preset--spacing--40); }
.grid-tight { gap: var(--wp--preset--spacing--20); }
```

---

## Component Spacing Guidelines

### Section Padding

| Section Type | Vertical Padding | CSS Variable |
|--------------|------------------|--------------|
| Hero | 80-100px | `var(--wp--preset--spacing--80)` to `--100` |
| Standard | 60-70px | `var(--wp--preset--spacing--60)` to `--70` |
| Compact | 40-50px | `var(--wp--preset--spacing--40)` to `--50` |
| Dense | 30-40px | `var(--wp--preset--spacing--30)` to `--40` |

### Card Spacing

```tsx
// Standard card
<div style={{ padding: 'var(--wp--preset--spacing--30)', gap: 'var(--wp--preset--spacing--20)' }}>

// Large card
<div style={{ padding: 'var(--wp--preset--spacing--40)', gap: 'var(--wp--preset--spacing--30)' }}>

// Compact card
<div style={{ padding: 'var(--wp--preset--spacing--20)', gap: 'var(--wp--preset--spacing--10)' }}>
```

---

## Layout Spacing

### Grid Layouts

```tsx
// Blog/Portfolio Grids
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--wp--preset--spacing--40)' }}>

// Team Grids
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--wp--preset--spacing--50)' }}>

// Two-Column Layouts
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--wp--preset--spacing--60)' }}>
```

### Flex Layouts

```tsx
// Horizontal Stack
<div style={{ display: 'flex', gap: 'var(--wp--preset--spacing--20)' }}>

// Vertical Stack
<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--20)' }}>
```

---

## Responsive Spacing

### Mobile-First Approach

```css
/* Mobile: smaller spacing */
.section { padding-block: var(--wp--preset--spacing--40); }

/* Tablet and up */
@media (min-width: 768px) {
  .section { padding-block: var(--wp--preset--spacing--60); }
}

/* Desktop */
@media (min-width: 1024px) {
  .section { padding-block: var(--wp--preset--spacing--80); }
}
```

### Responsive Breakpoints

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| Mobile | < 640px | Base spacing |
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktops |
| `xl:` | 1280px | Large desktops |
| `2xl:` | 1536px | Extra large screens |

---

**See also:** [spacing-patterns.md](./spacing-patterns.md)
