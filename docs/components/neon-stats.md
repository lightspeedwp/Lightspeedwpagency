# NeonStats Component Documentation

**Component:** `NeonStats`  
**Location:** `/src/app/components/common/NeonStats.tsx`  
**Styles:** `/src/styles/components/neon-stats.css`  
**Examples:** `/src/app/components/examples/NeonStatsExample.tsx`

---

## Overview

The `NeonStats` component is a reusable, fully BEM-compliant stats display with customizable neon accent colors for dark mode. It automatically enforces dark backgrounds when using neon colors (per LSX Design guidelines) and supports multiple layout variants.

**Key Features:**
- ✅ 100% CSS variables (no hardcoded values)
- ✅ BEM methodology with `.neon-stats` block
- ✅ Custom neon accent colors via CSS custom properties
- ✅ Dark background enforcement for neon colors (guideline-compliant)
- ✅ Responsive grid layouts (1/2/3/4 columns)
- ✅ Three visual variants (default, glass, solid)
- ✅ Optional icons, trend indicators, and descriptions
- ✅ Neon glow hover effects
- ✅ Reduced motion support
- ✅ Keyboard navigation accessible

---

## Design System Compliance

### Typography
- **Font families:** `var(--font-primary)` (Lexend), `var(--font-secondary)` (Manrope)
- **Font sizes:** `var(--text-h2)`, `var(--text-5xl)`, `var(--text-6xl)`, `var(--text-base)`, `var(--text-sm)`
- **Font weights:** `var(--font-weight-bold)`, `var(--font-weight-black)`, `var(--font-weight-semibold)`

### Spacing
- **All spacing:** `var(--spacing-*)` tokens (1, 2, 3, 4, 6, 8, 12, 16)
- **Container padding:** `var(--spacing-6)`, `var(--spacing-16)`
- **Grid gaps:** `var(--spacing-8)`, `var(--spacing-12)`

### Colors
- **Background:** `var(--color-black)` (required for neon colors)
- **Text:** `var(--color-white)`, `var(--muted-foreground)`
- **Neon accents:** Customizable via `--neon-accent` custom property

### Border & Radius
- **Border radius:** `var(--radius-xl)`, `var(--radius-lg)`, `var(--radius-full)`
- **Transitions:** `var(--ease-out)`

---

## Usage

### Basic Example

```tsx
import { NeonStats } from '@/components/common/NeonStats';
import { Rocket, Users, CheckCircle, Lightning } from '@phosphor-icons/react';

const stats = [
  {
    id: 'projects',
    value: '150+',
    label: 'Projects',
    description: 'Successfully delivered',
    icon: Rocket,
  },
  {
    id: 'clients',
    value: '75+',
    label: 'Clients',
    description: 'Happy customers',
    icon: Users,
  },
  {
    id: 'accuracy',
    value: '98.5%',
    label: 'Accuracy',
    description: 'Quality standard',
    icon: CheckCircle,
  },
  {
    id: 'speed',
    value: '10x',
    label: 'Faster',
    description: 'Than competitors',
    icon: Lightning,
  },
];

<NeonStats
  stats={stats}
  title="Results that matter"
  subtitle="Proven metrics that drive success."
  columns={4}
  accentColor="var(--wp--preset--color--neon-cyan)"
  variant="glass"
  showIcons={true}
/>
```

---

## Props API

### `NeonStatsProps`

| Prop | Type | Default | Description |
|---|---|---|---|
| `stats` | `NeonStat[]` | **Required** | Array of stat items to display |
| `title` | `string` | `undefined` | Optional section title |
| `subtitle` | `string` | `undefined` | Optional section subtitle |
| `columns` | `1 \| 2 \| 3 \| 4` | `4` | Grid columns layout |
| `accentColor` | `string` | `var(--wp--preset--color--neon-cyan)` | Neon accent color (CSS variable or hex) |
| `className` | `string` | `''` | Additional CSS class |
| `showIcons` | `boolean` | `true` | Show/hide icons |
| `variant` | `'default' \| 'glass' \| 'solid'` | `'glass'` | Visual style variant |

### `NeonStat` Interface

| Property | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✅ Yes | Unique identifier (used as React key) |
| `value` | `string` | ✅ Yes | Stat value (number, percentage, or formatted string) |
| `label` | `string` | ✅ Yes | Stat label/title |
| `description` | `string` | ❌ No | Optional description/subtitle |
| `icon` | `Icon` | ❌ No | Optional Phosphor icon component |
| `trend` | `object` | ❌ No | Optional trend indicator |
| `trend.value` | `string` | — | Trend value text (e.g., "+32%") |
| `trend.direction` | `'up' \| 'down' \| 'neutral'` | — | Trend direction (affects color) |

---

## Variants

### 1. **Default** (`variant="default"`)
- Minimal border
- Transparent background
- Subtle hover effects

```tsx
<NeonStats
  stats={stats}
  variant="default"
  accentColor="var(--wp--preset--color--neon-cyan)"
/>
```

### 2. **Glass** (`variant="glass"`) — **Recommended**
- Glassmorphism effect
- Backdrop blur
- Elevated hover state

```tsx
<NeonStats
  stats={stats}
  variant="glass"
  accentColor="var(--wp--preset--color--neon-pink)"
/>
```

### 3. **Solid** (`variant="solid"`)
- Solid background
- Enhanced border
- Strong visual presence

```tsx
<NeonStats
  stats={stats}
  variant="solid"
  accentColor="var(--wp--preset--color--neon-lime)"
/>
```

---

## Neon Accent Colors

The component supports all LSX Design neon colors and custom hex values.

### Preset Neon Colors

| Color | CSS Variable | Use Case |
|---|---|---|
| **Cyan** | `var(--wp--preset--color--neon-cyan)` | AI Services, Technology, Innovation |
| **Pink** | `var(--wp--preset--color--neon-pink)` | Design, Creative, Marketing |
| **Lime** | `var(--wp--preset--color--neon-lime)` | SEO, Growth, Performance |
| **Yellow** | `var(--wp--preset--color--neon-yellow)` | Consulting, Strategy, Solutions |

### Usage Examples

```tsx
// AI Services Page - Cyan
<NeonStats
  stats={aiStats}
  accentColor="var(--wp--preset--color--neon-cyan)"
/>

// Development Services - Pink
<NeonStats
  stats={devStats}
  accentColor="var(--wp--preset--color--neon-pink)"
/>

// SEO Services - Lime
<NeonStats
  stats={seoStats}
  accentColor="var(--wp--preset--color--neon-lime)"
/>

// Custom Hex Color
<NeonStats
  stats={customStats}
  accentColor="#00ffff"
/>
```

---

## Column Layouts

### 1 Column
Best for: Mobile-first, single stat highlight

```tsx
<NeonStats stats={[stat]} columns={1} />
```

### 2 Columns
Best for: Feature comparisons, before/after metrics

```tsx
<NeonStats stats={[stat1, stat2]} columns={2} />
```

### 3 Columns
Best for: Services pages, key highlights

```tsx
<NeonStats stats={[stat1, stat2, stat3]} columns={3} />
```

### 4 Columns (Default)
Best for: Overview sections, dashboards

```tsx
<NeonStats stats={[stat1, stat2, stat3, stat4]} columns={4} />
```

**Responsive Behavior:**
- **Mobile (< 640px):** All layouts → 1 column
- **Tablet (640px+):** 2+ column layouts → 2 columns
- **Desktop (1024px+):** 3+ column layouts → Full column count

---

## Trend Indicators

Add trend indicators to show growth, decline, or neutral status.

```tsx
const stats = [
  {
    id: 'revenue',
    value: '340%',
    label: 'ROI Growth',
    trend: {
      value: '+25% YoY',
      direction: 'up', // Green neon-lime color
    },
  },
  {
    id: 'churn',
    value: '2.1%',
    label: 'Churn Rate',
    trend: {
      value: '-1.2% lower',
      direction: 'down', // Pink color (down = bad)
    },
  },
  {
    id: 'engagement',
    value: '67%',
    label: 'Engagement',
    trend: {
      value: 'Stable',
      direction: 'neutral', // Muted color
    },
  },
];
```

**Trend Colors:**
- `up` → `var(--wp--preset--color--neon-lime)` (green neon)
- `down` → `var(--wp--preset--color--neon-pink)` (pink neon)
- `neutral` → `var(--muted-foreground)` (gray)

---

## Icons

Use Phosphor icons only (per LSX Design guidelines).

```tsx
import {
  Rocket,
  Users,
  CheckCircle,
  Lightning,
  TrendUp,
  Globe,
  Code,
  Sparkle,
} from '@phosphor-icons/react';

const stats = [
  {
    id: 'speed',
    value: '10x',
    label: 'Faster',
    icon: Lightning, // Icon component (not JSX)
  },
];
```

**Supported Icon Weights:** The component uses `weight="duotone"` for all icons.

**Hide Icons:**

```tsx
<NeonStats stats={stats} showIcons={false} />
```

---

## Accessibility

### Semantic HTML
- `<section>` for component root
- `role="list"` for stats grid
- `role="listitem"` for each stat

### Keyboard Navigation
- Tab through stat items
- Focus visible outline on `:focus-visible`

### Screen Readers
- `aria-label` on trend indicators
- Semantic heading hierarchy (h2 for title)

### Reduced Motion
All animations and transforms disabled when `prefers-reduced-motion: reduce` is active.

---

## BEM Class Structure

```css
.neon-stats                          /* Block */
.neon-stats--default                 /* Variant modifier */
.neon-stats--glass                   /* Variant modifier */
.neon-stats--solid                   /* Variant modifier */

.neon-stats__container               /* Element */
.neon-stats__header                  /* Element */
.neon-stats__title                   /* Element */
.neon-stats__subtitle                /* Element */
.neon-stats__grid                    /* Element */
.neon-stats__grid--1-col             /* Grid modifier */
.neon-stats__grid--2-col             /* Grid modifier */
.neon-stats__grid--3-col             /* Grid modifier */
.neon-stats__grid--4-col             /* Grid modifier */

.neon-stats__item                    /* Element */
.neon-stats__icon-wrapper            /* Element */
.neon-stats__value                   /* Element */
.neon-stats__label                   /* Element */
.neon-stats__description             /* Element */

.neon-stats__trend                   /* Element */
.neon-stats__trend--up               /* Trend modifier */
.neon-stats__trend--down             /* Trend modifier */
.neon-stats__trend--neutral          /* Trend modifier */
.neon-stats__trend-value             /* Element */
```

---

## Customization

### Custom Accent Color Per Page

Use the `--neon-accent` CSS custom property:

```tsx
<NeonStats
  stats={stats}
  accentColor="#00ffff" // Custom hex color
/>
```

### Override Specific Styles

Add a custom className and override in your CSS:

```tsx
<NeonStats
  stats={stats}
  className="custom-stats"
/>
```

```css
.custom-stats .neon-stats__value {
  font-size: var(--text-4xl); /* Smaller value */
}
```

---

## Complete Example (Real-World Usage)

```tsx
import { NeonStats } from '@/components/common/NeonStats';
import { Rocket, Users, CheckCircle, Lightning } from '@phosphor-icons/react';

export function AIServicesPage() {
  const aiStats = [
    {
      id: 'ai-projects',
      value: '150+',
      label: 'AI Projects',
      description: 'Successfully delivered',
      icon: Rocket,
      trend: {
        value: '+32% this year',
        direction: 'up',
      },
    },
    {
      id: 'ai-accuracy',
      value: '98.5%',
      label: 'Accuracy Rate',
      description: 'Model performance',
      icon: CheckCircle,
    },
    {
      id: 'ai-clients',
      value: '75+',
      label: 'AI Clients',
      description: 'Across all industries',
      icon: Users,
      trend: {
        value: '+45% growth',
        direction: 'up',
      },
    },
    {
      id: 'ai-speed',
      value: '10x',
      label: 'Faster Output',
      description: 'Compared to manual',
      icon: Lightning,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="ai-hero">
        {/* ... hero content ... */}
      </section>

      {/* Stats Section */}
      <NeonStats
        stats={aiStats}
        title="AI-powered results that matter"
        subtitle="Our AI solutions deliver measurable improvements across every metric that counts."
        columns={4}
        accentColor="var(--wp--preset--color--neon-cyan)"
        variant="glass"
        showIcons={true}
      />

      {/* Rest of page */}
    </div>
  );
}
```

---

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Backdrop filter support (with `-webkit-` prefix)
- ✅ CSS custom properties (CSS variables)
- ✅ CSS Grid Layout
- ✅ `color-mix()` function (modern color mixing)

**Fallbacks:**
- Graceful degradation for `backdrop-filter` (shows solid background)
- Print styles remove all neon effects

---

## Performance

- **CSS bundle size:** ~3KB (minified)
- **JS bundle size:** ~2KB (component only)
- **Render performance:** Optimized with CSS transforms
- **Animation performance:** GPU-accelerated (transform, opacity)

---

## Related Components

- **StatsSection** — Traditional stats pattern (light/dark mode agnostic)
- **StatsCard** — Individual stat card block
- **StatsGrid** — Grid layout for stats (deprecated, use NeonStats)

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial release with BEM compliance |

---

## Support

For questions or issues, see:
- Component source: `/src/app/components/common/NeonStats.tsx`
- CSS source: `/src/styles/components/neon-stats.css`
- Examples: `/src/app/components/examples/NeonStatsExample.tsx`
- Guidelines: `/guidelines/Guidelines.md`
