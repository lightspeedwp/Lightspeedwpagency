# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

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