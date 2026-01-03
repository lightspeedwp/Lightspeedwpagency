# Design System Update — December 24, 2024

This document summarizes the design system updates made to align with the team's design system standards.

---

## Overview

The LSX Design prototype now uses the **Lexend/Manrope design system** with CSS custom properties and Tailwind CSS utilities. All components have been updated to reference the design system tokens defined in `/src/styles/theme.css`.

---

## Key Changes

### 1. Typography System

**Fonts:**
- **Primary:** Lexend (all content: headings, body, UI)
- **Secondary:** Manrope (small text only)

**Font Sizes (CSS Variables):**
```css
--text-h1: 60px     /* Hero titles */
--text-h2: 32px     /* Section headings */
--text-h3: 24px     /* Subsection headings */
--text-h4: 20px     /* Component headings */
--text-base: 16px   /* Body text, buttons, labels, inputs */
--text-small: 12px  /* Metadata, captions (Manrope font) */
```

**Font Weights (CSS Variables):**
```css
--font-weight-regular: 400  /* Body text, buttons, inputs */
--font-weight-medium: 500   /* Headings h1-h3, labels */
--font-weight-bold: 700     /* h4 headings */
```

---

### 2. Color System

All colors use semantic CSS custom properties:

**Core Colors:**
```css
--background           /* Page background */
--foreground           /* Default text */
--primary              /* Primary brand color */
--primary-foreground   /* Text on primary */
--secondary            /* Secondary actions */
--secondary-foreground /* Text on secondary */
--accent               /* Highlights, links */
--accent-foreground    /* Text on accent */
--muted                /* Disabled elements */
--muted-foreground     /* Text on muted */
```

**Interactive Colors:**
```css
--destructive            /* Error/delete actions */
--destructive-foreground /* Text on destructive */
--border                 /* Default borders */
--input                  /* Input filled state */
--input-background       /* Input background */
--ring                   /* Focus indicators */
```

**Container Colors:**
```css
--card                /* Card backgrounds */
--card-foreground     /* Text on cards */
--popover             /* Dropdown/tooltip bg */
--popover-foreground  /* Text in popovers */
```

---

### 3. Spacing & Layout

**Border Radius (CSS Variables):**
```css
--radius: 4px                          /* Default */
--radius-sm: calc(var(--radius) - 2px) /* 2px */
--radius-md: var(--radius)             /* 4px */
--radius-lg: calc(var(--radius) + 4px) /* 8px */
--radius-xl: calc(var(--radius) + 8px) /* 12px */
```

**Spacing:**
Use Tailwind classes for all spacing:
- Padding: `p-*`, `px-*`, `py-*`, `pt-*`, etc.
- Margin: `m-*`, `mx-*`, `my-*`, `mt-*`, etc.
- Gap: `gap-*`, `gap-x-*`, `gap-y-*`

---

### 4. Component Updates

All common components updated to use design system tokens:

**Heading Component:**
```tsx
// Now uses:
fontFamily: 'Lexend, sans-serif'
fontSize: 'var(--text-h1)' | 'var(--text-h2)' | 'var(--text-h3)' | 'var(--text-h4)'
fontWeight: 'var(--font-weight-medium)' | 'var(--font-weight-bold)'
color: 'var(--foreground)'
```

**Button Component:**
```tsx
// Now uses:
className="px-6 py-3"  // Tailwind spacing
backgroundColor: 'var(--primary)' | 'var(--secondary)' | 'var(--destructive)'
color: 'var(--primary-foreground)' | 'var(--secondary-foreground)'
fontFamily: 'Lexend, sans-serif'
fontSize: 'var(--text-base)'
borderRadius: 'var(--radius)'
```

**Container Component:**
```tsx
// Now uses:
className="mx-auto w-full px-4 max-w-7xl"  // Tailwind
```

**Section Component:**
```tsx
// Now uses:
className="py-16 bg-background"  // Tailwind spacing + background
```

---

## Usage Guidelines

### Typography

```tsx
// Headings - always use Heading component
<Heading level={1}>Hero Title</Heading>
<Heading level={2}>Section Title</Heading>

// Or with inline styles
<h1 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-h1)',
  fontWeight: 'var(--font-weight-medium)'
}}>

// Body text
<p style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-base)',
  fontWeight: 'var(--font-weight-regular)'
}}>

// Small text (uses Manrope)
<small style={{
  fontFamily: 'Manrope, sans-serif',
  fontSize: 'var(--text-small)'
}}>
```

---

### Colors

```tsx
// Buttons
<button style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>

// Or use Tailwind classes
<button className="bg-primary text-primary-foreground">

// Cards
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)',
  border: '1px solid var(--border)'
}}>

// Or use Tailwind
<div className="bg-card text-card-foreground border border-border">
```

---

### Spacing

```tsx
// Use Tailwind classes
<div className="p-6 gap-4 mb-8">
<section className="py-16">
<button className="px-6 py-3">

// Border radius - use CSS variables
<div style={{ borderRadius: 'var(--radius)' }}>
<article style={{ borderRadius: 'var(--radius-lg)' }}>
```

---

## Migration from Old System

### Before (Old WordPress Preset System)

```tsx
// Old spacing
paddingTop: 'var(--wp--preset--spacing--60)'
fontSize: 'var(--wp--preset--font-size--800)'
color: 'var(--wp--preset--color--primary)'
```

### After (New Design System)

```tsx
// New spacing - Tailwind classes
className="py-16"  // or pt-16, pb-16

// New typography - CSS variables
fontSize: 'var(--text-h1)'
fontFamily: 'Lexend, sans-serif'

// New colors - CSS variables
color: 'var(--primary)'
backgroundColor: 'var(--background)'
```

---

## Design Token Documentation

All design tokens are fully documented in `/guidelines/design-tokens/`:

- **[colors.md](./guidelines/design-tokens/colors.md)** — Complete color system with semantic roles
- **[typography.md](./guidelines/design-tokens/typography.md)** — Font families, sizes, weights
- **[spacing.md](./guidelines/design-tokens/spacing.md)** — Tailwind spacing + border radius

---

## Component Documentation

All component guidelines have been updated:

- **[Heading](./guidelines/overview-components.md)** — Typography enforcement
- **[Button](./guidelines/overview-components.md)** — Design system colors and spacing
- **[Container](./guidelines/overview-components.md)** — Tailwind layout
- **[Section](./guidelines/overview-components.md)** — Tailwind padding and backgrounds

---

## Dark Mode Support

The design system includes full dark mode support via the `.dark` class:

```tsx
// Automatically switches based on .dark class
<body style={{
  backgroundColor: 'var(--background)',  // White in light, dark in dark mode
  color: 'var(--foreground)'             // Dark in light, white in dark mode
}}>
```

**Dark mode colors are defined in `/src/styles/theme.css`**

---

## Validation Checklist

When creating new components, verify:

- [ ] Uses **only** Lexend or Manrope fonts
- [ ] Typography uses `var(--text-*)` variables
- [ ] Colors use `var(--*)` variables (no hex codes)
- [ ] Spacing uses Tailwind classes
- [ ] Border radius uses `var(--radius*)` variables
- [ ] No hard-coded pixel values
- [ ] Proper color pairing (e.g., `--primary` + `--primary-foreground`)

---

## Benefits of New System

1. **Consistent Design:** All components inherit from design system
2. **Easy Theming:** Update theme.css to change entire design
3. **Dark Mode:** Built-in support with automatic color switching
4. **Tailwind Integration:** Leverage Tailwind utilities for spacing
5. **Type Safety:** CSS variables provide autocomplete in modern editors
6. **Maintainable:** Single source of truth in theme.css

---

## Questions?

See the comprehensive documentation:

- **[Guidelines.md](./guidelines/Guidelines.md)** — Complete system overview
- **[Design Tokens](./guidelines/design-tokens/)** — Token documentation
- **[Overview Components](./guidelines/overview-components.md)** — Component usage

---

**Updated:** December 24, 2024  
**Design System:** Lexend/Manrope  
**Framework:** Tailwind CSS + CSS Variables
