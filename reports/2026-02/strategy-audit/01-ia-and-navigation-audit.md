# IA and Navigation Audit Report

**Date:** February 25, 2026
**Auditor:** AI (Orchestrator Prompt v1.0)
**Source Prompt:** `/prompts/strategy-audit/01-ia-and-navigation-audit.md`

---

## Executive Summary

The current prototype has **117 routes** built around a traditional agency taxonomy (Services / Solutions / Portfolio / Blog / About / Contact). The 2026 strategic IA proposes collapsing to six primary sections — **Work / Solutions / Systems / Insights / About / Contact** — to shift positioning from labour-based services to outcome-based systems. Approximately **40% of the proposed 2026 URLs have no current equivalent**, and the entire `/systems/` hub and `/work/` hub are missing. The current navigation (SiteHeader) uses "Services / Solutions / Portfolio / About / Blog / Contact" and needs a structural rename and reorganisation.

---

## 1. Current Route Inventory

### Core Pages (6 routes)

| Current Path | Template | Category |
|---|---|---|
| `/` | FrontPageTemplate | Home |
| `/contact` | ContactPageTemplate | Utility |
| `/faq` | FAQTemplate | Utility |
| `/pricing` | PricingTemplate | Utility |
| `/search` | SearchResultsPageTemplate | Utility |
| `/404` | Template404 | Utility |

### About Section (6 routes)

| Current Path | Template | Category |
|---|---|---|
| `/about` | AboutTemplate | About |
| `/about/process` | AboutProcessTemplate | About |
| `/about/culture` | AboutCultureTemplate | About |
| `/about/history` | AboutHistoryTemplate | About |
| `/about/team` | TeamTemplate | About |
| `/about/careers` | CareersTemplate | About |

### Services Section (22 routes)

| Current Path | Template | Category |
|---|---|---|
| `/services` | ServicesLandingTemplate | Services |
| `/services/discovery` | DiscoveryServiceTemplate | Services |
| `/services/design` | DesignServiceTemplate | Services |
| `/services/development` | DevelopmentServiceTemplate | Services |
| `/services/content` | ContentServiceTemplate | Services |
| `/services/content/strategy` | ContentStrategyTemplate | Services |
| `/services/content/collection` | ContentCollectionTemplate | Services |
| `/services/content/audit` | ContentAuditTemplate | Services |
| `/services/security` | SecurityServiceTemplate | Services |
| `/services/migrations` | MigrationsServiceTemplate | Services |
| `/services/support` | SupportServiceTemplate | Services |
| `/services/newsletter` | NewsletterServiceTemplate | Services |
| `/services/email-marketing` | EmailMarketingTemplate | Services |
| `/services/training` | TrainingTemplate | Services |
| `/services/hosting` | HostingTemplate | Services |
| `/services/performance` | PerformanceServiceTemplate | Services |
| `/services/seo` | SEOServiceTemplate | Services |
| `/services/accessibility` | AccessibilityServiceTemplate | Services |
| `/services/ai-engine-optimisation` | AIEngineOptimisationTemplate | Services |
| `/services/answer-engine-optimisation` | AnswerEngineOptimisationTemplate | Services |
| `/services/ignite` through `/services/evolve` | JourneyStageTemplate (x6) | Journey |

### Solutions Section (16 routes)

| Current Path | Template | Category |
|---|---|---|
| `/solutions` | SolutionsTemplate | Solutions |
| `/solutions/wordpress` | WordPressSolutionTemplate | Solutions |
| `/solutions/woocommerce` | WooCommerceSolutionTemplate | Solutions |
| `/solutions/tour-operators` | TourOperatorTemplate | Solutions |
| `/solutions/publishers` | PublishersTemplate | Solutions |
| `/solutions/lsx` | LSXDesignTemplate | Solutions |
| `/solutions/lsx-theme` | LSXSolutionTemplate | Solutions |
| `/solutions/mailchimp` | MailchimpSolutionTemplate | Solutions |
| `/solutions/wetu-importer` | WetuImporterTemplate | Solutions |
| `/solutions/lsx-sharing` | LSXSharingTemplate | Solutions |
| `/solutions/lsx-search` | LSXSearchTemplate | Solutions |
| `/solutions/wordpress-redesign` | WordPressRedesignTemplate | Solutions |
| `/solutions/woocommerce-redesign` | WooCommerceRedesignTemplate | Solutions |
| `/solutions/tour-operator-design` | TourOperatorDesignTemplate | Solutions |
| `/solutions/ai-integrations` | AIIntegrationsTemplate | Solutions |
| `/solutions/ai-*` (x4) | AI sub-templates | Solutions |

### Portfolio Section (4 routes)

| Current Path | Template | Category |
|---|---|---|
| `/portfolio` | PortfolioArchiveTemplate | Portfolio |
| `/portfolio/:slug` | PortfolioSingleTemplate | Portfolio |
| `/portfolio/category/:slug` | PortfolioCategoryArchiveTemplate | Portfolio |
| `/portfolio/tag/:slug` | PortfolioTagArchiveTemplate | Portfolio |

### Blog Section (25+ routes)

| Current Path | Template | Category |
|---|---|---|
| `/blog` | BlogIndexTemplate | Blog |
| `/blog/:slug` | SinglePostTemplate | Blog |
| `/blog/single-post` | SinglePostLongformTemplate | Blog |
| `/blog/category/:slug` | CategoryArchiveTemplate | Blog |
| `/blog/author/:slug` | AuthorArchiveTemplate | Blog |
| `/blog/tag/:slug` | TagArchiveTemplate | Blog |
| `/blog/date/:year/:month` | DateArchiveTemplate | Blog |
| `/blog/format/*` (x18) | Post format templates | Blog |

### WooCommerce (4 routes), Tours (2), Videos (4), Podcasts (3), Testimonials (5)

| Current Path | Template | Category |
|---|---|---|
| `/shop`, `/shop/:slug`, `/cart`, `/checkout` | WooCommerce templates | E-commerce |
| `/tours`, `/tours/:slug` | Tour operator templates | Tours |
| `/videos`, `/video/:slug`, `/videos/category/:slug`, `/videos/tag/:slug` | Video templates | Media |
| `/podcasts`, `/podcast/:slug`, `/podcasts/category/:slug` | Podcast templates | Media |
| `/testimonials`, `/testimonials/archive`, `/testimonials/:slug`, `/testimonials/audio/:slug`, etc. | Testimonial templates | Proof |

### Utility & Legacy (15+ routes)

| Current Path | Template | Category |
|---|---|---|
| `/why-choose-us` | WhyChooseUsTemplate | Conversion |
| `/guarantees` | GuaranteesTemplate | Conversion |
| `/roi-calculator` | ROICalculatorTemplate | Conversion |
| `/privacy-policy` | PrivacyPolicyTemplate | Legal |
| `/terms-of-service` | TermsOfServiceTemplate | Legal |
| `/site-map` | SiteMapTemplate | Utility |
| `/style-guide` | StyleGuideTemplate | Utility |
| `/tutorials` | TutorialsTemplate | Resource |
| `/dev-tools/*` (x16) | Dev tools templates | Dev |

**Total current routes: ~117**

---

## 2. Proposed vs Current Mapping

### Primary Navigation Sections

| Proposed Section | Current Equivalent | Status | Action Needed |
|---|---|---|---|
| `/work/` | `/portfolio` | PARTIAL | Rename portfolio to "Work"; restructure as case studies hub |
| `/work/case-studies/{client}/` | `/portfolio/:slug` | PARTIAL | Rename path; restructure template for systems-first case study format |
| `/solutions/` | `/solutions/` | EXISTS | Needs messaging update (systems language) |
| `/solutions/publishing-systems/` | `/solutions/wordpress` | PARTIAL | Rename + reposition as "Publishing Systems" |
| `/solutions/woocommerce-systems/` | `/solutions/woocommerce` | PARTIAL | Rename + reposition as "WooCommerce Systems" |
| `/systems/` | — | MISSING | **Entirely new hub** — requires new template |
| `/systems/design-tokens-theme-json/` | — | MISSING | New definitional page |
| `/systems/pattern-library-governance/` | — | MISSING | New definitional page |
| `/systems/editorial-workflow-engineering/` | — | MISSING | New definitional page |
| `/systems/ai-search-readiness/` | — | MISSING | New definitional page |
| `/systems/performance-reliability/` | — | MISSING | New definitional page |
| `/insights/` | `/blog` | PARTIAL | Rename "Blog" to "Insights"; restructure categories |
| `/insights/research/` | — | MISSING | New category/archive |
| `/insights/build-notes/` | — | MISSING | New category/archive |
| `/about/` | `/about` | EXISTS | Minor messaging updates |
| `/contact/` | `/contact` | EXISTS | CTA update to "Request a Systems Audit" |

### Services → Systems Remapping

| Current Service Path | Proposed Mapping | Status |
|---|---|---|
| `/services/discovery` | Foundation tier: "System Architecture Sprint" | NEEDS RENAME |
| `/services/design` | Foundation tier: "Tokenised Design System" | NEEDS RENAME |
| `/services/development` | Foundation tier: "WordPress System Implementation" | NEEDS RENAME |
| `/services/support` | Foundation tier: "Platform Operations" | NEEDS RENAME |
| `/services/hosting` | Foundation tier: "Performance Infrastructure" | NEEDS RENAME |
| `/services/content` | Growth tier: "Structured Content Operations" | NEEDS RENAME |
| `/services/seo` + `/services/ai-engine-optimisation` | Growth tier: "AI Search Readiness" | MERGE |
| `/services/performance` | Systems hub: cross-linked | MOVE |
| `/services/accessibility` | Foundation tier: included in System Implementation | FOLD IN |

---

## 3. Navigation Structure Gaps

### Header Navigation

| Proposed Nav Item | Current Nav Item | Status | Action |
|---|---|---|---|
| **Work** | Portfolio | RENAME | Change "Portfolio" to "Work" |
| **Solutions** | Solutions | EXISTS | Keep, update mega menu content |
| **Systems** | — | MISSING | Add entirely new nav item + mega menu |
| **Insights** | Blog | RENAME | Change "Blog" to "Insights" |
| **About** | About | EXISTS | Minor updates |
| **Contact** | Contact | EXISTS | Keep |
| — | **Services** | DEPRECATED | Remove as primary nav; fold into Solutions/Systems |

**Current primary nav:** Services / Solutions / Portfolio / About / Blog / Contact
**Proposed primary nav:** Work / Solutions / Systems / Insights / About / Contact

**Gap:** 2 renames (Portfolio→Work, Blog→Insights), 1 removal (Services), 1 addition (Systems)

### Footer Navigation

| Proposed Footer Column | Current Footer Column | Status |
|---|---|---|
| **Company** (About, Culture, Community, Policies) | **Company** (About, Team, Portfolio, Testimonials, Careers, Contact) | PARTIAL — needs restructure |
| **Systems** (Design tokens, Pattern library, AI governance, Performance) | — | MISSING |
| **Proof** (Case studies, Testimonials, Open source, Partnerships) | — | MISSING |
| **Contact** (Consultation, Email, Social) | — (Contact is in Company column) | MISSING as separate column |
| — | **Services** (All services, Discovery, Design, Development, etc.) | DEPRECATED |
| — | **Solutions** (WordPress, WooCommerce, etc.) | DEPRECATED |
| — | **Resources** (Blog, Tutorials, FAQ, Pricing, etc.) | DEPRECATED |

**Current footer columns:** Services / Solutions / Resources / Company
**Proposed footer columns:** Company / Systems / Proof / Contact

**Gap:** Complete restructure needed — all 4 columns change.

---

## 4. New Pages Required

### Systems Hub (5 new pages)

1. `/systems/` — Systems landing/hub page (new template)
2. `/systems/design-tokens-theme-json/` — Definitional content page
3. `/systems/pattern-library-governance/` — Definitional content page
4. `/systems/editorial-workflow-engineering/` — Definitional content page
5. `/systems/ai-search-readiness/` — Definitional content page
6. `/systems/performance-reliability/` — Definitional content page

### Work Hub (restructure)

7. `/work/` — Work landing page (replaces `/portfolio`)
8. `/work/case-studies/` — Case studies archive
9. `/work/patterns-playbooks/` — Patterns and playbooks showcase (optional)
10. `/work/results/` — Results metrics index (optional)

### Insights Hub (restructure)

11. `/insights/` — Insights landing page (replaces `/blog`)
12. `/insights/research/` — Forward-looking research category
13. `/insights/build-notes/` — Engineering-focused category
14. `/insights/editorial-systems/` — Content ops category
15. `/insights/ai-governance/` — AI & governance category

**Total new pages needed: 10-15** (depending on depth of restructure)

---

## 5. URL Redirect Map

| Current URL | Proposed URL | Redirect Type |
|---|---|---|
| `/portfolio` | `/work` | 301 |
| `/portfolio/:slug` | `/work/case-studies/:slug` | 301 |
| `/portfolio/category/:slug` | `/work/case-studies/?category=:slug` | 301 |
| `/portfolio/tag/:slug` | `/work/case-studies/?tag=:slug` | 301 |
| `/blog` | `/insights` | 301 |
| `/blog/:slug` | `/insights/:slug` | 301 |
| `/blog/category/:slug` | `/insights/category/:slug` | 301 |
| `/blog/author/:slug` | `/insights/author/:slug` | 301 |
| `/blog/tag/:slug` | `/insights/tag/:slug` | 301 |
| `/services` | `/solutions` (or keep as alias) | 301 |
| `/services/discovery` | `/solutions/system-architecture-sprint` | 301 |
| `/services/design` | `/solutions/tokenised-design-system` | 301 |
| `/services/development` | `/solutions/wordpress-system-implementation` | 301 |
| `/services/support` | `/solutions/platform-operations` | 301 |
| `/services/hosting` | `/solutions/performance-infrastructure` | 301 |
| `/services/content` | `/solutions/structured-content-operations` | 301 |
| `/services/seo` | `/systems/ai-search-readiness` | 301 |
| `/services/performance` | `/systems/performance-reliability` | 301 |

**Note:** Many current `/services/*` paths should consolidate into `/solutions/*` or `/systems/*`. Individual service detail pages may become sub-sections of the three-tier model rather than standalone pages.

---

## 6. Priority Actions

### P0 — Critical (blocks launch)

1. **Create `/systems/` hub and 5 child pages** — This is the strategic differentiator. Without it, the "systems" positioning has no home.
2. **Rename primary nav** — Change "Services" → remove, "Portfolio" → "Work", "Blog" → "Insights", add "Systems"
3. **Restructure footer columns** — Change from Services/Solutions/Resources/Company to Company/Systems/Proof/Contact

### P1 — High (pre-launch)

4. **Rename `/portfolio` → `/work`** and update all internal links, data, and templates
5. **Rename `/blog` → `/insights`** and update all internal links, data, and templates
6. **Consolidate `/services/*`** — Fold individual service pages into three-tier model under `/solutions/*`
7. **Create redirect map** — Document all old→new URL mappings for WordPress `.htaccess` or plugin

### P2 — Medium (post-launch)

8. **Create Insights sub-categories** — Research, Build Notes, Editorial Systems, AI Governance
9. **Create Work sub-sections** — Case Studies, Patterns & Playbooks, Results Metrics
10. **Update all CTA text** across all templates to use systems-first language

### P3 — Low (enhancement)

11. **Phase out Journey Stage pages** (`/services/ignite` through `/services/evolve`) — fold into three-tier model
12. **Review AI sub-pages** — determine if they sit under Solutions or Systems
13. **Clean up dev-tools routes** — not relevant for production launch

---

## Estimated Effort

| Action | Estimated Hours |
|---|---|
| Systems hub (6 pages + templates + CSS) | 16-24h |
| Navigation restructure (header + footer) | 4-6h |
| Route renames + redirect map | 4-6h |
| Internal link updates (data files, templates) | 8-12h |
| Content rewriting (systems language) | 8-12h |
| **Total** | **40-60h** |

---

**END OF AUDIT 01**
