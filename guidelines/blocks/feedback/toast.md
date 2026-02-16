# Toast Block

The Toast component provides non-intrusive notifications for user feedback. It uses the `sonner` library but is styled with strict WordPress BEM classes and global CSS variables.

## Overview

- **Component:** `Toast` (exported as `Toaster` and `toast` utility)
- **Path:** `/src/app/components/blocks/feedback/Toast.tsx`
- **Styles:** `/src/styles/blocks/feedback/toast.css`
- **WordPress Block:** Maps to standard notification UI patterns (though not a core block, it's a theme utility).

## Features

- **Positioning:** Automatically positioned (usually bottom-right).
- **Stacking:** Multiple toasts stack gracefully.
- **Interactions:** Support for action buttons and cancel buttons.
- **Theming:** Fully integrated with global CSS variables (colors, fonts, radius).
- **Accessibility:** Managed by `sonner` (ARIA live regions).

## Usage

Add the `Toaster` component once in your application root (usually in `App.tsx` or `Layout`), then use the `toast` function anywhere.

```tsx
import { Toaster, toast } from '@/app/components/blocks/feedback/Toast';

// In App Root
function App() {
  return (
    <>
      <YourAppContent />
      <Toaster />
    </>
  );
}

// In Component
function SubmitButton() {
  return (
    <button onClick={() => toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })}>
      Show Toast
    </button>
  );
}
```

## CSS Variables

The component uses these design system variables:

- `var(--background)` - Toast background
- `var(--foreground)` - Text color
- `var(--border)` - Border color
- `var(--primary)` - Action button background
- `var(--primary-foreground)` - Action button text
- `var(--muted-foreground)` - Description text
- `var(--radius-lg)` - Toast border radius
- `var(--shadow-lg)` - Box shadow
- `var(--font-primary)` - Font family

## Accessibility

- **Keyboard:** Toasts are announced by screen readers.
- **Focus:** Action buttons are keyboard accessible if focus is moved.
- **Motion:** Respects reduced motion preferences (via global styles).
