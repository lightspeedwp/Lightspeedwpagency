# Empty States Block

The Empty States library provides standardized components for scenarios where no content is available, errors occur, or features are not yet ready.

## Overview

- **Components:** `EmptyState`, `EmptyStateNoResults`, `EmptyStateNoData`, `EmptyState404`, `EmptyState500`, etc.
- **Path:** `/src/app/components/blocks/feedback/EmptyStates.tsx`
- **Styles:** `/src/styles/blocks/feedback/empty-states.css`
- **WordPress Block:** Maps to custom patterns or template parts for 404/Empty states.

## Features

- **Standardized Layout:** Icon/Emoji + Heading + Description + Actions.
- **CSS Variables:** Fully styled using global theme variables (colors, fonts, spacing).
- **Variants:** Pre-built variants for common scenarios (Search, No Data, Error, Cart, etc.).
- **Accessibility:** Uses semantic HTML and ARIA attributes where appropriate.

## Usage

### Basic Usage

```tsx
import { EmptyState } from '@/app/components/blocks/feedback/EmptyStates';

<EmptyState
  emoji="🔍"
  heading="No items found"
  description="Try adjusting your filters."
  action={{
    label: "Clear Filters",
    onClick: () => console.log("Clear"),
  }}
/>
```

### Pre-built Variants

```tsx
import { EmptyStateNoResults, EmptyState404 } from '@/app/components/blocks/feedback/EmptyStates';

// Search Results
<EmptyStateNoResults
  searchTerm="query"
  onClearSearch={() => setSearch('')}
/>

// 404 Page
<EmptyState404
  onGoHome={() => router.push('/')}
/>
```

## CSS Classes

- `.wp-block-empty-state` - Main container
- `.wp-block-empty-state__emoji` - Emoji wrapper
- `.wp-block-empty-state__icon` - SVG Icon wrapper
- `.wp-block-empty-state__heading` - Heading text
- `.wp-block-empty-state__description` - Description text
- `.wp-block-empty-state__actions` - Actions container
- `.wp-block-empty-state__button` - Button base style
- `.wp-block-empty-state__button--primary` - Primary button variant
- `.wp-block-empty-state__button--secondary` - Secondary button variant

## Accessibility

- **Contrast:** Text colors meet WCAG AA standards against background.
- **Touch Targets:** Buttons have minimum 48px height.
- **Hidden Content:** Decorative emojis use `aria-hidden="true"`.
