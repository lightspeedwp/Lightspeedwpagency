# Prompt Trigger Words — Registry

**Category:** Workflow  
**Version:** 8.2.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Overview

This project supports **trigger words** — short commands the user types instead of pasting full prompts. When the AI sees a trigger word (on its own or as the primary instruction), the AI MUST read and execute the corresponding prompt file.

**Trigger words are case-insensitive.** `Cleanup`, `CLEANUP`, and `cleanup` all work.

---

## Registered Triggers (40 Total)

### Workflow Triggers (8)

| Trigger | Prompt File | Description |
|---|---|---|
| `cleanup` | `/prompts/cleanup.md` | Full 11-step audit + fix, then auto-runs `continue` |
| `continue` | `/prompts/continue.md` | Pick up next open task from `/tasks/task-list.md` |
| `cleanup and continue` | `/prompts/cleanup.md` → `/prompts/continue.md` | Alias for `cleanup` (identical behavior) |
| `status` | `/prompts/status.md` | Read-only project health dashboard |
| `changelog` | `/prompts/changelog.md` | Update CHANGELOG with undocumented recent work |
| `sitemap` | `/prompts/sitemap.md` | Sync SiteMapTemplate with actual routes (inline fix, no report) |
| `routes` | `/prompts/routes.md` | Route integrity audit + inline fix (no report). Use `audit routes` for report variant |
| `process reports` | `/prompts/process-reports.md` | Organize, rename, and archive reports |

### Audit Triggers (24)

| Trigger | Prompt File | Description |
|---|---|---|
| `audit` | `/prompts/audit.md` | **Master orchestrator** — runs ALL audit sub-triggers sequentially, then optionally chains to `process reports` |
| `audit routes` | `/prompts/routes.md` | Route map completeness audit (report-generating variant of `routes`) |
| `audit sitemap` | `/prompts/sitemap.md` | SiteMap vs routes diff audit (report-generating variant of `sitemap`) |
| `audit tokens` | `/prompts/audit-tokens.md` | CSS variable compliance (zero hardcoded values) |
| `audit css` | `/prompts/audit-css.md` | CSS architecture (imports, orphans, file sizes) |
| `audit a11y` | `/prompts/audit-a11y.md` | WCAG 2.1 AA accessibility compliance (quick) |
| `audit data` | `/prompts/audit-data.md` | Data file architecture (orphans, duplicates, types) |
| `audit responsive` | `/prompts/audit-responsive.md` | Responsive design (breakpoints, mobile, touch) |
| `audit styles` | `/prompts/audit-styles.md` | Comprehensive styling audit (tokens + CSS + classes) |
| `audit guidelines` | `/prompts/audit-guidelines.md` | Guideline file standards (frontmatter, headings, size) |
| `audit theme` | `/prompts/audit-light-dark-mode.md` | Light/dark mode token compliance and contrast |
| `audit style` | `/prompts/audit-retro-style.md` | Funky Neon design language compliance |
| `audit webgl` | `/prompts/audit-webgl.md` | WebGL architecture, data-driven design & compliance audit |
| `audit routing` | `/prompts/audit-routing.md` | Route integrity, link validation, logo navigation |
| `audit layout` | `/prompts/audit-layout.md` | Visual integrity, containers, overflow, responsiveness |
| `audit functionality` | `/prompts/audit-functionality.md` | UI state wiring, dead UI detection, interaction flows |
| `audit accessibility` | `/prompts/audit-accessibility.md` | Comprehensive WCAG 2.1 AA (focus, ARIA, touch targets) |
| `audit performance` | `/prompts/audit-performance.md` | Render performance, assets, animations, WebGL impact |
| `audit images` | `/prompts/audit-images.md` | Broken image URLs, missing alt text, asset compliance |
| `audit phosphor` | `/prompts/audit-phosphor.md` | Lucide-to-Phosphor migration readiness (maps every remaining Lucide icon) |
| `audit icons` | `/prompts/audit-icons.md` | Phosphor icon import integrity (broken imports, legacy Lucide, weight compliance) |
| `audit header` | `/prompts/audit-header.md` | Header template part compliance (single part, section-based patterns) |
| `audit footer` | `/prompts/audit-footer.md` | Footer template part compliance (main site vs dev tools patterns) |
| `audit hero` | `/prompts/audit-hero.md` | Hero template part compliance (single part, data-driven patterns per page type) |

### Scaffold Triggers (3)

| Trigger | Prompt File | Description |
|---|---|---|
| `new template` | `/prompts/new-template.md` | Scaffold a page template from patterns |
| `new pattern` | `/prompts/new-pattern.md` | Scaffold a reusable block pattern |
| `new block` | `/prompts/new-block.md` | Scaffold an atomic block component |

All scaffold triggers:
1. Read relevant guidelines (patterns, components, archetypes).
2. Create the component file with TypeScript interface.
3. Create the CSS file with CSS variables only.
4. Register the route and CSS import.
5. Update CHANGELOG.

### Code Quality Triggers (1)

| Trigger | Prompt File | Description |
|---|---|---|
| `apply bem` | `/prompts/apply-bem.md` | BEM class compliance audit + fix (inline styles → CSS variables, Tailwind → BEM) |

### Release Trigger (1)

| Trigger | Prompt File | Description |
|---|---|---|
| `release` | `/prompts/release.md` | Version bump: move Unreleased → versioned, update links |

---

## Trigger Behaviour Details

### Workflow Triggers

**`cleanup`** — Executes `/prompts/cleanup.md` (11 steps), then automatically chains to `/prompts/continue.md`. Use `cleanup only` modifier to skip the continue phase.

**`continue`** — Reads `/tasks/task-list.md`, picks the first unchecked task by priority, executes it, marks it complete. Loops until session capacity is reached.

**`cleanup and continue`** — Identical to `cleanup`. Exists for discoverability.

**`status`** — Read-only operation. Gathers metrics, task counts, compliance scores, and recent activity. Does not modify any files.

**`changelog`** — Reads recent completed work and adds missing entries to `/CHANGELOG.md` under `[Unreleased]`. Does not create reports or task lists.

**`sitemap`** — Diffs registered routes against SiteMapTemplate. Adds missing pages, removes dead links, updates counts.

**`routes`** — Route integrity audit + inline fix (no report). Use `audit routes` for report variant.

**`process reports`** — Audits `/reports/` directory. Moves misplaced files, renames non-conforming filenames, archives old reports.

### Audit Triggers

All audit triggers follow the same workflow:
1. Read relevant guidelines and definitions.
2. Scan the codebase for violations.
3. Fix violations where possible.
4. Save report to `/reports/YYYY-MM/[audit-name].md`.
5. Create or update a dedicated task list in `/tasks/[audit-name]-task-list.md`.

**`audit`** — Master orchestrator. Runs ALL 24 audit sub-triggers in sequence:

1. `audit routes` — Route map completeness
2. `audit sitemap` — SiteMap template sync
3. `audit tokens` — CSS variable compliance
4. `audit css` — CSS architecture
5. `audit a11y` — WCAG accessibility (quick)
6. `audit data` — Data file architecture
7. `audit responsive` — Responsive design
8. `audit styles` — Hardcoded styles
9. `audit guidelines` — Guideline file standards
10. `audit theme` — Light/dark mode tokens
11. `audit style` — Funky Neon design language
12. `audit webgl` — WebGL architecture & compliance
13. `audit routing` — Route integrity
14. `audit layout` — Visual integrity
15. `audit functionality` — UI state wiring
16. `audit accessibility` — Comprehensive WCAG
17. `audit performance` — Render performance
18. `audit images` — Broken images & alt text
19. `audit phosphor` — Lucide-to-Phosphor migration readiness
20. `audit icons` — Phosphor icon import integrity
21. `audit header` — Header template part compliance
22. `audit footer` — Footer template part compliance
23. `audit hero` — Hero template part compliance

After all 24 audits complete, prints a summary dashboard showing pass/fail per audit. Does **not** auto-chain to `process reports` unless explicitly requested via `audit && process reports`.

**`audit routes`** — Report-generating variant of `routes`. Diffs `route-map.ts` slugs against actual route definitions. Writes report to `/reports/YYYY-MM/`. The plain `routes` trigger fixes issues inline without writing a report.

**`audit sitemap`** — Report-generating variant of `sitemap`. Diffs SiteMapTemplate entries against registered routes. Writes report to `/reports/YYYY-MM/`. The plain `sitemap` trigger fixes issues inline without writing a report.

### Scaffold Triggers

All scaffold triggers:
1. Read relevant guidelines (patterns, components, archetypes).
2. Create the component file with TypeScript interface.
3. Create the CSS file with CSS variables only.
4. Register the route and CSS import.
5. Update CHANGELOG.

### Release Trigger

**`release`** — Accepts optional modifier: `release patch`, `release minor`, `release major`, or `release 2.1.0`. If no modifier, auto-detects version type from changelog entries.

---

## Trigger Modifiers

| Command | Behaviour |
|---|---|
| `audit` | Run all 24 audit sub-triggers sequentially |
| `audit && process reports` | Run all 24 audits, then auto-chain to `process reports` |
| `audit tokens, css, a11y` | Run only the listed audit sub-triggers (comma-separated) |
| `cleanup` | Full cleanup + continue |
| `cleanup only` | Cleanup only — skip the continue phase |
| `continue` | Next open task |
| `continue from P2.3` | Override task selection — start from specific task ID |
| `release patch` | Patch version bump (x.y.Z) |
| `release minor` | Minor version bump (x.Y.0) |
| `release major` | Major version bump (X.0.0) |
| `release 2.1.0` | Specific version number |

---

## Compound Commands

Triggers can be chained with `&&` to run sequentially:

| Command | Behaviour |
|---|---|
| `audit && process reports` | Run all 24 audits → convert reports to task lists |
| `cleanup && continue` | Full cleanup → next open task (alias for `cleanup`) |
| `audit tokens && audit css` | Run two specific audits in sequence |

The `&&` operator means "when the first command completes, run the second." Each command runs its full workflow before the next begins.

---

## Environment Reminders (Every Session)

Every prompt execution MUST remember:

1. **This is Figma Make** — not a local dev environment.
2. **Never suggest:** browser refresh, cache clearing, `npm run dev`, terminal commands, or restarting servers.
3. **All work** is done via the file editing tools available in this environment.
4. **Preview updates** happen automatically when files are saved.

---

## Design System Compliance (Every Session)

Every prompt execution MUST enforce:

| Category | Rule | Example |
|---|---|---|
| **Colors** | Semantic CSS variables only | `var(--primary)`, `var(--foreground)` |
| **Spacing** | `var(--spacing-*)` tokens only | `var(--spacing-4)`, `var(--spacing-8)` |
| **Typography** | Font faces from CSS only | `var(--font-primary)`, `var(--font-secondary)` |
| **Font sizes** | CSS variable scale only | `var(--text-h1)`, `var(--text-sm)` |
| **Border radius** | CSS variable tokens only | `var(--radius)`, `var(--radius-lg)` |
| **Icons** | `@phosphor-icons/react` only | Zero `lucide-react` imports |
| **Router** | `react-router` only | Never `react-router-dom` |
| **Classes** | `.wp-*` prefix for WordPress | No Tailwind utility classes |
| **Hardcoded values** | ZERO allowed | No hex, no px, no rem, no font names |

---

## Adding New Triggers

1. Create the prompt file in `/prompts/[trigger-name].md`.
2. Add a row to the appropriate category table above.
3. Add a behaviour description in the "Trigger Behaviour Details" section.
4. Document any modifiers in the "Trigger Modifiers" table.
5. Increment this file's version number.
6. Update the trigger table in `/guidelines/Guidelines.md`.

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 8.2.0 | 2026-03-18 | Registry sync via `update triggers`. Added unregistered `routes` workflow trigger. Added scaffold + code quality trigger tables. Workflow 7 → 8. Total 39 → 40. Zero circular references validated |
| 8.1.0 | 2026-03-18 | Added `update triggers` guideline trigger. Guidelines triggers 2 → 3. Total triggers 38 → 39. Updated audit orchestrator to 24 sub-triggers. Added guideline references to 6 audit prompts. Validated zero circular references |
| 8.0.0 | 2026-03-18 | Added 5 audit triggers: `audit phosphor`, `audit icons`, `audit header`, `audit footer`, `audit hero`. Audit triggers 19 → 24. Total triggers 33 → 38 |
| 7.1.0 | 2026-03-16 | Added `audit images` audit trigger. Audit triggers 18 → 19. Total triggers 32 → 33 |
| 7.0.0 | 2026-03-16 | Added `apply bem` code quality trigger. Added Code Quality category. Restored missing 6.0.0 entry. Total triggers 31 → 32 |
| 6.0.0 | 2026-03-15 | Added 8 new audit triggers: `audit theme`, `audit style`, `audit webgl`, `audit routing`, `audit layout`, `audit functionality`, `audit accessibility`, `audit performance`. Audit triggers 10 → 18. Total triggers 23 → 31 |
| 5.0.0 | 2026-03-15 | Added `audit` master orchestrator, `audit routes`, `audit sitemap`. Added compound commands (`&&`). Added comma-separated audit modifier. 20 → 23 triggers |
| 4.0.0 | 2026-03-15 | Expanded from 4 → 20 triggers. Added 5 workflow, 7 audit, 3 scaffold, 1 release. Full behaviour details and modifier docs |
| 3.0.0 | 2026-03-15 | Added `update guidelines` and `cleanup guidelines` triggers |
| 2.0.0 | 2026-03-15 | Added modifier syntax, prompt workflow reminder, expanded environment rules |
| 1.0.0 | 2026-03-13 | Initial creation with `cleanup` and `continue` triggers |