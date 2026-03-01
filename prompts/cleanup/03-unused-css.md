# Audit 03: Unused CSS Files & Styles

**Output:** `/reports/2026-02/cleanup/03-unused-css-report.md`

## Instructions

1. List all CSS files in `/src/styles/` (recursively)
2. For each CSS file, check if it is either:
   a. Imported in `/src/styles/index.css` (global), OR
   b. Imported directly by a component (route-level import)
3. Any CSS file that is neither globally imported nor component-imported is UNUSED
4. Check for duplicate CSS files (same styles in different locations)
5. Check for CSS files whose corresponding component has been deleted

## Key Areas to Check
- `/src/styles/templates/` — do all template CSS files have corresponding template components?
- `/src/styles/patterns/` — do all pattern CSS files have corresponding pattern components?
- `/src/styles/blocks/` — do all block CSS files have corresponding block components?
- `/src/styles/demo/` — are demo styles still needed?
- `/src/styles/content/` — are content styles used?
- `/src/styles/woocommerce/` — are WooCommerce styles used?

## Report Format
```markdown
# Unused CSS Report
## Files Not Imported Anywhere
| CSS File | Expected Component | Component Exists? | Action |
|---|---|---|---|
## Duplicate Styles
| File A | File B | Overlap | Action |
|---|---|---|---|
```
