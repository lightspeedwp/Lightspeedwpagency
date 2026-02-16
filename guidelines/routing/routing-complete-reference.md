# Complete Routing Reference

**Last Updated:** February 14, 2026  
**Status:** Verified against `/src/app/routes.tsx`  
**Router:** `react-router` (Data Mode with `createBrowserRouter`)  
**Layout:** All routes wrapped in `<RootLayout>` with `<Outlet />`

---

## Architecture

```
routes.tsx          → Route definitions (createBrowserRouter)
route-map.ts        → Slug ↔ path bidirectional mapping
NavigationContext   → navigateTo(slug) resolves via route-map.ts
RootLayout          → SiteHeader + <Outlet /> + SiteFooter
```

**IMPORTANT:** Templates must NOT render `SiteHeader`, `SiteFooter`, or `SkipLink` — the `RootLayout` handles all shared chrome.

---

## Route Format

All URLs use **hierarchical WordPress-style paths**:

```
/                               → Homepage
/{section}                      → Section landing (e.g., /about, /services)
/{section}/{slug}               → Detail page (e.g., /services/discovery)
/{section}/{slug}/{sub}         → Nested sub-page (e.g., /services/content/strategy)
/{archive}/:slug                → Dynamic single (e.g., /portfolio/:slug)
/{archive}/category/:slug       → Taxonomy archive (e.g., /blog/category/:slug)
```

---

## All Routes (117 total)

### Homepage (1)

| Path | Template | Slug |
|------|----------|------|
| `/` | `FrontPageTemplate` | `front-page`, `home` |

---

### About (6)

| Path | Template | Slug |
|------|----------|------|
| `/about` | `AboutTemplate` | `about` |
| `/about/process` | `AboutProcessTemplate` | `about-process` |
| `/about/culture` | `AboutCultureTemplate` | `about-culture` |
| `/about/history` | `AboutHistoryTemplate` | `about-history` |
| `/about/team` | `TeamTemplate` | `team` |
| `/about/careers` | `CareersTemplate` | `careers` |

---

### Services (15)

| Path | Template | Slug | Legacy Slug |
|------|----------|------|-------------|
| `/services` | `ServicesLandingTemplate` | `services` | — |
| `/services/discovery` | `DiscoveryServiceTemplate` | `discovery` | `discovery-service` |
| `/services/design` | `DesignServiceTemplate` | `design` | `design-service` |
| `/services/development` | `DevelopmentServiceTemplate` | `development` | `development-service` |
| `/services/content` | `ContentServiceTemplate` | `content` | `content-service` |
| `/services/content/strategy` | `ContentStrategyTemplate` | `content-strategy` | — |
| `/services/content/collection` | `ContentCollectionTemplate` | `content-collection` | — |
| `/services/content/audit` | `ContentAuditTemplate` | `content-audit` | — |
| `/services/security` | `SecurityServiceTemplate` | `security` | `security-service` |
| `/services/migrations` | `MigrationsServiceTemplate` | `migrations` | `migrations-service` |
| `/services/support` | `SupportServiceTemplate` | `support` | `support-service` |
| `/services/newsletter` | `NewsletterServiceTemplate` | `newsletter-service` | — |
| `/services/email-marketing` | `EmailMarketingTemplate` | `email-marketing` | — |
| `/services/training` | `TrainingTemplate` | `training` | — |
| `/services/hosting` | `HostingTemplate` | `hosting` | `hosting-plans` |

---

### Solutions (10)

| Path | Template | Slug | Legacy Slug |
|------|----------|------|-------------|
| `/solutions` | `SolutionsTemplate` | `solutions` | — |
| `/solutions/wordpress` | `WordPressSolutionTemplate` | `wordpress` | `wordpress-solution` |
| `/solutions/woocommerce` | `WooCommerceSolutionTemplate` | `woocommerce` | `woocommerce-solution` |
| `/solutions/tour-operators` | `TourOperatorTemplate` | `tour-operators` | — |
| `/solutions/publishers` | `PublishersTemplate` | `publishers` | — |
| `/solutions/lsx` | `LSXDesignTemplate` | `lsx` | `lsx-design` |
| `/solutions/lsx-theme` | `LSXSolutionTemplate` | `lsx-theme` | — |
| `/solutions/mailchimp` | `MailchimpSolutionTemplate` | `mailchimp` | — |
| `/solutions/wetu-importer` | `WetuImporterTemplate` | `wetu-importer` | — |
| `/solutions/lsx-sharing` | `LSXSharingTemplate` | `lsx-sharing` | — |
| `/solutions/lsx-search` | `LSXSearchTemplate` | `lsx-search` | — |

---

### Portfolio (4)

| Path | Template | Slug Pattern |
|------|----------|--------------|
| `/portfolio` | `PortfolioArchiveTemplate` | `portfolio`, `portfolio-archive` |
| `/portfolio/:slug` | `PortfolioSingleTemplate` | `portfolio-single-{slug}` |
| `/portfolio/category/:slug` | `PortfolioCategoryArchiveTemplate` | — |
| `/portfolio/tag/:slug` | `PortfolioTagArchiveTemplate` | — |

---

### Blog (11 base + 21 post formats = 32)

#### Core Blog Routes

| Path | Template | Slug Pattern |
|------|----------|--------------|
| `/blog` | `BlogIndexTemplate` | `blog` |
| `/blog/single-post` | `SinglePostLongformTemplate` | `single-post` |
| `/blog/:slug` | `SinglePostTemplate` | `post-{slug}` |
| `/blog/category` | `CategoryArchiveTemplate` | `category` |
| `/blog/category/:slug` | `CategoryArchiveTemplate` | `category-{slug}` |
| `/blog/author` | `AuthorArchiveTemplate` | `author` |
| `/blog/author/:slug` | `AuthorArchiveTemplate` | `author-{slug}` |
| `/blog/tag` | `TagArchiveTemplate` | `tag-archive` |
| `/blog/tag/:slug` | `TagArchiveTemplate` | `tag-{slug}` |
| `/blog/date` | `DateArchiveTemplate` | `date-archive` |
| `/blog/date/:year` | `DateArchiveTemplate` | `date-{year}` |
| `/blog/date/:year/:month` | `DateArchiveTemplate` | `date-{year}-{month}` |

#### Post Format Routes (21)

| Format | Archive Path | Single Path | Archive Slug | Single Slug |
|--------|-------------|-------------|--------------|-------------|
| Audio | `/blog/format/audio` | `/blog/format/audio/single` | `audio-archive` | `audio-single` |
| Video | `/blog/format/video` | `/blog/format/video/single` | `video-archive` | `video-single` |
| Gallery | `/blog/format/gallery` | `/blog/format/gallery/single` | `gallery-archive` | `gallery-single` |
| Image | `/blog/format/image` | `/blog/format/image/single` | `image-archive` | `image-single` |
| Quote | `/blog/format/quote` | `/blog/format/quote/single` | `quote-archive` | `quote-single` |
| Link | `/blog/format/link` | `/blog/format/link/single` | `link-archive` | `link-single` |
| Chat | `/blog/format/chat` | `/blog/format/chat/single` | `chat-archive` | `chat-single` |
| Status | `/blog/format/status` | `/blog/format/status/single` | `status-archive` | `status-single` |
| Standard | `/blog/format/standard` | `/blog/format/standard/single` | `standard-archive` | `standard-single` |
| Aside | `/blog/format/aside` | `/blog/format/aside/single` | `aside-archive` | `aside-single` |
| Aside Stream | `/blog/format/aside-stream` | — | `aside-stream` | — |

---

### Videos (3)

| Path | Template | Slug |
|------|----------|------|
| `/videos` | `VideoArchiveTemplate` | `videos`, `videos-archive` |
| `/video/:slug` | `SingleVideoTemplate` | — |
| `/videos/category/:slug` | `VideoCategoryArchiveTemplate` | — |

---

### Podcasts (2)

| Path | Template | Slug |
|------|----------|------|
| `/podcasts` | `PodcastArchiveTemplate` | `podcasts`, `podcast-archive` |
| `/podcast/:slug` | `SinglePodcastTemplate` | — |

---

### WooCommerce (4)

| Path | Template | Slug |
|------|----------|------|
| `/shop` | `ProductArchiveTemplate` | `product-archive` |
| `/shop/:slug` | `SingleProductTemplate` | `product-single-{slug}` |
| `/cart` | `CartTemplate` | `cart` |
| `/checkout` | `CheckoutTemplate` | `checkout` |

---

### Tour Operator (2)

| Path | Template | Slug |
|------|----------|------|
| `/tours` | `TourOperatorArchiveTemplate` | `tour-operator-archive` |
| `/tours/:slug` | `SingleTourTemplate` | `tour-single-{slug}` |

---

### Utility Pages (13)

| Path | Template | Slug | In Nav |
|------|----------|------|--------|
| `/contact` | `ContactPageTemplate` | `contact` | Main nav |
| `/faq` | `FAQTemplate` | `faq`, `faqs` | Footer |
| `/pricing` | `PricingTemplate` | `pricing` | CTA links |
| `/why-choose-us` | `WhyChooseUsTemplate` | `why-choose-us` | Internal links |
| `/guarantees` | `GuaranteesTemplate` | `guarantees` | Internal links |
| `/roi-calculator` | `ROICalculatorTemplate` | `roi-calculator` | Internal links |
| `/testimonials` | `TestimonialsTemplate` | `testimonials` | Internal links |
| `/search` | `SearchResultsPageTemplate` | `search` | Header search |
| `/privacy-policy` | `PrivacyPolicyTemplate` | `privacy-policy` | Footer |
| `/terms-of-service` | `TermsOfServiceTemplate` | `terms-of-service` | Footer |
| `/site-map` | `SiteMapTemplate` | `site-map` | Footer |
| `/style-guide` | `StyleGuideTemplate` | `style-guide` | Dev tools |
| `/tutorials` | `TutorialsTemplate` | `tutorials` | Footer |

---

### Legacy / Misc (8)

These are backward-compatibility or proof-of-concept routes.

| Path | Template | Notes |
|------|----------|-------|
| `/archive` | `ArchiveTemplate` | Generic archive fallback |
| `/archive/filters` | `ArchiveWithFiltersTemplate` | Filter demo |
| `/index` | `IndexTemplate` | WordPress index fallback |
| `/single` | `SingleTemplate` | Generic single fallback |
| `/search-legacy` | `SearchResultsTemplate` | Legacy search |
| `/wordpress-blocks-poc` | `WordPressBlocksProofOfConcept` | Blocks PoC |
| `/section-style-example` | `SectionStyleExample` | Section styles demo |
| `/feature-showcase` | `FeatureShowcaseTemplate` | Feature demo |

---

### Dev Tools (16)

All behind `/dev-tools/`. Not production pages.

| Path | Template |
|------|----------|
| `/dev-tools` | `DevToolsTemplate` |
| `/dev-tools/template-tester` | `TemplateTester` |
| `/dev-tools/component-showcase` | `ComponentShowcase` |
| `/dev-tools/design-system-test` | `DesignSystemTest` |
| `/dev-tools/compliance-scorecard` | `ComplianceScorecard` |
| `/dev-tools/feature-showcase` | `FeatureShowcaseTemplate` |
| `/dev-tools/block-documentation` | `BlockDocumentation` |
| `/dev-tools/component-api` | `ComponentAPI` |
| `/dev-tools/design-blocks-showcase` | `DesignBlocksShowcase` |
| `/dev-tools/button-showcase` | `ButtonShowcase` |
| `/dev-tools/header-footer-comparison` | `HeaderFooterComparison` |
| `/dev-tools/icon-library` | `IconLibrary` |
| `/dev-tools/live-preview` | `LivePreview` |
| `/dev-tools/section-presets-showcase` | `SectionPresetsShowcase` |
| `/dev-tools/theme-blocks-showcase` | `ThemeBlocksShowcase` |
| `/dev-tools/style-guide` | `StyleGuideTemplate` |

---

### Error Pages (2)

| Path | Template |
|------|----------|
| `/404` | `Template404` |
| `*` | `Template404` (catch-all) |

---

## Slug Resolution

The `NavigationContext` uses `navigateTo(slug)` which resolves slugs via `/src/app/utils/route-map.ts`.

### Static Slugs

Direct lookups in `SLUG_TO_PATH` map (170+ entries including legacy aliases).

### Dynamic Slug Patterns

| Prefix | Pattern | Resolved Path |
|--------|---------|---------------|
| `portfolio-single-` | `portfolio-single-{slug}` | `/portfolio/{slug}` |
| `product-single-` | `product-single-{slug}` | `/shop/{slug}` |
| `post-` | `post-{slug}` | `/blog/{slug}` |
| `category-` | `category-{slug}` | `/blog/category/{slug}` |
| `author-` | `author-{slug}` | `/blog/author/{slug}` |
| `tag-` | `tag-{slug}` | `/blog/tag/{slug}` |
| `date-` | `date-{year}-{month}` | `/blog/date/{year}/{month}` |
| `service-` | `service-{name}` | `/services/{name}` |
| `solution-` | `solution-{name}` | `/solutions/{name}` |
| `tour-single-` | `tour-single-{slug}` | `/tours/{slug}` |

### Legacy Slug Aliases

Many old flat slugs are mapped to new hierarchical paths for backward compatibility:

```
discovery-service    → /services/discovery
design-service       → /services/design
wordpress-solution   → /solutions/wordpress
woocommerce-solution → /solutions/woocommerce
hosting-plans        → /services/hosting
```

See `route-map.ts` for the full alias list.

---

## Navigation Data

**Source:** `/src/app/data/pages.ts`

- `mainNavigation` — Desktop header mega menu items
- `footerNavigation` — Footer column links
- Helper functions: `getPageBySlug()`, `getPageUrl()`, `getPageTitle()`

---

## Adding a New Route

1. **Create template** in `/src/app/components/templates/`
2. **Create CSS file** in `/src/styles/templates/` (BEM naming, CSS variables only)
3. **Register CSS import** in `/src/styles/index.css`
4. **Add lazy import** in `/src/app/routes.tsx`
5. **Add route definition** in the `routes` array
6. **Add slug mapping** in `/src/app/utils/route-map.ts`
7. **Update navigation data** in `/src/app/data/pages.ts` if the page appears in menus
8. **Update sitemap** in `/guidelines/overview-sitemap.md`

---

**Last Updated:** February 14, 2026  
**Total Routes:** 117  
**Verified:** Against `/src/app/routes.tsx` and `/src/app/utils/route-map.ts`
