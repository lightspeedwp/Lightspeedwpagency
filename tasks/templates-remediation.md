# Templates Remediation Task List

**Source Audit:** A7 — Templates Completeness Audit  
**Date:** 2026-02-21  
**Priority:** HIGH — Templates are the primary deliverable of the funky redesign  
**Status:** NOT STARTED

---

## Summary

The project has **110+ template files** in `/src/app/components/templates/` but only **1 guideline file** (`overview-templates.md`) in `/guidelines/templates/`. Each template needs auditing for data wiring, BEM compliance, dark mode, funky status, and mobile responsiveness.

---

## Audit Procedure

For EACH template in `/src/app/components/templates/`:

1. **Read the `.tsx` file** — Document section structure
2. **Read the corresponding `.css` file** in `/src/styles/templates/`
3. **Check data imports** — From `/src/app/data/` or hardcoded?
4. **Check BEM compliance** — WordPress utility classes or Tailwind?
5. **Check dark mode** — `.dark` selectors in CSS?
6. **Check reduced motion** — `prefers-reduced-motion` guards?
7. **Score funky status** — FUNKY / PARTIAL / PLAIN / BROKEN
8. **Cross-reference route** — Is it connected in routes?

---

## Per-Template Component Guideline Structure

Each template needs a component guideline that defines:

```markdown
# TemplateName

**File:** `/src/app/components/templates/TemplateName.tsx`
**CSS:** `/src/styles/templates/template-name.css`
**Route:** `/route-path`
**BEM Block:** `.page-name`
**Archetype:** Content Hub / Single Detail / Utility Page / Editorial Listing

## Page Structure

### Section 1: Hero
- **Pattern:** HeroHome / Hero / FunkyHero
- **BEM:** `.page-name__hero`
- **Data:** `heroData` from `/src/app/data/page-name.ts`
- **Funky Treatments:** Mesh grid, orb glow, gradient text, parallax
- **Dark Mode:** Overlay opacity adjustment
- **Mobile:** Content stacks, orbs hidden

### Section 2: Stats
- **Pattern:** StatsGrid / StatsSection
- **BEM:** `.page-name__stats`
- **Data:** `statsData` from data file
- **Funky Treatments:** Glassmorphism cards, gradient values
- **Dark Mode:** Card surface swap
- **Mobile:** 1-column stack

### Section N: ...
[Continue for every section]

## Blocks Used
- Container
- Button (design/Buttons)
- ScrollReveal

## Patterns Used
- FunkyCTA
- FAQSection
- TestimonialGrid

## Parts Used
- BreadcrumbPart

## Data Sources
- `/src/app/data/page-name.ts`
- `/src/app/data/faqs.ts`

## Funky Score
- **Current:** PARTIAL (hero funky, body sections plain)
- **Target:** FUNKY (all sections treated)
- **Missing Treatments:** [list]

## Accessibility
- [ ] Single H1
- [ ] Heading hierarchy
- [ ] Touch targets 48x48px
- [ ] Focus states
- [ ] Screen reader labels
```

---

## Template Inventory (110+ files)

### Customer-Facing Pages (Priority: CRITICAL)

| Template | Route | CSS File | Data File | Funky Status | Guideline |
|----------|-------|----------|-----------|-------------|-----------|
| `FrontPageTemplate.tsx` | `/` | `page-front-page.css` | `front-page.ts` | FUNKY | MISSING |
| `AboutTemplate.tsx` | `/about` | `page-about.css` | `about-page.ts` | PARTIAL | MISSING |
| `ServicesTemplate.tsx` | `/services` | `services-page.css` | `services-page.ts` | PARTIAL | MISSING |
| `ContactPageTemplate.tsx` | `/contact` | `page-contact.css` | `contact-page.ts` | PARTIAL | MISSING |
| `PricingTemplate.tsx` | `/pricing` | `pricing-page.css` | `pricing-page.ts` | FUNKY | MISSING |
| `FAQTemplate.tsx` | `/faq` | `page-faq.css` | `faq-page.ts` | FUNKY | MISSING |
| `BlogIndexTemplate.tsx` | `/blog` | `blog-index-page.css` | `blog-index-page.ts` | FUNKY | MISSING |
| `WhyChooseUsTemplate.tsx` | `/why-choose-us` | `why-choose-us.css` | `why-choose-us-page.ts` | FUNKY | MISSING |
| `GuaranteesTemplate.tsx` | `/guarantees` | `guarantees.css` | `guarantees-page.ts` | FUNKY | MISSING |
| `TestimonialsTemplate.tsx` | `/testimonials` | `testimonials-page.css` | `testimonials.ts` | FUNKY | MISSING |
| `TeamTemplate.tsx` | `/about/team` | `team-page.css` | `team-page.ts` | PARTIAL | MISSING |
| `CareersTemplate.tsx` | `/about/careers` | `careers-page.css` | `careers-page.ts` | PARTIAL | MISSING |
| `HostingTemplate.tsx` | `/hosting` | `hosting-page.css` | `hosting-page.ts` | PARTIAL | MISSING |
| `ROICalculatorTemplate.tsx` | `/roi-calculator` | `roi-calculator.css` | `roi-calculator-page.ts` | PARTIAL | MISSING |
| `PortfolioArchiveTemplate.tsx` | `/portfolio` | `portfolio-archive.css` | `portfolio-archive-page.ts` | PARTIAL | MISSING |

### Service Detail Pages (Priority: HIGH)

| Template | Route | CSS File | Funky Status | Guideline |
|----------|-------|----------|-------------|-----------|
| `DesignServiceTemplate.tsx` | `/services/design` | `page-service-design.css` | PARTIAL | MISSING |
| `DevelopmentServiceTemplate.tsx` | `/services/development` | `page-service-development.css` | PARTIAL | MISSING |
| `DiscoveryServiceTemplate.tsx` | `/services/discovery` | `page-service-discovery.css` | PARTIAL | MISSING |
| `ContentServiceTemplate.tsx` | `/services/content` | `page-service-content.css` | PARTIAL | MISSING |
| `SupportServiceTemplate.tsx` | `/services/support` | `page-service-support.css` | PARTIAL | MISSING |
| `SEOServiceTemplate.tsx` | `/services/seo` | `page-service-seo.css` | PARTIAL | MISSING |
| `PerformanceServiceTemplate.tsx` | `/services/performance` | `page-service-performance.css` | PARTIAL | MISSING |
| `SecurityServiceTemplate.tsx` | `/services/security` | `page-service-security.css` | PARTIAL | MISSING |
| `AccessibilityServiceTemplate.tsx` | `/services/accessibility` | `page-service-accessibility.css` | PARTIAL | MISSING |
| `TrainingTemplate.tsx` | `/services/training` | `page-service-training.css` | PARTIAL | MISSING |
| `EmailMarketingTemplate.tsx` | `/services/email-marketing` | varies | PARTIAL | MISSING |
| `NewsletterServiceTemplate.tsx` | `/services/newsletter` | `page-service-newsletter.css` | PARTIAL | MISSING |
| `ContentStrategyTemplate.tsx` | `/services/content-strategy` | `page-service-strategy.css` | PARTIAL | MISSING |
| `ContentCollectionTemplate.tsx` | `/services/content-collection` | varies | PARTIAL | MISSING |
| `ContentAuditTemplate.tsx` | `/services/content-audit` | varies | PARTIAL | MISSING |
| `AIEngineOptimisationTemplate.tsx` | `/services/ai-engine-optimisation` | `page-service-ai-engine.css` | PARTIAL | MISSING |
| `AnswerEngineOptimisationTemplate.tsx` | `/services/answer-engine-optimisation` | `page-service-aeo.css` | PARTIAL | MISSING |
| `ServicesLandingTemplate.tsx` | `/services` | `page-services-landing.css` | PARTIAL | MISSING |

### Solution Pages (Priority: HIGH)

| Template | Route | CSS File | Funky Status | Guideline |
|----------|-------|----------|-------------|-----------|
| `SolutionsTemplate.tsx` | `/solutions` | `solutions-page.css` | PARTIAL | MISSING |
| `WordPressSolutionTemplate.tsx` | `/solutions/wordpress` | `page-solution-wordpress.css` | PARTIAL | MISSING |
| `WooCommerceSolutionTemplate.tsx` | `/solutions/ecommerce` | `page-solution-ecommerce.css` | PARTIAL | MISSING |
| `WordPressRedesignTemplate.tsx` | `/solutions/redesign` | `page-solution-redesign.css` | PARTIAL | MISSING |
| `TourOperatorDesignTemplate.tsx` | `/solutions/tour-operator-design` | `page-solution-tour-design.css` | PARTIAL | MISSING |
| `MailchimpSolutionTemplate.tsx` | `/solutions/mailchimp` | `mailchimp-solution-page.css` | PARTIAL | MISSING |
| `SolutionDetailTemplate.tsx` | `/solutions/:slug` | `solution-detail.css` | PARTIAL | MISSING |

### Content Archive Pages (Priority: MEDIUM)

| Template | Route | Funky Status | Guideline |
|----------|-------|-------------|-----------|
| `SinglePostTemplate.tsx` | `/blog/:slug` | PARTIAL | MISSING |
| `SinglePostLongformTemplate.tsx` | `/blog/:slug` (long) | PARTIAL | MISSING |
| `CategoryArchiveTemplate.tsx` | `/blog/category/:slug` | PLAIN | MISSING |
| `TagArchiveTemplate.tsx` | `/blog/tag/:slug` | PLAIN | MISSING |
| `AuthorArchiveTemplate.tsx` | `/blog/author/:slug` | PARTIAL | MISSING |
| `DateArchiveTemplate.tsx` | `/blog/:year/:month` | PLAIN | MISSING |
| `PortfolioSingleTemplate.tsx` | `/portfolio/:slug` | PARTIAL | MISSING |
| `VideoArchiveTemplate.tsx` | `/videos` | PLAIN | MISSING |
| `PodcastArchiveTemplate.tsx` | `/podcasts` | PLAIN | MISSING |
| `SingleVideoTemplate.tsx` | `/videos/:slug` | PLAIN | MISSING |
| `SinglePodcastTemplate.tsx` | `/podcasts/:slug` | PLAIN | MISSING |

### About Pages (Priority: MEDIUM)

| Template | Route | Funky Status | Guideline |
|----------|-------|-------------|-----------|
| `AboutCultureTemplate.tsx` | `/about/culture` | PARTIAL | MISSING |
| `AboutHistoryTemplate.tsx` | `/about/history` | PARTIAL | MISSING |
| `AboutProcessTemplate.tsx` | `/about/process` | PARTIAL | MISSING |

### Utility Pages (Priority: LOW)

| Template | Route | Funky Status | Guideline |
|----------|-------|-------------|-----------|
| `404Template.tsx` | `/404` | PARTIAL | MISSING |
| `SiteMapTemplate.tsx` | `/sitemap` | PLAIN | MISSING |
| `SearchResultsTemplate.tsx` | `/search` | PLAIN | MISSING |
| `PrivacyPolicyTemplate.tsx` | `/privacy-policy` | PARTIAL | MISSING |
| `TermsOfServiceTemplate.tsx` | `/terms-of-service` | PARTIAL | MISSING |
| `JourneyStageTemplate.tsx` | `/journey/:stage` | PARTIAL | MISSING |

### Product/LSX Pages (Priority: LOW)

| Template | Route | Funky Status | Guideline |
|----------|-------|-------------|-----------|
| `LSXDesignTemplate.tsx` | `/lsx-design` | PARTIAL | MISSING |
| `LSXSearchTemplate.tsx` | `/lsx-search` | PARTIAL | MISSING |
| `LSXSharingTemplate.tsx` | `/lsx-sharing` | PARTIAL | MISSING |
| `WetuImporterTemplate.tsx` | `/wetu-importer` | PARTIAL | MISSING |
| `PublishersTemplate.tsx` | `/publishers` | PARTIAL | MISSING |
| `TourOperatorTemplate.tsx` | `/tour-operators` | PARTIAL | MISSING |

### WooCommerce Templates (Priority: LOW)

| Template | Route | Funky Status | Guideline |
|----------|-------|-------------|-----------|
| `CartTemplate.tsx` | `/cart` | PLAIN | MISSING |
| `CheckoutTemplate.tsx` | `/checkout` | PLAIN | MISSING |
| `ProductArchiveTemplate.tsx` | `/shop` | PLAIN | MISSING |

### Dev Tools / Internal (Priority: LOWEST)

| Template | Funky Status | Guideline |
|----------|-------------|-----------|
| `StyleGuideTemplate.tsx` | PLAIN | MISSING |
| `DevToolsTemplate.tsx` | PLAIN | MISSING |
| `DesignPlaygroundTemplate.tsx` | PLAIN | MISSING |
| `ComponentShowcase.tsx` | PLAIN | MISSING |
| `ButtonShowcase.tsx` | PLAIN | MISSING |
| `BlockDocumentation.tsx` | PLAIN | MISSING |
| `CodeQualityDashboardTemplate.tsx` | PLAIN | MISSING |
| `DeploymentReadinessTemplate.tsx` | PLAIN | MISSING |
| `DesignBlocksShowcase.tsx` | PLAIN | MISSING |
| `DesignTokensReferenceTemplate.tsx` | PLAIN | MISSING |
| `FeatureShowcaseTemplate.tsx` | PLAIN | MISSING |
| `HeaderFooterComparison.tsx` | PLAIN | MISSING |
| `IconLibrary.tsx` | PLAIN | MISSING |
| `ThemeBlocksShowcase.tsx` | PLAIN | MISSING |

---

## Remediation Phases

### Phase 1: Create Guidelines for FUNKY Templates (Already Done)
- [ ] FrontPage, Pricing, FAQ, BlogIndex, WhyChooseUs, Guarantees, Testimonials
- [ ] Document section-by-section with funky treatments applied

### Phase 2: Create Guidelines for PARTIAL Templates (In Progress)
- [ ] All service pages, solution pages, about pages
- [ ] Document current state + planned funky treatments

### Phase 3: Create Guidelines for PLAIN Templates (Not Started)
- [ ] Archives, singles, utility, WooCommerce
- [ ] Document planned funky treatments per section

---

## Definition of Done

- [ ] Every customer-facing template has a component guideline
- [ ] Every guideline documents section structure
- [ ] Every guideline documents blocks, patterns, and parts used
- [ ] Every guideline documents data sources
- [ ] Every guideline scores funky status
- [ ] Every guideline documents dark mode and mobile behavior
- [ ] Template overview updated with complete inventory
