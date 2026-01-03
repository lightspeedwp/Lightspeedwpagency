# CTA Inline Pattern

**WordPress Pattern:** `lsx-design/cta/cta-inline`  
**Block Type:** `core/group`  
**Section Style:** `default` or `cta-compact`  
**Status:** ✅ Production Ready

---

## Overview

Compact, mid-content call-to-action pattern for strategic placement between content sections. Features a centered card layout with heading, description, and 1-2 buttons. Maximum width of 800px for focused attention without disrupting content flow.

---

## Component Location

**File:** `/src/app/components/patterns/CTAInline.tsx`

---

## WordPress Mapping

### Block Structure
```html
<!-- wp:group {"metadata":{"name":"CTA Inline"},"className":"cta-inline","layout":{"type":"constrained","contentSize":"800px"}} -->
<div class="wp-block-group cta-inline">
  
  <!-- wp:group {"className":"cta-card","style":{"spacing":{"padding":"var(--spacing-8)"}}} -->
  <div class="wp-block-group cta-card">
    
    <!-- wp:heading {"textAlign":"center","level":3} -->
    <h3 class="has-text-align-center">Ready to Get Started?</h3>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">Let's discuss your project and create something amazing together.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
      
      <!-- wp:button -->
      <div class="wp-block-button">
        <a class="wp-block-button__link">Get Started</a>
      </div>
      <!-- /wp:button -->
      
      <!-- wp:button {"className":"is-style-outline"} -->
      <div class="wp-block-button is-style-outline">
        <a class="wp-block-button__link">Learn More</a>
      </div>
      <!-- /wp:button -->
      
    </div>
    <!-- /wp:buttons -->
    
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

### Pattern Registration
```php
<?php
/**
 * Title: CTA Inline
 * Slug: lsx-design/cta/cta-inline
 * Categories: lsx-design-cta
 * Description: Compact mid-content CTA with centered card layout
 */
?>
```

---

## Props Interface

```tsx
export interface CTAInlineProps {
  heading: string;
  description: string;
  primaryButtonText: string;
  primaryButtonPage: string;
  secondaryButtonText?: string;
  secondaryButtonPage?: string;
  variant?: 'default' | 'subtle';
  maxWidth?: '600px' | '800px' | '1000px';
}
```

### Default Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | Required | CTA heading (H3) |
| `description` | `string` | Required | Supporting description |
| `primaryButtonText` | `string` | Required | Primary button text |
| `primaryButtonPage` | `string` | Required | Primary button navigation |
| `secondaryButtonText` | `string` | `undefined` | Optional secondary button |
| `secondaryButtonPage` | `string` | `undefined` | Secondary button navigation |
| `variant` | `'default' \| 'subtle'` | `'default'` | Visual style variant |
| `maxWidth` | `string` | `'800px'` | Card max-width |

---

## Usage Examples

### Basic Inline CTA (Single Button)
```tsx
import { CTAInline } from '../patterns/CTAInline';

<CTAInline 
  heading="Ready to Get Started?"
  description="Let's discuss your project and create something amazing together."
  primaryButtonText="Get In Touch"
  primaryButtonPage="contact"
/>
```

### With Secondary Button
```tsx
<CTAInline 
  heading="Need Help Choosing?"
  description="Not sure which service is right for you? Book a free consultation and we'll help you find the perfect solution for your needs."
  primaryButtonText="Book Free Consultation"
  primaryButtonPage="contact"
  secondaryButtonText="View Pricing"
  secondaryButtonPage="pricing"
/>
```

### Subtle Variant
```tsx
<CTAInline 
  heading="Want to Learn More?"
  description="Explore our comprehensive guide to WordPress development"
  primaryButtonText="Read Guide"
  primaryButtonPage="blog"
  variant="subtle"
/>
```

### Custom Width
```tsx
<CTAInline 
  heading="Join Our Community"
  description="Connect with other WordPress professionals"
  primaryButtonText="Join Now"
  primaryButtonPage="contact"
  maxWidth="600px"
/>
```

---

## Design Token Compliance

### Typography
- **Heading:** `var(--text-h3)` with `Lexend, sans-serif`
- **Description:** `var(--text-base)` with `Manrope, sans-serif`
- **Font Weights:** `var(--font-weight-medium)` (heading), `var(--font-weight-regular)` (description)
- **Line Heights:** `var(--line-height-snug)` (heading), `var(--line-height-relaxed)` (description)

### Colors

**Default Variant:**
- **Card Background:** `var(--card)`
- **Card Border:** `var(--border)`
- **Heading:** `var(--foreground)`
- **Description:** `var(--muted-foreground)`
- **Button:** WordPress Button component with design system colors

**Subtle Variant:**
- **Card Background:** `var(--muted)`
- **Card Border:** None
- **Heading:** `var(--foreground)`
- **Description:** `var(--muted-foreground)`

### Spacing
- **Section Padding:** `py-16` (compact compared to full CTASection)
- **Card Padding:** `p-8`
- **Content Gaps:** `gap-6` (vertical spacing)
- **Button Gaps:** `gap-3` (horizontal spacing)
- **Max Width:** 800px (default)
- **Border Radius:** `var(--radius-lg)`

### Shadows & Effects
- **Card Shadow:** `var(--shadow-sm)` (default), none (subtle)
- **Hover Shadow:** `var(--shadow-md)`
- **Transitions:** `var(--transition-base)` with `var(--ease-in-out)`

---

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Heading Level:** Uses H3 (appropriate for mid-content)
- ✅ **Button Labels:** Clear, action-oriented text
- ✅ **Focus States:** Visible focus rings on buttons
- ✅ **Color Contrast:** All text exceeds 4.5:1 ratio
- ✅ **Keyboard Navigation:** Full keyboard support
- ✅ **Touch Targets:** Buttons meet 44×44px minimum

### Semantic HTML
```html
<section>
  <div class="cta-inline-card">
    <h3>Heading</h3>
    <p>Description</p>
    <div class="buttons">
      <a href="/contact" class="button-primary">Primary</a>
      <a href="/about" class="button-secondary">Secondary</a>
    </div>
  </div>
</section>
```

---

## Variants

### 1. Default Variant
```tsx
<CTAInline 
  heading="Ready to Transform Your Website?"
  description="Let's discuss your WordPress project"
  primaryButtonText="Get Started"
  primaryButtonPage="contact"
  variant="default"
/>
```
- Card background with border
- Box shadow
- High contrast

### 2. Subtle Variant
```tsx
<CTAInline 
  heading="Explore Our Services"
  description="Discover what we can do for you"
  primaryButtonText="View Services"
  primaryButtonPage="services"
  variant="subtle"
/>
```
- Muted background
- No border or shadow
- Softer appearance

---

## Strategic Placement

### When to Use CTAInline

**✅ Good Use Cases:**
1. **Between Long Content Sections** — Break up long pages
2. **After Feature Lists** — Guide users after information
3. **Mid-Blog Posts** — Capture engaged readers
4. **After Case Studies** — Convert impressed visitors
5. **Between Archive Results** — Strategic conversion points

**❌ Avoid Using:**
1. At top of page (use hero CTA instead)
2. Multiple times on same page (reduces effectiveness)
3. Right before another CTA (creates confusion)
4. In narrow sidebars (use full CTASection instead)

---

## Template Integration Examples

### Services Template
```tsx
import { CTAInline } from '../patterns/CTAInline';

// After services grid, before Archive CTA
<ServicesCardGrid services={displayedServices} />

<CTAInline 
  heading="Need Help Choosing?"
  description="Not sure which service is right for you? Book a free consultation and we'll help you find the perfect solution for your needs."
  primaryButtonText="Book Free Consultation"
  primaryButtonPage="contact"
  secondaryButtonText="View Pricing"
  secondaryButtonPage="pricing"
/>

<ArchiveCTA ctaData={servicesArchiveCTA} />
```

### Single Post Template
```tsx
// After post content, before related posts
<article>
  {/* Post content */}
</article>

<CTAInline 
  heading="Enjoyed This Article?"
  description="Get more WordPress tips and tutorials delivered to your inbox"
  primaryButtonText="Subscribe to Newsletter"
  primaryButtonPage="contact"
/>

<RelatedPosts posts={relatedPosts} />
```

### About Template
```tsx
// Between sections
<ValuesSection values={values} />

<CTAInline 
  heading="Want to Work Together?"
  description="We'd love to hear about your project"
  primaryButtonText="Get In Touch"
  primaryButtonPage="contact"
  secondaryButtonText="View Our Work"
  secondaryButtonPage="portfolio"
/>

<TeamSection team={team} />
```

---

## Comparison with Other CTA Patterns

| Pattern | Width | Use Case | Position | Buttons |
|---------|-------|----------|----------|---------|
| **CTAInline** | 800px | Mid-content | Between sections | 1-2 |
| **CTASection** | Full | Primary CTA | End of page | 1-2 |
| **ArchiveCTA** | Full | Archive conversion | After listings | 1 + Modal |
| **NewsletterSignup** | 600px | Email capture | End of content | 1 (submit) |

---

## Responsive Behavior

### Desktop (1024px+)
- 800px max-width
- Buttons side-by-side
- Centered card

### Tablet (768px - 1023px)
- Full width with padding
- Buttons side-by-side
- Responsive text sizing

### Mobile (<768px)
- Full width
- Stacked buttons
- Touch-friendly (48px minimum height)

---

## Best Practices

### DO ✅
- Use action-oriented heading ("Ready to...", "Want to...", "Need Help...")
- Keep description concise (1-2 sentences)
- Place strategically (not too frequent)
- Use clear, specific button text
- Maintain visual hierarchy
- Test button destinations

### DON'T ❌
- Use multiple inline CTAs on same page
- Place too close to other CTAs
- Make heading too long (>10 words)
- Use vague button text ("Click Here", "Learn More" alone)
- Forget mobile responsiveness
- Overwhelm with too many options

---

## Button Configuration

### Primary Button
```tsx
import { Button } from '../blocks/design/Buttons';

<Button
  page={primaryButtonPage}
  size="md"
  variant="default"
>
  {primaryButtonText}
</Button>
```

### Secondary Button (Optional)
```tsx
<Button
  page={secondaryButtonPage}
  size="md"
  variant="outline"
>
  {secondaryButtonText}
</Button>
```

---

## Copy Best Practices

### Effective Headings
- ✅ "Ready to Transform Your Website?"
- ✅ "Need Help Choosing a Plan?"
- ✅ "Want Expert WordPress Advice?"
- ❌ "Contact Us" (too generic)
- ❌ "Click Here to Get Started" (too long)

### Effective Descriptions
- ✅ "Let's discuss your project and create something amazing together."
- ✅ "Book a free consultation and we'll find the perfect solution for you."
- ❌ "We offer great services. Contact us today to learn more about what we do." (too wordy)

---

## Related Patterns

- **CTASection** — Full-width primary CTA for end of pages
- **ArchiveCTA** — Archive-specific CTA with enquiry modal
- **NewsletterSignup** — Email subscription form
- **HeroSection** — Primary page CTA at top

---

## Testing Checklist

- [ ] Heading is clear and compelling
- [ ] Description is concise (1-2 sentences)
- [ ] Primary button navigates correctly
- [ ] Secondary button navigates correctly (if present)
- [ ] Card layout is centered
- [ ] Max-width is appropriate (800px)
- [ ] Responsive on all screen sizes
- [ ] Buttons meet 44×44px touch targets (mobile)
- [ ] Focus states are visible
- [ ] Text contrast meets WCAG AA

---

**Last Updated:** December 27, 2024  
**Pattern Version:** 1.0  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)
