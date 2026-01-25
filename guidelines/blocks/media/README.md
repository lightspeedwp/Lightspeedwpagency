# Media Blocks

Complete guidelines for WordPress media blocks as React components.

## 📚 Available Media Blocks

1. **[Image](./image.md)** ✅ - Images with lazy loading and responsive
2. **[Gallery](./gallery.md)** ✅ - Image galleries with grid layouts
3. **[Cover](./cover.md)** ✅ - Cover/hero images with overlay
4. **[Video](./video.md)** ✅ - Video players and embeds
5. **[Audio](./audio.md)** - Audio players and embeds
6. **[File](./file.md)** - File downloads with icons
7. **[Media & Text](./media-text.md)** - Side-by-side media and text

## 🎯 Media Blocks Principles

### 1. Image Optimization

**CRITICAL:** All images MUST be optimized:

- **Lazy loading** enabled by default
- **Responsive images** with srcset
- **Alt text** required for accessibility
- **Loading states** with blur-up effect
- **Error fallbacks** for failed loads

### 2. Image Sources

**Use these image sources ONLY:**

```tsx
// ✅ CORRECT - Figma assets
import img from "figma:asset/abc123.png";

// ✅ CORRECT - Unsplash tool
<ImageWithFallback 
  src={unsplashImage} 
  alt="Description"
/>

// ✅ CORRECT - ImageWithFallback component
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// ❌ WRONG - Never hardcode URLs
src="https://example.com/image.jpg"
```

### 3. Responsive Design

All media blocks MUST be responsive:

```css
.wp-block-image img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Mobile-first responsive images */
@media (max-width: 768px) {
  .wp-block-image {
    width: 100%;
  }
}
```

### 4. Accessibility

**Required for all media blocks:**

- Alt text for images
- Captions for videos/audio
- Keyboard controls
- Screen reader support
- ARIA labels

## 📁 File Structure

### Component Location
```
/src/app/components/blocks/media/
├── Image.tsx
├── Gallery.tsx
├── Audio.tsx
├── Cover.tsx
├── File.tsx
├── MediaText.tsx
├── Video.tsx
└── index.ts
```

### CSS Location
```
/src/styles/blocks/media/
├── image.css
├── gallery.css
├── audio.css
├── cover.css
├── file.css
├── media-text.css
└── video.css
```

## 🎨 Design System Integration

### Image Block Styling

```css
.wp-block-image {
  /* Spacing */
  margin-bottom: var(--spacing-8);
  
  /* Borders */
  border-radius: var(--radius);
  overflow: hidden;
  
  /* Shadows */
  box-shadow: var(--shadow-sm);
}

.wp-block-image img {
  max-width: 100%;
  height: auto;
  display: block;
}

.wp-block-image figcaption {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  color: var(--foreground-subtle);
  padding: var(--spacing-3);
  text-align: center;
}
```

### Gallery Block Styling

```css
.wp-block-gallery {
  display: grid;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-12);
}

/* 2-column grid on mobile, 3-column on desktop */
.wp-block-gallery {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .wp-block-gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 📦 Common Props Interface

```tsx
interface CommonMediaBlockProps {
  /** Media source URL or figma:asset */
  src: string;
  
  /** Alt text for accessibility (required for images) */
  alt?: string;
  
  /** Caption/description */
  caption?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Loading behavior */
  loading?: 'lazy' | 'eager';
  
  /** Error fallback */
  onError?: () => void;
}
```

## ✅ Media Block Checklist

### Image Optimization

- [ ] Lazy loading enabled
- [ ] Responsive srcset provided
- [ ] Alt text required
- [ ] Loading states implemented
- [ ] Error fallbacks implemented
- [ ] Blur-up effect on load

### Component Structure

- [ ] Created in `/src/app/components/blocks/media/`
- [ ] Has dedicated CSS file in `/src/styles/blocks/media/`
- [ ] Uses WordPress block class naming (`.wp-block-{name}`)
- [ ] Imports CSS at top of component
- [ ] Exports from index.ts

### Design System Compliance

- [ ] Uses CSS variables for ALL styling
- [ ] Uses design system spacing
- [ ] Uses design system colors
- [ ] Uses design system border radius
- [ ] NO hardcoded values
- [ ] NO Tailwind classes

### Accessibility

- [ ] Alt text for images (descriptive, not decorative)
- [ ] Captions for audio/video
- [ ] Keyboard controls for media players
- [ ] Focus states visible
- [ ] ARIA labels where needed
- [ ] Screen reader announcements

### WordPress Mapping

- [ ] Maps to WordPress core block
- [ ] Uses WordPress block class names
- [ ] Supports block attributes
- [ ] Compatible with block editor

## 🚀 Image Block Example

### Component

```tsx
/**
 * Image Block Component
 * 
 * WordPress core block: wp:image
 * 
 * @see /guidelines/blocks/media/image.md
 */

import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import '@/styles/blocks/media/image.css';

export interface ImageBlockProps {
  /** Image source (figma:asset or Unsplash) */
  src: string;
  /** Alt text (required for accessibility) */
  alt: string;
  /** Optional caption */
  caption?: string;
  /** Additional CSS classes */
  className?: string;
  /** Loading behavior */
  loading?: 'lazy' | 'eager';
}

export const ImageBlock = ({ 
  src, 
  alt, 
  caption, 
  className = '',
  loading = 'lazy'
}: ImageBlockProps) => {
  return (
    <figure className={`wp-block-image ${className}`}>
      <ImageWithFallback 
        src={src}
        alt={alt}
        loading={loading}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
```

### CSS

```css
/**
 * Image Block Styles
 * 
 * WordPress block: .wp-block-image
 */

.wp-block-image {
  margin-bottom: var(--spacing-8);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.wp-block-image img {
  max-width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.wp-block-image:hover img {
  transform: scale(1.02);
}

.wp-block-image figcaption {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  color: var(--foreground-subtle);
  padding: var(--spacing-3);
  text-align: center;
  background: var(--background-subtle);
}
```

## 📚 Related Documentation

- **[Image Block](./image.md)** - Images with optimization
- **[Gallery Block](./gallery.md)** - Image galleries
- **[Cover Block](./cover.md)** - Hero images with overlay
- **[ImageWithFallback](../../components/ImageWithFallback.md)** - Base image component
- **[Import Guidelines](../../imports/import-guidelines.md)** - Image imports
- **[Main Guidelines](../../Guidelines.md)** - System principles

---

**Last Updated:** January 22, 2025  
**Category:** Media Blocks  
**WordPress Compatibility:** FSE (Full Site Editing)
