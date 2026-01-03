# CardGrid Pattern

**Pattern Type:** Listing/Grid  
**WordPress Pattern:** `lsx-design/listing/card-grid`  
**Location:** `/src/app/components/patterns/CardGrid.tsx`

---

## Purpose

Responsive grid of content cards for destinations, posts, or products. Enforces consistent card styling, hover states, and responsive behavior using design system tokens.

---

## Design System Requirements

### Layout
- **Grid Columns:** 1 (mobile) → 2 (tablet) → 3/4 (desktop)
- **Gap:** `gap-8` (32px between cards)
- **Card Aspect Ratio:** 3:2 for images (66.67% padding-top)

### Typography

**Section Title:**
- Use `<Heading level={2}>`
- Size: `var(--text-h2)` (32px)

**Section Description:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-base)`
- Color: `var(--muted-foreground)`
- Max width: 600px

**Card Title:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-h3)` (24px)
- Weight: `var(--font-weight-medium)`
- Color: `var(--card-foreground)`

**Card Excerpt:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-base)`
- Color: `var(--muted-foreground)`
- Line height: 1.6

**Category Badge:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-small)`
- Weight: `var(--font-weight-medium)`
- Transform: Uppercase
- Letter spacing: `0.05em`

**Meta Text (duration, price):**
- Font: `Manrope, sans-serif` (small text exception)
- Size: `var(--text-small)`
- Color: `var(--muted-foreground)`

**Price:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-base)`
- Weight: `var(--font-weight-bold)`
- Color: `var(--primary)`

### Colors

**Card:**
```tsx
backgroundColor: 'var(--card)'
border: '1px solid var(--border)'
color: 'var(--card-foreground)'
```

**Category Badge:**
```tsx
backgroundColor: 'var(--accent)'
color: 'var(--accent-foreground)'
```

**Image Placeholder:**
```tsx
backgroundColor: 'var(--muted)'
```

### Spacing
- **Section Spacing:** Use `<Section spacing="lg">`
- **Card Padding:** `p-6` (24px)
- **Internal Spacing:** `space-y-3` (12px between elements)
- **Border Top Gap:** `pt-3` (12px)

### Border Radius
- **Card:** `var(--radius-lg)` (8px)
- **Category Badge:** `var(--radius)` (4px)

### Interactions

**Hover State:**
```tsx
transform: 'translateY(-8px)'
boxShadow: 'var(--elevation-sm)'
```

**Image Zoom:**
```tsx
// On hover
transform: 'scale(1.1)'
```

---

## Usage

### Basic Grid
```tsx
import { CardGrid } from '../patterns/CardGrid';

const items = [
  {
    id: '1',
    title: 'Safari in Tanzania',
    excerpt: 'Witness the Great Migration...',
    category: 'Wildlife',
    imageUrl: 'https://...',
    href: '#safari-tanzania',
    duration: '7 days',
    price: 'From $3,499'
  },
  // More items...
];

<CardGrid items={items} sectionTitle="Featured Destinations" columns={3} />
```

### Without Section Title
```tsx
<CardGrid items={items} columns={3} />
```

### Two-Column Layout
```tsx
<CardGrid items={items} columns={2} />
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | CardGridItem[] | required | Array of card data |
| `sectionTitle` | string | - | Optional section heading |
| `columns` | `2 \| 3 \| 4` | `3` | Number of columns on desktop |

### CardGridItem Interface
```tsx
interface CardGridItem {
  id: string;              // Unique identifier
  title: string;           // Card title
  excerpt: string;         // Card description
  category: string;        // Category/tag
  imageUrl: string;        // Card image URL
  href: string;            // Link destination
  duration?: string;       // Optional duration (e.g., "7 days")
  price?: string;          // Optional price (e.g., "From $3,499")
}
```

---

## WordPress Implementation

In WordPress, this maps to a **Query Loop Pattern**:

```php
<?php
/**
 * Title: Card Grid
 * Slug: lsx-design/listing/card-grid
 * Categories: listing
 */
?>

<!-- wp:group {"align":"wide"} -->
<div class="wp-block-group alignwide">
  <!-- wp:query -->
  <div class="wp-block-query">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
    
      <!-- wp:post-featured-image /-->
      <!-- wp:post-title /-->
      <!-- wp:post-excerpt /-->
      
    <!-- /wp:post-template -->
  </div>
  <!-- /wp:query -->
</div>
<!-- /wp:group -->
```

---

## Token Enforcement

✅ **REQUIRED:**
- Lexend for all text except small meta
- Manrope for duration/small meta text only
- CSS variables for all colors
- CSS variables for font sizes
- CSS variables for border radius
- Tailwind spacing classes
- Semantic HTML (`<article>` for cards)

❌ **FORBIDDEN:**
- Hard-coded colors (hex codes)
- Hard-coded pixel spacing
- Tailwind font size classes
- Fixed heights for images (use aspect ratio)
- Missing alt text on images

---

## Accessibility

### Semantic HTML
- Each card is an `<article>` element
- Card title uses `<h3>` (assuming section has h2)
- Images have descriptive alt text

### Keyboard Navigation
- All cards are keyboard accessible
- Tab through cards in logical order
- Focus states visible on hover/focus

### Screen Readers
- Card structure is logical (image → category → title → excerpt → meta → link)
- Links have descriptive text ("View Details")
- Category badges are readable

### Image Loading
```tsx
<img 
  src={item.imageUrl}
  alt={item.title}
  loading="lazy"  // Lazy load off-screen images
/>
```

---

## Examples

### Featured Destinations Grid
```tsx
<Section spacing="lg" id="featured">
  <Container>
    <div className="text-center mb-12">
      <Heading level={2}>Featured Destinations</Heading>
      <p style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        color: 'var(--muted-foreground)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        Handpicked experiences curated by our travel experts
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <article key={item.id} /* ... */ />
      ))}
    </div>
  </Container>
</Section>
```

### Individual Card Structure
```tsx
<article 
  className="group"
  style={{
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  }}
>
  {/* Image */}
  <div style={{ paddingTop: '66.67%', position: 'relative' }}>
    <img /* ... */ />
    <span style={{ /* category badge */ }}>
      {item.category}
    </span>
  </div>
  
  {/* Content */}
  <div className="p-6 space-y-3">
    <h3 style={{ /* title styles */ }}>
      {item.title}
    </h3>
    <p style={{ /* excerpt styles */ }}>
      {item.excerpt}
    </p>
    
    {/* Meta */}
    <div className="flex items-center gap-4 pt-3">
      {item.duration && (
        <span style={{ /* duration styles */ }}>
          {item.duration}
        </span>
      )}
      {item.price && (
        <span style={{ /* price styles */ }}>
          {item.price}
        </span>
      )}
    </div>
    
    {/* CTA */}
    <a href={item.href} style={{ /* link styles */ }}>
      View Details →
    </a>
  </div>
</article>
```

---

## Responsive Behavior

### Mobile (< 768px)
- 1 column
- Full-width cards
- Stack vertically

### Tablet (768px - 1024px)
- 2 columns for 3/4 column layouts
- Maintains aspect ratio

### Desktop (> 1024px)
- 2/3/4 columns based on prop
- Hover effects enabled

---

## Content Guidelines

### Card Titles
- **Length:** 3-6 words ideal
- **Tone:** Descriptive, enticing
- **Format:** Title case

### Card Excerpts
- **Length:** 10-20 words (1-2 sentences)
- **Purpose:** Expand on title, add context
- **Tone:** Descriptive, informative

### Category Labels
- **Length:** 1-2 words
- **Examples:** Wildlife, Adventure, Beach, Culture
- **Format:** Sentence case

### Duration
- **Format:** "X days" or "X-Y days"
- **Examples:** "7 days", "5-7 days", "2 weeks"

### Price
- **Format:** "From $X,XXX"
- **Currency:** Always include currency symbol
- **Examples:** "From $2,999", "From €1,499"

---

## Variants

### Compact Cards (no image)
```tsx
// Remove image section, adjust spacing
<article style={{ /* ... */ }}>
  <div className="p-6">
    <span>{item.category}</span>
    <h3>{item.title}</h3>
    <p>{item.excerpt}</p>
  </div>
</article>
```

### Four-Column Grid
```tsx
<CardGrid items={items} columns={4} />
// Best for smaller cards or many items
```

---

## Empty States

When no items exist, show EmptyState pattern:

```tsx
import { EmptyState } from '../patterns/EmptyState';

{items.length === 0 ? (
  <EmptyState
    title="No Destinations Found"
    message="Check back soon for new travel experiences."
  />
) : (
  <CardGrid items={items} columns={3} />
)}
```

---

## Design System Integration

This pattern enforces:
1. **Lexend typography** for headings and body
2. **Manrope typography** for small meta text only
3. **CSS variable colors** for all elements
4. **Responsive grid** using Tailwind
5. **Consistent card styling** across all grids
6. **Hover interactions** for better UX
7. **Lazy loading images** for performance
8. **WordPress Query Loop** compatibility

---

**Last Updated:** December 24, 2024
