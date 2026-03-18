# PricingCard Pattern Component

**Category:** Pattern Component  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Phase:** Template Migration Phase 3.5

---

## Overview

PricingCard is a reusable pattern component for displaying pricing tiers, packages, and service offerings with consistent styling and behavior across the application.

**Key Features:**
- Popular/recommended badge indicator
- Icon, title, and tagline display
- Flexible price formatting
- Optional specifications block
- Feature list with included/excluded states
- Call-to-action button integration
- Scroll reveal animation support
- Full design system compliance

**Design System Compliance:**
- ✅ Typography: Uses `var(--font-primary)` and `var(--font-secondary)` only
- ✅ Colors: 100% semantic CSS variables
- ✅ Spacing: Uses `var(--spacing-*)` tokens exclusively
- ✅ Icons: Phosphor Icons (@phosphor-icons/react)
- ✅ BEM methodology: `.pricing-card__*` classes
- ✅ Dark mode: Full support via CSS variables
- ✅ Accessibility: WCAG 2.2 AA compliant

---

## Usage

### Basic Example

```tsx
import { PricingCard } from './components/patterns/PricingCard';
import { Rocket } from '@phosphor-icons/react';

<PricingCard
  id="starter-plan"
  name="Starter"
  icon={Rocket}
  tagline="Perfect for small businesses"
  price={{
    display: "$99",
    period: "per month"
  }}
  features={[
    "Up to 5 pages",
    "Basic SEO",
    "Mobile responsive",
    "Email support"
  ]}
  cta={{
    text: "Get Started",
    page: "contact"
  }}
/>
```

### Popular Plan with Badge

```tsx
<PricingCard
  id="pro-plan"
  name="Professional"
  icon={Sparkle}
  tagline="Most popular choice"
  popular={true}  // Adds "Most Popular" badge
  price={{
    display: "$299",
    period: "per month"
  }}
  description="Everything you need to grow your business online"
  features={[
    "Up to 20 pages",
    "Advanced SEO",
    "Mobile responsive",
    "Priority support",
    "Analytics dashboard"
  ]}
  cta={{
    text: "Start Free Trial",
    page: "contact"
  }}
  delay={100}  // Animation delay
/>
```

### Advanced: Included/Excluded Features

```tsx
<PricingCard
  id="enterprise-plan"
  name="Enterprise"
  icon={Buildings}
  tagline="For large organizations"
  price={{
    display: "Custom",
    period: "contact us"
  }}
  features={[
    { name: "Unlimited pages", included: true },
    { name: "Enterprise SEO", included: true },
    { name: "Dedicated support", included: true },
    { name: "SLA guarantee", included: true },
    { name: "White label", included: false },
  ]}
  cta={{
    text: "Contact Sales",
    href: "/contact"
  }}
/>
```

### With Specifications Block

```tsx
<PricingCard
  id="hosting-premium"
  name="Premium Hosting"
  icon={Server}
  tagline="High-performance hosting"
  price={{
    display: "$49",
    period: "per month"
  }}
  specifications={{
    "Storage": "100 GB SSD",
    "Bandwidth": "Unlimited",
    "SSL": "Free",
    "Backups": "Daily"
  }}
  features={[
    "99.9% uptime guarantee",
    "CDN included",
    "DDoS protection",
    "24/7 monitoring"
  ]}
  cta={{
    text: "Choose Plan",
    page: "pricing"
  }}
/>
```

---

## Props API

### PricingCardProps

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | `string` | ✅ Yes | — | Unique identifier for the card |
| `name` | `string` | ✅ Yes | — | Plan/package name |
| `icon` | `UniversalIcon` | ✅ Yes | — | Phosphor icon component |
| `tagline` | `string` | ✅ Yes | — | Short tagline (1 sentence) |
| `price` | `PriceObject` | ✅ Yes | — | Price display configuration |
| `features` | `Feature[]` or `string[]` | ✅ Yes | — | List of features |
| `cta` | `CTAObject` | ✅ Yes | — | Call-to-action configuration |
| `description` | `string` | No | — | Longer description paragraph |
| `popular` | `boolean` | No | `false` | Show "Most Popular" badge |
| `specifications` | `Record<string, string>` | No | — | Key-value specs to display |
| `delay` | `number` | No | `0` | Animation delay in ms |
| `maxFeatures` | `number` | No | `8` | Maximum features to display |

### PriceObject

```typescript
{
  display: string;  // e.g., "$99", "Custom", "Free"
  period: string;   // e.g., "per month", "one-time", "contact us"
}
```

### Feature Types

**Simple String Array:**
```typescript
features: string[]  // All features marked as "included"
```

**Detailed Feature Objects:**
```typescript
features: Array<{
  name: string;
  included: boolean;  // true = checkmark, false = X icon
}>
```

### CTAObject

```typescript
{
  text: string;              // Button text
  page?: string;             // Internal page route (e.g., "contact")
  href?: string;             // External URL (e.g., "/pricing")
  onClick?: () => void;      // Custom click handler
}
```

---

## CSS Classes (BEM)

### Block
- `.pricing-card` — Main card container

### Modifiers
- `.pricing-card--popular` — Popular plan variant with accent border

### Elements
- `.pricing-card__badge` — "Most Popular" badge indicator
- `.pricing-card__icon` — Icon container
- `.pricing-card__title` — Plan name heading
- `.pricing-card__tagline` — Short tagline text
- `.pricing-card__price-wrapper` — Price container
- `.pricing-card__price` — Price display (large text)
- `.pricing-card__period` — Billing period (small text)
- `.pricing-card__description` — Optional description paragraph
- `.pricing-card__specifications` — Specifications block container
- `.pricing-card__specification` — Individual specification row
- `.pricing-card__features` — Feature list (ul)
- `.pricing-card__feature` — Individual feature (li)
- `.pricing-card__feature-icon` — Feature checkmark/X icon
- `.pricing-card__feature-icon--included` — Green checkmark
- `.pricing-card__feature-icon--excluded` — Muted X icon
- `.pricing-card__feature-text` — Feature text
- `.pricing-card__feature-text--included` — Default text color
- `.pricing-card__feature-text--excluded` — Muted text color
- `.pricing-card__cta` — Call-to-action button

---

## Styling

**CSS File:** `/src/styles/patterns/pricing-card.css` (230 lines)

### Design Tokens Used

**Typography:**
- Title: `var(--text-h3)` with `var(--font-primary)`
- Tagline: `var(--text-sm)` with `var(--font-secondary)`
- Price: `var(--text-4xl)` with `var(--font-weight-bold)`
- Period: `var(--text-sm)` with `var(--font-secondary)`
- Features: `var(--text-base)` with `var(--font-secondary)`

**Colors:**
- Background: `var(--card)`
- Text: `var(--card-foreground)`
- Badge: `var(--accent)` background
- Border: `var(--border)`
- Icons (included): `var(--success)`
- Icons (excluded): `var(--muted-foreground)`

**Spacing:**
- Card padding: `var(--spacing-6)`
- Section gaps: `var(--spacing-4)` to `var(--spacing-6)`
- Feature spacing: `var(--spacing-3)`
- Icon margin: `var(--spacing-2)`

**Effects:**
- Border radius: `var(--radius-lg)`
- Hover transition: 300ms
- Popular border: `var(--accent)` with subtle glow

---

## Examples from Codebase

### Used In (5 Templates)

1. **PricingTemplate** — Website & Support Packages
   - 3 tiers: Essential, Growth, Scale
   - Popular badge on "Growth" tier
   - Features use included/excluded objects

2. **HostingTemplate** — Hosting Tiers
   - 3 plans: Starter, Business, Enterprise
   - Specifications block for storage/bandwidth
   - Popular badge on "Business" plan

3. **WetuImporterTemplate** — Import Packages
   - 4 tiers: Basic, Standard, Professional, Enterprise
   - Price ranges with "+/month"
   - CTA links to contact page

4. **MailchimpSolutionTemplate** — Email Tiers
   - 3 plans: Free, Essentials, Standard
   - Simple string features array
   - External href links

5. **TrainingTemplate** — Workshop Tiers
   - 3 courses: Foundations, Intermediate, Advanced
   - Sequential animation delays (0, 100, 200ms)
   - onClick handlers for custom actions

---

## Accessibility

### WCAG 2.2 AA Compliance

**Semantic HTML:**
- Uses proper heading hierarchy (`h3` for plan names)
- Feature list uses semantic `ul`/`li` elements
- Button component for CTA (proper focus states)

**Keyboard Navigation:**
- All interactive elements focusable
- Button inherits focus-visible styles
- Logical tab order (top to bottom)

**ARIA Attributes:**
- Cards use semantic HTML (no ARIA needed)
- Icons are decorative (text provides context)
- Button has accessible text

**Color Contrast:**
- All text meets 4.5:1 minimum contrast
- Popular badge: accent color against card background (verified)
- Feature icons: success/muted colors meet 3:1 minimum

**Reduced Motion:**
- ScrollReveal respects `prefers-reduced-motion`
- No essential animations (fade-up is enhancement)

---

## Dark Mode

**Automatic Theme Support:**
- Background: `var(--card)` (light in light mode, dark in dark mode)
- Text: `var(--card-foreground)` (auto-adjusts)
- Border: `var(--border)` (theme-aware)
- Icons: Semantic colors adapt to theme

**Popular Badge:**
- Uses `var(--accent)` which maintains proper contrast in both modes
- Glow effect adapts to dark mode automatically

---

## Performance

**Optimization:**
- No inline styles (except width animation in specifications)
- CSS file loaded once, cached by browser
- Icons lazy-loaded from Phosphor package
- ScrollReveal uses Intersection Observer (efficient)

**Bundle Size:**
- Component: ~1.8 KB (minified)
- CSS: 230 lines → ~3.2 KB (minified)
- Total: ~5 KB per card type

---

## Migration Notes

**Extracted:** March 18, 2026 (Template Migration Phase 3.5)

**Templates Migrated:**
1. PricingTemplate: 65 lines saved
2. HostingTemplate: 62 lines saved
3. WetuImporterTemplate: 78 lines saved
4. MailchimpSolutionTemplate: 58 lines saved
5. TrainingTemplate: 55 lines saved

**Total JSX Saved:** ~318 lines  
**Reusability:** 1 component → 5 templates (5x reuse)  
**Maintainability:** Update 1 file → affects 5 templates

---

## Best Practices

### ✅ Do

- **Use semantic icons** — Choose icons that represent the plan type (Rocket, Sparkle, Buildings, etc.)
- **Keep taglines short** — 1 sentence maximum (8-12 words)
- **Limit features to 8** — Use `maxFeatures` prop if you have more (scroll fatigue)
- **Add animation delays** — Stagger cards with `delay={0}`, `delay={100}`, `delay={200}`
- **Mark one as popular** — Help users make decisions with social proof
- **Use specifications** — Add technical details (storage, bandwidth) in hosting/technical plans
- **Provide descriptions** — Add context for complex plans (1-2 sentences)

### ❌ Don't

- **Don't hardcode colors** — Always use CSS variables
- **Don't skip IDs** — Required for React keys in feature lists
- **Don't exceed 12 features** — Creates visual clutter (use summary instead)
- **Don't mark all as popular** — Defeats the purpose of the badge
- **Don't use tiny icons** — Default 24px size is optimal
- **Don't skip CTA page/href** — Button requires navigation target
- **Don't use title case** — Use sentence case for taglines ("Perfect for small businesses" not "Perfect For Small Businesses")

---

## Troubleshooting

### Popular Badge Not Showing
**Cause:** `popular` prop not set to `true`  
**Solution:** Add `popular={true}` to PricingCardProps

### Features Not Displaying
**Cause:** Features array might be undefined  
**Solution:** Always provide at least an empty array `features={[]}`

### Icons Not Appearing
**Cause:** Icon not imported from Phosphor  
**Solution:** `import { IconName } from '@phosphor-icons/react'`

### CTA Button Not Working
**Cause:** Missing `page` or `href` in cta object  
**Solution:** Provide either `page: "contact"` or `href: "/path"`

### Specifications Not Formatted
**Cause:** Specifications not an object  
**Solution:** Use `specifications={{ "Key": "Value" }}` format

---

## Related Components

- **Button** — Used for CTA (see `/docs/components/buttons.md`)
- **ScrollReveal** — Provides animation wrapper (see `/docs/hooks/scroll-reveal.md`)
- **NeonStats** — Alternative for metric display (see `/docs/components/neon-stats.md`)
- **ProgressBar** — Complementary for showing progress (see `/docs/components/progress-bar.md`)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-18 | Initial extraction from 5 templates (Phase 3.5) |

---

**Last Updated:** March 18, 2026  
**Maintainer:** LSX Design  
**CSS File:** `/src/styles/patterns/pricing-card.css`  
**Component File:** `/src/app/components/patterns/PricingCard.tsx`
