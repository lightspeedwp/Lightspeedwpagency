# Light/Dark Mode Template for All Prompts

**This template should be inserted into every prompt in the "Design System Requirements" section**

---

### Light/Dark Mode Implementation (WCAG 2.2 AA/AAA Compliant)

**CRITICAL:** All color implementations must meet WCAG 2.2 standards for accessibility.

#### Light Mode Styles

**Background hierarchy:**
- Primary surface: `var(--color-white)` or `var(--color-gray-50)`
- Secondary surface: `var(--color-gray-100)`
- Tertiary surface: `var(--color-gray-200)`
- Card backgrounds: `var(--color-white)` with `var(--color-gray-300)` border

**Foreground colors:**
- Primary text: `var(--color-gray-900)` (AAA: 15.3:1 contrast on white)
- Secondary text: `var(--color-gray-700)` (AAA: 7.2:1 contrast on white)
- Tertiary text: `var(--color-gray-600)` (AA: 4.6:1 contrast on white)
- Link text: Professional blue from CSS variables (minimum AA: 4.5:1)

**Accent colors (light mode):**
- **Neon accents as borders/badges ONLY** — Never as primary text
- Service cards: Professional blue with neon border on hover
- Stats icons: Gray scale with professional blue accent
- Buttons: Professional blue background, white text (AAA: 7:1 minimum)
- Interactive states:
  - Hover: Gray-100 background
  - Focus: Professional blue border with gray-900 text
  - Active: Gray-200 background

**Stats display (light mode):**
- Use `<StatsGrid>` component (not NeonStats)
- Numbers: `var(--color-gray-900)` — large, bold
- Labels: `var(--color-gray-700)` — smaller
- Icons: `var(--color-gray-600)` with professional blue accent
- Card borders: `var(--color-gray-300)`
- Background: `var(--color-white)` or `var(--color-gray-50)`

**WCAG 2.2 AA Requirements (Light Mode):**
- ✅ Normal text: Minimum 4.5:1 contrast ratio
- ✅ Large text (18pt+/14pt bold+): Minimum 3:1 contrast ratio
- ✅ UI components: Minimum 3:1 contrast ratio
- ✅ Graphical objects: Minimum 3:1 contrast ratio
- ✅ Focus indicators: Minimum 3:1 contrast against background

**WCAG 2.2 AAA Requirements (Light Mode):**
- ✅ Normal text: Minimum 7:1 contrast ratio (use gray-900 on white)
- ✅ Large text: Minimum 4.5:1 contrast ratio

#### Dark Mode Styles (Funky Neon Aesthetic)

**Background hierarchy:**
- Primary surface: `var(--color-black)` or `var(--color-gray-900)`
- Secondary surface: `var(--color-gray-800)`
- Tertiary surface: `var(--color-gray-700)`
- Card backgrounds: `rgba(255, 255, 255, 0.05)` glassmorphism with neon borders

**Foreground colors:**
- Primary text: `var(--color-white)` or `var(--color-gray-50)` (AAA: 21:1 on black)
- Secondary text: `var(--color-gray-300)` (AAA: 9.7:1 on black)
- Tertiary text: `var(--color-gray-400)` (AA: 7.1:1 on black)
- Link text: `var(--wp--preset--color--neon-cyan)` (AA: 5.2:1 on black)

**Neon accent colors (dark mode ONLY):**
- Primary interactive: `var(--wp--preset--color--neon-cyan)`
- Creative/design: `var(--wp--preset--color--neon-pink)`
- Technical/code: `var(--wp--preset--color--neon-lime)`
- Success/growth: `var(--wp--preset--color--neon-yellow)`
- Enterprise/premium: `var(--wp--preset--color--deep-purple)`
- Gradients: Combine neon colors with subtle opacity (20-40%)
- Glow effects: `box-shadow: 0 0 20px var(--neon-color)` at 50% opacity

**Stats display (dark mode):**
- Use `<NeonStats>` component with forced dark background
- Numbers: Neon color (cyan/pink/lime/yellow rotation) with glow
- Labels: `var(--color-gray-300)`
- Icons: Matching neon color with glow effect
- Card backgrounds: Glassmorphism with neon borders
- Particles/animations: Neon accent colors
- Background: `var(--color-black)` forced

**Interactive states (dark mode):**
- Hover: Neon glow intensifies, subtle scale transform (1.02)
- Focus: Bright neon `var(--ring)` outline, 2px solid
- Active: Neon color background at 20% opacity
- Disabled: Gray-600 with 50% opacity

**WCAG 2.2 AA Requirements (Dark Mode):**
- ✅ Normal text: Minimum 4.5:1 contrast ratio
  - White on black: 21:1 ✅
  - Gray-300 on black: 9.7:1 ✅
  - Neon-cyan on black: 5.2:1 ✅
  - Neon-pink on black: 4.8:1 ✅
  - Neon-lime on black: 6.1:1 ✅
  - Neon-yellow on black: 5.8:1 ✅
- ✅ Large text: Minimum 3:1 contrast ratio (all neon colors pass)
- ✅ UI components: Neon borders minimum 3:1 ratio
- ✅ Graphical objects: Neon accents meet 3:1 minimum

**WCAG 2.2 AAA Requirements (Dark Mode):**
- ✅ Normal text: Minimum 7:1 contrast ratio
  - Use white (21:1) or gray-200 (12.6:1) for body text
  - Reserve neon colors for headings (18pt+), accents, large text only
- ✅ Large text: Minimum 4.5:1 (all neon colors pass on black)

#### Color Contrast Testing

**Required tests before implementation:**

```css
/* Light mode - minimum contrast ratios */
--color-gray-900 on --color-white: 15.3:1 (AAA) ✅
--color-gray-700 on --color-white: 7.2:1 (AAA) ✅
--color-gray-600 on --color-white: 4.6:1 (AA) ✅
--professional-blue on --color-white: 7.1:1 (AAA) ✅

/* Dark mode - minimum contrast ratios */
--color-white on --color-black: 21:1 (AAA) ✅
--color-gray-300 on --color-black: 9.7:1 (AAA) ✅
--color-gray-200 on --color-black: 12.6:1 (AAA) ✅
--neon-cyan on --color-black: 5.2:1 (AA large text) ✅
--neon-pink on --color-black: 4.8:1 (AA large text) ✅
--neon-lime on --color-black: 6.1:1 (AA) ✅
--neon-yellow on --color-black: 5.8:1 (AA) ✅
```

**Testing tools:**
- WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)
- Chrome DevTools Lighthouse
- axe DevTools browser extension
- Stark Figma plugin (during design phase)
- Color Oracle (color-blind simulator)

#### Implementation Guidelines

**CSS Structure:**

```css
/* Base styles - light mode default */
.service-hero {
  background: var(--color-white);
  color: var(--color-gray-900);
}

.service-hero__title {
  color: var(--color-gray-900);
  font-family: var(--font-primary);
}

.service-hero__description {
  color: var(--color-gray-700);
  font-family: var(--font-secondary);
}

.service-hero__cta {
  background: var(--color-professional-blue);
  color: var(--color-white);
  border: 2px solid transparent;
  font-family: var(--font-primary);
}

.service-hero__cta:hover {
  background: var(--color-professional-blue-dark);
  transform: translateY(-2px);
}

.service-hero__cta:focus {
  outline: 2px solid var(--color-professional-blue);
  outline-offset: 2px;
}

/* Dark mode - Funky neon aesthetic */
@media (prefers-color-scheme: dark) {
  .service-hero {
    background: var(--color-black);
    color: var(--color-white);
  }

  .service-hero__title {
    color: var(--color-white);
    text-shadow: 0 0 20px var(--wp--preset--color--neon-cyan);
  }

  .service-hero__description {
    color: var(--color-gray-300);
  }

  .service-hero__cta {
    background: transparent;
    color: var(--wp--preset--color--neon-cyan);
    border: 2px solid var(--wp--preset--color--neon-cyan);
    box-shadow: 0 0 10px var(--wp--preset--color--neon-cyan);
  }

  .service-hero__cta:hover {
    background: var(--wp--preset--color--neon-cyan);
    color: var(--color-black);
    box-shadow: 0 0 20px var(--wp--preset--color--neon-cyan);
    transform: translateY(-2px) scale(1.02);
  }

  .service-hero__cta:focus {
    outline: 2px solid var(--wp--preset--color--neon-cyan);
    outline-offset: 4px;
    box-shadow: 0 0 30px var(--wp--preset--color--neon-cyan);
  }
}

/* Force dark mode for specific sections */
.service-stats--neon {
  background: var(--color-black) !important;
  color: var(--color-white) !important;
}

.service-stats--neon .stat__number {
  color: var(--wp--preset--color--neon-cyan);
  text-shadow: 0 0 15px var(--wp--preset--color--neon-cyan);
  font-family: var(--font-primary);
}

.service-stats--neon .stat__label {
  color: var(--color-gray-300);
  font-family: var(--font-secondary);
}

/* Force light mode for specific sections */
.service-process--light {
  background: var(--color-white) !important;
  color: var(--color-gray-900) !important;
}

.service-process--light .step__title {
  color: var(--color-gray-900);
  font-family: var(--font-primary);
}
```

**React Component Pattern:**

```tsx
import { useTheme } from '@/hooks/useTheme';
import { NeonStats } from '@/components/stats/NeonStats';
import { StatsGrid } from '@/components/stats/StatsGrid';

export function ServiceHero({ stats }: { stats: Stat[] }) {
  const { isDark } = useTheme();
  
  return (
    <section className="service-hero">
      <h1 className="service-hero__title">
        Service title
      </h1>
      
      <p className="service-hero__description">
        Service description
      </p>
      
      {/* Conditional stats component based on theme */}
      {isDark ? (
        <NeonStats stats={stats} className="service-stats--neon" />
      ) : (
        <StatsGrid stats={stats} />
      )}
      
      <button className="service-hero__cta">
        Get started
      </button>
    </section>
  );
}
```

#### Forced Dark Sections (Neon Aesthetic)

**These sections MUST use dark background regardless of system preference:**

1. **Stats sections** — Always use `<NeonStats>` component with forced dark background
2. **Interactive WebGL sections** — Dark canvas enhances neon glow and particle effects
3. **CTA sections** — Dark background with neon CTAs for maximum impact
4. **Timeline/process visualizations** — Dark space aesthetic for neon paths
5. **Technology showcase** — Code/tech demos benefit from terminal-style dark bg

**Implementation:**

```css
/* Force dark sections */
.section--force-dark {
  background: var(--color-black) !important;
  color: var(--color-white) !important;
}

.section--force-dark h2,
.section--force-dark h3 {
  color: var(--color-white);
  font-family: var(--font-primary);
}

.section--force-dark p {
  color: var(--color-gray-300);
  font-family: var(--font-secondary);
}

.section--force-dark .stat__number {
  color: var(--wp--preset--color--neon-cyan);
  text-shadow: 0 0 15px var(--wp--preset--color--neon-cyan);
}
```

#### Accessibility Checklist

**Light mode:**
- [ ] All text meets 4.5:1 minimum (AA), 7:1 preferred (AAA)
- [ ] Headings and body text use AAA ratios (7:1+)
- [ ] Links are distinguishable without color alone (underline or icon)
- [ ] Focus indicators are clearly visible (3:1 minimum against background)
- [ ] Form inputs have visible borders (3:1 minimum)
- [ ] Disabled states are distinguishable (opacity + cursor change)
- [ ] Error messages use sufficient contrast and icons

**Dark mode:**
- [ ] All text on dark backgrounds meets 4.5:1 minimum
- [ ] Neon colors used for large text (18pt+) or accents only
- [ ] White/gray-200/gray-300 used for body text (7:1+ ratio)
- [ ] Neon glows don't obscure readability or reduce contrast
- [ ] Focus indicators are bright and clear (neon outline)
- [ ] Interactive elements have sufficient contrast in all states
- [ ] Glassmorphism backgrounds don't reduce text contrast below minimums

**Both modes:**
- [ ] Images have alt text with good contrast (if text overlays)
- [ ] Icons have labels or ARIA labels
- [ ] Color is not the only means of conveying information
- [ ] Animations respect `prefers-reduced-motion` media query
- [ ] Keyboard focus order is logical
- [ ] Touch targets are minimum 44×44px (mobile)
- [ ] All typography uses CSS font variables only

#### Typography Font Enforcement

**CRITICAL:** Only use font faces defined in CSS variables.

```css
/* Correct - using CSS variables */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-primary); /* Lexend */
}

p, li, span, label, input {
  font-family: var(--font-secondary); /* Manrope */
}

code, pre {
  font-family: var(--font-mono); /* Monospace */
}

/* INCORRECT - never hardcode font names */
h1 {
  font-family: "Lexend", sans-serif; /* ❌ WRONG */
}

p {
  font-family: "Manrope", sans-serif; /* ❌ WRONG */
}
```

---

## Stats Block Integration

**EVERY service and solution page MUST include a stats block.**

### Light Mode Stats Implementation

```tsx
import { StatsGrid } from '@/components/stats/StatsGrid';
import { statsRegistry } from '@/data/stats';

// Get relevant stats by category or tags
const stats = statsRegistry.getStatsByCategory('design');

<StatsGrid 
  stats={stats}
  className="service-stats--light"
  columns={4} // or 3, or 2 depending on layout
/>
```

**Visual specs (light mode):**
- Background: `var(--color-white)` or `var(--color-gray-50)`
- Numbers: `var(--color-gray-900)`, bold, large (48-64px)
- Labels: `var(--color-gray-700)`, regular, smaller (14-16px)
- Icons: `var(--color-gray-600)`, professional blue accent
- Borders: `var(--color-gray-300)`, 1px solid
- Padding: `var(--spacing-8)` or `var(--spacing-12)`

### Dark Mode Stats Implementation

```tsx
import { NeonStats } from '@/components/stats/NeonStats';
import { statsRegistry, mapToNeonStats } from '@/data/stats';

// Get stats and map to neon format
const rawStats = statsRegistry.getStatsByCategory('development');
const neonStats = mapToNeonStats(rawStats);

<NeonStats 
  stats={neonStats}
  className="service-stats--neon section--force-dark"
  variant="grid" // or "carousel" or "inline"
/>
```

**Visual specs (dark mode):**
- Background: `var(--color-black)` — FORCED
- Numbers: Neon colors (cyan/pink/lime/yellow rotation) with glow
- Labels: `var(--color-gray-300)`
- Icons: Matching neon color with glow effect
- Cards: Glassmorphism with neon borders
- Glow: `text-shadow: 0 0 15px var(--neon-color)`

### Stats Placement Guidelines

**Recommended locations:**

1. **Hero section** — 3-4 key metrics establishing credibility
2. **Below value proposition** — Supporting stats for claims
3. **Before case studies** — Overview stats
4. **Before CTA** — Final impact stats driving conversion

**Example structure:**

```tsx
<ServiceTemplate>
  <Hero>
    <h1>Service Title</h1>
    <p>Description</p>
    {/* Hero stats - light mode in light sections */}
    <StatsGrid stats={heroStats} columns={4} />
  </Hero>
  
  <ValueProposition>
    ...
  </ValueProposition>
  
  {/* Mid-page stats - force dark for impact */}
  <section className="section--force-dark">
    <NeonStats stats={detailStats} variant="grid" />
  </section>
  
  <CaseStudies>
    ...
  </CaseStudies>
  
  {/* CTA stats - force dark */}
  <CTA className="section--force-dark">
    <h2>Ready to get started?</h2>
    <NeonStats stats={ctaStats} variant="inline" />
    <Button>Contact us</Button>
  </CTA>
</ServiceTemplate>
```

---

**Last Updated:** March 17, 2026  
**Template Version:** 1.0.0  
**Apply to:** All 13 AI Services Restructure prompts
