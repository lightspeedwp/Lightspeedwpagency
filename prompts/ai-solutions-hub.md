# AI solutions hub — unified page prompt

**Category:** Scaffold  
**Version:** 2.0.0  
**Last Updated:** 2026-03-17  
**Status:** Draft  
**Template Used:** None (custom prompt)

---

## Objective

Create a new unified AI solutions hub page at `/solutions/ai` that consolidates content from all 12 existing AI pages into a single, immersive long-form experience. The page opens with a full-viewport WebGL 3D "neural network brain" hero, followed by a sticky anchor nav, then groups related AI capabilities into **full-screen immersive hero slider sections** — pulling in the visual identity of each existing AI page as individual slides. Text content alternates left/right alignment between slides for visual rhythm.

---

## Route

- **Path:** `/solutions/ai`
- **Template:** `AISolutionsHubTemplate`
- **Route file:** `solutions.routes.tsx`
- **CSS file:** `/src/styles/templates/ai-solutions-hub.css`
- **Data file:** `/src/app/data/ai-solutions-hub.ts`

---

## Current hero audit — all 12 AI pages

This section documents every existing AI page hero, its visual treatment, whether it has WebGL/canvas animation, and which neon design tokens it uses. **None of the 12 pages currently have WebGL heroes** — all effects are CSS-only.

### Services (6 pages)

#### 1. `/services/ai` — AI services landing

- **Template:** `AIServicesLandingTemplate`
- **Layout:** Centred single-column hero, `min-height: 80vh`.
- **Background:** CSS grid-line overlay (`ai-landing__hero-grid`) — 40px square grid using `rgba(--primary-rgb, 0.1)` on `var(--background)`.
- **Graphic:** None. No right-column visual. Pure text hero.
- **Animation:** None on hero (only `ScrollReveal` fade on content).
- **Neon colours:** Gradient highlight on "Services" text via `linear-gradient(90deg, var(--primary), var(--secondary))` with `background-clip: text`. Badge has `var(--primary)` glow shadow.
- **Icons:** `Robot` (badge), `ArrowRight` (buttons).
- **WebGL:** ❌ None.
- **Assessment:** Clean but static. Grid background is subtle. No movement, no neon token usage beyond generic `--primary`.

#### 2. `/services/ai/search-visibility` — AI search & visibility

- **Template:** `AISearchServiceTemplate`
- **Layout:** Centred single-column hero, `min-height: 80vh`.
- **Background:** CSS grid-line overlay (`ai-search-page__hero-grid`) — 40px grid at 6% `var(--accent)` opacity. Additional floating glow orb (`ai-search-page__hero-glow`) — 400px radial gradient, 20% accent, blur(60px).
- **Graphic:** Floating glow orb (CSS `radial-gradient` circle, pulsing via `ai-search-pulse` keyframes — scale 1→1.15, opacity 0.3→0.6 over 6s).
- **Animation:** CSS-only pulse on glow orb. `ScrollReveal` on content.
- **Neon colours:** Uses `var(--accent)` (maps to theme accent). Gradient text on title span via `linear-gradient(135deg, var(--accent), var(--primary))`. No direct neon token references.
- **Icons:** `Eye` (badge), `MagnifyingGlass`, `ChartBar`, `Brain`, `ChatCentered` (pillars below hero).
- **WebGL:** ❌ None.
- **Assessment:** Best atmosphere of the service pages. Pulsing glow orb adds depth. Grid + glow combination would translate well to a slide.

#### 3. `/services/ai/seo` — SEO services

- **Template:** `SEOServiceTemplate`
- **Layout:** Centred single-column hero using `sub-service-base__hero` + `seo-service__hero`.
- **Background:** Search graph pattern — repeating linear gradient grid (40px spacing, `var(--border)` at 30% opacity). Subtle `::before` radial gradient at 3% `var(--primary)`.
- **Graphic:** None. No visual element.
- **Animation:** None on hero. Static background pattern.
- **Neon colours:** Theme variables scoped per section: `--primary: var(--category-blue)`, `--secondary: var(--category-green)`, `--accent: var(--category-yellow)`. No neon preset tokens.
- **Icons:** None in hero.
- **WebGL:** ❌ None.
- **Assessment:** Minimal. Graph-paper grid background hints at data/ranking charts but feels underdeveloped. Needs visual elevation for the hub.

#### 4. `/services/ai/analytics` — Analytics & data intelligence

- **Template:** `AnalyticsServiceTemplate`
- **Layout:** Centred single-column hero using `service-hero`, `min-height: 60vh`.
- **Background:** Dot grid pattern via inline style — `radial-gradient(circle at center, var(--border) 1px, transparent 1px)` at 24px spacing, opacity 0.1.
- **Graphic:** None. No visual element.
- **Animation:** None on hero. `ScrollReveal` fade-up on content.
- **Neon colours:** None. Uses generic semantic tokens (`--foreground`, `--muted-foreground`).
- **Icons:** None in hero.
- **WebGL:** ❌ None.
- **Assessment:** Most basic hero. Dot grid barely visible. Strong candidate for a WebGL data visualisation upgrade.

#### 5. `/services/ai/engine-optimisation` — AI engine optimization (AEO)

- **Template:** `AIEngineServiceTemplate`
- **Layout:** Centred single-column hero using `service-hero`, `min-height: 60vh`.
- **Background:** Identical dot grid pattern to analytics (inline style, `radial-gradient`, 24px, opacity 0.1).
- **Graphic:** None. No visual element.
- **Animation:** None on hero. `ScrollReveal` fade-up on content.
- **Neon colours:** None. Uses generic semantic tokens.
- **Icons:** None in hero.
- **WebGL:** ❌ None.
- **Assessment:** Near-identical to analytics hero. Needs distinct visual identity. AI brain/neural network theme would differentiate.

#### 6. `/services/ai/answer-engine-optimisation` — Answer engine optimization

- **Template:** `AnswerEngineServiceTemplate`
- **Layout:** Centred single-column hero using `sub-service-base__hero` + `answer-engine-service__hero`.
- **Background:** Multi-layer radial gradient glows — three `radial-gradient` circles at 20%/80%/50% positions using `var(--primary)` (cyan), `var(--secondary)` (green), `var(--accent)` (purple) at 8%/6%/5% opacity. Floating question mark decorations.
- **Graphic:** CSS-only floating question marks (decorative, no interactivity).
- **Animation:** CSS float animation on question marks.
- **Neon colours:** Theme variables: `--primary: var(--category-cyan)`, `--secondary: var(--category-green)`, `--accent: var(--category-purple)`. No neon preset tokens, but cyan aligns with neon-cyan.
- **Icons:** None in hero itself (icons in benefits section below).
- **WebGL:** ❌ None.
- **Assessment:** Most thematically rich of the sub-service heroes. Multi-colour gradient glows + floating elements give depth. Q&A theme is distinctive.

### Solutions (5 pages)

All 4 sub-pages share the `AISubPageTemplate` layout with per-variant accent colour scoping.

#### 7. `/solutions/ai-integrations` — AI integrations landing

- **Template:** `AIIntegrationsTemplate`
- **Layout:** Two-column hero (left text, right animated graphic) via `wp-grid-2-cols`.
- **Background:** CSS grid overlay (`ai-page__hero-grid`) on dark surface. Two floating orbs (`ai-page__orb--1`, `ai-page__orb--2`) — CSS radial gradients.
- **Graphic:** **Animated brain graphic** — 320×320px container with `Brain` icon (72px) centred inside 3 concentric pulsing rings (`ai-page__brain-ring--1/2/3`, `ai-ring-pulse` keyframes, 4s ease-in-out, staggered 0.6s). 4 orbiting nodes (`ai-page__orbit-node--1/2/3/4`) with `Sparkle` and `ArrowRight` icons, floating via `ai-orbit-float` keyframes (5s, staggered).
- **Animation:** CSS ring pulse (scale 1→1.04, opacity 0.3→0.7). CSS orbit float (translateY 0→-8px, scale 1→1.1, opacity 0.6→1). `ScrollReveal` fade-right (text) + fade-left (graphic).
- **Neon colours:** `--ai-accent: var(--wp--preset--color--neon-cyan)`. `--ai-accent-alt: var(--wp--preset--color--neon-pink)`. Badge glow: `0 0 16px var(--ai-accent-glow)`. Title highlight: neon-cyan. Rings: neon-cyan at 25%/35%/50% opacity.
- **Icons:** `Brain` (badge + hero graphic), `Sparkle` (orbit nodes), `ArrowRight` (orbit nodes + buttons).
- **WebGL:** ❌ None — but has the **most sophisticated CSS animation** of all 12 pages.
- **Assessment:** Best visual identity. Pulsing rings + orbiting nodes create a "living AI" feel. Neon-cyan/pink token usage is on-brand. This hero sets the bar for what the hub should exceed.

#### 8. `/solutions/ai-content-generation` — AI content generation

- **Template:** `AISubPageTemplate` with `variant="content"`.
- **Layout:** Identical to #7 (two-column, brain graphic right).
- **Background:** Same grid + orbs as #7.
- **Graphic:** Same ring animation, but central icon is `PenNib` (72px) instead of `Brain`.
- **Animation:** Identical ring pulse + orbit float.
- **Neon colours:** `--ai-accent: var(--wp--preset--color--neon-pink)`. `--ai-accent-alt: var(--wp--preset--color--neon-cyan)`. Rings, badge, highlight all in neon-pink.
- **Icons:** `PenNib` (hero graphic + badge).
- **WebGL:** ❌ None.
- **Assessment:** Strong neon-pink identity. PenNib icon reads well. The pink variant is visually distinct from the cyan landing page.

#### 9. `/solutions/ai-seo` — AI-powered SEO

- **Template:** `AISubPageTemplate` with `variant="seo"`.
- **Layout:** Identical two-column brain graphic layout.
- **Background:** Same grid + orbs. The grid lines take on a lime-green tint from `--ai-accent`.
- **Graphic:** Same ring animation, central icon is `MagnifyingGlass` (72px).
- **Animation:** Identical ring pulse + orbit float.
- **Neon colours:** `--ai-accent: var(--wp--preset--color--neon-lime)`. `--ai-accent-alt: var(--wp--preset--color--neon-yellow)`. Rings, badge, highlight all in neon-lime. The lime-on-dark-background creates high visibility.
- **Icons:** `MagnifyingGlass` (hero graphic + badge).
- **WebGL:** ❌ None.
- **Assessment:** Neon-lime is the most striking variant. Excellent contrast on dark surfaces. Grid background with lime tint creates a "matrix" feel.

#### 10. `/solutions/ai-chatbots` — AI chatbots

- **Template:** `AISubPageTemplate` with `variant="chatbots"`.
- **Layout:** Identical two-column brain graphic layout.
- **Background:** Same grid + orbs.
- **Graphic:** Same ring animation, central icon is `Robot` (72px).
- **Animation:** Identical ring pulse + orbit float.
- **Neon colours:** `--ai-accent: var(--wp--preset--color--neon-cyan)`. `--ai-accent-alt: var(--wp--preset--color--neon-pink)`. Same as landing page (#7) — cyan accent.
- **Icons:** `Robot` (hero graphic + badge).
- **WebGL:** ❌ None.
- **Assessment:** Shares cyan accent with landing page, creating visual continuity. Robot icon immediately communicates chatbot theme.

#### 11. `/solutions/ai-analytics` — AI analytics & insights

- **Template:** `AISubPageTemplate` with `variant="analytics"`.
- **Layout:** Identical two-column brain graphic layout.
- **Background:** Same grid + orbs. Yellow-tinted grid lines.
- **Graphic:** Same ring animation, central icon is `ChartLine` (72px).
- **Animation:** Identical ring pulse + orbit float.
- **Neon colours:** `--ai-accent: var(--wp--preset--color--neon-yellow)`. `--ai-accent-alt: var(--wp--preset--color--neon-lime)`. Rings, badge, highlight all in neon-yellow.
- **Icons:** `ChartLine` (hero graphic + badge).
- **WebGL:** ❌ None.
- **Assessment:** Neon-yellow is warm and energetic. ChartLine icon is appropriate but generic. Yellow variant is least impactful of the four due to lower contrast on dark backgrounds.

### Systems (1 page)

#### 12. `/systems/ai-search-readiness` — AI search readiness

- **Template:** `AISearchReadinessSystemTemplate`
- **Layout:** Minimal centred hero using `system-page__hero`. No columns, no grid.
- **Background:** None. Plain `var(--background)` surface. No grid, no orbs, no decorative elements.
- **Graphic:** Single `Sparkle` icon in a styled container (`system-page__hero-icon`). No animation.
- **Animation:** ❌ None. Completely static hero.
- **Neon colours:** ❌ None. Uses only generic semantic tokens.
- **Icons:** `Sparkle` (hero icon), `Check` (benefits list), `CaretRight` (tier links).
- **WebGL:** ❌ None.
- **Assessment:** Most minimal hero across all 12 pages. No decorative treatment, no neon tokens, no animation. Strong candidate for visual upgrade in the hub.

---

## Hero audit summary

| # | Page | Has WebGL | Has CSS animation | Neon tokens used | Visual richness |
|---|---|---|---|---|---|
| 1 | `/services/ai` | ❌ | ❌ | ❌ Generic `--primary` | ⭐ Low |
| 2 | `/services/ai/search-visibility` | ❌ | ✅ Pulse orb | ❌ Generic `--accent` | ⭐⭐ Medium |
| 3 | `/services/ai/seo` | ❌ | ❌ | ❌ Category tokens | ⭐ Low |
| 4 | `/services/ai/analytics` | ❌ | ❌ | ❌ None | ⭐ Minimal |
| 5 | `/services/ai/engine-optimisation` | ❌ | ❌ | ❌ None | ⭐ Minimal |
| 6 | `/services/ai/answer-engine-optimisation` | ❌ | ✅ Float | ❌ Category cyan/green/purple | ⭐⭐ Medium |
| 7 | `/solutions/ai-integrations` | ❌ | ✅ Ring pulse + orbit | ✅ `neon-cyan` + `neon-pink` | ⭐⭐⭐⭐ High |
| 8 | `/solutions/ai-content-generation` | ❌ | ✅ Ring pulse + orbit | ✅ `neon-pink` + `neon-cyan` | ⭐⭐⭐ High |
| 9 | `/solutions/ai-seo` | ❌ | ✅ Ring pulse + orbit | ✅ `neon-lime` + `neon-yellow` | ⭐⭐⭐⭐ Highest |
| 10 | `/solutions/ai-chatbots` | ❌ | ✅ Ring pulse + orbit | ✅ `neon-cyan` + `neon-pink` | ⭐⭐⭐ High |
| 11 | `/solutions/ai-analytics` | ❌ | ✅ Ring pulse + orbit | ✅ `neon-yellow` + `neon-lime` | ⭐⭐⭐ High |
| 12 | `/systems/ai-search-readiness` | ❌ | ❌ | ❌ None | ⭐ Minimal |

**Key findings:**
- **0 of 12 pages** use WebGL/canvas for hero graphics.
- **5 of 12 pages** (solutions sub-pages) share the same CSS ring-pulse brain graphic animation.
- **4 of 12 pages** use neon design tokens (`neon-cyan`, `neon-pink`, `neon-lime`, `neon-yellow`).
- **4 neon tokens available** but `neon-yellow` has lowest contrast; `neon-lime` has highest visual impact.
- Service pages (1–6) are significantly less visually developed than solution pages (7–11).
- The system page (12) has no visual treatment at all.

---

## Page structure — revised with immersive hero sliders

### 1. Primary hero — WebGL 3D neural network brain (full viewport)

The opening hero occupies `100vh` with a WebGL particle brain rendered behind the content. This is the page's signature moment — the only section with a WebGL canvas.

- **WebGL concept:** "Neural network brain" — ~200 particles in a brain-shaped spherical formation, connected by glowing neon lines. Slow Y-axis rotation, brightness pulse, mouse-reactive particle highlighting.
- **Technical approach:** Pure WebGL on `<canvas>` (no Three.js). Particles use sine/cosine displacement for brain lobe shape. Lines connect particles within distance threshold. Additive blending for glow.
- **Colour palette:** Primary particles `--wp--preset--color--neon-cyan` (#00ffff), secondary pulse `--wp--preset--color--neon-pink` (#ff00ff), mouse highlight `--wp--preset--color--neon-lime` (#00ff00), connection lines neon-cyan at 30% opacity. Background forced to `var(--color-black)` / deep-purple for neon contrast compliance.
- **Reduced motion:** Hide canvas, show static `radial-gradient` fallback.
- **Content overlay:** Badge, H1 ("Artificial intelligence solutions"), subtitle, two CTA buttons, scroll-down arrow.
- **Performance:** `requestAnimationFrame`, throttled mouse events, 200 particle cap, `will-change: transform`.

### 2. Sticky anchor navigation bar

- Horizontal scrollable bar, becomes `position: sticky` after scrolling past hero.
- Links: Content, SEO, Search visibility, Chatbots, Analytics, Engine optimisation, Search readiness.
- Active state highlighted via `IntersectionObserver` on section IDs.
- Dark background with neon-cyan active indicator line.
- BEM: `.ai-hub__nav`, `.ai-hub__nav-item`, `.ai-hub__nav-item--active`.

### 3. Aggregate stats bar

- Single row, 6 key stats (deduplicated best figures from all 12 pages).
- `StatsGrid` pattern, `columns={6}` (3 mobile).
- Stats: `156% organic growth`, `10x content speed`, `92% prediction accuracy`, `250% AI citations`, `24/7 chatbot uptime`, `30+ integrations`.

### 4. Immersive hero slider — "AI solutions showcase" (`#solutions`)

**Concept:** A full-screen slider (using `react-slick`) that cycles through 4 slides, one per AI solution sub-page. Each slide recreates the existing solution hero visual (grid background, pulsing rings, accent icon) but with **upgraded WebGL particle effects** unique to each slide. Text content staggers **left-aligned on odd slides, right-aligned on even slides** for visual rhythm.

#### Slide 1: AI content generation (neon-pink)

- **Alignment:** Text left, graphic right.
- **WebGL graphic:** "Flowing text particles" — particles arranged in flowing paragraph-line formations that dissolve and reform, representing content generation. Particles pulse neon-pink.
- **Neon tokens:** `--wp--preset--color--neon-pink` (primary), `--wp--preset--color--neon-cyan` (secondary sparkle).
- **Icon:** `PenNib` (72px) floating above particle field.
- **Content:** Title "AI content generation", tagline from `aiContentHero`, mini stats row (10x output, 80% time saved), CTA button.
- **Background:** Dark surface with grid overlay tinted neon-pink at 6% opacity.

#### Slide 2: AI-powered SEO (neon-lime)

- **Alignment:** Text right, graphic left.
- **WebGL graphic:** "Rising search graph" — particles arranged in an ascending curve/chart formation with data points highlighted. Particles pulse neon-lime. Lines connect points like a line chart.
- **Neon tokens:** `--wp--preset--color--neon-lime` (primary), `--wp--preset--color--neon-yellow` (secondary glow).
- **Icon:** `MagnifyingGlass` (72px) at chart peak.
- **Content:** Title "AI-powered SEO", tagline from `aiSEOHero`, mini stats row (156% growth, 3x rankings), CTA button.
- **Background:** Dark surface with grid overlay tinted neon-lime — creating the "matrix" feel from the existing page.

#### Slide 3: AI chatbots (neon-cyan)

- **Alignment:** Text left, graphic right.
- **WebGL graphic:** "Conversation network" — particles clustered in two groups (user + bot) with glowing message paths flowing between them. Particles pulse neon-cyan. Message paths animate directionally.
- **Neon tokens:** `--wp--preset--color--neon-cyan` (primary), `--wp--preset--color--neon-pink` (secondary for bot cluster).
- **Icon:** `Robot` (72px) centred between clusters.
- **Content:** Title "AI chatbots for WordPress", tagline from `aiChatbotsHero`, mini stats row (24/7 engagement, 3.5x conversion), CTA button.
- **Background:** Dark surface with grid overlay tinted neon-cyan.

#### Slide 4: AI analytics & insights (neon-yellow)

- **Alignment:** Text right, graphic left.
- **WebGL graphic:** "Data constellation" — particles positioned as a star-map/constellation pattern with connecting lines forming dashboard-like chart shapes (bar, pie, line). Particles pulse neon-yellow. Periodic "data burst" animations where clusters of particles flash brightly.
- **Neon tokens:** `--wp--preset--color--neon-yellow` (primary), `--wp--preset--color--neon-lime` (secondary for chart lines).
- **Icon:** `ChartLine` (72px) as constellation anchor point.
- **Content:** Title "AI analytics & insights", tagline from `aiAnalyticsHero`, mini stats row (200+ insights, 92% accuracy), CTA button.
- **Background:** Dark surface with grid overlay tinted neon-yellow.

#### Slider behaviour

- Auto-advance every 8 seconds.
- Manual navigation via dots + prev/next arrows.
- Smooth crossfade transition (not slide) for full-screen immersion.
- Each slide is `min-height: 100vh` with `display: flex; align-items: center`.
- Pause auto-advance on hover/focus.
- Keyboard accessible: arrow keys navigate, Enter/Space activates CTA.
- Touch swipe support on mobile.

### 5. Immersive hero slider — "AI services deep-dive" (`#services`)

**Concept:** A second full-screen slider grouping the 6 service pages. These heroes are currently less developed visually, so each slide gets a **unique CSS-animated background** (no WebGL — to differentiate from the solutions slider and manage performance). Text staggers left/right.

#### Slide 1: AI services overview (gradient)

- **Alignment:** Text centred (matching existing hero layout).
- **Background:** `--wp--preset--gradient--neon-hero` (pink→cyan) at 15% opacity over dark surface, with grid overlay.
- **Graphic:** Large `Robot` icon (96px) with concentric ring pulse animation (ported from solution pages).
- **Content:** Title, subtitle, 6 mini service cards in 2×3 grid below title.
- **Neon tokens:** `neon-pink` + `neon-cyan` gradient.

#### Slide 2: AI search & visibility (cyan glow)

- **Alignment:** Text left, animated glow orb right.
- **Background:** Grid overlay + pulsing glow orb (ported from existing `ai-search-page__hero-glow`). Orb uses `var(--wp--preset--color--neon-cyan)` at 20%, blur(60px), pulse animation.
- **Graphic:** Glow orb (existing CSS animation, elevated to full-slide scale).
- **Content:** Title, subtitle, 4-stat inline grid (60% lower costs, 5+ engines, 3x growth, 100% schema).
- **Neon tokens:** `neon-cyan`.

#### Slide 3: SEO services (lime graph grid)

- **Alignment:** Text right, graph grid left.
- **Background:** Repeating linear gradient grid (40px, `--wp--preset--color--neon-lime` at 8%) — the "search graph" pattern from existing page, amplified.
- **Graphic:** CSS-animated ascending line (SVG or `clip-path`) representing a ranking chart rising from bottom-left to top-right, drawn in neon-lime.
- **Content:** Title, subtitle, 4-stat row (150% traffic, 10x rankings, 85% CTR, 3–6 mo).
- **Neon tokens:** `neon-lime` + `neon-yellow`.

#### Slide 4: Analytics & data intelligence (dot matrix)

- **Alignment:** Text left, dot matrix right.
- **Background:** Dense dot grid (16px spacing instead of 24px) using `--wp--preset--color--neon-yellow` at 12%. Dots pulse in waves radiating from centre.
- **Graphic:** CSS-animated pulsing dot wave effect (concentric rings of dots lighting up sequentially).
- **Content:** Title, subtitle, 4-stat row (200% insights, 45% conversions, 10x reporting, 30% fewer silos).
- **Neon tokens:** `neon-yellow` + `neon-lime`.

#### Slide 5: AI engine optimization (neural net)

- **Alignment:** Text right, neural graphic left.
- **Background:** Dark surface with subtle `--wp--preset--color--neon-cyan` radial gradient centre glow.
- **Graphic:** CSS-animated concentric brain rings (ported from solutions template) with `Brain` icon. Rings in neon-cyan.
- **Content:** Title, subtitle, 4-stat row (250% citations, 3x referrals, 90% accuracy, 6–9 mo).
- **Neon tokens:** `neon-cyan`.

#### Slide 6: Answer engine optimization (floating Q&A)

- **Alignment:** Text left, floating elements right.
- **Background:** Multi-layer radial gradient glows (ported from existing `answer-engine-service__hero::before`). Cyan/green/purple gradient spots.
- **Graphic:** CSS-animated floating question mark bubbles + knowledge graph connections.
- **Content:** Title, subtitle, 4-stat row (400% snippets, 3x voice, 85% accuracy, 2–4 mo).
- **Neon tokens:** `neon-cyan` (primary), `neon-lime` (secondary).

### 6. AI search readiness deep-dive section (`#search-readiness`)

- Not in a slider — standalone full-width section for the systems page content.
- Section header with `Sparkle` icon.
- "What is AEO" + "Why it matters" text blocks.
- Benefits checklist with `Check` icons.
- 4-step implementation process (numbered cards).
- Tier integration cards.
- Background: dark surface with subtle neon-cyan radial glow.

### 7. Pricing comparison

- Side-by-side `PricingTable` pattern.
- 3 tiers: Starter, Growth, Enterprise.
- Consolidated from content, SEO, chatbots, analytics pricing data.

### 8. FAQ accordion

- Consolidated and deduplicated FAQs from all 12 pages.
- `FAQSection` pattern, grouped by topic.

### 9. CTA section

- `FunkyCTA` pattern with combined AI-specific messaging and benefits.
- Primary action: "Request free AI audit" → contact page.

---

## WebGL 3D hero — technical specification

### Particle brain formation (section 1 hero only)

```
Algorithm:
1. Generate 200 points on a sphere (radius 150px)
2. Apply sine displacement to create brain-like lobes:
   - x = r * sin(phi) * cos(theta) + noise
   - y = r * cos(phi) * 1.2 (stretch vertically)
   - z = r * sin(phi) * sin(theta) + noise
3. Add cerebral fold effect via layered sine waves on surface
4. Store as Float32Array for WebGL buffer
```

### Rendering pipeline

```
1. Vertex shader: Transform particles by rotation matrix, apply pulse scale
2. Fragment shader: Render as soft circles with additive glow
3. Line rendering: Connect particles within distance threshold (50px)
4. Mouse interaction: Highlight particles within 100px of cursor
5. Animation: Rotate Y at 0.005 rad/frame, pulse brightness sin(time * 0.002)
```

### Solutions slider WebGL graphics (section 4 — 4 canvases)

Each slide in the solutions slider gets its own `<canvas>` element with a unique particle formation. Only the **active slide's canvas renders** (paused when not visible for performance).

| Slide | Formation | Particle count | Primary colour | Animation |
|---|---|---|---|---|
| Content generation | Flowing text lines | 150 | `neon-pink` | Lines dissolve + reform in wave |
| AI SEO | Ascending chart curve | 120 | `neon-lime` | Curve draws upward, points pulse |
| Chatbots | Two-cluster network | 160 | `neon-cyan` | Messages flow between clusters |
| Analytics | Star constellation | 140 | `neon-yellow` | Periodic data burst flashes |

### Colour token mapping

| Element | CSS variable | Hex fallback |
|---|---|---|
| Primary hero particles | `--wp--preset--color--neon-cyan` | `#00ffff` |
| Primary hero pulse | `--wp--preset--color--neon-pink` | `#ff00ff` |
| Mouse highlight | `--wp--preset--color--neon-lime` | `#00ff00` |
| Connection lines | neon-cyan at 30% opacity | `rgba(0,255,255,0.3)` |
| Background (all canvases) | `var(--color-black)` / `--wp--preset--color--deep-purple` | `#0a0a0a` / `#2d0059` |

### Reduced motion fallback

```css
@media (prefers-reduced-motion: reduce) {
  .ai-hub__hero-canvas,
  .ai-hub__slide-canvas {
    display: none;
  }
  .ai-hub__hero {
    background: radial-gradient(
      ellipse at center,
      color-mix(in srgb, var(--wp--preset--color--neon-cyan) 15%, transparent) 0%,
      var(--color-black) 70%
    );
  }
}
```

---

## File structure

```
/src/app/components/templates/AISolutionsHubTemplate.tsx     (main template, <300 lines)
/src/app/components/blocks/canvas/NeuralBrainCanvas.tsx      (WebGL primary hero, <300 lines)
/src/app/components/blocks/canvas/SolutionSlideCanvas.tsx    (WebGL per-slide canvases, <300 lines)
/src/app/components/patterns/AISectionNav.tsx                (sticky nav, <100 lines)
/src/app/components/patterns/AIHeroSlider.tsx                (immersive slider wrapper, <250 lines)
/src/app/components/patterns/AIServiceSlider.tsx             (services slider wrapper, <250 lines)
/src/app/data/ai-solutions-hub.ts                           (consolidated data, <300 lines)
/src/styles/templates/ai-solutions-hub.css                   (page styles, <400 lines)
/src/styles/templates/ai-solutions-hub/ai-hub-sliders.css   (slider-specific styles, <400 lines)
```

---

## Design system compliance

- **Zero Tailwind utility classes** — all styling via BEM classes in CSS files.
- **CSS variables only** — colours, spacing, borders, radius, typography from `/src/styles/`.
- **Fonts:** `var(--font-primary)` (Lexend) for headings, `var(--font-secondary)` (Manrope) for body.
- **Neon rule:** All neon foreground colours (`neon-cyan`, `neon-pink`, `neon-lime`, `neon-yellow`) appear only on dark surfaces (`var(--color-black)` or `--wp--preset--color--deep-purple`). Every slide and hero forces a dark background regardless of light/dark mode.
- **Sentence case:** All headings use sentence case.
- **Icons:** `@phosphor-icons/react` exclusively.
- **Router:** `react-router` only.
- **Classes:** `.wp-*` prefix for utility classes, BEM for component classes.
- **Accessibility:** Keyboard navigation for sliders (arrow keys, Enter/Space), focus management, ARIA labels (`role="tablist"`, `aria-roledescription="slide"`), reduced motion support, pause-on-focus for auto-advance.
- **File sizes:** All `.tsx` files under 300 lines, all `.css` files under 400 lines.

---

## Patterns reused

| Pattern | Usage |
|---|---|
| `StatsGrid` | Aggregate stats bar, per-slide mini stats |
| `FeatureGrid` | Per-section feature cards (below sliders) |
| `FeatureList` | Search visibility pillars (glow variant) |
| `UseCasesGrid` | Per-section use cases |
| `ProcessTimeline` | Search readiness implementation steps |
| `PricingTable` | Consolidated pricing comparison |
| `FAQSection` | Consolidated FAQ accordion |
| `FunkyCTA` | Final conversion section |
| `BreadcrumbPart` | Page breadcrumbs |
| `Container` | Section content wrapper |
| `ScrollReveal` | Section entrance animations |
| `ScrollDownArrow` | Primary hero scroll prompt |

---

## Routing integration

Add to `solutions.routes.tsx`:

```tsx
import { AISolutionsHubTemplate } from '../components/templates/AISolutionsHubTemplate';

function AISolutionsHubRoute() {
  loadCSSBundle('solutions');
  return <AISolutionsHubTemplate />;
}

// Add to solutionsRoutes array:
{ path: 'solutions/ai', Component: AISolutionsHubRoute },
```

---

## Implementation order

1. Create data file (`ai-solutions-hub.ts`) — consolidate and deduplicate all 12 pages' content.
2. Create WebGL primary hero (`NeuralBrainCanvas.tsx`) — particle brain with glow.
3. Create WebGL slide canvases (`SolutionSlideCanvas.tsx`) — 4 formation variants.
4. Create sticky nav (`AISectionNav.tsx`) — anchor navigation with `IntersectionObserver`.
5. Create solutions hero slider (`AIHeroSlider.tsx`) — full-screen `react-slick` with WebGL slides.
6. Create services hero slider (`AIServiceSlider.tsx`) — full-screen `react-slick` with CSS-animated slides.
7. Create CSS files (`ai-solutions-hub.css` + `ai-hub-sliders.css`) — page + slider styles.
8. Create template (`AISolutionsHubTemplate.tsx`) — assemble all sections.
9. Register route in `solutions.routes.tsx`.
10. Run `audit layout`, `audit a11y`, and `audit webgl` against the new page.

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 2.0.0 | 2026-03-17 | Major rewrite: added complete hero audit for all 12 AI pages, replaced flat section layout with immersive full-screen hero sliders, added per-slide WebGL graphic concepts (content=flowing text, SEO=rising chart, chatbots=conversation network, analytics=data constellation), added services CSS-animated slider, staggered left/right text alignment, added neon token mapping per slide |
| 1.0.0 | 2026-03-17 | Initial prompt — unified AI solutions hub with WebGL neural brain hero |
