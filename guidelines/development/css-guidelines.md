# CSS Guidelines — LSX Design System

**Last Updated:** March 5, 2026  
**Version:** 1.0  
**Status:** Active

## Purpose

This document defines CSS architecture, naming conventions, and best practices for the LSX Design prototype. All CSS must support WordPress FSE mapping, design system compliance, and memory optimization.

---

## Table of Contents

1. [Critical Rules](#critical-rules)
2. [BEM Naming Conventions](#bem-naming-conventions)
3. [Design System Integration](#design-system-integration)
4. [File Organization](#file-organization)
5. [CSS Variable Usage](#css-variable-usage)
6. [Memory Optimization](#memory-optimization)
7. [WordPress Integration](#wordpress-integration)
8. [Accessibility Requirements](#accessibility-requirements)
9. [Performance Standards](#performance-standards)
10. [Code Quality](#code-quality)

---

## Critical Rules

### Non-Negotiable Requirements

1. **NO Tailwind CSS Classes**
   - The `tailwind.css` file is an empty placeholder
   - Use WordPress utility classes (`.wp-*` prefix) or BEM classes only
   - Use CSS variables for all dynamic styling

2. **100% CSS Variable Compliance**
   - ALL colors: `var(--primary)`, `var(--foreground)`, etc.
   - ALL spacing: `var(--spacing-4)`, `var(--spacing-6)`, etc.
   - ALL typography: `var(--font-primary)`, `var(--text-h1)`, etc.
   - ALL borders/radius: `var(--radius)`, `var(--radius-lg)`, etc.
   - NO hardcoded values (`#000`, `16px`, `'Lexend'`, etc.)

3. **Font Family Enforcement**
   - **ONLY** use `var(--font-primary)` (Lexend) or `var(--font-secondary)` (Manrope)
   - **NEVER** hardcode font names: `'Lexend, sans-serif'` ❌
   - This gives users complete control via CSS files

4. **BEM Architecture Required**
   - All component CSS must use BEM naming
   - Block: `.component-name`
   - Element: `.component-name__element`
   - Modifier: `.component-name--modifier`

5. **One CSS File Per Component**
   - Component: `/src/app/components/ComponentName.tsx`
   - CSS File: `/src/styles/components/component-name.css`
   - Import: `import '@/styles/components/component-name.css';`

---

## BEM Naming Conventions

### Structure

**BEM = Block Element Modifier**

```
.block-name              /* Block (component root) */
.block-name__element     /* Element (child) */
.block-name--modifier    /* Modifier (variation) */
```

### Block Naming

**Blocks represent independent components:**

```css
/* Component blocks */
.service-card { }
.feature-list { }
.stats-grid { }
.funky-cta { }

/* Pattern blocks */
.hero-section { }
.content-section { }
.archive-header { }
```

**Rules:**
- Use lowercase with hyphens
- Name describes what it IS, not what it looks like
- Good: `.service-card`, `.feature-list`
- Bad: `.blue-box`, `.large-text`

### Element Naming

**Elements are parts of blocks (use double underscore):**

```css
.service-card__header { }
.service-card__title { }
.service-card__description { }
.service-card__icon { }
.service-card__cta { }

.feature-list__item { }
.feature-list__icon { }
.feature-list__content { }
.feature-list__title { }
```

**Rules:**
- Elements are ALWAYS prefixed with block name
- Elements cannot be nested: `.block__elem1__elem2` ❌
- If nesting needed, create new block instead

### Modifier Naming

**Modifiers represent variations (use double hyphen):**

```css
/* State modifiers */
.service-card--active { }
.service-card--disabled { }
.service-card--loading { }

/* Style modifiers */
.service-card--primary { }
.service-card--secondary { }
.service-card--large { }

/* Layout modifiers */
.service-card--horizontal { }
.service-card--vertical { }
.service-card--grid { }
```

**Rules:**
- Modifiers change appearance or state
- Applied to blocks OR elements
- Can combine multiple modifiers

### Complete BEM Example

```css
/* Block */
.service-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-6);
  background: var(--background);
  border-radius: var(--radius-lg);
  gap: var(--spacing-4);
}

/* Elements */
.service-card__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.service-card__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

.service-card__title {
  font-family: var(--font-primary);
  font-size: var(--text-h4);
  color: var(--foreground);
  margin: 0;
}

.service-card__description {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--muted-foreground);
  line-height: 1.6;
}

.service-card__cta {
  margin-top: auto;
  align-self: flex-start;
}

/* Modifiers */
.service-card--primary {
  background: var(--primary);
  color: var(--primary-foreground);
}

.service-card--primary .service-card__title,
.service-card--primary .service-card__description {
  color: var(--primary-foreground);
}

.service-card--horizontal {
  flex-direction: row;
}

.service-card--large .service-card__icon {
  width: 64px;
  height: 64px;
}
```

### WordPress Block BEM Naming

**WordPress blocks use `.wp-block-` prefix:**

```css
/* Core WordPress blocks */
.wp-block-paragraph { }
.wp-block-heading { }
.wp-block-button { }
.wp-block-image { }

/* Custom LSX blocks */
.wp-block-lsx-service-card { }
.wp-block-lsx-feature-list { }
.wp-block-lsx-stats-grid { }

/* Block elements */
.wp-block-lsx-service-card__icon { }
.wp-block-lsx-service-card__title { }
.wp-block-lsx-service-card__content { }

/* Block modifiers */
.wp-block-lsx-service-card--primary { }
.wp-block-lsx-service-card--large { }
```

---

## Design System Integration

### CSS Variables System

**All styling must use CSS variables from:**
- `/src/styles/theme-base.css` — Spacing, typography, borders, shadows
- `/src/styles/theme-light.css` — Light mode colors
- `/src/styles/theme-dark.css` — Dark mode colors

### Typography Variables

```css
/* Font families - CRITICAL: NEVER hardcode font names */
font-family: var(--font-primary);    /* Lexend - primary font */
font-family: var(--font-secondary);  /* Manrope - secondary font (small text only) */

/* Font sizes */
font-size: var(--text-h1);     /* 32px -> 64px (fluid) */
font-size: var(--text-h2);     /* 28px -> 48px (fluid) */
font-size: var(--text-h3);     /* 24px -> 36px (fluid) */
font-size: var(--text-h4);     /* 20px -> 28px (fluid) */
font-size: var(--text-h5);     /* 18px -> 24px (fluid) */
font-size: var(--text-h6);     /* 16px -> 20px (fluid) */
font-size: var(--text-base);   /* 15px -> 18px (fluid) */
font-size: var(--text-lead);   /* 18px -> 22px (fluid) */
font-size: var(--text-sm);     /* 14px */
font-size: var(--text-xs);     /* 12px */

/* Font weights */
font-weight: var(--font-weight-regular);    /* 400 */
font-weight: var(--font-weight-medium);     /* 500 */
font-weight: var(--font-weight-semibold);   /* 600 */
font-weight: var(--font-weight-bold);       /* 700 */

/* Line heights */
line-height: var(--line-height-tight);   /* 1.2 */
line-height: var(--line-height-normal);  /* 1.5 */
line-height: var(--line-height-relaxed); /* 1.75 */
```

### Color Variables

```css
/* Semantic colors (auto-adapt to light/dark mode) */
background-color: var(--background);
color: var(--foreground);

/* Primary brand colors */
background-color: var(--primary);
color: var(--primary-foreground);

/* Secondary colors */
background-color: var(--secondary);
color: var(--secondary-foreground);

/* Muted/subtle colors */
background-color: var(--muted);
color: var(--muted-foreground);

/* Accent colors */
background-color: var(--accent);
color: var(--accent-foreground);

/* Borders and dividers */
border-color: var(--border);

/* Destructive/error colors */
background-color: var(--destructive);
color: var(--destructive-foreground);

/* Card backgrounds */
background-color: var(--card);
color: var(--card-foreground);

/* Popover backgrounds */
background-color: var(--popover);
color: var(--popover-foreground);
```

### Spacing Variables

```css
/* Spacing scale (use for padding, margin, gap) */
padding: var(--spacing-0);   /* 0px */
padding: var(--spacing-1);   /* 4px */
padding: var(--spacing-2);   /* 8px */
padding: var(--spacing-3);   /* 12px */
padding: var(--spacing-4);   /* 16px */
padding: var(--spacing-5);   /* 20px */
padding: var(--spacing-6);   /* 24px */
padding: var(--spacing-8);   /* 32px */
padding: var(--spacing-10);  /* 40px */
padding: var(--spacing-12);  /* 48px */
padding: var(--spacing-16);  /* 64px */
padding: var(--spacing-20);  /* 80px */
padding: var(--spacing-24);  /* 96px */
padding: var(--spacing-32);  /* 128px */
padding: var(--spacing-40);  /* 160px */
padding: var(--spacing-48);  /* 192px */
padding: var(--spacing-64);  /* 256px */

/* Section spacing */
padding-block: var(--section-padding-sm);  /* 32px -> 64px */
padding-block: var(--section-padding-md);  /* 48px -> 96px */
padding-block: var(--section-padding-lg);  /* 64px -> 128px */
padding-block: var(--section-padding-xl);  /* 80px -> 160px */
```

### Border and Shadow Variables

```css
/* Border radius */
border-radius: var(--radius);      /* 4px */
border-radius: var(--radius-sm);   /* 2px */
border-radius: var(--radius-md);   /* 6px */
border-radius: var(--radius-lg);   /* 8px */
border-radius: var(--radius-xl);   /* 12px */
border-radius: var(--radius-2xl);  /* 16px */
border-radius: var(--radius-full); /* 9999px */

/* Shadows */
box-shadow: var(--shadow-sm);   /* Subtle shadow */
box-shadow: var(--shadow);      /* Default shadow */
box-shadow: var(--shadow-md);   /* Medium shadow */
box-shadow: var(--shadow-lg);   /* Large shadow */
box-shadow: var(--shadow-xl);   /* Extra large shadow */
box-shadow: var(--shadow-2xl);  /* Dramatic shadow */
```

### Design System Enforcement

**Every CSS rule must use variables:**

```css
/* ✅ CORRECT - Uses CSS variables */
.service-card {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--foreground);
  background: var(--background);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  gap: var(--spacing-4);
}

/* ❌ WRONG - Hardcoded values */
.service-card {
  font-family: 'Lexend, sans-serif';  /* Never hardcode fonts */
  font-size: 16px;                    /* Use var(--text-base) */
  color: #000000;                     /* Use var(--foreground) */
  background: #ffffff;                /* Use var(--background) */
  padding: 24px;                      /* Use var(--spacing-6) */
  border-radius: 8px;                 /* Use var(--radius-lg) */
  gap: 16px;                          /* Use var(--spacing-4) */
}
```

---

## File Organization

### CSS File Structure

```
src/styles/
├── theme-base.css         # Base CSS variables (spacing, typography, borders)
├── theme-light.css        # Light mode colors
├── theme-dark.css         # Dark mode colors
├── global.css             # Global styles (reset, base elements)
├── utilities.css          # WordPress utility classes (.wp-*)
├── responsive.css         # Responsive utilities and breakpoints
│
├── components/            # Component-specific CSS (BEM)
│   ├── service-card.css
│   ├── feature-list.css
│   ├── stats-grid.css
│   ├── funky-cta.css
│   └── ...
│
├── patterns/              # Pattern-specific CSS (BEM)
│   ├── hero-section.css
│   ├── archive-header.css
│   ├── post-card.css
│   └── ...
│
├── templates/             # Template-specific CSS (BEM)
│   ├── front-page.css
│   ├── archive.css
│   ├── single.css
│   └── ...
│
└── blocks/                # WordPress block CSS
    ├── text/
    │   ├── paragraph.css
    │   └── heading.css
    ├── media/
    │   └── image.css
    └── design/
        └── buttons.css
```

### Component CSS File Template

```css
/**
 * ComponentName Component Styles
 *
 * BEM Block: .component-name
 * WordPress Block: .wp-block-lsx-component-name (if applicable)
 *
 * @see /guidelines/development/css-guidelines.md
 * @see /src/app/components/ComponentName.tsx
 */

/* ============================================
   BLOCK
   ============================================ */

.component-name {
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Spacing */
  padding: var(--spacing-6);
  gap: var(--spacing-4);
  
  /* Colors */
  background: var(--background);
  color: var(--foreground);
  
  /* Typography */
  font-family: var(--font-primary);
  
  /* Borders */
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  
  /* Transitions */
  transition: all 0.2s ease;
}

/* ============================================
   ELEMENTS
   ============================================ */

.component-name__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.component-name__icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

.component-name__title {
  font-family: var(--font-primary);
  font-size: var(--text-h4);
  font-weight: var(--font-weight-semibold);
  color: var(--foreground);
  margin: 0;
}

.component-name__content {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--muted-foreground);
  line-height: var(--line-height-relaxed);
}

/* ============================================
   MODIFIERS
   ============================================ */

.component-name--primary {
  background: var(--primary);
  color: var(--primary-foreground);
}

.component-name--primary .component-name__title,
.component-name--primary .component-name__content {
  color: var(--primary-foreground);
}

.component-name--large {
  padding: var(--spacing-8);
}

.component-name--large .component-name__icon {
  width: 64px;
  height: 64px;
}

/* ============================================
   STATES
   ============================================ */

.component-name:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.component-name:focus-within {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.component-name--disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 768px) {
  .component-name {
    padding: var(--spacing-4);
  }
  
  .component-name__icon {
    width: 40px;
    height: 40px;
  }
}

/* ============================================
   REDUCED MOTION
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  .component-name {
    transition: none;
  }
  
  .component-name:hover {
    transform: none;
  }
}
```

### Import Order in Components

```tsx
/**
 * ComponentName Component
 */

// 1. React imports
import { useState } from 'react';

// 2. Third-party imports
import { Icon } from '@phosphor-icons/react';

// 3. Internal utilities/hooks
import { useScrollReveal } from '@/hooks/useScrollReveal';

// 4. Component CSS (ALWAYS import component CSS)
import '@/styles/components/component-name.css';

// 5. Component code
export const ComponentName = () => {
  // ...
};
```

---

## CSS Variable Usage

### Why CSS Variables?

**User Control:**
```css
/* User edits theme-base.css */
--font-primary: 'Inter', sans-serif;

/* Entire site updates automatically! */
/* Time savings: 99%+ (60 min -> 30 sec for font changes) */
```

### Variable Reference Syntax

**In CSS files:**
```css
.component {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--foreground);
  padding: var(--spacing-6);
  border-radius: var(--radius);
}
```

**In React inline styles:**
```tsx
<div style={{
  fontFamily: 'var(--font-primary)',
  fontSize: 'var(--text-base)',
  color: 'var(--foreground)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius)'
}}>
```

### Fallback Values

**CSS variables support fallbacks:**
```css
/* Fallback if variable not defined */
.component {
  color: var(--custom-color, var(--primary));
  padding: var(--custom-spacing, var(--spacing-4));
}
```

### Dynamic CSS Variables

**Components can define scoped variables:**
```css
.component {
  --component-bg: var(--background);
  --component-color: var(--foreground);
  
  background: var(--component-bg);
  color: var(--component-color);
}

.component--primary {
  --component-bg: var(--primary);
  --component-color: var(--primary-foreground);
}
```

---

## Memory Optimization

### Critical Memory Principles

1. **Deduplicate CSS** — Eliminate duplicate selectors and rules
2. **Extract Shared Styles** — Create base classes for common patterns
3. **Minimize Specificity** — Use single classes, avoid deep nesting
4. **Use CSS Variables** — Reduce repeated values
5. **Consolidate Media Queries** — Group breakpoint styles

### See Complete Memory Optimization Guide

**For detailed memory optimization strategies:**
**[/guidelines/development/css-memory-optimization.md](/guidelines/development/css-memory-optimization.md)**

### Quick Memory Optimization Checklist

- [ ] No duplicate CSS selectors across files
- [ ] Shared styles extracted to base classes
- [ ] CSS specificity ≤ 2 (e.g., `.block__element` not `.block .element`)
- [ ] All values use CSS variables (no hardcoded duplicates)
- [ ] Media queries consolidated (not scattered)
- [ ] Unused CSS removed
- [ ] CSS file size < 500 lines (split if larger)

---

## WordPress Integration

### WordPress Block CSS Classes

**All WordPress blocks use `.wp-block-` prefix:**

```css
/* Core WordPress blocks */
.wp-block-paragraph { }
.wp-block-heading { }
.wp-block-button { }
.wp-block-image { }
.wp-block-group { }
.wp-block-columns { }

/* Custom LSX blocks */
.wp-block-lsx-service-card { }
.wp-block-lsx-feature-list { }
.wp-block-lsx-stats-grid { }
```

### WordPress Utility Classes

**Use WordPress utility classes from `/src/styles/utilities.css`:**

```css
/* Grid utilities */
.wp-grid-2-cols { }
.wp-grid-3-cols { }
.wp-grid-4-cols { }

/* Max-width utilities */
.wp-max-w-3xl { }
.wp-max-w-4xl { }
.wp-max-w-6xl { }

/* Text alignment */
.wp-text-center { }
.wp-text-left { }
.wp-text-right { }
```

### WordPress FSE Mapping

**CSS classes map to theme.json structure:**

```json
{
  "styles": {
    "blocks": {
      "core/paragraph": {
        "typography": {
          "fontFamily": "var(--font-primary)",
          "fontSize": "var(--text-base)"
        }
      }
    }
  }
}
```

---

## Accessibility Requirements

### Focus Styles

**All interactive elements must have visible focus:**

```css
.component:focus,
.component:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Remove default outline, add custom */
.component:focus:not(:focus-visible) {
  outline: none;
}
```

### Reduced Motion

**All animations must respect reduced motion:**

```css
/* Default animations */
.component {
  transition: transform 0.3s ease;
}

.component:hover {
  transform: translateY(-4px);
}

/* Disable under reduced motion */
@media (prefers-reduced-motion: reduce) {
  .component {
    transition: none;
  }
  
  .component:hover {
    transform: none;
  }
}
```

**See complete reduced motion guide:**
**[/guidelines/REDUCED-MOTION-STANDARDS.md](/guidelines/REDUCED-MOTION-STANDARDS.md)**

### Color Contrast

**All text must meet WCAG 2.1 AA contrast ratios:**

- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

```css
/* Ensure sufficient contrast */
.component {
  color: var(--foreground);           /* High contrast on background */
  background: var(--background);
}

.component--primary {
  color: var(--primary-foreground);   /* High contrast on primary */
  background: var(--primary);
}
```

### Touch Targets

**All interactive elements must be ≥ 44x44px:**

```css
.component__button {
  min-width: 44px;
  min-height: 44px;
  padding: var(--spacing-3) var(--spacing-4);
}
```

---

## Performance Standards

### CSS File Size

**Guidelines for optimal performance:**

- Single CSS file: ≤ 500 lines
- If > 500 lines, split into logical modules
- Total CSS bundle: ≤ 100KB (uncompressed)

### Selector Efficiency

**Use efficient selectors:**

```css
/* ✅ FAST - Single class */
.component-name { }

/* ✅ FAST - BEM element */
.component-name__element { }

/* ⚠️ SLOWER - Child combinator */
.component-name > .element { }

/* ❌ SLOW - Descendant combinator */
.component-name .element .child { }

/* ❌ VERY SLOW - Universal selector */
* { }
.component-name * { }
```

### Avoid Over-Nesting

**Keep specificity low:**

```css
/* ✅ GOOD - Low specificity */
.component-name { }
.component-name__element { }

/* ❌ BAD - High specificity */
.section .container .component-name .element { }
```

### Minimize Reflows

**Avoid properties that trigger reflows:**

```css
/* ✅ GOOD - Uses transform (GPU-accelerated) */
.component:hover {
  transform: translateY(-4px);
}

/* ❌ BAD - Uses top (triggers reflow) */
.component:hover {
  position: relative;
  top: -4px;
}
```

---

## Code Quality

### CSS Linting

**Follow these rules:**

1. **Alphabetical properties** (within logical groups)
2. **Consistent spacing** (2 spaces for indentation)
3. **Logical grouping** (layout, spacing, colors, typography, borders)
4. **No !important** (except for utilities)
5. **Comments for complex logic**

### Property Order

```css
.component {
  /* Positioning */
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* Sizing */
  width: 100%;
  max-width: 1200px;
  height: auto;
  min-height: 400px;
  
  /* Spacing */
  padding: var(--spacing-6);
  margin: 0 auto;
  gap: var(--spacing-4);
  
  /* Colors */
  background: var(--background);
  color: var(--foreground);
  
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  text-align: left;
  
  /* Borders */
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  
  /* Effects */
  box-shadow: var(--shadow);
  opacity: 1;
  
  /* Transitions & Animations */
  transition: all 0.2s ease;
}
```

### Comments

**Use comments for clarity:**

```css
/**
 * ComponentName Block
 * Main container for the component
 */
.component-name {
  /* Layout structure */
  display: flex;
  flex-direction: column;
}

/* ============================================
   SECTION: Elements
   ============================================ */

/* Component header with icon */
.component-name__header {
  display: flex;
}

/* Primary icon (48x48px default) */
.component-name__icon {
  width: 48px;
  height: 48px;
}
```

### Avoid !important

**Use !important sparingly:**

```css
/* ❌ BAD - Avoid !important */
.component {
  color: red !important;
}

/* ✅ GOOD - Increase specificity instead */
.component.component--error {
  color: var(--destructive);
}

/* ✅ ACCEPTABLE - Utility classes can use !important */
.wp-text-center {
  text-align: center !important;
}
```

---

## Related Documentation

- **[CSS Memory Optimization Guide](/guidelines/development/css-memory-optimization.md)** - Memory optimization strategies
- **[BEM Naming Conventions](/guidelines/development/bem-naming-conventions.md)** - Detailed BEM guide
- **[Design Tokens: Colors](/guidelines/design-tokens/colors.md)** - Color system reference
- **[Design Tokens: Typography](/guidelines/design-tokens/typography.md)** - Typography system reference
- **[Design Tokens: Spacing](/guidelines/design-tokens/spacing.md)** - Spacing system reference
- **[WordPress Blocks CSS Architecture](/guidelines/WORDPRESS-BLOCKS-CSS-ARCHITECTURE.md)** - WordPress block styling
- **[Reduced Motion Standards](/guidelines/REDUCED-MOTION-STANDARDS.md)** - Accessibility motion guidelines
- **[Performance Standards](/guidelines/PERFORMANCE-STANDARDS.md)** - Performance optimization

---

## Changelog

### Version 1.0 (March 5, 2026)
- Initial CSS guidelines documentation
- BEM naming conventions
- Design system integration
- Memory optimization principles
- WordPress integration rules
- Accessibility requirements
- Performance standards
- Code quality guidelines

---

**Last Updated:** March 5, 2026  
**Maintained By:** LSX Design Team  
**Questions?** See [/guidelines/README.md](/guidelines/README.md)
