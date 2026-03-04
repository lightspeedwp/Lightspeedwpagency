# CSS File Structure Guidelines

**Version:** 1.0
**Created:** March 3, 2026
**Status:** MANDATORY for all code

---

## Overview

The LSX Design System uses a **CSS-First, Variable-Driven Architecture** with zero Tailwind CSS dependency. All styling is delivered through dedicated CSS files using CSS Custom Properties (variables), BEM naming conventions, and WordPress-aligned utility classes (`.wp-*` prefix).

This document defines the canonical CSS file structure, load order, and the role of every stylesheet in the system.

---

## Tailwind CSS Position (CRITICAL)

### Figma Make Prototype Environment

The **Figma Make** build environment requires the Tailwind CSS Vite plugin (`@tailwindcss/vite`) and the `tailwindcss` package in `devDependencies`. These are **infrastructure requirements of the prototype tooling** and **must not be removed** from `vite.config.ts` or `package.json`.

However:

1. **Zero Tailwind classes** may be used in any `.tsx` component file.
2. **Zero Tailwind directives** (`@tailwind base`, `@apply`, `@layer`, etc.) may appear in any `.css` file.
3. The file `/src/styles/tailwind.css` exists only as a placeholder. It must contain **no functional CSS** -- only a comment explaining its purpose.
4. All layout, spacing, typography, and color must use **WordPress-aligned utility classes** (`.wp-*`) or **BEM classes** with CSS variables.
5. During audits, any Tailwind class found in a component is a **compliance violation** and must be replaced.

### tailwind.css File Content (Canonical)

```css
/**
 * Tailwind CSS Integration
 *
 * Tailwind v4 base is provided by the Figma Make environment automatically.
 * This file is a required placeholder for the build tooling.
 *
 * DO NOT add any Tailwind directives, @apply rules, or utility classes here.
 * All project styling uses CSS variables, BEM classes, and .wp-* utilities.
 *
 * Project-specific animations are in animations.css.
 * All component animations use wp-* prefixed keyframes in dedicated CSS files.
 */
```

### Why We Keep the Tailwind Packages

| Item | Status | Reason |
|------|--------|--------|
| `tailwindcss` in `devDependencies` | Keep | Figma Make build requirement |
| `@tailwindcss/vite` in `devDependencies` | Keep | Figma Make build requirement |
| `tailwindcss()` in `vite.config.ts` | Keep | Figma Make build requirement |
| `/src/styles/tailwind.css` | Keep (empty placeholder) | Build tooling reference |
| Tailwind classes in components | **PROHIBITED** | Use `.wp-*` utilities instead |
| `@apply` in CSS files | **PROHIBITED** | Use standard CSS declarations |
| `@tailwind` directives | **PROHIBITED** | Not used in our architecture |

---

## CSS File Structure

### Canonical File Hierarchy

```
/src/styles/
|
|-- fonts.css                    # @import for Google Fonts (Lexend, Manrope)
|
|-- [Theme Layer]
|   |-- theme-base.css           # Theme-agnostic tokens (typography, spacing, radius, shadows, z-index, animations, icons)
|   |-- theme-light.css          # Light mode semantic colors (:root)
|   |-- theme-dark.css           # Dark mode semantic colors (.dark)
|   |-- theme-variables.css      # Extended palette: neon colors, page-identity colors, gradients beyond core
|   |-- theme-funky.css          # Funky/neon redesign overrides (opt-in layer)
|
|-- [Reset & Foundation Layer]
|   |-- resets.css               # Box-sizing, body, typography, list, form, media resets
|   |-- layout.css               # Root layout structure, duplicate prevention, hero fullscreen
|
|-- [Presets Layer]
|   |-- presets/
|       |-- index.css            # Aggregator for all presets
|       |-- colors.css           # WordPress --wp--preset--color--* mappings
|       |-- typography.css       # WordPress --wp--preset--font-size--* mappings
|       |-- spacing.css          # WordPress --wp--preset--spacing--* mappings
|       |-- shadows.css          # Shadow presets
|       |-- borders.css          # Border presets
|       |-- layout.css           # Layout presets (content-size, wide-size)
|
|-- [Utility Layer]
|   |-- utilities.css            # .wp-* utility classes (grid, flex, spacing, text, colors, responsive)
|   |-- responsive.css           # Fluid responsive system (12 breakpoints, clamp() typography)
|   |-- components.css           # Global component patterns (section, btn, card, heading, form, badge, link, wp-block-*)
|
|-- [Animation Layer]
|   |-- animations.css           # Keyframes and animation utility classes
|   |-- micro-interactions.css   # Micro-interaction animations
|   |-- advanced-animations.css  # Complex animation sequences
|
|-- [Block Layer]
|   |-- blocks/
|       |-- design/              # Accordion, Badge, Button, Card, Tabs, Group, Columns, etc.
|       |-- theme/               # Breadcrumbs, Pagination, Navigation, MegaMenu, SiteHeader, SiteFooter, etc.
|       |-- text/                # Table, List, Quote, Code, Paragraph, Heading, etc.
|       |-- media/               # Carousel, Gallery, Image, Video, Cover
|       |-- widgets/             # Latest Posts, Calendar, Archives, Categories, Social Icons, etc.
|       |-- navigation/          # Menubar
|       |-- feedback/            # Alert, Modal, Toast, Progress, Empty States, etc.
|       |-- layout/              # Offcanvas, Drawer, Resizable, Sidebar
|       |-- utility/             # Aspect Ratio, Command, Popover, Scroll Area, Tooltip, etc.
|       |-- data-display/        # Chart, Stats Card, Data Table, Comparison Table
|       |-- post-formats/        # Audio, Gallery, Link, Video, Image, Aside, Quote, etc.
|       |-- embed/               # Embed base styles
|       |-- woocommerce/         # Product Search, Mini Cart, WooCommerce base
|       |-- forms/               # Input, Textarea, Checkbox, Switch, Select, etc.
|       |-- dev-tools/           # PageSwitcher, FilterToolbar, ComplianceScorecard (route-level only)
|
|-- [Section Layer]
|   |-- section-styles.css       # Global section background/style presets
|   |-- presets/section-styles.css # WordPress-compatible .is-style-* presets
|   |-- sections/                # Hero, CTA, Media Grid, Post Hero section styles
|
|-- [Pattern Layer]
|   |-- patterns/                # 80+ pattern CSS files (hero, card-grid, cta-section, faq, etc.)
|
|-- [Template Layer]
|   |-- templates/               # Template-specific CSS (shared templates in index.css, route-specific via component imports)
|
|-- [Component Layer]
|   |-- components/              # Component-specific CSS (section, container, page-loader, scroll-down-arrow, etc.)
|
|-- [Page Layer]
|   |-- pages/                   # Page-specific CSS (sitemap.css)
|
|-- [UI Layer]
|   |-- ui/                      # UI component CSS (lightbox, toast, error-boundary, etc.)
|
|-- [WooCommerce Layer]
|   |-- woocommerce/             # WooCommerce template CSS (cart, checkout, product-archive, single-product)
|
|-- [Print]
|   |-- print.css                # Print media queries
|
|-- [WordPress Blocks]
|   |-- wordpress-blocks.css     # Core WordPress block styles
|   |-- wordpress-blocks-extended.css # Extended WordPress block styles
|
|-- [Aggregators]
|   |-- index.css                # MAIN entry point -- imports everything in correct cascade order
|   |-- theme.css                # Theme aggregator (legacy, used by theme.css documentation reference)
|   |-- tailwind.css             # Empty placeholder (Figma Make build requirement)
```

---

## Theme Layer Architecture (CRITICAL)

The theme layer is the foundation of the design system. It follows a strict separation of concerns:

### 1. `theme-base.css` -- Theme-Agnostic Tokens

**Selector:** `:root`
**Contains:** Variables that DO NOT change between light/dark mode.

| Category | Examples |
|----------|----------|
| **Font families** | `--font-primary`, `--font-secondary`, `--font-mono` |
| **Font sizes** | `--text-h1` through `--text-h6`, `--text-base`, `--text-sm`, `--text-lead` |
| **Font weights** | `--font-weight-light` through `--font-weight-black` |
| **Line heights** | `--line-height-tight`, `--line-height-snug`, `--line-height-normal`, `--line-height-relaxed` |
| **Letter spacing** | `--letter-spacing-tight` through `--letter-spacing-widest` |
| **Spacing scale** | `--spacing-0` through `--spacing-64` (23 values + semantic aliases) |
| **WordPress spacing** | `--wp--preset--spacing--*` mappings |
| **Border radius** | `--radius`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-2xl`, `--radius-full` |
| **Border widths** | `--wp--preset--border-width--*` |
| **Aspect ratios** | `--wp--preset--aspect-ratio--*` |
| **Layout sizes** | `--wp--style--global--content-size`, `--wp--style--global--wide-size` |
| **Section padding** | `--section-padding-x`, `--section-padding-y`, `--section-max-width` |
| **Breakpoints** | `--breakpoint-*` (reference only, not usable in `@media`) |
| **Z-index scale** | `--z-base` through `--z-tooltip` |
| **Animation tokens** | `--transition-fast`, `--transition-base`, `--ease-in-out` |
| **Icon tokens** | `--icon-size-*`, `--icon-duotone-opacity`, `--icon-transition` |
| **Overlays** | `--overlay-*` (backdrop, dark, light, white variants) |
| **Constant colors** | `--color-white`, `--color-black`, `--color-terminal-*` |

**Rule:** If a value is the same in both light and dark mode, it belongs in `theme-base.css`.

### 2. `theme-light.css` -- Light Mode Colors

**Selector:** `:root`
**Contains:** All semantic color variables for light mode.

| Category | Variables |
|----------|-----------|
| **Core** | `--background`, `--foreground` |
| **Cards** | `--card`, `--card-foreground`, `--card-hover` |
| **Popover** | `--popover`, `--popover-foreground` |
| **Primary** | `--primary`, `--primary-foreground`, `--primary-soft`, `--primary-light`, `--primary-rgb`, `--primary-dark` |
| **Secondary** | `--secondary`, `--secondary-foreground` |
| **Muted** | `--muted`, `--muted-foreground` |
| **Accent** | `--accent`, `--accent-foreground` |
| **Destructive** | `--destructive`, `--destructive-foreground`, `--destructive-soft` |
| **Warning** | `--warning`, `--warning-foreground`, `--warning-soft` |
| **Success** | `--success`, `--success-foreground`, `--success-soft` |
| **Info** | `--info`, `--info-foreground` |
| **Category** | `--category-green`, `--category-amber`, `--category-pink`, etc. |
| **Borders** | `--border`, `--border-soft`, `--border-extra-soft`, `--border-subtle` |
| **Input** | `--input`, `--input-background`, `--ring` |
| **Sidebar** | `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, etc. |
| **Glass** | `--glass-bg`, `--glass-bg-strong`, `--glass-border`, `--glass-text` |
| **Shadows** | `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-primary`, `--shadow-hover`, `--elevation-sm` |
| **Charts** | `--chart-1` through `--chart-5` |
| **Gradients** | `--gradient-blue`, `--gradient-purple`, etc. |
| **Neon** | `--neon-color` |
| **Logo** | `--logo-wordmark-color`, `--logo-icon-primary`, `--logo-icon-secondary` |
| **Icons** | `--icon-color-default`, `--icon-color-muted`, etc. |

### 3. `theme-dark.css` -- Dark Mode Colors

**Selector:** `.dark`
**Contains:** All the same variables as `theme-light.css`, overridden for dark mode.

**Rule:** Every variable defined in `theme-light.css` MUST have a corresponding override in `theme-dark.css`. No exceptions.

### 4. `theme-variables.css` -- Extended Palette

**Selector:** `:root` (with `.dark` overrides as needed)
**Contains:** Additional color tokens that extend beyond the core semantic system.

| Category | Examples |
|----------|----------|
| **Neon palette** | `--wp--preset--color--neon-pink`, `--wp--preset--color--neon-cyan`, etc. |
| **Neon gradients** | `--wp--preset--gradient--neon-hero`, `--wp--preset--gradient--neon-glow` |
| **Page identity** | `--grading-primary`, `--packaging-primary`, etc. |

**Rule:** Page-specific or feature-specific color palettes that don't fit the core semantic system go here.

### 5. `theme-funky.css` -- Funky/Neon Redesign Layer (NEW)

**Selector:** `.funky` or `:root` (depending on activation strategy)
**Contains:** Overrides and additions for the "Funky" neon aesthetic.

| Category | Purpose |
|----------|---------|
| **Neon overrides** | Enhanced glow effects, neon shadows, vibrant gradients |
| **Animation overrides** | Pulsing glows, neon flicker effects |
| **Shadow overrides** | Neon glow shadows (`--shadow-neon`, `--shadow-neon-intense`) |
| **Background effects** | Gradient overlays, orb animations specific to funky mode |

**Rule:** This file is an **opt-in enhancement layer**. It must not break the base design when disabled. Apply via a `.funky` class on `<body>` or similar root element.

### 6. `global.css` -- Global Non-Token Styles (PROPOSED)

**Purpose:** If created, this file would consolidate global non-variable CSS rules that don't fit into resets, utilities, or components. Currently this role is split across `resets.css`, `layout.css`, and `components.css`.

**Current status:** Not yet created. The existing split across resets/layout/components is functional. A `global.css` would only be created if consolidation provides clear benefit.

---

## Load Order (CRITICAL)

The cascade order in `/src/styles/index.css` is critical. Styles loaded later override earlier ones.

```
1. fonts.css              -- Font face declarations (must be first)
2. presets/index.css       -- WordPress preset mappings
3. resets.css              -- Global resets (box-sizing, body, typography margins)
4. theme-base.css          -- Theme-agnostic tokens (:root)
5. theme-light.css         -- Light mode colors (:root)
6. theme-dark.css          -- Dark mode colors (.dark)
7. theme-variables.css     -- Extended palette (:root + .dark)
8. theme-funky.css         -- Funky neon overrides (opt-in, loads after theme colors)
9. layout.css              -- Root layout structure, duplicate prevention
10. utilities.css          -- .wp-* utility classes
11. responsive.css         -- Fluid responsive system
12. micro-interactions.css -- Micro-interaction animations
13. advanced-animations.css -- Complex animations
14. wordpress-blocks.css   -- Core WordPress block styles
15. wordpress-blocks-extended.css -- Extended block styles
16. blocks/**/*.css        -- Block-specific styles (all categories)
17. section-styles.css     -- Global section presets
18. sections/**/*.css      -- Section-specific styles
19. patterns/**/*.css      -- Pattern styles
20. templates/**/*.css     -- Shared template styles (route-specific via component imports)
21. components/**/*.css    -- Component-specific styles
22. pages/**/*.css         -- Page-specific styles
23. ui/**/*.css            -- UI component styles
24. animations.css         -- Keyframes and animation utilities
25. print.css              -- Print media queries
26. components.css         -- Global component patterns (buttons, cards, headings)
```

### Why This Order Matters

1. **Fonts first** -- Ensures font faces are available before any typography tokens reference them.
2. **Presets before tokens** -- WordPress preset mappings are set before theme tokens that may reference them.
3. **Resets before tokens** -- Clean slate before applying design system values.
4. **Base before light/dark** -- Theme-agnostic tokens must be defined before mode-specific overrides.
5. **Light before dark** -- `:root` defines defaults; `.dark` overrides only when active.
6. **Variables after dark** -- Extended palette may reference core semantic variables.
7. **Funky after variables** -- Neon overrides layer on top of the complete color system.
8. **Utilities after tokens** -- Utility classes reference token values.
9. **Blocks/patterns/templates last** -- Most specific styles override generic utilities.

---

## Dual Import Issue (theme.css vs index.css)

Currently both `theme.css` and `index.css` import many of the same files. This creates potential duplicate loading:

| File | Imported by `index.css` | Imported by `theme.css` |
|------|-------------------------|------------------------|
| `theme-base.css` | Yes | Yes |
| `theme-light.css` | Yes | Yes |
| `theme-dark.css` | Yes | Yes |
| `patterns/*.css` | Yes | Yes |
| `templates/*.css` | Yes | Yes |

### Resolution

- **`index.css`** is the **canonical entry point**. All global imports go here.
- **`theme.css`** should be **deprecated** or converted to documentation-only. It should NOT be imported by any component or entry point.
- Any file that currently imports `theme.css` must be migrated to import `index.css` instead.

---

## Shadow Duplication Issue

Shadow variables are currently defined in **two places**:

1. `theme-base.css` -- Generic shadow definitions in `:root`
2. `theme-light.css` / `theme-dark.css` -- Mode-specific shadow overrides

### Resolution

Shadows that change between light and dark mode belong in `theme-light.css` and `theme-dark.css`. The duplicates in `theme-base.css` should be removed once the audit confirms all shadows are properly defined in both mode files.

---

## Naming Conventions

### BEM for Components

```css
/* Block */
.site-header { }

/* Element */
.site-header__logo { }
.site-header__nav { }

/* Modifier */
.site-header--sticky { }
.site-header--transparent { }
```

### WordPress Utilities

```css
/* Always use .wp-* prefix */
.wp-grid-3-cols { }
.wp-text-center { }
.wp-p-6 { }
.wp-bg-primary { }
```

### CSS Variables

```css
/* Semantic names, no abbreviations */
--background       /* NOT --bg */
--foreground       /* NOT --fg */
--primary          /* NOT --pri */
--spacing-6        /* NOT --sp-6 */
--text-h1          /* NOT --th1 */
```

---

## Compliance Rules

### What MUST Be in CSS Variables

| Category | Rule |
|----------|------|
| **Colors** | 100% CSS variables. Zero hex values in components. |
| **Font families** | `var(--font-primary)` or `var(--font-secondary)` only. Never hardcode `'Lexend'`. |
| **Font sizes** | `var(--text-*)` only. Never hardcode `16px` or `1rem`. |
| **Font weights** | `var(--font-weight-*)` only. Never hardcode `600`. |
| **Spacing** | `var(--spacing-*)` only. Never hardcode `24px` or `1.5rem`. |
| **Border radius** | `var(--radius-*)` only. Never hardcode `8px`. |
| **Shadows** | `var(--shadow-*)` only. Never hardcode shadow values. |
| **Transitions** | `var(--transition-*)` and `var(--ease-*)` only. |

### What MUST NOT Appear in Components

| Prohibited | Use Instead |
|-----------|-------------|
| Tailwind classes (`flex`, `p-6`, `grid-cols-3`) | `.wp-flex`, `.wp-p-6`, `.wp-grid-3-cols` |
| Hardcoded hex colors (`#1E6AFF`) | `var(--primary)` |
| Hardcoded font names (`'Lexend'`) | `var(--font-primary)` |
| Hardcoded pixel values for spacing | `var(--spacing-*)` |
| `@apply` directives | Standard CSS declarations |
| `@tailwind` directives | Not used |

---

## File Hygiene Rules

1. **Every CSS file must have a JSDoc header** with filename, purpose, and `@see` references.
2. **No empty CSS files.** If a file has no rules, delete it.
3. **No orphaned imports.** If a CSS file is deleted, remove all `@import` references.
4. **Template-specific CSS** is imported at the component level (`import '@/styles/templates/page-name.css'`), not in `index.css`.
5. **Shared template CSS** (used by 3+ templates) lives in `index.css`.
6. **Block CSS** is always imported in `index.css` since blocks are globally available.
7. **Dev-tools CSS** is imported at the route/component level, not globally.

---

## Related Guidelines

- **[CSS-ARCHITECTURE.md](/guidelines/CSS-ARCHITECTURE.md)** -- BEM naming, cascade strategy
- **[DARK-LIGHT-MODE-GUIDELINES.md](/guidelines/DARK-LIGHT-MODE-GUIDELINES.md)** -- Color token usage, WCAG compliance
- **[STYLING-MANDATE.md](/guidelines/STYLING-MANDATE.md)** -- No Tailwind, no inline styles mandate
- **[design-tokens/colors.md](/guidelines/design-tokens/colors.md)** -- Complete color reference
- **[design-tokens/typography.md](/guidelines/design-tokens/typography.md)** -- Typography tokens
- **[design-tokens/spacing.md](/guidelines/design-tokens/spacing.md)** -- Spacing scale
