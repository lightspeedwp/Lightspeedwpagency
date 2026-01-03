# Template Part Block

<!-- Metadata -->
- **Slug:** `core/template-part`
- **Category:** Theme
- **Introduced:** WordPress 5.9

## Purpose

The Template Part block enables developers to define reusable structural parts of a theme, such as headers, footers, or other layout sections. It loads a template part file stored in the theme and allows it to be edited in the Site Editor. Template parts are meant to represent site structure rather than content. Because they are tied to a theme file, changes to a template part apply across templates that reference it.

## WordPress context

Template parts are registered in the theme's `theme.json` and `block-templates` directories. In the block editor, the Template Part block allows you to insert an existing template part (e.g., `header`, `footer`, `sidebar`) or create a new one. The toolbar includes controls to rename or detach the template part. The sidebar lets you assign the part to a slug and choose whether it is an area that can be replaced by a synced pattern. Template parts cannot be nested within patterns as they represent structure rather than content.

## Design system requirements

- **Structural purpose:** Use Template Part blocks for structural elements that are repeated across pages, such as headers, footers, sidebars, or global call‑to‑action sections. Do not use them for content that should vary per page or be edited in multiple places.
- **Consistent layouts:** Ensure template parts follow the same grid, spacing and alignment guidelines as your other blocks. For example, the header template part should align with content widths defined in your layout system and maintain consistent padding and margins.
- **Naming conventions:** Name template parts descriptively (e.g., `header-main`, `footer-primary`, `sidebar-blog`). Use slug casing (lowercase, hyphenated) to align with WordPress conventions.
- **Editable regions:** Provide clearly defined regions where content (navigation, logo, search) can be inserted. Use appropriate blocks (Navigation, Site Logo, Site Title, Site Tagline) within these regions to maintain modularity.
- **Variations:** Consider variations for different templates (e.g., header with hero image vs. simple header). Use patterns or conditional logic to swap template parts based on page context (home page vs. landing page).

## Component structure (React)

Since Template Part blocks refer to structural files in WordPress themes, they do not directly correspond to a React component. However, you can represent them in your component library by composing other components:

```jsx
// Example of a Header template part composed of other blocks
<HeaderTemplate>
  <Row justify="space-between" align="center">
    <SiteLogo src="/assets/logo.svg" width="150px" />
    <Navigation menu={primaryMenu} orientation="horizontal" />
  </Row>
  <Separator variant="wide" />
</HeaderTemplate>
```

### Props

| Prop       | Type    | Default | Description |
|------------|---------|---------|-------------|
| `name`     | string  | —       | Unique slug for the template part (e.g., `header-main`). |
| `children` | node    | —       | Components or blocks that make up the template part. |
| `className`| string  | —       | Additional CSS classes. |
| `style`    | object  | —       | Inline style overrides. |

## Usage guidelines

1. **Structural reuse:** Create template parts for sections that appear across multiple templates. For example, define a `header-main` template part and insert it into all page and post templates.
2. **Keep content out:** Do not include dynamic content within template parts unless it is part of the structure (e.g., navigation). Content like blog posts should be handled by Query Loops or patterns.
3. **Naming and organisation:** Organise template parts in the `block-template-parts` directory of your theme, using descriptive names. Document each template part's purpose in your theme documentation.
4. **Editor considerations:** When editing template parts in the Site Editor, avoid making local changes directly in the markup; instead, adjust the underlying templates or patterns. Provide clear instructions to content editors about which parts are safe to edit.

## WordPress implementation notes

Template parts are defined in your theme's `block-template-parts` directory as HTML files. In theme.json, define `templateParts` entries with `area`, `title` and `slug`. Use the Template Part block in templates to reference these files. When converting Figma designs, map global structural elements to Template Part definitions and build them using the appropriate blocks (e.g., Row, Columns, Stack, Navigation, Site Logo). Follow naming conventions consistent with WordPress guidelines.

## Accessibility considerations

- Use semantic HTML elements within template parts (e.g., `<header>`, `<footer>`, `<nav>`). Assign appropriate ARIA roles and labels (e.g., `<nav aria-label="Main navigation">`).
- Ensure that template parts support keyboard navigation and screen reader accessibility. For example, the header should include skip links to allow users to bypass repeated content.

## Variations

You may define alternate header or footer template parts to suit different contexts (e.g., a transparent header for landing pages). Document variations and provide conditions for when each should be used. Use patterns to build variations, but remember not to nest template parts inside patterns according to WordPress guidelines.

## Related components

- **Navigation block:** For menus within headers and footers
- **Site Logo block:** Displays logo
- **Site Title and Tagline blocks:** Show site name and tagline
- **Separator block:** To visually divide header content

## When to use

Use Template Part blocks to define and reuse structural elements across multiple templates. Do not use them for content that should vary per page, which should instead use patterns or blocks within the content area. Use patterns or synced patterns for reusable content (e.g., calls to action) rather than template parts.

## Additional notes

Template parts are theme‑level constructs. When building headless or front‑end frameworks, represent them as composed React components. Keep structure and design system guidelines in sync across WordPress and front‑end implementations.
