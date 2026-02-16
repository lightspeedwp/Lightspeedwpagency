# Templates Overview

This document explains the **template system** for LSX Design, which maps to WordPress **templates** (`templates/*.html`) that define complete page layouts.

---

## Template Philosophy

Templates are **complete page layouts** composed from template parts and block patterns. Every page on the site uses one of these templates.

**WordPress Mapping:**
```html
<!-- templates/front-page.html -->
<!-- wp:template-part {"slug":"header"} /-->
<!-- Pattern compositions -->
<!-- wp:template-part {"slug":"footer"} /-->
```

**Key Principle:** Templates are compositions, not designs. Build from approved patterns only.

---

## Template Hierarchy

LSX Design provides **7 core templates** matching WordPress template hierarchy:

| Template | File | WordPress Use | Description |
|----------|------|---------------|-------------|
| **Front Page** | `front-page.html` | Homepage | Static homepage |
| **Home/Index** | `index.html` | Blog index | Main blog listing |
| **Archive** | `archive.html` | Archives | Category/tag/date archives |
| **Single** | `single.html` | Posts | Individual post/page |
| **Search** | `search.html` | Search results | Search results page |
| **404** | `404.html` | Not found | Error page |
| **Page** | `page.html` | Pages | Standard page fallback |

---

## Page Archetypes (Fixed)

Every template follows one of **5 fixed archetypes**. No hybrids allowed.

### 1. Content Hub (Archive)

**Templates:** `archive.html`, `category.html`, `tag.html`  
**Pattern Order:**
```
Breadcrumbs → Archive Header → (Filters optional) → Card Grid → Pagination → (CTA optional)
```

**Usage:** Category archives, tag archives, date archives

**Example:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/nav/breadcrumbs"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/header/archive"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/nav/category-filters"} /-->
  
  <!-- wp:query -->
    <!-- wp:pattern {"slug":"lsx-design/listing/post-grid"} /-->
  <!-- /wp:query -->
  
  <!-- wp:pattern {"slug":"lsx-design/nav/pagination"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

---

### 2. Taxonomy Archive

**Templates:** `archive.html` (with term navigation)  
**Pattern Order:**
```
Breadcrumbs → Archive Header → Term Navigation → Card Grid → Pagination → (CTA optional)
```

**Usage:** Category/tag browsing with sub-category navigation

---

### 3. Single Detail

**Templates:** `single.html`, `page.html`  
**Pattern Order:**
```
Hero → Editorial Content → Meta/Quick Facts → Supporting Sections → Related Content → CTA
```

**Usage:** Blog posts, pages, custom post types

**Example:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/hero/single"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/content/editorial"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/meta/quick-facts"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/related/suggestions"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/cta/primary"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

---

### 4. Editorial Listing (Blog)

**Templates:** `index.html`, `home.html`  
**Pattern Order:**
```
Breadcrumbs → Listing Header → Results/Sorting → Category Filters → Post Grid → Pagination
```

**Usage:** Main blog index, latest news

**Example:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/nav/breadcrumbs"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/header/listing"} /-->
  
  <!-- Results & Sorting bar -->
  
  <!-- wp:pattern {"slug":"lsx-design/nav/category-filters"} /-->
  
  <!-- wp:query -->
    <!-- wp:pattern {"slug":"lsx-design/listing/post-grid"} /-->
  <!-- /wp:query -->
  
  <!-- wp:pattern {"slug":"lsx-design/nav/pagination"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

---

### 5. Utility Page

**Templates:** `404.html`, `search.html`, `page.html`  
**Pattern Order:**
```
Page Header → Editorial Content → Utility Block (Search/FAQ/Contact) → CTA (optional)
```

**Usage:** 404 error, search results, contact page

**Example (404):**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/state/404"} /-->
  
  <!-- Search widget -->
  
  <!-- wp:pattern {"slug":"lsx-design/related/suggestions"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

---

## Template Details

### 1. Front Page (`front-page.html`)

**Archetype:** Homepage (unique)  
**Purpose:** Static homepage with hero and feature sections

**Structure:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/hero/home"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/listing/card-grid"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/content/features"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/cta/primary"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

**React Component:** `<FrontPageTemplate />`

**Features:**
- Large hero section
- Featured content grid
- Feature highlights
- Primary CTA

---

### 2. Index/Home (`index.html`)

**Archetype:** Editorial Listing  
**Purpose:** Main blog/news listing page

**Structure:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/nav/breadcrumbs"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/header/listing"} /-->
  
  <!-- Results count & sorting -->
  
  <!-- wp:pattern {"slug":"lsx-design/nav/category-filters"} /-->
  
  <!-- wp:query -->
    <!-- wp:post-template -->
      <!-- Post cards -->
    <!-- /wp:post-template -->
  <!-- /wp:query -->
  
  <!-- wp:query-pagination /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

**React Component:** `<IndexTemplate />`

**Features:**
- Breadcrumb navigation
- Results count display
- Category filters
- 3-column post grid
- Pagination

---

### 3. Archive (`archive.html`)

**Archetype:** Content Hub  
**Purpose:** Category, tag, date, and custom taxonomy archives

**Variations:**
- `archive.html` — Default archive
- `category.html` — Category-specific
- `tag.html` — Tag-specific
- `date.html` — Date-specific

**Structure:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/nav/breadcrumbs"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/header/archive"} /-->
  
  <!-- Optional filters -->
  
  <!-- wp:query -->
    <!-- wp:post-template -->
      <!-- Archive cards -->
    <!-- /wp:post-template -->
  <!-- /wp:query -->
  
  <!-- wp:query-pagination /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

**React Component:** `<ArchiveTemplate />` or `<ArchiveWithFiltersTemplate />`

**Features:**
- Dynamic archive title/description
- Optional filter sidebar
- Responsive card grid
- Pagination
- Empty state handling

---

### 4. Single (`single.html`)

**Archetype:** Single Detail  
**Purpose:** Individual post or page display

**Variations:**
- `single.html` — Post detail
- `page.html` — Page detail
- `single-{post-type}.html` — Custom post type

**Structure:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/hero/single"} /-->
  
  <!-- wp:post-content /-->
  
  <!-- wp:pattern {"slug":"lsx-design/meta/post-meta"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/related/suggestions"} /-->
  
  <!-- wp:pattern {"slug":"lsx-design/cta/primary"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

**React Component:** `<SingleTemplate />`

**Features:**
- Post hero with featured image
- Full post content (reading width)
- Author/date/category metadata
- Related posts
- CTA for engagement

---

### 5. Search (`search.html`)

**Archetype:** Utility Page  
**Purpose:** Search results display

**Structure:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/nav/breadcrumbs"} /-->
  
  <!-- Search results header with term -->
  
  <!-- Results count & sorting -->
  
  <!-- Search again form -->
  
  <!-- wp:query {"query":{"postType":"post","search":true}} -->
    <!-- wp:post-template -->
      <!-- Search result cards -->
    <!-- /wp:post-template -->
  <!-- /wp:query -->
  
  <!-- wp:query-pagination /-->
  
  <!-- Empty state if no results -->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

**React Component:** `<SearchResultsTemplate />`

**Features:**
- Search term display
- Results count
- Search again form
- Results grid
- No results state
- Suggestions on empty

---

### 6. 404 (`404.html`)

**Archetype:** Utility Page  
**Purpose:** Page not found error

**Structure:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:pattern {"slug":"lsx-design/state/404"} /-->
  
  <!-- Search widget -->
  
  <!-- Helpful links (sitemap/popular pages) -->
  
  <!-- wp:pattern {"slug":"lsx-design/related/suggestions"} /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

**React Component:** `<Template404 />`

**Features:**
- Friendly error message
- Search functionality
- Helpful navigation links
- Suggested pages
- Back to home button

---

### 7. Page (`page.html`)

**Archetype:** Single Detail (fallback)  
**Purpose:** Default page template for standard pages

**Structure:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main id="main-content">
  <!-- wp:post-title /-->
  
  <!-- wp:post-content /-->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

**React Component:** N/A (uses generic structure)

**Features:**
- Simple page title
- Full page content
- No hero or metadata
- Clean, minimal layout

---

## React → WordPress Template Mapping

| React Component | WordPress Template | File |
|-----------------|-------------------|------|
| `<FrontPageTemplate />` | Front Page | `front-page.html` |
| `<IndexTemplate />` | Home/Index | `index.html` |
| `<ArchiveTemplate />` | Archive | `archive.html` |
| `<ArchiveWithFiltersTemplate />` | Archive | `archive.html` (with sidebar) |
| `<SingleTemplate />` | Single Post/Page | `single.html`, `page.html` |
| `<SearchResultsTemplate />` | Search Results | `search.html` |
| `<Template404 />` | 404 Error | `404.html` |

---

## Template Composition Rules

### ✅ Must Include

Every template **must** include:
1. `<SkipLink />` (accessibility)
2. `<SiteHeader />` or `<!-- wp:template-part {"slug":"header"} /-->`
3. `<main id="main-content">` wrapper
4. `<SiteFooter />` or `<!-- wp:template-part {"slug":"footer"} /-->`

---

## Accessibility Requirements

All templates must meet:

- ✅ **One H1 per page** — Main page title
- ✅ **Logical heading hierarchy** — H1 → H2 → H3, no skipping
- ✅ **Semantic landmarks** — `<header>`, `<nav>`, `<main>`, `<footer>`
- ✅ **Skip link** — Bypass navigation to main content
- ✅ **Keyboard navigation** — All interactive elements
- ✅ **Focus states** — Visible indicators
- ✅ **ARIA labels** — Where needed for context
- ✅ **Color contrast** — WCAG AA minimum

---

## Responsive Behavior

Templates automatically adapt to screen sizes:

**Desktop (>1024px):**
- Multi-column layouts
- Sidebar when applicable
- Full navigation visible

**Tablet (768px-1024px):**
- 2-column layouts reduce to 1-2
- Navigation adapts
- Larger touch targets

**Mobile (<768px):**
- Single column layouts
- Stacked sections
- Mobile menu
- Touch-friendly controls

---

## Template Testing Checklist

Before finalizing a template:

- [ ] Test in WordPress block editor
- [ ] Verify all patterns load correctly
- [ ] Test all breakpoints (mobile, tablet, desktop)
- [ ] Keyboard navigate entire page
- [ ] Check heading hierarchy (H1 → H2 → H3)
- [ ] Verify color contrast (WCAG AA)
- [ ] Test with screen reader
- [ ] Validate HTML semantics
- [ ] Check empty states (no content)
- [ ] Test pagination if applicable

---

## Best Practices

### ✅ DO

- Follow fixed archetype patterns
- Compose from approved patterns only
- Use semantic HTML throughout
- Ensure keyboard accessibility
- Test responsive behavior
- Handle empty states explicitly
- Use design tokens exclusively

### ❌ DON'T

- Create hybrid archetypes
- Build bespoke one-off sections
- Hard-code content or values
- Skip accessibility testing
- Ignore responsive breakpoints
- Leave blank spaces on empty content
- Bypass pattern system

---

## Template Customization

### Site Editors Can:
- ✅ Insert additional patterns
- ✅ Customize pattern content
- ✅ Adjust spacing/colors via editor
- ✅ Reorder patterns (within archetype logic)

### Site Editors Cannot:
- ❌ Edit template parts (global)
- ❌ Change template structure
- ❌ Override theme.json tokens
- ❌ Break accessibility

---

## Related Documentation

- **[overview-parts.md](../parts/overview-parts.md)** — Template parts
- **[overview-patterns.md](../patterns/overview-patterns.md)** — Block patterns
- **[overview-blocks.md](../blocks/overview-blocks.md)** — Block system
- **[sections/overview-sections.md](../sections/overview-sections.md)** — Section styles

---

## Complete Template Documentation

### **React Template Components** (`/src/app/components/templates/`)

LSX Design includes **90+ template files** across 11 sections.
For the complete route-to-template mapping, see **[overview-sitemap.md](../overview-sitemap.md)**.

#### Template File Counts by Section

| Section | Templates | Location |
|---------|-----------|----------|
| Homepage | 1 | `FrontPageTemplate.tsx` |
| About | 6 | `About*.tsx`, `TeamTemplate.tsx`, `CareersTemplate.tsx` |
| Services | 15 | `*ServiceTemplate.tsx`, `ServicesLandingTemplate.tsx` |
| Solutions | 10 | `*SolutionTemplate.tsx`, `SolutionsTemplate.tsx` |
| Portfolio | 4 | `Portfolio*.tsx` |
| Blog & Posts | 5 | `BlogIndexTemplate.tsx`, `SinglePost*.tsx`, `*ArchiveTemplate.tsx` |
| Post Formats | 21 | `post-formats/*.tsx` |
| Videos | 3 | `Video*.tsx`, `SingleVideoTemplate.tsx` |
| Podcasts | 2 | `Podcast*.tsx`, `SinglePodcastTemplate.tsx` |
| WooCommerce | 4 | `Product*.tsx`, `Cart*.tsx`, `Checkout*.tsx`, `woocommerce/*.tsx` |
| Tour Operator | 2 | `tour-operator/*.tsx` |
| Utility | 13 | `ContactPage*.tsx`, `FAQ*.tsx`, `Pricing*.tsx`, etc. |
| Legacy/Misc | 8 | `Archive*.tsx`, `Index*.tsx`, `Single*.tsx` |
| Dev Tools | 16 | `DevTools*.tsx`, `*Showcase.tsx`, `TemplateTester.tsx` |
| **Total** | **110+** | |

#### CSS Architecture

Every template has a dedicated BEM CSS file in `/src/styles/templates/`:

```
src/styles/templates/
├── archive.css                  # Shared archive card/grid styles
├── author-archive.css           # Author profile + posts
├── why-choose-us.css            # Why choose us page
├── guarantees.css               # Guarantees page
├── services-landing.css         # Services overview page
├── tour-operator-archive.css    # Tour listings
├── single-tour.css              # Single tour detail
├── dev-tools.css                # Dev tools dashboard
├── solution-detail.css          # Solution detail pages
├── feature-showcase.css         # Feature showcase
├── [35+ more files]
```

All CSS uses:
- BEM naming (`.template-name__element--modifier`)
- 100% CSS variables (`var(--*)`)
- Zero Tailwind classes
- WordPress utility classes (`.wp-*`) for layout

#### Template Composition Rule

**IMPORTANT:** Templates render inside `<RootLayout>` via `<Outlet />`. They must NOT include `SiteHeader`, `SiteFooter`, or `SkipLink` — those are provided by the layout.

```tsx
// ✅ CORRECT — template renders content only
export function MyTemplate() {
  return (
    <>
      <Section spacing="md">
        <Container>
          <h1 className="my-template__title">Title</h1>
        </Container>
      </Section>
    </>
  );
}

// ❌ WRONG — do not render chrome
export function MyTemplate() {
  return (
    <>
      <SiteHeader />  {/* NO — handled by RootLayout */}
      <main>...</main>
      <SiteFooter />  {/* NO — handled by RootLayout */}
    </>
  );
}
```

---

**Last Updated:** February 14, 2026  
**System Version:** 2.0  
**WordPress Compatibility:** FSE (Full Site Editing)