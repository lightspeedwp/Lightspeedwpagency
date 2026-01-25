# Cover Block

**WordPress Block:** `core/cover`  
**Category:** Media Blocks  
**Component:** `/src/app/components/blocks/media/Cover.tsx`  
**CSS File:** `/src/styles/blocks/media/cover.css`

---

## Purpose

The Cover block displays images or videos with text overlay. It provides hero sections, banners, and full-width content blocks with visual backgrounds.

**Use this block when:**
- Creating hero sections
- Building call-to-action banners
- Adding text over images
- Creating parallax effects
- Building landing page headers

**Do NOT use this block when:**
- Displaying simple images (use Image block)
- Creating image galleries (use Gallery block)
- Showing videos without overlay (use Video block)

---

## Block Structure

```tsx
import { Cover } from '@/app/components/blocks/media/Cover';

<Cover 
  backgroundImage="/hero.jpg"
  overlayOpacity={0.5}
  minHeight="500px"
>
  <h1>Welcome to LSX Design</h1>
  <p>Building modern WordPress experiences</p>
</Cover>
```

---

## Props API

```typescript
interface CoverProps {
  /** Content to overlay */
  children: React.ReactNode;
  
  /** Background image URL */
  backgroundImage?: string;
  
  /** Background video URL */
  backgroundVideo?: string;
  
  /** Overlay color */
  overlayColor?: string;
  
  /** Overlay opacity (0-1) */
  overlayOpacity?: number;
  
  /** Minimum height */
  minHeight?: string;
  
  /** Content alignment */
  contentPosition?: 'top' | 'center' | 'bottom';
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## CSS Variables

```css
/* Spacing */
--spacing-8        /* Content padding */
--spacing-16       /* Vertical padding */

/* Colors */
--primary          /* Overlay color */
--foreground       /* Text color */

/* Typography */
--font-primary     /* Heading font */
--text-h1          /* Heading size */
```

---

## BEM Class Naming

```css
.wp-block-cover                  /* Root container */
.wp-block-cover--top             /* Top aligned */
.wp-block-cover--center          /* Center aligned */
.wp-block-cover--bottom          /* Bottom aligned */
.wp-block-cover--parallax        /* Parallax effect */

.wp-block-cover__background      /* Background image/video */
.wp-block-cover__overlay         /* Color overlay */
.wp-block-cover__content         /* Content wrapper */
```

---

## WordPress Mapping

```html
<!-- wp:cover {"url":"/hero.jpg","dimRatio":50} -->
<div class="wp-block-cover">
  <span aria-hidden="true" class="wp-block-cover__background"></span>
  <div class="wp-block-cover__inner-container">
    <h1>Hero Title</h1>
  </div>
</div>
<!-- /wp:cover -->
```

---

## Usage Examples

### Hero Section
```tsx
<Cover 
  backgroundImage="/hero-bg.jpg"
  overlayOpacity={0.4}
  minHeight="600px"
  contentPosition="center"
>
  <h1>Modern WordPress Development</h1>
  <p>Build faster, deploy smarter</p>
  <Button variant="primary">Get Started</Button>
</Cover>
```

### CTA Banner
```tsx
<Cover 
  backgroundImage="/cta-bg.jpg"
  overlayColor="var(--primary)"
  overlayOpacity={0.9}
  minHeight="400px"
>
  <h2>Ready to Transform Your Website?</h2>
  <Button variant="secondary">Contact Us</Button>
</Cover>
```

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
