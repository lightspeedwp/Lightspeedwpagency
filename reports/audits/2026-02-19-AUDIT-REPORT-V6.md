# AUDIT_REPORT_V6 — CSS Architecture & Data Integrity

**Date:** February 19, 2026
**Scope:** `/src/styles/`, `/src/app/data/`, `/src/app/components/`
**Auditor:** Automated deep-scan
**Status:** Complete

---

## Executive Summary

The codebase has a **mixed CSS import strategy** — some template CSS is loaded globally via `index.css`, while other template CSS is loaded on-demand via component-level imports. Six files are loaded _both_ ways, causing duplication. Pattern and block CSS files in `/src/styles/patterns/` and `/src/styles/blocks/` still contain **52+ hardcoded `rgba()` values** that bypass the design system. The data layer (`/src/app/data/`) is structurally sound with correct named exports, but **37 of 84 data files are missing from the barrel export** (`index.ts`), and **8 TypeScript interfaces use `any`** instead of proper types.

**Severity Breakdown:**
- Critical (Build Blockers): **0**
- High (Loading Order / Cascade): **6 duplicate imports, 1 mixed strategy**
- Medium (Design System Violations): **52+ hardcoded rgba, 42+ !important, 3 raw Tailwind**
- Low (Cleanup): **4 orphan CSS files, 37 missing barrel exports, 8 `any` types**

---

## 1. CSS Import & Cascade Analysis

### 1.1 Entry Point Chain

```
App.tsx
  -> ../styles/index.css          (SINGLE global import, correct)
       -> fonts.css                (1. Core: font-face declarations)
       -> presets/index.css        (2. Core: design tokens)
            -> colors.css
            -> typography.css
            -> spacing.css
            -> shadows.css
            -> borders.css
            -> layout.css
       -> resets.css               (3. Core: browser resets)
       -> theme-base.css           (4. Theme: base variables)
       -> theme-light.css          (5. Theme: light mode overrides)
       -> theme-dark.css           (6. Theme: dark mode overrides)
       -> theme-variables.css      (7. Theme: computed variables)
       -> layout.css               (8. Core: layout utilities)
       -> utilities.css            (9. Core: .wp-* utilities)
       -> responsive.css           (10. Core: breakpoints)
       -> [blocks]                 (11. Block styles)
       -> [sections]               (12. Section styles)
       -> [patterns]               (13. Pattern styles)
       -> [templates]              (14. Template styles)
       -> [components]             (15. Component styles)
       -> [animations, print]      (16. Utilities)
```

**Verdict:** The cascade order in `index.css` is **correct** — base tokens load before blocks, blocks before patterns, patterns before templates. The architecture is sound.

### 1.2 Duplicate CSS Imports (Loaded BOTH Globally AND at Component Level)

These 6 files are imported in `index.css` (always loaded) AND re-imported by their component (loaded again on mount). This causes the CSS to be processed twice and can produce unpredictable specificity when the component mounts at different times during navigation.

| # | CSS File | Global Import (index.css) | Component Import |
|---|----------|--------------------------|------------------|
| 1 | `blocks/theme/site-header.css` | Line 41 | `SiteHeader.tsx:39` |
| 2 | `responsive.css` | Line 11 | `SiteHeader.tsx:40` |
| 3 | `templates/page-service-development.css` | Line 254 | `DevelopmentServiceTemplate.tsx:24` |
| 4 | `templates/page-service-performance.css` | Line 255 | `PerformanceServiceTemplate.tsx:35` |
| 5 | `templates/page-service-seo.css` | Line 256 | `SEOServiceTemplate.tsx:31` |
| 6 | `templates/page-service-discovery.css` | Line 257 | `DiscoveryServiceTemplate.tsx:35` |

**Risk:** Medium-High. Vite's CSS module system deduplicates in production builds, but during development (HMR), the double import can cause cascade order flipping.

### 1.3 Mixed Import Strategy

The project uses **two incompatible CSS loading strategies simultaneously**:

**Strategy A — Global (via `index.css`):** ~55 template CSS files are imported globally. These load on every page, regardless of whether the template is rendered. CSS order is deterministic.

**Strategy B — Component-level (via `import '@/styles/...'` in `.tsx`):** ~22 template CSS files are imported only when their component mounts. CSS order depends on React's render order, which changes during navigation.

**Files using Strategy B only (NOT in `index.css`):**

| # | CSS File | Importing Component |
|---|----------|-------------------|
| 1 | `page-front-page.css` | `FrontPageTemplate.tsx:50` |
| 2 | `page-service-design.css` | `DesignServiceTemplate.tsx:23` |
| 3 | `page-service-content.css` | `ContentServiceTemplate.tsx:30` |
| 4 | `page-service-security.css` | `SecurityServiceTemplate.tsx:29` |
| 5 | `page-service-migrations.css` | `MigrationsServiceTemplate.tsx:34` |
| 6 | `page-service-support.css` | `SupportServiceTemplate.tsx:25` |
| 7 | `page-service-newsletter.css` | `NewsletterServiceTemplate.tsx:24` |
| 8 | `page-service-hosting.css` | `HostingTemplate.tsx:32` |
| 9 | `page-service-strategy.css` | `ContentStrategyTemplate.tsx:16` |
| 10 | `page-service-training.css` | `TrainingTemplate.tsx:16` |
| 11 | `page-services-landing.css` | `ServicesLandingTemplate.tsx:24` |
| 12 | `page-solution-redesign.css` | `WordPressRedesignTemplate.tsx:22`, `WooCommerceRedesignTemplate.tsx:21` |
| 13 | `page-solution-tour-design.css` | `TourOperatorDesignTemplate.tsx:21` |
| 14 | `portfolio-tag-archive.css` | `PortfolioTagArchiveTemplate.tsx:19` |
| 15 | `single-project.css` | `SingleProjectTemplate.tsx:27` |
| 16 | `deployment-readiness.css` | `DeploymentReadinessTemplate.tsx:31` |
| 17 | `design-playground.css` | `DesignPlaygroundTemplate.tsx:19` |
| 18 | `design-tokens-reference.css` | `DesignTokensReferenceTemplate.tsx:21` |
| 19 | `docs-generator.css` | `DocsGeneratorTemplate.tsx:34` |
| 20 | `snippet-generator.css` | `SnippetGeneratorTemplate.tsx:34` |

**Risk:** When a user navigates from a Strategy-B page to another Strategy-B page, the first page's CSS may still be in the document head, creating conflicts if both use similar class names.

### 1.4 True Orphan CSS Files (Never Imported Anywhere)

| # | CSS File | Status |
|---|----------|--------|
| 1 | `templates/page-contact.css` | Probable duplicate of `templates/contact-page.css` (which IS in `index.css`) |
| 2 | `templates/team-page.css` | Probable duplicate of `templates/page-team.css` (which IS in `index.css`) |
| 3 | `tabs.css` (root) | Superseded by `blocks/design/tabs.css` |
| 4 | `compliance-scorecard.css` (root) | Superseded by `blocks/dev-tools/compliance-scorecard.css` |

**Risk:** Low. Dead files that inflate the project but don't cause runtime issues.

### 1.5 `!important` Usage Audit

`!important` in CSS is a symptom of specificity battles caused by loading order issues.

**Acceptable usage (print/motion media queries):**
- `animations.css` — 2 uses (inside `@media (prefers-reduced-motion: reduce)`) **OK**
- `print.css` — 40 uses (inside `@media print`) **OK**

**Problematic usage (specificity overrides):**

| File | Count | Reason |
|------|-------|--------|
| `wordpress-blocks.css` | 4 | Gap overrides on `.has-*-block-gap` |
| `templates/page-service-discovery.css` | 9 | Button `.wp-block-button__link` overrides |
| `templates/page-service-development.css` | 11 | Button `.wp-block-button__link` overrides |
| `patterns/cta-inline.css` | 10 | Button color overrides |
| `patterns/gradient-cta-section.css` | 4 | Button color overrides |
| `patterns/cta-section.css` | 8 | Button color overrides |
| `patterns/hero-home.css` | 3 | Button background/border overrides |

**Total problematic `!important`: 49**

**Root Cause:** The `Button` component wraps its output in a `<div class="wp-block-button">` container. When template/pattern CSS tries to style the inner `<a class="wp-block-button__link">`, it must fight the global button styles. All 49 uses are the `.wp-block-button__link` override pattern documented in the project's known bugs.

---

## 2. Design System Token Violations

### 2.1 Hardcoded `rgba()` Values (Should Use `color-mix()` or `var()`)

**Template CSS:** 13 remaining violations

| File | Count | Lines |
|------|-------|-------|
| `templates/page-solution-ecommerce.css` | 5 | 223, 224, 253, 298, 528 |
| `templates/page-front-page.css` | 5 | 47, 48, 109, 111, 142 |
| `templates/page-contact.css` | 1 | 245 |
| `templates/testimonial-single.css` | 1 | 295 |
| `templates/page-front-page.css` | 1 | 195 (also contains Tailwind hover class) |

**Pattern CSS:** 38+ remaining violations

| File | Count | Primary Issue |
|------|-------|---------------|
| `patterns/hero-home.css` | 26 | `rgba(255,255,255,...)` and `rgba(123,231,255,...)` |
| `patterns/card-grid.css` | 2 | `rgba(0,0,0,0.6)` and `rgba(255,255,255,0.2)` |
| `patterns/stats-section.css` | 2 | `rgba(255,255,255,...)` |
| `patterns/portfolio-slider.css` | 8+ | `rgba(255,255,255,...)` |

**Component CSS:** 1 remaining violation

| File | Count | Line |
|------|-------|------|
| `components/taxonomy-filter.css` | 1 | 107 |

**TSX Inline Styles:** 1 remaining violation

| File | Line | Value |
|------|------|-------|
| `GuaranteesTemplate.tsx` | 54 | `rgba(255,255,255,0.2)` in Badge style |

**Total: ~54 hardcoded rgba values**

### 2.2 Raw Tailwind Utility Classes in TSX

These should be replaced with BEM classes from dedicated CSS files:

| File | Line | Classes |
|------|------|---------|
| `FrontPageTemplate.tsx` | 111 | `text-white border-white hover:bg-white/10` |
| `FrontPageTemplate.tsx` | 199 | `text-center mt-12` |
| `FrontPageTemplate.tsx` | 329 | `text-center mt-12` |
| `page-front-page.css` | 195 | `.hover\:bg-white\/10:hover` (Tailwind escape in CSS) |

---

## 3. Data Layer Verification

### 3.1 Import/Export Pattern

All data files use **named exports** (`export const ...`, `export interface ...`). No default export mismatches found. All 50+ template files importing from `/src/app/data/` use correct named import syntax.

**Verdict: PASS**

### 3.2 Path Resolution

All relative import paths (`../../data/...`) resolve to existing files. No broken paths detected.

**Verdict: PASS**

### 3.3 Barrel Export Coverage

`/src/app/data/index.ts` re-exports from 46 of 84 data files. The remaining 37 files are imported directly by components using relative paths (bypassing the barrel). This is not a bug but creates inconsistent import patterns.

**Missing from barrel (partial list — highest impact):**

| Data File | Used By |
|-----------|---------|
| `archive-items.ts` | `ArchiveTemplate`, `PortfolioArchiveTemplate` |
| `services-detailed.ts` | 6+ service templates |
| `solutions-detailed.ts` | `WooCommerceSolutionTemplate` |
| `posts-formats.ts` | Post format archive templates |
| `blog-post-page.ts` | `SinglePostTemplate` |
| `homepage.ts` | `FrontPageTemplate` |
| `pricing-page.ts` | `PricingTemplate` |
| `page-switcher.ts` | `PageSwitcher` component |

### 3.4 Type Safety

8 instances of `any` type in data files:

| File | Line | Property |
|------|------|----------|
| `cta.ts` | 21, 26 | `icon?: any` (2x) |
| `process.ts` | 15 | `icon: any` |
| `woocommerce.ts` | 19 | `value: any` |
| `posts-formats.ts` | 31, 34 | `meta: any[]`, `_embedded?: any` |
| `tour-operator.ts` | 55 | `meta?: { key: string; value: any }[]` |
| `search.ts` | 187 | `performSearch` return type `any[]` |

**Recommendation:** Replace `any` with `React.ComponentType` for icon props, `string | number` for values, and proper interfaces for meta/embedded objects.

---

## 4. Dead Code & Zombie Artifacts

### 4.1 Orphan CSS Files (Safe to Delete)

| File | Reason |
|------|--------|
| `/src/styles/templates/page-contact.css` | Duplicate of `contact-page.css` |
| `/src/styles/templates/team-page.css` | Duplicate of `page-team.css` |
| `/src/styles/tabs.css` | Superseded by `blocks/design/tabs.css` |
| `/src/styles/compliance-scorecard.css` | Superseded by `blocks/dev-tools/compliance-scorecard.css` |

### 4.2 Root-Level CSS Files Not in `index.css`

These are loaded via component-level imports and are NOT orphans, but their location in the styles root (rather than a subdirectory) is inconsistent:

| File | Loaded By |
|------|-----------|
| `back-to-top.css` | `BackToTopButton.tsx` |
| `benefits-grid.css` | `BenefitsGrid.tsx` |
| `header-simple.css` | `HeaderSimple.tsx` |
| `icon-features-list.css` | `IconFeaturesList.tsx` |
| `scroll-down.css` | `ScrollDownArrow.tsx` |

**Recommendation:** Move these into `styles/components/` for consistency.

---

## 5. Remediation Plan

### Priority 1 — Fix Duplicate Imports (30 min)

**Option A (Recommended): Remove from `index.css`, keep component-level imports only.**

Edit `/src/styles/index.css`:
1. Remove line 254: `@import './templates/page-service-development.css';`
2. Remove line 255: `@import './templates/page-service-performance.css';`
3. Remove line 256: `@import './templates/page-service-seo.css';`
4. Remove line 257: `@import './templates/page-service-discovery.css';`

Edit `/src/app/components/parts/SiteHeader.tsx`:
5. Remove line 39: `import '../../../styles/blocks/theme/site-header.css';`
6. Remove line 40: `import '../../../styles/responsive.css';`

### Priority 2 — Unify CSS Import Strategy (1 hour)

Choose ONE strategy and apply consistently:

**Recommended: Component-level imports for ALL template CSS.**

1. Remove all `@import './templates/...'` lines from `index.css` (lines 221-282).
2. Verify each template `.tsx` file imports its own CSS file via `import '@/styles/templates/...'`.
3. Add missing component-level imports for templates that rely on global loading.

### Priority 3 — Eliminate Hardcoded Colors (2 hours)

Convert all remaining `rgba()` values to `color-mix()`:

```css
/* Before */
background: rgba(255, 255, 255, 0.15);

/* After */
background: color-mix(in srgb, var(--color-white) 15%, transparent);
```

**Files to fix (by priority):**
1. `patterns/hero-home.css` — 26 values (homepage, highest visibility)
2. `templates/page-front-page.css` — 6 values (homepage)
3. `templates/page-solution-ecommerce.css` — 5 values
4. `patterns/portfolio-slider.css` — 8 values
5. `patterns/card-grid.css` — 2 values
6. `patterns/stats-section.css` — 2 values
7. `components/taxonomy-filter.css` — 1 value
8. `templates/testimonial-single.css` — 1 value

### Priority 4 — Fix Raw Tailwind in TSX (15 min)

Edit `FrontPageTemplate.tsx`:
1. Line 111: Replace `className="text-white border-white hover:bg-white/10"` with a BEM class.
2. Lines 199, 329: Replace `className="text-center mt-12"` with a BEM class.
3. Add corresponding rules to `page-front-page.css`.

### Priority 5 — Delete Orphan Files (5 min)

```
rm /src/styles/templates/page-contact.css
rm /src/styles/templates/team-page.css
rm /src/styles/tabs.css
rm /src/styles/compliance-scorecard.css
```

### Priority 6 — Resolve `!important` in Button Overrides (1 hour)

The 49 `!important` declarations are all caused by the Button component's wrapper `<div>` vs inner `<a>` specificity issue. Fix by:
1. Increase specificity of template/pattern selectors using the parent BEM class:
   ```css
   /* Instead of */
   .disc-hero__btn-primary .wp-block-button__link {
     background: var(--disc-gradient) !important;
   }
   
   /* Use */
   .wordpress-page .disc-hero__btn-primary .wp-block-button__link {
     background: var(--disc-gradient);
   }
   ```

### Priority 7 — Type Safety Cleanup (30 min)

Replace `any` types in data files with proper TypeScript types:
- `icon: any` -> `icon: React.ComponentType<{ size?: number; className?: string }>`
- `value: any` -> `value: string | number | boolean`
- `meta: any[]` -> `meta: Record<string, string>[]`
- `performSearch` return type -> `SearchResult[]`

### Priority 8 — Barrel Export Completion (20 min)

Add missing data files to `/src/app/data/index.ts`.

---

## 6. Metrics Summary

| Category | Current | Target | Gap |
|----------|---------|--------|-----|
| Duplicate CSS imports | 6 | 0 | 6 |
| Orphan CSS files | 4 | 0 | 4 |
| Hardcoded `rgba()` | ~54 | 0 | ~54 |
| `!important` (non-print/motion) | 49 | 0 | 49 |
| Raw Tailwind in TSX | 3 | 0 | 3 |
| `any` types in data | 8 | 0 | 8 |
| Missing barrel exports | 37 | 0 | 37 |
| Broken imports | 0 | 0 | 0 |
| Build blockers | 0 | 0 | 0 |

**Estimated Remediation Time: ~5.5 hours**

---

**Report generated:** February 19, 2026
**Next action:** Execute Priority 1 (duplicate imports) and Priority 2 (unify strategy) to resolve the cascade ordering issues.
