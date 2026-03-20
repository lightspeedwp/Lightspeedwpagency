# Expand Triggers — Discover Trigger Registry Gaps

**Type:** Discovery + Recommendation  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `expand triggers`  
**Repeatable:** Yes  
**Estimated Duration:** 10-20 minutes

---

## Purpose

Meta-trigger that analyses the full trigger registry for gaps, overlaps, missing orchestrator coverage, and opportunities for new automation. Ensures every repetitive workflow has a trigger word.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

**Reference:** `/guidelines/prompt-triggers.md`

### Step 1 — Analyse Trigger Coverage

1. Read `/guidelines/prompt-triggers.md` — full registry.
2. Map every trigger to its category (Workflow, Archive, Update, Expand, Audit, Scaffold, Code Quality, Release).
3. Identify categories with fewer than 3 triggers — potential gaps.

### Step 2 — Analyse Orchestrator Coverage

1. For each master orchestrator (`audit`, `archive`, `update`, `expand`, `cleanup`), verify it covers ALL sub-triggers in its category.
2. Flag any sub-triggers not included in their parent orchestrator.
3. Flag any orphan triggers (not in any orchestrator and not standalone workflow).

### Step 3 — Identify Missing Triggers

Based on the project structure and common workflows, recommend triggers for:

- **Unautomated workflows** — tasks the user does manually that could be automated
- **Missing category sub-triggers** — e.g., if `update` has 10 but `expand` only has 3
- **Cross-category orchestrators** — e.g., `full audit && update && archive` mega-workflow
- **Missing scaffold triggers** — e.g., `new page`, `new data`, `new route`

### Step 4 — Detect Overlaps

1. Compare trigger descriptions for overlapping scope.
2. Flag triggers that do the same thing under different names.
3. Recommend consolidation where appropriate.

### Step 5 — Recommendations

| Trigger | Category | Purpose | Priority |
|---|---|---|---|
| `new page` | Scaffold | Scaffold a routed page with template + data + route | High |
| `validate` | Code Quality | Run all validators (imports, types, routes) | Medium |

### Step 6 — User Approval

Present recommendations. Create approved prompt files and register triggers after approval.

---

**Prompt Location:** `/prompts/expand-triggers.md`  
**Category:** Discovery  
**Difficulty:** Low  
**Repeatable:** Yes
