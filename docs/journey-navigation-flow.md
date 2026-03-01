# Journey Navigation Flow — Visual Guide

**Purpose:** Quick reference for the 6-phase website lifecycle navigation system  
**Last Updated:** February 27, 2026

---

## Navigation Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│  PRIMARY NAVIGATION (SiteHeader)                                │
│  Work / Solutions / Systems / Insights / About / Contact        │
│                                                                  │
│  Services Mega Menu (under Solutions):                          │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  6-Phase Website Lifecycle (Color-coded)                 │   │
│  │  ───────────────────────────────────────────────────────  │   │
│  │  01 Ignite    [violet]   Discovery, Strategy, Audit     │   │
│  │  02 Create    [pink]     Design, Prototyping, Content   │   │
│  │  03 Build     [cyan]     Development, Migration, Security│   │
│  │  04 Launch    [amber]    Hosting, Training, Deployment  │   │
│  │  05 Grow      [green]    SEO, Performance, Accessibility│   │
│  │  06 Evolve    [indigo]   AI, AEO, Future-proofing       │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Journey Phase Landing Pages (6 pages)

### Page Structure (All phases share this template)

```
┌────────────────────────────────────────────────────────────────┐
│ BREADCRUMBS                                                    │
│ Home → Services → [Phase Name]                                 │
├────────────────────────────────────────────────────────────────┤
│ JOURNEY PROGRESS BAR (Horizontal)                              │
│ [○] Ignite ─── [○] Create ─── [●] Build ─── [○] Launch ─── ...│
│                                ↑ Active phase (pulsing)         │
├────────────────────────────────────────────────────────────────┤
│ HERO SECTION                                                   │
│ Phase badge, title, tagline, description, duration             │
├────────────────────────────────────────────────────────────────┤
│ DESCRIPTION                                                    │
│ What happens / Why it matters                                  │
├────────────────────────────────────────────────────────────────┤
│ OUTCOMES                                                       │
│ Key results grid (6-8 items with checkmarks)                   │
├────────────────────────────────────────────────────────────────┤
│ SERVICES IN THIS PHASE                                         │
│ Service cards grid (2-5 services, clickable)                   │
│ [Service Card] [Service Card] [Service Card]                   │
│       ↓              ↓              ↓                           │
│  Individual      Individual      Individual                    │
│  service page    service page    service page                  │
├────────────────────────────────────────────────────────────────┤
│ DELIVERABLES + CLIENT ROLE                                     │
│ What you receive / Your role during this phase                 │
├────────────────────────────────────────────────────────────────┤
│ TESTIMONIAL                                                    │
│ Client quote with social proof                                 │
├────────────────────────────────────────────────────────────────┤
│ PREV / NEXT NAVIGATION                                         │
│ [← Previous: Ignite] ────────────────── [Next: Launch →]      │
├────────────────────────────────────────────────────────────────┤
│ CTA SECTION                                                    │
│ "Ready to [Phase]?" → Request Systems Audit                   │
└────────────────────────────────────────────────────────────────┘
```

### Phase-to-Phase Navigation Flow

```
┌─────────┐    Next     ┌─────────┐    Next     ┌─────────┐
│ IGNITE  │  ────────>  │ CREATE  │  ────────>  │  BUILD  │
│  (01)   │  <────────  │  (02)   │  <────────  │  (03)   │
└─────────┘    Prev     └─────────┘    Prev     └─────────┘
                              ↓
                        Service cards:
                        - Figma Prototyping (NEW)
                        - Design Systems (HOT)
                        - Content Collection
                        - Email Marketing
                        - Web Design

┌─────────┐    Next     ┌─────────┐    Next     ┌─────────┐
│ LAUNCH  │  ────────>  │  GROW   │  ────────>  │ EVOLVE  │
│  (04)   │  <────────  │  (05)   │  <────────  │  (06)   │
└─────────┘    Prev     └─────────┘    Prev     └─────────┘
```

---

## Individual Service Pages

### Page Structure (with Journey Context)

```
┌────────────────────────────────────────────────────────────────┐
│ BREADCRUMBS                                                    │
│ Home → Services → Journey: Create → [Service Name]             │
├────────────────────────────────────────────────────────────────┤
│ JOURNEY PHASE INDICATOR (Compact horizontal)                   │
│ Journey Phase: [○] Ignite ─ [●] Create ─ [○] Build ─ [○] ...  │
│                              ↑ Current phase                    │
├────────────────────────────────────────────────────────────────┤
│ HERO SECTION                                                   │
│ Service title, subtitle, CTA button                            │
├────────────────────────────────────────────────────────────────┤
│ BENEFITS / FEATURES GRID                                       │
│ What this service delivers                                     │
├────────────────────────────────────────────────────────────────┤
│ PROCESS / WORKFLOW                                             │
│ How the service works                                          │
├────────────────────────────────────────────────────────────────┤
│ PRICING / TIERS                                                │
│ Foundation / Growth / Enterprise                               │
├────────────────────────────────────────────────────────────────┤
│ FAQ SECTION                                                    │
│ Service-specific FAQs                                          │
├────────────────────────────────────────────────────────────────┤
│ CTA SECTION                                                    │
│ "Request a Systems Audit"                                      │
└────────────────────────────────────────────────────────────────┘
```

### Journey Phase Indicator (Detailed)

```
┌──────────────────────────────────────────────────────────────────┐
│ Journey Phase:  [○] ─ [○] ─ [●] ─ [○] ─ [○] ─ [○]              │
│                  ↓     ↓     ↓     ↓     ↓     ↓                 │
│              Ignite Create Build Launch Grow Evolve             │
│                          ↑                                       │
│                    Active phase                                  │
│                    - Pulsing glow                                │
│                    - Bold label                                  │
│                    - Full color                                  │
└──────────────────────────────────────────────────────────────────┘

States:
- Completed (before current): Filled circle, full color
- Active (current): Pulsing glow, bold label
- Future (after current): Empty circle, dimmed 50%

Responsive:
- Desktop: Icons + labels
- Mobile: Icons only (labels hidden)
```

---

## Navigation Paths

### Path 1: Main Menu → Phase → Service

```
Main Navigation (SiteHeader)
   └─> Solutions
       └─> Services mega menu
           └─> "02 Create" (pink accent)
               └─> /services/create (Journey phase landing page)
                   └─> Service card: "Figma Make Prototyping"
                       └─> /services/figma-prototyping (Service page)
```

### Path 2: Service Page → Journey Phase → Other Services

```
Service Page: /services/figma-prototyping
   └─> Journey Phase Indicator: "Create" (clickable)
       └─> /services/create (Journey phase landing page)
           └─> See all 5 services in Create phase
               └─> Click "Design Systems"
                   └─> /services/design-systems (Service page)
```

### Path 3: Linear Journey Flow

```
/services/ignite
   └─> Click "Next phase: Create"
       └─> /services/create
           └─> Click "Next phase: Build"
               └─> /services/build
                   └─> Click "Prev phase: Create"
                       └─> Back to /services/create
```

### Path 4: Breadcrumb Navigation

```
Service Page: /services/design-systems
   └─> Breadcrumb: "Journey: Create"
       └─> /services/create (Jump to phase)
           └─> Breadcrumb: "Services"
               └─> /services (Services landing)
                   └─> Breadcrumb: "Home"
                       └─> / (Homepage)
```

---

## Current Phase Services (As of Feb 27, 2026)

### 01 Ignite (Violet)
- Discovery & Strategy
- Content Audit
- Content Strategy

### 02 Create (Pink) ✨ **Updated**
- Web Design
- **Figma Make Prototyping** 🆕 (badge: NEW)
- **Design Systems** 🔥 (badge: HOT)
- Content Collection
- Email Marketing

### 03 Build (Cyan)
- WordPress Development
- Security
- Migrations

### 04 Launch (Amber)
- Managed Hosting
- Training

### 05 Grow (Green)
- Performance Optimisation
- SEO
- Accessibility Compliance (badge: NEW)
- Support & Maintenance

### 06 Evolve (Indigo)
- AI Engine Optimisation (badge: NEW)
- Answer Engine Optimisation (badge: NEW)

---

## Interactive Elements

### Journey Progress Bar (Phase Landing Pages)

```tsx
// Full-width horizontal timeline
<JourneyProgressBar currentIndex={2} />

// Features:
- All 6 phases visible
- Clickable phase nodes
- Current phase highlighted
- Gradient connectors between phases
- Color-coded by phase accent
- Responsive (collapses on mobile)
```

### Journey Phase Indicator (Service Pages)

```tsx
// Compact horizontal indicator
<JourneyPhaseIndicator currentPhase="create" />

// Features:
- Label: "Journey Phase:"
- 6 clickable phase icons
- Current phase pulsing
- Gradient connectors
- Responsive (labels hidden on mobile)
- Positioned between breadcrumbs and hero
```

### Prev/Next Navigation

```tsx
// Bottom of journey phase pages
<StageNavigation currentIndex={1} />

// Features:
- Previous phase (left) - if exists
- Next phase (right) - if exists
- Phase-colored accent
- Icon arrows
- "Previous phase" / "Next phase" labels
- Phase number + name
```

---

## URLs Reference

### Journey Phase Pages

| Phase | URL | Slug |
|-------|-----|------|
| Ignite | `/services/ignite` | `journey-ignite` |
| Create | `/services/create` | `journey-create` |
| Build | `/services/build` | `journey-build` |
| Launch | `/services/launch` | `journey-launch` |
| Grow | `/services/grow` | `journey-grow` |
| Evolve | `/services/evolve` | `journey-evolve` |

### Service Pages (Create Phase)

| Service | URL | Slug |
|---------|-----|------|
| Figma Make Prototyping | `/services/figma-prototyping` | `figma-prototyping` |
| Design Systems | `/services/design-systems` | `design-systems` |

---

## Color-Coding System

```css
/* Journey phase accent colors */
--category-violet: hsl(258, 90%, 66%);   /* Ignite */
--category-pink: hsl(330, 81%, 60%);     /* Create */
--category-cyan: hsl(188, 78%, 41%);     /* Build */
--category-amber: hsl(38, 92%, 50%);     /* Launch */
--category-green: hsl(142, 71%, 45%);    /* Grow */
--category-indigo: hsl(243, 75%, 59%);   /* Evolve */
```

**Usage:**
- Phase badges
- Progress bar connectors
- Focus states
- CTA buttons
- Service card accents

---

## Accessibility Features

### Keyboard Navigation
- ✅ Tab through all phase links
- ✅ Enter to activate phase link
- ✅ Arrow keys for prev/next navigation
- ✅ Escape to close mega menu

### ARIA Labels
- ✅ `aria-label="Website journey progress"`
- ✅ `aria-current="step"` on active phase
- ✅ `aria-label="Phase 02: Create (current)"`
- ✅ Navigation landmarks

### Reduced Motion
- ✅ No pulse animation
- ✅ Static phase indicators
- ✅ Instant color transitions
- ✅ CSS transitions disabled

### Focus States
- ✅ 2px outline in phase accent color
- ✅ Visible on all interactive elements
- ✅ Clear contrast with background

---

## Implementation Files

### Components
- `/src/app/components/templates/JourneyStageTemplate.tsx` — Phase landing page
- `/src/app/components/ui/JourneyPhaseIndicator.tsx` — Compact indicator for service pages
- `/src/app/components/parts/BreadcrumbPart.tsx` — Breadcrumb navigation

### Data
- `/src/app/data/journey-stage-pages.ts` — All 6 phase data (services, outcomes, deliverables)
- `/src/app/data/site-pages.ts` — Site-wide navigation structure

### CSS
- `/src/styles/templates/page-journey-stage.css` — Phase landing page styles
- `/src/styles/components/ui/journey-phase-indicator.css` — Compact indicator styles
- `/src/styles/blocks/theme/breadcrumbs.css` — Breadcrumb styles

### Routes
- `/src/app/routes.tsx` — Journey phase route definitions
- `/src/app/utils/route-map.ts` — Slug-to-path mappings

---

**Version:** 1.0  
**Status:** Production-ready  
**Last Updated:** February 27, 2026
