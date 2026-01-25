# Gallery Block

**WordPress Block:** `core/gallery`  
**Category:** Media Blocks  
**Component:** `/src/app/components/blocks/media/Gallery.tsx`  
**CSS File:** `/src/styles/blocks/media/gallery.css`

---

## Purpose

The Gallery block displays multiple images in a responsive grid layout. It provides organized image collections with consistent spacing and optional captions.

**Use this block when:**
- Displaying photo collections
- Showing portfolio work
- Creating product galleries
- Displaying before/after comparisons
- Building image grids

**Do NOT use this block when:**
- Displaying a single image (use Image block)
- Creating hero sections (use Cover block)
- Showing video content (use Video block)
- Building complex layouts (use Grid block)

---

## Block Structure

```tsx
import { Gallery, GalleryItem } from '@/app/components/blocks/media/Gallery';

<Gallery columns={3}>
  <GalleryItem 
    src="/img1.jpg" 
    alt="Image 1"
    caption="First image"
  />
  <GalleryItem 
    src="/img2.jpg" 
    alt="Image 2"
  />
  <GalleryItem 
    src="/img3.jpg" 
    alt="Image 3"
  />
</Gallery>
```

---

## Props API

```typescript
interface GalleryProps {
  /** Gallery items */
  children: React.ReactNode;
  
  /** Number of columns */
  columns?: 2 | 3 | 4 | 5 | 6;
  
  /** Gap between images */
  gap?: 'sm' | 'md' | 'lg';
  
  /** Image aspect ratio */
  aspectRatio?: 'auto' | 'square' | 'portrait' | 'landscape';
  
  /** Additional CSS classes */
  className?: string;
}

interface GalleryItemProps {
  /** Image source */
  src: string;
  
  /** Alt text */
  alt: string;
  
  /** Caption */
  caption?: string;
  
  /** Link URL */
  href?: string;
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## Column Examples

### 2 Columns
```tsx
<Gallery columns={2}>
  {/* Items */}
</Gallery>
```

### 3 Columns (default)
```tsx
<Gallery columns={3}>
  {/* Items */}
</Gallery>
```

### 4 Columns
```tsx
<Gallery columns={4}>
  {/* Items */}
</Gallery>
```

---

## CSS Variables

```css
/* Spacing */
--spacing-2        /* Small gap */
--spacing-4        /* Medium gap */
--spacing-6        /* Large gap */

/* Colors */
--foreground       /* Caption text */
--muted-foreground /* Caption secondary */

/* Typography */
--font-primary     /* Caption font */
--text-sm          /* Caption size */
```

---

## BEM Class Naming

```css
.wp-block-gallery                /* Root container */
.wp-block-gallery--2-cols        /* 2 columns */
.wp-block-gallery--3-cols        /* 3 columns */
.wp-block-gallery--4-cols        /* 4 columns */
.wp-block-gallery--gap-sm        /* Small gap */
.wp-block-gallery--gap-md        /* Medium gap */
.wp-block-gallery--gap-lg        /* Large gap */
.wp-block-gallery--square        /* Square aspect ratio */

.wp-block-gallery__item          /* Gallery item */
.wp-block-gallery__img           /* Image element */
.wp-block-gallery__caption       /* Caption text */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Alt Text:** Required for all images
- ✅ **Grid Semantics:** Proper list structure
- ✅ **Keyboard Navigation:** Tab through images
- ✅ **Focus States:** Visible focus indicators
- ✅ **Captions:** Use semantic elements

---

## WordPress Mapping

```html
<!-- wp:gallery {"columns":3} -->
<figure class="wp-block-gallery columns-3">
  <ul class="blocks-gallery-grid">
    <li class="blocks-gallery-item">
      <figure>
        <img src="/img1.jpg" alt="Image 1" />
        <figcaption>Caption 1</figcaption>
      </figure>
    </li>
  </ul>
</figure>
<!-- /wp:gallery -->
```

---

## Usage Examples

### Portfolio Gallery
```tsx
<Gallery columns={3} gap="lg">
  <GalleryItem 
    src="/portfolio/project1.jpg"
    alt="E-commerce website project"
    href="/portfolio/project1"
  />
  <GalleryItem 
    src="/portfolio/project2.jpg"
    alt="Blog redesign project"
    href="/portfolio/project2"
  />
</Gallery>
```

### Product Gallery
```tsx
<Gallery columns={4} aspectRatio="square">
  <GalleryItem src="/products/1.jpg" alt="Product 1" />
  <GalleryItem src="/products/2.jpg" alt="Product 2" />
  <GalleryItem src="/products/3.jpg" alt="Product 3" />
  <GalleryItem src="/products/4.jpg" alt="Product 4" />
</Gallery>
```

---

## Related Components

- **[Image](./image.md)** - Single images
- **[Cover](./cover.md)** - Image with overlay
- **[Video](./video.md)** - Video content

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
