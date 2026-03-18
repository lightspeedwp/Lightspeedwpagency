# Audit — Master Orchestrator

**Category:** Prompt  
**Version:** 3.0.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Template Used:** _templates/prompt-template.md

---

## Trigger

`audit` (bare word, no sub-trigger specified)

## Behaviour

Runs ALL 24 audit sub-triggers sequentially. Each audit follows the standard workflow: scan → fix → report → task list.

**Reference guidelines (read before starting):**
- `/guidelines/Guidelines.md` — canonical rules, design system compliance
- `/guidelines/design-tokens/` — all token definitions
- `/guidelines/components/components-vs-patterns.md` — component architecture

**This prompt is an orchestrator.** It calls sub-trigger prompts listed below. Sub-trigger prompts reference guidelines directly — they never reference this orchestrator or each other.

## Execution Order

| Step | Sub-Trigger | Prompt File | Report Output |
|---|---|---|---|
| 1 | `audit routes` | `/prompts/routes.md` | `YYYY-MM-DD-routes-audit.md` |
| 2 | `audit sitemap` | `/prompts/sitemap.md` | `YYYY-MM-DD-sitemap-audit.md` |
| 3 | `audit tokens` | `/prompts/audit-tokens.md` | `YYYY-MM-DD-tokens-audit.md` |
| 4 | `audit css` | `/prompts/audit-css.md` | `YYYY-MM-DD-css-audit.md` |
| 5 | `audit a11y` | `/prompts/audit-a11y.md` | `YYYY-MM-DD-a11y-audit.md` |
| 6 | `audit data` | `/prompts/audit-data.md` | `YYYY-MM-DD-data-audit.md` |
| 7 | `audit responsive` | `/prompts/audit-responsive.md` | `YYYY-MM-DD-responsive-audit.md` |
| 8 | `audit styles` | `/prompts/audit-styles.md` | `YYYY-MM-DD-styles-audit.md` |
| 9 | `audit guidelines` | `/prompts/audit-guidelines.md` | `YYYY-MM-DD-guidelines-audit.md` |
| 10 | `audit theme` | `/prompts/audit-light-dark-mode.md` | `YYYY-MM-DD-theme-mode-audit.md` |
| 11 | `audit style` | `/prompts/audit-retro-style.md` | `YYYY-MM-DD-retro-style-audit.md` |
| 12 | `audit webgl` | `/prompts/audit-webgl.md` | `YYYY-MM-DD-webgl-audit.md` |
| 13 | `audit routing` | `/prompts/audit-routing.md` | `YYYY-MM-DD-routing-audit.md` |
| 14 | `audit layout` | `/prompts/audit-layout.md` | `YYYY-MM-DD-layout-audit.md` |
| 15 | `audit functionality` | `/prompts/audit-functionality.md` | `YYYY-MM-DD-functionality-audit.md` |
| 16 | `audit accessibility` | `/prompts/audit-accessibility.md` | `YYYY-MM-DD-accessibility-audit.md` |
| 17 | `audit performance` | `/prompts/audit-performance.md` | `YYYY-MM-DD-performance-audit.md` |
| 18 | `audit images` | `/prompts/audit-images.md` | `YYYY-MM-DD-images-audit.md` |
| 19 | `audit phosphor` | `/prompts/audit-phosphor.md` | `YYYY-MM-DD-phosphor-audit.md` |
| 20 | `audit icons` | `/prompts/audit-icons.md` | `YYYY-MM-DD-icons-audit.md` |
| 21 | `audit header` | `/prompts/audit-header.md` | `YYYY-MM-DD-header-audit.md` |
| 22 | `audit footer` | `/prompts/audit-footer.md` | `YYYY-MM-DD-footer-audit.md` |
| 23 | `audit hero` | `/prompts/audit-hero.md` | `YYYY-MM-DD-hero-audit.md` |
| 24 | (reserved) | — | — |

## Post-Audit Summary

After all 24 audits complete (or as many as session allows), print a summary dashboard:

```
## Audit Summary — YYYY-MM-DD

| # | Audit | Grade | Auto-Fixed | Open Issues | Report |
|---|---|---|---|---|---|
| 1 | Routes | A/B/C/F | N | N | ✅ |
| 2 | Sitemap | A/B/C/F | N | N | ✅ |
| 3 | Tokens | A/B/C/F | N | N | ✅ |
| 4 | CSS | A/B/C/F | N | N | ✅ |
| 5 | A11y | A/B/C/F | N | N | ✅ |
| 6 | Data | A/B/C/F | N | N | ✅ |
| 7 | Responsive | A/B/C/F | N | N | ✅ |
| 8 | Styles | A/B/C/F | N | N | ✅ |
| 9 | Guidelines | A/B/C/F | N | N | ✅ |
| 10 | Theme | A/B/C/F | N | N | ✅ |
| 11 | Style | A/B/C/F | N | N | ✅ |
| 12 | WebGL | A/B/C/F | N | N | ✅ |
| 13 | Routing | A/B/C/F | N | N | ✅ |
| 14 | Layout | A/B/C/F | N | N | ✅ |
| 15 | Functionality | A/B/C/F | N | N | ✅ |
| 16 | Accessibility | A/B/C/F | N | N | ✅ |
| 17 | Performance | A/B/C/F | N | N | ✅ |
| 18 | Images | A/B/C/F | N | N | ✅ |
| 19 | Phosphor | A/B/C/F | N | N | ✅ |
| 20 | Icons | A/B/C/F | N | N | ✅ |
| 21 | Header | A/B/C/F | N | N | ✅ |
| 22 | Footer | A/B/C/F | N | N | ✅ |
| 23 | Hero | A/B/C/F | N | N | ✅ |

**Next step:** Type `process reports` to organize reports.
```

## Modifiers

| Command | Behaviour |
|---|---|
| `audit` | Run all 24 sub-triggers |
| `audit && process reports` | Run all 24, then auto-chain to `process reports` |
| `audit tokens, css, a11y` | Run only listed sub-triggers (comma-separated) |

## Rules

1. Each audit writes its own report to `/reports/YYYY-MM/`.
2. Each audit creates or updates its own task list in `/tasks/`.
3. Auto-fix violations where safe. Document unfixable issues.
4. Do NOT chain to `process reports` unless `&&` is used.
5. If session capacity is reached mid-sequence, note which audits remain and prompt the user to type `continue` or re-run the remaining audits.
6. Sub-trigger prompts reference guidelines directly. They never reference this orchestrator or each other — no circular references.

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 3.0.0 | 2026-03-18 | Expanded from 17 to 24 sub-triggers. Added phosphor, icons, header, footer, hero, images. Added no-circular-reference rule |
| 2.0.0 | 2026-03-15 | Expanded from 9 to 17 sub-triggers. Added theme, style, webgl, routing, layout, functionality, accessibility, performance |
| 1.0.0 | 2026-03-15 | Initial creation — 9-step audit orchestrator |
