# Housekeeping Rules — Guidelines

**Category:** Development
**Version:** 1.0.0
**Last Updated:** 2026-03-13
**Status:** Active
**Template Used:** _templates/general-template.md

---

## Overview

Defines the exact rules for cleaning up `/tasks/`, `/reports/`, and the project root. These rules are referenced by `/prompts/cleanup.md` and enforced during every cleanup session.

---

## 1. Protected Files (Never Delete)

### Tier 1 — Absolutely Protected

These files must NEVER be deleted, moved, or renamed:

| File | Path | Reason |
|---|---|---|
| `CHANGELOG.md` | `/CHANGELOG.md` | Project history |
| `README.md` | `/README.md` | Project overview |
| `ATTRIBUTIONS.md` | `/ATTRIBUTIONS.md` | License compliance |
| `task-list.md` | `/tasks/task-list.md` | General task tracker |
| `master-task-list.md` | `/tasks/master-task-list.md` | Consolidated view |
| `Guidelines.md` | `/guidelines/Guidelines.md` | Canonical reference |

### Tier 2 — Protected Category (Never Delete, May Update)

| Category | Path Pattern | Rule |
|---|---|---|
| Service templates | `/src/app/components/templates/*Service*.tsx` | NEVER delete, even if unused |
| Service templates | `/src/app/components/templates/*Template.tsx` (service pages) | NEVER delete during consolidation |
| Config files | `/*.json`, `/*.ts`, `/*.mjs` in root | System config — do not remove |
| Figma system | `/src/app/components/figma/*` | Figma Make internal — never touch |

### Tier 3 — Safe to Archive/Delete

| Category | Rule |
|---|---|
| Completed task files | Move to `/tasks/archive/` (not delete) |
| Old reports (>30 days, no refs) | Flag for review, then archive |
| Empty/temp files | Delete |
| Orphaned CSS (confirmed zero importers) | Delete |
| Orphaned data files (confirmed zero importers) | Delete |

---

## 2. Task List Rules

### `/tasks/task-list.md` (Protected)

- Must ALWAYS exist — never delete
- The single general-purpose task tracker
- All new follow-up tasks go here
- Completed tasks: mark `[x]` with date, keep in file
- Periodically archive completed tasks to `/tasks/archive/YYYY-MM-completed-tasks.md`
- Must have a `Last Updated` date in the header

### `/tasks/master-task-list.md` (Protected)

- Consolidated view of ALL task files — read-only summary
- Update the Summary Dashboard table during cleanup
- Recalculate open/done/total counts from source files
- Must have a `Last Updated` date in the header

### Other Task Files in `/tasks/`

- One file per major initiative (e.g., `memory-optimization-tasks.md`)
- When 100% complete → move to `/tasks/archive/`
- The archive directory is `/tasks/archive/` — create if it doesn't exist
- Archived files retain their original name (no renaming needed)

### Archive Rules

```
/tasks/
├── task-list.md              ← PROTECTED, always present
├── master-task-list.md       ← PROTECTED, always present
├── [active-task-file].md     ← Only if has open tasks
└── archive/
    ├── [completed-task-file].md
    └── README.md             ← Optional index of archived files
```

---

## 3. Report Rules

### Naming Convention

All reports MUST follow this format:

```
YYYY-MM-DD-description.md
```

- Date first, always ISO 8601 (`YYYY-MM-DD`)
- Description: lowercase, hyphen-separated
- Example: `2026-03-13-cleanup-session-summary.md`

### Directory Structure

```
/reports/
├── YYYY-MM/                   ← Monthly grouping
│   ├── [category]/            ← Optional sub-category
│   │   └── YYYY-MM-DD-description.md
│   └── YYYY-MM-DD-description.md
└── archive/                   ← For old reports moved during cleanup
    └── YYYY-MM/
```

### Cleanup Rules

| Condition | Action |
|---|---|
| Report in wrong location (root, `/docs/`, `/src/`) | **Move** to `/reports/YYYY-MM/` |
| Report older than 60 days with zero references | **Flag** for review (don't auto-delete) |
| Report filename doesn't match convention | **Rename** to correct format |
| Duplicate report (same content, different names) | **Delete** the duplicate, keep the canonical one |
| Session summaries older than 30 days | **Move** to `/reports/archive/` |

### What Counts as a Report

| IS a Report (goes in `/reports/`) | NOT a Report |
|---|---|
| Audit results | Guidelines (→ `/guidelines/`) |
| Session summaries | Task lists (→ `/tasks/`) |
| Completion reports | Documentation (→ `/docs/`) |
| Analysis findings | Prompt files (→ `/prompts/`) |
| Migration status | Config files (→ root) |

---

## 4. Root Directory Rules

The project root (`/`) may contain ONLY:

| Allowed | Examples |
|---|---|
| Config files | `package.json`, `tsconfig.json`, `vite.config.ts`, `postcss.config.mjs`, `vercel.json` |
| System files | `index.html`, `.gitignore`, `.eslintrc` |
| Protected `.md` files | `README.md`, `CHANGELOG.md`, `ATTRIBUTIONS.md` |

**Everything else must be in its designated folder:**

| Content | Destination |
|---|---|
| Reports | `/reports/` |
| Tasks | `/tasks/` |
| Prompts | `/prompts/` |
| Guidelines | `/guidelines/` |
| Documentation | `/docs/` |
| Scripts | `/scripts/` |
| Source code | `/src/` |

---

## 5. CHANGELOG Rules

- Location: `/CHANGELOG.md` (root) — PROTECTED
- Format: [Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/)
- Versioning: [Semantic Versioning 2.0.0](https://semver.org/)
- New work goes under `## [Unreleased]`
- Entries are concise: 1-2 sentences max
- Categories: Added, Changed, Fixed, Removed, Deprecated, Security
- NEVER delete existing entries
- See `/guidelines/changelog-maintenance.md` for full standards

---

## 6. Cleanup Session Checklist

Use this checklist during every cleanup session:

```markdown
- [ ] Root directory: only config + README + CHANGELOG + ATTRIBUTIONS
- [ ] Zero broken CSS imports
- [ ] Zero broken TSX imports
- [ ] Zero `lucide-react` imports
- [ ] Zero `react-router-dom` imports
- [ ] All templates have routes
- [ ] No dead routes
- [ ] Completed task files archived
- [ ] task-list.md updated with current date
- [ ] master-task-list.md dashboard recalculated
- [ ] Reports in correct locations
- [ ] CHANGELOG updated
- [ ] SiteMap template matches routes
- [ ] DevTools templates show current data
- [ ] Protected files all present
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-13 | Initial creation — consolidated housekeeping rules |
