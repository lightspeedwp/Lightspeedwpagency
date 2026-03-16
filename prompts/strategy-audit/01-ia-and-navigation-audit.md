# Prompt 01: Information Architecture and Navigation Audit

**Output:** `/reports/2026-02/strategy-audit/01-ia-and-navigation-audit.md`

## Context

Read these reference files FIRST:
- `/guidelines/strategy/navigation-and-ia-2026.md` — Proposed IA structure
- `/guidelines/strategy/service-architecture-2026.md` — Three-tier service model
- `/guidelines/routes.md` — Current sitemap

## Instructions

Audit the current prototype's information architecture against the proposed 2026 IA structure.

### Step 1: Extract current route structure
Read `/src/app/routes.tsx` completely. List every route path in a table:
| Current Path | Template | Category |
|---|---|---|

### Step 2: Compare against proposed IA
Using `/guidelines/strategy/navigation-and-ia-2026.md`, create a mapping table:
| Proposed URL | Current Equivalent | Status | Action Needed |
|---|---|---|---|
Where Status is: EXISTS / PARTIAL / MISSING / DEPRECATED

### Step 3: Navigation audit
Read `/src/app/components/parts/SiteHeader.tsx` and `/src/app/components/parts/SiteFooter.tsx`.
Compare the current navigation structure against the proposed:
- Primary nav: Work / Solutions / Systems / Insights / About / Contact
- Footer: Company / Systems / Proof / Contact

Document what exists, what's missing, what needs renaming.

### Step 4: URL hierarchy analysis
List all URLs that need to change (current -> proposed) and identify redirect requirements.

### Step 5: Identify new pages needed
List all entirely new pages from the proposed IA that have no current equivalent.

## Report format

```markdown
# IA and Navigation Audit Report
**Date:** [date]
**Auditor:** AI

## Executive Summary
[2-3 sentences]

## Current Route Inventory
[table]

## Proposed vs Current Mapping
[table]

## Navigation Structure Gaps
### Header
### Footer

## New Pages Required
[list]

## URL Redirect Map
[table]

## Priority Actions
1. [highest impact]
2. ...
```