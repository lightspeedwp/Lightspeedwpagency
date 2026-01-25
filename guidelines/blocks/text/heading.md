# Heading Block

Heading blocks (H1-H6) for content hierarchy and structure.

## Overview

The Heading block creates semantic headings (H1-H6) with design system typography. Headings establish content hierarchy and are critical for accessibility and SEO.

**WordPress Core Block:** `wp:heading`  
**React Component:** `Heading.tsx`  
**CSS File:** `/src/styles/blocks/text/heading.css`

## Usage

### Basic Examples

```tsx
import { Heading } from '@/app/components/blocks/text/Heading';

// H1 - Page title (one per page)
<Heading level={1}>
  Page Title or Main Headline
</Heading>

// H2 - Section headings
<Heading level={2}>
  Section Heading
</Heading>

// H3 - Subsection headings
<Heading level={3}>
  Subsection Heading
</Heading>

// H4-H6 - Deeper hierarchy
<Heading level={4}>
  Card or Component Heading
</Heading>
```

### With Custom Class

```tsx
<Heading level={2} className="text-center">
  Centered Section Heading
</Heading>
```

### Complete Heading Hierarchy

```tsx
<article>
  {/* Page title - only one H1 per page */}
  <Heading level={1}>
    The Future of WordPress Design Systems
  </Heading>
  
  {/* Section */}
  <Heading level={2}>
    Introduction
  </Heading>
  <p>Section content...</p>
  
  {/* Subsection */}
  <Heading level={3}>
    Key Benefits
  </Heading>
  <p>Subsection content...</p>
  
  {/* Card within subsection */}
  <Heading level={4}>
    Benefit 1: Speed
  </Heading>
  <p>Card content...</p>
</article>
```

## Component API

### Props

```tsx
interface HeadingProps {
  /** Heading level (1-6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Heading text or React nodes */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Inline styles for dynamic values ONLY */
  style?: React.CSSProperties;
  
  /** ID for anchor links */
  id?: string;
  
  /** ARIA label for accessibility */
  'aria-label'?: string;
}
```

### Default Props

```tsx
{
  className: '',
  style: undefined,
  id: undefined,
  'aria-label': undefined
}
```

## Component Implementation

### React Component

```tsx
/**
 * Heading Block Component
 * 
 * Semantic heading blocks (H1-H6) with design system typography.
 * 
 * WordPress core block: wp:heading
 * 
 * @see /guidelines/blocks/text/heading.md
 */

import '@/styles/blocks/text/heading.css';

/**
 * Props for Heading component
 */
export interface HeadingProps {
  /** Heading level (1-6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** Heading text or React nodes */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles for dynamic values ONLY */
  style?: React.CSSProperties;
  /** ID for anchor links */
  id?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

/**
 * Heading block component
 * 
 * Maps to WordPress block: wp:heading
 * 
 * @example
 * ```tsx
 * <Heading level={2}>
 *   Section Heading
 * </Heading>
 * ```
 */
export const Heading = ({ 
  level,
  children, 
  className = '',
  style,
  id,
  'aria-label': ariaLabel
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return React.createElement(
    Tag,
    {
      className: `wp-block-heading wp-block-heading--${level} ${className}`,
      style,
      id,
      'aria-label': ariaLabel
    },
    children
  );
};
```

### CSS Styling

```css
/**
 * Heading Block Styles
 * 
 * WordPress block: .wp-block-heading
 * 
 * @see /guidelines/blocks/text/heading.md
 */

/* Base heading styles */
.wp-block-heading {
  /* Typography */
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  
  /* Colors */
  color: var(--foreground);
  
  /* Spacing */
  margin-top: 0;
  margin-bottom: var(--spacing-4);
}

/* H1 - Page title */
.wp-block-heading--1 {
  font-size: var(--text-h1);
  margin-bottom: var(--spacing-8);
}

/* H2 - Section heading */
.wp-block-heading--2 {
  font-size: var(--text-h2);
  margin-bottom: var(--spacing-6);
}

/* H3 - Subsection heading */
.wp-block-heading--3 {
  font-size: var(--text-h3);
  margin-bottom: var(--spacing-4);
}

/* H4 - Card/component heading */
.wp-block-heading--4 {
  font-size: var(--text-h4);
  margin-bottom: var(--spacing-3);
}

/* H5 - Small heading */
.wp-block-heading--5 {
  font-size: var(--text-h5);
  margin-bottom: var(--spacing-3);
}

/* H6 - Tiny heading */
.wp-block-heading--6 {
  font-size: var(--text-h6);
  margin-bottom: var(--spacing-2);
}

/* Remove bottom margin from last heading */
.wp-block-heading:last-child {
  margin-bottom: 0;
}

/* On dark backgrounds */
.wp-block-heading.on-dark {
  color: var(--primary-foreground);
}

/* Centered headings */
.wp-block-heading.text-center {
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .wp-block-heading--1 {
    font-size: calc(var(--text-h1) * 0.7);
  }
  
  .wp-block-heading--2 {
    font-size: calc(var(--text-h2) * 0.85);
  }
}

/* Print styles */
@media print {
  .wp-block-heading {
    color: #000;
    page-break-after: avoid;
  }
}
```

## WordPress Block HTML

### H1 Heading

```html
<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading wp-block-heading--1">
  Page Title
</h1>
<!-- /wp:heading -->
```

### H2 Heading

```html
<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading wp-block-heading--2">
  Section Heading
</h2>
<!-- /wp:heading -->
```

### Centered Heading

```html
<!-- wp:heading {"level":2,"textAlign":"center"} -->
<h2 class="wp-block-heading wp-block-heading--2 text-center">
  Centered Section Heading
</h2>
<!-- /wp:heading -->
```

## Design System Tokens

### Typography Scale

```css
/* Heading font sizes */
--text-h1: 60px;   /* Hero headlines, page titles */
--text-h2: 32px;   /* Section headings */
--text-h3: 24px;   /* Subsection headings */
--text-h4: 20px;   /* Card/component headings */
--text-h5: 18px;   /* Small headings */
--text-h6: 16px;   /* Tiny headings */

/* Font family (ALL headings) */
font-family: var(--font-primary);  /* Lexend */

/* Font weight */
font-weight: var(--font-weight-medium);  /* 500 */

/* Line height */
line-height: var(--line-height-tight);  /* 1.25 */
```

### Colors

```css
/* Heading colors */
color: var(--foreground);              /* Standard headings */
color: var(--primary-foreground);      /* On primary backgrounds */
```

### Spacing

```css
/* Heading spacing */
margin-bottom: var(--spacing-8);  /* H1 - 32px */
margin-bottom: var(--spacing-6);  /* H2 - 24px */
margin-bottom: var(--spacing-4);  /* H3-H5 - 16px */
margin-bottom: var(--spacing-2);  /* H6 - 8px */
```

## Accessibility

### Heading Hierarchy

**CRITICAL:** Maintain proper heading order:

✅ **CORRECT:**
```tsx
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
      <h4>Card Heading</h4>
```

❌ **WRONG:**
```tsx
<h1>Page Title</h1>
  <h3>Section</h3>  // Skipped H2!
    <h5>Subsection</h5>  // Skipped H4!
```

### One H1 Per Page

- ✅ **CORRECT:** One H1 per page (page title)
- ❌ **WRONG:** Multiple H1 elements

### Screen Readers

- Screen readers use heading structure for navigation
- Users can jump between headings
- Proper hierarchy is essential
- Optional `aria-label` for additional context

### WCAG 2.1 Compliance

- ✅ **1.3.1 Info and Relationships** - Semantic heading structure
- ✅ **2.4.6 Headings and Labels** - Descriptive headings
- ✅ **1.4.3 Contrast (Minimum)** - Uses design system colors
- ✅ **1.4.4 Resize Text** - Responsive font sizing

## Heading Levels Guide

### H1 - Page Title

**Usage:** Main page title, hero headline  
**Frequency:** ONE per page  
**Size:** 60px (--text-h1)

```tsx
<Heading level={1}>
  Build Exceptional WordPress Experiences
</Heading>
```

### H2 - Section Heading

**Usage:** Major sections of content  
**Frequency:** Multiple per page  
**Size:** 32px (--text-h2)

```tsx
<Heading level={2}>
  Our Services
</Heading>
```

### H3 - Subsection Heading

**Usage:** Subsections within H2 sections  
**Frequency:** As needed  
**Size:** 24px (--text-h3)

```tsx
<Heading level={3}>
  WordPress Development
</Heading>
```

### H4 - Component Heading

**Usage:** Card titles, sidebar headings  
**Frequency:** As needed  
**Size:** 20px (--text-h4)

```tsx
<Heading level={4}>
  Latest Blog Posts
</Heading>
```

### H5-H6 - Small Headings

**Usage:** Deep hierarchy, small sections  
**Frequency:** Rare  
**Size:** 18px-16px (--text-h5, --text-h6)

```tsx
<Heading level={5}>
  Related Resources
</Heading>
```

## Common Patterns

### Hero Section

```tsx
<section className="hero">
  <Heading level={1}>
    Build Exceptional WordPress Experiences
  </Heading>
  <p className="lead-text">
    Supporting subtitle text
  </p>
</section>
```

### Content Section

```tsx
<section>
  <Heading level={2}>
    Our Services
  </Heading>
  
  <Heading level={3}>
    WordPress Development
  </Heading>
  <p>Service description...</p>
  
  <Heading level={3}>
    WooCommerce Solutions
  </Heading>
  <p>Service description...</p>
</section>
```

### Card Grid

```tsx
<div className="wp-grid-3-cols">
  <article className="card">
    <Heading level={4}>
      Card Title 1
    </Heading>
    <p>Card content...</p>
  </article>
  
  <article className="card">
    <Heading level={4}>
      Card Title 2
    </Heading>
    <p>Card content...</p>
  </article>
</div>
```

## Best Practices

### ✅ DO

- Use semantic heading elements (h1-h6)
- Maintain proper heading hierarchy
- Use ONE H1 per page
- Make headings descriptive
- Use CSS variables for all styling
- Keep headings concise

### ❌ DON'T

- Don't skip heading levels
- Don't use headings for styling only
- Don't hardcode font sizes or colors
- Don't use multiple H1 elements
- Don't use `<div>` instead of heading elements
- Don't create overly long headings

## Related Blocks

- **[Paragraph Block](./paragraph.md)** - For body text after headings
- **[List Block](./list.md)** - For lists under headings
- **[Hero Pattern](../../patterns/HeroHome.md)** - Hero section with H1

## Related Documentation

- **[Typography Guide](../../design-tokens/typography.md)** - Complete typography system
- **[Text Blocks Overview](./README.md)** - All text blocks
- **[Accessibility Guide](../../ACCESSIBILITY-COMPLETE-GUIDE.md)** - Accessibility standards
- **[Main Guidelines](../../Guidelines.md)** - System principles

---

**Component:** `/src/app/components/blocks/text/Heading.tsx`  
**CSS File:** `/src/styles/blocks/text/heading.css`  
**WordPress Block:** `wp:heading`  
**Category:** Text Blocks  
**Last Updated:** January 22, 2025
