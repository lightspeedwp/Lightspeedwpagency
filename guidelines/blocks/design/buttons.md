# Buttons Block

<!-- Metadata -->
- **Slug:** `core/buttons`
- **Category:** Design
- **Introduced:** WordPress 5.0

## Purpose

The Buttons block is a container that groups one or more individual Button blocks. It allows authors to add multiple call‑to‑action buttons side by side or stacked with consistent spacing. WordPress documentation notes that the Buttons block adds button‑style links to pages or posts and can link to internal pages or external sites【210297106188007†L107-L113】.

## WordPress context

The Buttons block appears in the **Design** category. When selected, the toolbar offers controls to transform the block, move it, align it (left, center, right, wide, full) and change the layout orientation (horizontal or vertical). Inside the block, each child Button can be edited individually. The sidebar allows you to set spacing between buttons, typography, colours, border radius, border style and advanced settings.

## Design system requirements

- **Typography:** Buttons should use your primary label text style. Use a consistent font weight and uppercase or sentence case according to your brand guidelines. The theme's typography tokens (e.g., `--wp--preset--font-size--sm`, `--wp--preset--font-family--primary`) should be applied to button text for consistency【633332113554009†L84-L130】.
- **Colors:** Buttons convey hierarchy. Use colour tokens to differentiate primary, secondary and tertiary button variants (e.g., primary uses `--wp--preset--color--primary`, secondary uses `--wp--preset--color--secondary`, text buttons use transparent backgrounds with coloured text). Ensure sufficient contrast between text and background colours.
- **Spacing & size:** Apply consistent padding around button text using spacing tokens (e.g., `--wp--preset--spacing--sm` for vertical padding and `--wp--preset--spacing--md` for horizontal padding). Maintain a minimum touch target of 44 × 44 pixels for accessibility.
- **Border radius:** Use a uniform radius from your design system (e.g., `--wp--preset--radii--md`) across all button variants. Avoid mixing sharp and rounded corners.
- **Orientation & gap:** For horizontal button groups, use a small gap between buttons; for vertical arrangements, use larger spacing. Configure the Buttons block's orientation property accordingly.
- **Elevation & shadows:** Use subtle shadows for raised buttons where appropriate. Avoid overuse of shadows, particularly on secondary or text buttons.

## Component structure (React)

```jsx
// Example React structure for a button group
<Buttons orientation="horizontal" gap="var(--wp--preset--spacing--sm)">
  <Button variant="primary" href="/signup">Get Started</Button>
  <Button variant="secondary" href="/learn-more">Learn More</Button>
</Buttons>
```

### Props

| Prop          | Type    | Default | Description |
|---------------|---------|---------|-------------|
| `orientation` | string  | `horizontal` | Layout orientation: `horizontal` or `vertical`. |
| `gap`         | string  | theme spacing token | Space between buttons. |
| `align`       | string  | `flex-start` | Alignment of button group (e.g., `center`, `flex-end`). |
| `className`   | string  | —       | Additional CSS classes. |
| `style`       | object  | —       | Inline style overrides. |

The Button component, used within the Buttons block, should support the following props:

| Prop          | Type    | Default  | Description |
|---------------|---------|----------|-------------|
| `variant`     | string  | `primary`| Visual style: `primary`, `secondary`, `tertiary` (text button), etc. |
| `href`        | string  | —        | URL to link to. |
| `label`       | string  | —        | Accessible text label. |
| `icon`        | element | —        | Optional icon element. |
| `disabled`    | boolean | false    | Disable the button. |
| `onClick`     | function| —        | Callback for click events. |

## Usage guidelines

1. **Hierarchy:** Use primary buttons for the main call‑to‑action on a page, secondary buttons for less prominent actions and tertiary (text) buttons for inline actions. Limit the number of primary buttons per section to avoid decision fatigue.
2. **Orientation:** Choose horizontal orientation when space allows and actions are related. Use vertical orientation for mobile screens or when buttons have long labels.
3. **Consistency:** Maintain consistent spacing between buttons; do not rely on manual margins for each Button. Use the Buttons block's `gap` prop to control spacing.
4. **Icons:** Use icons sparingly and only when they reinforce the button's purpose. Place icons to the left of the text and ensure they are sized consistently with the text.
5. **Links vs. buttons:** Use the Button component for actions (submitting a form, triggering a modal) and anchor links for navigation or linking to another page. The Buttons block can contain both but maintain proper semantics.

## WordPress implementation notes

In theme.json, define styles for core/button within the `styles.blocks` section to ensure button typography, colours and spacing match your design tokens. Use CSS classes like `.is-style-outline` or `.is-style-fill` to support variations. When building React components from Figma, map frames labelled "Button" to the Button component and group multiple buttons using the Buttons component. Provide user controls for orientation and spacing.

## Accessibility considerations

- Buttons must have accessible labels that describe their action. Avoid using only icons without accompanying text; if an icon is present, add `aria-label` or visually hidden text.
- Ensure sufficient contrast between button text and background colours, meeting WCAG AA standards.
- Provide focus styles for keyboard navigation. Use `:focus-visible` to draw outlines around buttons when navigated via keyboard.
- For buttons triggering modals or dynamic content, manage focus by shifting focus to the modal and returning focus to the button on close.

## Variations

Common button styles include:
- **Primary:** Solid background with theme colour and white text.
- **Secondary:** Outlined button with transparent background and coloured border.
- **Tertiary/Text:** No background or border; coloured text only.
- **Icon buttons:** Buttons containing only an icon with accessible label (use caution).

Each variation should adhere to your design system tokens for colours, borders, typography and spacing.

## Related components

- **Button block:** The individual button used inside the Buttons block (documented within this file).
- **Row block:** For horizontal alignment of multiple items【421014285023784†L73-L168】.
- **Stack block:** For vertical alignment when stacking buttons【362877294984746†L87-L171】.

## When to use

Use the Buttons block when you need to present two or more calls to action together. For single actions, the Button component alone is sufficient. Avoid grouping unrelated actions together, which can confuse users.

## Additional notes

Buttons are critical interactive elements. Ensure they are placed prominently, use action‑oriented labels, and adhere to accessibility standards. When translating Figma designs, map each button layer to a React Button component and group them within a Buttons component to maintain consistent layout and spacing.
