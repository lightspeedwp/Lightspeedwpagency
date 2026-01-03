# Section Component

**Component Type:** Layout Primitive  
**WordPress Mapping:** Core Group block with spacing presets  
**Location:** `/src/app/components/common/Section.tsx`

---

## Purpose

Provides consistent vertical spacing between major content sections. Enforces design system spacing scale and handles background colors.

---

## Design System Requirements

### Spacing (Vertical Padding)

**CRITICAL:** Use Tailwind spacing classes only. No custom values.

| Spacing Preset | Tailwind Class | Pixel Value | Use Case |
|----------------|----------------|-------------|----------|
| `md` | `py-12` | 48px | Small sections, tight layouts |
| `lg` | `py-16` | 64px | **DEFAULT** - Most sections |
| `xl` | `py-24` | 96px | Major sections, hero areas |

### Typography
- Section does NOT set typography
- Child elements must use CSS variables from theme.css

### Colors

Use CSS variable classes from Tailwind or inline styles:

```tsx
// Background via Tailwind utility
<Section className="bg-muted">

// Background via CSS variable
<Section style={{ backgroundColor: 'var(--muted)' }}>
```

**Available Background Colors:**
- `var(--background)` - Default page background (white)
- `var(--muted)` - Light gray for subtle distinction
- `var(--sidebar)` - Dark background (for footer)
- `var(--primary)` - Brand color background
- `var(--accent)` - Accent color background

---

## Usage

### Basic Section (default spacing)
```tsx
import { Section } from '../common/Section';

<Section>
  <Container>
    <h2>Section Content</h2>
  </Container>
</Section>
```

### Section with Background
```tsx
<Section spacing="lg" className="bg-muted">
  <Container>
    <h2>Highlighted Section</h2>
  </Container>
</Section>
```

### Large Spacing for Hero
```tsx
<Section spacing="xl" className="bg-primary text-primary-foreground">
  <Container>
    <h1>Hero Title</h1>
  </Container>
</Section>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Section content |
| `spacing` | `'md' \| 'lg' \| 'xl'` | `'lg'` | Vertical padding size |
| `className` | string | `''` | Additional classes (background, text color) |
| `id` | string | - | Anchor ID for scroll navigation |
| `style` | CSSProperties | - | Inline styles for custom backgrounds |

---

## WordPress Implementation

In WordPress, this maps to the core **Group block** with spacing:

```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var(--wp--preset--spacing--60)","bottom":"var(--wp--preset--spacing--60)"}}}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60)">
  <!-- Content -->
</div>
<!-- /wp:group -->
```

---

## Token Enforcement

✅ **REQUIRED:**
- Tailwind spacing classes (`py-12`, `py-16`, `py-24`)
- CSS variables for background colors (`var(--muted)`, etc.)
- Semantic HTML (`<section>` element)

❌ **FORBIDDEN:**
- Hard-coded pixel padding values
- Hex color codes for backgrounds
- Using `<div>` instead of `<section>`
- Custom spacing values not in the scale

---

## Accessibility

### Semantic HTML
- Always uses `<section>` element
- Provides semantic structure for screen readers

### Heading Hierarchy
- Each section should contain a heading (h2, h3, etc.)
- Never skip heading levels

### Landmarks
- Sections with `id` can be navigation targets
- Use descriptive IDs (e.g., `id="featured-destinations"`)

---

## Examples

### Alternating Background Sections
```tsx
<>
  <Section spacing="lg">
    <Container>
      <h2>White Background</h2>
    </Container>
  </Section>

  <Section spacing="lg" className="bg-muted">
    <Container>
      <h2>Gray Background</h2>
    </Container>
  </Section>

  <Section spacing="xl" className="bg-primary text-primary-foreground">
    <Container>
      <h2>Brand Color Background</h2>
    </Container>
  </Section>
</>
```

### Section with Scroll Anchor
```tsx
<Section spacing="lg" id="about">
  <Container>
    <h2>About Us</h2>
    <p>This section can be linked to with #about</p>
  </Container>
</Section>
```

---

## Pattern Composition

Sections work with Container to create the full layout structure:

```tsx
<Section spacing="lg" className="bg-muted">
  <Container>
    {/* Pattern content */}
  </Container>
</Section>
```

**Order:**
1. Section (vertical spacing + background)
2. Container (horizontal padding + max-width)
3. Pattern content (actual content)

---

## Design System Integration

This component enforces:
1. **Consistent vertical rhythm** between major sections
2. **Design system spacing scale** (no arbitrary values)
3. **Background color system** using semantic tokens
4. **WordPress block spacing patterns** (maps to Group block)

---

**Last Updated:** December 24, 2024
