# Prompt 04: Block and Pattern Coverage Audit

**Output:** `/reports/2026-02/strategy-audit/04-block-pattern-coverage-audit.md`

## Context

Read these reference files FIRST:
- `/guidelines/strategy/pattern-library-roadmap.md` — Pattern roadmap
- `/guidelines/strategy/block-theme-architecture.md` — Block architecture baseline
- `/guidelines/patterns/overview-patterns.md` — Current patterns overview

## Instructions

Audit the current block and pattern library against the 2026 roadmap requirements.

### Step 1: Current pattern inventory
List all files in `/src/app/components/patterns/`. For each pattern:
| Pattern Name | File | CSS File Exists | Category |
|---|---|---|---|

### Step 2: Roadmap gap analysis
Compare current patterns against the roadmap phases:

**Foundation patterns needed:**
- Section container
- Proof strip (metrics display)
- CTA band
- Definition block (for Systems pages)
- FAQ block

**Acquisition patterns needed:**
- Landing hero variants
- Comparison table
- Use-case grid
- Case study spotlight

**Publishing patterns needed:**
- Insight listing (query loop)
- Author box
- Related content rail
- Update log block

For each, mark: EXISTS / PARTIAL / MISSING

### Step 3: Pattern governance check
For 10 sample patterns, check:
- Does it have a dedicated CSS file in `/src/styles/patterns/`?
- Does it use BEM naming (`.pattern-name__element--modifier`)?
- Does it use only CSS variables (no hardcoded values)?
- Is it documented in `/guidelines/patterns/`?
- Could it map to a WordPress registered pattern?

### Step 4: New pattern needs for 2026 strategy
Based on the content strategy and service architecture, identify patterns needed that don't exist:
- Proof strip pattern (for homepage metrics)
- System definition pattern (for Systems hub pages)
- Method card pattern (for methodology pages)
- Authority quote pattern (testimonial placement)
- Metric callout pattern (inline proof)
- Case study anatomy pattern (standardised structure)

### Step 5: Block component audit
List all files in `/src/app/components/blocks/`. Check:
- Does each block have a corresponding CSS file?
- Does each block use WordPress-aligned class naming (`.wp-block-*`)?
- Are blocks documented in `/guidelines/blocks/`?

## Report format

```markdown
# Block and Pattern Coverage Audit
**Date:** [date]

## Executive Summary

## Current Pattern Inventory
[table]

## Roadmap Gap Analysis
### Foundation Patterns
[table with status]

### Acquisition Patterns
[table]

### Publishing Patterns
[table]

## Pattern Governance Compliance
| Pattern | CSS File | BEM | Variables | Documented | WP-Ready |
|---|---|---|---|---|---|

## New Patterns Required for 2026
[list with descriptions]

## Block Component Status
[table]

## Priority Actions
1. [highest impact]
2. ...
```
