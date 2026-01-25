# Page Break Block

**WordPress Block:** `core/nextpage`  
**Category:** Design Blocks  
**Component:** `/src/app/components/blocks/design/PageBreak.tsx`  
**CSS File:** `/src/styles/blocks/design/page-break.css`

---

## Purpose

The Page Break block creates pagination points in long-form content. It splits content into multiple pages, improving readability and performance for lengthy articles.

**Use this block when:**
- Creating multi-page articles
- Splitting long-form content
- Improving page load performance
- Creating chapter breaks
- Paginating tutorials or guides

**Do NOT use this block when:**
- Creating visual separators (use Separator block)
- Adding vertical spacing (use Spacer block)
- Building layouts (use Group/Stack blocks)

---

## Block Structure

```tsx
import { PageBreak } from '@/app/components/blocks/design/PageBreak';

<PageBreak />
```

---

## Props API

```typescript
interface PageBreakProps {
  /** Additional CSS classes */
  className?: string;
  
  /** Show visual indicator in editor */
  showIndicator?: boolean;
}
```

---

## CSS Variables

```css
/* Colors */
--border           /* Indicator line color */
--muted            /* Indicator background */
--foreground       /* Indicator text */

/* Typography */
--font-primary     /* Indicator font */
--text-xs          /* Indicator text size */

/* Spacing */
--spacing-4        /* Indicator padding */
--spacing-6        /* Vertical margin */
```

---

## BEM Class Naming

```css
.wp-block-page-break              /* Root element */
.wp-block-page-break__indicator   /* Visual indicator */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Semantic HTML:** Use `<div>` with page-break CSS
- ✅ **Screen Readers:** Hidden from screen readers
- ✅ **Non-Interactive:** No focusable elements
- ✅ **Print Behavior:** Proper page breaks in print

### Implementation
```tsx
<div 
  className="wp-block-page-break"
  style={{ pageBreakAfter: 'always' }}
  aria-hidden="true"
  role="presentation"
>
  <span className="wp-block-page-break__indicator">
    Page Break
  </span>
</div>
```

---

## WordPress Mapping

```html
<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->
```

**Rendered as:**
```html
<div class="wp-block-page-break" style="page-break-after: always;"></div>
```

---

## Usage Examples

### Multi-Page Article
```tsx
<article>
  <Heading level={1}>Complete WordPress Guide</Heading>
  
  <Heading level={2}>Chapter 1: Introduction</Heading>
  <Paragraph>Content...</Paragraph>
  
  <PageBreak />
  
  <Heading level={2}>Chapter 2: Setup</Heading>
  <Paragraph>More content...</Paragraph>
  
  <PageBreak />
  
  <Heading level={2}>Chapter 3: Configuration</Heading>
  <Paragraph>Even more content...</Paragraph>
</article>
```

### Tutorial Steps
```tsx
<Heading level={1}>Step-by-Step Tutorial</Heading>

<Heading level={2}>Step 1: Preparation</Heading>
<Paragraph>Instructions...</Paragraph>

<PageBreak />

<Heading level={2}>Step 2: Installation</Heading>
<Paragraph>More instructions...</Paragraph>
```

---

## Testing Requirements

### Unit Tests
- [ ] Renders page break element
- [ ] Applies CSS for print
- [ ] Shows indicator when enabled
- [ ] Applies custom className

### Accessibility Tests
- [ ] Hidden from screen readers
- [ ] Non-interactive
- [ ] Proper page breaks in print

---

## Related Components

- **[Separator](./separator.md)** - Visual dividers
- **[Spacer](./spacer.md)** - Vertical spacing
- **[Group](./group.md)** - Content grouping

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
