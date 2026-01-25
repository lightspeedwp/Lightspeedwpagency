# Pullquote Block Guidelines

**WordPress Block:** `core/pullquote`  
**Category:** Text  
**CSS File:** `/src/styles/blocks/text/pullquote.css`

---

## Purpose

The Pullquote block highlights a key quote or excerpt from the main content with prominent styling. Used to draw attention to important statements, testimonials, or memorable quotes.

---

## Design System Integration

### Typography
- **Font:** `var(--font-primary)` (Lexend)
- **Quote Size:** `var(--text-xl)` (24px)
- **Citation Size:** `var(--text-base)` (16px)
- **Line Height:** 1.5
- **Color:** `var(--foreground)`

### Spacing
- **Padding:** `var(--spacing-8)` (32px) vertical, `var(--spacing-6)` (24px) horizontal
- **Margin:** `var(--spacing-8)` (32px) vertical
- **Gap:** `var(--spacing-3)` (12px) between quote and citation

### Colors
- **Background:** `var(--muted)` (subtle emphasis)
- **Border Left:** 4px solid `var(--primary)` (accent bar)
- **Text:** `var(--foreground)`
- **Citation:** `var(--muted-foreground)`

### Border Radius
- **Radius:** `var(--radius-lg)` (8px)

---

## Component Structure

```tsx
/**
 * Pullquote Block Component
 * 
 * WordPress core block: core/pullquote
 * 
 * @see /guidelines/blocks/text/pullquote.md
 */

import '@/styles/blocks/text/pullquote.css';

export interface PullquoteBlockProps {
  children: React.ReactNode;
  citation?: string;
  variant?: 'default' | 'solid' | 'plain';
  className?: string;
}

export const PullquoteBlock = ({ 
  children, 
  citation,
  variant = 'default',
  className = '' 
}: PullquoteBlockProps) => {
  return (
    <figure className={`wp-block-pullquote wp-block-pullquote--${variant} ${className}`}>
      <blockquote className="wp-block-pullquote__quote">
        {children}
      </blockquote>
      {citation && (
        <figcaption className="wp-block-pullquote__citation">
          {citation}
        </figcaption>
      )}
    </figure>
  );
};
```

---

## CSS Implementation

**File:** `/src/styles/blocks/text/pullquote.css`

```css
/**
 * Pullquote Block Styles
 * 
 * WordPress block: .wp-block-pullquote
 */

.wp-block-pullquote {
  margin: var(--spacing-8) 0;
  padding: var(--spacing-8) var(--spacing-6);
  background: var(--muted);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius-lg);
}

.wp-block-pullquote__quote {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
  color: var(--foreground);
  margin: 0;
  font-style: italic;
}

.wp-block-pullquote__quote::before {
  content: '"';
  color: var(--primary);
  font-size: 1.5em;
  line-height: 0;
  vertical-align: -0.4em;
  margin-right: 0.1em;
}

.wp-block-pullquote__quote::after {
  content: '"';
  color: var(--primary);
  font-size: 1.5em;
  line-height: 0;
  vertical-align: -0.4em;
  margin-left: 0.1em;
}

.wp-block-pullquote__citation {
  margin-top: var(--spacing-3);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-regular);
  color: var(--muted-foreground);
  font-style: normal;
}

.wp-block-pullquote__citation::before {
  content: '— ';
}

/* Solid Variant */
.wp-block-pullquote--solid {
  background: var(--primary);
  border-left: none;
}

.wp-block-pullquote--solid .wp-block-pullquote__quote {
  color: var(--primary-foreground);
}

.wp-block-pullquote--solid .wp-block-pullquote__quote::before,
.wp-block-pullquote--solid .wp-block-pullquote__quote::after {
  color: var(--primary-foreground);
  opacity: 0.5;
}

.wp-block-pullquote--solid .wp-block-pullquote__citation {
  color: var(--primary-foreground);
  opacity: 0.8;
}

/* Plain Variant */
.wp-block-pullquote--plain {
  background: transparent;
  border-left: none;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
}

.wp-block-pullquote--plain .wp-block-pullquote__quote {
  font-size: var(--text-2xl);
}

/* Responsive */
@media (max-width: 767px) {
  .wp-block-pullquote {
    padding: var(--spacing-6) var(--spacing-4);
    margin: var(--spacing-6) 0;
  }
  
  .wp-block-pullquote__quote {
    font-size: var(--text-lg);
  }
  
  .wp-block-pullquote--plain .wp-block-pullquote__quote {
    font-size: var(--text-xl);
  }
}
```

---

## Usage Examples

### Basic Pullquote

```tsx
<PullquoteBlock citation="John Doe, CEO">
  This quote highlights the most important takeaway from the article.
</PullquoteBlock>
```

### Solid Variant

```tsx
<PullquoteBlock variant="solid" citation="Jane Smith">
  A powerful statement that deserves prominent styling.
</PullquoteBlock>
```

### Plain Variant (Centered)

```tsx
<PullquoteBlock variant="plain" citation="Anonymous">
  A centered quote with minimal styling for elegance.
</PullquoteBlock>
```

### Without Citation

```tsx
<PullquoteBlock>
  Sometimes the quote speaks for itself without attribution.
</PullquoteBlock>
```

---

## WordPress Mapping

**Block Name:** `core/pullquote`

**Attributes:**
- `value` (string) - Quote text
- `citation` (string) - Quote attribution
- `textAlign` (string) - Text alignment (left, center, right)

**Example Block Markup:**
```html
<!-- wp:pullquote -->
<figure class="wp-block-pullquote">
  <blockquote>
    <p>This is a pullquote.</p>
    <cite>— John Doe</cite>
  </blockquote>
</figure>
<!-- /wp:pullquote -->
```

---

## Accessibility

- **Semantic HTML:** Uses `<figure>`, `<blockquote>`, and `<figcaption>`
- **Screen Readers:** Quote marks announced as decorative (CSS content)
- **Keyboard Navigation:** Read-only content
- **ARIA:** No additional ARIA needed (semantic HTML sufficient)

---

## Best Practices

1. **Excerpt Selection:** Pull the most impactful quote from content
2. **Brevity:** Keep quotes concise (1-3 sentences ideal)
3. **Attribution:** Always cite the source when possible
4. **Placement:** Position strategically to break up long content
5. **Frequency:** Use sparingly (1-2 per long article)

---

## Variants

### Default
- Subtle background (`var(--muted)`)
- Primary color accent bar
- Best for: Most quotes

### Solid
- Primary background color
- High contrast
- Best for: Key testimonials, CTAs

### Plain
- No background
- Centered text
- Best for: Elegant, minimal designs

---

## Common Use Cases

- **Article Highlights:** Key points from blog posts
- **Testimonials:** Customer quotes and reviews
- **Interview Excerpts:** Notable interview responses
- **Statistics:** Important numerical data
- **Calls to Action:** Motivational statements

---

## Design System Compliance

✅ **Typography:** 100% (uses `var(--font-primary)`)  
✅ **Spacing:** 100% (uses `var(--spacing-*)`)  
✅ **Colors:** 100% (uses CSS variables)  
✅ **Border Radius:** 100% (uses `var(--radius-lg)`)  
✅ **Responsive:** Mobile-optimized  
✅ **Accessibility:** WCAG 2.1 AA compliant

---

**Status:** ✅ COMPLETE  
**WordPress FSE:** Compatible  
**Design System:** 100% Compliant
