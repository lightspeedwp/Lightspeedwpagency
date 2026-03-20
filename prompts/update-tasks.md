# Update Tasks

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `update tasks`  
**Repeatable:** Yes  
**Estimated Duration:** 10-15 minutes

---

## Purpose

Ensure all task list files are current, accurate, and properly cross-referenced with reports and completed work.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Verify Completion Status

1. Read all `.md` files in `/tasks/`.
2. For each unchecked task `[ ]`, verify whether the work has actually been completed by checking:
   - `/CHANGELOG.md` for related entries
   - Codebase for the expected files/changes
3. Mark verified-complete tasks as `[x]`.

### Step 2 — Remove Stale Tasks

1. Flag tasks that reference deleted files, removed features, or obsolete initiatives.
2. Remove or mark as cancelled with `~~strikethrough~~`.

### Step 3 — Update Dates and Counts

1. Update `Last Updated` in all task file frontmatter.
2. Recalculate summary counts and percentages in `master-task-list.md`.

### Step 4 — Report

```
## Update Tasks — [Today's Date]

| Action | Count |
|---|---|
| Tasks marked complete | [N] |
| Stale tasks removed | [N] |
| Dates updated | [N] |
```

---

**Prompt Location:** `/prompts/update-tasks.md`  
**Category:** Maintenance  
**Difficulty:** Low  
**Repeatable:** Yes
