# Site Structure & Navigation

**Version:** 3.0
**Last Updated:** February 28, 2026

---

## Summary

The LSX Design prototype contains **~170 routes** across **14 sections**, mapping to WordPress templates, custom post types, and WooCommerce pages. Every route is lazy-loaded or statically imported and wrapped in a shared `<RootLayout>` (header, footer, skip-link).

**Route file:** `/src/app/routes.tsx`
**Slug resolver:** `/src/app/utils/route-map.ts`
**Navigation data:** `/src/app/data/pages.ts`

---

## Complete Site Map

### Homepage (1 page)

| URL | Template | Archetype |
|-----|----------|-----------|
| `/` | FrontPageTemplate | Single Detail (Hero -> Why Choose -> Services -> Projects -> Stats -> CTA -> How We Work -> Testimonials -> Latest Insights -> FAQs -> CTA) |

---

### About Section (6 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/about` | AboutTemplate | Company overview |
| `/about/process` | AboutProcessTemplate | Development process |
| `/about/culture` | AboutCultureTemplate | Company culture & values |
| `/about/history` | AboutHistoryTemplate | Company timeline |
| `/about/team` | TeamTemplate | Team grid |
| `/about/careers` | CareersTemplate | Job listings (under construction) |

---

### Services Section (30 pages + 5 redirects + 6 journey stages)

#### Core Services (8 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/services` | ServicesLandingTemplate | Services overview grid |
| `/services/discovery` | DiscoveryServiceTemplate | Discovery service detail |
| `/services/design` | DesignServiceTemplate | Design service detail |
| `/services/development` | DevelopmentServiceTemplate | Development service detail |
| `/services/security` | SecurityServiceTemplate | Security service detail |
| `/services/training` | TrainingTemplate | WordPress training service |
| `/services/performance` | PerformanceServiceTemplate | Performance & optimisation |
| `/services/accessibility` | AccessibilityServiceTemplate | Accessibility audits & compliance |

#### Design Sub-Services (2 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/services/figma-prototyping` | FigmaPrototypingServiceTemplate | Figma prototyping service |
| `/services/design-systems` | DesignSystemsServiceTemplate | Design systems service |

#### Hosting & Support (3 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/services/hosting` | HostingTemplate | Managed hosting plans |
| `/services/migrations` | MigrationsServiceTemplate | Migration service detail |
| `/services/support` | SupportServiceTemplate | Support service detail |

#### Content Services (9 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/services/content` | ContentServicesLandingTemplate | Content services category landing (7 sub-service cards) |
| `/services/content/overview` | ContentServiceTemplate | Original content services hub |
| `/services/content/strategy` | ContentStrategyServiceTemplate | Content strategy sub-service |
| `/services/content/collection` | ContentCollectionServiceTemplate | Content collection sub-service |
| `/services/content/audit` | ContentAuditServiceTemplate | Content audit sub-service |
| `/services/content/creation` | ContentCreationServiceTemplate | Content creation sub-service |
| `/services/content/copywriting` | ContentCopywritingServiceTemplate | Copywriting sub-service |
| `/services/content/seo-content` | ContentSEOServiceTemplate | SEO content sub-service |
| `/services/content/governance` | ContentGovernanceServiceTemplate | Content governance sub-service |

#### Content -- Email Services (2 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/services/newsletter` | NewsletterServiceTemplate | Newsletter/email service |
| `/services/email-marketing` | EmailMarketingServiceTemplate | Email marketing service |

#### AI Services (6 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/services/ai` | AIServicesLandingTemplate | AI services category landing (5 sub-service cards) |
| `/services/ai/search-visibility` | AISearchServiceTemplate | AI Search & Visibility (consolidated parent) |
| `/services/ai/seo` | SEOServiceTemplate | SEO sub-service |
| `/services/ai/analytics` | AnalyticsServiceTemplate | Analytics sub-service |
| `/services/ai/engine-optimisation` | AIEngineServiceTemplate | AI Engine Optimisation sub-service |
| `/services/ai/answer-engine-optimisation` | AnswerEngineServiceTemplate | Answer Engine Optimisation sub-service |

#### AI Services Legacy Redirects (5 redirects)

| Source | Target | Reason |
|--------|--------|--------|
| `/services/ai-search-visibility` | `/services/ai/search-visibility` | Hierarchy normalisation |
| `/services/seo` | `/services/ai/seo` | Moved under AI category |
| `/services/analytics` | `/services/ai/analytics` | Moved under AI category |
| `/services/ai-engine-optimisation` | `/services/ai/engine-optimisation` | Hierarchy normalisation |
| `/services/answer-engine-optimisation` | `/services/ai/answer-engine-optimisation` | Hierarchy normalisation |

#### Journey Stage Pages (6 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/services/ignite` | JourneyStageTemplate (slug="ignite") | Journey stage: Ignite |
| `/services/create` | JourneyStageTemplate (slug="create") | Journey stage: Create |
| `/services/build` | JourneyStageTemplate (slug="build") | Journey stage: Build |
| `/services/launch` | JourneyStageTemplate (slug="launch") | Journey stage: Launch |
| `/services/grow` | JourneyStageTemplate (slug="grow") | Journey stage: Grow |
| `/services/evolve` | JourneyStageTemplate (slug="evolve") | Journey stage: Evolve |

---

### Systems Hub (6 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/systems` | SystemsHubTemplate | Systems hub dashboard |
| `/systems/design-tokens` | DesignTokensSystemTemplate | Design tokens system |
| `/systems/pattern-governance` | PatternGovernanceSystemTemplate | Pattern governance system |
| `/systems/editorial-workflows` | EditorialWorkflowsSystemTemplate | Editorial workflows (lazy) |
| `/systems/ai-search-readiness` | AISearchReadinessSystemTemplate | AI search readiness (lazy) |
| `/systems/performance-reliability` | PerformanceReliabilitySystemTemplate | Performance & reliability (lazy) |

---

### Solutions Section (19 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/solutions` | SolutionsTemplate | Solutions overview |
| `/solutions/wordpress` | WordPressSolutionTemplate | WordPress solution detail |
| `/solutions/woocommerce` | WooCommerceSolutionTemplate | WooCommerce solution detail |
| `/solutions/tour-operators` | TourOperatorTemplate | Tour operator solution |
| `/solutions/publishers` | PublishersTemplate | Publishers solution |
| `/solutions/lsx` | LSXDesignTemplate | LSX Design system |
| `/solutions/lsx-theme` | LSXSolutionTemplate | LSX Theme solution |
| `/solutions/mailchimp` | MailchimpSolutionTemplate | Mailchimp integration |
| `/solutions/wetu-importer` | WetuImporterTemplate | Wetu importer solution |
| `/solutions/lsx-sharing` | LSXSharingTemplate | LSX Sharing plugin |
| `/solutions/lsx-search` | LSXSearchTemplate | LSX Search plugin |
| `/solutions/wordpress-redesign` | WordPressRedesignTemplate | WordPress redesign solution |
| `/solutions/woocommerce-redesign` | WooCommerceRedesignTemplate | WooCommerce redesign solution |
| `/solutions/tour-operator-design` | TourOperatorDesignTemplate | Tour operator design solution |
| `/solutions/ai-integrations` | AIIntegrationsTemplate | AI integrations landing hub |
| `/solutions/ai-content-generation` | AIContentGenerationTemplate | AI content generation sub-page |
| `/solutions/ai-seo` | AISEOTemplate | AI-powered SEO sub-page |
| `/solutions/ai-chatbots` | AIChatbotsTemplate | AI chatbots sub-page |
| `/solutions/ai-analytics` | AIAnalyticsTemplate | AI analytics & insights sub-page |

---

### Work / Portfolio (4 routes)

**Note:** Portfolio has been renamed from `/portfolio` to `/work`.

| URL | Template | Notes |
|-----|----------|-------|
| `/work` | PortfolioArchiveTemplate | Archive with filters |
| `/work/:slug` | PortfolioSingleTemplate | Single case study |
| `/work/category/:slug` | PortfolioCategoryArchiveTemplate | Category filter archive |
| `/work/tag/:slug` | PortfolioTagArchiveTemplate | Tag filter archive |

**WordPress mapping:** Custom Post Type `portfolio` with `portfolio_category` and `portfolio_tag` taxonomies.

---

### Insights / Blog (12 base routes + 21 post formats + dynamic)

**Note:** Blog has been renamed from `/blog` to `/insights`.

| URL | Template | Notes |
|-----|----------|-------|
| `/insights` | BlogIndexTemplate | Blog archive index |
| `/insights/:slug` | SinglePostTemplate | Single blog post |
| `/insights/single-post` | SinglePostLongformTemplate | Longform post demo |
| `/insights/category` | CategoryArchiveTemplate | Category index (default) |
| `/insights/category/:slug` | CategoryArchiveTemplate | Category archive |
| `/insights/author` | AuthorArchiveTemplate | Author index (default) |
| `/insights/author/:slug` | AuthorArchiveTemplate | Author archive |
| `/insights/tag` | TagArchiveTemplate | Tag index (default) |
| `/insights/tag/:slug` | TagArchiveTemplate | Tag archive |
| `/insights/date` | DateArchiveTemplate | Date index (default) |
| `/insights/date/:year` | DateArchiveTemplate | Year archive |
| `/insights/date/:year/:month` | DateArchiveTemplate | Month archive |

#### Post Format Archives & Singles (21 routes)

| Format | Archive URL | Single URL |
|--------|-------------|------------|
| Audio | `/insights/format/audio` | `/insights/format/audio/single` |
| Video | `/insights/format/video` | `/insights/format/video/single` |
| Gallery | `/insights/format/gallery` | `/insights/format/gallery/single` |
| Image | `/insights/format/image` | `/insights/format/image/single` |
| Quote | `/insights/format/quote` | `/insights/format/quote/single` |
| Link | `/insights/format/link` | `/insights/format/link/single` |
| Chat | `/insights/format/chat` | `/insights/format/chat/single` |
| Status | `/insights/format/status` | `/insights/format/status/single` |
| Standard | `/insights/format/standard` | `/insights/format/standard/single` |
| Aside | `/insights/format/aside` | `/insights/format/aside/single` |
| Aside Stream | `/insights/format/aside-stream` | -- |

---

### Videos (4 routes)

| URL | Template | Notes |
|-----|----------|-------|
| `/videos` | VideoArchiveTemplate | Video archive |
| `/video/:slug` | SingleVideoTemplate | Single video |
| `/videos/category/:slug` | VideoCategoryArchiveTemplate | Video category filter |
| `/videos/tag/:slug` | VideoTagArchiveTemplate | Video tag filter |

---

### Podcasts (3 routes)

| URL | Template | Notes |
|-----|----------|-------|
| `/podcasts` | PodcastArchiveTemplate | Podcast archive |
| `/podcast/:slug` | SinglePodcastTemplate | Single podcast episode |
| `/podcasts/category/:slug` | PodcastCategoryArchiveTemplate | Podcast category filter |

---

### WooCommerce / Shop (4 routes)

| URL | Template | Notes |
|-----|----------|-------|
| `/shop` | ProductArchiveTemplate | Product archive grid |
| `/shop/:slug` | SingleProductTemplate | Single product page |
| `/cart` | CartTemplate | Shopping cart |
| `/checkout` | CheckoutTemplate | Checkout flow |

---

### Tour Operator (2 routes)

| URL | Template | Notes |
|-----|----------|-------|
| `/tours` | TourOperatorArchiveTemplate | Tours & accommodations archive |
| `/tours/:slug` | SingleTourTemplate | Single tour / accommodation |

**WordPress mapping:** LSX Tour Operator custom post types (`tour`, `accommodation`, `destination`).

---

### Utility Pages (18 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/contact` | ContactPageTemplate | Contact form + info |
| `/faq` | FAQTemplate | FAQ accordion sections |
| `/pricing` | PricingTemplate | Pricing plans |
| `/why-choose-us` | WhyChooseUsTemplate | Value propositions + stats |
| `/guarantees` | GuaranteesTemplate | Service guarantees |
| `/roi-calculator` | ROICalculatorTemplate | Interactive ROI tool |
| `/testimonials` | TestimonialsTemplate | Client testimonials overview |
| `/testimonials/archive` | TestimonialArchiveTemplate | Testimonial archive (lazy) |
| `/testimonials/audio/:slug` | SingleTestimonialAudioTemplate | Audio testimonial single (lazy) |
| `/testimonials/video/:slug` | SingleTestimonialVideoTemplate | Video testimonial single (lazy) |
| `/testimonials/gallery/:slug` | SingleTestimonialGalleryTemplate | Gallery testimonial single (lazy) |
| `/testimonials/:slug` | SingleTestimonialTemplate | Standard testimonial single (lazy) |
| `/search` | SearchResultsPageTemplate | Site search results |
| `/privacy-policy` | PrivacyPolicyTemplate | Legal: privacy |
| `/terms-of-service` | TermsOfServiceTemplate | Legal: terms |
| `/site-map` | SiteMapTemplate | HTML sitemap |
| `/style-guide` | StyleGuideTemplate | Design system reference |
| `/tutorials` | TutorialsTemplate | Tutorial articles |

---

### Legacy / Miscellaneous (8 routes)

These routes exist for backward compatibility or proof-of-concept demos.

| URL | Template | Notes |
|-----|----------|-------|
| `/archive` | ArchiveTemplate | Generic archive |
| `/archive/filters` | ArchiveWithFiltersTemplate | Archive with filter bar |
| `/index` | IndexTemplate | WordPress index fallback |
| `/single` | SingleTemplate | Generic single fallback |
| `/search-legacy` | SearchResultsTemplate | Legacy search |
| `/wordpress-blocks-poc` | WordPressBlocksProofOfConcept | Blocks proof of concept |
| `/section-style-example` | SectionStyleExample | Section style demo |
| `/feature-showcase` | FeatureShowcaseTemplate | Feature showcase demo |

---

### Dev Tools (22 routes)

All dev tools are behind `/dev-tools/`. These are **not** part of the production site.

| URL | Template | Notes |
|-----|----------|-------|
| `/dev-tools` | DevToolsTemplate | Dev tools dashboard |
| `/dev-tools/template-tester` | TemplateTester | Preview any template |
| `/dev-tools/component-showcase` | ComponentShowcase | Component library |
| `/dev-tools/design-system-test` | DesignSystemTest | Automated token tests |
| `/dev-tools/compliance-scorecard` | ComplianceScorecard | WCAG / design compliance |
| `/dev-tools/feature-showcase` | FeatureShowcaseTemplate | Feature demo |
| `/dev-tools/block-documentation` | BlockDocumentation | Block API docs |
| `/dev-tools/component-api` | ComponentAPI | Component prop API |
| `/dev-tools/design-blocks-showcase` | DesignBlocksShowcase | Design blocks gallery |
| `/dev-tools/button-showcase` | ButtonShowcase | Button variants |
| `/dev-tools/header-footer-comparison` | HeaderFooterComparison | Header/footer A/B |
| `/dev-tools/icon-library` | IconLibrary | Icon explorer |
| `/dev-tools/live-preview` | LivePreview | Live template preview |
| `/dev-tools/section-presets-showcase` | SectionPresetsShowcase | Section style presets |
| `/dev-tools/theme-blocks-showcase` | ThemeBlocksShowcase | WordPress theme blocks |
| `/dev-tools/style-guide` | StyleGuideTemplate | Alias of `/style-guide` |
| `/dev-tools/design-tokens-reference` | DesignTokensReferenceTemplate | CSS token reference |
| `/dev-tools/deployment-readiness` | DeploymentReadinessTemplate | Pre-deploy checklist |
| `/dev-tools/design-playground` | DesignPlaygroundTemplate | Token experimenter |
| `/dev-tools/code-quality-dashboard` | CodeQualityDashboardTemplate | Static analysis |
| `/dev-tools/docs-generator` | DocsGeneratorTemplate | JSDoc auto-docs |
| `/dev-tools/snippet-generator` | SnippetGeneratorTemplate | Code snippet generator |

---

### Redirect Rules

Common redirect patterns used in the site:

| Source | Target | Reason |
|--------|--------|--------|
| `/services/ai-search-visibility` | `/services/ai/search-visibility` | Hierarchy normalisation |
| `/services/seo` | `/services/ai/seo` | Moved under AI category |
| `/services/analytics` | `/services/ai/analytics` | Moved under AI category |
| `/services/ai-engine-optimisation` | `/services/ai/engine-optimisation` | Hierarchy normalisation |
| `/services/answer-engine-optimisation` | `/services/ai/answer-engine-optimisation` | Hierarchy normalisation |
| `/search-legacy` | `/search` | Legacy search path redirection |
| `/services/content-strategy` | `/services/content/strategy` | Hierarchy normalisation |
| `/blog/page/1` | `/blog` | Pagination canonicalisation |

---

### Error Pages

| URL | Template | Notes |
|-----|----------|-------|
| `/404` | Template404 | Explicit 404 |
| `*` | Template404 | Catch-all fallback |

---

## Page Hierarchy (Tree)

```
LSX Design (/)
|
+-- About (/about)
|   +-- Our Process (/about/process)
|   +-- Our Culture (/about/culture)
|   +-- Our History (/about/history)
|   +-- Our Team (/about/team)
|   +-- Careers (/about/careers)
|
+-- Services (/services)
|   +-- Discovery (/services/discovery)
|   +-- Design (/services/design)
|   |   +-- Figma Prototyping (/services/figma-prototyping)
|   |   +-- Design Systems (/services/design-systems)
|   +-- Development (/services/development)
|   +-- Content (/services/content) -- Category Landing
|   |   +-- Overview (/services/content/overview)
|   |   +-- Strategy (/services/content/strategy)
|   |   +-- Collection (/services/content/collection)
|   |   +-- Audit (/services/content/audit)
|   |   +-- Creation (/services/content/creation)
|   |   +-- Copywriting (/services/content/copywriting)
|   |   +-- SEO Content (/services/content/seo-content)
|   |   +-- Governance (/services/content/governance)
|   +-- AI (/services/ai) -- Category Landing
|   |   +-- Search & Visibility (/services/ai/search-visibility)
|   |   +-- SEO (/services/ai/seo)
|   |   +-- Analytics (/services/ai/analytics)
|   |   +-- AI Engine Optimisation (/services/ai/engine-optimisation)
|   |   +-- Answer Engine Optimisation (/services/ai/answer-engine-optimisation)
|   +-- Security (/services/security)
|   +-- Performance (/services/performance)
|   +-- Accessibility (/services/accessibility)
|   +-- Hosting (/services/hosting)
|   |   +-- Migrations (/services/migrations)
|   |   +-- Support (/services/support)
|   +-- Newsletter (/services/newsletter)
|   +-- Email Marketing (/services/email-marketing)
|   +-- Training (/services/training)
|   +-- Journey Stages
|       +-- Ignite (/services/ignite)
|       +-- Create (/services/create)
|       +-- Build (/services/build)
|       +-- Launch (/services/launch)
|       +-- Grow (/services/grow)
|       +-- Evolve (/services/evolve)
|
+-- Systems (/systems)
|   +-- Design Tokens (/systems/design-tokens)
|   +-- Pattern Governance (/systems/pattern-governance)
|   +-- Editorial Workflows (/systems/editorial-workflows)
|   +-- AI Search Readiness (/systems/ai-search-readiness)
|   +-- Performance & Reliability (/systems/performance-reliability)
|
+-- Solutions (/solutions)
|   +-- WordPress (/solutions/wordpress)
|   +-- WooCommerce (/solutions/woocommerce)
|   +-- Tour Operators (/solutions/tour-operators)
|   +-- Publishers (/solutions/publishers)
|   +-- LSX Design (/solutions/lsx)
|   +-- LSX Theme (/solutions/lsx-theme)
|   +-- Mailchimp (/solutions/mailchimp)
|   +-- Wetu Importer (/solutions/wetu-importer)
|   +-- LSX Sharing (/solutions/lsx-sharing)
|   +-- LSX Search (/solutions/lsx-search)
|   +-- WordPress Redesign (/solutions/wordpress-redesign)
|   +-- WooCommerce Redesign (/solutions/woocommerce-redesign)
|   +-- Tour Operator Design (/solutions/tour-operator-design)
|   +-- AI Integrations (/solutions/ai-integrations)
|   +-- AI Content Generation (/solutions/ai-content-generation)
|   +-- AI SEO (/solutions/ai-seo)
|   +-- AI Chatbots (/solutions/ai-chatbots)
|   +-- AI Analytics (/solutions/ai-analytics)
|
+-- Work (/work) -- formerly /portfolio
|   +-- :slug -- Single Project
|   +-- category/:slug -- Category Archive
|   +-- tag/:slug -- Tag Archive
|
+-- Insights (/insights) -- formerly /blog
|   +-- :slug -- Single Post
|   +-- single-post -- Longform Demo
|   +-- category/:slug -- Category Archive
|   +-- author/:slug -- Author Archive
|   +-- tag/:slug -- Tag Archive
|   +-- date/:year/:month -- Date Archive
|   +-- format/ -- Post Formats (10 types x archive + single)
|
+-- Videos (/videos)
|   +-- :slug -- Single Video
|   +-- category/:slug -- Category Archive
|   +-- tag/:slug -- Tag Archive
|
+-- Podcasts (/podcasts)
|   +-- :slug -- Single Episode
|   +-- category/:slug -- Category Archive
|
+-- Shop (/shop) -- WooCommerce
|   +-- :slug -- Single Product
+-- Cart (/cart)
+-- Checkout (/checkout)
|
+-- Tours (/tours) -- Tour Operator
|   +-- :slug -- Single Tour
|
+-- Testimonials (/testimonials)
|   +-- archive -- Testimonial Archive
|   +-- audio/:slug -- Audio Testimonial
|   +-- video/:slug -- Video Testimonial
|   +-- gallery/:slug -- Gallery Testimonial
|   +-- :slug -- Standard Testimonial
|
+-- Utility Pages
|   +-- Contact (/contact)
|   +-- FAQ (/faq)
|   +-- Pricing (/pricing)
|   +-- Why Choose Us (/why-choose-us)
|   +-- Guarantees (/guarantees)
|   +-- ROI Calculator (/roi-calculator)
|   +-- Search (/search)
|   +-- Privacy Policy (/privacy-policy)
|   +-- Terms of Service (/terms-of-service)
|   +-- Site Map (/site-map)
|   +-- Style Guide (/style-guide)
|   +-- Tutorials (/tutorials)
|
+-- Dev Tools (/dev-tools) -- 22 tools
|
+-- 404 (catch-all)
```

---

## URL Patterns

### Static Pages
```
/                                       Homepage
/about                                  About
/about/process                          Sub-page
/about/team                             Sub-page
/services                               Services landing
/services/discovery                     Service detail
/services/content                       Content category landing
/services/content/strategy              Nested content sub-service
/services/ai                            AI category landing
/services/ai/seo                        Nested AI sub-service
/services/ignite                        Journey stage page
/systems                                Systems hub
/systems/design-tokens                  System child page
/solutions                              Solutions landing
/solutions/wordpress                    Solution detail
/contact                                Utility page
/pricing                                Utility page
/tutorials                              Resource page
```

### Dynamic Archives
```
/work                                   Work (portfolio) archive
/insights                               Insights (blog) archive
/insights/category/{slug}               Category archive
/insights/author/{slug}                 Author archive
/insights/tag/{slug}                    Tag archive
/insights/date/{year}/{month}           Date archive
/insights/format/{format}               Post format archive
/videos                                 Video archive
/videos/category/{slug}                 Video category archive
/videos/tag/{slug}                      Video tag archive
/podcasts                               Podcast archive
/podcasts/category/{slug}               Podcast category archive
/shop                                   Product archive
/tours                                  Tour archive
/testimonials/archive                   Testimonial archive
```

### Dynamic Singles
```
/work/{slug}                            Single project
/insights/{slug}                        Single post
/insights/format/{format}/single        Single format post
/video/{slug}                           Single video
/podcast/{slug}                         Single podcast
/shop/{slug}                            Single product
/tours/{slug}                           Single tour
/testimonials/{slug}                    Single testimonial
/testimonials/audio/{slug}              Audio testimonial
/testimonials/video/{slug}              Video testimonial
/testimonials/gallery/{slug}            Gallery testimonial
```

---

## Breadcrumb Patterns

### Static Pages
```
Home > About
Home > About > Our Process
Home > Services > Design
Home > Services > Content > Strategy
Home > Services > AI > SEO
Home > Systems > Design Tokens
Home > Solutions > WordPress
Home > Pricing
```

### Archives
```
Home > Work
Home > Insights
Home > Insights > Category Name
Home > Insights > Author Name
Home > Videos
Home > Shop
Home > Tours
Home > Testimonials > Archive
```

### Singles
```
Home > Work > Project Name
Home > Insights > Post Title
Home > Videos > Video Title
Home > Shop > Product Name
Home > Tours > Tour Name
Home > Testimonials > Testimonial Title
```

---

## Navigation Structure

### Main Navigation (Desktop Mega Menu)

```
Home  |  About v  |  Services v  |  Solutions v  |  Work  |  Insights  |  Contact
         +- Process      +- Discovery       +- Platforms
         +- Culture      +- Design          |  +- WordPress
         +- History      +- Development     |  +- WooCommerce
         +- Team         +- Content v       +- Website Projects
         +- Careers      |  +- Strategy     |  +- WordPress Redesign
                         |  +- Collection   |  +- WooCommerce Redesign
                         |  +- Audit        |  +- Tour Operator Design
                         |  +- Creation     +- Industries
                         |  +- Copywriting  |  +- Tour Operators
                         |  +- SEO Content  |  +- Publishers
                         |  +- Governance   +- AI Solutions
                         +- AI v              +- AI Integrations
                         |  +- Search &       +- AI Content Generation
                         |  |  Visibility     +- AI-Powered SEO
                         |  +- SEO            +- AI Chatbots
                         |  +- Analytics      +- AI Analytics
                         |  +- AI Engine Opt.
                         |  +- Answer Engine
                         +- Security
                         +- Performance
                         +- Accessibility
                         +- Hosting
                         +- Training
                         +- Newsletter
```

### Footer Navigation

**Column 1: Services**
- WordPress design -> `/services/design`
- Content services -> `/services/content`
- AI services -> `/services/ai`
- WordPress hosting -> `/services/hosting`
- Block theme development -> `/services/development`
- Support & maintenance -> `/services/support`

**Column 2: Solutions**
- Tour operators -> `/solutions/tour-operators`
- Publishers -> `/solutions/publishers`
- Enterprise WordPress -> `/solutions/wordpress`
- WooCommerce scale -> `/solutions/woocommerce`
- AI Integrations -> `/solutions/ai-integrations`
- Migrations -> `/services/migrations`

**Column 3: Company**
- About us -> `/about`
- Work -> `/work`
- Insights -> `/insights`
- Careers -> `/about/careers`
- Contact -> `/contact`

**Column 4: Support**
- Contact support -> `/contact`
- FAQs -> `/faq`
- Tutorials -> `/tutorials`
- Dev Tools -> `/dev-tools`
- Style Guide -> `/style-guide`
- Terms of service -> `/terms-of-service`
- Privacy policy -> `/privacy-policy`

**Trust Metrics Bar (linked cards):**
- 200+ Projects shipped -> `/work`
- 10+ Years experience -> `/about/history`
- 99% Client satisfaction -> `/testimonials`
- 4.9 Avg review score -> `/why-choose-us`

---

## Mobile Navigation

### Hamburger Menu
```
+-- Home
+-- About > (expandable)
|   +-- Process
|   +-- Culture
|   +-- History
|   +-- Team
|   +-- Careers
+-- Services > (expandable)
|   +-- Discovery -- Training (core services)
|   +-- Content > (expandable)
|   |   +-- Strategy -- Governance (7 items)
|   +-- AI > (expandable)
|       +-- Search & Visibility -- Answer Engine (5 items)
+-- Solutions > (expandable)
|   +-- WordPress -- LSX Search (10 items)
+-- Work
+-- Insights
+-- Shop
+-- Contact
+-- Search
```

**Mobile features:** slide-in from right, overlay, expandable sub-menus, close button, 48x48px touch targets.

---

## Content Types (WordPress Mapping)

| Content Type | WordPress Type | Archives | Taxonomies |
|-------------|---------------|----------|------------|
| Pages | `page` | -- | -- |
| Blog Posts | `post` | `/insights` | `category`, `post_tag`, `post_format` |
| Portfolio | `portfolio` (CPT) | `/work` | `portfolio_category`, `portfolio_tag` |
| Videos | `video` (CPT) | `/videos` | `video_category`, `video_tag` |
| Podcasts | `podcast` (CPT) | `/podcasts` | `podcast_category` |
| Products | `product` (WooCommerce) | `/shop` | `product_cat`, `product_tag` |
| Tours | `tour` (LSX Tour Operator) | `/tours` | -- |
| Accommodations | `accommodation` (LSX TO) | `/tours` | -- |
| FAQs | `faq` (CPT) | -- | `faq_category` |
| Testimonials | `testimonial` (CPT) | `/testimonials/archive` | `testimonial_format` (standard, audio, video, gallery) |

---

## Template Count Summary

| Section | Static Routes | Dynamic Routes | Total |
|---------|--------------|----------------|-------|
| Homepage | 1 | -- | 1 |
| About | 6 | -- | 6 |
| Services (core) | 8 | -- | 8 |
| Services (design sub) | 2 | -- | 2 |
| Services (hosting) | 3 | -- | 3 |
| Services (content) | 9 | -- | 9 |
| Services (email) | 2 | -- | 2 |
| Services (AI) | 6 | -- | 6 |
| Services (redirects) | 5 | -- | 5 |
| Services (journey) | 6 | -- | 6 |
| Systems Hub | 6 | -- | 6 |
| Solutions | 19 | -- | 19 |
| Work (Portfolio) | 1 | 3 | 4 |
| Insights (Blog) | 5 | 6 + 21 formats | 32 |
| Videos | 1 | 3 | 4 |
| Podcasts | 1 | 2 | 3 |
| WooCommerce | 3 | 1 | 4 |
| Tour Operator | 1 | 1 | 2 |
| Utility | 13 | 5 (testimonials) | 18 |
| Legacy/Misc | 8 | -- | 8 |
| Dev Tools | 22 | -- | 22 |
| Error | 2 | -- | 2 |
| **Total** | **130** | **42** | **~172** |

---

**Last Updated:** February 28, 2026
**Total Routes:** ~172
**Total Template Files:** 100+
**Maintained By:** LSX Design Team
