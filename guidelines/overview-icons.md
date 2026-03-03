# Icon System Overview

**Version:** 2.0
**Last Updated:** March 3, 2026

---

## Overview

The LSX Design System is migrating from **lucide-react** to **@phosphor-icons/react**. During the transition period, both libraries operate in parallel. **All new icon usage should prefer Phosphor.**

**Full iconography guideline:** [design-tokens/iconography.md](./design-tokens/iconography.md)

---

## Icon Libraries

### Phosphor Icons (PRIMARY — New Standard)

**Package:** `@phosphor-icons/react`
**Icons Available:** 1,200+ icons, 6 weight variants each
**Documentation:** https://phosphoricons.com
**License:** MIT (Free to use)

```tsx
import { ArrowRight, Calendar, Check } from '@phosphor-icons/react';

<ArrowRight size={24} weight="bold" />
<Calendar size={20} weight="regular" />
<Check size={20} weight="fill" />
```

**Key advantage:** 6 weight variants per icon (thin, light, regular, bold, fill, duotone).

### Lucide React (LEGACY — Being Replaced)

**Package:** `lucide-react`
**Icons Available:** 1,400+ icons (stroke-based only)
**Documentation:** https://lucide.dev
**Status:** Active in 262 files, being phased out

```tsx
import { ArrowRight, Calendar, Check } from 'lucide-react';

<ArrowRight size={24} />
<Calendar size={20} />
```

---

## Phosphor Weight System (6 Variants)

| Weight | Visual | Use Case |
|---|---|---|
| **thin** | Hairline strokes | Large decorative icons (32px+) |
| **light** | Delicate strokes | Metadata companions, secondary content |
| **regular** | Standard (DEFAULT) | UI icons, navigation, default usage |
| **bold** | Heavy strokes | CTAs, emphasis, active states |
| **fill** | Solid shapes | Active/selected states, social media, status |
| **duotone** | Two-tone opacity | Heroes, feature cards, marketing ("Funky") |

### Default Weight by Context

| Context | Weight |
|---|---|
| Navigation (arrows, chevrons) | `regular` |
| CTA buttons | `bold` |
| Status indicators (check, alert) | `fill` |
| Content metadata (calendar, clock) | `regular` |
| Hero section decorative | `duotone` |
| Feature card icons | `duotone` |
| Social media | `fill` |
| Active/selected toggle | `fill` |
| Inactive/unselected toggle | `regular` |

---

## Verification Process (REQUIRED)

### Before Using ANY Phosphor Icon

**Step 1: Check the DevTools reference page**
Navigate to `/dev-tools/phosphor-icon-reference` for the complete migration map.

**Step 2: Search for the icon**
```bash
grep -i "ArrowRight" @phosphor-icons/react/dist/index.d.ts
```

**Step 3: Import with weight**
```tsx
import { ArrowRight } from '@phosphor-icons/react';
<ArrowRight size={24} weight="bold" />
```

### Before Using ANY Lucide Icon (Legacy)

```bash
grep -i "Search" lucide-react/dist/esm/icons/index.js
```

---

## Icon Size Design Tokens

Use CSS variables from `theme-base.css`:

| Token | Value | Usage |
|---|---|---|
| `--icon-size-xs` | 14px | Inline badges, micro indicators |
| `--icon-size-sm` | 16px | Metadata, small UI |
| `--icon-size-md` | 20px | Standard UI icons |
| `--icon-size-base` | 24px | Default size |
| `--icon-size-lg` | 28px | Feature cards, emphasis |
| `--icon-size-xl` | 32px | Hero decorative, section icons |
| `--icon-size-2xl` | 40px | Large decorative |
| `--icon-size-3xl` | 48px | Hero splash icons |

---

## Common Icons by Category

### Navigation Icons
```tsx
import {
  ArrowRight,        // CTA arrows (weight: bold)
  ArrowLeft,         // Back navigation
  CaretRight,        // Next/forward (was: ChevronRight)
  CaretLeft,         // Previous/back (was: ChevronLeft)
  CaretDown,         // Dropdown (was: ChevronDown)
  CaretUp,           // Collapse (was: ChevronUp)
  ArrowSquareOut,    // External link (was: ExternalLink)
  House,             // Home (was: Home)
  List as MenuIcon,  // Hamburger menu (was: Menu)
} from '@phosphor-icons/react';
```

### Feedback & Status Icons
```tsx
import {
  Check,             // Success/complete (weight: bold)
  CheckCircle,       // Success filled (weight: fill)
  Warning,           // Alert triangle (was: AlertTriangle)
  WarningCircle,     // Alert circle (was: AlertCircle)
  X,                 // Close/cancel
  XCircle,           // Error filled
  Info,              // Information
  Question,          // Help (was: HelpCircle)
} from '@phosphor-icons/react';
```

### Content & Meta Icons
```tsx
import {
  Calendar,          // Date metadata (weight: regular)
  Clock,             // Time/duration
  Users,             // Team/people
  User,              // Single person
  FileText,          // Document
  Tag,               // Category/tag
  BookOpen,          // Reading (weight: duotone)
  Envelope,          // Email (was: Mail)
  MagnifyingGlass,   // Search (was: Search)
} from '@phosphor-icons/react';
```

### Decorative & Brand Icons
```tsx
import {
  Lightning,         // Performance (was: Zap, weight: duotone)
  Star,              // Rating (weight: fill for active)
  Trophy,            // Awards (was: Award, weight: duotone)
  Sparkle,           // Magic (was: Sparkles, weight: duotone)
  Rocket,            // Launch (weight: duotone)
  Brain,             // AI/intelligence (weight: duotone)
} from '@phosphor-icons/react';
```

### Social Media Icons
```tsx
import {
  TwitterLogo,       // Twitter/X (weight: fill)
  LinkedinLogo,      // LinkedIn (weight: fill)
  FacebookLogo,      // Facebook (weight: fill)
  InstagramLogo,     // Instagram (weight: fill)
  YoutubeLogo,       // YouTube (weight: fill)
  Globe,             // Website/global
} from '@phosphor-icons/react';
```

### Data & Analytics Icons
```tsx
import {
  TrendUp,           // Growth (was: TrendingUp)
  ChartBar,          // Bar charts (was: BarChart3)
  ChartLine,         // Line charts (was: LineChart)
  ChartPie,          // Pie charts (was: PieChart)
  CurrencyDollar,    // Money (was: DollarSign)
  Database,          // Database
} from '@phosphor-icons/react';
```

---

## Icon Usage Patterns

### Phosphor Icon with Weight
```tsx
import { ArrowRight } from '@phosphor-icons/react';

// CTA button icon (bold weight for emphasis)
<ArrowRight size={20} weight="bold" />

// Hero decorative icon (duotone for visual depth)
<Lightning size={48} weight="duotone" />

// Status indicator (fill for solid visual)
<CheckCircle size={20} weight="fill" style={{ color: 'var(--success)' }} />
```

### Icon with CSS Variable Color
```tsx
<MagnifyingGlass size={20} weight="regular" style={{ color: 'var(--muted-foreground)' }} />
<Warning size={20} weight="fill" style={{ color: 'var(--destructive)' }} />
<Star size={20} weight="fill" style={{ color: 'var(--warning)' }} />
```

### Duotone Icons (Unique to Phosphor)
```tsx
// Duotone renders two-tone: primary stroke + semi-transparent fill
<Shield size={32} weight="duotone" style={{ color: 'var(--primary)' }} />
<Rocket size={40} weight="duotone" style={{ color: 'var(--accent)' }} />
<BookOpen size={24} weight="duotone" style={{ color: 'var(--foreground)' }} />
```

### Icon in Button
```tsx
<button style={{
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-2)'
}}>
  <MagnifyingGlass size={18} weight="regular" aria-hidden="true" />
  Search
</button>
```

### Icon-Only Button (Accessible)
```tsx
<button
  aria-label="Close dialog"
  style={{
    padding: 'var(--spacing-3)',
    borderRadius: 'var(--radius)',
    border: 'none',
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    cursor: 'pointer',
    minWidth: '44px',
    minHeight: '44px'
  }}
>
  <X size={20} weight="bold" aria-hidden="true" />
</button>
```

---

## Accessibility

### ARIA Labels for Icon-Only Buttons
```tsx
<button aria-label="Search">
  <MagnifyingGlass size={20} weight="regular" aria-hidden="true" />
</button>
```

### Decorative Icons (Hidden from Screen Readers)
```tsx
<span aria-hidden="true">
  <Lightning size={24} weight="duotone" style={{ color: 'var(--primary)' }} />
</span>
<span>Fast Performance</span>
```

### Weight Accessibility Constraints

| Weight | Minimum Size | Notes |
|---|---|---|
| thin | 24px | Hairline strokes need extra contrast |
| light | 20px | Suitable for most contexts |
| regular | 16px | Default, safest option |
| bold | 16px | High visibility |
| fill | 16px | Highest visibility |
| duotone | 20px | Primary layer must meet 3:1 contrast |

---

## Naming Differences (Lucide -> Phosphor)

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
| `Home` | `House` | Different metaphor |
| `Settings` | `GearSix` | Different metaphor |
| `Send` | `PaperPlaneTilt` | Different metaphor |
| `Bot` | `Robot` | Different name |
| `Award` | `Trophy` | Different metaphor |

**Full mapping:** See `/reports/2026-03/phosphor-icon-audit.md`

---

## Migration Status

- **262 files** currently use `lucide-react`
- **@phosphor-icons/react** installed in parallel
- **~97%** icon coverage (direct Phosphor equivalents)
- **DevTools page** available at `/dev-tools/phosphor-icon-reference`

**Migration tasks:** See `/tasks/phosphor-migration-tasks.md`

---

## Related Documentation

- **Iconography Design Tokens:** [design-tokens/iconography.md](./design-tokens/iconography.md)
- **Migration Audit:** `/reports/2026-03/phosphor-icon-audit.md`
- **Migration Tasks:** `/tasks/phosphor-migration-tasks.md`
- **DevTools Reference:** `/dev-tools/phosphor-icon-reference`

---

**Last Updated:** March 3, 2026
**Primary Icon Library:** @phosphor-icons/react
**Legacy Icon Library:** lucide-react (being phased out)
**Migration Status:** Parallel operation
