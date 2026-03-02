# Design System Do's and Don'ts

**Purpose:** Visual guide showing correct vs incorrect CSS variable usage.

**Rule:** ALWAYS use CSS variables. NEVER hardcode values.

**Last Updated:** March 2, 2026

---

## Typography

### Font Families

#### ✅ DO: Use CSS Variables

```tsx
// ✅ CORRECT
<h1 style={{ fontFamily: 'var(--font-primary)' }}>
  Page Title
</h1>

<p style={{ fontFamily: 'var(--font-secondary)' }}>
  Small caption text
</p>

<code style={{ fontFamily: 'var(--font-mono)' }}>
  const code = 'example';
</code>
```

#### ❌ DON'T: Hardcode Font Names

```tsx
// ❌ WRONG - Hardcoded font family
<h1 style={{ fontFamily: 'Lexend, sans-serif' }}>
  Page Title
</h1>

// ❌ WRONG - Hardcoded font family
<p style={{ fontFamily: 'Manrope, sans-serif' }}>
  Small caption text
</p>

// ❌ WRONG - Generic font family
<h1 style={{ fontFamily: 'sans-serif' }}>
  Page Title
</h1>
```

**Why?** Users can't change fonts by editing CSS files if you hardcode font names.

---

### Font Sizes

#### ✅ DO: Use CSS Variables

```tsx
// ✅ CORRECT - Fluid responsive headings
<h1 style={{ fontSize: 'var(--text-h1)' }}>Hero Title</h1>
<h2 style={{ fontSize: 'var(--text-h2)' }}>Section Heading</h2>
<h3 style={{ fontSize: 'var(--text-h3)' }}>Subsection</h3>

// ✅ CORRECT - Body text
<p style={{ fontSize: 'var(--text-base)' }}>Body paragraph</p>
<p style={{ fontSize: 'var(--text-lg)' }}>Large text</p>
<span style={{ fontSize: 'var(--text-sm)' }}>Small text</span>

// ✅ CORRECT - Lead text
<p style={{ fontSize: 'var(--text-lead)' }}>Hero subtitle</p>
```

#### ❌ DON'T: Hardcode Pixel Values

```tsx
// ❌ WRONG - Hardcoded pixel size
<h1 style={{ fontSize: '64px' }}>Hero Title</h1>

// ❌ WRONG - Hardcoded rem size
<h2 style={{ fontSize: '2rem' }}>Section Heading</h2>

// ❌ WRONG - Hardcoded pixel size
<p style={{ fontSize: '16px' }}>Body paragraph</p>

// ❌ WRONG - Hardcoded pixel size
<span style={{ fontSize: '14px' }}>Small text</span>
```

**Why?** Users can't adjust typography scale if you hardcode sizes. Fluid responsive sizing breaks.

---

### Font Weights

#### ✅ DO: Use CSS Variables

```tsx
// ✅ CORRECT
<h1 style={{ fontWeight: 'var(--font-weight-medium)' }}>
  Heading
</h1>

<button style={{ fontWeight: 'var(--font-weight-semibold)' }}>
  Button Text
</button>

<p style={{ fontWeight: 'var(--font-weight-regular)' }}>
  Body text
</p>

<strong style={{ fontWeight: 'var(--font-weight-bold)' }}>
  Bold text
</strong>
```

#### ❌ DON'T: Hardcode Numeric Values

```tsx
// ❌ WRONG - Hardcoded weight
<h1 style={{ fontWeight: 500 }}>
  Heading
</h1>

// ❌ WRONG - Hardcoded weight
<button style={{ fontWeight: 600 }}>
  Button Text
</button>

// ❌ WRONG - Hardcoded weight
<p style={{ fontWeight: 400 }}>
  Body text
</p>

// ❌ WRONG - String weight
<strong style={{ fontWeight: 'bold' }}>
  Bold text
</strong>
```

**Why?** Users can't adjust font weights across the site if you hardcode values.

---

## Colors

### Background Colors

#### ✅ DO: Use Semantic CSS Variables

```tsx
// ✅ CORRECT - Semantic colors
<div style={{ backgroundColor: 'var(--background)' }}>
  Page background
</div>

<div style={{ backgroundColor: 'var(--card)' }}>
  Card background
</div>

<button style={{ backgroundColor: 'var(--primary)' }}>
  Primary button
</button>

<div style={{ backgroundColor: 'var(--muted)' }}>
  Muted section
</div>
```

#### ❌ DON'T: Hardcode Hex Colors

```tsx
// ❌ WRONG - Hardcoded hex color
<div style={{ backgroundColor: '#FFFFFF' }}>
  Page background
</div>

// ❌ WRONG - Hardcoded hex color
<div style={{ backgroundColor: '#F9FAFB' }}>
  Card background
</div>

// ❌ WRONG - Hardcoded hex color
<button style={{ backgroundColor: '#1E6FFF' }}>
  Primary button
</button>

// ❌ WRONG - Hardcoded hex color
<div style={{ backgroundColor: '#F3F4F6' }}>
  Muted section
</div>
```

**Why?** Users can't change the color scheme if you hardcode colors. Dark mode breaks.

---

### Text Colors

#### ✅ DO: Use Semantic CSS Variables

```tsx
// ✅ CORRECT - Semantic text colors
<p style={{ color: 'var(--foreground)' }}>
  Primary text
</p>

<button style={{ 
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)' 
}}>
  Button
</button>

<span style={{ color: 'var(--muted-foreground)' }}>
  Muted text
</span>

<div style={{ color: 'var(--destructive)' }}>
  Error message
</div>
```

#### ❌ DON'T: Hardcode Hex Colors

```tsx
// ❌ WRONG - Hardcoded hex color
<p style={{ color: '#090909' }}>
  Primary text
</p>

// ❌ WRONG - Hardcoded hex color
<button style={{ 
  backgroundColor: '#1E6FFF',
  color: '#FFFFFF' 
}}>
  Button
</button>

// ❌ WRONG - Hardcoded hex color
<span style={{ color: '#6B7280' }}>
  Muted text
</span>

// ❌ WRONG - Hardcoded hex color
<div style={{ color: '#EF4444' }}>
  Error message
</div>
```

**Why?** Users can't customize text colors or switch themes if you hardcode colors.

---

## Spacing

### Padding

#### ✅ DO: Use Spacing Tokens

```tsx
// ✅ CORRECT - Spacing tokens
<div style={{ padding: 'var(--spacing-6)' }}>
  Component padding (24px)
</div>

<section style={{ padding: 'var(--spacing-8)' }}>
  Section padding (32px)
</section>

<button style={{ 
  paddingLeft: 'var(--spacing-6)',
  paddingRight: 'var(--spacing-6)',
  paddingTop: 'var(--spacing-3)',
  paddingBottom: 'var(--spacing-3)'
}}>
  Button
</button>
```

#### ❌ DON'T: Hardcode Pixel Values

```tsx
// ❌ WRONG - Hardcoded pixels
<div style={{ padding: '24px' }}>
  Component padding
</div>

// ❌ WRONG - Hardcoded pixels
<section style={{ padding: '32px' }}>
  Section padding
</section>

// ❌ WRONG - Hardcoded pixels
<button style={{ 
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingTop: '12px',
  paddingBottom: '12px'
}}>
  Button
</button>
```

**Why?** Users can't adjust spacing scale if you hardcode pixel values.

---

### Margin

#### ✅ DO: Use Spacing Tokens

```tsx
// ✅ CORRECT - Spacing tokens
<h2 style={{ marginBottom: 'var(--spacing-4)' }}>
  Heading
</h2>

<section style={{ marginBottom: 'var(--spacing-16)' }}>
  Section spacing
</section>

<div style={{ margin: '0 auto' }}>
  Centered (margin auto is OK)
</div>
```

#### ❌ DON'T: Hardcode Pixel Values

```tsx
// ❌ WRONG - Hardcoded pixels
<h2 style={{ marginBottom: '16px' }}>
  Heading
</h2>

// ❌ WRONG - Hardcoded pixels
<section style={{ marginBottom: '64px' }}>
  Section spacing
</section>

// ❌ WRONG - Hardcoded pixels
<div style={{ margin: '0 32px' }}>
  Horizontal margin
</div>
```

**Why?** Users can't adjust spacing rhythm if you hardcode margins.

---

### Gap (Grid/Flex)

#### ✅ DO: Use Spacing Tokens

```tsx
// ✅ CORRECT - Spacing tokens
<div style={{ 
  display: 'flex',
  gap: 'var(--spacing-4)' 
}}>
  Flex gap (16px)
</div>

<div style={{ 
  display: 'grid',
  gap: 'var(--spacing-8)' 
}}>
  Grid gap (32px)
</div>

<div style={{ 
  display: 'flex',
  columnGap: 'var(--spacing-6)',
  rowGap: 'var(--spacing-4)'
}}>
  Asymmetric gap
</div>
```

#### ❌ DON'T: Hardcode Pixel Values

```tsx
// ❌ WRONG - Hardcoded pixels
<div style={{ 
  display: 'flex',
  gap: '16px' 
}}>
  Flex gap
</div>

// ❌ WRONG - Hardcoded pixels
<div style={{ 
  display: 'grid',
  gap: '32px' 
}}>
  Grid gap
</div>

// ❌ WRONG - Hardcoded pixels
<div style={{ 
  display: 'flex',
  columnGap: '24px',
  rowGap: '16px'
}}>
  Asymmetric gap
</div>
```

**Why?** Users can't adjust grid/flex spacing if you hardcode gap values.

---

## Border Radius

#### ✅ DO: Use Radius Tokens

```tsx
// ✅ CORRECT - Radius tokens
<div style={{ borderRadius: 'var(--radius)' }}>
  Default radius (4px)
</div>

<div style={{ borderRadius: 'var(--radius-lg)' }}>
  Large radius (8px) - Cards
</div>

<button style={{ borderRadius: 'var(--radius-full)' }}>
  Pill button
</button>

<img style={{ borderRadius: 'var(--radius-full)' }} />
  {/* Avatar (fully rounded) */}
```

#### ❌ DON'T: Hardcode Pixel Values

```tsx
// ❌ WRONG - Hardcoded pixels
<div style={{ borderRadius: '4px' }}>
  Default radius
</div>

// ❌ WRONG - Hardcoded pixels
<div style={{ borderRadius: '8px' }}>
  Large radius
</div>

// ❌ WRONG - Hardcoded pixels
<button style={{ borderRadius: '9999px' }}>
  Pill button
</button>

// ❌ WRONG - Hardcoded percentage
<img style={{ borderRadius: '50%' }} />
```

**Why?** Users can't adjust border radius scale if you hardcode values.

---

## Shadows

#### ✅ DO: Use Shadow Tokens

```tsx
// ✅ CORRECT - Shadow tokens
<div style={{ boxShadow: 'var(--shadow-sm)' }}>
  Subtle shadow
</div>

<div style={{ boxShadow: 'var(--shadow-md)' }}>
  Card shadow
</div>

<div style={{ boxShadow: 'var(--shadow-lg)' }}>
  Modal shadow
</div>

<div style={{ boxShadow: 'var(--shadow-2xl)' }}>
  Popover shadow
</div>
```

#### ❌ DON'T: Hardcode Shadow Values

```tsx
// ❌ WRONG - Hardcoded shadow
<div style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
  Subtle shadow
</div>

// ❌ WRONG - Hardcoded shadow
<div style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
  Card shadow
</div>

// ❌ WRONG - Hardcoded shadow
<div style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
  Modal shadow
</div>
```

**Why?** Users can't customize shadow depth if you hardcode shadow values.

---

## Layout & Utility Classes

### Grid Layouts

#### ✅ DO: Use WordPress Utility Classes

```tsx
// ✅ CORRECT - WordPress utilities
<div className="wp-grid-2-cols">
  {/* 1 col mobile → 2 cols desktop */}
</div>

<div className="wp-grid-3-cols">
  {/* 1 col mobile → 2 cols tablet → 3 cols desktop */}
</div>

<div className="wp-grid-4-cols">
  {/* 1 col mobile → 2 cols tablet → 4 cols desktop */}
</div>
```

#### ❌ DON'T: Use Tailwind Classes

```tsx
// ❌ WRONG - Tailwind classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* DON'T USE TAILWIND */}
</div>

// ❌ WRONG - Tailwind classes
<div className="grid grid-cols-3">
  {/* DON'T USE TAILWIND */}
</div>

// ❌ WRONG - Tailwind classes
<div className="grid gap-4">
  {/* DON'T USE TAILWIND */}
</div>
```

**Why?** WordPress utilities use CSS variables internally. Tailwind classes don't.

---

### Max Width Containers

#### ✅ DO: Use WordPress Utility Classes

```tsx
// ✅ CORRECT - WordPress utilities
<div className="wp-max-w-3xl">
  {/* 768px max-width, centered */}
</div>

<div className="wp-max-w-4xl">
  {/* 896px max-width, centered */}
</div>

<div className="wp-max-w-6xl">
  {/* 1152px max-width, centered */}
</div>
```

#### ❌ DON'T: Use Tailwind Classes

```tsx
// ❌ WRONG - Tailwind classes
<div className="max-w-3xl mx-auto">
  {/* DON'T USE TAILWIND */}
</div>

// ❌ WRONG - Tailwind classes
<div className="max-w-6xl mx-auto">
  {/* DON'T USE TAILWIND */}
</div>

// ❌ WRONG - Inline style
<div style={{ maxWidth: '1152px', margin: '0 auto' }}>
  {/* Should use utility class instead */}
</div>
```

**Why?** WordPress utilities are theme.json compatible. Tailwind classes aren't.

---

### Text Alignment

#### ✅ DO: Use WordPress Utility Classes

```tsx
// ✅ CORRECT - WordPress utilities
<div className="wp-text-center">
  Centered text
</div>

<div className="wp-text-left">
  Left-aligned text
</div>

<div className="wp-text-right">
  Right-aligned text
</div>
```

#### ❌ DON'T: Use Tailwind Classes

```tsx
// ❌ WRONG - Tailwind classes
<div className="text-center">
  Centered text
</div>

// ❌ WRONG - Tailwind classes
<div className="text-left">
  Left-aligned text
</div>

// ❌ WRONG - Tailwind classes
<div className="text-right">
  Right-aligned text
</div>
```

**Why?** WordPress utilities ensure consistency across the system.

---

## Complete Component Comparison

### ✅ DO: Perfect Design System Compliance

```tsx
import '@/styles/components/example-card.css';

export const ExampleCard = ({ title, description }) => {
  return (
    <div 
      className="example-card wp-max-w-4xl"
      style={{
        padding: 'var(--spacing-8)',
        backgroundColor: 'var(--card)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      <h2 style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-h2)',
        fontWeight: 'var(--font-weight-medium)',
        lineHeight: 'var(--line-height-snug)',
        marginBottom: 'var(--spacing-4)',
        color: 'var(--card-foreground)'
      }}>
        {title}
      </h2>

      <p style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-base)',
        lineHeight: 'var(--line-height-normal)',
        color: 'var(--card-foreground)'
      }}>
        {description}
      </p>

      <button 
        className="example-card__button"
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-semibold)',
          padding: 'var(--spacing-3) var(--spacing-6)',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          borderRadius: 'var(--radius)',
          marginTop: 'var(--spacing-6)'
        }}
      >
        Learn More
      </button>
    </div>
  );
};
```

**✅ Perfect!** Every value uses CSS variables. Users have 100% control.

---

### ❌ DON'T: Hardcoded Values (Non-Compliant)

```tsx
// ❌ WRONG - Violates design system
export const ExampleCard = ({ title, description }) => {
  return (
    <div 
      className="max-w-4xl mx-auto"  // ❌ Tailwind class
      style={{
        padding: '32px',              // ❌ Hardcoded px
        backgroundColor: '#F9FAFB',   // ❌ Hardcoded hex
        borderRadius: '8px',          // ❌ Hardcoded px
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'  // ❌ Hardcoded
      }}
    >
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',  // ❌ Hardcoded font
        fontSize: '48px',                  // ❌ Hardcoded px
        fontWeight: 500,                   // ❌ Hardcoded weight
        lineHeight: 1.25,                  // ❌ Hardcoded line-height
        marginBottom: '16px',              // ❌ Hardcoded px
        color: '#090909'                   // ❌ Hardcoded hex
      }}>
        {title}
      </h2>

      <p style={{
        fontFamily: 'Lexend, sans-serif',  // ❌ Hardcoded font
        fontSize: '16px',                  // ❌ Hardcoded px
        lineHeight: 1.5,                   // ❌ Hardcoded line-height
        color: '#090909'                   // ❌ Hardcoded hex
      }}>
        {description}
      </p>

      <button style={{
        fontFamily: 'Lexend, sans-serif',  // ❌ Hardcoded font
        fontSize: '16px',                  // ❌ Hardcoded px
        fontWeight: 600,                   // ❌ Hardcoded weight
        padding: '12px 24px',              // ❌ Hardcoded px
        backgroundColor: '#1E6FFF',        // ❌ Hardcoded hex
        color: '#FFFFFF',                  // ❌ Hardcoded hex
        borderRadius: '4px',               // ❌ Hardcoded px
        marginTop: '24px'                  // ❌ Hardcoded px
      }}>
        Learn More
      </button>
    </div>
  );
};
```

**❌ Terrible!** Users can't customize anything. Dark mode breaks. Not theme.json compatible.

---

## Summary Table

| Category | ✅ DO | ❌ DON'T |
|----------|-------|----------|
| **Font Family** | `var(--font-primary)` | `'Lexend, sans-serif'` |
| **Font Size** | `var(--text-h1)` | `'64px'` |
| **Font Weight** | `var(--font-weight-medium)` | `500` |
| **Color** | `var(--primary)` | `'#1E6FFF'` |
| **Background** | `var(--background)` | `'#FFFFFF'` |
| **Padding** | `var(--spacing-6)` | `'24px'` |
| **Margin** | `var(--spacing-8)` | `'32px'` |
| **Gap** | `var(--spacing-4)` | `'16px'` |
| **Border Radius** | `var(--radius-lg)` | `'8px'` |
| **Shadow** | `var(--shadow-md)` | `'0 4px 6px rgba(0,0,0,0.1)'` |
| **Grid Layout** | `className="wp-grid-3-cols"` | `className="grid grid-cols-3"` |
| **Max Width** | `className="wp-max-w-6xl"` | `className="max-w-6xl mx-auto"` |
| **Text Align** | `className="wp-text-center"` | `className="text-center"` |

---

## Benefits Comparison

### ✅ With CSS Variables (Compliant)

- ✅ **User Control:** Edit CSS files to restyle entire site (30 seconds)
- ✅ **Theme Switching:** Light/dark mode works automatically
- ✅ **WordPress FSE:** Direct theme.json mapping
- ✅ **Maintainable:** Single source of truth
- ✅ **Scalable:** Update 1 variable = update 1000+ instances
- ✅ **Responsive:** Fluid typography with clamp() works perfectly
- ✅ **Accessible:** Consistent contrast ratios maintained

### ❌ Without CSS Variables (Non-Compliant)

- ❌ **No User Control:** Must edit 130+ files to change styles (60+ minutes)
- ❌ **Broken Themes:** Dark mode doesn't work (hardcoded colors)
- ❌ **No WordPress FSE:** Can't generate theme.json
- ❌ **Unmaintainable:** Scattered hardcoded values everywhere
- ❌ **Not Scalable:** Find/replace nightmare across hundreds of files
- ❌ **Not Responsive:** Hardcoded pixel sizes don't scale
- ❌ **Accessibility Issues:** Contrast ratios break when colors change

---

## Quick Reference

**Typography:**
- Fonts: `var(--font-primary)`, `var(--font-secondary)`
- Sizes: `var(--text-h1)`, `var(--text-base)`, `var(--text-sm)`
- Weights: `var(--font-weight-medium)`, `var(--font-weight-semibold)`

**Colors:**
- Semantic: `var(--primary)`, `var(--foreground)`, `var(--background)`
- Functional: `var(--success)`, `var(--destructive)`, `var(--warning)`

**Spacing:**
- Scale: `var(--spacing-4)`, `var(--spacing-8)`, `var(--spacing-16)`
- Semantic: `var(--spacing-sm)`, `var(--spacing-md)`, `var(--spacing-lg)`

**Layout:**
- Grids: `.wp-grid-2-cols`, `.wp-grid-3-cols`, `.wp-grid-4-cols`
- Max Width: `.wp-max-w-3xl`, `.wp-max-w-4xl`, `.wp-max-w-6xl`
- Alignment: `.wp-text-center`, `.wp-text-left`, `.wp-text-right`

---

**Last Updated:** March 2, 2026  
**Compliance Status:** 100% ✅  
**Zero Violations:** Entire codebase compliant
