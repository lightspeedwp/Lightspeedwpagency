# WordPress Core Block: Card

**Block Name:** `lsx/card` (Custom Block)
**Category:** Design Blocks
**Status:** ✅ Production Ready
**WordPress FSE:** Full compatibility
**Accessibility:** WCAG 2.1 AA compliant

---

## Overview

The **Card block** is a flexible container component used to group related content. It is a fundamental building block for modern web interfaces, used for blog posts, product listings, features, and more.

**Common Use Cases:**
- Blog post previews
- Product cards
- Feature highlights
- Team member profiles
- Testimonials

---

## WordPress Mapping

### WordPress Block Structure

In WordPress, a "Card" is typically composed using a **Group** block with custom styles, or a dedicated custom block. This implementation provides a dedicated Card component structure.

```html
<!-- wp:group {"className":"wp-block-card"} -->
<div class="wp-block-group wp-block-card">
  <!-- wp:group {"className":"wp-block-card__header"} -->
  <div class="wp-block-group wp-block-card__header">
    <!-- wp:heading {"level":3,"className":"wp-block-card__title"} -->
    <h3 class="wp-block-heading wp-block-card__title">Card Title</h3>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"className":"wp-block-card__description"} -->
    <p class="wp-block-card__description">Card description...</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->
  
  <!-- wp:group {"className":"wp-block-card__content"} -->
  <div class="wp-block-group wp-block-card__content">
    <!-- Content here -->
  </div>
  <!-- /wp:group -->
  
  <!-- wp:group {"className":"wp-block-card__footer"} -->
  <div class="wp-block-group wp-block-card__footer">
    <!-- Footer content -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->
```

---

## React Component

### Basic Usage

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/app/components/blocks/design/Card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here.</p>
  </CardContent>
  <CardFooter>
    <button>Action</button>
  </CardFooter>
</Card>
```

### With Image

```tsx
<Card>
  <div className="wp-block-card__image">
    <img src="..." alt="..." />
  </div>
  <CardHeader>
    <CardTitle>Article Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Excerpt...</p>
  </CardContent>
</Card>
```

---

## Component API

### Sub-components

| Component | Description |
|-----------|-------------|
| `Card` | Main wrapper with border, background, and shadow |
| `CardHeader` | Header section for title and description |
| `CardTitle` | Heading element (default h3) |
| `CardDescription` | Muted text for subtitles |
| `CardContent` | Main content area with flex growth |
| `CardFooter` | Footer area for actions |

### Props

All components accept standard HTML attributes (`className`, `style`, etc.) and `ref`.

---

## Accessibility Requirements

- ✅ **Semantic HTML:** Use appropriate heading levels in `CardTitle`.
- ✅ **Contrast:** Ensure text contrast meets WCAG AA standards.
- ✅ **Focus:** Interactive elements inside cards must be accessible via keyboard.
- ✅ **Images:** All images must have alt text.

---

## Styling System

### CSS Variables

All styling uses CSS variables from `/src/styles/theme-base.css`:

**Colors:**
```css
--card                    /* Background color */
--card-foreground         /* Text color */
--border                  /* Border color */
--muted-foreground        /* Description color */
```

**Typography:**
```css
--font-primary            /* Title font */
--font-secondary          /* Body font */
--text-xl                 /* Title size */
--text-base               /* Body size */
--font-weight-semibold    /* Title weight */
```

**Spacing:**
```css
--spacing-6               /* Padding */
--spacing-4               /* Gap between elements */
--spacing-2               /* Gap within header */
```

**Border Radius:**
```css
--radius-lg               /* Card border radius */
```

**Shadows:**
```css
--shadow-sm               /* Default shadow */
--shadow-md               /* Hover shadow */
```

### CSS Classes

```css
.wp-block-card
.wp-block-card__header
.wp-block-card__title
.wp-block-card__description
.wp-block-card__content
.wp-block-card__footer
```

---

## Best Practices

- **Consistent Content:** Keep cards in a grid consistent in height/content amount.
- **Visual Hierarchy:** Use Title/Description/Content structure for clear scanning.
- **Interactive:** If the whole card is clickable, use a `Link` wrapper or `stretched-link` utility.
- **Images:** Use `aspect-ratio` utilities for consistent image sizing.
