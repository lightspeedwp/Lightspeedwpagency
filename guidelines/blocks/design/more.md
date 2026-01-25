# More Block

**WordPress Block:** `core/more`  
**Category:** Design Blocks  
**Component:** `/src/app/components/blocks/design/More.tsx`  
**CSS File:** `/src/styles/blocks/design/more.css`

---

## Purpose

The More block creates a read-more divider in post content. It marks where the post excerpt ends and the full content begins. This is commonly used in blog archives to show previews.

**Use this block when:**
- Creating post excerpts for archives
- Controlling where previews end
- Showing "Continue reading" links
- Building blog listing pages
- Limiting preview content

**Do NOT use this block when:**
- Creating visual separators (use Separator block)
- Adding vertical spacing (use Spacer block)
- Creating page breaks (use Page Break block)
- Building layouts (use Group/Stack blocks)

---

## Block Structure

### Simple More Block
```tsx
import { More } from '@/app/components/blocks/design/More';

<More />
```

### With Custom Text
```tsx
<More text="Continue reading" />
```

---

## Props API

```typescript
interface MoreProps {
  /** Custom link text */
  text?: string;
  
  /** Show visual indicator in editor */
  showIndicator?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## CSS Variables

All styling uses CSS variables from `/src/styles/theme-base.css`:

```css
/* Colors */
--border           /* Line color */
--muted            /* Background */
--foreground       /* Text color */
--primary          /* Link color */

/* Typography */
--font-primary     /* Text font */
--text-sm          /* Text size */

/* Spacing */
--spacing-4        /* Button padding */
--spacing-6        /* Vertical margin */
```

---

## BEM Class Naming

The More block uses WordPress-aligned BEM naming:

```css
.wp-block-more                /* Root element */
.wp-block-more__indicator     /* Visual indicator */
.wp-block-more__text          /* Link text */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Semantic HTML:** Use proper HTML structure
- ✅ **Link Semantics:** Clear "Continue reading" link
- ✅ **ARIA Label:** Descriptive link text
- ✅ **Screen Readers:** Announce as navigation link
- ✅ **Keyboard Nav:** Focusable and keyboard accessible
- ✅ **Focus States:** Visible focus indicators

### Implementation
```tsx
{/* Semantic more block */}
<div className="wp-block-more">
  <a 
    href="#more-content"
    className="wp-block-more__text"
    aria-label="Continue reading article"
  >
    Continue reading
  </a>
</div>

{/* Editor indicator (hidden in production) */}
<div className="wp-block-more">
  <span className="wp-block-more__indicator">
    — Read more —
  </span>
</div>
```

---

## Light & Dark Mode

The More block automatically adapts to light/dark themes:

```css
/* Light mode */
.light-theme .wp-block-more__text {
  color: var(--primary);
}

/* Dark mode */
.dark-theme .wp-block-more__text {
  color: var(--primary);
}
```

---

## Responsive Behavior

| Breakpoint | Text Size | Padding |
|------------|-----------|---------|
| **Mobile** (< 768px) | 14px | var(--spacing-3) |
| **Tablet** (768px - 1023px) | var(--text-sm) | var(--spacing-4) |
| **Desktop** (≥ 1024px) | var(--text-sm) | var(--spacing-4) |

---

## WordPress Mapping

### In WordPress FSE

This is a **WordPress core block**:

```html
<!-- wp:more -->
<!--more-->
<!-- /wp:more -->

<!-- wp:more {"customText":"Read the full article"} -->
<!--more Read the full article-->
<!-- /wp:more -->
```

**WordPress Behavior:**
- In archive/listing views: Shows content before `<!--more-->`
- In single post views: Shows all content
- Generates "Continue reading" link automatically

---

## Usage Examples

### Blog Post Preview
```tsx
<article>
  <Heading level={2}>Understanding WordPress Blocks</Heading>
  <Paragraph>
    WordPress blocks are the building blocks of modern WordPress sites...
  </Paragraph>
  <Paragraph>
    In this article, we'll explore how blocks work and why they're important.
  </Paragraph>
  
  {/* Content above shown in excerpts */}
  <More text="Read the full guide" />
  
  {/* Content below only shown in single post view */}
  <Heading level={3}>What are Blocks?</Heading>
  <Paragraph>
    Blocks are discrete units of content...
  </Paragraph>
</article>
```

### Custom Read More Text
```tsx
<article>
  <Heading level={2}>10 Tips for Better WordPress Sites</Heading>
  <Paragraph>
    Here are our top 10 tips for building better WordPress websites...
  </Paragraph>
  
  <More text="See all 10 tips →" />
  
  <Paragraph>
    Tip 1: Use a design system...
  </Paragraph>
</article>
```

---

## Testing Requirements

### Unit Tests
- [ ] Renders more block
- [ ] Displays custom text
- [ ] Shows indicator in editor mode
- [ ] Applies custom className
- [ ] Uses CSS variables

### Accessibility Tests
- [ ] Link has proper ARIA label
- [ ] Keyboard accessible (focusable)
- [ ] Focus states visible
- [ ] Screen readers announce correctly
- [ ] Link purpose is clear

### Visual Regression Tests
- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly
- [ ] Responsive behavior works
- [ ] Focus states visible

---

## Common Patterns

### Standard Blog Post
```tsx
<article>
  <Heading level={2}>Post Title</Heading>
  <Image src="/featured.jpg" alt="Featured image" />
  <Paragraph>Introduction paragraph...</Paragraph>
  
  <More />
  
  <Paragraph>Full article content...</Paragraph>
</article>
```

### Tutorial with Custom CTA
```tsx
<article>
  <Heading level={2}>Step-by-Step Tutorial</Heading>
  <Paragraph>
    Learn how to build a WordPress theme from scratch...
  </Paragraph>
  
  <More text="View complete tutorial →" />
  
  <Heading level={3}>Step 1: Setup</Heading>
  <Paragraph>First, let's set up the development environment...</Paragraph>
</article>
```

### News Article
```tsx
<article>
  <Heading level={2}>Latest Product Release</Heading>
  <Paragraph>
    We're excited to announce our latest product...
  </Paragraph>
  
  <More text="Read full announcement" />
  
  <Paragraph>Features include...</Paragraph>
</article>
```

---

## Migration Checklist

When migrating existing more blocks:

- [ ] Replace `<!--more-->` with `<More>` component
- [ ] Add custom text if needed
- [ ] Remove inline styles
- [ ] Test in light and dark modes
- [ ] Verify link is keyboard accessible
- [ ] Check focus states
- [ ] Test in archive and single views

---

## Related Components

- **[Separator](./separator.md)** - Visual dividers
- **[Page Break](./page-break.md)** - Page pagination
- **[Buttons](./buttons.md)** - Call-to-action buttons

---

## WordPress Behavior Notes

### Archive Views (Listing Pages)
- Content before `<More>` is displayed
- "Continue reading" link appears
- Link points to full article

### Single Post Views
- All content is displayed
- More block is hidden/removed
- No visual indication

### RSS Feeds
- Only excerpt content (before More block)
- Full content available in feed item link

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
