# Funky Sections Audit Report

**Date:** 2026-02-21  
**Scope:** Full-site section-level audit (all templates)  
**Auditor:** AI Assistant  
**Prompt:** `/prompts/funky-redesign-prompt.md` v2.0

---

## Summary

- **Total template files audited:** 110+
- **Templates with funky hero (parallax + orbs + overlay):** 16
- **Templates with funky body sections (glow cards, glassmorphism):** 9
- **Templates using FunkyCTA:** 19+
- **Template CSS files with `.dark` selectors:** 7
- **Template CSS files WITHOUT `.dark` selectors:** 80+
- **Total sections needing funky redesign:** ~200+ (estimate across all pages)

---

## Classification Key

| Score | Meaning |
|-------|---------|
| **FUNKY** | Hero + body sections all have 2+ funky elements |
| **HERO-ONLY** | Funky hero, but body sections are plain/generic |
| **PARTIAL** | Some funky elements scattered but inconsistent |
| **PLAIN** | No funky treatment at all — basic layout |
| **DEV-TOOL** | Internal tool, funky not required |

---

## Tier 1: FUNKY (Complete funky treatment)

These templates have parallax hero + glow cards + dark mode CSS + FunkyCTA:

| Template | Route | Hero | Body Sections | Dark CSS | FunkyCTA | Grade |
|----------|-------|------|---------------|----------|----------|-------|
| `FrontPageTemplate` | `/` | Parallax + orbs + grid | Glow feature grid, stats, process, testimonials, FAQ | Via patterns | Yes (x2) | **FUNKY** |
| `AboutTemplate` | `/about` | Parallax + orbs | Glow cards (story, mission, values, expertise), stats, timeline, FAQ | Partial (needs .dark file audit) | Yes | **FUNKY** |
| `ContactPageTemplate` | `/contact` | Parallax + orbs | Glow method cards, form glass, reason cards, office cards | Yes (extensive) | Yes | **FUNKY** |
| `SolutionsTemplate` | `/solutions` | Custom hero glow | Solution cards with hover glow, why-choose cards | Yes (extensive) | Via detail pages | **FUNKY** |

---

## Tier 2: HERO-ONLY (Funky hero, body sections need work)

These templates have a parallax/orb hero but body sections are plain:

| Template | Route | Hero | Body Status | Dark CSS | Priority |
|----------|-------|------|-------------|----------|----------|
| `TeamTemplate` | `/about/team` | Parallax + orbs | Leadership grid: plain cards, no glow. Culture grid: plain. Stats: basic. | Missing | **HIGH** |
| `AboutProcessTemplate` | `/about/process` | Parallax + orbs | Process steps: has glow cards. But overall dark mode missing. | Missing | **MEDIUM** |
| `AboutCultureTemplate` | `/about/culture` | Parallax + orbs | Initiative cards: plain. CTA card has glow. Values: plain list. | Missing | **HIGH** |
| `AboutHistoryTemplate` | `/about/history` | Parallax + orbs | Timeline: uses Timeline component (partially funky). Milestones: plain. | Missing | **MEDIUM** |
| `ServicesLandingTemplate` | `/services` | Parallax + orbs | Service cards: has glow. Process: basic. Industries: plain. | Missing | **MEDIUM** |
| `CareersTemplate` | `/about/careers` | Parallax + orbs | Job listings: plain cards. Benefits: basic grid. Culture: plain. | Missing | **HIGH** |
| `WetuImporterTemplate` | `/solutions/wetu` | Parallax + orbs | Feature grid: plain. Integration: basic. Stats: plain. | Missing | **MEDIUM** |
| `LSXSharingTemplate` | `/solutions/sharing` | Parallax + orbs | Feature cards: plain. How-it-works: basic. Benefits: plain. | Missing | **MEDIUM** |
| `LSXSearchTemplate` | `/solutions/search` | Parallax + orbs | Feature cards: plain. Search demo: basic. Benefits: plain. | Missing | **MEDIUM** |
| `PublishersTemplate` | `/publishers` | Parallax + orbs | Feature grid: plain. Pricing: basic. Testimonials: plain. | Missing | **MEDIUM** |
| `ContentAuditTemplate` | `/services/content-audit` | Parallax + orbs | Audit steps: plain. Results: basic. Stats: plain. | Missing | **MEDIUM** |
| `PrivacyPolicyTemplate` | `/legal/privacy` | Parallax + orbs | Body is long-form text — funky treatment is minimal (appropriate). | Missing | **LOW** |
| `TermsOfServiceTemplate` | `/legal/terms` | Parallax + orbs | Body is long-form text — funky treatment is minimal (appropriate). | Missing | **LOW** |

---

## Tier 3: PARTIAL (Some funky, inconsistent)

| Template | Route | Status | Key Issues | Priority |
|----------|-------|--------|------------|----------|
| `ServicesTemplate` | `/services` (overview) | Has FunkyCTA, BEM CSS with dark mode | Process section orbs need glow cards, industries grid plain | **MEDIUM** |
| `BlogIndexTemplate` | `/blog` | Hero has orbs in CSS, FunkyCTA present | Featured posts cards: plain. Category filters: basic. Post cards: no glow. | **HIGH** |
| `FAQTemplate` | `/faq` | Gradient hero with orb, stats section | Accordion: no glow on active. Stats cards: plain (no glow border). Category icons: basic. | **HIGH** |
| `PortfolioArchiveTemplate` | `/portfolio` | Has orbs in CSS, FunkyCTA | Filter bar: basic. Project cards: partial hover. Needs glow border treatment. | **MEDIUM** |
| `PortfolioSingleTemplate` | `/portfolio/:slug` | BEM CSS with dark mode | Featured image: basic hover. Detail cards: no glow. Result cards: plain. | **MEDIUM** |
| `ServiceDetailTemplate` | `/services/*` (shared) | Has FunkyCTA, BEM naming | Section anatomy good but many body sections lack glow cards or gradient accents. | **MEDIUM** |
| `DevelopmentServiceTemplate` | `/services/development` | Glow orbs present | Hero glow orbs yes. Body sections use ServiceDetail (partially funky). | **MEDIUM** |
| `DiscoveryServiceTemplate` | `/services/discovery` | Why-choose has glow | Feature grid lacks glow cards. Process steps plain. | **MEDIUM** |
| `MigrationsServiceTemplate` | `/services/migrations` | Why + case study glow | Feature grid lacks full glow card treatment. | **MEDIUM** |
| `DesignServiceTemplate` | `/services/design` | Has FunkyCTA | Body sections partially styled but missing glow cards and gradient accents. | **MEDIUM** |
| `ContentServiceTemplate` | `/services/content` | Has FunkyCTA | Body sections use shared ServiceDetail. Plain cards. | **MEDIUM** |
| `SecurityServiceTemplate` | `/services/security` | Has FunkyCTA | Body sections use shared ServiceDetail. Plain cards. | **MEDIUM** |
| `MailchimpSolutionTemplate` | `/solutions/mailchimp` | Has hero + dark mode CSS | Sections partially styled. Integration grid: plain. | **MEDIUM** |

---

## Tier 4: PLAIN (No funky treatment)

These templates have zero or minimal funky elements and need full section redesign:

| Template | Route | Current State | Priority |
|----------|-------|---------------|----------|
| `PricingTemplate` | `/pricing` | Basic pricing cards, no glow/glass | **HIGH** |
| `HostingTemplate` | `/hosting` | Basic hosting cards, standard layout | **HIGH** |
| `WhyChooseUsTemplate` | `/why-choose-us` | Standard feature list, no funky | **HIGH** |
| `GuaranteesTemplate` | `/guarantees` | Standard guarantee cards, no glow | **HIGH** |
| `ROICalculatorTemplate` | `/roi-calculator` | Functional calculator, no funky styling | **MEDIUM** |
| `TestimonialsTemplate` | `/testimonials` | Standard testimonial grid, no glow | **MEDIUM** |
| `SiteMapTemplate` | `/sitemap` | Standard link lists, minimal | **LOW** |
| `404Template` | `/404` | Basic error page, no orbs/glow | **LOW** |
| `SinglePostTemplate` | `/blog/:slug` | Standard post layout, no funky sections | **MEDIUM** |
| `SinglePostLongformTemplate` | `/blog/:slug` | Standard long-form, no funky | **MEDIUM** |
| `SupportServiceTemplate` | `/services/support` | Basic service layout | **MEDIUM** |
| `NewsletterServiceTemplate` | `/services/newsletter` | Basic service layout | **MEDIUM** |
| `EmailMarketingTemplate` | `/services/email-marketing` | Basic service layout | **MEDIUM** |
| `TrainingTemplate` | `/services/training` | Basic service layout | **MEDIUM** |
| `PerformanceServiceTemplate` | `/services/performance` | Basic service layout | **MEDIUM** |
| `SEOServiceTemplate` | `/services/seo` | Basic service layout | **MEDIUM** |
| `AccessibilityServiceTemplate` | `/services/accessibility` | Basic service layout | **MEDIUM** |
| `AIEngineOptimisationTemplate` | `/services/ai-engine` | Basic service layout | **MEDIUM** |
| `AnswerEngineOptimisationTemplate` | `/services/aeo` | Basic service layout | **MEDIUM** |
| `ContentStrategyTemplate` | `/services/content-strategy` | Basic service layout | **MEDIUM** |
| `ContentCollectionTemplate` | `/services/content-collection` | Basic service layout | **MEDIUM** |
| `SolutionDetailTemplate` | `/solutions/*` (shared) | Has FunkyCTA but body sections plain | **MEDIUM** |
| `WordPressSolutionTemplate` | `/solutions/wordpress` | WP utility classes, basic grid | **MEDIUM** |
| `WooCommerceSolutionTemplate` | `/solutions/ecommerce` | BEM naming, holographic theme but body sections need check | **MEDIUM** |
| `WordPressRedesignTemplate` | `/solutions/redesign` | Basic solution layout | **MEDIUM** |
| `TourOperatorDesignTemplate` | `/solutions/tour-design` | Basic solution layout | **MEDIUM** |
| `TourOperatorTemplate` | `/tour-operators` | Basic archive layout | **MEDIUM** |
| `VideoArchiveTemplate` | `/videos` | Basic archive grid | **MEDIUM** |
| `PodcastArchiveTemplate` | `/podcasts` | Basic archive grid | **MEDIUM** |
| `CategoryArchiveTemplate` | `/blog/category/*` | Has FunkyCTA, basic cards | **LOW** |
| `TagArchiveTemplate` | `/blog/tag/*` | Basic archive | **LOW** |
| `AuthorArchiveTemplate` | `/blog/author/*` | Has FunkyCTA, mesh grid bg | **LOW** |
| `DateArchiveTemplate` | `/blog/date/*` | Basic archive | **LOW** |
| `ArchiveTemplate` | `/archive` | Basic archive | **LOW** |
| `ArchiveWithFiltersTemplate` | (shared) | Basic with filters | **LOW** |
| `SingleVideoTemplate` | `/videos/:slug` | Basic single view | **LOW** |
| `SinglePodcastTemplate` | `/podcasts/:slug` | Basic single view | **LOW** |
| `SingleProjectTemplate` | `/portfolio/:slug` | Basic single view | **LOW** |
| `CartTemplate` | `/cart` | WooCommerce - minimal funky | **LOW** |
| `CheckoutTemplate` | `/checkout` | WooCommerce - minimal funky | **LOW** |
| `ProductArchiveTemplate` | `/shop` | WooCommerce - basic grid | **LOW** |
| `LSXDesignTemplate` | `/lsx-design` | Basic landing | **MEDIUM** |
| `JourneyStageTemplate` | `/journey/*` | Basic content | **LOW** |

---

## Tier 5: DEV-TOOLS (No funky required)

| Template | Route | Notes |
|----------|-------|-------|
| `StyleGuideTemplate` | `/style-guide` | Reference page — has glow card example |
| `DesignPlaygroundTemplate` | `/design-playground` | Token tester tool |
| `DevToolsTemplate` | `/dev-tools` | Developer dashboard |
| `ComponentShowcase` | `/dev-tools/components` | Component reference |
| `BlockDocumentation` | `/dev-tools/blocks` | Block reference |
| `DesignTokensReferenceTemplate` | `/dev-tools/tokens` | Token reference |
| `DesignBlocksShowcase` | `/dev-tools/blocks/design` | Block showcase |
| `ThemeBlocksShowcase` | `/dev-tools/blocks/theme` | Block showcase |
| `SectionPresetsShowcase` | `/dev-tools/sections` | Section showcase |
| `ButtonShowcase` | `/dev-tools/buttons` | Button reference |
| `HeaderFooterComparison` | `/dev-tools/headers` | Layout comparison |
| `IconLibrary` | `/dev-tools/icons` | Icon reference |
| `TemplateTester` | `/dev-tools/templates` | Template tester |
| `CodeQualityDashboardTemplate` | `/dev-tools/code-quality` | Quality metrics |
| `DeploymentReadinessTemplate` | `/dev-tools/deployment` | Deployment check |
| `FeatureShowcaseTemplate` | `/dev-tools/features` | Feature demo |
| `LivePreview` | `/dev-tools/preview` | Live preview |
| `ComponentAPI` | `/dev-tools/api` | API reference |
| `DocsGeneratorTemplate` | `/dev-tools/docs` | Doc generator |
| `SnippetGeneratorTemplate` | `/dev-tools/snippets` | Code snippets |
| `WordPressBlocksProofOfConcept` | `/dev-tools/wp-blocks` | WP blocks demo |
| `SectionStyleExample` | `/dev-tools/section-styles` | Section demo |

---

## Cross-Cutting Issues

### 1. Dark Mode Coverage Gap
**CRITICAL:** Only 7 out of 87+ template CSS files have `.dark` selectors. Most templates rely on the global semantic variables (`var(--background)`, `var(--foreground)`) which auto-switch, but page-specific elements like gradient overlays, glow effects, and custom backgrounds need explicit dark mode overrides.

**Impact:** Gradient text (`background-clip: text`) appears invisible in dark mode if gradients don't adjust. Glow effects appear too dim or too bright without dark-specific opacity.

### 2. Hardcoded Values
**STATUS: CLEAN** - Zero hardcoded hex colors, zero hardcoded font families, zero raw Tailwind classes found in template TSX files. DesignPlaygroundTemplate hex values are intentional (design token reference).

### 3. CSS Variable Compliance
**STATUS: EXCELLENT** - All templates use `var(--font-primary)`, `var(--font-secondary)`, `var(--text-*)`, `var(--spacing-*)` correctly. No font name violations found.

### 4. BEM Naming
**STATUS: GOOD** - Templates with dedicated CSS files follow BEM naming. Some older templates use `wp-*` utility classes (acceptable per guidelines). No raw Tailwind.

### 5. Mobile Hero Responsiveness
**STATUS: NEEDS VERIFICATION** - Parallax heroes use `min-height: 100vh` which is good. Need to verify text readability on 320px screens and that orbs are hidden/reduced on mobile.

### 6. Missing `prefers-reduced-motion` Guards
**STATUS: NEEDS AUDIT** - Not all animation CSS has `@media (prefers-reduced-motion: reduce)` guards. The parallax hook may need a motion guard.

---

## Recommendations

### Immediate (This Session)
1. Pick 3-5 HIGH priority PLAIN templates and apply full funky section treatment
2. Focus on pages users see most: Pricing, Hosting, Why Choose Us, Blog Index, FAQ
3. Add `.dark` selectors to all funky section styles

### Next Session
1. Continue with remaining HIGH and MEDIUM priority templates
2. Add reduced-motion guards to all animation CSS
3. Verify mobile hero responsiveness at 320px

### Future
1. LOW priority templates and archive pages
2. WooCommerce template polish (minimal funky — conversion-focused)
3. Full visual regression testing across all pages in both modes
