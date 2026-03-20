# Prompt Trigger Words — Registry

**Category:** Workflow  
**Version:** 16.0.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Overview

This project supports **trigger words** — short commands the user types instead of pasting full prompts. When the AI sees a trigger word (on its own or as the primary instruction), the AI MUST read and execute the corresponding prompt file.

**Trigger words are case-insensitive.** `Cleanup`, `CLEANUP`, and `cleanup` all work.

---

## Registered Triggers (93 Total)

### Workflow Triggers (8)

| Trigger | Prompt File | Description |
|---|---|---|
| `cleanup` | `/prompts/cleanup.md` | Full 11-step audit + fix, then auto-runs `archive` |
| `continue` | `/prompts/continue.md` | Pick up next open task from `/tasks/task-list.md` |
| `cleanup and continue` | `/prompts/cleanup.md` → `/prompts/continue.md` | Alias for `cleanup` (identical behavior) |
| `status` | `/prompts/status.md` | Read-only project health dashboard |
| `changelog` | `/prompts/changelog.md` | Update CHANGELOG with undocumented recent work |
| `sitemap` | `/prompts/sitemap.md` | Sync SiteMapTemplate with actual routes (inline fix, no report) |
| `routes` | `/prompts/routes.md` | Route integrity audit + inline fix (no report). Use `audit routes` for report variant |
| `process reports` | `/prompts/process-reports.md` | Organize, rename, and archive reports |

### Archive Triggers (5)

| Trigger | Prompt File | Description |
|---|---|---|
| `archive` | `/prompts/archive.md` | **Master orchestrator** — runs ALL archive sub-triggers sequentially |
| `archive prompts` | `/prompts/archive-prompts.md` | Classify prompts as reusable or specific; generalize or archive |
| `archive reports` | `/prompts/archive-reports.md` | Archive resolved/outdated reports |
| `archive tasks` | `/prompts/archive-tasks.md` | Archive completed task lists, clean protected files |
| `archive guidelines` | `/prompts/archive-guidelines.md` | Archive obsolete/superseded guideline files |

### Update Triggers (10)

| Trigger | Prompt File | Description |
|---|---|---|
| `update` | `/prompts/update.md` | **Master orchestrator** — runs ALL update sub-triggers sequentially |
| `update routes` | `/prompts/update-routes.md` | Sync routes, fix gaps, update route map and SiteMap |
| `update sitemap` | `/prompts/update-sitemap.md` | Sync SiteMapTemplate with actual routes (inline fix, no report) |
| `update data` | `/prompts/update-data.md` | Migrate hardcoded content to data files — zero hardcoded strings |
| `update guidelines` | `/prompts/update-guidelines.md` | Refresh guideline accuracy, frontmatter, and cross-references |
| `update prompts` | `/prompts/update-prompts.md` | Fix prompt frontmatter, references, and environment reminders |
| `update reports` | `/prompts/update-reports.md` | Organize reports into correct directories and naming |
| `update tasks` | `/prompts/update-tasks.md` | Verify task completion, remove stale tasks, update counts |
| `update status` | `/prompts/update-status.md` | Refresh project metrics, route counts, compliance scores |
| `update triggers` | `/prompts/update-triggers.md` | Sync trigger registry with prompt files |

### Expand Triggers (18)

| Trigger | Prompt File | Description |
|---|---|---|
| `expand` | `/prompts/expand.md` | **Master orchestrator** — runs ALL expand sub-triggers |
| `expand prompts` | `/prompts/expand-prompts.md` | Discover new reusable prompts from chat history patterns |
| `expand guidelines` | `/prompts/expand-guidelines.md` | Identify and fix guideline gaps and ambiguities |
| `expand data` | `/prompts/expand-data.md` | Discover shared data structures across templates |
| `expand patterns` | `/prompts/expand-patterns.md` | Discover repeated UI sections to extract as reusable patterns |
| `expand components` | `/prompts/expand-components.md` | Identify duplicated component logic for extraction |
| `expand templates` | `/prompts/expand-templates.md` | Find missing sections in existing templates |
| `expand pages` | `/prompts/expand-pages.md` | Discover missing pages in the site structure |
| `expand functionality` | `/prompts/expand-functionality.md` | Discover dead UI and missing interactive features |
| `expand webgl` | `/prompts/expand-webgl.md` | Recommend new WebGL integrations per page brief |
| `expand triggers` | `/prompts/expand-triggers.md` | Analyse trigger registry for gaps and overlaps |
| `expand blocks` | `/prompts/expand-blocks.md` | Discover missing atomic block components |
| `expand contexts` | `/prompts/expand-contexts.md` | Identify missing React contexts for state management |
| `expand hooks` | `/prompts/expand-hooks.md` | Identify missing custom hooks (useLocalStorage, etc.) |
| `expand a11y` | `/prompts/expand-a11y.md` | Discover accessibility enhancements beyond WCAG |
| `expand routes` | `/prompts/expand-routes.md` | Analyse navigation flows for orphans and dead-ends |
| `expand seo` | `/prompts/expand-seo.md` | Discover missing meta, schema, internal linking |
| `expand animations` | `/prompts/expand-animations.md` | Discover scroll-triggered and neon animation opportunities |

All expand triggers are **discovery-first**

### Optimise Triggers (6)

| Trigger | Prompt File | Description |
|---|---|---|
| `optimise` | `/prompts/optimise.md` | **Master orchestrator** — runs ALL optimise sub-triggers sequentially |
| `optimise memory` | `/prompts/optimise-memory.md` | File splitting, duplicate removal, component consolidation, DRY architecture enforcement |
| `optimise css` | `/prompts/optimise-css.md` | CSS architecture, duplicate removal, logical splits, import optimization |
| `optimise components` | `/prompts/optimise-components.md` | Component consolidation, prop optimization, variant reduction |
| `optimise data` | `/prompts/optimise-data.md` | Data file consolidation, duplicate removal, type safety |
| `optimise imports` | `/prompts/optimise-imports.md` | Remove unused imports, consolidate import statements |
| `optimise performance` | `/prompts/optimise-performance.md` | Bundle size, lazy loading, render performance, memoization |

All optimise triggers MUST maintain 100% design system compliance

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

### Scaffold Triggers

All scaffold triggers:
1. Read relevant guidelines (patterns, components, archetypes).
2. Create the component file with TypeScript interface.
3. Create the CSS file with CSS variables only.
4. Register the route and CSS import.
5. Update CHANGELOG.

### Fix Triggers

All fix triggers follow the same workflow:
1. Read relevant guidelines and definitions.
2. Scan the codebase for violations.
3. Fix violations inline where possible.
4. Save report to `/reports/YYYY-MM/[fix-name].md`.
5. Create or update task list in `/tasks/task-list.md` (if manual review needed).

**`fix`** — Master orchestrator. Runs ALL fix sub-triggers in sequence:

1. `fix titles` — Title Case → Sentence Case (headings, titles, labels)

After all fixes complete, prints a summary dashboard showing pass/fail per fix. Does **not** auto-chain to `process reports` unless explicitly requested via `fix && process reports`.

**`fix titles`** — Scan all headings, titles, and labels for Title Case violations. Convert to sentence case while preserving acronyms (AI, SEO, API, etc.) and proper nouns (LSX Design, WordPress, etc.). Fix inline, write report, flag ambiguous cases for manual review.

### Release Trigger

**`release`** — Accepts optional modifier: `release patch`, `release minor`, `release major`, or `release 2.1.0`. If no modifier, auto-detects version type from changelog entries.

---

## Trigger Behaviour Details

### Workflow Triggers

**`cleanup`** — Executes `/prompts/cleanup.md` (11 steps), then automatically chains to `/prompts/archive.md`. Use `cleanup only` modifier to skip the archive phase.

**`continue`** — Reads `/tasks/task-list.md`, picks the first unchecked task by priority, executes it, marks it complete. Loops until session capacity is reached.

**`cleanup and continue`** — Identical to `cleanup`. Exists for discoverability.

**`status`** — Read-only operation. Gathers metrics, task counts, compliance scores, and recent activity. Does not modify any files.

**`changelog`** — Reads recent completed work and adds missing entries to `/CHANGELOG.md` under `[Unreleased]`. Does not create reports or task lists.

**`sitemap`** — Diffs registered routes against SiteMapTemplate. Adds missing pages, removes dead links, updates counts.

**`routes`** — Route integrity audit + inline fix (no report). Use `audit routes` for report variant.

**`process reports`** — Audits `/reports/` directory. Moves misplaced files, renames non-conforming filenames, archives old reports.

### Archive Triggers

All archive triggers follow the same workflow:
1. Read relevant guidelines and definitions.
2. Scan the codebase for violations.
3. Fix violations where possible.
4. Save report to `/reports/YYYY-MM/[audit-name].md`.
5. Create or update a dedicated task list in `/tasks/[audit-name]-task-list.md`.

**`archive`** — Master orchestrator. Runs ALL 5 archive sub-triggers in sequence:

1. `archive prompts` — Classify prompts as reusable or specific
2. `archive reports` — Archive resolved/outdated reports
3. `archive tasks` — Archive completed task lists, clean protected files
4. `archive guidelines` — Archive obsolete/superseded guideline files

After all 5 archives complete, prints a summary dashboard showing pass/fail per archive. Does **not** auto-chain to `process reports` unless explicitly requested via `archive && process reports`.

**`archive prompts`** — Classify prompts as reusable or specific; generalize or archive.

**`archive reports`** — Archive resolved/outdated reports.

**`archive tasks`** — Archive completed task lists, clean protected files.

**`archive guidelines`** — Archive obsolete/superseded guideline files.

### Update Triggers

All update triggers follow the same workflow:
1. Read relevant guidelines and definitions.
2. Scan the codebase for violations.
3. Fix violations where possible.
4. Save report to `/reports/YYYY-MM/[audit-name].md`.
5. Create or update a dedicated task list in `/tasks/[audit-name]-task-list.md`.

**`update`** — Master orchestrator. Runs ALL 10 update sub-triggers in sequence:

1. `update routes` — Sync routes, fix gaps, update route map and SiteMap
2. `update sitemap` — Sync SiteMapTemplate with actual routes
3. `update data` — Migrate hardcoded content to data files — zero hardcoded strings
4. `update guidelines` — Refresh guideline accuracy, frontmatter, and cross-references
5. `update prompts` — Fix prompt frontmatter, references, and environment reminders
6. `update reports` — Organize reports into correct directories and naming
7. `update tasks` — Verify task completion, remove stale tasks, update counts
8. `update status` — Refresh project metrics, route counts, compliance scores
9. `update triggers` — Sync trigger registry with prompt files

After all 10 updates complete, prints a summary dashboard showing pass/fail per update. Does **not** auto-chain to `process reports` unless explicitly requested via `update && process reports`.

**`update routes`** — Sync routes, fix gaps, update route map and SiteMap.

**`update sitemap`** — Sync SiteMapTemplate with actual routes (inline fix, no report).

**`update data`** — Migrate hardcoded content to data files — zero hardcoded strings.

**`update guidelines`** — Refresh guideline accuracy, frontmatter, and cross-references.

**`update prompts`** — Fix prompt frontmatter, references, and environment reminders.

**`update reports`** — Organize reports into correct directories and naming.

**`update tasks`** — Verify task completion, remove stale tasks, update counts.

**`update status`** — Refresh project metrics, route counts, compliance scores.

**`update triggers`** — Sync trigger registry with prompt files.

### Expand Triggers

All expand triggers follow the same workflow:
1. Read relevant guidelines and definitions.
2. Scan the codebase for violations.
3. Fix violations where possible.
4. Save report to `/reports/YYYY-MM/[audit-name].md`.
5. Create or update a dedicated task list in `/tasks/[audit-name]-task-list.md`.

**`expand`** — Master orchestrator. Runs ALL 17 expand sub-triggers in sequence:

1. `expand triggers` — Meta-analysis of trigger registry gaps
2. `expand prompts` — Discover new reusable prompts from chat patterns
3. `expand guidelines` — Identify and fix guideline gaps
4. `expand data` — Discover shared data structures across templates
5. `expand hooks` — Identify missing custom hooks
6. `expand contexts` — Identify missing React contexts
7. `expand blocks` — Discover missing atomic block components
8. `expand components` — Identify duplicated component logic for extraction
9. `expand patterns` — Discover repeated UI sections to extract as patterns
10. `expand templates` — Find missing sections in existing templates
11. `expand pages` — Discover missing pages in the site structure
12. `expand routes` — Analyse navigation flows for orphans and dead-ends
13. `expand functionality` — Discover dead UI and missing interactive features
14. `expand a11y` — Discover progressive accessibility enhancements
15. `expand animations` — Discover animation opportunities for Funky Neon aesthetic
16. `expand webgl` — Recommend new WebGL integrations per page brief
17. `expand seo` — Discover missing meta, schema, and internal linking

After all 17 expands complete, prints a summary dashboard showing pass/fail per expand. Does **not** auto-chain to `process reports` unless explicitly requested via `expand && process reports`.

**`expand prompts`** — Discover new reusable prompts from chat history patterns.

**`expand guidelines`** — Identify and fix guideline gaps and ambiguities.

**`expand data`** — Discover shared data structures (stats blocks, feature lists, testimonials) across templates.

**`expand hooks`** — Identify duplicated hook logic (localStorage, mediaQuery, intersectionObserver, debounce) for extraction into shared hooks.

**`expand contexts`** — Identify missing React contexts (Theme, Navigation, Notification, Modal) based on prop-drilling and cross-component state needs.

**`expand blocks`** — Discover missing atomic block components (StatCounter, BadgeLabel, SkeletonLoader). Hands off to `new block`.

**`expand patterns`** — Discover repeated UI sections to extract as reusable block patterns. Hands off to `new pattern`.

**`expand components`** — Identify duplicated component logic for extraction into shared atomic components. Hands off to `new block`.

**`expand templates`** — Find missing sections in existing templates vs archetype expectations. Hands off to `new template` or `new pattern`.

**`expand pages`** — Discover missing pages in the site structure. Hands off to `new template`.

**`expand routes`** — Analyse navigation flows for orphaned pages, missing breadcrumbs, and UX dead-ends.

**`expand functionality`** — Discover dead UI (buttons/links that do nothing) and missing interactive features.

**`expand a11y`** — Discover progressive accessibility enhancements: skip links, focus traps, aria-live regions, reduced motion fallbacks, keyboard navigation.

**`expand animations`** — Discover pages and components that would benefit from scroll-triggered animations, micro-interactions, and Funky Neon effects. All with `prefers-reduced-motion` fallbacks.

**`expand webgl`** — Review page briefs and recommend new WebGL/canvas integrations with accessibility fallbacks.

**`expand seo`** — Scan templates for missing meta descriptions, Open Graph tags, JSON-LD schema markup, and internal linking opportunities.

**`expand triggers`** — Meta-trigger that analyses the trigger registry for gaps, overlaps, and missing orchestrator coverage.

### Optimise Triggers

All optimise triggers follow the same workflow:
1. Read relevant guidelines and definitions.
2. Scan the codebase for violations.
3. Fix violations where possible.
4. Save report to `/reports/YYYY-MM/[audit-name].md`.
5. Create or update a dedicated task list in `/tasks/[audit-name]-task-list.md`.

**`optimise`** — Master orchestrator. Runs ALL 6 optimise sub-triggers in sequence:

1. `optimise memory` — File splitting, duplicate removal, component consolidation, DRY architecture enforcement
2. `optimise css` — CSS architecture, duplicate removal, logical splits, import optimization
3. `optimise components` — Component consolidation, prop optimization, variant reduction
4. `optimise data` — Data file consolidation, duplicate removal, type safety
5. `optimise imports` — Remove unused imports, consolidate import statements
6. `optimise performance` — Bundle size, lazy loading, render performance, memoization

After all 6 optimises complete, prints a summary dashboard showing pass/fail per optimise. Does **not** auto-chain to `process reports` unless explicitly requested via `optimise && process reports`.

**`optimise memory`** — File splitting, duplicate removal, component consolidation, DRY architecture enforcement.

**`optimise css`** — CSS architecture, duplicate removal, logical splits, import optimization.

**`optimise components`** — Component consolidation, prop optimization, variant reduction.

**`optimise data`** — Data file consolidation, duplicate removal, type safety.

**`optimise imports`** — Remove unused imports, consolidate import statements.

**`optimise performance`** — Bundle size, lazy loading, render performance, memoization.

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
| `cleanup` | Full cleanup + archive |
| `cleanup only` | Cleanup only — skip the archive phase |
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
| 16.0.0 | 2026-03-18 | Added Fix category with 2 triggers (`fix`, `fix titles`). Total 91 → 93 |
| 15.0.0 | 2026-03-18 | Added Optimise category with 6 triggers (memory, css, components, data, imports, performance). Total 83 → 89 |
| 14.0.0 | 2026-03-18 | Added Optimise category with 6 triggers (memory, css, components, data, imports, performance). Total 83 → 89 |
| 13.0.0 | 2026-03-18 | Expanded Expand category from 11 → 18 triggers (added blocks, contexts, hooks, a11y, routes, seo, animations). Total 76 → 83 |
| 12.0.0 | 2026-03-18 | Expanded Expand category from 3 → 11 triggers (added data, patterns, components, templates, pages, functionality, webgl, triggers). Added `new page` scaffold trigger. Scaffold 3 → 4. Total 58 → 76 |
| 11.0.0 | 2026-03-18 | Added 3 new categories: Archive (5 triggers), Update (10 triggers), Expand (3 triggers). 18 new prompt files created. `cleanup` now chains to `archive`. Total 40 → 58 |
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