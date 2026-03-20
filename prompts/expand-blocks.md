# Expand Blocks — Discover Missing Atomic Block Components

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand blocks`  
**Repeatable:** Yes  
**Estimated Duration:** 15-25 minutes

---

## Purpose

Same pattern as `expand patterns` but for atomic block components — the smallest reusable units that patterns compose. Identify missing blocks like ProductCard, PriceTag, StarRating, AddToCartButton, StatCounter, BadgeLabel, etc.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes. BEM classes with `.wp-*` prefix.

**Reference:** `/guidelines/components/components-vs-patterns.md`

### Step 1 — Inventory Existing Blocks

1. List all atomic components in `/src/app/components/` (non-template, non-pattern files).
2. Categorise each by type: layout, display, input, feedback, navigation.

### Step 2 — Scan Templates for Inline Blocks

1. Read all templates in `/src/app/components/templates/`.
2. Identify inline UI that should be extracted as blocks:
   - **Display blocks** — stat counters, badges, tags, avatars, icon badges
   - **Interactive blocks** — toggle switches, rating displays, progress bars
   - **Content blocks** — testimonial cards, feature cards, pricing tiers
   - **Feedback blocks** — toast messages, loading skeletons, empty states
   - **Navigation blocks** — breadcrumbs, pagination, back-to-top

### Step 3 — Recommend New Blocks

| Block Name | Category | Inline In | Props | Priority |
|---|---|---|---|---|
| `StatCounter` | Display | 8 templates | value, label, icon, animated | High |
| `BadgeLabel` | Display | 12 templates | text, variant, icon | High |
| `SkeletonLoader` | Feedback | 0 (missing entirely) | width, height, variant | Medium |

### Step 4 — User Approval & Handoff to `new block`

Present recommendations. For each approved block:

1. Add a task to `/tasks/task-list.md`: `Run \`new block\` to scaffold [BlockName]`.
2. If the user says **continue**, execute `/prompts/new-block.md` for the highest-priority block.

### Step 5 — Report

```
## Expand Blocks — [Today's Date]

| Block | Duplications | Priority | Status |
|---|---|---|---|
| StatCounter | 8 templates | High | Approved |
| BadgeLabel | 12 templates | High | Approved |

**Totals:** [N] recommended, [N] approved, [N] deferred
```

---

**Prompt Location:** `/prompts/expand-blocks.md`  
**Category:** Discovery  
**Difficulty:** Low  
**Repeatable:** Yes
