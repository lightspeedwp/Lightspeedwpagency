# Optimise CSS — Architecture & Duplication Removal

**Type:** Sub-Trigger  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise css`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes  
**Estimated Duration:** 45-60 minutes

---

## Purpose

Optimize CSS architecture by removing duplicate selector blocks, consolidating `-optimized` file pairs, splitting oversized files into logical sub-files, organizing imports into proper hierarchy, and extracting shared styles across templates.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope (7 Areas)

### 1. Remove Duplicate CSS Selector Blocks

**Scan for:** Identical selector blocks across multiple files

**Action:**
- Identify duplicate CSS rules (same selector, same properties)
- Extract to shared base file
- Import shared file in components that need it

**Example:**

```css
/* Found in multiple files: */
.wp-card {
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  background: var(--background);
}

/* Extract to: /src/styles/patterns/card-base.css */
/* Import in components that need it */
```

---

### 2. Resolve `-optimized` File Pairs

**Critical Finding:** 31+ CSS files exist in BOTH original and optimized versions

**Scan:**
- `/src/styles/templates/` for files with `-optimized` suffix
- Check which version is actively imported (component-level vs global)

**Action:**
1. For each pair, determine which version is active:
   - Check TSX imports: `import '@/styles/templates/analytics-service.css'`
   - Check global CSS imports: `@import './templates/analytics-service-optimized.css'`
2. Keep the active version
3. Delete the unused version
4. Update all imports to point to the kept file

**Estimated Savings:** 9,743+ lines (based on previous audit)

---

### 3. Split CSS Files > 400 Lines

**Scan:** `/src/styles/` for files exceeding threshold

**Splitting Strategies:**

**By Section:**
```css
/* Before: /src/styles/templates/contact-page.css (840 lines) */
.contact-page { /* all styles */ }

/* After: Split by section */
/src/styles/templates/contact/
  ├── index.css         /* @import all sub-files */
  ├── base.css          /* Base container, layout */
  ├── hero.css          /* Hero section */
  ├── form.css          /* Contact form */
  ├── info.css          /* Contact info cards */
  └── map.css           /* Map section */
```

**By Media Query:**
```css
/* Before: /src/styles/blocks/site-header.css (1,051 lines) */

/* After: Split by concern */
/src/styles/blocks/site-header/
  ├── index.css         /* Import all */
  ├── base.css          /* Core header styles */
  ├── mega-menu.css     /* Mega menu specific */
  ├── mobile.css        /* Mobile breakpoint */
  └── desktop.css       /* Desktop breakpoint */
```

**By Component Variant:**
```css
/* Before: /src/styles/patterns/hero.css (large file) */

/* After: Split by variant */
/src/styles/patterns/hero/
  ├── index.css         /* Import all */
  ├── base.css          /* Shared hero styles */
  ├── homepage.css      /* Homepage variant */
  ├── service.css       /* Service variant */
  └── solution.css      /* Solution variant */
```

---

### 4. Extract Shared Template Styles

**Target:** Templates with similar patterns (service pages, solution pages)

**Extract to base files:**

```css
/* Shared service hero styles */
/src/styles/templates/base/service-hero.css

/* Shared service content styles */
/src/styles/templates/base/service-content.css

/* Shared solution page styles */
/src/styles/templates/base/solution-base.css
```

**Then import in specific templates:**

```css
/* /src/styles/templates/analytics-service.css */
@import './base/service-hero.css';
@import './base/service-content.css';
/* ... specific analytics styles ... */
```

---

### 5. Organize CSS Import Hierarchy

**Create index.css files for each directory:**

```css
/* /src/styles/blocks/index.css */
@import './Button.css';
@import './Card.css';
@import './Icon.css';
/* ... all block CSS */

/* /src/styles/patterns/index.css */
@import './Hero.css';
@import './CTA.css';
@import './Stats.css';
/* ... all pattern CSS */

/* /src/styles/templates/index.css */
@import './ServiceTemplate.css';
@import './SolutionTemplate.css';
/* ... all template CSS */
```

**Then simplify global.css:**

```css
/* /src/styles/global.css */
@import './reset.css';
@import './tokens.css';
@import './typography.css';
@import './utilities.css';
@import './blocks/index.css';
@import './patterns/index.css';
@import './templates/index.css';
```

---

### 6. Remove Orphaned CSS Files

**Scan for:**
- CSS files with no corresponding TSX component
- CSS files not imported anywhere (dead files)

**Action:**
1. List all CSS files in `/src/styles/`
2. For each CSS file, search for corresponding TSX file or import statement
3. If no matches found, mark as orphaned
4. Review orphaned files (may be intentionally standalone utilities)
5. Archive or delete confirmed orphans

---

### 7. Remove Dead CSS Selectors

**Scan for:**
- CSS classes defined but never used in any TSX file
- Commented-out CSS blocks
- Legacy selectors from old components

**Action:**
1. Extract all class selectors from CSS files (`.wp-*`, `.contact-*`, etc.)
2. Search codebase for usage of each class
3. If class never used, mark as dead selector
4. Remove dead selectors from CSS

**Example:**

```css
/* Dead selector (not used anywhere) */
.wp-legacy-card {
  padding: var(--spacing-4);
}

/* Keep only active selectors */
.wp-card {
  padding: var(--spacing-6);
}
```

---

## Optimize Specificity

**Max specificity:** 3 levels

**Scan for:**
- Overly specific selectors (> 3 levels)
- ID selectors (`#header`)
- `!important` usage (except utility overrides)

**Refactor:**

```css
/* ❌ Too specific (4 levels) */
.page .section .container .card .title {
  color: var(--foreground);
}

/* ✅ Simplified (2 levels) */
.wp-card .wp-card__title {
  color: var(--foreground);
}
```

---

## Success Metrics

| Metric | Target |
|---|---|
| Duplicate CSS selector blocks | 0 |
| `-optimized` file pairs resolved | 100% (31+ pairs) |
| Files > 400 lines | Reduce by 80% |
| Orphaned CSS files | 0 |
| Dead CSS selectors | 0 |
| Average CSS file size | < 200 lines |
| CSS total line reduction | 15-20% |
| Import hierarchy depth | ≤ 2 levels |
| Max specificity | ≤ 3 levels |

---

## Design System Compliance (Non-Negotiable)

All CSS changes MUST maintain:

- [ ] 100% CSS variable usage (colors, spacing, typography, borders, radius)
- [ ] Font faces from CSS variables only (`var(--font-primary)`, `var(--font-secondary)`)
- [ ] WordPress utility classes only (`.wp-*` prefix)
- [ ] Semantic class names (BEM methodology)
- [ ] WCAG 2.1 AA contrast ratios
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] No hardcoded values (hex, px, rem, font names)

**See:** [/guidelines/optimisation.md](../guidelines/optimisation.md)

---

## Deliverables

1. **Audit Report:** `/reports/YYYY-MM/css-optimisation-report-[date].md`
2. **Task List:** Add tasks to `/tasks/task-list.md` for manual review items
3. **CHANGELOG Entry:** Document all CSS consolidations, splits, and deletions

---

## Execution Order

1. **Phase 1:** Resolve 31+ `-optimized` file pairs (biggest quick win)
2. **Phase 2:** Split CSS files > 400 lines into logical sub-files
3. **Phase 3:** Extract shared template styles into base files
4. **Phase 4:** Organize CSS imports into proper hierarchy (index files)
5. **Phase 5:** Remove duplicate CSS selector blocks
6. **Phase 6:** Remove orphaned CSS files and dead selectors
7. **Phase 7:** Optimize specificity (refactor > 3 level selectors)

---

**Prompt Location:** `/prompts/optimise-css.md`  
**Category:** Optimisation  
**Difficulty:** Medium  
**Estimated Duration:** 45-60 minutes
