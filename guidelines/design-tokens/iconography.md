# Iconography Design Tokens

**Version:** 1.0
**Created:** March 3, 2026
**Package:** `@phosphor-icons/react` (parallel with `lucide-react` during migration)
**Icons Available:** 1,200+ icons, 6 weight variants each

---

## Overview

The LSX Design System is migrating from **Lucide React** (stroke-only) to **Phosphor Icons** (6 weight variants). During the transition period, both libraries operate in parallel. All new icon usage should prefer Phosphor.

**Import syntax:**
```tsx
import { Package, Calendar, ArrowRight } from '@phosphor-icons/react';

// Usage -- note the "weight" prop (unique to Phosphor)
<Package size={24} weight="duotone" />
<Calendar size={20} weight="bold" />
```

---

## Weight System (6 Variants)

Phosphor's key differentiator is the `weight` prop. Each icon ships in 6 visual weights:

| Weight | Description | Stroke | Use Case |
|---|---|---|---|
| **thin** | Hairline strokes | ~1px | Large decorative icons (32px+), background patterns |
| **light** | Delicate strokes | ~1.5px | Metadata companions, secondary content |
| **regular** | Standard weight (DEFAULT) | 2px | UI icons, navigation, default usage |
| **bold** | Heavy strokes | ~2.5px | CTAs, emphasis, active states, button icons |
| **fill** | Solid filled shapes | Filled | Selected/active states, social media, status indicators |
| **duotone** | Two-tone with opacity layers | Mixed | Hero sections, feature cards, marketing, "Funky" aesthetic |

### Default Weight by UI Context

| Context | Weight | Rationale |
|---|---|---|
| Navigation arrows, chevrons | `regular` | Clean, standard weight |
| CTA button icons | `bold` | Matches button emphasis |
| Status indicators (check, alert, error) | `fill` | Maximum visibility |
| Content metadata (calendar, clock) | `regular` | Non-distracting |
| Hero section decorative icons | `duotone` | Rich depth, "Funky" aesthetic |
| Feature card icons | `duotone` | Two-tone matches glassmorphism |
| Social media icons | `fill` | Brand recognition standard |
| Data/chart icons | `regular` | Clean data context |
| Active/selected toggle states | `fill` | Clear state distinction |
| Inactive/unselected toggle states | `regular` | Visual weight difference |
| Icon-only buttons | `bold` | Clear affordance |
| Inline text icons | `regular` | Matches text weight |

---

## Size Tokens

**CSS Variables (defined in `theme-base.css`):**

```css
:root {
  --icon-size-xs: 14px;    /* Inline badges, micro indicators */
  --icon-size-sm: 16px;    /* Metadata, small UI elements */
  --icon-size-md: 20px;    /* Standard UI icons */
  --icon-size-base: 24px;  /* Default icon size */
  --icon-size-lg: 28px;    /* Feature cards, emphasis */
  --icon-size-xl: 32px;    /* Hero decorative, section icons */
  --icon-size-2xl: 40px;   /* Large decorative elements */
  --icon-size-3xl: 48px;   /* Hero splash icons */
}
```

**Usage in components:**
```tsx
<ArrowRight size={24} weight="bold" />  // CTA button
<Calendar size={16} weight="regular" /> // Post metadata
<Sparkle size={48} weight="duotone" />  // Hero decoration
```

---

## Color Tokens

**CSS Variables (use existing semantic colors):**

```css
:root {
  --icon-color-default: var(--foreground);
  --icon-color-muted: var(--muted-foreground);
  --icon-color-primary: var(--primary);
  --icon-color-success: var(--success);
  --icon-color-warning: var(--warning);
  --icon-color-destructive: var(--destructive);
  --icon-color-on-primary: var(--primary-foreground);
  --icon-color-on-dark: var(--color-white);
}
```

**Usage:**
```tsx
// Use inline style with CSS variables
<Check size={20} weight="fill" style={{ color: 'var(--icon-color-success)' }} />
<Warning size={20} weight="fill" style={{ color: 'var(--icon-color-destructive)' }} />

// Or use className from utilities.css
<ArrowRight className="text-primary" size={20} weight="bold" />
```

---

## Duotone Customization

Phosphor's `duotone` weight renders two layers: a primary stroke and a secondary fill with reduced opacity.

### Styling Duotone Icons

```css
/* Default duotone secondary layer opacity */
:root {
  --icon-duotone-opacity: 0.2;
}

/* Target the secondary duotone layer via CSS */
.icon-duotone-accent {
  color: var(--primary);
}

.icon-duotone-accent svg .duotone-secondary {
  fill: var(--accent);
  opacity: var(--icon-duotone-opacity);
}
```

### Duotone in Dark Mode
```css
.dark {
  --icon-duotone-opacity: 0.15;  /* Slightly lower for dark backgrounds */
}
```

### Duotone Usage Recommendations
- **Hero sections:** `size={48}` `weight="duotone"` -- rich visual depth
- **Feature cards:** `size={32}` `weight="duotone"` -- subtle two-tone
- **Service icons:** `size={40}` `weight="duotone"` -- category differentiation
- **Marketing sections:** `size={56}` `weight="duotone"` -- maximum visual impact

---

## Animation Guidelines

### Hover Transitions
```css
/* Smooth color and transform transitions on icon hover */
.icon-interactive {
  transition: color var(--transition-base) var(--ease-out),
              transform var(--transition-base) var(--ease-out);
}

.icon-interactive:hover {
  color: var(--primary);
  transform: translateY(-1px);
}
```

### Loading State
```tsx
import { SpinnerGap } from '@phosphor-icons/react';

// Spinning loader icon
<SpinnerGap
  size={24}
  weight="bold"
  className="icon-spin"
/>
```

```css
.icon-spin {
  animation: icon-rotate 1s linear infinite;
}

@keyframes icon-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Reduced motion: stop spinning, show static */
@media (prefers-reduced-motion: reduce) {
  .icon-spin {
    animation: none;
  }
}
```

### Weight Transition on State Change
```tsx
// Toggle between regular (inactive) and fill (active)
<Heart
  size={24}
  weight={isFavorited ? 'fill' : 'regular'}
  style={{ color: isFavorited ? 'var(--destructive)' : 'var(--muted-foreground)' }}
/>
```

---

## Accessibility Requirements (WCAG 2.1)

### Contrast Ratios (WCAG 1.4.11 -- Non-text Contrast)

| Weight | Minimum Size | Required Contrast | Notes |
|---|---|---|---|
| thin | 24px | 4.5:1 | Hairline strokes need extra contrast |
| light | 20px | 3:1 | Suitable for most contexts |
| regular | 16px | 3:1 | Default, safest option |
| bold | 16px | 3:1 | High visibility |
| fill | 16px | 3:1 | Highest visibility |
| duotone (primary) | 20px | 3:1 | Primary layer must meet ratio |
| duotone (secondary) | 20px | N/A | Decorative only, no contrast req |

### Rules

1. **Decorative icons** MUST have `aria-hidden="true"`
2. **Meaningful icons** MUST have `aria-label` or adjacent visible text
3. **Icon-only buttons** MUST have `aria-label` describing the action
4. **Interactive icons** MUST have minimum 44x44px touch target
5. **Never use `thin` weight** below 24px -- strokes become invisible
6. **Never use `light` weight** below 20px
7. **Never convey information** by icon color alone
8. **Reduced motion:** All icon animations MUST respect `prefers-reduced-motion`

### Accessible Icon Button Pattern
```tsx
<button
  aria-label="Close dialog"
  style={{ minWidth: '44px', minHeight: '44px' }}
>
  <X size={24} weight="bold" aria-hidden="true" />
</button>
```

### Accessible Decorative Icon
```tsx
<span aria-hidden="true">
  <Sparkle size={32} weight="duotone" />
</span>
```

### Accessible Meaningful Icon
```tsx
<span role="img" aria-label="Calendar">
  <Calendar size={20} weight="regular" />
</span>
<span>March 3, 2026</span>
```

---

## Dark Mode Icon Rules

| Token | Light Mode | Dark Mode |
|---|---|---|
| `--icon-color-default` | `var(--foreground)` (#090909) | `var(--foreground)` (#FFFFFF) |
| `--icon-color-muted` | `var(--muted-foreground)` (#565656) | `var(--muted-foreground)` (#E1E1E1) |
| `--icon-color-primary` | `var(--primary)` (#1E6AFF) | `var(--primary)` (#7BE7FF) |

**Rules:**
- Icon weights do NOT change between light and dark mode
- Only icon colors change (via semantic CSS variables)
- Duotone secondary opacity may decrease slightly in dark mode (`0.2` -> `0.15`)
- Neon glow effects on icons use `--neon-color` which auto-switches

---

## Migration Guide

### During Parallel Operation

Both libraries work simultaneously. Use this import pattern:

```tsx
// OLD (Lucide)
import { ArrowRight } from 'lucide-react';
<ArrowRight size={20} />

// NEW (Phosphor) -- preferred for new code
import { ArrowRight } from '@phosphor-icons/react';
<ArrowRight size={20} weight="bold" />
```

### Type System

For components that accept icons as props:

```tsx
// Parallel type (accepts both)
import type { LucideIcon } from 'lucide-react';
import type { Icon as PhosphorIconType } from '@phosphor-icons/react';

type IconComponent = LucideIcon | React.ComponentType<{ size?: number; className?: string }>;
```

### Naming Differences

Some icons have different names between libraries. Key differences:

| Lucide | Phosphor | Notes |
|---|---|---|
| `ChevronRight` | `CaretRight` | Chevron -> Caret |
| `ExternalLink` | `ArrowSquareOut` | Different metaphor |
| `AlertTriangle` | `Warning` | Simplified name |
| `Zap` | `Lightning` | Different metaphor |
| `Mail` | `Envelope` | Different metaphor |
| `Search` | `MagnifyingGlass` | Descriptive name |
| `EyeOff` | `EyeSlash` | Slash variant |
| `RefreshCw` | `ArrowsClockwise` | Descriptive name |
| `Share2` | `ShareNetwork` | Descriptive name |
| `TrendingUp` | `TrendUp` | Shortened |

See `/reports/2026-03/phosphor-icon-audit.md` for the complete mapping table.

---

## Related Documentation

- **Audit Report:** `/reports/2026-03/phosphor-icon-audit.md`
- **Migration Tasks:** `/tasks/phosphor-migration-tasks.md`
- **Orchestrator Prompt:** `/prompts/phosphor-icon-migration/00-ORCHESTRATOR.md`
- **Icon Overview:** `/guidelines/overview-icons.md`
- **DevTools Reference:** `/dev-tools/phosphor-icon-reference`
