# Search Block

<!-- Metadata -->
- **Slug:** `core/search`
- **Category:** Theme
- **Introduced:** WordPress 5.6

## Purpose

The Search block adds a search form to your site, enabling visitors to search posts, pages or other content. It consists of an input field and a submit button. It is typically placed in headers, sidebars or footers. Although a separate dedicated Search block file is not provided in the official docs list above, general WordPress guidance applies.

## WordPress context

The Search block appears in the **Theme** category. When inserted, it displays a text input and a submit button. The toolbar provides controls to change alignment and button position (button inside the input or outside). In the sidebar, you can set the placeholder text, choose whether the search button displays an icon or text label, adjust typography and colour, and configure spacing and border styles. The block supports the addition of a search label for accessibility.

## Design system requirements

- **Form layout:** Decide whether the button should be inside the input (icon button) or outside as a separate button. For compact spaces (e.g., header), an icon inside the field may be preferable; in sidebars, a separate button with "Search" label can enhance clarity.
- **Typography:** Use body text style for the input placeholder and button text. Set a clear font size using tokens like `var(--text-base)` for the input and `var(--text-small)` or `var(--text-base)` for the button. Use `var(--font-weight-regular)` for input text and `var(--font-weight-semibold)` for the button.
- **Colours:** Use neutral colours for the input background (`var(--background)` or `var(--surface)`) and text (`var(--foreground)`), ensuring sufficient contrast (WCAG AA 4.5:1 minimum). Use your primary colour (`var(--primary)`) for the button or the search icon. Ensure focus states are clearly visible using `var(--ring)` or custom focus outline.
- **Spacing & sizing:** Provide adequate padding inside the input field (e.g., `p-3`) and button (e.g., `px-4 py-2`). Set the height of the search field to align with other form controls (typically 44-48px for accessibility). Use Tailwind spacing classes for margins around the search form within its container.
- **Border & radius:** Use consistent border styles and radius from your design system. Apply `var(--radius)` or `var(--radius-md)` for rounded corners (e.g., 4-6px). Use `border: 1px solid var(--border)` for input fields.

## Component structure (React)

```jsx
<Search 
  placeholder="Search articles…" 
  buttonLabel="Search" 
  showIcon={true} 
  buttonPosition="outside"
  align="left" 
/>
```

### Props

| Prop          | Type    | Default  | Description |
|---------------|---------|----------|-------------|
| `placeholder` | string  | "Search…"| Placeholder text in the input field. |
| `buttonLabel` | string  | "Search" | Text label for the button. Set to an empty string to display only an icon. |
| `showIcon`    | boolean | true     | Whether to display a search icon. |
| `buttonPosition` | string | `outside` | Position of the button: `inside` (icon within input) or `outside` (separate). |
| `align`       | string  | `left`   | Alignment of the search form within its container. |
| `className`   | string  | —        | Additional CSS classes. |
| `style`       | object  | —        | Inline style overrides. |
| `onSubmit`    | function| —        | Callback function when form is submitted. |

## Usage guidelines

1. **Placement:** Place search forms where users expect them: in the header (top right or center), sidebar, or footer. Avoid hiding the search function behind icons on desktop; visible search encourages engagement.
2. **Accessible labelling:** Use a `<label>` element associated with the search input via `htmlFor` and `id`. Even if you hide the label visually (using `sr-only` class), it must remain accessible to screen readers.
3. **Placeholder text:** Keep placeholder text concise and descriptive (e.g., "Search articles", "Find content"). Do not rely solely on placeholder text as the label.
4. **Button label vs. icon:** Use a text label for the submit button to improve accessibility, especially for users with cognitive impairments. If using an icon only, provide an `aria-label` describing the button's function (e.g., "Submit search").
5. **Keyboard interaction:** Users should be able to submit the form by pressing Enter. Ensure the search field has `type="search"` and handle the `onSubmit` event properly.

## WordPress implementation notes

Define search styles in theme.json under `styles.blocks["core/search"]`, including input and button styling using CSS variables. Set colors using `var(--foreground)`, `var(--background)`, `var(--primary)`, and border radius using `var(--radius)`. When mapping Figma designs, convert the search input and button into a Search component and ensure it posts to the WordPress search endpoint (`?s=search-term`). Provide support for customizing placeholder text and button label via props.

## Accessibility considerations

- Provide a visible or visually hidden label for the search input. Use `aria-label` or `<label>` with `htmlFor` to describe the field.
- Ensure focus styles are visible on both the input and the button (2px outline or ring).
- Provide a clear error state or empty state message if the search yields no results.
- Use semantic form elements (`<form>`, `<input type="search">`, `<button type="submit">`).
- Ensure color contrast ratios meet WCAG AA standards (4.5:1 for text, 3:1 for UI components).

## Variations

Variations may include inline search forms (input and button in a single row), stacked search forms (input above button), and minimal search with only an icon. Provide dark mode variations and adjust border and background colours accordingly using CSS variables (`var(--background)`, `var(--surface)`, `var(--foreground)`).

## Related components

- **Navigation block:** Search is often placed near navigation in headers
- **Query Loop block:** Use to display search results. The Query Title block shows the search query

## When to use

Use the Search block on sites with substantial content, enabling users to quickly find information. For small sites or landing pages with limited content, a search may not be necessary. Consider adding search when you have 20+ pages or posts.

## Additional notes

Ensure that your site's search is performant and relevant. Consider custom search plugins for improved search results or faceted search. When using third‑party search services (e.g., Algolia), adapt the Search component to query those endpoints while maintaining the same design and accessibility standards. Always provide feedback during search (loading state) and after search (results count).
