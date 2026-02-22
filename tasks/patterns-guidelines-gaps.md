# Patterns Guidelines Gaps

**Source Audit:** A5 — Patterns Coverage Audit  
**Date:** 2026-02-21  
**Priority:** MEDIUM — Patterns without guidelines lead to inconsistent implementations  
**Status:** NOT STARTED

---

## Summary

The project has **76 pattern components** in `/src/app/components/patterns/` but only **31 guideline files** in `/guidelines/patterns/`. This represents **41% coverage** — 45 patterns are missing guidelines.

---

## Coverage Matrix

### Patterns WITH Guidelines (31 — OK)

| Pattern Component | Guideline File | Status |
|------------------|----------------|--------|
| `ArchiveCTA.tsx` | `ArchiveCTA.md` | OK |
| `ArchiveHeader.tsx` | `ArchiveHeader.md` | OK |
| `CardGrid.tsx` | `CardGrid.md` | OK |
| `CaseStudyPreview.tsx` | `CaseStudyPreview.md` | OK |
| `ContactForm.tsx` | `ContactForm.md` | OK |
| `CTAInline.tsx` | `CTAInline.md` | OK |
| `EmptyState.tsx` | `EmptyState.md` | OK |
| `FAQSection.tsx` | `FAQSection.md` | OK |
| `FeatureComparison.tsx` | `FeatureComparison.md` | OK |
| `FilterBar.tsx` | `FilterBar.md` | OK |
| `FooterNewsletter.tsx` | `FooterNewsletter.md` | OK |
| `HeroHome.tsx` | `HeroHome.md` | OK |
| `Hero.tsx` | `HeroMinimal.md` / `HeroGradient.md` / `HeroFullHeight.md` | OK |
| `NewsletterSignup.tsx` | `NewsletterSignup.md` | OK |
| `PaginationNav.tsx` | `PaginationNav.md` | OK |
| `PricingTable.tsx` | `PricingTable.md` | OK |
| `ProcessTimeline.tsx` | `ProcessTimeline.md` | OK |
| `ServicesCard.tsx` | `ServicesCard.md` | OK |
| `SocialProof.tsx` | `SocialProof.md` | OK |
| `StatsSection.tsx` | `StatsSection.md` | OK |
| `TeamGrid.tsx` | `TeamGrid.md` | OK |
| `Timeline.tsx` | `Timeline.md` | OK |

### Patterns WITHOUT Guidelines (45+ — GAPS)

#### Priority: HIGH (Used across multiple templates)

- [ ] **`FunkyCTA.tsx`** — Core CTA pattern used on 20+ pages. Needs guideline defining props, variants, BEM structure, funky treatments.
- [ ] **`TestimonialGrid.tsx`** — Used on 8+ pages. Needs columns, variants (cards/quotes), rating display.
- [ ] **`FeatureGrid.tsx`** — Used on 10+ pages. Needs icon system, column counts, hover effects.
- [ ] **`ProcessSteps.tsx`** — Used on 5+ pages. Needs numbered badges, connecting lines, gradient treatments.
- [ ] **`StatsGrid.tsx`** — Used on 5+ pages. Needs stat formatting, icon placement, gradient values.
- [ ] **`BenefitsGrid.tsx`** — Used on 4+ pages. Needs checkmark styling, grid layouts.
- [ ] **`GradientCTASection.tsx`** — Secondary CTA pattern. Needs gradient variants, dark mode.
- [ ] **`CTASection.tsx`** — Original CTA pattern (pre-funky). Needs deprecation notice or migration guide.
- [ ] **`WhyChooseUs.tsx`** — Reusable pattern. Needs card types, proof badges, icon mapping.

#### Priority: MEDIUM (Used on 1-3 templates)

- [ ] **`AuthorBio.tsx`** — Blog posts. Needs avatar, social links, bio layout.
- [ ] **`ChallengesGrid.tsx`** — Solution pages. Needs challenge cards, icon system.
- [ ] **`ContactInfo.tsx`** — Contact page. Needs info cards, icon mapping, sticky sidebar.
- [ ] **`FeaturedProjectShowcase.tsx`** — Portfolio/solutions. Needs stats overlay, testimonial integration.
- [ ] **`FeaturedProjectText.tsx`** — Portfolio. Needs text-based project display.
- [ ] **`FeaturedProjectVideo.tsx`** — Portfolio. Needs video embed, project metadata.
- [ ] **`FeaturesHome.tsx`** — Homepage. Needs icon cards, grid layout.
- [ ] **`FeatureIconGrid.tsx`** — Service pages. Needs icon system, responsive grid.
- [ ] **`GlobalSearchOverlay.tsx`** — Site-wide search. Needs overlay behavior, keyboard nav.
- [ ] **`HeaderSimple.tsx`** — Page headers. Needs breadcrumb integration, title/subtitle.
- [ ] **`IconFeaturesList.tsx`** — Feature lists with icons. Needs vertical/horizontal variants.
- [ ] **`IntegrationsGrid.tsx`** — Integration partner logos. Needs grid layout, hover effects.
- [ ] **`LogoGrid.tsx`** — Client logos. Needs grayscale hover, responsive columns.
- [ ] **`PortfolioSlider.tsx`** — Portfolio carousel. Needs slick-carousel integration, navigation.
- [ ] **`ServiceOfferingsGrid.tsx`** — Service pages. Needs service cards, pricing indicators.
- [ ] **`SolutionCardsGrid.tsx`** — Solutions. Needs solution cards, hover effects.
- [ ] **`SolutionsDetailGrid.tsx`** — Solution details. Needs feature lists, comparison.
- [ ] **`TestimonialInline.tsx`** — Inline quote. Needs quote styling, attribution.
- [ ] **`ThemeShowcaseGrid.tsx`** — Theme demos. Needs preview cards, live demo links.
- [ ] **`TimelineSection.tsx`** — History/process. Needs milestone markers, alternating layout.
- [ ] **`TwoColumnImpactSection.tsx`** — Impact statistics. Needs large numbers, descriptions.
- [ ] **`UseCasesGrid.tsx`** — Use case cards. Needs industry icons, descriptions.
- [ ] **`ValuesSection.tsx`** — Company values. Needs value cards, icon system.
- [ ] **`VerticalProcessSteps.tsx`** — Vertical step layout. Needs numbered steps, connecting line.
- [ ] **`VideoTestimonial.tsx`** — Video testimonials. Needs thumbnail, play button, metadata.
- [ ] **`WordPressServices.tsx`** — WP-specific services. Needs service cards, CTA integration.

#### Priority: LOW (Query Loop / Widget patterns)

- [ ] **`QueryLoop.tsx`** — Base query loop. Needs pagination, filtering, layout variants.
- [ ] **`QueryLoopAudio.tsx`** — Audio post format loop.
- [ ] **`QueryLoopCTAs.tsx`** — CTA collection loop.
- [ ] **`QueryLoopChat.tsx`** — Chat/aside post format.
- [ ] **`QueryLoopFAQs.tsx`** — FAQ collection loop.
- [ ] **`QueryLoopGallery.tsx`** — Gallery post format.
- [ ] **`QueryLoopPortfolio.tsx`** — Portfolio loop.
- [ ] **`QueryLoopPosts.tsx`** — Standard posts loop.
- [ ] **`QueryLoopProducts.tsx`** — Product loop.
- [ ] **`QueryLoopServices.tsx`** — Services loop.
- [ ] **`QueryLoopSolutions.tsx`** — Solutions loop.
- [ ] **`QueryLoopTestimonials.tsx`** — Testimonials loop.
- [ ] **`QueryLoopVideo.tsx`** — Video post format loop.
- [ ] **`ActivityFeedWidget.tsx`** — Dashboard widget.
- [ ] **`ContentStatsWidget.tsx`** — Stats widget.
- [ ] **`RecentPostsWidget.tsx`** — Recent posts sidebar.
- [ ] **`RelatedContentWidget.tsx`** — Related content sidebar.
- [ ] **`TaxonomyFilter.tsx`** — Filter by taxonomy.
- [ ] **`TrendingTopicsWidget.tsx`** — Trending topics sidebar.

---

## Guideline Template

Each new guideline MUST follow this structure:

```markdown
# PatternName Pattern

**Component:** `/src/app/components/patterns/PatternName.tsx`
**CSS File:** `/src/styles/patterns/pattern-name.css`
**BEM Block:** `.pattern-name`
**WordPress Block:** `wp:pattern/lsx-design-pattern-name`

## Purpose
[What this pattern does and when to use it]

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|

## BEM Structure
```css
.pattern-name { }
.pattern-name__header { }
.pattern-name__grid { }
.pattern-name__card { }
```

## Variants
[List visual variants and modifiers]

## Data Source
[Which `/src/app/data/` file provides content]

## Funky Treatments
[Which funky elements this pattern should have]

## Dark Mode
[Dark mode considerations]

## Accessibility
[ARIA attributes, keyboard nav, screen readers]

## Usage Example
```tsx
<PatternName prop={value} />
```
```

---

## Definition of Done

- [ ] All 76 patterns have corresponding guideline files
- [ ] All guidelines follow the standard template
- [ ] All guidelines reference correct file paths
- [ ] All guidelines document BEM structure
- [ ] All guidelines document funky treatments
- [ ] Coverage: 100% (76/76)
