# Archive Tasks

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `archive tasks`  
**Repeatable:** Yes — run monthly or during cleanup  
**Estimated Duration:** 5-10 minutes

---

## Purpose

Review all task list files in `/tasks/` and archive completed task lists. The general-purpose `task-list.md` and `master-task-list.md` are never archived — only their completed entries are cleaned up.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Inventory

1. List all `.md` files in `/tasks/` (not subdirectories).
2. For each file, note:
   - **Filename**
   - **Protected?** (`task-list.md` and `master-task-list.md` are protected — never delete or move)
   - **Completion rate** — Count `[x]` vs `[ ]` checkboxes

### Step 2 — Classify

| Status | Criteria | Action |
|---|---|---|
| **Protected** | `task-list.md` or `master-task-list.md` | Clean up completed entries only |
| **Complete** | Named task list where ALL tasks are `[x]` | Move to `/tasks/archive/` |
| **Active** | Named task list with unchecked tasks remaining | Keep in place |
| **Empty** | No tasks or only whitespace | Delete |

### Step 3 — Archive Completed Task Lists

1. Create `/tasks/archive/` directory if it does not exist.
2. Move fully-completed named task lists to `/tasks/archive/`.
3. For protected files (`task-list.md`): remove completed entries older than 30 days to keep the file lean. Add a summary line like `<!-- [N] completed tasks archived 2026-03-18 -->`.

### Step 4 — Report

```
## Archive Tasks — [Today's Date]

| Task File | Tasks (done/total) | Action |
|---|---|---|
| task-list.md | 12/15 | Cleaned (removed 8 old completed) |
| audit-css-task-list.md | 5/5 | Archived |
| routing-task-list.md | 3/7 | Kept (active) |

**Totals:** [N] kept, [N] archived, [N] deleted
```

---

**Prompt Location:** `/prompts/archive-tasks.md`  
**Category:** Maintenance  
**Difficulty:** Low  
**Repeatable:** Yes
