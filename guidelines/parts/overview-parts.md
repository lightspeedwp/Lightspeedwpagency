# Template Parts Overview

This document explains the **template parts system** for LSX Design, which maps to WordPress **template parts** (`parts/*.html`) that provide global page elements.

---

## Template Parts Philosophy

Template parts are **global elements** that appear across multiple templates. They cannot be customized per-page by editors—they are site-wide components.

**WordPress Mapping:**
```html
<!-- parts/header.html -->
<!-- wp:template-part {"slug":"header"} /-->
```

**Key Principle:** Template parts provide consistent global chrome (header, footer) across all pages.

---

## Core Template Parts

LSX Design uses **2 primary template parts** plus optional utility parts:

| Part | File | Purpose | Used In |
|------|------|---------|---------|
| **Header** | `parts/header.html` | Site header + navigation | All templates |
| **Footer** | `parts/footer.html` | Site footer + links | All templates |

### Optional Parts
| Part | File | Purpose | Used In |
|------|------|---------|---------|
| **Breadcrumbs** | `parts/breadcrumbs.html` | Navigation trail | Interior pages (optional) |
| **Sidebar** | `parts/sidebar.html` | Sidebar content | Archive with filters (optional) |

---

## 1. Site Header (`parts/header.html`)

### Purpose
Global site header with navigation, logo, and primary actions.

### Structure
```html
<!-- wp:group {"tagName":"header","layout":{"type":"constrained"}} -->
<header class="wp-block-group">
  
  <!-- Logo -->
  <!-- wp:site-logo /-->
  
  <!-- Primary Navigation -->
  <!-- wp:navigation {"layout":{"type":"flex","justifyContent":"center"}} /-->
  
  <!-- Header Actions -->
  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- Search Button -->
    <!-- wp:button {"style":"ghost"} -->
    <div class="wp-block-button is-style-ghost">
      <a class="wp-block-button__link">Search</a>
    </div>
    <!-- /wp:button -->
    
    <!-- Menu Toggle (Mobile) -->
    <!-- wp:button {"style":"ghost"} -->
    <div class="wp-block-button is-style-ghost">
      <a class="wp-block-button__link">Menu</a>
    </div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
  
</header>
<!-- /wp:group -->
```

### React Component
```tsx
<SiteHeader />
```

### Features
- ✅ Site logo (responsive sizing)
- ✅ Primary navigation menu
- ✅ Search button/modal
- ✅ Mobile menu toggle
- ✅ Sticky header (optional)

### Accessibility
- `<header>` landmark element
- Navigation `<nav>` with aria-label
- Keyboard navigation
- Focus states on all links/buttons
- Mobile menu accessible via keyboard

---

## 2. Site Footer (`parts/footer.html`)

### Purpose
Global site footer with links, newsletter signup, and copyright.

### Structure
```html
<!-- wp:group {"tagName":"footer","style":"compact"} -->
<footer class="wp-block-group is-style-compact">
  
  <!-- Footer Content -->
  <!-- wp:columns {"className":"gap-40"} -->
  <div class="wp-block-columns gap-40">
    
    <!-- Newsletter Column -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:site-logo {"width":120} /-->
      
      <!-- wp:paragraph -->
      <p>Join our newsletter to stay up to date on features and releases.</p>
      <!-- /wp:paragraph -->
      
      <!-- wp:pattern {"slug":"lsx-design/cta/newsletter"} /-->
    </div>
    <!-- /wp:column -->
    
    <!-- Links Columns -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:heading {"level":3} -->
      <h3>Column One</h3>
      <!-- /wp:heading -->
      
      <!-- wp:navigation {"orientation":"vertical"} /-->
    </div>
    <!-- /wp:column -->
    
    <!-- Repeat for more columns -->
    
    <!-- Social Column -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:heading {"level":3} -->
      <h3>Follow Us</h3>
      <!-- /wp:heading -->
      
      <!-- wp:social-links -->
      <ul class="wp-block-social-links">
        <!-- Social icons -->
      </ul>
      <!-- /wp:social-links -->
    </div>
    <!-- /wp:column -->
    
  </div>
  <!-- /wp:columns -->
  
  <!-- Footer Credits -->
  <!-- wp:separator /-->
  
  <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between"}} -->
  <div class="wp-block-group">
    <!-- wp:paragraph -->
    <p>© 2024 LSX Design. All rights reserved.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:navigation {"layout":{"type":"flex"}} /-->
  </div>
  <!-- /wp:group -->
  
</footer>
<!-- /wp:group -->
```

### React Component
```tsx
<SiteFooter />
```

### Features
- ✅ Newsletter signup form
- ✅ Footer navigation columns
- ✅ Social media links
- ✅ Copyright notice
- ✅ Legal links (Privacy, Terms, Cookies)

### Accessibility
- `<footer>` landmark element
- Heading hierarchy (H3 for sections)
- Link lists in `<nav>` elements
- Form labels for newsletter input
- Keyboard accessible throughout

---

## 3. Breadcrumbs (Optional) (`parts/breadcrumbs.html`)

### Purpose
Hierarchical navigation trail for interior pages.

### Structure
```html
<!-- wp:navigation {"layout":{"type":"breadcrumb"}} /-->
```

### React Component
```tsx
<Breadcrumbs />
```

### Features
- ✅ Home → Parent → Current page
- ✅ Semantic navigation markup
- ✅ aria-current="page" on last item
- ✅ SEO structured data (Schema.org)

### Usage
```html
<!-- In templates -->
<!-- wp:template-part {"slug":"breadcrumbs"} /-->
```

---

## 4. Sidebar (Optional) (`parts/sidebar.html`)

### Purpose
Sidebar content for filtered archive layouts.

### Structure
```html
<!-- wp:group {"tagName":"aside","layout":{"type":"constrained","contentSize":"300px"}} -->
<aside class="wp-block-group">
  
  <!-- Filter Widget -->
  <!-- wp:heading {"level":3} -->
  <h3>Filter By</h3>
  <!-- /wp:heading -->
  
  <!-- wp:pattern {"slug":"lsx-design/nav/filter-bar"} /-->
  
</aside>
<!-- /wp:group -->
```

### React Component
N/A (Inline in template)

### Features
- ✅ Filter controls
- ✅ Category/tag lists
- ✅ Search widget
- ✅ Recent posts widget

### Usage
Only in `archive-with-filters.html` template.

---

## Template Part Usage

### In Template Files

**Basic Template:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main>
  <!-- Page content patterns -->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

**Template with Breadcrumbs:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<main>
  <!-- wp:template-part {"slug":"breadcrumbs"} /-->
  
  <!-- Page content patterns -->
</main>

<!-- wp:template-part {"slug":"footer"} /-->
```

**Template with Sidebar:**
```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:group {"layout":{"type":"flex"}} -->
<div class="wp-block-group">
  
  <main>
    <!-- Main content patterns -->
  </main>
  
  <!-- wp:template-part {"slug":"sidebar"} /-->
  
</div>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer"} /-->
```

---

## React Component Mapping

| React Component | WordPress Part | File |
|-----------------|----------------|------|
| `<SiteHeader />` | Site Header | `parts/header.html` |
| `<SiteFooter />` | Site Footer | `parts/footer.html` |
| `<Breadcrumbs />` | Breadcrumbs | `parts/breadcrumbs.html` (or inline) |

---

## Editing Template Parts

### In WordPress Admin

1. **Appearance → Editor**
2. **Click "Patterns" → "Template Parts"**
3. **Select part to edit** (Header or Footer)
4. **Edit blocks** like any other content
5. **Save changes** — applies site-wide

### File-Based Editing

Edit `parts/header.html` or `parts/footer.html` directly in theme folder.

---

## Token Usage in Template Parts

All template parts must use design tokens:

**Typography:**
```html
<!-- wp:heading {"style":{"typography":{"fontSize":"var(--text-h3)"}}} -->
```

**Colors:**
```html
<!-- wp:group {"style":{"color":{"background":"var(--surface)"}}} -->
```

**Spacing:**
```html
<!-- wp:group {"style":{"spacing":{"padding":"var(--spacing-60)"}}} -->
```

---

## Responsive Behavior

### Header Responsive Pattern

**Desktop:**
- Logo left
- Navigation center
- Actions right
- Horizontal layout

**Mobile:**
- Logo left
- Menu toggle right
- Navigation hidden (toggleable)
- Vertical dropdown menu

### Footer Responsive Pattern

**Desktop:**
- 4-column layout
- Horizontal social links
- Side-by-side credits

**Mobile:**
- Stacked columns
- Vertical social links
- Stacked credits

---

## Accessibility Requirements

### Header
- ✅ `<header>` landmark
- ✅ Navigation `<nav>` with aria-label="Primary navigation"
- ✅ Skip link target (id="main-content")
- ✅ Keyboard navigable menus
- ✅ Focus states on all interactive elements
- ✅ Mobile menu keyboard accessible

### Footer
- ✅ `<footer>` landmark
- ✅ Navigation `<nav>` with aria-label="Footer navigation"
- ✅ Form labels for newsletter input
- ✅ Keyboard navigable links
- ✅ Sufficient color contrast

---

## Best Practices

### ✅ DO

- Keep template parts simple and focused
- Use semantic HTML landmarks
- Ensure keyboard accessibility
- Test responsive behavior
- Use design tokens throughout
- Provide editor-friendly customization
- Document global vs per-page elements

### ❌ DON'T

- Hard-code content that should be dynamic
- Create too many template parts
- Skip accessibility testing
- Ignore mobile responsive behavior
- Use arbitrary styling values
- Make parts too complex
- Forget to version control changes

---

## Template Part Registration

```php
// functions.php
function lsx_design_register_template_parts() {
  register_block_template_part(
    'header',
    array(
      'title' => __( 'Site Header', 'lsx-design' ),
      'description' => __( 'Global site header with navigation', 'lsx-design' ),
      'area' => 'header'
    )
  );
  
  register_block_template_part(
    'footer',
    array(
      'title' => __( 'Site Footer', 'lsx-design' ),
      'description' => __( 'Global site footer with links', 'lsx-design' ),
      'area' => 'footer'
    )
  );
}
add_action( 'init', 'lsx_design_register_template_parts' );
```

---

## Related Documentation

- **[overview-templates.md](../templates/overview-templates.md)** — Template system
- **[overview-patterns.md](../patterns/overview-patterns.md)** — Block patterns
- **[components/SiteHeader.md](../components/SiteHeader.md)** — Header component
- **[components/Logo.md](../components/Logo.md)** — Logo component

---

## Complete Template Part Documentation Index

### **Template Part Component Documentation** (`/guidelines/parts/`)
1. **[SiteHeader.md](./SiteHeader.md)** — Site header template part documentation
2. **[SiteFooter.md](./SiteFooter.md)** — Site footer template part documentation

### **Related Component Documentation** (`/guidelines/components/`)
- **[SiteHeader.md](../components/SiteHeader.md)** — Site header React component
- **[Breadcrumbs.md](../components/Breadcrumbs.md)** — Breadcrumb navigation component
- **[Logo.md](../components/Logo.md)** — Logo component with theme switching ⭐

**Total Template Part Files:** 2 documentation files + 1 overview

---

**Last Updated:** December 27, 2024  
**System Version:** 1.0  
**WordPress Compatibility:** FSE (Full Site Editing)