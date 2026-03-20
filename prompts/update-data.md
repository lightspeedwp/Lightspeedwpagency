# Update Data — Migrate Content to Data Files

**Type:** Audit + Fix  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `update data`  
**Repeatable:** Yes  
**Estimated Duration:** 20-40 minutes

---

## Purpose

Audit the codebase to ensure ALL content (text, labels, stats, links, metadata) lives in dedicated data files under `/src/app/data/`. Components MUST dynamically import and render content from data files — zero hardcoded strings in templates or components.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Reference guidelines:**
- `/guidelines/data-files.md` — data file architecture rules
- `/guidelines/Guidelines.md` — design system compliance

### Step 1 — Scan Templates for Hardcoded Content

1. Read all `.tsx` files in `/src/app/components/templates/` and subdirectories.
2. Flag any component that contains hardcoded:
   - Page titles, headings, or descriptions
   - Stats/metrics values
   - Navigation labels or URLs
   - Feature lists, service descriptions, testimonials
   - Any user-facing text that is NOT a structural label (e.g., "Loading..." is OK)

### Step 2 — Scan Components for Hardcoded Content

1. Read all `.tsx` files in `/src/app/components/` (excluding templates).
2. Apply the same hardcoded content checks as Step 1.
3. Shared components (buttons, cards) may have structural labels — these are acceptable.

### Step 3 — Verify Data File Coverage

1. List all files in `/src/app/data/`.
2. For each template, verify a corresponding data file exists.
3. Flag templates without data files.

### Step 4 — Migrate Hardcoded Content

For each flagged component:

1. Create or update the corresponding data file in `/src/app/data/`.
2. Define a TypeScript interface for the data structure.
3. Export the data as a typed constant.
4. Update the component to import and render from the data file.
5. Ensure ALL values (strings, numbers, arrays, objects) come from the data file.

### Step 5 — Report

```
## Update Data — [Today's Date]

| Template/Component | Data File | Status |
|---|---|---|
| HomeTemplate.tsx | home-data.tsx | Already compliant |
| AboutTemplate.tsx | about-data.tsx | Migrated 12 strings |
| ServiceCard.tsx | — | N/A (structural component) |

**Totals:** [N] compliant, [N] migrated, [N] data files created
```

---

**Prompt Location:** `/prompts/update-data.md`  
**Category:** Audit  
**Difficulty:** Medium  
**Repeatable:** Yes
