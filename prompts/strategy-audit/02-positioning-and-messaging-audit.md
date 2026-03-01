# Prompt 02: Positioning and Messaging Audit

**Output:** `/reports/2026-02/strategy-audit/02-positioning-and-messaging-audit.md`

## Context

Read these reference files FIRST:
- `/guidelines/strategy/positioning-analysis-2026.md` — Positioning strategy
- `/guidelines/strategy/voice-and-tone-guidelines.md` — Voice and tone standards
- `/guidelines/strategy/content-strategy-2026.md` — Messaging framework

## Instructions

Audit the current prototype's messaging and positioning against the 2026 strategy.

### Step 1: Hero messaging audit
Read these template files and extract the hero headline, subtitle, and primary CTA text:
- `/src/app/components/templates/FrontPageTemplate.tsx` (homepage)
- `/src/app/components/templates/ServicesLandingTemplate.tsx`
- `/src/app/components/templates/SolutionsTemplate.tsx`
- `/src/app/components/templates/AboutTemplate.tsx`
- `/src/app/components/templates/ContactPageTemplate.tsx`

For each, score against the positioning statement:
"LightSpeed builds structured publishing and commerce systems on WordPress that stay fast, governable, and AI-visible as you scale."

Score: ALIGNED / PARTIAL / GENERIC / MISALIGNED

### Step 2: CTA architecture audit
For each major template, identify:
- Primary CTA text and destination
- Secondary CTA (if any)
- Mid-funnel conversion path (systems audit request)
Compare against the proposed CTA hierarchy:
1. "Request a systems audit" (mid-funnel)
2. "Book consultation" (high-commitment)
3. "Explore systems" (discovery)

### Step 3: Voice and tone assessment
Sample 5 sections from different templates. For each:
- Does it use "systems language" or "agency language"?
- Does it lead with outcomes or capabilities?
- Score: SYSTEMS-FIRST / AGENCY-DEFAULT / MIXED

### Step 4: Authority sequencing check
For the homepage and 3 key landing pages:
- Is proof placed before or after persuasion?
- Are metrics visible in the first viewport?
- Is the Automattic testimonial strategically placed?

## Report format

```markdown
# Positioning and Messaging Audit Report
**Date:** [date]

## Executive Summary

## Hero Messaging Scores
| Template | Headline | Score | Issue |
|---|---|---|---|

## CTA Architecture
| Template | Primary CTA | Mid-Funnel CTA | Score |
|---|---|---|---|

## Voice & Tone Assessment
[samples and scores]

## Authority Sequencing
[findings per page]

## Priority Rewrites
1. [highest impact]
2. ...
```
