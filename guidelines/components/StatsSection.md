# StatsSection Component

**Component Type:** Pattern  
**WordPress Pattern:** `lsx-design/content/stats`  
**File:** `/src/app/components/patterns/StatsSection.tsx`  
**Last Updated:** December 25, 2024

---

## Overview

The **StatsSection** component displays key statistics with visual emphasis. It supports three visual variants (default, gradient, minimal) and configurable column layouts.

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `stats` | `Stat[]` | Yes | - | Array of statistic objects |
| `title` | `string` | No | `''` | Section heading |
| `description` | `string` | No | `''` | Supporting text |
| `variant` | `'default' \| 'gradient' \| 'minimal'` | No | `'default'` | Visual style |
| `columns` | `2 \| 3 \| 4` | No | `4` | Number of columns |

### Stat Type

```tsx
type Stat = {
  number: string;      // e.g., "500+", "98%", "10+"
  label: string;       // e.g., "Projects Delivered"
  description: string; // e.g., "WordPress sites built"
  icon?: React.ComponentType;  // Optional Lucide icon
};
```

---

## Usage

### Default Variant

```tsx
import { StatsSection } from './patterns/StatsSection';

<StatsSection
  title="Proven Track Record"
  description="Numbers that demonstrate our commitment"
  stats={[
    { 
      number: "500+", 
      label: "Projects Delivered",
      description: "WordPress sites built"
    },
    { 
      number: "150+", 
      label: "Happy Clients",
      description: "Across 30 countries"
    },
    { 
      number: "10+", 
      label: "Years Experience",
      description: "In WordPress development"
    },
    { 
      number: "98%", 
      label: "Client Satisfaction",
      description: "Average rating"
    }
  ]}
/>
```

### Gradient Variant (Featured)

```tsx
<StatsSection
  stats={companyStats}
  variant="gradient"
  columns={4}
/>
```

### Minimal Variant (Compact)

```tsx
<StatsSection
  stats={performanceStats}
  variant="minimal"
  columns={3}
/>
```

### With Icons

```tsx
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

<StatsSection
  title="Our Impact"
  stats={[
    { 
      number: "500+", 
      label: "Projects",
      description: "Delivered",
      icon: TrendingUp
    },
    { 
      number: "150+", 
      label: "Clients",
      description: "Worldwide",
      icon: Users
    }
  ]}
/>
```

---

## Design System Tokens

### Typography

```tsx
// Number
fontSize: 'clamp(40px, 6vw, 56px)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
color: 'var(--primary)'
lineHeight: '1'

// Label
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-semibold)'
textTransform: 'uppercase'
letterSpacing: '0.05em'

// Description
fontSize: 'var(--text-small)'
fontFamily: 'Lexend, sans-serif'
opacity: '0.85'
```

### Colors

**Default Variant:**
```tsx
backgroundColor: 'var(--glass-bg)'
backdropFilter: 'blur(10px)'
border: '1px solid var(--glass-border)'
color: 'var(--card-foreground)'
```

**Gradient Variant:**
```tsx
backgroundColor: 'var(--card)'
background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)'
opacity: '0.05'  // Gradient overlay
```

**Minimal Variant:**
```tsx
backgroundColor: 'var(--background)'
color: 'var(--foreground)'
```

### Spacing

```tsx
// Section
className="py-24 px-6"

// Grid gap
className="gap-8"

// Stat item padding
padding: '48px 32px'  // Default & Gradient
padding: '32px 24px'  // Minimal
```

### Border Radius

```tsx
borderRadius: 'var(--radius-xl)'  // Stat items
```

---

## Features

- ✅ Three visual variants (default, gradient, minimal)
- ✅ Responsive typography with clamp()
- ✅ Optional icon support (Lucide React)
- ✅ Configurable columns (2-4)
- ✅ Glassmorphism effects (default variant)
- ✅ Gradient background (gradient variant)
- ✅ Centered layout
- ✅ Dark mode compatible
- ✅ Decorative gradient orbs (gradient variant)

---

## Variants

### Default (Glassmorphism)

- Glass morphism background
- Subtle borders
- Optional icons
- Standard padding
- Best for: Mid-page impact sections

### Gradient (Featured)

- Primary gradient background
- Gradient orbs for decoration
- No borders
- Enhanced visual impact
- Best for: Hero sections, featured stats

### Minimal (Compact)

- Simple background
- No decorative elements
- Compact spacing
- Focus on numbers
- Best for: Sidebars, footers, compact spaces

---

## WordPress Mapping

```php
<!-- wp:group {"backgroundColor":"card"} -->
<div class="wp-block-group has-card-background-color">
  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="has-text-align-center">Proven Track Record</h2>
  <!-- /wp:heading -->
  
  <!-- wp:columns {"align":"wide"} -->
  <div class="wp-block-columns alignwide">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:heading {"level":3,"fontSize":"huge"} -->
      <h3 class="has-huge-font-size">500+</h3>
      <!-- /wp:heading -->
      
      <!-- wp:paragraph -->
      <p><strong>Projects Delivered</strong></p>
      <!-- /wp:paragraph -->
      
      <!-- wp:paragraph {"fontSize":"small"} -->
      <p class="has-small-font-size">WordPress sites built</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->
```

---

## Best Practices

### DO ✅

- Use round numbers (500+ vs 487)
- Keep labels concise (2-4 words)
- Add context with descriptions
- Use 4 stats for balanced layout
- Include percentage or plus signs (+, %)
- Update stats regularly

### DON'T ❌

- Use decimal points (use 98% not 98.4%)
- Exceed 6 stats in one section
- Make numbers too small to read
- Use vague labels ("Success", "Quality")
- Inflate numbers (be honest)
- Omit descriptions (context matters)

---

## Accessibility

### Semantic HTML

```tsx
<section>        // Landmark
  <h2>          // Section heading
  <div>         // Grid container
    <div>       // Stat item
      <div>     // Number
      <div>     // Label
      <div>     // Description
```

### ARIA Attributes

- Stats use semantic HTML (no special aria needed)
- Icon decorations have `aria-hidden="true"`
- Numbers use `<div>` not `<h3>` (not headings)

### Keyboard Navigation

- Stats are not interactive (no keyboard focus needed)
- Section is accessible with screen reader navigation

### Contrast Ratios

- Number (primary): **4.8:1** (AA)
- Label: **9.2:1** (AAA)
- Description: **7.8:1** (AAA)

---

## Related Components

- **[HeroHome](./HeroHome.md)** - Homepage hero (uses stats)
- **[CTASection](./CTASection.md)** - Call-to-action sections
- **[Section](./Section.md)** - Wrapper component

---

## Related Documentation

- **[COMPONENT-API-REFERENCE.md](../blocks/COMPONENT-API-REFERENCE.md)** - Full API docs
- **[design-patterns-modern.md](../design-patterns-modern.md)** - Glassmorphism patterns
- **[design-tokens/colors.md](../design-tokens/colors.md)** - Color system

---

**This component uses CSS variables exclusively and follows the LSX Design system guidelines.**
