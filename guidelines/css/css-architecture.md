# CSS Architecture Documentation

**Created:** March 10, 2026  
**Last Updated:** March 10, 2026  
**Purpose:** Document the CSS loading order, design system integration, and CSS variable compliance standards

---

## Overview

The LSX Design prototype uses a **CSS-first architecture** where all styling comes from CSS files with 100% CSS variable compliance. This gives users complete control over styling by editing CSS files alone, without touching React components.

**Key Principles:**
1. **CSS Variables ONLY** - No hardcoded values (colors, spacing, fonts, borders, radius)
2. **WordPress Utility Classes** - Use `.wp-*` prefixed classes, NO Tailwind classes
3. **BEM Naming Conventions** - Block Element Modifier architecture for all custom components
4. **Modular Organization** - Base files + component-specific files for maximum reusability
5. **Design System Compliance** - 100% adherence to LSX Design token system

---

## CSS Loading Order (CRITICAL)

**Location:** `/src/styles/index.css`

The CSS manifest follows a **strict loading order** to ensure variables and base classes cascade properly:

### Core System (Layers 1-10)

```css
/* 1. Fonts - Font face declarations FIRST */
@import './fonts.css';

/* 2. Presets - WordPress-compatible presets and theme.json tokens */
@import './presets/index.css';

/* 3. Resets - CSS resets and base element styles */
@import './resets.css';

/* 4. Theme Base - Spacing, typography, borders, radius (no colors) */
@import './theme-base.css';

/* 5. Theme Light - Light mode semantic colors */
@import './theme-light.css';

/* 6. Theme Dark - Dark mode semantic colors (prefers-color-scheme: dark) */
@import './theme-dark.css';

/* 7. Theme Variables - Extended CSS variables for WordPress compatibility */
@import './theme-variables.css';

/* 8. Theme Funky - Neon aesthetic overrides (gradients, glows, animations) */
@import './theme-funky.css';

/* 9. Layout - Global layout utilities (containers, grids, responsive) */
@import './layout.css';

/* 10. Utilities - WordPress utility classes (.wp-*) */
@import './utilities.css';
```

**Why This Order?**
1. **Fonts first** - Font faces must be declared before they're referenced
2. **Presets early** - WordPress presets provide fallback values
3. **Resets before styles** - Reset browser defaults before applying design system
4. **Base before themes** - Non-color tokens first, then colors
5. **Light before dark** - Light mode default, dark mode in media query
6. **Variables before components** - All variables defined before use
7. **Utilities last** - Utility classes can override component styles

### Component Imports (Layers 11-14)

```css
/* 11. Common Components - Shared UI components */
@import './components/index.css';

/* 12. Patterns - Block patterns (cards, CTAs, features, stats) */
@import './patterns/index.css';

/* 13. Template Parts - Header, footer, breadcrumbs */
@import './parts/index.css';

/* 14. Templates - Page templates */
@import './templates/index.css';
```

**Why This Order?**
- **Dependencies:** Common components → Patterns → Parts → Templates
- **Specificity:** More generic styles first, more specific styles last
- **Reusability:** Base components can be used by patterns, patterns by templates

### Responsive & Performance (Layer 15)

```css
/* 15. Responsive - Media queries and breakpoint-specific styles */
@import './responsive.css';
```

**Why Last?**
- **Overrides:** Responsive styles override base styles at specific breakpoints
- **Performance:** Single consolidated media query file, not scattered across components

---

## CSS Variable System

### Required CSS Variables

**CRITICAL:** ALL components MUST use CSS variables. NO hardcoded values allowed.

#### Typography Variables

**Font Families:**
```css
/* ALWAYS use these variables - NEVER hardcode font names */
--font-primary: 'Lexend', sans-serif;      /* Headings, body, UI */
--font-secondary: 'Manrope', sans-serif;   /* Small text only */
```

❌ **WRONG:**
```css
.heading {
  font-family: 'Lexend', sans-serif;  /* NEVER hardcode */
}
```

✅ **CORRECT:**
```css
.heading {
  font-family: var(--font-primary);   /* Always use variable */
}
```

**Font Sizes:**
```css
/* Heading scale */
--text-h1: clamp(32px, 4vw + 16px, 64px);      /* 32px → 64px */
--text-h2: clamp(28px, 3vw + 16px, 48px);      /* 28px → 48px */
--text-h3: clamp(24px, 2vw + 14px, 36px);      /* 24px → 36px */
--text-h4: clamp(20px, 1.5vw + 12px, 28px);    /* 20px → 28px */
--text-h5: clamp(18px, 1vw + 12px, 24px);      /* 18px → 24px */
--text-h6: clamp(16px, 0.75vw + 12px, 20px);   /* 16px → 20px */

/* Body text scale */
--text-base: clamp(15px, 0.5vw + 14px, 18px);  /* 15px → 18px */
--text-lead: clamp(18px, 1vw + 16px, 22px);    /* 18px → 22px */
--text-sm: 14px;
--text-xs: 12px;
--text-lg: 20px;
--text-xl: 24px;
```

**Font Weights:**
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

#### Color Variables

**Semantic Colors (Light/Dark Mode):**
```css
/* Light Mode (theme-light.css) */
--background: #ffffff;
--foreground: #1a1a1a;
--primary: #8b5cf6;
--primary-foreground: #ffffff;
--muted: #f5f5f5;
--muted-foreground: #737373;
--card: #ffffff;
--card-foreground: #1a1a1a;
--border: #e5e5e5;
--accent: #ec4899;
--accent-foreground: #ffffff;

/* Dark Mode (theme-dark.css) */
--background: #090909;  /* NOT #121212 - that's Figma iframe crash color! */
--foreground: #f5f5f5;
--primary: #a78bfa;
--primary-foreground: #1a1a1a;
--muted: #1a1a1a;
--muted-foreground: #a3a3a3;
--card: #121212;
--card-foreground: #f5f5f5;
--border: #262626;
--accent: #f472b6;
--accent-foreground: #1a1a1a;
```

**Neon Accent Colors (Funky Theme):**
```css
--neon-pink: #ff0080;
--neon-purple: #bf40ff;
--neon-blue: #00d4ff;
--neon-green: #00ff88;
--neon-yellow: #ffed4e;
--neon-orange: #ff6b35;
```

❌ **WRONG:**
```css
.button {
  background: #8b5cf6;  /* NEVER hardcode hex colors */
  color: #ffffff;
}
```

✅ **CORRECT:**
```css
.button {
  background: var(--primary);            /* Always use semantic variables */
  color: var(--primary-foreground);
}
```

#### Spacing Variables

**Spacing Scale:**
```css
--spacing-0: 0;
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-16: 64px;
--spacing-20: 80px;
--spacing-24: 96px;
--spacing-32: 128px;
--spacing-40: 160px;
--spacing-48: 192px;
--spacing-56: 224px;
--spacing-64: 256px;
```

❌ **WRONG:**
```css
.section {
  padding: 64px 32px;  /* NEVER hardcode px values */
  gap: 24px;
}
```

✅ **CORRECT:**
```css
.section {
  padding: var(--spacing-16) var(--spacing-8);  /* Always use spacing variables */
  gap: var(--spacing-6);
}
```

#### Border & Radius Variables

**Border Radius:**
```css
--radius: 4px;
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-2xl: 16px;
--radius-full: 9999px;
```

**Borders:**
```css
--border-width: 1px;
--border-width-2: 2px;
--border-width-4: 4px;
--border-width-8: 8px;
```

❌ **WRONG:**
```css
.card {
  border-radius: 8px;           /* NEVER hardcode px values */
  border: 1px solid #e5e5e5;    /* NEVER hardcode border width or color */
}
```

✅ **CORRECT:**
```css
.card {
  border-radius: var(--radius-lg);                /* Use radius variable */
  border: var(--border-width) solid var(--border); /* Use border variables */
}
```

#### Shadow Variables

**Box Shadows:**
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

**Neon Glows:**
```css
--glow-pink: 0 0 20px rgba(255, 0, 128, 0.5);
--glow-purple: 0 0 20px rgba(191, 64, 255, 0.5);
--glow-blue: 0 0 20px rgba(0, 212, 255, 0.5);
```

---

## WordPress Utility Classes

**CRITICAL:** Use WordPress utility classes (`.wp-*` prefix), NOT Tailwind classes.

### Grid Utilities

```css
/* Grid utilities - responsive 1 → 2 → 3 → 4 columns */
.wp-grid-2-cols { display: grid; gap: var(--spacing-8); }
.wp-grid-3-cols { display: grid; gap: var(--spacing-8); }
.wp-grid-4-cols { display: grid; gap: var(--spacing-8); }
```

❌ **WRONG - Tailwind classes:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

✅ **CORRECT - WordPress utilities:**
```tsx
<div className="wp-grid-3-cols">
```

### Max-Width Utilities

```css
/* Max-width utilities - auto-centered containers */
.wp-max-w-3xl { max-width: 768px; margin-inline: auto; }
.wp-max-w-4xl { max-width: 896px; margin-inline: auto; }
.wp-max-w-6xl { max-width: 1152px; margin-inline: auto; }
```

❌ **WRONG - Tailwind classes:**
```tsx
<div className="max-w-6xl mx-auto">
```

✅ **CORRECT - WordPress utilities:**
```tsx
<div className="wp-max-w-6xl">
```

### Text Alignment Utilities

```css
.wp-text-center { text-align: center; }
.wp-text-left { text-align: left; }
.wp-text-right { text-align: right; }
```

❌ **WRONG - Tailwind classes:**
```tsx
<div className="text-center">
```

✅ **CORRECT - WordPress utilities:**
```tsx
<div className="wp-text-center">
```

---

## BEM Naming Conventions

**Block Element Modifier (BEM)** architecture for all custom components.

### BEM Structure

```
.block { }                    /* Block - standalone component */
.block__element { }           /* Element - part of block */
.block--modifier { }          /* Modifier - variation of block */
.block__element--modifier { } /* Element with modifier */
```

### WordPress BEM Integration

**Pattern:** `.wp-block-{block-name}`

```css
/* WordPress block */
.wp-block-button { }
.wp-block-button__text { }
.wp-block-button--primary { }
.wp-block-button--secondary { }
```

### Pattern BEM

**Pattern:** `.pattern-{pattern-name}`

```css
/* Pattern component */
.pattern-feature-card { }
.pattern-feature-card__icon { }
.pattern-feature-card__title { }
.pattern-feature-card__description { }
.pattern-feature-card--highlighted { }
```

### Template BEM

**Pattern:** `.template-{template-name}`

```css
/* Template component */
.template-about { }
.template-about__hero { }
.template-about__content { }
.template-about__team-grid { }
```

**Complete BEM Guide:** See `/guidelines/development/bem-naming-conventions.md`

---

## Modular CSS Architecture

### Base Files (Shared Structures)

**Purpose:** Extract common CSS patterns into reusable base files to eliminate duplication

**Location:** `/src/styles/base/`

**Example Base Files:**
- `archive-base.css` - Shared archive template structure (17 templates)
- `service-base.css` - Shared service template structure (21 templates)
- `blog-base.css` - Shared blog template structure (5 templates)
- `portfolio-base.css` - Shared portfolio structure (4 templates)
- `about-base.css` - Shared about page structure (5 templates)
- `solution-base.css` - Shared solution page structure (5 templates)
- `utility-base.css` - Shared utility page structure (7 templates)
- `system-base.css` - Shared system page structure (8 templates)

**Usage Pattern:**

```css
/* Template-specific CSS */
@import '../base/service-base.css';

/* ONLY unique overrides below this line */
.template-seo-service__hero {
  /* Unique SEO service styling */
}
```

**Benefits:**
- **10-38x maintainability** - Update 1 base file → affects 5-20 templates
- **48-92% code reduction** - Eliminate duplicate CSS across templates
- **99.9%+ time savings** - Style changes take seconds instead of hours
- **Single source of truth** - Shared patterns defined once, used everywhere

### Component-Specific Files

**Pattern:** One CSS file per component

```
Component: /src/app/components/patterns/FeatureCard.tsx
CSS File:  /src/styles/patterns/feature-card.css
```

**Import in Component:**
```tsx
import '@/styles/patterns/feature-card.css';
```

**Import in CSS Manifest:**
```css
/* /src/styles/patterns/index.css */
@import './feature-card.css';
```

---

## CSS Variable Compliance Enforcement

### Design System Compliance Rules

**100% CSS variable compliance required across ALL files.**

#### Typography Compliance

❌ **VIOLATIONS:**
```css
.heading {
  font-family: 'Lexend', sans-serif;  /* NEVER hardcode font names */
  font-size: 32px;                     /* NEVER hardcode font sizes */
  font-weight: 600;                    /* NEVER hardcode font weights */
}
```

✅ **COMPLIANT:**
```css
.heading {
  font-family: var(--font-primary);        /* Always use variable */
  font-size: var(--text-h2);               /* Always use variable */
  font-weight: var(--font-weight-semibold); /* Always use variable */
}
```

#### Color Compliance

❌ **VIOLATIONS:**
```css
.button {
  background: #8b5cf6;           /* NEVER hardcode hex colors */
  color: #ffffff;                /* NEVER hardcode hex colors */
  border: 1px solid #e5e5e5;    /* NEVER hardcode hex colors */
}
```

✅ **COMPLIANT:**
```css
.button {
  background: var(--primary);            /* Semantic color variable */
  color: var(--primary-foreground);      /* Semantic color variable */
  border: var(--border-width) solid var(--border); /* Border variables */
}
```

#### Spacing Compliance

❌ **VIOLATIONS:**
```css
.section {
  padding: 64px 32px;  /* NEVER hardcode px values */
  margin: 32px 0;      /* NEVER hardcode px values */
  gap: 24px;           /* NEVER hardcode px values */
}
```

✅ **COMPLIANT:**
```css
.section {
  padding: var(--spacing-16) var(--spacing-8);  /* Spacing variables */
  margin-block: var(--spacing-8);               /* Spacing variables */
  gap: var(--spacing-6);                        /* Spacing variables */
}
```

#### Border Radius Compliance

❌ **VIOLATIONS:**
```css
.card {
  border-radius: 8px;  /* NEVER hardcode px values */
}
```

✅ **COMPLIANT:**
```css
.card {
  border-radius: var(--radius-lg);  /* Radius variable */
}
```

### Compliance Verification

**Automated Checks:**
1. No hardcoded hex colors (`#ffffff`, `rgb()`, `rgba()`)
2. No hardcoded font names (`'Lexend'`, `'Manrope'`, `sans-serif`)
3. No hardcoded px values for spacing (`padding: 64px`, `margin: 32px`)
4. No hardcoded font sizes (`font-size: 16px`)
5. No hardcoded font weights (`font-weight: 600`)
6. No hardcoded border radius (`border-radius: 8px`)

**Manual Verification:**
```bash
# Check for hardcoded hex colors
grep -r "#[0-9a-fA-F]\{3,6\}" src/styles/ --exclude-dir=node_modules

# Check for hardcoded font names
grep -r "font-family: ['\"]" src/styles/ --exclude-dir=node_modules

# Check for hardcoded px values in spacing
grep -r "padding: [0-9].*px" src/styles/ --exclude-dir=node_modules
grep -r "margin: [0-9].*px" src/styles/ --exclude-dir=node_modules
```

---

## Tailwind CSS Integration

### Tailwind v4 in Figma Make

**CRITICAL:** Tailwind CSS is ONLY used for preflight (CSS reset). DO NOT use Tailwind utility classes.

**Why?**
- Figma Make environment provides Tailwind preflight automatically
- NO Tailwind utilities allowed - use WordPress `.wp-*` utilities instead
- Design system uses CSS variables, not Tailwind's JIT compilation

**Allowed:**
```css
/* Tailwind provides preflight/reset automatically */
/* No manual import needed */
```

**NOT Allowed:**
```tsx
{/* ❌ WRONG - NO Tailwind utility classes */}
<div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">

{/* ✅ CORRECT - WordPress utilities + CSS variables */}
<div className="wp-grid-3-cols wp-max-w-6xl">
```

### Tailwind CSS File

**Location:** `/src/styles/tailwind.css`

**Purpose:** Tailwind v4 entry point (automatically handled by Figma Make)

**Contents:**
```css
/* Tailwind v4 automatically provides:
 * - CSS reset (preflight)
 * - Base styles
 * - NO utility classes (we use WordPress .wp-* utilities)
 */
```

**DO NOT manually import this file** - Figma Make environment handles it automatically.

---

## CSS File Organization

### Directory Structure

```
/src/styles/
├── index.css                  # CSS manifest (orchestrator)
├── fonts.css                  # Font face declarations
├── resets.css                 # CSS reset
├── theme-base.css             # Base tokens (spacing, typography, borders)
├── theme-light.css            # Light mode colors
├── theme-dark.css             # Dark mode colors
├── theme-variables.css        # WordPress-compatible variables
├── theme-funky.css            # Neon aesthetic overrides
├── layout.css                 # Layout utilities
├── utilities.css              # WordPress utility classes
├── responsive.css             # Media queries
├── tailwind.css               # Tailwind v4 entry (auto-handled)
│
├── presets/                   # WordPress presets
│   └── index.css
│
├── base/                      # Modular base files
│   ├── archive-base.css
│   ├── service-base.css
│   ├── blog-base.css
│   ├── portfolio-base.css
│   ├── about-base.css
│   ├── solution-base.css
│   ├── utility-base.css
│   └── system-base.css
│
├── components/                # Component CSS
│   └── index.css              # Component orchestrator
│
├── patterns/                  # Pattern CSS
│   └── index.css              # Pattern orchestrator
│
├── parts/                     # Template part CSS
│   └── index.css              # Parts orchestrator
│
└── templates/                 # Template CSS
    └── index.css              # Template orchestrator
```

### CSS Manifest Pattern

**Each directory has an `index.css` orchestrator that imports all files:**

```css
/* /src/styles/patterns/index.css */
@import './feature-card.css';
@import './stats-grid.css';
@import './process-timeline.css';
@import './cta-section.css';
/* ... all pattern CSS files */
```

**Benefits:**
- Single import point for each category
- Easy to add/remove files
- Maintains load order within category
- Prevents duplicate imports

---

## Dark Mode Implementation

### Media Query Strategy

**Pattern:** Light mode default, dark mode in `prefers-color-scheme: dark` media query

```css
/* theme-light.css - Default light mode */
:root {
  --background: #ffffff;
  --foreground: #1a1a1a;
  --primary: #8b5cf6;
}

/* theme-dark.css - Dark mode override */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #090909;  /* NOT #121212! */
    --foreground: #f5f5f5;
    --primary: #a78bfa;
  }
}
```

**Critical Note:** Dark mode background is `#090909`, NOT `#121212`. The `#121212` color is Figma Make's iframe crash background - avoid using it to prevent confusion during debugging.

### Dark Mode Color Palette

**Light Mode:**
- Background: `#ffffff` (white)
- Foreground: `#1a1a1a` (near-black)
- Primary: `#8b5cf6` (purple)
- Muted: `#f5f5f5` (light gray)
- Border: `#e5e5e5` (medium gray)

**Dark Mode:**
- Background: `#090909` (near-black)
- Foreground: `#f5f5f5` (light gray)
- Primary: `#a78bfa` (lighter purple)
- Muted: `#1a1a1a` (dark gray)
- Border: `#262626` (medium-dark gray)

**Usage:**
```css
.component {
  background: var(--background);  /* Auto-switches: #ffffff → #090909 */
  color: var(--foreground);       /* Auto-switches: #1a1a1a → #f5f5f5 */
}
```

---

## Performance Optimization

### CSS Bundle Size

**Target Metrics:**
- Total CSS bundle: < 200 KB (compressed)
- Critical CSS: < 15 KB (above-the-fold)
- Per-template CSS: < 5 KB (compressed)

**Optimization Strategies:**
1. **Modular base files** - Extract common patterns (10-38x reduction)
2. **CSS variable consolidation** - Reduce duplicate declarations
3. **Minification** - Vite handles automatically
4. **Tree shaking** - Remove unused CSS (via PurgeCSS if needed)

### Critical CSS Strategy

**Inline Critical CSS:**
```html
<head>
  <style>
    /* Critical above-the-fold CSS */
    /* Fonts, base tokens, header, hero */
  </style>
  <link rel="stylesheet" href="/styles/main.css" />
</head>
```

**Future Enhancement:** Extract critical CSS for each template and inline during SSR/SSG.

---

## Related Documentation

- **[BEM Naming Conventions](../development/bem-naming-conventions.md)** - Detailed BEM naming guide
- **[CSS Guidelines](../development/css-guidelines.md)** - CSS architecture and best practices
- **[CSS Memory Optimization](../development/css-memory-optimization.md)** - Memory reduction strategies
- **[Design Tokens: Colors](../design-tokens/colors.md)** - Complete color system
- **[Design Tokens: Typography](../design-tokens/typography.md)** - Typography scale and fonts
- **[Design Tokens: Spacing](../design-tokens/spacing.md)** - Spacing scale and patterns
- **[Responsive System](../design-tokens/responsive.md)** - Breakpoints and fluid responsive design

---

**Last Updated:** March 10, 2026  
**Version:** 1.0.0  
**Maintained By:** LSX Design Systems Team
