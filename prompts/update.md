# Update — Master Orchestrator

**Type:** Orchestrator  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `update`  
**Repeatable:** Yes  
**Estimated Duration:** 60-90 minutes

---

## Purpose

Master orchestrator that runs ALL update sub-triggers sequentially to refresh, sync, and correct all project metadata, content, and configuration.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

Execute the following update sub-triggers **in order**:

### Execution Sequence

| Step | Trigger | Prompt File | What It Does |
|---|---|---|---|
| 1 | `update routes` | `/prompts/update-routes.md` | Sync routes, fix gaps, update route map |
| 2 | `update sitemap` | `/prompts/update-sitemap.md` | Sync SiteMapTemplate with routes |
| 3 | `update data` | `/prompts/update-data.md` | Migrate hardcoded content to data files |
| 4 | `update guidelines` | `/prompts/update-guidelines.md` | Refresh guideline accuracy and frontmatter |
| 5 | `update prompts` | `/prompts/update-prompts.md` | Fix prompt frontmatter and references |
| 6 | `update reports` | `/prompts/update-reports.md` | Organize and name reports correctly |
| 7 | `update tasks` | `/prompts/update-tasks.md` | Verify task completion, remove stale tasks |
| 8 | `update status` | `/prompts/update-status.md` | Refresh project metrics and compliance scores |
| 9 | `update triggers` | `/prompts/update-triggers.md` | Sync trigger registry with prompt files |

### Rules

1. Execute each sub-trigger fully before moving to the next.
2. If a sub-trigger finds issues it cannot fix, add them to `/tasks/task-list.md`.
3. After all sub-triggers complete, update `/CHANGELOG.md` with a summary entry.

### Modifiers

| Command | Behaviour |
|---|---|
| `update` | Run all 9 sub-triggers sequentially |
| `update routes, sitemap` | Run only the listed sub-triggers (comma-separated) |

### Final Summary

```
## Update Session — [Today's Date]

| Sub-Trigger | Status | Issues Fixed | Issues Remaining |
|---|---|---|---|
| update routes | Complete | [N] | [N] |
| update sitemap | Complete | [N] | [N] |
| update data | Complete | [N] | [N] |
| update guidelines | Complete | [N] | [N] |
| update prompts | Complete | [N] | [N] |
| update reports | Complete | [N] | [N] |
| update tasks | Complete | [N] | [N] |
| update status | Complete | [N] | [N] |
| update triggers | Complete | [N] | [N] |

**Total issues fixed:** [N]
```

---

**Prompt Location:** `/prompts/update.md`  
**Category:** Workflow  
**Difficulty:** Medium  
**Repeatable:** Yes
