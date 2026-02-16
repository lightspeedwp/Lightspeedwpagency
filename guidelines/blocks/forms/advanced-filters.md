# Advanced Filters Block

**Block:** `forms/advanced-filters`
**CSS:** `/src/styles/blocks/forms/advanced-filters.css`

A production-grade filtering system with multi-select filters, price range sliders, search input, and active filter management.

## Features
- Multi-select filters (checkboxes)
- Single-select filters (radios)
- Range sliders (price)
- Search input
- Active filter badges
- Clear all functionality
- Mobile-responsive design

## Component

```tsx
import { AdvancedFilters } from '@/app/components/blocks/forms/AdvancedFilters';

<AdvancedFilters
  filters={[
    { id: 'category', label: 'Category', type: 'checkbox', options: [...] },
    { id: 'price', label: 'Price Range', type: 'range', min: 0, max: 1000 }
  ]}
  activeFilters={activeFilters}
  onFilterChange={handleFilterChange}
  onClearAll={handleClearAll}
/>
```

## Structure

- `.wp-block-advanced-filters`: Main container
- `.wp-block-advanced-filters__header`: Title and actions
- `.wp-block-advanced-filters__title`: "Filters" heading
- `.wp-block-advanced-filters__search`: Search input wrapper
- `.wp-block-advanced-filters__groups`: Container for filter groups
- `.wp-block-advanced-filters__group`: Individual filter group
- `.wp-block-advanced-filters__group-header`: Toggle button for group
- `.wp-block-advanced-filters__active`: Active filters section

## CSS Variables

Uses standard design tokens:
- Colors: `var(--card)`, `var(--foreground)`, `var(--primary)`, `var(--muted)`
- Typography: `var(--font-primary)`, `var(--text-h4)`, `var(--text-base)`
- Spacing: `var(--spacing-*)`
- Radius: `var(--radius-xl)`, `var(--radius-lg)`

**Status:** ✅ MIGRATED | **Design System:** 100% Compliant
