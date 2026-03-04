# CSS Theme & Mode Audit -- Orchestrator

**Prompt ID:** `css-theme-audit`
**Created:** March 3, 2026
**Type:** Multi-step audit
**Scope:** All stylesheets in `/src/styles/`, all components in `/src/app/`

---

## Objective

Perform a deep audit of the light and dark mode styles across the entire codebase. Validate the CSS file structure against the canonical guidelines in `/guidelines/styles/css-file-structure.md`. Identify all violations, duplications, missing tokens, Tailwind remnants, and theme inconsistencies. Produce actionable remediation tasks.

---

## Prerequisites

Before running any step, read these files IN ORDER:

1. `/guidelines/styles/css-file-structure.md` -- CSS file structure guidelines (MANDATORY)
2. `/guidelines/DARK-LIGHT-MODE-GUIDELINES.md` -- Dark/light mode token rules
3. `/guidelines/STYLING-MANDATE.md` -- No Tailwind, no inline styles mandate
4. `/guidelines/CSS-ARCHITECTURE.md` -- BEM naming, cascade strategy
5. `/guidelines/design-tokens/colors.md` -- Color system reference
6. `/src/styles/theme-base.css` -- Current base tokens
7. `/src/styles/theme-light.css` -- Current light mode tokens
8. `/src/styles/theme-dark.css` -- Current dark mode tokens
9. `/src/styles/theme-variables.css` -- Current extended palette
10. `/src/styles/index.css` -- Current main entry point
11. `/src/styles/theme.css` -- Current theme aggregator (review for deprecation)

---

## Steps

### Step 1: Theme Token Parity Audit

**Goal:** Ensure every variable defined in `theme-light.css` has a corresponding override in `theme-dark.css`, and vice versa.

**Actions:**

1. Extract all CSS variable declarations from `theme-light.css` (`:root` selector).
2. Extract all CSS variable declarations from `theme-dark.css` (`.dark` selector).
3. Compare the two lists:
   - Variables in light but **missing from dark** = **CRITICAL** (will fall back to light mode values in dark mode).
   - Variables in dark but **missing from light** = **WARNING** (unnecessary dark-only variables).
4. Check that shadows defined in `theme-base.css` are properly overridden in both mode files (shadow duplication issue).
5. Verify `--neon-color` is defined in both modes.
6. Verify all `--gradient-*` variables exist in both modes.
7. Verify all `--icon-color-*` tokens exist in both modes.

**Output:** `/reports/2026-03/css-theme-audit/01-token-parity.md`

---

### Step 2: Shadow Duplication Audit

**Goal:** Identify shadow variables defined in multiple files and resolve to a single source of truth.

**Actions:**

1. Search all `/src/styles/*.css` files for `--shadow-` variable declarations.
2. Map each shadow variable to the file(s) where it is defined.
3. Identify duplicates (same variable defined in `theme-base.css` AND `theme-light.css`/`theme-dark.css`).
4. Determine which file should be the canonical source:
   - If the shadow changes between modes -> `theme-light.css` + `theme-dark.css` (remove from `theme-base.css`)
   - If the shadow is mode-agnostic -> `theme-base.css` only (remove from mode files)
5. Check for hardcoded `rgba()` shadows that should use CSS variables or `color-mix()`.

**Output:** `/reports/2026-03/css-theme-audit/02-shadow-duplication.md`

---

### Step 3: Dual Import / Cascade Audit

**Goal:** Identify files imported by both `index.css` and `theme.css`, and resolve the dual-import architecture.

**Actions:**

1. Parse all `@import` statements in `/src/styles/index.css`.
2. Parse all `@import` statements in `/src/styles/theme.css`.
3. Identify overlapping imports (files imported by BOTH).
4. Determine which components/entry points import `theme.css` vs `index.css`.
5. Search the entire codebase for `import.*theme\.css` and `import.*index\.css` to find all consumers.
6. Recommend deprecation path for `theme.css`:
   - List all files that import `theme.css`
   - Provide migration steps to switch to `index.css`
   - Determine if `theme.css` can be safely deleted or converted to documentation

**Output:** `/reports/2026-03/css-theme-audit/03-dual-import.md`

---

### Step 4: Tailwind Remnants Audit

**Goal:** Find and eliminate all traces of Tailwind CSS usage in components and stylesheets.

**Actions:**

1. Search all `.tsx` files for common Tailwind classes:
   - Layout: `flex`, `grid`, `block`, `inline-flex`, `hidden`
   - Spacing: `p-`, `px-`, `py-`, `pt-`, `pb-`, `pl-`, `pr-`, `m-`, `mx-`, `my-`, `mt-`, `mb-`, `ml-`, `mr-`, `gap-`
   - Typography: `text-sm`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `font-bold`, `font-semibold`, `font-medium`
   - Width: `w-full`, `w-auto`, `max-w-`
   - Colors: `bg-`, `text-` (without `wp-` prefix)
   - Borders: `border`, `rounded-`, `border-`
   - Responsive: `md:`, `lg:`, `xl:`, `sm:`
   - **EXCLUDE:** Classes that are our own `.wp-*` utilities or BEM classes.

2. Search all `.css` files for Tailwind directives:
   - `@tailwind`
   - `@apply`
   - `@layer`
   - `@variants`
   - `@responsive`
   - `@screen`

3. Check `tailwind.css` contains ONLY the approved placeholder comment.

4. Verify `vite.config.ts` and `package.json` retain the required Tailwind packages (do NOT remove these).

5. For each Tailwind class found, provide the `.wp-*` or BEM replacement.

**Output:** `/reports/2026-03/css-theme-audit/04-tailwind-remnants.md`

---

### Step 5: Hardcoded Values Audit

**Goal:** Find hardcoded colors, font names, spacing values, and border radius in components.

**Actions:**

1. Search all `.tsx` files for hardcoded hex colors (`#[0-9a-fA-F]{3,8}`).
   - **EXCLUDE:** Colors inside CSS files (those are audited separately).
   - **EXCLUDE:** SVG fill/stroke that reference design tokens.

2. Search for hardcoded font family names:
   - `'Lexend'`, `"Lexend"`, `Lexend,`
   - `'Manrope'`, `"Manrope"`, `Manrope,`
   - Any font name not wrapped in `var(--font-primary)` or `var(--font-secondary)`.

3. Search for hardcoded spacing values in inline styles:
   - `padding: '12px'`, `margin: '24px'`, `gap: '16px'` etc.
   - **EXCLUDE:** `var(--spacing-*)` references.

4. Search for hardcoded border radius:
   - `borderRadius: '8px'`, `border-radius: 4px` etc.
   - **EXCLUDE:** `var(--radius-*)` references.

5. For each violation, provide the correct CSS variable replacement.

**Output:** `/reports/2026-03/css-theme-audit/05-hardcoded-values.md`

---

### Step 6: theme-funky.css Creation Audit

**Goal:** Audit existing neon/funky styles scattered across the codebase and consolidate into a `theme-funky.css` file.

**Actions:**

1. Search all CSS files for neon-related declarations:
   - `--neon-`, `neon-glow`, `neon-pink`, `neon-cyan`, `neon-lime`, `neon-yellow`
   - `--shadow-neon`, `--shadow-neon-intense`, `--shadow-glow`
   - `text-shadow.*neon`, `box-shadow.*neon`

2. Search for funky-specific gradient variables and usage:
   - `--wp--preset--gradient--neon-*`
   - `--grading-*`, `--packaging-*` (page identity colors)

3. Map which variables currently live in `theme-variables.css` vs `theme-base.css` vs inline in components.

4. Propose the complete `theme-funky.css` structure:
   - Neon color overrides
   - Glow shadow system
   - Neon gradient overrides
   - Animation enhancements (pulsing, flickering)
   - Activation strategy (`.funky` class vs always-on)

5. Determine what should stay in `theme-variables.css` (page identity colors) vs move to `theme-funky.css` (neon aesthetics).

**Output:** `/reports/2026-03/css-theme-audit/06-funky-consolidation.md`

---

### Step 7: Component Dark Mode Coverage Audit

**Goal:** Verify every component renders correctly in both light and dark mode.

**Actions:**

1. List all template components in `/src/app/components/templates/`.
2. For each template, check:
   - Does it use `var(--background)` / `var(--foreground)` for base colors? (NOT hardcoded)
   - Does it use `var(--card)` / `var(--card-foreground)` for card surfaces?
   - Does it use `var(--border)` / `var(--border-soft)` for borders?
   - Does it use `var(--primary)` / `var(--primary-foreground)` for brand elements?
   - Are there any `rgba()` or `color-mix()` calls with hardcoded base colors?
   - Are gradients using mode-aware variables?

3. List all pattern components in `/src/app/components/patterns/`.
4. Repeat the same checks for patterns.

5. List all block components in `/src/app/components/blocks/`.
6. Repeat the same checks for blocks.

7. Flag any component that would appear broken in dark mode due to:
   - White text on white background
   - Black text on black background
   - Invisible borders
   - Unreadable contrast
   - Hardcoded colors that don't switch

**Output:** `/reports/2026-03/css-theme-audit/07-component-dark-mode.md`

---

### Step 8: index.css Optimization Audit

**Goal:** Optimize the main entry point for correct load order, remove duplicates, and ensure alignment with the canonical file structure.

**Actions:**

1. Read `/src/styles/index.css` line by line.
2. Check against the canonical load order defined in `/guidelines/styles/css-file-structure.md`.
3. Identify:
   - Out-of-order imports (e.g., animations loaded before tokens)
   - Duplicate imports (same file imported twice)
   - Commented-out imports that reference deleted files
   - Missing imports (files that exist in `/src/styles/` but aren't imported anywhere)
   - Route-specific CSS that should NOT be in global index.css

4. Verify `theme-funky.css` will be added in the correct position (after `theme-variables.css`, before `layout.css`).

5. Propose the optimized `index.css` with correct ordering and cleanup.

**Output:** `/reports/2026-03/css-theme-audit/08-index-optimization.md`

---

## Execution Order

Run steps in order (1 through 8). Each step's findings may inform subsequent steps.

| Step | Name | Priority | Estimated Scope |
|------|------|----------|-----------------|
| 1 | Token Parity | CRITICAL | 2 files |
| 2 | Shadow Duplication | HIGH | 3 files |
| 3 | Dual Import | HIGH | 2 files + codebase search |
| 4 | Tailwind Remnants | CRITICAL | All .tsx and .css files |
| 5 | Hardcoded Values | CRITICAL | All .tsx files |
| 6 | Funky Consolidation | MEDIUM | All .css files with neon references |
| 7 | Component Dark Mode | HIGH | All template/pattern/block components |
| 8 | Index Optimization | MEDIUM | 1 file |

---

## Output Structure

```
/reports/2026-03/css-theme-audit/
|-- 00-summary.md              # Executive summary with totals
|-- 01-token-parity.md         # Step 1 findings
|-- 02-shadow-duplication.md   # Step 2 findings
|-- 03-dual-import.md          # Step 3 findings
|-- 04-tailwind-remnants.md    # Step 4 findings
|-- 05-hardcoded-values.md     # Step 5 findings
|-- 06-funky-consolidation.md  # Step 6 findings
|-- 07-component-dark-mode.md  # Step 7 findings
|-- 08-index-optimization.md   # Step 8 findings
```

---

## Task List Output

After all steps complete, update `/tasks/task-list.md` with actionable remediation tasks organized by priority:

- **P0 (Critical):** Token parity gaps, Tailwind class violations, hardcoded colors
- **P1 (High):** Shadow deduplication, dual import resolution, dark mode component fixes
- **P2 (Medium):** Funky consolidation, index.css optimization, `theme.css` deprecation

---

## Success Criteria

- [ ] Every variable in `theme-light.css` has a `.dark` override in `theme-dark.css`
- [ ] Zero shadow variables defined in more than one file
- [ ] `theme.css` deprecated or converted to documentation
- [ ] Zero Tailwind classes in any `.tsx` file
- [ ] Zero `@apply` or `@tailwind` directives in any `.css` file
- [ ] Zero hardcoded hex colors in component inline styles
- [ ] Zero hardcoded font family names in components
- [ ] `theme-funky.css` created with consolidated neon styles
- [ ] `index.css` follows canonical load order
- [ ] All components render correctly in both light and dark mode
