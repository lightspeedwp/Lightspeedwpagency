# Heading Component

**Component Type:** Typography Primitive  
**WordPress Mapping:** Core Heading block  
**Location:** `/src/app/components/common/Heading.tsx`

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

**Font Family:** Always `Lexend, sans-serif`  
**Color:** Inherits from parent or uses `var(--foreground)`

### Spacing
- Bottom margin handled by parent components
- Use Tailwind classes for custom spacing (`mb-4`, `mt-8`, etc.)

---

## Usage

### Basic Heading
```tsx
import { Heading } from '../common/Heading';

<Heading level={1}>
  Page Title
</Heading>
```

### Heading with Additional Classes
```tsx
<Heading level={2} className="mb-8 text-center">
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
| `level` | `1 \| 2 \| 3 \| 4` | required | Heading level (h1-h4) |
| `children` | ReactNode | required | Heading text content |
| `className` | string | `''` | Additional Tailwind classes |
| `style` | CSSProperties | - | Additional inline styles |

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
- Lexend font family (`fontFamily: 'Lexend, sans-serif'`)
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

## Examples

### Page Header
```tsx
<Section spacing="lg">
  <Container>
    <Heading level={1}>
      Discover Your Next Adventure
    </Heading>
    <p style={{ 
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-h4)',
      color: 'var(--muted-foreground)'
    }}>
      Supporting text uses Lexend at --text-h4 size
    </p>
  </Container>
</Section>
```

### Section with Multiple Headings
```tsx
<Section spacing="lg">
  <Container>
    <Heading level={2} className="mb-8">
      Featured Destinations
    </Heading>
    
    <div className="grid grid-cols-3 gap-8">
      <article>
        <Heading level={3}>
          Safari in Tanzania
        </Heading>
        <p>Card description...</p>
      </article>
      {/* More cards */}
    </div>
  </Container>
</Section>
```

### Centered Heading with Brand Color
```tsx
<Section spacing="xl" className="bg-primary text-primary-foreground">
  <Container>
    <Heading 
      level={2} 
      className="text-center"
      style={{ color: 'var(--primary-foreground)' }}
    >
      Ready to Start Your Journey?
    </Heading>
  </Container>
</Section>
```

---

## Common Patterns

### Archive Header
```tsx
<Heading level={1}>
  African Destinations
</Heading>
<p style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-base)',
  color: 'var(--muted-foreground)'
}}>
  Explore {count} curated destinations
</p>
```

### Card Title
```tsx
<article>
  <Heading level={3}>
    Maasai Mara National Reserve
  </Heading>
  <p style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)'
  }}>
    Experience one of Africa's most spectacular wildlife reserves.
  </p>
</article>
```

---

## Design System Integration

This component enforces:
1. **Lexend font** for all headings (never Manrope)
2. **CSS variable typography** from theme.css
3. **Semantic HTML** for accessibility
4. **Proper heading hierarchy** on every page
5. **No Tailwind font classes** (text-2xl, etc.)

---

**Last Updated:** December 24, 2024
