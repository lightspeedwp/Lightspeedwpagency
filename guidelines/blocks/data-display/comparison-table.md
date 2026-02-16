# Comparison Table Block

**Block:** `data-display/comparison-table`
**CSS:** `/src/styles/blocks/data-display/comparison-table.css`

A responsive comparison table for products, services, or pricing plans.

## Features
- Side-by-side comparison
- Sticky header
- Highlight differences
- Add/remove items
- Mobile-responsive (horizontal scroll on desktop, vertical stack on mobile)
- Feature highlighting (check/minus icons)

## Component

```tsx
import { ComparisonTable } from '@/app/components/blocks/data-display/ComparisonTable';

<ComparisonTable
  items={[
    {
      id: 'basic',
      name: 'Basic',
      price: '$10',
      features: { users: 1, storage: '10GB', support: false }
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$20',
      badge: 'Popular',
      features: { users: 5, storage: '50GB', support: true }
    }
  ]}
  onRemove={handleRemove}
  onAddMore={handleAddMore}
/>
```

## Structure

- `.wp-block-comparison-table`: Main container
- `.wp-block-comparison-table__container`: Inner scrollable container
- `.wp-block-comparison-table__header-row`: Header row with sticky positioning
- `.wp-block-comparison-table__cell`: Individual cell
- `.wp-block-comparison-table__feature-row`: Row for a specific feature
- `.wp-block-comparison-table__badge`: "Popular" or other badges
- `.wp-block-comparison-table__mobile`: Mobile view container

## CSS Variables

Uses standard design tokens:
- Colors: `var(--card)`, `var(--muted)`, `var(--accent)`, `var(--border)`
- Typography: `var(--font-primary)`, `var(--text-h4)`, `var(--text-base)`
- Spacing: `var(--spacing-*)`
- Radius: `var(--radius-xl)`, `var(--radius-lg)`

**Status:** ✅ MIGRATED | **Design System:** 100% Compliant
