# Expand Animations — Discover Animation Opportunities

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand animations`  
**Repeatable:** Yes  
**Estimated Duration:** 15-25 minutes

---

## Purpose

Discover pages and components that would benefit from scroll-triggered animations, micro-interactions, CSS transitions, or entrance effects aligned with the Funky Neon aesthetic. All recommendations must respect `prefers-reduced-motion` and use CSS variables for timing/easing.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL animation timing and easing must use CSS variables. All animations must have `prefers-reduced-motion` fallbacks. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

**Reference guidelines:**
- `/guidelines/accessibility.md` — reduced motion requirements
- `/guidelines/performance.md` — animation performance budgets

### Step 1 — Inventory Existing Animations

1. Search for CSS `@keyframes`, `transition`, `animation` properties.
2. Search for Motion/Framer Motion usage in components.
3. Search for WebGL/canvas animations.
4. List which pages have animations and which are static.

### Step 2 — Identify Animation Opportunities

For static pages and components, recommend animations that fit the Funky Neon aesthetic:

| Type | Description | Use Cases |
|---|---|---|
| **Scroll-triggered** | Fade in, slide up, scale on scroll into view | Stats, features, testimonials |
| **Micro-interactions** | Hover glow, button press, icon bounce | CTAs, cards, navigation |
| **Entrance effects** | Staggered reveal, typewriter, neon flicker | Hero sections, headings |
| **Loading states** | Skeleton pulse, neon shimmer | Data-heavy sections |
| **Neon effects** | Glow pulse, text shadow animation, border glow | Accent elements, badges |

### Step 3 — Recommend Animations

| Page/Component | Animation Type | Description | Complexity | Priority |
|---|---|---|---|---|
| Stats blocks | Scroll-triggered | Counter animation on scroll into view | Low | High |
| Hero sections | Entrance | Staggered heading + subtitle reveal | Low | High |
| Service cards | Micro-interaction | Neon border glow on hover | Low | Medium |
| CTA buttons | Micro-interaction | Subtle scale + glow on hover/focus | Low | Medium |

Each recommendation must specify:
- **Reduced motion fallback** — what happens with `prefers-reduced-motion: reduce`
- **Performance impact** — CSS-only vs JS-required, GPU-accelerated properties only
- **Design token usage** — which CSS variables for timing/easing

### Step 4 — User Approval & Task Creation

Present recommendations. Add approved items to `/tasks/task-list.md`.

---

**Prompt Location:** `/prompts/expand-animations.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
