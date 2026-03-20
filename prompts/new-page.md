# New Page — Scaffold a Routed Page

**Type:** Scaffold  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `new page`  
**Repeatable:** Yes  
**Estimated Duration:** 10-20 minutes

---

## Purpose

Scaffold a complete routed page including template component, data file, CSS file, and route registration. This is a higher-level scaffold than `new template` — it creates the full page stack in one go.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes. All classes use `.wp-*` BEM prefix.

**Reference guidelines:**
- `/guidelines/templates/page-archetypes.md` — page type patterns
- `/guidelines/patterns/pattern-catalog.md` — available patterns
- `/guidelines/data-files.md` — data file architecture
- `/guidelines/routes.md` — route registration

### Step 1 — Gather Requirements

The user must provide (or the AI infers from context):
- **Page name** (e.g., "SEO Services")
- **Route path** (e.g., `/services/seo`)
- **Page archetype** (e.g., Service Detail, Hub, About, Legal)

### Step 2 — Create Data File

1. Create `/src/app/data/[page-name]-data.tsx` with typed interface and exported data.
2. ALL content (titles, descriptions, stats, features) must be in the data file.
3. Zero hardcoded strings in the template.

### Step 3 — Create Template Component

1. Create `/src/app/components/templates/[PageName]Template.tsx`.
2. Import data from the data file.
3. Use template part architecture (header, hero, footer as single components).
4. Use patterns from the pattern catalog where available.
5. All styling via CSS variables. BEM classes with `.wp-*` prefix.

### Step 4 — Create CSS File

1. Create `/src/styles/templates/[page-name].css` with CSS variables only.
2. Register the CSS import in `/src/styles/index.css`.

### Step 5 — Register Route

1. Add the route to the appropriate route file in `/src/app/routes/`.
2. Update SiteMapTemplate with the new page.
3. Update route map data file.

### Step 6 — Update CHANGELOG

Add an entry under `[Unreleased]` → `Added`.

---

**Prompt Location:** `/prompts/new-page.md`  
**Category:** Scaffold  
**Difficulty:** Medium  
**Repeatable:** Yes
