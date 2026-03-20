# Optimisation Guidelines

**Category:** Performance  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Overview

Standards for optimising the LSX Design codebase across file size, memory footprint, CSS architecture, component structure, and bundle performance. All optimisation work must maintain 100% design system compliance and accessibility requirements.

---

## File Size Thresholds

### Critical (Split Immediately)

| File Type | Critical Threshold | Target Max | Action |
|---|---|---|---|
| TypeScript/TSX | > 1,000 lines | 300 lines | Extract components, split by concern |
| CSS | > 1,000 lines | 400 lines | Split by section, media query, or pattern |
| Data files | > 1,000 lines | 500 lines | Split by category or page context |
| Markdown | > 500 lines | 350 lines | Split into parent + sub-files |

### High Priority (Refactor Soon)

| File Type | High Priority | Action |
|---|---|---|
| TypeScript/TSX | 500-1,000 lines | Evaluate for sub-component extraction |
| CSS | 500-1,000 lines | Evaluate for logical splits |
| Data files | 500-1,000 lines | Evaluate for category splits |

### Medium Priority (Monitor)

| File Type | Medium Priority | Action |
|---|---|---|
| TypeScript/TSX | 300-500 lines | Monitor for continued growth |
| CSS | 400-500 lines | Review for consolidation opportunities |

---

## DRY Architecture Principles

### Component Hierarchy (Mandatory)

All pages and templates MUST follow this structure:

```
/src/app/components/
├── blocks/          # Atomic UI elements (Button, Card, Icon)
├── patterns/        # Section-level compositions (Hero, CTA, Stats)
├── parts/           # Template parts (Header, Footer, Sidebar)
├── templates/       # Full page layouts
└── pages/           # Route-level page wrappers
```

### Composition Rules

1. **Pages** = Templates + Data
2. **Templates** = Parts + Patterns
3. **Patterns** = Blocks + Layout
4. **Blocks** = Primitives + Styling

**Anti-pattern:** Direct nesting of blocks inside pages (skip templates/patterns)

### Component Reusability

| Component Type | Max Instances Before Extraction |
|---|---|
| Identical JSX blocks | 2 (extract to pattern on 3rd use) |
| Similar prop-based variants | 3 (consolidate to single component with props) |
| Duplicate styling | 2 (extract to shared CSS file) |

---

## CSS Optimisation Standards

### File Organisation

**Split CSS by:**
- **Concern:** Base, layout, typography, utilities
- **Scope:** Component-specific, pattern-specific, global
- **Breakpoint:** Mobile-first base + desktop overrides
- **Theme:** Light/dark mode variants (use CSS variables, not duplicated selectors)

### Import Architecture

```css
/* global.css - Single entry point */
@import './reset.css';
@import './tokens.css';
@import './typography.css';
@import './utilities.css';
@import './blocks/index.css';
@import './patterns/index.css';
@import './templates/index.css';
```

**Rules:**
1. Each sub-folder has an `index.css` that imports its children
2. Never import component CSS directly in TSX (use global cascade)
3. Avoid `@import` nesting > 2 levels deep

### Duplicate Detection

**Zero tolerance for:**
- Identical selector blocks in multiple files
- `-optimized` vs original file pairs (keep one, delete the other)
- Unused CSS files (no corresponding TSX component)

### Specificity Control

**Max specificity:** 3 levels (`.wp-block .wp-card .wp-card__title`)

**Avoid:**
- IDs in selectors (`#header`)
- `!important` (except for utility overrides)
- Overly specific selectors (`.page .section .container .card .title`)

---

## Memory Optimisation Checklist

### 1. File Splitting

- [ ] No files > 1,000 lines
- [ ] TSX components < 300 lines
- [ ] CSS files < 400 lines
- [ ] Data files < 500 lines
- [ ] Markdown docs < 350 lines

### 2. Duplicate Removal

- [ ] No duplicate CSS selector blocks
- [ ] No `-optimized` file pairs (consolidated)
- [ ] No duplicate data exports (testimonials, FAQs, etc.)
- [ ] No unused imports in TSX files

### 3. Component Consolidation

- [ ] Similar patterns merged (max 3 variants per pattern type)
- [ ] Prop-based variants replace duplicate components
- [ ] Shared logic extracted to custom hooks

### 4. CSS Architecture

- [ ] Logical file splits by concern/scope
- [ ] Proper import hierarchy (index files)
- [ ] No orphaned CSS files
- [ ] All CSS imported through global cascade

### 5. Layer Flattening

- [ ] Max 5 levels of `div` nesting
- [ ] Semantic HTML replaces wrapper divs
- [ ] Unnecessary containers removed

---

## Performance Optimisation Checklist

### Bundle Size

- [ ] Components lazy-loaded where appropriate
- [ ] Heavy libraries code-split
- [ ] Unused dependencies removed
- [ ] Tree-shaking verified for icon libraries

### Render Performance

- [ ] Expensive calculations memoized (`useMemo`)
- [ ] Event handlers memoized (`useCallback`)
- [ ] Large lists virtualized
- [ ] Images lazy-loaded with proper loading attributes

### CSS Performance

- [ ] Critical CSS inlined for above-fold content
- [ ] Non-critical CSS deferred
- [ ] CSS animations use `transform` and `opacity` only
- [ ] Reduced motion respected (`prefers-reduced-motion`)

---

## Design System Compliance (Non-Negotiable)

ALL optimisation work MUST maintain:

- [ ] 100% CSS variable usage (colors, spacing, typography, borders)
- [ ] Font faces from CSS only (`var(--font-primary)`, `var(--font-secondary)`)
- [ ] WordPress utility classes only (`.wp-*` prefix, zero Tailwind)
- [ ] WCAG 2.1 AA compliance (contrast, focus, keyboard nav)
- [ ] Reduced motion support
- [ ] Touch target minimums (44x44px)
- [ ] Semantic HTML
- [ ] Phosphor icons only (zero Lucide imports)

**See:** [design-tokens/](./design-tokens/), [accessibility.md](./accessibility.md)

---

## Audit Triggers

| Trigger | What It Does |
|---|---|
| `optimise` | Master orchestrator — runs ALL optimise sub-triggers |
| `optimise memory` | File splitting, duplicate removal, component consolidation |
| `optimise css` | CSS architecture, duplicate removal, logical splits |
| `optimise performance` | Bundle size, lazy loading, render performance |
| `optimise components` | Component consolidation, prop optimization |
| `optimise data` | Data file consolidation, duplicate removal |
| `optimise imports` | Remove unused imports, consolidate import statements |

**See:** [prompt-triggers.md](./prompt-triggers.md)

---

## Success Metrics

| Metric | Before | Target | Measure |
|---|---|---|---|
| Files > 1,000 lines | 10 | 0 | File count |
| Average CSS file size | 264 lines | < 200 lines | Total lines / file count |
| Duplicate CSS pairs | 31 | 0 | Manual audit |
| Component pattern variants | 8 (testimonials) | 3-4 | Pattern count |
| Bundle size | TBD | -20% | Build output |
| Unused imports | TBD | 0 | ESLint report |

---

## Related Guidelines

- [build-rules.md](./build-rules.md) — File size limits, composition rules
- [performance.md](./performance.md) — Render performance, accessibility
- [design-tokens/](./design-tokens/) — Design system variables
- [components/components-vs-patterns.md](./components/components-vs-patterns.md) — Component hierarchy
- [prompts.md](./prompts.md) — Prompt workflow

---

**Last Updated:** March 18, 2026  
**Enforcement:** Required  
**Next Review:** After `optimise` orchestrator run
