# Block Theme Architecture Baseline

**Category:** Strategy  
**Version:** 1.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Standards

- theme.json v3 as baseline standard for tokens and settings.
- All tokens defined in theme.json, consumed via CSS custom properties.

## Patterns-first composition

- Patterns are the primary reusable layer; templates compose patterns; template parts remain minimal.
- Every visible section on a page must be traceable to a registered pattern.

## Locking and editorial safety

- Lock outer structures to prevent accidental layout breakage.
- Expose controlled editing surfaces (text, images) within locked containers.
- Document locking policy per pattern.

## Template hierarchy

### Required templates
- `front-page.html` — Homepage
- `index.html` — Blog/insights listing
- `archive.html` — Archive pages
- `single.html` — Blog posts
- `page.html` — Generic pages
- `404.html` — Error page
- `search.html` — Search results

### Custom templates
- `page-systems.html` — Systems hub pages
- `page-case-study.html` — Case study detail
- `page-contact.html` — Contact page
- `page-about.html` — About page

### Template parts
- `header.html` — Site header
- `footer.html` — Site footer

## Pattern registration

### Naming convention
`lsx-design/{category}/{pattern-name}`

### Required metadata per pattern
- Title
- Description
- Category
- Keywords
- Block types (what blocks it contains)
- Locking policy

## theme.json v3 configuration

### Settings to enforce
- Custom colours: disabled (use presets only)
- Custom font sizes: disabled (use presets only)
- Custom spacing: enabled within constrained scale
- Layout: content width + wide width defined
- Block-level style overrides via theme.json

### Style variations
- Default (light mode)
- Dark mode variation