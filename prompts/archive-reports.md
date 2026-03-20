# Archive Reports

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `archive reports`  
**Repeatable:** Yes — run monthly or during cleanup  
**Estimated Duration:** 10-15 minutes

---

## Purpose

Review all report files in `/reports/` and archive or delete reports that are outdated, fully resolved, or no longer actionable.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Inventory

1. List all `.md` files in `/reports/` and its subdirectories (e.g., `/reports/YYYY-MM/`).
2. For each report, note:
   - **Filename** and **date** (from filename prefix or frontmatter)
   - **Associated task list** (if one exists in `/tasks/`)
   - **Status** — Are all findings resolved? Is the report still actionable?

### Step 2 — Classify

| Status | Criteria | Action |
|---|---|---|
| **Keep** | Less than 30 days old AND has unresolved findings | No action |
| **Archive** | All findings resolved, or older than 60 days | Move to `/reports/archive/` |
| **Delete** | Empty, duplicate, or superseded by a newer report on the same topic | Delete the file |

### Step 3 — Archive Reports

1. Create `/reports/archive/` directory if it does not exist.
2. Move archived reports, preserving the date prefix in filenames.
3. If the report has an associated task list where all tasks are `[x]`, archive that task list too (via `archive tasks` logic).

### Step 4 — Report

Output a summary:

```
## Archive Reports — [Today's Date]

| Report File | Age | Status | Action |
|---|---|---|---|
| 2026-03-01-audit-tokens.md | 17 days | All resolved | Archived |
| 2026-03-15-audit-css.md | 3 days | Open findings | Kept |

**Totals:** [N] kept, [N] archived, [N] deleted
```

---

**Prompt Location:** `/prompts/archive-reports.md`  
**Category:** Maintenance  
**Difficulty:** Low  
**Repeatable:** Yes
