# Comprehensive Design System & Architecture Audit (Jan 2025)

**Status:** ⚠️ CRITICAL REMEDIATION REQUIRED
**Date:** January 2025
**Scope:** `/src/app/components`, `/src/styles`, `/guidelines`

## 1. Executive Summary

This audit confirms a significant architectural debt in the current implementation. While recent efforts have centralized data and improved specific components (`ShoppingCart`, `FilterPresets`), the codebase remains heavily reliant on:
1.  **Inline Styles:** 3,100+ occurrences detected.
2.  **Tailwind CSS:** 970+ components still use Tailwind classes (`flex`, `p-4`, `text-*`).
3.  **CSS Overrides:** 116 instances of `!important` tags.
4.  **Mixed Architecture:** Inconsistent use of BEM vs. Tailwind vs. Inline styles.

**Goal:** Migrate to a 100% WordPress-aligned Block System with pure CSS variables, 0% inline styles, and 0% Tailwind.

---

## 2. Quantitative Findings

| Metric | Count | Target | Status |
|:--- | :--- | :--- | :--- |
| **Inline Styles (`style={{`)** | **3,153** | 0 | 🔴 Critical |
| **Tailwind Usage (Classes)** | **~976** | 0 | 🔴 Critical |
| **`!important` Tags** | **116** | 0 | 🔴 Critical |
| **Block CSS Files** | ~50 | 100% Coverage | 🟡 In Progress |
| **Design Tokens** | Partial | 100% Coverage | 🟡 In Progress |

---

## 3. Design System & Token Analysis

### 3.1. Existing Tokens (`theme-base.css`)
-   ✅ **Typography:** Fonts (Lexend/Manrope), Scale (h1-h6, lead, etc), Weights, Line Heights.
-   ✅ **Spacing:** Full scale (`--spacing-0` to `--spacing-64`), WP presets.
-   ✅ **Border Radius:** Scale (`--radius-sm` to `--radius-full`).
-   ✅ **Shadows:** Basic scale (`sm` to `xl`).
-   ✅ **Z-Index:** Standard scale.

### 3.2. Missing / Incomplete Tokens
The following areas need immediate definition in `theme-base.css` or dedicated preset files to align with WP Block standards:

*   **Aspect Ratios:** No preset variables (e.g., `--wp--preset--aspect-ratio--square`).
*   **Layout widths:** Need standard WP alignment variables (`--wp--style--global--content-size`, `--wp--style--global--wide-size`).
*   **Borders:** Need specific border width and style presets (`--wp--preset--border-width--*`).
*   **Animations:** Need a robust set of CSS variables for animation durations and easings beyond the basic transition timing.
*   **Section Styles:** No formalized "Section Style" system (e.g., `is-style-dark`, `is-style-gradient`).

---

## 4. Architecture Gaps

### 4.1. Component -> CSS Mapping
Currently, many components lack a dedicated CSS file in the correct structure.
*   **Requirement:** `src/app/components/blocks/Hero.tsx` -> `src/styles/blocks/hero.css`
*   **Current State:** Mixed. Some in `src/styles/sections`, some in `src/styles/blocks`.

### 4.2. Responsive Strategy
*   Current strategy relies on Tailwind (`md:`, `lg:`).
*   **New Strategy:** Must use container queries or standard media queries within the BEM CSS files, utilizing the fluid typography and spacing variables already present.

### 4.3. Light/Dark Mode
*   Basic variables exist (`theme-light.css`, `theme-dark.css`).
*   **Gap:** Needs a rigorous audit to ensure *every* component uses semantic color variables (e.g., `--bg-card` vs `--bg-background`) to ensure perfect switching.

---

## 5. Remediation Plan

This is a prioritized list of tasks to resolve all identified issues.

### Phase 1: Foundation & Tokens (Day 1)
1.  **Update `theme-base.css`:**
    *   Add missing **Aspect Ratio** presets.
    *   Add **Layout Width** variables (Content: 65ch/1200px, Wide: 1400px).
    *   Add **Border** presets.
    *   Add **Animation** presets (keyframes and variables).
2.  **Create Section Style System:**
    *   Define `src/styles/presets/section-styles.css`.
    *   Create classes like `.is-style-primary`, `.is-style-dark`, `.is-style-gradient-blue`.

### Phase 2: Structural Cleanup (Day 1-2)
1.  **Eliminate `!important`:**
    *   Scan all CSS files.
    *   Refactor specificity to remove `!important`.
2.  **Consolidate Block Styles:**
    *   Ensure strict mapping: `src/styles/blocks/{category}/{block}.css`.
    *   Move orphan styles from `src/styles/sections` to appropriate block folders.

### Phase 3: Component Migration (The "Deep Clean")
*Iterate through components by category.*

**Batch A: Layout & Core**
*   `Container`, `Section`, `Grid`, `Flex`.
*   Remove all Tailwind grid/flex classes.
*   Replace with BEM classes (e.g., `.wp-block-group`, `.wp-block-columns`).

**Batch B: Typography & Text**
*   `Heading`, `Text`, `List`, `Quote`.
*   Enforce `font-primary`/`font-secondary`.
*   Use fluid type variables.

**Batch C: UI Elements**
*   `Button`, `Card`, `Badge`, `Input`.
*   Strictly use `--radius-*`, `--spacing-*`, and semantic colors.

**Batch D: Complex Patterns**
*   `Hero`, `Testimonials`, `Pricing`.
*   Refactor into composed blocks.

### Phase 4: Quality Assurance
1.  **JSDoc Audit:** Ensure every exported component has complete JSDoc.
2.  **Accessibility Audit:** Check for ARIA labels, focus states (using CSS variables), and semantic HTML.
3.  **Responsiveness Check:** Verify fluid behavior without Tailwind breakpoints.

---

## 6. Next Steps for AI Agent

**Immediate Action:** Start **Phase 1 (Foundation & Tokens)**.
1.  Update `src/styles/theme-base.css` with the missing tokens identified in Section 3.2.
2.  Create `src/styles/presets/section-styles.css`.
3.  Update `/guidelines/design-tokens` documentation to reflect these new additions.

Once Phase 1 is complete, proceed to **Phase 2 (Structural Cleanup)**.
