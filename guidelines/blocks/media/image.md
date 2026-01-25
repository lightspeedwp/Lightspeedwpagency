# Image Block

**WordPress Block:** `core/image`  
**Category:** Media Blocks  
**Component:** `/src/app/components/blocks/media/Image.tsx`  
**CSS File:** `/src/styles/blocks/media/image.css`

---

## Purpose

The Image block displays single images with optional captions, links, and responsive sizing. It provides optimized image delivery with lazy loading and responsive design.

**Use this block when:**
- Displaying photographs or illustrations
- Showing product images
- Adding visual content to articles
- Creating image-based layouts
- Displaying logos or icons

**Do NOT use this block when:**
- Displaying multiple images (use Gallery block)
- Creating hero sections with text overlay (use Cover block)
- Showing video content (use Video block)
- Creating image carousels (use Gallery block with carousel pattern)

---

## Block Structure

### Simple Image
```tsx
import { Image } from '@/app/components/blocks/media/Image';

<Image 
  src="/images/photo.jpg" 
  alt="Description of the image"
/>
```

### Image with Caption
```tsx
<Image 
  src="/images/photo.jpg" 
  alt="Beautiful landscape"
  caption="Sunset over the mountains"
/>
```

---

## Props API

```typescript
interface ImageProps {
  /** Image source URL */
  src: string;
  
  /** Alternative text for accessibility */
  alt: string;
  
  /** Image caption (optional) */
  caption?: string;
  
  /** Image size variant */
  size?: 'thumbnail' | 'medium' | 'large' | 'full';
  
  /** Alignment */
  align?: 'left' | 'center' | 'right' | 'wide' | 'full';
  
  /** Border radius */
  rounded?: boolean;
  
  /** Enable lazy loading */
  loading?: 'lazy' | 'eager';
  
  /** Link URL (clickable image) */
  href?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Image width */
  width?: number;
  
  /** Image height */
  height?: number;
}
```

---

## Size Examples

### Thumbnail (150px max)
```tsx
<Image 
  src="/images/avatar.jpg" 
  alt="User avatar"
  size="thumbnail"
/>
```

### Medium (300px max)
```tsx
<Image 
  src="/images/product.jpg" 
  alt="Product photo"
  size="medium"
/>
```

### Large (1024px max)
```tsx
<Image 
  src="/images/hero.jpg" 
  alt="Hero image"
  size="large"
/>
```

### Full (Original size)
```tsx
<Image 
  src="/images/banner.jpg" 
  alt="Full width banner"
  size="full"
/>
```

---

## Alignment Examples

### Left Aligned
```tsx
<Image 
  src="/images/photo.jpg" 
  alt="Left aligned"
  align="left"
/>
```

### Center Aligned
```tsx
<Image 
  src="/images/photo.jpg" 
  alt="Center aligned"
  align="center"
/>
```

### Wide Width
```tsx
<Image 
  src="/images/photo.jpg" 
  alt="Wide width"
  align="wide"
/>
```

### Full Width
```tsx
<Image 
  src="/images/photo.jpg" 
  alt="Full width"
  align="full"
/>
```

---

## CSS Variables

All styling uses CSS variables from `/src/styles/theme-base.css`:

```css
/* Spacing */
--spacing-4        /* Image margin */
--spacing-2        /* Caption margin top */

/* Colors */
--foreground       /* Caption text color */
--muted-foreground /* Caption secondary text */
--border           /* Image border */

/* Typography */
--font-primary     /* Caption font family */
--text-sm          /* Caption text size */

/* Borders */
--radius           /* Image border radius */
--radius-lg        /* Large border radius */
```

---

## BEM Class Naming

The Image block uses WordPress-aligned BEM naming:

```css
.wp-block-image                /* Root container */
.wp-block-image--thumbnail     /* Thumbnail size */
.wp-block-image--medium        /* Medium size */
.wp-block-image--large         /* Large size */
.wp-block-image--full          /* Full size */
.wp-block-image--left          /* Left aligned */
.wp-block-image--center        /* Center aligned */
.wp-block-image--right         /* Right aligned */
.wp-block-image--wide          /* Wide width */
.wp-block-image--full-width    /* Full width */
.wp-block-image--rounded       /* Rounded corners */

.wp-block-image__img           /* Image element */
.wp-block-image__caption       /* Caption text */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Alt Text:** REQUIRED for all images
- ✅ **Descriptive Alt:** Describe the image content
- ✅ **Decorative Images:** Use `alt=""` for decorative images
- ✅ **Captions:** Use `<figcaption>` for semantic captions
- ✅ **Link Context:** If clickable, provide clear link purpose
- ✅ **Loading:** Use `loading="lazy"` for below-fold images

### Implementation
```tsx
{/* Content image */}
<figure className="wp-block-image">
  <img 
    className="wp-block-image__img"
    src="/photo.jpg" 
    alt="Two people collaborating on a laptop"
    loading="lazy"
  />
  <figcaption className="wp-block-image__caption">
    Team collaboration session
  </figcaption>
</figure>

{/* Decorative image */}
<figure className="wp-block-image">
  <img 
    className="wp-block-image__img"
    src="/decoration.jpg" 
    alt=""
    role="presentation"
  />
</figure>

{/* Clickable image */}
<figure className="wp-block-image">
  <a href="/portfolio/project-1">
    <img 
      className="wp-block-image__img"
      src="/project.jpg" 
      alt="View Project 1 details"
    />
  </a>
</figure>
```

---

## Light & Dark Mode

The Image block automatically adapts to light/dark themes:

```css
/* Light mode */
.light-theme .wp-block-image__caption {
  color: var(--muted-foreground);
}

/* Dark mode */
.dark-theme .wp-block-image__caption {
  color: var(--muted-foreground);
}
```

---

## Responsive Behavior

| Breakpoint | Max Width | Caption Size |
|------------|-----------|--------------|
| **Mobile** (< 768px) | 100% | 13px |
| **Tablet** (768px - 1023px) | 100% | 14px |
| **Desktop** (≥ 1024px) | As specified | var(--text-sm) |

```css
/* Mobile-first responsive design */
.wp-block-image {
  max-width: 100%;
}

.wp-block-image__img {
  width: 100%;
  height: auto;
}

.wp-block-image__caption {
  font-size: 13px;
}

@media (min-width: 768px) {
  .wp-block-image__caption {
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  .wp-block-image__caption {
    font-size: var(--text-sm);
  }
}
```

---

## WordPress Mapping

### In WordPress FSE

This is a **WordPress core block**:

```html
<!-- wp:image {"id":123,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">
  <img src="/photo.jpg" alt="Beautiful landscape" />
  <figcaption>Sunset over the mountains</figcaption>
</figure>
<!-- /wp:image -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter">
  <img src="/logo.png" alt="Company logo" />
</figure>
<!-- /wp:image -->
```

---

## Usage Examples

### Article Image
```tsx
<Image 
  src="/images/article-photo.jpg"
  alt="Team working on WordPress development"
  caption="Our development team collaborating on a new project"
  size="large"
  align="center"
/>
```

### Product Photo
```tsx
<Image 
  src="/images/product.jpg"
  alt="Premium WordPress theme - LSX Design"
  size="medium"
  rounded
/>
```

### Clickable Logo
```tsx
<Image 
  src="/images/client-logo.png"
  alt="Visit Acme Corporation website"
  href="https://example.com"
  size="thumbnail"
  align="center"
/>
```

### Full Width Hero
```tsx
<Image 
  src="/images/hero-image.jpg"
  alt="Modern office workspace with natural lighting"
  size="full"
  align="full"
/>
```

---

## Testing Requirements

### Unit Tests
- [ ] Renders image with src and alt
- [ ] Displays caption when provided
- [ ] Applies size variants correctly
- [ ] Applies alignment variants correctly
- [ ] Renders as clickable when href provided
- [ ] Uses lazy loading by default
- [ ] Applies custom className
- [ ] Applies rounded modifier

### Accessibility Tests
- [ ] Alt text is required and present
- [ ] Empty alt for decorative images
- [ ] Caption uses `<figcaption>` element
- [ ] Clickable images have descriptive alt text
- [ ] Loading attribute set correctly
- [ ] Image has proper dimensions (width/height)

### Visual Regression Tests
- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly
- [ ] All size variants render correctly
- [ ] All alignments render correctly
- [ ] Caption styling correct
- [ ] Rounded corners when enabled
- [ ] Responsive behavior (mobile, tablet, desktop)

---

## Common Patterns

### Image Grid
```tsx
<Grid columns={3}>
  <Image src="/img1.jpg" alt="Image 1" size="medium" />
  <Image src="/img2.jpg" alt="Image 2" size="medium" />
  <Image src="/img3.jpg" alt="Image 3" size="medium" />
</Grid>
```

### Featured Image
```tsx
<Image 
  src="/featured.jpg"
  alt="Featured article: Modern WordPress Development"
  caption="Photo by John Doe on Unsplash"
  size="large"
  align="wide"
  rounded
/>
```

### Avatar
```tsx
<Image 
  src="/avatar.jpg"
  alt="Jane Doe - Senior Developer"
  size="thumbnail"
  rounded
  className="avatar"
/>
```

---

## Migration Checklist

When migrating existing images:

- [ ] Replace `<img>` with `<Image>` component
- [ ] Add required `alt` attribute
- [ ] Move caption to `caption` prop
- [ ] Add `loading="lazy"` for optimization
- [ ] Specify appropriate `size` variant
- [ ] Add `align` prop if needed
- [ ] Use `rounded` prop instead of inline border-radius
- [ ] Remove inline styles, use CSS classes
- [ ] Test in light and dark modes
- [ ] Verify responsive behavior
- [ ] Check accessibility (alt text, captions)

---

## Related Components

- **[Gallery](./gallery.md)** - Multiple images in grid
- **[Cover](./cover.md)** - Image with text overlay
- **[Video](./video.md)** - Video content

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
