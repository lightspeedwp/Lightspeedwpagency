# Update Routes

**Type:** Maintenance + Fix  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `update routes`  
**Repeatable:** Yes  
**Estimated Duration:** 10-15 minutes

---

## Purpose

Ensure the route map, route files, and SiteMapTemplate are all in sync. Add missing routes, remove dead routes, and update the route map data file.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Reference:** `/guidelines/routes.md`

### Step 1 — Route Inventory

1. List all `.tsx` template files in `/src/app/components/templates/`.
2. Read all route definition files in `/src/app/routes/`.
3. Build a complete map of: template file → route path → route file.

### Step 2 — Fix Gaps

1. **Missing routes:** Templates with no route → add to the appropriate route file.
2. **Dead routes:** Routes pointing to missing templates → remove.
3. **Duplicate routes:** Multiple routes to the same template → consolidate.

### Step 3 — Update Route Map

1. Update `/src/app/data/route-map.ts` (or equivalent) with current routes.
2. Ensure all route metadata (title, category, description) is populated.

### Step 4 — Sync SiteMapTemplate

1. Update SiteMapTemplate to reflect the current route list.
2. Update page counts and section counts.

### Step 5 — Report

```
## Update Routes — [Today's Date]

| Action | Count |
|---|---|
| Routes added | [N] |
| Dead routes removed | [N] |
| Route map updated | Yes/No |
| SiteMap synced | Yes/No |
```

---

**Prompt Location:** `/prompts/update-routes.md`  
**Category:** Maintenance  
**Difficulty:** Medium  
**Repeatable:** Yes
