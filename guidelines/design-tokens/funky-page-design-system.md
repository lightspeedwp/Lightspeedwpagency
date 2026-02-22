# Funky Page Design System

**Version:** 2.0  
**Last Updated:** February 17, 2026  
**First Applied To:** Grading Page (`/about/grading`)  
**CSS File:** `/src/styles/templates/about-grading.css`  
**Scope:** Defines the vibrant, animated, neon-accented page design language used for standout informational pages.

---

## Overview

The "Funky" design system is a high-energy visual language layered on top of the LightSpeed design system. It introduces per-page colour identities, gradient glow borders, animated SVG score rings, floating orbs, frosted-glass sections, and kinetic hover states — all while maintaining WCAG 2.1 AA compliance and full light/dark mode support.

This system is designed for **informational/brand pages** that need visual impact (Grading, Packaging, Sustainability, etc.), not for transactional pages (Cart, Checkout).

---

## Design Principles

1. **Per-Page Colour Identity** — Each funky page has its own colour palette (3-5 key tokens) that defines its personality
2. **Gradient Hero with Orbs** — Heroes use multi-stop gradients with floating, blurred, animated orbs for depth
3. **Glow Border Cards** — Cards use a "double layer" technique: a gradient glow `div` behind a solid surface `div`
4. **Animated Score Rings** — SVG circular progress indicators with drop-shadow glow in the page's accent colour
5. **Frosted Glass Accents** — `backdrop-filter: blur()` with semi-transparent backgrounds for badges and CTAs
6. **Gradient Text** — Key headings use `background-clip: text` with multi-stop gradients
7. **"No Margin" Maintained** — All spacing via `gap` and `padding` using WordPress presets
8. **Motion Respect** — All animations wrapped in `@media (prefers-reduced-motion: reduce)` guards

---

## Colour Identity Map (Funky Pages)

| Page | Primary | Secondary | Accent | Hero Gradient | CSS Prefix |
|------|---------|-----------|--------|---------------|------------|
| Grading | Hot Pink `#ec4899` | Electric Cyan `#06b6d4` | Neon Lime `#84cc16` | Purple → Pink → Orange | `--grading-*` |
| Packaging | Emerald `#10b981` | Teal `#14b8a6` | Amber `#f59e0b` | Emerald → Teal → Cyan | `--packaging-*` |
| Sustainability | Forest Green `#22c55e` | Sky Blue `#0ea5e9` | Warm Gold `#eab308` | Green → Sky → Blue | `--sustain-*` |
| Cultivation | Warm Amber `#f59e0b` | Burnt Orange `#ea580c` | Lime `#84cc16` | Orange → Amber → Lime | `--cultivator-*` |
| Harvest & Curing | Wine Red `#be123c` | Royal Purple `#8b5cf6` | Rose Pink `#f43f5e` | Purple → Wine → Rose | `--harvest-*` |
| Awards | Gold `#f59e0b` | Champagne `#fef3c7` | Bronze `#92400e` | Bronze → Gold → Champagne | `--awards-*` |

### Funky Page Details

#### Grading Page (`/about/grading`)
- **CSS File:** `/src/styles/templates/about-grading.css`
- **BEM Prefix:** `grading-*`, `grading-card`, `grading-step`, `grading-promise`
- **Cards:** 3 grade tiers (Premium = hot pink, Standard = electric cyan, Budget = neon lime)
- **Score Ring:** Quality score out of 100
- **Process Steps:** 4 steps (Harvest → Cure → Inspect → Grade)
- **Hero Gradient:** `#7c3aed` → `#ec4899` → `#f97316` (purple → pink → orange)
- **Dark Hero:** `#4c1d95` → `#831843` → `#9a3412`

#### Packaging Page (`/about/packaging`)
- **CSS File:** `/src/styles/templates/about-packaging.css`
- **BEM Prefix:** `packaging-*`, `packaging-card`, `packaging-step`, `packaging-promise`
- **Cards:** 3 jar types (Sampler = emerald, Standard = teal, Bulk = amber)
- **Score Ring:** Recycle rate percentage
- **Process Steps:** 4 steps (Return → Sanitise → Refill → Deliver)
- **Stats Section:** 4 sustainability metrics (80% glass recovered, 12+ months freshness, ∞ recyclable, 0 plastic)
- **Benefits Grid:** 6 feature cards (Recyclable, Chemical Free, Freshness, Lower Carbon, UV Protection, Lab-Grade Seal)
- **Hero Gradient:** `#059669` → `#14b8a6` → `#06b6d4` (emerald → teal → cyan)
- **Dark Hero:** `#064e3b` → `#0f766e` → `#155e75`

#### Sustainability Page (`/about/sustainability`)
- **CSS File:** `/src/styles/templates/about-sustainability.css`
- **BEM Prefix:** `sustain-*`, `sustain-pillar`, `sustain-timeline-item`, `sustain-promise`
- **Cards:** 6 sustainability pillars as glow cards (Water, Soil, Solar, Eco, Carbon, Community)
- **Timeline:** 6 milestone items (2023–2028) with gradient track and glowing dots
- **Commitments:** 7-item checklist with CheckCircle icons
- **Stats Section:** 4 impact stats (80% recyclable, 50% less water, 100% organic, 0 synthetic)
- **Hero Gradient:** `#059669` → `#0ea5e9` → `#0284c7` (green → sky → deep blue)
- **Dark Hero:** `#064e3b` → `#0c4a6e` → `#1e3a5f`

#### Cultivation Page (`/about/cultivation`)
- **CSS File:** `/src/styles/templates/about-cultivators.css`
- **BEM Prefix:** `cultivator-*`, `cultivator-card`, `cultivator-impact-card`, `cultivator-promise`
- **Cards:** 5 method cards as glow cards (Cultivator's Task, Outdoor, Rain Water, Companion Planting, Worm Tea)
- **Feature Grid:** 3 environmental impact cards (Solar, Water, Organic)
- **Hero Gradient:** `#ea580c` → `#f59e0b` → `#84cc16` (orange → amber → lime)
- **Dark Hero:** `#7c2d12` → `#78350f` → `#365314`

#### Harvest & Curing Page (`/about/harvest`)
- **CSS File:** `/src/styles/templates/about-harvest.css`
- **BEM Prefix:** `harvest-*`, `harvest-step`, `harvest-detail-card`, `harvest-promise`
- **Process Steps:** 4 steps (Hand Trim → Slow Dry → Monitor → Extended Cure)
- **Feature Grid:** 6 curing benefit cards (Smooth Smoke, Complex Terpenes, Optimal Moisture, Maximum Potency, Rich Flavour, Longer Shelf Life)
- **Hero Gradient:** `#7c3aed` → `#be123c` → `#f43f5e` (purple → wine → rose)
- **Dark Hero:** `#4c1d95` → `#881337` → `#9f1239`

#### Awards Page (`/about/awards`)
- **CSS File:** `/src/styles/templates/about-awards.css`
- **BEM Prefix:** `awards-*`, `awards-card`, `awards-timeline`, `awards-cta`
- **Cards:** Glow cards (double layer) for awards list
- **Stats:** 4 key metrics (12+ Awards, 3 Years, etc.)
- **Timeline:** Vertical timeline with gradient track and glowing dots
- **Hero Gradient:** `#b45309` → `#f59e0b` → `#fbbf24` (bronze → gold → champagne)
- **Dark Hero:** `#451a03` base with multiplied overlay

---

## Section Patterns

### 1. Gradient Hero

**Structure:**
```
section.{page}-hero
  img.{page}-hero__bg.hero-parallax-bg     (parallax background)
  div.{page}-hero__overlay                  (gradient overlay)
  Container
    div.{page}-hero__content
      span.{page}-hero__badge               (frosted glass pill)
        Icon.{page}-hero__badge-icon
      h1.{page}-hero__title
      p.{page}-hero__subtitle
  div.{page}-hero__orb.{page}-hero__orb--1  (decorative floating orbs)
  div.{page}-hero__orb.{page}-hero__orb--2
  div.{page}-hero__orb.{page}-hero__orb--3
```

**Key CSS:**
- Background: `linear-gradient(135deg, var(--{page}-hero-from), var(--{page}-hero-via), var(--{page}-hero-to))`
- Dark mode: Deeper/darker versions of the same gradient stops
- Orbs: `border-radius: 50%; filter: blur(60px); opacity: 0.35; animation: {page}-orb-float 8s ease-in-out infinite`
- Badge: `backdrop-filter: blur(12px); background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25)`
- Parallax: Uses `useHeroParallax(0.35)` hook with plain `<img>` tag (NOT `ImageWithFallback`)

### 2. Intro Section (Centered)

**Structure:**
```
section.{page}-intro
  Container
    div.{page}-intro__content
      h2.{page}-intro__heading    (gradient text)
      p.{page}-intro__text
```

**Key CSS:**
- Heading uses `background-clip: text` with the hero gradient for rainbow text effect
- `max-width: 42rem; margin: 0 auto; text-align: center`
- Spacing: `gap: var(--wp--preset--spacing--30)`

### 3. Glow Border Cards

**Structure:**
```
article.{page}-card.{page}-card--{variant}
  div.{page}-card__glow           (gradient border, hidden until hover)
  div.{page}-card__inner           (actual card surface)
    div.{page}-card__header
      div.{page}-card__icon-wrap   (tinted icon circle)
        Icon.{page}-card__icon
      div.{page}-card__titles
        span.{page}-card__emoji
        h3.{page}-card__title      (gradient text, per-variant)
        span.{page}-card__subtitle
    ...card content...
```

**Key CSS (Glow Technique):**
```css
/* Glow element sits behind the card surface */
.{page}-card__glow {
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.35s ease;
}

/* Show glow on hover */
.{page}-card:hover .{page}-card__glow {
  opacity: 1;
}

/* Per-variant glow colors */
.{page}-card--{variant} .{page}-card__glow {
  background: linear-gradient(135deg, var(--{page}-{variant}), var(--{page}-{variant}-dark), #accent);
  box-shadow: 0 0 30px var(--{page}-{variant}-glow);
}

/* Card inner sits above the glow */
.{page}-card__inner {
  position: relative;
  z-index: 1;
  background-color: var(--wp--preset--color--base);
  border: 1px solid var(--wp--preset--color--neutral-200);
  border-radius: inherit;
  /* On hover, border color changes to the variant accent */
}
```

### 4. SVG Score Ring

**Structure:**
```
div.{page}-card__score
  svg.{page}-card__score-ring (viewBox="0 0 120 120")
    circle.{page}-card__score-track   (background ring)
    circle.{page}-card__score-fill    (coloured progress, with drop-shadow glow)
  span.{page}-card__score-value       (number in centre)
```

**Key CSS:**
- Track: `stroke: var(--wp--preset--color--neutral-200)` / dark: `neutral-700`
- Fill: `stroke: var(--{page}-{variant}); filter: drop-shadow(0 0 6px var(--{page}-{variant}-glow))`
- Progress: `strokeDasharray="${(score/100) * 327} 327"` with `transform="rotate(-90 60 60)"`
- Container: `width: 7rem; height: 7rem; margin: 0 auto`

### 5. Process Steps

**Structure:**
```
section.{page}-process
  Container
    div.{page}-process__header
      h2 + p
    div.{page}-process__steps (grid: 1fr mobile → repeat(N, 1fr) desktop)
      div.{page}-step
        div.{page}-step__number    (large, ghost gradient number)
        div.{page}-step__icon-wrap (gradient circle)
          Icon
        h3.{page}-step__title
        p.{page}-step__desc
        ArrowRight (desktop connector, positioned absolute)
```

### 6. Promise/CTA Banner

**Structure:**
```
section.{page}-promise
  Container
    div.{page}-promise__content (flex: column mobile → row desktop)
      div.{page}-promise__text-block
        h2 + p...
      div.{page}-promise__badges (grid 2×2)
        div.{page}-promise__badge (frosted glass)
          Icon + span
```

**Key CSS:**
- Background: Same gradient as hero
- Badges: Frosted glass with `backdrop-filter: blur(12px)`
- Hover: `translateY(-3px)` lift

---

## Animation Specifications

### Orb Float
```css
@keyframes {page}-orb-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}
/* Duration: 8s, Easing: ease-in-out, Loop: infinite */
/* Each orb gets animation-delay stagger: 0s, -3s, -5s */
```

### Card Hover
```css
.{page}-card:hover {
  transform: translateY(-6px);
}
/* Transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease */
```

### Icon Hover
```css
.{page}-card:hover .{page}-card__icon-wrap {
  transform: scale(1.1) rotate(-3deg);
}
```

### Step Hover
```css
.{page}-step:hover {
  transform: translateY(-4px);
  box-shadow: var(--wp--preset--shadow--400);
}
.{page}-step:hover .{page}-step__icon-wrap {
  transform: scale(1.15);
  box-shadow: 0 0 20px var(--{page}-glow);
}
```

---

## Reduced Motion

ALL animations must be wrapped:

```css
@media (prefers-reduced-motion: reduce) {
  .{page}-hero__orb { animation: none; }
  .{page}-card { transition: none; }
  .{page}-step { transition: none; }
}
```

---

## Dark Mode Requirements

Every funky page CSS file must provide `.dark` variants for:

1. **Hero gradient** — Deeper, more muted versions (e.g., `#7c3aed` → `#4c1d95`)
2. **Section backgrounds** — `neutral-950` or `neutral-900` instead of `base`/`neutral-50`
3. **Card surfaces** — `neutral-800` background, `neutral-700` border
4. **Score ring tracks** — `neutral-700` stroke
5. **Criterion hover** — `neutral-700` background
6. **Icon wrap backgrounds** — Darker tinted versions (e.g., `#fdf2f8` → `#2d1525`)
7. **Process step arrows** — `neutral-600` colour

---

## BEM Naming Convention

All funky page classes follow strict BEM with the page name as prefix:

```
.{page}-hero                    (block)
.{page}-hero__bg                (element)
.{page}-hero__orb--1            (modifier)
.{page}-card--premium           (variant modifier)
.{page}-card--active            (state modifier)
```

**No utility classes. No Tailwind. Pure BEM + WordPress presets.**

---

## File Structure

Each funky page creates:

1. **TSX Component:** `/src/app/pages/about/{Page}.tsx`
2. **CSS File:** `/src/styles/templates/about-{page}.css`
3. **CSS Import:** Added to `/src/styles/global.css` under section 10

---

## Checklist for New Funky Pages

- [ ] Choose 3–5 colour identity tokens (primary, secondary, tertiary + hero gradient)
- [ ] Define all tokens in `:root` with dark mode variants
- [ ] Implement gradient hero with parallax (plain `<img>`, NOT `ImageWithFallback`)
- [ ] Add 2–3 floating orbs with staggered animation delays
- [ ] Create glow border cards (if applicable)
- [ ] Add gradient text headings
- [ ] Implement frosted glass elements (badges, promise badges)
- [ ] Include process/steps section (if applicable)
- [ ] Add promise/CTA gradient banner
- [ ] Test light + dark mode (WCAG 2.1 AA contrast)
- [ ] Add `prefers-reduced-motion` guards for all animations
- [ ] Update this document's Colour Identity Map
- [ ] Import CSS in `global.css`

---

## Reusable Section Styles (v2.0)

The funky design system now provides **25 composable section style classes** across two CSS files:

- **Original 10:** `/src/styles/sections/section-styles.css`
- **Expanded 15:** `/src/styles/sections/section-styles-expanded.css`

Both are imported in `/src/styles/global.css`.

### Complete Section Style Inventory

| # | Class Name | Purpose | Custom Properties | File |
|---|-----------|---------|-------------------|------|
| 1 | `section-hero-gradient` | Full-bleed gradient hero with parallax, orbs, frosted badge | `--shg-from/via/to`, `--shg-*-dark` | section-styles.css |
| 2 | `section-intro-centered` | Centred intro with gradient text heading | `--sic-gradient` | section-styles.css |
| 3 | `section-cards-glow` | Card grid with gradient glow borders on hover | `--scg-glow-gradient`, `--scg-glow-shadow` | section-styles.css |
| 4 | `section-cta-glass` | Frosted-glass CTA banner on gradient bg | `--scta-bg`, `--scta-bg-dark` | section-styles.css |
| 5 | `section-stats-counter` | Row of large stat numbers with labels | `--ssc-accent` | section-styles.css |
| 6 | `section-process-steps` | Numbered process steps in horizontal row | `--sps-from/via`, `--sps-glow` | section-styles.css |
| 7 | `section-feature-grid` | Responsive feature cards with icon + text | `--sfg-accent`, `--sfg-accent-bg` | section-styles.css |
| 8 | `section-banner-gradient` | Full-width gradient banner with badge grid | `--sbg-gradient`, `--sbg-gradient-dark` | section-styles.css |
| 9 | `section-testimonial-cards` | Testimonial cards with avatar + quote | `--stc-accent` | section-styles.css |
| 10 | `section-checklist-badges` | Grid of icon circle badges with labels | `--scb-accent`, `--scb-accent-end` | section-styles.css |
| 11 | `section-hero-mesh` | Gradient mesh hero with particles + shimmer title | `--shm-color-1/2/3/4` | section-styles-expanded.css |
| 12 | `section-cards-strain` | Strain neon glow cards (indica/sativa/hybrid/all) | `--scs-glow`, `--scs-accent`, etc. | section-styles-expanded.css |
| 13 | `section-product-showcase` | Product cards with image area + neon glow | — | section-styles-expanded.css |
| 14 | `section-cta-neon` | Neon-bordered CTA with pulsing border | `--scn-from/via/to` | section-styles-expanded.css |
| 15 | `section-cta-split` | Two-column CTA with gradient + image | `--scss-gradient`, `--scss-gradient-dk` | section-styles-expanded.css |
| 16 | `section-faq-glow` | FAQ accordion with glow on active items | `--sfg-glow-color` | section-styles-expanded.css |
| 17 | `section-bg-dark` | Full-bleed dark background section | `--sbd-bg`, `--sbd-bg-alt` | section-styles-expanded.css |
| 18 | `section-bg-neutral` | Alternating neutral background | `--sbn-bg`, `--sbn-bg-dark` | section-styles-expanded.css |
| 19 | `section-bg-radial` | Radial spotlight background | `--sbr-accent/center/edge` | section-styles-expanded.css |
| 20 | `section-trust-strip` | Horizontal trust strip with icon circles | `--sts-accent`, `--sts-accent-end` | section-styles-expanded.css |
| 21 | `section-divider-glow` | Gradient glow line divider | `--sdg-from/via/to` | section-styles-expanded.css |
| 22 | `section-newsletter-glow` | Newsletter input with neon glow focus | `--snl-accent` | section-styles-expanded.css |
| 23 | `section-cards-floating` | Cards with 3D perspective tilt hover | `--scf-perspective` | section-styles-expanded.css |
| 24 | `section-hero-split` | Split-screen hero: content + image | `--shs-gradient`, `--shs-gradient-dk` | section-styles-expanded.css |
| 25 | `section-icon-circle-grid` | Icon-first grid with gradient circles | `--sicg-from/to/glow` | section-styles-expanded.css |

### Strain Card Variants (Section 12)

The `section-cards-strain` section includes pre-defined strain variants:

| Variant | Glow Gradient | Shadow | Icon Colour | Accent |
|---------|-------------|--------|-------------|--------|
| `--indica` | Purple → Lavender → Lilac | `rgba(123, 63, 242, 0.5)` | `#a78bfa` | `#7B3FF2` |
| `--sativa` | Red → Orange → Gold | `rgba(239, 68, 68, 0.5)` | `#f87171` | `#ef4444` |
| `--hybrid` | Green → Emerald → Cyan | `rgba(34, 197, 94, 0.5)` | `#4ade80` | `#22c55e` |
| `--all` | Cyan → Sky → Blue | `rgba(6, 182, 212, 0.5)` | `#22d3ee` | `#06b6d4` |

### Homepage Application (v2.0)

The FrontPage now uses these section styles:

1. **Hero** → `section-hero-mesh` (gradient mesh + particles + shimmer)
2. **Strain Grid** → `section-cards-strain` (4 neon glow cards + orbs)
3. **Divider** → `section-divider-glow` (gradient line)
4. **Best Sellers** → `section-bg-radial` (spotlight dark bg)
5. **Philosophy CTA** → `section-cta-neon` (pulsing neon border)
6. **Trust Bar** → `section-trust-strip` (icon circles)
7. **FAQ** → `section-faq-glow` (glow on active)
