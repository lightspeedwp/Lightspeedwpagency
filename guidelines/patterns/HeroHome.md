# HeroHome Pattern

## Overview

**Purpose:** Homepage hero section with headline, description, CTA buttons, and optional visual element  
**Category:** `lsx-design/hero/hero-home`  
**WordPress Block:** Cover block or Group block with media  
**Usage:** Front page template, landing pages  

**Key Features:**
- Large headline with gradient text (optional)
- Compelling description text
- Primary + secondary CTA buttons
- Background image or gradient
- Optional decorative elements (gradient orbs)
- Fully responsive
- 100% CSS variables

---

## WordPress FSE Mapping

### Block Pattern
```json
{
  "slug": "lsx-design/hero/hero-home",
  "title": "Hero Home",
  "description": "Homepage hero with headline, description, and CTAs",
  "categories": ["hero"],
  "blockTypes": ["core/cover", "core/group"],
  "keywords": ["hero", "header", "homepage", "cta"]
}
```

### Template Usage
```html
<!-- wp:cover {"url":"background.jpg","dimRatio":50} -->
<div class="wp-block-cover">
  <div class="wp-block-cover__inner-container">
    <!-- wp:heading {"level":1} -->
    <h1>Build Better WordPress Sites</h1>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"fontSize":"large"} -->
    <p class="has-large-font-size">
      Modern design system for WordPress block themes
    </p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons -->
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
</div>
<!-- /wp:cover -->
```

---

## Props / API

```typescript
interface HeroHomeProps {
  /** Main headline text */
  headline: string;
  
  /** Description/subheading */
  description: string;
  
  /** Primary CTA button text */
  primaryButtonText: string;
  
  /** Primary button destination page */
  primaryButtonPage: string;
  
  /** Secondary CTA button text (optional) */
  secondaryButtonText?: string;
  
  /** Secondary button destination page (optional) */
  secondaryButtonPage?: string;
  
  /** Background image URL (optional) */
  backgroundImage?: string;
  
  /** Use gradient background instead of image */
  useGradient?: boolean;
  
  /** Show gradient orbs (decorative elements) */
  showGradientOrbs?: boolean;
  
  /** Button size */
  buttonSize?: 'sm' | 'md' | 'lg';
  
  /** Section spacing */
  spacing?: SectionSpacing;
}
```

### Default Values
```typescript
{
  useGradient: false,
  showGradientOrbs: false,
  buttonSize: 'lg',
  spacing: '100'
}
```

---

## Usage Examples

### Basic Usage
```tsx
import { HeroHome } from '../patterns/HeroHome';

<HeroHome
  headline="Build Better WordPress Sites"
  description="Modern design system for WordPress block themes with accessibility and performance built-in."
  primaryButtonText="Get Started"
  primaryButtonPage="contact"
  secondaryButtonText="View Portfolio"
  secondaryButtonPage="portfolio-archive"
/>
```

### With Background Image
```tsx
<HeroHome
  headline="Transform Your WordPress Workflow"
  description="Enterprise-grade design systems for modern web applications."
  primaryButtonText="Start Your Project"
  primaryButtonPage="contact"
  secondaryButtonText="Explore Solutions"
  secondaryButtonPage="solutions"
  backgroundImage="https://images.unsplash.com/photo-1..."
  buttonSize="lg"
/>
```

### With Gradient Orbs
```tsx
<HeroHome
  headline="Design Systems That Scale"
  description="Build consistent, accessible WordPress themes with our comprehensive pattern library."
  primaryButtonText="Get Started"
  primaryButtonPage="contact"
  useGradient={true}
  showGradientOrbs={true}
  buttonSize="lg"
/>
```

---

## Design System

### CSS Variables Used

**Typography:**
```css
--text-h1          /* Headline (60px) */
--text-xl          /* Description (20px) */
--text-base        /* Button text (16px) */
```

**Font Families:**
- **Lexend** — Headline, description, buttons
- Weight: 500 (medium) for headline
- Weight: 400 (regular) for description

**Colors:**
```css
--foreground       /* Headline, description */
--primary          /* Primary button background */
--primary-foreground /* Primary button text */
--card             /* Secondary button background */
--accent           /* Gradient accent (if used) */
--secondary        /* Gradient secondary (if used) */
```

**Spacing:**
- Tailwind classes: `py-20`, `py-32`, `gap-8`, `mb-6`
- Hero padding: 80-128px vertical (py-20 → py-32)
- Element gap: 32px (gap-8)

**Border Radius:**
```css
--radius           /* Button border radius */
```

---

## Responsive Behavior

### Breakpoints

**Mobile (< 768px):**
- Headline: --text-h2 (smaller than desktop)
- Description: --text-lg
- Single column layout
- Buttons stack vertically
- Padding: 80px vertical

**Tablet (768px - 1024px):**
- Headline: --text-h1
- Description: --text-xl
- Buttons side by side
- Padding: 96px vertical

**Desktop (> 1024px):**
- Headline: --text-h1 (full size 60px)
- Description: --text-xl (20px)
- Maximum width: 768px centered
- Padding: 128px vertical

### Fluid Typography

The headline uses fluid typography that scales between viewport sizes:

```css
/* Mobile: 36px */
/* Tablet: 48px */
/* Desktop: 60px */
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- Both CTA buttons keyboard accessible
- Focus states visible on buttons
- Tab order: headline → description → primary button → secondary button

**Screen Readers:**
- Semantic HTML (main, h1, p, button)
- Buttons have clear text labels
- Hero has proper heading hierarchy

**Focus States:**
```tsx
onFocus={(e) => {
  e.currentTarget.style.outline = '2px solid var(--ring)';
  e.currentTarget.style.outlineOffset = '2px';
}}
```

**Contrast:**
- Headline: 7:1 (AAA) against background
- Description: 4.5:1 (AA) against background
- Buttons: 4.5:1 (AA) minimum

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .gradient-orb {
    animation: none;
  }
}
```

---

## Background Variants

### Solid Color
```tsx
style={{
  backgroundColor: 'var(--background)'
}}
```

### Gradient Background
```tsx
style={{
  background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)'
}}
```

### Image Background
```tsx
style={{
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
```

### With Overlay
```tsx
<div style={{ position: 'relative' }}>
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }} />
  <div style={{ position: 'relative', zIndex: 1 }}>
    {/* Content */}
  </div>
</div>
```

---

## Gradient Orbs

### What Are They?
Decorative animated gradient circles that add visual interest to the hero.

### Implementation
```tsx
{showGradientOrbs && (
  <>
    <div
      className="gradient-orb gradient-orb-1"
      style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(60px)',
        animation: 'float 20s ease-in-out infinite'
      }}
    />
    {/* Additional orbs */}
  </>
)}
```

### Animation
```css
@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(30px, -30px);
  }
  66% {
    transform: translate(-20px, 20px);
  }
}
```

---

## Button Configuration

### Primary Button
- Background: `var(--primary)`
- Text: `var(--primary-foreground)`
- Size: Large (48px height)
- Full width on mobile

### Secondary Button
- Background: `var(--card)`
- Text: `var(--foreground)`
- Border: `1px solid var(--border-soft)`
- Size: Large (48px height)

### Button Sizes
```typescript
{
  sm: { height: '36px', padding: '8px 16px' },
  md: { height: '44px', padding: '12px 24px' },
  lg: { height: '48px', padding: '14px 32px' }
}
```

---

## Testing Checklist

### Rendering
- [ ] Headline displays correctly
- [ ] Description displays correctly
- [ ] Both buttons render
- [ ] Background image loads (if provided)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible on buttons
- [ ] Heading hierarchy correct (H1)
- [ ] WCAG AA contrast on all text
- [ ] Reduced motion respected

### Responsive
- [ ] Mobile layout correct (stacked buttons)
- [ ] Tablet layout correct
- [ ] Desktop layout correct
- [ ] Fluid typography scales properly

### Dark Mode
- [ ] Text readable in dark mode
- [ ] Buttons work in dark mode
- [ ] Gradient orbs visible but subtle
- [ ] Background appropriate

---

## Common Use Cases

### 1. Homepage Hero
```tsx
<HeroHome
  headline="Build Better WordPress Sites"
  description="Modern design system for WordPress block themes."
  primaryButtonText="Get Started"
  primaryButtonPage="contact"
  secondaryButtonText="View Work"
  secondaryButtonPage="portfolio-archive"
  showGradientOrbs={true}
/>
```

### 2. Landing Page
```tsx
<HeroHome
  headline="Transform Your Digital Presence"
  description="Enterprise WordPress solutions that scale."
  primaryButtonText="Schedule Demo"
  primaryButtonPage="contact"
  secondaryButtonText="See Pricing"
  secondaryButtonPage="pricing"
  backgroundImage="hero-bg.jpg"
/>
```

### 3. Service Page
```tsx
<HeroHome
  headline="WordPress Design Systems"
  description="Comprehensive pattern libraries for modern themes."
  primaryButtonText="Learn More"
  primaryButtonPage="services"
  useGradient={true}
/>
```

---

## WordPress Implementation Example

### PHP Pattern Registration
```php
<?php
/**
 * Hero Home Pattern
 */
register_block_pattern(
  'lsx-design/hero-home',
  array(
    'title'       => __( 'Hero Home', 'lsx-design' ),
    'description' => __( 'Homepage hero with headline and CTAs', 'lsx-design' ),
    'categories'  => array( 'hero' ),
    'keywords'    => array( 'hero', 'homepage', 'header', 'cta' ),
    'content'     => '<!-- pattern content -->',
  )
);
```

---

## Best Practices

### Content
- Keep headline under 60 characters
- Description: 120-160 characters
- Use action-oriented CTA text
- Primary CTA should be most important action

### Design
- Maintain strong visual hierarchy
- Use sufficient contrast for readability
- Ensure CTAs stand out
- Keep background subtle if using image

### Performance
- Optimize background images (< 500KB)
- Use WebP format for images
- Lazy load if hero is below fold
- Consider CSS gradients over images

---

**Created:** December 27, 2024  
**Pattern:** HeroHome  
**Category:** Hero  
**Status:** Production-ready ✅  
**Used in:** FrontPageTemplate  
**Design System:** 100% compliant

