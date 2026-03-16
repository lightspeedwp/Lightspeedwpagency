# Page Archetypes — Rules & Composition

**Category:** Templates  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [page-archetypes.md](../page-archetypes.md)  

---

## Rule 1: No Hybrids

**Incorrect:**
```tsx
// Mixing Content Hub + Single Detail
<Template>
  <ArchiveHeader /> {/* Content Hub */}
  <Hero /> {/* Single Detail */}
  <CardGrid /> {/* Content Hub */}
  <EditorialContent /> {/* Single Detail */}
</Template>
```

**Correct:**
```tsx
// Choose ONE archetype
<ContentHubTemplate>
  <ArchiveHeader />
  <CardGrid />
  <Pagination />
</ContentHubTemplate>
```

---

## Rule 2: Empty Sections

**If a section would be empty, omit it or show an explicit empty state — never leave blank space.**

**Incorrect:**
```tsx
// Showing empty section
<ContentHubTemplate>
  <ArchiveHeader />
  <CategoryFilters categories={[]} /> {/* Empty! */}
  <CardGrid posts={posts} />
</ContentHubTemplate>
```

**Correct:**
```tsx
// Omit empty section
<ContentHubTemplate>
  <ArchiveHeader />
  {categories.length > 0 && <CategoryFilters categories={categories} />}
  <CardGrid posts={posts} />
</ContentHubTemplate>
```

**OR with explicit empty state:**
```tsx
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

## Rule 3: Section Order

**Follow the prescribed section order for each archetype.**

**Incorrect:**
```tsx
// Wrong section order
<SingleTemplate>
  <CTASection /> {/* Should be last! */}
  <Hero />
  <EditorialContent />
</SingleTemplate>
```

**Correct:**
```tsx
// Correct section order
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
  <ArchiveHeader />     {/* lsx-design/header/archive-header */}
  <CategoryFilters />   {/* lsx-design/nav/category-filters */}
  <PostGrid />          {/* lsx-design/listing/post-grid */}
  <Pagination />        {/* lsx-design/nav/pagination */}
  <CTASection />        {/* lsx-design/cta/cta-section */}
</ContentHubTemplate>
```

**See:** [pattern-catalog.md](../../patterns/pattern-catalog.md)

---

## Related Guidelines

- [pattern-catalog.md](../../patterns/pattern-catalog.md) — Pattern catalogue
- [wordpress-mapping.md](../../wordpress-mapping.md) — WordPress template mapping
- [overview-templates.md](../overview-templates.md) — Template system overview

---

| Version | Date | Changes |
|---------|------|---------|
| 1.1.0 | March 15, 2026 | Split into 2 sub-files |
| 1.0.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**See also:** [archetype-definitions.md](./archetype-definitions.md)
