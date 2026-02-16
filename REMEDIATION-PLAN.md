# Remediation Plan: Design System Alignment

**Goal:** Zero Tailwind, Zero Inline Styles, 100% WordPress Blocks Architecture.

## Phase 1: Foundation & Tokens (Day 1 - IMMEDIATE)

### 1. Update `theme-base.css`
- [ ] Add **Aspect Ratio** presets (`--wp--preset--aspect-ratio--square`, `landscape`, `portrait`, `ultrawide`).
- [ ] Add **Border** presets (`--wp--preset--border-width--*`, `--wp--preset--border-style--*`).
- [ ] Add **Layout Width** variables (`--wp--style--global--content-size: 1200px`, `--wp--style--global--wide-size: 1400px`).
- [ ] Add **Animation** presets (durations, easings, keyframes in `animations.css`).

### 2. Create Section Style System
- [ ] Create `/src/styles/presets/section-styles.css`.
- [ ] Define standard section classes:
    - `.is-style-default`
    - `.is-style-muted`
    - `.is-style-dark` (semantic colors)
    - `.is-style-primary`
    - `.is-style-gradient-*`

### 3. Update Documentation
- [ ] Update `/guidelines/design-tokens/` to reflect new variables.
- [ ] Create `/guidelines/blocks/SECTION-STYLES.md`.

---

## Phase 2: Structural Cleanup (Day 1-2)

### 1. Eliminate `!important`
- [ ] grep for `!important` in `/src/styles`.
- [ ] Refactor CSS specificity to remove them (use cascade layers or specific selectors).

### 2. Consolidate Block Styles
- [ ] Audit `/src/styles/sections/`.
- [ ] Move component-specific styles to `/src/styles/blocks/{category}/{block}.css`.
- [ ] Ensure strict filename matching: `Hero.tsx` -> `hero.css`.

---

## Phase 3: Component Migration (The "Deep Clean")

**Strategy:** Iterate directory by directory.

### Batch A: Core Layout Components (Critical)
- [ ] **Target:** `Container`, `Section`, `Grid`, `Flex`.
- [ ] **Action:**
    - Remove all Tailwind classes (`grid`, `flex`, `gap-4`).
    - Remove all inline styles.
    - Replace with `.wp-block-group`, `.wp-block-columns` from `utilities.css`.
    - Ensure fluid responsiveness using CSS variables.

### Batch B: Basic UI Elements
- [ ] **Target:** `Button`, `Badge`, `Card`, `Input`.
- [ ] **Action:**
    - Verify `button.css` uses semantic colors (`--primary`, `--primary-foreground`).
    - Ensure hover states use CSS variables (no `hover:bg-blue-600`).
    - Add JSDoc if missing.

### Batch C: Typography Components
- [ ] **Target:** `Heading`, `Text`, `List`, `Quote`.
- [ ] **Action:**
    - Enforce `--font-primary` and `--font-secondary`.
    - Use fluid font size variables (`--text-h1`, etc.).

### Batch D: Patterns & Templates
- [ ] **Target:** `Hero`, `Testimonials`, `Pricing`.
- [ ] **Action:**
    - Refactor to use composed blocks from Batch A/B.
    - Remove any "one-off" CSS.
    - Ensure Section Styles are applied via class names, not inline styles.

---

## Phase 4: Quality Assurance

### 1. Responsive Verification
- [ ] Check all layouts at 320px, 768px, 1024px, 1440px.
- [ ] Ensure no horizontal scrolling.
- [ ] Verify fluid typography scales correctly.

### 2. Light/Dark Mode
- [ ] Toggle theme.
- [ ] Verify no hardcoded hex values remain.
- [ ] Check borders and shadows in dark mode.

### 3. Accessibility
- [ ] Run automated accessibility scan.
- [ ] Verify focus rings are visible and use CSS variables.
- [ ] Check color contrast ratios.
