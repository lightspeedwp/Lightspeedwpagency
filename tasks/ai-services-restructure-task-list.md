# AI services restructure — task list

**Last Updated:** March 17, 2026  
**Report:** `/reports/2026-03/2026-03-17-ai-services-restructure-audit.md`  
**Prompt:** `/prompts/ai-services-restructure.md`

---

## High priority — Ignite → Discover rename

- [ ] **Rename in `service-journey.ts`** — Change `name: 'Ignite'` → `name: 'Discover'`, update tagline to "Consult. Research. Strategise.", update icon to `Compass` or keep `MagnifyingGlass`, update service links to include AI consulting
- [ ] **Rename in `journey-stage-pages.ts`** — Change `slug: 'ignite'` → `slug: 'discover'`, `name: 'Ignite'` → `name: 'Discover'`, rewrite description/whyItMatters/outcomes to reflect AI-enhanced consulting. Update `clientRole.title` from "Your role during Ignite" → "Your role during Discover". Update `cta.title` from "Ready to Ignite Your Project?" → "Ready to discover your potential?"
- [ ] **Update `route-map.ts`** — Change `'journey-ignite': '/services/ignite'` → `'journey-discover': '/services/discover'`
- [ ] **Update `core.routes.tsx`** — Rename `JourneyIgniteRoute` → `JourneyDiscoverRoute`, change `slug="ignite"` → `slug="discover"`, update route path `services/ignite` → `services/discover`, add legacy redirect `{ path: 'services/ignite', element: <Navigate to="/services/discover" replace /> }`
- [ ] **Check header navigation** — Search `header-navigation.ts` and `SiteHeader.tsx` for any "Ignite" string references, update to "Discover"

## High priority — Service mapping updates

- [ ] **Update Discover stage services** — Add AI consulting service card, add content collection doc reference, keep Discovery & Strategy and Content Operations
- [ ] **Update Create stage services** — Add Figma prototyping, design systems as explicit cards. Ensure content services (prototype, design system, refined design prototype, accessible design) are represented
- [ ] **Update Build stage services** — Add "AI-assisted development" concept to service cards alongside WordPress Dev and Security
- [ ] **Update Launch stage services** — Add AI integrations (backend) as a service card alongside Hosting and Training
- [ ] **Update Grow stage services** — Add LLM.txt as a service concept alongside AI Search, SEO, AEO, Analytics, Performance
- [ ] **Update Evolve stage services** — Add "AI future strategy" and "AI advancements consulting" alongside existing AI services

## High priority — Mega AI services page

- [ ] **Create `ai-services-mega-data.tsx`** — Extract all mega page content to data file following established pattern. Include: hero content, 6 stage sections (title, description, accent colour, service cards, icon), trust/testimonials section, CTA content. Use Phosphor icon imports directly in data file
- [ ] **Redesign `AIServicesLandingTemplate.tsx`** — Transform from current 4-section layout (hero → grid → stats → approach → CTA) to mega page layout (hero → timeline → 6 stage sections → trust → CTA). Each stage section must: force dark background for neon compliance, use `--phase-accent` CSS variable, include compact service cards, link to journey stage page. Import content from `ai-services-mega-data.tsx`
- [ ] **Create `ai-services-mega.css`** — BEM styles for mega page. Blocks: `.ai-mega__hero`, `.ai-mega__timeline`, `.ai-mega__stage`, `.ai-mega__stage-header`, `.ai-mega__service-list`, `.ai-mega__trust`, `.ai-mega__cta`. All stages must use dark surface (`var(--color-black)` bg) with neon accent foreground text/borders per Guidelines neon colour rule. Use CSS variables only — zero hardcoded values

## Medium priority — Trust factor repositioning

- [ ] **Move testimonials up in `JourneyStageTemplate.tsx`** — Relocate testimonial section from position 6 to position 3 (after hero + description, before outcomes). This gives social proof earlier in the page scroll
- [ ] **Add testimonials to mega page** — Include a trust section with 2–3 testimonial cards between the stage sections and CTA

## Medium priority — Content enrichment

- [ ] **Add Migrations cross-reference** — In Discover and Build journey stage data, add a note/card referencing migrations as an optional entry point. Update `journey-stage-pages.ts` services arrays for both stages
- [ ] **Expand AI consulting content** — Write Discover stage description emphasising AI-enhanced consulting: "ask the right questions", content collection document, AI readiness assessment
- [ ] **Expand AI-assisted development content** — Write Build stage content mentioning AI code assistance, automated testing, accessibility scanning
- [ ] **Expand LLM.txt + AEO content** — Write Grow stage content covering LLM.txt protocol, answer engine optimisation, AI SEO strategies
- [ ] **Expand AI future strategy content** — Write Evolve stage content covering AI advancements consulting, future strategy planning, ongoing AI support

## Low priority — UI refinements

- [ ] **Create compact service list pattern** — New `ServiceCompactList` component using list/pill format instead of large cards. Smaller text, icon + title + one-liner on single row. For use on mega page and potentially journey pages
- [ ] **Consider tabbed sub-services** — Evaluate converting some service pages to tabbed sections on parent pages (e.g., content sub-services as tabs on Content page). Requires UX review before implementation
- [ ] **Reduce card text volume** — Audit service card descriptions across all templates. Shorten to 1–2 lines max. Use lists or expandable sections for detail

---

## Notes

- **WebGL headers:** Codebase search found zero WebGL/Canvas 3D/Three.js usage. All hero visuals are CSS-only (grids, gradients, neon glows, keyframes). The mega page should use enhanced CSS animations rather than actual WebGL, consistent with existing design system
- **Migrations anomaly:** Migrations is a "stage 0" that can feed into either Discover or Build. Keep `/services/migrations` route as-is, add cross-references from both stages
- **Neon compliance:** All stage sections on the mega page must force dark backgrounds per Guidelines v5.8.0 neon colour rule
- **Sentence case:** All new headings must use sentence case per Guidelines v5.7.0
