# Archive Guidelines

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `archive guidelines`  
**Repeatable:** Yes — run quarterly or during cleanup  
**Estimated Duration:** 10-15 minutes

---

## Purpose

Review all guideline files in `/guidelines/` and its subdirectories. Archive guidelines that are obsolete, superseded, or no longer relevant to the current codebase. Identify guidelines that could be consolidated.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Inventory

1. List all `.md` files in `/guidelines/` and all subdirectories recursively.
2. For each guideline, note:
   - **Filename** and **path**
   - **Status** (from frontmatter — Active, Deprecated, Draft)
   - **Last Updated** date
   - **Referenced by** — Is it linked from `Guidelines.md` or other active files?
   - **Protected?** — `Guidelines.md` is always protected.

### Step 2 — Classify

| Status | Criteria | Action |
|---|---|---|
| **Keep** | Active, referenced, content matches codebase | No action |
| **Update** | Active but content is outdated or inaccurate | Flag for `update guidelines` |
| **Consolidate** | Overlaps significantly with another guideline | Merge into the primary file, archive the duplicate |
| **Archive** | Deprecated, unreferenced, or describes features/patterns no longer in use | Move to `/guidelines/archive/` |
| **Delete** | Empty or exact duplicate | Delete |

### Step 3 — Archive

1. Create `/guidelines/archive/` directory if it does not exist.
2. Move archived guidelines to `/guidelines/archive/`.
3. Remove references to archived files from `Guidelines.md` and other active guidelines.
4. Update any cross-reference links in remaining files.

### Step 4 — Report

```
## Archive Guidelines — [Today's Date]

| Guideline File | Status | Action |
|---|---|---|
| old-pattern.md | Unreferenced | Archived |
| spacing-v1.md | Superseded by spacing.md | Deleted (duplicate) |
| typography.md | Active | Kept |

**Totals:** [N] kept, [N] flagged for update, [N] consolidated, [N] archived, [N] deleted
```

Add follow-up items to `/tasks/task-list.md`.

---

**Prompt Location:** `/prompts/archive-guidelines.md`  
**Category:** Maintenance  
**Difficulty:** Low  
**Repeatable:** Yes
