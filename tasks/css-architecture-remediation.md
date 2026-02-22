# CSS Architecture Remediation

**Source Audit:** A8 — CSS Architecture Deep Audit  
**Date:** 2026-02-21  
**Priority:** CRITICAL — CSS issues affect every page; must be resolved before funky redesign scales  
**Status:** NOT STARTED

---

## Summary

The `/src/styles/` directory contains 90+ CSS files across templates, patterns, blocks, and components. A deep audit is needed to identify token conflicts, dead CSS, `!important` declarations, hardcoded values, dark mode gaps, and optimization opportunities.

---

## Audit Scope

### 8a. Token System Verification

**Goal:** Verify all CSS files use the correct token system from `theme-base.css`, `theme-light.css`, and `theme-dark.css`.

- [ ] **Font families** — grep for hardcoded `'Lexend'`, `'Manrope'`, `sans-serif` without `var(--font-primary)` or `var(--font-secondary)`
- [ ] **Font sizes** — grep for hardcoded `px`, `rem`, `em` font sizes not wrapped in `var(--text-*)`
- [ ] **Spacing** — grep for hardcoded spacing values not using `var(--spacing-*)`
- [ ] **Colors** — grep for hardcoded hex colors not using semantic variables (`var(--primary)`, `var(--foreground)`, etc.)
- [ ] **Border radius** — grep for hardcoded `border-radius` not using `var(--radius-*)`
- [ ] **Shadows** — grep for hardcoded `box-shadow` not using `var(--shadow-*)`
- [ ] **Transitions** — grep for hardcoded `transition` durations not using `var(--transition-*)`

### 8b. CSS File Inventory

**Goal:** Complete inventory of all CSS files with metrics.

Files to audit across these directories:
```
/src/styles/templates/     — 90+ template CSS files
/src/styles/patterns/      — 63+ pattern CSS files
/src/styles/blocks/        — Block CSS files (subdirectories)
/src/styles/components/    — Component CSS files
/src/styles/content/       — Content CSS files
/src/styles/sections/      — Section style CSS files
/src/styles/presets/       — Preset CSS files
/src/styles/woocommerce/   — WooCommerce CSS files
/src/styles/*.css          — Top-level CSS files (20+)
```

For each file, record:
- [ ] Total lines of CSS
- [ ] Number of `!important` declarations
- [ ] Number of hardcoded hex colors
- [ ] Number of hardcoded font names
- [ ] Number of hardcoded font sizes
- [ ] Number of Tailwind-style utility classes
- [ ] Whether `.dark` selectors exist
- [ ] Whether `prefers-reduced-motion` guards exist
- [ ] Whether `@keyframes` are present (need motion guards)

### 8c. Dark Mode Completeness

**Goal:** Verify every CSS file that uses color-dependent rules has `.dark` selectors.

- [ ] List all CSS files with `background:` or `background-color:` rules
- [ ] For each, check if `.dark` selector variant exists
- [ ] List all CSS files with `color:` rules
- [ ] For each, check if `.dark` selector variant exists
- [ ] List all CSS files with `border-color:` rules
- [ ] For each, check if `.dark` selector variant exists
- [ ] Flag files where dark mode is missing and would cause contrast issues

**Known gap from funky sections audit:** Only ~10 CSS files have `.dark` selectors out of 90+ template CSS files.

### 8d. Import Chain Verification

**Goal:** Verify `/src/styles/index.css` imports ALL CSS files.

- [ ] List all CSS files in `/src/styles/` recursively
- [ ] Cross-reference with `@import` statements in `index.css`
- [ ] Identify CSS files NOT imported (dead files or missing imports)
- [ ] Identify `@import` statements pointing to non-existent files

### 8e. Selector Duplication

**Goal:** Find CSS selectors defined in multiple files that may cause conflicts.

- [ ] Extract all CSS selectors from all files
- [ ] Identify selectors that appear in multiple files
- [ ] Document which file should "own" each selector
- [ ] Identify cascade/specificity conflicts

### 8f. Optimization Opportunities

**Goal:** Identify potential size reduction and quality improvements.

- [ ] Identify empty or near-empty CSS files (< 10 lines)
- [ ] Identify CSS files that could be merged (same BEM block)
- [ ] Identify dead CSS (selectors not used by any component)
- [ ] Calculate potential size reduction
- [ ] Identify patterns that could be abstracted into shared styles

---

## Known Issues (From Previous Audits)

### `!important` Usage
- [ ] Audit all `!important` declarations
- [ ] Replace with proper specificity solutions
- [ ] Only acceptable in: `prefers-reduced-motion`, print styles

### Tailwind Remnants
- [ ] Several CSS files may still reference Tailwind utility classes
- [ ] Replace with WordPress utility classes (`.wp-*`) or BEM
- [ ] Known locations: some older template files, some pattern files

### Hardcoded Hex Colors
- [ ] Multiple CSS files use hardcoded hex values instead of CSS variables
- [ ] Replace all with semantic color variables
- [ ] Exception: page-level color identity tokens at top of file

### Missing `prefers-reduced-motion` Guards
- [ ] Multiple CSS files have `@keyframes` without motion guards
- [ ] All animations MUST be wrapped in motion guards
- [ ] Known locations: several template CSS files with hover/glow animations

---

## Remediation Phases

### Phase 1: Token Compliance Sweep (Priority: CRITICAL)
- [ ] Fix all hardcoded font families → `var(--font-primary)` / `var(--font-secondary)`
- [ ] Fix all hardcoded font sizes → `var(--text-*)` tokens
- [ ] Fix all hardcoded spacing → `var(--spacing-*)` tokens
- [ ] Fix all hardcoded colors → semantic color variables
- [ ] Fix all hardcoded border-radius → `var(--radius-*)` tokens

### Phase 2: Dark Mode Coverage (Priority: HIGH)
- [ ] Add `.dark` selectors to all template CSS files that use color-dependent rules
- [ ] Focus on: background, color, border-color, box-shadow
- [ ] Test contrast ratios in dark mode

### Phase 3: Motion Guards (Priority: HIGH)
- [ ] Add `@media (prefers-reduced-motion: reduce)` to all `@keyframes`
- [ ] Disable `transition` and `animation` properties
- [ ] Disable `transform` on hover

### Phase 4: Import Chain Cleanup (Priority: MEDIUM)
- [ ] Remove dead imports from `index.css`
- [ ] Add missing imports
- [ ] Organize imports by category (templates, patterns, blocks, etc.)

### Phase 5: Deduplication & Optimization (Priority: LOW)
- [ ] Merge CSS files for the same BEM block
- [ ] Remove dead CSS selectors
- [ ] Delete empty CSS files
- [ ] Consolidate shared styles

### Phase 6: `!important` Removal (Priority: LOW)
- [ ] Remove all `!important` declarations
- [ ] Fix specificity issues properly

---

## CSS Architecture Standards

All CSS files MUST follow these standards after remediation:

```css
/**
 * ComponentName — Description
 *
 * BEM block: .component-name
 * WordPress template: templates/page-name.html
 *
 * @see /src/app/components/templates/ComponentName.tsx
 */

/* ============================================
   SECTION NAME
   ============================================ */

.component-name__element {
  /* Typography — var(--font-*) and var(--text-*) ONLY */
  font-family: var(--font-primary);
  font-size: var(--text-base);
  
  /* Colors — semantic variables ONLY */
  color: var(--foreground);
  background: var(--card);
  border: 1px solid var(--border-soft);
  
  /* Spacing — var(--spacing-*) ONLY */
  padding: var(--spacing-8);
  gap: var(--spacing-6);
  
  /* Borders — var(--radius-*) ONLY */
  border-radius: var(--radius-xl);
  
  /* Transitions — var(--transition-*) ONLY */
  transition: transform var(--transition-slow) ease;
}

/* ============================================
   DARK MODE
   ============================================ */

.dark .component-name__element {
  background: color-mix(in srgb, var(--foreground) 5%, var(--background));
  border-color: color-mix(in srgb, var(--foreground) 10%, transparent);
}

/* ============================================
   REDUCED MOTION
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  .component-name__element {
    transition: none;
  }
  .component-name__element:hover {
    transform: none;
  }
}
```

---

## Definition of Done

- [ ] Zero hardcoded font families (only `var(--font-primary)` / `var(--font-secondary)`)
- [ ] Zero hardcoded font sizes (only `var(--text-*)` tokens)
- [ ] Zero hardcoded spacing (only `var(--spacing-*)` tokens)
- [ ] Zero hardcoded colors (only semantic CSS variables)
- [ ] Zero `!important` declarations (except motion/print)
- [ ] Every color-dependent CSS file has `.dark` selectors
- [ ] Every animation has `prefers-reduced-motion` guard
- [ ] Import chain (`index.css`) is clean and complete
- [ ] No duplicate selectors across files
- [ ] No dead/unused CSS files
