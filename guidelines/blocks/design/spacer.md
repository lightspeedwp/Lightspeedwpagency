# Spacer Block

**WordPress Block:** `core/spacer`  
**Category:** Design Blocks  
**Component:** `/src/app/components/blocks/design/Spacer.tsx`  
**CSS File:** `/src/styles/blocks/design/spacer.css`

---

## Purpose

The Spacer block creates vertical spacing between content blocks. It provides precise control over whitespace and improves visual rhythm.

**Use this block when:**
- Adding vertical spacing between blocks
- Creating breathing room in layouts
- Adjusting content rhythm
- Fine-tuning spacing
- Creating consistent gaps

**Do NOT use this block when:**
- Creating horizontal dividers (use Separator block)
- Building layouts (use Group/Stack blocks)
- Adding content (use other content blocks)

---

## Block Structure

```tsx
import { Spacer } from '@/app/components/blocks/design/Spacer';

<Spacer height="32px" />
```

---

## Props API

```typescript
interface SpacerProps {
  /** Spacer height (use CSS variables) */
  height?: string;
  
  /** Preset height size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## Size Examples

### Small (24px)
```tsx
<Spacer size="sm" />
```

### Medium (48px)
```tsx
<Spacer size="md" />
```

### Large (96px)
```tsx
<Spacer size="lg" />
```

### Extra Large (128px)
```tsx
<Spacer size="xl" />
```

### Custom Height
```tsx
<Spacer height="var(--spacing-12)" />
```

---

## CSS Variables

```css
/* Spacing */
--spacing-6        /* Small spacer (24px) */
--spacing-12       /* Medium spacer (48px) */
--spacing-24       /* Large spacer (96px) */
--spacing-32       /* Extra large spacer (128px) */
```

---

## BEM Class Naming

```css
.wp-block-spacer           /* Root element */
.wp-block-spacer--sm       /* Small size */
.wp-block-spacer--md       /* Medium size */
.wp-block-spacer--lg       /* Large size */
.wp-block-spacer--xl       /* Extra large size */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Decorative:** Purely structural, no content
- ✅ **ARIA Hidden:** Should be hidden from screen readers
- ✅ **Non-Interactive:** No focusable elements
- ✅ **Semantic:** Use `<div>` with appropriate role

### Implementation
```tsx
<div 
  className="wp-block-spacer"
  aria-hidden="true"
  role="presentation"
  style={{ height: 'var(--spacing-12)' }}
/>
```

---

## WordPress Mapping

```html
<!-- wp:spacer {"height":"48px"} -->
<div class="wp-block-spacer" style="height:48px" aria-hidden="true"></div>
<!-- /wp:spacer -->
```

---

## Usage Examples

### Between Sections
```tsx
<Section>
  <Heading level={2}>Section 1</Heading>
  <Paragraph>Content...</Paragraph>
</Section>

<Spacer size="lg" />

<Section>
  <Heading level={2}>Section 2</Heading>
  <Paragraph>Content...</Paragraph>
</Section>
```

### Custom Spacing
```tsx
<Paragraph>First paragraph</Paragraph>

<Spacer height="var(--spacing-8)" />

<Paragraph>Second paragraph</Paragraph>
```

---

## Related Components

- **[Separator](./separator.md)** - Visual dividers
- **[Stack](./stack.md)** - Vertical layout with spacing
- **[Group](./group.md)** - Content grouping

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
