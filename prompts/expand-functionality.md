# Expand Functionality — Discover Missing Interactive Features

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand functionality`  
**Repeatable:** Yes  
**Estimated Duration:** 15-25 minutes

---

## Purpose

Scan existing templates and pages for dead UI (buttons/links that don't work), missing interactive features, and opportunities to add meaningful interactivity. Recommend enhancements that improve user engagement without scope creep.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

**Reference:** `/guidelines/accessibility.md` — all interactive elements must be keyboard accessible.

### Step 1 — Identify Dead UI

1. Scan templates for buttons, links, and interactive elements that have no `onClick`, no `href`, or point to `#`.
2. Flag forms with no submit handler.
3. Flag toggles, tabs, or accordions with no state management.

### Step 2 — Identify Missing Features

Based on page type and content, recommend features that are expected but missing:

| Page Type | Expected Features |
|---|---|
| Service pages | Contact CTA, related services, stats animation |
| Portfolio/case study | Image gallery, before/after, testimonials |
| About | Team section interactivity, timeline |
| Contact | Form validation, success/error states |
| Hub/index pages | Filtering, search, category navigation |

### Step 3 — Recommend Enhancements

| Page | Feature | Description | Complexity | Priority |
|---|---|---|---|---|
| Services Hub | Category filter | Filter services by category with animated transitions | Medium | High |
| Home | Stats counter | Animated number counting on scroll into view | Low | Medium |

### Step 4 — User Approval & Task Creation

Present recommendations. For each approved enhancement, add a task to `/tasks/task-list.md`.

---

**Prompt Location:** `/prompts/expand-functionality.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
