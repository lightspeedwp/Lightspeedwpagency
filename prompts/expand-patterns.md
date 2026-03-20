# Expand Patterns — Discover Reusable Block Patterns

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand patterns`  
**Repeatable:** Yes  
**Estimated Duration:** 15-30 minutes

---

## Purpose

Analyse templates for repeated UI sections that could be extracted into reusable WordPress block patterns. Recommend new patterns that would reduce code duplication and strengthen the design system.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Design System Rules:** ALL generated code must use CSS variables from `/src/styles/`. Typography: ONLY `var(--font-primary)` and `var(--font-secondary)`. Icons: `@phosphor-icons/react` only. Zero Tailwind utility classes.

**Reference guidelines:**
- `/guidelines/patterns/pattern-catalog.md` — existing pattern inventory
- `/guidelines/components/components-vs-patterns.md` — pattern vs component rules

### Step 1 — Scan Templates for Repeated Sections

1. Read all template files in `/src/app/components/templates/`.
2. Identify UI sections (hero, CTA, stats, features, testimonials, FAQ, process, team, pricing, contact) that appear in similar form across 2+ templates.
3. Note which templates contain each repeated section.

### Step 2 — Check Against Existing Patterns

1. Read `/guidelines/patterns/pattern-catalog.md`.
2. List all existing patterns.
3. For each repeated section found in Step 1, check if a pattern already exists.

### Step 3 — Recommend New Patterns

For each section that repeats but has no pattern:

| Pattern Name | Type | Used By | Variants Needed | Priority |
|---|---|---|---|---|
| `stats-grid` | Section | Home, About, Services | 2-col, 3-col, 4-col | High |
| `cta-banner` | Section | All service pages | Light, Dark, Neon | High |
| `process-steps` | Section | Services, Solutions | Numbered, Timeline | Medium |

Include for each:
- **Pattern name** (kebab-case)
- **Section type** (hero, body, CTA, footer)
- **Which templates** currently have this inline
- **Variant suggestions** (different layouts or themes)
- **Data structure** — what props/data the pattern needs
- **Priority** — High (3+ templates) / Medium (2 templates) / Low (future-proofing)

### Step 4 — User Approval & Handoff to `new pattern`

Present all recommendations. For each approved pattern:

1. Add it as a task to `/tasks/task-list.md` with the instruction: `Run \`new pattern\` to scaffold [pattern-name]`.
2. If the user says **continue**, execute `/prompts/new-pattern.md` for the highest-priority approved pattern.

This prompt does NOT create patterns directly — it discovers and recommends. The `new pattern` trigger handles scaffolding.

### Step 5 — Report

```
## Expand Patterns — [Today's Date]

| Recommendation | Priority | Status |
|---|---|---|
| stats-grid pattern | High | Approved — task created |
| cta-banner pattern | High | Approved — task created |
| process-steps pattern | Medium | Deferred |

**Totals:** [N] recommended, [N] approved, [N] deferred
```

---

**Prompt Location:** `/prompts/expand-patterns.md`  
**Category:** Discovery  
**Difficulty:** Low  
**Repeatable:** Yes
