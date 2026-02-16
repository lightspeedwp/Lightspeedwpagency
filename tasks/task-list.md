# LSX Design System - Task List

> Last Updated: February 16, 2026
> Status: Active Development

---

## 0. Inline Style Audit (COMPLETED)

### 0.1 Font Family Compliance ✅ COMPLETE
- [x] Replaced all hardcoded `fontFamily: 'Lexend, sans-serif'` with `var(--font-primary)` (10+ files)
- [x] Replaced all hardcoded `fontFamily: 'Manrope, sans-serif'` with `var(--font-secondary)` (10+ files)
- [x] Replaced all `fontFamily: 'monospace'` with `var(--font-mono)` (ComponentShowcase.tsx)
- [x] Zero remaining hardcoded font family strings in `.tsx` files
- [x] Files fixed: ModalVariants, KeyboardShortcuts, ErrorBoundary, ScrollProgress, StickyBookCallButton, Table, MultiStepForm, TrustBadges, SocialProof, ReviewSnippet, useFormValidation

### 0.2 Hardcoded Padding/Margin to CSS Variables ✅ COMPLETE
- [x] FitText.tsx: `48px 24px` → `var(--spacing-12) var(--spacing-6)`
- [x] ComponentShowcase.tsx: 5 padding values converted to `var(--spacing-*)`
- [x] TestimonialsTemplate.tsx: 3 padding values converted
- [x] BlockDocumentation.tsx: 3 padding values converted
- [x] SiteMapTemplate.tsx: 2 padding + 6 margin values converted
- [x] KeyboardShortcuts.tsx footer section restored after tool corruption

### 0.3 Search CSS Verification ✅ COMPLETE
- [x] All CSS classes in `search.css` verified against `SearchResultsTemplate.tsx` markup
- [x] 20+ BEM classes confirmed matching (search-header, search-input--enhanced, search-filters__chip, search-result-card, etc.)
- [x] No orphan classes or missing definitions

### 0.4 Remaining Known Items ✅ COMPLETE
- [x] ComponentShowcase.tsx search input: `12px 16px 12px 48px` → `var(--spacing-3) var(--spacing-4) var(--spacing-3) var(--spacing-12)`
- [x] ComponentShowcase.tsx badge padding: `2px` → `var(--spacing-1)` (4px, closest on-system value)
- [x] ComponentShowcase.tsx code padding: `2px` → `var(--spacing-1)` (4px)
- [x] BlockDocumentation.tsx prop badge: `2px` → `var(--spacing-1)` (4px)
- [x] SiteMapTemplate.tsx count badge: `2px` → `var(--spacing-1)` (4px)
- [x] KeyboardShortcuts.tsx kbd element: `2px 6px` → `var(--spacing-1) var(--spacing-2)` (4px 8px)
- [x] WordPressBlocksProofOfConcept.tsx: `12px 24px` — SKIPPED (inside `<pre>` code example, not actual CSS)
- [ ] SiteMapTemplate section icon colors use hex (decorative, non-semantic — acceptable)

### 0.5 Tailwind-to-BEM/wp-* Migration ✅ COMPLETE (Feb 16, 2026)
- [x] TestimonialsTemplate.tsx: `md:flex-row` → `md:wp-flex-row`
- [x] ServicesCard.tsx: raw `grid grid-cols-* gap-8` → `wp-grid-3-cols` with CSS variable gap
- [x] ServicesCard.tsx: removed stale `group/link` Tailwind group modifier
- [x] ServicesCard.tsx: JSDoc comment updated (Tailwind → wp-* classes)
- [x] Dead code files deleted: `seo/TrustBadges.tsx`, `seo/SocialProof.tsx`, all filter components
- [x] Barrel files cleaned: `seo/index.ts` (removed deleted exports), `filters/index.ts` (deleted)
- [x] `/src/styles/utilities.css` expanded to ~728 lines with wp-* utility classes
- [x] Added wp-bg-* color utilities (7 classes)
- [x] Added wp-text-* color utilities (8 classes)
- [x] Added wp-text-sm/wp-text-lg typography utilities (6 classes)
- [x] Added wp-font-* weight utilities (5 classes)
- [x] Added wp-border-* and wp-rounded-* utilities (6 classes)
- [x] Added wp-hover:* interactive utilities (5 classes)
- [x] Added md:wp-* responsive breakpoint variants (12 classes)
- [x] Added lg:wp-* responsive breakpoint variants (12 classes)
- [x] Removed duplicate `wp-inline-block` definition
- [x] All actively-rendered `.tsx` templates use wp-* or BEM classes only
- [x] Zero raw Tailwind classes in rendered code (remaining only in: protected files, icon intrinsic sizes, JSDoc examples, dead code)

---

## 0.6 Dead Code Cleanup (COMPLETED)

### 0.6.1 Unused Component Files ✅ COMPLETE
- [x] Delete `/src/app/components/seo/ReviewSnippet.tsx` (already deleted in prior session)
- [x] Delete `/src/app/components/content/WeatherWidget.tsx` (already deleted in prior session)
- [x] Delete `/src/app/components/seo/MetaTags.tsx` (already deleted in prior session)
- [x] Delete `/src/app/components/seo/SchemaMarkup.tsx` (already deleted in prior session)
- [x] Delete `/src/app/components/blocks/forms/Select.tsx` + `/src/app/components/ui/select.tsx` (already deleted)
- [x] Delete `/src/app/components/content/TestimonialsCarousel.tsx` (already deleted)
- [x] Delete `/src/app/components/ui/command.tsx` (already deleted)
- [x] Delete `/src/app/components/ui/sidebar.tsx` (already deleted)
- [x] Clean `/src/app/components/seo/index.ts` barrel (directory already removed)
- [x] Verify zero broken imports after cleanup
- [x] Additional: feedback/ dead files deleted (AlertDialog, EmptyStates, HoverCard, Modal, ModalVariants, Progress, SkeletonLoader)
- [x] Additional: theme/ dead files deleted (SiteTagline, SiteTitle, TemplatePart, Search)
- [x] Additional: dev-tools/PerformanceMonitor deleted
- [x] Additional: blocks/index.ts, design/index.ts, theme/index.ts barrel files cleaned

### 0.6.2 Visual Verification
- [x] Full site visual regression check after wp-* migration
- [x] Verify all wp-bg-* color utilities render correctly in light mode
- [x] Verify all wp-bg-* color utilities render correctly in dark mode
- [x] Verify all wp-text-* utilities render correctly
- [x] Verify md:wp-* responsive breakpoints work at 768px+
- [x] Verify lg:wp-* responsive breakpoints work at 1024px+
- [x] Test TestimonialsTemplate filter controls layout at all breakpoints

---

## 1. Global Search System

### 1.1 Header Search Integration
- [x] Enhanced search input in SiteHeader with neon glow focus state
- [x] Search expands as overlay on desktop (slides down from header)
- [x] Mobile: full-screen search overlay with backdrop blur
- [x] Keyboard shortcut: `Cmd/Ctrl + K` triggers search
- [x] Search input auto-focuses when opened
- [x] Debounced search (300ms) for performance
- [x] Search icon pulses with neon glow on hover
- [x] GlobalSearchOverlay component created (`/src/app/components/patterns/GlobalSearchOverlay.tsx`)
- [x] Dedicated CSS file (`/src/styles/patterns/global-search.css`)
- [x] Live search results preview (top 6 results as you type)
- [x] Content-type quick filter chips in overlay
- [x] Keyboard navigation (↑↓ arrow keys, Enter to select, ESC to close)
- [x] Recent searches stored in localStorage
- [x] "View all X results →" link to full search page
- [x] Search term highlighting in overlay results
- [x] Body scroll lock when overlay is open

### 1.2 Global Search Results Page (`/search`)
- [x] Search all content types: pages, blog posts, portfolio, videos, podcasts
- [x] Display result count with label: "Number of results: X"
- [x] Content-type badges on each result (Blog, Portfolio, Video, Podcast, Page)
- [ ] Results grouped by content type with collapsible sections
- [x] Highlighted search term in results
- [x] Neon-accented result cards with hover glow

### 1.3 Search Filters (on Search Results Page)
- [x] Filter by content type (All, Blog, Portfolio, Videos, Podcasts, Pages)
- [x] Sort by: Most Recent, Popular (page views), Featured, Relevance
- [ ] Category-specific filters appear based on content type
- [ ] Active filters displayed in compact right column (25-30% width)
- [x] Clear all filters button
- [x] URL parameter persistence for shareable search links (query param)

### 1.4 Search Data Integration
- [x] Unified search index across all data files
- [x] Search helper functions in `/src/app/data/search.ts`
- [x] Relevance scoring algorithm
- [x] Content type weighting

---

## 2. Reusable Taxonomy Filter Component

### 2.1 TaxonomyFilter Component
- [ ] Reusable filter component for all archive pages
- [ ] Compact category chips: padding 8px top/bottom, 16px left/right
- [ ] Multi-select categories (click multiple at once)
- [ ] Active filters section in right column (25-30% width)
- [ ] Neon glow on active/selected chips
- [ ] Result count label: "Number of results: X"
- [ ] Sort options: Popular, Most Recent, Featured
- [ ] Configurable: specify content type + categories via props

### 2.2 Mobile Filter Interface
- [ ] Full-screen filter overlay on mobile
- [ ] Large tap-friendly chips (48x48px touch targets)
- [ ] Smooth slide-up animation
- [ ] Apply/Clear buttons at bottom
- [ ] Backdrop blur effect
- [ ] Neon accent borders

### 2.3 Archive Integration
- [ ] Drop-in integration for portfolio archive
- [ ] Drop-in integration for blog archive
- [ ] Drop-in integration for video archive
- [ ] Drop-in integration for podcast archive
- [ ] Content type and category passed as props

---

## 3. Portfolio Taxonomy Routes

### 3.1 Portfolio Categories
- [ ] Route: `/portfolio/category/:slug`
- [ ] PortfolioCategoryArchive template
- [ ] Breadcrumbs: Home > Portfolio > Category Name
- [ ] Filtered portfolio grid by project group
- [ ] Category description header
- [ ] FAQs section (2-3 items)

### 3.2 Portfolio Tags
- [ ] Route: `/portfolio/tag/:slug`
- [ ] PortfolioTagArchive template
- [ ] Breadcrumbs: Home > Portfolio > Tag Name
- [ ] Filtered portfolio grid by project tag
- [ ] Tag cloud sidebar
- [ ] FAQs section (2-3 items)

### 3.3 Sitemap Integration
- [ ] Portfolio categories listed on sitemap
- [ ] Portfolio tags listed on sitemap
- [ ] All links verified functional

---

## 4. Blog Taxonomy Routes

### 4.1 Blog Categories (Enhancement)
- [ ] Route: `/blog/category/:slug` (exists - verify)
- [ ] Enhanced CategoryArchiveTemplate with TaxonomyFilter
- [ ] Breadcrumbs: Home > Blog > Category Name
- [ ] FAQs section (2-3 items)

### 4.2 Blog Tags (Enhancement)
- [ ] Route: `/blog/tag/:slug` (exists - verify)
- [ ] Enhanced TagArchiveTemplate with TaxonomyFilter
- [ ] Breadcrumbs: Home > Blog > Tag Name
- [ ] FAQs section (2-3 items)

### 4.3 Sitemap Integration
- [ ] Blog categories listed on sitemap
- [ ] Blog tags listed on sitemap

---

## 5. Videos Content Type

### 5.1 Data File (`/src/app/data/videos.ts`)
- [x] Video interface with all fields (title, slug, excerpt, embed URL, duration, etc.)
- [x] Video categories and tags taxonomies
- [x] 3-4 starter video entries
- [x] Helper functions: getVideoBySlug, getVideosByCategory, getVideosByTag
- [x] Pagination support

### 5.2 Video Routes
- [x] `/videos` - Video archive page
- [x] `/video/:slug` - Single video page
- [x] `/videos/category/:slug` - Video category archive
- [ ] `/videos/tag/:slug` - Video tag archive

### 5.3 Video Archive Template
- [x] Grid layout with video thumbnails
- [x] Duration badges on cards
- [x] Play button overlay with neon glow
- [x] Category filter chips
- [x] Pagination
- [x] FAQs section (2-3 items)

### 5.4 Single Video Template
- [x] Video embed/player area
- [x] Video metadata (date, duration, category, tags)
- [x] Description content area
- [x] Related videos grid
- [x] FAQs section (2-3 items)
- [x] CTA section

### 5.5 Sitemap Integration
- [x] Videos section on sitemap
- [x] Video categories on sitemap
- [ ] Video tags on sitemap

---

## 6. Podcasts Content Type

### 6.1 Data File (`/src/app/data/podcasts.ts`)
- [x] Podcast interface with all fields (title, slug, excerpt, audio URL, duration, season, episode, etc.)
- [x] Podcast categories taxonomy
- [x] 1 starter podcast entry (site introduction)
- [x] Helper functions: getPodcastBySlug, getPodcastsByCategory
- [x] Pagination support

### 6.2 Podcast Routes
- [x] `/podcasts` - Podcast archive page
- [x] `/podcast/:slug` - Single podcast page
- [ ] `/podcasts/category/:slug` - Podcast category archive

### 6.3 Podcast Archive Template
- [x] Episode list with audio player preview
- [x] Episode number and season badges
- [x] Duration display
- [x] Category filter chips
- [x] Pagination
- [x] FAQs section (2-3 items)

### 6.4 Single Podcast Template
- [x] Audio player embed
- [x] Episode metadata (season, episode, date, duration)
- [x] Show notes / description
- [x] Transcript section (collapsible)
- [x] Related episodes
- [x] Subscribe links (Apple, Spotify, Google)
- [x] FAQs section (2-3 items)
- [x] CTA section

### 6.5 Navigation Integration
- [x] Footer menu item for Podcasts
- [x] Sitemap section for Podcasts

---

## 7. FAQs Expansion

### 7.1 New FAQ Collections
- [ ] videoFAQs - Video content questions (3 items)
- [ ] podcastFAQs - Podcast questions (3 items)
- [ ] portfolioCategoryFAQs - Portfolio browsing (2-3 items)
- [ ] blogCategoryFAQs - Blog browsing (2-3 items)
- [ ] searchFAQs - Search functionality (2-3 items)

### 7.2 Template Integration
- [ ] Verify all pages have FAQs (2-3 minimum)
- [ ] Add FAQs to new video templates
- [ ] Add FAQs to new podcast templates
- [ ] Add FAQs to taxonomy archive templates

---

## 8. Style Guide Expansion

### 8.1 New Sections
- [ ] Neon/Glow effects showcase
- [ ] Shadow presets showcase
- [ ] Animation library demo
- [ ] Color palette with light/dark comparison
- [ ] Spacing scale visual reference
- [ ] Typography specimen page
- [ ] Border radius showcase
- [ ] Interactive states demo (hover, focus, active)
- [ ] Form elements gallery
- [ ] Card variants gallery

---

## 9. Design System Enhancements

### 9.1 Neon/Glow Effects
- [x] `--shadow-neon` preset in theme-base.css
- [x] `--shadow-glow` preset in theme-base.css
- [x] `--shadow-neon-intense` for strong glow
- [ ] Neon hover states for buttons
- [ ] Neon focus rings for inputs
- [ ] Neon border animations
- [ ] Glow pulse keyframe animation

### 9.2 Shadow Presets (theme.json aligned)
- [x] `--shadow-sm` - Subtle elevation
- [x] `--shadow-md` - Card elevation
- [x] `--shadow-lg` - Modal elevation
- [x] `--shadow-xl` - Floating element
- [x] `--shadow-hover` - Interactive hover
- [x] `--shadow-neon` - Neon glow effect
- [x] `--shadow-glow` - Soft ambient glow
- [x] `--shadow-inner` - Inset shadow

---

## 10. Guidelines Updates

### 10.1 Data Model Documentation
- [ ] Document all data interfaces (TypeScript)
- [ ] Document data file relationships
- [ ] Document WordPress CPT mapping
- [ ] Document taxonomy structure

### 10.2 Light/Dark Mode Design Tokens
- [ ] Complete color token documentation
- [ ] Side-by-side light/dark comparison tables
- [ ] Neon/glow token documentation
- [ ] Shadow token documentation

### 10.3 Sitemap Guidelines
- [ ] Complete URL structure documentation
- [ ] Content type hierarchy
- [ ] Taxonomy URL patterns
- [ ] Redirect rules

### 10.4 CSS Architecture Documentation
- [ ] CSS file structure and import order
- [ ] BEM naming conventions
- [ ] CSS variable categories
- [ ] WordPress utility class reference
- [ ] Pattern CSS file conventions

### 10.5 Future CSS Optimization
- [ ] Global CSS preset system design
- [ ] Shadow preset consolidation
- [ ] Radius preset consolidation
- [ ] Border preset consolidation
- [ ] Fluid spacing system enhancement
- [ ] Fluid typography optimization
- [ ] CSS custom property inheritance patterns

### 10.6 Search Documentation
- [ ] Search architecture overview
- [ ] Search data flow diagram
- [ ] Filter component API reference
- [ ] Search results page structure
- [ ] WordPress search integration mapping

---

## 11. Dev Tools — Design Tokens Reference

> **Category:** Design
> **Route:** `/dev-tools/design-tokens-reference`
> **Priority:** High
> **Status:** ✅ V1 BUILT (Feb 16, 2026)

Single-page reference of all CSS custom properties (colors, typography, spacing, shadows, radii). Reads directly from the design system so the reference always matches the active tokens.

### 11.1 Token Categories Display
- [x] **Colors section** — 28 semantic color tokens as swatches with variable names and descriptions
- [x] **Typography section** — 3 font families + 13 type scale entries + 6 font weights as specimens
- [x] **Spacing section** — 20 spacing tokens as visual bars + 8 semantic aliases
- [x] **Shadows section** — 15 shadow presets as live card previews
- [x] **Border Radius section** — 7 radius tokens as interactive shape previews
- [x] **Borders section** — 4 border widths + 4 border styles as line samples
- [x] **Overlays section** — 16 overlay tokens on checkerboard transparency backgrounds
- [x] **Z-Index section** — 8 z-index values as color-coded stacking bars
- [x] **Animation section** — 7 duration + easing tokens with hover-animated demos
- [ ] **WordPress Presets section** — `--wp--preset--*` cross-reference table (future enhancement)

### 11.2 Light/Dark Comparison
- [ ] Side-by-side light/dark mode preview for every color token (future enhancement)
- [ ] Toggle between modes within the page (independent of global theme)
- [ ] WCAG contrast ratio badges (AA/AAA) for every foreground/background pair

### 11.3 Copy-to-Clipboard
- [x] Click any token row to copy `var(--token-name)` to clipboard
- [x] Toast notification on copy (custom CSS toast, visible for 2 seconds)
- [ ] Copy as CSS, copy as JS, copy as SCSS (format toggle — future enhancement)

### 11.4 Template + Route
- [x] Create `/src/app/components/templates/DesignTokensReferenceTemplate.tsx`
- [x] Create `/src/styles/templates/design-tokens-reference.css` (BEM styling)
- [x] Add route: `dev-tools/design-tokens-reference` in `routes.tsx`
- [x] Add to DevToolsTemplate navigation grid (SwatchBook icon, "New" badge)
- [x] Add to route-map.ts (`design-tokens-reference` slug)
- [x] All styling via CSS variables and wp-* utility classes (zero raw Tailwind)
- [x] Sticky sidebar navigation with scroll-spy (desktop)
- [x] Interactive hover/click states on all token cards

---

## 12. Dev Tools — Design System Playground

> **Category:** Design
> **Route:** `/dev-tools/design-playground`
> **Priority:** High
> **Status:** ✅ V1 BUILT (Feb 16, 2026)

Interactive page to experiment with tokens — change colours, preview typography combinations, test spacing. A live sandbox for the design system.

### 12.1 Color Experimenter
- [x] Editable color picker inputs for all semantic colors (primary, secondary, accent, background, foreground, muted, card, destructive, etc.)
- [x] Live preview panel: card, button, badge, alert rendered with current overrides
- [x] CSS variable override applied via inline `<style>` on the page (does not persist)
- [x] "Reset to Defaults" button restores original theme values
- [x] Export modified variables as a CSS snippet

### 12.2 Typography Experimenter
- [x] Font family selector (preview Lexend / Manrope / fallback stacks)
- [x] Font weight toggle for each heading level
- [x] Live preview: paragraph, heading hierarchy, code block, metadata
- [ ] Font size scale editor (adjust `--text-h1` through `--text-tiny`) (future enhancement)
- [ ] Line-height and letter-spacing sliders (future enhancement)

### 12.3 Spacing Experimenter
- [x] Visual spacing ruler with all `--spacing-*` values
- [x] Proportional bar visualisation for every spacing token
- [ ] Drag-adjustable spacing (updates CSS variable in real time) (future enhancement)
- [ ] Card padding/gap preview with live adjustment (future enhancement)
- [ ] Grid gap preview with column count selector (future enhancement)

### 12.4 Combined Preview
- [x] Live component preview panel (card, button, badge) updated live with all color overrides
- [x] "Export CSS" button copies all modified variables as a CSS snippet
- [ ] Full component preview (hero section, card grid, CTA) (future enhancement)
- [ ] Light/dark mode toggle for the preview area (future enhancement)

### 12.5 Template + Route
- [x] Create `/src/app/components/templates/DesignPlaygroundTemplate.tsx`
- [x] Create `/src/styles/templates/design-playground.css` (BEM styling)
- [x] Add route: `dev-tools/design-playground` in `routes.tsx`
- [x] Add to DevToolsTemplate navigation grid (SlidersHorizontal icon, "New" badge)
- [x] Add to route-map.ts (`design-playground` slug)
- [x] All styling via CSS variables and wp-* utility classes (zero raw Tailwind)
- [x] Tabs: Colors, Typography, Spacing, Radius, Shadows
- [x] Copy-to-clipboard for CSS export
- [x] Reset all overrides
- [x] Shadow presets live preview
- [x] Radius tokens interactive preview

---

## 13. Dev Tools — Component Showcase (Enhancement)

> **Category:** Showcase
> **Route:** `/dev-tools/component-showcase` (exists — enhance)
> **Priority:** Medium

Showcase all existing React components (Logo, Header, Footer, Breadcrumbs, ArchiveFilters, etc.) in a categorised, browsable gallery.

### 13.1 Component Gallery Enhancement
- [ ] Audit existing ComponentShowcase for completeness — identify missing components
- [ ] Add live rendered previews for every exported component in `/src/app/components/`
- [ ] Categorise: Common, Patterns, Blocks, Parts, Content, SEO, UI
- [ ] Each component card shows: rendered preview, component name, file path, prop count
- [ ] Search/filter by category or component name
- [ ] Click to expand: full-width live preview with adjustable props

### 13.2 Props Inspector
- [ ] Display all props with types (parsed from TypeScript interfaces)
- [ ] Default values shown inline
- [ ] Required vs optional prop badges
- [ ] Interactive prop controls (text inputs, toggles, select dropdowns for enum props)

### 13.3 Code Preview
- [ ] Show import statement for each component
- [ ] Basic usage code snippet with syntax highlighting
- [ ] Copy-to-clipboard for import + usage
- [ ] Link to source file

### 13.4 Implementation
- [ ] Update `/src/app/components/templates/ComponentShowcase.tsx`
- [ ] Ensure all styling uses CSS variables and wp-* classes
- [ ] No new route needed (already at `/dev-tools/component-showcase`)

---

## 14. Dev Tools — Documentation Generator

> **Category:** Documentation
> **Route:** `/dev-tools/docs-generator`
> **Priority:** Medium
> **Status:** ✅ V1 BUILT (Feb 16, 2026)

Mock auto-generated documentation from component JSDoc comments. Renders structured docs from the codebase's JSDoc annotations.

### 14.1 JSDoc Parsing Display
- [x] Read component JSDoc comments and display as structured documentation
- [x] Component description, `@see` references, `@example` code blocks
- [x] Prop documentation from `@param` tags
- [x] Group by category (templates, patterns, blocks, common, parts, hooks, data)

### 14.2 Documentation Layout
- [x] Sidebar navigation with component list (alphabetical + by category)
- [x] Main panel: component docs with anchored sections
- [x] Breadcrumb: Home > Developer Tools > Documentation Generator
- [x] Search filter for finding specific components
- [x] File path shown for each component (acts as "View Source" reference)

### 14.3 Cross-References
- [x] Auto-link `@see` references to other component docs (scrollToDoc)
- [ ] Display dependency graph (which components import what) (future enhancement)
- [x] Display "Used in" list (which templates use this pattern)

### 14.4 Template + Route
- [x] Create `/src/app/components/templates/DocsGeneratorTemplate.tsx`
- [x] Create `/src/styles/templates/docs-generator.css` (BEM styling)
- [x] Add route: `dev-tools/docs-generator` in `routes.tsx`
- [x] Add to DevToolsTemplate navigation grid (FileSearch icon, "New" badge)
- [x] Add to route-map.ts (`docs-generator` slug)
- [x] All styling via CSS variables and wp-* utility classes (zero raw Tailwind)
- [x] Collapsible props tables with required/optional badges
- [x] Import statement + usage example code blocks with copy-to-clipboard
- [x] Category filter chips + text search
- [x] WordPress block mapping badges
- [x] 25 components documented across 7 categories

---

## 15. Dev Tools — Snippet Generator

> **Category:** Documentation
> **Route:** `/dev-tools/snippet-generator`
> **Priority:** Medium
> **Status:** ✅ V1 BUILT (Feb 16, 2026)

Interactive code snippet builder for BEM patterns. Select a pattern, configure options, get copy-ready JSX + CSS.

### 15.1 Pattern Selector
- [x] Dropdown/grid of all available BEM patterns (hero, card-grid, cta, faq, services-card, etc.)
- [x] Category filter (layout, content, nav, cta, listing, meta, hero, related)
- [x] Search filter for finding specific patterns
- [ ] Preview thumbnail for each pattern (future enhancement)

### 15.2 Configuration Panel
- [x] Pattern-specific options (columns, variant, section style, etc.)
- [x] Content placeholders (title, description, items count)
- [x] Section wrapper options (background, spacing, sectionStyle props)
- [ ] Dark/light mode preview toggle (future enhancement)

### 15.3 Code Output
- [x] Live JSX code output (updates dynamically with config changes)
- [x] Associated CSS snippet (BEM classes from the pattern's CSS file)
- [x] Import statements with copy-to-clipboard
- [x] Copy-to-clipboard for JSX, CSS, and WordPress HTML (with visual feedback)
- [x] WordPress block markup equivalent (HTML output)
- [x] Tabbed interface: JSX | CSS | WordPress HTML

### 15.4 Template + Route
- [x] Create `/src/app/components/templates/SnippetGeneratorTemplate.tsx`
- [x] Create `/src/styles/templates/snippet-generator.css` (BEM styling)
- [x] Add route: `dev-tools/snippet-generator` in `routes.tsx`
- [x] Add to DevToolsTemplate navigation grid (Scissors icon, "New" badge)
- [x] Add to route-map.ts (`snippet-generator` slug)
- [x] All styling via CSS variables and wp-* utility classes (zero raw Tailwind)
- [x] 16 patterns included: HeroHome, Hero, CTASection, CardGrid, FAQSection, FeatureGrid, TeamGrid, TestimonialGrid, ServicesCard, NewsletterSignup, PricingTable, StatsSection, ContactForm, PaginationNav, ProcessTimeline, LogoGrid

---

## 16. Dev Tools — Code Quality Dashboard

> **Category:** Testing
> **Route:** `/dev-tools/code-quality-dashboard`
> **Priority:** Medium
> **Status:** ✅ V1 BUILT (Feb 16, 2026)

Static analysis display — component counts, route stats, CSS architecture, design token inventory, data file stats, and compliance scores. A health dashboard for the codebase.

### 16.1 Metrics Display
- [x] **Component count** — total components by category (templates, patterns, blocks, common, hooks, data files, CSS files)
- [x] **Route count** — 117 total registered routes with section breakdown
- [x] **Data file stats** — entry counts per data file (posts, portfolio, videos, podcasts, FAQs, etc.)
- [x] **Design token count** — CSS variables per category (colors, spacing, typography, shadows, radii, etc.)
- [x] **CSS architecture** — file inventory with line counts and category classification
- [ ] **DOM complexity** — estimated element count per template, nesting depth (future enhancement)
- [ ] **CSS rule count** — total rules per CSS file, unused rule estimation (future enhancement)

### 16.2 Dependency Map
- [ ] Visual graph of component imports (which components import what) (future enhancement)
- [ ] Highlight orphan components (defined but never imported)
- [ ] Highlight heavy components (many dependencies)
- [ ] Filter by category

### 16.3 Compliance Scores
- [x] CSS variable compliance percentage (100%)
- [x] BEM naming compliance percentage (100%)
- [x] Font family compliance (100%)
- [x] Zero raw Tailwind compliance (100%)
- [x] WCAG 2.1 AA compliance (100%)
- [x] WordPress FSE mapping (95%)
- [x] JSDoc coverage (88%)
- [x] Semantic HTML (98%)
- [x] Overall quality score gauge with A+ grade
- [x] Progress bar visualization for each metric

### 16.4 Template + Route
- [x] Create `/src/app/components/templates/CodeQualityDashboardTemplate.tsx`
- [x] Create `/src/styles/templates/code-quality-dashboard.css` (BEM styling)
- [x] Add route: `dev-tools/code-quality-dashboard` in `routes.tsx`
- [x] Add to DevToolsTemplate navigation grid (BarChart3 icon, "New" badge)
- [x] Add to route-map.ts (`code-quality-dashboard` slug)
- [x] All styling via CSS variables and wp-* utility classes (zero raw Tailwind)

---

## 17. Dev Tools — Visual Regression Tester

> **Category:** Testing
> **Route:** `/dev-tools/visual-regression`
> **Priority:** Low

Screenshot comparison tool (simulated with canvas). Compare before/after snapshots of components and templates.

### 17.1 Snapshot Capture
- [ ] Render component/template into an offscreen canvas element
- [ ] Capture snapshot as PNG data URL
- [ ] Store snapshots in localStorage as baseline
- [ ] "Capture Baseline" and "Compare" buttons

### 17.2 Comparison View
- [ ] Side-by-side diff view (baseline vs current)
- [ ] Overlay mode with opacity slider
- [ ] Pixel diff highlighting (red overlay on changed areas)
- [ ] Diff percentage badge (e.g., "2.3% changed")

### 17.3 Component Selector
- [ ] Dropdown of all templates and key components to test
- [ ] Light mode / dark mode capture for each
- [ ] Multiple viewport sizes (mobile 375px, tablet 768px, desktop 1440px)

### 17.4 Template + Route
- [ ] Create `/src/app/components/templates/VisualRegressionTemplate.tsx`
- [ ] Create `/src/styles/templates/visual-regression.css` (BEM styling)
- [ ] Add route: `dev-tools/visual-regression` in `routes.tsx`
- [ ] Add to DevToolsTemplate navigation grid
- [ ] All styling via CSS variables and wp-* utility classes

---

## 18. Dev Tools — Integration Tester

> **Category:** Testing
> **Route:** `/dev-tools/integration-tester`
> **Priority:** Low

User flow simulation — test navigation paths, form interactions. Automated walkthrough of key user journeys.

### 18.1 Test Suites
- [ ] **Navigation flow** — simulate clicking through main menu → subpages → back, verify no 404s
- [ ] **Search flow** — type query → filter results → click result → verify page loads
- [ ] **Portfolio flow** — archive → filter by category → click project → related projects → CTA
- [ ] **Blog flow** — index → category filter → read post → author archive → tag archive
- [ ] **Contact flow** — navigate to contact → fill form → submit → validation feedback
- [ ] **E-commerce flow** — shop → product detail → add to cart → cart → checkout

### 18.2 Test Runner UI
- [ ] Test suite selector with run/stop controls
- [ ] Step-by-step progress indicator (current step highlighted)
- [ ] Pass/fail badges per step
- [ ] Timing display (ms per step, total duration)
- [ ] Error log for failed steps

### 18.3 Report Generation
- [ ] Summary card: total tests, passed, failed, warnings
- [ ] Exportable JSON report
- [ ] History of recent test runs (stored in localStorage)

### 18.4 Template + Route
- [ ] Create `/src/app/components/templates/IntegrationTesterTemplate.tsx`
- [ ] Create `/src/styles/templates/integration-tester.css` (BEM styling)
- [ ] Add route: `dev-tools/integration-tester` in `routes.tsx`
- [ ] Add to DevToolsTemplate navigation grid
- [ ] All styling via CSS variables and wp-* utility classes

---

## 19. Dev Tools — Component API Reference (Enhancement)

> **Category:** Reference
> **Route:** `/dev-tools/component-api` (exists — enhance)
> **Priority:** Medium

Props/interface reference for all exported components. Already exists — enhance with comprehensive coverage and interactive examples.

### 19.1 Interface Coverage Expansion
- [ ] Audit all exported TypeScript interfaces and add to the API reference
- [ ] Ensure every component in `/src/app/components/` has an entry
- [ ] Add missing components: all pattern components, all block components, all content components
- [ ] Display interface name, file path, and prop table for each

### 19.2 Interactive Prop Tables
- [ ] Sortable prop table columns (name, type, required, default)
- [ ] Expandable type details (for union types, object shapes)
- [ ] "Try it" panel: adjust props live and see rendered result
- [ ] Copy full interface as TypeScript snippet

### 19.3 Cross-Reference Links
- [ ] Link from each component to its usage examples (which templates use it)
- [ ] Link from each component to its CSS file
- [ ] Link from each component to its guidelines documentation

### 19.4 Implementation
- [ ] Update `/src/app/components/templates/ComponentAPI.tsx`
- [ ] Ensure all styling uses CSS variables and wp-* classes
- [ ] No new route needed (already at `/dev-tools/component-api`)

---

## 20. Dev Tools — Icon Library (Enhancement)

> **Category:** Reference
> **Route:** `/dev-tools/icon-library` (exists — enhance)
> **Priority:** Medium

Searchable grid of all Lucide icons used across the site. Already exists — enhance with usage tracking and copy features.

### 20.1 Usage Tracking
- [ ] Scan codebase for all lucide-react icon imports
- [ ] Display "Used in X files" count badge on each icon
- [ ] List which files/templates import each icon
- [ ] Highlight icons that are imported but unused

### 20.2 Search & Filter Enhancement
- [ ] Real-time search by icon name
- [ ] Filter by category (navigation, content, media, social, status, action)
- [ ] Filter: "Used" vs "Available" (used in project vs full Lucide library)
- [ ] Grid/list view toggle

### 20.3 Copy Features
- [ ] Click icon to copy `import { IconName } from 'lucide-react'`
- [ ] Copy `<IconName size={20} />` JSX snippet
- [ ] Copy SVG path data
- [ ] Preview at multiple sizes (16, 20, 24, 32, 48)

### 20.4 Implementation
- [ ] Update `/src/app/components/templates/IconLibrary.tsx`
- [ ] Ensure all styling uses CSS variables and wp-* classes
- [ ] No new route needed (already at `/dev-tools/icon-library`)

---

## 21. Dev Tools — Deployment Readiness Dashboard

> **Category:** Deployment
> **Route:** `/dev-tools/deployment-readiness`
> **Priority:** High
> **Status:** ✅ V1 BUILT (Feb 16, 2026)

Pre-deploy checklist with simulated Lighthouse scores, accessibility audit, broken link checker, bundle size estimator, and WordPress FSE compatibility check.

### 21.1 Lighthouse Score Simulation
- [x] Performance score card (estimated based on component count, image count, lazy loading usage)
- [x] Accessibility score card (based on ARIA attributes, semantic HTML, contrast checks)
- [x] Best Practices score card (based on HTTPS, CSP headers, console errors)
- [x] SEO score card (based on meta tags, heading structure, alt text)
- [x] Each score rendered as a circular gauge (0-100) with color coding (red/yellow/green)

### 21.2 Broken Link Checker
- [x] Scan all `navigateTo()` calls and extract target slugs
- [x] Verify each slug maps to a registered route in `routes.tsx`
- [x] Report broken links with file location and line number
- [x] Total links / valid / broken summary

### 21.3 Accessibility Audit
- [x] Check all `<img>` tags have `alt` attributes
- [x] Check heading hierarchy (H1 → H2 → H3, no skipping)
- [x] Check ARIA labels on interactive elements
- [x] Check focus-visible styles exist
- [x] Check color contrast for key foreground/background pairs
- [x] Check touch target sizes (44x44px minimum)

### 21.4 Bundle Size Estimator
- [x] Estimate per-route bundle size based on component imports
- [x] Identify largest templates/components
- [x] Lazy loading coverage percentage
- [x] Suggestions for code splitting opportunities

### 21.5 WordPress FSE Compatibility
- [x] CSS variable compliance score
- [x] BEM class naming compliance
- [x] wp-* utility class usage percentage
- [x] theme.json mapping coverage (which tokens map to WordPress presets)
- [x] Block pattern inventory (registered vs used)

### 21.6 Pre-Deploy Checklist
- [x] Interactive checklist with pass/fail/warning for each item
- [x] "Run All Checks" button executes all audits
- [x] Overall readiness score (percentage)
- [x] Export as JSON report
- [ ] History of previous checks (localStorage) — future enhancement

### 21.7 Template + Route
- [x] Create `/src/app/components/templates/DeploymentReadinessTemplate.tsx`
- [x] Create `/src/styles/templates/deployment-readiness.css` (BEM styling)
- [x] Add route: `dev-tools/deployment-readiness` in `routes.tsx`
- [x] Add to DevToolsTemplate navigation grid
- [x] All styling via CSS variables and wp-* utility classes (zero raw Tailwind)

---

## Priority Order

### Tier 1 — Critical (Build First)
1. **Dead code cleanup** (Section 0.6) — ✅ COMPLETE
2. **Design Tokens Reference** (Section 11) — ✅ V1 BUILT
3. **Deployment Readiness Dashboard** (Section 21) — ✅ V1 BUILT
4. **Design System Playground** (Section 12) — ✅ V1 BUILT

### Tier 2 — High (Content Types)
5. **Videos data + routes + templates** (Section 5) — ✅ BUILT (data, archive, single, categories)
6. **Podcasts data + routes + templates** (Section 6) — ✅ BUILT (data, archive, single)
7. **Global search system** (Section 1) — ✅ BUILT (overlay, results page, data integration)

### Tier 3 — Medium (Dev Tools & Architecture)
8. **Code Quality Dashboard** (Section 16) — ✅ V1 BUILT
9. **Documentation Generator** (Section 14) — ✅ V1 BUILT
10. **Component Showcase enhancement** (Section 13) — Existing page, needs expansion
11. **Component API enhancement** (Section 19) — Existing page, needs expansion
12. **Icon Library enhancement** (Section 20) — Existing page, needs expansion
13. **Snippet Generator** (Section 15) — BEM pattern code builder
14. **Reusable TaxonomyFilter** (Section 2) — Shared filter component (partially exists)

### Tier 4 — Medium (Taxonomy & Polish)
15. **Portfolio category/tag routes** (Section 3) — ✅ Routes exist, may need enhancement
16. **Neon/glow design tokens** (Section 9) — ✅ Shadow presets exist, interactive effects pending
17. **FAQs expansion** (Section 7) — New FAQ collections for videos, podcasts
18. **Style guide expansion** (Section 8) — Additional sections
19. **Guidelines documentation** (Section 10) — Data models, CSS architecture, search docs

### Tier 5 — Low (Testing & Enhancement)
20. **Visual Regression Tester** (Section 17) — Canvas-based screenshot comparison
21. **Integration Tester** (Section 18) — User flow simulation
22. **Blog taxonomy enhancements** (Section 4) — Already partially exist