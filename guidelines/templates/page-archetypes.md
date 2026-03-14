# Page Archetypes

**Category:** Templates  
**Last Updated:** March 11, 2026  
**Status:** Active

---

## Purpose

**What:** Defines the fixed page archetypes for the LSX Design prototype

**Why:** Ensures consistent, WordPress-compatible page structures

**Who:** Developers creating page templates

---

## Archetype Philosophy

**Rule:** Every page must be one of these archetypes. **No hybrids.**

**Why Fixed Archetypes:**
- Predictable structure for users
- Consistent editor experience
- Maps cleanly to WordPress templates
- Reusable across projects
- Easy to maintain

---

## The 5 Page Archetypes

### 1. Content Hub (Archive)

**Use For:**
- Blog index
- Portfolio archive
- Service listings
- Resource libraries
- Case study archives

**Section Order:**
1. Breadcrumbs (optional)
2. Archive Header
3. Filters (optional)
4. Card Grid
5. Pagination
6. CTA (optional)

**WordPress Templates:**
- `archive.html`
- `index.html`
- `post-type-archive.html`

**Prototype Examples:**
- `ArchiveTemplate.tsx`
- `BlogIndexTemplate.tsx`
- `PortfolioArchiveTemplate.tsx`

**Example Structure:**
```tsx
<ArchiveTemplate>
  <Breadcrumbs /> {/* Optional */}
  <ArchiveHeader 
    title="Blog Posts"
    description="Latest insights and updates"
  />
  <CategoryFilters /> {/* Optional */}
  <PostGrid posts={posts} />
  <Pagination currentPage={1} totalPages={10} />
  <CTASection /> {/* Optional */}
</ArchiveTemplate>
```

---

### 2. Taxonomy Archive

**Use For:**
- Category archives
- Tag archives
- Author archives
- Custom taxonomy pages

**Section Order:**
1. Breadcrumbs (optional)
2. Archive Header
3. Term Navigation
4. Card Grid
5. Pagination
6. CTA (optional)

**WordPress Templates:**
- `category.html`
- `tag.html`
- `author.html`
- `taxonomy.html`

**Prototype Examples:**
- `TaxonomyArchiveTemplate.tsx`
- `CategoryTemplate.tsx`

**Example Structure:**
```tsx
<TaxonomyArchiveTemplate>
  <Breadcrumbs />
  <ArchiveHeader 
    title="Category: WordPress"
    description="All posts about WordPress"
    termMeta={{
      count: 24,
      parent: "Development"
    }}
  />
  <TermNavigation terms={relatedTerms} />
  <PostGrid posts={categoryPosts} />
  <Pagination currentPage={1} totalPages={5} />
  <CTASection />
</TaxonomyArchiveTemplate>
```

**Difference from Content Hub:**
- Includes Term Navigation (related categories/tags)
- Shows term metadata (post count, parent term)
- Breadcrumbs more important (shows taxonomy hierarchy)

---

### 3. Single Detail

**Use For:**
- Blog posts
- Portfolio projects
- Service pages
- Case studies
- Team member profiles

**Section Order:**
1. Hero
2. Editorial Content
3. Meta/Quick Facts
4. Supporting Sections
5. Related Content
6. CTA

**WordPress Templates:**
- `single.html`
- `single-post.html`
- `single-{post-type}.html`
- `page.html`

**Prototype Examples:**
- `SingleTemplate.tsx`
- `ServiceTemplate.tsx`
- `PortfolioSingleTemplate.tsx`

**Example Structure:**
```tsx
<SingleTemplate>
  <Hero 
    title="Post Title"
    subtitle="Post excerpt or intro"
    meta={{
      author: "John Doe",
      date: "March 11, 2026",
      category: "WordPress"
    }}
  />
  <EditorialContent>
    {/* Post content */}
  </EditorialContent>
  <QuickFacts facts={postMeta} />
  <GallerySection images={images} />
  <TestimonialSection />
  <RelatedPosts posts={related} />
  <CTASection />
</SingleTemplate>
```

---

### 4. Editorial Listing (Blog Index)

**Use For:**
- Main blog page
- News index
- Insights hub
- Article listings

**Section Order:**
1. Breadcrumbs (optional)
2. Listing Header
3. Results/Sorting
4. Category Filters
5. Post Grid
6. Pagination

**WordPress Templates:**
- `index.html`
- `home.html`

**Prototype Examples:**
- `BlogIndexTemplate.tsx`

**Example Structure:**
```tsx
<BlogIndexTemplate>
  <Breadcrumbs />
  <ListingHeader 
    title="Insights & Updates"
    description="Expert insights on WordPress and web development"
  />
  <div className="listing-controls">
    <ResultsCount total={124} />
    <SortingDropdown />
  </div>
  <CategoryFilters categories={categories} />
  <PostGrid posts={posts} layout="masonry" />
  <Pagination currentPage={1} totalPages={13} />
</BlogIndexTemplate>
```

**Difference from Content Hub:**
- Includes sorting/filtering UI
- Shows results count
- More interactive controls
- Often uses different card layouts

---

### 5. Utility Page

**Use For:**
- 404 error pages
- Contact pages
- Search results
- FAQ pages
- Confirmation pages

**Section Order:**
1. Page Header
2. Editorial Content
3. Utility Block (Search/FAQ/Contact)
4. CTA (optional)

**WordPress Templates:**
- `404.html`
- `search.html`
- `page-{slug}.html`

**Prototype Examples:**
- `NotFoundTemplate.tsx`
- `ContactPageTemplate.tsx`
- `SearchResultsTemplate.tsx`

**Example Structure:**
```tsx
<UtilityTemplate>
  <PageHeader 
    title="Page Not Found"
    description="The page you're looking for doesn't exist"
  />
  <EditorialContent>
    <p>We couldn't find the page you requested.</p>
  </EditorialContent>
  <SearchBlock />
  <CTASection 
    title="Need Help?"
    primaryCTA={{ text: "Contact Us", href: "/contact" }}
  />
</UtilityTemplate>
```

---

## Archetype Selection Guide

### Decision Tree

```
Does the page show multiple items?
├─ YES: Is it a specific term/category?
│   ├─ YES → Taxonomy Archive
│   └─ NO → Content Hub or Editorial Listing
│       └─ Does it need sorting/filtering UI?
│           ├─ YES → Editorial Listing
│           └─ NO → Content Hub
│
└─ NO: Does it show detailed content?
    ├─ YES → Single Detail
    └─ NO → Utility Page
```

---

## Archetype Rules

### Rule 1: No Hybrids

**Incorrect:**
```tsx
// ❌ Mixing Content Hub + Single Detail
<Template>
  <ArchiveHeader /> {/* Content Hub */}
  <Hero /> {/* Single Detail */}
  <CardGrid /> {/* Content Hub */}
  <EditorialContent /> {/* Single Detail */}
</Template>
```

**Correct:**
```tsx
// ✅ Choose ONE archetype
<ContentHubTemplate>
  <ArchiveHeader />
  <CardGrid />
  <Pagination />
</ContentHubTemplate>
```

---

### Rule 2: Empty Sections

**If a section would be empty, omit it or show an explicit empty state—never leave blank space.**

**Incorrect:**
```tsx
// ❌ Showing empty section
<ContentHubTemplate>
  <ArchiveHeader />
  <CategoryFilters categories={[]} /> {/* Empty! */}
  <CardGrid posts={posts} />
</ContentHubTemplate>
```

**Correct:**
```tsx
// ✅ Omit empty section
<ContentHubTemplate>
  <ArchiveHeader />
  {categories.length > 0 && <CategoryFilters categories={categories} />}
  <CardGrid posts={posts} />
</ContentHubTemplate>
```

**OR with explicit empty state:**
```tsx
// ✅ Explicit empty state
<ContentHubTemplate>
  <ArchiveHeader />
  {categories.length > 0 ? (
    <CategoryFilters categories={categories} />
  ) : (
    <EmptyState message="No categories available" />
  )}
  <CardGrid posts={posts} />
</ContentHubTemplate>
```

---

### Rule 3: Section Order

**Follow the prescribed section order for each archetype.**

**Incorrect:**
```tsx
// ❌ Wrong section order
<SingleTemplate>
  <CTASection /> {/* Should be last! */}
  <Hero />
  <EditorialContent />
</SingleTemplate>
```

**Correct:**
```tsx
// ✅ Correct section order
<SingleTemplate>
  <Hero />
  <EditorialContent />
  <QuickFacts />
  <RelatedContent />
  <CTASection /> {/* Last */}
</SingleTemplate>
```

---

## Pattern Composition

Each section in an archetype is a registered pattern:

```tsx
// Archetype = Template
<ContentHubTemplate>
  
  {/* Each section = Pattern */}
  <ArchiveHeader />     {/* Pattern: lsx-design/header/archive-header */}
  <CategoryFilters />   {/* Pattern: lsx-design/nav/category-filters */}
  <PostGrid />          {/* Pattern: lsx-design/listing/post-grid */}
  <Pagination />        {/* Pattern: lsx-design/nav/pagination */}
  <CTASection />        {/* Pattern: lsx-design/cta/cta-section */}
  
</ContentHubTemplate>
```

**See:** [pattern-catalog.md](../patterns/pattern-catalog.md)

---

## Related Guidelines

**See Also:**
- [pattern-catalog.md](../patterns/pattern-catalog.md) - Pattern catalogue
- [wordpress-mapping.md](../wordpress-mapping.md) - WordPress template mapping
- [overview-templates.md](./overview-templates.md) - Template system overview

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Category:** Templates  
**Archetypes:** 5 fixed types  
**Last Updated:** March 11, 2026
