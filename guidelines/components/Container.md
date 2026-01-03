# Container Component

**Component Type:** Layout Primitive  
**WordPress Mapping:** Core Group block with `alignwide` or `alignfull` constraint  
**Location:** `/src/app/components/common/Container.tsx`

---

## Purpose

Provides consistent horizontal padding and max-width constraints for content sections. Enforces design system spacing and ensures content never touches viewport edges.

---

## Design System Requirements

### Spacing
- **Horizontal Padding:** Use Tailwind class `px-6` (24px) on mobile, `px-8` (32px) on desktop
- **Max Width:** `1200px` for default, `800px` for narrow content
- **Centering:** Always center with `mx-auto`

### Typography
- Container does NOT set typography
- Child elements must use Lexend or Manrope fonts from theme.css

### Colors
- Container is transparent by default
- Background colors come from parent Section component

---

## Usage

### Basic Usage
```tsx
import { Container } from '../common/Container';

<Container>
  <h1>Page Content</h1>
</Container>
```

### Narrow Container (for editorial content)
```tsx
<Container width="narrow">
  <article>
    {/* Editorial content */}
  </article>
</Container>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Content to be contained |
| `width` | `'default' \| 'narrow'` | `'default'` | Max-width constraint |
| `className` | string | `''` | Additional Tailwind classes |

---

## WordPress Implementation

In WordPress, this maps to the core **Group block** with width settings:

```html
<!-- wp:group {"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group">
  <!-- Content -->
</div>
<!-- /wp:group -->
```

---

## Token Enforcement

✅ **REQUIRED:**
- Tailwind spacing classes for padding (`px-6`, `px-8`)
- Max-width constraint (1200px or 800px)
- Center alignment (`mx-auto`)

❌ **FORBIDDEN:**
- Hard-coded pixel values for padding
- Inline width styles
- Setting typography or colors (delegate to children)

---

## Accessibility

- Container is a layout utility only
- No semantic HTML element by default (uses `<div>`)
- Semantic elements should be children (e.g., `<main>`, `<article>`, `<section>`)

---

## Examples

### Full-width Hero with Contained Content
```tsx
<section className="bg-primary text-primary-foreground">
  <Container>
    <h1>Hero Title</h1>
    <p>Hero description</p>
  </Container>
</section>
```

### Narrow Editorial Content
```tsx
<Section>
  <Container width="narrow">
    <article>
      <h2>Article Title</h2>
      <p>Long-form content works best in narrow containers...</p>
    </article>
  </Container>
</Section>
```

---

## Design System Integration

This component enforces:
1. **Consistent horizontal rhythm** across all pages
2. **Readable line lengths** for editorial content (narrow variant)
3. **Proper spacing** from viewport edges
4. **WordPress block editor constraints** (maps to Group block contentSize)

---

**Last Updated:** December 24, 2024
