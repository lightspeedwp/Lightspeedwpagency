# Prompt 09: Launch Readiness Assessment

**Output:** `/reports/2026-02/strategy-audit/09-launch-readiness-assessment.md`

## Context

Read these reference files FIRST:
- `/guidelines/strategy/launch-readiness-checklist.md` — Full checklist
- All previous audit reports in `/reports/2026-02/strategy-audit/` (01 through 08)

## Instructions

Synthesise all audit findings into a launch readiness assessment.

### Step 1: Aggregate findings
Read all 8 previous reports. For each, extract:
- Total violations/gaps found
- Priority 1 actions
- Estimated effort

### Step 2: Score each readiness category
Using the launch readiness checklist, score each area:

| Category | Score | Blocking Issues | Non-Blocking Issues |
|---|---|---|---|

Scores: READY / NEEDS-WORK / NOT-STARTED / BLOCKED

Categories:
1. Content QA
2. Schema validation
3. Accessibility
4. Performance
5. AI search readiness
6. Conversion tracking
7. Migration readiness
8. Design system compliance
9. Pattern governance
10. Navigation/IA alignment
11. Voice and tone
12. Authority/proof placement

### Step 3: Create implementation roadmap
Based on all findings, create a phased roadmap:

**Phase 1: Critical (blocks launch)**
[items that must be done before any launch]

**Phase 2: High Priority (first 2 weeks)**
[items that significantly impact user experience or conversion]

**Phase 3: Medium Priority (first month)**
[items that improve quality and governance]

**Phase 4: Enhancement (ongoing)**
[items that add strategic value over time]

### Step 4: Effort estimation
For each phase, estimate:
- Number of files to modify
- Number of new files to create
- Approximate prompt count needed

### Step 5: Dependencies map
Identify which tasks depend on others:
- IA changes must happen before new page creation
- Token compliance must happen before new templates
- etc.

## Report format

```markdown
# Launch Readiness Assessment
**Date:** [date]

## Executive Summary
[overall readiness score and key blockers]

## Readiness Scorecard
[table with all 12 categories]

## Critical Issues (Must Fix)
[numbered list]

## Implementation Roadmap
### Phase 1: Critical
[items with effort estimates]

### Phase 2: High Priority
[items]

### Phase 3: Medium Priority
[items]

### Phase 4: Enhancement
[items]

## Effort Summary
| Phase | Files Modified | Files Created | Prompts Needed | Est. Hours |
|---|---|---|---|---|

## Dependencies Map
[dependency list]

## Recommended Next Steps
1. [first action]
2. [second action]
3. ...
```
