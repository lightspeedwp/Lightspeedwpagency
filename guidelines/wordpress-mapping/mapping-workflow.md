# WordPress Theme Mapping — Workflow & Archetypes

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [wordpress-mapping.md](../wordpress-mapping.md)  

---

## Implementation Workflow

### Step 1: Export Design Tokens

**From:** `/src/styles/*.css`  
**To:** `theme.json`

**Process:**
1. Extract CSS variables from theme-base.css
2. Convert to theme.json preset format
3. Map semantic colors from theme-light.css
4. Create dark.json variation from theme-dark.css

---

### Step 2: Convert Templates

**From:** `/src/app/templates/*.tsx`  
**To:** `templates/*.html`

**Process:**
1. Map React component to WordPress block markup
2. Replace components with block patterns
3. Add WordPress template comments
4. Test in block editor

**Example:**
```tsx
// React (FrontPageTemplate.tsx)
<FrontPageTemplate>
  <HeroHome />
  <StatsGrid />
  <CTASection />
</FrontPageTemplate>
```

```html
<!-- WordPress (front-page.html) -->
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:pattern {"slug":"lsx-design/hero/hero-home"} /-->
<!-- wp:pattern {"slug":"lsx-design/content/stats-grid"} /-->
<!-- wp:pattern {"slug":"lsx-design/cta/cta-section"} /-->

<!-- wp:template-part {"slug":"footer"} /-->
```

---

### Step 3: Register Patterns

**From:** `/src/app/components/patterns/*.tsx`  
**To:** `patterns/*.php`

**Process:**
1. Convert JSX to WordPress block markup
2. Add pattern registration header
3. Define categories and block types
4. Test in pattern inserter

**Template:**
```php
<?php
/**
 * Title: [Pattern Name]
 * Slug: lsx-design/[category]/[pattern-name]
 * Categories: [category]
 * Block Types: core/group
 */
?>

<!-- wp:group {"className":"[pattern-class]"} -->
  <!-- Pattern blocks here -->
<!-- /wp:group -->
```

---

### Step 4: Create Template Parts

**From:** `/src/app/components/parts/*.tsx`  
**To:** `parts/*.html`

**Process:**
1. Convert header/footer components
2. Add WordPress block markup
3. Register in theme.json
4. Test in template editor

---

## Page Archetypes

Every WordPress template must follow one of these fixed archetypes. **No hybrids.**

### 1. Content Hub (Archive)

**Use For:** Blog index, portfolio archive, service listings

**Section Order:**
1. Breadcrumbs (optional)
2. Archive Header
3. Filters (optional)
4. Card Grid
5. Pagination
6. CTA (optional)

**WordPress Template:** `archive.html`, `index.html`  
**Prototype Example:** `ArchiveTemplate.tsx`, `BlogIndexTemplate.tsx`

---

### 2. Taxonomy Archive

**Use For:** Category, tag, author archives

**Section Order:**
1. Breadcrumbs (optional)
2. Archive Header
3. Term Navigation
4. Card Grid
5. Pagination
6. CTA (optional)

**WordPress Template:** `category.html`, `tag.html`, `author.html`  
**Prototype Example:** `TaxonomyArchiveTemplate.tsx`

---

### 3. Single Detail

**Use For:** Blog post, portfolio project, service page

**Section Order:**
1. Hero
2. Editorial Content
3. Meta/Quick Facts
4. Supporting Sections
5. Related Content
6. CTA

**WordPress Template:** `single.html`, `page.html`  
**Prototype Example:** `SingleTemplate.tsx`, `ServiceTemplate.tsx`

---

### 4. Editorial Listing (Blog Index)

**Use For:** Blog, news, insights pages

**Section Order:**
1. Breadcrumbs (optional)
2. Listing Header
3. Results/Sorting
4. Category Filters
5. Post Grid
6. Pagination

**WordPress Template:** `index.html`, `home.html`  
**Prototype Example:** `BlogIndexTemplate.tsx`

---

### 5. Utility Page

**Use For:** 404, contact, search results

**Section Order:**
1. Page Header
2. Editorial Content
3. Utility Block (Search/FAQ/Contact)
4. CTA (optional)

**WordPress Template:** `404.html`, `search.html`, `page-contact.html`  
**Prototype Example:** `NotFoundTemplate.tsx`, `ContactPageTemplate.tsx`

---

**Rule:** If a section would be empty, omit it or show an explicit empty state — never leave blank space.

**See:** [page-archetypes.md](../templates/page-archetypes.md) for detailed archetype specifications

---

## Related Guidelines

- [pattern-catalog.md](../patterns/pattern-catalog.md) — Complete pattern list
- [page-archetypes.md](../templates/page-archetypes.md) — Detailed archetype specs
- [overview-blocks.md](../blocks/overview-blocks.md) — WordPress blocks system
- [css-variables-overview.md](../design-tokens/css-variables-overview.md) — Token system

---

| Version | Date | Changes |
|---------|------|---------|
| 1.2.0 | March 15, 2026 | Split into 2 sub-files |
| 1.1.0 | March 11, 2026 | Initial version |

---

**See also:** [mapping-artefacts.md](./mapping-artefacts.md)
