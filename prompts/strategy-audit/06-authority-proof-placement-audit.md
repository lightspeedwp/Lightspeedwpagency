# Prompt 06: Authority and Proof Placement Audit

**Output:** `/reports/2026-02/strategy-audit/06-authority-proof-placement-audit.md`

## Context

Read these reference files FIRST:
- `/guidelines/strategy/authority-proof-framework.md` — Proof categories and placement
- `/guidelines/strategy/content-strategy-2026.md` — Conversion architecture

## Instructions

Audit proof placement, CTA architecture, and conversion paths across the prototype.

### Step 1: Homepage conversion path
Read `/src/app/components/templates/FrontPageTemplate.tsx`. Document:
- Hero section: headline, subtitle, CTAs
- Where is the first proof element? (metrics, testimonial, case study)
- Is proof in the first viewport?
- CTA layering: Primary → Secondary → Tertiary
- Compare against proposed: "Systems audit" → "Consultation" → "Explore systems"

### Step 2: Proof element inventory
Search across all templates for these proof patterns:
- StatsSection / StatsGrid / StatCounter usage
- TestimonialGrid / TestimonialSlider / TestimonialInline usage
- ClientLogoGrid / SocialProof usage
- CaseStudyPreview usage

Create a table:
| Template | Proof Elements | Placement (viewport position) | Score |
|---|---|---|---|
Score: STRATEGIC / BURIED / MISSING

### Step 3: CTA architecture audit
For every template that has a CTA, document:
| Template | CTA Text | CTA Position | Type | Mid-Funnel? |
|---|---|---|---|---|
Type: consultation / audit / explore / newsletter / contact

Check if mid-funnel "systems audit" CTA exists anywhere.

### Step 4: Conversion funnel completeness
Map the user journey across page types:
- Homepage → What's the next click? Where does it lead?
- Services → Case study link? Proof before persuasion?
- Solutions → Method explanation before service list?
- Case studies → CTA at end? Related systems link?

### Step 5: Missing proof patterns
List proof patterns from the framework that don't exist as components:
- Proof chips (single-line evidence)
- Method cards
- Authority quotes (strategic placement)
- Metric strips
- Case study anatomy modules

## Report format

```markdown
# Authority and Proof Placement Audit
**Date:** [date]

## Executive Summary

## Homepage Conversion Path
[detailed analysis]

## Proof Element Inventory
[table across all templates]

## CTA Architecture
[table with scoring]

## Conversion Funnel Map
[user journey analysis]

## Missing Proof Patterns
[list with descriptions]

## Priority Actions
1. [highest impact]
2. ...
```
