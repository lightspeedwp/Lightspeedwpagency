# Feature Comparison Pattern

**WordPress Pattern:** `lsx-design/pricing/feature-comparison`  
**Block Type:** `core/table`  
**Section Style:** `default` or `pricing-highlight`  
**Status:** ✅ Production Ready

---

## Overview

Detailed feature comparison table pattern for helping users make informed decisions between pricing plans, service packages, or product tiers. Features responsive table layout with checkmarks, X marks, and custom values, with sticky header for better UX on long tables.

---

## Component Location

**File:** `/src/app/components/patterns/FeatureComparison.tsx`

---

## WordPress Mapping

### Block Structure
```html
<!-- wp:group {"metadata":{"name":"Feature Comparison"},"className":"feature-comparison","layout":{"type":"constrained"}} -->
<div class="wp-block-group feature-comparison">
  
  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="has-text-align-center">Compare Plans</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph {"align":"center"} -->
  <p class="has-text-align-center">Find the perfect plan for your needs</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:table {"className":"comparison-table"} -->
  <figure class="wp-block-table comparison-table">
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Starter</th>
          <th>Professional</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Pages</td>
          <td>5</td>
          <td>10</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <td>Custom Design</td>
          <td>✗</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <!-- More rows -->
      </tbody>
    </table>
  </figure>
  <!-- /wp:table -->
  
</div>
<!-- /wp:group -->
```

### Pattern Registration
```php
<?php
/**
 * Title: Feature Comparison Table
 * Slug: lsx-design/pricing/feature-comparison
 * Categories: lsx-design-pricing
 * Description: Detailed comparison table for pricing plans or packages
 */
?>
```

---

## Props Interface

```tsx
export interface ComparisonFeature {
  name: string;
  description?: string;
  values: (boolean | string | number)[];
}

export interface ComparisonColumn {
  name: string;
  highlighted?: boolean;
  badge?: string;
}

export interface FeatureComparisonProps {
  heading?: string;
  description?: string;
  columns: ComparisonColumn[];
  features: ComparisonFeature[];
  stickyHeader?: boolean;
}
```

### Default Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `"Compare Plans"` | Section heading |
| `description` | `string` | `"Find the perfect plan..."` | Subheading |
| `columns` | `ComparisonColumn[]` | Required | Plan/tier columns |
| `features` | `ComparisonFeature[]` | Required | Feature rows with values |
| `stickyHeader` | `boolean` | `true` | Sticky table header on scroll |

---

## Usage Examples

### Basic Feature Comparison
```tsx
import { FeatureComparison } from '../patterns/FeatureComparison';

const columns = [
  { name: 'Starter' },
  { name: 'Professional', highlighted: true, badge: 'Popular' },
  { name: 'Enterprise' }
];

const features = [
  {
    name: 'Number of Pages',
    values: [5, 10, 'Unlimited']
  },
  {
    name: 'Custom Design',
    values: [false, true, true]
  },
  {
    name: 'SEO Optimization',
    values: ['Basic', 'Advanced', 'Premium']
  },
  {
    name: 'Support',
    description: 'Technical support availability',
    values: ['30 days', '90 days', '1 year']
  },
  {
    name: 'Priority Support',
    values: [false, false, true]
  }
];

<FeatureComparison 
  heading="Compare WordPress Packages"
  description="Choose the plan that fits your needs"
  columns={columns}
  features={features}
/>
```

### With Highlighted Column
```tsx
const columns = [
  { name: 'Basic' },
  { 
    name: 'Pro', 
    highlighted: true, 
    badge: 'Most Popular' 
  },
  { name: 'Enterprise' }
];

<FeatureComparison 
  columns={columns}
  features={features}
/>
```

### Without Sticky Header
```tsx
<FeatureComparison 
  columns={columns}
  features={features}
  stickyHeader={false}
/>
```

---

## Design Token Compliance

### Typography
- **Heading:** `var(--text-h2)` with `Lexend, sans-serif`
- **Description:** `var(--text-base)` with `Manrope, sans-serif`
- **Table Header:** `var(--text-base)` with `Lexend, sans-serif`, `var(--font-weight-medium)`
- **Feature Name:** `var(--text-base)` with `Manrope, sans-serif`
- **Feature Values:** `var(--text-base)` with `Manrope, sans-serif`
- **Badge:** `var(--text-small)` with `Manrope, sans-serif`

### Colors
- **Table Background:** `var(--card)`
- **Table Border:** `var(--border)`
- **Header Background:** `var(--muted)`
- **Header Text:** `var(--foreground)`
- **Row Text:** `var(--foreground)` (feature names), `var(--muted-foreground)` (values)
- **Highlighted Column:** `var(--primary-muted)` background
- **Badge:** `var(--primary)` background, `var(--primary-foreground)` text
- **Checkmark:** `var(--success)` or `var(--primary)`
- **X Mark:** `var(--muted-foreground)` or `var(--destructive-muted)`
- **Hover Row:** `var(--muted)` background

### Spacing
- **Section Padding:** `py-20`
- **Table Padding:** `p-0` (contained within card)
- **Cell Padding:** `p-4` (standard), `p-6` (header)
- **Row Gap:** 1px border separator
- **Content Gap:** `gap-8` (heading to table)

### Borders & Radius
- **Table Border:** `1px solid var(--border)`
- **Cell Borders:** `1px solid var(--border)`
- **Border Radius:** `var(--radius-lg)` (table container)

### Effects
- **Sticky Header:** `position: sticky; top: 0; z-index: 10`
- **Header Shadow:** `var(--shadow-sm)` when sticky
- **Row Hover:** Background color transition
- **Transitions:** `var(--transition-base)` with `var(--ease-in-out)`

---

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Table Structure:** Proper `<thead>`, `<tbody>`, `<th>`, `<td>` elements
- ✅ **Header Scope:** `scope="col"` on column headers
- ✅ **Header Scope:** `scope="row"` on feature names
- ✅ **Color Contrast:** All text exceeds 4.5:1 ratio
- ✅ **Keyboard Navigation:** Table is keyboard accessible
- ✅ **Screen Reader:** Proper table semantics for assistive technology
- ✅ **Responsive:** Horizontal scroll on mobile with clear indicators

### Semantic Table Structure
```html
<table role="table">
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Starter</th>
      <th scope="col">Professional</th>
      <th scope="col">Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Custom Design</th>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>
```

---

## Feature Value Types

### 1. Boolean (Checkmark/X)
```tsx
{
  name: 'Custom Design',
  values: [false, true, true]
}
```
Renders:
- `✓` (Check icon) for `true`
- `✗` (X icon) for `false`

### 2. String (Custom Text)
```tsx
{
  name: 'SEO Optimization',
  values: ['Basic', 'Advanced', 'Premium']
}
```
Renders: Plain text

### 3. Number (Numeric Values)
```tsx
{
  name: 'Number of Pages',
  values: [5, 10, 20]
}
```
Renders: Formatted number

### 4. Mixed Types
```tsx
{
  name: 'Pages',
  values: [5, 10, 'Unlimited']
}
```
Renders: Number or text as appropriate

---

## Column Highlighting

### Featured Column
```tsx
const columns = [
  { name: 'Basic' },
  { 
    name: 'Professional',
    highlighted: true,
    badge: 'Recommended'
  },
  { name: 'Enterprise' }
];
```

**Visual Treatment:**
- Background: `var(--primary-muted)` or subtle highlight
- Border: `2px solid var(--primary)`
- Badge: Positioned above column header
- Shadow: Enhanced `var(--shadow-md)`

---

## Responsive Behavior

### Desktop (1024px+)
- Full table visible
- Sticky header on scroll
- All columns side-by-side

### Tablet (768px - 1023px)
- Horizontal scroll if needed
- Sticky first column (feature names)
- Compact cell padding

### Mobile (<768px)
- **Option 1: Horizontal Scroll**
  - Full table with horizontal scroll
  - Sticky first column
  - Scroll indicator

- **Option 2: Stacked Cards** (alternative)
  - Each plan as a separate card
  - Features listed within each card
  - No table structure

### Horizontal Scroll Implementation
```tsx
<div className="overflow-x-auto">
  <table style={{ minWidth: '600px' }}>
    {/* Table content */}
  </table>
</div>
```

---

## Icon Rendering

### Check Icon (True)
```tsx
import { Check } from 'lucide-react';

<Check 
  style={{
    width: '20px',
    height: '20px',
    color: 'var(--success)'
  }}
  aria-label="Included"
/>
```

### X Icon (False)
```tsx
import { X } from 'lucide-react';

<X 
  style={{
    width: '20px',
    height: '20px',
    color: 'var(--muted-foreground)'
  }}
  aria-label="Not included"
/>
```

---

## Template Integration Examples

### Pricing Template
```tsx
import { FeatureComparison } from '../patterns/FeatureComparison';
import { PricingTable } from '../patterns/PricingTable';

// Show pricing cards first
<PricingTable plans={pricingPlans} />

// Then detailed comparison
<FeatureComparison 
  heading="Detailed Feature Comparison"
  description="See exactly what's included in each plan"
  columns={comparisonColumns}
  features={comparisonFeatures}
/>
```

### Services Template
```tsx
<FeatureComparison 
  heading="Compare Service Packages"
  columns={serviceColumns}
  features={serviceFeatures}
/>
```

---

## Best Practices

### DO ✅
- Group related features into categories
- Use clear, concise feature names
- Keep column count reasonable (3-4 max)
- Highlight most popular plan
- Use consistent value formatting
- Provide feature descriptions when needed
- Make checkmarks green for better recognition
- Use sticky header for long tables

### DON'T ❌
- Show too many features (overwhelming)
- Use jargon in feature names
- Make table too wide (horizontal scroll on desktop)
- Forget mobile responsiveness
- Use inconsistent icon styles
- Hide important features
- Make text too small
- Use confusing abbreviations

---

## Feature Categories (Optional)

### Grouped Features Example
```tsx
const features = [
  // Core Features
  {
    name: 'Number of Pages',
    values: [5, 10, 'Unlimited']
  },
  {
    name: 'Custom Design',
    values: [false, true, true]
  },
  
  // SEO Features
  {
    name: 'Basic SEO',
    values: [true, true, true]
  },
  {
    name: 'Advanced SEO',
    values: [false, true, true]
  },
  
  // Support Features
  {
    name: 'Email Support',
    values: [true, true, true]
  },
  {
    name: 'Priority Support',
    values: [false, false, true]
  }
];

// Add category headers in UI
```

---

## Sticky Header Implementation

```tsx
<thead
  style={{
    position: 'sticky',
    top: 0,
    backgroundColor: 'var(--background)',
    zIndex: 10,
    boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none'
  }}
>
  {/* Header rows */}
</thead>
```

---

## Feature Description Tooltips (Optional)

```tsx
{
  name: 'Priority Support',
  description: 'Get 24/7 priority email and phone support',
  values: [false, false, true]
}

// Render with tooltip
<th scope="row">
  {feature.name}
  {feature.description && (
    <button 
      aria-label={`Learn more about ${feature.name}`}
      title={feature.description}
    >
      <Info size={16} />
    </button>
  )}
</th>
```

---

## Related Patterns

- **PricingTable** — Pricing cards with feature lists
- **CTASection** — Primary call-to-action after comparison
- **SocialProof** — Build trust with client logos

---

## Common Feature Examples

### Website Features
- Number of pages
- Custom design
- Mobile responsive
- SEO optimization
- Blog setup
- Contact forms
- Image galleries

### Support Features
- Support duration (30/90/365 days)
- Support channels (email, phone, chat)
- Response time (24h, 4h, 1h)
- Priority support
- Dedicated account manager

### Technical Features
- Hosting included
- SSL certificate
- CDN
- Backups
- Security monitoring
- Performance optimization
- Google Analytics

---

## Testing Checklist

- [ ] Table structure is semantic and accessible
- [ ] Sticky header works on scroll
- [ ] Highlighted column stands out
- [ ] Checkmarks and X marks render correctly
- [ ] Feature descriptions are clear
- [ ] Responsive on all screen sizes
- [ ] Horizontal scroll works on mobile
- [ ] Screen reader announces table properly
- [ ] Color contrast meets WCAG AA
- [ ] Badge displays correctly

---

**Last Updated:** December 27, 2024  
**Pattern Version:** 1.0  
**Design System:** LSX Design  
**WordPress Compatibility:** FSE (Full Site Editing)
