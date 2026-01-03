# Breadcrumbs Component

**Component Type:** Navigation  
**WordPress Equivalent:** Breadcrumbs Pattern (Yoast SEO, Rank Math)  
**Category:** Navigation

---

## Overview

The Breadcrumbs component provides hierarchical navigation showing the user's location within the site structure.

**Features:**
- Schema.org BreadcrumbList markup for SEO
- Auto-collapse on mobile (shows first and last)
- Custom separators
- Current page indicator
- Home icon support
- Responsive variants
- WCAG 2.1 AA compliant

---

## Usage

### Basic Breadcrumbs

```tsx
import { Breadcrumbs } from '@/components/blocks';

<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Shoes', href: '/products/shoes' },
    { label: 'Running Shoes' }, // Current page (no href)
  ]}
/>
```

### With Home Icon

```tsx
<Breadcrumbs
  items={breadcrumbItems}
  showHomeIcon={true}
  separator="/"
/>
```

### Custom Separator

```tsx
<Breadcrumbs
  items={breadcrumbItems}
  separator=">"
/>
// Options: "/" | ">" | "→" | "·"
```

### Responsive (Auto-collapse on mobile)

```tsx
import { ResponsiveBreadcrumbs } from '@/components/blocks';

<ResponsiveBreadcrumbs
  items={breadcrumbItems}
  separator="/"
/>
```

### Compact (Mobile-optimized)

```tsx
import { CompactBreadcrumbs } from '@/components/blocks';

<CompactBreadcrumbs
  items={breadcrumbItems}
/>
// Shows: Home ... Current Page
```

---

## Props

### Breadcrumbs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | Required | Breadcrumb trail items |
| `separator` | `string` | `'/'` | Separator character |
| `showHomeIcon` | `boolean` | `false` | Show home icon on first item |
| `maxItems` | `number` | - | Max items to show (adds ellipsis) |
| `ariaLabel` | `string` | `'Breadcrumb navigation'` | ARIA label for nav element |

### BreadcrumbItem

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Breadcrumb text |
| `href` | `string` | Link URL (omit for current page) |
| `onClick` | `() => void` | Click handler (optional) |

---

## Examples

### Blog Post Breadcrumbs

```tsx
function BlogPost({ post }) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.category.name, href: `/blog/category/${post.category.slug}` },
    { label: post.title }, // Current page
  ];

  return (
    <article>
      <Breadcrumbs items={breadcrumbs} />
      <h1>{post.title}</h1>
      {/* ... */}
    </article>
  );
}
```

### Product Breadcrumbs

```tsx
function ProductPage({ product }) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: product.category, href: `/shop/${product.categorySlug}` },
    { label: product.subcategory, href: `/shop/${product.categorySlug}/${product.subcategorySlug}` },
    { label: product.name },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} showHomeIcon />
      <ProductDetails product={product} />
    </>
  );
}
```

### Dynamic Breadcrumbs from URL

```tsx
import { useLocation } from 'react-router-dom';

function DynamicBreadcrumbs() {
  const location = useLocation();
  
  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split('/').filter(Boolean);
    
    return [
      { label: 'Home', href: '/' },
      ...paths.map((path, index) => {
        const href = '/' + paths.slice(0, index + 1).join('/');
        const label = path.replace('-', ' ');
        
        // Last item is current page
        if (index === paths.length - 1) {
          return { label };
        }
        
        return { label, href };
      }),
    ];
  }, [location.pathname]);

  return <Breadcrumbs items={breadcrumbs} />;
}
```

---

## Design System

### Typography

- **Font:** Manrope (body text font)
- **Size:** `var(--text-small)` (14px)
- **Current Page:** Font weight 500, `--foreground` color
- **Links:** Font weight 400, `--primary` color

### Colors

- **Links:** `--primary` (hover: underline)
- **Current Page:** `--foreground`
- **Separator:** `--muted-foreground`

### Spacing

- **Gap:** 0.5rem between items
- **Flex:** Wraps on small screens

---

## Accessibility

### WCAG 2.1 Compliance

- ✅ **AA Compliant:** Proper semantic markup
- ✅ **ARIA:** `aria-label` on nav element
- ✅ **Current Page:** `aria-current="page"` attribute
- ✅ **Screen Readers:** Descriptive link text
- ✅ **Keyboard:** All links keyboard accessible

### Semantic HTML

```html
<nav aria-label="Breadcrumb navigation">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/">
        <span itemprop="name">Home</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <!-- ... -->
  </ol>
</nav>
```

---

## SEO Benefits

### Schema.org Markup

Breadcrumbs include BreadcrumbList structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://example.com/products"
    }
  ]
}
```

**Benefits:**
- ✅ Rich snippets in Google search results
- ✅ Better click-through rates
- ✅ Improved site navigation understanding

---

## WordPress Mapping

### Using Yoast SEO

```php
<?php
// functions.php
if ( function_exists('yoast_breadcrumb') ) {
  yoast_breadcrumb('<nav class="breadcrumbs">', '</nav>');
}
?>
```

### Using Rank Math

```php
<?php
if ( function_exists('rank_math_the_breadcrumbs') ) {
  rank_math_the_breadcrumbs();
}
?>
```

### Custom Implementation

```php
<?php
function custom_breadcrumbs() {
  $breadcrumbs = array(
    array( 'label' => 'Home', 'url' => home_url('/') )
  );
  
  if ( is_single() ) {
    $category = get_the_category();
    if ( ! empty( $category ) ) {
      $breadcrumbs[] = array(
        'label' => $category[0]->name,
        'url' => get_category_link( $category[0]->term_id )
      );
    }
    $breadcrumbs[] = array( 'label' => get_the_title() );
  }
  
  // Render breadcrumbs
}
?>
```

---

## Best Practices

### DO ✅

- ✅ **Always show current page:** Last item with no link
- ✅ **Use semantic HTML:** `<nav>`, `<ol>`, `<li>`
- ✅ **Include Schema.org:** Markup for SEO
- ✅ **Show on all pages:** Except homepage
- ✅ **Collapse on mobile:** Use ResponsiveBreadcrumbs
- ✅ **Descriptive labels:** Clear, concise text

### DON'T ❌

- ❌ **Don't show on homepage:** Redundant
- ❌ **Don't use long labels:** Keep under 30 characters
- ❌ **Don't skip levels:** Show complete hierarchy
- ❌ **Don't duplicate navigation:** Breadcrumbs supplement, don't replace
- ❌ **Don't use breadcrumbs alone:** Combine with main navigation

---

## Mobile Optimization

### Responsive Strategy

```tsx
// Desktop: Full breadcrumbs
<div className="hidden md:block">
  <Breadcrumbs items={items} />
</div>

// Mobile: Compact breadcrumbs
<div className="md:hidden">
  <CompactBreadcrumbs items={items} />
</div>
```

### Compact Display

On mobile (< 768px), show:
```
Home ... Current Page
```

**Benefits:**
- Saves horizontal space
- Still shows context
- Maintains accessibility

---

## Related Components

- **[Pagination](./Pagination.md)** - Page navigation
- **[Tabs](./Tabs.md)** - Tabbed navigation
- **[Navigation](./Navigation.md)** - Main site navigation

---

## File Location

```
/src/app/components/blocks/navigation/Breadcrumbs.tsx
```

---

**Last Updated:** December 30, 2024  
**Component Version:** 1.0.0  
**Design System:** LSX Design
