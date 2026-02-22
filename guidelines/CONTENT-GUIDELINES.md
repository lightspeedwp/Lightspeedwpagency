# Content Guidelines

> **Last Updated:** February 16, 2026
> **Status:** Active

These guidelines ensure consistency in voice, tone, and formatting across the LSX Design System.

## 1. Voice & Tone

Our voice is **Professional, Expert, and Helpful**.

- **Professional:** We are experienced and reliable. Avoid slang or overly casual language.
- **Expert:** We speak with authority on WordPress, WooCommerce, and design systems.
- **Helpful:** We focus on solutions and benefits for the client.

## 2. Formatting & Typography

### 2.1 Headings
- **Sentence Case:** Use sentence case for all headings and subheadings.
  - ✅ **Correct:** "Why choose LightSpeed?"
  - ❌ **Incorrect:** "Why Choose LightSpeed?"
  - *Exception:* Proper nouns and product names (e.g., "WordPress", "WooCommerce") remain capitalized.

### 2.2 Brand Name Usage
- **Italics:** Whenever the brand name is used in body content or headings, it must be italicized to stand out.
  - Variations: *LightSpeed*, *LightSpeedWP*, *LightSpeedWP.Agency*.
  - Implementation: Use `<i>` tags in HTML strings or a formatting utility in React components.
  - Example: "Trust *LightSpeed* for your next project."

## 3. Data Management

- **Centralization:** All text content must be stored in `/src/app/data/` files, not hardcoded in components.
- **Type Safety:** All data files must use TypeScript interfaces.
- **Taxonomies:** Ensure consistent use of taxonomy slugs (e.g., 'ecommerce' not 'e-commerce') across data files.

## 4. Design System Alignment

- **CSS Variables:** All styling (colors, spacing, fonts) must use the defined CSS variables (`var(--...)`) or `wp-*` utility classes.
- **No Raw Tailwind:** Do not use raw Tailwind classes (e.g., `text-xl`, `p-4`). Use the design system tokens instead.
