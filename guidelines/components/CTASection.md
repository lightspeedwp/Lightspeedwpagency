# CTASection Pattern

**Pattern Type:** Call-to-Action  
**WordPress Pattern:** `lsx-design/cta/section`  
**Location:** `/src/app/components/patterns/CTASection.tsx`

---

## Purpose

Focused call-to-action section to drive conversions. Appears at strategic points (end of page, between sections) with clear value proposition and single primary action.

---

## Design System Requirements

### Layout
- **Width:** Full-width section with contained content
- **Alignment:** Center-aligned text
- **Max Width:** 800px for content
- **Spacing:** Use `<Section spacing="xl">`

### Typography

**Title:**
- Use `<Heading level={2}>`
- Size: `var(--text-h2)` (32px)
- Color: Inherits from variant

**Description:**
- Font: `Lexend, sans-serif`
- Size: `var(--text-h4)` (20px)
- Weight: `var(--font-weight-regular)`
- Line height: 1.6
- Color: `var(--muted-foreground)` or variant color

**Trust Indicator:**
- Font: `Manrope, sans-serif` (small text exception)
- Size: `var(--text-small)`
- Opacity: 0.8

### Colors

**Default Variant:**
```tsx
backgroundColor: 'var(--muted)'
color: 'var(--foreground)'
```

**Highlighted Variant:**
```tsx
background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)'
color: 'var(--primary-foreground)'
```

**Button (Highlighted Variant):**
```tsx
backgroundColor: 'var(--background)'
color: 'var(--foreground)'
```

### Spacing
- **Section Padding:** `py-24` (96px) - XL spacing
- **Title → Description:** `mb-8` (32px)
- **Description → Buttons:** `mb-8` (32px)
- **Button Gap:** `gap-4` (16px)
- **Trust Indicator:** `mt-8` (32px)

### Border Radius
- **Section:** None (full-width)
- **Buttons:** Per Button component

---

## Usage

### Basic CTA
```tsx
import { CTASection } from '../patterns/CTASection';

<CTASection
  title="Ready to Start Your Journey?"
  description="Let our travel experts create a personalized itinerary just for you."
  buttonText="Get Started"
  buttonHref="#contact"
  variant="default"
/>
```

### Highlighted CTA (with gradient)
```tsx
<CTASection
  title="Plan Your Safari"
  description="Get in touch with our travel experts."
  buttonText="Contact Us"
  buttonHref="#contact"
  variant="highlighted"
/>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | CTA heading |
| `description` | string | - | Supporting text (optional) |
| `buttonText` | string | required | Primary button label |
| `buttonHref` | string | required | Button destination URL |
| `variant` | `'default' \| 'highlighted'` | `'default'` | Visual style |

---

## WordPress Implementation

In WordPress, this maps to a **Pattern**:

```php
<?php
/**
 * Title: CTA Section
 * Slug: lsx-design/cta/section
 * Categories: cta
 */
?>

<!-- wp:group {"align":"full","backgroundColor":"muted","style":{"spacing":{"padding":{"top":"96px","bottom":"96px"}}}} -->
<div class="wp-block-group alignfull has-muted-background-color" style="padding-top:96px;padding-bottom:96px">
  
  <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
  <div class="wp-block-group">
    
    <!-- wp:heading {"textAlign":"center","level":2} -->
    <h2 class="has-text-align-center">Ready to Start Your Journey?</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">Let our travel experts create a personalized itinerary.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
      <!-- wp:button {"backgroundColor":"primary"} -->
      <div class="wp-block-button">
        <a class="wp-block-button__link has-primary-background-color" href="#contact">Get Started</a>
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

## Token Enforcement

✅ **REQUIRED:**
- Lexend for heading and description
- Manrope for trust indicator only
- CSS variables for all colors
- CSS variable gradients (highlighted variant)
- CSS variables for font sizes
- Tailwind spacing classes
- Section component for wrapper

❌ **FORBIDDEN:**
- Hard-coded colors (hex codes)
- Hard-coded pixel spacing
- Tailwind font size classes
- Multiple primary CTAs (max 2 buttons total)
- Missing description (recommended but optional)

---

## Accessibility

### Heading Hierarchy
- Uses `<h2>` (assumes page has h1)
- If used multiple times, all use h2
- Don't skip to h3 or h4

### Keyboard Navigation
- All buttons keyboard accessible
- Logical tab order (title → description → buttons)

### Visual Contrast
- Default variant: Dark text on light background
- Highlighted variant: Light text on dark/gradient background
- All text meets WCAG AA contrast ratios

### Screen Readers
- Title conveys clear action
- Description adds context
- Button text is descriptive ("Get Started" not "Click Here")

---

## Examples

### Default CTA (end of page)
```tsx
<CTASection
  title="Ready to Explore?"
  description="Browse our collection of handpicked destinations and start planning your next adventure."
  buttonText="View All Destinations"
  buttonHref="/destinations"
  variant="default"
/>
```

### Highlighted CTA (middle of page)
```tsx
<CTASection
  title="Need Help Planning?"
  description="Our travel experts are here to create your perfect itinerary."
  buttonText="Schedule Consultation"
  buttonHref="#contact"
  variant="highlighted"
/>
```

### Minimal CTA (no description)
```tsx
<CTASection
  title="Start Your Journey Today"
  buttonText="Get Started"
  buttonHref="/get-started"
  variant="default"
/>
```

---

## Variants

### Default (Muted Background)
**Use for:**
- End of page CTAs
- Subtle conversions
- Secondary actions

**Styling:**
```tsx
<Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
  {/* Content */}
</Section>
```

### Highlighted (Gradient Background)
**Use for:**
- Primary conversions
- Important actions
- Mid-page emphasis

**Styling:**
```tsx
<Section 
  spacing="xl"
  style={{
    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
    color: 'var(--primary-foreground)'
  }}
>
  {/* Content with decorative pattern */}
</Section>
```

---

## Content Guidelines

### Title
- **Length:** 3-8 words
- **Tone:** Action-oriented, benefit-driven
- **Format:** Question or imperative
- **Examples:**
  - "Ready to Start Your Journey?"
  - "Plan Your Perfect Adventure"
  - "Get Expert Travel Advice"

### Description
- **Length:** 10-25 words (1-2 sentences)
- **Purpose:** Overcome objections, add value
- **Tone:** Helpful, reassuring
- **Examples:**
  - "Let our travel experts create a personalized itinerary just for you."
  - "Browse our collection of handpicked destinations and start planning."

### Button Text
- **Length:** 1-3 words
- **Tone:** Clear, action-oriented
- **Examples:**
  - "Get Started"
  - "Contact Us"
  - "View Destinations"
  - "Schedule Consultation"

---

## Button Configurations

### Single Button (Primary Action)
```tsx
<Button 
  href={buttonHref}
  style={{
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    padding: '16px 32px'
  }}
>
  {buttonText}
</Button>
```

### Two Buttons (Primary + Secondary)
```tsx
<div className="flex gap-4 justify-center">
  <Button 
    href={buttonHref}
    style={{
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      padding: '16px 32px'
    }}
  >
    {buttonText}
  </Button>
  <Button 
    variant="ghost"
    href="#learn-more"
    style={{
      borderColor: 'var(--primary-foreground)',
      color: 'var(--primary-foreground)',
      padding: '16px 32px'
    }}
  >
    Learn More
  </Button>
</div>
```

---

## Decorative Elements

### Background Pattern (Highlighted Variant)
```tsx
<div 
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage: `url("data:image/svg+xml,...")`,
  }}
  aria-hidden="true"
/>
```

### Trust Indicators (Highlighted Variant)
```tsx
<p style={{
  fontFamily: 'Manrope, sans-serif',
  fontSize: 'var(--text-small)',
  color: 'var(--primary-foreground)',
  opacity: 0.8,
  marginTop: '32px'
}}>
  ✓ Free consultation · ✓ Expert guides · ✓ Flexible booking
</p>
```

---

## Placement Guidelines

### End of Page (Default Variant)
- Last section before footer
- Summarizes page value
- Encourages next step

### Mid-Page (Highlighted Variant)
- After 2-3 content sections
- Breaks up long content
- Creates conversion opportunities

### After Lists/Grids
- Appears after CardGrid patterns
- "Didn't find what you're looking for?"
- Offers alternative action

---

## Design System Integration

This pattern enforces:
1. **Lexend typography** for heading and description
2. **Manrope typography** for trust indicators only
3. **CSS variable gradients** (highlighted variant)
4. **Single primary action** focus
5. **Consistent vertical spacing** (XL)
6. **Semantic HTML** structure
7. **WordPress pattern** compatibility

---

**Last Updated:** December 24, 2024
