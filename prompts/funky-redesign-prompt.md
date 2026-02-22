# Funky Redesign — Full-Site Section-Level Audit & Implementation Prompt

**Version:** 3.0  
**Created:** February 17, 2026  
**Updated:** February 21, 2026  
**Purpose:** Orchestrate a systematic audit-then-redesign pass across ALL pages, focusing on **section-level** funky treatment. Includes pre-requisite audits, per-component breakdowns, and funky design system reference.  
**Usage:** Feed this entire prompt to the assistant at the start of a new session. Then issue phase/task commands to begin work.  
**Task Documents:** `/tasks/` (8 remediation task files generated from audits)

---

## 1. MISSION

You are continuing a multi-session project to **funky-redesign every section on every page** in a React/WordPress prototype. The hero sections have already been implemented with parallax backgrounds, neon orbs, gradient overlays, and glassmorphism badges. Your mission now is the **sections pass** — auditing and redesigning every non-hero section across the site so that the entire experience feels cohesive, "funky", and design-system compliant.

**Your workflow for each session:**

1. **AUDIT** — Scan all pages, document which sections are "funky" vs "plain/generic"
2. **TASK LIST** — Generate a prioritized remediation list of sections needing redesign
3. **IMPLEMENT** — Redesign sections systematically, page by page
4. **VERIFY** — Light/dark mode token check, BEM compliance, mobile responsiveness, WCAG AA

**Your deliverable for each page:**
1. Rewrite or update the page's `.tsx` file with funky section structure
2. Write or update the page's dedicated `.css` file with all BEM styles, using CSS variables only
3. Ensure `/src/styles/index.css` imports the CSS file (if new)
4. Verify both light and dark mode render correctly with consistent design tokens
5. Confirm mobile responsiveness (especially hero sections and card grids)

---

## 2. OUTPUT FILES (MANDATORY)

### Audit Report
**Path:** `/reports/audits/YYYY-MM-DD-funky-sections-audit.md`

The audit report MUST be saved after the audit phase completes. Use today's date in the filename.

**Format:**
```markdown
# Funky Sections Audit Report

**Date:** YYYY-MM-DD
**Scope:** Full-site section-level audit (all pages/templates)
**Auditor:** AI Assistant

---

## Summary

- **Total pages audited:** X
- **Fully funky (all sections styled):** X
- **Partially funky (hero done, body sections plain):** X
- **Not funky (no unique treatment):** X
- **Total sections needing redesign:** X

---

## Per-Page Audit

### Page: [Page Name] (`/route`)
**Template:** `TemplateName.tsx`
**CSS File:** `template-name.css`
**Hero Status:** FUNKY / PLAIN / MISSING
**Hero Mobile:** PASS / FAIL / NEEDS-CHECK

| Section | Current State | Funky Element? | Dark Mode OK? | Mobile OK? | Priority |
|---------|--------------|----------------|---------------|------------|----------|
| Hero | Parallax + orbs + gradient text | Yes | Yes | Yes | - |
| Services Grid | Plain cards, no glow | No | Yes | Yes | HIGH |
| Process Steps | Basic numbered list | No | No (contrast) | Yes | HIGH |
| CTA | Standard button, no glass | No | Yes | No | MEDIUM |
| FAQ | Accordion, no glow | No | Yes | Yes | LOW |

**Issues:**
- [ ] Process steps: dark mode contrast fails (foreground on neutral-800)
- [ ] CTA: no glassmorphism, no gradient border
```

### Task List
**Path:** `/reports/progress/YYYY-MM-DD-funky-sections-task-list.md`

The task list MUST be saved after the audit, and updated as work progresses.

**Format:**
```markdown
# Funky Sections Task List

**Date:** YYYY-MM-DD
**Generated from:** /reports/audits/YYYY-MM-DD-funky-sections-audit.md
**Total tasks:** X

---

## Priority: CRITICAL (Dark mode / accessibility failures)

- [ ] `ServicesTemplate.tsx` — Process steps: fix dark mode contrast (var(--foreground) on var(--card))
- [ ] `AboutTemplate.tsx` — Stats section: hardcoded hex `#333` found, replace with var(--foreground)

## Priority: HIGH (Major sections with no funky treatment)

- [ ] `ServicesTemplate.tsx` — Services grid: add glow cards (section-cards-glow pattern)
- [ ] `ServicesTemplate.tsx` — Process steps: add numbered gradient circles + connecting lines
- [ ] `AboutTemplate.tsx` — Team grid: add floating hover + glassmorphism card surface
- [ ] `ContactPageTemplate.tsx` — Form section: add section-form-glass treatment

## Priority: MEDIUM (Sections partially styled)

- [ ] `FrontPageTemplate.tsx` — Blog posts grid: upgrade to glow cards
- [ ] `FAQTemplate.tsx` — Accordion: add glow on active item (section-faq-glow)

## Priority: LOW (Minor polish / nice-to-have)

- [ ] `SiteMapTemplate.tsx` — Add subtle gradient dividers between sections
- [ ] `404Template.tsx` — Add floating orbs to error state

---

## Progress Tracking

| Phase | Status | Pages | Sections Fixed |
|-------|--------|-------|----------------|
| Audit | DONE | X/X | - |
| Critical fixes | IN PROGRESS | X/X | X/X |
| High priority | NOT STARTED | X/X | X/X |
| Medium priority | NOT STARTED | X/X | X/X |
| Low priority | NOT STARTED | X/X | X/X |
```

---

## 3. MANDATORY PRE-READ FILES

Before modifying ANY file, you **MUST** read these architecture docs and the specific files you intend to change:

### Architecture Docs (read once per session)
```
/guidelines/Guidelines.md                                     — Master guidelines (CSS-first, BEM, WP alignment)
/guidelines/design-tokens/colors.md                           — Color system and semantic roles
/guidelines/design-tokens/typography.md                       — Typography hierarchy
/guidelines/design-tokens/spacing.md                          — Spacing scale and patterns
/guidelines/design-patterns-modern.md                         — Modern design patterns (fluid typography, glassmorphism, animations, soft borders)
/src/styles/index.css                                         — CSS import manifest (single entry point)
/src/styles/theme-base.css                                    — Spacing, typography, radius, shadows (shared light+dark)
/src/styles/theme-light.css                                   — Light mode semantic color variables
/src/styles/theme-dark.css                                    — Dark mode semantic color variables (.dark selector)
/src/styles/section-styles.css                                — Section style library (hero, cards, CTA, etc.)
```

### Per-Page (read before each page edit)
```
/src/app/components/templates/{TemplateName}.tsx   — The current page implementation
/src/styles/templates/{page-name}.css              — The current page CSS
```

### Reference Pages (already funky — use as patterns)
```
/src/app/components/templates/FrontPageTemplate.tsx     — Homepage (funky hero + sections)
/src/styles/templates/page-front-page.css
```

---

## 4. INFRASTRUCTURE ALREADY BUILT (Do Not Recreate)

### CSS Import System
- **Single entry point:** `/src/styles/index.css` — imported ONLY in `App.tsx` (line 23)
- **No local CSS imports in `.tsx` files** — All CSS goes through `index.css`
- **Exceptions:** vendor `slick-carousel` CSS in `PortfolioSlider.tsx`, Figma Make `preview.tsx`

### Section Style Library
All defined in `/src/styles/section-styles.css`. Key classes:

| Class | Use For |
|-------|---------|
| `section-hero-gradient` | Gradient heroes with parallax + orbs |
| `section-hero-mesh` | Gradient mesh heroes with particles |
| `section-hero-split` | Split-screen hero (content + image) |
| `section-intro-centered` | Centered intro/tagline text |
| `section-cards-glow` | Glow-border card grids |
| `section-cards-floating` | 3D perspective tilt hover cards |
| `section-feature-grid` | Icon + text feature grids |
| `section-icon-circle-grid` | Icon-first grid with gradient circles |
| `section-process-steps` | Numbered step timelines |
| `section-stats-counter` | Large number stat rows |
| `section-checklist-badges` | Badge/checklist grids |
| `section-cta-glass` | Frosted glass CTAs |
| `section-cta-neon` | Pulsing neon border CTA |
| `section-cta-split` | Two-column CTA with image |
| `section-banner-gradient` | Full-width gradient promise banners |
| `section-testimonial-cards` | Quote cards with avatars |
| `section-faq-glow` | Accordion with glow on active |
| `section-newsletter-glow` | Newsletter with neon glow focus |
| `section-bg-dark` | Full-bleed dark section |
| `section-bg-neutral` | Alternating neutral section |
| `section-bg-radial` | Radial spotlight dark bg |
| `section-trust-strip` | Horizontal trust USP strip |
| `section-divider-glow` | Gradient glow line |
| `section-pricing-table` | Tiered pricing table |
| `section-timeline-vertical` | Vertical timeline with glow dots |
| `section-comparison-table` | Side-by-side comparison |
| `section-form-glass` | Frosted glass form container |
| `section-gallery-masonry` | Masonry grid with filter chips |

### Parallax System
- `useHeroParallax` hook for `<img>`-based heroes
- `.hero-parallax-bgimg` CSS class for CSS `background-image` heroes
- **Critical:** `ImageWithFallback` does NOT support `React.forwardRef` — heroes needing `ref={parallaxRef}` must use plain `<img>` tags

### Hero Architecture
All hero sections are **full-viewport** (`min-height: 100vh; min-height: 100dvh`) with the **image as the dominant visual**:
- **Hero section**: `min-height: 100vh`, `display: flex`, `align-items: center`, dark background base
- **Hero image**: full-cover parallax `<img>` via `hero-parallax-bg` class
- **Gradient overlay**: ON TOP of image at `opacity: 0.65` (light) / `0.75` (dark)
- **Content**: `z-index: 2` above the overlay
- **Mobile**: Must stack gracefully, text must remain readable, touch targets 48x48px minimum

---

## 5. STRICT RULES (Non-Negotiable)

### CSS Rules
1. **BEM Only** — `.page-name__element--modifier`. No raw Tailwind utility classes.
2. **WordPress CSS Variables** — `var(--primary)`, `var(--background)`, `var(--foreground)`, `var(--card)`, `var(--border)`, `var(--radius)`, `var(--spacing-*)`, `var(--text-h1)`, `var(--font-primary)`, etc. for ALL values. Reference `/src/styles/theme-base.css`, `theme-light.css`, `theme-dark.css`.
3. **WordPress Utility Classes** — Use `.wp-grid-*-cols`, `.wp-max-w-*`, `.wp-text-center` from `/src/styles/utilities.css`. No Tailwind grid/max-w/text-align classes.
4. **No Margins** — Use `gap` for layout spacing. Only exceptions: `margin: 0 auto` (centering), `margin-top: auto` / `margin-bottom: auto` (flex push).
5. **Dark + Light Mode** — Every `.dark` variant must meet WCAG 2.1 AA contrast (4.5:1). Use `.dark .page-name__element` selectors. Test BOTH modes.
6. **Reduced Motion** — Wrap ALL animations in `@media (prefers-reduced-motion: reduce)` guards.
7. **No `!important`** — Fix specificity issues properly.
8. **No hardcoded hex in CSS** — Use CSS variables from theme files. Exception: page colour identity tokens defined as custom properties at the top of dedicated page CSS files.
9. **No hardcoded font names** — Use `var(--font-primary)` (Lexend) and `var(--font-secondary)` (Manrope) only. Never write `font-family: 'Lexend'`.
10. **No hardcoded font sizes** — Use `var(--text-h1)` through `var(--text-h6)`, `var(--text-base)`, `var(--text-lead)`, `var(--text-small)`, etc.

### React Rules
1. **`<Layout>` wrapper** — Every page renders inside `<Layout>`. Never render Header/Footer directly.
2. **`<Container>` for width** — Use the `Container` component for max-width constraint. Never set max-width on sections.
3. **Plain `<img>` for parallax heroes** — Do NOT use `ImageWithFallback` when `ref={parallaxRef}` is needed.
4. **`ImageWithFallback` for all other images** — Import from `../../components/figma/ImageWithFallback` (verify path from page location).
5. **`unsplash_tool` for photos** — Never hardcode Unsplash URLs. Always call the tool.
6. **Lucide icons only** — No image-based icons. All icons must be Lucide React components.
7. **`useHeroParallax` hook** — Import and use for any `<img>`-based hero background.
8. **Unique `key` props** — Every `.map()` must use a unique stable key.
9. **No `console.log`** — Zero console output in production components.
10. **No local CSS imports** — Components do NOT import their own CSS. All CSS goes through `/src/styles/index.css`.

### File Rules
1. **CSS file location:** `/src/styles/templates/{page-name}.css` for page-specific styles. If the file already exists under `/src/styles/pages/`, keep it there.
2. **CSS import:** New CSS files must be added to `/src/styles/index.css` in the appropriate section.
3. **Never modify protected files:** `/src/app/components/figma/ImageWithFallback.tsx` is protected.
4. **Re-read before editing:** ALWAYS read the current file content before modifying. Files have been manually edited across sessions.
5. **Audit output:** ALWAYS save to `/reports/audits/` with date-prefixed filename.
6. **Task list output:** ALWAYS save to `/reports/progress/` with date-prefixed filename.

---

## 6. FUNKY SECTION ANATOMY

### What Makes a Section "Funky"

A section qualifies as "funky" when it has AT LEAST TWO of these treatments:

1. **Glow borders** — Gradient border achieved via `background: linear-gradient(...)` on a wrapper with `padding: 1px` and inner element with solid background
2. **Glassmorphism surfaces** — `backdrop-filter: blur(12px)`, semi-transparent background, subtle border
3. **Floating orbs** — Blurred gradient circles with `position: absolute`, animated with `@keyframes float`
4. **Gradient text** — `background: linear-gradient(...)` + `background-clip: text` + `color: transparent`
5. **Neon accents** — `box-shadow: 0 0 20px var(--primary)` or similar glow effects
6. **Hover lift** — `transform: translateY(-4px)` on hover with smooth transition
7. **Icon gradient circles** — Icons inside gradient-bordered circular containers
8. **Numbered gradient badges** — Step numbers with gradient backgrounds
9. **Alternating section backgrounds** — Sections alternate between `var(--background)` and `var(--card)` or darker treatments
10. **Animated dividers** — Gradient lines between sections instead of plain borders

### Section-Level BEM Structure

Every section on a page follows this BEM pattern:

```css
/* Block: the page */
.page-name { }

/* Element: a section within the page */
.page-name__section-name { }

/* Element: items within the section */
.page-name__section-name-grid { }
.page-name__section-name-card { }
.page-name__section-name-card-inner { }
.page-name__section-name-card-glow { }
.page-name__section-name-title { }
.page-name__section-name-description { }

/* Modifier: section variants */
.page-name__section-name--dark { }
.page-name__section-name--alt { }

/* Dark mode */
.dark .page-name__section-name { }
.dark .page-name__section-name-card { }
```

### Standard Section Template (TSX)

```tsx
{/* Section: Feature Grid */}
<section className="page-name__features">
  <Container>
    <div className="page-name__features-header">
      <h2 className="page-name__features-title">Section Title</h2>
      <p className="page-name__features-description">Section description text.</p>
    </div>
    <div className="page-name__features-grid">
      {features.map((feature) => (
        <div key={feature.id} className="page-name__features-card">
          <div className="page-name__features-card-glow" />
          <div className="page-name__features-card-inner">
            <div className="page-name__features-card-icon">
              <feature.icon size={24} />
            </div>
            <h3 className="page-name__features-card-title">{feature.title}</h3>
            <p className="page-name__features-card-text">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>
```

### Standard Section Template (CSS)

```css
/* ----------------------------------------
   Features Section
   ---------------------------------------- */
.page-name__features {
  padding: var(--spacing-16) 0;
  background: var(--background);
  position: relative;
  overflow: hidden;
}

.dark .page-name__features {
  background: var(--card);
}

.page-name__features-header {
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: var(--spacing-12);
}

.page-name__features-title {
  font-family: var(--font-primary);
  font-size: var(--text-h2);
  color: var(--foreground);
}

.page-name__features-description {
  font-family: var(--font-secondary);
  font-size: var(--text-lead);
  color: var(--muted-foreground);
}

.page-name__features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-8);
}

@media (max-width: 1023px) {
  .page-name__features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .page-name__features-grid {
    grid-template-columns: 1fr;
  }
}

/* Glow Card */
.page-name__features-card {
  position: relative;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--primary), var(--accent));
  padding: 1px;
}

.page-name__features-card-inner {
  background: var(--card);
  border-radius: calc(var(--radius-lg) - 1px);
  padding: var(--spacing-8);
  height: 100%;
}

.dark .page-name__features-card-inner {
  background: var(--card);
}

.page-name__features-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.dark .page-name__features-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.page-name__features-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-foreground);
}

.page-name__features-card-title {
  font-family: var(--font-primary);
  font-size: var(--text-h4);
  color: var(--foreground);
  padding-top: var(--spacing-4);
}

.page-name__features-card-text {
  font-family: var(--font-secondary);
  font-size: var(--text-base);
  color: var(--muted-foreground);
  padding-top: var(--spacing-2);
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .page-name__features-card {
    transition: none;
  }
  .page-name__features-card:hover {
    transform: none;
  }
}
```

---

## 7. DESIGN TOKEN CONSISTENCY CHECKLIST

For EVERY section being redesigned, verify these tokens work in BOTH light and dark mode:

### Colors (must resolve differently per mode)
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `var(--background)` | `#FFFFFF` | `#090909` | Page/section backgrounds |
| `var(--foreground)` | `#090909` | `#FFFFFF` | Primary text |
| `var(--card)` | `#F9FAFB` | `#1E1E1E` | Card surfaces, alternating sections |
| `var(--card-foreground)` | inherits | inherits | Text on cards |
| `var(--muted)` | light gray | dark gray | Subtle backgrounds |
| `var(--muted-foreground)` | medium gray | medium gray | Secondary text, descriptions |
| `var(--border)` | `var(--border)` | `var(--border)` | Borders, dividers |
| `var(--primary)` | brand green | brand green | Primary actions, accents |
| `var(--primary-foreground)` | white | white | Text on primary bg |
| `var(--accent)` | soft accent | soft accent | Secondary accents |
| `var(--destructive)` | red | red | Error states |

### Typography (same both modes)
| Token | Value | Usage |
|-------|-------|-------|
| `var(--font-primary)` | Lexend | Headings, body, UI elements |
| `var(--font-secondary)` | Manrope | Small text, captions, metadata |
| `var(--text-h1)` | clamp(32px..64px) | Page titles |
| `var(--text-h2)` | clamp(28px..48px) | Section headings |
| `var(--text-h3)` | clamp(24px..36px) | Subsection headings |
| `var(--text-h4)` | clamp(20px..28px) | Card titles |
| `var(--text-base)` | clamp(15px..18px) | Body text |
| `var(--text-lead)` | clamp(18px..22px) | Hero subtitles, intros |
| `var(--text-small)` | 14px | Captions, metadata |

### Spacing (same both modes)
| Token | Value | Usage |
|-------|-------|-------|
| `var(--spacing-2)` | 8px | Tight gaps |
| `var(--spacing-4)` | 16px | Standard gaps |
| `var(--spacing-6)` | 24px | Section padding (sm) |
| `var(--spacing-8)` | 32px | Card padding, grid gaps |
| `var(--spacing-12)` | 48px | Section spacing |
| `var(--spacing-16)` | 64px | Large section padding |
| `var(--spacing-20)` | 80px | Hero padding |

### Borders & Radius (same both modes)
| Token | Value | Usage |
|-------|-------|-------|
| `var(--radius)` | 4px | Default border radius |
| `var(--radius-md)` | 6px | Medium radius |
| `var(--radius-lg)` | 8px | Card radius |
| `var(--radius-xl)` | 12px | Large container radius |
| `var(--radius-full)` | 9999px | Pill/circle shapes |

---

## 8. AUDIT PROCEDURE

### Step 1: Full-Site Scan

For EACH template file in `/src/app/components/templates/`:

1. **Read the `.tsx` file** — Identify every `<section>` or `<Section>` element
2. **Read the `.css` file** — Check if BEM classes exist, if CSS variables are used, if dark mode variants exist
3. **Score each section** using this rubric:

| Score | Meaning | Criteria |
|-------|---------|----------|
| **FUNKY** | Fully styled | Has 2+ funky elements (glow, glass, gradient text, orbs, hover lift) |
| **PARTIAL** | Some styling | Has 1 funky element OR uses a section-style class but needs more |
| **PLAIN** | Generic | No funky treatment — basic layout with standard cards/text |
| **BROKEN** | Issues found | Dark mode fails, hardcoded values, missing CSS, accessibility issues |

### Step 2: Dark Mode Verification

For each section, verify:
- [ ] All text colors use semantic variables (`var(--foreground)`, `var(--muted-foreground)`)
- [ ] All backgrounds use semantic variables (`var(--background)`, `var(--card)`)
- [ ] Dark mode selectors exist (`.dark .page-name__section`)
- [ ] No hardcoded hex colors in CSS (except custom properties at file top)
- [ ] Gradient overlays adjust opacity for dark mode
- [ ] Contrast ratio meets WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)

### Step 3: BEM Compliance Check

For each section, verify:
- [ ] All classes follow `.page-name__element--modifier` pattern
- [ ] No raw Tailwind utility classes (no `flex`, `grid`, `p-4`, `text-center`, etc.)
- [ ] WordPress utility classes used where appropriate (`.wp-grid-*-cols`, `.wp-max-w-*`, `.wp-text-center`)
- [ ] No inline `style` attributes except for truly dynamic values

### Step 4: Mobile Responsiveness Check

For each section, verify:
- [ ] Hero sections: content readable on 320px viewport
- [ ] Card grids: collapse from multi-column to single-column below 768px
- [ ] Touch targets: all buttons/links are 48x48px minimum on mobile
- [ ] Text: no horizontal overflow on mobile
- [ ] Images: responsive sizing with `max-width: 100%`

### Step 5: Save Outputs

After completing the audit:
1. Save the audit report to `/reports/audits/YYYY-MM-DD-funky-sections-audit.md`
2. Save the task list to `/reports/progress/YYYY-MM-DD-funky-sections-task-list.md`
3. Announce the totals and ask for approval to begin implementation

---

## 9. IMPLEMENTATION WORKFLOW

### Per-Page Redesign Sequence

For each page being redesigned, follow this exact sequence:

#### Step 1: Read
```
Read the audit findings for this page (from the audit report)
Read the current .tsx file
Read the current .css file
Read FrontPageTemplate.tsx for reference patterns
```

#### Step 2: Plan
```
Determine for each section:
  - Which funky treatment to apply (glow cards, glassmorphism, gradient text, etc.)
  - Which section-style class to use vs custom BEM
  - Dark mode adjustments needed
  - Mobile breakpoint behaviour
  - Whether section needs alternating background (var(--background) vs var(--card))
```

#### Step 3: Fetch Assets (if needed)
```
Call unsplash_tool for any new section images needed
Verify import paths for ImageWithFallback
```

#### Step 4: Write/Update CSS
```
Update the .css file with:
  - BEM classes for every section element
  - All values using CSS variables from theme-base/light/dark
  - Font family: var(--font-primary) or var(--font-secondary) ONLY
  - Font sizes: var(--text-h1) through var(--text-small) ONLY
  - Spacing: var(--spacing-*) ONLY
  - Colors: var(--foreground), var(--background), var(--card), etc. ONLY
  - Border radius: var(--radius-*) ONLY
  - .dark variants for every colour-dependent rule
  - @media queries for responsive (min-width: 768px), (min-width: 1024px)
  - @media (prefers-reduced-motion: reduce) guards on animations
```

#### Step 5: Write/Update TSX
```
Update the page component with:
  - BEM class names on all elements (no Tailwind classes)
  - Container component for max-width
  - Lucide icons for all icons
  - Unique keys on all .map() calls
  - Data-driven content (import from /src/app/data/)
  - No local CSS imports
```

#### Step 6: Update Infrastructure
```
If new CSS file: add @import to /src/styles/index.css
Verify the page renders in both light and dark mode
```

#### Step 7: Verify & Update Task List
```
Confirm:
  [ ] BEM naming consistent
  [ ] No hardcoded hex (except custom properties at top)
  [ ] No hardcoded fonts (only var(--font-primary) / var(--font-secondary))
  [ ] No hardcoded font sizes (only var(--text-*))
  [ ] No hardcoded spacing (only var(--spacing-*))
  [ ] No margins (only gap + padding)
  [ ] Dark mode variants present and tested
  [ ] Reduced motion guards on animations
  [ ] Mobile responsive (320px, 768px, 1024px breakpoints)
  [ ] Hero section mobile-friendly (readable text, no overflow)
  [ ] WCAG AA contrast compliance
  [ ] All images from unsplash_tool (no hardcoded URLs)

Update the task list: mark completed items as [x]
```

---

## 10. PHASE EXECUTION COMMANDS

Issue these commands to direct work:

### `AUDIT: Full Site`
Runs the complete audit across all pages. Outputs to `/reports/audits/` and `/reports/progress/`.

### `PHASE 3: About Pages`
Pages: `/about`, `/about/team`, `/about/process`, `/about/culture`, `/about/history`, `/about/careers`

### `PHASE 4: Services Pages`
Pages: `/services`, `/services/discovery`, `/services/design`, `/services/development`, `/services/content`, `/services/content-strategy`, `/services/content-collection`, `/services/content-audit`, `/services/security`, `/services/migrations`, `/services/support`, `/services/newsletter`, `/services/email-marketing`, `/services/training`, `/services/hosting`, `/services/performance`, `/services/seo`, `/services/accessibility`, `/services/ai-engine-optimisation`, `/services/answer-engine-optimisation`

### `PHASE 5: Solutions Pages`
Pages: `/solutions`, `/solutions/wordpress`, `/solutions/ai`, `/solutions/ecommerce`, `/solutions/redesign`, `/solutions/tour-operator-design`

### `PHASE 6: Content Archives`
Pages: `/blog`, `/blog/:slug`, `/portfolio`, `/portfolio/:slug`, `/videos`, `/podcasts`, `/testimonials`

### `PHASE 7: Utility & Info Pages`
Pages: `/faq`, `/contact`, `/pricing`, `/hosting`, `/guarantees`, `/why-choose-us`, `/roi-calculator`, `/sitemap`, `/404`

### `PHASE 8: WooCommerce & Shop`
Pages: `/shop`, `/cart`, `/checkout`, `/product/:slug`

### `PHASE 9: Dev Tools & Internal`
Pages: `/dev-tools/*`, `/style-guide`, `/design-tokens`, `/component-showcase`

### `PHASE 10: Final Polish & Verification`
Full-site re-audit, dead CSS cleanup, orphan file removal, final dark/light mode verification.

### Single Page Command
Target a single page:
```
REDESIGN: /services/design
```

---

## 11. COLOUR IDENTITY REFERENCE

Each page may define a unique colour identity via CSS custom properties at the top of its CSS file. These are the ONLY acceptable hardcoded hex values.

```css
/* Example: page colour identity (top of page CSS file) */
.page-services {
  --page-primary: #047857;     /* Emerald */
  --page-secondary: #f59e0b;   /* Gold */
  --page-accent: #7c3aed;      /* Purple */
}
```

These page-level tokens can then be used in gradients and accent treatments within that page's sections:

```css
.page-services__hero-overlay {
  background: linear-gradient(
    135deg,
    var(--page-primary) 0%,
    var(--page-secondary) 50%,
    var(--page-accent) 100%
  );
  opacity: 0.65;
}

.dark .page-services__hero-overlay {
  opacity: 0.75;
}
```

---

## 12. MOBILE-FIRST HERO CHECKLIST

Since hero sections have been praised as excellent, ALWAYS verify they remain mobile-friendly when touching a page:

- [ ] **Viewport height:** `min-height: 100vh` with `min-height: 100dvh` fallback
- [ ] **Text sizing:** Uses `var(--text-h1)` which includes `clamp()` for fluid scaling (32px mobile → 64px desktop)
- [ ] **Subtitle:** Uses `var(--text-lead)` with `clamp()` (18px mobile → 22px desktop)
- [ ] **Content padding:** Sufficient padding on mobile (`var(--spacing-6)` minimum horizontal)
- [ ] **Orbs:** Hidden or reduced on mobile (`display: none` below 768px or `opacity: 0.3`)
- [ ] **Badge:** Readable on small screens, doesn't wrap awkwardly
- [ ] **CTA buttons:** 48x48px minimum touch target, full-width on mobile if needed
- [ ] **Image:** Covers viewport on all sizes, no letterboxing
- [ ] **Overlay:** Maintains readable contrast on all viewport sizes
- [ ] **Grid overlay:** Hidden on mobile if present

---

## 13. TIPS FOR EFFICIENT EXECUTION

1. **Audit first, implement second** — Never redesign without understanding the current state.
2. **Batch similar pages** — Service pages share section anatomy; do them together.
3. **Copy from FrontPageTemplate** — It's the gold standard. Copy structure, swap data/colours.
4. **Use section-style classes** — Don't reinvent patterns. The section-style classes handle most layouts.
5. **CSS custom properties at the top** — Define page colours once as `--page-primary` etc., reference everywhere.
6. **Dark mode = adjust opacity + swap neutrals** — Hero overlays: increase opacity. Card surfaces: swap `var(--background)` → `var(--card)`. Borders: same variable resolves differently per mode.
7. **Group Unsplash calls** — When a page needs 3+ images, call `unsplash_tool` for all of them in parallel.
8. **Test at 320px** — The most constrained viewport. If it works there, it works everywhere.
9. **Alternating sections** — Use `var(--background)` and `var(--card)` alternately for visual rhythm.
10. **Save progress frequently** — Update the task list after each page is complete.

---

## 14. START COMMAND

To begin, issue one of:

```
AUDIT: Full Site
```
or
```
PHASE 3: About Pages
```
or
```
REDESIGN: /services/design
```

The assistant will read the required files, run the audit (if applicable), save outputs to `/reports/`, and implement the funky redesign for the specified pages.

---

## 15. PRE-REQUISITE AUDITS (Phase 0)

**CRITICAL:** These audits produce task lists that feed into the redesign work. Each audit has a corresponding task file in `/tasks/`.

### Audit Status Tracker

| # | Audit Name | Report Output | Task Output | Status |
|---|-----------|---------------|-------------|--------|
| A1 | Guidelines Freshness | `/reports/audits/YYYY-MM-DD-guidelines-freshness-audit.md` | `/tasks/guidelines-remediation.md` | NOT STARTED |
| A2 | Data & Types Content Model | `/reports/audits/YYYY-MM-DD-data-types-audit.md` | `/tasks/data-types-remediation.md` | NOT STARTED |
| A3 | Reports Cleanup | `/reports/audits/YYYY-MM-DD-reports-cleanup-audit.md` | `/tasks/reports-cleanup.md` | NOT STARTED |
| A4 | Blocks Coverage | `/reports/audits/YYYY-MM-DD-blocks-coverage-audit.md` | `/tasks/blocks-guidelines-gaps.md` | NOT STARTED |
| A5 | Patterns Coverage | `/reports/audits/YYYY-MM-DD-patterns-coverage-audit.md` | `/tasks/patterns-guidelines-gaps.md` | NOT STARTED |
| A6 | Parts Coverage | `/reports/audits/YYYY-MM-DD-parts-coverage-audit.md` | `/tasks/parts-guidelines-gaps.md` | NOT STARTED |
| A7 | Templates Completeness | `/reports/audits/YYYY-MM-DD-templates-audit.md` | `/tasks/templates-remediation.md` | NOT STARTED |
| A8 | CSS Architecture Deep | `/reports/audits/YYYY-MM-DD-css-architecture-audit.md` | `/tasks/css-architecture-remediation.md` | NOT STARTED |

### Audit Execution Order

```
Parallel Group 1 (no dependencies):
  A1: Guidelines Freshness
  A2: Data & Types Content Model
  A3: Reports Cleanup

Parallel Group 2 (no dependencies):
  A4: Blocks Coverage
  A5: Patterns Coverage
  A6: Parts Coverage

Sequential (depends on Group 1 & 2):
  A7: Templates Completeness (needs A4-A6 for cross-reference)
  A8: CSS Architecture Deep (needs full picture)
```

### Audit Commands

```
AUDIT A1: Guidelines Freshness
AUDIT A2: Data & Types Content Model
AUDIT A3: Reports Cleanup
AUDIT A4: Blocks Coverage
AUDIT A5: Patterns Coverage
AUDIT A6: Parts Coverage
AUDIT A7: Templates Completeness
AUDIT A8: CSS Architecture Deep
AUDIT ALL: Run all audits sequentially
```

---

## 16. FUNKY LSX DESIGN SYSTEM

### 16.1 Design Philosophy

The "Funky LSX" aesthetic is a **premium WordPress agency** visual language that uses neon accents, glassmorphism, and subtle kinetic motion to create a memorable brand experience. Unlike generic agency sites, every section has a unique visual signature.

**Core Principles:**

| Principle | Description | Implementation |
|-----------|-------------|----------------|
| **Content First** | Service descriptions and case studies remain the hero; funky elements enhance, not distract | Glow effects frame content, not obscure it |
| **Neon on Neutral Canvas** | The neon palette (blue primary, cyan accent) serves as accent — NOT the dominant colour | Neon used for borders/glows/badges, NOT body text |
| **Kinetic Sections** | Each section has at least 2 unique visual treatments to create rhythm | Glassmorphism, gradient text, glow borders, animated stripes |
| **Mode Duality** | Light mode uses tinted blue accents, dark mode showcases bright cyan neon | Same structure, different atmosphere |
| **Accessible Neon** | All neon colours meet AA contrast for their usage context | Neon on dark bg ✓, neon as glow only ✓, never as body text |

### 16.2 Colour Token System

These are defined in `/src/styles/theme-light.css` and `/src/styles/theme-dark.css`:

#### Semantic Colour Pairs (Light → Dark)

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary` | `#1E6AFF` (Bright Blue) | `#7BE7FF` (Bright Cyan) | Buttons, links, neon glow |
| `--primary-foreground` | `#FFFFFF` | `#0E3278` | Text on primary |
| `--accent` | `#7BE7FF` (Light Cyan) | inverted | Gradient stops, badges |
| `--neon-color` | `#1E6AFF` | `#7BE7FF` | Glow shadows, orb colors |
| `--background` | `#FFFFFF` | `#090909` | Page backgrounds |
| `--foreground` | `#090909` | `#FFFFFF` | Primary text |
| `--card` | `#F9FAFB` | `#1E1E1E` | Card surfaces |
| `--muted-foreground` | `#565656` | light gray | Secondary text |
| `--border-soft` | `#00000014` (8% black) | `rgba(255,255,255,0.1)` | Subtle card borders |
| `--success` | `#16A34A` | `#16A34A` | Check icons, badges |
| `--warning` | `#F59E0B` | `#F59E0B` | Warning states |
| `--destructive` | `#CC0000` | `#CC0000` | Error states |

#### Neon & Glow Tokens (from `theme-base.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-neon` | `0 0 8px var(--neon-color), 0 0 20px mix(neon, 40%)` | Button/badge glow |
| `--shadow-neon-intense` | `0 0 10px neon, 0 0 30px mix(50%), 0 0 60px mix(20%)` | Hero accents |
| `--shadow-glow` | `0 0 15px mix(--primary, 30%)` | Card hover |
| `--shadow-glow-sm` | `0 0 8px mix(--primary, 20%)` | Subtle glow |
| `--shadow-glow-lg` | `0 0 30px mix(--primary, 40%)` | Featured cards |

#### Overlay & Glass Tokens (from `theme-base.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--overlay-white-soft` | `rgba(255,255,255,0.1)` | Dark bg glass |
| `--overlay-white-15` | `rgba(255,255,255,0.15)` | Badge backgrounds |
| `--overlay-white-subtle` | `rgba(255,255,255,0.2)` | Stats badges |
| `--overlay-extra-light` | `rgba(0,0,0,0.1)` | Light bg glass |

### 16.3 Funky Section Treatments Reference

Every section MUST have AT LEAST TWO of these treatments:

| # | Treatment | CSS Pattern | When to Use |
|---|-----------|-------------|-------------|
| 1 | **Glassmorphism Cards** | `background: color-mix(in srgb, var(--card) 65%, transparent); backdrop-filter: blur(10px);` | All card types |
| 2 | **Gradient Stat Values** | `background: linear-gradient(135deg, var(--neon-color), var(--accent)); -webkit-background-clip: text;` | Numbers, prices, percentages |
| 3 | **Neon Glow Icon Wrappers** | `border: 1px solid mix(neon, 20%); box-shadow: 0 0 12px mix(neon, 15%);` | Feature icons |
| 4 | **Animated Gradient Stripe** | `::before { background: linear-gradient(90deg, primary, accent, primary); background-size: 200%; animation: shimmer 3s infinite; }` | Card top borders |
| 5 | **Gradient Section Titles** | `::after { background: linear-gradient(90deg, transparent, neon, accent, transparent); height: 2px; }` | H2 section headings |
| 6 | **Mesh Grid Overlay** | `background-image: linear-gradient(mix(fg, 4%) 1px, transparent 1px), ...;` | Stats, hero backgrounds |
| 7 | **Floating Orbs** | `position: absolute; background: radial-gradient(neon, transparent); filter: blur(80px);` | Hero, CTA backgrounds |
| 8 | **Hover Lift** | `transform: translateY(-4px); box-shadow: 0 0 24px mix(neon, 12%);` | All interactive cards |
| 9 | **Gradient Numbered Badges** | `background: linear-gradient(135deg, neon, accent); box-shadow: 0 0 16px mix(neon, 30%);` | Process steps |
| 10 | **Neon Border on Hover** | `border-color: mix(neon, 45%); box-shadow: 0 0 24px mix(neon, 15%);` | All cards on hover |

### 16.4 Light vs Dark Mode Strategy

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Card surface** | `color-mix(in srgb, var(--card) 65%, transparent)` | `color-mix(in srgb, var(--foreground) 5%, transparent)` |
| **Card border** | `color-mix(in srgb, var(--neon-color) 12%, transparent)` | `color-mix(in srgb, var(--foreground) 10%, transparent)` |
| **Card hover border** | `color-mix(neon, 45%)` | `color-mix(neon, 50%)` |
| **Section alt bg** | `color-mix(in srgb, var(--card) 50%, var(--background))` | `color-mix(in srgb, var(--foreground) 3%, var(--background))` |
| **Mesh grid lines** | `color-mix(in srgb, var(--primary) 4%, transparent)` | `color-mix(in srgb, var(--neon-color) 6%, transparent)` |
| **Step number glow** | standard | `box-shadow: 0 0 20px mix(neon, 40%)` — brighter |
| **Badge glow** | standard | `box-shadow: 0 0 12px mix(success, 25%)` — brighter |
| **Hero gradient bg** | `mix(primary, 12%)` | `mix(neon, 5%)` — more subtle |

### 16.5 Animation Tokens

All from `/src/styles/theme-base.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | `150ms` | Micro-interactions (focus) |
| `--transition-base` | `200ms` | Standard transitions |
| `--transition-slow` | `300ms` | Card hover, section transitions |
| `--transition-slower` | `500ms` | Page-level animations |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Entry animations |

**ALL animations MUST be wrapped in `@media (prefers-reduced-motion: reduce)` guards.**

---

## 17. PER-COMPONENT BREAKDOWN STRUCTURE

Each page being redesigned MUST have a component guideline document that defines its section structure, blocks/patterns/parts used, data sources, and funky treatments.

### Template Guideline Format

```markdown
# PageName Template — Component Guideline

**File:** `/src/app/components/templates/PageNameTemplate.tsx`
**CSS:** `/src/styles/templates/page-name.css`
**Route:** `/route-path`
**BEM Block:** `.page-name`
**Page Archetype:** Content Hub / Single Detail / Utility Page / Editorial Listing

---

## Page Structure

### Section 1: Hero
- **BEM:** `.page-name__hero`
- **Pattern Used:** `FunkyHero` (mesh grid + orb + badge)
- **Blocks Used:** Container, Button
- **Parts Used:** BreadcrumbPart (above hero)
- **Data Source:** `pageNameHero` from `/src/app/data/page-name.ts`
- **Funky Treatments:**
  1. Mesh grid overlay (`.page-name__hero-grid`)
  2. Floating gradient orb (`.page-name__hero-orb`)
  3. Gradient text on title highlight (`.page-name__hero-title-highlight`)
  4. Neon badge (`.page-name__hero-badge`)
- **Dark Mode:** Hero gradient adjusts from 12% → 5% neon mix
- **Mobile:** Orbs reduced opacity, content stacks, badge wraps gracefully

### Section 2: Stats
- **BEM:** `.page-name__stats`
- **Pattern Used:** Custom stat cards (glassmorphism)
- **Blocks Used:** Container, ScrollReveal
- **Data Source:** `pageNameStats` from data file
- **Funky Treatments:**
  1. Glassmorphism cards (`backdrop-filter: blur(12px)`)
  2. Gradient stat values (`background-clip: text`)
  3. Mesh grid behind stats
- **Dark Mode:** Card bg → `mix(foreground, 5%, transparent)`
- **Mobile:** 1-column stack

### Section N: ...
[Continue for every section on the page]

---

## Component Dependency Map

```
PageNameTemplate
├── parts/BreadcrumbPart
├── common/Container
├── hooks/useScrollReveal → ScrollReveal
├── blocks/design/Buttons → Button
├── patterns/FunkyCTA
├── patterns/FAQSection
├── patterns/TestimonialGrid
└── patterns/SocialProof
```

## Data Sources

| Import | File | Exports Used |
|--------|------|-------------|
| `pageNameHero` | `/src/app/data/page-name.ts` | Hero title, subtitle, badge, CTA |
| `pageNameStats` | `/src/app/data/page-name.ts` | Stat value/label pairs |
| `aboutFAQs` | `/src/app/data/faqs.ts` | FAQ question/answer array |

## Funky Score

| Section | Treatments | Score |
|---------|-----------|-------|
| Hero | mesh + orb + gradient text + badge | FUNKY |
| Stats | glassmorphism + gradient values + mesh | FUNKY |
| Features | glassmorphism + stripe + icon glow | FUNKY |
| Process | glassmorphism + gradient badges | FUNKY |
| **Overall** | **8 treatments across 4 sections** | **FUNKY** |
```

---

## 18. TASK FILE REFERENCES

All audit-generated task files live in `/tasks/`:

| File | Source Audit | Scope |
|------|------------|-------|
| `/tasks/guidelines-remediation.md` | A1 | Outdated/conflicting guideline files |
| `/tasks/data-types-remediation.md` | A2 | Orphan data files, duplicate data, type gaps |
| `/tasks/reports-cleanup.md` | A3 | Old reports, naming violations, deduplication |
| `/tasks/blocks-guidelines-gaps.md` | A4 | Block components missing guidelines |
| `/tasks/patterns-guidelines-gaps.md` | A5 | Pattern components missing guidelines (45+ gaps) |
| `/tasks/parts-guidelines-gaps.md` | A6 | Part components needing guideline updates |
| `/tasks/templates-remediation.md` | A7 | Template audit, per-template component guidelines |
| `/tasks/css-architecture-remediation.md` | A8 | Token compliance, dark mode, dead CSS, dedup |

### Existing Task Files (Pre-Audit)

| File | Status | Notes |
|------|--------|-------|
| `/tasks/audit-css-and-data-integrity.md` | Superseded by A8 | CSS architecture remediation |
| `/tasks/migration-plan.md` | Reference | Template migration planning |
| `/tasks/phase-8-template-migration.md` | Reference | Phase 8 migration details |
| `/tasks/planning-guidelines.md` | Reference | Planning process |
| `/tasks/task-list.md` | In Progress | Cross-cutting task list |

---

## 19. QUICK TOKEN REFERENCE CARD

```css
/* ── COLOURS (semantic — resolve differently per mode) ── */
var(--background)                   /* #FFF / #090909 */
var(--foreground)                   /* #090909 / #FFF */
var(--card)                         /* #F9FAFB / #1E1E1E */
var(--muted-foreground)             /* #565656 / lighter */
var(--primary)                      /* #1E6AFF / #7BE7FF */
var(--primary-foreground)           /* #FFF / #0E3278 */
var(--accent)                       /* #7BE7FF / inverted */
var(--neon-color)                   /* #1E6AFF / #7BE7FF */
var(--border)                       /* #757575 */
var(--border-soft)                  /* 8% black / 10% white */
var(--success)                      /* #16A34A */

/* ── TYPOGRAPHY ── */
var(--font-primary)                 /* Lexend */
var(--font-secondary)               /* Manrope */
var(--text-h1)                      /* clamp(2.5rem, ..., 4rem) */
var(--text-h2)                      /* clamp(2rem, ..., 3rem) */
var(--text-h3)                      /* clamp(1.5rem, ..., 2.25rem) */
var(--text-h4)                      /* clamp(1.25rem, ..., 1.75rem) */
var(--text-base)                    /* 1rem (16px) */
var(--text-lead)                    /* 1.25rem (20px) */
var(--text-xl)                      /* 1.25rem (20px) */
var(--text-lg)                      /* 1.125rem (18px) */
var(--text-sm) / var(--text-small)  /* 0.875rem (14px) */
var(--text-xs)                      /* 0.75rem (12px) */

/* ── SPACING ── */
var(--spacing-1)    /* 4px */   var(--spacing-8)    /* 32px */
var(--spacing-2)    /* 8px */   var(--spacing-10)   /* 40px */
var(--spacing-3)    /* 12px */  var(--spacing-12)   /* 48px */
var(--spacing-4)    /* 16px */  var(--spacing-16)   /* 64px */
var(--spacing-5)    /* 20px */  var(--spacing-20)   /* 80px */
var(--spacing-6)    /* 24px */  var(--spacing-24)   /* 96px */

/* ── RADIUS ── */
var(--radius)       /* 4px */   var(--radius-xl)    /* 12px */
var(--radius-md)    /* 6px */   var(--radius-2xl)   /* 16px */
var(--radius-lg)    /* 8px */   var(--radius-full)  /* 9999px */

/* ── SHADOWS ── */
var(--shadow-sm)                    /* Subtle shadow */
var(--shadow-md)                    /* Standard shadow */
var(--shadow-lg)                    /* Large shadow */
var(--shadow-neon)                  /* Neon glow */
var(--shadow-neon-intense)          /* Intense neon glow */
var(--shadow-glow)                  /* Primary glow */
var(--shadow-glow-sm)               /* Small primary glow */

/* ── TRANSITIONS ── */
var(--transition-fast)   /* 150ms */
var(--transition-base)   /* 200ms */
var(--transition-slow)   /* 300ms */
var(--transition-slower) /* 500ms */

/* ── FONT WEIGHTS ── */
var(--font-weight-regular)          /* 400 */
var(--font-weight-medium)           /* 500 */
var(--font-weight-semibold)         /* 600 */
var(--font-weight-bold)             /* 700 */
var(--font-weight-black)            /* 800 */

/* ── LINE HEIGHTS ── */
var(--line-height-tight)            /* 1.1 */
var(--line-height-snug)             /* 1.25 */
var(--line-height-normal)           /* 1.5 */
var(--line-height-relaxed)          /* 1.75 */

/* ── LETTER SPACING ── */
var(--letter-spacing-tight)         /* -0.025em */
var(--letter-spacing-normal)        /* 0 */
var(--letter-spacing-wide)          /* 0.025em */
var(--letter-spacing-wider)         /* 0.05em */
```

---

## 20. PROJECT FILE STRUCTURE REFERENCE

```
/src/
  /app/
    App.tsx                          — Main app entry (imports index.css)
    /components/
      /templates/                    — 110+ page template components
      /patterns/                     — 76+ reusable pattern components
      /parts/                        — 3 template parts (Header, Footer, Breadcrumbs)
      /blocks/                       — WordPress block components (9 subdirs)
      /common/                       — Shared components (Container, Section, etc.)
      /figma/                        — Protected Figma components
    /data/                           — 90+ centralized data files
    /hooks/                          — Custom hooks (useScrollReveal, useHeroParallax, etc.)
  /styles/
    index.css                        — CSS import manifest (single entry point)
    theme-base.css                   — Typography, spacing, radius, shadows
    theme-light.css                  — Light mode semantic colors
    theme-dark.css                   — Dark mode semantic colors (.dark)
    theme-variables.css              — WordPress preset compatibility tokens
    section-styles.css               — Section style utility classes
    utilities.css                    — WordPress utility classes (.wp-*)
    responsive.css                   — Responsive utilities
    /templates/                      — 90+ template-specific CSS files
    /patterns/                       — 63+ pattern-specific CSS files
    /blocks/                         — Block-specific CSS files
    /components/                     — Component CSS files

/guidelines/                         — Documentation (100+ files)
/reports/                            — Audit reports and progress tracking
/tasks/                              — Remediation task lists (8 files)
/prompts/                            — AI prompt files (this file)
```

---

## 21. VERIFICATION CHECKLISTS

### Per-Section Checklist

For EVERY section being redesigned:

**Visual:**
- [ ] Has at least 2 funky treatments (glassmorphism, gradient text, glow, mesh, stripe, orbs, lift, icon glow, gradient badges, neon border)
- [ ] Background alternates with adjacent sections
- [ ] Dark mode renders correctly
- [ ] Light mode renders correctly

**Typography:**
- [ ] All font sizes use `var(--text-*)` tokens
- [ ] All font families use `var(--font-primary)` or `var(--font-secondary)`
- [ ] All font weights use `var(--font-weight-*)` tokens
- [ ] All line heights use `var(--line-height-*)` tokens
- [ ] All letter spacing uses `var(--letter-spacing-*)` tokens

**Spacing:**
- [ ] All padding uses `var(--spacing-*)` tokens
- [ ] All gaps use `var(--spacing-*)` tokens
- [ ] No hardcoded px/rem spacing
- [ ] No margin (use gap instead)

**Colours:**
- [ ] All colours use semantic CSS variables
- [ ] No hardcoded hex in CSS (except page identity)
- [ ] WCAG AA contrast met (4.5:1 normal, 3:1 large)
- [ ] Neon only for accents/borders/glows, NOT body text

**Responsiveness:**
- [ ] Works at 320px viewport
- [ ] Cards stack to 1-col below 768px
- [ ] Touch targets 48x48px minimum
- [ ] No horizontal overflow

**Accessibility:**
- [ ] All animations in `prefers-reduced-motion` guard
- [ ] Focus states visible both modes
- [ ] Keyboard accessible
- [ ] Semantic HTML

**CSS Quality:**
- [ ] BEM naming convention
- [ ] No Tailwind classes
- [ ] No `!important`
- [ ] No inline styles (except dynamic values)
- [ ] `.dark` variants for all colour rules

---

**End of Orchestrator Prompt v3.0**

**Created:** February 17, 2026  
**Updated:** February 21, 2026  
**Author:** AI Assistant  
**Next Action:** Run `AUDIT ALL` or individual audit/phase commands.