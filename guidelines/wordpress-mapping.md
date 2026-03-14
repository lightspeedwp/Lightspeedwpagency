# WordPress Theme Mapping — Guidelines

**Category:** Development  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Purpose

**What:** Defines how the LSX Design prototype maps to WordPress block theme architecture

**Why:** Ensure seamless translation from prototype to WordPress FSE implementation

**Who:** Developers implementing the prototype as a WordPress theme

---

## WordPress Theme Artefacts

The prototype must map to these WordPress theme constructs:

---

### Templates (`templates/*.html`)

**Purpose:** Page-level templates that define overall structure

**WordPress Files:**
- `front-page.html` - Home page template
- `index.html` - Default blog index
- `archive.html` - Archive listings (blog, portfolio, etc.)
- `single.html` - Single post/project
- `page.html` - Static pages
- `404.html` - Error page
- `search.html` - Search results
- `category.html` - Category archives
- `tag.html` - Tag archives
- `author.html` - Author archives
- `date.html` - Date archives

**Prototype Mapping:**
```
/src/app/templates/FrontPageTemplate.tsx  → templates/front-page.html
/src/app/templates/BlogIndexTemplate.tsx  → templates/index.html
/src/app/templates/ArchiveTemplate.tsx    → templates/archive.html
/src/app/templates/SingleTemplate.tsx     → templates/single.html
/src/app/templates/PageTemplate.tsx       → templates/page.html
/src/app/templates/NotFoundTemplate.tsx   → templates/404.html
```

---

### Template Parts (`parts/*.html`)

**Purpose:** Reusable template parts (header, footer, etc.)

**WordPress Files:**
- `header.html` - Site header with navigation
- `footer.html` - Site footer
- `breadcrumbs.html` - Breadcrumb navigation (optional)
- `sidebar.html` - Sidebar (if used)

**Prototype Mapping:**
```
/src/app/components/parts/SiteHeader.tsx    → parts/header.html
/src/app/components/parts/SiteFooter.tsx    → parts/footer.html
/src/app/components/parts/Breadcrumbs.tsx   → parts/breadcrumbs.html
```

---

### Patterns (`patterns/*.php` or registered patterns)

**Purpose:** Every reusable section is a pattern

**Pattern Registration:**
```php
<?php
/**
 * Title: Hero Home
 * Slug: lsx-design/hero/hero-home
 * Categories: hero
 * Block Types: core/group
 */
?>

<!-- wp:group {"className":"hero-home"} -->
<div class="wp-block-group hero-home">
  <!-- Pattern content -->
</div>
<!-- /wp:group -->
```

**Prototype Mapping:**
```
/src/app/components/patterns/HeroHome.tsx        → patterns/hero-home.php
/src/app/components/patterns/StatsGrid.tsx       → patterns/stats-grid.php
/src/app/components/patterns/ServicesPreview.tsx → patterns/services-preview.php
/src/app/components/patterns/CTASection.tsx      → patterns/cta-section.php
```

**See:** [pattern-catalog.md](./patterns/pattern-catalog.md) for complete pattern list

---

### theme.json

**Purpose:** Design tokens + global styles + block styles

**Structure:**
```json
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "primary",
          "color": "#0066cc",
          "name": "Primary"
        }
      ]
    },
    "typography": {
      "fontSizes": [
        {
          "slug": "h1",
          "size": "clamp(32px, 4vw + 16px, 64px)",
          "name": "H1"
        }
      ],
      "fontFamilies": [
        {
          "slug": "primary",
          "fontFamily": "Lexend, sans-serif",
          "name": "Primary Font"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "slug": "6",
          "size": "24px",
          "name": "24px"
        }
      ]
    }
  },
  "styles": {
    "color": {
      "background": "var(--wp--preset--color--background)",
      "text": "var(--wp--preset--color--foreground)"
    },
    "typography": {
      "fontFamily": "var(--wp--preset--font-family--primary)",
      "fontSize": "var(--wp--preset--font-size--base)"
    }
  }
}
```

**Prototype Mapping:**
```
/src/styles/theme-base.css    → theme.json settings.spacing, settings.typography
/src/styles/theme-light.css   → theme.json settings.color (light mode)
/src/styles/theme-dark.css    → theme.json styles (dark mode variation)
```

**See:** [design-tokens/css-variables-overview.md](./design-tokens/css-variables-overview.md)

---

### Style Variations (`styles/*.json`)

**Purpose:** Theme variations (e.g., dark mode, alternate color schemes)

**WordPress Files:**
- `styles/dark.json` - Dark mode variation
- `styles/light.json` - Light mode (default)

**Structure:**
```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 2,
  "title": "Dark Mode",
  "styles": {
    "color": {
      "background": "#1a1a1a",
      "text": "#ffffff"
    }
  }
}
```

**Prototype Mapping:**
```
/src/styles/theme-dark.css  → styles/dark.json
/src/styles/theme-light.css → styles/light.json (default)
```

---

## WordPress FSE Structure

**Complete theme structure:**

```
lsx-design-theme/
├── theme.json                 # Design tokens + global styles
├── style.css                  # Theme stylesheet (metadata)
│
├── templates/                 # Page templates
│   ├── front-page.html
│   ├── index.html
│   ├── archive.html
│   ├─��� single.html
│   ├── page.html
│   └── 404.html
│
├── parts/                     # Template parts
│   ├── header.html
│   ├── footer.html
│   └── breadcrumbs.html
│
├── patterns/                  # Block patterns
│   ├── hero-home.php
│   ├── stats-grid.php
│   ├── services-preview.php
│   └── cta-section.php
│
├── styles/                    # Style variations
│   ├── dark.json
│   └── light.json
│
└── assets/                    # Optional scripts/styles
    ├── js/
    │   └── scroll-to-top.js
    └── css/
        └── enhancements.css
```

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

**Rule:** If a section would be empty, omit it or show an explicit empty state—never leave blank space.

**See:** [templates/page-archetypes.md](./templates/page-archetypes.md) for detailed archetype specifications

---

## Block Naming Conventions

### WordPress Block Classes

All blocks must use `.wp-block-{name}` class naming:

```css
/* WordPress block naming */
.wp-block-group { }
.wp-block-columns { }
.wp-block-heading { }
.wp-block-paragraph { }
.wp-block-button { }
```

### Custom LSX Blocks

Custom blocks follow same pattern:

```css
/* Custom LSX blocks */
.wp-block-lsx-design-hero { }
.wp-block-lsx-design-stats-grid { }
.wp-block-lsx-design-cta-section { }
```

**See:** [blocks/overview-blocks.md](./blocks/overview-blocks.md)

---

## Related Guidelines

**See Also:**
- [patterns/pattern-catalog.md](./patterns/pattern-catalog.md) - Complete pattern list
- [templates/page-archetypes.md](./templates/page-archetypes.md) - Detailed archetype specs
- [blocks/overview-blocks.md](./blocks/overview-blocks.md) - WordPress blocks system
- [design-tokens/css-variables-overview.md](./design-tokens/css-variables-overview.md) - Token system

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Category:** WordPress Integration  
**WordPress Version:** 6.0+  
**FSE:** Full Site Editing compatible  
**Last Updated:** March 11, 2026
