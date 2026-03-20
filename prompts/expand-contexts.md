# Expand Contexts — Discover Missing React Contexts

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand contexts`  
**Repeatable:** Yes  
**Estimated Duration:** 10-20 minutes

---

## Purpose

Analyse which React contexts are missing based on functionality gaps, prop-drilling patterns, and cross-component state needs. Recommend new contexts that would simplify state management and reduce component coupling.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

### Step 1 — Inventory Existing Contexts

1. Search for `createContext` across the codebase.
2. List all existing context providers, what state they manage, and which components consume them.

### Step 2 — Detect Prop Drilling

1. Scan components for props passed through 3+ levels without being used at intermediate levels.
2. Identify state that is duplicated across sibling components (could be lifted to context).

### Step 3 — Identify Missing Contexts

Based on the site's functionality and common patterns:

| Context | Purpose | Consumers | Priority |
|---|---|---|---|
| `ThemeContext` | Light/dark mode toggle | All components | High |
| `NavigationContext` | Current section, breadcrumbs, mobile menu state | Header, Sidebar, Breadcrumbs | High |
| `NotificationContext` | Toast/alert state management | Any component triggering feedback | Medium |
| `ModalContext` | Centralised modal state | Any component opening modals | Medium |
| `FormContext` | Multi-step form state | Contact, quote request forms | Low |

### Step 4 — User Approval

Present recommendations. For each approved context, add a task to `/tasks/task-list.md` and create the context file upon approval.

### Step 5 — Report

```
## Expand Contexts — [Today's Date]

| Context | Priority | Status |
|---|---|---|
| ThemeContext | High | Approved |
| NavigationContext | High | Deferred |

**Totals:** [N] recommended, [N] approved, [N] deferred
```

---

**Prompt Location:** `/prompts/expand-contexts.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
