# LightSpeed Strategy Evolution — Complete Audit Orchestration

**Created:** February 25, 2026  
**Version:** 1.0  
**Purpose:** Execute all 9 strategy audit prompts sequentially to generate complete analysis of current prototype state vs. 2026-2027 strategic blueprint

---

## 🎯 Mission

Transform the LightSpeed prototype from "Funky agency portfolio" to "Structured Publishing Systems Engineering" practice website by executing a comprehensive 9-audit sequence that:

1. Identifies gaps between current and target state
2. Documents all findings in standardized reports
3. Generates prioritized task lists for implementation
4. Ensures compliance with design system, accessibility, performance, and AI readiness standards

---

## 📁 Reference Files Overview

### Strategy Reference Files (17 total)
**Location:** `/guidelines/strategy/`

| # | File | Purpose |
|---|------|---------|
| 01 | `positioning-analysis-2026.md` | Market positioning and competitive differentiation |
| 02 | `service-architecture-2026.md` | Three-tier service model (Foundation/Growth/Enterprise) |
| 03 | `navigation-and-ia-2026.md` | Proposed IA structure with URL hierarchy |
| 04 | `authority-proof-framework.md` | Proof categories, placement strategy, case study template |
| 05 | `content-audit-live-site.md` | Current live site strengths and weaknesses |
| 06 | `content-audit-prototype.md` | Prototype validation checklist |
| 07 | `content-gap-analysis.md` | Missing pages, clusters, definitional content |
| 08 | `content-strategy-2026.md` | ICP, messaging, topic clusters, AEO, conversion architecture |
| 09 | `voice-and-tone-guidelines.md` | Writing standards and AI search formatting |
| 10 | `design-system-spec-2026.md` | Token system, block mapping, governance model |
| 11 | `pattern-library-roadmap.md` | Pattern phases and governance milestones |
| 12 | `launch-readiness-checklist.md` | Pre-launch QA checklist |
| 13 | `wordpress-predictions-2027.md` | Platform roadmap signals |
| 14 | `competitive-analysis.md` | Market landscape summary |
| 15 | `ai-governance-framework.md` | AI usage policies and review gates |
| 16 | `performance-engineering-standards.md` | Core Web Vitals targets and budgets |
| 17 | `block-theme-architecture.md` | theme.json v3, patterns-first, locking strategy |

### Audit Prompts (9 total)
**Location:** `/prompts/strategy-audit/`

Prompts 01-09 execute sequentially. Each produces one report.

### Output Locations
- **Reports:** `/reports/2026-02/strategy-audit/` (9 markdown reports)
- **Task Lists:** `/tasks/strategy-evolution/` (8 prioritized task lists, generated AFTER all reports complete)

---

## 🔄 Execution Workflow

### Phase 1: Current State Analysis (Audits 01-04)

Execute these audits to document what exists today.

#### Audit 01: IA and Navigation
**Prompt:** `01-ia-and-navigation-audit.md`  
**Output:** `/reports/2026-02/strategy-audit/01-ia-and-navigation-audit.md`  
**Reference Files:**
- `navigation-and-ia-2026.md`
- `service-architecture-2026.md`
- `/guidelines/overview-sitemap.md`

**Key Questions:**
- Do current routes match proposed IA?
- What URLs need to change?
- What new pages are required?
- Does navigation structure align with systems-first positioning?

---

#### Audit 02: Positioning and Messaging
**Prompt:** `02-positioning-and-messaging-audit.md`  
**Output:** `/reports/2026-02/strategy-audit/02-positioning-and-messaging-audit.md`  
**Reference Files:**
- `positioning-analysis-2026.md`
- `voice-and-tone-guidelines.md`
- `service-architecture-2026.md`

**Key Questions:**
- Does hero messaging use "systems" language vs. "services" language?
- Are CTAs aligned with systems audit offer?
- Is positioning ICP-specific (government, education, healthcare)?
- Does copy differentiate from generic agency messaging?

---

#### Audit 03: Design System Token Audit
**Prompt:** `03-design-system-token-audit.md`  
**Output:** `/reports/2026-02/strategy-audit/03-design-system-token-audit.md`  
**Reference Files:**
- `design-system-spec-2026.md`
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/typography.md`
- `/guidelines/design-tokens/spacing.md`

**Key Questions:**
- Are CSS variables used consistently?
- Are tokens defined in `theme-base.css`, `theme-light.css`, `theme-dark.css`?
- Are hardcoded values eliminated?
- Is BEM naming enforced?

---

#### Audit 04: Block and Pattern Coverage
**Prompt:** `04-block-pattern-coverage-audit.md`  
**Output:** `/reports/2026-02/strategy-audit/04-block-pattern-coverage-audit.md`  
**Reference Files:**
- `pattern-library-roadmap.md`
- `block-theme-architecture.md`
- `/guidelines/patterns/overview-patterns.md`
- `/guidelines/blocks/overview-blocks.md`

**Key Questions:**
- Do current patterns cover roadmap requirements?
- Are block guidelines complete?
- Is pattern governance enforced?
- Are patterns WordPress FSE compatible?

---

### Phase 2: Strategic Gap Analysis (Audits 05-07)

Execute these audits to identify what's missing.

#### Audit 05: Content Gap and Page Inventory
**Prompt:** `05-content-gap-and-page-inventory.md`  
**Output:** `/reports/2026-02/strategy-audit/05-content-gap-and-page-inventory.md`  
**Reference Files:**
- `content-gap-analysis.md`
- `content-strategy-2026.md`
- `service-architecture-2026.md`

**Key Questions:**
- What pages are missing from the content strategy?
- What topic clusters are incomplete?
- What definitional content is needed?
- What ICP-specific pages are required?

---

#### Audit 06: Authority and Proof Placement
**Prompt:** `06-authority-proof-placement-audit.md`  
**Output:** `/reports/2026-02/strategy-audit/06-authority-proof-placement-audit.md`  
**Reference Files:**
- `authority-proof-framework.md`
- `content-strategy-2026.md`

**Key Questions:**
- Where should proof be placed?
- Are case studies structured correctly?
- Are proof categories complete?
- Is conversion architecture optimized?

---

#### Audit 07: Voice, Tone, and AEO Audit
**Prompt:** `07-voice-tone-and-aeo-audit.md`  
**Output:** `/reports/2026-02/strategy-audit/07-voice-tone-and-aeo-audit.md`  
**Reference Files:**
- `voice-and-tone-guidelines.md`
- `ai-governance-framework.md`
- `content-strategy-2026.md`

**Key Questions:**
- Is content AI-search ready?
- Is copy following voice/tone guidelines?
- Is schema markup potential identified?
- Are definitional content patterns used?

---

### Phase 3: Engineering Standards (Audits 08-09)

Execute these audits to check technical readiness.

#### Audit 08: Performance and Accessibility
**Prompt:** `08-performance-and-accessibility-audit.md`  
**Output:** `/reports/2026-02/strategy-audit/08-performance-and-accessibility-audit.md`  
**Reference Files:**
- `performance-engineering-standards.md`
- `/guidelines/REDUCED-MOTION-STANDARDS.md`
- `/guidelines/design-tokens/responsive.md`

**Key Questions:**
- Does the build meet Core Web Vitals targets?
- Is WCAG 2.1 AA compliance verified?
- Are budgets enforced?
- Is reduced motion supported?

---

#### Audit 09: Launch Readiness Assessment
**Prompt:** `09-launch-readiness-assessment.md`  
**Output:** `/reports/2026-02/strategy-audit/09-launch-readiness-assessment.md`  
**Reference Files:**
- `launch-readiness-checklist.md`
- ALL previous 8 audit reports

**Key Questions:**
- What blocks launch?
- What is critical vs. nice-to-have?
- What dependencies exist?
- What is the launch timeline?

---

## 📋 Execution Instructions

### Step 1: Execute Audits Sequentially

**CRITICAL:** Execute audits IN ORDER. Do NOT proceed to the next audit until the current report is complete and saved.

```bash
# Execute in this exact order:
1. Execute prompt 01 → Save report 01 → Review → Proceed
2. Execute prompt 02 → Save report 02 → Review → Proceed
3. Execute prompt 03 → Save report 03 → Review → Proceed
4. Execute prompt 04 → Save report 04 → Review → Proceed
5. Execute prompt 05 → Save report 05 → Review → Proceed
6. Execute prompt 06 → Save report 06 → Review → Proceed
7. Execute prompt 07 → Save report 07 → Review → Proceed
8. Execute prompt 08 → Save report 08 → Review → Proceed
9. Execute prompt 09 → Save report 09 → Review → Proceed
```

### Step 2: Validate Reports

After each report is generated:

1. **Read the report** — Verify completeness
2. **Check tables** — Ensure all data is populated
3. **Review findings** — Validate accuracy against codebase
4. **Approve or request corrections** — Iterate if needed

### Step 3: Generate Task Lists

After ALL 9 reports are complete and approved:

Execute task list generation to create prioritized implementation tasks in `/tasks/strategy-evolution/`:

| Task List | Populated From | Dependency |
|-----------|---------------|------------|
| `phase-1-critical.md` | Report 09 (synthesis) | None — start immediately |
| `phase-2-ia-and-navigation.md` | Reports 01, 05 | None |
| `phase-3-design-system-compliance.md` | Report 03 | None |
| `phase-4-content-and-messaging.md` | Reports 02, 05, 07 | Phase 2 |
| `phase-5-patterns-and-blocks.md` | Report 04 | Phase 3 |
| `phase-6-proof-and-conversion.md` | Report 06 | Phase 4, 5 |
| `phase-7-performance-and-a11y.md` | Report 08 | Phase 3 |
| `phase-8-aeo-and-schema.md` | Report 07 | Phase 4 |

---

## 🎯 Expected Outcomes

### Reports (9 total)

Each report follows a standardized format:

```markdown
# [Audit Name] Report
**Date:** [date]
**Auditor:** AI

## Executive Summary
[2-3 sentences]

## [Section 1: Current State]
[tables, findings]

## [Section 2: Gap Analysis]
[tables, missing elements]

## [Section 3: Recommendations]
[prioritized actions]

## Priority Actions
1. [highest impact]
2. [medium impact]
3. [low impact]
```

### Task Lists (8 total)

Each task list follows this structure:

```markdown
# Phase N: [Task List Name]

**Status:** PENDING / IN PROGRESS / COMPLETE  
**Dependencies:** [Phase dependencies]  
**Estimated Effort:** [hours/days]

## Critical Tasks (Must complete)
- [ ] Task 1
- [ ] Task 2

## High Priority (Should complete)
- [ ] Task 3
- [ ] Task 4

## Medium Priority (Nice to have)
- [ ] Task 5
- [ ] Task 6

## Implementation Notes
[context, dependencies, risks]
```

---

## 🔐 Quality Gates

Before marking this orchestration as COMPLETE:

- [ ] All 9 audit prompts executed
- [ ] All 9 reports saved to `/reports/2026-02/strategy-audit/`
- [ ] All reports reviewed and approved
- [ ] All 8 task lists generated in `/tasks/strategy-evolution/`
- [ ] Task dependencies documented
- [ ] Priority sequencing defined
- [ ] Launch blockers identified
- [ ] Critical path defined

---

## 🚀 Key Strategic Shifts

This audit sequence validates transformation from:

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

---

## 📊 Success Metrics

After all audits and task lists are complete, we will have:

1. **Complete current state inventory** — Every route, pattern, block documented
2. **Gap analysis** — Every missing page, pattern, proof element identified
3. **Prioritized roadmap** — 8 phases of work with dependencies
4. **Launch readiness assessment** — Clear go/no-go criteria
5. **Implementation plan** — Sequenced tasks with effort estimates

---

## 🎬 Start Execution

To begin the orchestration:

1. **Open** `/prompts/strategy-audit/01-ia-and-navigation-audit.md`
2. **Read** all reference files listed in the prompt
3. **Execute** the audit steps
4. **Generate** the report
5. **Save** to `/reports/2026-02/strategy-audit/01-ia-and-navigation-audit.md`
6. **Review** and approve
7. **Proceed** to prompt 02

**DO NOT skip ahead. Execute sequentially.**

---

## 📞 Support

If any audit reveals missing reference files or incomplete data:

1. **Document the gap** in the report
2. **Flag as blocker** in Priority Actions
3. **Request creation** of missing reference file
4. **Pause orchestration** until resolved

---

**END OF ORCHESTRATOR PROMPT**

*Ready to execute? Start with Prompt 01.*
