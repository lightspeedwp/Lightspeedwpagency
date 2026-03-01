# Prompt 03: Design System Token Compliance Audit

**Output:** `/reports/2026-02/strategy-audit/03-design-system-token-audit.md`

## Context

Read these reference files FIRST:
- `/guidelines/strategy/design-system-spec-2026.md` — Design system specification
- `/src/styles/theme-base.css` — Current base tokens
- `/src/styles/theme-light.css` — Light mode tokens
- `/src/styles/theme-dark.css` — Dark mode tokens

## Instructions

Audit the current design system implementation against the 2026 specification.

### Step 1: Token inventory
Read `/src/styles/theme-base.css` completely. Create an inventory:
| Token Category | Count | Examples |
|---|---|---|
| Font families | | |
| Font sizes | | |
| Spacing | | |
| Radius | | |
| Shadows | | |
| Animations | | |

### Step 2: Hardcoded value scan
Search across template files for violations. Use grep/search for:
- Hardcoded hex colors (e.g., `#FF0000`, `color: '#`)
- Hardcoded font families (e.g., `'Lexend'`, `'Manrope'`, `font-family:` without `var(`)
- Hardcoded pixel spacing (e.g., `padding: '20px'`, `margin: '16px'`)
- Hardcoded font sizes (e.g., `fontSize: '18px'`, `fontSize: '1.5rem'`)
- Hardcoded border radius (e.g., `borderRadius: '8px'`)

Sample at least 15 template files from `/src/app/components/templates/`.
Report each violation with file, line number, and the hardcoded value.

### Step 3: CSS variable usage verification
For the same 15 templates, verify:
- Colors use `var(--primary)`, `var(--foreground)`, etc.
- Spacing uses `var(--spacing-*)` or CSS utility classes
- Typography uses `var(--font-primary)` / `var(--font-secondary)`
- Border radius uses `var(--radius*)` variables

### Step 4: Dark mode token parity check
Compare theme-light.css and theme-dark.css:
- Are all semantic variables defined in both?
- Are any variables missing from dark mode?
- Do contrast ratios meet WCAG 2.1 AA in both modes?

### Step 5: WordPress theme.json alignment
Check if current tokens map cleanly to theme.json v3 structure:
- Font presets match `--wp--preset--font-size--*`
- Spacing presets match `--wp--preset--spacing--*`
- Color presets have semantic slugs

## Report format

```markdown
# Design System Token Compliance Audit
**Date:** [date]

## Executive Summary

## Token Inventory
[table]

## Violations Found
### Hardcoded Colors
| File | Line | Value | Fix |
|---|---|---|---|

### Hardcoded Fonts
[table]

### Hardcoded Spacing
[table]

### Hardcoded Radius
[table]

## Dark Mode Parity
[findings]

## WordPress theme.json Alignment
[gap analysis]

## Compliance Score
- Templates audited: X
- Violations found: X
- Compliance rate: X%

## Priority Fixes
1. [highest impact]
2. ...
```
