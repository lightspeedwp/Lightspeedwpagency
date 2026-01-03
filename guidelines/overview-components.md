# Component System Overview

This file provides a complete overview of the LSX Design component system and when to use each component type.

**Last Updated:** December 30, 2024  
**System Version:** 1.1  
**Architecture:** Reorganized with `/blocks` structure (WordPress FSE alignment)

---

## 🏗️ New Architecture (December 30, 2024)

The LSX Design component system has been reorganized to align with WordPress Full Site Editing conventions:

```
/src/app/components/
├── blocks/              WordPress blocks (organized by category)
│   ├── design/         Design blocks (Buttons, Group, Grid, Stack, Row, Columns)
│   ├── theme/          Theme blocks (Site Logo, Site Title, Navigation, etc.)
│   ├── feedback/       Alert, Dialog, Toast
│   ├── navigation/     Accordion, Breadcrumbs, Tabs, MegaMenu
│   ├── utility/        Tooltip, Popover, DropdownMenu
│   ├── forms/          ContactForm, SearchForm, NewsletterForm, FormField
│   ├── data-display/   DataTable, StatsCard, ProgressBar
│   ├── ecommerce/      ProductGrid, ProductReviews, ShoppingCart, etc.
│   ├── media/          ImageGallery, VideoPlayer, Lightbox
│   ├── dev-tools/      Dev tools and testing components
│   └── layout/         KeyboardShortcuts, ErrorBoundary, ScrollProgress, etc.
├── common/             Token enforcement (Container, Section, Heading, Button, Logo)
├── parts/              Template parts (SiteHeader, SiteFooter)
├── patterns/           Block patterns (Hero, CardGrid, CTA, etc.)
└── templates/          Page templates (FrontPage, Archive, Single, 404)

/src/app/hooks/
└── useIsMobile.ts      Mobile detection hook (moved from /ui)

/src/app/utils/
└── cn.ts               Class name utility (moved from /ui)
```

**Key Changes:**
- ✅ LSX custom blocks moved to `/blocks` (organized by purpose)
- ✅ WordPress block categories align with FSE conventions
- ✅ Utility files moved to appropriate locations
- ✅ Barrel export created at `/blocks/index.ts`
- ✅ Zero breaking changes (100% backward compatible)

**See:** [COMPONENT-REORGANIZATION-PHASE-1-COMPLETE-DEC-30.md](../COMPONENT-REORGANIZATION-PHASE-1-COMPLETE-DEC-30.md) for complete details.

---

## React Component Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          LSX DESIGN COMPONENT SYSTEM                        │
│                         (Updated December 30, 2024)                         │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  TEMPLATES (src/app/components/templates/)                          │  │
│  │  WordPress: templates/*.html                                        │  │
│  ├─────────────────────────────────────────────────────────────────────┤  │
│  │  FrontPageTemplate  →  front-page.html   (Homepage)                │  │
│  │  IndexTemplate      →  index.html        (Blog Index)               │  │
│  │  ArchiveTemplate    →  archive.html      (Archives)                 │  │
│  │  SingleTemplate     →  single.html       (Post/Page Detail)         │  │
│  │  SearchResultsTemplate → search.html     (Search Results)           │  │
│  │  Template404        →  404.html          (Error Page)               │  │
│  └───────────┬─────────────────────────────────────────────────────────┘  │
│              │ Composed from ↓                                             │
│  ┌───────────▼─────────────────────────────────────────────────────────┐  │
│  │  TEMPLATE PARTS (src/app/components/parts/)                         │  │
│  │  WordPress: parts/*.html                                            │  │
│  ├─────────────────────────────────────────────────────────────────────┤  │
│  │  SiteHeader         →  parts/header.html (Global header)           │  │
│  │  SiteFooter         →  parts/footer.html (Global footer)           │  │
│  └───────────┬─────────────────────────────────────────────────────────┘  │
│              │ Composed from ↓                                             │
│  ┌───────────▼─────────────────────────────────────────────────────────┐  │
│  │  PATTERNS (src/app/components/patterns/)                            │  │
│  │  WordPress: patterns/*.php                                          │  │
│  ├─────────────────────────────────────────────────────────────────────┤  │
│  │  HeroHome           →  lsx-design/hero/home                        │  │
│  │  ArchiveHeader      →  lsx-design/header/archive                   │  │
│  │  CardGrid           →  lsx-design/listing/card-grid                │  │
│  │  CTASection         →  lsx-design/cta/primary                      │  │
│  │  CTAInline          →  lsx-design/cta/inline                       │  │
│  │  NewsletterSignup   →  lsx-design/form/newsletter                  │  │
│  │  PricingTable       →  lsx-design/pricing/table                    │  │
│  │  FeatureComparison  →  lsx-design/pricing/comparison               │  │
│  │  SocialProof        →  lsx-design/trust/social-proof               │  │
│  │  PaginationNav      →  lsx-design/nav/pagination                   │  │
│  │  FilterBar          →  lsx-design/nav/filters                      │  │
│  │  EmptyState         →  lsx-design/state/empty                      │  │
│  └───────────┬─────────────────────────────────────────────────────────┘  │
│              │ Composed from ↓                                             │
│  ┌───────────▼─────────────────────────────────────────────────────────┐  │
│  │  COMMON COMPONENTS (src/app/components/common/)                     │  │
│  │  WordPress: Core blocks (styled via theme.json)                    │  │
│  ├─────────────────────────────────────────────────────────────────────┤  │
│  │  Container          →  core/group (constrained)                    │  │
│  │  Section            →  core/group (semantic section)               │  │
│  │  Heading            →  core/heading                                │  │
│  │  Button             →  core/button                                 │  │
│  │  Logo               →  core/site-logo                              │  │
│  │  SkipLink           →  Accessibility utility                       │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  WORDPRESS BLOCKS (src/app/components/blocks/) ⭐ NEW               │  │
│  │  WordPress: block.json definitions                                 │  │
│  ├─────────────────────────────────────────────────────────────────────┤  │
│  │  design/            WordPress design blocks                        │  │
│  │  theme/             WordPress theme blocks                         │  │
│  │  feedback/          Alert, Dialog, Toast                           │  │
│  │  navigation/        Accordion, Breadcrumbs, Tabs, MegaMenu        │  │
│  │  utility/           Tooltip, Popover, DropdownMenu                 │  │
│  │  forms/             ContactForm, SearchForm, NewsletterForm        │  │
│  │  data-display/      DataTable, StatsCard, ProgressBar             │  │
│  │  ecommerce/         ProductGrid, ShoppingCart, etc.               │  │
│  │  media/             ImageGallery, VideoPlayer, Lightbox           │  │
│  │  dev-tools/         ComponentPlayground, ComplianceScorecard      │  │
│  │  layout/            KeyboardShortcuts, ErrorBoundary, etc.        │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

HIERARCHY FLOW:
App.tsx → Template → Template Parts → Patterns → Common Components + Blocks

COMPOSITION PRINCIPLE:
Templates are COMPOSED from Parts and Patterns
Patterns are COMPOSED from Common Components and Blocks
NO bespoke one-off sections
```

---

## Component Hierarchy Breakdown

### Level 1: App.tsx (Root)
**Location:** `/src/app/App.tsx`  
**Purpose:** Application root with template routing  
**Outputs:** Current template based on route

```tsx
<App>
  <Template>  {/* Current template */}
  <StyleSwitcher />  {/* Utility */}
  <PageSwitcher />   {/* Utility */}
</App>
```

---

### Level 2: Templates
**Location:** `/src/app/components/templates/`  
**Purpose:** Complete page layouts  
**WordPress:** `templates/*.html`

**Structure:**
```tsx
<Template>
  <SkipLink />
  <SiteHeader />
  <main id="main-content">
    <Pattern />
    <Pattern />
    <Pattern />
  </main>
  <SiteFooter />
  <BackToTopButton />
</Template>
```

---

### Level 3: Template Parts
**Location:** `/src/app/components/parts/`  
**Purpose:** Global page chrome  
**WordPress:** `parts/*.html`

**Composed from:** Patterns + Common Components

```tsx
<SiteHeader>
  <Container>
    <Logo />
    <Navigation />
    <Button />
  </Container>
</SiteHeader>
```

---

### Level 4: Patterns
**Location:** `/src/app/components/patterns/`  
**Purpose:** Reusable content sections  
**WordPress:** `patterns/*.php`

**Composed from:** Common Components + Sections

```tsx
<HeroHome>
  <Section spacing="80" minHeight="85vh">
    <Container>
      <Heading level={1}>Title</Heading>
      <p>Description</p>
      <Button>CTA</Button>
    </Container>
  </Section>
</HeroHome>
```

---

### Level 5: Common Components
**Location:** `/src/app/components/common/`  
**Purpose:** Token enforcement + semantic HTML  
**WordPress:** Core blocks (styled)

**Atomic building blocks:**
- Container → `core/group`
- Section → `core/group`
- Heading → `core/heading`
- Button → `core/button`
- Logo → `core/site-logo`

---

### Level 6: UI Utilities (Non-WordPress)
**Location:** `/src/app/components/ui/`  
**Purpose:** Progressive enhancement  
**WordPress:** `theme/assets/js/*`

**Not WordPress blocks:**
- BackToTopButton
- StyleSwitcher
- PageSwitcher (prototype only)

---

## Component Philosophy

LSX Design follows a **WordPress-first approach** where components map to WordPress concepts:

- **Common components** → Core WordPress blocks (Container, Section, Heading, Button)
- **Template parts** → Global chrome (`parts/*.html`)
- **Patterns** → Reusable sections (`patterns/*.php`)
- **Templates** → Page layouts (`templates/*.html`)
- **UI utilities** → Progressive enhancement scripts (not WordPress blocks)

**Rule:** Always prefer WordPress-native solutions. Only create custom components when core blocks cannot fulfill the requirement.

---

## Component Categories

### 1. Common Components (Token Enforcement Layer)

Location: `src/app/components/common/`

These components enforce strict token usage and prevent hard-coded values.

| Component | WordPress Equivalent | Purpose |
|-----------|---------------------|---------|
| `Container.tsx` | Core Group block (constrained) | Max-width wrapper with horizontal padding |
| `Section.tsx` | Core Group block (semantic) | Semantic `<section>` with token spacing |
| `Heading.tsx` | Core Heading block | Typography + hierarchy enforcement |
| `Button.tsx` | Core Button block | Token-driven button styles |
| `Logo.tsx` | Site Logo block | Site branding display |
| `SkipLink.tsx` | Accessibility utility | Keyboard navigation skip link |

**Usage:** Use these instead of raw HTML elements to guarantee token compliance.

**Example:**
```tsx
// ❌ DON'T: Hard-coded values
<div style={{ padding: '24px', maxWidth: '1280px' }}>
  <h1 style={{ fontSize: '2.5rem' }}>Title</h1>
</div>

// ✅ DO: Token-enforced components
<Container>
  <Heading level={1}>Title</Heading>
</Container>
```

---

### 2. Template Parts (Global Chrome)

Location: `src/app/components/parts/`

WordPress concept: `parts/*.html`

Global elements that appear on every page. Cannot be edited per-page.

| Component | Maps To | Description |
|-----------|---------|-------------|
| `SiteHeader.tsx` | `parts/header.html` | Primary navigation, logo, global actions |
| `SiteFooter.tsx` | `parts/footer.html` | Footer links, copyright, secondary navigation |

**Guidelines:**
- Read [components/Logo.md](./components/Logo.md) for logo usage
- Template parts use token-based spacing exclusively
- Must be keyboard-accessible
- Should work on all page templates

**Usage in Templates:**
```tsx
<SiteHeader />
<main id="main-content">
  {/* Page content */}
</main>
<SiteFooter />
```

---

### 3. Block Patterns (Reusable Sections)

Location: `src/app/components/patterns/`

WordPress concept: `patterns/*.php`

Composable sections that editors can insert into pages.

| Component | Pattern Slug | Category | Use Case |
|-----------|-------------|----------|----------|
| `HeroHome.tsx` | `lsx-design/hero/home` | Hero | Homepage hero with large heading + CTA |
| `ArchiveHeader.tsx` | `lsx-design/header/archive` | Header | Archive page header with title + description |
| `CardGrid.tsx` | `lsx-design/listing/card-grid` | Listing | Responsive grid of content cards |
| `CTASection.tsx` | `lsx-design/cta/primary` | CTA | Single focused call-to-action |
| `CTAInline.tsx` | `lsx-design/cta/inline` | CTA | Compact mid-content CTA (800px max-width) ⭐ NEW |
| `NewsletterSignup.tsx` | `lsx-design/form/newsletter` | Form | Email subscription form with validation ⭐ NEW |
| `PricingTable.tsx` | `lsx-design/pricing/table` | E-commerce | Pricing plan cards with features ⭐ NEW |
| `FeatureComparison.tsx` | `lsx-design/pricing/comparison` | E-commerce | Feature-by-feature comparison table ⭐ NEW |
| `SocialProof.tsx` | `lsx-design/trust/social-proof` | Trust | Client logos, awards, certifications ⭐ NEW |
| `PaginationNav.tsx` | `lsx-design/nav/pagination` | Navigation | Accessible pagination for archives |
| `FilterBar.tsx` | `lsx-design/nav/filters` | Navigation | Category/tag filtering |
| `EmptyState.tsx` | `lsx-design/state/empty` | State | Explicit messaging when content is missing |

**Pattern Composition Rules:**
- Every page must be composed from patterns only
- No bespoke one-off sections
- Patterns must be reusable across multiple templates
- Use semantic pattern slugs: `lsx-design/{category}/{name}`

**Example Pattern Composition:**
```tsx
// Front Page Template
<HeroHome />
<CardGrid items={destinations} />
<CTASection />

// Archive Template
<ArchiveHeader title="Destinations" />
<FilterBar options={categories} />
<CardGrid items={content} />
<PaginationNav />
```

---

### 4. Page Templates

Location: `src/app/components/templates/`

WordPress concept: `templates/*.html`

Complete page layouts composed from patterns.

| Component | Maps To | Archetype | Pattern Order |
|-----------|---------|-----------|---------------|
| `FrontPageTemplate.tsx` | `templates/front-page.html` | Homepage | Hero → Card Grid → CTA |
| `IndexTemplate.tsx` | `templates/index.html` | Editorial Listing | Header → Filters → Post Grid → Pagination |
| `ArchiveTemplate.tsx` | `templates/archive.html` | Content Hub | Header → Card Grid → Pagination |
| `ArchiveWithFiltersTemplate.tsx` | `templates/archive.html` | Content Hub (filtered) | Header → Filters → Card Grid → Pagination |
| `SingleTemplate.tsx` | `templates/single.html` | Detail Page | Hero → Content → Meta → Related → CTA |
| `SearchResultsTemplate.tsx` | `templates/search.html` | Utility Page | Header → Search Form → Results Grid → Pagination |
| `Template404.tsx` | `templates/404.html` | Utility Page | Error Message → Search → Helpful Links |

**Template Rules:**
- Must follow fixed archetype patterns
- No hybrid archetypes
- Always include SkipLink for accessibility
- Always wrap main content in `<main id="main-content">`

---

### 5. UI Utilities (Non-WordPress Components)

Location: `src/app/components/ui/`

These components do **not** map to WordPress blocks. They are progressive enhancement scripts.

| Component | Implementation | Documentation |
|-----------|---------------|---------------|
| `BackToTopButton.tsx` | `theme/assets/js/back-to-top.js` | [components/ScrollBackToTop.md](./components/ScrollBackToTop.md) |
| `StyleSwitcher.tsx` | Style variations UI (WordPress: styles/*.json) | [components/StyleSwitcher.md](./components/StyleSwitcher.md) |
| `PageSwitcher.tsx` | Prototype-only (not in WordPress) | N/A |

See individual component guidelines for usage patterns.

---

## Component Guidelines Files

**IMPORTANT:** Read the specific guidelines file **BEFORE** using any component.

### Available Component Guidelines

| Component | Guidelines File | When to Read |
|-----------|----------------|--------------|
| Logo | [components/Logo.md](./components/Logo.md) | Before adding site branding |
| Style Switcher | [components/StyleSwitcher.md](./components/StyleSwitcher.md) | Before adding theme toggle |
| Scroll Back to Top | [components/ScrollBackToTop.md](./components/ScrollBackToTop.md) | Before adding scroll enhancement |
| Scroll Down Arrow | [components/ScrollDownArrow.md](./components/ScrollDownArrow.md) | Before adding scroll indicators |
| Layout Switcher | [components/LayoutSwitcher.md](./components/LayoutSwitcher.md) | Before adding view toggles |

---

## Component Usage Best Practices

### Token Enforcement

All LSX Design components enforce token usage. **Never override with hard-coded values.**

```tsx
// ❌ DON'T: Override tokens with arbitrary values
<Section spacing="60" style={{ padding: '100px' }}>

// ✅ DO: Use component props that reference tokens
<Section spacing="80">
```

### Semantic HTML

Components use correct semantic HTML automatically:

```tsx
// ✅ Outputs <section> with proper spacing
<Section spacing="60">
  <Container>
    <Heading level={2}>Section Title</Heading>
  </Container>
</Section>
```

### Accessibility

All components include accessibility features:
- Keyboard navigation support
- ARIA labels where appropriate
- Focus states (2px accent outline)
- Skip links for page navigation
- Semantic landmarks

### Responsive Behavior

Components are responsive by default:
- Container uses max-width constraints
- CardGrid uses responsive grid layout
- Touch targets meet 44×44px minimum
- Typography scales appropriately

---

## Component Creation Rules

### When to Create a New Component

✅ **Create when:**
- The component maps to a WordPress block or pattern
- Multiple pages/templates will use it
- It enforces token discipline
- It provides accessibility features

❌ **Don't create when:**
- It's a one-off design for a single page
- It can be composed from existing components
- It's purely decorative (no structural purpose)
- It requires hard-coded styling

### Component File Structure

```tsx
/**
 * Component Name
 * 
 * WordPress concept: [block/pattern/part name]
 * 
 * Purpose description and usage guidelines.
 */

import { ReactNode } from 'react';
// Import only common components and utilities

interface ComponentNameProps {
  // Props with clear types
}

export function ComponentName({ ...props }: ComponentNameProps) {
  return (
    // JSX with inline styles using CSS custom properties
    <element style={{
      property: 'var(--wp--preset--category--slug)',
    }}>
      {/* Component content */}
    </element>
  );
}
```

---

## Common Component Combinations

### Hero Section
```tsx
<Section spacing="80" background="neutral-100">
  <Container>
    <Heading level={1}>Page Title</Heading>
    <p>Supporting text</p>
    <Button variant="primary" href="#action">
      Call to Action
    </Button>
  </Container>
</Section>
```

### Content Section
```tsx
<Section spacing="60">
  <Container>
    <Heading level={2}>Section Title</Heading>
    <CardGrid items={data} columns={3} />
  </Container>
</Section>
```

### Full Page Template
```tsx
<SkipLink />
<SiteHeader />
<main id="main-content" role="main">
  <HeroHome />
  <CardGrid items={content} />
  <CTASection />
</main>
<SiteFooter />
<BackToTopButton />
```

---

## Validation Checklist

Before using any component, verify:

- [ ] Component guidelines file has been read
- [ ] Component props use token values (not hard-coded)
- [ ] Component maps to a WordPress concept
- [ ] Accessibility requirements are met
- [ ] Component is reusable (not page-specific)
- [ ] Responsive behavior is tested

---

## Related Documentation

- **Design Tokens:** [design-tokens/](./design-tokens/)
- **Icon System:** [overview-icons.md](./overview-icons.md)
- **Sections:** [sections/overview-sections.md](./sections/overview-sections.md)
- **Blocks:** [blocks/overview-blocks.md](./blocks/overview-blocks.md)
- **Patterns:** [patterns/overview-patterns.md](./patterns/overview-patterns.md)
- **Parts:** [parts/overview-parts.md](./parts/overview-parts.md)
- **Templates:** [templates/overview-templates.md](./templates/overview-templates.md)

---

## Complete Component Documentation Index

### **Common Components** (`/components/`)
1. **[Container.md](./components/Container.md)** — Max-width container wrapper
2. **[Section.md](./components/Section.md)** — Semantic section with style variants
3. **[Heading.md](./components/Heading.md)** — Typography hierarchy enforcement
4. **[Button.md](./components/Button.md)** — Token-driven button styles

### **Pattern Components** (`/components/`)
5. **[ArchiveHeader.md](./components/ArchiveHeader.md)** — Archive page header
6. **[HeroHome.md](./components/HeroHome.md)** — Homepage hero section
7. **[CardGrid.md](./components/CardGrid.md)** — Responsive card grid
8. **[FilterBar.md](./components/FilterBar.md)** — Category/tag filters
9. **[PaginationNav.md](./components/PaginationNav.md)** — Archive pagination
10. **[CTASection.md](./components/CTASection.md)** — Call-to-action section
11. **[FAQSection.md](./components/FAQSection.md)** — FAQ accordion section
12. **[StatsSection.md](./components/StatsSection.md)** — Statistics display
13. **[EmptyState.md](./components/EmptyState.md)** — Empty/no results state
14. **[CTAInline.md](./components/CTAInline.md)** — Compact mid-content CTA (800px max-width) ⭐ NEW
15. **[NewsletterSignup.md](./components/NewsletterSignup.md)** — Email subscription form with validation ⭐ NEW
16. **[PricingTable.md](./components/PricingTable.md)** — Pricing plan cards with features ⭐ NEW
17. **[FeatureComparison.md](./components/FeatureComparison.md)** — Feature-by-feature comparison table ⭐ NEW
18. **[SocialProof.md](./components/SocialProof.md)** — Client logos, awards, certifications ⭐ NEW

### **Template Part Components** (`/components/`)
19. **[SiteHeader.md](./components/SiteHeader.md)** — Global site header
20. **[Breadcrumbs.md](./components/Breadcrumbs.md)** — Breadcrumb navigation

### **UI Utility Components** (`/components/`)
21. **[Logo.md](./components/Logo.md)** — Site logo with theme switching ⭐
22. **[BackToTopButton.md](./components/BackToTopButton.md)** — Scroll to top button
23. **[ScrollBackToTop.md](./components/ScrollBackToTop.md)** — Scroll enhancement
24. **[ScrollDownArrow.md](./components/ScrollDownArrow.md)** — Scroll indicator
25. **[StyleSwitcher.md](./components/StyleSwitcher.md)** — Light/dark mode toggle
26. **[LayoutSwitcher.md](./components/LayoutSwitcher.md)** — Layout view toggle
27. **[PageSwitcher.md](./components/PageSwitcher.md)** — Page navigation (prototype only)
28. **[SkipLink.md](./components/SkipLink.md)** — Accessibility skip link

### **Additional Pattern Documentation** (`/patterns/`)
29. **[ArchiveCTA.md](./patterns/ArchiveCTA.md)** — Archive CTA with modal ⭐
30. **[ServicesCard.md](./patterns/ServicesCard.md)** — Services card pattern ⭐
31. **[FAQSection.md](./patterns/FAQSection.md)** — FAQ pattern details
32. **[NewsletterSignup.md](./patterns/NewsletterSignup.md)** — Newsletter signup pattern ⭐ NEW
33. **[PricingTable.md](./patterns/PricingTable.md)** — Pricing table pattern ⭐ NEW
34. **[CTAInline.md](./patterns/CTAInline.md)** — Inline CTA pattern ⭐ NEW
35. **[SocialProof.md](./patterns/SocialProof.md)** — Social proof pattern ⭐ NEW
36. **[FeatureComparison.md](./patterns/FeatureComparison.md)** — Feature comparison pattern ⭐ NEW

### **Template Part Documentation** (`/parts/`)
37. **[SiteHeader.md](./parts/SiteHeader.md)** — Site header template part
38. **[SiteFooter.md](./parts/SiteFooter.md)** — Site footer template part

### **Light/Dark Mode Documentation**
39. **[light-dark-mode-components.md](./components/light-dark-mode-components.md)** — Component-specific theming ⭐

---

**Last Updated:** December 30, 2024  
**System Version:** 1.1