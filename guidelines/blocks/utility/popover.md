# Popover Block

The Popover component displays rich content in a portal, triggered by a button. It is distinct from a Tooltip (which is read-only hover text) and a Modal (which is disruptive).

## Overview

- **Component:** `Popover`
- **Path:** `/src/app/components/blocks/utility/Popover.tsx`
- **Styles:** `/src/styles/blocks/utility/popover.css`
- **WordPress Block:** Maps to interactive popovers (e.g., date pickers, filter menus).

## Usage

```tsx
import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent 
} from '@/app/components/blocks/utility/Popover';

<Popover>
  <PopoverTrigger asChild>
    <button>Open Popover</button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <h4 className="font-medium leading-none">Dimensions</h4>
      <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
    </div>
  </PopoverContent>
</Popover>
```

## CSS Classes

- `.wp-block-popover-content` - The popover container.

## CSS Variables

- `var(--z-popover)` - Z-index (1500).
- `var(--background)` - Background color.
- `var(--foreground)` - Text color.
- `var(--border)` - Border color.
- `var(--radius-lg)` - Border radius.
- `var(--shadow-md)` - Shadow.

## Accessibility

- **Focus Management:** Focus moves into the popover when opened.
- **Keyboard:** `Esc` closes the popover.
- **ARIA:** proper `aria-haspopup` and `aria-expanded` attributes are managed automatically.
