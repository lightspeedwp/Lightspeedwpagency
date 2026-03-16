# CSS — Task List

**Category:** Audit  
**Version:** 2.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Source Report:** `/reports/2026-03/2026-03-15-css-audit.md`  
**Trigger:** `audit css`

---

## Run: 2026-03-15

### P2 — File Size Violations (batch splits)

- [x] **C2.1:** Split `service-detail.css` (861 lines) into hero, grid, and detail sub-files — Split into 4 sub-files in `/src/styles/templates/service-detail/`: `service-detail-hero.css` (131 lines), `service-detail-grids.css` (243 lines), `service-detail-cards.css` (210 lines), `service-detail-sections.css` (252 lines). Original file converted to 38-line import orchestrator. 862 → 38 lines (96% reduction).
- [x] **C2.2:** Split `portfolio-base.css` (840 lines) into archive, single, and filter sub-files — Split into 3 sub-files in `/src/styles/templates/portfolio-base/`: `portfolio-base-heroes.css` (209 lines), `portfolio-base-cards.css` (301 lines), `portfolio-base-content.css` (276 lines). Original file converted to 32-line import orchestrator. 841 → 32 lines (96% reduction).
- [x] **C2.3:** Split `about-base.css` (823 lines) into hero, team, and timeline sub-files — Split into 3 sub-files in `/src/styles/templates/about-base/`: `about-base-hero.css` (226 lines), `about-base-cards.css` (298 lines), `about-base-sections.css` (222 lines). Original file converted to 33-line import orchestrator. 824 → 33 lines (96% reduction).
- [x] **C2.4:** Split `page-about-history.css` (816 lines) into hero and timeline sub-files — Split into 3 sub-files in `/src/styles/templates/page-about-history/`: `page-about-history-hero.css` (186 lines), `page-about-history-timeline.css` (296 lines), `page-about-history-sections.css` (278 lines). Original file converted to 21-line import orchestrator. 817 → 21 lines (97% reduction).
- [x] **C2.5:** Split `section-styles.css` (794 lines) into section-type sub-files — Split into 4 sub-files in `/src/styles/section-styles/`: `section-styles-hero.css` (131 lines), `section-styles-cta.css` (245 lines), `section-styles-content.css` (237 lines), `section-styles-misc.css` (194 lines). Original file converted to 22-line import orchestrator. 795 → 22 lines (97% reduction).

### P3 — Bulk Splits (C3.1 — 700+ line batch)

- [x] **C3.1a:** Split `page-solution-redesign-optimized.css` (821 lines) into 3 sub-files in `/src/styles/templates/page-solution-redesign/`: `redesign-variables-hero.css` (~143 lines), `redesign-sections.css` (~264 lines), `redesign-grids-pricing.css` (~377 lines). Original → 32-line orchestrator. 821 → 32 lines (96% reduction).
- [x] **C3.1b:** Split `page-styleguide.css` (793 lines) into 4 sub-files in `/src/styles/templates/page-styleguide/`: `styleguide-hero.css` (~165 lines), `styleguide-effects.css` (~201 lines), `styleguide-tokens.css` (~213 lines), `styleguide-components.css` (~188 lines). Original → 28-line orchestrator. 793 → 28 lines (96% reduction).
- [x] **C3.1c:** Split `design-tokens-reference.css` (756 lines) into 3 sub-files in `/src/styles/templates/design-tokens-reference/`: `tokens-hero-nav.css` (~158 lines), `tokens-visual.css` (~279 lines), `tokens-misc.css` (~319 lines). Original → 19-line orchestrator. 756 → 19 lines (97% reduction).
- [x] **C3.1d:** Split `team-page.css` (748 lines) into 3 sub-files in `/src/styles/templates/team-page/`: `team-hero.css` (~152 lines), `team-leadership.css` (~318 lines), `team-culture-stats.css` (~249 lines). Original → 28-line orchestrator. 748 → 28 lines (96% reduction).
- [x] **C3.1e:** Split `page-about-process.css` (736 lines) into 3 sub-files in `/src/styles/templates/page-about-process/`: `process-hero.css` (~118 lines), `process-timeline.css` (~310 lines), `process-methodology.css` (~195 lines). Original → 24-line orchestrator. 736 → 24 lines (97% reduction).
- [x] **C3.1f:** Split `docs-generator.css` (720 lines) into 3 sub-files in `/src/styles/templates/docs-generator/`: `docs-gen-layout.css` (~258 lines), `docs-gen-cards.css` (~315 lines), `docs-gen-misc.css` (~138 lines). Original → 20-line orchestrator. 720 → 20 lines (97% reduction).
- [x] **C3.1g:** Split `lsx-sharing-page.css` (708 lines) into 3 sub-files in `/src/styles/templates/lsx-sharing-page/`: `sharing-hero.css` (~221 lines), `sharing-content.css` (~356 lines), `sharing-modes.css` (~109 lines). Original → 20-line orchestrator. 708 → 20 lines (97% reduction).
- [x] **C3.1h:** Split `system-base.css` (706 lines) into 3 sub-files in `/src/styles/templates/system-base/`: `system-base-hero-stats.css` (~163 lines), `system-base-filters-cards.css` (~256 lines), `system-base-code-nav.css` (~247 lines). Original → 28-line orchestrator. 706 → 28 lines (96% reduction).
- [x] **C3.1i:** Split `pricing-page.css` (703 lines) into 3 sub-files in `/src/styles/templates/pricing-page/`: `pricing-hero.css` (~138 lines), `pricing-cards.css` (~358 lines), `pricing-modes.css` (~175 lines). Original → 24-line orchestrator. 703 → 24 lines (97% reduction).
- [x] **C3.1k:** Split `hero-base.css` (694 lines) into 3 sub-files in `/src/styles/patterns/hero/`: `hero-base-layout.css` (~260 lines), `hero-base-content.css` (~298 lines), `hero-base-variants.css` (~119 lines). Original → 25-line orchestrator. 694 → 25 lines (96% reduction).

### P3 — Bulk Splits (C3.1j — 600-690 line batch)

- [x] **C3.1j-1:** Split `page-about-culture.css` (686 lines) into 3 sub-files in `/src/styles/templates/page-about-culture/`: `culture-hero.css` (~142 lines), `culture-values-env.css` (~321 lines), `culture-perks-faq.css` (~199 lines). Original → 24-line orchestrator. 686 → 24 lines (97% reduction).
- [x] **C3.1j-2:** Split `solution-detail.css` (680 lines) into 3 sub-files in `/src/styles/templates/solution-detail/`: `solution-detail-hero.css` (~283 lines), `solution-detail-sections.css` (~257 lines), `solution-detail-modes.css` (~112 lines). Original → 25-line orchestrator. 680 → 25 lines (96% reduction).
- [x] **C3.1j-3:** Split `utility-base.css` (677 lines) into 3 sub-files in `/src/styles/templates/utility-base/`: `utility-base-error-search.css` (~323 lines), `utility-base-forms.css` (~223 lines), `utility-base-sitemap.css` (~96 lines). Original → 24-line orchestrator. 677 → 24 lines (96% reduction).
- [x] **C3.1j-4:** Split `portfolio-archive-optimized.css` (674 lines) into 3 sub-files in `/src/styles/templates/portfolio-archive-optimized/`: `pf-archive-grid-polaroid.css` (~202 lines), `pf-archive-spotlight.css` (~156 lines), `pf-archive-editorial-modes.css` (~279 lines). Original → 23-line orchestrator. 674 → 23 lines (97% reduction).
- [x] **C3.1j-5:** Split `wetu-importer-page.css` (674 lines) into 3 sub-files in `/src/styles/templates/wetu-importer-page/`: `wetu-hero.css` (~227 lines), `wetu-content.css` (~322 lines), `wetu-modes.css` (~100 lines). Original → 20-line orchestrator. 674 → 20 lines (97% reduction).
- [x] **C3.1j-6:** Split `portfolio-single.css` (670 lines) into 3 sub-files in `/src/styles/templates/portfolio-single/`: `portfolio-single-hero.css` (~142 lines), `portfolio-single-content.css` (~324 lines), `portfolio-single-related.css` (~176 lines). Original → 25-line orchestrator. 670 → 25 lines (96% reduction).
- [x] **C3.1j-7:** Split `page-insights-landing.css` (667 lines) into 3 sub-files in `/src/styles/templates/page-insights-landing/`: `insights-hero.css` (~126 lines), `insights-categories.css` (~248 lines), `insights-sections-modes.css` (~262 lines). Original → 20-line orchestrator. 667 → 20 lines (97% reduction).
- [x] **C3.1j-8:** Split `blog-base.css` (664 lines) into 3 sub-files in `/src/styles/templates/blog-base/`: `blog-base-hero.css` (~243 lines), `blog-base-cards.css` (~254 lines), `blog-base-nav.css` (~146 lines). Original → 19-line orchestrator. 664 → 19 lines (97% reduction).
- [x] **C3.1j-9:** Split `advanced-animations.css` (663 lines) into 3 sub-files in `/src/styles/advanced-animations/`: `advanced-animations-motion.css` (~238 lines), `advanced-animations-effects.css` (~243 lines), `advanced-animations-modes.css` (~162 lines). Original → 17-line orchestrator. 663 → 17 lines (97% reduction).
- [x] **C3.1j-10:** Split `hero-home.css` (652 lines) into 3 sub-files in `/src/styles/patterns/hero-home/`: `hero-home-layout.css` (~247 lines), `hero-home-visual.css` (~179 lines), `hero-home-modes.css` (~214 lines). Original → 19-line orchestrator. 652 → 19 lines (97% reduction).
- [x] **C3.1j-11:** Split `solution-base.css` (647 lines) into 3 sub-files in `/src/styles/templates/solution-base/`: `solution-base-hero.css` (~205 lines), `solution-base-features.css` (~205 lines), `solution-base-cta.css` (~201 lines). Original → 18-line orchestrator. 647 → 18 lines (97% reduction).
- [x] **C3.1j-12:** Split `systems-hub-template.css` (646 lines) into 3 sub-files in `/src/styles/templates/systems-hub-template/`: `systems-hub-hero.css` (~178 lines), `systems-hub-grid.css` (~170 lines), `systems-hub-tiers.css` (~265 lines). Original → 18-line orchestrator. 646 → 18 lines (97% reduction).
- [x] **C3.1j-13:** Split `roi-calculator.css` (642 lines) into 2 sub-files in `/src/styles/templates/roi-calculator/`: `roi-calc-hero.css` (~370 lines), `roi-calc-breakdown.css` (~275 lines). Original → 15-line orchestrator. 642 → 15 lines (98% reduction).
- [x] **C3.1j-14:** Split `testimonial-single.css` (639 lines) into 2 sub-files in `/src/styles/templates/testimonial-single/`: `testimonial-single-hero.css` (~322 lines), `testimonial-single-media.css` (~318 lines). Original → 15-line orchestrator. 639 → 15 lines (98% reduction).
- [x] **C3.1j-15:** Split `micro-interactions.css` (610 lines) into 2 sub-files in `/src/styles/micro-interactions/`: `micro-interactions-core.css` (~310 lines), `micro-interactions-effects.css` (~300 lines). Original → 15-line orchestrator. 610 → 15 lines (98% reduction).
- [x] **C3.1j-16:** Split `global-search.css` (600 lines) into 2 sub-files in `/src/styles/patterns/global-search/`: `global-search-overlay.css` (~370 lines), `global-search-states.css` (~230 lines). Original → 18-line orchestrator. 600 → 18 lines (97% reduction).

---

## Summary

| Priority | Tasks | Status |
|---|---|---|
| P2 (File size) | 5 | 5 done |
| P3 (700+ batch) | 10 | 10 done |
| P3 (600-690 batch) | 16 | 16 done |
| P3 (400-600 batch) | 1 | Open |
| **Total** | **32** | **31 done, 1 open** |