# Guidelines Remediation Task List

**Source Audit:** A1 — Guidelines Freshness Audit  
**Date:** 2026-02-21  
**Priority:** HIGH — Stale guidelines cause incorrect implementations  
**Status:** NOT STARTED

---

## Summary

The `/guidelines/` directory contains 100+ files accumulated over 14+ months (Dec 2024 - Feb 2026). Many reference deprecated patterns (Tailwind classes), deleted file paths, outdated component locations, or contradict the current funky redesign direction. This task list defines what needs updating.

---

## Audit Procedure

For EACH file in `/guidelines/` (recursively):

1. **Read the file**
2. **Check for these issues:**
   - References to Tailwind CSS classes or `tailwind.config` (CONFLICTING)
   - References to deleted paths (e.g., old `/styles/globals.css` locations)
   - Conflicting CSS variable naming (e.g., raw `--color-*` vs semantic `--primary`)
   - Outdated component locations (e.g., `/components/` root instead of `/src/app/components/`)
   - Outdated version numbers or dates older than January 2026
   - Guidelines that contradict the funky redesign direction or BEM enforcement
   - References to ShadCN UI components (removed Dec 2024)
   - References to old LSX Button vs current WordPress Button component
3. **Score the file:** CURRENT / STALE / OUTDATED / CONFLICTING

---

## Task Categories

### Category 1: Root Guidelines (Priority: CRITICAL)

- [ ] **`Guidelines.md`** — Main file is enormous (~700+ lines of status logs). Separate status history into `/reports/` archive. Keep only current architecture rules.
- [ ] **`design-patterns-modern.md`** — Verify all patterns align with funky redesign aesthetic. Add funky-specific patterns (glow cards, glassmorphism, neon accents).

### Category 2: Design Token Files (Priority: HIGH)

- [ ] **`design-tokens/colors.md`** — Verify matches current `theme-light.css` and `theme-dark.css` values. Add `--neon-color`, `--border-soft`, `--border-extra-soft`, category colors, overlay system.
- [ ] **`design-tokens/typography.md`** — Verify matches `theme-base.css` font scale. Confirm `--text-lead`, `--text-xl`, `--text-2xs` are documented.
- [ ] **`design-tokens/spacing.md`** — Verify matches `theme-base.css` spacing scale. Add semantic aliases (`--spacing-xs` through `--spacing-4xl`).
- [ ] **`design-tokens/responsive.md`** — Verify breakpoints match actual usage. Add fluid section padding tokens (`--section-padding-x`, `--section-padding-y`).
- [ ] **`design-tokens/responsive-utilities.md`** — Verify all 47 utilities exist in `/src/styles/responsive.css`.
- [ ] **`design-tokens/button-sizes.md`** — Verify matches current Button component props.

### Category 3: Component Guidelines (Priority: HIGH)

- [ ] **`components/Logo.md`** — Verify logo implementation matches current code.
- [ ] **`components/StyleSwitcher.md`** — Verify still relevant (dark/light mode toggle).
- [ ] **`components/ScrollBackToTop.md`** — Verify matches current implementation.
- [ ] **`components/ScrollDownArrow.md`** — Verify still used and where.
- [ ] **`components/LayoutSwitcher.md`** — Verify still exists and is used.
- [ ] **All 24 component files** — Cross-reference with actual components in `/src/app/components/`.

### Category 4: Block Guidelines (Priority: MEDIUM)

- [ ] **`blocks/overview-blocks.md`** — Verify block categories match actual `/src/app/components/blocks/` subdirectories.
- [ ] **`blocks/design/*.md`** — Verify 7 design block guidelines match implementations.
- [ ] **`blocks/theme/*.md`** — Verify 6 theme block guidelines.
- [ ] **`blocks/text/*.md`** — Verify text block guidelines.
- [ ] **`blocks/media/*.md`** — Verify media block guidelines.
- [ ] **Cross-reference with `blocks-guidelines-gaps.md`** for missing guidelines.

### Category 5: Pattern Guidelines (Priority: MEDIUM)

- [ ] **`patterns/overview-patterns.md`** — Verify all 76+ pattern components are cataloged.
- [ ] **`patterns/pattern-library-index.md`** — Verify index covers all patterns in `/src/app/components/patterns/`.
- [ ] **All 26+ pattern guideline files** — Cross-reference with actual pattern implementations.
- [ ] **Add missing pattern guidelines** — See `patterns-guidelines-gaps.md`.

### Category 6: Template Guidelines (Priority: LOW)

- [ ] **`templates/overview-templates.md`** — Verify matches actual 110+ template files.
- [ ] **Add per-template guidelines** — Currently only 1 file (`overview-templates.md`) for 110+ templates. See `templates-remediation.md`.

### Category 7: Infrastructure Guidelines (Priority: LOW)

- [ ] **`storybook/storybook-configuration.md`** — Verify Storybook config is current.
- [ ] **`imports/import-guidelines.md`** — Verify import rules match current architecture.
- [ ] **`testing/*.md`** — Verify test standards are current.
- [ ] **`scripts/*.md`** — Verify script guidelines.
- [ ] **`planning/planning-guidelines.md`** — Verify planning process.
- [ ] **`reporting/reporting-guidelines.md`** — Verify reporting standards.

---

## Definition of Done

- [ ] Every guideline file has been read and scored
- [ ] All CONFLICTING files have been rewritten or deleted
- [ ] All OUTDATED files have been updated or archived
- [ ] All STALE files have been refreshed with current info
- [ ] No guideline references Tailwind classes
- [ ] No guideline references ShadCN UI
- [ ] No guideline references deleted file paths
- [ ] All CSS variable names match `theme-base.css` / `theme-light.css` / `theme-dark.css`
