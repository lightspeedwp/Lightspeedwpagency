# Accessibility — Task List

**Category:** Audit  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Source Report:** `/reports/2026-03/2026-03-15-a11y-audit.md`  
**Trigger:** `audit a11y`

---

## Run: 2026-03-15

### Auto-Fixed (4 items)

- [x] **A0.1:** Fixed nested `<main>` in ComplianceScorecard.tsx (3 instances → `<div>`)
- [x] **A0.2:** Fixed nested `<main>` in TourOperatorSolutionTemplate.tsx → `<div>`
- [x] **A0.3:** Fixed nested `<main>` in GenericPolicyTemplate.tsx → `<div role="region">`
- [x] **A0.4:** Fixed nested `<main>` in SnippetGeneratorTemplate.tsx → `<div role="region">`

### P2 — Focus & Motion

- [x] **A1.1:** Add `prefers-reduced-motion` to `scroll-down.css` — added media query disabling animation and transition
- [x] **A1.2:** Add global `:focus-visible` ring to all interactive BEM elements — added to `resets.css` with `var(--ring)`, covers `a`, `button`, `[role="button"]`, `[role="tab"]`, `[role="menuitem"]`, `input`, `select`, `textarea`. Includes `:focus:not(:focus-visible)` suppression and `prefers-reduced-motion` guard.

### P3 — Enhancements

- [x] **A1.3:** Add `aria-live="polite"` to SnippetGeneratorTemplate code output and ComplianceScorecard results — added `aria-live="polite" aria-atomic="true"` to `.snippet-gen__code-block` and `.wp-block-devtools-compliance-scorecard__score-card`
- [x] **A1.4:** Verify terminal colour contrast ratios (green-on-dark) meet WCAG AA 4.5:1 — VERIFIED: `--color-terminal-green` (#28c840) on `--terminal-bg` (#0d1117) = 8.57:1 ✅, `--color-terminal-red` (#ff5f57) on dark = 6.38:1 ✅, `--syntax-comment` (#8b949e) on dark = 6.20:1 ✅. All exceed AA 4.5:1 minimum.
- [x] **A1.5:** Verify `scroll-down.css` animation declarations disabled under reduced-motion — CONFIRMED: `animation: none` and `transition: none` both present. Also fixed hardcoded `0.3s` → `var(--transition-base)`.

---

## Summary

| Priority | Tasks | Status |
|---|---|---|
| Auto-fixed | 4 | Done |
| P2 (Focus/Motion) | 2 | Done |
| P3 (Enhancement) | 3 | Done |
| **Total** | **9** | **9 done, 0 open** |