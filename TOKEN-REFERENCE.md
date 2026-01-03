# LSX Design Token Reference

Quick reference for all design system tokens. All tokens are defined in `/src/styles/theme.css`.

---

## 🎨 Color Tokens

### Background & Foreground

```css
var(--background)           /* Page background */
var(--foreground)           /* Default text color */
```

### Brand Colors

```css
var(--primary)              /* Primary brand color */
var(--primary-foreground)   /* Text on primary */
var(--secondary)            /* Secondary actions */
var(--secondary-foreground) /* Text on secondary */
var(--accent)               /* Highlights, links */
var(--accent-foreground)    /* Text on accent */
```

### Interactive States

```css
var(--muted)                /* Disabled elements */
var(--muted-foreground)     /* Text on muted */
var(--destructive)          /* Error/delete actions */
var(--destructive-foreground) /* Text on destructive */
```

### UI Elements

```css
var(--card)                 /* Card backgrounds */
var(--card-foreground)      /* Text on cards */
var(--popover)              /* Dropdown/tooltip bg */
var(--popover-foreground)   /* Text in popovers */
var(--border)               /* Default borders */
var(--input)                /* Input filled state */
var(--input-background)     /* Input background */
var(--ring)                 /* Focus indicators */
```

### Chart Colors

```css
var(--chart-1)
var(--chart-2)
var(--chart-3)
var(--chart-4)
var(--chart-5)
```

---

## ✍️ Typography Tokens

### Font Families

```css
font-family: 'Lexend', sans-serif;   /* Primary - all content */
font-family: 'Manrope', sans-serif;  /* Secondary - small text only */
```

**CRITICAL:** Only use Lexend and Manrope fonts.

### Font Sizes

```css
var(--text-h1)      /* 60px - Hero titles */
var(--text-h2)      /* 32px - Section headings */
var(--text-h3)      /* 24px - Subsection headings */
var(--text-h4)      /* 20px - Component headings */
var(--text-base)    /* 16px - Body, buttons, labels, inputs */
var(--text-small)   /* 12px - Metadata, captions */
```

### Font Weights

```css
var(--font-weight-regular)  /* 400 - Body text */
var(--font-weight-medium)   /* 500 - Headings h1-h3, labels */
var(--font-weight-bold)     /* 700 - h4 headings */
```

---

## 📏 Spacing

### Tailwind Classes

**Padding:**
```tsx
className="p-4"    /* 16px all sides */
className="px-6"   /* 24px horizontal */
className="py-3"   /* 12px vertical */
className="pt-8"   /* 32px top */
```

**Margin:**
```tsx
className="m-4"    /* 16px all sides */
className="mb-8"   /* 32px bottom */
className="mt-6"   /* 24px top */
```

**Gap:**
```tsx
className="gap-4"     /* 16px gap */
className="gap-x-6"   /* 24px horizontal */
className="gap-y-2"   /* 8px vertical */
```

**Common Spacing Values:**
| Class | Value | Pixels |
|-------|-------|--------|
| `*-1` | 0.25rem | 4px |
| `*-2` | 0.5rem | 8px |
| `*-3` | 0.75rem | 12px |
| `*-4` | 1rem | 16px |
| `*-6` | 1.5rem | 24px |
| `*-8` | 2rem | 32px |
| `*-12` | 3rem | 48px |
| `*-16` | 4rem | 64px |
| `*-20` | 5rem | 80px |

---

## 🔲 Border Radius

```css
var(--radius)       /* 4px - Default */
var(--radius-sm)    /* 2px - Small elements */
var(--radius-md)    /* 4px - Medium elements */
var(--radius-lg)    /* 8px - Large elements (cards) */
var(--radius-xl)    /* 12px - Extra large (modals) */
```

---

## 🌓 Dark Mode

All color tokens automatically adapt to dark mode when `.dark` class is present:

```tsx
<body className="dark">  {/* Activates dark mode */}
  <div style={{ backgroundColor: 'var(--background)' }}>
    {/* Background is white in light mode, dark in dark mode */}
  </div>
</body>
```

---

## 📦 Component Quick Reference

### Button

```tsx
<button 
  className="px-6 py-3"
  style={{
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)',
    borderRadius: 'var(--radius)'
  }}
>
  Click Me
</button>
```

### Heading

```tsx
<h1 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-h1)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--foreground)'
}}>
  Hero Title
</h1>
```

### Card

```tsx
<article 
  className="p-6 space-y-4"
  style={{
    backgroundColor: 'var(--card)',
    color: 'var(--card-foreground)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)'
  }}
>
  <h3>Card Title</h3>
  <p>Card content</p>
</article>
```

### Input

```tsx
<input 
  className="px-4 py-2 w-full"
  style={{
    backgroundColor: 'var(--input-background)',
    color: 'var(--foreground)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)'
  }}
/>
```

### Section

```tsx
<section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

---

## ⚠️ Do's and Don'ts

### ✅ DO

```tsx
// Use design system fonts
fontFamily: 'Lexend, sans-serif'

// Use CSS variables
fontSize: 'var(--text-h1)'
backgroundColor: 'var(--primary)'

// Use Tailwind for spacing
className="p-6 mb-8 gap-4"

// Use CSS variables for radius
borderRadius: 'var(--radius-lg)'
```

### ❌ DON'T

```tsx
// Don't use fonts outside design system
fontFamily: 'Inter'  // ❌

// Don't hard-code sizes
fontSize: '60px'  // ❌

// Don't hard-code colors
backgroundColor: '#1E6AFF'  // ❌

// Don't hard-code spacing
padding: '24px'  // ❌

// Don't hard-code radius
borderRadius: '8px'  // ❌
```

---

## 🎯 Common Patterns

### Hero Section

```tsx
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <h1 style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--font-weight-medium)'
    }}>
      Hero Title
    </h1>
    <p className="mt-6" style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-h4)'
    }}>
      Supporting text
    </p>
    <div className="flex gap-4 mt-8">
      <button className="px-6 py-3" style={{
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        borderRadius: 'var(--radius)'
      }}>
        Primary CTA
      </button>
    </div>
  </div>
</section>
```

### Content Grid

```tsx
<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="mb-12" style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-h2)'
    }}>
      Section Title
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cards */}
    </div>
  </div>
</section>
```

### Form

```tsx
<form className="space-y-6">
  <div className="space-y-2">
    <label style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-medium)'
    }}>
      Email
    </label>
    <input 
      className="w-full px-4 py-2"
      style={{
        backgroundColor: 'var(--input-background)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)'
      }}
    />
  </div>
  <button className="px-6 py-3" style={{
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    borderRadius: 'var(--radius)'
  }}>
    Submit
  </button>
</form>
```

---

## 📚 Full Documentation

- **[Design Tokens](./guidelines/design-tokens/)** — Complete token documentation
- **[Colors](./guidelines/design-tokens/colors.md)** — Color system details
- **[Typography](./guidelines/design-tokens/typography.md)** — Typography system
- **[Spacing](./guidelines/design-tokens/spacing.md)** — Spacing and layout
- **[Components](./guidelines/overview-components.md)** — Component usage

---

**Last Updated:** December 24, 2024  
**Design System:** Lexend/Manrope  
**Source:** `/src/styles/theme.css`
