# Pricing Table Pattern

**WordPress Pattern:** `lsx-design/pricing/pricing-table`  
**Block Type:** `core/group` with `core/columns`  
**Section Style:** `default` or `pricing-highlight`  
**Status:** ✅ Production Ready

---

## Overview

Responsive pricing cards pattern for displaying service plans, packages, or tiered offerings. Features pricing cards in a grid layout with support for featured/recommended plans, feature lists with checkmarks, and prominent CTA buttons.

---

## Component Location

**File:** `/src/app/components/patterns/PricingTable.tsx`

---

## WordPress Mapping

### Block Structure
```html
<!-- wp:group {"metadata":{"name":"Pricing Table"},"className":"pricing-table","layout":{"type":"constrained"}} -->
<div class="wp-block-group pricing-table">
  
  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="has-text-align-center">Choose Your Plan</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph {"align":"center"} -->
  <p class="has-text-align-center">Select the perfect plan for your needs</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:columns {"className":"pricing-grid"} -->
  <div class="wp-block-columns pricing-grid">
    
    <!-- wp:column {"className":"pricing-card"} -->
    <div class="wp-block-column pricing-card">
      
      <!-- wp:heading {"level":3} -->
      <h3>Starter</h3>
      <!-- /wp:heading -->
      
      <!-- wp:paragraph {"className":"price"} -->
      <p class="price"><span class="amount">$999</span></p>
      <!-- /wp:paragraph -->
      
      <!-- wp:list {"className":"features-list"} -->
      <ul class="features-list">
        <li>5-page website</li>
        <li>Mobile responsive</li>
        <li>Basic SEO setup</li>
      </ul>
      <!-- /wp:list -->
      
      <!-- wp:buttons -->
      <div class="wp-block-buttons">
        <!-- wp:button -->
        <div class="wp-block-button">
          <a class="wp-block-button__link">Get Started</a>
        </div>
        <!-- /wp:button -->
      </div>
      <!-- /wp:buttons -->
      
    </div>
    <!-- /wp:column -->
    
    <!-- Repeat for additional pricing tiers -->
    
  </div>
  <!-- /wp:columns -->
  
</div>
<!-- /wp:group -->
```

### Pattern Registration
```php
<?php
/**
 * Title: Pricing Table
 * Slug: lsx-design/pricing/pricing-table
 * Categories: lsx-design-pricing
 * Description: Pricing cards with feature lists and CTAs
 */
?>
```

---

## Props Interface

```tsx
export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  buttonText?: string;
  buttonPage?: string;
  featured?: boolean;
  badge?: string;
}

export interface PricingTableProps {
  heading?: string;
  description?: string;
  plans: PricingPlan[];
  columns?: 2 | 3 | 4;
  showMonthlyToggle?: boolean;
}
```

### Default Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `"Choose Your Plan"` | Section heading |
| `description` | `string` | `"Select the perfect plan..."` | Subheading |
| `plans` | `PricingPlan[]` | Required | Array of pricing plans |
| `columns` | `2 \| 3 \| 4` | `3` | Number of columns in grid |
| `showMonthlyToggle` | `boolean` | `false` | Show monthly/annual toggle |

---

## Usage Examples

### Basic Pricing Table (3 Plans)
```tsx
import { PricingTable } from '../patterns/PricingTable';

const plans = [
  {
    name: 'Starter',
    price: '$999',
    period: 'one-time',
    description: 'Perfect for small businesses',
    features: [
      '5-page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form',
      '30 days support'
    ],
    buttonText: 'Get Started',
    buttonPage: 'contact'
  },
  {
    name: 'Professional',
    price: '$2,499',
    period: 'one-time',
    description: 'Most popular choice',
    features: [
      '10-page website',
      'Custom design',
      'Advanced SEO',
      'Blog setup',
      'Google Analytics',
      '90 days support'
    ],
    buttonText: 'Get Started',
    buttonPage: 'contact',
    featured: true,
    badge: 'Recommended'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'Priority support',
      'Dedicated account manager',
      'Training & documentation',
      '1 year support'
    ],
    buttonText: 'Contact Sales',
    buttonPage: 'contact'
  }
];

<PricingTable 
  heading="WordPress Website Pricing"
  description="Transparent pricing for every budget"
  plans={plans}
  columns={3}
/>
```

### With Featured Plan
```tsx
const plans = [
  {
    name: 'Basic',
    price: '$49',
    period: '/month',
    features: ['5 pages', 'Basic support'],
    buttonText: 'Start Free Trial',
    buttonPage: 'contact'
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    features: ['Unlimited pages', 'Priority support', 'Custom design'],
    buttonText: 'Start Free Trial',
    buttonPage: 'contact',
    featured: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Everything in Pro', 'Dedicated support', 'SLA'],
    buttonText: 'Contact Sales',
    buttonPage: 'contact'
  }
];

<PricingTable plans={plans} />
```

### 2-Column Layout
```tsx
<PricingTable 
  plans={[standardPlan, premiumPlan]}
  columns={2}
/>
```

---

## Design Token Compliance

### Typography
- **Heading:** `var(--text-h2)` with `Lexend, sans-serif`
- **Description:** `var(--text-base)` with `Manrope, sans-serif`
- **Plan Name:** `var(--text-h3)` with `Lexend, sans-serif`
- **Price:** `var(--text-h1)` with `Lexend, sans-serif`
- **Period:** `var(--text-base)` with `Manrope, sans-serif`
- **Features:** `var(--text-base)` with `Manrope, sans-serif`
- **Font Weights:** `var(--font-weight-medium)` (headings), `var(--font-weight-regular)` (body)

### Colors
- **Card Background:** `var(--card)`
- **Card Border:** `var(--border)`
- **Text:** `var(--foreground)` (headings), `var(--muted-foreground)` (description)
- **Price:** `var(--primary)` (featured) or `var(--foreground)` (standard)
- **Checkmark:** `var(--success)` or `var(--primary)`
- **Featured Badge:** `var(--primary)` background, `var(--primary-foreground)` text
- **Featured Border:** `var(--primary)` with enhanced shadow

### Spacing
- **Padding:** `py-20` (section), `p-8` (cards)
- **Gaps:** `gap-8` (card grid), `gap-4` (card content), `gap-2` (feature list)
- **Border Radius:** `var(--radius-lg)` (cards)
- **Border Width:** 1px (standard), 2px (featured)

### Shadows & Effects
- **Card Shadow:** `var(--shadow-sm)` (standard), `var(--shadow-lg)` (featured)
- **Hover Shadow:** `var(--shadow-md)`
- **Transitions:** `var(--transition-base)` with `var(--ease-in-out)`

---

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Heading Hierarchy:** Proper h2 → h3 structure
- ✅ **Semantic Lists:** Features as `<ul>` with list items
- ✅ **Button Labels:** Clear action-oriented text
- ✅ **Focus States:** Visible focus rings on cards and buttons
- ✅ **Color Contrast:** All text exceeds 4.5:1 ratio
- ✅ **Responsive:** Mobile-friendly stacked layout
- ✅ **Screen Reader:** Proper ARIA labels for badges

### Keyboard Navigation
- `Tab` — Navigate between cards and buttons
- `Enter/Space` — Activate buttons
- `Shift + Tab` — Navigate backwards

---

## Pricing Card Variants

### 1. Standard Card
```tsx
{
  name: 'Basic',
  price: '$99',
  period: '/month',
  features: ['Feature 1', 'Feature 2'],
  buttonText: 'Get Started'
}
```
- Standard border
- Normal shadow
- Default button style

### 2. Featured Card (Highlighted)
```tsx
{
  name: 'Pro',
  price: '$199',
  featured: true,
  badge: 'Most Popular',
  features: ['Feature 1', 'Feature 2'],
  buttonText: 'Get Started'
}
```
- Primary color border
- Enhanced shadow
- Badge overlay
- Larger button

### 3. Custom Pricing
```tsx
{
  name: 'Enterprise',
  price: 'Custom',
  description: 'Tailored to your needs',
  features: ['Feature 1', 'Feature 2'],
  buttonText: 'Contact Sales'
}
```
- No period
- Custom price text
- Different CTA

---

## Feature List Styling

### With Checkmarks (Default)
```tsx
<ul className="flex flex-col gap-3">
  {plan.features.map((feature, index) => (
    <li key={index} className="flex items-start gap-3">
      <Check 
        className="flex-shrink-0 mt-1" 
        style={{ 
          width: '20px', 
          height: '20px',
          color: 'var(--success)' 
        }} 
      />
      <span style={{ 
        fontFamily: 'Manrope, sans-serif',
        fontSize: 'var(--text-base)',
        color: 'var(--foreground)'
      }}>
        {feature}
      </span>
    </li>
  ))}
</ul>
```

### With Custom Icons
```tsx
import { Check, X, Minus } from 'lucide-react';

// Check for included
<Check style={{ color: 'var(--success)' }} />

// X for not included
<X style={{ color: 'var(--muted-foreground)' }} />

// Minus for partial
<Minus style={{ color: 'var(--muted-foreground)' }} />
```

---

## Template Integration Examples

### Pricing Template
```tsx
import { PricingTable } from '../patterns/PricingTable';
import { pricingPlans } from '../../data/pricing';

<PricingTable 
  heading="Transparent Pricing"
  description="Choose the plan that fits your needs"
  plans={pricingPlans}
  columns={3}
/>
```

### Services Template
```tsx
<PricingTable 
  heading="Service Packages"
  description="Flexible options for every budget"
  plans={servicePackages}
  columns={2}
/>
```

### Homepage
```tsx
<PricingTable 
  heading="Ready to Get Started?"
  plans={featuredPlans}
  columns={3}
/>
```

---

## Responsive Behavior

### Desktop (1024px+)
- 3-column grid (default)
- Cards side-by-side
- Full feature lists visible

### Tablet (768px - 1023px)
- 2-column grid
- Responsive sizing
- Maintained spacing

### Mobile (<768px)
- Single column stacked
- Full-width cards
- Touch-friendly buttons (48px height minimum)

---

## Badge Positioning

### Featured Badge
```tsx
{plan.badge && (
  <div
    style={{
      position: 'absolute',
      top: '-12px',
      right: '24px',
      padding: '4px 12px',
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      borderRadius: 'var(--radius)',
      fontSize: 'var(--text-small)',
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 'var(--font-weight-medium)'
    }}
  >
    {plan.badge}
  </div>
)}
```

---

## Best Practices

### DO ✅
- Highlight most popular/recommended plan
- Use clear, action-oriented button text
- Keep feature lists concise (5-8 items max)
- Show value proposition in description
- Use consistent pricing format
- Include period (monthly/annual/one-time)
- Make features scannable with checkmarks

### DON'T ❌
- Use more than 4 pricing tiers (overwhelming)
- Hide important features
- Use confusing pricing (add asterisks/footnotes)
- Make feature lists too long
- Forget mobile responsiveness
- Use jargon in feature names
- Hide the actual price

---

## Common Variations

### Monthly/Annual Toggle
```tsx
const [isAnnual, setIsAnnual] = useState(false);

<div className="flex items-center justify-center gap-3 mb-12">
  <span style={{ 
    color: !isAnnual ? 'var(--primary)' : 'var(--muted-foreground)' 
  }}>
    Monthly
  </span>
  <button 
    onClick={() => setIsAnnual(!isAnnual)}
    className="toggle-switch"
  />
  <span style={{ 
    color: isAnnual ? 'var(--primary)' : 'var(--muted-foreground)' 
  }}>
    Annual <span className="badge">Save 20%</span>
  </span>
</div>

<PricingTable 
  plans={isAnnual ? annualPlans : monthlyPlans}
/>
```

### Add-ons Section
```tsx
<PricingTable plans={corePlans} />

<Section>
  <h3>Add-ons</h3>
  <div className="grid grid-cols-3 gap-6">
    {addons.map(addon => (
      <div className="addon-card">
        <h4>{addon.name}</h4>
        <p className="price">{addon.price}</p>
        <p>{addon.description}</p>
      </div>
    ))}
  </div>
</Section>
```

---

## Related Patterns

- **FeatureComparison** — Detailed feature comparison table
- **CTASection** — Primary call-to-action
- **SocialProof** — Client logos for trust

---

## Testing Checklist

- [ ] All pricing plans display correctly
- [ ] Featured plan stands out visually
- [ ] Feature lists are readable
- [ ] Buttons navigate to correct pages
- [ ] Responsive on all screen sizes
- [ ] Touch targets meet 44×44px minimum (mobile)
- [ ] Focus states are visible
- [ ] Screen reader reads pricing properly
- [ ] Badge positioning is correct
- [ ] Cards have proper spacing

---

**Last Updated:** December 27, 2024  
**Pattern Version:** 1.0  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)
