# Expand — Master Orchestrator

**Type:** Orchestrator  
**Version:** 3.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand`  
**Repeatable:** Yes  
**Estimated Duration:** 90-180 minutes

---

## Purpose

Master orchestrator that runs ALL expand sub-triggers to discover improvements across the entire project — from prompt automation to missing pages, patterns, components, hooks, contexts, animations, and interactive features.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

### Execution Sequence

| Step | Trigger | Prompt File | What It Does |
|---|---|---|---|
| 1 | `expand triggers` | `/prompts/expand-triggers.md` | Meta-analysis: discover trigger registry gaps and overlaps |
| 2 | `expand prompts` | `/prompts/expand-prompts.md` | Discover new reusable prompts from chat patterns |
| 3 | `expand guidelines` | `/prompts/expand-guidelines.md` | Identify and fix guideline gaps and ambiguities |
| 4 | `expand data` | `/prompts/expand-data.md` | Discover shared data structures across templates |
| 5 | `expand hooks` | `/prompts/expand-hooks.md` | Identify missing custom hooks (useLocalStorage, etc.) |
| 6 | `expand contexts` | `/prompts/expand-contexts.md` | Identify missing React contexts for cross-component state |
| 7 | `expand blocks` | `/prompts/expand-blocks.md` | Discover missing atomic block components |
| 8 | `expand components` | `/prompts/expand-components.md` | Identify duplicated component logic for extraction |
| 9 | `expand patterns` | `/prompts/expand-patterns.md` | Discover repeated UI sections to extract as patterns |
| 10 | `expand templates` | `/prompts/expand-templates.md` | Find missing sections in existing templates |
| 11 | `expand pages` | `/prompts/expand-pages.md` | Discover missing pages in the site structure |
| 12 | `expand routes` | `/prompts/expand-routes.md` | Analyse navigation flows for orphans, dead-ends, breadcrumbs |
| 13 | `expand functionality` | `/prompts/expand-functionality.md` | Discover dead UI and missing interactive features |
| 14 | `expand a11y` | `/prompts/expand-a11y.md` | Discover accessibility enhancements beyond WCAG compliance |
| 15 | `expand animations` | `/prompts/expand-animations.md` | Discover scroll-triggered, micro-interaction, neon animation opportunities |
| 16 | `expand webgl` | `/prompts/expand-webgl.md` | Recommend new WebGL integrations per page brief |
| 17 | `expand seo` | `/prompts/expand-seo.md` | Discover missing meta, schema, and internal linking |

### Rules

1. Execute each sub-trigger fully before moving to the next.
2. ALL sub-triggers require user approval before making changes.
3. Discovery sub-triggers (`expand pages`, `expand patterns`, `expand templates`, `expand blocks`) hand off to scaffold triggers (`new template`, `new pattern`, `new block`, `new page`) when the user says **continue**.
4. After all approved changes are applied, update `/CHANGELOG.md`.

### Modifiers

| Command | Behaviour |
|---|---|
| `expand` | Run all 17 expand sub-triggers sequentially |
| `expand prompts` | Run only prompt expansion |
| `expand pages, templates, patterns` | Run only the listed sub-triggers (comma-separated) |

### Final Summary

```
## Expand Session — [Today's Date]

| Sub-Trigger | Recommendations | Approved | Deferred |
|---|---|---|---|
| expand triggers | [N] | [N] | [N] |
| expand prompts | [N] | [N] | [N] |
| expand guidelines | [N] | [N] | [N] |
| expand data | [N] | [N] | [N] |
| expand hooks | [N] | [N] | [N] |
| expand contexts | [N] | [N] | [N] |
| expand blocks | [N] | [N] | [N] |
| expand components | [N] | [N] | [N] |
| expand patterns | [N] | [N] | [N] |
| expand templates | [N] | [N] | [N] |
| expand pages | [N] | [N] | [N] |
| expand routes | [N] | [N] | [N] |
| expand functionality | [N] | [N] | [N] |
| expand a11y | [N] | [N] | [N] |
| expand animations | [N] | [N] | [N] |
| expand webgl | [N] | [N] | [N] |
| expand seo | [N] | [N] | [N] |

**Total recommendations:** [N] | **Approved:** [N] | **Tasks created:** [N]
```

---

**Prompt Location:** `/prompts/expand.md`  
**Category:** Workflow  
**Difficulty:** Medium  
**Repeatable:** Yes
