# Step 5: Why Mailchimp & Why Tour Operator Enhancements

## Context
You are executing Step 5 of the Batch 2 Pages Improvements plan. Your goal is to improve the light and dark mode versions of the Why Mailchimp and Why Tour Operator pages based on their design briefs.

## Input Files
- `/src/imports/why-mailchimp.md`
- `/src/imports/why-tour-operator.md`

## Instructions
1. Locate the corresponding React template files for the two pages in `/src/app/components/templates/` (e.g., `MailchimpSolutionTemplate.tsx`, `TourOperatorDesignTemplate.tsx`, or similar based on routes).
2. Read the design briefs to understand the required content and layout adjustments.
3. Enhance the templates for both **light** and **dark** modes. Ensure contrast, glow effects, and borders behave perfectly in both themes.
4. **CRITICAL:** Do NOT remove any existing sections. You may only add new sections, polish styling, or rearrange existing ones. 
5. **CRITICAL:** Replace any hardcoded hex values or Tailwind classes (`flex`, `grid`, `p-6`, etc.) with the design system's CSS variables (`var(--primary)`, `var(--spacing-6)`) and WordPress utilities (`.wp-grid-3-cols`).
6. **CRITICAL:** Ensure typography strictly uses `var(--font-primary)` or `var(--font-secondary)`.

## Output
Apply the necessary modifications directly to the template files and any related CSS files if required. Ensure the output strictly respects all design system rules.