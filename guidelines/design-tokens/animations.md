# Animation Guidelines

Animations should be used sparingly and purposefully. We use standard CSS keyframes mapped to utility classes and variables.

**Location:** `/src/styles/animations.css`

## Animation Tokens (theme-base.css)

| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--transition-fast` | `150ms` | Hover states, micro-interactions |
| `--transition-base` | `200ms` | Standard UI transitions |
| `--transition-slow` | `300ms` | Large element movements |
| `--transition-slower` | `500ms` | Complex entrances |

## Utility Classes

Apply these classes to elements to trigger entrance animations.

| Class | Effect |
| :--- | :--- |
| `.animate-fade-in` | Fades opacity from 0 to 1 |
| `.animate-slide-up` | Fades in and moves up 20px |
| `.animate-slide-down` | Fades in and moves down 20px |
| `.animate-scale-in` | Fades in and scales from 95% to 100% |
| `.animate-spin` | Infinite rotation (loaders) |
| `.animate-pulse` | Opacity pulse (skeletons) |

## Stagger Delays

Use these to stagger animations for children in a list or grid.

| Class | Delay |
| :--- | :--- |
| `.delay-100` | 100ms |
| `.delay-200` | 200ms |
| `.delay-300` | 300ms |
| `.delay-500` | 500ms |
| `.delay-700` | 700ms |
| `.delay-1000` | 1000ms |

## Reduced Motion

All animations automatically disable when the user has `prefers-reduced-motion: reduce` enabled in their OS settings.

## React Usage

```tsx
<div className="wp-grid-3-cols">
  <div className="animate-slide-up delay-100">Item 1</div>
  <div className="animate-slide-up delay-200">Item 2</div>
  <div className="animate-slide-up delay-300">Item 3</div>
</div>
```
