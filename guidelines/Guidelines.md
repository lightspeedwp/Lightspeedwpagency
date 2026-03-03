# LSX Design — Figma Make Prototype Guidelines

These guidelines define how to build the **LSX Design prototype** in **Figma Make** so it can be implemented as a **WordPress block theme** with a clean, scalable architecture.

This prototype validates:
- content structure and layout patterns
- editor workflow (patterns/templates/parts)
- token discipline (`theme.json` presets)
- accessibility and responsive behaviour

It does **not** validate:
- brand exploration, decorative styling, or bespoke page design
- experimental layout variants that cannot map to WordPress blocks

**Business Context:** LSX Design is a WordPress and WooCommerce web design agency specializing in modern block themes, design systems, and accessible high-performance websites.

---

## CRITICAL: Project Organisation Rules (Non-Negotiable)

**These rules apply to EVERY task, prompt, report, and file created in this project. Read them FIRST.**

### Folder Structure (Mandatory)

| Content Type | Location | Notes |
|---|---|---|
| **Prompts** | `/prompts/` | One `.md` file per prompt. Multi-step prompts use a sub-folder with `00-ORCHESTRATOR.md` master file. |
| **Reports** | `/reports/` | Date-prefixed or sub-folder for related sets (e.g. `/reports/2026-02/strategy-audit/`). |
| **Tasks** | `/tasks/` | One task list per orchestrator prompt. General open tasks go in `/tasks/task-list.md`. |
| **Guidelines** | `/guidelines/` | All guideline files. Sub-folders by category. The canonical reference is `/guidelines/Guidelines.md`. |
| **Documentation** | `/docs/` | General project docs (quick references, attributions, org guides). NOT guidelines or reports. |
| **Scripts** | `/scripts/` | All shell scripts (`.sh`) and utility scripts (`.ts`, `.py`). Never in root. |

### The General Task List (`/tasks/task-list.md`)

- **This file must always exist and must NEVER be deleted.**
- It is the single all-purpose open task tracker for the project.
- When any work generates follow-up actions, add them to this file.
- Completed tasks should be checked off (`[x]`) but kept for reference.
- Periodically archive completed tasks to a dated file in `/tasks/archive/`.

### Protected Files (Must Never Be Deleted)

The following files are **protected** and must **never be deleted, moved, or renamed**:

| File | Location | Purpose |
|---|---|---|
| **`CHANGELOG.md`** | `/CHANGELOG.md` (root) | Project changelog following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format |
| **`README.md`** | `/README.md` (root) | Project README |
| **`task-list.md`** | `/tasks/task-list.md` | General open task tracker |

**CRITICAL RULE: NEVER DELETE COMPLETED SERVICE PAGES**

- **Service template files (e.g., `SEOServiceTemplate.tsx`, `AnalyticsServiceTemplate.tsx`) must NEVER be deleted, even during consolidation.**
- Service pages can be **redirected** or **reorganized** as sub-services, but the actual template files and their CSS must remain.
- Service "consolidation" means **organizing services into parent/child relationships**, NOT deleting template files.
- If a service is being consolidated, it becomes a **sub-service** under a parent service, with its own dedicated route and template.
- Example: SEO, Analytics, AI Engine, and Answer Engine are sub-services under "AI Search & Visibility" — each has its own template file and route.

**Service Organization Pattern:**
```
Parent Service: /services/ai-search-visibility (AISearchServiceTemplate.tsx)
├── Sub-Service: /services/seo (SEOServiceTemplate.tsx)
├── Sub-Service: /services/analytics (AnalyticsServiceTemplate.tsx)
├── Sub-Service: /services/ai-engine-optimisation (AIEngineServiceTemplate.tsx)
└── Sub-Service: /services/answer-engine-optimisation (AnswerEngineServiceTemplate.tsx)
```

**ALL service templates are valuable work products and must be preserved.**

- `CHANGELOG.md` must follow the **Keep a Changelog v1.1.0** format and **Semantic Versioning 2.0.0**
- See **[changelog/changelog-guidelines.md](./changelog/changelog-guidelines.md)** for full changelog standards, writing guidance, and workflow integration
- When releasing a new version, move `[Unreleased]` entries into a dated version section
- Update `version` in `package.json` to match the changelog version

### Prompt Workflow (Default Sequence)

When asked to "write a prompt" or "create an audit", always follow this sequence:

1. **Create the prompt** -> Save to `/prompts/` (or sub-folder for multi-step prompts)
2. **Run the audit/task** described in the prompt against the codebase
3. **Save findings** -> Write report to `/reports/` (sub-folder if multiple related reports)
4. **Create a task list** -> Save actionable items to `/tasks/` (or update `/tasks/task-list.md`)

This sequence is assumed unless the user explicitly says otherwise.

### Root Directory Rules

- The project root (`/`) must contain ONLY configuration files (`package.json`, `tsconfig.json`, `vite.config.ts`, `vercel.json`, `postcss.config.mjs`, etc.) and two permitted `.md` files: `README.md` and `CHANGELOG.md`.
- **NO reports, tasks, prompts, guideline files, or documentation in the root.** Ever.
- **NO `.md` files in the root** except `README.md` and `CHANGELOG.md`. All other documentation goes in `/docs/`, `/guidelines/`, `/reports/`, or `/tasks/`.
- **NO `.sh` script files in the root.** All shell scripts MUST be created in `/scripts/`. No exceptions.
- **General documentation** (quick references, attributions, project org guides, etc.) belongs in `/docs/`.

### Cross-Referencing Guidelines

- When working on ANY task, **always read and reference the relevant guideline file** before writing code.
- Reference guidelines by relative path: `See [design-tokens/typography.md](./design-tokens/typography.md)`.
- If no guideline exists for a topic, create one in the appropriate `/guidelines/` sub-folder.

### Cleanup and Hygiene Rules

- **Unused files** (`.tsx`, `.ts`, `.css`) must be identified and removed during audits.
- **Orphaned imports** (imports referencing deleted files) must be cleaned up immediately.
- **Old reports** (older than 7 days and superseded) should be archived or deleted.
- **Completed tasks** should be checked off in task lists and periodically archived.
- **Stale references** in guidelines (referencing deleted files/features) must be updated.

### Design System Compliance (All Generated UI)

- **ALL generated UI MUST use CSS variables** from `/src/styles/` -- colours, spacing, borders, radius, and typography.
- **For typography, ONLY use font faces defined in the CSS** (`var(--font-primary)` for Lexend, `var(--font-secondary)` for Manrope). Never hardcode font family names like `'Lexend, sans-serif'` -- always use `var(--font-primary)`.
- **Users must be able to change the entire site's styling by updating CSS files alone.** No hardcoded values in components.
- **Colours:** Always use semantic CSS variables (`var(--primary)`, `var(--foreground)`, `var(--background)`, `var(--muted)`, etc.). Never hardcode hex values.
- **Spacing:** Always use `var(--spacing-*)` tokens. Never hardcode `px` or `rem` values for padding, margin, or gap.
- **Border radius:** Always use `var(--radius)`, `var(--radius-lg)`, etc. Never hardcode pixel values.
- **Shadows:** Always use `var(--shadow-*)` tokens.
- **Font sizes:** Always use `var(--text-h1)` through `var(--text-h6)` for headings, and `var(--text-base)`, `var(--text-sm)`, `var(--text-lg)` etc. for body text. Never hardcode font sizes.
- **Font weights:** Always use `var(--font-weight-regular)`, `var(--font-weight-medium)`, `var(--font-weight-semibold)`, etc.
- Reference: `/src/styles/theme-base.css` (spacing, borders, radius, typography, shadows), `/src/styles/theme-light.css` and `/src/styles/theme-dark.css` (semantic colours).

### The `/docs/` Folder

- **Purpose:** General project documentation that is NOT a guideline, report, task, or prompt.
- **Examples:** Quick reference cards, attributions, project organisation guides, onboarding docs.
- **Location:** `/docs/` (with sub-folders as needed).
- **Rule:** If a document doesn't fit in `/guidelines/`, `/reports/`, `/tasks/`, or `/prompts/`, it goes in `/docs/`.

---

**Project Status (March 2, 2026):**
- Full System Audit 100% COMPLETE -- Orchestrator v4.0 launched, reports generated, legacy hex colors and large files identified for remediation
- Phase 2 IA Restructure 100% COMPLETE -- All 2.x tasks finished, insights categories added, internal links fixed
- Phase 2 Pattern Extraction 100% COMPLETE -- ~1,580 lines JSX saved across 80+ templates (PostCard, StatsGrid, FeatureList, CheckList, TestimonialCard, FunkyCTA)
- Phase 3.1 Archive Base Styles 100% COMPLETE -- ~582 lines CSS saved, 92% reduction in archive.css, 17 archive templates optimized
- Phase 3.2 Service Base Creation 100% COMPLETE -- 5 modular base files created, ~13,500 lines duplication eliminated across 25+ service templates
- Phase 3.3 Service Template Optimization 100% COMPLETE -- 21/21 templates optimized, ~8,547 lines CSS saved (48-67% average reduction)
- Design System Compliance 100% COMPLETE -- Zero hardcoded values found across 500+ files, 100% CSS variable compliance
- Breakpoint System Expansion 100% COMPLETE -- 12-breakpoint responsive system implemented with WordPress/WCAG alignment
- **Total Optimization Savings:** ~24,209 lines eliminated/saved across all phases

**Project Status (February 28, 2026):**
- Phase 1 Remediation 100% COMPLETE -- 10/10 tasks (Systems Hub, 5 child pages, navigation restructure, footer restructure, CTA standardisation, route code-splitting, DefinitionBlock, three-tier model, services hero rewrite, contact hero rewrite)
- Phase 2 IA Restructure IN PROGRESS -- Tasks 2.1-2.4 COMPLETE (/portfolio -> /work, /blog -> /insights, 22 services consolidated to 9, URL redirect map document)
- Sitemap page fully updated -- 18 sections, Systems Hub added, AI/Content category sub-services, section labels renamed (Work, Insights), post format paths fixed /blog/ -> /insights/
- Route-map.ts fully updated -- 30+ slug fixes (content sub-services, AI landing, design sub-services, post formats, accessibility), all paths resolve to actual routes
- ServicesLandingTemplate updated -- new "Explore by Discipline" section with AI + Content category hub cards

**Project Status (February 25, 2026):**
- Links & buttons audit 100% COMPLETE -- 340 files audited, 4 broken issues fixed across 11 file locations
- Codebase hygiene audit COMPLETE -- 38 orphaned files deleted (components, hooks, CSS, demos)
- CSS optimisation COMPLETE -- dead CSS removed, 78/78 pattern imports verified, zero orphans
- CHANGELOG.md created -- Keep a Changelog v1.1.0 format, Semantic Versioning
- Strategy audit COMPLETE -- 8 audits in `/reports/2026-02/strategy-audit/`, 8-phase evolution plan in `/tasks/strategy-evolution/`
- Stale guideline references cleanup COMPLETE -- duplicate sections removed, broken See links deleted

**Project Status (February 23, 2026):**
- Post-Funky Enhancement Phase COMPLETE (ScrollDownArrow added to all fullscreen heroes)
- ScrollDownArrow coverage: 100% (30/30 templates with fullscreen heroes)
- UX Consistency Audit complete (7 major patterns verified across 100+ templates)
- Design system compliance: 100% (CSS variables, fonts, accessibility)

**Project Status (February 14, 2026):**
- Sitemap updated to 117 routes (overview-sitemap.md rewritten from 30 to 117 routes)
- Tailwind elimination -- 6 templates migrated, 6 new BEM CSS files
- All 117 routes verified and documented

**Historical Milestones (Archived):**
Previous status entries (Dec 2024 -- Jan 2025) have been archived. Key milestones:
- 66/66 WordPress block guidelines, 90+ templates, 117 routes, 28 patterns
- 100% CSS variable compliance, WCAG 2.1 AA, WordPress FSE compatible
- Complete data system, navigation, FAQ integration, dark/light mode

**Current Reports:** `/reports/2026-02/`
**Current Tasks:** `/tasks/task-list.md`

---

## How to Use These Guidelines

**IMPORTANT:** This is the **canonical reference**. All other guideline files expand on these principles and must not contradict them.

### Reading Order for AI Agents

Follow these steps **IN ORDER** before writing any code:

#### Step 0: Understand Site Structure (REQUIRED)
Read the complete site architecture **FIRST**:
- **[overview-sitemap.md](./overview-sitemap.md)** -- Site structure, navigation, page hierarchy, URL patterns

#### Step 1: Read Overview Files (REQUIRED)
Read **ALL** files that start with "overview-":
- **[overview-components.md](./overview-components.md)** -- Component system overview with React diagram
- **[overview-icons.md](./overview-icons.md)** -- Icon system and usage

#### Step 2: Read Design Tokens (REQUIRED)
Read **ALL** files in the `design-tokens/` folder. **Do NOT skip this step.**
- **[design-tokens/colors.md](./design-tokens/colors.md)** -- Color system and semantic roles
- **[design-tokens/typography.md](./design-tokens/typography.md)** -- Typography hierarchy
- **[design-tokens/spacing.md](./design-tokens/spacing.md)** -- Spacing scale and patterns
- **[design-patterns-modern.md](./design-patterns-modern.md)** -- Modern design patterns (REQUIRED: fluid typography, glassmorphism, animations, **soft borders**)
- **[REDUCED-MOTION-STANDARDS.md](./REDUCED-MOTION-STANDARDS.md)** -- Reduced motion coding standards (REQUIRED: `prefers-reduced-motion` guards, JS detection, animation classification)

#### Step 3: Read WordPress System Overviews (REQUIRED FOR STRUCTURE)
Understand how React components map to WordPress:
- **[blocks/overview-blocks.md](./blocks/overview-blocks.md)** -- WordPress blocks system
- **[patterns/overview-patterns.md](./patterns/overview-patterns.md)** -- Block patterns catalog
- **[parts/overview-parts.md](./parts/overview-parts.md)** -- Template parts (header/footer)
- **[templates/overview-templates.md](./templates/overview-templates.md)** -- Page templates
- **[sections/overview-sections.md](./sections/overview-sections.md)** -- Section styles (8 variations)

#### Step 4: Read Component Guidelines BEFORE Using Components (REQUIRED)
**BEFORE using ANY component**, read its specific guidelines file:
- Using Logo? -> Read **[components/Logo.md](./components/Logo.md)** FIRST
- Using StyleSwitcher? -> Read **[components/StyleSwitcher.md](./components/StyleSwitcher.md)** FIRST
- Using ScrollBackToTop? -> Read **[components/ScrollBackToTop.md](./components/ScrollBackToTop.md)** FIRST
- Using ScrollDownArrow? -> Read **[components/ScrollDownArrow.md](./components/ScrollDownArrow.md)** FIRST
- Using LayoutSwitcher? -> Read **[components/LayoutSwitcher.md](./components/LayoutSwitcher.md)** FIRST

#### Step 5: Verify Icons BEFORE Import (REQUIRED)
**BEFORE using ANY icon**, verify it exists and read the appropriate guidelines:
- Travel-related icons? -> Read **[icons/travel.md](./icons/travel.md)**
- UI/Interface icons? -> Read **[icons/interface.md](./icons/interface.md)**
- **ALWAYS** verify icon exists using bash tool before importing

#### Step 6: Read Mobile Guidelines for Mobile Features (As Needed)
**BEFORE implementing mobile features**, read the relevant mobile guidelines:
- Mobile typography? -> Read **[mobile/typography.md](./mobile/typography.md)**
- Mobile images? -> Read **[mobile/images.md](./mobile/images.md)**
- Mobile performance? -> Read **[mobile/performance.md](./mobile/performance.md)**
- Mobile forms? -> Read **[mobile/forms.md](./mobile/forms.md)**

#### Step 7: Read Infrastructure Guidelines (As Needed)
**BEFORE working on infrastructure**, read the relevant infrastructure guidelines:
- Storybook configuration? -> Read **[storybook/storybook-configuration.md](./storybook/storybook-configuration.md)**
- Importing assets? -> Read **[imports/import-guidelines.md](./imports/import-guidelines.md)**
- Test organization? -> Read **[testing/test-organization.md](./testing/test-organization.md)**
- Writing shell scripts? -> Read **[scripts/shell-script-guidelines.md](./scripts/shell-script-guidelines.md)**
- Writing Python scripts? -> Read **[scripts/python-script-guidelines.md](./scripts/python-script-guidelines.md)**
- Planning new features? -> Read **[planning/planning-guidelines.md](./planning/planning-guidelines.md)**
- Creating reports? -> Read **[reporting/reporting-guidelines.md](./reporting/reporting-guidelines.md)**
- Updating the changelog? -> Read **[changelog/changelog-guidelines.md](./changelog/changelog-guidelines.md)**
- Creating AI prompts? -> Read **[prompts/prompt-generation-guidelines.md](./prompts/prompt-generation-guidelines.md)**

**DO NOT write code using a component or icon until you have read its specific guidelines.**

---

## Documentation Structure

For complete navigation, see **[README.md](./README.md)**.

**Complete File Index:** See **[DOCUMENTATION-INDEX.md](./DOCUMENTATION-INDEX.md)** for all 100+ documentation files

```txt
guidelines/
├── Guidelines.md              # This file (canonical reference)
├── README.md                  # Navigation guide
├── DOCUMENTATION-INDEX.md     # Complete file index (100+ files)
├── REDUCED-MOTION-STANDARDS.md # prefers-reduced-motion coding standards
│
├── overview-components.md     # Component system overview + React diagram
├── overview-icons.md         # Icon system overview
├── overview-sitemap.md       # Site structure overview
│
├── blocks/                   # WordPress blocks system
│   ├── overview-blocks.md    # Core blocks + custom blocks
│   ├── design/               # Design blocks (6 files)
│   └── theme/                # Theme blocks (6 files)
│
├── patterns/                 # WordPress block patterns
│   ├── overview-patterns.md  # Pattern catalog + composition
│   ├── ArchiveCTA.md        # Archive CTA pattern
│   ├── ServicesCard.md      # Services card pattern
│   ├── NewsletterSignup.md  # Newsletter signup pattern
│   ├── PricingTable.md      # Pricing table pattern
│   ├── CTAInline.md         # Inline CTA pattern
│   ├── SocialProof.md       # Social proof pattern
│   └── FeatureComparison.md # Feature comparison pattern
│
├── parts/                    # WordPress template parts
│   └── overview-parts.md     # Header, footer, breadcrumbs
│
├── templates/                # WordPress templates
│   └── overview-templates.md # Page archetypes + template structure
│
├── sections/                 # Section style system
│   └── overview-sections.md  # 8 section style variations
│
├── styles/                   # Style presets
│   └── section-styles.md    # 17 section style presets
│
├── components/               # Component-specific documentation (24 files)
│   ├── Logo.md
│   ├── StyleSwitcher.md
│   ├── ScrollDownArrow.md
│   ├── ScrollBackToTop.md
│   ├── LayoutSwitcher.md
│   └── [19 more component files]
│
├── design-tokens/            # Token system documentation (12 files)
│   ├── colors.md
│   ├── typography.md
│   ├── spacing.md
│   └── [9 more token files]
│
├── icons/                    # Icon library documentation
│   ├── travel.md
│   └── interface.md
│
├── interactions/              # Animation & motion guidelines
│   └── animations.md         # Animation categories, scroll patterns, loading states
│
├── mobile/                   # Mobile-specific guidelines (4 files)
│   ├── typography.md
│   ├── images.md
│   ├── performance.md
│   └── forms.md
│
├── code-documentation/       # Code standards
│   └── JSDOC-STANDARDS.md   # JSDoc & TypeScript documentation standards
│
├── testing/                  # Testing guidelines
│   ├── TESTING-STANDARDS.md  # Testing standards & coverage requirements
│   ├── testing-guidelines.md
│   ├── test-organization.md  # Test location & structure
│   └── automated-auditing.md
│
├── storybook/                # Storybook configuration
│   └── storybook-configuration.md  # File locations, design system integration
│
├── imports/                  # Import system guidelines
│   └── import-guidelines.md  # Images, SVGs, fonts, data imports
│
├── scripts/                  # Script standards
│   ├── shell-script-guidelines.md   # Shell script structure & standards
│   └── python-script-guidelines.md  # Python script structure & standards
│
├── changelog/                # Changelog standards
│   └── changelog-guidelines.md  # Keep a Changelog format, protected file rules
│
├── planning/                 # Planning process
│   └── planning-guidelines.md  # Planning templates & lifecycle
│
└── reporting/                # Reporting system
    └── reporting-guidelines.md  # YYYY-MM-DD naming, 9 categories
```

---

## System Principles (Non-Negotiable)

1. **System-first, not page-first**
   Build reusable patterns. Pages are composed, not designed.

2. **Patterns over bespoke layouts**
   If it can't be a pattern, it doesn't belong in the system.

3. **CSS-first architecture (CRITICAL)**
   ALL styling comes from CSS files (`/src/styles/*.css`). NO Tailwind CSS classes. Use WordPress-aligned utility classes (`.wp-*` prefix) and CSS variables only. This gives users complete control by editing CSS files.

4. **WordPress utility classes ONLY**
   Use `.wp-*` prefixed classes from `/src/styles/utilities.css` for all layout, spacing, and typography. Examples: `.wp-grid-3-cols`, `.wp-max-w-6xl`, `.wp-text-center`. NO Tailwind classes like `grid`, `max-w-6xl`, `text-center`.

5. **100% CSS variable compliance**
   All colors, spacing, typography, and border radius MUST use CSS variables: `var(--primary)`, `var(--spacing-6)`, `var(--text-h1)`, `var(--radius-lg)`. NO hardcoded values.

6. **Font family enforcement**
   ONLY use fonts defined in CSS variables: `var(--font-primary)` (Lexend) and `var(--font-secondary)` (Manrope). NEVER hardcode font names like 'Lexend, sans-serif'.

7. **Inline styles for dynamic values ONLY**
   Use `style` attributes ONLY for truly dynamic values (colors, spacing with CSS variables). For static styling, use utility classes from CSS files.

8. **Padding-First Architecture**
   Use padding and gap for spacing. Avoid margin except for centering (`margin: auto`). This prevents margin collapse issues and aligns with WordPress block spacing model.

9. **WordPress-native thinking**
   Prefer core blocks and block styles. Only add custom blocks when essential.

10. **Accessibility is mandatory**
    Keyboard operation, focus visibility, correct semantics, reduced motion support.

11. **No reports, documentation, or scripts in project root**
    The project root (`/`) must contain ONLY configuration files (`package.json`, `tsconfig.json`, `vite.config.ts`, etc.) and two permitted `.md` files: `README.md` and `CHANGELOG.md`. ALL reports go in `/reports/`, ALL guidelines go in `/guidelines/`, ALL tasks go in `/tasks/`, ALL documentation go in `/docs/`, ALL shell scripts go in `/scripts/`. No other `.md` or `.sh` files in root -- ever.

---

## Goals

### Primary Goals
- Create a **design-system prototype** that maps directly to:
  - `templates/*.html`
  - `parts/*.html`
  - `patterns/*.php` (or pattern registration)
  - `theme.json` (presets only)
  - optional front-end scripts for small UI behaviours (e.g. Back to Top)
- Establish a reusable **pattern catalogue** for LSX sites.
- Make the prototype **editor-realistic**: anything shown should be buildable by Gutenberg users.

### Success Criteria
- Every screen is an instance of a recognised **archetype**.
- Every section is an instance of a registered **pattern**.
- All spacing/typography/colour references are **token-based** (no custom values).
- Accessibility rules are enforced everywhere.

---

## Centralized Data System

**Location:** `/src/app/data/`

All mock data is centralized for consistency, reusability, and easy maintenance. This mirrors how WordPress manages content through a database.

### Data Files

#### **`pages.ts`** -- Site Navigation & Page Metadata
- Complete site structure with all pages and URLs
- Navigation menus (main navigation, footer navigation)
- Helper functions: `getPageBySlug()`, `getPageUrl()`, `getPageTitle()`
- **Usage:** Import navigation menus for headers/footers

```tsx
import { mainNavigation, footerNavigation } from '../../data/pages';
```

#### **`portfolio.ts`** -- Portfolio Projects & Case Studies
- 6 detailed portfolio projects with full case study data
- Industries, categories, technologies
- Client testimonials and project results
- Helper functions: `getProjectBySlug()`, `getProjectsByIndustry()`
- **Usage:** Import for portfolio archives and single project pages

```tsx
import { portfolioProjects, featuredProjects } from '../../data/portfolio';
```

#### **`posts.ts`** -- Blog Posts & Authors
- 12 blog posts with authors, categories, tags
- Reading times and featured images
- Author profiles and bios
- Helper functions: `getPostBySlug()`, `getPostsByCategory()`
- **Usage:** Import for blog index and single post templates

```tsx
import { blogPosts, featuredPosts, blogCategories } from '../../data/posts';
```

#### **`faqs.ts`** -- FAQ Collections
- 13 FAQ collections for different pages/contexts
- `homepageFAQs`, `servicesFAQs`, `aboutFAQs`, `contactFAQs`, etc.
- **Usage:** Import appropriate FAQ collection for each template

```tsx
import { servicesFAQs } from '../../data/faqs';
<FAQSection faqs={servicesFAQs} />
```

### WordPress Mapping

In a real WordPress implementation:
- **`pages.ts`** -> WordPress Pages & Navigation Menus
- **`portfolio.ts`** -> Custom Post Type: `portfolio` with custom fields
- **`posts.ts`** -> WordPress Posts (default post type)
- **`faqs.ts`** -> Custom Post Type: `faq` with taxonomy for categories

### Benefits

1. **Single Source of Truth:** Update data once, reflects everywhere
2. **Type Safety:** TypeScript interfaces ensure data consistency
3. **Reusability:** Import same data across multiple templates
4. **Maintainability:** Easy to update without touching component code
5. **WordPress-Ready:** Structure mirrors WordPress data models

---

## Design Tokens & CSS Variables System

**Full documentation:** [design-tokens/](./design-tokens/)

### CSS Variables System

**CRITICAL REQUIREMENT:** All UI generation MUST use CSS variables. This gives users complete control over styling by editing CSS files.

**System:** 80 CSS variables (33 LSX + 47 WordPress-compatible)

### Design System Fonts

**CRITICAL:** Only use fonts defined in the design system:
- **Lexend** -- Primary font (headings, body, UI)
- **Manrope** -- Secondary font (small text only)

**MUST use CSS variables:**
```tsx
// CORRECT
fontFamily: 'var(--font-primary)'      // Lexend
fontFamily: 'var(--font-secondary)'    // Manrope

// WRONG - Never hardcode
fontFamily: 'Lexend, sans-serif'       // DON'T DO THIS
```

### Token Reference Syntax

**In React/CSS:**
```tsx
// Typography - MUST use CSS variables
fontFamily: 'var(--font-primary)'    // Lexend
fontFamily: 'var(--font-secondary)'  // Manrope
fontSize: 'var(--text-h1)'           // 60px
fontSize: 'var(--text-h2)'           // 32px
fontSize: 'var(--text-base)'         // 16px

// Spacing - CSS variables for inline styles
padding: 'var(--spacing-6)'          // 24px
gap: 'var(--spacing-4)'              // 16px
marginBottom: 'var(--spacing-8)'     // 32px

// Colors
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
backgroundColor: 'var(--background)'
color: 'var(--foreground)'

// Border radius
borderRadius: 'var(--radius)'        // 4px
borderRadius: 'var(--radius-lg)'     // 8px
```

### Why CSS Variables?

**User Control:**
```css
/* User edits theme-base.css: */
--font-primary: 'Inter', sans-serif;
/* Entire site updates automatically! */
```

**Time Savings:** 99%+ (60 min -> 30 sec for font changes)

### Token Categories

**Typography:**
- MUST use `var(--font-primary)` or `var(--font-secondary)`
- NEVER hardcode 'Lexend' or 'Manrope'

**Spacing:**
- Use `var(--spacing-*)` for inline styles OR WordPress utility classes (`.wp-*`)
- NEVER use Tailwind classes (`p-6`, `gap-4`, etc.)
- NEVER hardcode px values

**Colors:**
- Use CSS variables
- NEVER hardcode hex colors

**Border Radius:**
- Use `--radius*` variables
- NEVER hardcode px values

### CSS Variables Reference

**Fonts:** `--font-primary`, `--font-secondary`
**Spacing:** `--spacing-0` through `--spacing-64` (23 values)
**WordPress:** 47 `--wp--preset--*` variables

**Complete documentation:**
- **[design-tokens/typography.md](./design-tokens/typography.md)** -- Font families and sizes
- **[design-tokens/spacing.md](./design-tokens/spacing.md)** -- WordPress spacing + CSS utilities
- **[design-tokens/colors.md](./design-tokens/colors.md)** -- Color system
- **[design-tokens/responsive.md](./design-tokens/responsive.md)** -- Fluid responsive system
- **[styles/section-styles.md](./styles/section-styles.md)** -- Section style variations

---

## Layout System

### Breakpoint System

The LSX Design system uses **12 responsive breakpoints** optimized for WordPress and accessibility:

| Breakpoint | Min Width | Navigation | Grid Columns | WordPress Context |
|------------|-----------|------------|--------------|-------------------|
| **Zoomed-In** | 280px | Mobile menu | 1 column | WCAG zoom support (400%) |
| **Mobile Compact** | 320px | Mobile menu | 1 column | Small phones (iPhone SE) |
| **Mobile** | 480px | Mobile menu | 1 column | Standard mobile (WordPress standard) |
| **Small** | 600px | Mobile menu | 2 columns | Small tablets, phablets |
| **Editorial** | 640px | Mobile menu | 2 columns | Blog layouts (existing usage) |
| **Tablet Portrait** | 768px | Mobile menu | 2 columns | Tablets vertical, primary grid |
| **Medium** | 782px | Mobile menu | 2 columns | WP adminbar change |
| **Large** | 960px | Mobile menu | 3 columns | WP admin sidebar fold |
| **Tablet Landscape** | 1024px | **Desktop menu** | 3 columns | Desktop menu switch |
| **XLarge** | 1080px | Desktop menu | 3 columns | HD laptops (1920x1080) |
| **Wide** | 1280px | Desktop menu | 4 columns | Wide desktops (existing usage) |
| **Desktop** | 1440px+ | Desktop menu | 4 columns | Standard desktop |
| **XHuge** | 1920px+ | Desktop menu | 5 columns | Ultra-wide displays |

**CRITICAL:** Desktop menu becomes visible at **1024px** (Tablet Landscape).

### Fluid Page Padding (Horizontal)

**All containers automatically use fluid horizontal padding:**

```css
/* Automatic fluid padding: 16px (mobile) -> 32px (desktop) */
.fluid-container,
.site-header,
.site-footer,
.wp-block-group {
  padding-left: clamp(1rem, 2vw + 0.5rem, 2rem);   /* 16px -> 32px */
  padding-right: clamp(1rem, 2vw + 0.5rem, 2rem);  /* 16px -> 32px */
}
```

**Formula:** `clamp(1rem, 2vw + 0.5rem, 2rem)`
- **Min:** 16px (mobile compact)
- **Fluid:** 2vw + 0.5rem (scales with viewport)
- **Max:** 32px (desktop)

**Usage:**
```tsx
// Apply fluid padding to any container
<div className="fluid-container">
  {/* Content automatically has 16px-32px horizontal padding */}
</div>
```

### Fluid Typography System

**All headings and body text scale smoothly using `clamp()`:**

```css
/* Typography scale with fluid sizing */
--text-h1: clamp(32px, 4vw + 16px, 64px);     /* 32px -> 64px */
--text-h2: clamp(28px, 3vw + 16px, 48px);     /* 28px -> 48px */
--text-h3: clamp(24px, 2vw + 14px, 36px);     /* 24px -> 36px */
--text-h4: clamp(20px, 1.5vw + 12px, 28px);   /* 20px -> 28px */
--text-h5: clamp(18px, 1vw + 12px, 24px);     /* 18px -> 24px */
--text-h6: clamp(16px, 0.75vw + 12px, 20px);  /* 16px -> 20px */
--text-base: clamp(15px, 0.5vw + 14px, 18px); /* 15px -> 18px */
--text-lead: clamp(18px, 1vw + 16px, 22px);   /* 18px -> 22px (hero subtitles) */
```

**Implementation:**
```tsx
// Headings automatically scale with clamp()
<h1 style={{ fontSize: 'var(--text-h1)' }}>Page Title</h1>  {/* 32px -> 64px */}
<h2 style={{ fontSize: 'var(--text-h2)' }}>Section</h2>     {/* 28px -> 48px */}

// Body text scales smoothly
<p style={{ fontSize: 'var(--text-base)' }}>Body text</p>    {/* 15px -> 18px */}
```

**Typography Scale Table:**

| Element | Mobile (320px) | Desktop (1440px+) | Usage |
|---------|----------------|-------------------|-------|
| **H1** | 32px | 64px | Page titles, hero headings |
| **H2** | 28px | 48px | Section headings |
| **H3** | 24px | 36px | Subsection headings |
| **H4** | 20px | 28px | Component titles |
| **H5** | 18px | 24px | Small headings |
| **H6** | 16px | 20px | Label headings |
| **Paragraph** | 15px | 18px | Body text |
| **Lead** | 18px | 22px | Hero subtitles, intros |

**All typography uses `clamp()` for smooth fluid scaling -- no media queries needed!**

### Complete Responsive Documentation

**See complete fluid responsive guide:**
**[design-tokens/responsive.md](./design-tokens/responsive.md)**

**Includes:**
- Complete breakpoint system with usage examples
- Fluid typography formulas and implementation
- Responsive grid behavior (1 -> 2 -> 3 -> 4 columns)
- Section spacing by breakpoint
- Mobile menu implementation
- Touch target requirements (48x48px minimum)
- Hide/show utilities by breakpoint

---

## Fluid Responsive System

**Location:** `/src/styles/responsive.css`
**Complete Guide:** **[design-tokens/responsive.md](./design-tokens/responsive.md)**

**CRITICAL REQUIREMENT:** All templates MUST use the fluid responsive system for optimal cross-device experience.

### Breakpoint System

The LSX Design system uses **12 responsive breakpoints** optimized for WordPress and accessibility:

| Breakpoint | Min Width | Navigation | Grid Columns | WordPress Context |
|------------|-----------|------------|--------------|-------------------|
| **Zoomed-In** | 280px | Mobile menu | 1 column | WCAG zoom support (400%) |
| **Mobile Compact** | 320px | Mobile menu | 1 column | Small phones (iPhone SE) |
| **Mobile** | 480px | Mobile menu | 1 column | Standard mobile (WordPress standard) |
| **Small** | 600px | Mobile menu | 2 columns | Small tablets, phablets |
| **Editorial** | 640px | Mobile menu | 2 columns | Blog layouts (existing usage) |
| **Tablet Portrait** | 768px | Mobile menu | 2 columns | Tablets vertical, primary grid |
| **Medium** | 782px | Mobile menu | 2 columns | WP adminbar change |
| **Large** | 960px | Mobile menu | 3 columns | WP admin sidebar fold |
| **Tablet Landscape** | 1024px | **Desktop menu** | 3 columns | Desktop menu switch |
| **XLarge** | 1080px | Desktop menu | 3 columns | HD laptops (1920x1080) |
| **Wide** | 1280px | Desktop menu | 4 columns | Wide desktops (existing usage) |
| **Desktop** | 1440px+ | Desktop menu | 4 columns | Standard desktop |
| **XHuge** | 1920px+ | Desktop menu | 5 columns | Ultra-wide displays |

**Note:** Desktop menu becomes visible at **1024px** (Tablet Landscape).

### Fluid Container Padding

**All containers automatically use fluid horizontal padding:**

```tsx
// Automatic fluid padding: 16px (mobile) -> 32px (desktop)
<section className="fluid-container">
  {/* Content */}
</section>

// Or use on any element
<div className="fluid-px">  {/* Horizontal padding only */}
```

**Formula:** `clamp(1rem, 2vw + 0.5rem, 2rem)` -> **16px -> 32px**

### Fluid Typography System

**All headings and body text scale smoothly:**

| Element | Mobile | Desktop | Usage |
|---------|---------|---------|-------|
| **H1** | 32px | 64px | Page titles, hero headings |
| **H2** | 28px | 48px | Section headings |
| **H3** | 24px | 36px | Subsection headings |
| **H4** | 20px | 28px | Component titles |
| **H5** | 18px | 24px | Small headings |
| **H6** | 16px | 20px | Label headings |
| **Paragraph** | 15px | 18px | Body text |
| **Lead** | 18px | 22px | Hero subtitles |

**Implementation:**

```tsx
// Headings automatically scale with clamp()
<h1>Page Title</h1>              {/* 32px -> 64px */}
<h2>Section Heading</h2>          {/* 28px -> 48px */}

// Body text scales smoothly
<p>Body paragraph text</p>        {/* 15px -> 18px */}
<p className="text-lead">Hero subtitle</p>  {/* 18px -> 22px */}
```

**All typography uses `clamp()` for smooth fluid scaling -- no media queries needed!**

### Responsive Grid System

**Grid utilities adapt automatically to breakpoints:**

```tsx
// 2-column grid (1 col mobile -> 2 cols tablet)
<div className="wp-grid-2-cols">

// 3-column grid (1 col mobile -> 2 cols tablet -> 3 cols desktop)
<div className="wp-grid-3-cols">

// 4-column grid (1 -> 2 -> 3 -> 4 columns)
<div className="wp-grid-4-cols">
```

### Fluid Spacing Utilities

```tsx
// Fluid vertical padding
<div className="fluid-py-sm">   {/* 16px -> 32px */}
<div className="fluid-py-md">   {/* 32px -> 64px */}
<div className="fluid-py-lg">   {/* 48px -> 96px */}

// Fluid gap
<div className="fluid-gap-sm">  {/* 8px -> 16px */}
<div className="fluid-gap-md">  {/* 16px -> 32px */}
<div className="fluid-gap-lg">  {/* 24px -> 48px */}
```

### Responsive Utilities

```tsx
// Hide/show by breakpoint
<div className="hide-mobile">     {/* Hidden < 768px */}
<div className="hide-tablet">     {/* Hidden 768px-1023px */}
<div className="hide-desktop">    {/* Hidden > 1024px */}

<div className="show-mobile">     {/* Visible < 768px only */}
<div className="show-tablet">     {/* Visible 768px+ */}
<div className="show-desktop">    {/* Visible 1024px+ */}
```

### Complete Documentation

**Read the complete fluid responsive guide:**
**[design-tokens/responsive.md](./design-tokens/responsive.md)**

**Includes:**
- Complete breakpoint system
- Fluid typography formulas
- Responsive grid behavior
- Section spacing by breakpoint
- Mobile menu implementation
- Touch target requirements
- Implementation checklist

### Additional Responsive Utilities

**Extended responsive utilities guide:**
**[design-tokens/responsive-utilities.md](./design-tokens/responsive-utilities.md)**

**47 additional responsive utilities:**

- **Flexbox Utilities** -- Responsive flex direction, wrap, alignment
- **Width Utilities** -- Full width mobile, adaptive widths, fluid widths
- **Height Utilities** -- Responsive min-height, fluid heights
- **Display Utilities** -- Block -> flex/grid transitions
- **Overflow Utilities** -- Scroll on mobile, hidden states
- **Positioning Utilities** -- Static -> sticky/fixed
- **Aspect Ratio Utilities** -- Square -> video transitions
- **Order Utilities** -- Flexbox reordering by breakpoint
- **Margin/Padding Utilities** -- Responsive spacing with CSS variables
- **Border Radius Utilities** -- Responsive border radius
- **Z-Index Utilities** -- Responsive layering
- **Column Count Utilities** -- CSS columns for text layout
- **Object Fit Utilities** -- Cover -> contain transitions
- **Gap Utilities** -- Responsive gap with CSS variables
- **Font Weight Utilities** -- Responsive font weights
- **Line Clamp Utilities** -- Truncate text by breakpoint
- **Image Utilities** -- Responsive image sizing

**All utilities use CSS variables for complete user control!**

---

## WordPress CSS Utilities (CRITICAL)

**Location:** `/src/styles/utilities.css`

**CRITICAL REQUIREMENT:** ALL layout, spacing, and typography MUST use WordPress utility classes with `.wp-*` prefix. NO Tailwind CSS classes allowed.

### Grid Utilities

**Use these instead of Tailwind grid classes:**

```tsx
// CORRECT - WordPress utilities
<div className="wp-grid-2-cols">  // 1 col mobile -> 2 cols desktop
<div className="wp-grid-3-cols">  // 1 col mobile -> 2 cols tablet -> 3 cols desktop
<div className="wp-grid-4-cols">  // 1 col mobile -> 2 cols tablet -> 4 cols desktop

// WRONG - Tailwind classes (DO NOT USE)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Max-Width Utilities

**Use these instead of Tailwind max-width classes:**

```tsx
// CORRECT - WordPress utilities
<div className="wp-max-w-3xl">  // 768px, centered
<div className="wp-max-w-4xl">  // 896px, centered
<div className="wp-max-w-6xl">  // 1152px, centered

// WRONG - Tailwind classes (DO NOT USE)
<div className="max-w-6xl mx-auto">
```

### Text Alignment Utilities

**Use these instead of Tailwind text alignment classes:**

```tsx
// CORRECT - WordPress utilities
<div className="wp-text-center">   // text-align: center
<div className="wp-text-left">     // text-align: left
<div className="wp-text-right">    // text-align: right

// WRONG - Tailwind classes (DO NOT USE)
<div className="text-center">
```

### Complete Utility Class List

**Available in `/src/styles/utilities.css`:**

**Grid Utilities:**
- `.wp-grid-2-cols` -- 2-column responsive grid
- `.wp-grid-3-cols` -- 3-column responsive grid
- `.wp-grid-4-cols` -- 4-column responsive grid

**Max-Width Utilities:**
- `.wp-max-w-3xl` -- 768px max-width, centered
- `.wp-max-w-4xl` -- 896px max-width, centered
- `.wp-max-w-6xl` -- 1152px max-width, centered

**Text Alignment:**
- `.wp-text-center` -- Center text
- `.wp-text-left` -- Left align text
- `.wp-text-right` -- Right align text

**WordPress Block Utilities:**
- `.wp-block-group` -- Block group container
- `.wp-block-columns` -- Multi-column layout
- Additional block utilities in `/src/styles/components.css`

### Migration from Tailwind

**DO NOT use these Tailwind classes:**
- `grid`, `grid-cols-*`, `md:grid-cols-*`, `lg:grid-cols-*`
- `gap-*` (use CSS variable in inline style instead: `gap: 'var(--spacing-8)'`)
- `max-w-*`, `mx-auto`
- `text-center`, `text-left`, `text-right`
- `p-*`, `px-*`, `py-*` (use CSS variables in inline styles)

**Instead use:**
- `.wp-grid-*-cols` for grids
- `.wp-max-w-*` for max-width containers
- `.wp-text-*` for text alignment
- CSS variables for spacing: `padding: 'var(--spacing-6)'`

### Why WordPress Utilities?

1. **User Control:** All utilities use CSS variables -- users edit CSS files to update styling
2. **WordPress FSE Compatible:** `.wp-*` prefix aligns with WordPress block naming
3. **theme.json Ready:** Utilities map directly to WordPress theme.json presets
4. **No Build Step:** Pure CSS, no Tailwind compilation needed
5. **Maintainable:** Centralized in `/src/styles/utilities.css`

---

## WordPress & WooCommerce Blocks System

**CRITICAL:** All UI components MUST be built as WordPress/WooCommerce blocks with dedicated CSS files. This ensures the prototype maps directly to WordPress FSE (Full Site Editing) and WooCommerce functionality.

### Complete Block Guidelines

**Location:** `/guidelines/blocks/`

**[Read the Complete Blocks Guide ->](./blocks/README.md)**

### Block Categories

#### 1. **Text Blocks** -- `/guidelines/blocks/text/`
Content blocks for text and typography:
- **[Paragraph](./blocks/text/paragraph.md)** - Standard text content
- **[Heading](./blocks/text/heading.md)** - H1-H6 headings with design system typography
- **[List](./blocks/text/list.md)** - Ordered and unordered lists
- **[Quote](./blocks/text/quote.md)** - Blockquotes and citations
- **[Table](./blocks/text/table.md)** - Data tables

**[See all Text Blocks ->](./blocks/text/README.md)**

#### 2. **Media Blocks** -- `/guidelines/blocks/media/`
Media display and embeds:
- **[Image](./blocks/media/image.md)** - Images with lazy loading and responsive
- **[Gallery](./blocks/media/gallery.md)** - Image galleries with grid layouts
- **[Cover](./blocks/media/cover.md)** - Cover/hero images with overlay
- **[Video](./blocks/media/video.md)** - Video players and embeds

**[See all Media Blocks ->](./blocks/media/README.md)**

#### 3. **Design Blocks** -- `/guidelines/blocks/design/`
Layout and structure blocks (MOST IMPORTANT):
- **[Accordion](./blocks/design/Accordion.md)** - Collapsible content sections
- **[Buttons](./blocks/design/buttons.md)** - Button groups with design system styles
- **[Columns](./blocks/design/columns.md)** - Multi-column layouts
- **[Group](./blocks/design/group.md)** - Container for grouping blocks
- **[Row](./blocks/design/row.md)** - Horizontal flex layout
- **[Stack](./blocks/design/stack.md)** - Vertical flex layout
- **[Grid](./blocks/design/grid.md)** - CSS Grid layout

**[See all Design Blocks ->](./blocks/design/README.md)**

#### 4. **Theme Blocks** -- `/guidelines/blocks/theme/`
WordPress theme-specific blocks:
- **[Navigation](./blocks/theme/navigation.md)** - Site navigation with mega menus
- **[Site Logo](./blocks/theme/site-logo.md)** - Site logo with automatic theme switching
- **[Site Title](./blocks/theme/site-title.md)** - Site title
- **[Site Tagline](./blocks/theme/site-tagline.md)** - Site tagline
- **[Search](./blocks/theme/search.md)** - Search form
- **[Template Part](./blocks/theme/template-part.md)** - Reusable template parts

**[See all Theme Blocks ->](./blocks/theme/README.md)**

#### 5. **Widget Blocks** -- `/guidelines/blocks/widgets/`
Sidebar and widget area blocks:
- **[Latest Posts](./blocks/widgets/latest-posts.md)** - Recent posts list
- **[Categories List](./blocks/widgets/categories-list.md)** - Categories navigation
- **[Social Icons](./blocks/widgets/social-icons.md)** - Social media links
- **[Tag Cloud](./blocks/widgets/tag-cloud.md)** - Tag cloud widget

**[See all Widget Blocks ->](./blocks/widgets/README.md)**

#### 6. **Embed Blocks** -- `/guidelines/blocks/embed/`
External content embeds:
- **[YouTube](./blocks/embed/youtube.md)** - YouTube video embeds
- **[Vimeo](./blocks/embed/vimeo.md)** - Vimeo video embeds
- **[X (Twitter)](./blocks/embed/twitter.md)** - X (Twitter) embeds
- **[Spotify](./blocks/embed/spotify.md)** - Spotify music embeds

**[See all Embed Blocks ->](./blocks/embed/README.md)**

#### 7. **WooCommerce Blocks** -- `/guidelines/blocks/woocommerce/`
E-commerce functionality:
- **[Product Grid](./blocks/woocommerce/product-grid.md)** - Product listings with filters
- **[Product Details](./blocks/woocommerce/product-details.md)** - Single product display
- **[Add to Cart](./blocks/woocommerce/add-to-cart.md)** - Add to cart button
- **[Cart](./blocks/woocommerce/cart.md)** - Shopping cart display
- **[Checkout](./blocks/woocommerce/checkout.md)** - Checkout flow

**[See all WooCommerce Blocks ->](./blocks/woocommerce/README.md)**

### Block Creation Workflow

**BEFORE creating ANY block component:**

1. **Read the category README:**
   - Text block? -> Read `/guidelines/blocks/text/README.md`
   - Media block? -> Read `/guidelines/blocks/media/README.md`
   - Design block? -> Read `/guidelines/blocks/design/README.md`
   - WooCommerce? -> Read `/guidelines/blocks/woocommerce/README.md`

2. **Read the specific block guideline:**
   - Creating Paragraph? -> Read `/guidelines/blocks/text/paragraph.md`
   - Creating Image? -> Read `/guidelines/blocks/media/image.md`
   - Creating Buttons? -> Read `/guidelines/blocks/design/buttons.md`

3. **Create component with dedicated CSS file:**
   ```
   Component: /src/app/components/blocks/{category}/{BlockName}.tsx
   CSS File:  /src/styles/blocks/{category}/{block-name}.css
   ```

4. **Use WordPress block class naming:**
   ```tsx
   // Component uses .wp-block-{name} class
   <div className="wp-block-paragraph">

   // CSS file styles the block
   .wp-block-paragraph {
     font-family: var(--font-primary);
     font-size: var(--text-base);
     color: var(--foreground);
   }
   ```

### Block Component Structure

```tsx
/**
 * BlockName Component
 *
 * WordPress core block: wp:block-name
 *
 * @see /guidelines/blocks/{category}/block-name.md
 */

import '@/styles/blocks/{category}/block-name.css';

export interface BlockNameProps {
  children: React.ReactNode;
  className?: string;
}

export const BlockName = ({ children, className = '' }: BlockNameProps) => {
  return (
    <div className={`wp-block-block-name ${className}`}>
      {children}
    </div>
  );
};
```

### Block CSS File Structure

```css
/**
 * BlockName Block Styles
 *
 * WordPress block: .wp-block-block-name
 */

.wp-block-block-name {
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--text-base);

  /* Colors */
  color: var(--foreground);
  background: var(--background);

  /* Spacing */
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-8);

  /* Borders */
  border-radius: var(--radius);
}
```

### Block Checklist

- [ ] Read category README
- [ ] Read specific block guideline
- [ ] Create component in `/src/app/components/blocks/{category}/`
- [ ] Create CSS file in `/src/styles/blocks/{category}/`
- [ ] Use WordPress block class naming (`.wp-block-{name}`)
- [ ] Use ONLY CSS variables (no hardcoded values)
- [ ] Use ONLY WordPress utility classes (no Tailwind)
- [ ] Use ONLY approved fonts (`var(--font-primary)` or `var(--font-secondary)`)
- [ ] Add JSDoc documentation
- [ ] Add accessibility attributes
- [ ] Test keyboard navigation
- [ ] Verify WCAG 2.1 AA compliance

### Related Documentation

- **[Blocks System Overview](./blocks/overview-blocks.md)** - Core blocks + custom blocks
- **[Component API Reference](./blocks/COMPONENT-API-REFERENCE.md)** - Complete API docs
- **[Quick Reference Card](./blocks/QUICK-REFERENCE-CARD.md)** - Quick reference
- **[Patterns Overview](./patterns/overview-patterns.md)** - Block patterns
- **[Design System Usage](./design-system/design-system-usage-guide.md)** - Design tokens

---

## WordPress Mapping

### WordPress Theme Artefacts

The prototype must map to these theme constructs:

- **Templates** (`templates/*.html`)
  - `front-page.html`, `index.html`, `archive.html`, `single.html`, `page.html`, `404.html`, etc.
- **Template parts** (`parts/*.html`)
  - header, footer, optional breadcrumbs
- **Patterns** (`patterns/*.php` or registered patterns)
  - every reusable section is a pattern
- **theme.json**
  - tokens + global styles + block styles
- **Style variations** (`styles/*.json`)
  - optional, but recommended for variations (e.g. dark mode)

### Page Archetypes (Fixed)

Every page must be one of these archetypes. **No hybrids.**

1. **Content hub (archive)**
   Order: Breadcrumbs -> Archive Header -> (Filters optional) -> Card Grid -> Pagination -> (CTA optional)

2. **Taxonomy archive**
   Order: Breadcrumbs -> Archive Header -> Term Navigation -> Card Grid -> Pagination -> (CTA optional)

3. **Single detail**
   Order: Hero -> Editorial Content -> Meta/Quick Facts -> Supporting Sections -> Related Content -> CTA

4. **Editorial listing (blog/index)**
   Order: Breadcrumbs -> Listing Header -> Results/Sorting -> Category Filters -> Post Grid -> Pagination

5. **Utility page (404, contact, etc.)**
   Order: Page Header -> Editorial Content -> Utility Block (Search/FAQ/Contact) -> CTA (optional)

**Rule:** If a section would be empty, omit it or show an explicit empty state -- never leave blank space.

---

## Pattern Catalogue

Use category-based slugs so patterns are discoverable and reusable.

**Slug format:** `lsx-design/{category}/{pattern-name}`

**Categories:**
- `layout` (site header/footer)
- `hero` (page context)
- `header` (archive/listing/page headers)
- `nav` (filters, breadcrumbs, pagination, category buttons)
- `listing` (card grids)
- `content` (editorial, media, supporting sections, **FAQ sections**)
- `meta` (quick facts / key-value)
- `related` (related stacks)
- `cta` (single primary CTA sections)
- `state` (empty states, error messages)

**Rule:** A page is always "composed" from patterns. Do not create one-off sections for a single template.

**Pattern-Specific Guidelines:**
- **FAQ Sections:** See **[patterns/FAQSection.md](./patterns/FAQSection.md)** for typography enforcement (questions MUST use `--text-lg`, NOT `--text-h4`)

---

## Components vs Patterns

### WordPress-First Rule of Thumb

- If editors need to place it: **pattern**
- If it is part of global chrome: **template part**
- If it is behavioural/utility-only: **theme code UI** (not a block)

### React Component Architecture

```txt
src/app/components/
├── common/          # Token enforcement (Container, Section, Heading, Button)
├── parts/           # Template parts (header, footer)
├── patterns/        # Block patterns (hero, card-grid, cta)
├── templates/       # Page templates (front-page, index, archive, single, 404)
└── ui/              # Non-WordPress utilities (BackToTopButton, StyleSwitcher, PageSwitcher)
```

**Complete documentation:** [overview-components.md](./overview-components.md)

---

## Components That Do NOT Map to WordPress Blocks

These are valid UI utilities but live **outside** Gutenberg composition:

- Back to top button -> **[components/ScrollBackToTop.md](./components/ScrollBackToTop.md)**
- Scroll down arrow -> **[components/ScrollDownArrow.md](./components/ScrollDownArrow.md)**
- Layout switcher -> **[components/LayoutSwitcher.md](./components/LayoutSwitcher.md)**
- Style switcher -> **[components/StyleSwitcher.md](./components/StyleSwitcher.md)**
- Skip link (accessibility utility)
- Focus ring / focus-visible utilities
- Typography/token enforcement wrappers

**Implementation:** In WordPress these typically live in `theme/assets/js/*` as progressive enhancement scripts.

---

## Accessibility Rules (WCAG 2.1 AA)

### Structure
- [ ] Exactly one H1 per page
- [ ] Heading order is logical and uninterrupted (H1 -> H2 -> H3, no skipping)
- [ ] Landmarks exist: `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] Lists are real `<ul>`/`<ol>` lists (not styled paragraphs)

### Interaction
- [ ] All interactive elements reachable by keyboard (Tab navigation)
- [ ] Focus states visible on all interactive elements (2px ring outline)
- [ ] No hover-only functionality (must work on touch devices)
- [ ] Touch targets are 44x44px minimum (esp. filters, pagination buttons)

### Content Tolerance
- [ ] Long titles don't break layout (test with 100+ characters)
- [ ] Missing fields don't create visual gaps
- [ ] Empty states are explicit (message + next action where appropriate)

### Motion (See [REDUCED-MOTION-STANDARDS.md](./REDUCED-MOTION-STANDARDS.md))
- [ ] Respect reduced motion (`prefers-reduced-motion: reduce`)
- [ ] No required animation for understanding content
- [ ] Every `@keyframes` animation has a `prefers-reduced-motion: reduce` guard
- [ ] Every hover `transform` is neutralised under reduced motion
- [ ] Decorative-only animated elements are hidden or static under reduced motion
- [ ] Loading indicators remain visible (static state) under reduced motion
- [ ] No content flashes more than 3 times per second (WCAG 2.3.1 Level A)
- [ ] JavaScript animation hooks default to `respectReducedMotion: true`
- [ ] Template CSS uses a consolidated reduced-motion block after dark-mode section

---

## Prototype Build Rules

### You MAY
- Assemble pages from approved patterns
- Use token spacing/typography to communicate hierarchy
- Omit optional patterns when content doesn't exist
- Create variations only when they map to a WordPress style variation or block style

### You MAY NOT
- Invent new layouts that cannot be patterns
- Add new tokens, fonts, or colours
- Hard-code pixel/hex values (always use CSS variables and Tailwind classes)
- Use sliders/carousels as a default interaction pattern
- Add multiple primary CTAs per section

---

## QA / Acceptance Checklist

Before you call the prototype "done":

- [ ] Every template is composed from patterns
- [ ] Every pattern has a clear purpose and slug
- [ ] Tokens are used everywhere (no raw spacing/font sizes/colours)
- [ ] All "utility UI" components are documented as non-block behaviours
- [ ] Accessibility rules pass basic keyboard + focus checks
- [ ] The system remains theme-agnostic and inherits `theme.json` defaults
- [ ] All icons have been verified to exist in lucide-react
- [ ] All components have accessible labels and ARIA attributes
- [ ] Mobile touch targets meet 44x44px minimum

---

## Quick Reference

**Need spacing?** -> **[design-tokens/spacing.md](./design-tokens/spacing.md)**
**Need typography?** -> **[design-tokens/typography.md](./design-tokens/typography.md)**
**Need colors?** -> **[design-tokens/colors.md](./design-tokens/colors.md)**
**Need button sizes?** -> **[design-tokens/button-sizes.md](./design-tokens/button-sizes.md)**
**Need components?** -> **[overview-components.md](./overview-components.md)**
**Need icons?** -> **[overview-icons.md](./overview-icons.md)**
**Need navigation?** -> **[README.md](./README.md)**

---

## Token Examples

### Typography
```tsx
// Headings
<h1 style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-primary)' }}>
  Archive Title
</h1>

// Body text
<p style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-secondary)' }}>
  Description text
</p>

// Small text (Manrope only)
<span style={{ fontSize: 'var(--text-small)', fontFamily: 'var(--font-secondary)' }}>
  By Author on Date
</span>
```

### Colors
```tsx
// Backgrounds and text
<div style={{
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)'
}}>

// Primary button
<button style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>

// Borders
<div style={{
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)'
}}>
```

### Spacing
```tsx
// Use CSS variables for spacing
<div style={{ padding: 'var(--spacing-6)', gap: 'var(--spacing-4)', marginBottom: 'var(--spacing-8)' }}>

// Use WordPress utility classes for grids
<div className="wp-grid-3-cols">
```

---

## Implementation Status

### Completed (December 25, 2024)

**Centralized Data System:**
- `/src/app/data/pages.ts` - Site navigation & page metadata
- `/src/app/data/portfolio.ts` - 6 portfolio projects with case studies
- `/src/app/data/posts.ts` - 12 blog posts with authors
- `/src/app/data/faqs.ts` - 13 FAQ collections

**Navigation System:**
- SiteHeader - Centralized navigation from `mainNavigation`
- SiteFooter - Centralized navigation from `footerNavigation`
- All navigation links working correctly

**FAQ Integration (12 Templates):**
- FrontPageTemplate - `homepageFAQs`
- ServicesTemplate - `servicesFAQs`
- AboutTemplate - `aboutFAQs`
- ContactPageTemplate - `contactFAQs`
- TeamTemplate - `teamFAQs`
- PortfolioArchiveTemplate - `portfolioFAQs`
- AboutProcessTemplate - `processFAQs`
- AboutCultureTemplate - `cultureFAQs`
- AboutHistoryTemplate - `aboutFAQs`
- BlogIndexTemplate - `blogFAQs`
- HostingTemplate - `hostingFAQs`
- FAQTemplate - general/technical FAQs

**Design System:**
- CSS variables fully integrated from `/src/styles/theme.css`
- All typography using Lexend/Manrope fonts
- All spacing using CSS variables
- All colors using CSS variables
- Modern design patterns (fluid typography, glassmorphism, gradient orbs)

### System Benefits

1. **Maintainability:** Update data in one place, reflects everywhere
2. **Type Safety:** TypeScript ensures data consistency
3. **WordPress-Ready:** Structure mirrors WordPress data models
4. **Reusability:** Import and reuse across templates
5. **Token-Driven:** Design system enforced through CSS variables

---

**Last Updated:** February 28, 2026
**System Version:** 3.0
**Design System:** LSX Design
**WordPress Compatibility:** FSE (Full Site Editing)
**Total Routes:** ~172
**Total Template Files:** 130+