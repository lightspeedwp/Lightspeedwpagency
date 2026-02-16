# Heading Component

**Component Type:** Typography Primitive  
**WordPress Mapping:** Core Heading block  
**Location:** `/src/app/components/blocks/text/Heading.tsx`

---

## Purpose

Enforces semantic heading hierarchy and design system typography. Ensures consistent heading styles across all templates using only Lexend font and CSS variables from theme.css.

---

## Design System Requirements

### Typography

**CRITICAL:** All headings use **Lexend font** and CSS variables from `/src/styles/theme.css`.

| Level | HTML | CSS Variable | Font Size | Font Weight | Use Case |
|-------|------|--------------|-----------|-------------|----------|
| 1 | `<h1>` | `var(--text-h1)` | 60px | 700 (bold) | Page title (one per page) |
| 2 | `<h2>` | `var(--text-h2)` | 32px | 600 (semibold) | Section titles |
| 3 | `<h3>` | `var(--text-h3)` | 24px | 600 (semibold) | Subsection titles |
| 4 | `<h4>` | `var(--text-h4)` | 20px | 500 (medium) | Card titles, smaller headings |
| 5 | `<h5>` | `var(--text-h5)` | 18px | 500 (medium) | Small titles |
| 6 | `<h6>` | `var(--text-h6)` | 16px | 500 (medium) | Tiny titles |

**Font Family:** Always `var(--font-primary)` (Lexend)  
**Color:** Inherits from parent or uses `var(--foreground)`

### Spacing
- Bottom margin handled by parent components or block spacing
- Use `wp-margin-bottom-*` utilities

---

## Usage

### Basic Heading
```tsx
import { Heading } from '@/components/blocks/text/Heading';

<Heading level={1}>
  Page Title
</Heading>
```

### Heading with Additional Classes
```tsx
<Heading level={2} className="wp-margin-bottom-4 wp-text-center">
  Section Title
</Heading>
```

### Heading with Custom Styles
```tsx
<Heading level={3} style={{ color: 'var(--primary)' }}>
  Branded Heading
</Heading>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | required | Heading level (h1-h6) |
| `children` | ReactNode | required | Heading text content |
| `className` | string | `''` | Additional CSS classes |
| `style` | CSSProperties | - | Additional inline styles |
| `id` | string | - | ID for anchor links |

---

## WordPress Implementation

In WordPress, this maps to the core **Heading block**:

```html
<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Section Title</h2>
<!-- /wp:heading -->
```

---

## Token Enforcement

✅ **REQUIRED:**
- Lexend font family (`fontFamily: 'var(--font-primary)'`)
- CSS variables for font size (`fontSize: 'var(--text-h1)'`)
- CSS variables for font weight (`fontWeight: 'var(--font-weight-bold)'`)
- Correct semantic HTML element (`<h1>`, `<h2>`, etc.)

❌ **FORBIDDEN:**
- Tailwind font size classes (`text-2xl`, `text-4xl`, etc.)
- Hard-coded pixel font sizes
- Hard-coded font weights (use CSS variables)
- Using Manrope for headings (Manrope is for small text only)
- Skipping heading levels (e.g., h1 → h3)

---

## Accessibility

### Heading Hierarchy
**CRITICAL:** Maintain proper heading order on every page.

✅ **Correct:**
```tsx
<h1>Page Title</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>
```

❌ **Incorrect:**
```tsx
<h1>Page Title</h1>
  <h3>Section 1</h3> {/* Skipped h2 */}
  <h2>Section 2</h2>
```

### Rules
- **Exactly one `<h1>` per page** (page title)
- Never skip heading levels
- Order must be sequential (h1 → h2 → h3)
- Screen readers use headings for navigation

---

**Last Updated:** January 2025
