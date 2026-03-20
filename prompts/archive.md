# Archive — Master Orchestrator

**Type:** Orchestrator  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `archive`  
**Repeatable:** Yes — run monthly or during cleanup  
**Estimated Duration:** 30-60 minutes

---

## Purpose

Master orchestrator that runs ALL archive sub-triggers sequentially to clean up completed, outdated, and specific-use files across the entire project.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

Execute the following archive sub-triggers **in order**:

### Execution Sequence

| Step | Trigger | Prompt File | What It Does |
|---|---|---|---|
| 1 | `archive tasks` | `/prompts/archive-tasks.md` | Archive completed task lists, clean up protected task files |
| 2 | `archive reports` | `/prompts/archive-reports.md` | Archive resolved/old reports |
| 3 | `archive prompts` | `/prompts/archive-prompts.md` | Classify, generalize, or archive prompts |
| 4 | `archive guidelines` | `/prompts/archive-guidelines.md` | Archive obsolete/superseded guidelines |

### Rules

1. Execute each sub-trigger fully before moving to the next.
2. If a sub-trigger creates new tasks, add them to `/tasks/task-list.md`.
3. After all 4 sub-triggers complete, update `/CHANGELOG.md` with a summary entry.

### Final Summary

After all sub-triggers complete, output a combined summary:

```
## Archive Session — [Today's Date]

| Category | Kept | Archived | Deleted | Generalized |
|---|---|---|---|---|
| Tasks | [N] | [N] | [N] | — |
| Reports | [N] | [N] | [N] | — |
| Prompts | [N] | [N] | [N] | [N] |
| Guidelines | [N] | [N] | [N] | — |

**Total files processed:** [N]
```

---

**Prompt Location:** `/prompts/archive.md`  
**Category:** Workflow  
**Difficulty:** Medium  
**Repeatable:** Yes
