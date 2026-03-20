# Expand Accessibility — Discover Accessibility Enhancements

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand a11y`  
**Repeatable:** Yes  
**Estimated Duration:** 15-25 minutes

---

## Purpose

Go beyond WCAG compliance auditing to recommend progressive accessibility enhancements. Discover missing keyboard navigation patterns, screen reader announcements, focus management for dynamic content, skip links, and other a11y features that would elevate the user experience for assistive technology users.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

**Reference:** `/guidelines/accessibility.md`

### Step 1 — Audit Current Accessibility Features

1. Search for existing a11y implementations:
   - Skip links (`skip-to-content`)
   - Focus trap management (modals, drawers)
   - `aria-live` regions for dynamic content
   - `prefers-reduced-motion` handling
   - Keyboard navigation for custom widgets (tabs, accordions, carousels)
   - Touch target sizes (minimum 44×44px)

### Step 2 — Identify Gaps

| Feature | Expected | Found? | Impact |
|---|---|---|---|
| Skip to main content link | All pages | ? | High |
| Focus trap in modals | Modal components | ? | High |
| `aria-live` for route changes | Router | ? | High |
| Reduced motion fallbacks | All animations/WebGL | ? | High |
| Keyboard nav for tab panels | Tab components | ? | Medium |
| Screen reader-only text | Icons, decorative elements | ? | Medium |
| Focus restoration after modal close | Modal components | ? | Medium |
| Roving tabindex for toolbars | Navigation grids | ? | Low |

### Step 3 — Recommend Enhancements

For each gap, recommend a specific implementation:

| Enhancement | Components Affected | Complexity | Priority |
|---|---|---|---|
| Add skip link to header | Header template part | Low | High |
| Focus trap hook for modals | All modal instances | Medium | High |
| Route change announcer | Router root | Low | High |

### Step 4 — User Approval & Task Creation

Present recommendations. For each approved enhancement, add a task to `/tasks/task-list.md`.

---

**Prompt Location:** `/prompts/expand-a11y.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
