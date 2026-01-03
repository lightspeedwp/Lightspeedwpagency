# LSX Design Prototype — WordPress Mapping Documentation

## Overview

This prototype is a **structural, content-first design system** for WordPress block themes. It is NOT a visual exploration—every component maps directly to WordPress constructs.

---

## Design Token Implementation

### Spacing Scale
All spacing uses WordPress preset tokens (theme.json alignment):

```css
--wp--preset--spacing--10: 0.5rem;   /* 8px - tight UI, chips, metadata */
--wp--preset--spacing--20: 0.75rem;  /* 12px - tight UI, chips, metadata */
--wp--preset--spacing--30: 1rem;     /* 16px - card padding, form spacing */
--wp--preset--spacing--40: 1.5rem;   /* 24px - card padding, small section gaps */
--wp--preset--spacing--50: 2rem;     /* 32px - standard section padding */
--wp--preset--spacing--56: 2.5rem;   /* 40px - standard section padding */
--wp--preset--spacing--60: 3rem;     /* 48px - larger component breathing room */
--wp--preset--spacing--64: 4rem;     /* 64px - larger component breathing room */
--wp--preset--spacing--72: 5rem;     /* 80px - hero spacing, major section separation */
--wp--preset--spacing--80: 6rem;     /* 96px - hero spacing, major section separation */
```

### Typography Scale
Font sizes use numeric WordPress preset slugs:

```css
--wp--preset--font-size--100: 0.75rem;   /* 12px - micro / helper / meta */
--wp--preset--font-size--200: 0.875rem;  /* 14px - body base */
--wp--preset--font-size--300: 1rem;      /* 16px - small headings / intros */
--wp--preset--font-size--400: 1.125rem;  /* 18px - H6/H5 / strong UI headings */
--wp--preset--font-size--500: 1.25rem;   /* 20px - H4 */
--wp--preset--font-size--600: 1.5rem;    /* 24px - H3 */
--wp--preset--font-size--700: 2rem;      /* 32px - H2 */
--wp--preset--font-size--800: 2.5rem;    /* 40px - H1 */
--wp--preset--font-size--900: 3rem;      /* 48px - Hero H1 only */
```

### Colour Roles (Semantic)
Colours use role-based naming only:

```css
--wp--preset--color--base: #ffffff;
--wp--preset--color--contrast: oklch(0.145 0 0);
--wp--preset--color--primary: #030213;
--wp--preset--color--primary-foreground: oklch(1 0 0);
--wp--preset--color--accent: oklch(0.488 0.243 264.376);
--wp--preset--color--neutral-100 through --neutral-900
```

---

## Component → WordPress Mapping

### Template Parts (`parts/*.html`)

| React Component | WordPress Equivalent | Purpose |
|----------------|---------------------|---------|
| `SiteHeader.tsx` | `parts/header.html` | Global site navigation |
| `SiteFooter.tsx` | `parts/footer.html` | Global site footer |

### Templates (`templates/*.html`)

| React Component | WordPress Equivalent | Archetype |
|----------------|---------------------|-----------|
| `FrontPageTemplate.tsx` | `templates/front-page.html` | Homepage |
| `ArchiveTemplate.tsx` | `templates/archive.html` | Content hub (archive) |
| `SingleTemplate.tsx` | `templates/single.html` | Single detail page |

### Patterns (`patterns/*.php`)

| React Component | WordPress Pattern Slug | Category |
|----------------|----------------------|----------|
| `HeroHome.tsx` | `lsx-design/hero/home` | Hero |
| `ArchiveHeader.tsx` | `lsx-design/header/archive` | Header |
| `CardGrid.tsx` | `lsx-design/listing/card-grid` | Listing |
| `CTASection.tsx` | `lsx-design/cta/primary` | CTA |
| `PaginationNav.tsx` | `lsx-design/nav/pagination` | Navigation |
| `EmptyState.tsx` | `lsx-design/state/empty` | State |

### Common Components (Token Enforcement)

| React Component | WordPress Equivalent | Purpose |
|----------------|---------------------|---------|
| `Container.tsx` | Core Group block (constrained) | Max-width wrapper |
| `Section.tsx` | Core Group block (semantic) | Semantic section with token spacing |
| `Heading.tsx` | Core Heading block | Typography + hierarchy enforcement |
| `Button.tsx` | Core Button block | Token-driven button styles |
| `Logo.tsx` | Site Logo block | Site branding |

### UI Utilities (Non-Block Components)

These components do NOT map to WordPress blocks. They are theme-level enhancements:

| React Component | Implementation in WordPress | Purpose |
|----------------|---------------------------|---------|
| `SkipLink.tsx` | Theme template code | Accessibility (WCAG 2.1 AA) |
| `PageSwitcher.tsx` | N/A (prototype only) | Template navigation |

---

## Page Archetypes

### 1. Front Page (Homepage)
**Template:** `templates/front-page.html`

**Pattern Order:**
1. Hero (HeroHome)
2. Card Grid (Featured content)
3. CTA Section

**Purpose:** Primary landing page with featured content.

---

### 2. Archive (Content Hub)
**Template:** `templates/archive.html`

**Pattern Order:**
1. Archive Header (with title, description, count)
2. Card Grid (archive content)
3. Pagination Navigation

**Purpose:** Category, tag, or custom taxonomy archives.

---

### 3. Single (Detail Page)
**Template:** `templates/single.html`

**Pattern Order:**
1. Breadcrumb navigation
2. Editorial content (title, intro, body)
3. Quick Facts (meta section)
4. Related Content (Card Grid)
5. CTA Section

**Purpose:** Individual post/destination/product detail pages.

---

## Accessibility Compliance (WCAG 2.1 AA)

### Structure
- ✅ One H1 per page
- ✅ Logical heading hierarchy (H1 → H2 → H3, no skips)
- ✅ Semantic landmarks (header, nav, main, footer)
- ✅ Skip link for keyboard navigation

### Interaction
- ✅ All interactive elements keyboard-accessible
- ✅ Focus states visible (2px outline, accent color)
- ✅ Minimum touch target size (44×44px for buttons/links)
- ✅ No hover-only functionality

### Content
- ✅ Empty states have explicit messaging
- ✅ Pagination properly labeled with aria-label
- ✅ Current page indicated with aria-current

---

## Token Usage Guidelines

### ❌ NEVER use:
- Hard-coded pixel values (e.g., `padding: 24px`)
- Hard-coded hex colors (e.g., `color: #030213`)
- Arbitrary spacing (e.g., `gap: 1.5rem`)

### ✅ ALWAYS use:
- Spacing tokens: `var(--wp--preset--spacing--40)`
- Typography tokens: `var(--wp--preset--font-size--600)`
- Color tokens: `var(--wp--preset--color--primary)`

---

## Implementation Checklist

When converting this prototype to WordPress:

### theme.json
- [ ] Define all spacing presets (10, 20, 30, 40, 50, 56, 60, 64, 72, 80)
- [ ] Define all font-size presets (100–900)
- [ ] Define semantic color palette
- [ ] Set contentSize and wideSize for container widths

### Template Parts
- [ ] Create `parts/header.html` from SiteHeader component
- [ ] Create `parts/footer.html` from SiteFooter component

### Templates
- [ ] Create `templates/front-page.html` from FrontPageTemplate
- [ ] Create `templates/archive.html` from ArchiveTemplate
- [ ] Create `templates/single.html` from SingleTemplate

### Patterns
- [ ] Register all patterns in `patterns/` directory
- [ ] Use pattern slugs: `lsx-design/{category}/{name}`
- [ ] Ensure patterns are composable and reusable

### Accessibility
- [ ] Add skip link to template parts
- [ ] Test keyboard navigation
- [ ] Verify focus states
- [ ] Run WAVE or axe DevTools audit

---

## Files Overview

```
src/
├── styles/
│   └── theme.css                    # WordPress token definitions
├── app/
│   ├── components/
│   │   ├── common/                  # Token enforcement layer
│   │   │   ├── Container.tsx        → Core Group block
│   │   │   ├── Section.tsx          → Core Group block (semantic)
│   │   │   ├── Heading.tsx          → Core Heading block
│   │   │   ├── Button.tsx           → Core Button block
│   │   │   ├── Logo.tsx             → Site Logo block
│   │   │   └── SkipLink.tsx         → Theme utility
│   │   ├── parts/                   # Template parts
│   │   │   ├── SiteHeader.tsx       → parts/header.html
│   │   │   └── SiteFooter.tsx       → parts/footer.html
│   │   ├── patterns/                # Block patterns
│   │   │   ├── HeroHome.tsx         → lsx-design/hero/home
│   │   │   ├── ArchiveHeader.tsx    → lsx-design/header/archive
│   │   │   ├── CardGrid.tsx         → lsx-design/listing/card-grid
│   │   │   ├── CTASection.tsx       → lsx-design/cta/primary
│   │   │   ├── PaginationNav.tsx    → lsx-design/nav/pagination
│   │   │   └── EmptyState.tsx       → lsx-design/state/empty
│   │   ├── templates/               # Page templates
│   │   │   ├── FrontPageTemplate.tsx → templates/front-page.html
│   │   │   ├── ArchiveTemplate.tsx  → templates/archive.html
│   │   │   └── SingleTemplate.tsx   → templates/single.html
│   │   └── ui/                      # Non-WordPress utilities
│   │       └── PageSwitcher.tsx     → Prototype navigation only
│   └── App.tsx                      # Main application router
```

---

## Content Strategy

All content in this prototype is **structural placeholder content**. It demonstrates:

1. **Content tolerance:** Layouts handle long titles, missing images, varying excerpt lengths
2. **Empty states:** Explicit messaging when content doesn't exist
3. **Pattern flexibility:** Patterns work with minimal or maximal content

This is NOT about visual design—it's about proving the **system structure works** for WordPress editors.

---

## Next Steps

1. **Import Figma components** if available
2. **Map Figma styles** to existing LSX tokens
3. **Create additional patterns** as needed (FAQ, features grid, testimonials)
4. **Test with real content** to validate content tolerance
5. **Convert to WordPress** following this mapping

---

**Last Updated:** December 24, 2024  
**Prototype Version:** 1.0  
**WordPress Compatibility:** Block themes (Gutenberg-native)
