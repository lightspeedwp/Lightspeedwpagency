# LSX Design Agency -- Prototype Stability Audit Orchestrator

**Version:** 1.0 (March 4,2026)
**Type:** Multi-Phase Application Stability, Build & Architecture Audit
**Status:** READY TO EXECUTE
**Estimated Duration:** 4-6 hours across 7 phases

---

## 1. MISSION STATEMENT

You are the **Lead Systems Auditor** for the LSX Design Agency Figma Make prototype. Your mission is to perform a comprehensive stability audit of the entire application: configuration, routing, data, imports, CSS architecture, and filesystem hygiene. You must identify issues, fix them, and harden the system against future regressions.

**Primary Goal:** A fully rendering, error-free prototype with documented architecture, clean imports, and maintainable CSS loading order.

**Non-Negotiable Rules:**
- ALL UI uses CSS variables from `/src/styles/theme-base.css`, `theme-light.css`, `theme-dark.css`
- ONLY `var(--font-primary)` (Lexend) and `var(--font-secondary)` (Manrope) for typography
- NO Tailwind utility classes in components -- use `.wp-*` WordPress utilities and BEM
- NO hardcoded hex, px, or font-family values
- ALL icons use `@phosphor-icons/react` via the UniversalIcon system in `/src/app/utils/icon-map.ts`
- Follow `/guidelines/Guidelines.md` for all file organisation rules

---

## 2. EXECUTION WORKFLOW

For **every phase**, follow this exact sequence:

1. **READ:** Relevant config files, guidelines, and source code
2. **AUDIT:** Systematic scan for issues (errors, misconfigurations, violations)
3. **FIX:** Implement fixes in small, testable increments (one file at a time)
4. **REPORT:** Write findings to `/reports/2026-03/stability-audit/phase-N-report.md`
5. **TASKS:** Append follow-up items to `/tasks/stability-audit-tasks.md`
6. **VERIFY:** Confirm the build succeeds and the page renders after each fix

---

## 3. PHASE OVERVIEW

| Phase | Title | Focus | Priority |
|-------|-------|-------|----------|
| **Phase 1** | Application Entry & Config | Root config, entry points, blank screen fix | CRITICAL |
| **Phase 2** | Build Optimisation | Vite config, code splitting, memory limits | HIGH |
| **Phase 3** | Routes & URL System | Route definitions, lazy loading, URL structure | HIGH |
| **Phase 4** | Mock Data & Types | Data file sizes, type consistency, imports | MEDIUM |
| **Phase 5** | TS/TSX Import Health | Orphaned imports, missing modules, circular deps | HIGH |
| **Phase 6** | CSS Architecture | Load order, index.css manifest, variable coverage | CRITICAL |
| **Phase 7** | Filesystem Hygiene | Protected files, orphans, folder compliance | MEDIUM |

---

## 4. PHASE 1: APPLICATION ENTRY & CONFIGURATION (CRITICAL)

### 4.1 Objective

Fix the blank screen (`#121212` background) and ensure the application entry point, router, and configuration files are correct.

### 4.2 Files to Audit

**Root Configuration:**
- `/vite.config.ts` -- Build tool configuration, aliases, plugins
- `/postcss.config.mjs` -- PostCSS plugins (must align with CSS architecture)
- `/package.json` -- Dependencies, scripts, version
- `/tsconfig.json` -- Base TypeScript config
- `/tsconfig.app.json` -- App-specific TypeScript paths/aliases
- `/tsconfig.node.json` -- Node-specific TypeScript config

**Application Entry:**
- `/src/main.tsx` -- React DOM root render
- `/src/app/App.tsx` -- RouterProvider, style imports
- `/src/app/routes.tsx` -- createBrowserRouter, all route objects
- `/src/app/suppress-figma-errors.ts` -- Error suppression (must load first)
- `/src/vite-env.d.ts` -- Vite type declarations

### 4.3 Checks

- [ ] Does `/src/main.tsx` render `<App />` into `#root`?
- [ ] Does `/src/app/App.tsx` import `../styles/index.css` AFTER `suppress-figma-errors`?
- [ ] Does `App.tsx` export a default function component?
- [ ] Does `RouterProvider` receive a valid `router` from `routes.tsx`?
- [ ] Does `createBrowserRouter` return without errors?
- [ ] Are there any `import` statements referencing deleted/moved files?
- [ ] Is the `@` path alias configured in both `vite.config.ts` AND `tsconfig.app.json`?
- [ ] Are all dependencies in `package.json` installed (no phantom imports)?
- [ ] Does `postcss.config.mjs` include only plugins that exist in `node_modules`?

### 4.4 Blank Screen Root Cause Analysis

The `#121212` background suggests:
1. The app mounts but no visible content renders (CSS loads, React doesn't)
2. OR a router error silently fails (no matched route for `/`)
3. OR an import error crashes before the first component renders
4. OR dark mode defaults apply but foreground text is transparent/missing

**Diagnostic Steps:**
1. Check if `RootLayout` renders (does `<Outlet />` have matched children?)
2. Check if the `FrontPageTemplate` component exports correctly
3. Check for any top-level `throw` or missing default exports
4. Check if dark mode (`.dark` class) is being applied without corresponding text colors
5. Verify `--background` and `--foreground` CSS variables are defined in `:root`

### 4.5 Output

- `/reports/2026-03/stability-audit/phase-1-config-entry.md`
- Fix applied directly to code files
- Build verification: zero errors, page renders content

---

## 5. PHASE 2: BUILD OPTIMISATION AUDIT

### 5.1 Objective

Ensure the Vite build configuration is optimised for the Figma Make environment. Verify code splitting works. Identify any files that cause memory pressure.

### 5.2 Files to Audit

- `/vite.config.ts` -- Build options, chunk strategy, rollup options
- `/docs/BUILD-OPTIMIZATION.md` -- Current optimisation docs (if exists)
- `/src/app/routes.tsx` -- Lazy loading strategy (React.lazy + Suspense)

### 5.3 Checks

- [ ] Is `build.rollupOptions.output.manualChunks` configured for vendor splitting?
- [ ] Are large templates (>500 lines) lazy-loaded with `React.lazy()`?
- [ ] Is there a loading fallback component for lazy routes (`RouteLoadingFallback`)?
- [ ] Are there any files > 1,000 lines that should be split?
- [ ] Is `build.chunkSizeWarningLimit` set appropriately?
- [ ] Are development-only templates (DevTools, Showcases) lazy-loaded?
- [ ] Is `build.sourcemap` disabled for production?

### 5.4 Guidelines to Create/Update

Create or update: `/guidelines/build/build-optimization.md`

**Must document:**
- Maximum recommended file sizes (components, CSS, data files)
- How to add new lazy-loaded routes
- Vendor chunk strategy
- Memory limits in Figma Make environment
- When to split a component vs keep it monolithic

### 5.5 Output

- `/reports/2026-03/stability-audit/phase-2-build-optimization.md`
- `/guidelines/build/build-optimization.md` (created or updated)
- Fixes to `vite.config.ts` if needed

---

## 6. PHASE 3: ROUTES & URL SYSTEM AUDIT

### 6.1 Objective

Verify all ~172 routes are correctly defined, properly imported, and produce valid URLs. Ensure the routing system is documented.

### 6.2 Files to Audit

- `/src/app/routes.tsx` -- All route definitions (static + lazy imports)
- `/src/app/utils/route-map.ts` -- Slug-to-path mapping utility
- `/src/app/data/pages.ts` -- Navigation menus, page metadata
- `/guidelines/routes.md` -- Expected site structure

### 6.3 Checks

- [ ] Does every template imported in `routes.tsx` actually exist in `/src/app/components/templates/`?
- [ ] Does every template file in `/src/app/components/templates/` have a corresponding route?
- [ ] Are all lazy imports using correct relative paths?
- [ ] Does the index route (`/`) correctly resolve to `FrontPageTemplate`?
- [ ] Is there a `*` catch-all route pointing to `Template404`?
- [ ] Do nested routes have correct parent/child relationships?
- [ ] Does `route-map.ts` contain entries for all service/portfolio/insight slugs?
- [ ] Are redirect routes (e.g., `/portfolio` -> `/work`) working?
- [ ] Are sub-service routes correctly nested under parent services?

### 6.4 Route Documentation

Create: `/guidelines/site-structure/routes.md`

**Must document:**
- Complete route table (path, component, loading strategy)
- URL generation pattern (how slugs become URLs)
- How to add new routes (static vs lazy)
- Redirect patterns for legacy URLs
- Dynamic route parameters (`:slug`, `:category`)

### 6.5 Output

- `/reports/2026-03/stability-audit/phase-3-routes-urls.md`
- `/guidelines/site-structure/routes.md` (new)
- Fixes to `routes.tsx` and `route-map.ts` if needed

---

## 7. PHASE 4: MOCK DATA & TYPES AUDIT

### 7.1 Objective

Audit all data files in `/src/app/data/` for size, structure, type safety, and import correctness. Ensure no single data file exceeds maintainable size limits.

### 7.2 Files to Audit

- All files in `/src/app/data/` (~95 files)
- Type definitions (check for centralised types file or per-file interfaces)
- Import chains from templates to data files

### 7.3 Checks

**Size & Structure:**
- [ ] Identify all data files > 500 lines (candidates for splitting)
- [ ] Identify all data files > 200 lines (review for optimisation)
- [ ] Are data files using TypeScript interfaces/types consistently?
- [ ] Is there a centralised types file, or are types scattered?
- [ ] Are there duplicate data definitions across files?

**Type Safety:**
- [ ] Do all exported data arrays have explicit type annotations?
- [ ] Are interface properties optional where appropriate?
- [ ] Do data files import types from a shared location?
- [ ] Are there any `any` type assertions that should be typed?

**Import Health:**
- [ ] Are all data file exports used by at least one template?
- [ ] Are there orphaned data files (no imports anywhere)?
- [ ] Do templates import specific exports (not entire files)?

### 7.4 Guidelines to Create

Create: `/guidelines/data-structure/data-files.md`

**Must document:**
- Maximum data file size (recommended: 300 lines, hard limit: 500 lines)
- How to split large data files (with re-export pattern)
- Type definition standards (centralised vs co-located)
- Naming conventions for data files (`{context}-page.ts`, `{entity}.ts`)
- Import best practices (named imports, no wildcard)

### 7.5 Output

- `/reports/2026-03/stability-audit/phase-4-data-types.md`
- `/guidelines/data-structure/data-files.md` (new)
- Fixes to oversized data files if critical

---

## 8. PHASE 5: TS/TSX IMPORT HEALTH AUDIT

### 8.1 Objective

Verify all TypeScript/TSX imports resolve correctly. Identify orphaned files, missing modules, circular dependencies, and stale imports.

### 8.2 Scope

- All `.tsx` files in `/src/app/components/` (templates, patterns, parts, common, blocks, ui)
- All `.ts` files in `/src/app/` (utils, hooks, data, contexts)
- All CSS `@import` statements

### 8.3 Checks

**Import Resolution:**
- [ ] Do all `import` statements reference files that exist?
- [ ] Are path aliases (`@/`) resolving correctly?
- [ ] Are there any `from 'lucide-react'` imports remaining? (Must be `@phosphor-icons/react`)
- [ ] Are all `react-router` imports using `'react-router'` (not `'react-router-dom'`)?
- [ ] Are there imports from deleted/moved files?

**Orphaned Files:**
- [ ] Are there `.tsx` components not imported by any route or parent component?
- [ ] Are there `.ts` utility files not imported anywhere?
- [ ] Are there `.css` files not imported by `index.css` or a component?

**Circular Dependencies:**
- [ ] Are there circular import chains (A imports B, B imports A)?
- [ ] Are there deep import chains (>4 levels) that could be flattened?

**Package Health:**
- [ ] Are all `package.json` dependencies actually imported somewhere?
- [ ] Are there imports of packages not listed in `package.json`?

### 8.4 Output

- `/reports/2026-03/stability-audit/phase-5-import-health.md`
- List of files to delete (orphans)
- List of imports to fix (broken references)

---

## 9. PHASE 6: CSS ARCHITECTURE AUDIT (CRITICAL)

### 9.1 Objective

Verify the CSS loading order, variable completeness, and file structure. Ensure the design system renders correctly in both light and dark modes.

### 9.2 Files to Audit

**CSS Entry Point:**
- `/src/styles/index.css` -- Master import manifest (CRITICAL: load order matters)

**Core System (must load in this order):**
1. `/src/styles/fonts.css` -- @font-face declarations
2. `/src/styles/presets/index.css` -- Preset imports
3. `/src/styles/resets.css` -- CSS reset/normalise
4. `/src/styles/theme-base.css` -- Base tokens (typography, spacing, radius, shadows, animations)
5. `/src/styles/theme-light.css` -- Light mode semantic colors (`:root`)
6. `/src/styles/theme-dark.css` -- Dark mode semantic colors (`.dark`)
7. `/src/styles/theme-variables.css` -- Additional theme variables
8. `/src/styles/theme-funky.css` -- Funky neon theme overrides
9. `/src/styles/layout.css` -- Layout primitives
10. `/src/styles/utilities.css` -- WordPress `.wp-*` utility classes
11. `/src/styles/responsive.css` -- Responsive breakpoints & fluid utilities

**Block, Pattern, Template CSS:** (loaded after core system)
- `/src/styles/blocks/` -- WordPress block styles
- `/src/styles/patterns/` -- Pattern component styles
- `/src/styles/templates/` -- Page template styles
- `/src/styles/components/` -- Generic component styles

### 9.3 Checks

**Load Order:**
- [ ] Does `index.css` import core system files BEFORE block/pattern/template CSS?
- [ ] Are `theme-light.css` and `theme-dark.css` loaded AFTER `theme-base.css`?
- [ ] Are `fonts.css` and `resets.css` loaded FIRST?
- [ ] Is `tailwind.css` either empty or only re-exporting other CSS files?

**Variable Completeness:**
- [ ] Are `--background` and `--foreground` defined in both `:root` (light) and `.dark`?
- [ ] Are `--primary`, `--secondary`, `--muted`, `--accent` defined in both modes?
- [ ] Are `--card`, `--card-foreground`, `--border`, `--ring` defined in both modes?
- [ ] Is `--font-primary` defined in `theme-base.css`?
- [ ] Is `--font-secondary` defined in `theme-base.css`?

**Design System Compliance (Spot Check):**
- [ ] Sample 10 template CSS files -- do they use `var(--spacing-*)` for all spacing?
- [ ] Sample 10 template CSS files -- do they use `var(--font-primary)` or `var(--font-secondary)`?
- [ ] Sample 10 template CSS files -- do they use semantic color variables?
- [ ] Are there any hardcoded `#` hex values in template/pattern CSS?
- [ ] Are there any hardcoded `px` values for spacing in template/pattern CSS?
- [ ] Are there any Tailwind utility classes in `.tsx` files?

**File Organisation:**
- [ ] Does every block component have a matching CSS file in `/src/styles/blocks/`?
- [ ] Does every pattern component have a matching CSS file in `/src/styles/patterns/`?
- [ ] Are all CSS files imported (no orphan stylesheets)?

### 9.4 Guidelines to Create/Update

Create: `/guidelines/css/css-architecture.md`

**Must document:**
- CSS loading order and why it matters
- How to add new CSS files (which folder, how to import)
- The `index.css` manifest structure
- Naming conventions (BEM, `.wp-*`, file naming)
- Why we don't use Tailwind utility classes
- How `theme-base.css` / `theme-light.css` / `theme-dark.css` work together
- How to add new CSS variables

### 9.5 Output

- `/reports/2026-03/stability-audit/phase-6-css-architecture.md`
- `/guidelines/css/css-architecture.md` (new)
- Fixes to `index.css` load order if needed
- Fixes to missing variable definitions

---

## 10. PHASE 7: FILESYSTEM HYGIENE AUDIT

### 10.1 Objective

Ensure the filesystem follows the project organisation rules. Verify protected files exist, folder structure is correct, and no stale files remain.

### 10.2 Checks

**Protected Files (must exist, never deleted):**
- [ ] `/CHANGELOG.md` exists in root (Keep a Changelog v1.1.0 format)
- [ ] `/README.md` exists in root
- [ ] `/tasks/task-list.md` exists

**Root Directory Cleanliness:**
- [ ] No `.md` files in root except `README.md` and `CHANGELOG.md`
- [ ] No `.sh` or `.py` scripts in root (must be in `/scripts/`)
- [ ] No report, task, or guideline files in root
- [ ] Only config files (`package.json`, `tsconfig*.json`, `vite.config.ts`, etc.) in root

**Folder Compliance:**
- [ ] `/prompts/` -- All prompts are `.md` files
- [ ] `/reports/` -- Date-prefixed, sub-folders for related sets
- [ ] `/tasks/` -- Task lists, `task-list.md` always present
- [ ] `/guidelines/` -- All guideline files in sub-folders by category
- [ ] `/docs/` -- General documentation only
- [ ] `/scripts/` -- Shell and utility scripts only

**Orphaned Files:**
- [ ] Any `.tsx` files not imported anywhere?
- [ ] Any `.css` files not imported by `index.css` or a component?
- [ ] Any data files not imported by any template?

**Stale Reports:**
- [ ] Any reports older than 7 days that have been superseded?
- [ ] Are completed task lists archived properly?

### 10.3 Output

- `/reports/2026-03/stability-audit/phase-7-filesystem-hygiene.md`
- List of files to delete/move
- Fixes applied to file organisation

---

## 11. MASTER TASK LIST TEMPLATE

After all phases are complete, create `/tasks/stability-audit-tasks.md`:

```markdown
# Stability Audit Tasks

**Created:** March 4, 2026
**Source:** Stability Audit Orchestrator v1.0
**Status:** IN PROGRESS

## Phase 1: Config & Entry (CRITICAL)
- [ ] Task description...

## Phase 2: Build Optimisation
- [ ] Task description...

## Phase 3: Routes & URLs
- [ ] Task description...

## Phase 4: Data & Types
- [ ] Task description...

## Phase 5: Import Health
- [ ] Task description...

## Phase 6: CSS Architecture (CRITICAL)
- [ ] Task description...

## Phase 7: Filesystem Hygiene
- [ ] Task description...
```

---

## 12. COMPLIANCE CHECKLIST (Post-Audit)

Before declaring the audit complete:

- [ ] Application renders content (no blank screen)
- [ ] Zero TypeScript build errors
- [ ] Zero console errors on page load (excluding Figma iframe noise)
- [ ] Light mode renders with correct colors
- [ ] Dark mode renders with correct colors
- [ ] Navigation works (click any link, page loads)
- [ ] All CSS variables resolve to values
- [ ] `--font-primary` and `--font-secondary` are applied to all text
- [ ] No Tailwind utility classes in `.tsx` component files
- [ ] No `lucide-react` imports remain (all migrated to Phosphor)
- [ ] All reports saved to `/reports/2026-03/stability-audit/`
- [ ] Task list saved to `/tasks/stability-audit-tasks.md`
- [ ] Guidelines updated for any new standards discovered

---

## 13. REFERENCE FILES

### Configuration
- `/vite.config.ts`
- `/postcss.config.mjs`
- `/package.json`
- `/tsconfig.json`, `/tsconfig.app.json`, `/tsconfig.node.json`

### Application Entry
- `/src/main.tsx`
- `/src/app/App.tsx`
- `/src/app/routes.tsx`
- `/src/app/suppress-figma-errors.ts`

### Design System
- `/src/styles/index.css` (master manifest)
- `/src/styles/theme-base.css` (base tokens)
- `/src/styles/theme-light.css` (light mode colors)
- `/src/styles/theme-dark.css` (dark mode colors)
- `/src/styles/utilities.css` (WordPress utilities)

### Guidelines
- `/guidelines/Guidelines.md` (canonical reference)
- `/guidelines/design-tokens/` (colors, typography, spacing)
- `/guidelines/routes.md` (site structure)

### Data
- `/src/app/data/` (~95 data files)
- `/src/app/utils/route-map.ts` (slug-to-path mapping)
- `/src/app/utils/icon-map.ts` (Phosphor icon mappings)

### Existing Audit Reports
- `/reports/2026-03/design-system-compliance-audit.md`
- `/reports/2026-03/memory-optimization-audit.md`
- `/reports/2026-03/phosphor-migration-complete.md`

---

## 14. COMMAND

To execute this audit, use:

```
ORCHESTRATE: STABILITY_AUDIT [Phase N]
```

Or to run all phases sequentially:

```
ORCHESTRATE: STABILITY_AUDIT ALL
```

**Start with Phase 1 (CRITICAL) and Phase 6 (CRITICAL) first -- these are most likely to fix the blank screen issue.**

---

**Next Step:** Awaiting command.