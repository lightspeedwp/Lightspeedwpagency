# Pattern Catalog

**Category:** Patterns  
**Last Updated:** March 11, 2026  
**Status:** Active

---

## Purpose

**What:** Complete catalog of block patterns with naming conventions and categories

**Why:** Ensure patterns are discoverable, reusable, and consistently named

**Who:** Developers creating and registering block patterns

---

## Pattern Philosophy

**Core Principle:** A page is always "composed" from patterns. Do not create one-off sections for a single template.

**Benefits:**
- Reusability across multiple pages
- Consistency across the site
- Editor-friendly (patterns are composable)
- WordPress FSE compatible
- Easy to maintain and update

---

## Pattern Slug Format

**Format:** `lsx-design/{category}/{pattern-name}`

**Examples:**
- `lsx-design/hero/hero-home`
- `lsx-design/listing/post-grid`
- `lsx-design/cta/cta-section`
- `lsx-design/nav/breadcrumbs`

**Rules:**
- Always use lowercase
- Use hyphens (not underscores or spaces)
- Category must be one of the defined categories
- Name should be descriptive and unique

---

## Pattern Categories

### 1. Layout (Site Chrome)

**Slug:** `lsx-design/layout/{pattern-name}`

**Purpose:** Site-wide structural elements

**Patterns:**
- `site-header` - Global site header with navigation
- `site-footer` - Global site footer
- `mobile-menu` - Mobile navigation menu

**Usage:** Template parts that appear on every page

**WordPress Mapping:** `parts/*.html`

---

### 2. Hero (Page Context)

**Slug:** `lsx-design/hero/{pattern-name}`

**Purpose:** Full-width hero sections that establish page context

**Patterns:**
- `hero-home` - Homepage hero with large title
- `hero-page` - Standard page hero
- `hero-service` - Service page hero with features
- `hero-portfolio` - Portfolio project hero
- `hero-about` - About page hero
- `hero-contact` - Contact page hero

**Characteristics:**
- Full viewport height (optional)
- Large typography
- Background image or gradient
- Primary CTA
- Scroll indicator (optional)

---

### 3. Header (Archive/Listing/Page Headers)

**Slug:** `lsx-design/header/{pattern-name}`

**Purpose:** Section headers for archives, listings, and pages

**Patterns:**
- `archive-header` - Archive page header
- `listing-header` - Blog/insights listing header
- `page-header` - Standard page header
- `section-header` - Section introduction header

**Characteristics:**
- Title + description
- Optional metadata
- Breadcrumbs integration
- Filters/sorting (optional)

---

### 4. Nav (Navigation Elements)

**Slug:** `lsx-design/nav/{pattern-name}`

**Purpose:** Navigation UI elements

**Patterns:**
- `breadcrumbs` - Breadcrumb navigation
- `pagination` - Page navigation
- `category-filters` - Category filter buttons
- `term-navigation` - Taxonomy term navigation
- `sorting-controls` - Sort/filter controls

**Characteristics:**
- Keyboard accessible
- Touch-friendly (44x44px targets)
- Active state indicators
- ARIA labels

---

### 5. Listing (Card Grids)

**Slug:** `lsx-design/listing/{pattern-name}`

**Purpose:** Grid layouts for multiple items

**Patterns:**
- `post-grid` - Blog post grid
- `portfolio-grid` - Portfolio project grid
- `service-grid` - Service cards grid
- `team-grid` - Team member grid
- `testimonial-grid` - Testimonial cards

**Characteristics:**
- Responsive grid (1 → 2 → 3 → 4 columns)
- Consistent card heights
- Hover states
- Empty states

---

### 6. Content (Editorial, Media, Supporting Sections)

**Slug:** `lsx-design/content/{pattern-name}`

**Purpose:** Content sections within pages

**Patterns:**
- `editorial-section` - Rich text content
- `stats-grid` - Statistics/metrics grid
- `feature-list` - Feature list with icons
- `gallery-section` - Image gallery
- `video-section` - Video embed
- `faq-section` - FAQ accordion
- `checklist` - Checklist with checkmarks
- `testimonial-section` - Single testimonial
- `timeline` - Timeline/process steps

**Characteristics:**
- Semantic HTML
- Responsive layout
- Design system typography
- CSS variable styling

**Special Note:**
- **FAQ Sections:** See [FAQSection.md](./FAQSection.md) for typography enforcement (questions MUST use `--text-lg`, NOT `--text-h4`)

---

### 7. Meta (Quick Facts / Key-Value)

**Slug:** `lsx-design/meta/{pattern-name}`

**Purpose:** Metadata and quick facts displays

**Patterns:**
- `quick-facts` - Key-value pairs grid
- `project-meta` - Project metadata
- `post-meta` - Post metadata (author, date, category)
- `specs-table` - Technical specifications

**Characteristics:**
- Label + value pairs
- Grid or table layout
- Scannable
- Compact

---

### 8. Related (Related Content Stacks)

**Slug:** `lsx-design/related/{pattern-name}`

**Purpose:** Related/recommended content sections

**Patterns:**
- `related-posts` - Related blog posts
- `related-projects` - Related portfolio projects
- `related-services` - Related services
- `recommended-reading` - Recommended articles

**Characteristics:**
- 2-4 items typically
- Horizontal scroll on mobile
- Cards or list layout
- "View all" link

---

### 9. CTA (Call-to-Action Sections)

**Slug:** `lsx-design/cta/{pattern-name}`

**Purpose:** Single primary call-to-action sections

**Patterns:**
- `cta-section` - Standard CTA with heading + button
- `cta-newsletter` - Newsletter signup CTA
- `cta-contact` - Contact us CTA
- `cta-inline` - Inline CTA within content

**Characteristics:**
- Single primary action
- Optional secondary action
- High contrast
- Prominent placement

**Rule:** Only ONE primary CTA per section

---

### 10. State (Empty States, Error Messages)

**Slug:** `lsx-design/state/{pattern-name}`

**Purpose:** UI states for empty/error scenarios

**Patterns:**
- `empty-search` - No search results
- `empty-archive` - No posts in archive
- `error-404` - Page not found
- `loading-state` - Loading indicator
- `success-message` - Success confirmation

**Characteristics:**
- Clear messaging
- Helpful next action
- Icon or illustration
- Positive tone

---

## Pattern Registration

### WordPress Pattern Header

```php
<?php
/**
 * Title: Hero Home
 * Slug: lsx-design/hero/hero-home
 * Categories: hero
 * Block Types: core/group
 * Description: Homepage hero section with large title and CTA
 */
?>

<!-- wp:group {"className":"hero-home"} -->
<div class="wp-block-group hero-home">
  <!-- Pattern blocks -->
</div>
<!-- /wp:group -->
```

### Pattern Properties

| Property | Required | Description |
|----------|----------|-------------|
| **Title** | ✅ Yes | Human-readable name |
| **Slug** | ✅ Yes | Unique identifier (lsx-design/{category}/{name}) |
| **Categories** | ✅ Yes | Pattern category |
| **Block Types** | ❌ No | Compatible block types |
| **Description** | 🟡 Recommended | Brief description |
| **Keywords** | ❌ No | Search keywords |

---

## Pattern Checklist

**Before creating a new pattern:**
- [ ] Pattern is reusable (used on 2+ templates)
- [ ] Pattern has clear category
- [ ] Slug follows naming convention
- [ ] Pattern uses ONLY CSS variables
- [ ] Pattern uses WordPress utility classes
- [ ] Pattern is keyboard accessible
- [ ] Pattern has responsive layout
- [ ] Pattern documented in catalog

**Before registering pattern:**
- [ ] Pattern tested in block editor
- [ ] Pattern composable with other patterns
- [ ] Pattern has registration header
- [ ] Pattern has proper categories
- [ ] Pattern has description

---

## Pattern Composition Rules

### Rule 1: Pages from Patterns

```tsx
// ✅ Correct: Page composed from patterns
<HomePageTemplate>
  <HeroHome />           {/* lsx-design/hero/hero-home */}
  <StatsGrid />          {/* lsx-design/content/stats-grid */}
  <ServicesPreview />    {/* lsx-design/listing/service-grid */}
  <TestimonialSection /> {/* lsx-design/content/testimonial-section */}
  <CTASection />         {/* lsx-design/cta/cta-section */}
</HomePageTemplate>
```

### Rule 2: No One-Off Sections

```tsx
// ❌ Wrong: Custom section just for this page
<HomePageTemplate>
  <HeroHome />
  <div className="unique-custom-section"> {/* Not a pattern! */}
    {/* One-off code */}
  </div>
  <CTASection />
</HomePageTemplate>
```

**Solution:** Extract to reusable pattern or use existing pattern

---

## Pattern Examples

### Example 1: Hero Pattern

**Slug:** `lsx-design/hero/hero-home`

**Component:** `/src/app/components/patterns/HeroHome.tsx`

**CSS:** `/src/styles/patterns/hero-home.css`

**Usage:**
```tsx
<HeroHome 
  title="Build Better Websites"
  subtitle="Expert WordPress development"
  primaryCTA={{ text: "Get Started", href: "/contact" }}
  secondaryCTA={{ text: "View Work", href: "/portfolio" }}
/>
```

---

### Example 2: Listing Pattern

**Slug:** `lsx-design/listing/post-grid`

**Component:** `/src/app/components/patterns/PostGrid.tsx`

**CSS:** `/src/styles/patterns/post-grid.css`

**Usage:**
```tsx
<PostGrid 
  posts={blogPosts}
  columns={3}
  showExcerpt={true}
  showCategory={true}
/>
```

---

### Example 3: CTA Pattern

**Slug:** `lsx-design/cta/cta-section`

**Component:** `/src/app/components/patterns/CTASection.tsx`

**CSS:** `/src/styles/patterns/cta-section.css`

**Usage:**
```tsx
<CTASection 
  heading="Ready to Start Your Project?"
  description="Let's build something amazing together"
  primaryCTA={{ text: "Contact Us", href: "/contact" }}
  theme="dark"
/>
```

---

## Pattern-Specific Guidelines

### FAQ Sections

**Important:** Questions MUST use `--text-lg`, NOT `--text-h4`

**Correct:**
```tsx
<FAQSection 
  faqs={faqs}
  questionStyle={{ fontSize: 'var(--text-lg)' }} // ✅ Correct
/>
```

**Incorrect:**
```tsx
<FAQSection 
  faqs={faqs}
  questionStyle={{ fontSize: 'var(--text-h4)' }} // ❌ Wrong
/>
```

**See:** [FAQSection.md](./FAQSection.md) for complete guidelines

---

## Complete Pattern List

**Total Patterns:** 50+

### By Category

| Category | Count | Examples |
|----------|-------|----------|
| **Layout** | 3 | site-header, site-footer, mobile-menu |
| **Hero** | 6 | hero-home, hero-page, hero-service |
| **Header** | 4 | archive-header, listing-header, page-header |
| **Nav** | 5 | breadcrumbs, pagination, category-filters |
| **Listing** | 5 | post-grid, portfolio-grid, team-grid |
| **Content** | 12 | stats-grid, feature-list, faq-section |
| **Meta** | 4 | quick-facts, project-meta, post-meta |
| **Related** | 4 | related-posts, related-projects |
| **CTA** | 4 | cta-section, cta-newsletter, cta-contact |
| **State** | 5 | empty-search, error-404, loading-state |

**See:** [overview-patterns.md](./overview-patterns.md) for complete pattern documentation

---

## Related Guidelines

**See Also:**
- [overview-patterns.md](./overview-patterns.md) - Pattern system overview
- [FAQSection.md](./FAQSection.md) - FAQ pattern specifics
- [wordpress-mapping.md](../wordpress-mapping.md) - WordPress pattern registration
- [templates/page-archetypes.md](../templates/page-archetypes.md) - How patterns compose pages

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Category:** Patterns  
**Total Categories:** 10  
**Slug Format:** `lsx-design/{category}/{pattern-name}`  
**Last Updated:** March 11, 2026
