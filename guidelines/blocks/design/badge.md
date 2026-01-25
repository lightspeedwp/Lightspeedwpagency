# Badge Block

**WordPress Block:** `core/badge` (custom design block)  
**Category:** Design Blocks  
**Component:** `/src/app/components/blocks/design/Badge.tsx`  
**CSS File:** `/src/styles/blocks/design/badge.css`

---

## Purpose

The Badge block displays small status indicators, labels, tags, or counts. It provides visual categorization and highlighting of important information.

**Use this block when:**
- Displaying status indicators (active, pending, completed)
- Showing category or tag labels
- Highlighting counts or numbers (notifications, items)
- Marking new or featured content

**Do NOT use this block when:**
- Displaying primary content (use Paragraph block instead)
- Creating interactive buttons (use Button block)
- Building navigation elements (use Navigation block)
- Showing long text content (use Group or Stack blocks)

---

## Block Structure

```tsx
import { Badge } from '@/app/components/blocks/design/Badge';

<Badge variant="primary">New</Badge>
```

---

## Props API

```typescript
interface BadgeProps {
  /** Badge visual variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  
  /** Badge content */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## Variant Examples

### Default Badge
```tsx
<Badge variant="default">Label</Badge>
```

### Primary Badge
```tsx
<Badge variant="primary">Featured</Badge>
```

### Secondary Badge
```tsx
<Badge variant="secondary">Category</Badge>
```

### Success Badge
```tsx
<Badge variant="success">Active</Badge>
```

### Warning Badge
```tsx
<Badge variant="warning">Pending</Badge>
```

### Error Badge
```tsx
<Badge variant="error">Closed</Badge>
```

### Outline Badge
```tsx
<Badge variant="outline">Tag</Badge>
```

---

## Size Examples

### Small Badge
```tsx
<Badge size="sm">99+</Badge>
```

### Medium Badge (default)
```tsx
<Badge size="md">New</Badge>
```

### Large Badge
```tsx
<Badge size="lg">Featured</Badge>
```

---

## CSS Variables

All styling uses CSS variables from `/src/styles/theme-base.css`:

```css
/* Colors */
--background        /* Default badge background */
--foreground        /* Default badge text */
--primary           /* Primary badge background */
--primary-foreground /* Primary badge text */
--secondary         /* Secondary badge background */
--secondary-foreground /* Secondary badge text */
--success           /* Success badge (green) */
--warning           /* Warning badge (yellow) */
--destructive       /* Error badge (red) */
--border            /* Outline variant border */

/* Typography */
--font-primary      /* Badge font family (Lexend) */
--text-xs           /* Small badge text size */
--text-sm           /* Medium badge text size */
--text-base         /* Large badge text size */

/* Spacing */
--spacing-1         /* Badge padding (vertical) */
--spacing-2         /* Badge padding (horizontal) */

/* Borders */
--radius-full       /* Badge border radius (pill shape) */
```

---

## BEM Class Naming

The Badge block uses WordPress-aligned BEM naming:

```css
.wp-block-badge                /* Root container */
.wp-block-badge--default       /* Default variant */
.wp-block-badge--primary       /* Primary variant */
.wp-block-badge--secondary     /* Secondary variant */
.wp-block-badge--success       /* Success variant */
.wp-block-badge--warning       /* Warning variant */
.wp-block-badge--error         /* Error variant */
.wp-block-badge--outline       /* Outline variant */

.wp-block-badge--sm            /* Small size modifier */
.wp-block-badge--md            /* Medium size modifier */
.wp-block-badge--lg            /* Large size modifier */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Contrast Ratios:** Minimum 4.5:1 for text, 3:1 for large text
- ✅ **Color Independence:** Do not rely solely on color to convey meaning
- ✅ **Text Size:** Minimum 12px for readability
- ✅ **Semantic HTML:** Use appropriate HTML elements
- ✅ **Screen Readers:** Provide context when needed with aria-label

### Implementation
```tsx
<Badge variant="success" aria-label="Status: Active">
  Active
</Badge>

<Badge variant="error" aria-label="Status: Error - Action required">
  Error
</Badge>
```

---

## Light & Dark Mode

The Badge block automatically adapts to light/dark themes using CSS variables:

```css
/* Light mode */
.light-theme .wp-block-badge--primary {
  background: var(--primary);
  color: var(--primary-foreground);
}

/* Dark mode */
.dark-theme .wp-block-badge--primary {
  background: var(--primary);
  color: var(--primary-foreground);
}
```

All variants automatically adjust based on the active theme.

---

## Responsive Behavior

| Breakpoint | Font Size (sm) | Font Size (md) | Font Size (lg) |
|------------|----------------|----------------|----------------|
| **Mobile** (< 768px) | 11px | 12px | 14px |
| **Tablet** (768px - 1023px) | 12px | 13px | 15px |
| **Desktop** (≥ 1024px) | 12px | 14px | 16px |

```css
/* Mobile-first responsive design */
.wp-block-badge--sm {
  font-size: 11px;
}

@media (min-width: 768px) {
  .wp-block-badge--sm {
    font-size: 12px;
  }
}
```

---

## WordPress Mapping

### In WordPress FSE

This block would be implemented as a **custom block pattern** or **reusable block**:

```html
<!-- wp:paragraph {"className":"wp-block-badge wp-block-badge--primary"} -->
<p class="wp-block-badge wp-block-badge--primary">Featured</p>
<!-- /wp:paragraph -->
```

### Block Variations

WordPress allows creating block variations for each badge type:

- `badge/default` - Default gray badge
- `badge/primary` - Primary brand badge
- `badge/success` - Success/active badge
- `badge/warning` - Warning/pending badge
- `badge/error` - Error/closed badge

---

## Usage in Templates

### Status Indicators
```tsx
import { Badge } from '@/app/components/blocks/design/Badge';

export function OrderItem({ status }: { status: string }) {
  return (
    <div>
      <h3>Order #12345</h3>
      <Badge variant={status === 'completed' ? 'success' : 'warning'}>
        {status}
      </Badge>
    </div>
  );
}
```

### Category Tags
```tsx
import { Badge } from '@/app/components/blocks/design/Badge';

export function BlogPost({ categories }: { categories: string[] }) {
  return (
    <article>
      <div className="categories">
        {categories.map((cat) => (
          <Badge key={cat} variant="secondary">
            {cat}
          </Badge>
        ))}
      </div>
    </article>
  );
}
```

### Notification Count
```tsx
import { Badge } from '@/app/components/blocks/design/Badge';

export function NotificationBell({ count }: { count: number }) {
  return (
    <button>
      <Bell />
      {count > 0 && (
        <Badge variant="error" size="sm" aria-label={`${count} unread notifications`}>
          {count > 99 ? '99+' : count}
        </Badge>
      )}
    </button>
  );
}
```

---

## Testing Requirements

### Unit Tests
- [ ] Renders all variants correctly
- [ ] Renders all sizes correctly
- [ ] Displays children content
- [ ] Applies custom className
- [ ] Uses correct CSS variables

### Accessibility Tests
- [ ] Text meets minimum size requirements (12px+)
- [ ] Contrast ratios meet WCAG 2.1 AA (4.5:1)
- [ ] aria-label works when provided
- [ ] Badge content is readable by screen readers

### Visual Regression Tests
- [ ] Light mode renders correctly for all variants
- [ ] Dark mode renders correctly for all variants
- [ ] All sizes render correctly
- [ ] Long text wraps or truncates appropriately
- [ ] Badge fits inline with text

---

## Common Patterns

### Badge Group
```tsx
<div className="badge-group" style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
  <Badge variant="primary">React</Badge>
  <Badge variant="primary">TypeScript</Badge>
  <Badge variant="primary">WordPress</Badge>
</div>
```

### Status with Icon
```tsx
import { CheckCircle, Clock, XCircle } from 'lucide-react';

<Badge variant="success">
  <CheckCircle size={12} /> Active
</Badge>

<Badge variant="warning">
  <Clock size={12} /> Pending
</Badge>

<Badge variant="error">
  <XCircle size={12} /> Closed
</Badge>
```

### Clickable Badge
```tsx
<button
  onClick={() => console.log('Clicked')}
  style={{ background: 'none', border: 'none', padding: 0 }}
>
  <Badge variant="primary">Click me</Badge>
</button>
```

---

## Migration Checklist

When migrating existing inline badges:

- [ ] Replace hardcoded colors with CSS variables
- [ ] Remove inline styles, use CSS classes
- [ ] Use appropriate variant (default/primary/success/warning/error)
- [ ] Add aria-label for status badges
- [ ] Ensure text meets minimum size (12px+)
- [ ] Test in light and dark modes
- [ ] Verify contrast ratios
- [ ] Use appropriate size (sm/md/lg)

---

## Related Components

- **[Alert](./alert.md)** - Larger message containers
- **[Button](./buttons.md)** - Interactive buttons
- **[Group](./group.md)** - Container for grouping elements

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
