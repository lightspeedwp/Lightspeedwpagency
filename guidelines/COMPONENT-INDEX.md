# Component Index

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

Complete index of all React components in the LSX Design System with their WordPress equivalents and documentation references.

---

## 📁 Component Directory Structure

```
/src/app/components/
├── common/          # 5 components - Token enforcement
├── parts/           # 2 components - Template parts (global chrome)
├── patterns/        # 25+ components - Block patterns (reusable sections)
├── templates/       # 15+ components - Page templates (archetypes)
└── ui/              # 3 components - Utilities (progressive enhancement)
```

---

## 🧱 Common Components (Token Enforcement)

These components enforce design system tokens and provide consistent structure.

| Component | Purpose | WordPress Equivalent | Props |
|-----------|---------|---------------------|-------|
| **Container** | Max-width wrapper | Core `group` block | `maxWidth`, `className` |
| **Section** | Spacing/background wrapper | Core `group` block | `spacing`, `background`, `className` |
| **Heading** | Typography enforcement | Core `heading` block | `level`, `children`, `className` |
| **Button** | Interactive element | Core `button` block | `variant`, `href`, `onClick`, `children` |
| **Breadcrumbs** | Navigation utility | Breadcrumbs pattern | `crumbs` |

### Container

**File:** `/src/app/components/common/Container.tsx`  
**WordPress:** Core Group block with max-width

**Usage:**
```tsx
import { Container } from '../common/Container';

<Container maxWidth="1200px">
  Content with max-width constraint
</Container>
```

### Section

**File:** `/src/app/components/common/Section.tsx`  
**WordPress:** Core Group block with spacing/background

**Usage:**
```tsx
import { Section } from '../common/Section';

<Section spacing="xl" background="default">
  Section content with consistent spacing
</Section>
```

**Spacing Options:** `sm`, `md`, `lg`, `xl`, `2xl`

### Heading

**File:** `/src/app/components/common/Heading.tsx`  
**WordPress:** Core Heading block

**Usage:**
```tsx
import { Heading } from '../common/Heading';

<Heading level={1}>Page Title</Heading>
<Heading level={2}>Section Title</Heading>
```

### Button

**File:** `/src/app/components/common/Button.tsx`  
**WordPress:** Core Button block with style variations

**Usage:**
```tsx
import { Button } from '../common/Button';

<Button variant="primary" href="/contact">Get Started</Button>
<Button variant="secondary" onClick={handleClick}>Learn More</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `ghost`

### Breadcrumbs

**File:** `/src/app/components/common/Breadcrumbs.tsx`  
**WordPress:** Breadcrumbs pattern (custom)

**Usage:**
```tsx
import { Breadcrumbs } from '../common/Breadcrumbs';

<Breadcrumbs crumbs={[
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Post Title' }
]} />
```

---

## 🏗️ Template Parts (Global Chrome)

Global components that appear on every page.

| Component | Purpose | WordPress Equivalent | File Location |
|-----------|---------|---------------------|---------------|
| **SiteHeader** | Global navigation | `parts/header.html` | `/parts/SiteHeader.tsx` |
| **SiteFooter** | Global footer | `parts/footer.html` | `/parts/SiteFooter.tsx` |

### SiteHeader

**File:** `/src/app/components/parts/SiteHeader.tsx`  
**WordPress:** `parts/header.html`  
**Documentation:** [guidelines/parts/Header.md](./parts/Header.md)

**Features:**
- Responsive navigation
- Mobile menu
- Logo component
- Dark mode toggle
- Sticky header option

**Usage:**
```tsx
import { SiteHeader } from '../parts/SiteHeader';
import { mainNavigation } from '../../data/pages';

<SiteHeader navigation={mainNavigation} />
```

### SiteFooter

**File:** `/src/app/components/parts/SiteFooter.tsx`  
**WordPress:** `parts/footer.html`  
**Documentation:** [guidelines/parts/Footer.md](./parts/Footer.md)

**Features:**
- Multi-column layout
- Footer navigation
- Social links
- Copyright text
- Newsletter signup (optional)

**Usage:**
```tsx
import { SiteFooter } from '../parts/SiteFooter';
import { footerNavigation } from '../../data/pages';

<SiteFooter navigation={footerNavigation} />
```

---

## 🎨 Pattern Components (Reusable Sections)

Block patterns that compose pages. Every pattern maps to a WordPress block pattern.

### Hero Patterns

| Component | Purpose | Pattern Slug | Documentation |
|-----------|---------|--------------|---------------|
| **HeroSection** | Standard hero | `lsx-design/hero/standard` | [patterns/hero-patterns.md](./patterns/hero-patterns.md) |
| **HeroWithImage** | Hero with background image | `lsx-design/hero/with-image` | [patterns/hero-patterns.md](./patterns/hero-patterns.md) |
| **HeroMinimal** | Minimal hero | `lsx-design/hero/minimal` | [patterns/hero-patterns.md](./patterns/hero-patterns.md) |

### Content Patterns

| Component | Purpose | Pattern Slug |
|-----------|---------|--------------|
| **ContentSection** | Editorial content | `lsx-design/content/editorial` |
| **TwoColumnContent** | Two-column layout | `lsx-design/content/two-column` |
| **MediaTextSection** | Image + text side-by-side | `lsx-design/content/media-text` |
| **QuoteSection** | Large blockquote | `lsx-design/content/quote` |

### Listing Patterns

| Component | Purpose | Pattern Slug |
|-----------|---------|--------------|
| **CardGrid** | Generic card grid | `lsx-design/listing/card-grid` |
| **PostGrid** | Blog post grid | `lsx-design/listing/post-grid` |
| **PortfolioGrid** | Portfolio project grid | `lsx-design/listing/portfolio-grid` |
| **TeamGrid** | Team member grid | `lsx-design/listing/team-grid` |

### CTA Patterns

| Component | Purpose | Pattern Slug |
|-----------|---------|--------------|
| **CTASection** | Single primary CTA | `lsx-design/cta/primary` |
| **CTAWithForm** | CTA with form | `lsx-design/cta/with-form` |
| **CTAMinimal** | Minimal CTA | `lsx-design/cta/minimal` |

### Meta Patterns

| Component | Purpose | Pattern Slug |
|-----------|---------|--------------|
| **StatsSection** | Statistics grid | `lsx-design/meta/stats` |
| **TestimonialSection** | Client testimonials | `lsx-design/meta/testimonials` |
| **QuickFactsSection** | Key-value pairs | `lsx-design/meta/quick-facts` |
| **TimelineSection** | Timeline/history | `lsx-design/meta/timeline` |

### Navigation Patterns

| Component | Purpose | Pattern Slug |
|-----------|---------|--------------|
| **FilterButtons** | Category filters | `lsx-design/nav/filters` |
| **Pagination** | Page navigation | `lsx-design/nav/pagination` |
| **CategoryNav** | Category navigation | `lsx-design/nav/category` |

### Special Patterns

| Component | Purpose | Pattern Slug |
|-----------|---------|--------------|
| **FAQSection** | FAQ accordion | `lsx-design/content/faq` |
| **PricingTable** | Pricing plans | `lsx-design/content/pricing` |
| **ContactForm** | Contact form | `lsx-design/content/contact-form` |
| **SearchSection** | Search interface | `lsx-design/content/search` |
| **ValuesSection** | Company values | `lsx-design/content/values` |

---

## 📄 Template Components (Page Archetypes)

Page templates that compose patterns into complete pages.

### Homepage Templates

| Component | Archetype | WordPress Template |
|-----------|-----------|-------------------|
| **FrontPageTemplate** | Single Detail | `templates/front-page.html` |

### Content Templates

| Component | Archetype | WordPress Template |
|-----------|-----------|-------------------|
| **AboutTemplate** | Single Detail | `templates/page-about.html` |
| **ServicesTemplate** | Single Detail | `templates/page-services.html` |
| **ContactPageTemplate** | Utility Page | `templates/page-contact.html` |
| **TeamTemplate** | Single Detail | `templates/page-team.html` |

### Blog Templates

| Component | Archetype | WordPress Template |
|-----------|-----------|-------------------|
| **BlogIndexTemplate** | Editorial Listing | `templates/index.html` |
| **SinglePostTemplate** | Single Detail | `templates/single.html` |
| **BlogArchiveTemplate** | Content Hub | `templates/archive.html` |
| **CategoryArchiveTemplate** | Taxonomy Archive | `templates/category.html` |

### Portfolio Templates

| Component | Archetype | WordPress Template |
|-----------|-----------|-------------------|
| **PortfolioArchiveTemplate** | Content Hub | `templates/archive-portfolio.html` |
| **SinglePortfolioTemplate** | Single Detail | `templates/single-portfolio.html` |

### Utility Templates

| Component | Archetype | WordPress Template |
|-----------|-----------|-------------------|
| **FAQTemplate** | Utility Page | `templates/page-faq.html` |
| **404Template** | Utility Page | `templates/404.html` |
| **SearchTemplate** | Editorial Listing | `templates/search.html` |

### Service/Solution Templates

| Component | Archetype | WordPress Template |
|-----------|-----------|-------------------|
| **ServiceDetailTemplate** | Single Detail | `templates/page-service.html` |
| **SolutionDetailTemplate** | Single Detail | `templates/page-solution.html` |
| **HostingTemplate** | Single Detail | `templates/page-hosting.html` |

### About Sub-Templates

| Component | Archetype | WordPress Template |
|-----------|-----------|-------------------|
| **AboutProcessTemplate** | Single Detail | `templates/page-about-process.html` |
| **AboutCultureTemplate** | Single Detail | `templates/page-about-culture.html` |
| **AboutHistoryTemplate** | Single Detail | `templates/page-about-history.html` |

---

## 🎛️ UI Utility Components (Progressive Enhancement)

These components provide enhanced UX but are not part of WordPress block composition.

| Component | Purpose | WordPress Equivalent | Documentation |
|-----------|---------|---------------------|---------------|
| **BackToTopButton** | Scroll to top | `theme/assets/js/scroll.js` | [components/ScrollBackToTop.md](./components/ScrollBackToTop.md) |
| **StyleSwitcher** | Theme switcher | `theme/assets/js/theme.js` | [components/StyleSwitcher.md](./components/StyleSwitcher.md) |
| **LayoutSwitcher** | View mode switcher | `theme/assets/js/layout.js` | [components/LayoutSwitcher.md](./components/LayoutSwitcher.md) |
| **SkipLink** | Accessibility utility | Hard-coded in header.html | Built-in |

---

## 📊 Component Usage Matrix

### By Template

| Template | Common | Parts | Patterns | UI |
|----------|--------|-------|----------|-----|
| FrontPageTemplate | 5 | 2 | 8-12 | 2 |
| BlogIndexTemplate | 5 | 2 | 5-7 | 2 |
| SinglePostTemplate | 5 | 2 | 6-9 | 2 |
| AboutTemplate | 5 | 2 | 7-10 | 2 |
| ServicesTemplate | 5 | 2 | 6-8 | 2 |

### By Pattern Category

| Category | Pattern Count | Most Used Components |
|----------|--------------|---------------------|
| Hero | 3 | HeroSection, HeroWithImage |
| Content | 6 | ContentSection, MediaTextSection |
| Listing | 4 | CardGrid, PostGrid, PortfolioGrid |
| CTA | 3 | CTASection, CTAWithForm |
| Meta | 4 | StatsSection, TestimonialSection |
| Navigation | 3 | FilterButtons, Pagination |
| Special | 5 | FAQSection, ContactForm |

---

## 🔍 Finding Components

### By Purpose

**Need navigation?** → SiteHeader, SiteFooter, Breadcrumbs, FilterButtons  
**Need hero section?** → HeroSection, HeroWithImage, HeroMinimal  
**Need content layout?** → ContentSection, MediaTextSection, TwoColumnContent  
**Need card grids?** → CardGrid, PostGrid, PortfolioGrid, TeamGrid  
**Need CTA?** → CTASection, CTAWithForm, CTAMinimal  
**Need stats/testimonials?** → StatsSection, TestimonialSection, QuickFactsSection  
**Need FAQ?** → FAQSection  
**Need forms?** → ContactForm, CTAWithForm  

### By WordPress Block

**Core Heading** → Heading component  
**Core Button** → Button component  
**Core Group** → Container, Section components  
**Core Paragraph** → Use semantic `<p>` with tokens  
**Core Image** → Use `<img>` with ImageWithFallback  
**Core List** → Use semantic `<ul>`/`<ol>`  

---

## 📚 Documentation Reference

### Complete Component Docs

**Common Components:**
- No individual docs (self-documenting via props)

**Template Parts:**
- [parts/Header.md](./parts/Header.md)
- [parts/Footer.md](./parts/Footer.md)

**Pattern Categories:**
- [patterns/hero-patterns.md](./patterns/hero-patterns.md)
- [patterns/header-patterns.md](./patterns/header-patterns.md)
- [patterns/footer-patterns.md](./patterns/footer-patterns.md)
- [patterns/about-team-patterns.md](./patterns/about-team-patterns.md)

**UI Utilities:**
- [components/ScrollBackToTop.md](./components/ScrollBackToTop.md)
- [components/StyleSwitcher.md](./components/StyleSwitcher.md)
- [components/LayoutSwitcher.md](./components/LayoutSwitcher.md)

**System Overviews:**
- [overview-components.md](./overview-components.md) - Component architecture
- [blocks/overview-blocks.md](./blocks/overview-blocks.md) - WordPress blocks
- [patterns/overview-patterns.md](./patterns/overview-patterns.md) - Pattern catalog
- [templates/overview-templates.md](./templates/overview-templates.md) - Template archetypes

---

## ✅ Component Checklist

Before using any component:

- [ ] Read component-specific documentation (if exists)
- [ ] Understand WordPress mapping
- [ ] Know which design tokens to use
- [ ] Verify accessibility requirements
- [ ] Check responsive behavior
- [ ] Test with edge cases (long text, missing data)

---

**Last Updated:** December 25, 2024  
**Total Components:** 45+  
**Maintained By:** LSX Design Team
