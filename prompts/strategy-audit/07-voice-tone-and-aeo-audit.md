# Prompt 07: Voice, Tone, and AEO Readiness Audit

**Output:** `/reports/2026-02/strategy-audit/07-voice-tone-and-aeo-audit.md`

## Context

Read these reference files FIRST:
- `/guidelines/strategy/voice-and-tone-guidelines.md` — Voice standards
- `/guidelines/strategy/content-strategy-2026.md` — AEO framework
- `/guidelines/strategy/ai-governance-framework.md` — AI governance

## Instructions

Audit content quality, voice consistency, and AI/AEO readiness.

### Step 1: Voice and tone sampling
Read the data files that contain page copy. Sample from:
- `/src/app/data/front-page.ts` or `/src/app/data/homepage.ts`
- `/src/app/data/services-page.ts` or `/src/app/data/services.ts`
- `/src/app/data/about-page.ts` or `/src/app/data/about.ts`
- 3 service detail data files (e.g., `design-service-page.ts`, `development-service-page.ts`)

For each sample, evaluate:
| Data File | Voice Mode | Systems Language | Outcome-Led | Score |
|---|---|---|---|---|
Score: ALIGNED / PARTIAL / GENERIC

### Step 2: Generic agency language detection
Search data files for these anti-patterns:
- "extraordinary websites"
- "take your business to the next level"
- "designed for success"
- "world-class" (without specifics)
- "cutting-edge" (without specifics)
- "leverage" (vague usage)

List each occurrence with file and context.

### Step 3: AEO formatting assessment
For 5 key pages, check:
- Do headings use definitional format? ("What is X", "How X works")
- Are paragraphs short and scannable?
- Do sections follow "answer-first" structure?
- Are FAQ sections structured for AI retrieval?

### Step 4: Schema potential assessment
Check if the prototype data supports:
- Article schema (blog posts with author, date, description)
- Organisation schema (about page)
- FAQ schema (FAQ sections)
- BreadcrumbList schema (breadcrumb component)

### Step 5: Internal linking model check
For 5 templates, check:
- Do Systems/service pages link to case studies?
- Do case studies link back to methodology?
- Is there hub-and-spoke linking?

## Report format

```markdown
# Voice, Tone, and AEO Readiness Audit
**Date:** [date]

## Executive Summary

## Voice and Tone Assessment
[table with scores]

## Generic Language Violations
| File | Text | Replacement Suggestion |
|---|---|---|

## AEO Formatting Score
| Page | Definitional Headers | Short Paragraphs | Answer-First | Score |
|---|---|---|---|---|

## Schema Readiness
[findings per schema type]

## Internal Linking Model
[findings]

## Priority Actions
1. [highest impact]
2. ...
```
