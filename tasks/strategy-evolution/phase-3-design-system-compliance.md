# Phase 3: Design System Compliance

**Status:** PENDING (mostly READY — minimal work needed)
**Dependencies:** None
**Estimated Effort:** 4-8 hours
**Populated From:** Report 03

---

## Critical Tasks (Must Complete)

- [ ] **3.1 Fix HeaderFooterComparison.tsx:76** — Replace `fontSize: '0.8rem'` with `var(--text-xs)`. Only production violation found. (Audit 03)

## High Priority (Should Complete)

- [ ] **3.2 Tokenise gradient definitions** — Create gradient CSS variables in `theme-base.css` for commonly used gradients (neon glow, hero gradients, card hover gradients). (Audit 03)
- [ ] **3.3 Tokenise animation duration values** — Ensure all animation durations reference `--transition-fast`, `--transition-normal`, `--transition-slow` from theme-base.css. (Audit 03)

## Medium Priority (Nice to Have)

- [ ] **3.4 CSS variable audit for new templates** — All new Systems hub templates (Phase 1) must pass 100% CSS variable compliance before merge. (Audit 03)
- [ ] **3.5 Dark mode parity check for new pages** — All new templates must define both light and dark mode overrides where needed. (Audit 03)

## Implementation Notes

- Design system is already at 99.9% compliance — this phase is maintenance-only.
- New templates created in Phase 1 should be audited against this checklist.
- Gradient and animation tokenisation are quality improvements, not blockers.
- Consider adding automated compliance checks (CSS variable usage linting) to prevent regression.
