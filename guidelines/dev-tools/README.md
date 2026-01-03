# Developer Tools — LSX Design System

## Overview

The Developer Tools section provides testing, documentation, and showcase interfaces for the LSX Design system. All tools follow consistent patterns for navigation, filtering, and layout.

**Purpose:**
- Test and validate design system components
- Document component APIs and usage
- Showcase patterns and variations
- Provide live preview and testing capabilities

**URL Structure:**
- Landing page: `/dev-tools/`
- Sub-pages: `/dev-tools/{tool-name}/`

## Documentation Files

- **[guidelines.md](./guidelines.md)** — Complete dev-tools guidelines (structure, components, patterns) ⭐⭐⭐
- **[layout-component.md](./layout-component.md)** — DevToolsLayout component documentation
- **[filtering.md](./filtering.md)** — Filtering patterns and mobile UX
- **[breadcrumbs.md](./breadcrumbs.md)** — Breadcrumb navigation structure

## Quick Reference

**Navigation Pattern:**
```
Home > Dev Tools > {Tool Name}
```

**Required Components:**
- Breadcrumbs (always)
- Page header with title and description
- Filter toolbar (desktop + mobile popover)
- Main content area with consistent spacing
- Footer with metadata

**Design System:**
- 100% CSS variables from `theme.css`
- Lexend for headings/body, Manrope for small text
- WCAG 2.1 AA compliant
- Mobile-first responsive design

## Available Tools

1. **Template Tester** — Test all WordPress templates and page archetypes
2. **Component Showcase** — Browse complete component library
3. **Block Documentation** — Document all WordPress blocks
4. **Component API** — Reference all component APIs
5. **Design Blocks Showcase** — Showcase design-specific blocks
6. **Button Showcase** — Display all button styles and variants
7. **Header/Footer Comparison** — Compare header and footer variations
8. **Icon Library** — Browse and search icon library
9. **Live Preview** — Live component preview tool
10. **Section Presets Showcase** — Display all section style presets
11. **Theme Blocks Showcase** — Showcase WordPress theme blocks

## Implementation Checklist

When creating a new dev tool page:

- [ ] Use `DevToolsLayout` wrapper component
- [ ] Add breadcrumbs with proper hierarchy
- [ ] Implement desktop filter toolbar
- [ ] Add mobile filter popover (if applicable)
- [ ] Follow consistent header structure
- [ ] Use CSS variables for all styling
- [ ] Ensure WCAG 2.1 AA compliance
- [ ] Add keyboard navigation support
- [ ] Include skip link for accessibility
- [ ] Test on mobile devices

**See:** [guidelines.md](./guidelines.md) for complete implementation details.

---

**Last Updated:** December 28, 2024  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)
