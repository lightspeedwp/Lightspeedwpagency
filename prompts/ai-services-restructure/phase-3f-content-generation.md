# AI content generation page — sub-prompt

**Category:** Scaffold  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md` (Phase 3)

---

## Purpose

Redesign the `/solutions/ai/content-generation` page to showcase LightSpeed's AI-powered content generation capabilities with interactive visuals, emphasising 10× content output, time savings, brand consistency and multilingual support.

---

## Route & files

- **Route:** `/solutions/ai/content-generation`
- **Template:** `AIContentGenerationTemplate.tsx`
- **Data file:** `/src/app/data/ai-content-generation.ts` (enhance existing)
- **CSS file:** `/src/styles/templates/ai-content-generation.css`

---

## Current state audit

**Template:** `AISubPageTemplate` with `variant="content"`  
**Hero:** Two-column layout with animated brain graphic (pulsing rings + orbit nodes)  
**Neon colours:** `--wp--preset--color--neon-pink` (primary), `--wp--preset--color--neon-cyan` (secondary)  
**Icon:** `PenNib` (72px) for hero graphic + badge  
**Animation:** CSS ring pulse + orbit float  
**Sections:** Hero, metrics (4), capabilities (6), audience benefits (4), pricing, FAQ

**Problems:**
- Pricing table distracts from value proposition
- Static metrics don't convey dynamic content generation
- Audience benefits lack visual differentiation
- No proof points or case studies
- Missing connection to lifecycle stages

---

## Redesign objectives

1. **Remove pricing** — Replace with outcome-driven metrics and consultation CTA
2. **Animated metrics** — Counter animations spinning to final values with particle bursts
3. **Visual content flow** — CSS-animated text "river" flowing across hero (replacing static brain)
4. **Audience carousel** — 3D flip cards for each audience category
5. **Lifecycle integration** — Add "Used in: Create stage" badge with link
6. **Trust signals** — Add testimonial after hero section
7. **Cross-linking** — Related services and solutions sections before CTA

---

## Content structure

### 1. Hero (full viewport)

- **Title:** "Content Generation AI" (neon-pink gradient)
- **Subheading:** "Generate on-brand content at scale"
- **Badge:** "Used in: Create stage" → links to `/services/create`
- **Description:** 2-3 sentences about AI-assisted content creation
- **CTAs:** Primary "Request AI content audit", Secondary "View AI services"
- **Background:** Dark surface with CSS grid overlay tinted neon-pink (6% opacity)
- **Graphic:** CSS-animated "flowing text river" — animated text blocks flowing horizontally with neon-pink particles swirling around words. Text pulled from sample blog titles, product descriptions, keywords. Pause on hover.

### 2. Impact metrics (4 cards)

Animated counters with particle bursts on completion:

- **10× content output** — "Produce 10 times more content"
- **80% time saved** — "Reduce content creation time"
- **95% brand accuracy** — "Maintain voice consistency"
- **40+ languages** — "Multilingual content support"

### 3. Trust signal (testimonial)

Quote from content publisher or e-commerce client emphasising speed, quality and brand consistency. Include client logo and role.

### 4. Capabilities (6 feature cards)

Each card with icon, title, description:

1. **Blog post automation** (`ArticleNyTimes` icon) — AI-generated blog posts matching your tone
2. **Product descriptions** (`ShoppingCart` icon) — Unique descriptions for thousands of products
3. **Multi-language support** (`Globe` icon) — Content in 40+ languages with cultural adaptation
4. **AI image generation** (`Images` icon) — Custom visuals generated from prompts
5. **Content refresh** (`ArrowsClockwise` icon) — Update existing content for relevance
6. **Plagiarism & fact check** (`ShieldCheck` icon) — Automated quality assurance

### 5. Audience benefits (4 categories)

**Interactive 3D flip cards** (CSS `transform: rotateY` on hover):

#### Card 1: E-commerce stores
- **Front:** Icon (`Storefront`), title, industries list
- **Back:** Benefits bullets:
  - Generate unique product descriptions at scale
  - Create category landing pages automatically
  - Multilingual product content
  - SEO-optimised meta descriptions

#### Card 2: Content publishers
- **Front:** Icon (`Newspaper`), title, industries
- **Back:** Benefits:
  - 10× faster editorial cycles
  - AI-assisted research and outlining
  - Style guide enforcement
  - Automated content refreshes

#### Card 3: Marketing agencies
- **Front:** Icon (`ChartBar`), title, industries
- **Back:** Benefits:
  - Scale client content production
  - Consistent multi-client brand voices
  - Rapid campaign ideation
  - Automated social media variants

#### Card 4: Multi-language sites
- **Front:** Icon (`Translate`), title, industries
- **Back:** Benefits:
  - Cultural adaptation, not just translation
  - 40+ language support
  - Maintain brand voice across languages
  - Automated localisation workflows

### 6. Process overview (optional)

4-step process cards:
1. **Brief & training** — Define brand voice, goals, examples
2. **AI generation** — Content created following guidelines
3. **Human review** — Quality assurance and refinement
4. **Publish & iterate** — Deploy and optimise based on performance

### 7. Related services & solutions

**Services:** Design systems, Content strategy, Content SEO  
**Solutions:** AI SEO, AI analytics

### 8. CTA section

- **Title:** "Scale your content with AI"
- **Benefits list:** Maintain brand voice, 10× output, multilingual support, human oversight
- **Primary CTA:** "Request content generation audit"
- **Secondary CTA:** "Book AI consultation"

### 9. FAQ accordion

Questions:
- How does AI maintain our brand voice?
- Will AI-generated content rank in search engines?
- How much human review is required?
- Can AI integrate with our existing CMS?
- What languages are supported?
- How do you ensure plagiarism-free content?

---

## CSS animation concepts

### Flowing text river (hero)

```css
.ai-content-hero__text-river {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  height: 400px;
  overflow: hidden;
}

.ai-content-hero__text-block {
  position: absolute;
  font-size: var(--text-sm);
  color: var(--wp--preset--color--neon-pink);
  opacity: 0.6;
  white-space: nowrap;
  animation: text-flow 15s linear infinite;
}

@keyframes text-flow {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}

.ai-content-hero__particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--wp--preset--color--neon-pink);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--wp--preset--color--neon-pink);
  animation: particle-swirl 8s ease-in-out infinite;
}

@keyframes particle-swirl {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.5); }
}
```

### Flip card animation

```css
.ai-content-audience__card {
  perspective: 1000px;
  height: 300px;
}

.ai-content-audience__card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.ai-content-audience__card:hover .ai-content-audience__card-inner {
  transform: rotateY(180deg);
}

.ai-content-audience__card-front,
.ai-content-audience__card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: var(--color-black);
  border: 1px solid var(--wp--preset--color--neon-pink);
  padding: var(--spacing-6);
}

.ai-content-audience__card-back {
  transform: rotateY(180deg);
}
```

### Counter animation (metrics)

```css
.ai-content-metrics__value {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--wp--preset--color--neon-pink);
  display: inline-block;
}

/* Animated via JS — count from 0 to target */
```

---

## Lifecycle connection

**Badge placement:** Below hero title  
**Badge text:** "Used in: Create stage"  
**Badge style:** Dark background, neon-pink border, neon-pink glow  
**Link:** `/services/create#content-operations`

**Explanation:** Content generation is essential during the Create stage when building content libraries, product catalogs and editorial calendars. AI accelerates content production while maintaining brand consistency.

---

## Trust signals

**Testimonial position:** Section 3 (after metrics)  
**Format:** Quote card with neon-pink accent border  
**Content example:**  
> "LightSpeed's AI content generation helped us publish 200+ product pages in one week while maintaining our brand voice perfectly. Our SEO traffic increased 150% in three months."  
> — Sarah Chen, E-commerce Director

---

## Design system compliance

- **Neon rule:** All neon-pink foreground elements on `var(--color-black)` background
- **Sentence case:** All headings sentence case only
- **Icons:** `@phosphor-icons/react` exclusively
- **Typography:** `var(--font-primary)` for headings, `var(--font-secondary)` for body
- **Spacing:** `var(--spacing-*)` tokens only
- **BEM classes:** `.ai-content-hero__*`, `.ai-content-metrics__*`, etc.
- **Reduced motion:** Static gradient fallback, no animations
- **File size:** Template <300 lines, CSS <400 lines

---

## Related pages

**Services:**
- `/services/create` — Content operations
- `/services/ai/seo` — Content optimisation for search
- `/solutions/ai/seo` — AI-powered SEO

**Solutions:**
- `/solutions/ai/analytics` — Track content performance
- `/solutions/ai/chatbots` — AI-powered support content

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial prompt — remove pricing, add animations, lifecycle badge, trust signals |
