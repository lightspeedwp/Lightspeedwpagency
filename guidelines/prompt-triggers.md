# Prompt Trigger Words — Guidelines

**Category:** Workflow
**Version:** 1.0.0
**Last Updated:** 2026-03-13
**Status:** Active
**Template Used:** _templates/general-template.md

---

## Overview

This project supports **trigger words** — short commands the user can type instead of pasting full prompts. When the AI sees a trigger word (on its own or as the primary instruction), it MUST read and execute the corresponding prompt file.

---

## Registered Triggers

| Trigger Word | Prompt File | Behaviour |
|---|---|---|
| `cleanup` | `/prompts/cleanup.md` | Run cleanup, then automatically run `/prompts/continue.md` |
| `continue` | `/prompts/continue.md` | Run continue only (standalone) |

### How Triggers Work

**When the user types `cleanup`:**
1. Read and execute `/prompts/cleanup.md` (Steps 1-11)
2. On completion, automatically read and execute `/prompts/continue.md`
3. Both prompts run within the same session

**When the user types `continue`:**
1. Read and execute `/prompts/continue.md` only
2. No cleanup phase — go straight to task execution

**Trigger words are case-insensitive.** `Cleanup`, `CLEANUP`, and `cleanup` all work.

**Trigger words can include modifiers:** e.g., `cleanup only` (skip the continue phase), `continue from Workflow 3` (override task selection).

---

## Environment Reminders

Every prompt execution MUST remember:

1. **This is Figma Make** — not a local dev environment
2. **Never suggest:** browser refresh, cache clearing, `npm run dev`, terminal commands, or restarting servers
3. **All work** is done via the file editing tools available in this environment
4. **Preview updates** happen automatically when files are saved

---

## Design System Compliance (Every Session)

Every prompt execution MUST enforce these rules on all generated/modified UI:

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

## Protected Files (Never Delete)

These files must NEVER be deleted under any circumstances:

| File | Location | Why |
|---|---|---|
| `CHANGELOG.md` | `/CHANGELOG.md` | Project changelog |
| `README.md` | `/README.md` | Project README |
| `ATTRIBUTIONS.md` | `/ATTRIBUTIONS.md` | License attributions |
| `task-list.md` | `/tasks/task-list.md` | General task tracker |
| `master-task-list.md` | `/tasks/master-task-list.md` | Consolidated task view |
| `Guidelines.md` | `/guidelines/Guidelines.md` | Canonical project guidelines |
| All service templates | `/src/app/components/templates/*Service*.tsx` | Service pages are sacrosanct |
| `ImageWithFallback.tsx` | `/src/app/components/figma/ImageWithFallback.tsx` | Figma Make system file |

---

## Adding New Triggers

To register a new trigger word:

1. Create the prompt file in `/prompts/[name].md`
2. Add a row to the "Registered Triggers" table above
3. Document any special behaviour (auto-chains, modifiers)
4. Update this file's version number

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-13 | Initial creation with `cleanup` and `continue` triggers |
