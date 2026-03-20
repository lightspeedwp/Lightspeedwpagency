# Expand Components — Discover Shared Atomic Components

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand components`  
**Repeatable:** Yes  
**Estimated Duration:** 15-30 minutes

---

## Purpose

Identify duplicated component logic across templates and recommend new shared atomic components. Reduce code duplication by extracting common UI elements (stat cards, icon badges, section headers, etc.) into reusable components.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

**Reference:** `/guidelines/components/components-vs-patterns.md`

### Step 1 — Scan for Duplicated UI Elements

1. Read all `.tsx` files in `/src/app/components/` (including templates).
2. Identify UI elements that are duplicated (copy-pasted or near-identical) across 2+ files:
   - **Stat cards** — number + label + icon + optional trend
   - **Section headers** — H2 + subtitle + optional decorator
   - **Icon badges** — icon in a styled container
   - **Tag/chip lists** — array of labels with styling
   - **CTA buttons** — styled link/button with arrow or icon
   - **Card components** — image + title + description + link
   - **Loading states** — skeleton screens, spinners
   - **Empty states** — icon + message + action

### Step 2 — Check Against Existing Components

1. List all existing shared components in `/src/app/components/` (non-template files).
2. For each duplicated element, check if a shared component already exists but is not being used.

### Step 3 — Recommend New Components

| Component Name | Type | Duplicated In | Props | Priority |
|---|---|---|---|---|
| `StatCard` | Atomic | 8 templates | value, label, icon, trend | High |
| `SectionHeader` | Atomic | 12 templates | title, subtitle, alignment | High |
| `IconBadge` | Atomic | 6 templates | icon, size, variant | Medium |

### Step 4 — User Approval & Handoff to `new block`

Present all recommendations. For each approved component:

1. Add a task to `/tasks/task-list.md`: `Run \`new block\` to scaffold [ComponentName]`.
2. If the user says **continue**, execute `/prompts/new-block.md` for the highest-priority approved component.

### Step 5 — Report

```
## Expand Components — [Today's Date]

| Component | Duplications Found | Priority | Status |
|---|---|---|---|
| StatCard | 8 templates | High | Approved |
| SectionHeader | 12 templates | High | Approved |

**Totals:** [N] recommended, [N] approved, [N] deferred
```

---

**Prompt Location:** `/prompts/expand-components.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
