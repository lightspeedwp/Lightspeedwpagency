# Site Title Block

<!-- Metadata -->
- **Slug:** `core/site-title`
- **Category:** Theme
- **Introduced:** WordPress 5.9

## Purpose

The Site Title block displays the name of your website. It retrieves the site title from WordPress settings (`Settings › General`) and renders it wherever the block is placed. Editing the text within the block updates the site's name globally; this change affects the browser title bar and search results. WordPress documentation explains that the Site Title block displays the site name and that updating it updates the name across the site.

## WordPress context

This block appears in the **Theme** category and is typically used in header templates. The toolbar provides alignment options and the ability to transform the block into a heading (H1–H6) or paragraph for styling. The settings sidebar allows you to adjust typography (font size, weight), colours and spacing. You can also toggle whether the site title links to the homepage. Because this block controls the site's main title, changes to the text will reflect across the entire site.

## Design system requirements

- **Typography:** Use the Title or Display style from your type scale for the site name. In many designs, the site title is displayed as an H1 on the homepage and demoted to a smaller size on subpages (to maintain a proper heading hierarchy). Use tokens like `var(--text-h2)` or `var(--text-h3)` for headings.
- **Colour:** Choose a colour that stands out against the header background. Use palette tokens like `var(--primary)` or `var(--foreground)` for dark backgrounds. Provide variations for light and dark themes if necessary.
- **Spacing:** Provide appropriate margins around the site title to separate it from the logo or navigation. Use Tailwind spacing classes (e.g., `mx-4`, `my-2`) to maintain consistency.
- **Alignment:** Align the site title according to your header layout—left, centered or right. In responsive designs, center the title on mobile to preserve alignment when navigation collapses.
- **Link behaviour:** Typically, the site title links to the home page. Provide an accessible label for the link (e.g., "Home") and style the link to match your design. Optionally, allow the link to be disabled for cases where the logo already links home.

## Component structure (React)

```jsx
<SiteTitle tag="h1" linkHref="/" linkLabel="Home" className="site-title">
  LSX Design
</SiteTitle>
```

### Props

| Prop        | Type    | Default | Description |
|-------------|---------|---------|-------------|
| `tag`       | string  | `h1`    | HTML tag used to render the title (`h1`–`h6` or `p`). |
| `children`  | string  | —       | The site title text. |
| `linkHref`  | string  | `/`     | URL to link the title to (home page). |
| `linkLabel` | string  | `Home`  | ARIA label for the link. |
| `className` | string  | —       | Additional CSS classes. |
| `style`     | object  | —       | Inline style overrides. |

## Usage guidelines

1. **Consistent branding:** Use the Site Title block in headers and footers to display your site name. If you use a site logo, the title can complement or replace the logo when needed (e.g., screen readers, text‑based browsers).
2. **Heading hierarchy:** Render the site title as an H1 on the homepage to establish the page hierarchy. On subpages, use a lower heading level (e.g., H2 or H3) to maintain semantic structure and allow the page title to take the H1 spot.
3. **Link to home:** Provide a link to the home page unless the logo already serves this purpose. Use accessible labels and ensure the link is not repeated multiple times in the header.
4. **Updating the title:** Editing the Site Title block text will change the site name in WordPress settings. Ensure that this action is intentional and coordinated with site administrators.

## WordPress implementation notes

Define default styles for the Site Title block in `styles.blocks["core/site-title"]` in theme.json. For example, set typography using CSS variables and colors from the design system. Provide a mechanism to override heading level via props. When mapping Figma designs, convert the site name text layer to the SiteTitle component and set the appropriate heading level.

## Accessibility considerations

- Ensure the site title has sufficient colour contrast against its background (WCAG AA minimum 4.5:1).
- Provide meaningful `aria-label` for the link to indicate that it navigates to the home page.
- Use semantic heading levels that reflect the document structure.

## Variations

Variations may include alternate font families or weights, uppercase styling or additional decorative elements (e.g., underline). Keep variations consistent across the site. Provide separate styles for light and dark modes if needed.

## Related components

- **Site Logo block:** For a graphical representation of your brand
- **Navigation block:** For menus adjacent to the site title
- **Site Tagline block:** Displays your site's tagline or slogan

## When to use

Use the Site Title block whenever you need to display the name of your website in templates or pattern designs. Do not insert it manually into post content. For accessible branding, consider pairing the Site Title with the Site Logo.

## Additional notes

Avoid using the site title as an image. Text is preferable because it scales better, loads faster and is accessible to screen readers and search engines.
