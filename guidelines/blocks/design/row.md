# Row Block

<!-- Metadata -->
- **Slug:** `core/row`
- **Category:** Design
- **Introduced:** WordPress 6.0

## Purpose

The Row block is a container that arranges its child blocks horizontally in a single row. It is ideal for creating horizontal groups of content such as navigation links, social icons or horizontally aligned calls to action. WordPress documentation describes the Row block as a horizontal layout container that can hold any block and allows control over justification, vertical alignment and overall width【421014285023784†L73-L168】.

## WordPress context

In the block editor, the Row block appears under the **Design** category. Users can insert it via the block inserter or by typing `/row`. The toolbar provides controls to transform the block, drag or move it, align its width (default, wide, full), set horizontal justification (left, center, right, space‑between, etc.) and vertical alignment (top, center, bottom). These controls enable quick adjustment of alignment relative to the viewport【421014285023784†L73-L168】. In the settings sidebar, you can specify layout spacing, enable wrap (for overflowing items), apply colors, typography, dimensions, borders and advanced custom CSS.

## Design system requirements

- **Layout:** Use the Row block to align items horizontally with consistent spacing. Set `gap` using spacing tokens like `--wp--preset--spacing--sm` or `--wp--preset--spacing--md`. Use `justify-content` and `align-items` properties to control horizontal and vertical alignment. Avoid wrapping important content to the next line; instead, reduce the number of items or switch to a Stack block on small screens.
- **Typography:** The Row block itself doesn't define typography; ensure inner blocks use appropriate text styles (e.g., button text uses the label style).
- **Colors and backgrounds:** Apply background colors sparingly to highlight the row as a distinct section, using palette tokens. Individual child blocks may have their own colors (e.g., button color). Ensure adequate contrast and consistent use of theme colors.
- **Spacing:** Use margin and padding tokens to position the row relative to surrounding content. Maintain equal spacing between items within the row; do not rely on default browser spacing.
- **Borders & shadows:** Where necessary, define border or shadow properties on the Row block using your presets; these should align with your design system guidelines.

## Component structure (React)

```jsx
// Example React structure for a horizontal row of buttons
<Row gap="var(--wp--preset--spacing--sm)" justify="center" align="center">
  <Button variant="primary">Sign up</Button>
  <Button variant="secondary">Learn more</Button>
</Row>
```

### Props

| Prop       | Type    | Default | Description |
|------------|---------|---------|-------------|
| `gap`      | string  | theme spacing token | Horizontal spacing between child elements. |
| `justify`  | string  | `flex-start` | Horizontal justification (e.g., `center`, `space-between`). |
| `align`    | string  | `center` | Vertical alignment of items (`flex-start`, `center`, `flex-end`). |
| `wrap`     | boolean | false | Whether items should wrap onto the next line on small screens. |
| `className`| string  | —     | Additional CSS classes. |
| `style`    | object  | —     | Inline style overrides. |

## Usage guidelines

1. **Consistent alignment:** Use Row for horizontally aligned content like menus, icons or calls to action. Choose justification based on the design (e.g., `space-between` for even distribution or `center` for grouping items). Avoid uneven spacing by manually spacing items; instead use the `gap` prop.
2. **Responsive layouts:** On narrow screens, consider enabling wrap or replacing the Row with a Stack or Dropdown (for navigation). The Row block does not automatically wrap items; test behaviour at different breakpoints using the Style Book preview.
3. **Combine with other layout blocks:** You can nest Row within Columns or Group blocks to create more complex structures. For example, a header layout might use a Row for navigation inside a full‑width Group.
4. **Avoid overloading:** Keep the number of items in a row manageable. Too many items can cause wrapping or cramped spacing.

## WordPress implementation notes

In theme.json, enable layout support for the Row block: `supports: { align: true, layout: true }`. Use `layout: { type: "flex", orientation: "horizontal", justifyContent: "flex-start", alignItems: "center" }` to mirror WordPress defaults. Provide user controls for gap and wrap if needed. Map Figma's horizontal stacks to the Row React component in your design system.

## Accessibility considerations

- Ensure that focus order follows the visual order when using interactive elements within a row.
- Provide clear labels for each interactive component (e.g., accessible button text). Avoid using an icon alone without label unless accompanied by `aria-label`.
- When using a row for navigation, ensure that it is contained within a `<nav>` element with appropriate `aria-label`.

## Variations

The Row block can be modified to support full‑width background color or sticky positioning by wrapping it in a Group block with style settings. For horizontal lists or icon bars, consider using the Buttons block or Social Icons block (not yet documented here).

## Related components

- **Columns block:** For multi‑column layouts【425069070290782†L87-L120】.
- **Stack block:** For vertical stacking【362877294984746†L87-L171】.
- **Grid block:** For more complex grid layouts【203514944270704†L86-L170】.

## When to use

Use the Row block when you need a simple horizontal arrangement of blocks, such as aligning buttons or icons. Avoid using Row purely for aesthetic grouping if vertical stacking would improve readability on smaller screens.

## Additional notes

The Row block leverages CSS flexbox under the hood. When translating Figma designs to React components, map horizontal frames or auto‑layout frames to the Row component and configure gap and alignment props accordingly.
