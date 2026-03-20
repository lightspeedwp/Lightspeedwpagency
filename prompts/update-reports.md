# Update Reports

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `update reports`  
**Repeatable:** Yes  
**Estimated Duration:** 10-15 minutes

---

## Purpose

Ensure all report files follow naming conventions, are in the correct `/reports/YYYY-MM/` subdirectory, and have accurate frontmatter. Cross-reference reports with their associated task lists.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Location Audit

1. Search for `.md` report files outside `/reports/` (root, `/docs/`, `/src/`).
2. Move misplaced reports to `/reports/YYYY-MM/` based on their date.

### Step 2 — Naming Convention

1. Verify all report filenames follow `YYYY-MM-DD-description.md` format.
2. Rename non-conforming files.

### Step 3 — Directory Structure

1. Ensure reports are organized into `/reports/YYYY-MM/` subdirectories.
2. Move reports from `/reports/` root into the correct month subdirectory.

### Step 4 — Task List Cross-Reference

1. For each report, check if an associated task list exists in `/tasks/`.
2. Flag reports that generated findings but have no task list.

### Step 5 — Report

```
## Update Reports — [Today's Date]

| Action | Count |
|---|---|
| Reports moved | [N] |
| Reports renamed | [N] |
| Missing task lists flagged | [N] |
```

---

**Prompt Location:** `/prompts/update-reports.md`  
**Category:** Maintenance  
**Difficulty:** Low  
**Repeatable:** Yes
