# Navigation Block

<!-- Metadata -->
- **Slug:** `core/navigation`
- **Category:** Theme
- **Introduced:** WordPress 5.9 (for block themes)

## Purpose

The Navigation block displays a menu that helps visitors move around your website. It can contain links to pages, posts, categories, or custom URLs and is typically placed in header or footer templates. WordPress documentation notes that the navigation block displays the site's menu and is often added to header or footer templates; if no custom menu exists, a Page List block will automatically populate the menu.

## WordPress context

The Navigation block resides in the **Theme** category. When inserted, it may automatically display a menu structure based on existing navigation menus or pages. The block toolbar provides controls to transform the block, align it (left, center, right), open the menu in responsive (mobile) view, adjust orientation (horizontal or vertical) and set the menu's justification (space-between, center, etc.). The sidebar offers controls for selecting an existing menu, creating a new menu or using a Page List; adjusting the layout (horizontal/vertical), spacing between items, typography, colours, border settings and responsive behaviour.

Child blocks include **Custom Link**, **Home Link**, **Submenu** and **Social Icons**. These are described within this file.

## Design system requirements

- **Layout & orientation:** Use horizontal orientation for desktop navigation and vertical (stacked or collapsed) orientation for mobile. Use a Row or Stack block to wrap the Navigation block and align it with the logo and site title in the header.
- **Spacing:** Define consistent spacing between menu items using Tailwind spacing classes (e.g., `gap-6`, `gap-8`). Provide adequate padding around the navigation area to separate it from other header elements (e.g., `px-6`, `py-4`).
- **Typography:** Use a clear, legible font for navigation items. Apply appropriate letter spacing using `var(--letter-spacing-normal)` or `var(--letter-spacing-wide)` and use sentence case or uppercase according to your brand guidelines. Use tokens like `var(--text-base)` or `var(--text-small)` for menu text with `var(--font-weight-medium)` or `var(--font-weight-semibold)`.
- **Colours & states:** Define colours for normal, hover, active and focus states. Use your palette tokens:
  - Normal: `var(--foreground)` or `var(--text-muted)`
  - Hover: `var(--primary)` or `var(--foreground)`
  - Active: `var(--primary)` with underline
  - Focus: Visible outline using `var(--ring)` or custom focus style
  - Provide a high contrast ratio for accessibility (WCAG AA 4.5:1 minimum).
- **Responsive behaviour:** Implement a mobile menu (e.g., hamburger icon) that toggles the visibility of the navigation links. Provide clear affordances and accessible labels for the menu toggle button (e.g., `aria-label="Toggle navigation"`, `aria-expanded="false"`). Use an overlay or slide‑down menu for mobile.
- **Link hierarchy:** Use submenus to group related links. Limit the depth of nested submenus to improve usability (2-3 levels maximum). Provide visual indicators (e.g., chevron-down icons) for expandable items.

## Component structure (React)

```jsx
<Navigation 
  menu={primaryMenu} 
  orientation="horizontal" 
  spacing="gap-6"
  align="center"
>
  {primaryMenu.map(item => (
    <NavItem 
      key={item.id} 
      href={item.url} 
      label={item.title} 
      isActive={item.isActive}
      hasSubMenu={item.children?.length > 0}
    >
      {item.children?.length > 0 && (
        <SubMenu>
          {item.children.map(child => (
            <NavItem 
              key={child.id} 
              href={child.url} 
              label={child.title} 
            />
          ))}
        </SubMenu>
      )}
    </NavItem>
  ))}
</Navigation>
```

### Props

| Prop          | Type    | Default | Description |
|---------------|---------|---------|-------------|
| `menu`        | array   | —       | Array of menu items with `id`, `title`, `url` and optional `children`. |
| `orientation` | string  | `horizontal` | Layout orientation (`horizontal` or `vertical`). |
| `spacing`     | string  | `gap-6` | Tailwind spacing class for space between menu items. |
| `align`       | string  | `flex-start` | Alignment of the menu (`center`, `space-between`, `flex-end`). |
| `className`   | string  | —       | Additional CSS classes. |
| `style`       | object  | —       | Inline style overrides. |

### Nested components

- **NavItem**: Represents a single link. Props: `href`, `label`, `children`, `hasSubMenu`, `isActive`.
- **SubMenu**: Wraps nested NavItem components. Props: `children`.
- **MenuToggle**: Button to open/close mobile menu. Props: `onClick`, `ariaLabel`, `ariaExpanded`.

## Usage guidelines

1. **Plan menu structure:** Organise pages and categories into logical groups. Use submenus for hierarchical navigation but avoid deep nesting (no more than 2–3 levels).
2. **Consistency across devices:** Provide the same top‑level links on desktop and mobile. Hidden items on mobile should be accessible through the menu toggle.
3. **Visual cues:** Indicate active links and hover states with underline, colour change or background. Provide clear indicators for submenus (e.g., chevron-down or caret icons from lucide-react).
4. **Access with keyboard:** Ensure that menus are fully navigable via keyboard. Use proper `tabindex` sequencing and ARIA roles (`menu`, `menuitem`, `menubar`, `menuitemsubmenu`).
5. **Accessible labels:** The menu toggle button must include an accessible label (e.g., "Open menu", "Close menu"). For submenus, set `aria-haspopup="true"` and `aria-expanded` attributes on the toggle element.

## WordPress implementation notes

In theme.json, you can set default typography, colour and spacing for navigation menus under `styles.blocks["core/navigation"]`. Use CSS variables for all styling:
- Typography: `var(--text-base)`, `var(--font-weight-medium)`
- Colors: `var(--foreground)`, `var(--primary)`, `var(--text-muted)`
- Spacing: Tailwind classes (`gap-6`, `px-6`, `py-4`)
- Borders: `var(--radius)` for submenu dropdowns

Use classes such as `.wp-block-navigation` to target menu styling. When converting Figma designs, map nav bars or menu groups to the Navigation component and ensure menu data can be dynamic (loaded from WordPress menus or centralized data like `/src/app/data/pages.ts`).

## Accessibility considerations

- Provide meaningful link text for each menu item. Avoid using icons alone without labels.
- Implement keyboard navigation: 
  - Tab key should move focus among menu items
  - Arrow keys should navigate within submenus
  - Enter/Space should activate links and expand submenus
  - Escape should close submenus
- Use appropriate ARIA roles and states to indicate expanded or collapsed menus:
  - `role="navigation"` on container
  - `role="menubar"` on menu list
  - `role="menuitem"` on links
  - `aria-expanded` on submenu toggles
  - `aria-haspopup="true"` on items with submenus
- Follow the WAI‑ARIA Authoring Practices for menu design.
- Ensure adequate colour contrast for text and focus indicators (WCAG AA 4.5:1 minimum).
- Touch targets must be at least 44×44px for mobile (WCAG AAA compliance).

## Variations

Common variations include:
- **Horizontal vs. vertical layout:** Use Row for horizontal, Stack for vertical
- **Centered vs. left‑aligned menus:** Use `align` prop
- **Mega menus:** For large sites with many navigation items, use Grid within SubMenu
- **Responsive variations:** Collapsed mobile menus with hamburger icon
- **Skip links:** Add accessible skip navigation links at the top

Maintain consistency across templates and provide clear documentation for each variation.

## Related components

- **Site Logo block:** Often placed next to navigation in headers
- **Site Title block:** Typically adjacent to navigation
- **Search block:** Frequently positioned near navigation
- **Page List block:** Automatically populates navigation when no custom menu is defined (internal WordPress functionality)
- **Row block:** For horizontal layout of navigation with logo
- **Stack block:** For vertical mobile navigation

## When to use

Use the Navigation block in site headers, footers or sidebar templates to allow visitors to navigate your site. Do not place navigation menus within page content (use in-page anchor links or table of contents instead). Use submenus judiciously to organise many links without overwhelming users.

## Additional notes

Navigation is critical for usability and SEO. Ensure that your design system provides clear guidelines for link spacing, font sizes and states. Test navigation with:
- Keyboard only (Tab, Enter, Arrow keys, Escape)
- Screen readers (NVDA, JAWS, VoiceOver)
- Touch devices (ensure 44×44px minimum tap targets)
- Different viewport sizes (mobile, tablet, desktop)

Consider implementing breadcrumb navigation for deep site hierarchies to complement the main navigation. Use the existing `useNavigation()` hook from `/src/app/hooks/useNavigation.ts` to centralize navigation data and active state management.
