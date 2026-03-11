# ORCHESTRATOR: Website Pages Batch 2 Improvements (Light & Dark Mode)

## Context
This is a multi-step execution plan to improve the design and functionality of 10 website pages based on their respective markdown design briefs. The goal is to deeply enhance the **light** and **dark mode** rendering of these templates, strictly applying the project's CSS variables, while preserving all existing sections.

## CRITICAL RULES (NON-NEGOTIABLE)

1. **NEVER REMOVE SECTIONS:** You are strictly forbidden from removing any existing sections from these pages.
2. **ADD/POLISH/REARRANGE ONLY:** You may only add new patterns/sections, polish existing visual presentation, or rearrange sections for better flow.
3. **NEVER DELETE PAGES:** Do not delete any files or templates under any circumstances.
4. **CSS VARIABLES ONLY:** All generated UI MUST strictly use CSS variables from `/src/styles/` for colors, spacing, borders, radius, and typography (e.g., `var(--spacing-6)`, `var(--primary)`, `var(--radius-lg)`).
5. **NO TAILWIND CLASSES:** Absolutely no Tailwind utility classes are allowed (no `flex`, `grid-cols-2`, `p-4`, etc.). Use WordPress utility classes (`.wp-grid-2-cols`, `.wp-text-center`) and inline styles for dynamic variables instead.
6. **TYPOGRAPHY ENFORCEMENT:** ONLY use the font faces defined in the CSS (e.g., `var(--font-primary)` or `var(--font-secondary)`). Never hardcode font families like `"Lexend", sans-serif`.

## Pages to Process

The following 10 design briefs must be executed against their respective React templates in the codebase:

1. `wordpress.md` (WordPress Services)
2. `wordpress-blocks-poc.md` (WordPress Blocks POC)
3. `woocommerce.md` (WooCommerce Services)
4. `woocommerce-redesign.md` (WooCommerce Redesign)
5. `why.md` (Why Choose Us)
6. `wordpress-redesign.md` (WordPress Redesign)
7. `why-woo.md` (Why WooCommerce)
8. `why-wp.md` (Why WordPress)
9. `why-mailchimp.md` (Why Mailchimp)
10. `why-tour-operator.md` (Why Tour Operator)

## Execution Sequence

For each step below, run a separate prompt execution. Do not combine steps.

### Step 1: Process `wordpress.md` & `wordpress-blocks-poc.md`
- Read `/src/imports/wordpress.md` and `/src/imports/wordpress-blocks-poc.md`.
- Locate their corresponding template files in `/src/app/components/templates/`.
- Enhance light/dark mode implementations.
- Ensure 100% compliance with CSS variables and typography.
- Verify zero sections have been deleted.

### Step 2: Process `woocommerce.md` & `woocommerce-redesign.md`
- Read `/src/imports/woocommerce.md` and `/src/imports/woocommerce-redesign.md`.
- Locate their corresponding template files in `/src/app/components/templates/`.
- Enhance light/dark mode implementations.
- Ensure 100% compliance with CSS variables and typography.
- Verify zero sections have been deleted.

### Step 3: Process `why.md` & `wordpress-redesign.md`
- Read `/src/imports/why.md` and `/src/imports/wordpress-redesign.md`.
- Locate their corresponding template files in `/src/app/components/templates/`.
- Enhance light/dark mode implementations.
- Ensure 100% compliance with CSS variables and typography.
- Verify zero sections have been deleted.

### Step 4: Process `why-woo.md` & `why-wp.md`
- Read `/src/imports/why-woo.md` and `/src/imports/why-wp.md`.
- Locate their corresponding template files in `/src/app/components/templates/`.
- Enhance light/dark mode implementations.
- Ensure 100% compliance with CSS variables and typography.
- Verify zero sections have been deleted.

### Step 5: Process `why-mailchimp.md` & `why-tour-operator.md`
- Read `/src/imports/why-mailchimp.md` and `/src/imports/why-tour-operator.md`.
- Locate their corresponding template files in `/src/app/components/templates/`.
- Enhance light/dark mode implementations.
- Ensure 100% compliance with CSS variables and typography.
- Verify zero sections have been deleted.

### Step 6: Final Audit & Reporting
- Generate a compliance report in `/reports/` confirming that all 10 pages successfully utilize `var(--*)` CSS variables, use the correct fonts, have zero Tailwind class violations, and retained all their original sections.
