# Paragraph Block

Standard text content block for body copy and paragraphs.

## Overview

The Paragraph block is the most basic text block in WordPress. It displays paragraphs of text with design system typography, spacing, and colors.

**WordPress Core Block:** `wp:paragraph`  
**React Component:** `Paragraph.tsx`  
**CSS File:** `/src/styles/blocks/text/paragraph.css`

## Usage

### Basic Example

```tsx
import { Paragraph } from '@/app/components/blocks/text/Paragraph';

<Paragraph>
  This is a standard paragraph with body text. It uses the design system typography scale and color variables.
</Paragraph>
```

### With Custom Styling

```tsx
<Paragraph className="lead-text">
  This is a lead paragraph with larger text for emphasis.
</Paragraph>
```

### Multiple Paragraphs

```tsx
<>
  <Paragraph>
    First paragraph of content goes here.
  </Paragraph>
  
  <Paragraph>
    Second paragraph continues the narrative.
  </Paragraph>
  
  <Paragraph>
    Third paragraph concludes the section.
  </Paragraph>
</>
```

## Component API

### Props

```tsx
interface ParagraphProps {
  /** Text content or React nodes */
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
 * Paragraph Block Component
 * 
 * Standard text content block for body copy.
 * 
 * WordPress core block: wp:paragraph
 * 
 * @see /guidelines/blocks/text/paragraph.md
 */

import '@/styles/blocks/text/paragraph.css';

/**
 * Props for Paragraph component
 */
export interface ParagraphProps {
  /** Text content or React nodes */
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
 * Paragraph block component
 * 
 * Maps to WordPress block: wp:paragraph
 * 
 * @example
 * ```tsx
 * <Paragraph>
 *   This is body text content.
 * </Paragraph>
 * ```
 */
export const Paragraph = ({ 
  children, 
  className = '',
  style,
  id,
  'aria-label': ariaLabel
}: ParagraphProps) => {
  return (
    <p 
      className={`wp-block-paragraph ${className}`}
      style={style}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </p>
  );
};
```

### CSS Styling

```css
/**
 * Paragraph Block Styles
 * 
 * WordPress block: .wp-block-paragraph
 * 
 * @see /guidelines/blocks/text/paragraph.md
 */

.wp-block-paragraph {
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-regular);
  
  /* Colors */
  color: var(--foreground);
  
  /* Spacing */
  margin-bottom: var(--spacing-6);
}

/* Remove bottom margin from last paragraph */
.wp-block-paragraph:last-child {
  margin-bottom: 0;
}

/* Lead text variant (larger intro paragraphs) */
.wp-block-paragraph.lead-text {
  font-size: var(--text-lg);
  line-height: var(--line-height-relaxed);
  color: var(--foreground-subtle);
}

/* Small text variant */
.wp-block-paragraph.small-text {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
}

/* Inside dark backgrounds */
.wp-block-paragraph.on-dark {
  color: var(--primary-foreground);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .wp-block-paragraph {
    font-size: var(--text-base);
  }
  
  .wp-block-paragraph.lead-text {
    font-size: var(--text-base);
  }
}

/* Print styles */
@media print {
  .wp-block-paragraph {
    color: #000;
    margin-bottom: 12pt;
  }
}
```

## WordPress Block HTML

### Standard Paragraph

```html
<!-- wp:paragraph -->
<p class="wp-block-paragraph">
  This is a standard paragraph with body text.
</p>
<!-- /wp:paragraph -->
```

### Lead Paragraph

```html
<!-- wp:paragraph {"className":"lead-text"} -->
<p class="wp-block-paragraph lead-text">
  This is a larger intro paragraph for emphasis.
</p>
<!-- /wp:paragraph -->
```

### Paragraph with Custom Class

```html
<!-- wp:paragraph {"className":"custom-highlight"} -->
<p class="wp-block-paragraph custom-highlight">
  Paragraph with custom styling applied.
</p>
<!-- /wp:paragraph -->
```

## Design System Tokens

### Typography

```css
/* Font families */
font-family: var(--font-primary);    /* Lexend */
font-family: var(--font-secondary);  /* Manrope - for small text only */

/* Font sizes */
font-size: var(--text-base);  /* 16px - standard body text */
font-size: var(--text-lg);    /* 18px - lead paragraphs */
font-size: var(--text-sm);    /* 14px - small text */

/* Line heights */
line-height: var(--line-height-normal);   /* 1.5 - standard */
line-height: var(--line-height-relaxed);  /* 1.75 - long-form */

/* Font weights */
font-weight: var(--font-weight-regular);  /* 400 - body text */
```

### Colors

```css
/* Text colors */
color: var(--foreground);              /* Primary text */
color: var(--foreground-subtle);       /* Secondary text */
color: var(--primary-foreground);      /* On primary backgrounds */
```

### Spacing

```css
/* Paragraph spacing */
margin-bottom: var(--spacing-6);  /* 24px - standard */
margin-bottom: var(--spacing-4);  /* 16px - compact */
margin-bottom: var(--spacing-8);  /* 32px - generous */
```

## Accessibility

### Semantic HTML

✅ **CORRECT:**
```tsx
<p className="wp-block-paragraph">
  Semantic paragraph element
</p>
```

❌ **WRONG:**
```tsx
<div className="paragraph">
  Don't use div for paragraphs
</div>
```

### Screen Readers

- Uses semantic `<p>` element
- Text content readable by default
- Optional `aria-label` for context
- Proper reading order maintained

### Keyboard Navigation

- Paragraphs are not interactive
- Text is selectable
- Focus moves naturally through content

### WCAG 2.1 Compliance

- ✅ **1.3.1 Info and Relationships** - Semantic HTML
- ✅ **1.4.3 Contrast (Minimum)** - Uses design system colors (4.5:1 minimum)
- ✅ **1.4.4 Resize Text** - Responsive font sizing
- ✅ **1.4.12 Text Spacing** - Proper line-height and spacing

## Variants

### Lead Text

Large introductory paragraphs:

```tsx
<Paragraph className="lead-text">
  This paragraph introduces the section with larger, more prominent text.
</Paragraph>
```

```css
.wp-block-paragraph.lead-text {
  font-size: var(--text-lg);
  line-height: var(--line-height-relaxed);
}
```

### Small Text

Smaller text for captions or notes:

```tsx
<Paragraph className="small-text">
  This is smaller text for secondary information.
</Paragraph>
```

```css
.wp-block-paragraph.small-text {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
}
```

### On Dark Backgrounds

```tsx
<Paragraph className="on-dark">
  Text that appears on dark backgrounds.
</Paragraph>
```

```css
.wp-block-paragraph.on-dark {
  color: var(--primary-foreground);
}
```

## Common Patterns

### Article Content

```tsx
<article>
  <Paragraph className="lead-text">
    This is the introduction paragraph that hooks the reader.
  </Paragraph>
  
  <Paragraph>
    Standard body paragraphs follow with the main content.
  </Paragraph>
  
  <Paragraph>
    Additional paragraphs continue the narrative.
  </Paragraph>
</article>
```

### With Links

```tsx
<Paragraph>
  Visit our <a href="/services">services page</a> to learn more about our offerings.
</Paragraph>
```

### With Strong Emphasis

```tsx
<Paragraph>
  This is <strong>important information</strong> that needs emphasis.
</Paragraph>
```

## Best Practices

### ✅ DO

- Use semantic `<p>` elements
- Use CSS variables for all styling
- Keep paragraphs focused and concise
- Use lead text for introductions
- Maintain proper paragraph spacing

### ❌ DON'T

- Don't use `<div>` instead of `<p>`
- Don't hardcode font sizes or colors
- Don't use inline styles for static values
- Don't create overly long paragraphs
- Don't skip semantic HTML

## Related Blocks

- **[Heading Block](./heading.md)** - For headings above paragraphs
- **[List Block](./list.md)** - For bulleted or numbered lists
- **[Quote Block](./quote.md)** - For quoted text
- **[Lead Text Pattern](../../patterns/lead-text.md)** - Lead paragraph pattern

## Related Documentation

- **[Typography Guide](../../design-tokens/typography.md)** - Complete typography system
- **[Text Blocks Overview](./README.md)** - All text blocks
- **[Main Guidelines](../../Guidelines.md)** - System principles

---

**Component:** `/src/app/components/blocks/text/Paragraph.tsx`  
**CSS File:** `/src/styles/blocks/text/paragraph.css`  
**WordPress Block:** `wp:paragraph`  
**Category:** Text Blocks  
**Last Updated:** January 22, 2025
