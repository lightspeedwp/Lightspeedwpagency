# Prompt 08: Performance and Accessibility Standards Audit

**Output:** `/reports/2026-02/strategy-audit/08-performance-and-accessibility-audit.md`

## Context

Read these reference files FIRST:
- `/guidelines/strategy/performance-engineering-standards.md` — Performance targets
- `/guidelines/strategy/launch-readiness-checklist.md` — Accessibility requirements
- `/guidelines/REDUCED-MOTION-STANDARDS.md` — Motion standards

## Instructions

Audit the prototype against performance and accessibility engineering standards.

### Step 1: CSS architecture weight assessment
Count the imports in `/src/styles/index.css`. Calculate:
- Total number of CSS file imports
- Estimate total CSS weight (check file sizes of key CSS files)
- Identify potential CSS that could be removed or deferred

### Step 2: JavaScript assessment
Review `/src/app/routes.tsx` for:
- Total number of static imports (these all load upfront)
- Are there any code-splitting opportunities?
- Is lazy loading used for any routes?

### Step 3: Reduced motion compliance
Search for animation-related code:
- `@keyframes` in CSS files — do they have `prefers-reduced-motion` guards?
- `transition` and `transform` in CSS — are hover effects neutralised?
- `useReducedMotion` hook usage in components — is it used consistently?

Sample 10 CSS files from `/src/styles/patterns/` and `/src/styles/templates/`.

### Step 4: Accessibility structure check
For 5 key templates, verify:
- [ ] Exactly one H1 per page
- [ ] Heading hierarchy is logical (H1 → H2 → H3)
- [ ] Landmarks present (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Interactive elements have keyboard access
- [ ] Focus states are visible
- [ ] Touch targets >= 44x44px
- [ ] Alt text on images

### Step 5: WCAG 2.2 gap check
Against the launch readiness checklist, check:
- Skip link implementation
- Focus trap in modals
- Screen reader announcements for route changes
- Form validation accessibility

### Step 6: Performance budget feasibility
Compare current architecture against proposed budgets:
| Template Type | Budget | Current Estimate | Status |
|---|---|---|---|

## Report format

```markdown
# Performance and Accessibility Standards Audit
**Date:** [date]

## Executive Summary

## CSS Architecture
- Total imports: X
- Estimated weight: X
- Optimization opportunities: [list]

## JavaScript Assessment
- Static imports: X
- Code splitting: [status]
- Lazy loading: [status]

## Reduced Motion Compliance
| File | Has Guard | Issue |
|---|---|---|

## Accessibility Structure
| Template | H1 Count | Heading Order | Landmarks | Keyboard | Focus | Score |
|---|---|---|---|---|---|---|

## WCAG 2.2 Gap Analysis
[findings]

## Performance Budget Status
[table]

## Priority Actions
1. [highest impact]
2. ...
```
