# Site Structure & Navigation

**Version:** 2.1
**Last Updated:** February 18, 2026

---

## Summary

The LSX Design prototype contains **129 routes** across **11 sections**, mapping to WordPress templates, custom post types, and WooCommerce pages. Every route is lazy-loaded and wrapped in a shared `<RootLayout>` (header, footer, skip-link).

**Route file:** `/src/app/routes.tsx`
**Slug resolver:** `/src/app/utils/route-map.ts`
**Navigation data:** `/src/app/data/pages.ts`

---

## Complete Site Map

### Homepage (1 page)

| URL | Template | Archetype |
|-----|----------|-----------|
| `/` | FrontPageTemplate | Single Detail (Hero → Why Choose → Services → Projects → Stats → CTA → How We Work → Testimonials → Latest Insights → FAQs → CTA) |

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

### Services Section (15 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/services` | ServicesLandingTemplate | Services overview grid |
| `/services/discovery` | DiscoveryServiceTemplate | Discovery service detail |
| `/services/design` | DesignServiceTemplate | Design service detail |
| `/services/development` | DevelopmentServiceTemplate | Development service detail |
| `/services/content` | ContentServiceTemplate | Content services hub |
| `/services/content/strategy` | ContentStrategyTemplate | Content strategy sub-service |
| `/services/content/collection` | ContentCollectionTemplate | Content collection (under construction) |
| `/services/content/audit` | ContentAuditTemplate | Content audit sub-service |
| `/services/security` | SecurityServiceTemplate | Security service detail |
| `/services/migrations` | MigrationsServiceTemplate | Migration service detail |
| `/services/support` | SupportServiceTemplate | Support service detail |
| `/services/newsletter` | NewsletterServiceTemplate | Newsletter/email service |
| `/services/email-marketing` | EmailMarketingTemplate | Email marketing (under construction) |
| `/services/training` | TrainingTemplate | WordPress training service |
| `/services/hosting` | HostingTemplate | Managed hosting plans |

---

### Solutions Section (18 pages)

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

### Portfolio (4 routes)

| URL | Template | Notes |
|-----|----------|-------|
| `/portfolio` | PortfolioArchiveTemplate | Archive with filters |
| `/portfolio/:slug` | PortfolioSingleTemplate | Single case study |
| `/portfolio/category/:slug` | PortfolioCategoryArchiveTemplate | Category filter archive |
| `/portfolio/tag/:slug` | PortfolioTagArchiveTemplate | Tag filter archive |

**WordPress mapping:** Custom Post Type `portfolio` with `portfolio_category` and `portfolio_tag` taxonomies.

---

### Blog (11 base routes + dynamic)

| URL | Template | Notes |
|-----|----------|-------|
| `/blog` | BlogIndexTemplate | Blog archive index |
| `/blog/:slug` | SinglePostTemplate | Single blog post |
| `/blog/single-post` | SinglePostLongformTemplate | Longform post demo |
| `/blog/category` | CategoryArchiveTemplate | Category index (default) |
| `/blog/category/:slug` | CategoryArchiveTemplate | Category archive |
| `/blog/author` | AuthorArchiveTemplate | Author index (default) |
| `/blog/author/:slug` | AuthorArchiveTemplate | Author archive |
| `/blog/tag` | TagArchiveTemplate | Tag index (default) |
| `/blog/tag/:slug` | TagArchiveTemplate | Tag archive |
| `/blog/date` | DateArchiveTemplate | Date index (default) |
| `/blog/date/:year` | DateArchiveTemplate | Year archive |
| `/blog/date/:year/:month` | DateArchiveTemplate | Month archive |

#### Post Format Archives & Singles (21 routes)

| Format | Archive URL | Single URL |
|--------|-------------|------------|
| Audio | `/blog/format/audio` | `/blog/format/audio/single` |
| Video | `/blog/format/video` | `/blog/format/video/single` |
| Gallery | `/blog/format/gallery` | `/blog/format/gallery/single` |
| Image | `/blog/format/image` | `/blog/format/image/single` |
| Quote | `/blog/format/quote` | `/blog/format/quote/single` |
| Link | `/blog/format/link` | `/blog/format/link/single` |
| Chat | `/blog/format/chat` | `/blog/format/chat/single` |
| Status | `/blog/format/status` | `/blog/format/status/single` |
| Standard | `/blog/format/standard` | `/blog/format/standard/single` |
| Aside | `/blog/format/aside` | `/blog/format/aside/single` |
| Aside Stream | `/blog/format/aside-stream` | — |

---

### Videos (3 routes)

| URL | Template | Notes |
|-----|----------|-------|
| `/videos` | VideoArchiveTemplate | Video archive |
| `/video/:slug` | SingleVideoTemplate | Single video |
| `/videos/category/:slug` | VideoCategoryArchiveTemplate | Video category filter |

---

### Podcasts (2 routes)

| URL | Template | Notes |
|-----|----------|-------|
| `/podcasts` | PodcastArchiveTemplate | Podcast archive |
| `/podcast/:slug` | SinglePodcastTemplate | Single podcast episode |

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

### Utility Pages (13 pages)

| URL | Template | Notes |
|-----|----------|-------|
| `/contact` | ContactPageTemplate | Contact form + info |
| `/faq` | FAQTemplate | FAQ accordion sections |
| `/pricing` | PricingTemplate | Pricing plans |
| `/why-choose-us` | WhyChooseUsTemplate | Value propositions + stats |
| `/guarantees` | GuaranteesTemplate | Service guarantees |
| `/roi-calculator` | ROICalculatorTemplate | Interactive ROI tool |
| `/testimonials` | TestimonialsTemplate | Client testimonials |
| `/search` | SearchResultsPageTemplate | Site search results |
| `/privacy-policy` | PrivacyPolicyTemplate | Legal: privacy |
| `/terms-of-service` | TermsOfServiceTemplate | Legal: terms |
| `/site-map` | SiteMapTemplate | HTML sitemap |
| `/style-guide` | StyleGuideTemplate | Design system reference |
| `/tutorials` | TutorialsTemplate | Tutorial articles |

---

### Legacy / Miscellaneous (7 routes)

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

### Dev Tools (20 routes)

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

---

### Redirect Rules

Common redirect patterns used in the site:

| Source | Target | Reason |
|--------|--------|--------|
| `/search-legacy` | `/search` | Legacy search path redirection |
| `/services/content-strategy` | `/services/content/strategy` | Hierarchy normalization |
| `/blog/page/1` | `/blog` | Pagination canonicalization |
| `/admin` | `/wp-admin` | WordPress admin alias |
| `/login` | `/wp-login.php` | WordPress login alias |

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
│
├── About (/about)
│   ├── Our Process (/about/process)
│   ├── Our Culture (/about/culture)
│   ├── Our History (/about/history)
│   ├── Our Team (/about/team)
│   └── Careers (/about/careers)
│
├── Services (/services)
│   ├── Discovery (/services/discovery)
│   ├── Design (/services/design)
│   ├── Development (/services/development)
│   ├── Content (/services/content)
│   │   ├── Strategy (/services/content/strategy)
│   │   ├── Collection (/services/content/collection)
│   │   └── Audit (/services/content/audit)
│   ├── Security (/services/security)
│   ├── Migrations (/services/migrations)
│   ├── Support (/services/support)
│   ├── Newsletter (/services/newsletter)
│   ├── Email Marketing (/services/email-marketing)
│   ├── Training (/services/training)
│   └── Hosting (/services/hosting)
│
├── Solutions (/solutions)
│   ├── WordPress (/solutions/wordpress)
│   ├── WooCommerce (/solutions/woocommerce)
│   ├── Tour Operators (/solutions/tour-operators)
│   ├── Publishers (/solutions/publishers)
│   ├── LSX Design (/solutions/lsx)
│   ├── LSX Theme (/solutions/lsx-theme)
│   ├── Mailchimp (/solutions/mailchimp)
│   ├── Wetu Importer (/solutions/wetu-importer)
│   ├── LSX Sharing (/solutions/lsx-sharing)
│   ├── LSX Search (/solutions/lsx-search)
│   ├── WordPress Redesign (/solutions/wordpress-redesign)
│   ├── WooCommerce Redesign (/solutions/woocommerce-redesign)
│   ├── Tour Operator Design (/solutions/tour-operator-design)
│   ├── AI Integrations (/solutions/ai-integrations)
│   ├── AI Content Generation (/solutions/ai-content-generation)
│   ├── AI SEO (/solutions/ai-seo)
│   ├── AI Chatbots (/solutions/ai-chatbots)
│   └── AI Analytics (/solutions/ai-analytics)
│
├── Portfolio (/portfolio)
│   ├── :slug — Single Project
│   ├── category/:slug — Category Archive
│   └── tag/:slug — Tag Archive
│
├── Blog (/blog)
│   ├── :slug — Single Post
│   ├── single-post — Longform Demo
│   ├── category/:slug — Category Archive
│   ├── author/:slug — Author Archive
│   ├── tag/:slug — Tag Archive
│   ├── date/:year/:month — Date Archive
│   └── format/ — Post Formats (10 types × archive + single)
│
├── Videos (/videos)
│   ├── :slug — Single Video
│   └── category/:slug — Category Archive
│
├── Podcasts (/podcasts)
│   └── :slug — Single Episode
│
├── Shop (/shop) — WooCommerce
│   └── :slug — Single Product
├── Cart (/cart)
├── Checkout (/checkout)
│
├── Tours (/tours) — Tour Operator
│   └── :slug — Single Tour
│
├── Utility Pages
│   ├── Contact (/contact)
│   ├── FAQ (/faq)
│   ├── Pricing (/pricing)
│   ├── Why Choose Us (/why-choose-us)
│   ├── Guarantees (/guarantees)
│   ├── ROI Calculator (/roi-calculator)
│   ├── Testimonials (/testimonials)
│   ├── Search (/search)
│   ├── Privacy Policy (/privacy-policy)
│   ├── Terms of Service (/terms-of-service)
│   ├── Site Map (/site-map)
│   ├── Style Guide (/style-guide)
│   └── Tutorials (/tutorials)
│
├── Dev Tools (/dev-tools) — 20 tools
│
└── 404 (catch-all)
```

---

## URL Patterns

### Static Pages
```
/                               Homepage
/about                          About
/about/process                  Sub-page
/about/team                     Sub-page
/services                       Services landing
/services/discovery             Service detail
/services/content/strategy      Nested service sub-page
/solutions                      Solutions landing
/solutions/wordpress            Solution detail
/contact                        Utility page
/pricing                        Utility page
/tutorials                      Resource page
```

### Dynamic Archives
```
/portfolio                      Portfolio archive
/blog                           Blog archive
/blog/category/{slug}           Category archive
/blog/author/{slug}             Author archive
/blog/tag/{slug}                Tag archive
/blog/date/{year}/{month}       Date archive
/blog/format/{format}           Post format archive
/videos                         Video archive
/videos/category/{slug}         Video category archive
/podcasts                       Podcast archive
/shop                           Product archive
/tours                          Tour archive
```

### Dynamic Singles
```
/portfolio/{slug}               Single project
/blog/{slug}                    Single post
/blog/format/{format}/single    Single format post
/video/{slug}                   Single video
/podcast/{slug}                 Single podcast
/shop/{slug}                    Single product
/tours/{slug}                   Single tour
```

---

## Breadcrumb Patterns

### Static Pages
```
Home > About
Home > About > Our Process
Home > Services > Development
Home > Solutions > WordPress
Home > Pricing
```

### Archives
```
Home > Portfolio
Home > Blog
Home > Blog > Category Name
Home > Blog > Author Name
Home > Videos
Home > Shop
Home > Tours
```

### Singles
```
Home > Portfolio > Project Name
Home > Blog > Post Title
Home > Videos > Video Title
Home > Shop > Product Name
Home > Tours > Tour Name
```

---

## Navigation Structure

### Main Navigation (Desktop Mega Menu)

```
Home  |  About ▼  |  Services ▼  |  Solutions ▼  |  Portfolio  |  Blog  |  Contact
         ├ Process      ├ Discovery       ├ Platforms
         ├ Culture      ├ Design          │  ├ WordPress
         ├ History      ├ Development     │  └ WooCommerce
         ├ Team         ├ Content         ├ Website Projects
         └ Careers      ├ Security        │  ├ WordPress Redesign
                        ├ Migrations      │  ├ WooCommerce Redesign
                        ├ Support         │  └ Tour Operator Design
                        ├ Newsletter      ├ Industries
                        ├ Training        │  ├ Tour Operators
                        └ Hosting         │  └ Publishers
                                          └ AI Solutions
                                             ├ AI Integrations
                                             ├ AI Content Generation
                                             ├ AI-Powered SEO
                                             ├ AI Chatbots
                                             └ AI Analytics
```

### Footer Navigation

**Column 1: Services**
- WordPress design → `/services/design`
- WooCommerce development → `/solutions/woocommerce`
- WordPress hosting → `/services/hosting`
- Block theme development → `/services/development`
- Support & maintenance → `/services/support`

**Column 2: Solutions**
- Tour operators → `/solutions/tour-operators`
- Publishers → `/solutions/publishers`
- Enterprise WordPress → `/solutions/wordpress`
- WooCommerce scale → `/solutions/woocommerce`
- AI Integrations → `/solutions/ai-integrations`
- Migrations → `/services/migrations`

**Column 3: Company**
- About us → `/about`
- Portfolio → `/portfolio`
- Blog → `/blog`
- Careers → `/about/careers`
- Contact → `/contact`

**Column 4: Support**
- Contact support → `/contact`
- FAQs → `/faq`
- Tutorials → `/tutorials`
- Dev Tools → `/dev-tools`
- Style Guide → `/style-guide`
- Terms of service → `/terms-of-service`
- Privacy policy → `/privacy-policy`

**Trust Metrics Bar (linked cards):**
- 200+ Projects shipped → `/portfolio`
- 10+ Years experience → `/about/history`
- 99% Client satisfaction → `/testimonials`
- 4.9 Avg review score → `/why-choose-us`

---

## Mobile Navigation

### Hamburger Menu
```
├── Home
├── About ▸ (expandable)
│   ├── Process
│   ├── Culture
│   ├── History
│   ├── Team
│   └── Careers
├── Services ▸ (expandable)
│   ├── Discovery – Hosting (12 items)
├── Solutions ▸ (expandable)
│   ├── WordPress – LSX Search (10 items)
├── Portfolio
├── Blog
├── Shop
├── Contact
└── Search
```

**Mobile features:** slide-in from right, overlay, expandable sub-menus, close button, 48×48px touch targets.

---

## Content Types (WordPress Mapping)

| Content Type | WordPress Type | Archives | Taxonomies |
|-------------|---------------|----------|------------|
| Pages | `page` | — | — |
| Blog Posts | `post` | `/blog` | `category`, `post_tag`, `post_format` |
| Portfolio | `portfolio` (CPT) | `/portfolio` | `portfolio_category`, `portfolio_tag` |
| Videos | `video` (CPT) | `/videos` | `video_category` |
| Podcasts | `podcast` (CPT) | `/podcasts` | — |
| Products | `product` (WooCommerce) | `/shop` | `product_cat`, `product_tag` |
| Tours | `tour` (LSX Tour Operator) | `/tours` | — |
| Accommodations | `accommodation` (LSX TO) | `/tours` | — |
| FAQs | `faq` (CPT) | — | `faq_category` |

---

## Template Count Summary

| Section | Static Routes | Dynamic Routes | Total |
|---------|--------------|----------------|-------|
| Homepage | 1 | — | 1 |
| About | 6 | — | 6 |
| Services | 15 | — | 15 |
| Solutions | 18 | — | 18 |
| Portfolio | 1 | 3 | 4 |
| Blog | 5 | 6 + 21 formats | 32 |
| Videos | 1 | 2 | 3 |
| Podcasts | 1 | 1 | 2 |
| WooCommerce | 3 | 1 | 4 |
| Tour Operator | 1 | 1 | 2 |
| Utility | 13 | — | 13 |
| Legacy/Misc | 7 | — | 7 |
| Dev Tools | 20 | — | 20 |
| Error | 2 | — | 2 |
| **Total** | **94** | **35** | **129** |

---

**Last Updated:** February 18, 2026
**Total Routes:** 129
**Total Template Files:** 90+
**Maintained By:** LSX Design Team