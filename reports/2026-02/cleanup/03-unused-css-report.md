# Unused CSS Files & Styles Report

**Date:** February 25, 2026
**Prompt:** `/prompts/cleanup/03-unused-css.md`

## CSS Files With No Matching Component (Orphaned)

| CSS File | Expected Component | Component Exists? | Action |
|---|---|---|---|
| `/src/styles/content/countdown-timer.css` | CountdownTimer | NO | **DELETE** |
| `/src/styles/content/testimonials-carousel.css` | TestimonialsCarousel | NO | **DELETE** |
| `/src/styles/content/weather-widget.css` | WeatherWidget | NO | **DELETE** |
| `/src/styles/patterns/instagram-feed.css` | InstagramFeed | NO | **DELETE** (also remove from index.css) |
| `/src/styles/patterns/portfolio-card.css` | (Used by PortfolioCard pattern) | YES — `/src/app/components/patterns/PortfolioCard.tsx` | KEEP |
| `/src/styles/patterns/portfolio-gallery.css` | (Used by PortfolioGallery) | YES — `/src/app/components/patterns/PortfolioGallery.tsx` | KEEP |
| `/src/styles/patterns/stat-counter.css` | StatCounter | YES — `/src/app/components/patterns/StatCounter.tsx` | KEEP |

## CSS Files Imported Globally But Should Be Route-Level

These are imported in `index.css` but are template-specific and should be loaded at the component level only:

| CSS File | Notes |
|---|---|
| `/src/styles/homepage-sections.css` | Homepage-only styles, should be in FrontPageTemplate |
| `/src/styles/solutions-template.css` | Solutions-only styles, should be in SolutionsTemplate |
| `/src/styles/compliance-scorecard.css` | Dev-tools only |
| `/src/styles/tabs.css` | Duplicate? Check against `/src/styles/blocks/design/tabs.css` |
| `/src/styles/back-to-top.css` | Component-specific, should be component-level import |
| `/src/styles/scroll-down.css` | Component-specific, should be component-level import |
| `/src/styles/header-simple.css` | Pattern-specific |
| `/src/styles/icon-features-list.css` | Pattern-specific |

## Actions Required

### Immediate Deletions (orphaned CSS)
1. Delete `/src/styles/content/countdown-timer.css`
2. Delete `/src/styles/content/testimonials-carousel.css`
3. Delete `/src/styles/content/weather-widget.css`
4. Delete `/src/styles/patterns/instagram-feed.css`
5. Remove corresponding `@import` lines from `/src/styles/index.css`

### Future Optimisation (route-level splitting)
- Move 8 global CSS imports to component-level imports (not urgent, performance improvement)
