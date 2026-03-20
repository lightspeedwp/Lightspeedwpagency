# Expand Pages — Discover Missing Pages

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand pages`  
**Repeatable:** Yes  
**Estimated Duration:** 10-20 minutes

---

## Purpose

Analyse the site structure, navigation, service offerings, and route map to identify pages that should exist but don't. Recommend new pages that would complete the site's content coverage and improve SEO/user journeys.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

**Reference guidelines:**
- `/guidelines/routes.md` — current route map
- `/guidelines/templates/page-archetypes.md` — page type patterns

### Step 1 — Audit Current Page Coverage

1. Read the route map and list all existing pages by category.
2. Read navigation components to find links pointing to non-existent pages.
3. Read data files for services, solutions, or content that references pages not yet built.

### Step 2 — Identify Gaps

Check for missing pages in these categories:

| Category | Expected Pages |
|---|---|
| **Services** | One page per service offering. Check service data for unbuilt pages |
| **Solutions** | Industry/use-case landing pages |
| **Resources** | Blog index, case studies, guides, documentation |
| **Legal** | Privacy policy, terms of service, cookie policy |
| **Utility** | 404, search results, maintenance mode |
| **Dev Tools** | Any dev dashboard pages referenced but not built |

### Step 3 — Recommend New Pages

| Page | Route | Archetype | Data File Exists? | Priority |
|---|---|---|---|---|
| SEO Services | /services/seo | Service Detail | Yes | High |
| Case Studies | /case-studies | Index/Hub | No | Medium |
| Privacy Policy | /privacy | Legal | No | Low |

Each recommendation includes:
- **Page title** and **route path**
- **Page archetype** (from `/guidelines/templates/page-archetypes.md`)
- **Whether a data file** already exists
- **Content brief** — 2-3 sentence description of what the page should contain
- **Priority** — High (linked but missing) / Medium (expected) / Low (nice-to-have)

### Step 4 — User Approval & Handoff to `new template`

Present all recommendations. For each approved page:

1. Add a task to `/tasks/task-list.md`: `Run \`new template\` to scaffold [PageName]Template`.
2. If the user says **continue**, execute `/prompts/new-template.md` for the highest-priority approved page.

This prompt does NOT create pages directly — it discovers and recommends. The `new template` trigger handles scaffolding.

### Step 5 — Report

```
## Expand Pages — [Today's Date]

| Page | Route | Priority | Status |
|---|---|---|---|
| SEO Services | /services/seo | High | Approved — task created |
| Case Studies | /case-studies | Medium | Deferred |

**Totals:** [N] recommended, [N] approved, [N] deferred
```

---

**Prompt Location:** `/prompts/expand-pages.md`  
**Category:** Discovery  
**Difficulty:** Low  
**Repeatable:** Yes
