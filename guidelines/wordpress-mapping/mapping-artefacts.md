# WordPress Theme Mapping — Artefacts & Structure

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [wordpress-mapping.md](../wordpress-mapping.md)  

---

## Purpose

**What:** Defines how the LSX Design prototype maps to WordPress block theme architecture

**Why:** Ensure seamless translation from prototype to WordPress FSE implementation

**Who:** Developers implementing the prototype as a WordPress theme

---

## WordPress Theme Artefacts

### Templates (`templates/*.html`)

**Purpose:** Page-level templates that define overall structure

**WordPress Files:**
- `front-page.html` — Home page template
- `index.html` — Default blog index
- `archive.html` — Archive listings (blog, portfolio, etc.)
- `single.html` — Single post/project
- `page.html` — Static pages
- `404.html` — Error page
- `search.html` — Search results
- `category.html` — Category archives
- `tag.html` — Tag archives
- `author.html` — Author archives
- `date.html` — Date archives

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
- `header.html` — Site header with navigation
- `footer.html` — Site footer
- `breadcrumbs.html` — Breadcrumb navigation (optional)
- `sidebar.html` — Sidebar (if used)

**Prototype Mapping:**
```
/src/app/components/parts/SiteHeader.tsx    → parts/header.html
/src/app/components/parts/SiteFooter.tsx    → parts/footer.html
/src/app/components/parts/Breadcrumbs.tsx   → parts/breadcrumbs.html
```

---

### Patterns (`patterns/*.php`)

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

**See:** [pattern-catalog.md](../patterns/pattern-catalog.md) for complete pattern list

---

### theme.json

**Purpose:** Design tokens + global styles + block styles

**Prototype Mapping:**
```
/src/styles/theme-base.css    → theme.json settings.spacing, settings.typography
/src/styles/theme-light.css   → theme.json settings.color (light mode)
/src/styles/theme-dark.css    → theme.json styles (dark mode variation)
```

**See:** [css-variables-overview.md](../design-tokens/css-variables-overview.md)

---

### Style Variations (`styles/*.json`)

**Purpose:** Theme variations (e.g., dark mode, alternate color schemes)

**WordPress Files:**
- `styles/dark.json` — Dark mode variation
- `styles/light.json` — Light mode (default)

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
│   ├── single.html
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

## Block Naming Conventions

### WordPress Block Classes

All blocks must use `.wp-block-{name}` class naming:

```css
.wp-block-group { }
.wp-block-columns { }
.wp-block-heading { }
.wp-block-paragraph { }
.wp-block-button { }
```

### Custom LSX Blocks

```css
.wp-block-lsx-design-hero { }
.wp-block-lsx-design-stats-grid { }
.wp-block-lsx-design-cta-section { }
```

---

**See also:** [mapping-workflow.md](./mapping-workflow.md)
