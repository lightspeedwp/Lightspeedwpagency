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

### Testing
1. **Template Tester** — Test all 90+ WordPress templates with instant switching
2. **Compliance Scorecard** — Real-time WCAG 2.1 AA/AAA compliance testing (26+ checks)

### Design
3. **Design System Test** — Complete design system testing suite (107 automated tests)
4. **Design Tokens Reference** ✅ NEW — Complete CSS custom properties reference (colors, typography, spacing, shadows, radii)
5. **Design Playground** ✅ NEW — Interactive sandbox to experiment with tokens live
6. **Design Blocks Showcase** — All design blocks (Buttons, Heading, Paragraph, etc.)
7. **Theme Blocks Showcase** — WordPress theme blocks (Site Logo, Navigation, etc.)
8. **Button Showcase** — Complete button system (5 variants, 3 sizes, WCAG AAA)
9. **Section Presets Showcase** — All 17 section style presets
10. **Header/Footer Comparison** — Compare header and footer variations
11. **Icon Library** — Complete Lucide React icon reference
12. **Style Guide** — Complete visual style guide with tokens

### Development
13. **Component Showcase** — Browse all 85+ components with live examples
14. **Feature Showcase** — Interactive demos of all 164 production features
15. **Live Preview** — Live component preview with interactive property editor

### Documentation
16. **Block Documentation** — Complete WordPress block library with usage examples
17. **Component API** — TypeScript interfaces and complete API reference
18. **Documentation Generator** ✅ NEW — Auto-generated JSDoc docs with props tables, usage examples, and cross-reference links

### Analytics
19. **Code Quality Dashboard** ✅ NEW — Static analysis (component counts, route stats, CSS architecture, token inventory, compliance scores)

### Deployment
20. **Deployment Readiness** ✅ NEW — Pre-deploy checklist with Lighthouse scores, link checker, accessibility audit, WordPress FSE compatibility

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

**Last Updated:** February 16, 2026  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)