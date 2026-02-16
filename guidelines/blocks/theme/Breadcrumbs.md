# Breadcrumbs Component

**Component Type:** Navigation  
**WordPress Equivalent:** Breadcrumbs Pattern (Yoast SEO, Rank Math)  
**Category:** Theme

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
import { Breadcrumbs } from '@/components/blocks/theme/Breadcrumbs';

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

---

## Props

### Breadcrumbs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | Required | Breadcrumb trail items |
| `separator` | `ReactNode` | - | Separator element |
| `showHomeIcon` | `boolean` | `false` | Show home icon on first item |
| `maxItems` | `number` | - | Max items to show (adds ellipsis) |
| `className` | `string` | - | Additional CSS classes |

### BreadcrumbItem

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Breadcrumb text |
| `href` | `string` | Link URL (omit for current page) |
| `page` | `string` | Internal page slug (for useNavigation) |
| `icon` | `ComponentType` | Icon component |

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

---

## Related Components

- **[Pagination](./Pagination.md)** - Page navigation
- **[Navigation](./Navigation.md)** - Main site navigation

---

## File Location

```
/src/app/components/blocks/theme/Breadcrumbs.tsx
```

---

**Last Updated:** December 30, 2024  
**Component Version:** 1.0.0  
**Design System:** LSX Design
