# HeroGradient Pattern

**Pattern Category:** `lsx-design/hero/hero-gradient`  
**WordPress Block:** Core Group block with gradient background  
**Status:** ✅ Production Ready  
**Version:** 1.0  
**Last Updated:** December 27, 2024

---

## Purpose

The HeroGradient pattern creates an eye-catching hero section with animated gradient backgrounds. It provides a modern, vibrant aesthetic without requiring photography or video assets.

**Use Cases:**
- Product/service landing pages
- Event pages (webinars, launches)
- Modern homepage heroes
- Campaign landing pages
- SaaS product pages

---

## WordPress Block Structure

```html
<!-- wp:group {"className":"lsx-hero-gradient","gradient":"primary-gradient"} -->
<div class="wp-block-group lsx-hero-gradient has-primary-gradient-gradient-background has-background">
  
  <!-- wp:group {"className":"lsx-hero-gradient__content"} -->
  <div class="wp-block-group lsx-hero-gradient__content">
    
    <!-- wp:heading {"level":1} -->
    <h1>Modern WordPress Development</h1>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"className":"lsx-hero-gradient__subtitle"} -->
    <p class="lsx-hero-gradient__subtitle">
      Build faster, scale better, deliver exceptional experiences.
    </p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <!-- wp:button -->
      <div class="wp-block-button">
        <a class="wp-block-button__link" href="/contact">Get Started</a>
      </div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
    
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

---

## React Component API

```tsx
import { HeroGradient } from '../patterns/HeroGradient';

<HeroGradient
  title="Modern WordPress Development"
  subtitle="Build faster, scale better, deliver exceptional experiences."
  primaryCTA={{
    label: 'Get Started',
    href: '/contact'
  }}
  gradientType="primary"  // 'primary' | 'secondary' | 'sunset' | 'ocean'
  animated={true}
/>
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Main heading (H1) |
| `subtitle` | `string` | No | - | Supporting text |
| `primaryCTA` | `CTA` | No | - | Primary action button |
| `gradientType` | `string` | No | `'primary'` | Gradient variant |
| `animated` | `boolean` | No | `false` | Animate gradient |

---

## Design System Compliance

### Typography
```tsx
// Title (H1)
fontSize: 'var(--text-h1)'
fontWeight: 'var(--font-weight-medium)'
fontFamily: 'Lexend, sans-serif'

// Subtitle
fontSize: 'var(--text-lead)'
fontWeight: 'var(--font-weight-regular)'
fontFamily: 'Lexend, sans-serif'
```

### Gradient Presets
```css
/* Primary Gradient (Brand) */
background: linear-gradient(
  135deg,
  rgba(30, 106, 255, 1) 0%,    /* var(--primary) */
  rgba(59, 130, 246, 1) 100%   /* Lighter blue */
);

/* Secondary Gradient (Neutral) */
background: linear-gradient(
  135deg,
  rgba(113, 113, 122, 1) 0%,   /* var(--muted-foreground) */
  rgba(161, 161, 170, 1) 100%
);

/* Sunset Gradient */
background: linear-gradient(
  135deg,
  rgba(239, 68, 68, 1) 0%,     /* Red */
  rgba(251, 146, 60, 1) 50%,   /* Orange */
  rgba(251, 191, 36, 1) 100%   /* Yellow */
);

/* Ocean Gradient */
background: linear-gradient(
  135deg,
  rgba(6, 182, 212, 1) 0%,     /* Cyan */
  rgba(59, 130, 246, 1) 100%   /* Blue */
);
```

### Spacing
```tsx
// Container
className="py-24 lg:py-32"

// Content wrapper
className="max-w-3xl mx-auto text-center px-4"
```

---

## Animated Gradient (Optional)

```css
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.lsx-hero-gradient--animated {
  background-size: 200% 200%;
  animation: gradient-animation 15s ease infinite;
}
```

**Note:** Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  .lsx-hero-gradient--animated {
    animation: none;
  }
}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

✅ **Color Contrast**
- White text on gradient: Minimum 4.5:1 at darkest point
- Test all gradient stops for sufficient contrast

✅ **Motion Sensitivity**
- Disable animation with `prefers-reduced-motion`
- Provide static gradient fallback

✅ **Semantic HTML**
- Proper heading hierarchy
- Descriptive button text

### Implementation
```tsx
<section 
  className="lsx-hero-gradient"
  style={{
    background: gradientCSS,
    animation: animated && !prefersReducedMotion 
      ? 'gradient-animation 15s ease infinite' 
      : 'none'
  }}
>
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="text-white">{title}</h1>
    
    {subtitle && (
      <p className="text-white/90 mt-4">{subtitle}</p>
    )}
    
    {primaryCTA && (
      <Button 
        href={primaryCTA.href}
        variant="secondary"
        className="mt-8"
      >
        {primaryCTA.label}
      </Button>
    )}
  </div>
</section>
```

---

## WordPress Theme.json

```json
{
  "version": 2,
  "settings": {
    "color": {
      "gradients": [
        {
          "slug": "primary-gradient",
          "gradient": "linear-gradient(135deg, rgba(30, 106, 255, 1) 0%, rgba(59, 130, 246, 1) 100%)",
          "name": "Primary Gradient"
        },
        {
          "slug": "sunset-gradient",
          "gradient": "linear-gradient(135deg, rgba(239, 68, 68, 1) 0%, rgba(251, 146, 60, 1) 50%, rgba(251, 191, 36, 1) 100%)",
          "name": "Sunset Gradient"
        }
      ]
    }
  }
}
```

---

## Example Implementations

### Landing Page Hero
```tsx
<HeroGradient
  title="Scale Your Agency with LSX"
  subtitle="Production-ready WordPress block themes for modern agencies."
  primaryCTA={{
    label: 'Start Free Trial',
    href: '/trial'
  }}
  gradientType="primary"
  animated={true}
/>
```

### Product Launch Hero
```tsx
<HeroGradient
  title="Introducing LSX Design System 2.0"
  subtitle="Faster, better, stronger. Built for the modern web."
  primaryCTA={{
    label: 'Learn More',
    href: '/product'
  }}
  gradientType="sunset"
  animated={false}
/>
```

---

## Testing Checklist

- [ ] Typography uses CSS variables
- [ ] Gradient has sufficient contrast (min 4.5:1)
- [ ] Animation disabled with `prefers-reduced-motion`
- [ ] Button navigates correctly
- [ ] Keyboard navigation works
- [ ] Screen reader announces content
- [ ] Mobile responsive
- [ ] Performance: No layout shift

---

## Related Patterns

- **HeroFullHeight:** Full viewport hero
- **HeroMinimal:** Simple centered hero
- **HeroHome:** Default homepage hero
- **CTASection:** Follow-up conversion

---

**Pattern Slug:** `lsx-design/hero/hero-gradient`  
**WCAG Compliance:** ✅ AA  
**WordPress Compatibility:** ✅ FSE Compatible
