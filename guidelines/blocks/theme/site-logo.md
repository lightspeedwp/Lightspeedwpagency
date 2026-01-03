# Site Logo Block

<!-- Metadata -->
- **Slug:** `core/site-logo`
- **Category:** Theme
- **Introduced:** WordPress 5.9 (for block themes)

## Purpose

The Site Logo block displays a graphical representation of your site's identity—typically your company logo. It is part of the theme block library and ensures that the logo is managed centrally; updating it in one place updates it across the entire site. WordPress documentation notes that the Site Logo block displays an image representing the site and that updating it applies changes globally.

## WordPress context

The Site Logo block appears under the **Theme** category and is intended for use in templates such as headers or footers. In the block toolbar, you can upload a logo, replace it, and adjust alignment (left, center, right). The sidebar settings allow you to set the width, apply cropping and toggle the option to link the logo to the home page. The block supports duotone filters and can inherit colours from the theme palette.

## Design system requirements

- **Logo source:** Use a high‑resolution SVG or PNG file. Prefer SVG for scalability and sharpness across devices. The logo should include transparent backgrounds and be optimised for file size.
- **Sizing:** Set a fixed width for the logo (e.g., 120–200 px) to maintain consistency across pages. Provide responsive rules to scale down on small screens. Use the block's width control or CSS to limit maximum width and preserve aspect ratio.
- **Padding & margins:** Use Tailwind spacing classes (e.g., `mx-4`, `my-2`) to define appropriate padding or margin around the logo within header or footer layouts. Avoid leaving the logo too close to other navigation elements.
- **Colours & filters:** If your design supports alternate colour schemes, define duotone filters or alternate logo versions (e.g., light/dark variations). Ensure contrast with the background.
- **Link behaviour:** Typically, the logo links to the home page. Provide an option to toggle this in the block settings. Use accessible `aria-label` such as `Home` for the link.

## Component structure (React)

```jsx
<SiteLogo 
  src="/assets/logo.svg" 
  alt="LSX Design Logo" 
  width="150px" 
  linkHref="/" 
  linkLabel="Home" 
/>
```

### Props

| Prop       | Type    | Default | Description |
|------------|---------|---------|-------------|
| `src`      | string  | —       | Image source URL. |
| `alt`      | string  | —       | Alternative text describing the logo. |
| `width`    | string  | `auto`  | Width of the logo; height is auto to maintain aspect ratio. |
| `linkHref` | string  | `/`     | URL to link the logo to (usually the home page). |
| `linkLabel`| string  | `Home`  | ARIA label for the link. |
| `className`| string  | —       | Additional CSS classes. |
| `style`    | object  | —       | Inline style overrides. |

## Usage guidelines

1. **Centralise logo management:** Use the Site Logo block in global templates (header, footer) rather than inserting the logo manually in each page. This ensures consistent appearance and easier updates.
2. **Maintain aspect ratio:** Do not stretch the logo. Set only the width, letting the height adjust automatically to preserve proportions.
3. **Provide alt text:** Although logos often contain text, you should still provide descriptive alternative text (e.g., "LSX Design Logo") for screen readers. Avoid phrases like "Logo" without context.
4. **Link to home:** The logo typically links back to the home page. Provide an accessible label to indicate that the link returns the user to the home page.
5. **Responsive design:** Adjust logo size based on viewport width. Use CSS media queries or clamp values to scale the logo gracefully.

## WordPress implementation notes

Define default styles for the Site Logo block in `styles.blocks["core/site-logo"]` in theme.json. Set `width` and `height` or `max-width` values, and specify object fit to maintain aspect ratio. Provide duotone presets if your design requires tinted logos. When converting Figma to React, map the logo layer to the SiteLogo component and supply props for `src`, `alt` and `width`.

**Note:** This component replaces and extends the existing `Logo.tsx` component with WordPress block parity and enhanced props.

## Accessibility considerations

- Provide meaningful alternative text describing the logo and the organisation it represents.
- Ensure that the link (if used) has an appropriate accessible name (e.g., `aria-label="Home"`).
- Consider adding a visually hidden text next to the logo for screen readers that conveys the site name if the logo does not contain text.

## Variations

You may define variations of the Site Logo block for light and dark themes or different sizes (e.g., condensed header vs. full header). Provide alternate logo files or colours accordingly. Avoid creating too many variations; maintain a clear, recognisable identity.

## Related components

- **Site Title block:** Displays the site name text
- **Navigation block:** For menus placed alongside the logo in headers
- **Site Tagline block:** Displays a brief description or slogan
- **Logo component (deprecated):** Legacy component being replaced by SiteLogo

## When to use

Use the Site Logo block in global template parts such as headers, footers or sidebars. Avoid adding it in post or page content. Use the Site Title block instead when text is preferred over an image.

## Additional notes

Ensure the logo file is optimised for web use and scales gracefully. Provide separate assets for retina displays if using PNGs. Where possible, use an SVG with appropriate viewBox settings to ensure crisp rendering at any size.

**Migration from Logo.tsx:** The existing Logo component should be refactored to align with this specification, adding WordPress block parity props (`linkHref`, `linkLabel`, `width`) and following the design system token requirements.
