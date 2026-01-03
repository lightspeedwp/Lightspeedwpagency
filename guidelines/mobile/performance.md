# Mobile Performance Guidelines

**Purpose:** Define performance optimization strategies for mobile devices to ensure fast loading and smooth interactions.

**System:** LSX Design performance-first mobile optimization  
**Goal:** Fast page loads on 3G/4G networks, smooth 60fps interactions

---

## Mobile Performance Principles

1. **3G-First Testing:** Optimize for slow 3G networks (minimum viable experience)
2. **Critical Path:** Load only essential resources first
3. **Progressive Enhancement:** Start with core content, add enhancements
4. **Animation Budget:** Maintain 60fps for all animations
5. **Reduced Motion:** Respect user preferences for motion reduction

---

## Performance Targets

### Core Web Vitals (Mobile)

| Metric | Target | Good | Acceptable | Poor |
|--------|--------|------|------------|------|
| **LCP** (Largest Contentful Paint) | <2.5s | <2.5s | 2.5-4.0s | >4.0s |
| **FID** (First Input Delay) | <100ms | <100ms | 100-300ms | >300ms |
| **CLS** (Cumulative Layout Shift) | <0.1 | <0.1 | 0.1-0.25 | >0.25 |
| **FCP** (First Contentful Paint) | <1.8s | <1.8s | 1.8-3.0s | >3.0s |
| **TTI** (Time to Interactive) | <3.8s | <3.8s | 3.8-7.3s | >7.3s |

### Network Targets

| Network | Target Load Time | Max Page Size | Max JS Size |
|---------|------------------|---------------|-------------|
| **Slow 3G** | <5s (usable) | 500KB | 150KB |
| **Fast 3G** | <3s | 1MB | 300KB |
| **4G** | <2s | 2MB | 500KB |

---

## Image Optimization

### Responsive Image Sizing

```tsx
// ✅ CORRECT: Mobile-optimized srcset
<img 
  src="/images/hero-mobile.jpg"  // 375w, ~100KB
  srcSet="
    /images/hero-mobile.webp 375w,
    /images/hero-tablet.webp 768w,
    /images/hero-desktop.webp 1280w
  "
  sizes="
    (max-width: 768px) 100vw,
    1280px
  "
  alt="Safari landscape"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>

// ❌ WRONG: Single large image for all devices
<img src="/images/hero-4k.jpg" />  // 3MB file
```

### Lazy Loading Strategy

```tsx
// Hero image: Load immediately
<img 
  src="/images/hero.jpg"
  alt="Hero"
  loading="eager"
  fetchpriority="high"
/>

// Above-fold cards (first 3): Load immediately
<img 
  src="/images/card-1.jpg"
  alt="Destination"
  loading="eager"
/>

// Below-fold images: Lazy load
<img 
  src="/images/card-4.jpg"
  alt="Destination"
  loading="lazy"
  decoding="async"
/>
```

### Image Format Optimization

```tsx
// Modern WebP with JPEG fallback
<picture>
  {/* WebP: 30-40% smaller than JPEG */}
  <source srcSet="/images/hero.webp" type="image/webp" />
  
  {/* JPEG fallback */}
  <img src="/images/hero.jpg" alt="Hero" />
</picture>
```

**File size comparison (example 1280×720 image):**
- JPEG (75% quality): 180KB
- WebP (75% quality): 120KB
- **Savings: 33%**

---

## Font Loading Strategy

### Preload Critical Fonts

```html
<!-- Preload Lexend (primary font) -->
<link 
  rel="preload" 
  href="/fonts/lexend-regular.woff2" 
  as="font" 
  type="font/woff2" 
  crossorigin="anonymous"
/>

<link 
  rel="preload" 
  href="/fonts/lexend-medium.woff2" 
  as="font" 
  type="font/woff2" 
  crossorigin="anonymous"
/>

<!-- Don't preload Manrope (only used for small text) -->
```

### Font Display Strategy

```css
/* fonts.css */
@font-face {
  font-family: 'Lexend';
  src: url('/fonts/lexend-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;  /* Show fallback font immediately, swap when loaded */
}

@font-face {
  font-family: 'Lexend';
  src: url('/fonts/lexend-medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Manrope';
  src: url('/fonts/manrope-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

**Why `font-display: swap`?**
- Shows fallback font (sans-serif) immediately
- Swaps to custom font when loaded
- No invisible text (FOIT) on slow networks

---

## Animation Performance

### CSS Animations (60fps)

**ONLY animate these properties** (GPU-accelerated):
- `transform` (translate, scale, rotate)
- `opacity`

**NEVER animate** (causes reflow/repaint):
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `font-size`

```css
/* ✅ CORRECT: GPU-accelerated animation */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ❌ WRONG: Causes reflow */
.slide-in {
  top: 100px;
  transition: top 0.3s ease;  /* Causes layout recalculation */
}
```

### Reduced Motion Support

**CRITICAL:** Respect user motion preferences.

```css
/* Default: Smooth animations */
.animate-fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Reduced motion: Instant transitions */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in {
    transition: none;  /* Disable animations */
    opacity: 1;
    transform: translateY(0);
  }
}
```

```tsx
// React: Check for reduced motion preference
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Apply animation only if user allows motion
<div 
  className={prefersReducedMotion ? '' : 'animate-fade-in'}
>
  Content
</div>
```

---

## Animation Throttling

### Scroll-Based Animations

```tsx
// ✅ CORRECT: Throttled scroll handler
let ticking = false;

function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Update scroll-based UI here
      updateScrollProgress();
      ticking = false;
    });
    
    ticking = true;
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });

// ❌ WRONG: Unthrottled scroll (performance killer)
window.addEventListener('scroll', () => {
  updateScrollProgress();  // Called hundreds of times per scroll
});
```

### Intersection Observer (Lazy Loading)

```tsx
// ✅ CORRECT: Efficient visibility detection
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);  // Stop observing after visible
      }
    });
  },
  {
    rootMargin: '50px',  // Trigger 50px before element enters viewport
    threshold: 0.1  // Trigger when 10% visible
  }
);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
```

---

## JavaScript Bundle Optimization

### Code Splitting

```tsx
// ✅ CORRECT: Lazy load non-critical components
import { lazy, Suspense } from 'react';

const BackToTopButton = lazy(() => import('./components/ui/BackToTopButton'));
const PageSwitcher = lazy(() => import('./components/ui/PageSwitcher'));

function App() {
  return (
    <div>
      {/* Critical content loads immediately */}
      <Hero />
      <CardGrid />
      
      {/* Non-critical components lazy load */}
      <Suspense fallback={null}>
        <BackToTopButton />
        <PageSwitcher />
      </Suspense>
    </div>
  );
}

// ❌ WRONG: Import everything upfront
import { BackToTopButton } from './components/ui/BackToTopButton';
import { PageSwitcher } from './components/ui/PageSwitcher';
```

### Tree Shaking

```tsx
// ✅ CORRECT: Import only what you need
import { MapPin, Calendar } from 'lucide-react';

// ❌ WRONG: Import entire library
import * as Icons from 'lucide-react';  // Bundles all icons
```

---

## Critical Rendering Path

### Resource Loading Priority

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- 1. CRITICAL: Inline critical CSS (above-fold styles) -->
  <style>
    /* Inline critical CSS here (~14KB max) */
    body { font-family: sans-serif; margin: 0; }
    .hero { height: 60vh; background: #f0f0f0; }
  </style>
  
  <!-- 2. PRELOAD: Critical fonts -->
  <link rel="preload" href="/fonts/lexend-regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/lexend-medium.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- 3. PRELOAD: Hero image -->
  <link rel="preload" href="/images/hero-mobile.webp" as="image" type="image/webp">
  
  <!-- 4. LOAD: Full stylesheet (deferred) -->
  <link rel="stylesheet" href="/styles/theme.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/styles/theme.css"></noscript>
</head>
<body>
  <!-- Critical content -->
  <header>...</header>
  <main>...</main>
  
  <!-- Non-critical scripts at end of body -->
  <script src="/scripts/main.js" defer></script>
</body>
</html>
```

---

## Layout Shift Prevention (CLS)

### Reserve Space for Images

```tsx
// ✅ CORRECT: Aspect ratio container (prevents layout shift)
<div 
  style={{
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',  // 16:9 aspect ratio
    backgroundColor: 'var(--muted)',  // Placeholder color
    borderRadius: 'var(--radius-lg)'
  }}
>
  <img 
    src="/images/destination.jpg"
    alt="Destination"
    loading="lazy"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }}
  />
</div>

// ❌ WRONG: No reserved space (causes layout shift)
<img src="/images/destination.jpg" alt="..." />
```

### Reserve Space for Dynamic Content

```tsx
// ✅ CORRECT: Fixed height skeleton while loading
<div 
  className="min-h-[400px]"  // Reserve space
  style={{ backgroundColor: 'var(--muted)' }}
>
  {loading ? (
    <div className="animate-pulse">
      <div className="h-8 bg-muted-foreground/20 mb-4 rounded" />
      <div className="h-4 bg-muted-foreground/20 mb-2 rounded" />
      <div className="h-4 bg-muted-foreground/20 rounded" />
    </div>
  ) : (
    <article>{content}</article>
  )}
</div>
```

---

## Network Performance

### 3G Testing (Chrome DevTools)

**Test every page on Slow 3G:**

1. Open Chrome DevTools → Network tab
2. Select **Slow 3G** from throttling dropdown
3. Reload page
4. Measure:
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Time to Interactive (TTI)

**Targets:**
- FCP < 3s on Slow 3G
- LCP < 5s on Slow 3G
- TTI < 8s on Slow 3G

### Compression

```nginx
# Enable Gzip/Brotli compression (server config)
gzip on;
gzip_types text/css text/javascript application/javascript image/svg+xml;
gzip_min_length 1000;

# Brotli (better compression than Gzip)
brotli on;
brotli_types text/css text/javascript application/javascript image/svg+xml;
```

**Compression savings:**
- HTML: 70-80%
- CSS: 75-85%
- JavaScript: 70-80%
- SVG: 60-70%

---

## Caching Strategy

### Cache-Control Headers

```nginx
# Static assets (images, fonts, CSS, JS)
location ~* \.(jpg|jpeg|png|webp|svg|woff2|css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# HTML pages
location ~* \.(html)$ {
  expires 1h;
  add_header Cache-Control "public, must-revalidate";
}
```

### Service Worker (Progressive Web App)

```javascript
// sw.js — Cache-first strategy for static assets
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((fetchResponse) => {
          return caches.open('images').then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
});
```

---

## WordPress Performance

### Disable Unnecessary Features

```php
// functions.php

// Remove jQuery Migrate (saves ~10KB)
add_action('wp_default_scripts', function ($scripts) {
  if (!is_admin() && isset($scripts->registered['jquery'])) {
    $scripts->registered['jquery']->deps = array_diff(
      $scripts->registered['jquery']->deps, 
      ['jquery-migrate']
    );
  }
});

// Remove emoji scripts (saves ~15KB)
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// Defer non-critical CSS
add_filter('style_loader_tag', function ($html, $handle) {
  if ('theme-styles' === $handle) {
    return str_replace("rel='stylesheet'", "rel='preload' as='style' onload=\"this.onload=null;this.rel='stylesheet'\"", $html);
  }
  return $html;
}, 10, 2);
```

### Image Optimization (WordPress)

```php
// Enable WebP support
add_filter('wp_image_editors', function ($editors) {
  array_unshift($editors, 'WP_Image_Editor_Imagick');
  return $editors;
});

// Generate WebP versions on upload
add_filter('wp_generate_attachment_metadata', function ($metadata, $attachment_id) {
  $file = get_attached_file($attachment_id);
  $upload_dir = wp_upload_dir();
  
  // Convert to WebP
  $webp_file = preg_replace('/\.(jpg|jpeg|png)$/i', '.webp', $file);
  $image = wp_get_image_editor($file);
  
  if (!is_wp_error($image)) {
    $image->save($webp_file, 'image/webp');
  }
  
  return $metadata;
}, 10, 2);
```

---

## Performance Monitoring

### Chrome DevTools Lighthouse

**Run Lighthouse audit on mobile:**

1. Open DevTools → Lighthouse tab
2. Select **Mobile** device
3. Select **Performance** category
4. Click **Analyze page load**

**Target scores:**
- Performance: >90
- Accessibility: 100
- Best Practices: >90
- SEO: >90

### Real User Monitoring (RUM)

```javascript
// Track Core Web Vitals
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);  // Cumulative Layout Shift
getFID(console.log);  // First Input Delay
getLCP(console.log);  // Largest Contentful Paint

// Send to analytics
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  
  // Use `navigator.sendBeacon()` if available, fallback to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/analytics', body);
  } else {
    fetch('/analytics', { body, method: 'POST', keepalive: true });
  }
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
```

---

## Common Performance Patterns

### Optimized Hero Section

```tsx
<section 
  className="relative"
  style={{
    height: '60vh',
    minHeight: '400px',
    maxHeight: '600px'
  }}
>
  {/* Hero image with preload */}
  <picture>
    <source 
      media="(max-width: 767px)" 
      srcSet="/images/hero-mobile.webp"
      type="image/webp"
    />
    <source 
      media="(min-width: 768px)" 
      srcSet="/images/hero-desktop.webp"
      type="image/webp"
    />
    <img 
      src="/images/hero-mobile.jpg"
      alt="Safari landscape"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
  </picture>
  
  {/* Overlay content */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: '40px',
      fontWeight: 'var(--font-weight-medium)',
      color: '#FFFFFF',
      textAlign: 'center'
    }}>
      Discover Your Next Adventure
    </h1>
  </div>
</section>
```

### Optimized Card Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {destinations.map((destination, index) => (
    <article 
      key={destination.id}
      className="overflow-hidden"
      style={{ 
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--card)'
      }}
    >
      {/* Aspect ratio container (prevents CLS) */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%',  // 16:9
          backgroundColor: 'var(--muted)'
        }}
      >
        <img 
          src={destination.image}
          srcSet={`
            ${destination.imageMobile} 335w,
            ${destination.imageDesktop} 600w
          `}
          sizes="
            (max-width: 767px) 335px,
            600px
          "
          alt={destination.imageAlt}
          loading={index < 3 ? 'eager' : 'lazy'}  // First 3 eager, rest lazy
          decoding="async"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      
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
// Large unoptimized images
<img src="/images/hero-4k.jpg" />  // 3MB file

// Animate layout-causing properties
.slide { transition: height 0.3s ease; }  // Causes reflow

// Unthrottled scroll handlers
window.addEventListener('scroll', updateUI);  // Called 100s of times

// Import entire icon library
import * as Icons from 'lucide-react';  // Huge bundle

// No reduced motion support
.animate { animation: slide 1s; }  // No @media (prefers-reduced-motion)

// Block rendering with synchronous scripts
<script src="/app.js"></script>  // In <head>, blocks rendering
```

### ✅ DO

```tsx
// Responsive optimized images
<img 
  src="/images/hero-mobile.webp"
  srcSet="..."
  loading="lazy"
/>

// Animate GPU-accelerated properties only
.slide { transition: transform 0.3s ease; }

// Throttle scroll handlers
window.requestAnimationFrame(updateUI);

// Import specific icons
import { MapPin } from 'lucide-react';

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
  .animate { animation: none; }
}

// Defer non-critical scripts
<script src="/app.js" defer></script>  // At end of <body>
```

---

## Testing Checklist

- [ ] LCP < 2.5s on Fast 3G
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] All images have lazy loading (except hero/first 3)
- [ ] Hero image uses `fetchpriority="high"`
- [ ] WebP format with JPEG fallback
- [ ] Fonts use `font-display: swap`
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Only animate `transform` and `opacity`
- [ ] Test on Slow 3G (Chrome DevTools)
- [ ] Lighthouse score >90 on mobile
- [ ] No layout shifts during page load

---

## Related Documentation

- [./images.md](./images.md) — Mobile image optimization
- [./typography.md](./typography.md) — Mobile typography rules
- [../design-tokens/spacing.md](../design-tokens/spacing.md) — Spacing tokens

---

**Last Updated:** December 24, 2024  
**Testing Tools:** Chrome DevTools Lighthouse, WebPageTest  
**Network Target:** Fast 3G minimum (LCP < 5s on Slow 3G)
