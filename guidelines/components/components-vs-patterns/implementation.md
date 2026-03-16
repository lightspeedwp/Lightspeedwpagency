# Components vs Patterns — Implementation & Examples

**Category:** Architecture  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [components-vs-patterns.md](../components-vs-patterns.md)  

---

## WordPress Mapping Rules

### Rule 1: Patterns Are Editor-Placeable

**If it's a pattern, editors must be able to insert it via pattern inserter.**

```tsx
// Correct: Pattern is reusable
<HeroHome /> 
// Editor can insert via: Patterns > Hero > Hero Home

// Wrong: One-off custom section
<div className="custom-home-section">
  {/* Not a pattern! */}
</div>
```

### Rule 2: Template Parts Are Global

**If it's a template part, it appears on multiple pages.**

```tsx
// Correct: Global header
<SiteHeader />
// Appears on every page

// Wrong: Page-specific header
<HomePageHeader />
// Only on homepage - should be a pattern instead
```

### Rule 3: UI Components Are Enhancements

**If it's a UI component, it enhances but isn't required.**

```tsx
// Correct: Enhancement
<ScrollBackToTop />
// Works without JavaScript, enhances with it

// Wrong: Required for functionality
<RequiredJavaScriptNavigation />
// Breaks without JavaScript
```

---

## Examples

### Example 1: Building a Service Page

**Composition:**
```tsx
<ServiceTemplate>
  {/* Template Part */}
  <SiteHeader />
  
  <main>
    {/* Patterns */}
    <HeroService />
    <FeatureList />
    <PricingTable />
    <FAQSection />
    <CTASection />
  </main>
  
  {/* Template Part */}
  <SiteFooter />
  
  {/* UI Utilities */}
  <ScrollBackToTop />
  <ScrollDownArrow />
</ServiceTemplate>
```

**WordPress Equivalent:**
```html
<!-- templates/page-service.html -->

<!-- wp:template-part {"slug":"header"} /-->

<main>
  <!-- wp:pattern {"slug":"lsx-design/hero/hero-service"} /-->
  <!-- wp:pattern {"slug":"lsx-design/content/feature-list"} /-->
  <!-- wp:pattern {"slug":"lsx-design/content/pricing-table"} /-->
  <!-- wp:pattern {"slug":"lsx-design/content/faq-section"} /-->
  <!-- wp:pattern {"slug":"lsx-design/cta/cta-section"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

---

### Example 2: When to Create a Pattern

**Scenario:** You need a statistics grid that shows key metrics.

**Decision Process:**

- **Will it be used on multiple pages?** Yes (homepage, about, services) — Create as pattern
- **Do editors need to customize it?** Yes (different stats per page) — Make editor-friendly
- **Can it be composed from core blocks?** Yes (group + columns + heading/paragraph) — Use core blocks

**Result:** Create `StatsGrid.tsx` pattern in `/src/app/components/patterns/`

---

### Example 3: When to Create a UI Component

**Scenario:** You want a "Back to Top" button.

**Decision Process:**

- **Do editors need to place it?** No (always in same position) — Not a pattern
- **Is it global chrome?** No (behavioral enhancement) — Not a template part
- **Is it a utility/enhancement?** Yes (progressive enhancement) — UI component

**Result:** Create `ScrollBackToTop.tsx` in `/src/app/components/ui/`

---

## Anti-Patterns

### Anti-Pattern 1: One-Off Patterns

```tsx
// Bad: Pattern only used once
<UniqueHomeStatsSection />

// Good: Reusable pattern
<StatsGrid stats={homeStats} />
```

### Anti-Pattern 2: Page-Specific Template Parts

```tsx
// Bad: Template part for single page
<HomePageHeader />
<AboutPageHeader />

// Good: Reusable template part OR pattern
<SiteHeader />
// OR
<HeroHome />  {/* Pattern */}
<HeroAbout /> {/* Pattern */}
```

### Anti-Pattern 3: Required JavaScript UI

```tsx
// Bad: Breaks without JavaScript
<JavaScriptRequiredMenu />

// Good: Progressive enhancement
<SiteHeader /> {/* Works without JS */}
<MobileMenuToggle /> {/* Enhances with JS */}
```

---

## Checklist

**Before creating a component, ask:**

- [ ] Do editors need to insert this? — Pattern
- [ ] Does it appear on every page? — Template Part
- [ ] Is it behavioral/enhancement? — UI Component
- [ ] Is it used in multiple patterns? — Common Component
- [ ] Does it compose patterns? — Template

**After creating:**

- [ ] Component has clear WordPress mapping
- [ ] Component follows naming convention
- [ ] Component documented
- [ ] Component uses design system tokens
- [ ] Component accessible

---

## Related Guidelines

- [non-block-components.md](../non-block-components.md) — UI utilities list
- [pattern-catalog.md](../../patterns/pattern-catalog.md) — Pattern catalogue
- [wordpress-mapping.md](../../wordpress-mapping.md) — WordPress FSE mapping

---

| Version | Date | Changes |
|---------|------|---------|
| 1.1.0 | March 15, 2026 | Split into 2 sub-files |
| 1.0.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**See also:** [architecture.md](./architecture.md)
