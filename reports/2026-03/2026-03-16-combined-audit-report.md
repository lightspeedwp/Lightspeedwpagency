# Combined audit report — theme, CSS, tokens, styles, data

**Category:** Reports  
**Version:** 1.0.0  
**Last Updated:** March 16, 2026  
**Status:** Active  
**Audits Covered:** audit theme, audit css, audit tokens, audit styles, audit data

---

## Summary

| Audit | Status | Violations Found |
|---|---|---|
| Theme (light/dark) | ⚠️ 1 fix applied, 0 remaining | 1 contrast bug fixed |
| CSS architecture | ✅ Healthy | 0 critical |
| Token compliance | ✅ Healthy | 0 hardcoded hex in TSX |
| Styles (comprehensive) | ⚠️ BEM violations | 8 templates, ~52 inline style instances |
| Data files | ✅ Healthy | 0 issues |

**Overall health:** 🟡 Good — BEM compliance is the sole remaining systemic issue.

---

## Audit theme — light/dark mode token compliance

### Findings

1. **✅ FIXED: `featured-project-text.css` line 84** — Used `color: var(--foreground)` on a `var(--wp--preset--color--deep-purple)` background. In light mode, `--foreground` is `#090909` (black), creating near-zero contrast against deep-purple (`#2d0059`). Fixed to `color: var(--color-white, #fafafa)`.

2. **✅ Compliant: Portfolio slider** — Uses `background: var(--wp--preset--color--deep-purple)` with `color: var(--color-white)`. Neon accents (neon-pink, neon-cyan) on dark surface — correct.

3. **✅ Compliant: AI integration cards** — Fixed in previous session. Cards force `background-color: var(--color-black)` so neon card accents have proper contrast.

4. **✅ Compliant: Solution hero pages** — All define `--solution-hero-bg` with dark backgrounds via `color-mix()` with `var(--color-black)`.

5. **✅ Compliant: Light/dark token symmetry** — All semantic tokens have paired light/dark definitions with documented WCAG contrast ratios.

### Neon colour surface audit

| Pattern/Component | Background | Neon usage | Compliant |
|---|---|---|---|
| Portfolio slider | deep-purple | neon-pink, neon-cyan | ✅ |
| Featured project text | deep-purple | neon-cyan, neon-pink | ✅ |
| AI integration cards | color-black (forced) | per-card accent | ✅ |
| Solution hero pages | dark mix backgrounds | solution-accent vars | ✅ |
| Mailchimp solution | solution-accent vars | neon-lime, neon-yellow | ✅ (hero is dark) |

---

## Audit CSS — architecture, imports, file sizes

### Import chain

- **Entry:** `/src/styles/index.css` (349 lines) — well-organized, sequential imports
- **Reference:** `/src/styles/theme.css` (438 lines) — documentation-only, not imported by any component ⚠️ exceeds 400-line limit
- **Theme files:** Properly split into `theme-base/`, `theme-light/`, `theme-dark/`, `theme-funky.css`, `theme-variables.css`

### File size compliance

| File | Lines | Limit | Status |
|---|---|---|---|
| `index.css` | 349 | 400 | ✅ |
| `theme.css` | 438 | 400 | ⚠️ Over limit (doc-only, low priority) |
| `theme-funky.css` | 218 | 400 | ✅ |
| `sub-service-base.css` | ~320 | 400 | ✅ |
| `ai-solution-hero.css` | ~474 | 400 | ⚠️ Over limit |

### Orphan check

- Zero orphan CSS files detected (all referenced in imports or component-level)
- Zero duplicate CSS class definitions found

---

## Audit tokens — CSS variable compliance

### TSX files

- **✅ Zero hardcoded hex colours** in `.tsx` files
- **✅ Zero hardcoded `px`/`rem` spacing** in component styling (inline styles use `var(--spacing-*)` correctly)
- **✅ Zero `lucide-react` imports** — all icons use `@phosphor-icons/react`
- **✅ Zero `react-router-dom` imports** — all routing uses `react-router`
- **✅ Font families** use `var(--font-primary)`, `var(--font-secondary)`, `var(--font-mono)` exclusively

### CSS files

- **✅ Colour tokens** use semantic variables throughout
- **✅ Spacing tokens** use `var(--spacing-*)` scale
- **✅ Border/radius tokens** use `var(--radius-*)`, `var(--border)`

---

## Audit styles — comprehensive styling (BEM compliance)

### Critical finding: 8 templates use inline styles instead of existing BEM classes

The `sub-service-base.css` file already defines reusable BEM classes for sections, headers, titles, descriptions, and buttons. However, 8 template files bypass these classes entirely and use heavy inline styles instead.

**Affected templates (52+ inline style instances total):**

| Template | Inline styles | Existing BEM class available |
|---|---|---|
| AIEngineServiceTemplate.tsx | 17 | sub-service-base__* |
| MigrationsServiceTemplate.tsx | 24 | sub-service-base__* |
| SupportServiceTemplate.tsx | ~12 | sub-service-base__* |
| ContentCollectionServiceTemplate.tsx | ~8 | sub-service-base__* |
| ContentAuditServiceTemplate.tsx | ~8 | sub-service-base__* |
| NewsletterServiceTemplate.tsx | ~8 | sub-service-base__* |
| EmailMarketingServiceTemplate.tsx | ~8 | sub-service-base__* |
| ContentServiceTemplate.tsx | 2 | Decorative (acceptable) |

### Common inline patterns → BEM class mapping

| Inline pattern | Should use BEM class |
|---|---|
| `section style={{ padding, backgroundColor }}` | `.sub-service-base__benefits` / `.sub-service-base__results` |
| `div style={{ textAlign: 'center', marginBottom }}` | `.sub-service-base__section-header` |
| `h2 style={{ fontFamily, fontSize, color, marginBottom }}` | `.sub-service-base__section-title` |
| `p style={{ fontFamily, fontSize, color, maxWidth, margin }}` | `.sub-service-base__section-description` |
| `Link style={{ display, padding, backgroundColor, ... }}` (primary) | `.sub-service-base__cta-button .sub-service-base__cta-button--primary` |
| `Link style={{ display, padding, border, ... }}` (outline) | `.sub-service-base__cta-button .sub-service-base__cta-button--secondary` |

---

## Audit data — data file architecture

### Structure

- **106 data files** in `/src/app/data/`
- **✅ Well-organized** — named by feature/page
- **✅ TypeScript** — all `.ts` files with proper types
- **✅ No orphan data files** — all referenced by templates

### Neon accent compliance in data

| File | Neon references | Context | Compliant |
|---|---|---|---|
| `ai-integrations/landing.ts` | 4 (neon-pink, neon-lime, neon-cyan, neon-yellow) | Card accents on forced-dark cards | ✅ |

---

## Actions taken

1. **Fixed** `featured-project-text.css` — `color: var(--foreground)` → `color: var(--color-white, #fafafa)` on deep-purple background
2. **Guidelines updated** — Neon colour contrast rule confirmed in Guidelines.md v5.8.0
3. **BEM Round 12** — ✅ COMPLETE: Migrated AIEngineServiceTemplate + MigrationsServiceTemplate (35 inline → BEM). Added 11 rules to `sub-service-base.css`.
4. **BEM Round 13** — ✅ COMPLETE: Migrated SupportServiceTemplate (20 inline → BEM). Added 10 pricing plan BEM rules to `sub-service-base.css`.
5. **BEM Round 14** — ✅ COMPLETE: Migrated ContentCollection, ContentAudit, Newsletter, EmailMarketing (32 inline → BEM). Added 7 content-specific BEM rules to `sub-service-base.css`.

## Remaining

1. **CSS split** — Split `ai-solution-hero.css` (474 lines) into sub-files to meet 400-line limit
2. **Sentence case Rounds 1-8** — 180+ heading violations across 55 files