# HeroHome Pattern

**Pattern Type:** Hero Section  
**WordPress Pattern:** `lsx-design/hero/home`  
**Location:** `/src/app/components/patterns/HeroHome.tsx`

---

## Purpose

Full-viewport hero section for the homepage with centered content, gradient background, trust indicators, and scroll affordance. Establishes visual hierarchy and brand presence.

---

## Design System Requirements

### Layout
- **Min Height:** `100vh` (full viewport)
- **Alignment:** Center content vertically and horizontally
- **Container:** Use Container component for content

### Typography

**Category Badge:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-base)`
- Weight: `var(--font-weight-medium)`
- Transform: Uppercase
- Letter spacing: `0.05em`

**Hero Title:**
- Use `<Heading level={1}>`
- Size: `var(--text-h1)` (60px)
- Color: `var(--primary-foreground)`

**Supporting Text:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-h4)` (20px)
- Weight: `var(--font-weight-regular)`
- Max width: 700px

**Trust Stats (Numbers):**
- Font: `Lexend, sans-serif`
- Size: `var(--text-h2)` (32px)
- Weight: `var(--font-weight-bold)`

**Trust Stats (Labels):**
- Font: `Manrope, sans-serif` (small text exception)
- Size: `var(--text-small)`
- Transform: Uppercase
- Letter spacing: `0.05em`

### Colors

**Background:**
```tsx
background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)'
color: 'var(--primary-foreground)'
```

**Category Badge:**
```tsx
backgroundColor: 'var(--secondary)'
color: 'var(--secondary-foreground)'
```

### Spacing
- **Vertical Padding:** `py-20` (80px)
- **Element Spacing:** `mb-6`, `mb-12` (24px, 48px)
- **Button Gap:** `gap-4` (16px)
- **Stats Border:** `pt-16` with border-top

### Border Radius
- **Category Badge:** `var(--radius-lg)` (8px)

---

## Usage

### Basic Implementation
```tsx
import { HeroHome } from '../patterns/HeroHome';

<main id="main-content">
  <HeroHome />
  {/* Other sections */}
</main>
```

**Note:** HeroHome is self-contained. No wrapper Section needed.

---

## Required Elements

1. **Category Badge** (optional but recommended)
2. **H1 Heading** (required - only one per page)
3. **Supporting Text** (recommended)
4. **CTA Buttons** (minimum 1, maximum 2)
5. **Trust Indicators** (3-4 stats)
6. **Scroll Down Arrow** (for long pages)

---

## WordPress Implementation

In WordPress, this maps to a **Pattern**:

```php
<?php
/**
 * Title: Hero Home
 * Slug: lsx-design/hero/home
 * Categories: hero
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"80px","bottom":"80px"}}},"backgroundColor":"primary","textColor":"primary-foreground"} -->
<div class="wp-block-group alignfull has-primary-background-color has-primary-foreground-color">
  <!-- wp:heading {"level":1,"textAlign":"center"} -->
  <h1 class="has-text-align-center">Discover Your Next Adventure</h1>
  <!-- /wp:heading -->
  
  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
  <div class="wp-block-buttons">
    <!-- wp:button -->
    <div class="wp-block-button"><a class="wp-block-button__link">Explore Destinations</a></div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
```

---

## Token Enforcement

✅ **REQUIRED:**
- Lexend for heading and body text
- Manrope for small stat labels only
- CSS variables for all colors
- CSS variables for font sizes
- Gradient using `var(--primary)` and `var(--secondary)`
- Tailwind spacing classes
- Border radius via `var(--radius-lg)`

❌ **FORBIDDEN:**
- Hard-coded colors (hex codes)
- Hard-coded pixel font sizes
- Tailwind font size classes
- Fixed pixel heights (use `min-height: 100vh`)
- Background images without gradients

---

## Accessibility

### Heading Hierarchy
- **CRITICAL:** Contains the page's only `<h1>`
- All other headings on page must be h2-h4

### Keyboard Navigation
- All buttons must be keyboard accessible
- Tab order: Category → Title → Buttons → Stats → Scroll arrow

### Screen Readers
- Hero content is inside `<section>` with semantic structure
- Scroll arrow has `aria-label="Scroll to content"`
- Stats use proper semantic HTML (not just styled divs)

### Reduced Motion
```tsx
// ScrollDownArrow respects prefers-reduced-motion
@media (prefers-reduced-motion: reduce) {
  .animate-bounce {
    animation: none;
  }
}
```

---

## Examples

### Standard Hero
```tsx
<section 
  className="relative flex items-center justify-center"
  style={{ 
    minHeight: '100vh',
    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
    color: 'var(--primary-foreground)'
  }}
>
  <Container className="relative z-10 text-center py-20">
    <Heading level={1} className="mb-6">
      Discover Your Next Adventure
    </Heading>
    
    <p style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-h4)',
      maxWidth: '700px',
      margin: '0 auto'
    }}>
      Explore handpicked destinations around the globe.
    </p>
    
    <div className="flex gap-4 justify-center mt-12">
      <Button variant="primary" href="#featured">
        Explore Destinations
      </Button>
      <Button variant="ghost" href="#contact">
        Plan Your Trip
      </Button>
    </div>
  </Container>
  
  <ScrollDownArrow targetId="featured" />
</section>
```

### Hero with Trust Indicators
```tsx
<section style={{ minHeight: '100vh', /* gradient */ }}>
  <Container className="text-center py-20">
    {/* Title and CTAs */}
    
    <div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16"
      style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
    >
      <div>
        <div style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h2)',
          fontWeight: 'var(--font-weight-bold)'
        }}>
          50+
        </div>
        <div style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          textTransform: 'uppercase'
        }}>
          Countries
        </div>
      </div>
      {/* More stats */}
    </div>
  </Container>
</section>
```

---

## Content Guidelines

### Hero Title
- **Length:** 3-8 words ideal
- **Tone:** Inspirational, action-oriented
- **Examples:**
  - "Discover Your Next Adventure"
  - "Explore the World with Confidence"
  - "Begin Your Journey Today"

### Supporting Text
- **Length:** 1-2 sentences (15-30 words)
- **Purpose:** Expand on title, add context
- **Tone:** Welcoming, descriptive

### Trust Stats
- **Count:** 3-4 indicators
- **Format:** Number + Label
- **Examples:**
  - "50+ Countries"
  - "10K+ Happy Travelers"
  - "4.9/5 Average Rating"

---

## Variants

### Minimal (Title + CTA only)
```tsx
<HeroHome 
  showCategoryBadge={false}
  showTrustStats={false}
/>
```

### With Background Image
```tsx
<section 
  style={{
    minHeight: '100vh',
    backgroundImage: 'url(...)',
    backgroundSize: 'cover',
    position: 'relative'
  }}
>
  <div 
    style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
      opacity: 0.9
    }}
  />
  <Container className="relative z-10">
    {/* Content */}
  </Container>
</section>
```

---

## Design System Integration

This pattern enforces:
1. **Lexend typography** for headings and body
2. **Manrope typography** for small stat labels only
3. **CSS variable gradients** using primary/secondary
4. **One H1 per page** rule
5. **Full viewport hero** standard
6. **Scroll affordance** via ScrollDownArrow
7. **Trust indicators** for social proof

---

**Last Updated:** December 24, 2024
