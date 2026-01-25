# List Block

**WordPress Block:** `core/list`  
**Category:** Text Blocks  
**Component:** `/src/app/components/blocks/text/List.tsx`  
**CSS File:** `/src/styles/blocks/text/list.css`

---

## Purpose

The List block displays ordered (numbered) or unordered (bulleted) lists. It provides structured, scannable content that helps users quickly understand sequential steps or grouped items.

**Use this block when:**
- Displaying sequential steps or instructions (ordered list)
- Showing a collection of related items (unordered list)
- Breaking down complex information into digestible points
- Creating navigation menus or feature lists
- Listing benefits, features, or specifications

**Do NOT use this block when:**
- Displaying a single item (use Paragraph block)
- Creating data tables (use Table block)
- Building complex layouts (use Group or Columns blocks)
- Adding decorative bullets (use custom patterns instead)

---

## Block Structure

### Unordered List
```tsx
import { List, ListItem } from '@/app/components/blocks/text/List';

<List type="unordered">
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>
```

### Ordered List
```tsx
<List type="ordered">
  <ListItem>Step one</ListItem>
  <ListItem>Step two</ListItem>
  <ListItem>Step three</ListItem>
</List>
```

---

## Props API

```typescript
interface ListProps {
  /** List type */
  type?: 'ordered' | 'unordered';
  
  /** List style variant */
  variant?: 'default' | 'checkmarks' | 'custom';
  
  /** Spacing between items */
  spacing?: 'tight' | 'normal' | 'relaxed';
  
  /** List items */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

interface ListItemProps {
  /** Item content */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## List Type Examples

### Unordered List (Bullets)
```tsx
<List type="unordered">
  <ListItem>WordPress theme development</ListItem>
  <ListItem>Custom block patterns</ListItem>
  <ListItem>WooCommerce integration</ListItem>
  <ListItem>Performance optimization</ListItem>
</List>
```

**Renders as:**
- WordPress theme development
- Custom block patterns
- WooCommerce integration
- Performance optimization

### Ordered List (Numbers)
```tsx
<List type="ordered">
  <ListItem>Discovery and planning</ListItem>
  <ListItem>Design system creation</ListItem>
  <ListItem>Development and testing</ListItem>
  <ListItem>Launch and optimization</ListItem>
</List>
```

**Renders as:**
1. Discovery and planning
2. Design system creation
3. Development and testing
4. Launch and optimization

---

## Variant Examples

### Default Variant
```tsx
<List type="unordered" variant="default">
  <ListItem>Standard bullet points</ListItem>
  <ListItem>Disc markers</ListItem>
</List>
```

### Checkmarks Variant
```tsx
<List type="unordered" variant="checkmarks">
  <ListItem>Feature included</ListItem>
  <ListItem>Feature included</ListItem>
  <ListItem>Feature included</ListItem>
</List>
```

### Custom Variant
```tsx
<List type="unordered" variant="custom">
  <ListItem>Custom markers via CSS</ListItem>
  <ListItem>User-controllable styling</ListItem>
</List>
```

---

## Spacing Examples

### Tight Spacing
```tsx
<List type="unordered" spacing="tight">
  <ListItem>Compact item 1</ListItem>
  <ListItem>Compact item 2</ListItem>
  <ListItem>Compact item 3</ListItem>
</List>
```

### Normal Spacing (default)
```tsx
<List type="unordered" spacing="normal">
  <ListItem>Standard item 1</ListItem>
  <ListItem>Standard item 2</ListItem>
</List>
```

### Relaxed Spacing
```tsx
<List type="unordered" spacing="relaxed">
  <ListItem>Spacious item 1</ListItem>
  <ListItem>Spacious item 2</ListItem>
</List>
```

---

## CSS Variables

All styling uses CSS variables from `/src/styles/theme-base.css`:

```css
/* Typography */
--font-primary     /* List font family (Lexend) */
--text-base        /* List item text size */
--text-sm          /* Nested list text size */

/* Colors */
--foreground       /* List text color */
--muted-foreground /* List marker color */
--primary          /* Checkmark color (variant) */

/* Spacing */
--spacing-2        /* Tight item spacing */
--spacing-3        /* Normal item spacing */
--spacing-4        /* Relaxed item spacing */
--spacing-6        /* List margin bottom */

/* List-specific */
--list-marker-size /* Bullet/number size */
--list-indent      /* Nested list indentation */
```

---

## BEM Class Naming

The List block uses WordPress-aligned BEM naming:

```css
.wp-block-list                /* Root container */
.wp-block-list--ordered       /* Ordered list modifier */
.wp-block-list--unordered     /* Unordered list modifier */
.wp-block-list--checkmarks    /* Checkmarks variant */
.wp-block-list--custom        /* Custom variant */
.wp-block-list--tight         /* Tight spacing */
.wp-block-list--normal        /* Normal spacing */
.wp-block-list--relaxed       /* Relaxed spacing */

.wp-block-list__item          /* List item */
.wp-block-list__item--nested  /* Nested list item */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Semantic HTML:** Use `<ul>`, `<ol>`, and `<li>` elements
- ✅ **Screen Readers:** Lists announced as "list, X items"
- ✅ **Contrast Ratios:** Minimum 4.5:1 for text
- ✅ **Readable Text:** Minimum 16px font size
- ✅ **List Markers:** Not relied upon for meaning
- ✅ **Nested Lists:** Properly indented and structured

### Implementation
```tsx
{/* Unordered list */}
<ul className="wp-block-list wp-block-list--unordered" role="list">
  <li className="wp-block-list__item">Item 1</li>
  <li className="wp-block-list__item">Item 2</li>
</ul>

{/* Ordered list */}
<ol className="wp-block-list wp-block-list--ordered" role="list">
  <li className="wp-block-list__item">Step 1</li>
  <li className="wp-block-list__item">Step 2</li>
</ol>
```

---

## Light & Dark Mode

The List block automatically adapts to light/dark themes using CSS variables:

```css
/* Light mode */
.light-theme .wp-block-list {
  color: var(--foreground);
}

.light-theme .wp-block-list__item::marker {
  color: var(--muted-foreground);
}

/* Dark mode */
.dark-theme .wp-block-list {
  color: var(--foreground);
}

.dark-theme .wp-block-list__item::marker {
  color: var(--muted-foreground);
}
```

All list markers automatically adjust based on the active theme.

---

## Responsive Behavior

| Breakpoint | Font Size | Item Spacing | Indent |
|------------|-----------|--------------|--------|
| **Mobile** (< 768px) | 15px | var(--spacing-2) | 24px |
| **Tablet** (768px - 1023px) | 16px | var(--spacing-3) | 28px |
| **Desktop** (≥ 1024px) | var(--text-base) | var(--spacing-3) | 32px |

```css
/* Mobile-first responsive design */
.wp-block-list {
  font-size: 15px;
  padding-left: 24px;
}

.wp-block-list__item + .wp-block-list__item {
  margin-top: var(--spacing-2);
}

@media (min-width: 768px) {
  .wp-block-list {
    font-size: 16px;
    padding-left: 28px;
  }
  
  .wp-block-list__item + .wp-block-list__item {
    margin-top: var(--spacing-3);
  }
}

@media (min-width: 1024px) {
  .wp-block-list {
    font-size: var(--text-base);
    padding-left: 32px;
  }
}
```

---

## WordPress Mapping

### In WordPress FSE

This is a **WordPress core block**:

```html
<!-- wp:list -->
<ul class="wp-block-list wp-block-list--unordered">
  <li>WordPress theme development</li>
  <li>Custom block patterns</li>
  <li>WooCommerce integration</li>
</ul>
<!-- /wp:list -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list wp-block-list--ordered">
  <li>Discovery and planning</li>
  <li>Design system creation</li>
  <li>Development and testing</li>
</ol>
<!-- /wp:list -->
```

### Block Attributes

```json
{
  "ordered": {
    "type": "boolean",
    "default": false
  },
  "values": {
    "type": "string"
  },
  "className": {
    "type": "string"
  }
}
```

---

## Usage in Templates

### Feature List
```tsx
import { List, ListItem } from '@/app/components/blocks/text/List';

export function FeaturesSection() {
  return (
    <section>
      <h2>Features</h2>
      <List type="unordered" variant="checkmarks">
        <ListItem>Fast performance</ListItem>
        <ListItem>Responsive design</ListItem>
        <ListItem>SEO optimized</ListItem>
        <ListItem>Accessibility compliant</ListItem>
      </List>
    </section>
  );
}
```

### Process Steps
```tsx
export function ProcessSection() {
  return (
    <section>
      <h2>Our Process</h2>
      <List type="ordered" spacing="relaxed">
        <ListItem>Discovery call to understand your needs</ListItem>
        <ListItem>Design system and wireframes</ListItem>
        <ListItem>Development and testing</ListItem>
        <ListItem>Launch and ongoing support</ListItem>
      </List>
    </section>
  );
}
```

### Nested List
```tsx
<List type="unordered">
  <ListItem>
    Services
    <List type="unordered">
      <ListItem>WordPress Development</ListItem>
      <ListItem>WooCommerce Setup</ListItem>
      <ListItem>Performance Optimization</ListItem>
    </List>
  </ListItem>
  <ListItem>
    Support
    <List type="unordered">
      <ListItem>24/7 Availability</ListItem>
      <ListItem>Monthly Maintenance</ListItem>
    </List>
  </ListItem>
</List>
```

---

## Testing Requirements

### Unit Tests
- [ ] Renders unordered list with bullets
- [ ] Renders ordered list with numbers
- [ ] Renders all spacing variants (tight, normal, relaxed)
- [ ] Renders checkmarks variant
- [ ] Handles nested lists correctly
- [ ] Applies custom className
- [ ] Uses correct CSS variables

### Accessibility Tests
- [ ] Uses semantic HTML (`<ul>`, `<ol>`, `<li>`)
- [ ] Has proper `role="list"` attribute
- [ ] Screen readers announce list correctly
- [ ] List items announced as "item X of Y"
- [ ] Keyboard navigation works (Tab through items)
- [ ] Contrast ratios meet WCAG 2.1 AA (4.5:1)

### Visual Regression Tests
- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly
- [ ] All variants render correctly
- [ ] Nested lists properly indented
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Long text wraps properly

---

## Common Patterns

### Feature Comparison List
```tsx
<List type="unordered" variant="checkmarks">
  <ListItem>Unlimited pages and posts</ListItem>
  <ListItem>Custom post types</ListItem>
  <ListItem>Advanced custom fields</ListItem>
  <ListItem>WooCommerce integration</ListItem>
  <ListItem>Performance optimization</ListItem>
</List>
```

### Multi-Level Navigation
```tsx
<List type="unordered">
  <ListItem>
    Services
    <List type="unordered">
      <ListItem>Web Design</ListItem>
      <ListItem>Development</ListItem>
      <ListItem>Maintenance</ListItem>
    </List>
  </ListItem>
  <ListItem>About</ListItem>
  <ListItem>Contact</ListItem>
</List>
```

### Step-by-Step Instructions
```tsx
<List type="ordered" spacing="relaxed">
  <ListItem>
    <strong>Install WordPress</strong>
    <p>Download and install WordPress on your server.</p>
  </ListItem>
  <ListItem>
    <strong>Choose a Theme</strong>
    <p>Select a block theme that supports FSE.</p>
  </ListItem>
  <ListItem>
    <strong>Customize</strong>
    <p>Use the site editor to customize your design.</p>
  </ListItem>
</List>
```

---

## Migration Checklist

When migrating existing lists:

- [ ] Replace `<ul>` or `<ol>` with `<List>` component
- [ ] Replace `<li>` with `<ListItem>` component
- [ ] Remove inline styles, use CSS classes
- [ ] Add appropriate `type` prop (ordered/unordered)
- [ ] Add `variant` prop if using checkmarks
- [ ] Add `spacing` prop if needed
- [ ] Ensure proper nesting for multi-level lists
- [ ] Test in light and dark modes
- [ ] Verify accessibility (semantic HTML, ARIA)
- [ ] Check responsive behavior

---

## Related Components

- **[Paragraph](./paragraph.md)** - Body text content
- **[Heading](./heading.md)** - Section headings
- **[Table](./table.md)** - Tabular data

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
