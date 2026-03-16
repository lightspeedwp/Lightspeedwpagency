# Page Archetypes — The 5 Definitions

**Category:** Templates  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [page-archetypes.md](../page-archetypes.md)  

---

## Archetype Philosophy

**Rule:** Every page must be one of these archetypes. **No hybrids.**

**Why Fixed Archetypes:** Predictable structure for users, consistent editor experience, maps cleanly to WordPress templates, reusable across projects, easy to maintain

---

## 1. Content Hub (Archive)

**Use For:** Blog index, portfolio archive, service listings, resource libraries, case study archives

**Section Order:**
1. Breadcrumbs (optional)
2. Archive Header
3. Filters (optional)
4. Card Grid
5. Pagination
6. CTA (optional)

**WordPress Templates:** `archive.html`, `index.html`, `post-type-archive.html`

**Prototype:** `ArchiveTemplate.tsx`, `BlogIndexTemplate.tsx`, `PortfolioArchiveTemplate.tsx`

```tsx
<ArchiveTemplate>
  <Breadcrumbs />
  <ArchiveHeader title="Blog Posts" description="Latest insights and updates" />
  <CategoryFilters />
  <PostGrid posts={posts} />
  <Pagination currentPage={1} totalPages={10} />
  <CTASection />
</ArchiveTemplate>
```

---

## 2. Taxonomy Archive

**Use For:** Category archives, tag archives, author archives, custom taxonomy pages

**Section Order:**
1. Breadcrumbs (optional)
2. Archive Header
3. Term Navigation
4. Card Grid
5. Pagination
6. CTA (optional)

**WordPress Templates:** `category.html`, `tag.html`, `author.html`, `taxonomy.html`

**Prototype:** `TaxonomyArchiveTemplate.tsx`, `CategoryTemplate.tsx`

```tsx
<TaxonomyArchiveTemplate>
  <Breadcrumbs />
  <ArchiveHeader 
    title="Category: WordPress"
    description="All posts about WordPress"
    termMeta={{ count: 24, parent: "Development" }}
  />
  <TermNavigation terms={relatedTerms} />
  <PostGrid posts={categoryPosts} />
  <Pagination currentPage={1} totalPages={5} />
  <CTASection />
</TaxonomyArchiveTemplate>
```

**Difference from Content Hub:** Includes Term Navigation, shows term metadata, breadcrumbs more important (taxonomy hierarchy)

---

## 3. Single Detail

**Use For:** Blog posts, portfolio projects, service pages, case studies, team member profiles

**Section Order:**
1. Hero
2. Editorial Content
3. Meta/Quick Facts
4. Supporting Sections
5. Related Content
6. CTA

**WordPress Templates:** `single.html`, `single-post.html`, `single-{post-type}.html`, `page.html`

**Prototype:** `SingleTemplate.tsx`, `ServiceTemplate.tsx`, `PortfolioSingleTemplate.tsx`

```tsx
<SingleTemplate>
  <Hero 
    title="Post Title"
    subtitle="Post excerpt or intro"
    meta={{ author: "John Doe", date: "March 11, 2026", category: "WordPress" }}
  />
  <EditorialContent>{/* Post content */}</EditorialContent>
  <QuickFacts facts={postMeta} />
  <GallerySection images={images} />
  <TestimonialSection />
  <RelatedPosts posts={related} />
  <CTASection />
</SingleTemplate>
```

---

## 4. Editorial Listing (Blog Index)

**Use For:** Main blog page, news index, insights hub, article listings

**Section Order:**
1. Breadcrumbs (optional)
2. Listing Header
3. Results/Sorting
4. Category Filters
5. Post Grid
6. Pagination

**WordPress Templates:** `index.html`, `home.html`

**Prototype:** `BlogIndexTemplate.tsx`

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

**Difference from Content Hub:** Includes sorting/filtering UI, shows results count, more interactive controls

---

## 5. Utility Page

**Use For:** 404 error pages, contact pages, search results, FAQ pages, confirmation pages

**Section Order:**
1. Page Header
2. Editorial Content
3. Utility Block (Search/FAQ/Contact)
4. CTA (optional)

**WordPress Templates:** `404.html`, `search.html`, `page-{slug}.html`

**Prototype:** `NotFoundTemplate.tsx`, `ContactPageTemplate.tsx`, `SearchResultsTemplate.tsx`

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

**See also:** [archetype-rules.md](./archetype-rules.md)
