# Mobile Image Guidelines

**Purpose:** Define image optimization, responsive sizing, and loading strategies for mobile devices.

**System:** LSX Design token-driven image system  
**Goal:** Fast loading, bandwidth-efficient, accessible images on mobile networks

---

## Mobile Image Principles

1. **Responsive Sizing:** Serve appropriately sized images for mobile viewports
2. **Lazy Loading:** Load images only when needed to improve initial page load
3. **Format Optimization:** Use modern formats (WebP) with fallbacks
4. **Bandwidth Awareness:** Optimize file sizes for 3G/4G networks
5. **Accessibility:** Always provide meaningful alt text

---

## Image Size Guidelines

### Mobile Viewport Considerations

| Image Type | Mobile Width | Desktop Width | Aspect Ratio | Max File Size |
|------------|-------------|---------------|--------------|---------------|
| Hero Image | 375-428px | 1280-1920px | 16:9 or 21:9 | 150KB (mobile) |
| Card Thumbnail | 335px | 400px | 16:9 or 4:3 | 50KB (mobile) |
| Full-width Image | 375-428px | 1280px | 16:9 | 100KB (mobile) |
| Avatar/Icon | 40-80px | 80-120px | 1:1 | 10KB |
| Logo | 120-160px | 140-200px | Variable | 15KB |

---

## Responsive Image Implementation

### Using srcset for Multiple Resolutions

```tsx
// ✅ CORRECT: Responsive image with srcset
<img 
  src="/images/hero-mobile.jpg"  // Fallback
  srcSet="
    /images/hero-mobile.jpg 375w,
    /images/hero-tablet.jpg 768w,
    /images/hero-desktop.jpg 1280w,
    /images/hero-desktop-2x.jpg 2560w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1280px) 90vw,
    1280px
  "
  alt="Safari landscape in Maasai Mara National Reserve"
  style={{
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: 'var(--radius-lg)'
  }}
/>
```

### Picture Element for Art Direction

```tsx
// Mobile: Portrait crop, Desktop: Landscape crop
<picture>
  <source 
    media="(max-width: 767px)" 
    srcSet="/images/hero-portrait-mobile.webp"
    type="image/webp"
  />
  <source 
    media="(max-width: 767px)" 
    srcSet="/images/hero-portrait-mobile.jpg"
  />
  <source 
    media="(min-width: 768px)" 
    srcSet="/images/hero-landscape-desktop.webp"
    type="image/webp"
  />
  <img 
    src="/images/hero-landscape-desktop.jpg"
    alt="Safari landscape in Maasai Mara"
    style={{
      width: '100%',
      height: 'auto',
      display: 'block'
    }}
  />
</picture>
```

---

## Lazy Loading

### Native Lazy Loading

```tsx
// ✅ CORRECT: Native lazy loading for below-fold images
<img 
  src="/images/destination-card.jpg"
  alt="Mountain landscape"
  loading="lazy"  // Browser-native lazy loading
  decoding="async"  // Asynchronous decoding
  style={{
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: 'var(--radius-lg)'
  }}
/>

// ✅ CORRECT: Eager loading for above-fold images (hero)
<img 
  src="/images/hero.jpg"
  alt="Hero landscape"
  loading="eager"  // Load immediately
  fetchpriority="high"  // High priority
  style={{
    width: '100%',
    height: 'auto',
    display: 'block'
  }}
/>
```

### When to Use Lazy Loading

**Use lazy loading for:**
- Card grid images (below fold)
- Gallery images
- Footer images
- Related content images

**DON'T use lazy loading for:**
- Hero images (above fold)
- Logo
- Critical UI icons
- First 2-3 visible cards

---

## Hero Images (Mobile-Optimized)

### Hero Image Pattern

```tsx
// Mobile-first hero with responsive images
<section 
  className="relative"
  style={{
    height: '60vh',  // Mobile: 60vh
    minHeight: '400px',
    maxHeight: '600px'
  }}
>
  <picture>
    {/* Mobile: Smaller WebP */}
    <source 
      media="(max-width: 767px)" 
      srcSet="/images/hero-mobile.webp"
      type="image/webp"
    />
    {/* Mobile: JPEG fallback */}
    <source 
      media="(max-width: 767px)" 
      srcSet="/images/hero-mobile.jpg"
    />
    {/* Desktop: Larger WebP */}
    <source 
      media="(min-width: 768px)" 
      srcSet="/images/hero-desktop.webp"
      type="image/webp"
    />
    {/* Desktop: JPEG fallback */}
    <img 
      src="/images/hero-desktop.jpg"
      alt="Scenic safari landscape"
      loading="eager"
      fetchpriority="high"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    />
  </picture>
  
  {/* Overlay content */}
  <div 
    className="absolute inset-0 flex items-center justify-center"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.3)'  // Overlay for text contrast
    }}
  >
    <h1 style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: '40px',
      fontWeight: 'var(--font-weight-medium)',
      color: '#FFFFFF',
      textAlign: 'center',
      padding: '0 16px'
    }}>
      Discover Your Next Adventure
    </h1>
  </div>
</section>

@media (min-width: 768px) {
  section {
    height: 80vh;  // Desktop: taller hero
  }
  
  h1 {
    font-size: var(--text-h1);  // 60px on desktop
  }
}
```

---

## Card Grid Images

### Responsive Card Thumbnail

```tsx
<article 
  className="overflow-hidden"
  style={{ 
    borderRadius: 'var(--radius-lg)',
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border)'
  }}
>
  {/* Image */}
  <img 
    src="/images/destination-thumbnail.jpg"
    srcSet="
      /images/destination-thumbnail-mobile.jpg 335w,
      /images/destination-thumbnail-tablet.jpg 400w,
      /images/destination-thumbnail-desktop.jpg 600w
    "
    sizes="
      (max-width: 767px) 335px,
      (max-width: 1024px) 400px,
      600px
    "
    alt="Maasai Mara wildlife viewing"
    loading="lazy"
    decoding="async"
    style={{
      width: '100%',
      height: '200px',  // Fixed height for grid consistency
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block'
    }}
  />
  
  {/* Card content */}
  <div className="p-4">
    <h3 style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: '22px',
      fontWeight: 'var(--font-weight-medium)'
    }}>
      Maasai Mara Safari
    </h3>
  </div>
</article>
```

---

## Aspect Ratio Containers

### Maintain Aspect Ratio Without Layout Shift

```tsx
// 16:9 aspect ratio container
<div 
  style={{
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',  // 16:9 = 9/16 = 56.25%
    backgroundColor: 'var(--muted)',  // Placeholder color
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden'
  }}
>
  <img 
    src="/images/destination.jpg"
    alt="Destination landscape"
    loading="lazy"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    }}
  />
</div>

// 4:3 aspect ratio
<div style={{ paddingBottom: '75%' }}>  {/* 4:3 = 3/4 = 75% */}
  <img src="/images/card.jpg" alt="..." loading="lazy" />
</div>

// 1:1 (square) aspect ratio
<div style={{ paddingBottom: '100%' }}>  {/* 1:1 = 100% */}
  <img src="/images/avatar.jpg" alt="..." loading="lazy" />
</div>
```

---

## Image Placeholder Strategies

### Loading State with Background Color

```tsx
// Show background color while image loads
<div 
  style={{
    width: '100%',
    height: '200px',
    backgroundColor: 'var(--muted)',  // Placeholder
    borderRadius: 'var(--radius-lg)',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  <img 
    src="/images/destination.jpg"
    alt="Destination"
    loading="lazy"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }}
  />
</div>
```

### Blur-Up Technique (Low-Quality Placeholder)

```tsx
// Show blurred thumbnail while full image loads
<div 
  style={{
    position: 'relative',
    width: '100%',
    height: '200px',
    backgroundColor: 'var(--muted)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden'
  }}
>
  {/* Blurred placeholder (tiny file, ~2KB) */}
  <img 
    src="/images/destination-placeholder.jpg"
    alt=""
    aria-hidden="true"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'blur(10px)',
      transform: 'scale(1.1)'  // Hide blur edges
    }}
  />
  
  {/* Full resolution image */}
  <img 
    src="/images/destination.jpg"
    alt="Safari destination"
    loading="lazy"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }}
  />
</div>
```

---

## Image Formats

### Modern Format Strategy

**Priority order:**
1. **WebP** — Best compression, wide support (iOS 14+, Android 4+)
2. **JPEG** — Universal fallback
3. **PNG** — For images requiring transparency
4. **SVG** — For logos, icons, illustrations

### Format Usage

```tsx
// ✅ CORRECT: WebP with JPEG fallback
<picture>
  <source srcSet="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.jpg" alt="Hero image" />
</picture>

// ✅ CORRECT: SVG for logos (scalable, tiny file size)
<img src="/logo-light.svg" alt="LSX Design" width="140" height="40" />

// ❌ WRONG: Large PNG for photos
<img src="/images/destination.png" alt="..." />  // Use JPEG/WebP instead
```

---

## File Size Optimization

### Target File Sizes (Mobile-First)

| Image Type | Mobile Target | Desktop Target | Quality |
|------------|--------------|----------------|---------|
| Hero Image | 100-150KB | 200-300KB | 75-80% |
| Card Thumbnail | 30-50KB | 60-80KB | 70-75% |
| Full-width Image | 80-100KB | 150-200KB | 75-80% |
| Avatar | 5-10KB | 10-15KB | 80% |
| Logo SVG | 5-15KB | 5-15KB | — |

### Compression Guidelines

```bash
# WebP compression (recommended)
cwebp -q 75 input.jpg -o output.webp

# JPEG compression
jpegoptim --max=75 --strip-all input.jpg

# PNG compression
pngquant --quality=70-80 input.png
```

---

## Accessibility

### Alt Text Best Practices

```tsx
// ✅ CORRECT: Descriptive alt text
<img 
  src="/images/maasai-mara.jpg"
  alt="Group of elephants walking across savanna grasslands in Maasai Mara at sunset"
  loading="lazy"
/>

// ✅ CORRECT: Decorative image (empty alt)
<img 
  src="/images/pattern.png"
  alt=""
  aria-hidden="true"
  loading="lazy"
/>

// ❌ WRONG: Vague alt text
<img src="/images/maasai-mara.jpg" alt="Image" />

// ❌ WRONG: Filename as alt text
<img src="/images/DSC_1234.jpg" alt="DSC_1234" />

// ❌ WRONG: Redundant "image of"
<img src="/images/elephant.jpg" alt="Image of an elephant" />
```

### Alt Text for Different Contexts

```tsx
// Card thumbnail: Describe the destination
<img 
  src="/images/destination.jpg"
  alt="Serengeti plains with acacia trees during migration season"
/>

// Avatar: Name of person
<img 
  src="/images/avatar.jpg"
  alt="Jane Smith, tour guide"
/>

// Icon: Describe function, not appearance
<img 
  src="/icons/search.svg"
  alt="Search"
/>

// Logo: Brand name
<img 
  src="/logo-light.svg"
  alt="LSX Design"
/>
```

---

## Performance: Loading Priority

### Critical Images (Load First)

```tsx
// Hero image: High priority
<img 
  src="/images/hero.jpg"
  alt="Safari landscape"
  loading="eager"
  fetchpriority="high"
/>

// Logo: High priority
<img 
  src="/logo-light.svg"
  alt="LSX Design"
  loading="eager"
  fetchpriority="high"
/>
```

### Non-Critical Images (Lazy Load)

```tsx
// Below-fold cards: Lazy load
<img 
  src="/images/card.jpg"
  alt="Destination"
  loading="lazy"
  fetchpriority="low"
/>

// Footer images: Lazy load
<img 
  src="/images/footer-bg.jpg"
  alt=""
  loading="lazy"
  aria-hidden="true"
/>
```

---

## WordPress Block Editor: Image Blocks

### Featured Image (Mobile-Optimized)

```html
<!-- wp:post-featured-image {
  "width":"100%",
  "height":"60vh",
  "sizeSlug":"full",
  "align":"wide"
} /-->
```

### Image Block with Lazy Loading

```html
<!-- wp:image {
  "sizeSlug":"large",
  "linkDestination":"none",
  "className":"is-style-rounded"
} -->
<figure class="wp-block-image size-large is-style-rounded">
  <img 
    src="destination-1024x576.jpg" 
    alt="Safari destination" 
    loading="lazy"
  />
</figure>
<!-- /wp:image -->
```

---

## Common Mobile Image Patterns

### Card Grid with Optimized Images

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {destinations.map((destination, index) => (
    <article 
      key={destination.id}
      className="overflow-hidden"
      style={{ 
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)'
      }}
    >
      {/* Eager load first 3 images, lazy load rest */}
      <img 
        src={destination.image}
        srcSet={`
          ${destination.imageMobile} 335w,
          ${destination.imageTablet} 400w,
          ${destination.imageDesktop} 600w
        `}
        sizes="
          (max-width: 767px) 335px,
          (max-width: 1024px) 400px,
          600px
        "
        alt={destination.imageAlt}
        loading={index < 3 ? 'eager' : 'lazy'}
        decoding="async"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          display: 'block'
        }}
      />
      
      <div className="p-4">
        <h3 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: '22px',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          {destination.title}
        </h3>
      </div>
    </article>
  ))}
</div>
```

---

## Common Mistakes

### ❌ DON'T

```tsx
// Serve desktop-sized images on mobile
<img src="/images/hero-4k.jpg" />  // 3MB file on mobile

// No lazy loading for below-fold images
<img src="/images/card.jpg" />  // Missing loading="lazy"

// No srcset for responsive images
<img src="/images/hero.jpg" />  // Same image for all devices

// Vague alt text
<img src="/images/destination.jpg" alt="Destination" />

// Missing width/height (causes layout shift)
<img src="/images/card.jpg" />  // No dimensions
```

### ✅ DO

```tsx
// Responsive images with srcset
<img 
  src="/images/hero-mobile.jpg"
  srcSet="
    /images/hero-mobile.jpg 375w,
    /images/hero-desktop.jpg 1280w
  "
  sizes="(max-width: 768px) 100vw, 1280px"
  alt="Safari landscape in Maasai Mara National Reserve"
  loading="eager"
  width="375"
  height="211"
/>

// Lazy loading for below-fold
<img 
  src="/images/card.jpg"
  alt="Mountain landscape"
  loading="lazy"
  decoding="async"
/>

// Descriptive alt text
<img 
  src="/images/destination.jpg"
  alt="Elephants walking across savanna at sunset"
/>
```

---

## Testing Checklist

- [ ] Images use srcset for responsive sizing
- [ ] Hero images load with `loading="eager"` and `fetchpriority="high"`
- [ ] Below-fold images use `loading="lazy"`
- [ ] WebP format with JPEG fallback
- [ ] Mobile images are under 150KB
- [ ] All images have descriptive alt text
- [ ] Aspect ratio containers prevent layout shift
- [ ] Images maintain aspect ratio on all viewports
- [ ] Test on slow 3G network (Chrome DevTools)

---

## Related Documentation

- [./performance.md](./performance.md) — Mobile performance optimization
- [./typography.md](./typography.md) — Mobile typography rules
- [../design-tokens/spacing.md](../design-tokens/spacing.md) — Spacing and border radius

---

**Last Updated:** December 24, 2024  
**Recommended Formats:** WebP (primary), JPEG (fallback), SVG (logos/icons)  
**Mobile Target:** <150KB per image
