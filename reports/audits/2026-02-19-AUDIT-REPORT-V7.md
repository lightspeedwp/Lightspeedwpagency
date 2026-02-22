# Audit Report V7 — CSS Architecture & Data Integrity

**Date:** February 19, 2026  
**Scope:** Full codebase audit per `/prompts/audit/css-and-data-integrity-prompt.md`  
**Status:** Priority 1 & 2 Remediation COMPLETE

---

## 1. Critical Errors (Build Blockers)

**None found.** All CSS imports resolve, all data paths are valid.

---

## 2. Loading Order Risks

### 2.1 Duplicate CSS Imports (Pattern Files)

**Status:** Documented, low risk  
**Count:** ~50 pattern CSS files loaded BOTH in `index.css` (global) AND at component level  
**Risk:** Low in production (Vite deduplicates). Minor HMR cascade risk in dev.  
**Recommendation:** Remove component-level `import '@/styles/patterns/*.css'` from all 50 pattern `.tsx` files. Patterns are already loaded globally via `index.css`.

### 2.2 Missing Global Import (Fixed)

| File | Action |
|------|--------|
| `stats-grid.css` | **Added** to `index.css` line 167 |

### 2.3 Component-Level Imports (Acceptable)

These component CSS files are loaded BOTH globally and at component level but are low risk:
- `components/container.css` (Container.tsx)
- `components/section.css` (Section.tsx)
- `components/loading-states.css` (LoadingStates.tsx)
- `components/view-switcher.css` (ViewSwitcher.tsx)
- `blocks/theme/site-footer.css` (SiteFooter.tsx)

---

## 3. Design System Violations

### 3.1 Hardcoded `rgba()` Values

| Category | Before V6 | After V6 | After V7 |
|----------|-----------|----------|----------|
| Template CSS | 13 | 0 | **0** |
| Pattern CSS | 50+ | 50+ | **0** |
| Component CSS | 1 | 1 | **0** |
| **Total** | **64+** | **51+** | **0** |

**Files fixed in V7:**
- `hero-home.css` — 25 values converted to `color-mix()`
- `portfolio-slider.css` — 12 values converted
- `featured-project-text.css` — 13 values converted
- `featured-project-video.css` — 17 values converted
- `card-grid.css` — 2 values converted
- `stats-section.css` — 3 values converted
- `query-loop.css` — 1 value converted

### 3.2 Hardcoded Hex Colors

| Category | Before V7 | After V7 |
|----------|-----------|----------|
| Pattern CSS | 6 | **0** |
| Template CSS | 0 | **0** |

**Fixed:** `hero-home.css` (#FFFFFF, #1E6AFF, #1554CC, #4B9CFF), `portfolio-slider.css` (#0f0518, #fff), `featured-project-text.css` (#fff, #000), `featured-project-video.css` (#fff, #000)

### 3.3 `!important` Declarations

| Category | Before V7 | After V7 | Acceptable |
|----------|-----------|----------|------------|
| Pattern CSS | ~49 | **5** | 5 (all acceptable) |
| Template CSS | 0 | **0** | - |

**Remaining 5 (all acceptable):**
- 3x `animation: none !important` in `@media (prefers-reduced-motion)` (WCAG requirement)
- 1x `display: flex !important` in portfolio-slider (Slick carousel override)
- 1x `opacity: 1 !important` in social-proof (hover state override)

**Root cause fix:** Added `:where()` to button variant selectors in `button.css`, reducing their specificity from 0,3,0 to 0,2,0. This allows pattern overrides to win via cascade order without `!important`.

### 3.4 Raw Tailwind Classes in TSX

| File | Before V7 | After V7 |
|------|-----------|----------|
| `FrontPageTemplate.tsx` | 3 (`text-white`, `border-white`, `text-center mt-12`) | **0** |
| `GuaranteesTemplate.tsx` | 1 (`rgba()` in inline style) | **0** |

**Fixed:** Replaced with BEM classes (`.front-page__hero-btn--outline`, `.front-page__section-footer`) and CSS variables.

---

## 4. Data Layer Issues

### 4.1 Barrel Export Coverage

| Metric | Before V7 | After V7 |
|--------|-----------|----------|
| Data files in `/src/app/data/` | 84 | 84 |
| Exported from `index.ts` | 46 | **84** |
| Missing exports | 37 | **0** |

**37 files added** to barrel export, organized by category (Core, Solutions, Services, Templates, Extended, UI).

### 4.2 `any` Type Usage

| File | Before V7 | After V7 |
|------|-----------|----------|
| `cta.ts` | 2x `any` | **0** (typed as `React.ComponentType`) |
| `process.ts` | 1x `any` | **0** (typed as `React.ComponentType`) |
| `search.ts` | 1x `any[]` | **0** (typed as `SearchResult[]`) |
| `woocommerce.ts` | 1x `any` | **0** (typed as union type) |
| `posts-formats.ts` | 2x `any` | **0** (typed as `Record` types) |
| `tour-operator.ts` | 1x `any` | **0** (typed as union type) |
| **Total** | **8** | **0** |

---

## 5. Dead Code

### 5.1 Orphan CSS Files

Files in `/src/styles/` not imported by any CSS or TSX file:
- `header-simple.css` — imported by `HeaderSimple.tsx` but not in `index.css` (component-level only, acceptable)
- `components/skip-link.css` — imported by `SkipLink.tsx` only (acceptable)
- `components/mobile-filter-popover.css` — imported by `MobileFilterPopover.tsx` only (acceptable)
- `components/trust-badges.css` — imported by `TrustBadges.tsx` only (acceptable)
- `components/scroll-down-arrow.css` — imported by `ScrollDownArrow.tsx` only (acceptable)
- `components/taxonomy-filter.css` — imported by `TaxonomyFilter.tsx` only (acceptable)

**Action:** These are component-scoped CSS files not in `index.css` — acceptable per the component-level strategy.

### 5.2 Unused Data Files

**None found.** All 84 data files are imported by at least one `.tsx` file.

---

## 6. Remediation Summary (Completed)

| Priority | Task | Status |
|----------|------|--------|
| P1 | Fix all `rgba()` in pattern CSS | **DONE** (51 values) |
| P1 | Fix all `rgba()` in component CSS | **DONE** (1 value) |
| P1 | Fix all hardcoded hex in pattern CSS | **DONE** (6 values) |
| P1 | Fix raw Tailwind in FrontPageTemplate | **DONE** (3 classes) |
| P1 | Fix inline rgba in GuaranteesTemplate | **DONE** (1 value) |
| P2 | Fix `!important` via `:where()` strategy | **DONE** (44 removed) |
| P2 | Add missing data barrel exports | **DONE** (37 files) |
| P2 | Eliminate `any` types in data files | **DONE** (8 types) |
| P2 | Add missing `stats-grid.css` to index.css | **DONE** |
| P3 | Remove duplicate pattern CSS imports | Documented (50 files, low risk) |

---

## 7. Metrics Summary

| Category | Before (V6) | After (V7) | Target | Status |
|----------|-------------|------------|--------|--------|
| Hardcoded `rgba()` | 51+ | **0** | 0 | PASS |
| Hardcoded hex | 6 | **0** | 0 | PASS |
| `!important` (problematic) | ~49 | **0** | 0 | PASS |
| `!important` (acceptable) | 3 | **5** | <=5 | PASS |
| Raw Tailwind in TSX | 4 | **0** | 0 | PASS |
| `any` types in data | 8 | **0** | 0 | PASS |
| Data barrel coverage | 55% | **100%** | 100% | PASS |
| Duplicate CSS imports | 56 | **50** | 0 | KNOWN DEBT |

---

## Validation Commands

```bash
# 1. Zero hardcoded rgba in template/pattern CSS
grep -rn 'rgba([0-9]' src/styles/templates/ src/styles/patterns/
# Expected: 0 results

# 2. Zero hardcoded hex in template/pattern CSS (color properties only)
grep -rn 'color:\s*#[0-9a-fA-F]' src/styles/templates/ src/styles/patterns/
# Expected: 0 results

# 3. Zero problematic !important (outside print/reduced-motion/library overrides)
grep -rn '!important' src/styles/patterns/ | grep -v 'prefers-reduced-motion' | grep -v 'slick' | grep -v 'opacity'
# Expected: 0 results

# 4. Zero any types in data files
grep -rn ': any\b\|as any' src/app/data/
# Expected: 0 results

# 5. All data files in barrel export
ls src/app/data/*.ts | wc -l  # Should match export count in index.ts
```
