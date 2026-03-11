# AI-Powered SEO

## Purpose & Audience
The **AI-Powered SEO** page exists to communicate automated keyword analysis, content scoring, schema markup, and competitor monitoring.. This page is a child of the **Solutions** section.

Target users come here to understand what LightSpeed offers within this scope, assess whether it matches their needs and discover next steps.

## Content Structure
**Hero section** – concise headline reflecting the page’s purpose, with a subheading and a clear call to action.
**Feature overview** – highlight key features, benefits and outcomes relevant to this topic.
**Audience pain points** – briefly list common problems this solution/service addresses.
**Case study or testimonial** – include a short success story or quote reinforcing credibility.

## Design Brief
Use the **page** template with a clear, modular layout.
Apply the brand colour palette: neutral backgrounds (`neutral-100…300`), accent colours (`primary`, `accent-100…900`) for calls to action and highlights.
Typography should follow the type scale using numeric slugs (`100…900`). Use larger sizes for the hero headline and smaller sizes for body copy. Ensure sufficient contrast and hierarchy.
Maintain consistent spacing using spacing tokens (`5…100`) for padding and margins. Align content to an 8‑point grid for harmony.
Leverage existing design system components such as cards, buttons, accordions and lists. Avoid bespoke patterns unless necessary. For cards and lists, use consistent border radii (`100…500`) and shadows (`100…600`).
Ensure semantic HTML structure: one `<h1>` per page, proper landmark regions, descriptive alt text for images and ARIA labels where appropriate. Contrast ratios must meet WCAG 2.1 AA.

## CSS Implementation Notes
Reference WordPress preset variables rather than hard‑coded values. For example:
- Colours: `var(--wp--preset--color--primary)`, `var(--wp--preset--color--contrast)`, `var(--wp--preset--color--neutral-300)`.
- Spacing: `var(--wp--preset--spacing--40)` for standard section padding; adjust with `spacing--20` or `spacing--80` where needed.
- Typography: use `var(--wp--preset--font-size--400)` for body text and scale up or down for headings (`600`, `700`, `800`).
- Border radii: `var(--wp--preset--radius--200)` for buttons and cards to maintain consistency.
If custom properties are needed (e.g. z‑index, motion durations), define them under `settings.custom` in `theme.json` and reference them here (e.g. `var(--wp--custom--z-index--modal)`).
For interactive elements like accordions or tabs, use the WordPress Interactivity API and keep markup declarative. Avoid inline JavaScript; rely on the API’s directives to attach behaviours.
