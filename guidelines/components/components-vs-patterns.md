# Components vs Patterns — Philosophy

**Category:** Architecture  
**Last Updated:** March 11, 2026  
**Status:** Active

---

## Purpose

**What:** Defines when to use components vs patterns and how they map to WordPress

**Why:** Ensure clear separation between React components and WordPress blocks/patterns

**Who:** All developers building UI elements

---

## Core Philosophy

**WordPress-First Thinking:**

The prototype must map cleanly to WordPress FSE (Full Site Editing). Every UI element should have a clear WordPress equivalent.

---

## Decision Tree

### Question 1: Do editors need to place it?

**YES** → It's a **Pattern**

**Examples:**
- Hero sections
- Card grids
- CTA sections
- Testimonial blocks

**WordPress Mapping:** `patterns/*.php` (Block Pattern)

**Prototype Location:** `/src/app/components/patterns/`

---

### Question 2: Is it part of global chrome?

**YES** → It's a **Template Part**

**Examples:**
- Site header
- Site footer
- Breadcrumbs
- Mobile menu

**WordPress Mapping:** `parts/*.html` (Template Part)

**Prototype Location:** `/src/app/components/parts/`

---

### Question 3: Is it behavioral/utility-only?

**YES** → It's **Theme Code UI** (not a block)

**Examples:**
- Back to top button
- Style switcher
- Scroll indicator
- Focus management

**WordPress Mapping:** `assets/js/*.js` (Theme enhancement script)

**Prototype Location:** `/src/app/components/ui/`

**See:** [non-block-components.md](./non-block-components.md) for complete list

---

## React Component Architecture

### Directory Structure

```txt
src/app/components/
├── common/          # Token enforcement wrappers
│   ├── Container.tsx
│   ├── Section.tsx
│   ├── Heading.tsx
│   └── Button.tsx
│
├── parts/           # Template parts (global chrome)
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   ├── Breadcrumbs.tsx
│   └── MobileMenu.tsx
│
├── patterns/        # Block patterns (editor-placeable)
│   ├── HeroHome.tsx
│   ├── StatsGrid.tsx
│   ├── PostGrid.tsx
│   ├── CTASection.tsx
│   └── FAQSection.tsx
│
├── templates/       # Page templates
│   ├── FrontPageTemplate.tsx
│   ├── ArchiveTemplate.tsx
│   ├── SingleTemplate.tsx
│   └── NotFoundTemplate.tsx
│
└── ui/              # Non-WordPress utilities
    ├── ScrollBackToTop.tsx
    ├── ScrollDownArrow.tsx
    ├── StyleSwitcher.tsx
    └── LayoutSwitcher.tsx
```

---

## Component Categories

### 1. Common Components (Token Enforcement)

**Purpose:** Enforce design system tokens and provide consistent wrappers

**Examples:**
- `Container` - Max-width container with fluid padding
- `Section` - Section wrapper with spacing
- `Heading` - Heading with design system typography
- `Button` - Button with variants and states

**Characteristics:**
- Pure presentational
- No business logic
- Design system enforcement
- Reusable across patterns

**WordPress Mapping:** CSS classes + utilities

**Usage:**
```tsx
<Container>
  <Section>
    <Heading level={1}>Page Title</Heading>
    <Button variant="primary">Click Me</Button>
  </Section>
</Container>
```

---

### 2. Template Parts (Global Chrome)

**Purpose:** Reusable template parts that appear across multiple pages

**Examples:**
- Site header
- Site footer
- Breadcrumbs
- Sidebar (if used)

**Characteristics:**
- Appear on multiple pages
- Global navigation/branding
- Consistent across site
- Editor can customize

**WordPress Mapping:** `parts/*.html`

**Usage:**
```tsx
<Template>
  <SiteHeader />
  <main>
    {/* Page content */}
  </main>
  <SiteFooter />
</Template>
```

---

### 3. Patterns (Block Patterns)

**Purpose:** Reusable content sections that editors can insert

**Examples:**
- Hero sections
- Feature grids
- Testimonial blocks
- CTA sections
- FAQ sections

**Characteristics:**
- Editor-placeable
- Reusable across pages
- Composed from core blocks
- Customizable by editors

**WordPress Mapping:** `patterns/*.php`

**Usage:**
```tsx
<PageTemplate>
  <HeroHome />         {/* Pattern */}
  <StatsGrid />        {/* Pattern */}
  <CTASection />       {/* Pattern */}
</PageTemplate>
```

**See:** [pattern-catalog.md](../patterns/pattern-catalog.md)

---

### 4. Templates (Page Templates)

**Purpose:** Define overall page structure and archetype

**Examples:**
- Front page
- Archive
- Single post/project
- 404 error

**Characteristics:**
- One per page type
- Compose patterns
- Define archetype
- Map to WordPress templates

**WordPress Mapping:** `templates/*.html`

**Usage:**
```tsx
<FrontPageTemplate>
  {/* Composed from patterns */}
</FrontPageTemplate>
```

**See:** [templates/page-archetypes.md](../templates/page-archetypes.md)

---

### 5. UI Components (Non-Block Utilities)

**Purpose:** Behavioral/utility components that enhance UX

**Examples:**
- Back to top button
- Scroll indicator
- Style switcher
- Focus management
- Skip links

**Characteristics:**
- Not editor-placeable
- JavaScript-driven
- Progressive enhancement
- Outside block system

**WordPress Mapping:** `assets/js/*.js`

**Usage:**
```tsx
<Template>
  <SiteHeader />
  <main>{/* Content */}</main>
  <SiteFooter />
  
  {/* UI utilities */}
  <ScrollBackToTop />
  <StyleSwitcher />
</Template>
```

**See:** [non-block-components.md](./non-block-components.md)

---

## WordPress Mapping Rules

### Rule 1: Patterns Are Editor-Placeable

**If it's a pattern, editors must be able to insert it via pattern inserter.**

```tsx
// ✅ Correct: Pattern is reusable
<HeroHome /> 
// Editor can insert via: Patterns → Hero → Hero Home

// ❌ Wrong: One-off custom section
<div className="custom-home-section">
  {/* Not a pattern! */}
</div>
```

---

### Rule 2: Template Parts Are Global

**If it's a template part, it appears on multiple pages.**

```tsx
// ✅ Correct: Global header
<SiteHeader />
// Appears on every page

// ❌ Wrong: Page-specific header
<HomePageHeader />
// Only on homepage - should be a pattern instead
```

---

### Rule 3: UI Components Are Enhancements

**If it's a UI component, it enhances but isn't required.**

```tsx
// ✅ Correct: Enhancement
<ScrollBackToTop />
// Works without JavaScript, enhances with it

// ❌ Wrong: Required for functionality
<RequiredJavaScriptNavigation />
// Breaks without JavaScript
```

---

## Examples

### Example 1: Building a Service Page

**Composition:**
```tsx
// Template
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

<!-- Template Part -->
<!-- wp:template-part {"slug":"header"} /-->

<main>
  <!-- Patterns -->
  <!-- wp:pattern {"slug":"lsx-design/hero/hero-service"} /-->
  <!-- wp:pattern {"slug":"lsx-design/content/feature-list"} /-->
  <!-- wp:pattern {"slug":"lsx-design/content/pricing-table"} /-->
  <!-- wp:pattern {"slug":"lsx-design/content/faq-section"} /-->
  <!-- wp:pattern {"slug":"lsx-design/cta/cta-section"} /-->
</main>

<!-- Template Part -->
<!-- wp:template-part {"slug":"footer"} /-->

<!-- UI utilities loaded via theme scripts -->
```

---

### Example 2: When to Create a Pattern

**Scenario:** You need a statistics grid that shows key metrics.

**Decision Process:**

**Q:** Will it be used on multiple pages?
- **A:** Yes (homepage, about page, service pages)
- **Decision:** Create as pattern ✅

**Q:** Do editors need to customize it?
- **A:** Yes (different stats per page)
- **Decision:** Make it editor-friendly ✅

**Q:** Can it be composed from core blocks?
- **A:** Yes (group block + column blocks + heading/paragraph)
- **Decision:** Use core blocks ✅

**Result:** Create `StatsGrid.tsx` pattern in `/src/app/components/patterns/`

---

### Example 3: When to Create a UI Component

**Scenario:** You want a "Back to Top" button.

**Decision Process:**

**Q:** Do editors need to place it?
- **A:** No (always in same position)
- **Decision:** Not a pattern ✅

**Q:** Is it global chrome?
- **A:** No (behavioral enhancement)
- **Decision:** Not a template part ✅

**Q:** Is it a utility/enhancement?
- **A:** Yes (progressive enhancement)
- **Decision:** UI component ✅

**Result:** Create `ScrollBackToTop.tsx` in `/src/app/components/ui/`

---

## Anti-Patterns

### Anti-Pattern 1: One-Off Patterns

**Bad:**
```tsx
// ❌ Pattern only used once
<UniqueHomeStatsSection />
```

**Good:**
```tsx
// ✅ Reusable pattern
<StatsGrid stats={homeStats} />
```

---

### Anti-Pattern 2: Page-Specific Template Parts

**Bad:**
```tsx
// ❌ Template part for single page
<HomePageHeader />
<AboutPageHeader />
```

**Good:**
```tsx
// ✅ Reusable template part OR pattern
<SiteHeader />
// OR
<HeroHome />  {/* Pattern */}
<HeroAbout /> {/* Pattern */}
```

---

### Anti-Pattern 3: Required JavaScript UI

**Bad:**
```tsx
// ❌ Breaks without JavaScript
<JavaScriptRequiredMenu />
```

**Good:**
```tsx
// ✅ Progressive enhancement
<SiteHeader /> {/* Works without JS */}
<MobileMenuToggle /> {/* Enhances with JS */}
```

---

## Checklist

**Before creating a component, ask:**

- [ ] Do editors need to insert this? → Pattern
- [ ] Does it appear on every page? → Template Part
- [ ] Is it behavioral/enhancement? → UI Component
- [ ] Is it used in multiple patterns? → Common Component
- [ ] Does it compose patterns? → Template

**After creating:**

- [ ] Component has clear WordPress mapping
- [ ] Component follows naming convention
- [ ] Component documented
- [ ] Component uses design system tokens
- [ ] Component accessible

---

## Related Guidelines

**See Also:**
- [non-block-components.md](./non-block-components.md) - UI utilities list
- [pattern-catalog.md](../patterns/pattern-catalog.md) - Pattern catalogue
- [wordpress-mapping.md](../wordpress-mapping.md) - WordPress FSE mapping
- [overview-components.md](./overview-components.md) - Component system overview

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Category:** Architecture  
**Philosophy:** WordPress-First  
**Last Updated:** March 11, 2026
