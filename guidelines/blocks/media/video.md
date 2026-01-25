# Video Block

**WordPress Block:** `core/video`  
**Category:** Media Blocks  
**Component:** `/src/app/components/blocks/media/Video.tsx`  
**CSS File:** `/src/styles/blocks/media/video.css`

---

## Purpose

The Video block displays video content with controls, captions, and responsive sizing. It supports HTML5 video and embedded videos from platforms like YouTube and Vimeo.

**Use this block when:**
- Displaying video content
- Embedding YouTube/Vimeo videos
- Creating video tutorials
- Showing product demonstrations
- Adding testimonial videos

**Do NOT use this block when:**
- Displaying images (use Image block)
- Creating image galleries (use Gallery block)
- Building hero sections (use Cover block)

---

## Block Structure

### HTML5 Video
```tsx
import { Video } from '@/app/components/blocks/media/Video';

<Video 
  src="/videos/demo.mp4"
  poster="/images/video-thumbnail.jpg"
  controls
/>
```

### YouTube Embed
```tsx
<Video 
  provider="youtube"
  videoId="dQw4w9WgXcQ"
/>
```

---

## Props API

```typescript
interface VideoProps {
  /** Video source URL */
  src?: string;
  
  /** Video provider */
  provider?: 'html5' | 'youtube' | 'vimeo';
  
  /** Video ID (for embeds) */
  videoId?: string;
  
  /** Poster image */
  poster?: string;
  
  /** Show controls */
  controls?: boolean;
  
  /** Autoplay */
  autoplay?: boolean;
  
  /** Loop video */
  loop?: boolean;
  
  /** Muted */
  muted?: boolean;
  
  /** Caption */
  caption?: string;
  
  /** Aspect ratio */
  aspectRatio?: '16:9' | '4:3' | '1:1';
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## CSS Variables

```css
--spacing-4        /* Video margin */
--foreground       /* Caption color */
--font-primary     /* Caption font */
--text-sm          /* Caption size */
--radius           /* Video border radius */
```

---

## BEM Class Naming

```css
.wp-block-video            /* Root container */
.wp-block-video--16-9      /* 16:9 aspect ratio */
.wp-block-video--4-3       /* 4:3 aspect ratio */
.wp-block-video__element   /* Video element */
.wp-block-video__caption   /* Caption text */
```

---

## WordPress Mapping

```html
<!-- wp:video -->
<figure class="wp-block-video">
  <video controls src="/video.mp4"></video>
  <figcaption>Video caption</figcaption>
</figure>
<!-- /wp:video -->
```

---

## Usage Examples

### Product Demo
```tsx
<Video 
  src="/videos/product-demo.mp4"
  poster="/images/demo-thumbnail.jpg"
  caption="See our product in action"
  controls
/>
```

### YouTube Embed
```tsx
<Video 
  provider="youtube"
  videoId="VIDEO_ID"
  aspectRatio="16:9"
/>
```

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
