# BEM compliance audit — round 3

**Category:** Report  
**Version:** 1.0.0  
**Last Updated:** 2026-03-16  
**Status:** Complete  
**Trigger:** `apply bem`

---

## Summary

Round 3 created the shared `service-hero.css` BEM block (333 lines, 34 CSS rules) and applied it across 2 high-priority service templates. Also fixed 17 `font-weight: 600` hardcoded violations in shared service CSS.

- **New CSS file created:** `/src/styles/templates/service-hero.css` (333 lines)
- **CSS rules created:** 34 BEM rules across 11 logical groups
- **Templates converted:** 2 (DiscoveryServiceTemplate, PerformanceServiceTemplate)
- **Inline styles replaced:** ~40 (Discovery: ~30, Performance: ~10)
- **font-weight: 600 → var(--font-weight-semibold):** 11 in service-shared-sections.css + 5 in service-shared-pricing-cta.css = 16 fixed
- **letterSpacing: '0.1em' → var(--letter-spacing-widest):** Migrated via BEM classes
- **Import registered:** `/src/styles/index.css`

---

## BEM Block: `.service-hero`

### Elements Created

| Class | Purpose | Used In |
|---|---|---|
| `.service-hero` | Hero section wrapper | Discovery, Performance |
| `.service-hero--split` | Split-layout hero modifier | Performance |
| `.service-hero--compact` | Compact hero modifier | — |
| `.service-hero__content` | Inner content wrapper | Discovery, Performance |
| `.service-hero__content--centered` | Centered content | Discovery |
| `.service-hero__badge` | Eyebrow badge/pill | Discovery, Performance |
| `.service-hero__badge--primary` | Primary color badge | Discovery, Performance |
| `.service-hero__badge--outline` | Outline badge | — |
| `.service-hero__badge--mono` | Monospace badge | — |
| `.service-hero__badge--custom` | Custom-color badge | — |
| `.service-hero__title` | H1 heading | Discovery, Performance |
| `.service-hero__title--uppercase` | Uppercase modifier | — |
| `.service-hero__gradient-text` | Gradient text span | Discovery, Performance |
| `.service-hero__gradient-text--custom` | Custom gradient | — |
| `.service-hero__description` | Tagline paragraph | Discovery, Performance |
| `.service-hero__description--centered` | Centered description | Discovery |
| `.service-hero__description--mono` | Monospace description | — |
| `.service-hero__decor-grid` | Background grid overlay | — |
| `.service-hero__decor-grid--custom` | Custom-color grid | — |
| `.service-hero__decor-orb` | Gradient orb glow | — |
| `.service-hero__decor-orb--custom` | Custom orb color | — |
| `.service-hero__crosshair` | Corner crosshair marks | — |
| `.service-hero__crosshair--tl/tr/bl/br` | Position modifiers | — |
| `.service-hero__decor-rings` | Concentric ring decoration | Discovery |
| `.service-hero__decor-ring--1/2/3/4` | Ring size modifiers | Discovery |
| `.service-section` | Section wrapper | Discovery, Performance |
| `.service-section--bg-card/muted/background` | Background modifiers | Discovery, Performance |
| `.service-section--overflow-hidden` | Overflow modifier | Discovery |
| `.service-section__eyebrow` | Section label | Discovery, Performance |
| `.service-section__eyebrow--mono` | Mono eyebrow | — |
| `.service-section__title` | Section H2 | Discovery, Performance |
| `.service-section__description` | Section body text | Discovery, Performance |
| `.service-section__header` | Centered header wrapper | Discovery, Performance |
| `.service-stat` | Stat counter | Discovery, Performance |
| `.service-stat__value` | Stat number | Discovery |
| `.service-stat__label` | Stat label | Discovery, Performance |
| `.service-body-text` | Body paragraph | — |

---

## Templates Modified

### DiscoveryServiceTemplate.tsx (~30 inline styles → BEM)

- Hero section: rings → `.service-hero__decor-rings/ring--1-4`
- Badge: → `.service-hero__badge--primary`
- H1: → `.service-hero__title`
- Gradient text: → `.service-hero__gradient-text`
- Description: → `.service-hero__description--centered`
- StatCounter: → `.service-stat` / `.service-stat__value` / `.service-stat__label`
- 5 section wrappers: → `.service-section--bg-card/background/muted`
- 5 eyebrow labels: → `.service-section__eyebrow`
- 5 section titles: → `.service-section__title`
- 5 section descriptions: → `.service-section__description`
- 5 section headers: → `.service-section__header`

### PerformanceServiceTemplate.tsx (~10 inline styles → BEM)

- Badge: → `.service-hero__badge--primary`
- H1: → `.service-hero__title`
- Gradient text: → `.service-hero__gradient-text`
- Description: → `.service-hero__description`
- Lighthouse label: → `.service-stat__label`
- Speed improvement label: → `.service-stat__label`
- 3 section wrappers: → `.service-section--bg-muted/background/card`
- Section header: → `.service-section__header/title/description`

---

## CSS Token Fixes

### font-weight: 600 → var(--font-weight-semibold)

Fixed 16 instances across 2 shared CSS files:

| File | Instances | Classes Fixed |
|---|---|---|
| service-shared-sections.css | 6 | section-title, benefit-title, feature-title, process-number, process-title, list-name |
| service-shared-pricing-cta.css | 5 | pricing-badge, pricing-name, case-study-title, case-study-author, cta-title |

**Note:** 24 additional `font-weight: 600` instances remain in other CSS files (template-tester, lsx-search, sharing, wetu-importer, single-post). These will be addressed in a future pass.

---

## Remaining Templates for Round 4

| Template | Status |
|---|---|
| DesignServiceTemplate.tsx | Pending (63 inline) |
| ContentServiceTemplate.tsx | Pending (30+) |
| SecurityServiceTemplate.tsx | Pending (30+) |
| AnalyticsServiceTemplate.tsx | Pending (25+) |
| AIEngineServiceTemplate.tsx | Pending (25+) |
| MigrationsServiceTemplate.tsx | Pending (20+) |
| SupportServiceTemplate.tsx | Pending (20+) |
| ServicesLandingTemplate.tsx | Pending (40+) |
| Content sub-services (6 files) | Pending (15-20 each) |