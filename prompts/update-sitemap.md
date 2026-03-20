# Update Sitemap

**Type:** Maintenance + Fix  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `update sitemap`  
**Repeatable:** Yes  
**Estimated Duration:** 5-10 minutes

---

## Purpose

Sync the SiteMapTemplate component with actual registered routes. This is the fix-oriented variant — it makes changes inline without generating a report. Use `audit sitemap` for the report-generating variant.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

1. Read all route definitions from `/src/app/routes/`.
2. Read `/src/app/components/templates/SiteMapTemplate.tsx`.
3. **Add** pages that exist in routes but are missing from the sitemap.
4. **Remove** pages listed in the sitemap that no longer have routes.
5. Update statistics (page counts, section counts).
6. All styling must use CSS variables — no hardcoded values.

**Output:** `[N] pages added, [N] removed from sitemap` or `Sitemap is current.`

---

**Prompt Location:** `/prompts/update-sitemap.md`  
**Category:** Maintenance  
**Difficulty:** Low  
**Repeatable:** Yes
