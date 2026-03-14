# Project Goals & Success Criteria — Guidelines

**Category:** Development  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Purpose

**What:** Defines the goals, objectives, and success criteria for the LSX Design Figma Make prototype

**Why:** Provides clear direction and measurable outcomes for prototype development

**Who:** All team members working on the LSX Design prototype

---

## Project Overview

**Project Name:** LSX Design — Figma Make Prototype

**Business Context:** LSX Design is a WordPress and WooCommerce web design agency specializing in modern block themes, design systems, and accessible high-performance websites.

**Purpose:** Build a design-system prototype in Figma Make that can be implemented as a WordPress block theme with a clean, scalable architecture.

---

## What This Prototype Validates

### ✅ Validates

- ✅ Content structure and layout patterns
- ✅ Editor workflow (patterns/templates/parts)
- ✅ Token discipline (`theme.json` presets)
- ✅ Accessibility and responsive behaviour
- ✅ WordPress FSE (Full Site Editing) compatibility
- ✅ Block-based architecture
- ✅ Design system scalability

### ❌ Does NOT Validate

- ❌ Brand exploration or decorative styling
- ❌ Bespoke page design
- ❌ Experimental layout variants that cannot map to WordPress blocks
- ❌ One-off custom solutions
- ❌ Non-reusable patterns

**Philosophy:** System-first, not page-first. Build reusable patterns, compose pages.

---

## Primary Goals

### Goal 1: WordPress-Ready Design System

Create a **design-system prototype** that maps directly to:

**WordPress Theme Files:**
- `templates/*.html` - Page templates
- `parts/*.html` - Template parts (header, footer, etc.)
- `patterns/*.php` - Block pattern registration
- `theme.json` - Design token presets only
- `assets/js/*` - Optional front-end scripts for small UI behaviours (e.g., Back to Top)

**Why Important:** Direct mapping ensures prototype can be implemented without translation or interpretation

**Success Metric:** Every component/pattern has a clear WordPress equivalent

---

### Goal 2: Reusable Pattern Catalogue

Establish a reusable **pattern catalogue** for LSX sites.

**Pattern Categories:**
- Layout patterns (site header/footer)
- Hero patterns (page context)
- Header patterns (archive/listing/page headers)
- Navigation patterns (filters, breadcrumbs, pagination)
- Listing patterns (card grids)
- Content patterns (editorial, media, FAQ sections)
- Meta patterns (quick facts, key-value pairs)
- Related patterns (related content stacks)
- CTA patterns (call-to-action sections)
- State patterns (empty states, error messages)

**Why Important:** Reusable patterns accelerate site development and ensure consistency

**Success Metric:** All new LSX sites can be built from pattern catalogue

---

### Goal 3: Editor-Realistic Interface

Make the prototype **editor-realistic**: anything shown should be buildable by Gutenberg users.

**Requirements:**
- No layouts that can't be created in block editor
- No patterns that require custom code
- No designs that break WordPress conventions
- Only core blocks + custom LSX blocks
- Patterns composable by content editors

**Why Important:** Ensures designs are implementable by non-developers in WordPress

**Success Metric:** Content editors can recreate any page using blocks/patterns

---

## Success Criteria

### Criterion 1: Archetype-Based Pages

**Requirement:** Every screen is an instance of a recognised **archetype**

**Archetypes:**
1. Content hub (archive)
2. Taxonomy archive
3. Single detail
4. Editorial listing (blog/index)
5. Utility page (404, contact, etc.)

**Validation:**
- [ ] All pages map to one archetype
- [ ] No hybrid/custom archetypes
- [ ] Archetype rules followed consistently

---

### Criterion 2: Pattern-Based Sections

**Requirement:** Every section is an instance of a registered **pattern**

**Rules:**
- All sections must be reusable patterns
- No one-off sections for single templates
- Patterns must be composable
- Empty patterns can be omitted (no blank space)

**Validation:**
- [ ] All sections are registered patterns
- [ ] Pattern catalogue complete
- [ ] No orphaned/unused patterns
- [ ] Patterns used consistently

---

### Criterion 3: Token-Based Styling

**Requirement:** All spacing/typography/colour references are **token-based** (no custom values)

**Token Systems:**
- Colors: `var(--primary)`, `var(--foreground)`, etc.
- Typography: `var(--text-h1)`, `var(--font-primary)`, etc.
- Spacing: `var(--spacing-6)`, `var(--spacing-8)`, etc.
- Borders: `var(--radius)`, `var(--radius-lg)`, etc.

**Rules:**
- ❌ NO hardcoded hex colors
- ❌ NO hardcoded px spacing
- ❌ NO hardcoded font sizes
- ✅ ONLY CSS variables

**Validation:**
- [ ] Zero hardcoded values in components
- [ ] All tokens defined in CSS files
- [ ] theme.json presets match CSS variables
- [ ] User can change styling via CSS files alone

---

### Criterion 4: Accessibility Enforcement

**Requirement:** Accessibility rules are enforced everywhere

**Standards:**
- WCAG 2.1 AA compliance (minimum)
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion support
- Touch target sizing (44x44px minimum)
- Color contrast ratios (4.5:1 text, 3:1 interactive)

**Validation:**
- [ ] All components pass axe audit
- [ ] Keyboard-only navigation works
- [ ] Screen reader announcements correct
- [ ] Reduced motion guards in place
- [ ] Touch targets meet minimum size

**See:** [accessibility.md](./accessibility.md) for complete requirements

---

## Key Performance Indicators (KPIs)

### Development Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Pattern Reuse Rate** | 90%+ | Patterns used across multiple templates |
| **CSS Variable Compliance** | 100% | Zero hardcoded values |
| **Accessibility Score** | 100 | Lighthouse accessibility score |
| **WordPress Block Coverage** | 100% | All UI maps to blocks/patterns |
| **Token Adoption** | 100% | All styling uses design tokens |

### Quality Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Page Archetype Compliance** | 100% | All pages match archetypes |
| **Pattern Registration** | 100% | All sections are registered patterns |
| **Editor Usability** | 100% | All pages buildable in Gutenberg |
| **Mobile Responsiveness** | 100% | All breakpoints functional |
| **Dark Mode Support** | 100% | All components support dark mode |

---

## Constraints & Boundaries

### What We CAN Do

- ✅ Assemble pages from approved patterns
- ✅ Use token spacing/typography to communicate hierarchy
- ✅ Omit optional patterns when content doesn't exist
- ✅ Create variations only when they map to WordPress style variation or block style
- ✅ Use core WordPress blocks + custom LSX blocks

### What We CANNOT Do

- ❌ Invent new layouts that cannot be patterns
- ❌ Add new tokens, fonts, or colours (use existing design system)
- ❌ Hard-code pixel/hex values (always use CSS variables)
- ❌ Use sliders/carousels as default interaction pattern
- ❌ Add multiple primary CTAs per section
- ❌ Create non-reusable one-off designs
- ❌ Break WordPress block conventions

---

## Validation Checklist

Use this checklist before marking prototype complete:

**Architecture:**
- [ ] Every template is composed from patterns
- [ ] Every pattern has clear purpose and slug
- [ ] Pattern catalogue is complete and documented
- [ ] All templates map to WordPress archetypes

**Tokens:**
- [ ] All colors use CSS variables
- [ ] All spacing uses CSS variables
- [ ] All typography uses CSS variables
- [ ] All border radius uses CSS variables
- [ ] Zero hardcoded values found
- [ ] theme.json presets match CSS variables

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader tested
- [ ] Reduced motion support
- [ ] Touch targets meet minimum size
- [ ] Color contrast ratios pass

**WordPress:**
- [ ] All UI maps to blocks/patterns
- [ ] Patterns are editor-realistic
- [ ] No custom code required
- [ ] Content editors can rebuild pages
- [ ] theme.json documented

**Quality:**
- [ ] All utility UI components documented
- [ ] Responsive on all breakpoints
- [ ] Dark mode works everywhere
- [ ] Empty states handled
- [ ] Long content doesn't break layout

---

## Related Documents

**See Also:**
- [Guidelines.md](./Guidelines.md) - Main guidelines file
- [accessibility.md](./accessibility.md) - WCAG 2.1 AA requirements
- [build-rules.md](./build-rules.md) - Prototype build rules
- [qa-checklist.md](./qa-checklist.md) - QA/acceptance checklist

**Planning:**
- [/tasks/task-list.md](/tasks/task-list.md) - Current tasks
- [/docs/implementation-status.md](/docs/implementation-status.md) - Implementation status

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Project:** LSX Design Prototype  
**System Version:** 3.0  
**WordPress Compatibility:** FSE (Full Site Editing)  
**Last Updated:** March 11, 2026
