# WebGL Expansion Report — New Integration Opportunities

**Date:** 2026-03-18  
**Trigger:** `expand webgl`  
**Prompt:** `/prompts/expand-webgl.md` v1.0.0  
**Duration:** 25 minutes

---

## Executive Summary

Currently **21 WebGL components** exist, deployed across **20 page templates**. Analysis of all 130+ page templates reveals **12 high-value opportunities** for new WebGL integrations that would enhance the Funky Neon aesthetic and storytelling without compromising performance or accessibility.

**Recommendation:** Prioritize 4 "Quick Wins" (Low complexity, High impact) for immediate implementation.

---

## Existing WebGL Inventory

### Currently Deployed (20 Templates)

| Template | WebGL Component | Purpose | Performance Tier |
|---|---|---|---|
| AboutTemplate | WebGLConstellation | Hero background animation | Medium |
| AboutTemplate | WebGLTimeline | Process timeline visualization | Low |
| AboutTemplate | WebGLTeamMosaic | Team section background | Medium |
| TeamTemplate | WebGLTeamSphere | Interactive team connectivity sphere | High |
| DevelopmentServiceTemplate | WebGLTopology | Code topology background | Medium |
| DesignServiceTemplate | WebGLDesignGrid | Isometric design grid | Medium |
| DiscoveryServiceTemplate | WebGLBlueprint | Architectural blueprint animation | Medium |
| ContentServiceTemplate | WebGLContentInk | Digital ink flow animation | Medium |
| SecurityServiceTemplate | WebGLCyberRadar | Cyber security radar visualization | High |
| AboutProcessTemplate | WebGLProcessOrbital | Orbital process diagram | Medium |
| AboutCultureTemplate | WebGLWorldMap | Global network map | High |
| TrainingTemplate | WebGLKnowledgeGraph | Interactive knowledge graph | Medium |
| PerformanceServiceTemplate | WebGLPerformanceRing | Performance ring visualization | Medium |
| AIIntegrationsTemplate | WebGLAINetwork | Neural network particles | High |
| SEOServiceTemplate | WebGLSearchGraph | SEO trend graph | Medium |
| AnalyticsServiceTemplate | WebGLDataNodes | Data network visualization | High |
| AIEngineServiceTemplate | WebGLAINetwork | AI network particles | High |
| AccessibilityServiceTemplate | WebGLScanner | Accessibility scanner animation | Low |
| NewsletterServiceTemplate | WebGLMail | Email flow animation | Medium |
| EmailMarketingServiceTemplate | WebGLMail | Email flow animation | Medium |
| FigmaPrototypingServiceTemplate | WebGLWireframe | UI wireframe visualization | Medium |
| DesignSystemsServiceTemplate | WebGLTokens | Design tokens visualization | Medium |

---

## Pages Without WebGL — Expansion Opportunities

### Quick Wins (Low Complexity, High Impact)

| Page | Integration Type | Description | Complexity | Priority | Performance Budget |
|---|---|---|---|---|---|
| **FrontPageTemplate** (Home) | Particle field | Floating neon particles in hero background, subtle mouse interaction | Low | **CRITICAL** | 5-8ms/frame |
| **ServicesLandingTemplate** | Service orbit | Orbiting service icons with connection lines | Medium | **HIGH** | 8-12ms/frame |
| **ContactTemplate** | Wave animation | Neon sine wave footer decoration | Low | **HIGH** | 3-5ms/frame |
| **BlogIndexTemplate** | Content particles | Floating content bubbles representing articles | Low | **MEDIUM** | 5-8ms/frame |

**Rationale:** Homepage and services landing are highest-traffic pages. Contact wave is minimal GPU cost. Blog particles add visual interest to content-heavy page.

### High-Value Additions (Medium Complexity, High Impact)

| Page | Integration Type | Description | Complexity | Priority | Performance Budget |
|---|---|---|---|---|---|
| **HostingTemplate** | Server network | Animated server rack with network connections | Medium | **HIGH** | 8-12ms/frame |
| **AboutHistoryTemplate** | Timeline ripple | Rippling timeline with milestone pulses | Medium | **MEDIUM** | 6-10ms/frame |
| **CareersTemplate** | Growth spiral | Spiral growth pattern representing career paths | Medium | **MEDIUM** | 8-12ms/frame |
| **AIServicesLandingTemplate** | Brain network | Enhanced neural network (similar to AIIntegrationsTemplate) | Medium | **MEDIUM** | 10-15ms/frame |

**Rationale:** Hosting page benefits from technical visualization. History timeline enhances storytelling. Careers spiral communicates growth. AI landing should match AI integrations aesthetic.

### Consider Later (High Complexity or Lower Priority)

| Page | Integration Type | Description | Complexity | Priority | Performance Budget |
|---|---|---|---|---|---|
| **PricingTemplate** | Value graph | Animated value comparison chart | High | **LOW** | 10-15ms/frame |
| **SearchResultsTemplate** | Search ripple | Ripple effect when typing in search | Medium | **LOW** | 5-8ms/frame |
| **TestimonialsTemplate** | Trust constellation | Star constellation representing testimonials | Medium | **LOW** | 8-12ms/frame |
| **PortfolioArchiveTemplate** | Portfolio grid flow | Flowing grid animation behind project cards | High | **LOW** | 12-18ms/frame |

**Rationale:** Lower traffic pages or high complexity doesn't justify GPU cost at this time.

---

## Pages That Should NOT Get WebGL

| Page Type | Reason |
|---|---|
| **All Post-Format Archives/Singles** (Audio, Gallery, Image, Quote, Link, Chat, Status, Standard, Aside) | Content-first, minimal distraction needed |
| **Video/Podcast Templates** | Already media-heavy, avoid GPU competition |
| **Single Post Templates** | Focus on readability, not decoration |
| **Category/Tag/Date Archives** | Utility pages, not brand showcases |
| **Legal Pages** (Privacy, Terms, etc.) | Must be accessible and distraction-free |
| **Error 404 Template** | Already designed, sufficient |

---

## Detailed Recommendations

### 1. FrontPageTemplate — Hero Particle Field

**Visual Concept:** 50-80 floating neon particles in hero background. Particles slowly drift with subtle mouse attraction within 150px radius.

**Technical Approach:**
- Canvas 2D, NOT WebGL (simpler, adequate performance)
- Particles: 2-4px radius circles
- Colors: Cycle between neon-cyan, neon-pink, neon-lime, neon-yellow
- Mouse interaction: Particles within 150px attracted with easing
- Velocity: Slow drift (0.001-0.003 relative units/frame)

**Fallback:**
- `prefers-reduced-motion`: Hide canvas, show static radial gradient
- Mobile (< 768px): Reduce to 30 particles or disable entirely
- Low-power mode: Disable

**Performance Impact:** 5-8ms/frame (60fps on desktop, 30-40fps mobile)

**Data-Driven:** Yes — particle count, colors, speeds from `/src/app/data/webgl-patterns.ts`

**Integration Point:** Hero background layer, behind heading/CTA, `aria-hidden="true"`

---

### 2. ServicesLandingTemplate — Service Orbit

**Visual Concept:** 6-8 service icons orbit around central "Services" core. Icons connected by glowing lines. Slow rotation, pause on hover.

**Technical Approach:**
- Canvas 2D
- Icon positions calculated via sin/cos on orbital paths
- Central core: 40px radius neon glow
- Orbit radius: 150-200px
- Lines: Bezier curves with gradient opacity
- Colors: neon-cyan core, neon-lime connections

**Fallback:**
- `prefers-reduced-motion`: Static icon arrangement in circle
- Mobile: Reduce to 4 icons or disable
- Low-power mode: Disable

**Performance Impact:** 8-12ms/frame (60fps desktop)

**Data-Driven:** Yes — icon list, orbit speeds, radius from data file

**Integration Point:** Hero section background or dedicated "Services Overview" section

---

### 3. ContactTemplate — Footer Wave Animation

**Visual Concept:** Neon sine wave animation in footer background. 2-3 overlapping waves with phase offset.

**Technical Approach:**
- Canvas 2D
- Sine wave: `y = amplitude * sin(x * frequency + phase + time)`
- 3 waves with different amplitudes, frequencies, phase offsets
- Colors: neon-cyan, neon-pink (alternating)
- Line width: 2-3px with glow

**Fallback:**
- `prefers-reduced-motion`: Static horizontal lines
- Mobile: Simplify to 1 wave
- Low-power mode: Disable

**Performance Impact:** 3-5ms/frame (minimal GPU cost, 60fps all devices)

**Data-Driven:** Yes — wave count, colors, speeds from data file

**Integration Point:** Footer background, full-width, `aria-hidden="true"`

---

### 4. BlogIndexTemplate — Content Particles

**Visual Concept:** 20-30 small particles representing articles. Particles drift slowly, brighten on mouse proximity, click redirects to article.

**Technical Approach:**
- Canvas 2D
- Each particle linked to blog post (ID, title for tooltip)
- Particles: 4-6px radius, color based on category
- Mouse proximity (100px): Particle scales 1.5x, shows tooltip
- Click: Navigate to post

**Fallback:**
- `prefers-reduced-motion`: Disable
- Mobile: Disable (touch interactions unreliable)

**Performance Impact:** 5-8ms/frame

**Data-Driven:** Yes — particle positions, colors, post mappings from data file

**Integration Point:** Dedicated "Explore Content" section or hero background

---

## Implementation Priorities

### Sprint 1 (This Week)
1. **FrontPageTemplate** — Hero Particle Field (Critical, homepage impact)
2. **ContactTemplate** — Footer Wave Animation (Quick win, low complexity)

### Sprint 2 (Next Week)
3. **ServicesLandingTemplate** — Service Orbit (High traffic page)
4. **BlogIndexTemplate** — Content Particles (Content discovery)

### Sprint 3 (Following Week)
5. **HostingTemplate** — Server Network (Technical storytelling)
6. **AIServicesLandingTemplate** — Brain Network (Visual consistency)

---

## Success Metrics

| Metric | Target |
|---|---|
| Frame rate | ≥ 60fps desktop, ≥ 30fps mobile |
| GPU time per frame | ≤ 15ms |
| Accessibility | 100% `prefers-reduced-motion` compliance |
| User engagement | +15% time on page (homepage) |
| Bounce rate | -5% (homepage) |

---

## Next Steps

1. **User approval** — Review recommendations, select priority integrations
2. **Create components** — Build new WebGL graphics per specifications
3. **Create data files** — `/src/app/data/webgl-patterns.ts` with all configuration
4. **Integrate into templates** — Add to approved pages
5. **Test performance** — Verify GPU budget compliance
6. **Test accessibility** — Verify reduced-motion fallbacks

---

**Report saved:** `/reports/2026-03/2026-03-18-webgl-expand-report.md`  
**Next:** Add approved items to `/tasks/task-list.md`
