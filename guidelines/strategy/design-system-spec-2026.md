# Design System Specification 2026

**Category:** Strategy  
**Version:** 1.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Source of truth and mapping rule

Figma variables and component variants map to theme.json presets and block style variations; patterns are the primary unit of reusable composition. This aligns to WordPress's theme.json v3 system and modern block theme practice.

Internal block guideline baseline exists and should be treated as the canonical per-block specification library; this spec defines the site-specific governance and mapping expectations.

## Token system

### Colour tokens
Use semantic slugs for brand roles (primary, surface, text, muted, success, warning) and numeric scales only where the design system demands it.

### Typography tokens
Prefer fluid font sizes where appropriate; WordPress supports clamp-based presets in theme.json.

### Spacing tokens
Adopt a constrained scale; enforce via editor UI where possible.

## Grid and container logic

### Constrained container
Define a single content width and a single wide width; enforce via Group block defaults.

### Section containers
Use Group as "Section" with locked padding presets.

## Motion and interaction principles

### Default
No motion as a requirement; motion must degrade gracefully.

### Reduced motion
Always respect prefers-reduced-motion.

### Progressive interactivity
Prefer WordPress Interactivity API patterns for lightweight behaviours when WordPress-native interactions are needed.

## Core block mapping guidance

This mapping covers the core blocks required for LightSpeed marketing + publishing use cases. For extended coverage, reference the internal per-block guideline library.

### Text blocks
- Paragraph: use for body copy; never hardcode font sizes; rely on presets.
- Heading: enforce hierarchy rules; H1 only in templates; section headings start at H2.
- List: use for scannable constraints and steps; avoid deep nesting.
- Quote: use for testimonials; include attribution pattern.

### Media blocks
- Image: require alt text and size attributes; avoid decorative images without empty alt.
- Gallery: restrict to editorial/gallery pages only; default to responsive grid.
- Video: prefer embed blocks; ensure lazy loading.
- File: use for PDFs; ensure descriptive link text.

### Design blocks
- Group: primary section wrapper; locked padding presets; constrained layout.
- Columns: allowed for simple two/three column; prefer Stack/Row patterns where available.
- Buttons: enforce styles via block style variations; prevent custom colours.
- Spacer: allowed only inside patterns; editors should not stack arbitrary spacers.

### Theme blocks
- Navigation: restrict to template parts; enforce menu structure; use accessible labels.
- Query Loop: power Insights listings and case study listings; provide pre-built query patterns.
- Template Part: only for Header/Footer/Global sections; composed via patterns.

## Block bindings usage guidance

Use Block Bindings for dynamic attribute injection where supported (e.g., bind heading content or image URLs) to reduce bespoke PHP rendering logic.
When unsupported, prefer dynamic blocks or pattern PHP where absolutely necessary.

## Template specifications

### Header template
Single header template part with pattern switching (main vs system pages if required).
Keep navigation and CTA consistent; include skip link.

### Footer template
Primary footer with proof links, systems links, and contact.

### Homepage template
Hero: system positioning, audit CTA, proof strip.
Sections: systems overview, proof case study highlight, insights preview, consultation.

### Service template (renamed to Systems page template)
Structure: definition, how it works, patterns/playbooks, proof.

### Case study template
Structure matches authority-proof framework.

### Blog template
Article schema-ready; author identity consistent.

## Block locking strategy

Lock outer layout blocks in critical patterns to prevent structural breakage; allow content editing only inside controlled areas.

## Pattern governance model

### Pattern layers
- Foundation: small composable blocks
- Section patterns: hero, CTA, proof strip, comparison
- Page patterns: landing layouts for rapid assembly

### Approval workflow
- Design approves token changes.
- Engineering approves pattern structures and locking.
- Content approves editorial semantics and headings.