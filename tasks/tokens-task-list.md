# Tokens — Task List

**Category:** Audit  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Source Report:** `/reports/2026-03/2026-03-15-tokens-audit.md`  
**Trigger:** `audit tokens`

---

## Run: 2026-03-15

### Auto-Fixed (~48 items)

- [x] **T0.1:** App.tsx — 7 hardcoded hex/px values replaced with CSS variables
- [x] **T0.2:** SecurityServiceTemplate.tsx — ~30 hardcoded hex values replaced with semantic tokens
- [x] **T0.3:** DevelopmentServiceTemplate.tsx — 4 terminal dots + fontWeight fixed
- [x] **T0.4:** ContentServiceTemplate.tsx — 3 proofreading marks fixed
- [x] **T0.5:** DesignServiceTemplate.tsx — 4 color/fontWeight values fixed
- [x] **T0.6:** WooCommerceSolutionTemplate.tsx — 2 values fixed
- [x] **T0.7:** ServicesLandingTemplate.tsx — 1 fontWeight fixed
- [x] **T0.8:** site-map.css — Added missing `.site-map__link--missing` and `.site-map__icon--warning` styles

### P3 — Remaining

- [x] **T1.1:** Fix `#0d1117` in WooCommerceSolutionTemplate.tsx (~line 360) — replaced with `var(--terminal-bg)`, shadow with `var(--shadow-xl)`

### P2 — New Violations (Full Audit Run 2026-03-15)

- [x] **T2.1:** Replace ~16 hardcoded hex colors in WordPressSolutionTemplate.tsx code snippet — terminal dots now use `var(--color-terminal-red/yellow/green)`, backgrounds use `var(--terminal-bg/header-bg/border)`, syntax colors use `var(--syntax-*)` variables
- [x] **T2.2:** Replace 5 hardcoded hex colors in PerformanceServiceTemplate.tsx — `#27c93f` → `var(--color-terminal-green)`, `#ff5f56` → `var(--color-terminal-red)`
- [x] **T2.3:** Replace hardcoded `fontSize: '4rem'` in PerformanceServiceTemplate.tsx → `var(--text-5xl)`
- [x] **T2.4:** Add code syntax CSS variables to theme-base.css — added `--terminal-bg`, `--terminal-header-bg`, `--terminal-border`, `--terminal-text`, `--syntax-keyword`, `--syntax-comment`, `--syntax-function`, `--syntax-string`, `--syntax-variable`, `--syntax-operator`

---

## Summary

| Priority | Tasks | Status |
|---|---|---|
| Auto-fixed | 8 | Done |
| P2 (New violations) | 4 | Done |
| P3 (Low) | 1 | Done |
| **Total** | **13** | **13 done, 0 open** |