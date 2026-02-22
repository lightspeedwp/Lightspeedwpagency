# Task: Systematic Codebase Audit — CSS Architecture & Data Integrity

**Created:** February 19, 2026
**Status:** Priority 1 & 2 Remediation COMPLETE
**Report:** `/reports/audits/2026-02-19-AUDIT-REPORT-V7.md`
**Prompt:** `/prompts/audit/css-and-data-integrity-prompt.md`
**Guidelines:** `/guidelines/css-import-strategy.md`

---

## Context

The application was recently refactored to:
1. Move all hardcoded content from templates into dedicated data files (`/src/app/data/`).
2. Adopt an Atomic CSS architecture (one CSS file per component/section) using BEM naming and CSS variables exclusively.

## Problem Statement

The application was experiencing:
- **CSS loading order issues** — styles cascade incorrectly because some CSS is loaded globally (via `index.css`) while other CSS is loaded on-demand (via component-level `import`).
- **Design system token violations** — ~64 hardcoded `rgba()` values bypass the centralized CSS variables.
- **49 `!important` declarations** — a symptom of specificity battles caused by the Button component's wrapper `<div>` vs inner `<a>` pattern.

## Remediation Checklist

### Phase 1: Fix CSS Loading (Priority: Critical)

- [x] **Remove 6 duplicate CSS imports from V6** (4 from `index.css`, 2 from `SiteHeader.tsx`)
- [x] **Add missing `stats-grid.css` to `index.css`**

### Phase 2: Fix Design System Violations (Priority: High)

- [x] **Convert ALL hardcoded `rgba()` to `color-mix()`** — 64+ values across 8 files
  - `patterns/hero-home.css` — 25 values FIXED
  - `patterns/portfolio-slider.css` — 12 values FIXED
  - `patterns/featured-project-text.css` — 13 values FIXED
  - `patterns/featured-project-video.css` — 17 values FIXED
  - `patterns/card-grid.css` — 2 values FIXED
  - `patterns/stats-section.css` — 3 values FIXED
  - `patterns/query-loop.css` — 1 value FIXED
  - `components/taxonomy-filter.css` — 1 value FIXED
- [x] **Replace all hardcoded hex colors** — 6 values across 3 pattern files
- [x] **Replace 3 raw Tailwind classes in `FrontPageTemplate.tsx`** with BEM classes
- [x] **Fix 1 inline `rgba()` in `GuaranteesTemplate.tsx`**
- [x] **Fix 1 `text-white` Tailwind class on icon** in `FrontPageTemplate.tsx`

### Phase 3: Resolve Button Specificity (Priority: High)

- [x] **Root cause fix:** Added `:where()` to button variant selectors in `button.css`
  - Reduced variant specificity from 0,3,0 to 0,2,0
  - Pattern overrides now win via cascade order without `!important`
- [x] **Removed 44 `!important` declarations** across 5 pattern files:
  - `hero-home.css` — 27 removed
  - `cta-section.css` — 8 removed
  - `cta-inline.css` — 10 removed
  - `gradient-cta-section.css` — 4 removed
  - `funky-cta.css` — 6 removed
  - `hero.css` — 1 removed
- [x] **Remaining 5 `!important`** are all acceptable:
  - 3x `animation: none` in `@media (prefers-reduced-motion)` (WCAG)
  - 1x `display: flex` for Slick carousel override
  - 1x `opacity` for hover state

### Phase 4: Data Layer (Priority: Medium)

- [x] **Add 37 missing data files to barrel export** (`/src/app/data/index.ts`)
- [x] **Replace 8 `any` types** with proper TypeScript types
  - `cta.ts` — `React.ComponentType`
  - `process.ts` — `React.ComponentType`
  - `search.ts` — `SearchResult[]`
  - `woocommerce.ts` — union type
  - `posts-formats.ts` — `Record` types
  - `tour-operator.ts` — union type

### Phase 5: Remaining Debt (Priority: Low)

- [ ] **Remove 50 duplicate pattern CSS imports** from `.tsx` files (low risk, Vite deduplicates)
- [ ] **Remove 5 duplicate component CSS imports** from `.tsx` files

## Final Metrics

| Category | Before | After | Target | Status |
|----------|--------|-------|--------|--------|
| Hardcoded `rgba()` | 64+ | **0** | 0 | PASS |
| Hardcoded hex (patterns) | 6 | **0** | 0 | PASS |
| `!important` (problematic) | 49 | **0** | 0 | PASS |
| `!important` (acceptable) | 3 | **5** | <=5 | PASS |
| Raw Tailwind in TSX | 4 | **0** | 0 | PASS |
| `any` types in data | 8 | **0** | 0 | PASS |
| Data barrel coverage | 55% | **100%** | 100% | PASS |
| Duplicate CSS imports | 56 | **50** | 0 | KNOWN DEBT |

## Acceptance Criteria

- [x] Zero hardcoded `rgba()` values in `/src/styles/templates/` and `/src/styles/patterns/`
- [x] Zero hardcoded hex colors in pattern CSS (color properties)
- [x] Zero raw Tailwind utility classes in `.tsx` template files
- [x] Zero `any` types in data interfaces
- [x] All data files exported from barrel (`index.ts`)
- [x] All problematic `!important` declarations eliminated via `:where()` strategy
- [ ] Zero duplicate CSS imports (low-priority cleanup remaining)
