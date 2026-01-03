# Social Proof Pattern

**WordPress Pattern:** `lsx-design/trust/social-proof`  
**Block Type:** `core/gallery` or `core/group`  
**Section Style:** `testimonial-highlight` or `default`  
**Status:** ✅ Production Ready

---

## Overview

Client logos, partner badges, awards, and certifications pattern for building trust and credibility. Features a responsive grid layout with grayscale images that reveal color on hover, creating a professional, polished appearance.

---

## Component Location

**File:** `/src/app/components/patterns/SocialProof.tsx`

---

## WordPress Mapping

### Block Structure
```html
<!-- wp:group {"metadata":{"name":"Social Proof"},"className":"social-proof","layout":{"type":"constrained"}} -->
<div class="wp-block-group social-proof">
  
  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="has-text-align-center">Trusted By Industry Leaders</h2>
  <!-- /wp:heading -->
  
  <!-- wp:gallery {"columns":5,"linkTo":"none","className":"logo-grid"} -->
  <figure class="wp-block-gallery columns-5 logo-grid">
    <ul class="blocks-gallery-grid">
      
      <li class="blocks-gallery-item">
        <figure>
          <img src="client-logo-1.png" alt="Client Name" />
        </figure>
      </li>
      
      <!-- Repeat for additional logos -->
      
    </ul>
  </figure>
  <!-- /wp:gallery -->
  
  <!-- wp:paragraph {"align":"center","className":"caption"} -->
  <p class="has-text-align-center caption">Trusted by 500+ companies worldwide</p>
  <!-- /wp:paragraph -->
  
</div>
<!-- /wp:group -->
```

### Pattern Registration
```php
<?php
/**
 * Title: Social Proof (Client Logos)
 * Slug: lsx-design/trust/social-proof
 * Categories: lsx-design-trust
 * Description: Display client logos or partner badges to build credibility
 */
?>
```

---

## Props Interface

```tsx
export interface Logo {
  id: string;
  name: string;
  src: string;
  alt: string;
  url?: string;
}

export interface SocialProofProps {
  heading?: string;
  logos: Logo[];
  columns?: 3 | 4 | 5 | 6;
  variant?: 'logos' | 'awards' | 'certifications';
  caption?: string;
  showCaption?: boolean;
}
```

### Default Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `"Trusted By Industry Leaders"` | Section heading |
| `logos` | `Logo[]` | Required | Array of logo objects |
| `columns` | `3 \| 4 \| 5 \| 6` | `5` | Grid columns (desktop) |
| `variant` | `'logos' \| 'awards' \| 'certifications'` | `'logos'` | Visual style |
| `caption` | `string` | `undefined` | Optional caption text |
| `showCaption` | `boolean` | `true` | Show/hide caption |

---

## Usage Examples

### Client Logos (Default)
```tsx
import { SocialProof } from '../patterns/SocialProof';
import { clientLogos } from '../../data/logos';

<SocialProof 
  heading="Trusted By Industry Leaders"
  logos={clientLogos}
  columns={5}
  variant="logos"
  caption="Trusted by 500+ companies worldwide"
/>
```

### Partner Badges
```tsx
import { partnerLogos } from '../../data/logos';

<SocialProof 
  heading="Trusted Technology Partners"
  logos={partnerLogos}
  columns={5}
  variant="logos"
  caption="We partner with industry-leading platforms and tools"
/>
```

### Awards & Recognition
```tsx
import { awardLogos } from '../../data/logos';

<SocialProof 
  heading="Award-Winning Agency"
  logos={awardLogos}
  columns={4}
  variant="awards"
  caption="Recognized for excellence in web design and development"
/>
```

### Certifications
```tsx
import { certificationLogos } from '../../data/logos';

<SocialProof 
  heading="Certified & Recognized"
  logos={certificationLogos}
  columns={4}
  variant="certifications"
  caption="Our team holds professional certifications and industry recognition"
/>
```

### Without Heading
```tsx
<SocialProof 
  logos={clientLogos}
  columns={6}
  showCaption={false}
/>
```

---

## Design Token Compliance

### Typography
- **Heading:** `var(--text-h3)` with `Lexend, sans-serif`
- **Caption:** `var(--text-small)` with `Manrope, sans-serif`
- **Font Weights:** `var(--font-weight-medium)` (heading), `var(--font-weight-regular)` (caption)
- **Line Heights:** `var(--line-height-snug)` (heading), `var(--line-height-normal)` (caption)

### Colors
- **Heading:** `var(--foreground)`
- **Caption:** `var(--muted-foreground)`
- **Logo Filter:** Grayscale (100%) default, full color on hover
- **Logo Opacity:** 0.7 default, 1.0 on hover

### Spacing
- **Section Padding:** `py-20`
- **Grid Gap:** `gap-8` (desktop), `gap-6` (mobile)
- **Content Gap:** `gap-8` (vertical)
- **Logo Padding:** `p-6` (individual logo containers)

### Transitions
- **Duration:** `var(--transition-base)` (300ms)
- **Easing:** `var(--ease-in-out)`
- **Properties:** `filter`, `opacity`, `transform`

### Effects
- **Grayscale Default:** `filter: grayscale(100%)`
- **Color on Hover:** `filter: grayscale(0%)`
- **Opacity Default:** `opacity: 0.7`
- **Opacity Hover:** `opacity: 1`
- **Scale Hover:** `transform: scale(1.05)`

---

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Alt Text:** Every logo has descriptive alt text
- ✅ **Semantic HTML:** Uses `<figure>` and `<ul>` for logo grid
- ✅ **Keyboard Navigation:** Logos with links are keyboard accessible
- ✅ **Focus States:** Visible focus rings on clickable logos
- ✅ **Color Contrast:** Caption text meets 4.5:1 ratio
- ✅ **Responsive:** Mobile-friendly grid layout

### Semantic Structure
```html
<section>
  <h2>Trusted By Industry Leaders</h2>
  <ul class="logo-grid">
    <li>
      <figure>
        <img src="logo.png" alt="Company Name" />
      </figure>
    </li>
  </ul>
  <p class="caption">Trusted by 500+ companies</p>
</section>
```

---

## Logo Data Structure

### Logo Object Interface
```tsx
export interface Logo {
  id: string;          // Unique identifier
  name: string;        // Company/organization name
  src: string;         // Image source (URL or import)
  alt: string;         // Accessible alt text
  url?: string;        // Optional link to website
}
```

### Example Data File (`/src/app/data/logos.ts`)
```tsx
export const clientLogos: Logo[] = [
  {
    id: 'client-1',
    name: 'Acme Corporation',
    src: '/assets/logos/acme.png',
    alt: 'Acme Corporation logo',
    url: 'https://acme.com'
  },
  {
    id: 'client-2',
    name: 'Tech Innovations',
    src: '/assets/logos/tech-innovations.png',
    alt: 'Tech Innovations logo'
  }
  // ... more logos
];

export const partnerLogos: Logo[] = [
  // Partner/platform logos
];

export const certificationLogos: Logo[] = [
  // Certification badges
];

export const awardLogos: Logo[] = [
  // Award badges
];
```

---

## Grid Responsive Behavior

### Desktop (1024px+)
- **5 columns** (default)
- Full grid visible
- Hover effects active

### Tablet (768px - 1023px)
- **3-4 columns**
- Responsive sizing
- Maintained spacing

### Mobile (<768px)
- **2-3 columns**
- Stacked grid
- Touch-friendly

### Column Configuration
```tsx
// CSS Grid responsive classes
const gridClasses = {
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
};
```

---

## Variants

### 1. Client Logos (Default)
```tsx
<SocialProof 
  heading="Trusted By Industry Leaders"
  logos={clientLogos}
  variant="logos"
/>
```
- Company/client logos
- 5 columns default
- Grayscale with color on hover

### 2. Partner Badges
```tsx
<SocialProof 
  heading="Technology Partners"
  logos={partnerLogos}
  variant="logos"
/>
```
- Platform/technology logos
- WordPress, WooCommerce, etc.
- Same styling as client logos

### 3. Awards
```tsx
<SocialProof 
  heading="Award-Winning Agency"
  logos={awardLogos}
  variant="awards"
/>
```
- Award badges
- Recognition logos
- 4 columns default (fewer items)

### 4. Certifications
```tsx
<SocialProof 
  heading="Certified Professionals"
  logos={certificationLogos}
  variant="certifications"
/>
```
- Professional certifications
- Industry credentials
- 4 columns default

---

## Grayscale Hover Effect

### Implementation
```tsx
<img 
  src={logo.src}
  alt={logo.alt}
  style={{
    filter: 'grayscale(100%)',
    opacity: 0.7,
    transition: 'all var(--transition-base) var(--ease-in-out)',
    maxWidth: '100%',
    height: 'auto'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.filter = 'grayscale(0%)';
    e.currentTarget.style.opacity = '1';
    e.currentTarget.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.filter = 'grayscale(100%)';
    e.currentTarget.style.opacity = '0.7';
    e.currentTarget.style.transform = 'scale(1)';
  }}
/>
```

### CSS Alternative
```css
.logo-image {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all var(--transition-base) var(--ease-in-out);
}

.logo-image:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}
```

---

## Template Integration Examples

### Homepage
```tsx
import { SocialProof } from '../patterns/SocialProof';
import { clientLogos } from '../../data/logos';

<SocialProof 
  heading="Trusted By Industry Leaders"
  logos={clientLogos}
  columns={5}
  caption="Join 500+ companies using our WordPress solutions"
/>
```

### About Template
```tsx
<SocialProof 
  heading="Trusted Technology Partners"
  logos={partnerLogos}
  columns={5}
  caption="We partner with industry-leading platforms and tools"
/>

<SocialProof 
  heading="Certified & Recognized"
  logos={certificationLogos}
  columns={4}
  caption="Our team holds professional certifications and industry recognition"
/>
```

### Pricing Template
```tsx
<PricingTable plans={pricingPlans} />

<SocialProof 
  heading="Trusted By Leading Brands"
  logos={clientLogos}
  columns={6}
/>
```

---

## Best Practices

### DO ✅
- Use grayscale effect for professional appearance
- Keep logo count reasonable (10-20 max)
- Ensure logos are high quality (SVG preferred)
- Use consistent logo sizing
- Provide descriptive alt text
- Include recognizable brands when possible
- Update logos periodically

### DON'T ❌
- Use low-quality/pixelated logos
- Show too many logos (overwhelming)
- Mix different logo styles (some color, some grayscale)
- Forget alt text (accessibility)
- Use logos without permission
- Make logos too small to recognize
- Use outdated company logos

---

## Logo Image Requirements

### File Format
- **Preferred:** SVG (scalable, crisp at any size)
- **Alternative:** PNG with transparent background
- **Minimum Resolution:** 2x for retina displays

### Dimensions
- **Width:** 200-400px (at 1x)
- **Height:** Maintain aspect ratio
- **Background:** Transparent preferred

### File Size
- **Target:** < 50KB per logo
- **Optimization:** Use compression tools (ImageOptim, TinyPNG)

---

## Caption Variations

### With Numbers
```tsx
<SocialProof 
  logos={clientLogos}
  caption="Trusted by 500+ companies worldwide"
/>
```

### With Locations
```tsx
<SocialProof 
  logos={clientLogos}
  caption="Serving clients across 30 countries"
/>
```

### With Industries
```tsx
<SocialProof 
  logos={clientLogos}
  caption="Trusted by healthcare, finance, and technology leaders"
/>
```

### Without Caption
```tsx
<SocialProof 
  logos={clientLogos}
  showCaption={false}
/>
```

---

## Related Patterns

- **TestimonialSection** — Client testimonials with quotes
- **StatsSection** — Numerical social proof
- **CTASection** — Primary call-to-action

---

## Testing Checklist

- [ ] All logos display correctly
- [ ] Grayscale effect works on hover
- [ ] Alt text is descriptive
- [ ] Grid is responsive on all screen sizes
- [ ] Links navigate correctly (if clickable)
- [ ] Focus states are visible (if clickable)
- [ ] Caption displays properly
- [ ] Logos are high quality (not pixelated)
- [ ] Hover transitions are smooth
- [ ] Mobile grid layout works well

---

**Last Updated:** December 27, 2024  
**Pattern Version:** 1.0  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)
