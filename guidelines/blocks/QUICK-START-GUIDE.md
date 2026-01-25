# WordPress Blocks — Quick Start Guide

**5-minute guide to creating WordPress blocks as React components**

## 🎯 Quick Overview

All UI components MUST be WordPress/WooCommerce blocks with:
- Dedicated CSS files
- CSS variables ONLY (no hardcoded values)
- WordPress utility classes (no Tailwind)
- Approved fonts ONLY (var(--font-primary) or var(--font-secondary))

## 📖 Before You Start

**ALWAYS read these first:**

1. **Category README** → `/guidelines/blocks/{category}/README.md`
2. **Specific block guideline** → `/guidelines/blocks/{category}/{block-name}.md`

**Example:**
```bash
# Creating a Paragraph block?
1. Read: /guidelines/blocks/text/README.md
2. Read: /guidelines/blocks/text/paragraph.md
3. Then create the component
```

## 📁 File Structure

### Component Location

```
/src/app/components/blocks/
├── text/         # Paragraph, Heading, List, Quote, etc.
├── media/        # Image, Gallery, Video, etc.
├── design/       # Buttons, Columns, Group, Row, Stack, Grid
├── theme/        # Navigation, Site Logo, Search, etc.
├── widgets/      # Latest Posts, Social Icons, etc.
├── embed/        # YouTube, Vimeo, Twitter, etc.
└── woocommerce/  # Product Grid, Cart, Checkout, etc.
```

### CSS Location

```
/src/styles/blocks/
├── text/         # paragraph.css, heading.css, etc.
├── media/        # image.css, gallery.css, etc.
├── design/       # buttons.css, columns.css, etc.
├── theme/        # navigation.css, site-logo.css, etc.
├── widgets/      # latest-posts.css, social-icons.css, etc.
├── embed/        # youtube.css, vimeo.css, etc.
└── woocommerce/  # product-grid.css, cart.css, etc.
```

## 🧩 Component Template

```tsx
/**
 * BlockName Component
 * 
 * WordPress core block: wp:block-name
 * 
 * @see /guidelines/blocks/{category}/block-name.md
 */

import '@/styles/blocks/{category}/block-name.css';

/**
 * Props for BlockName component
 */
export interface BlockNameProps {
  /** Main content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles for dynamic values ONLY */
  style?: React.CSSProperties;
}

/**
 * BlockName block component
 */
export const BlockName = ({ 
  children, 
  className = '',
  style 
}: BlockNameProps) => {
  return (
    <div className={`wp-block-block-name ${className}`} style={style}>
      {children}
    </div>
  );
};
```

## 🎨 CSS Template

```css
/**
 * BlockName Block Styles
 * 
 * WordPress block: .wp-block-block-name
 * 
 * @see /guidelines/blocks/{category}/block-name.md
 */

.wp-block-block-name {
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-regular);
  
  /* Colors */
  color: var(--foreground);
  background-color: var(--background);
  
  /* Spacing */
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-8);
  gap: var(--spacing-4);
  
  /* Borders */
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

/* Hover states */
.wp-block-block-name:hover {
  border-color: var(--primary);
}

/* Focus states */
.wp-block-block-name:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Responsive */
@media (max-width: 768px) {
  .wp-block-block-name {
    padding: var(--spacing-4);
  }
}
```

## ✅ Critical Requirements

### 1. CSS Variables ONLY

```tsx
// ✅ CORRECT - CSS variables
fontFamily: 'var(--font-primary)'
fontSize: 'var(--text-base)'
color: 'var(--foreground)'
padding: 'var(--spacing-6)'

// ❌ WRONG - Hardcoded values
fontFamily: 'Lexend, sans-serif'
fontSize: '16px'
color: '#333'
padding: '24px'
```

### 2. WordPress Utility Classes

```tsx
// ✅ CORRECT - WordPress utilities
<div className="wp-grid-3-cols">
<div className="wp-max-w-6xl">
<div className="wp-text-center">

// ❌ WRONG - Tailwind classes
<div className="grid grid-cols-3 gap-8">
<div className="max-w-6xl mx-auto">
<div className="text-center">
```

### 3. Approved Fonts ONLY

```tsx
// ✅ CORRECT - CSS variables
fontFamily: 'var(--font-primary)'    // Lexend
fontFamily: 'var(--font-secondary)'  // Manrope (small text only)

// ❌ WRONG - Never hardcode
fontFamily: 'Lexend, sans-serif'
fontFamily: 'Manrope, sans-serif'
fontFamily: 'Arial, sans-serif'
```

### 4. WordPress Block Naming

```tsx
// ✅ CORRECT - WordPress block classes
.wp-block-paragraph
.wp-block-heading
.wp-block-image
.wc-block-product-grid  // WooCommerce blocks

// ❌ WRONG - Generic classes
.paragraph
.heading
.image
```

## 🎯 Common Design Tokens

### Typography

```css
/* Font families */
var(--font-primary)      /* Lexend - headings, body text */
var(--font-secondary)    /* Manrope - small text only */

/* Font sizes */
var(--text-h1)          /* 60px - page titles */
var(--text-h2)          /* 32px - section headings */
var(--text-h3)          /* 24px - subsection headings */
var(--text-h4)          /* 20px - card headings */
var(--text-base)        /* 16px - body text */
var(--text-lg)          /* 18px - large text */
var(--text-sm)          /* 14px - small text */

/* Line heights */
var(--line-height-tight)    /* 1.25 - headings */
var(--line-height-normal)   /* 1.5 - body text */
var(--line-height-relaxed)  /* 1.75 - long-form */

/* Font weights */
var(--font-weight-regular)  /* 400 - body text */
var(--font-weight-medium)   /* 500 - headings */
var(--font-weight-semibold) /* 600 - emphasis */
```

### Colors

```css
/* Text colors */
var(--foreground)              /* Primary text */
var(--foreground-subtle)       /* Secondary text */
var(--primary-foreground)      /* On primary backgrounds */

/* Background colors */
var(--background)              /* Main background */
var(--background-subtle)       /* Subtle background */

/* UI colors */
var(--primary)                 /* Primary brand color */
var(--primary-hover)           /* Primary hover state */
var(--border)                  /* Borders */
```

### Spacing

```css
/* Common spacing values */
var(--spacing-2)   /* 8px */
var(--spacing-3)   /* 12px */
var(--spacing-4)   /* 16px */
var(--spacing-6)   /* 24px */
var(--spacing-8)   /* 32px */
var(--spacing-12)  /* 48px */
```

### Borders

```css
/* Border radius */
var(--radius)      /* 4px - default */
var(--radius-lg)   /* 8px - large */
var(--radius-xl)   /* 12px - extra large */

/* Shadows */
var(--shadow-sm)   /* Small shadow */
var(--shadow-md)   /* Medium shadow */
var(--shadow-lg)   /* Large shadow */
```

## 📦 WordPress Utility Classes

### Grid Layouts

```tsx
<div className="wp-grid-2-cols">  // 2-column grid
<div className="wp-grid-3-cols">  // 3-column grid
<div className="wp-grid-4-cols">  // 4-column grid
```

### Max-Width Containers

```tsx
<div className="wp-max-w-3xl">  // 768px, centered
<div className="wp-max-w-4xl">  // 896px, centered
<div className="wp-max-w-6xl">  // 1152px, centered
```

### Text Alignment

```tsx
<div className="wp-text-center">  // Center text
<div className="wp-text-left">    // Left align
<div className="wp-text-right">   // Right align
```

## ✅ Quick Checklist

**Before creating a block:**
- [ ] Read category README
- [ ] Read specific block guideline

**Component structure:**
- [ ] Component in `/src/app/components/blocks/{category}/`
- [ ] CSS file in `/src/styles/blocks/{category}/`
- [ ] Import CSS at top of component
- [ ] Use `.wp-block-{name}` class

**Design system:**
- [ ] CSS variables for ALL styling
- [ ] WordPress utility classes for layout
- [ ] Approved fonts ONLY (var(--font-primary) or var(--font-secondary))
- [ ] NO hardcoded values
- [ ] NO Tailwind classes

**Accessibility:**
- [ ] Semantic HTML elements
- [ ] ARIA attributes where needed
- [ ] Keyboard navigation
- [ ] Focus states visible

**Documentation:**
- [ ] JSDoc comments
- [ ] TypeScript types
- [ ] Usage examples

## 🚀 Example: Creating a Quote Block

### 1. Read Guidelines

```bash
# Read these first
/guidelines/blocks/text/README.md
/guidelines/blocks/text/quote.md  # (create this if needed)
```

### 2. Create Component

```tsx
// /src/app/components/blocks/text/Quote.tsx

import '@/styles/blocks/text/quote.css';

export interface QuoteProps {
  children: React.ReactNode;
  cite?: string;
  className?: string;
}

export const Quote = ({ children, cite, className = '' }: QuoteProps) => {
  return (
    <blockquote className={`wp-block-quote ${className}`}>
      <p>{children}</p>
      {cite && <cite>{cite}</cite>}
    </blockquote>
  );
};
```

### 3. Create CSS File

```css
/* /src/styles/blocks/text/quote.css */

.wp-block-quote {
  padding: var(--spacing-6);
  border-left: 4px solid var(--primary);
  background: var(--background-subtle);
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  color: var(--foreground);
  margin-bottom: var(--spacing-8);
}

.wp-block-quote cite {
  display: block;
  margin-top: var(--spacing-4);
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  color: var(--foreground-subtle);
}
```

### 4. Use the Block

```tsx
import { Quote } from '@/app/components/blocks/text/Quote';

<Quote cite="John Doe">
  Design systems enable teams to build better products faster.
</Quote>
```

## 📚 Documentation Links

### Essential Reading

- **[Main Blocks Guide](./README.md)** - Complete blocks system overview
- **[Guidelines.md](../Guidelines.md)** - System principles

### Category Guides

- **[Text Blocks](./text/README.md)** - Paragraph, Heading, List, Quote, etc.
- **[Media Blocks](./media/README.md)** - Image, Gallery, Video, etc.
- **[Design Blocks](./design/README.md)** - Buttons, Columns, Group, etc.
- **[Theme Blocks](./theme/README.md)** - Navigation, Logo, Search, etc.
- **[Widgets](./widgets/README.md)** - Latest Posts, Social Icons, etc.
- **[Embeds](./embed/README.md)** - YouTube, Vimeo, Twitter, etc.
- **[WooCommerce](./woocommerce/README.md)** - Products, Cart, Checkout, etc.

### Sample Guidelines

- **[Paragraph Block](./text/paragraph.md)** - Complete example
- **[Heading Block](./text/heading.md)** - Complete example

### Design System

- **[Typography](../design-tokens/typography.md)** - Font system
- **[Colors](../design-tokens/colors.md)** - Color system
- **[Spacing](../design-tokens/spacing.md)** - Spacing scale

## 🔍 Need Help?

1. **Read the category README** - Start here
2. **Review sample guidelines** - Paragraph & Heading blocks
3. **Check design tokens** - Typography, colors, spacing
4. **Reference main guidelines** - System principles

---

**Quick Start Complete!**  
You're now ready to create WordPress blocks that map to WordPress FSE.

**Next:** Choose a block category and create your first block! 🚀
