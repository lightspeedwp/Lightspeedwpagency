# Prompt 05: Content Gap and Page Inventory Audit

**Output:** `/reports/2026-02/strategy-audit/05-content-gap-and-page-inventory.md`

## Context

Read these reference files FIRST:
- `/guidelines/strategy/content-gap-analysis.md` — Missing pages and clusters
- `/guidelines/strategy/content-strategy-2026.md` — Content strategy
- `/guidelines/strategy/content-audit-live-site.md` — Live site inventory
- `/guidelines/strategy/service-architecture-2026.md` — Three-tier service model

## Instructions

Audit the current prototype content against the strategic content plan.

### Step 1: Full template inventory
List every template in `/src/app/components/templates/` with its route from `routes.tsx`:
| Template File | Route | Page Type | Strategic Category |
|---|---|---|---|

Strategic Categories: Core / Services / Solutions / Portfolio / Blog / Systems / Insights / Utility / Dev-Tools

### Step 2: Missing strategic pages
From the content gap analysis, check which pages are missing:

**Systems hub pages (ALL MISSING in current prototype):**
- [ ] `/systems/` — Systems landing page
- [ ] `/systems/design-tokens-theme-json/` — Token governance
- [ ] `/systems/pattern-library-governance/` — Pattern governance
- [ ] `/systems/editorial-workflow-engineering/` — Editorial workflows
- [ ] `/systems/ai-search-readiness/` — AI search engineering
- [ ] `/systems/performance-reliability/` — Performance engineering

**Missing definitional pages:**
- [ ] Structured publishing systems
- [ ] Design token governance in WordPress
- [ ] Block pattern governance
- [ ] Progressive interactivity in WordPress

**Missing topic clusters:**
- [ ] Publishing systems cluster (content modelling, editorial workflows)
- [ ] Commerce systems cluster (WooCommerce systems, conversion)
- [ ] Design system cluster (Figma-to-theme.json, patterns)

### Step 3: Service to systems mapping
Map current service pages to the proposed three-tier model:
| Current Service Page | Proposed Systems Page | Merge/Split/Rename |
|---|---|---|

### Step 4: Content redundancy check
Identify templates that serve overlapping purposes and could be merged or deprecated.

### Step 5: Data file coverage
Check `/src/app/data/` for data files that support new pages. Identify which data files need to be created.

## Report format

```markdown
# Content Gap and Page Inventory Audit
**Date:** [date]

## Executive Summary

## Complete Template Inventory
[table — all templates]

## Missing Strategic Pages
### Systems Hub (Priority 1)
[checklist]

### Definitional Pages (Priority 2)
[checklist]

### Topic Clusters (Priority 3)
[checklist]

## Service-to-Systems Mapping
[table]

## Redundancies and Deprecations
[list]

## New Data Files Needed
[list]

## Priority Actions
1. [highest impact]
2. ...
```
