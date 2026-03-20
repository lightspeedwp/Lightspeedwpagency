# LSX Design — Figma Make Prototype Guidelines

**Category:** Core  
**Version:** 5.18.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Template Used:** Canonical (no template — this IS the source of truth)

---

## 🎯 Core Principle

**WCAG-compliant neon aesthetic** using **BEM methodology** with **100% CSS variable-based design system**. Every component must use design tokens from `/src/styles/global.css` for colors, spacing, typography, borders, and radii to ensure consistent light/dark modes and user-controlled theming.

---

## 🎨 Design System Architecture

### CSS Variables (Single Source of Truth)

All styling **MUST** use CSS variables defined in `/src/styles/global.css`:

#### Typography
- **Font Families:** `var(--font-primary)` (Lexend), `var(--font-secondary)` (Manrope)
- **Font Sizes:** Use `--font-size-*` tokens only
- **Font Weights:** Use `--font-weight-*` tokens only
- **Line Heights:** Use `--line-height-*` tokens only
- **CRITICAL:** ONLY use font faces defined in the CSS — no hardcoded `font-family` values
- **CRITICAL:** NO Tailwind typography classes (text-xl, font-bold, leading-tight, etc.) unless specifically requested

#### Colors
- **Surface:** `var(--surface-*)` tokens for backgrounds
- **Text:** `var(--text-*)` tokens for typography
- **Primary/Accent:** `var(--primary-*)`, `var(--accent-*)` for brand colors
- **Semantic:** `var(--success-*)`, `var(--warning-*)`, `var(--error-*)`, `var(--info-*)`
- **Neon/Glow:** `var(--neon-*)`, `var(--glow-*)` for effects
- **CRITICAL:** Zero hardcoded hex/rgb values

#### Spacing
- **Semantic Spacing:** `var(--spacing-*)` tokens (xs, sm, md, lg, xl, 2xl, etc.)
- **Component Spacing:** `var(--spacing-component-*)` for internal padding/margins
- **Section Spacing:** `var(--spacing-section-*)` for layout gaps

#### Borders & Radii
- **Border Width:** `var(--border-width-*)` tokens
- **Border Color:** `var(--border-*)` tokens  
- **Border Radius:** `var(--radius-*)` tokens (sm, md, lg, full)

#### Shadows & Effects
- **Box Shadows:** `var(--shadow-*)` tokens
- **Glow Effects:** `var(--glow-*)` tokens for neon aesthetic
- **Transitions:** `var(--transition-*)` tokens

### Why This Matters

✅ **User Control:** Updating `/src/styles/global.css` updates entire site  
✅ **Theme Consistency:** Light/dark modes automatically work  
✅ **WCAG Compliance:** Color contrast ratios maintained  
✅ **Maintainability:** Single source of truth for all design decisions  

---

## 🏗️ Architecture Patterns

### Component Structure

```
/src/
├── app/
│   ├── components/
│   │   ├── blocks/          # WordPress block components
│   │   ├── patterns/        # Reusable pattern components
│   │   ├── parts/           # Template parts (header, footer, hero)
│   │   ├── templates/       # Full page templates
│   │   └── common/          # Shared utilities
│   ├── data/                # Centralized data files
│   └── routes.tsx           # React Router config
├── styles/
│   ├── global.css           # 🎨 DESIGN SYSTEM (colors, spacing, typography, etc.)
│   ├── theme.css            # Theme-level overrides
│   ├── fonts.css            # Font imports
│   ├── blocks/              # Block-specific BEM styles
│   ├── patterns/            # Pattern-specific BEM styles
│   ├── parts/               # Template part BEM styles
│   └── templates/           # Template-specific BEM styles
```

### DRY Component Hierarchy

**Build reusable components at every level:**

1. **Blocks** (`/components/blocks/`) — Atomic WordPress blocks (Button, Heading, Paragraph)
2. **Patterns** (`/components/patterns/`) — Composed patterns (FeatureList, HeroHome, TestimonialGrid)
3. **Parts** (`/components/parts/`) — Template parts (SiteHeader, SiteFooter, HeroPart)
4. **Templates** (`/components/templates/`) — Full pages using parts + patterns

**Example:**
```tsx
// ❌ Bad: Duplicate hero code in every template
<div className="hero">...</div>

// ✅ Good: Reusable HeroPart with pattern variants
<HeroPart variant="homepage" data={heroData} />
```

---

## 🎭 Template Parts System

### Single Template Part, Multiple Patterns

Each template part (header, footer, hero) should be **ONE component** that loads **different pattern variants** based on section:

#### Header (`/components/parts/SiteHeader.tsx`)
```tsx
<SiteHeader variant="homepage" />   // Homepage pattern
<SiteHeader variant="main" />       // Main site pattern
<SiteHeader variant="dev-tools" />  // Dev tools pattern
```

#### Footer (`/components/parts/SiteFooter.tsx`)
```tsx
<SiteFooter variant="main" />       // Main site pattern
<SiteFooter variant="dev-tools" />  // Dev tools pattern
```

#### Hero (`/components/parts/HeroPart.tsx`)
```tsx
<HeroPart variant="home" data={frontPageHero} />
<HeroPart variant="service" data={serviceHero} />
<HeroPart variant="solution" data={solutionHero} />
```

**Pattern files live in:** `/components/patterns/header/`, `/patterns/footer/`, `/patterns/hero/`

---

## 🎨 BEM Methodology (Strict)

### NO Tailwind Utility Classes

**CRITICAL:** Avoid ALL Tailwind utility classes. Use BEM + CSS variables exclusively.

```tsx
// ❌ Bad: Tailwind utilities
<div className="flex gap-4 p-6 bg-gray-900 rounded-lg">

// ✅ Good: BEM classes with CSS variables
<div className="feature-card">
```

**CSS (feature-card.css):**
```css
.feature-card {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--surface-card);
  border-radius: var(--radius-lg);
}
```

### BEM Naming Convention

```
.block-name { }                          /* Block */
.block-name__element { }                 /* Element */
.block-name--modifier { }                /* Modifier */
.block-name__element--modifier { }       /* Element modifier */
```

**Example:**
```tsx
<article className="pricing-card pricing-card--popular">
  <div className="pricing-card__header">
    <h3 className="pricing-card__title">Pro Plan</h3>
    <span className="pricing-card__badge pricing-card__badge--glow">Popular</span>
  </div>
  <div className="pricing-card__price">
    <span className="pricing-card__amount">$99</span>
    <span className="pricing-card__period">/month</span>
  </div>
</article>
```

### Allowed Tailwind Classes

**ONLY these WordPress/utility classes are permitted:**
- Layout: `.alignwide`, `.alignfull`, `.wp-block-*`
- Spacing: `.has-*-padding`, `.has-*-margin` (if using WordPress spacing scale)

---

## 🎯 Icons & Visual Elements

### Phosphor Icons (Duotone)

**100% Phosphor Icons** — NO Lucide, NO other libraries.

```tsx
import { Sparkle, CheckCircle, ArrowRight } from '@phosphor-icons/react';

// Contextual stats/features: duotone weight
<Sparkle size={32} weight="duotone" />

// UI controls/navigation: regular weight
<ArrowRight size={20} weight="regular" />
```

**Icon Registry:** `/src/app/data/icon-registry.ts` (130+ icons cataloged)  
**Icon Catalog:** `/src/app/data/icon-catalog.ts` (100+ recommended icons)

### Stats Blocks (Contextual Integration)

Every page should include relevant stats using **duotone Phosphor icons**:

```tsx
<StatsBlock
  stats={[
    { icon: <Rocket size={32} weight="duotone" />, value: '99.9%', label: 'Uptime' },
    { icon: <Lightning size={32} weight="duotone" />, value: '<50ms', label: 'Response time' },
  ]}
/>
```

---

## ♿ Accessibility (WCAG 2.2 AA Minimum)

### Critical Requirements

1. **Semantic HTML:** Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
2. **Heading Hierarchy:** Proper h1 → h6 nesting (no skipping levels)
3. **ARIA Labels:** `aria-label`, `aria-labelledby`, `aria-describedby` where needed
4. **Keyboard Navigation:** All interactive elements focusable/operable via keyboard
5. **Color Contrast:** Minimum 4.5:1 for text, 3:1 for UI components
6. **Focus Indicators:** Visible focus states for all interactive elements
7. **Alt Text:** All images have descriptive `alt` attributes

### Motion Preferences

**CRITICAL:** Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    transition: none;
  }
}
```

---

## 📝 Content & Typography Guidelines

### Sentence Case (STRICT)

**All headings use sentence case** — capitalize ONLY:
1. First word
2. Proper nouns (LSX Design, WordPress, WooCommerce)
3. Acronyms (CSS, API, SEO, WCAG, HTML, JSON, etc.)

```tsx
// ❌ Bad: Title Case
<h2>Our Best Practices For Design Systems</h2>

// ✅ Good: Sentence case
<h2>Our best practices for design systems</h2>

// ✅ Good: Proper nouns preserved
<h2>WordPress best practices for WCAG compliance</h2>
```

**Enforcement:** Run `fix titles` prompt to audit/fix violations.

---

## 🚀 Performance & Optimization

### WebGL Components

**21 WebGL canvas components** for interactive backgrounds/effects.

**Critical Requirements:**
1. **Accessibility:** Check `prefers-reduced-motion` (WCAG 2.1)
2. **Performance:** Use `requestAnimationFrame`, clean up on unmount
3. **ES5 Compliance:** No optional chaining (`?.`), no nullish coalescing (`??`)
4. **CSS Variables:** Never call `getComputedStyle()` per frame — cache values
5. **Organization:** Graphics in `/components/webgl/`, patterns in `/patterns/webgl/`

**Registry:** `/src/app/data/webgl-registry.ts` (21 components cataloged)

### Route Structure

**172 routes** using React Router Data mode:

```tsx
// /src/app/routes.tsx
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'services/:slug', Component: ServiceTemplate },
      { path: '*', Component: NotFound },
    ],
  },
]);
```

**Main entry:** `/src/app/App.tsx` uses `<RouterProvider router={router} />`

---

## 🧪 Prompt Triggers

### Core Triggers (Always Available)

| Trigger | Purpose | File |
|---------|---------|------|
| `audit` | Run all 24 audit prompts | `/prompts/audit.md` |
| `fix` | Run all fix prompts | `/prompts/fix.md` |
| `update triggers` | Sync trigger registry | `/prompts/update-triggers.md` |
| `fix titles` | Fix Title Case → sentence case | `/prompts/fix-titles.md` |

**Full registry:** `/guidelines/prompt-triggers.md` (101 total triggers)

---

## 📊 Project Status

### Overall Grade: A- (92.5%)

**Compliance Scores:**
- Design System: 100% (CSS variables only)
- BEM Architecture: 98% (860+ inline styles migrated)
- Accessibility: 100% (WCAG 2.2 AA)
- Icon System: 100% (Phosphor Icons)
- Route Integrity: 100% (172 routes functional)

**Recent Achievements:**
- ✅ 100% CSS variable compliance verified
- ✅ Zero hardcoded colors, spacing, typography
- ✅ All fonts controlled via global.css
- ✅ Sentence case compliance (95%+ compliant)

---

## 🛠️ Development Workflow

### Before Generating UI

1. **Check `/src/styles/global.css`** — Verify design tokens exist
2. **Reference existing patterns** — Reuse components from `/patterns/`
3. **Follow BEM** — Create new CSS file in appropriate `/styles/` subdirectory
4. **Use design tokens** — All colors, spacing, typography from CSS variables
5. **Check icon registry** — Use existing Phosphor icons when possible

### After Generating UI

1. **Run `fix titles`** — Ensure sentence case compliance
2. **Test light/dark modes** — Verify CSS variables work in both themes
3. **Check accessibility** — WCAG 2.2 AA minimum
4. **Validate BEM** — No Tailwind utilities leaked in

---

## 📋 Common Violations to Avoid

### ❌ Never Do This

```tsx
// Hardcoded colors
<div style={{ backgroundColor: '#1a1a2e' }}>

// Tailwind utilities (unless specifically requested)
<div className="flex gap-4 p-6 bg-gray-900 rounded-lg text-2xl font-bold">

// Hardcoded fonts
<p style={{ fontFamily: 'Inter, sans-serif' }}>

// Title Case headings
<h2>Our Best Design Practices</h2>

// Lucide icons
import { Check } from 'lucide-react';
```

### ✅ Always Do This

```tsx
// CSS variables
<div className="feature-card">

// BEM classes
<div className="feature-card__header">

// Design system fonts (via CSS variables)
// No inline styles needed — CSS handles it

// Sentence case headings
<h2>Our best design practices</h2>

// Phosphor icons
import { Check } from '@phosphor-icons/react';
```

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 5.18.0 | 2026-03-18 | Added comprehensive design system documentation (CSS variables, typography, colors, spacing, borders, radii). Expanded BEM guidelines, template parts architecture, and content guidelines. |
| 5.17.0 | 2026-03-18 | Added Fix category with 2 triggers (`fix`, `fix titles`). Total triggers: 99 → 101. |
| 5.16.0 | 2026-03-18 | Created fix triggers and prompts. |

---

## 📚 Related Documentation

- **Prompt Triggers:** `/guidelines/prompt-triggers.md` (v16.0.0, 101 triggers)
- **Design Tokens:** `/src/styles/global.css` (colors, spacing, typography, etc.)
- **Icon Registry:** `/src/app/data/icon-registry.ts` (130+ icons)
- **WebGL Registry:** `/src/app/data/webgl-registry.ts` (21 components)
- **Reports:** `/reports/2026-03/` (audit results, compliance scores)

---

**Last Updated:** March 18, 2026  
**Maintained By:** LSX Design Team  
**Status:** ✅ Active & Enforced
