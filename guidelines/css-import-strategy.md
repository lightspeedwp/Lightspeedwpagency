# CSS Import Strategy Guidelines

**Created:** February 19, 2026
**Status:** Active
**Applies to:** All CSS files in `/src/styles/`, all React components importing CSS

---

## Purpose

This document defines the **single source of truth** for how CSS files must be loaded in the LSX Design prototype. Following these rules prevents:
- Duplicate CSS loading (same file processed twice)
- Cascade order unpredictability (styles overriding each other based on render timing)
- Orphan CSS files (dead styles inflating the bundle)
- Specificity battles requiring `!important` hacks

---

## The Two-Tier Import Rule

### Tier 1: Global Imports (via `/src/styles/index.css`)

**What goes here:** CSS that must be available on EVERY page, regardless of which template is rendered.

| Category | Example | Why Global |
|----------|---------|------------|
| Font declarations | `fonts.css` | Fonts must load before any text renders |
| Design tokens / presets | `presets/index.css`, `theme-base.css` | Variables must exist before any rule references them |
| Resets | `resets.css` | Browser normalization must come first |
| Theme modes | `theme-light.css`, `theme-dark.css` | Mode switching must work on any page |
| Layout utilities | `layout.css`, `utilities.css`, `responsive.css` | `.wp-*` classes used across all templates |
| Block styles | `blocks/**/*.css` | Blocks (buttons, headings, cards) appear on any page |
| Section styles | `sections/*.css`, `section-styles.css` | Section presets used across templates |
| Pattern styles | `patterns/*.css` | Patterns (hero, CTA, FAQ) are composed into many templates |
| Animations | `animations.css` | Scroll reveal and motion used globally |
| Print styles | `print.css` | Print must override everything |

### Tier 2: Component-Level Imports (via `import '@/styles/templates/...'` in `.tsx`)

**What goes here:** CSS that is ONLY needed when a specific template is rendered.

| Category | Example | Why Component-Level |
|----------|---------|-------------------|
| Template page styles | `page-service-design.css` | Only needed on `/services/design` |
| Solution page styles | `page-solution-wordpress.css` | Only needed on `/solutions/wordpress` |
| Dev tool styles | `design-playground.css` | Only needed on `/dev-tools/playground` |
| Single post styles | `single-project.css` | Only needed on `/portfolio/:slug` |

---

## Rules (Non-Negotiable)

### Rule 1: Never Import the Same CSS File Twice

A CSS file must appear in EXACTLY ONE place:
- Either in `index.css` (global)
- Or in a `.tsx` component (on-demand)
- **NEVER both.**

```css
/* BAD: index.css imports it globally */
@import './templates/page-service-development.css';

/* AND the component also imports it */
/* DevelopmentServiceTemplate.tsx */
import '@/styles/templates/page-service-development.css';
```

```css
/* GOOD: Only the component imports it */
/* DevelopmentServiceTemplate.tsx */
import '@/styles/templates/page-service-development.css';
```

### Rule 2: Template CSS Uses Component-Level Imports

All files in `/src/styles/templates/` should be imported by their corresponding `.tsx` template component, NOT by `index.css`.

```tsx
// CorrectTemplate.tsx
import '@/styles/templates/correct-template.css';

export function CorrectTemplate() {
  return <div className="correct-template">...</div>;
}
```

### Rule 3: Every CSS File Must Have an Owner

Every `.css` file must be imported by exactly one source. If a CSS file is not imported by `index.css` or any `.tsx` file, it is an orphan and should be deleted.

To verify:
```
# Find orphan CSS files
for f in src/styles/templates/*.css; do
  basename=$(basename "$f")
  if ! grep -rq "$basename" src/styles/index.css src/app/; then
    echo "ORPHAN: $f"
  fi
done
```

### Rule 4: Use `@/styles/` Alias for Component Imports

Always use the `@/styles/` path alias (not relative paths) when importing CSS in `.tsx` files:

```tsx
// CORRECT
import '@/styles/templates/page-service-design.css';

// WRONG (fragile relative path)
import '../../../styles/templates/page-service-design.css';
```

### Rule 5: No `!important` Outside Print/Motion Media Queries

If you need `!important` to make a style work, the cascade order is wrong. Fix the order or increase specificity with a parent class.

```css
/* BAD */
.btn-primary .wp-block-button__link {
  background: var(--accent) !important;
}

/* GOOD — use parent BEM class for specificity */
.discovery-page .btn-primary .wp-block-button__link {
  background: var(--disc-gradient);
}
```

**Exceptions:** `@media print { ... !important }` and `@media (prefers-reduced-motion) { ... !important }` are acceptable because they must override all other styles.

### Rule 6: No Hardcoded Colors in CSS

All color values must use CSS variables or `color-mix()` with CSS variables:

```css
/* BAD */
background: rgba(255, 255, 255, 0.15);
color: #ffffff;
border: 1px solid rgba(0, 0, 0, 0.1);

/* GOOD */
background: color-mix(in srgb, var(--color-white) 15%, transparent);
color: var(--color-white);
border: 1px solid color-mix(in srgb, var(--color-black) 10%, transparent);
```

**Exception:** Token definition files (`theme-base.css`, `theme-light.css`, `theme-dark.css`, `presets/*.css`) define the actual hex/rgb values. These are the ONLY files where hardcoded color values are allowed.

### Rule 7: No Raw Tailwind Utility Classes in TSX

All styling must use BEM classes from dedicated CSS files. WordPress utility classes (`.wp-*` prefix) are allowed since they are our custom utilities.

```tsx
/* BAD */
<div className="text-center mt-12">

/* GOOD */
<div className="front-page__section-footer">

/* ALSO GOOD (WordPress utilities) */
<div className="wp-text-center wp-mb-12">
```

---

## Index.css Structure

The global `index.css` must follow this exact layer order:

```css
/* 1. Core System (tokens, resets, utilities) */
@import './fonts.css';
@import './presets/index.css';
@import './resets.css';
@import './theme-base.css';
@import './theme-light.css';
@import './theme-dark.css';
@import './theme-variables.css';
@import './layout.css';
@import './utilities.css';
@import './responsive.css';

/* 2. WordPress Block Styles */
@import './wordpress-blocks.css';
@import './wordpress-blocks-extended.css';
@import './blocks/design/*.css';
@import './blocks/theme/*.css';
@import './blocks/text/*.css';
@import './blocks/media/*.css';
@import './blocks/widgets/*.css';
@import './blocks/navigation/*.css';
@import './blocks/feedback/*.css';
@import './blocks/layout/*.css';
@import './blocks/utility/*.css';
@import './blocks/data-display/*.css';
@import './blocks/post-formats/*.css';
@import './blocks/embed/*.css';
@import './blocks/woocommerce/*.css';
@import './blocks/forms/*.css';

/* 3. Section Styles */
@import './section-styles.css';
@import './sections/*.css';

/* 4. Pattern Styles */
@import './patterns/*.css';

/* 5. Component Utilities */
@import './animations.css';
@import './print.css';
@import './components.css';
@import './components/*.css';
@import './content/*.css';

/* 6. Template CSS — DO NOT ADD HERE */
/* Template CSS is loaded by component-level imports in .tsx files */
```

**Key Change:** Section 5 of `index.css` (formerly "Page/Template Styles") should be EMPTY. All template CSS is loaded by the template components themselves.

---

## Migration Checklist

When adding a new template:

- [ ] Create CSS file: `/src/styles/templates/{template-name}.css`
- [ ] Import in component: `import '@/styles/templates/{template-name}.css';`
- [ ] Do NOT add to `index.css`
- [ ] Use only CSS variables for all colors, spacing, typography
- [ ] Use only `var(--font-primary)` or `var(--font-secondary)` for fonts
- [ ] Use BEM naming: `.template-name__element--modifier`
- [ ] No `!important` declarations
- [ ] No hardcoded hex, rgb, or rgba values
- [ ] No raw Tailwind utility classes

---

## Audit Verification

Run the audit prompt (`/prompts/audit/css-and-data-integrity-prompt.md`) after any structural CSS changes. The following metrics must all be zero:

| Metric | Target |
|--------|--------|
| Duplicate CSS imports | 0 |
| Orphan CSS files | 0 |
| Hardcoded rgba() in templates/patterns | 0 |
| Hardcoded hex in templates/patterns | 0 |
| `!important` outside print/motion | 0 |
| Raw Tailwind in TSX | 0 |

---

## Related Documentation

- **Audit Report:** `/reports/audits/2026-02-19-AUDIT-REPORT-V6.md`
- **Task:** `/tasks/audit-css-and-data-integrity.md`
- **Prompt:** `/prompts/audit/css-and-data-integrity-prompt.md`
- **CSS Architecture:** `/guidelines/CSS-ARCHITECTURE.md`
- **WordPress Blocks CSS:** `/guidelines/WORDPRESS-BLOCKS-CSS-ARCHITECTURE.md`
- **Design Tokens:** `/guidelines/design-tokens/`
