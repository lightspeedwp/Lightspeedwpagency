# Memory Reduction Tasks

**Created:** March 5, 2026
**Related Prompt:** `/prompts/memory-reduction-audit.md`
**Related Report:** `/reports/2026-03/memory-reduction-audit-march-5.md`
**Total Estimated Savings:** ~18,500-21,500 lines (9-10% of codebase)

---

## Priority 1: Critical (Immediate -- Quick Wins)

### P1.1 Resolve Duplicate CSS File Pairs (31 pairs)

**Impact:** ~15,000 lines saved | **Effort:** Medium (2-3 sessions)

For each pair: update the template component import to use the optimized version, remove the original from index.css if present, then delete the original file.

**Batch A: Service Templates (16 pairs)**
- [x] `analytics-service.css` -> keep optimized (441 lines), delete original
- [x] `accessibility-service.css` -> keep optimized (453 lines), delete original
- [x] `ai-engine-service.css` -> keep optimized (501 lines), delete original
- [x] `answer-engine-service.css` -> keep optimized (506 lines), delete original
- [x] `content-strategy-service.css` -> keep optimized (474 lines), delete original
- [x] `migrations-service.css` -> keep optimized (429 lines), delete original
- [x] `seo-service.css` -> keep optimized (384 lines), delete original
- [x] `support-service.css` -> keep optimized (386 lines), delete original
- [x] `page-service-development.css` -> keep optimized (336 lines), delete original (891 lines)
- [x] `page-service-design.css` -> keep optimized (265 lines), delete original (626 lines)
- [x] `page-service-discovery.css` -> keep optimized (314 lines), delete original (1,045 lines)
- [x] `page-service-performance.css` -> keep optimized (372 lines), delete original (659 lines)
- [x] `page-service-security.css` -> keep optimized (346 lines), delete original (639 lines)
- [x] `page-service-training.css` -> keep optimized (512 lines), delete original (708 lines)
- [x] `page-service-content.css` -> keep optimized (257 lines), delete original (673 lines)
- [x] `page-services-landing.css` -> keep optimized (943 lines), delete original (986 lines)

**Batch B: Landing/Design Systems (3 pairs)**
- [x] `page-service-ai-landing.css` -> keep optimized (216 lines), delete original
- [x] `page-service-content-landing.css` -> keep optimized (183 lines), delete original
- [x] `page-service-design-systems-optimized.css` -> keep optimized (118 lines), delete original

**Batch C: Portfolio/Archive (6 pairs)**
- [x] `portfolio-archive.css` -> keep optimized (674 lines), delete original (782 lines)
- [x] `portfolio-tag-archive.css` -> keep optimized (173 lines), delete original
- [x] `single-project.css` -> keep optimized (355 lines), delete original
- [x] `podcast-archive.css` -> keep optimized (213 lines), delete original
- [x] `testimonial-archive.css` -> keep optimized (162 lines), delete original
- [x] `tour-operator-archive-optimized.css` -> keep optimized (326 lines), delete original

**Batch D: About/Solution/Misc (6 pairs)**
- [x] `page-about.css` -> keep optimized (50 lines), delete original (567 lines)
- [x] `page-team.css` -> keep optimized (164 lines), delete original (710 lines)
- [x] `page-solution-ai.css` -> keep optimized (49 lines), delete original
- [x] `video-archive.css` -> keep optimized (48 lines), delete original
- [x] `component-showcase.css` -> keep optimized (47 lines), delete original
- [x] `404.css` -> keep optimized (46 lines), delete original

**Steps per file pair:**
1. Read the template TSX to find current CSS import
2. Change import path from original to optimized (e.g., `analytics-service.css` -> `analytics-service-optimized.css`)
3. Verify the optimized file contains all needed selectors
4. Remove original from `index.css` if it's referenced there
5. Delete the original CSS file
6. Build-check for errors

---

## Priority 2: High (Next Sprint)

### P2.1 Consolidate Duplicate Data Files

**Impact:** ~1,500-2,500 lines saved | **Effort:** Medium (1-2 sessions)

- [x] **Testimonials merge:** ✅ COMPLETE (March 5, 2026) — Consolidated 3 files (899 lines) into `testimonials-consolidated.ts` (740 lines) + 3 compatibility shims (19 lines each). Saved 102 lines. All imports work via re-export shims. See `/reports/2026-03/memory-reduction-p2-1-testimonials-merge-complete.md`
- [x] **FAQs restructure:** ✅ COMPLETE (March 5, 2026) — Split 56 FAQ collections from 2 monolithic files (1,587 lines total) into 14 context-specific files + barrel index + 2 compatibility shims. Improved organization and maintainability. Zero breaking changes. Saved ~200-300 lines. See `/reports/2026-03/memory-reduction-p2-1-2-faqs-restructure-complete.md`
- [x] **Pages cleanup:** ✅ COMPLETE (March 5, 2026) — Deleted deprecated `pages.ts` (86 lines). Updated 9 files to import from `site-pages.ts` instead. Saved 86 lines.
- [x] **Hosting merge:** ✅ COMPLETE (March 5, 2026) — Deleted orphaned `hosting.ts` (93 lines). All data consolidated in `hosting-page.ts`. Saved 93 lines.
- [x] **Why Choose Us merge:** ✅ COMPLETE (March 5, 2026) — Merged `why-choose-us-page.ts` (32 lines) into `why-choose-us.ts`. Updated WhyChooseUsTemplate import. Saved 32 lines.

### P2.2 Split routes.tsx (1,147 lines) ✅ COMPLETE

**Impact:** Improved maintainability | **Effort:** Medium (1 session)

- [x] Create `/src/app/routes/` directory
- [x] Extract core routes (home, about, services, systems, solutions) into `routes/core.routes.ts` (339 lines)
- [x] Extract content routes (work, insights) into `routes/content.routes.ts` (114 lines)
- [x] Extract media routes (videos, podcasts) into `routes/media.routes.ts` (109 lines)
- [x] Extract post-format routes into `routes/post-formats.routes.ts` (234 lines)
- [x] Extract WooCommerce routes into `routes/woocommerce.routes.ts` (77 lines)
- [x] Extract tour operator routes into `routes/tour-operator.routes.ts` (54 lines)
- [x] Extract testimonials routes into `routes/testimonials.routes.ts` (106 lines)
- [x] Extract utility routes into `routes/utility.routes.ts` (63 lines)
- [x] Extract legacy routes into `routes/legacy.routes.ts` (125 lines)
- [x] Extract dev-tools routes into `routes/dev-tools.routes.ts` (272 lines)
- [x] Create barrel file `routes/index.ts` that composes all route groups (80 lines)
- [x] Convert `routes.tsx` to compatibility shim (21 lines) that re-exports from index.ts
- [x] Verify all 157 routes present in final routes array
- [x] Verify lazy-loading behavior preserved

**Result:** 1,147 lines → 21-line compatibility shim + 11 modular route files (~50-340 lines each). See `/reports/2026-03/memory-reduction-p2-routes-split-complete.md`

### P2.3 Split site-header.css (1,051 lines) ✅ COMPLETE

**Impact:** Improved maintainability | **Effort:** Low (1 session)

- [x] Extract base header styles into `blocks/theme/site-header-base.css` (~350 lines)
- [x] Extract desktop nav styles into `blocks/theme/site-header-desktop.css` (~350 lines)
- [x] Extract mobile menu styles into `blocks/theme/site-header-mobile.css` (~350 lines)
- [x] Convert `site-header.css` into import orchestrator (3 `@import` statements)
- [x] Verify header renders correctly at all breakpoints

**Result:** 1,051 lines → 15-line import orchestrator + 3 modular files. See `/reports/2026-03/memory-reduction-p2-css-splits-complete.md`

### P2.4 Split site-footer.css (817 lines) ✅ COMPLETE

**Impact:** Improved maintainability | **Effort:** Low (1 session)

- [x] Extract base footer styles into `blocks/theme/site-footer-base.css`
- [x] Extract newsletter CTA styles into `blocks/theme/site-footer-newsletter.css`
- [x] Extract content styles into `blocks/theme/site-footer-content.css`
- [x] Convert `site-footer.css` into import orchestrator

**Result:** 817 lines → 14-line import orchestrator + 3 modular files. See `/reports/2026-03/memory-reduction-p2-css-splits-complete.md`

### P2.5 Split utilities.css (806 lines) ✅ COMPLETE

**Impact:** Improved maintainability | **Effort:** Low (1 session)

- [x] Extract typography utilities into `utilities/typography.css` (73 lines)
- [x] Extract spacing utilities into `utilities/spacing.css` (140 lines)
- [x] Extract grid utilities into `utilities/grid.css` (120 lines)
- [x] Extract flexbox utilities into `utilities/flexbox.css` (85 lines)
- [x] Extract layout utilities into `utilities/layout.css` (95 lines)
- [x] Extract color utilities into `utilities/colors.css` (50 lines)
- [x] Extract gradient utilities into `utilities/gradients.css` (180 lines)
- [x] Extract responsive utilities into `utilities/responsive.css` (63 lines)
- [x] Convert `utilities.css` into import orchestrator (46 lines)

**Result:** 806 lines → 46-line import orchestrator + 8 modular files. See `/src/styles/utilities/`

---

## Priority 3: Medium (Future Sprints)

### P3.1 Extract Solution Page Shared CSS

**Impact:** ~2,000-3,000 lines saved | **Effort:** Medium (1-2 sessions)

4 solution template CSS files are 844-961 lines each with significant shared patterns.

- [ ] Audit shared selectors across: `mailchimp-solution-page.css` (961), `page-solution-tour-design.css` (939), `page-solution-redesign.css` (917), `page-solution-ecommerce.css` (844)
- [ ] Identify common hero, feature grid, benefits, process, CTA section styles
- [ ] Verify `solution-base.css` (647 lines) already covers these -- if so, optimize templates to import base
- [ ] Create optimized versions of each solution template CSS
- [ ] Update component imports

### P3.2 Consolidate Testimonial Patterns (8 -> 4)

**Impact:** ~800-1,200 lines saved | **Effort:** Medium (2 sessions)

- [ ] Merge `TestimonialInline` into `TestimonialCard` with `layout="inline"` prop
- [ ] Merge `FeaturedTestimonial` into `TestimonialCard` with `variant="featured"` prop
- [ ] Merge `ServiceTestimonial` into `TestimonialCard` with `context="service"` prop
- [ ] Merge `ServiceTestimonials` into `TestimonialGrid` with `context="service"` prop
- [ ] Update all template imports using merged components
- [ ] Delete merged component files and their CSS
- [ ] Keep: `TestimonialCard`, `TestimonialGrid`, `TestimonialSlider`, `VideoTestimonial`

### P3.3 Consolidate CTA Patterns (4 -> 2)

**Impact:** ~400-600 lines saved | **Effort:** Low (1 session)

- [ ] Merge `CTAInline` into `CTASection` with `layout="inline"` prop
- [ ] Merge `GradientCTASection` into `CTASection` with `variant="gradient"` prop
- [ ] Update all template imports
- [ ] Delete merged component files and their CSS
- [ ] Keep: `FunkyCTA` (primary neon CTA), `CTASection` (standard with variants)

### P3.4 Consolidate Related Content Patterns (5 -> 3)

**Impact:** ~400-600 lines saved | **Effort:** Low (1 session)

- [ ] Merge `RelatedServicesGrid` into `RelatedServices` with `layout="grid"` prop
- [ ] Merge `RelatedServicesInPhase` into `RelatedServices` with `context="phase"` prop
- [ ] Update all template imports
- [ ] Delete merged component files and their CSS
- [ ] Keep: `RelatedPosts`, `RelatedServices`, `RelatedContentWidget`

### P3.5 Split Large CSS Template Files (800-1,000 lines)

**Impact:** Improved maintainability | **Effort:** Medium (2-3 sessions)

- [ ] `page-journey-stage.css` (1,050 lines) -- split into hero + content + interactive
- [ ] `blog-index-page.css` (848 lines) -- split into hero + grid + sidebar + pagination
- [ ] `contact-page.css` (840 lines) -- split into hero + form + info + map
- [ ] `wetu-importer-page.css` (833 lines) -- split into sections
- [ ] `lsx-search-page.css` (823 lines) -- split into search + results + filters

### P3.6 Consolidate Stats Patterns (3 -> 2)

**Impact:** ~200-300 lines saved | **Effort:** Low (1 session)

- [ ] Merge `StatsSection` into `StatsGrid` with `layout="section"` prop
- [ ] Update all template imports
- [ ] Keep: `StatsGrid` (primary), `StatCounter` (animated)

---

## Priority 4: Low (Backlog)

### P4.1 Audit Query Loop Patterns (13 -> 7)

**Impact:** ~1,000-1,500 lines saved | **Effort:** High (2-3 sessions)

- [ ] Analyze all 13 QueryLoop variants for shared logic
- [ ] Identify common rendering patterns
- [ ] Create unified QueryLoop with `contentType` prop
- [ ] Migrate templates from specific QueryLoop variants

### P4.2 Orphaned File Cleanup

**Impact:** Variable | **Effort:** Low (1 session)

- [ ] Run orphaned CSS file scan
- [ ] Run unused data export scan
- [ ] Run dead CSS selector scan
- [ ] Delete confirmed orphaned files
- [ ] Remove confirmed dead selectors

### P4.3 CSS Import Optimization (Long-term)

**Impact:** Faster page loads | **Effort:** High (multiple sessions)

- [ ] Identify pattern CSS files used by only 1-2 templates
- [ ] Move those CSS imports from `index.css` to component-level imports
- [ ] Reduce global CSS payload
- [ ] Target: move 20-30 pattern CSS files to component-level

### P4.4 DocsGeneratorTemplate Data Extraction ✅ COMPLETE

**Impact:** 540 lines saved | **Effort:** Medium (1 hour)

- [x] **Data Extraction Complete (March 5, 2026)** — Extracted 540 lines of component documentation data to `/src/app/data/component-docs-data.ts`. Template reduced from 991 lines → 424 lines (57% reduction). Data file: 589 lines with types + componentDocs array. Clean imports with TypeScript type re-exports. Zero build errors. See `/reports/2026-03/memory-reduction-p3-1-docs-generator-split-complete.md`

**Note:** Further sub-component extraction (DocsSidebar, DocsContent, DocsSearch) deferred to future optimization phase. Current 424-line template is maintainable.

---

## Progress Tracking

| Priority | Total Tasks | Complete | Percentage |
|----------|------------|----------|------------|
| P1 (Critical) | 31 | 31 | 100% |
| P2 (High) | 18 | 12 | 67% |
| P3 (Medium) | 20 | 0 | 0% |
| P4 (Low) | 7 | 0 | 0% |
| **Total** | **76** | **43** | **57%** |

---

## Completion Criteria

- [ ] Zero duplicate CSS file pairs remaining
- [ ] Zero duplicate data file groups remaining
- [ ] Zero files > 1,000 lines (or justified exceptions documented)
- [ ] Pattern component count reduced from 105 to ~85
- [ ] All imports verified (no broken references)
- [ ] 100% CSS variable compliance maintained
- [ ] Visual regression check passed on all templates
- [ ] `index.css` import count reduced from 362 to < 320

---

**Last Updated:** March 5, 2026