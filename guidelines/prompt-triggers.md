# Prompt Trigger Words — Registry

**Category:** Workflow  
**Version:** 4.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Overview

This project supports **trigger words** — short commands the user types instead of pasting full prompts. When the AI sees a trigger word (on its own or as the primary instruction), the AI MUST read and execute the corresponding prompt file.

**Trigger words are case-insensitive.** `Cleanup`, `CLEANUP`, and `cleanup` all work.

---

## Registered Triggers (20 Total)

### Workflow Triggers (7)

| Trigger | Prompt File | Description |
|---|---|---|
| `cleanup` | `/prompts/cleanup.md` | Full 11-step audit + fix, then auto-runs `continue` |
| `continue` | `/prompts/continue.md` | Pick up next open task from `/tasks/task-list.md` |
| `cleanup and continue` | `/prompts/cleanup.md` → `/prompts/continue.md` | Alias for `cleanup` (identical behavior) |
| `status` | `/prompts/status.md` | Read-only project health dashboard |
| `changelog` | `/prompts/changelog.md` | Update CHANGELOG with undocumented recent work |
| `sitemap` | `/prompts/sitemap.md` | Sync SiteMapTemplate with actual routes |
| `process reports` | `/prompts/process-reports.md` | Organize, rename, and archive reports |

### Audit Triggers (7)

| Trigger | Prompt File | Description |
|---|---|---|
| `audit tokens` | `/prompts/audit-tokens.md` | CSS variable compliance (zero hardcoded values) |
| `audit css` | `/prompts/audit-css.md` | CSS architecture (imports, orphans, file sizes) |
| `audit a11y` | `/prompts/audit-a11y.md` | WCAG 2.1 AA accessibility compliance |
| `audit data` | `/prompts/audit-data.md` | Data file architecture (orphans, duplicates, types) |
| `audit responsive` | `/prompts/audit-responsive.md` | Responsive design (breakpoints, mobile, touch) |
| `audit styles` | `/prompts/audit-styles.md` | Comprehensive styling audit (tokens + CSS + classes) |
| `audit guidelines` | `/prompts/audit-guidelines.md` | Guideline file standards (frontmatter, headings, size) |

### Scaffold Triggers (3)

| Trigger | Prompt File | Description |
|---|---|---|
| `new template` | `/prompts/new-template.md` | Scaffold a page template from patterns |
| `new pattern` | `/prompts/new-pattern.md` | Scaffold a reusable block pattern |
| `new block` | `/prompts/new-block.md` | Scaffold an atomic block component |

### Guidelines Triggers (2)

| Trigger | Prompt File | Description |
|---|---|---|
| `update guidelines` | `/prompts/update-guidelines.md` | Update content accuracy, frontmatter, template compliance |
| `cleanup guidelines` | `/prompts/cleanup-guidelines.md` | Merge duplicates, deprecate outdated, restructure |

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

**`process reports`** — Audits `/reports/` directory. Moves misplaced files, renames non-conforming filenames, archives old reports.

### Audit Triggers

All audit triggers follow the same workflow:
1. Read relevant guidelines and definitions.
2. Scan the codebase for violations.
3. Fix violations where possible.
4. Save report to `/reports/YYYY-MM/[audit-name].md`.
5. Add remaining issues to `/tasks/task-list.md`.

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
| `cleanup` | Full cleanup + continue |
| `cleanup only` | Cleanup only — skip the continue phase |
| `continue` | Next open task |
| `continue from P2.3` | Override task selection — start from specific task ID |
| `release patch` | Patch version bump (x.y.Z) |
| `release minor` | Minor version bump (x.Y.0) |
| `release major` | Major version bump (X.0.0) |
| `release 2.1.0` | Specific version number |

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
| 4.0.0 | 2026-03-15 | Expanded from 4 → 20 triggers. Added 5 workflow, 7 audit, 3 scaffold, 1 release. Full behaviour details and modifier docs |
| 3.0.0 | 2026-03-15 | Added `update guidelines` and `cleanup guidelines` triggers |
| 2.0.0 | 2026-03-15 | Added modifier syntax, prompt workflow reminder, expanded environment rules |
| 1.0.0 | 2026-03-13 | Initial creation with `cleanup` and `continue` triggers |
