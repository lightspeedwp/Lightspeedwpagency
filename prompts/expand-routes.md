# Expand Routes — Discover Navigation Flow Gaps

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand routes`  
**Repeatable:** Yes  
**Estimated Duration:** 10-20 minutes

---

## Purpose

Analyse navigation flows for orphaned pages (no inbound links), missing breadcrumbs, UX dead-ends (pages with no onward navigation), and opportunities to improve the user journey through better internal linking.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Reference:** `/guidelines/routes.md`

### Step 1 — Build Link Graph

1. Read all route definitions to build the complete route list.
2. Scan all templates and components for `<Link>` and `<a>` tags.
3. Build a directed graph: which pages link to which other pages.

### Step 2 — Identify Orphaned Pages

Pages with routes but **zero inbound links** from any other page or navigation component:

| Page | Route | Inbound Links | Issue |
|---|---|---|---|
| SEO Services | /services/seo | 0 | Orphaned — no page links here |

### Step 3 — Identify Dead-End Pages

Pages with **zero outbound navigation** (no CTA, no related links, no "back" link):

| Page | Route | Outbound Links | Issue |
|---|---|---|---|
| Privacy Policy | /privacy | 0 | Dead end — no onward navigation |

### Step 4 — Identify Missing Breadcrumbs

Pages deeper than 1 level that lack breadcrumb navigation:

| Page | Route | Depth | Has Breadcrumbs? |
|---|---|---|---|
| WordPress Design | /services/wordpress-design | 2 | No |

### Step 5 — Recommend Improvements

| Improvement | Pages Affected | Complexity | Priority |
|---|---|---|---|
| Add to Services hub navigation | 3 orphaned service pages | Low | High |
| Add related services CTA | 8 service detail pages | Low | Medium |
| Add breadcrumb component | All depth-2+ pages | Medium | Medium |

### Step 6 — User Approval & Task Creation

Present recommendations. Add approved items to `/tasks/task-list.md`.

---

**Prompt Location:** `/prompts/expand-routes.md`  
**Category:** Discovery  
**Difficulty:** Low  
**Repeatable:** Yes
