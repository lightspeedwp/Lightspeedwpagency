# Expand WebGL — Discover New WebGL Integrations

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand webgl`  
**Repeatable:** Yes  
**Estimated Duration:** 15-25 minutes

---

## Purpose

Review page briefs, template content, and the Funky Neon aesthetic to recommend new WebGL/canvas integrations. Each recommendation should enhance the page's storytelling without compromising performance or accessibility.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

**Reference guidelines:**
- `/guidelines/performance.md` — performance budgets
- `/guidelines/accessibility.md` — reduced motion, fallbacks

### Step 1 — Inventory Existing WebGL

1. Search for canvas/WebGL usage across all templates.
2. List which pages already have WebGL integrations and what type.

### Step 2 — Review Pages Without WebGL

1. Read templates that do NOT have WebGL integrations.
2. For each, assess whether a WebGL element would enhance the page based on:
   - **Page purpose** — does the content benefit from visual storytelling?
   - **Funky Neon aesthetic** — does it fit the design language?
   - **Performance budget** — would adding WebGL exceed limits?
   - **Accessibility** — can it gracefully degrade with `prefers-reduced-motion`?

### Step 3 — Recommend WebGL Integrations

| Page | Integration Type | Description | Complexity | Priority |
|---|---|---|---|---|
| Services Hub | Particle field | Interactive particle network behind hero | Medium | High |
| About | Morphing shapes | Organic blob animation with neon glow | Low | Medium |
| Contact | Wave animation | Neon sine wave footer decoration | Low | Low |

Each recommendation must include:
- **Fallback** — what displays when WebGL is unavailable or motion is reduced
- **Performance impact** — estimated FPS, GPU usage
- **Data-driven** — should animation parameters come from a data file?

### Step 4 — User Approval

Present recommendations. Only proceed with implementation after approval. Add approved items as tasks to `/tasks/task-list.md`.

---

**Prompt Location:** `/prompts/expand-webgl.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
