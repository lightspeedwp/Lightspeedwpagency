# Data & Types Content Model Remediation

**Source Audit:** A2 — Data & Types Content Model Audit  
**Date:** 2026-02-21  
**Priority:** MEDIUM — Orphan data files waste bundle size; type gaps cause runtime errors  
**Status:** NOT STARTED

---

## Summary

The `/src/app/data/` directory contains 90+ data files accumulated over 14 months. Some may be orphaned (not imported by any template), some may be duplicates, and TypeScript type coverage may be inconsistent. This task list defines the remediation.

---

## Audit Procedure

For EACH file in `/src/app/data/` (90 files):

1. **Read the file** — Understand its exports
2. **Grep for imports** — `grep -r "from.*data/FILENAME" /src/app/` to find consumers
3. **Flag if orphaned** — No template or pattern imports it
4. **Check type definitions** — Are TypeScript interfaces properly defined?
5. **Check WordPress content model alignment** — Does the data structure map to WP post types / custom fields?

For EACH file in `/src/app/types/` (if any):

1. **Verify completeness** — Do types cover all data structures?
2. **Verify all types are consumed** — grep for import statements

---

## Known Data Files (90 files)

### Page-Specific Data (Expected: 1 consumer each)

| File | Expected Consumer | Status |
|------|------------------|--------|
| `404-page.ts` | `404Template.tsx` | TODO |
| `about-page.ts` | `AboutTemplate.tsx` | TODO |
| `accessibility-service-page.ts` | `AccessibilityServiceTemplate.tsx` | TODO |
| `ai-engine-service-page.ts` | `AIEngineOptimisationTemplate.tsx` | TODO |
| `ai-integrations-page.ts` | `AIIntegrationsTemplate.tsx` | TODO |
| `answer-engine-service-page.ts` | `AnswerEngineOptimisationTemplate.tsx` | TODO |
| `blog-index-page.ts` | `BlogIndexTemplate.tsx` | TODO |
| `blog-post-page.ts` | `SinglePostTemplate.tsx` | TODO |
| `careers-page.ts` | `CareersTemplate.tsx` | TODO |
| `contact-page.ts` | `ContactPageTemplate.tsx` | TODO |
| `content-service-page.ts` | `ContentServiceTemplate.tsx` | TODO |
| `design-service-page.ts` | `DesignServiceTemplate.tsx` | TODO |
| `development-service-page.ts` | `DevelopmentServiceTemplate.tsx` | TODO |
| `discovery-service-page.ts` | `DiscoveryServiceTemplate.tsx` | TODO |
| `faq-page.ts` | `FAQTemplate.tsx` | TODO |
| `front-page.ts` | `FrontPageTemplate.tsx` | TODO |
| `guarantees-page.ts` | `GuaranteesTemplate.tsx` | TODO |
| `hosting-page.ts` | `HostingTemplate.tsx` | TODO |
| `journey-stage-pages.ts` | `JourneyStageTemplate.tsx` | TODO |
| `lsx-design-page.ts` | `LSXDesignTemplate.tsx` | TODO |
| `lsx-search-page.ts` | `LSXSearchTemplate.tsx` | TODO |
| `lsx-sharing-page.ts` | `LSXSharingTemplate.tsx` | TODO |
| `lsx-solution-page.ts` | `LSXSolutionTemplate.tsx` | TODO |
| `mailchimp-solution-page.ts` | `MailchimpSolutionTemplate.tsx` | TODO |
| `migrations-service-page.ts` | `MigrationsServiceTemplate.tsx` | TODO |
| `newsletter-service-page.ts` | `NewsletterServiceTemplate.tsx` | TODO |
| `performance-service-page.ts` | `PerformanceServiceTemplate.tsx` | TODO |
| `portfolio-archive-page.ts` | `PortfolioArchiveTemplate.tsx` | TODO |
| `portfolio-project-page.ts` | `PortfolioSingleTemplate.tsx` | TODO |
| `pricing-page.ts` | `PricingTemplate.tsx` | TODO |
| `publishers-page.ts` | `PublishersTemplate.tsx` | TODO |
| `publishers-solution-page.ts` | `PublishersTemplate.tsx` (verify) | TODO |
| `roi-calculator-page.ts` | `ROICalculatorTemplate.tsx` | TODO |
| `security-service-page.ts` | `SecurityServiceTemplate.tsx` | TODO |
| `service-page.ts` | `ServicesTemplate.tsx` | TODO |
| `services-landing-page.ts` | `ServicesLandingTemplate.tsx` | TODO |
| `team-page.ts` | `TeamTemplate.tsx` | TODO |
| `tour-operator-design-page.ts` | `TourOperatorDesignTemplate.tsx` | TODO |
| `tour-operator-page.ts` | `TourOperatorTemplate.tsx` | TODO |
| `wetu-importer-page.ts` | `WetuImporterTemplate.tsx` | TODO |
| `why-choose-us-page.ts` | `WhyChooseUsTemplate.tsx` | TODO |
| `woocommerce-redesign-page.ts` | `WooCommerceRedesignTemplate.tsx` | TODO |
| `woocommerce-solution-page.ts` | `WooCommerceSolutionTemplate.tsx` | TODO |
| `wordpress-redesign-page.ts` | `WordPressRedesignTemplate.tsx` | TODO |
| `wordpress-solution-page.ts` | `WordPressSolutionTemplate.tsx` | TODO |

### Shared Data (Expected: Multiple consumers)

| File | Expected Consumers | Status |
|------|-------------------|--------|
| `blog-posts.ts` | BlogIndex, CategoryArchive, TagArchive, DateArchive | TODO |
| `company.ts` | About, Team, Footer | TODO |
| `comparisons.ts` | FeatureComparison, Pricing | TODO |
| `cta.ts` | Multiple CTAs across templates | TODO |
| `faqs.ts` | FAQ sections across 12+ templates | TODO |
| `faqs-extended.ts` | Extended FAQ pages | TODO |
| `guarantees.ts` | Guarantees, WhyChooseUs | TODO |
| `homepage.ts` | FrontPageTemplate | TODO |
| `hosting.ts` | HostingTemplate | TODO |
| `index.ts` | Barrel export | TODO |
| `legal.ts` | PrivacyPolicy, TermsOfService | TODO |
| `logos.ts` | SocialProof across templates | TODO |
| `maintenance.ts` | Support, Hosting | TODO |
| `page-switcher.ts` | DevTools PageSwitcher | TODO |
| `pages.ts` | Navigation, SiteHeader, SiteFooter | TODO |
| `podcasts.ts` | PodcastArchive, SinglePodcast | TODO |
| `portfolio-projects.ts` | PortfolioArchive, PortfolioSingle | TODO |
| `posts-formats.ts` | Post format templates | TODO |
| `pricing.ts` | PricingTemplate, HostingTemplate | TODO |
| `process.ts` | AboutProcess, WhyChooseUs | TODO |
| `search.ts` | SearchResults, GlobalSearch | TODO |
| `seo.ts` | SEOServiceTemplate | TODO |
| `service-journey.ts` | JourneyStage, Services | TODO |
| `services.ts` | ServicesTemplate, ServicesLanding | TODO |
| `services-detailed.ts` | Service detail pages | TODO |
| `services-page.ts` | ServicesTemplate | TODO |
| `site-pages.ts` | SiteMap, Navigation | TODO |
| `social-proof.ts` | SocialProof pattern | TODO |
| `solutions.ts` | SolutionsTemplate | TODO |
| `solutions-detailed.ts` | Solution detail pages | TODO |
| `taxonomies.ts` | Archive filters, categories | TODO |
| `team.ts` | TeamTemplate, AboutTemplate | TODO |
| `testimonials.ts` | TestimonialsTemplate, TestimonialGrid | TODO |
| `testimonials-extended.ts` | Extended testimonial pages | TODO |
| `tour-operator.ts` | TourOperator templates | TODO |
| `tour-operators-solution-page.ts` | TourOperatorDesign | TODO |
| `tutorials.ts` | TutorialsTemplate | TODO |
| `videos.ts` | VideoArchive, SingleVideo | TODO |
| `wetu-solution-page.ts` | WetuImporter | TODO |
| `why-choose-us.ts` | WhyChooseUsTemplate | TODO |
| `woocommerce.ts` | WooCommerce templates | TODO |

### Potential Duplicates to Investigate

- [ ] `about-page.ts` vs `about.ts` — Are both needed?
- [ ] `service-page.ts` vs `services-page.ts` vs `services.ts` — Consolidate?
- [ ] `publishers-page.ts` vs `publishers-solution-page.ts` — Separate data?
- [ ] `testimonials.ts` vs `testimonials-extended.ts` — Consolidate?
- [ ] `faqs.ts` vs `faqs-extended.ts` — Consolidate?
- [ ] `wetu-importer-page.ts` vs `wetu-solution-page.ts` — Separate data?
- [ ] `tour-operator-page.ts` vs `tour-operators-solution-page.ts` vs `tour-operator-design-page.ts` — Consolidate?

---

## Remediation Actions

### Phase 1: Identify Orphans
- [ ] Run `grep -r` for every data file to identify orphans
- [ ] List all orphaned files for deletion review

### Phase 2: Consolidate Duplicates
- [ ] Merge duplicate data files
- [ ] Update all import statements

### Phase 3: Type Coverage
- [ ] Verify all exported data has TypeScript interfaces
- [ ] Create missing interfaces
- [ ] Ensure all interfaces align with WordPress content model

### Phase 4: Index Cleanup
- [ ] Update `/src/app/data/index.ts` barrel export
- [ ] Remove deleted files from barrel

---

## Definition of Done

- [ ] Every data file has at least one consumer (no orphans)
- [ ] No duplicate data across files
- [ ] Every export has a TypeScript interface
- [ ] Barrel export (`index.ts`) is clean and complete
- [ ] All data structures map to WordPress content model
