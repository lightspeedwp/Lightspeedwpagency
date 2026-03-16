# Components vs Patterns — Architecture & Categories

**Category:** Architecture  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [components-vs-patterns.md](../components-vs-patterns.md)  

---

## Purpose

**What:** Defines when to use components vs patterns and how they map to WordPress

**Why:** Ensure clear separation between React components and WordPress blocks/patterns

**Who:** All developers building UI elements

---

## Core Philosophy

**WordPress-First Thinking:**

The prototype must map cleanly to WordPress FSE (Full Site Editing). Every UI element should have a clear WordPress equivalent.

---

## Decision Tree

### Question 1: Do editors need to place it?

**YES** — It's a **Pattern**

- Hero sections, card grids, CTA sections, testimonial blocks
- WordPress: `patterns/*.php` (Block Pattern)
- Prototype: `/src/app/components/patterns/`

### Question 2: Is it part of global chrome?

**YES** — It's a **Template Part**

- Site header, site footer, breadcrumbs, mobile menu
- WordPress: `parts/*.html` (Template Part)
- Prototype: `/src/app/components/parts/`

### Question 3: Is it behavioral/utility-only?

**YES** — It's **Theme Code UI** (not a block)

- Back to top button, style switcher, scroll indicator, focus management
- WordPress: `assets/js/*.js` (Theme enhancement script)
- Prototype: `/src/app/components/ui/`

**See:** [non-block-components.md](../non-block-components.md) for complete list

---

## React Component Architecture

### Directory Structure

```txt
src/app/components/
├── common/          # Token enforcement wrappers
│   ├── Container.tsx
│   ├── Section.tsx
│   ├── Heading.tsx
│   └── Button.tsx
│
├── parts/           # Template parts (global chrome)
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   ├── Breadcrumbs.tsx
│   └── MobileMenu.tsx
│
├── patterns/        # Block patterns (editor-placeable)
│   ├── HeroHome.tsx
│   ├── StatsGrid.tsx
│   ├── PostGrid.tsx
│   ├── CTASection.tsx
│   └── FAQSection.tsx
│
├── templates/       # Page templates
│   ├── FrontPageTemplate.tsx
│   ├── ArchiveTemplate.tsx
│   ├── SingleTemplate.tsx
│   └── NotFoundTemplate.tsx
│
└── ui/              # Non-WordPress utilities
    ├── ScrollBackToTop.tsx
    ├── ScrollDownArrow.tsx
    ├── StyleSwitcher.tsx
    └── LayoutSwitcher.tsx
```

---

## Component Categories

### 1. Common Components (Token Enforcement)

**Purpose:** Enforce design system tokens and provide consistent wrappers

- `Container` — Max-width container with fluid padding
- `Section` — Section wrapper with spacing
- `Heading` — Heading with design system typography
- `Button` — Button with variants and states

**Characteristics:** Pure presentational, no business logic, design system enforcement, reusable across patterns

**WordPress Mapping:** CSS classes + utilities

```tsx
<Container>
  <Section>
    <Heading level={1}>Page Title</Heading>
    <Button variant="primary">Click Me</Button>
  </Section>
</Container>
```

---

### 2. Template Parts (Global Chrome)

**Purpose:** Reusable template parts that appear across multiple pages

- Site header, site footer, breadcrumbs, sidebar

**Characteristics:** Appear on multiple pages, global navigation/branding, consistent across site

**WordPress Mapping:** `parts/*.html`

---

### 3. Patterns (Block Patterns)

**Purpose:** Reusable content sections that editors can insert

- Hero sections, feature grids, testimonial blocks, CTA sections, FAQ sections

**Characteristics:** Editor-placeable, reusable across pages, composed from core blocks

**WordPress Mapping:** `patterns/*.php`

**See:** [pattern-catalog.md](../../patterns/pattern-catalog.md)

---

### 4. Templates (Page Templates)

**Purpose:** Define overall page structure and archetype

- Front page, archive, single post/project, 404 error

**Characteristics:** One per page type, compose patterns, define archetype

**WordPress Mapping:** `templates/*.html`

**See:** [page-archetypes.md](../../templates/page-archetypes.md)

---

### 5. UI Components (Non-Block Utilities)

**Purpose:** Behavioral/utility components that enhance UX

- Back to top button, scroll indicator, style switcher, focus management, skip links

**Characteristics:** Not editor-placeable, JavaScript-driven, progressive enhancement, outside block system

**WordPress Mapping:** `assets/js/*.js`

**See:** [non-block-components.md](../non-block-components.md)

---

**See also:** [implementation.md](./implementation.md)
