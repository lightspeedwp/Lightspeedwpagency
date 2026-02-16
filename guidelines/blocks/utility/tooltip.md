# Tooltip Block

The Tooltip component displays informative text when users hover over, focus on, or tap an element.

## Overview

- **Component:** `Tooltip`
- **Path:** `/src/app/components/blocks/utility/Tooltip.tsx`
- **Styles:** `/src/styles/blocks/utility/tooltip.css`
- **WordPress Block:** Maps to custom tooltip behaviors or interactive elements.

## Usage

```tsx
import { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider 
} from '@/app/components/blocks/utility/Tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <button>Hover me</button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## CSS Classes

- `.wp-block-tooltip-content` - The tooltip popup content.
- `.wp-block-tooltip-arrow` - The arrow pointing to the trigger.

## CSS Variables

- `var(--z-tooltip)` - Z-index for the tooltip (1600).
- `var(--bg-popover)` / `var(--text-popover)` - Colors (usually inverse of background).
- `var(--radius-sm)` - Border radius.
- `var(--shadow-sm)` - Shadow.

## Accessibility

- **Keyboard:** Tooltips appear on focus.
- **Screen Readers:** Content is associated via `aria-describedby`.
