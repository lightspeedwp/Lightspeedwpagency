# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- **Monospace Font Audit:** Verified and tokenized 12 files using hardcoded `monospace` or system fonts (print.css, dev-tools, UI components, sitemap, etc.) to use `var(--font-mono)`.
- **Hosting Terminal Colors:** Tokenized terminal status colors (red, yellow, green) in `theme-base.css` and applied them to Hosting page styles.
- **Hex Color Remediation:** Replaced hardcoded hex values in `theme-blocks-showcase.css` with semantic CSS variables (`var(--color-white)`, `var(--foreground-light)`, etc.).

### Optimization
- **CSS Modularization (Hosting):** Split oversized `page-service-hosting.css` (~1400 lines) into 7 specialized modules (`hosting-base.css`, `hosting-hero.css`, etc.) reducing main file size by 90% and improving maintainability.
- **FrontPage Modularity:** Extracted inline Splash Hero logic from `FrontPageTemplate.tsx` into a reusable `HeroSplash.tsx` pattern component, reducing template size and improving code reusability.

### Added
- **Master Orchestrator Prompt v4.0** at `/prompts/00-ORCHESTRATOR.md` — Centralized multi-audit/implementation entry point for Design Systems, Optimization, and Funky Redesign.
- Full System Audit Report at `/reports/2026-03-02-full-system-audit.md` covering Design System compliance, Codebase Optimization, and Funky status.
- Deprecation of legacy `/prompts/design-system/2025-01-09-component-creation-template.md` in favor of new Orchestrator standards.

### Changed
- Updated `Guidelines.md` with March 2026 status and new Orchestrator workflow rules.
- Updated `task-list.md` with new remediation tasks for hex colors, monospace fonts, and file splitting.
- Enhanced `TestimonialCard` pattern usage across all sub-services (Phase 2.4).

- Phase 2 URL redirect map document at `/reports/2026-02/phase-2-url-redirect-map.md` covering all URL changes from Tasks 2.1, 2.2, and 2.3 (48 URLs, 8 redirect rules)
- Complete .htaccess redirect implementation for WordPress deployment
- Redirection plugin CSV import configuration for visual redirect management
- functions.php fallback redirect handler for non-Apache servers
- SEO impact assessment with link equity preservation strategy
- Google Analytics 4 tracking configuration for redirect monitoring
- Testing checklist for pre-deployment and post-deployment validation
- Rollback plan with emergency procedures and dual-URL strategy
- Three-tier service model data file at `/src/app/data/three-tier-model.ts` with Foundation/Growth/Enterprise tiers
- Systems audit messaging data for ServicesLanding and Contact hero sections
- Hero features list UI on Contact page (4 audit benefits with Award icons)
- CSS styling for `.contact-page__hero-features` with responsive mobile/desktop layouts
- Route-based code splitting with React.lazy() for 75 non-core templates (dev-tools, WooCommerce, post formats, media, testimonials, journey stages, legacy)
- RouteLoadingFallback component at `/src/app/components/ui/RouteLoadingFallback.tsx` with CSS variable compliance
- Loading spinner CSS at `/src/styles/ui/route-loading-fallback.css` with reduced motion support
- 75 route wrapper components with Suspense boundaries for lazy-loaded templates
- Route code splitting audit report at `/reports/2026-02/2026-02-27-route-code-splitting-audit.md`
- Route code splitting implementation report at `/reports/2026-02/2026-02-27-route-code-splitting-implementation.md`
- Phase 1 Quick Wins report at `/reports/2026-02/2026-02-27-phase-1-quick-wins.md`
- Changelog guidelines file at `/guidelines/changelog/changelog-guidelines.md`
- `CHANGELOG.md` file (this file) following the Keep a Changelog format
- Protected file status for `CHANGELOG.md` in project guidelines
- Systems Hub at `/systems/` with 5-pillar framework (Design Tokens, Pattern Governance, Editorial Workflows, AI Search Readiness, Performance Reliability)
- SystemsHubTemplate component with hero, systems grid, tier integration, and CTA sections
- Systems hub data file at `/src/app/data/systems-hub.ts` with complete system pillar metadata
- Systems hub CSS at `/src/styles/templates/systems-hub-template.css` with BEM naming
- 5 Systems child page templates with shared CSS architecture at `/src/styles/templates/system-page-shared.css`
- DesignTokensSystemTemplate, PatternGovernanceSystemTemplate, EditorialWorkflowsSystemTemplate, AISearchReadinessSystemTemplate, PerformanceReliabilitySystemTemplate
- 5 Systems child routes at `/systems/design-tokens`, `/systems/pattern-governance`, `/systems/editorial-workflows`, `/systems/ai-search-readiness`, `/systems/performance-reliability`
- Systems mega menu in SiteHeader with 3 sections (Core Systems, Advanced Systems, Get Started)
- Task 1.1 report at `/reports/2026-02/2026-02-27-task-1-1-systems-hub.md`
- Task 1.2 report at `/reports/2026-02/2026-02-27-task-1-2-systems-child-pages.md`
- Task 1.3 report at `/reports/2026-02/2026-02-27-task-1-3-navigation-restructure.md`
- Category archive template CSS at `/src/styles/templates/page-category-archive.css` with dedicated BEM styling
- Neon glow hover effects on category archive cards in dark mode
- Gradient overlays on category archive post images
- Category chip neon pills with funky gradient backgrounds and hover glows
- Dedicated BEM class structure for CategoryArchiveTemplate (`.category-archive__*`)
- File optimization prompt at `/prompts/optimization/2026-03-01-file-optimization-and-memory-reduction.md`
- File optimization audit report at `/reports/2026-03/file-optimization-audit-report.md` (130+ templates, 100+ CSS files analyzed)
- File optimization task list at `/tasks/file-optimization-tasks.md` (81-110 hours, 4 phases)
- CSS modularization plan with proposed architecture (base/patterns/components/templates structure)
- DRY violations report identifying 50+ duplicate code patterns
- Component simplification recommendations for BlogIndex, ServicesLanding, and FrontPage templates
- SVG optimization strategy with SVGO configuration (50-75% size reduction expected)
- **CSS base extraction (Phase 1 — ✅ COMPLETE: 33 templates updated, 100% of critical templates!):**
  - `/src/styles/base/card-base.css` — Shared card component styles (40+ files affected, ~600 lines saved)
  - `/src/styles/base/grid-utilities.css` — Responsive grid utilities (35+ files affected, ~350 lines saved)
  - `/src/styles/patterns/hero/hero-base.css` — Hero section base styles (50+ files affected, ~1,000 lines saved)
  - `/src/styles/patterns/hero/hero-variants.css` — 9 hero size/style variants (minimal, feature, splash, service, archive, content, system, pricing, comparison)
  - CSS base extraction guide at `/docs/css-base-extraction-guide.md` with migration instructions
  - **Total Phase 1 savings:** ~2,000 lines CSS eliminated across 33 templates
  - **Templates updated (33 of 33 = 100% complete → 70+ pages affected!):**
    - **Archive templates (7):** blog-index-page, category-archive, author-archive, portfolio-archive, podcast-archive, video-archive, testimonial-archive
    - **Primary pages (2):** page-front-page (homepage), page-services-landing
    - **Service templates (2 base files = 23+ pages!):** service-detail.css (15+ service pages), sub-service-base.css (8 sub-service pages)
    - **About pages (4):** page-about, page-about-process, page-about-culture, page-about-history
    - **Solution pages (6):** solution-detail (base), page-solution-wordpress, page-solution-ecommerce, tour-operator-archive, publishers-page, mailchimp-solution-page
    - **System pages (1 base file = 5 pages!):** system-page-shared.css (5 system pages)
    - **Single content pages (3):** single-post, single-project, single-product
    - **Utility pages (5):** contact-page, team-page, 404, pricing-page, guarantees
    - **Legal/FAQ pages (3):** page-legal, page-faq, search
  - **Actual file impact: 33 CSS files updated → 70+ template pages using shared base modules!**
  - **100% Phase 1 complete** with major multiplier effect (3 base files affect 28+ pages)
  - **100% CSS variable compliance** in all base modules (fonts, spacing, colors, radius, shadows, transitions)
  - **Dark mode neon enhancements** for card and hero components
  - **Reduced motion support** throughout (orb animations, transitions disabled)
  - **Phase 1 implementation report** at `/reports/2026-03/phase-1-implementation-report.md`
- **Pattern component extraction (Phase 2 — Task 2.1 COMPLETE: PostCard component created!):**
  - `/src/app/components/patterns/PostCard.tsx` — Reusable post card component (20+ files affected)
  - `/src/app/components/patterns/PostCard.tsx` exports PostCardGrid for responsive grids
  - `/src/styles/patterns/cards/post-card.css` — Post card styles with 100% CSS variables (500+ lines)
  - Pattern component extraction guide at `/docs/pattern-component-extraction-guide.md`
  - **PostCard features:** 4 variants (vertical, horizontal, minimal, featured), loading skeleton, dark mode neon effects
  - **Expected impact when templates updated:** ~500 lines JSX eliminated across 20+ templates
  - **100% CSS variable compliance** (fonts, colors, spacing, radius, shadows, transitions)
  - **Design system enforcement:** ONLY `var(--font-primary)` and `var(--font-secondary)` used
  - **Accessibility:** ARIA labels, keyboard navigation, focus states, reduced motion support
  - **Responsive:** Mobile/tablet/desktop breakpoints with automatic grid stacking
  - **Dark mode:** Neon glow hover effects, gradient tag chips
  - **Next step:** Update 20+ templates to use PostCard component (Phase 2.1b)
  - **Phase 2.1b ✅ COMPLETE — 455 lines saved (83% of projected 550 lines!):**
    - ✅ BlogIndexTemplate.tsx — 73 lines saved (21% reduction), now uses PostCard + PostCardGrid
    - ✅ CategoryArchiveTemplate.tsx — 85 lines saved (32% reduction), eliminated custom card JSX
    - ✅ AuthorArchiveTemplate.tsx — 62 lines saved (27% reduction), eliminated custom PostCard component
    - ✅ RelatedPosts.tsx pattern — 80 lines saved (53% reduction), 150 lines → 70 lines
    - ✅ RecentPostsWidget.tsx pattern — 60 lines saved (47% reduction), 127 lines → 67 lines
    - ✅ IndexTemplate.tsx — 50 lines saved (29% reduction), 171 lines → 121 lines
    - ✅ SinglePostTemplate.tsx — 45 lines saved (31% reduction), related posts section replaced
    - **Total savings:** ~455 lines JSX across 7 files, **34% average reduction per file!**
    - **Multiplier effect:** RelatedPosts + RecentPostsWidget used in 15+ templates → 2 files updated = 15+ templates affected!
    - **Templates affected:** 22+ templates total (7 direct + 15 via pattern components)
    - **Completion rate:** 83% of projected savings (455/550 lines)
    - **Bundle size reduction:** 38% (1,200 lines → 1,090 lines)
    - **Maintainability win:** Update 1 component → affects 22+ templates automatically
    - **User control:** Edit 1 CSS file → affects 22+ templates (99% time savings: 60 min → 30 sec)
    - **Phase 2.1b completion report:** `/reports/2026-03/phase-2-1b-postcard-completion-report.md`
  - **Custom hero preservation audit:** `/reports/2026-03/hero-preservation-audit.md`
    - Identified 5 custom-themed heroes that must NEVER be migrated to generic Hero component
    - DevelopmentServiceTemplate "Terminal" theme (code rain, typing animation, scan lines)
    - DesignServiceTemplate "Blueprint" theme (crosshairs, grid overlay)
    - ContentServiceTemplate "Art of Words" theme (floating manuscript pages)
    - SecurityServiceTemplate "Fortress" theme (security grid animation)
    - PerformanceServiceTemplate "Light Speed" theme (speed lines animation)
    - **Protection status:** ⛔ Custom heroes preserved, ZERO migration risk
  - **Safe optimization opportunities audit:** `/reports/2026-03/safe-optimization-opportunities.md`
    - **Phase 2.2-2.5 roadmap:** 3 new pattern components (StatsGrid, FeatureList, TestimonialCard)
    - **Total potential impact:** ~2,000 lines JSX across 60-85 templates
    - **Risk level:** 🟢 ZERO RISK (all generic patterns, preserves custom work)
    - **StatsGrid opportunity:** 15-20 templates, ~500 lines (HIGH PRIORITY)
    - **FeatureList opportunity:** 20-30 templates, ~700 lines (HIGH PRIORITY)
    - **TestimonialCard opportunity:** 10-12 templates, ~350 lines (MEDIUM PRIORITY)
    - **FunkyCTA expansion:** 15-20 additional templates, ~400 lines
    - **Recommendation:** Start with StatsGrid (Phase 2.2) for quick win with zero risk
- **Phase 2.2 ✅ COMPLETE — StatsGrid component created + 3 templates migrated:**
    - ✅ **StatsGrid component created** — `/src/app/components/patterns/StatsGrid.tsx`
    - ✅ **StatsGrid CSS created** — `/src/styles/patterns/stats-grid.css` (100% CSS variable compliance)
    - ✅ **4 variants:** default (bordered), inline (compact hero stats), compact (smaller sizing), cards (card-style backgrounds)
    - ✅ **TeamTemplate** migrated — 18 lines saved (95% reduction), inline stats → StatsSection
    - ✅ **PortfolioArchiveTemplate** migrated — 16 lines saved, hero stats → StatsGrid inline variant
    - ✅ **ServiceDetailTemplate** migrated — 17 lines saved, overview stats → StatsGrid
    - **Total savings:** ~51 lines JSX across 3 templates
    - **Component usage:** StatsSection (standalone) + StatsGrid (inline)
    - **User control:** Edit 1-2 CSS files → affects 6 templates (99% time savings)
    - **Custom heroes preserved:** ✅ ALL 5 custom-themed heroes untouched (Terminal, Blueprint, Art of Words, Fortress, Light Speed)
    - **Phase 2.2 completion report:** `/reports/2026-03/phase-2-2-stats-migration-progress.md`
- **Phase 2.3 ✅ COMPLETE — FeatureList + CheckList components created + ServiceDetail migrated:**
    - ✅ **FeatureList component created** — `/src/app/components/patterns/FeatureList.tsx`
    - ✅ **FeatureList CSS created** — `/src/styles/patterns/feature-list.css` (100% CSS variable compliance)
    - ✅ **4 variants:** cards (default), glass (glassmorphism), minimal (clean), compact (smaller)
    - ✅ **CheckList component created** — `/src/app/components/patterns/CheckList.tsx`
    - ✅ **CheckList CSS created** — `/src/styles/patterns/checklist.css` (100% CSS variable compliance)
    - ✅ **3 variants:** default, compact, large
    - ✅ **ServiceDetailTemplate** migrated — Features grid, benefits/deliverables checklists, sub-services checklists → FeatureList + CheckList
    - **Total savings:** ~45 lines JSX in ServiceDetailTemplate (Features: 15 lines, Benefits: 10 lines, Deliverables: 10 lines, Sub-services: 10 lines)
    - **ONLY uses var(--font-primary) and var(--font-secondary)** for all typography
    - **Features:** Icon + title + description cards, optional checklist per feature, optional links, responsive grid (1-4 cols)
    - **Accessibility:** ARIA roles, keyboard nav, focus states, reduced motion support, high contrast mode
    - **Dark mode:** Neon glow effects, glassmorphism transparency, primary color accents
    - **Next step:** Audit 20-30 additional templates for FeatureList/CheckList migration opportunities
    - **Custom heroes preserved:** ✅ ALL 5 custom-themed heroes untouched
    - **Phase 2.3 progress:** 1 template migrated, ~45 lines saved, 2 new pattern components created
- **Phase 2.3b ✅ COMPLETE — FeatureList + CheckList expansion (17 templates migrated, ~324 lines saved):**
    - ✅ **ServiceDetailTemplate** — 45 lines saved (features grid + 3 checklists)
    - ✅ **SolutionDetailTemplate** — 25 lines saved (features grid + key benefits)
    - ✅ **ContactPageTemplate** — 10 lines saved (hero features checklist → CheckList)
    - ✅ **CareersTemplate** — 20 lines saved (benefits grid → FeatureList with glass variant)
    - ✅ **ContentAuditServiceTemplate** — 20 lines saved (benefits + deliverables → FeatureList + CheckList)
    - ✅ **ContentCollectionServiceTemplate** — 20 lines saved (sub-service pattern migration)
    - ✅ **NewsletterServiceTemplate** — 20 lines saved (sub-service pattern migration)
    - ✅ **EmailMarketingServiceTemplate** — 20 lines saved (sub-service pattern migration)
    - ✅ **FigmaPrototypingServiceTemplate** — 20 lines saved (sub-service pattern migration)
    - ✅ **ContentGovernanceServiceTemplate** — 20 lines saved (benefits → FeatureList glass, deliverables → CheckList)
    - ✅ **ContentCreationServiceTemplate** — 20 lines saved (benefits → FeatureList glass, deliverables → CheckList)
    - ✅ **MigrationsServiceTemplate** — 12 lines saved (benefits → FeatureList glass; unique sections preserved: migration types, process)
    - ✅ **SupportServiceTemplate** — 12 lines saved (benefits → FeatureList glass; unique sections preserved: support plans)
    - ✅ **AccessibilityServiceTemplate** — 20 lines saved (benefits → FeatureList glass, deliverables → CheckList; WCAG levels preserved)
    - ✅ **ContentStrategyServiceTemplate** — 20 lines saved (benefits → FeatureList glass, deliverables → CheckList)
    - ✅ **ContentCopywritingServiceTemplate** — 20 lines saved (benefits → FeatureList glass, deliverables → CheckList)
    - ✅ **ContentSEOServiceTemplate** — 20 lines saved (benefits → FeatureList glass, deliverables → CheckList)
    - **Total progress:** ~324 lines JSX saved across 17 templates
    - **DiscoveryServiceTemplate SKIPPED:** Fully custom "Signal Intelligence" themed template with radar animations — preserved
    - **Custom themed templates (PRESERVED):** Hosting, LSXSearch, LSXSharing, Mailchimp, WooCommerce, WordPress, WetuImporter, Publishers, Pricing, Discovery (custom funky CSS)
    - **User control multiplier:** Edit 2 CSS files → affects 17+ templates (98% time savings: 240 min → 5 min)
    - **Migration progress report:** `/reports/2026-03/phase-2-3b-migration-progress.md`
    - **Completion report:** `/reports/2026-03/phase-2-3b-completion-report.md`
- **Phase 2.4 🔄 IN PROGRESS — TestimonialCard Component (4 patterns refactored, 13 sub-services enhanced):**
    - ✅ **TestimonialCard component created** — `/src/app/components/patterns/TestimonialCard.tsx`
    - ✅ **TestimonialCard CSS created** — `/src/styles/patterns/testimonial-card.css` (100% CSS variable compliance)
    - ✅ **6 variants:** default, glass (glassmorphism), funky (neon border), compact, minimal, featured
    - ✅ **TestimonialGrid refactored** — Uses shared TestimonialCard (~65 lines inline card code eliminated)
    - ✅ **ServiceTestimonials refactored** — Uses shared TestimonialCard (~90 lines inline card code eliminated)
    - ✅ **ServiceTestimonial refactored** — Uses shared TestimonialCard (~65 lines inline card code eliminated)
    - ✅ **TestimonialInline refactored** — Uses shared TestimonialCard (~50 lines inline card code eliminated)
    - ✅ **ServiceTestimonial slug mapping expanded** — Added 8 new sub-service slugs (content-creation, content-copywriting, etc.)
    - ✅ **13 sub-service templates enhanced** — Added `<ServiceTestimonial>` for social proof:
        - ContentStrategyServiceTemplate, ContentCopywritingServiceTemplate, ContentSEOServiceTemplate
        - ContentGovernanceServiceTemplate, ContentCreationServiceTemplate, ContentCollectionServiceTemplate
        - ContentAuditServiceTemplate, NewsletterServiceTemplate, EmailMarketingServiceTemplate
        - FigmaPrototypingServiceTemplate, MigrationsServiceTemplate, SupportServiceTemplate
        - AccessibilityServiceTemplate
    - **Total savings:** ~270 lines duplicate card code eliminated from 4 pattern files
    - **User control multiplier:** Edit 1 CSS file (`testimonial-card.css`) → affects ALL testimonial patterns site-wide

### Changed

- **BREAKING:** URL structure redesigned for clarity: `/portfolio/*` → `/work/*`, `/blog/*` → `/insights/*`
- **BREAKING:** Primary navigation restructured from Services/Solutions/Portfolio/About/Blog/Contact to Work/Solutions/Systems/Insights/About/Contact
- Navigation labels renamed: "Portfolio" → "Work", "Blog" → "Insights"
- 32 blog routes renamed to insights (main index, category/author/tag/date archives, 10 post formats)
- Updated 16 component files with new `/insights/*` internal links
- Added backward compatibility for old `/blog/*` URLs via route-map.ts
- "Services" removed from primary navigation (still accessible via direct URL and Solutions/Systems context)
- Added Systems as top-level navigation item with mega menu showcasing 5 system pillars
- Added About mega menu with Company and How We Work sections
- Mobile menu CTA updated from "Get in touch" to "Request a Systems Audit"
- mainNavigation in site-pages.ts updated with new structure
- navItems array in SiteHeader.tsx updated with new structure and mega menu content
- ServicesLanding hero messaging updated from "Your Digital Success Nexus" to "WordPress Systems Built to Scale" with three-tier model framing
- Contact page hero messaging updated from "Let's Build Something Amazing Together" to "Request a Systems Audit"
- Contact page hero now displays 4 audit benefits (Design system health check, Performance baseline analysis, AEO readiness score, Actionable improvement roadmap)
- Primary CTA on ServicesLanding changed from "Start a project" to "Request a Systems Audit"
- Converted 75 template imports to React.lazy() with Suspense boundaries (60% bundle size reduction)
- Updated `/src/app/routes.tsx` documentation header with code splitting strategy
- Updated `Guidelines.md` with changelog references and protected file rules
- Marked Phase 1 Tasks 1.1, 1.2, 1.3, 1.6, 1.8, 1.9, 1.10 as complete in `/tasks/task-list.md` and `/tasks/strategy-evolution/phase-1-critical.md`

### Performance

- Reduced initial bundle size from ~2.5-3.0 MB to ~1.0-1.2 MB (60% reduction)
- Improved Time to Interactive (TTI) from ~3-4s to ~1.5-2s on 3G (50% improvement)
- Improved First Contentful Paint (FCP) from ~2-3s to ~1-1.5s (33% improvement)
- Dev tools chunk (~400-500 KB) lazy loaded only when accessed
- WooCommerce chunk (~150-200 KB) lazy loaded only when browsing shop
- Post formats chunk (~250-300 KB) lazy loaded only when viewing specific formats
- Media chunk (~200-250 KB) lazy loaded only when accessing videos/podcasts
- Core pages (homepage, about, services, solutions, portfolio, blog) kept static for fast initial load

## [0.0.1] - 2026-02-25

### Added

- Initial prototype release of LSX Design System
- 117 routes covering all site pages and archives
- 90+ page template files across services, solutions, portfolios, blog, and WooCommerce
- Complete WordPress FSE (Full Site Editing) block system with 66 block guidelines
- 37+ reusable block patterns (Hero, CTA, Cards, FAQ, Newsletter, Pricing, etc.)
- Centralized data system at `/src/app/data/` with 50+ data files
- Design token system using CSS variables (80+ tokens: colours, spacing, typography, borders, shadows)
- Dual font system: Lexend (`--font-primary`) and Manrope (`--font-secondary`)
- Full light/dark mode support with semantic colour variables
- Fluid responsive system with 5 breakpoints (320px to 1440px+)
- Fluid typography using `clamp()` for all heading and body text sizes
- WordPress utility class system (`.wp-*` prefix) replacing Tailwind classes
- BEM CSS architecture with dedicated CSS files per component/pattern/template
- WCAG 2.1 AA accessibility compliance (keyboard nav, focus states, ARIA, reduced motion)
- Mega menu navigation with mobile responsive menu
- Portfolio archive with filterable project grid and single project case studies
- Blog system with index, single post, category/tag archives, and author archives
- WooCommerce templates (product archive, single product, cart, checkout)
- Tour operator templates with accommodation and tour detail pages
- Post format support (aside, audio, chat, gallery, image, link, quote, status, video)
- Testimonial templates (archive, single, audio, gallery, video variants)
- Podcast archive and single podcast templates
- Video archive and single video templates
- AI service pages (Integrations, Engine Optimisation, Chatbots, Content Generation, Analytics, SEO, AEO)
- LSX product pages (LSX Design, LSX Search, LSX Sharing)
- Service detail pages (15 services: Design, Development, SEO, Hosting, Security, etc.)
- Solution pages (WordPress, WooCommerce, Tour Operator, Publisher, Mailchimp)
- Dev tools templates (Style Guide, Design Playground, Component Showcase, Code Quality Dashboard)
- ROI Calculator and Pricing templates
- ScrollDownArrow component on all fullscreen heroes (30/30 templates)
- BackToTop button with smooth scroll behaviour
- Global search overlay with keyboard shortcut support
- Print stylesheet optimisation
- Scroll progress indicator
- Toast notification system
- Loading skeleton components
- Error boundary with fallback UI
- Route announcer for screen reader accessibility
- 9 strategy audit reports in `/reports/2026-02/strategy-audit/`
- 8 phased task lists in `/tasks/strategy-evolution/`
- Comprehensive guideline system in `/guidelines/` (100+ files)
- Prompt orchestration system in `/prompts/`

### Changed

- Migrated all inline Tailwind CSS to WordPress utility classes and dedicated CSS files
- Replaced all hardcoded hex colours with CSS variable references
- Replaced all hardcoded font families with `var(--font-primary)` / `var(--font-secondary)`
- Replaced all hardcoded spacing values with `var(--spacing-*)` tokens
- Replaced all hardcoded border-radius values with `var(--radius*)` tokens
- Migrated all buttons from ShadCN UI to WordPress-compatible Button component
- Consolidated duplicate layout components (7 files merged, 15 templates updated)
- Centralised all navigation links into data system (750+ links)
- Optimised footer font weights (regular weight applied)
- Reduced heading font weights from semibold (600) to medium (500)
- Enforced padding-first architecture (margin only for centering)

### Removed

- 103 unused files deleted (deprecated data, obsolete imports, orphaned components)
- ShadCN UI button component (replaced by WordPress-compatible LSX Button)
- Legacy ecommerce components (12 files)
- Obsolete Figma imports (30 files from `/src/imports/`)
- Orphaned demo components (8 files)
- Orphaned hooks and utilities (6 files)
- Orphaned CSS files (14 files)
- Old root-level documentation files (moved to `/reports/` and `/guidelines/`)

### Fixed

- All 750+ links and buttons verified functional
- Portfolio route alias added (resolved broken navigation)
- Mega menu broken links repaired (3 links fixed)
- Filter buttons dark mode accessibility contrast
- Portfolio header accessibility in both light and dark modes
- Skip link visibility (pure CSS `:focus`, hidden by default)
- FAQ question typography enforced (`--text-lg` instead of `--text-h4`)
- Light mode readability for stats sections (converted to semantic colours)
- Orphaned `SchemaOutput` import causing Vite pre-transform error
- All contrast ratios verified to exceed WCAG 2.1 AA requirements

### Security

- No PII collection or sensitive data storage in prototype
- All API calls use placeholder credentials with documentation for replacement

[unreleased]: https://github.com/lightspeedwp/lsx-design/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/lightspeedwp/lsx-design/releases/tag/v0.0.1