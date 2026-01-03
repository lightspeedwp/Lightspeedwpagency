# Site Tagline Block

<!-- Metadata -->
- **Slug:** `core/site-tagline`
- **Category:** Theme
- **Introduced:** WordPress 5.9

## Purpose

The Site Tagline block displays a short description or slogan associated with your website. It pulls the tagline from WordPress settings and updates it globally when edited. According to WordPress documentation, the site tagline appears in search engines and social networks and helps visitors understand what the site is about; editing it in the block updates the tagline throughout the site.

## WordPress context

Found in the **Theme** category, this block is typically placed in the header or footer. The toolbar offers alignment options and the ability to transform it into a paragraph. The sidebar allows editing the tagline text (which updates WordPress settings), selecting text colour and background colour, adjusting typography (size, line height) and adding padding or margin. The tagline can optionally be linked to the home page.

## Design system requirements

- **Typography:** Use a smaller type style than the site title. For example, apply `var(--text-base)` or `var(--text-small)` from your type scale. Maintain sufficient line height for readability using `var(--line-height-normal)`.
- **Colour:** Choose a colour that complements but does not overpower the site title or logo. Use neutral colours like `var(--foreground-muted)` or secondary palette tokens like `var(--text-muted)`.
- **Spacing:** Provide adequate spacing between the site tagline and other header elements. Use Tailwind margin classes like `mt-2` or `mb-4` for vertical separation.
- **Alignment:** Align the tagline according to the header layout (left, centre, right). On mobile screens, centre alignment helps maintain a balanced appearance.
- **Link option:** If you choose to link the tagline to the home page, style the link consistently with other links in the header and provide an accessible label.

## Component structure (React)

```jsx
<SiteTagline 
  tag="p" 
  linkHref="/" 
  linkLabel="Home" 
  className="site-tagline"
>
  WordPress and WooCommerce web design experts
</SiteTagline>
```

### Props

| Prop        | Type    | Default | Description |
|-------------|---------|---------|-------------|
| `tag`       | string  | `p`     | HTML tag used (`p`, `span`, etc.). |
| `children`  | string  | —       | Tagline text. |
| `linkHref`  | string  | `/`     | URL to link the tagline to (optional). |
| `linkLabel` | string  | `Home`  | ARIA label if linked. |
| `className` | string  | —       | Additional CSS classes. |
| `style`     | object  | —       | Inline style overrides. |

## Usage guidelines

1. **Concise messaging:** Keep the tagline short and descriptive. It should communicate your brand's value proposition in a few words (ideally under 120 characters).
2. **Complement the title:** Use a smaller font size than the Site Title to create hierarchy. Position the tagline beneath or beside the title or logo.
3. **Optional linking:** Only link the tagline to the home page if there is no other home link available (e.g., the logo or title). Provide an appropriate accessible label.
4. **Update with care:** Editing the tagline updates WordPress settings. Ensure that site administrators are aware of this when making changes.

## WordPress implementation notes

Define default styles for the Site Tagline block in `styles.blocks["core/site-tagline"]` in theme.json, specifying typography using CSS variables (`var(--text-base)`, `var(--font-weight-regular)`) and colour tokens (`var(--foreground-muted)`). When converting Figma designs, map the tagline text layer to the SiteTagline component, apply the correct tag (e.g., `p`) and set the link properties if applicable.

## Accessibility considerations

- Provide sufficient colour contrast between the tagline and its background (WCAG AA minimum 4.5:1 for body text).
- Use semantic tags (`<p>` or `<span>`) that reflect the content's structural role.
- If linking the tagline, include an accessible label describing the link destination.

## Variations

Variations may include different font weights, letter spacing using `var(--letter-spacing-normal)` or text-transform styles (e.g., uppercase). Provide light and dark theme variations if needed using CSS variables.

## Related components

- **Site Title block:** Displays the site name
- **Site Logo block:** Shows the graphical logo
- **Navigation block:** For primary menus

## When to use

Use the Site Tagline block to communicate your brand's mission or service promise in headers or footers. Avoid using it within posts or pages, where content should instead focus on the article or page itself.

## Additional notes

The tagline may be displayed by social networks when sharing your site. Ensure it accurately reflects your site's purpose and is kept up to date. Consider using semantic markup and schema.org structured data to enhance SEO.
