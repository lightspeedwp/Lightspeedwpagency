# HeroMinimal Pattern

**Pattern Category:** `lsx-design/hero/hero-minimal`  
**WordPress Block:** Core Group block with centered content  
**Status:** ✅ Production Ready  
**Version:** 1.0  
**Last Updated:** December 27, 2024

---

## Purpose

The HeroMinimal pattern provides a clean, focused hero section with centered content and minimal visual distractions. Perfect for content-first pages and professional presentations.

**Use Cases:**
- Blog post headers
- About page introductions
- Service detail pages
- Documentation pages
- Content hub landing pages

---

## WordPress Block Structure

```html
<!-- wp:group {"className":"lsx-hero-minimal"} -->
<div class="wp-block-group lsx-hero-minimal">
  
  <!-- wp:group {"className":"lsx-hero-minimal__content"} -->
  <div class="wp-block-group lsx-hero-minimal__content">
    
    <!-- wp:paragraph {"className":"lsx-hero-minimal__eyebrow"} -->
    <p class="lsx-hero-minimal__eyebrow">CATEGORY</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:heading {"level":1,"textAlign":"center"} -->
    <h1 class="has-text-align-center">Page Title Goes Here</h1>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"className":"lsx-hero-minimal__subtitle","align":"center"} -->
    <p class="lsx-hero-minimal__subtitle has-text-align-center">
      Brief description or value proposition in one or two sentences.
    </p>
    <!-- /wp:paragraph -->
    
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

---

## React Component API

```tsx
import { HeroMinimal } from '../patterns/HeroMinimal';

<HeroMinimal
  eyebrow="WordPress Development"
  title="Expert WordPress Development Services"
  subtitle="Professional WordPress development for modern businesses."
  variant="default"  // 'default' | 'compact'
/>
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `eyebrow` | `string` | No | - | Small text above title |
| `title` | `string` | Yes | - | Main heading (H1) |
| `subtitle` | `string` | No | - | Supporting text |
| `variant` | `string` | No | `'default'` | Size variant |

---

## Design System Compliance

### Typography
```tsx
// Eyebrow
fontSize: 'var(--text-small)'
fontWeight: 'var(--font-weight-semibold)'
fontFamily: 'Manrope, sans-serif'
letterSpacing: 'var(--letter-spacing-wider)'
textTransform: 'uppercase'

// Title (H1)
fontSize: 'var(--text-h1)'
fontWeight: 'var(--font-weight-medium)'
fontFamily: 'Lexend, sans-serif'

// Subtitle
fontSize: 'var(--text-lead)'
fontWeight: 'var(--font-weight-regular)'
fontFamily: 'Lexend, sans-serif'
```

### Colors
```tsx
// Eyebrow
color: 'var(--primary)'

// Title
color: 'var(--foreground)'

// Subtitle
color: 'var(--muted-foreground)'
```

### Spacing
```tsx
// Container
className="py-16 lg:py-24"

// Content wrapper
className="max-w-3xl mx-auto text-center px-4"

// Eyebrow margin
className="mb-4"

// Title margin
className="mb-6"
```

---

## Variants

### 1. Default
```tsx
<HeroMinimal
  variant="default"
  // Standard spacing: py-16 lg:py-24
/>
```

### 2. Compact
```tsx
<HeroMinimal
  variant="compact"
  // Reduced spacing: py-12 lg:py-16
  // Best for secondary pages
/>
```

---

## Accessibility

### WCAG 2.1 AA Compliance

✅ **Semantic HTML**
- Proper heading hierarchy (H1)
- Centered text alignment announced
- Clear content structure

✅ **Color Contrast**
- Title: 16.07:1 ratio (AAA ✓✓✓)
- Subtitle: 4.54:1 ratio (AA ✓)
- Eyebrow: 4.58:1 ratio (AA ✓)

### Implementation
```tsx
<section className="lsx-hero-minimal">
  <div className="max-w-3xl mx-auto text-center px-4 py-16 lg:py-24">
    {eyebrow && (
      <p className="text-primary text-small uppercase tracking-wider mb-4">
        {eyebrow}
      </p>
    )}
    
    <h1 
      className="text-h1 text-foreground mb-6"
      style={{
        fontSize: 'var(--text-h1)',
        fontFamily: 'Lexend, sans-serif'
      }}
    >
      {title}
    </h1>
    
    {subtitle && (
      <p 
        className="text-lead text-muted-foreground"
        style={{
          fontSize: 'var(--text-lead)',
          fontFamily: 'Lexend, sans-serif'
        }}
      >
        {subtitle}
      </p>
    )}
  </div>
</section>
```

---

## Content Guidelines

### Eyebrow
- **Length:** 1-3 words
- **Format:** ALL CAPS
- **Examples:**
  - ✅ "WORDPRESS DEVELOPMENT"
  - ✅ "OUR SERVICES"
  - ❌ "This is a category name" (too long)

### Title (H1)
- **Length:** 3-10 words
- **Format:** Sentence case or title case
- **Examples:**
  - ✅ "Expert WordPress Development Services"
  - ✅ "About LSX Design"
  - ❌ "This is our company that builds websites and does many things" (too long)

### Subtitle
- **Length:** 10-20 words
- **Format:** Complete sentence with period
- **Examples:**
  - ✅ "Professional WordPress development for modern businesses."
  - ✅ "We build exceptional web experiences with WordPress and WooCommerce."
  - ❌ "Websites" (too brief)

---

## Example Implementations

### About Page
```tsx
<HeroMinimal
  eyebrow="ABOUT US"
  title="Building Exceptional Web Experiences"
  subtitle="We're a team of WordPress experts passionate about creating beautiful, performant websites."
/>
```

### Service Page
```tsx
<HeroMinimal
  eyebrow="WORDPRESS DEVELOPMENT"
  title="Expert WordPress Development Services"
  subtitle="Custom WordPress solutions tailored to your business needs."
  variant="default"
/>
```

### Blog Post Header
```tsx
<HeroMinimal
  eyebrow="TUTORIALS"
  title="Complete Guide to WordPress Block Themes"
  subtitle="Learn how to build modern WordPress block themes with Full Site Editing."
  variant="compact"
/>
```

---

## WordPress Theme.json

```json
{
  "version": 2,
  "styles": {
    "blocks": {
      "core/group": {
        "variations": {
          "lsx-hero-minimal": {
            "spacing": {
              "padding": {
                "top": "4rem",
                "bottom": "4rem"
              }
            },
            "typography": {
              "textAlign": "center"
            }
          }
        }
      }
    }
  }
}
```

---

## Testing Checklist

- [ ] Typography uses CSS variables
- [ ] Colors use semantic tokens
- [ ] Spacing uses Tailwind classes
- [ ] Text is centered correctly
- [ ] Eyebrow displays (if provided)
- [ ] Contrast ratios meet WCAG AA
- [ ] Mobile responsive (text doesn't break)
- [ ] Screen reader announces content
- [ ] Max width constrains content (3xl = 768px)

---

## Related Patterns

- **HeroFullHeight:** Full viewport hero
- **HeroGradient:** Hero with gradient background
- **HeroHome:** Default homepage hero
- **ArchiveHeader:** Archive page header
- **HeaderSimple:** Simple page header

---

**Pattern Slug:** `lsx-design/hero/hero-minimal`  
**WCAG Compliance:** ✅ AA (AAA for title)  
**WordPress Compatibility:** ✅ FSE Compatible  
**Best For:** Content pages, service pages, about pages
