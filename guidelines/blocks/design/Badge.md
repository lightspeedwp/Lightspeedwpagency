# Badge Component

**WordPress Block:** `lsx-design/badge`  
**Category:** Design  
**Status:** ✅ Production  
**Version:** 1.0  
**Created:** 2025-01-09

---

## 📋 Overview

The Badge component is a small label used for displaying status indicators, categories, tags, or metadata. It provides semantic color variants that convey meaning and supports multiple sizes for different use cases.

**Common Use Cases:**
- Status indicators (Published, Draft, Pending)
- Category labels (WordPress, Tutorial, Guide)
- Tag displays (Design, Development, Marketing)
- Metadata labels (Featured, New, Popular)
- Counts and statistics (3 Comments, 5 Items)

---

## 🎨 Design System

### Typography
- **Font Family:** `var(--font-primary)` (Lexend)
- **Font Sizes:**
  - Small: `var(--text-tiny)` (12px)
  - Medium/Large: `var(--text-small)` (14px)
- **Font Weight:** `var(--font-weight-medium)` (500)
- **Letter Spacing:** `var(--letter-spacing-wide)` (0.025em)

### Colors
Uses semantic CSS variables:
- `var(--primary)` / `var(--primary-foreground)`
- `var(--secondary)` / `var(--secondary-foreground)`
- `var(--success)` / `var(--success-foreground)`
- `var(--warning)` / `var(--warning-foreground)`
- `var(--destructive)` / `var(--destructive-foreground)`
- `var(--muted)` / `var(--muted-foreground)`

### Spacing
- **Small:** `2px 8px`
- **Medium:** `2px 10px`
- **Large:** `4px 12px`

### Border Radius
- **Standard:** `var(--radius)` (4px)
- **Pill:** `9999px`

---

## 💻 Usage

### Basic Import

```tsx
import { Badge } from '@/components/blocks/design/Badge';

// In your component
<Badge>Label</Badge>
```

---

## 📊 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Badge label text or content |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'destructive' \| 'muted' \| 'outline'` | `'default'` | Color variant based on semantic meaning |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size (affects padding and font size) |
| `pill` | `boolean` | `false` | Use rounded pill shape instead of standard corners |
| `className` | `string` | `''` | Additional CSS classes for customization |

---

## 🎨 Variants

### Default Variant
Neutral gray badge for general use.

```tsx
<Badge variant="default">General</Badge>
```

**Colors:**
- Background: `var(--muted)`
- Text: `var(--muted-foreground)`

### Primary Variant
Brand primary color for highlighted content.

```tsx
<Badge variant="primary">Featured</Badge>
```

**Colors:**
- Background: `var(--primary)`
- Text: `var(--primary-foreground)`

### Success Variant
Green badge for positive status.

```tsx
<Badge variant="success">Published</Badge>
```

**Colors:**
- Background: `var(--success)`
- Text: `var(--success-foreground)`

### Warning Variant
Yellow badge for cautionary status.

```tsx
<Badge variant="warning">Draft</Badge>
```

**Colors:**
- Background: `var(--warning)`
- Text: `var(--warning-foreground)`

### Destructive Variant
Red badge for negative status.

```tsx
<Badge variant="destructive">Error</Badge>
```

**Colors:**
- Background: `var(--destructive)`
- Text: `var(--destructive-foreground)`

### Outline Variant
Transparent background with border.

```tsx
<Badge variant="outline">Outline</Badge>
```

**Colors:**
- Background: `transparent`
- Border: `1px solid var(--border)`
- Text: `var(--foreground)`

---

## 🗂️ WordPress Mapping

### Block Name
`lsx-design/badge`

### CSS Implementation

```css
/* WordPress theme styles */
.wp-block-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  white-space: nowrap;
}

/* See src/styles/blocks/design/badge.css for full styles */
```

---

## 🧪 Testing

### Accessibility Testing

```tsx
// Test with screen reader
// Semantic variants (success, warning, error) should ideally use role="status"
// or have aria-label if the text alone is not descriptive enough.
```

---

## 🚀 Design System Tokens Used

### Typography
- `var(--font-primary)`
- `var(--text-tiny)`
- `var(--text-small)`

### Colors
- `var(--primary)`
- `var(--success)`
- `var(--warning)`
- `var(--destructive)`
- `var(--muted)`

---

**File Location:** `/src/app/components/blocks/design/Badge.tsx`
