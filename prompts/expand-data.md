# Expand Data — Discover Shared Data Structures

**Type:** Discovery + Creation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand data`  
**Repeatable:** Yes  
**Estimated Duration:** 15-30 minutes

---

## Purpose

Scan templates and components for content patterns that could benefit from shared, reusable data structures. Identify stats blocks, testimonials, feature lists, pricing tables, and other repeating content shapes that should be extracted into typed, shared data interfaces.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

**Reference:** `/guidelines/data-files.md`

### Step 1 — Scan for Repeating Content Shapes

1. Read all data files in `/src/app/data/`.
2. Read all template files in `/src/app/components/templates/`.
3. Identify content patterns that repeat across 2+ templates:
   - **Stats blocks** — numeric metrics with labels and icons
   - **Feature lists** — title + description + icon arrays
   - **Testimonials** — quote + author + role + avatar
   - **Pricing/plans** — tier name + price + features + CTA
   - **Team members** — name + role + bio + image
   - **FAQ sections** — question + answer pairs
   - **Timeline/process** — step number + title + description
   - **Card grids** — title + description + image + link

### Step 2 — Identify Missing Shared Interfaces

1. For each repeating pattern, check if a shared TypeScript interface exists.
2. Check if templates define their own local types instead of importing shared ones.
3. Flag duplicate type definitions that could be consolidated.

### Step 3 — Recommend New Data Structures

Present recommendations in this format:

| Interface Name | Used By (Templates) | Fields | Exists? |
|---|---|---|---|
| `StatsBlock` | Home, About, Services | label, value, icon, trend | No |
| `FeatureItem` | Services, Solutions | title, description, icon | Partial |
| `Testimonial` | Home, About | quote, author, role, avatar | No |

### Step 4 — User Approval

Present all recommendations. Only create data files and interfaces after user approval.

### Step 5 — Create Approved Structures

For each approved recommendation:

1. Create or update the shared interface in `/src/app/data/shared-types.ts` (or a dedicated types file).
2. Create a shared data file if the content is reused across templates.
3. Update templates to import and use the shared types/data.
4. Update `/CHANGELOG.md`.

---

**Prompt Location:** `/prompts/expand-data.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
