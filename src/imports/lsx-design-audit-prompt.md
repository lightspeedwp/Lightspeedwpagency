# LSX Agency – Full Design‑System Audit Prompt

## Purpose

This prompt orchestrates a **full design‑system audit** of the **LSX Design Agency** prototype in **Figma Make**. The audit must inspect **every page, artboard, frame and layer** throughout the file—no element should be missed. It evaluates compliance with the agency’s design system defined in theme.css, the **Design System Usage Guide** (December 2024\) and subsequent updates (e.g., the **FitText** feature update from late 2024). Beyond design tokens, the audit should also confirm structural adherence (card architecture, CTAs, pattern usage), naming conventions, accessibility guidelines and integration with WordPress block patterns. The outcome is a comprehensive report and set of actionable tasks; no changes should be applied directly.

### Value

* **Consistency** – ensures all fonts, sizes, colours, spacing, radii, shadows and transitions across all pages and nested frames follow centrally defined CSS variables and allowed Tailwind spacing classes for predictable theming and maintainability.

* **Structural integrity** – validates that card layouts, feature grids, heroes, CTAs and other patterns are built using the correct component architecture and responsive behaviours described in the guide. It also checks that new WordPress features like **Fit Text** are used appropriately for hero text without manual media queries.

* **Accessibility** – checks that contrast ratios, line heights and responsive typography meet recommended standards[\[1\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=Leading%20,it%C2%A0is%C2%A0line%20spacing%20familiar%20to%C2%A0almost%20everybody) and that interactive elements are accessible.

* **Quality control** – surfaces any hard‑coded values, unsupported fonts or missing dark‑mode tokens which could break theme updates or WordPress integration.

### Risks

* The prototype may already be largely compliant; ensure the audit focuses on subtle issues like missing dark‑mode tokens or incorrect letter spacing.

* Do not alter the prototype; the findings must be saved as reports and tasks.

### Next step

Follow the audit procedure below. Export the report to /reports/ and the remediation tasks to /tasks/task‑list.md.

---

## Audit Steps

### 1\. Inventory and classification

1. **List all pages, artboards and frames** in the agency prototype, noting each page’s purpose and the number of design elements it contains. Include hidden or draft pages to ensure complete coverage.

2. For every page, **inventory each layer**—text, shapes, images, icons, components, variants and nested patterns. Capture style attributes: font family, font size, weight, line height, letter spacing, fill/stroke colours, border radius, shadow, spacing values, transition tokens and any applied Tailwind classes.

3. **Classify each layer** according to the design system usage guide: identify whether it represents a **hero section**, **card**, **call to action**, **feature grid**, **testimonial**, **footer**, etc. Note any layers that do not map to a defined pattern.

4. Map each attribute to the corresponding token in theme.css (for typography, colour, radius, shadows) or the approved Tailwind spacing class. Flag any raw pixel values, hex colours, unsupported fonts or classes not defined in the design system.

### 2\. Typography compliance

1. Verify that **only the authorised fonts** are used: **Lexend** for headings, body text and primary UI text, and **Manrope** only for secondary labels, metadata and footnotes[\[2\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L65-L78). No other fonts should be present.

2. Check that **font size tokens** (\--text-h1–\--text-h6, \--text-base, \--text-lg, \--text-lead, \--text-small, \--text-tiny) are applied correctly to their respective hierarchical levels[\[3\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L83-L100). Flag any hard‑coded pixel or rem sizes.

3. Ensure **font weights** use the variables (\--font-weight-light through \--font-weight-black)[\[4\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L102-L111) rather than numeric values.

4. Verify **line heights** and **letter spacing** use the variables defined in the guide (e.g., \--line-height-tight, \--line-height-normal, \--letter-spacing-tight, \--letter-spacing-normal)[\[5\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L113-L130). Record deviations.

5. Confirm proper **heading hierarchy** (H1–H6) with exactly one H1 per page. Ensure **body text** uses the appropriate weight and size tokens and that small text uses Manrope only for metadata and footnotes[\[2\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L65-L78).

6. **Check Fit Text usage**: for hero banners, callouts and impact statements, verify that the **FitText** component (or the “fit text to container” feature) is used instead of manual font‑size adjustments. Ensure the usage follows the updated guidelines (container sizes 6–15, single‑line text, high contrast) and that no manual media query tweaks or inline styles are present. If FitText is absent where an impactful headline exists, recommend its implementation.

### 3\. Colour system adherence

1. Identify the semantic colour tokens used: backgrounds (\--background, \--card, \--muted), text colours (\--foreground, \--muted-foreground, \--card-foreground), interactive colours (\--primary, \--secondary, \--accent, \--destructive), success and warning colours, and borders (\--border, \--border-soft, \--border-extra-soft)[\[6\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L133-L167).

2. Check that fills, strokes, text colours and interactive states reference these tokens and not raw hex values or unsupported Tailwind colour classes. Inspect both light and dark mode layers.

3. Verify **dark‑mode support**: ensure each colour token has a .dark variant defined in theme.css and that these variants are used in dark‑mode components[\[7\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L175-L177). Note any elements lacking dark‑mode variants or failing contrast requirements.

4. Ensure border and card colours use the appropriate variables and support dark mode; interactive states (hover, focus, active) should smoothly transition between the correct semantic tokens.

### 4\. Spacing, layout and component architecture

1. Confirm that **all spacing** is applied via the approved **Tailwind spacing classes** (e.g., p‑4, gap‑6, mb‑8, px-16). Hard‑coded padding or margin values should be flagged[\[8\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L181-L204). Ensure that vertical spacing uses gap rather than margin when appropriate.

2. Verify that gaps and padding follow the scale documented in the guide (16 px, 24 px, 32 px, 48 px, 64 px). Record any custom values or inconsistent spacing.

3. Inspect container widths and grid layouts: make sure that hero sections, feature grids and footers use the correct responsive breakpoints and align with the container classes defined in the guide.

4. Check border radius values and ensure they reference the variables (\--radius, \--radius-sm, \--radius-md, \--radius-lg, \--radius-xl)[\[9\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L207-L216). Verify that card corners, buttons and inputs use the correct radius tokens.

5. Verify shadows use the tokens (\--shadow-sm, \--shadow-md, \--shadow-lg, \--shadow-xl, \--shadow-primary, \--shadow-hover)[\[10\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L217-L225). Glows and overlays should use the corresponding tokens defined in the guide.

6. **Check component structure**: ensure that cards, feature grids, CTAs and other patterns follow the layout and naming conventions described in the usage guide. Components should be self‑contained with properly nested layers and clearly named groups.

### 5\. Accessibility

1. Assess colour contrast for text against backgrounds; contrast ratios should meet or exceed **4.5:1** for body text (AA)[\[1\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=Leading%20,it%C2%A0is%C2%A0line%20spacing%20familiar%20to%C2%A0almost%20everybody).

2. Ensure line heights provide comfortable reading (minimum **120 % of the font size**) and that small text remains legible[\[1\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=Leading%20,it%C2%A0is%C2%A0line%20spacing%20familiar%20to%C2%A0almost%20everybody).

3. Verify interactive elements have clear focus states and appropriate sizes for touch targets (\>44 px). Hover and focus colours must follow the semantic tokens.

4. Confirm the presence of alt text for images and ARIA labels for icons. Check that FitText components include aria-label when necessary, per the FitText guidelines.

5. If any animation or motion effects exist (e.g., sliding cards or parallax), ensure they respect the user’s prefers-reduced-motion setting.

### 6\. Compile the report

1. Create a Markdown report (/reports/lsx-agency-design-system-audit.md) summarising:

2. **Overall statistics** – number of elements audited, total violations by category.

3. **Violations** – table listing each violation with element name, page, violated guideline, and recommended fix (reference the correct token or Tailwind class).

4. **Observations** – patterns in the violations (e.g., misuse of hard‑coded hex colours, inconsistent line heights).

5. **Recommendations** – suggestions for updating guidelines or improving token clarity.

6. Do not modify the design; only document findings.

### 7\. Generate the task list

1. Populate /tasks/task‑list.md with remediation tasks. For each issue, include a concise title, description, priority and default status. Consolidate similar issues where possible.

2. Include tasks for adding missing dark‑mode variants, replacing hard‑coded values with tokens, correcting font usage, and updating spacing classes.

---

## Notes

* Always cross‑reference the **Design System Usage Guide** for correct token names and values. Do not introduce new tokens unless directed by the guide.

* Use the TypeType article’s recommendations on leading, tracking and spacing to evaluate text readability[\[1\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=Leading%20,it%C2%A0is%C2%A0line%20spacing%20familiar%20to%C2%A0almost%20everybody).

* Tailwind classes are permitted for spacing but not for colours or typography; those must rely on CSS variables.

---

[\[1\]](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/#:~:text=Leading%20,it%C2%A0is%C2%A0line%20spacing%20familiar%20to%C2%A0almost%20everybody) The Differences between Kerning, Tracking, Leading | TypeType®

[https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/](https://typetype.org/blog/kerning-tracking-leading-and-spacing-in-typography/)

[\[2\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L65-L78) [\[3\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L83-L100) [\[4\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L102-L111) [\[5\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L113-L130) [\[6\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L133-L167) [\[7\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L175-L177) [\[8\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L181-L204) [\[9\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L207-L216) [\[10\]](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md#L217-L225) design-system-usage-guide.md

[https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md](https://github.com/lightspeedwp/Lightspeedwpagency/blob/main/guidelines/design-system/design-system-usage-guide.md)