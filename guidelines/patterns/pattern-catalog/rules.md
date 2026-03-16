# Pattern Catalog — Rules, Registration & Examples

**Category:** Patterns  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [pattern-catalog.md](../pattern-catalog.md)  

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
| **Title** | Yes | Human-readable name |
| **Slug** | Yes | Unique identifier (lsx-design/{category}/{name}) |
| **Categories** | Yes | Pattern category |
| **Block Types** | No | Compatible block types |
| **Description** | Recommended | Brief description |
| **Keywords** | No | Search keywords |

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
// Correct: Page composed from patterns
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
// Wrong: Custom section just for this page
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

```tsx
// Correct
<FAQSection 
  faqs={faqs}
  questionStyle={{ fontSize: 'var(--text-lg)' }}
/>

// Incorrect
<FAQSection 
  faqs={faqs}
  questionStyle={{ fontSize: 'var(--text-h4)' }}
/>
```

**See:** [FAQSection.md](../FAQSection.md) for complete guidelines

---

## Related Guidelines

- [overview-patterns.md](../overview-patterns.md) — Pattern system overview
- [FAQSection.md](../FAQSection.md) — FAQ pattern specifics
- [wordpress-mapping.md](../../wordpress-mapping.md) — WordPress pattern registration
- [page-archetypes.md](../../templates/page-archetypes.md) — How patterns compose pages

---

| Version | Date | Changes |
|---------|------|---------|
| 1.1.0 | March 15, 2026 | Split into 2 sub-files |
| 1.0.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**See also:** [categories.md](./categories.md)
