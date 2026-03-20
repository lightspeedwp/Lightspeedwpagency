# Expand Templates — Discover Template Improvements

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand templates`  
**Repeatable:** Yes  
**Estimated Duration:** 15-25 minutes

---

## Purpose

Analyse existing templates for missing sections, inconsistent structure, and opportunities to add content sections that would improve page completeness. Recommend template expansions that align with the page archetype system.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

**Reference guidelines:**
- `/guidelines/templates/page-archetypes.md` — expected sections per archetype
- `/guidelines/patterns/pattern-catalog.md` — available patterns

### Step 1 — Audit Template Completeness

1. Read all templates in `/src/app/components/templates/`.
2. For each template, identify its **page archetype** (Service Detail, Hub/Index, About, Contact, etc.).
3. Compare the template's sections against the archetype's expected sections.
4. Flag missing sections.

### Step 2 — Identify Inconsistencies

1. Check that all templates of the same archetype have the same section structure.
2. Flag templates that are missing sections their siblings have (e.g., one service page has stats but another doesn't).
3. Check that all templates use the template part architecture (header, hero, footer as single components).

### Step 3 — Recommend Template Expansions

| Template | Archetype | Missing Sections | Priority |
|---|---|---|---|
| WebDesignServiceTemplate | Service Detail | Stats block, Related services | High |
| AboutTemplate | About | Team section, Timeline | Medium |

Each recommendation includes:
- **Which pattern** to use (from pattern catalog, or recommend a new one via `expand patterns`)
- **Data requirements** — what data file updates are needed
- **Content brief** — what the new section should contain

### Step 4 — User Approval & Handoff to `new template` or `new pattern`

Present all recommendations. For each approved expansion:

1. If the section uses an existing pattern: add task to update the template directly.
2. If a new pattern is needed: add task `Run \`new pattern\` to scaffold [pattern-name]`.
3. If the user says **continue**, execute the highest-priority approved task.

### Step 5 — Report

```
## Expand Templates — [Today's Date]

| Template | Missing Sections | Priority | Status |
|---|---|---|---|
| WebDesignService | Stats, Related | High | Approved |
| About | Team, Timeline | Medium | Deferred |

**Totals:** [N] templates audited, [N] expansions recommended, [N] approved
```

---

**Prompt Location:** `/prompts/expand-templates.md`  
**Category:** Discovery  
**Difficulty:** Medium  
**Repeatable:** Yes
