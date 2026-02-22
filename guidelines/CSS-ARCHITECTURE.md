# CSS Architecture & Strategy

**Version:** 2.0
**Last Updated:** February 18, 2026

---

## 🎯 Overview

The LSX Design System uses a **CSS-First, Variable-Driven Architecture**. We avoid CSS-in-JS libraries and inline styles in favor of standard CSS files that leverage CSS Custom Properties (Variables) for theming. This ensures maximum compatibility with WordPress FSE (Full Site Editing) and `theme.json`.

---

## 📂 File Structure & Import Order

All global styles are imported via `/src/styles/index.css`. The load order is critical for cascade management.

```css
/* /src/styles/index.css */

/* 1. Core Foundations */
@import './fonts.css';              /* Font-face declarations */
@import './tailwind.css';           /* Minimal Tailwind reset (preflight) */
@import './theme-base.css';         /* Spacing, Typography, Radius, Layout variables */
@import './theme-light.css';        /* Light mode color tokens */
@import './theme-dark.css';         /* Dark mode color tokens */

/* 2. Global Utilities & Blocks */
@import './utilities.css';          /* .wp-* utility classes (Grid, Text, Flex) */
@import './wordpress-blocks.css';   /* Core WordPress block styles */
@import './animations.css';         /* Keyframes and animation utilities */

/* 3. Global Patterns */
@import './section-styles.css';     /* Section background presets */
@import './print.css';              /* Print media queries */
```

### Component-Specific CSS

Styles for specific templates or complex patterns are located in:
- `/src/styles/patterns/*.css` (e.g., `global-search.css`)
- `/src/styles/templates/*.css` (e.g., `page-service-hosting.css`)
- `/src/styles/blocks/*.css` (e.g., `site-header.css`)

These are imported directly by the React components that use them.

---

## 🧩 BEM Naming Conventions

We strictly follow **BEM (Block Element Modifier)** methodology to prevent style leaks and ensure maintainability.

```css
/* Block */
.card {}

/* Element */
.card__image {}
.card__title {}

/* Modifier */
.card--featured {}
.card__image--large {}
```

### WordPress-Specific BEM

For WordPress core blocks, we follow the WordPress naming convention which is similar to BEM but uses `wp-block-` prefixes.

```css
/* Core Block */
.wp-block-group {}
.wp-block-heading {}

/* Block Style Variation (Modifier) */
.is-style-outline {}
.has-text-align-center {}
```

---

## 🛠️ WordPress Utility Classes (`.wp-*`)

We have replaced arbitrary Tailwind classes with a structured set of WordPress-aligned utility classes. These live in `/src/styles/utilities.css`.

### Grid System
```html
<div className="wp-grid-2-cols"></div> <!-- 1 col mobile, 2 col tablet+ -->
<div className="wp-grid-3-cols"></div> <!-- 1 col mobile, 3 col tablet+ -->
<div className="wp-grid-4-cols"></div> <!-- 1 col mobile, 4 col tablet+ -->
```

### Spacing (Gap)
```html
<div className="wp-gap-4"></div> <!-- 16px gap -->
<div className="wp-gap-8"></div> <!-- 32px gap -->
```

### Typography
```html
<p className="wp-text-center">Centered text</p>
<p className="wp-text-lg">Large text</p>
<p className="wp-font-bold">Bold text</p>
<p className="wp-uppercase">Uppercase text</p>
```

### Colors
```html
<div className="wp-bg-primary"></div>
<div className="wp-text-white"></div>
```

### Layout
```html
<div className="wp-container"></div>      <!-- Standard content width -->
<div className="wp-container-wide"></div> <!-- Wide width (1440px) -->
<div className="wp-flex"></div>           <!-- Flex container -->
<div className="wp-flex-center"></div>    <!-- Centered flex items -->
```

### Responsive Modifiers
Prefixes `md:` and `lg:` are available for key utilities.
```html
<div className="wp-block md:wp-flex"></div> <!-- Block on mobile, Flex on tablet -->
```

---

## 🎨 CSS Variable Categories

All design tokens are stored as CSS variables. **Never use hardcoded pixel or hex values.**

| Category | Prefix | Example | Source |
|----------|--------|---------|--------|
| **Colors** | `--` | `--primary`, `--background` | `theme-light.css` / `theme-dark.css` |
| **Spacing** | `--spacing-` | `--spacing-4` (16px) | `theme-base.css` |
| **Typography** | `--text-` | `--text-xl`, `--text-h1` | `theme-base.css` |
| **Fonts** | `--font-` | `--font-primary` | `theme-base.css` |
| **Weights** | `--font-weight-` | `--font-weight-bold` | `theme-base.css` |
| **Radius** | `--radius-` | `--radius-lg` | `theme-base.css` |
| **Shadows** | `--shadow-` | `--shadow-md` | `theme-base.css` |
| **Z-Index** | `--z-` | `--z-sticky` | `theme-base.css` |
| **Transitions** | `--transition-` | `--transition-base` | `theme-base.css` |

---

## 🔮 Future CSS Optimization Strategy

### 1. Global CSS Preset System
**Goal:** Consolidate all section style variations into a single `presets.css` system driven by data attributes.
- Remove ad-hoc "neon" or "dark" classes in favor of `[data-theme="neon"]`.
- Centralize all gradient definitions.

### 2. Token Consolidation
**Goal:** Reduce redundant tokens.
- Merge `--shadow-card-hover` and `--shadow-hover`.
- Standardize overlay opacity tokens (`--overlay-10`, `--overlay-20`, etc.).

### 3. Fluid Typography & Spacing 2.0
**Goal:** Enhance `clamp()` functions for ultra-wide monitors (2560px+).
- Introduce `--text-scale-ratio` variable to control scaling curve.
- Add `--spacing-fluid-*` tokens that scale with viewport width explicitly.

### 4. Custom Property Inheritance
**Goal:** Use "private" local variables for component isolation.
```css
.card {
  --_card-padding: var(--spacing-6);
  padding: var(--_card-padding);
}
.card--compact {
  --_card-padding: var(--spacing-4);
}
```

---

## 📚 Related Documentation

- **[WordPress Blocks CSS Architecture](./WORDPRESS-BLOCKS-CSS-ARCHITECTURE.md)** — Detailed breakdown of core block styling.
- **[Dark & Light Mode Guidelines](./DARK-LIGHT-MODE-GUIDELINES.md)** — Color system reference.
- **[Design System Usage](./design-system/design-system-usage-guide.md)** — How to use tokens in React.
