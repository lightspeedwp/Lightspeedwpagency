# Prompt: Systematic Codebase Audit — CSS Architecture & Data Integrity

**Category:** Audit
**Version:** 2.0
**Created:** February 19, 2026
**Project:** LSX Design Prototype (WordPress Block Theme)

---

## When to Use This Prompt

Run this audit after any of the following changes:
- Moving inline data to `/src/app/data/` files
- Creating or reorganizing CSS files in `/src/styles/`
- Adding new template or pattern components
- Changing the CSS import strategy (global vs component-level)
- Refactoring the Button component or its CSS

---

## Prompt

```
You are auditing the LSX Design prototype codebase for CSS architecture issues and data layer integrity. This is a WordPress block-theme prototype built with React, using BEM CSS with CSS variables from a centralized design system.

CRITICAL CONTEXT:
- Entry point: /src/app/App.tsx imports /src/styles/index.css (single global CSS entry)
- index.css @imports ~309 CSS files in a specific cascade order
- Some template CSS files are ALSO imported at the component level via `import '@/styles/templates/...'`
- The Button component wraps output in <div class="wp-block-button"> with inner <a class="wp-block-button__link">
- All colors, spacing, typography, and borders MUST use CSS variables (no hardcoded hex/rgba)
- Only font faces allowed: var(--font-primary) = Lexend, var(--font-secondary) = Manrope
- WordPress utility classes use .wp-* prefix (no raw Tailwind classes)

PHASE 1: CSS IMPORT & CASCADE ANALYSIS

1. Read /src/styles/index.css completely.
2. Search ALL .tsx files for `import.*\.css` statements.
3. Cross-reference: Flag any CSS file that appears in BOTH index.css AND a component import.
4. Flag CSS files in /src/styles/ that are NEVER imported (orphans).
5. Search for `!important` in all CSS files under /src/styles/. Categorize:
   - Acceptable: Inside @media print or @media (prefers-reduced-motion)
   - Problematic: Everywhere else (report file, line, and rule)

PHASE 2: DESIGN SYSTEM TOKEN COMPLIANCE

1. Search all files in /src/styles/templates/ and /src/styles/patterns/ for:
   - `rgba(\d+` — hardcoded RGB values (should use color-mix() with var())
   - `#[0-9a-fA-F]{3,8}` — hardcoded hex (should use var())
   - EXCLUDE /src/styles/theme-base.css, theme-light.css, theme-dark.css (these DEFINE tokens)
2. Search all .tsx files for className containing raw Tailwind classes:
   - Pattern: `className="[^"]*\b(flex|grid|gap-|p-\d|px-|py-|mt-|mb-|text-center|items-center|justify-|rounded-|bg-|border-|shadow-)\b`
   - EXCLUDE classes with `wp-` prefix (these are the WordPress utility system)
3. Search .tsx files for inline styles with hardcoded rgba values.

PHASE 3: DATA LAYER VERIFICATION

1. Read /src/app/data/index.ts — list all re-exported modules.
2. List all .ts files in /src/app/data/ that are NOT re-exported from index.ts.
3. Search all .tsx files importing from /src/app/data/ — verify paths resolve.
4. Search data files for `any` type usage.

PHASE 4: DEAD CODE

1. List CSS files in /src/styles/ not imported by ANY .css or .tsx file.
2. List data files in /src/app/data/ not imported by ANY .tsx file.

OUTPUT FORMAT:

Present findings as AUDIT_REPORT_V{N}.md with these sections:

## 1. Critical Errors (Build Blockers)
Broken imports, missing files, syntax errors. If none, state "None found."

## 2. Loading Order Risks
Duplicate CSS imports, mixed strategy warnings, cascade conflicts.

## 3. Design System Violations
Hardcoded colors, raw Tailwind classes, !important usage stats.

## 4. Data Layer Issues
Missing barrel exports, any types, path resolution errors.

## 5. Dead Code
Orphan CSS files, unused data files.

## 6. Remediation Plan
Step-by-step fix list, ordered by priority, with estimated time per step.

## 7. Metrics Summary
Table: Category | Current | Target | Gap
```

---

## Validation Checklist (Run After Remediation)

After executing the remediation plan, re-run these checks to confirm zero violations:

```bash
# 1. Zero hardcoded hex in template/pattern CSS (excluding theme definition files)
grep -rn '#[0-9a-fA-F]\{3,8\}' src/styles/templates/ src/styles/patterns/

# 2. Zero hardcoded rgba in template/pattern CSS
grep -rn 'rgba([0-9]' src/styles/templates/ src/styles/patterns/

# 3. Zero !important outside print/animations
grep -rn '!important' src/styles/templates/ src/styles/patterns/ src/styles/blocks/

# 4. Zero raw Tailwind in TSX
grep -rn 'className="[^"]*\btext-center\b' src/app/components/templates/

# 5. Zero duplicate CSS imports
# Compare index.css @import list against component-level CSS imports
```

---

## Related Files

- **Task:** `/tasks/audit-css-and-data-integrity.md`
- **Report:** `/reports/audits/2026-02-19-AUDIT-REPORT-V6.md`
- **Guidelines:** `/guidelines/css-import-strategy.md`
- **Design System:** `/src/styles/theme-base.css`, `theme-light.css`, `theme-dark.css`
- **CSS Entry Point:** `/src/styles/index.css`
- **Data Barrel:** `/src/app/data/index.ts`
