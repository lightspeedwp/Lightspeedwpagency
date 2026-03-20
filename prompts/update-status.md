# Update Status

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `update status`  
**Repeatable:** Yes  
**Estimated Duration:** 5-10 minutes

---

## Purpose

Refresh all project status indicators — implementation status, route counts, template counts, compliance scores — to reflect the current state of the codebase.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Step 1 — Count Routes and Templates

1. Count all route definitions across `/src/app/routes/`.
2. Count all template files in `/src/app/components/templates/`.
3. Update counts in `Guidelines.md` footer, `README.md`, and status-related templates.

### Step 2 — Update Implementation Status

1. Read `/docs/implementation-status.md`.
2. Verify milestone percentages against actual codebase state.
3. Update percentages and dates.

### Step 3 — Compliance Scores

1. Spot-check 10 random templates for CSS variable compliance (zero hardcoded values).
2. Spot-check 10 random templates for Phosphor icon compliance (zero Lucide imports).
3. Record pass rates.

### Step 4 — Report

```
## Update Status — [Today's Date]

| Metric | Value |
|---|---|
| Total routes | [N] |
| Total templates | [N] |
| CSS variable compliance | [N]% |
| Phosphor icon compliance | [N]% |
| Implementation status updated | Yes/No |
```

---

**Prompt Location:** `/prompts/update-status.md`  
**Category:** Maintenance  
**Difficulty:** Low  
**Repeatable:** Yes
