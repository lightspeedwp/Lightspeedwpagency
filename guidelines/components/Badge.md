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
- **Small:** `px-2 py-0.5` (8px horizontal, 2px vertical)
- **Medium:** `px-2.5 py-0.5` (10px horizontal, 2px vertical)
- **Large:** `px-3 py-1` (12px horizontal, 4px vertical)

### Border Radius
- **Standard:** `var(--radius)` (4px)
- **Pill:** `rounded-full` (9999px)

---

## 💻 Usage

### Basic Import

```tsx
import { Badge } from './components/blocks/design/Badge';

// In your component
<Badge>Label</Badge>
```

### Barrel Export Import

```tsx
import { Badge } from './components/blocks/design';

// Or from root components
import { Badge } from './components';
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
| `ariaLabel` | `string` | `undefined` | Accessible label for screen readers |

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

---

### Primary Variant
Brand primary color for highlighted content.

```tsx
<Badge variant="primary">Featured</Badge>
<Badge variant="primary">Recommended</Badge>
```

**Colors:**
- Background: `var(--primary)`
- Text: `var(--primary-foreground)`

---

### Secondary Variant
Secondary brand color for alternative highlighting.

```tsx
<Badge variant="secondary">Alternative</Badge>
```

**Colors:**
- Background: `var(--secondary)`
- Text: `var(--secondary-foreground)`

---

### Success Variant
Green badge for positive status.

```tsx
<Badge variant="success">Published</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="success">Completed</Badge>
```

**Colors:**
- Background: `var(--success)`
- Text: `var(--success-foreground)`

**Accessibility:** Uses `role="status"` for screen readers

---

### Warning Variant
Yellow badge for cautionary status.

```tsx
<Badge variant="warning">Draft</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="warning">In Progress</Badge>
```

**Colors:**
- Background: `var(--warning)`
- Text: `var(--warning-foreground)`

**Accessibility:** Uses `role="status"` for screen readers

---

### Destructive Variant
Red badge for negative status.

```tsx
<Badge variant="destructive">Error</Badge>
<Badge variant="destructive">Failed</Badge>
<Badge variant="destructive">Deleted</Badge>
```

**Colors:**
- Background: `var(--destructive)`
- Text: `var(--destructive-foreground)`

**Accessibility:** Uses `role="status"` for screen readers

---

### Muted Variant
Low-contrast badge for subtle labeling.

```tsx
<Badge variant="muted">Optional</Badge>
<Badge variant="muted">Reference</Badge>
```

**Colors:**
- Background: `var(--muted)`
- Text: `var(--muted-foreground)`
- Opacity: 0.8

---

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

## 📏 Sizes

### Small (`sm`)
Compact badge for tight spaces.

```tsx
<Badge size="sm">Small</Badge>
<Badge size="sm" variant="primary">Tag</Badge>
```

**Dimensions:**
- Padding: `8px horizontal, 2px vertical`
- Font Size: `12px` (--text-tiny)

---

### Medium (`md`) — Default
Standard badge size for most use cases.

```tsx
<Badge size="md">Medium</Badge>
<Badge variant="primary">Default Size</Badge>
```

**Dimensions:**
- Padding: `10px horizontal, 2px vertical`
- Font Size: `14px` (--text-small)

---

### Large (`lg`)
Larger badge for emphasis or standalone display.

```tsx
<Badge size="lg">Large</Badge>
<Badge size="lg" variant="success">Featured</Badge>
```

**Dimensions:**
- Padding: `12px horizontal, 4px vertical`
- Font Size: `14px` (--text-small)

---

## 🎯 Shape Options

### Standard Corners (Default)
Uses `var(--radius)` (4px) for consistent rounded corners.

```tsx
<Badge>Standard</Badge>
```

---

### Pill Shape
Fully rounded ends using `rounded-full`.

```tsx
<Badge pill>Pill Badge</Badge>
<Badge pill variant="primary">Featured</Badge>
```

---

## 💡 Examples

### Status Indicators

```tsx
// Post status
<Badge variant="success">Published</Badge>
<Badge variant="warning">Draft</Badge>
<Badge variant="destructive">Archived</Badge>

// Order status
<Badge variant="success">Completed</Badge>
<Badge variant="warning">Processing</Badge>
<Badge variant="destructive">Cancelled</Badge>

// User status
<Badge variant="success">Active</Badge>
<Badge variant="muted">Inactive</Badge>
```

---

### Category Labels

```tsx
// Blog categories
<Badge variant="primary" size="sm">WordPress</Badge>
<Badge variant="primary" size="sm">Design</Badge>
<Badge variant="primary" size="sm">Development</Badge>

// Service categories
<Badge variant="secondary" size="sm">Web Design</Badge>
<Badge variant="secondary" size="sm">SEO</Badge>
<Badge variant="secondary" size="sm">Maintenance</Badge>
```

---

### Tag Displays

```tsx
// Article tags
<div className="flex gap-2 flex-wrap">
  <Badge variant="muted" size="sm">Tutorial</Badge>
  <Badge variant="muted" size="sm">Beginner</Badge>
  <Badge variant="muted" size="sm">WordPress</Badge>
  <Badge variant="muted" size="sm">2024</Badge>
</div>
```

---

### Metadata Labels

```tsx
// Featured content
<Badge variant="primary" pill>Featured</Badge>

// New content
<Badge variant="success" pill>New</Badge>

// Popular content
<Badge variant="warning" pill>Popular</Badge>

// Updated content
<Badge variant="outline" size="sm">Updated 2024</Badge>
```

---

### Count Displays

```tsx
// Comments count
<Badge variant="muted" size="sm">3 Comments</Badge>

// Items in cart
<Badge variant="primary" pill>5</Badge>

// Notifications
<Badge variant="destructive" pill size="sm">12</Badge>
```

---

### Combined with Other Components

```tsx
// Card with badges
<div className="card">
  <div className="flex gap-2 mb-2">
    <Badge variant="primary" size="sm">WordPress</Badge>
    <Badge variant="success" size="sm">New</Badge>
  </div>
  <h3>Article Title</h3>
  <p>Article excerpt...</p>
</div>

// Button with badge
<button className="flex items-center gap-2">
  Messages
  <Badge variant="destructive" pill size="sm">3</Badge>
</button>

// Navigation with badges
<nav>
  <a href="/posts">
    Posts <Badge variant="muted" size="sm">24</Badge>
  </a>
  <a href="/drafts">
    Drafts <Badge variant="warning" size="sm">5</Badge>
  </a>
</nav>
```

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast:**
- All variants meet minimum 4.5:1 contrast ratio
- Text remains readable in light and dark modes
- Does not rely on color alone to convey meaning

**Semantic HTML:**
- Status badges use `role="status"` for screen readers
- Descriptive text labels (not just colors)
- Optional `ariaLabel` for additional context

**Screen Reader Support:**
```tsx
// Automatic status announcement
<Badge variant="success">Published</Badge>
// Screen reader: "Status: Published"

// Custom announcement
<Badge variant="warning" ariaLabel="Draft status, needs review">
  Draft
</Badge>
// Screen reader: "Draft status, needs review"
```

---

## 🗂️ WordPress Mapping

### Block Name
`lsx-design/badge`

### Pattern Slug
`lsx-design/design/badge`

### WordPress Implementation

```php
// Register custom block
register_block_type('lsx-design/badge', [
  'attributes' => [
    'label' => ['type' => 'string'],
    'variant' => ['type' => 'string', 'default' => 'default'],
    'size' => ['type' => 'string', 'default' => 'md'],
    'pill' => ['type' => 'boolean', 'default' => false]
  ],
  'render_callback' => 'render_lsx_badge_block'
]);

function render_lsx_badge_block($attributes) {
  $label = esc_html($attributes['label']);
  $variant = esc_attr($attributes['variant']);
  $size = esc_attr($attributes['size']);
  $pill = $attributes['pill'] ? 'pill' : '';
  
  return sprintf(
    '<span class="lsx-badge lsx-badge--%s lsx-badge--%s %s">%s</span>',
    $variant,
    $size,
    $pill,
    $label
  );
}
```

### CSS Implementation

```css
/* WordPress theme styles */
.lsx-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  white-space: nowrap;
}

/* Size variants */
.lsx-badge--sm {
  padding: 2px 8px;
  font-size: var(--text-tiny);
}

.lsx-badge--md {
  padding: 2px 10px;
  font-size: var(--text-small);
}

.lsx-badge--lg {
  padding: 4px 12px;
  font-size: var(--text-small);
}

/* Color variants */
.lsx-badge--primary {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.lsx-badge--success {
  background-color: var(--success);
  color: var(--success-foreground);
}

/* Shape */
.lsx-badge.pill {
  border-radius: 9999px;
}

.lsx-badge:not(.pill) {
  border-radius: var(--radius);
}
```

---

## 🧪 Testing

### Visual Testing

```tsx
// Test all variants
<div className="flex gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="muted">Muted</Badge>
  <Badge variant="outline">Outline</Badge>
</div>

// Test all sizes
<div className="flex gap-2">
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</div>

// Test pill shape
<div className="flex gap-2">
  <Badge pill>Pill</Badge>
  <Badge pill variant="primary">Primary Pill</Badge>
</div>
```

### Accessibility Testing

```tsx
// Test with screen reader
<Badge variant="success" ariaLabel="Post published successfully">
  Published
</Badge>

// Test keyboard navigation (if interactive)
<button>
  <Badge>Focus Test</Badge>
</button>

// Test color contrast
// All variants must meet WCAG 2.1 AA (4.5:1 minimum)
```

---

## 🚀 Design System Tokens Used

### Typography
- `var(--font-primary)` — Lexend font family
- `var(--text-tiny)` — 12px font size
- `var(--text-small)` — 14px font size
- `var(--font-weight-medium)` — 500 font weight
- `var(--font-weight-regular)` — 400 font weight
- `var(--letter-spacing-wide)` — 0.025em letter spacing

### Colors
- `var(--primary)` / `var(--primary-foreground)`
- `var(--secondary)` / `var(--secondary-foreground)`
- `var(--success)` / `var(--success-foreground)`
- `var(--warning)` / `var(--warning-foreground)`
- `var(--destructive)` / `var(--destructive-foreground)`
- `var(--muted)` / `var(--muted-foreground)`
- `var(--foreground)` — Text color
- `var(--border)` — Border color

### Spacing
- Tailwind classes: `px-2`, `px-2.5`, `px-3`, `py-0.5`, `py-1`

### Border Radius
- `var(--radius)` — 4px standard radius
- `rounded-full` — Pill shape

---

## 📚 Related Components

- **Button** — Interactive calls-to-action
- **Tag** — Similar to badge but for filtering/selection
- **Chip** — Interactive badge with close button
- **Label** — Form field labels

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-09 | Initial creation with 8 variants and 3 sizes |

---

## 📝 Notes

### Best Practices

1. **Use Semantic Variants:**
   - `success` for positive status
   - `warning` for cautionary status
   - `destructive` for negative status
   - `primary` for featured content
   - `muted` for subtle labeling

2. **Keep Labels Concise:**
   - Use short, descriptive text
   - Avoid full sentences
   - Aim for 1-2 words maximum

3. **Don't Overuse:**
   - Too many badges creates visual noise
   - Use sparingly for emphasis
   - Group related badges together

4. **Maintain Consistency:**
   - Use same variant for same meaning
   - Use same size in similar contexts
   - Keep styling consistent across site

### Common Patterns

```tsx
// Status row
<div className="flex items-center gap-2">
  <h3>Post Title</h3>
  <Badge variant="success">Published</Badge>
  <Badge variant="primary" pill>Featured</Badge>
</div>

// Tag list
<div className="flex gap-2 flex-wrap">
  {tags.map(tag => (
    <Badge key={tag} variant="muted" size="sm">{tag}</Badge>
  ))}
</div>

// Count indicator
<button className="flex items-center gap-2">
  <span>Notifications</span>
  <Badge variant="destructive" pill size="sm">5</Badge>
</button>
```

---

**Created:** 2025-01-09  
**Last Updated:** 2025-01-09  
**Status:** ✅ Production Ready  
**Maintained By:** LSX Design Team

**See Also:**
- [Design System Usage Guide](/guidelines/design-system/design-system-usage-guide.md)
- [Component Guidelines](/guidelines/overview-components.md)
- [WordPress Blocks System](/guidelines/blocks/overview-blocks.md)
