# Quote Block

**WordPress Block:** `core/quote`  
**Category:** Text Blocks  
**Component:** `/src/app/components/blocks/text/Quote.tsx`  
**CSS File:** `/src/styles/blocks/text/quote.css`

---

## Purpose

The Quote block displays quotations, testimonials, or cited text. It provides visual distinction for quoted content and attribution to sources.

**Use this block when:**
- Displaying customer testimonials
- Quoting experts or sources
- Highlighting important statements
- Citing external content
- Creating pull quotes in articles

**Do NOT use this block when:**
- Displaying regular content (use Paragraph block)
- Creating decorative text (use Heading block)
- Building code blocks (use Code block)
- Showing alerts or notices (use Alert block)

---

## Block Structure

### Simple Quote
```tsx
import { Quote } from '@/app/components/blocks/text/Quote';

<Quote>
  This is a great quote that emphasizes an important point.
</Quote>
```

### Quote with Citation
```tsx
<Quote citation="Jane Doe, CEO">
  Working with LSX Design transformed our online presence completely.
</Quote>
```

---

## Props API

```typescript
interface QuoteProps {
  /** Quote content */
  children: React.ReactNode;
  
  /** Citation/attribution */
  citation?: string;
  
  /** Quote style variant */
  variant?: 'default' | 'pullquote' | 'testimonial';
  
  /** Alignment */
  align?: 'left' | 'center' | 'right';
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## Variant Examples

### Default Quote
```tsx
<Quote>
  The only way to do great work is to love what you do.
</Quote>
```

### Pull Quote (Large, Centered)
```tsx
<Quote variant="pullquote" align="center">
  Design is not just what it looks like. Design is how it works.
</Quote>
```

### Testimonial Quote
```tsx
<Quote variant="testimonial" citation="Sarah Johnson, Marketing Director">
  LSX Design delivered a WordPress theme that exceeded all our expectations. 
  The attention to detail and performance optimization was outstanding.
</Quote>
```

---

## Alignment Examples

### Left Aligned (default)
```tsx
<Quote align="left">
  Left-aligned quote text.
</Quote>
```

### Center Aligned
```tsx
<Quote align="center" citation="Author Name">
  Centered quote with attribution.
</Quote>
```

### Right Aligned
```tsx
<Quote align="right">
  Right-aligned quote text.
</Quote>
```

---

## CSS Variables

All styling uses CSS variables from `/src/styles/theme-base.css`:

```css
/* Typography */
--font-primary     /* Quote font family (Lexend) */
--text-lg          /* Quote text size */
--text-xl          /* Pull quote text size */
--text-sm          /* Citation text size */

/* Colors */
--foreground       /* Quote text color */
--muted-foreground /* Citation text color */
--border           /* Quote border color */
--primary          /* Accent color (pull quotes) */

/* Spacing */
--spacing-4        /* Internal padding */
--spacing-6        /* Quote margin */
--spacing-2        /* Citation margin top */

/* Borders */
--radius           /* Quote border radius */
```

---

## BEM Class Naming

The Quote block uses WordPress-aligned BEM naming:

```css
.wp-block-quote                /* Root container */
.wp-block-quote--default       /* Default variant */
.wp-block-quote--pullquote     /* Pull quote variant */
.wp-block-quote--testimonial   /* Testimonial variant */
.wp-block-quote--left          /* Left aligned */
.wp-block-quote--center        /* Center aligned */
.wp-block-quote--right         /* Right aligned */

.wp-block-quote__content       /* Quote text content */
.wp-block-quote__citation      /* Citation/attribution */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Semantic HTML:** Use `<blockquote>` element
- ✅ **Screen Readers:** Announced as "quote" or "blockquote"
- ✅ **Contrast Ratios:** Minimum 4.5:1 for text
- ✅ **Readable Text:** Minimum 16px font size
- ✅ **Attribution:** Use `<cite>` for citations
- ✅ **Visual Indicators:** Border or styling to distinguish from body text

### Implementation
```tsx
<blockquote className="wp-block-quote">
  <p className="wp-block-quote__content">
    Quote text goes here.
  </p>
  <cite className="wp-block-quote__citation">
    — Author Name, Title
  </cite>
</blockquote>
```

---

## Light & Dark Mode

The Quote block automatically adapts to light/dark themes using CSS variables:

```css
/* Light mode */
.light-theme .wp-block-quote {
  color: var(--foreground);
  border-color: var(--border);
}

.light-theme .wp-block-quote__citation {
  color: var(--muted-foreground);
}

/* Dark mode */
.dark-theme .wp-block-quote {
  color: var(--foreground);
  border-color: var(--border);
}

.dark-theme .wp-block-quote__citation {
  color: var(--muted-foreground);
}
```

All quote styles automatically adjust based on the active theme.

---

## Responsive Behavior

| Breakpoint | Font Size | Padding | Border |
|------------|-----------|---------|--------|
| **Mobile** (< 768px) | 16px | var(--spacing-4) | 3px left |
| **Tablet** (768px - 1023px) | 18px | var(--spacing-5) | 4px left |
| **Desktop** (≥ 1024px) | var(--text-lg) | var(--spacing-6) | 4px left |

```css
/* Mobile-first responsive design */
.wp-block-quote {
  font-size: 16px;
  padding: var(--spacing-4);
  border-left: 3px solid var(--border);
}

@media (min-width: 768px) {
  .wp-block-quote {
    font-size: 18px;
    padding: var(--spacing-5);
    border-left: 4px solid var(--border);
  }
}

@media (min-width: 1024px) {
  .wp-block-quote {
    font-size: var(--text-lg);
    padding: var(--spacing-6);
  }
}
```

---

## WordPress Mapping

### In WordPress FSE

This is a **WordPress core block**:

```html
<!-- wp:quote -->
<blockquote class="wp-block-quote">
  <p>This is a quote with important information.</p>
  <cite>Author Name</cite>
</blockquote>
<!-- /wp:quote -->

<!-- wp:quote {"className":"is-style-large"} -->
<blockquote class="wp-block-quote is-style-large">
  <p>This is a large pull quote.</p>
</blockquote>
<!-- /wp:quote -->
```

### Block Attributes

```json
{
  "value": {
    "type": "string"
  },
  "citation": {
    "type": "string"
  },
  "align": {
    "type": "string"
  },
  "className": {
    "type": "string"
  }
}
```

---

## Usage in Templates

### Testimonial Section
```tsx
import { Quote } from '@/app/components/blocks/text/Quote';

export function TestimonialsSection() {
  return (
    <section>
      <h2>What Our Clients Say</h2>
      <Quote 
        variant="testimonial" 
        citation="John Smith, Founder @ TechCo"
      >
        LSX Design built us a lightning-fast WordPress site that converts 
        visitors into customers. Their attention to accessibility and 
        performance is unmatched.
      </Quote>
    </section>
  );
}
```

### Pull Quote in Article
```tsx
export function BlogPost() {
  return (
    <article>
      <p>Regular paragraph content...</p>
      
      <Quote variant="pullquote" align="center">
        Performance optimization isn't optional—it's essential for modern websites.
      </Quote>
      
      <p>More paragraph content...</p>
    </article>
  );
}
```

### Quote with Rich Content
```tsx
<Quote citation="Sarah Johnson, Marketing Director">
  <p>
    Working with <strong>LSX Design</strong> was a game-changer for our business.
  </p>
  <p>
    They delivered a <em>stunning</em> WordPress theme that exceeded 
    all our expectations.
  </p>
</Quote>
```

---

## Testing Requirements

### Unit Tests
- [ ] Renders quote content correctly
- [ ] Displays citation when provided
- [ ] Renders all variants (default, pullquote, testimonial)
- [ ] Applies all alignments (left, center, right)
- [ ] Applies custom className
- [ ] Uses correct CSS variables

### Accessibility Tests
- [ ] Uses semantic `<blockquote>` element
- [ ] Citation uses `<cite>` element
- [ ] Screen readers announce as quote
- [ ] Contrast ratios meet WCAG 2.1 AA (4.5:1)
- [ ] Text size minimum 16px
- [ ] Visual distinction from body text

### Visual Regression Tests
- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly
- [ ] All variants render correctly
- [ ] All alignments render correctly
- [ ] Long quotes wrap properly
- [ ] Responsive design works (mobile, tablet, desktop)

---

## Common Patterns

### Customer Testimonial Grid
```tsx
<Grid columns={2}>
  <Quote variant="testimonial" citation="Client 1">
    Amazing work! Highly recommend.
  </Quote>
  <Quote variant="testimonial" citation="Client 2">
    Professional, fast, and high quality.
  </Quote>
  <Quote variant="testimonial" citation="Client 3">
    Best investment we made this year.
  </Quote>
  <Quote variant="testimonial" citation="Client 4">
    Exceeded all expectations!
  </Quote>
</Grid>
```

### Article Pull Quote
```tsx
<Stack spacing="lg">
  <Paragraph>
    Regular article text that introduces the topic...
  </Paragraph>
  
  <Quote variant="pullquote" align="center">
    This is the key takeaway that readers should remember.
  </Quote>
  
  <Paragraph>
    Continuation of the article content...
  </Paragraph>
</Stack>
```

### Expert Quote
```tsx
<Quote citation="Dr. Jane Smith, WordPress Expert & Author">
  Block themes represent the future of WordPress development. 
  They offer unparalleled flexibility while maintaining 
  accessibility and performance standards.
</Quote>
```

---

## Migration Checklist

When migrating existing quotes:

- [ ] Replace `<blockquote>` with `<Quote>` component
- [ ] Move attribution to `citation` prop
- [ ] Remove inline styles, use CSS classes
- [ ] Add appropriate `variant` prop
- [ ] Add `align` prop if needed
- [ ] Ensure `<cite>` element used for citations
- [ ] Test in light and dark modes
- [ ] Verify accessibility (semantic HTML)
- [ ] Check responsive behavior
- [ ] Verify contrast ratios

---

## Related Components

- **[Paragraph](./paragraph.md)** - Body text content
- **[Heading](./heading.md)** - Section headings
- **[List](./list.md)** - Ordered/unordered lists

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
