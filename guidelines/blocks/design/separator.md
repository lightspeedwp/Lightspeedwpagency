# Separator Block

**WordPress Block:** `core/separator`  
**Category:** Design Blocks  
**Component:** `/src/app/components/blocks/design/Separator.tsx`  
**CSS File:** `/src/styles/blocks/design/separator.css`

---

## Purpose

The Separator block creates horizontal dividers between sections of content. It provides visual separation and improves content hierarchy and readability.

**Use this block when:**
- Separating content sections
- Creating visual breaks in long-form content
- Dividing different topics
- Adding visual rhythm to pages
- Creating subtle section dividers

**Do NOT use this block when:**
- Creating spacing (use Spacer block)
- Building layouts (use Group/Columns blocks)
- Adding decorative elements (use custom patterns)

---

## Block Structure

### Simple Separator
```tsx
import { Separator } from '@/app/components/blocks/design/Separator';

<Separator />
```

### Styled Separator
```tsx
<Separator variant="wide" />
```

---

## Props API

```typescript
interface SeparatorProps {
  /** Separator style variant */
  variant?: 'default' | 'wide' | 'dots';
  
  /** Separator color */
  color?: string;
  
  /** Separator opacity */
  opacity?: number;
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## Variant Examples

### Default (Thin Line)
```tsx
<Separator variant="default" />
```

### Wide (Thick Line)
```tsx
<Separator variant="wide" />
```

### Dots (Three Centered Dots)
```tsx
<Separator variant="dots" />
```

---

## CSS Variables

All styling uses CSS variables from `/src/styles/theme-base.css`:

```css
/* Colors */
--border           /* Separator line color */
--muted-foreground /* Dots color */

/* Spacing */
--spacing-6        /* Vertical margin */
--spacing-8        /* Large vertical margin */

/* Borders */
--border-width     /* Line thickness */
```

---

## BEM Class Naming

The Separator block uses WordPress-aligned BEM naming:

```css
.wp-block-separator              /* Root element */
.wp-block-separator--default     /* Default variant */
.wp-block-separator--wide        /* Wide variant */
.wp-block-separator--dots        /* Dots variant */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Semantic HTML:** Use `<hr>` element for separators
- ✅ **ARIA Role:** Implicit `separator` role from `<hr>`
- ✅ **Screen Readers:** Announced as "separator"
- ✅ **Decorative:** Purely visual, no interactive elements
- ✅ **Contrast:** Visible but subtle (not distracting)

### Implementation
```tsx
{/* Semantic separator */}
<hr className="wp-block-separator" />

{/* Dots separator */}
<hr 
  className="wp-block-separator wp-block-separator--dots"
  aria-hidden="true"
/>
```

---

## Light & Dark Mode

The Separator block automatically adapts to light/dark themes:

```css
/* Light mode */
.light-theme .wp-block-separator {
  border-color: var(--border);
}

/* Dark mode */
.dark-theme .wp-block-separator {
  border-color: var(--border);
}
```

---

## Responsive Behavior

| Breakpoint | Width | Margin |
|------------|-------|--------|
| **Mobile** (< 768px) | 100% | var(--spacing-6) |
| **Tablet** (768px - 1023px) | 100% | var(--spacing-8) |
| **Desktop** (≥ 1024px) | 100% | var(--spacing-8) |

---

## WordPress Mapping

### In WordPress FSE

This is a **WordPress core block**:

```html
<!-- wp:separator -->
<hr class="wp-block-separator" />
<!-- /wp:separator -->

<!-- wp:separator {"className":"is-style-wide"} -->
<hr class="wp-block-separator is-style-wide" />
<!-- /wp:separator -->

<!-- wp:separator {"className":"is-style-dots"} -->
<hr class="wp-block-separator is-style-dots" />
<!-- /wp:separator -->
```

---

## Usage Examples

### Between Paragraphs
```tsx
<Paragraph>
  First section content...
</Paragraph>

<Separator />

<Paragraph>
  Second section content...
</Paragraph>
```

### Between Sections
```tsx
<Section>
  <Heading level={2}>Section 1</Heading>
  <Paragraph>Content here...</Paragraph>
</Section>

<Separator variant="wide" />

<Section>
  <Heading level={2}>Section 2</Heading>
  <Paragraph>More content...</Paragraph>
</Section>
```

### Dots Separator
```tsx
<Paragraph>
  End of introduction...
</Paragraph>

<Separator variant="dots" />

<Paragraph>
  Start of main content...
</Paragraph>
```

---

## Testing Requirements

### Unit Tests
- [ ] Renders as `<hr>` element
- [ ] Applies default variant
- [ ] Applies wide variant
- [ ] Applies dots variant
- [ ] Applies custom className
- [ ] Uses CSS variables

### Accessibility Tests
- [ ] Uses semantic `<hr>` element
- [ ] Has implicit `separator` role
- [ ] Screen readers announce as separator
- [ ] Not focusable (decorative)
- [ ] Visible in light and dark modes

### Visual Regression Tests
- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly
- [ ] All variants render correctly
- [ ] Responsive behavior works

---

## Common Patterns

### Article Section Breaks
```tsx
<article>
  <Heading level={1}>Article Title</Heading>
  <Paragraph>Introduction...</Paragraph>
  
  <Separator />
  
  <Heading level={2}>First Section</Heading>
  <Paragraph>Content...</Paragraph>
  
  <Separator />
  
  <Heading level={2}>Second Section</Heading>
  <Paragraph>More content...</Paragraph>
</article>
```

### Page Sections
```tsx
<Section>
  <ServicesSection />
</Section>

<Separator variant="wide" />

<Section>
  <TestimonialsSection />
</Section>

<Separator variant="wide" />

<Section>
  <CTASection />
</Section>
```

---

## Migration Checklist

When migrating existing separators:

- [ ] Replace `<hr>` with `<Separator>` component
- [ ] Remove inline styles, use variant prop
- [ ] Add appropriate `variant` prop
- [ ] Test in light and dark modes
- [ ] Verify semantic HTML (`<hr>`)
- [ ] Check responsive behavior

---

## Related Components

- **[Spacer](./spacer.md)** - Vertical spacing
- **[Group](./group.md)** - Content grouping
- **[Section](../../patterns/Section.md)** - Section wrapper

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
