# LightSpeed Strategy Evolution — Orchestration Plan

**Created:** February 25, 2026
**Version:** 1.0

## Overview

This plan orchestrates the transformation of the LightSpeed prototype from its current "Funky agency portfolio" state to a "Structured Publishing Systems Engineering" practice website aligned with the 2026-2027 strategic blueprint.

## File Locations

| Type | Location | Count |
|------|----------|-------|
| Strategy Reference | `/guidelines/strategy/` | 17 files |
| Audit Prompts | `/prompts/strategy-audit/` | 9 prompts + README |
| Reports (output) | `/reports/2026-02/strategy-audit/` | 9 reports (pending) |
| Task Lists (output) | `/tasks/strategy-evolution/` | 8 task lists (pending) |

## Strategy Reference Files Created

1. `positioning-analysis-2026.md` — Market positioning and competitive gaps
2. `service-architecture-2026.md` — Three-tier service model (Foundation/Growth/Enterprise)
3. `navigation-and-ia-2026.md` — Proposed IA with URL hierarchy
4. `authority-proof-framework.md` — Proof categories, placement strategy, case study template
5. `content-audit-live-site.md` — Current site weaknesses and strengths
6. `content-audit-prototype.md` — Prototype validation checklist
7. `content-gap-analysis.md` — Missing pages, clusters, definitional content
8. `content-strategy-2026.md` — ICP, messaging, topic clusters, AEO, conversion architecture
9. `voice-and-tone-guidelines.md` — Writing standards and AI search formatting
10. `design-system-spec-2026.md` — Token system, block mapping, governance model
11. `pattern-library-roadmap.md` — Pattern phases and governance milestones
12. `launch-readiness-checklist.md` — Pre-launch QA checklist
13. `wordpress-predictions-2027.md` — Platform roadmap signals
14. `competitive-analysis.md` — Market landscape summary
15. `ai-governance-framework.md` — AI usage policies and review gates
16. `performance-engineering-standards.md` — CWV targets, budgets, measurement
17. `block-theme-architecture.md` — theme.json v3, patterns-first, locking strategy

## Audit Execution Sequence

### Phase 1: Current State Analysis (Prompts 01-04)
These audits examine what exists today.

| # | Audit | Key Question | Reference Files |
|---|-------|-------------|-----------------|
| 01 | IA and Navigation | Do current routes match proposed IA? | navigation-and-ia-2026.md |
| 02 | Positioning and Messaging | Does messaging use systems language? | positioning-analysis-2026.md, voice-and-tone-guidelines.md |
| 03 | Design System Tokens | Are CSS variables used consistently? | design-system-spec-2026.md |
| 04 | Block and Pattern Coverage | Do patterns cover the roadmap? | pattern-library-roadmap.md, block-theme-architecture.md |

### Phase 2: Strategic Gap Analysis (Prompts 05-07)
These audits identify what's missing.

| # | Audit | Key Question | Reference Files |
|---|-------|-------------|-----------------|
| 05 | Content Gap | What pages need to be created? | content-gap-analysis.md, content-strategy-2026.md |
| 06 | Authority and Proof | Where should proof be placed? | authority-proof-framework.md |
| 07 | Voice, Tone, AEO | Is content AI-search ready? | voice-and-tone-guidelines.md, ai-governance-framework.md |

### Phase 3: Engineering Standards (Prompts 08-09)
These audits check technical readiness.

| # | Audit | Key Question | Reference Files |
|---|-------|-------------|-----------------|
| 08 | Performance and Accessibility | Does the build meet standards? | performance-engineering-standards.md |
| 09 | Launch Readiness | What blocks launch? | launch-readiness-checklist.md + all reports |

## Task List Generation

After ALL 9 reports are complete, task lists are generated:

| Task List | Populated From | Dependency |
|-----------|---------------|------------|
| phase-1-critical.md | Report 09 (synthesis) | None |
| phase-2-ia-and-navigation.md | Reports 01, 05 | None |
| phase-3-design-system-compliance.md | Report 03 | None |
| phase-4-content-and-messaging.md | Reports 02, 05, 07 | Phase 2 |
| phase-5-patterns-and-blocks.md | Report 04 | Phase 3 |
| phase-6-proof-and-conversion.md | Report 06 | Phase 4, 5 |
| phase-7-performance-and-a11y.md | Report 08 | Phase 3 |
| phase-8-aeo-and-schema.md | Report 07 | Phase 4 |

## How to Use This System

### For the AI agent (Figma Make):
1. User pastes a prompt from `/prompts/strategy-audit/NN-*.md`
2. Agent reads the referenced files
3. Agent performs the audit steps
4. Agent writes the report to `/reports/2026-02/strategy-audit/NN-*.md`
5. Repeat for next prompt

### For the human:
1. Review each report after generation
2. Approve findings or request corrections
3. After all 9 reports: trigger task list generation
4. Prioritise and sequence task execution
5. Execute tasks using additional prompts as needed

## Key Strategic Shifts

| From (Current) | To (2026-2027) |
|----------------|-----------------|
| Services (labour) | Systems (outcomes) |
| Agency language | Systems-first clarity |
| Free consultation CTA | Systems audit CTA |
| Broad capability claims | Specific methodology proof |
| Service-led taxonomy | Entity-led topic clusters |
| Page-first design | Pattern-first governance |
| Generic messaging | ICP-specific positioning |
| Implicit authority | Structured proof system |
