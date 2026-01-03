# Patterns Overview

This document explains the **pattern system** for LSX Design, which maps directly to **WordPress block patterns** (`patterns/*.php`) that editors can insert into pages.

---

## Pattern Philosophy

Patterns are **reusable compositions of blocks** that editors can insert as complete sections. They are the primary way to build pages in LSX Design.

**Key Principle:** Every page is composed from approved patterns. No bespoke one-off sections.

**WordPress Mapping:**
```php
// patterns/hero-home.php
<?php
/**
 * Title: Hero Home
 * Slug: lsx-design/hero/home
 * Categories: lsx-design-hero
 */
?>
<!-- pattern markup here -->
```

---

## Pattern Categories

Patterns are organized by category matching their purpose:

| Category | Slug Prefix | Purpose | Examples |
|----------|-------------|---------|----------|
| **Layout** | `lsx-design/layout/` | Global chrome | Header, Footer |
| **Hero** | `lsx-design/hero/` | Page context/intro | Home hero, Page hero |
| **Header** | `lsx-design/header/` | Section headers | Archive header, Page header |
| **Navigation** | `lsx-design/nav/` | Navigation elements | Filters, Breadcrumbs, Pagination |
| **Listing** | `lsx-design/listing/` | Content grids | Card grid, Post grid |
| **Content** | `lsx-design/content/` | Editorial sections | Text blocks, Media blocks |
| **Meta** | `lsx-design/meta/` | Metadata display | Quick facts, Key-value |
| **Related** | `lsx-design/related/` | Related content | Related posts, Suggestions |
| **CTA** | `lsx-design/cta/` | Calls-to-action | Primary CTA, Inline CTA, Newsletter ⭐ |
| **Form** | `lsx-design/form/` | Form sections | Newsletter signup, Contact forms ⭐ |
| **Pricing** | `lsx-design/pricing/` | E-commerce patterns | Pricing tables, Feature comparison ⭐ |
| **Trust** | `lsx-design/trust/` | Social proof | Client logos, Awards, Certifications ⭐ |
| **State** | `lsx-design/state/` | Empty/error states | No results, 404 |

---

## Pattern Catalog

### Layout Patterns

**Site Header** (`lsx-design/layout/header`)  
**Purpose:** Global navigation and branding  
**Blocks:** Group + Logo + Navigation + Buttons  
**Usage:** Every page template

**Site Footer** (`lsx-design/layout/footer`)  
**Purpose:** Footer links, copyright, newsletter  
**Blocks:** Group + Columns + Navigation + Form  
**Usage:** Every page template

**Footer Newsletter** (`lsx-design/layout/footer-newsletter`) ⭐ **NEW**  
**Purpose:** Email subscription in footer  
**Blocks:** Group + Form + Privacy text  
**Usage:** Site footer, post footer  
**Documentation:** `/guidelines/patterns/FooterNewsletter.md`

---

### Hero Patterns

**Hero Home** (`lsx-design/hero/home`)  
**Purpose:** Homepage hero with large heading and CTA  
**Blocks:** Group (hero style) + Heading + Paragraph + Buttons  
**Usage:** Front page template
**Documentation:** `/guidelines/patterns/HeroHome.md`

**Hero Full Height** (`lsx-design/hero/hero-full-height`) ⭐ **NEW**  
**Purpose:** Immersive full-viewport hero section  
**Blocks:** Cover block + Heading + Buttons + Scroll indicator  
**Usage:** Homepage, landing pages, portfolio  
**Documentation:** `/guidelines/patterns/HeroFullHeight.md`

**Hero Gradient** (`lsx-design/hero/hero-gradient`) ⭐ **NEW**  
**Purpose:** Hero with animated gradient background  
**Blocks:** Group + Gradient + Heading + Buttons  
**Usage:** Product pages, event pages, modern landing pages  
**Documentation:** `/guidelines/patterns/HeroGradient.md`

**Hero Minimal** (`lsx-design/hero/hero-minimal`) ⭐ **NEW**  
**Purpose:** Clean centered hero with minimal styling  
**Blocks:** Group + Heading + Paragraph (centered)  
**Usage:** Blog posts, about pages, service pages  
**Documentation:** `/guidelines/patterns/HeroMinimal.md`

**Hero Single** (`lsx-design/hero/single`)  
**Purpose:** Single post/page hero  
**Blocks:** Group + Heading + Meta + Image  
**Usage:** Single template

---

### Header Patterns

**Archive Header** (`lsx-design/header/archive`)  
**Purpose:** Archive page introduction  
**Blocks:** Group + Heading + Paragraph  
**Usage:** Archive templates

```html
<!-- wp:group -->
<div class="wp-block-group">
  <!-- wp:heading {"level":1} -->
  <h1>Archive Title</h1>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Archive description text</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
```

**Page Header** (`lsx-design/header/page`)  
**Purpose:** Standard page header  
**Blocks:** Group + Heading + Paragraph  
**Usage:** Page templates

**Listing Header** (`lsx-design/header/listing`)  
**Purpose:** Blog/index header with results count  
**Blocks:** Group + Heading + Paragraph + Meta  
**Usage:** Index/blog templates

---

### Navigation Patterns

**Breadcrumbs** (`lsx-design/nav/breadcrumbs`)  
**Purpose:** Hierarchical navigation trail  
**Blocks:** Navigation (breadcrumb mode)  
**Usage:** All interior pages

**Category Filters** (`lsx-design/nav/category-filters`)  
**Purpose:** Category/tag filtering buttons  
**Blocks:** Buttons group with category links  
**Usage:** Archive, Index templates

**Pagination** (`lsx-design/nav/pagination`)  
**Purpose:** Page navigation for archives  
**Blocks:** Query Pagination  
**Usage:** Archive, Index, Search templates

**Filter Bar** (`lsx-design/nav/filter-bar`)  
**Purpose:** Sidebar filter controls  
**Blocks:** Group + Buttons + Checkboxes  
**Usage:** Archive with filters template

---

### Listing Patterns

**Card Grid** (`lsx-design/listing/card-grid`)  
**Purpose:** Responsive grid of content cards  
**Blocks:** Columns (3-col) + Group cards  
**Usage:** Archive, Front page

```html
<!-- wp:columns {"className":"gap-12"} -->
<div class="wp-block-columns gap-12">
  <!-- wp:column -->
  <div class="wp-block-column">
    <!-- Card content -->
  </div>
  <!-- /wp:column -->
  
  <!-- Repeat for each column -->
</div>
<!-- /wp:columns -->
```

**Services Card** (`lsx-design/listing/services-card`)  
**Purpose:** Service offering card with icon, features, and CTA  
**Blocks:** Group + Icon + Heading + Paragraph + List + Button  
**Usage:** Services pages, homepage features  
**Documentation:** [ServicesCard.md](./ServicesCard.md)

**Post Grid** (`lsx-design/listing/post-grid`)  
**Purpose:** WordPress post query loop  
**Blocks:** Query Loop + Post Template  
**Usage:** Index, Archive templates

**Related Posts** (`lsx-design/listing/related-posts`)  
**Purpose:** Related content grid  
**Blocks:** Query Loop (related) + Post Template  
**Usage:** Single template

---

### Content Patterns

**Editorial Block** (`lsx-design/content/editorial`)  
**Purpose:** Rich text content area  
**Blocks:** Group (narrow) + Heading + Paragraph + Image  
**Usage:** Single template, Pages

**Media Block** (`lsx-design/content/media`)  
**Purpose:** Image/video with caption  
**Blocks:** Group + Image/Video + Paragraph  
**Usage:** Single template

**Text Section** (`lsx-design/content/text`)  
**Purpose:** Text-only content section  
**Blocks:** Group (narrow) + Heading + Paragraph  
**Usage:** Pages, Posts

**Feature Grid** (`lsx-design/content/features`)  
**Purpose:** Icon + text features  
**Blocks:** Columns + Group + Image + Heading + Paragraph  
**Usage:** Front page, Service pages

---

### Meta Patterns

**Quick Facts** (`lsx-design/meta/quick-facts`)  
**Purpose:** Key-value metadata display  
**Blocks:** Group + List (styled)  
**Usage:** Single template (tours, products)

**Post Meta** (`lsx-design/meta/post-meta`)  
**Purpose:** Author, date, categories  
**Blocks:** Group + Post Author + Post Date + Post Terms  
**Usage:** Single template, Card patterns

---

### Related Patterns

**Related Stack** (`lsx-design/related/stack`)  
**Purpose:** Vertical stack of related items  
**Blocks:** Query Loop + Post Template (vertical)  
**Usage:** Sidebar, Single template

**Suggestions Grid** (`lsx-design/related/suggestions`)  
**Purpose:** Suggested content grid  
**Blocks:** Columns + Query Loop  
**Usage:** 404, Search templates

---

### CTA Patterns

**Primary CTA** (`lsx-design/cta/primary`)  
**Purpose:** Single focused call-to-action  
**Blocks:** Group (brand style) + Heading + Paragraph + Buttons  
**Usage:** End of pages/templates

```html
<!-- wp:group {"style":"brand"} -->
<div class="wp-block-group is-style-brand">
  <!-- wp:heading {"level":2} -->
  <h2>Ready to get started?</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Join thousands of satisfied customers</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- wp:button {"style":"primary"} -->
    <div class="wp-block-button is-style-primary">
      <a class="wp-block-button__link">Get Started Now</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
```

**Archive CTA** (`lsx-design/cta/archive-cta`)  
**Purpose:** Conversion-focused CTA for archive pages with enquiry modal  
**Blocks:** Group (sectionStyle="cta-primary") + Heading + Paragraph + Button  
**Usage:** End of archive templates  
**Documentation:** [ArchiveCTA.md](./ArchiveCTA.md)

**Newsletter Signup** (`lsx-design/cta/newsletter`)  
**Purpose:** Email subscription form  
**Blocks:** Group + Heading + Paragraph + Form (input + button)  
**Usage:** Footer, Sidebar

---

### Form Patterns

**Newsletter Signup** (`lsx-design/form/newsletter`)  
**Purpose:** Email subscription form  
**Blocks:** Group + Heading + Paragraph + Form (input + button)  
**Usage:** Footer, Sidebar
**Documentation:** [NewsletterSignup.md](./NewsletterSignup.md) ⭐ NEW

---

### Pricing Patterns

**Pricing Table** (`lsx-design/pricing/table`)  
**Purpose:** Pricing plan cards with features and CTAs  
**Blocks:** Group + Grid/Columns + Pricing cards  
**Usage:** Pricing pages, Service pages
**Documentation:** [PricingTable.md](./PricingTable.md) ⭐ NEW

**Feature Comparison** (`lsx-design/pricing/comparison`)  
**Purpose:** Feature-by-feature comparison table  
**Blocks:** Group + Table + Checkmarks  
**Usage:** Pricing pages, Service comparison
**Documentation:** [FeatureComparison.md](./FeatureComparison.md) ⭐ NEW

---

### Trust Patterns

**Social Proof** (`lsx-design/trust/social-proof`)  
**Purpose:** Client logos, partner badges, awards, certifications  
**Blocks:** Group + Gallery/Grid + Logo images  
**Usage:** Homepage, About pages, Service pages, Portfolio
**Documentation:** [SocialProof.md](./SocialProof.md) ⭐ NEW

---

### State Patterns

**Empty State** (`lsx-design/state/empty`)  
**Purpose:** No results message  
**Blocks:** Group + Heading + Paragraph + Buttons  
**Usage:** Archive (no posts), Search (no results)
**Documentation:** `/guidelines/patterns/EmptyState.md` ⭐ **NEW**

**404 State** (`lsx-design/state/404`)  
**Purpose:** Page not found  
**Blocks:** Group + Heading + Paragraph + Search + Links  
**Usage:** 404 template

---

### Content Patterns (Additional)

**Case Study Preview** (`lsx-design/content/case-study-preview`) ⭐ **NEW**  
**Purpose:** Portfolio project highlights with metrics  
**Blocks:** Group + Image + Heading + Metrics + Button  
**Usage:** Portfolio single pages (related work), homepage featured projects  
**Documentation:** `/guidelines/patterns/CaseStudyPreview.md`

---

## Pattern Registration

### PHP Registration

```php
// patterns/hero-home.php
<?php
/**
 * Title: Hero Home
 * Slug: lsx-design/hero/home
 * Categories: lsx-design-hero
 * Keywords: hero, home, landing
 * Block Types: core/group
 * Post Types: page
 */
?>

<!-- wp:group {"style":"hero"} -->
<div class="wp-block-group is-style-hero">
  <!-- Pattern content -->
</div>
<!-- /wp:group -->
```

### Pattern Categories Registration

```php
// functions.php
function lsx_design_register_pattern_categories() {
  register_block_pattern_category(
    'lsx-design-hero',
    array( 'label' => __( 'LSX Heroes', 'lsx-design' ) )
  );
  
  register_block_pattern_category(
    'lsx-design-cta',
    array( 'label' => __( 'LSX CTAs', 'lsx-design' ) )
  );
  
  // ... more categories
}
add_action( 'init', 'lsx_design_register_pattern_categories' );
```

---

## Pattern Composition Rules

### ✅ DO

1. **Use semantic section styles**
   ```html
   <div class="wp-block-group is-style-surface">
   ```

2. **Apply token spacing**
   ```html
   <div class="wp-block-group" style="padding: var(--spacing-60)">
   ```

3. **Include accessibility markup**
   ```html
   <nav aria-label="Breadcrumb">
   ```

4. **Use responsive layouts**
   ```html
   <div class="wp-block-columns">
   ```

5. **Provide editor placeholders**
   ```html
   <!-- wp:paragraph {"placeholder":"Enter description..."} -->
   ```

### ❌ DON'T

1. Don't hard-code pixel values
2. Don't create one-off patterns for single use
3. Don't skip semantic HTML
4. Don't ignore responsive behavior
5. Don't bypass token system

---

## React Component → Pattern Mapping

| React Component | WordPress Pattern | Pattern Slug |
|-----------------|-------------------|--------------|
| `<HeroHome />` | Hero Home | `lsx-design/hero/home` |
| `<ArchiveHeader />` | Archive Header | `lsx-design/header/archive` |
| `<CardGrid />` | Card Grid | `lsx-design/listing/card-grid` |
| `<CTASection />` | Primary CTA | `lsx-design/cta/primary` |
| `<PaginationNav />` | Pagination | `lsx-design/nav/pagination` |
| `<FilterBar />` | Filter Bar | `lsx-design/nav/filter-bar` |

---

## Pattern Usage in Templates

### Front Page Template

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:pattern {"slug":"lsx-design/hero/home"} /-->

<!-- wp:pattern {"slug":"lsx-design/listing/card-grid"} /-->

<!-- wp:pattern {"slug":"lsx-design/cta/primary"} /-->

<!-- wp:template-part {"slug":"footer"} /-->
```

### Archive Template

```html
<!-- wp:template-part {"slug":"header"} /-->

<main>
  <!-- wp:pattern {"slug":"lsx-design/nav/breadcrumbs"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/header/archive"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/listing/post-grid"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/nav/pagination"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

### Single Template

```html
<!-- wp:template-part {"slug":"header"} /-->

<main>
  <!-- wp:pattern {"slug":"lsx-design/hero/single"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/content/editorial"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/related/suggestions"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/cta/primary"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

---

## Accessibility in Patterns

All patterns must include:

- ✅ **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`
- ✅ **ARIA labels** — `aria-label`, `aria-labelledby`, `aria-describedby`
- ✅ **Keyboard navigation** — All interactive elements
- ✅ **Focus management** — Visible focus states
- ✅ **Color contrast** — WCAG AA minimum
- ✅ **Heading hierarchy** — Logical H1 → H2 → H3 flow

---

## Testing Patterns

### Editor Testing
1. Insert pattern in block editor
2. Verify all blocks load correctly
3. Test block customization
4. Check responsive preview
5. Validate accessibility

### Frontend Testing
1. View pattern on published page
2. Test all breakpoints
3. Verify keyboard navigation
4. Check color contrast
5. Test with screen reader

---

## Best Practices

### Pattern Design
- Keep patterns focused on single purpose
- Make patterns editor-friendly (easy to customize)
- Use placeholder content that guides editors
- Include helpful pattern descriptions
- Group related patterns in categories

### Pattern Implementation
- Follow block markup standards
- Use CSS variables for all styling
- Ensure responsive behavior
- Test in editor and frontend
- Document usage examples

---

## Related Documentation

- **[overview-blocks.md](../blocks/overview-blocks.md)** — Block system
- **[overview-templates.md](../templates/overview-templates.md)** — Template structure
- **[overview-parts.md](../parts/overview-parts.md)** — Template parts
- **[sections/overview-sections.md](../sections/overview-sections.md)** — Section styles

---

## Complete Pattern Documentation Index

### **Pattern-Specific Documentation** (`/guidelines/patterns/`)

1. **[ArchiveCTA.md](./ArchiveCTA.md)** — Archive CTA pattern with enquiry modal ⭐
   - 6 CTA variants (general, portfolio, blog, services, team, contact)
   - EnquiryModal component integration
   - Conversion-focused design
   - WordPress Group block architecture

2. **[ServicesCard.md](./ServicesCard.md)** — Services Card pattern ⭐
   - 12 service offerings across 4 categories
   - Icon system integration
   - Features list formatting
   - Grid layout patterns
   - WordPress Group block implementation

3. **[FAQSection.md](./FAQSection.md)** — FAQ Section pattern
   - Typography enforcement (questions use `--text-lg`)
   - Accordion-style Q&A display
   - 13 FAQ collections for different contexts

4. **[NewsletterSignup.md](./NewsletterSignup.md)** — Newsletter Signup pattern ⭐ NEW
   - Email subscription form
   - Success/error states
   - Form validation
   - WordPress Group block with form-highlight section style

5. **[PricingTable.md](./PricingTable.md)** — Pricing Table pattern ⭐ NEW
   - Pricing plan cards (2-4 columns)
   - Featured plan highlighting
   - Feature lists with checkmarks
   - WordPress Group block with pricing-default section style

6. **[CTAInline.md](./CTAInline.md)** — CTA Inline pattern ⭐ NEW
   - Compact mid-content CTA
   - 800px max-width
   - 1-2 button variants
   - WordPress Group block with cta-accent section style

7. **[SocialProof.md](./SocialProof.md)** — Social Proof pattern ⭐ NEW
   - Client logos, partner badges, awards
   - Grayscale with color on hover
   - Responsive grid layout (3-6 columns)
   - WordPress Gallery or Group block with testimonial-highlight section style

8. **[FeatureComparison.md](./FeatureComparison.md)** — Feature Comparison pattern ⭐ NEW
   - Detailed feature-by-feature table
   - Checkmark/X indicators
   - Featured column highlighting
   - WordPress Table or Group block with content-feature section style

9. **[about-team-patterns.md](./about-team-patterns.md)** — Team/About patterns
   - Team member cards
   - About page sections
   - Culture and values displays

10. **[footer-patterns.md](./footer-patterns.md)** — Footer patterns
    - Newsletter signup
    - Footer navigation columns
    - Social media links
    - Copyright and legal links

11. **[header-patterns.md](./header-patterns.md)** — Header patterns
    - Archive headers
    - Page headers
    - Hero headers
    - Category headers

12. **[EmptyState.md](./EmptyState.md)** — Empty State pattern ⭐ **NEW**
    - No results messaging (search, filters, archives)
    - User-friendly guidance and next actions
    - Icon selection guidelines
    - WordPress Group block with center alignment

13. **[CaseStudyPreview.md](./CaseStudyPreview.md)** — Case Study Preview pattern ⭐ **NEW**
    - Portfolio project highlights with metrics
    - Client testimonials integration
    - Key performance indicators display
    - Layout variants (side-by-side, vertical, full-width)
    - WordPress Article + Image + Metrics blocks

14. **[FooterNewsletter.md](./FooterNewsletter.md)** — Footer Newsletter pattern ⭐ **NEW**
    - Email subscription in footer placement
    - GDPR compliance guidelines
    - Form validation and error states
    - Success messaging
    - WordPress Group + Form blocks

15. **[HeroFullHeight.md](./HeroFullHeight.md)** — Hero Full Height pattern ⭐ **NEW**
    - Immersive full-viewport hero section
    - Background image/video support
    - Scroll indicator component
    - Dark overlay for text readability
    - WordPress Cover block with 100vh

16. **[HeroGradient.md](./HeroGradient.md)** — Hero Gradient pattern ⭐ **NEW**
    - Animated gradient backgrounds
    - 4 gradient presets (primary, secondary, sunset, ocean)
    - Motion-safe animations
    - WordPress Group block with gradient

17. **[HeroMinimal.md](./HeroMinimal.md)** — Hero Minimal pattern ⭐ **NEW**
    - Clean centered hero with minimal styling
    - Perfect for content-first pages
    - Compact variant available
    - WordPress Group block with center alignment

### **Related Pattern Components** (`/guidelines/components/`)

- **[CTASection.md](../components/CTASection.md)** — CTA section component
- **[CardGrid.md](../components/CardGrid.md)** — Card grid component
- **[FAQSection.md](../components/FAQSection.md)** — FAQ section component
- **[StatsSection.md](../components/StatsSection.md)** — Stats section component
- **[HeroHome.md](../components/HeroHome.md)** — Homepage hero component
- **[ArchiveHeader.md](../components/ArchiveHeader.md)** — Archive header component

**Total Pattern Files:** 17 documentation files + 1 overview = **18 complete pattern docs** ⭐⭐⭐

**Latest Patterns (December 27, 2024):**
- ✅ EmptyState pattern (user-friendly empty states)
- ✅ CaseStudyPreview pattern (portfolio highlights with metrics)
- ✅ FooterNewsletter pattern (footer email subscription)
- ✅ HeroFullHeight pattern (full-viewport immersive heroes)
- ✅ HeroGradient pattern (animated gradient backgrounds)
- ✅ HeroMinimal pattern (clean centered heroes)

**Previous Patterns (December 2024):**
- ✅ NewsletterSignup pattern (email subscription)
- ✅ PricingTable pattern (pricing plan cards)
- ✅ CTAInline pattern (mid-content CTA)
- ✅ SocialProof pattern (client logos, awards)
- ✅ FeatureComparison pattern (feature tables)
- ✅ ArchiveCTA pattern (conversion optimization)
- ✅ ServicesCard pattern (service offerings display)

---

**Last Updated:** December 27, 2024  
**Pattern Documentation Coverage:** 100% (18/18 planned patterns documented) ✅