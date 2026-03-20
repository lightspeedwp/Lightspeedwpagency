# Optimise Memory — File Splitting & Consolidation

**Type:** Sub-Trigger  
**Version:** 2.0.0  
**Created:** March 2, 2026  
**Revised:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise memory`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes — run quarterly or when bundle size grows

---

## Purpose

Reduce codebase memory footprint by splitting oversized files, consolidating duplicate data, removing orphaned CSS, flattening component nesting, and enforcing DRY architecture across templates, patterns, data, and CSS.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope (6 Pillars)

### 1. Break Up Large Files

**Thresholds:**
- **Critical:** > 1,000 lines (split immediately)
- **High:** 500-1,000 lines (split or refactor)
- **Medium:** 300-500 lines (evaluate for extraction)

**Scan these directories:**

| Directory | File Type | Max Lines | Split Strategy |
|---|---|---|---|
| `/src/app/components/templates/` | `.tsx` | 300 | Extract patterns, split by section |
| `/src/styles/templates/` | `.css` | 400 | Split by concern, media query, or pattern |
| `/src/app/components/patterns/` | `.tsx` | 300 | Extract blocks, consolidate variants |
| `/src/styles/patterns/` | `.css` | 400 | Split by base + variants |
| `/src/app/data/` | `.ts` | 500 | Split by category or page context |
| `/src/app/routes.tsx` | `.tsx` | 300 | Split into route groups with barrel file |
| `/src/app/utils/` | `.ts` | 300 | Split by function category |

**Splitting Strategies:**

**routes.tsx (if > 300 lines):**
```tsx
// Before: /src/app/routes.tsx (1,147 lines)
createBrowserRouter([...all 172 routes])

// After: Split into route groups
/src/app/routes/
  ├── index.tsx         // Barrel file, imports all groups
  ├── about.tsx         // About section routes
  ├── services.tsx      // Services routes
  ├── solutions.tsx     // Solutions routes
  ├── dev-tools.tsx     // Dev tools routes
  └── legal.tsx         // Legal/404 routes
```

**Data files > 500 lines:**
```tsx
// Before: /src/app/data/faqs.ts (1,587 lines)
export const allFAQs = [...]

// After: Split by category
/src/app/data/faqs/
  ├── index.ts          // Barrel file
  ├── homepage.ts       // Homepage FAQs
  ├── services.ts       // Services FAQs
  ├── solutions.ts      // Solutions FAQs
  └── general.ts        // General FAQs
```

**CSS > 400 lines:**
```css
/* Before: /src/styles/templates/contact-page.css (840 lines) */
.contact-page { /* all styles */ }

/* After: Split by section */
/src/styles/templates/contact/
  ├── index.css         /* @import all sub-files */
  ├── base.css          /* Base container, layout */
  ├── hero.css          /* Hero section */
  ├── form.css          /* Contact form */
  ├── info.css          /* Contact info cards */
  └── map.css           /* Map section */
```

**Templates > 300 lines:**
- Extract repeated JSX into pattern components
- Split hero, content, CTA into separate patterns
- Use DRY component hierarchy (pages → templates → patterns → blocks)

---

### 2. Remove Duplicate and Orphaned CSS (DRY)

**Duplicate CSS Pairs:**

Scan for files with matching names but different suffixes:
- `analytics-service.css` + `analytics-service-optimized.css`
- Original imported at component level
- Optimized imported globally via `index.css`

**Action:**
1. Determine which version is active (check imports in TSX and global CSS)
2. Keep the active version
3. Delete the unused version
4. Update all imports

**Data File Consolidation:**

Scan for duplicate data exports:

| Duplicate Set | Files | Total Lines | Action |
|---|---|---|---|
| Testimonials | `testimonials.ts`, `testimonials-extended.ts`, `testimonials-enhanced.ts` | 896 | Merge into single `testimonials.ts` |
| FAQs | `faqs.ts`, `faqs-extended.ts` | 1,587 | Merge or split by page context |
| Pages | `pages.ts`, `site-pages.ts`, `site-pages/pages.ts` | 979 | Clarify canonical source, delete duplicates |
| Hosting | `hosting.ts`, `hosting-page.ts` | 438 | Merge into single file |
| Why Choose Us | `why-choose-us.ts`, `why-choose-us-page.ts` | 440 | Merge into single file |

**Orphaned File Detection:**

- [ ] CSS files with no corresponding TSX component
- [ ] TSX components with no corresponding CSS import
- [ ] Data files exported but never imported
- [ ] Unused TypeScript utilities

---

### 3. CSS File Review & Reduction

**Files > 400 lines (split candidates):**

Scan `/src/styles/` for files exceeding threshold:

| File | Lines | Action |
|---|---|---|
| `blocks/theme/site-header.css` | > 800 | Split: base, mega-menu, responsive |
| `templates/*.css` | > 400 | Split by section or extract shared base |
| `blocks/theme/site-footer.css` | > 800 | Split: base, widgets, responsive |
| `utilities.css` | > 800 | Split by category: grid, text, display, spacing |
| `section-styles.css` | > 800 | Split by section variant |

**Shared Style Extraction:**

For templates with similar patterns (service pages, solution pages), extract:
- Shared hero styles → `/src/styles/templates/base/service-hero.css`
- Shared content styles → `/src/styles/templates/base/service-content.css`
- Shared CTA styles → `/src/styles/patterns/cta-base.css`

---

### 4. Clean Up Layers & Components

**Hidden/Unused Layer Detection:**

- [ ] Scan for commented-out JSX in all templates
- [ ] Scan for unused imports (imported but never referenced)
- [ ] Scan for orphaned CSS files (no corresponding TSX)
- [ ] Scan for orphaned data exports (exported but never imported)
- [ ] Identify dead CSS selectors (classes not used in any TSX)

**Nested Layer Reduction:**

- [ ] Identify components with 5+ levels of `div` nesting
- [ ] Identify unnecessary wrapper `div` elements
- [ ] Replace nested `div`s with semantic HTML (`section`, `article`, `nav`, `aside`)
- [ ] Flatten component hierarchies where intermediate wrappers add no value

**Example:**

```tsx
// Before (6 levels of nesting)
<div className="wp-page">
  <div className="wp-container">
    <div className="wp-section">
      <div className="wp-content">
        <div className="wp-card">
          <h2>Title</h2>
        </div>
      </div>
    </div>
  </div>
</div>

// After (3 levels, semantic HTML)
<article className="wp-page">
  <section className="wp-section">
    <h2>Title</h2>
  </section>
</article>
```

---

### 5. Flatten Complex SVGs & Vectors

**Note:** This project uses Phosphor Icons (no custom SVGs in `/src/imports/`). SVG optimization applies to:
- Inline SVG decorations in templates (gradient orbs, circuit patterns)
- CSS-based SVG backgrounds
- Any future SVG imports

**Actions:**

- [ ] Audit inline SVG complexity in hero sections
- [ ] Replace complex SVG decorations with CSS equivalents where possible
- [ ] Ensure CSS `background-image` SVGs are minified
- [ ] Remove unused SVG paths/groups

---

### 6. Trim Component Variants

**Variant Analysis Targets:**

Scan `/src/app/components/patterns/` for over-proliferation:

| Pattern Type | Current Count | Target Count | Action |
|---|---|---|---|
| Hero variants | ? | 3-4 | Consolidate with props (variant, theme, layout) |
| Card patterns | ? | 3-4 | Merge PostCard, PortfolioCard, ServicesCard |
| CTA patterns | 4+ | 2-3 | Consolidate FunkyCTA, CTAInline, CTASection |
| Stats patterns | 3+ | 2 | Merge StatsGrid, StatsSection, StatCounter |
| Testimonial patterns | 8+ | 3-4 | Consolidate into TestimonialCard, TestimonialGrid, TestimonialSlider |
| Related patterns | 5+ | 2-3 | Consolidate RelatedPosts, RelatedServices, etc. |

**Property Conversion:**

Replace separate components with prop-based variants:

```tsx
// Before: 4 separate CTA components
<FunkyCTA />
<CTAInline />
<CTASection />
<GradientCTASection />

// After: Single component with props
<CTA variant="funky" | "inline" | "section" theme="gradient" | "solid" />
```

---

## DRY Component Architecture (Mandatory)

**All pages and templates MUST follow this hierarchy:**

```
/src/app/components/
├── blocks/          # Atomic UI elements (Button, Card, Icon)
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ...
├── patterns/        # Section-level compositions (Hero, CTA, Stats)
│   ├── Hero.tsx
│   ├── CTA.tsx
│   └── ...
├── parts/           # Template parts (Header, Footer, Sidebar)
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Hero.tsx    # Hero template part (loads pattern variants)
├── templates/       # Full page layouts
│   ├── ServiceTemplate.tsx
│   ├── SolutionTemplate.tsx
│   └── ...
└── pages/           # Route-level page wrappers
    ├── ServicesPage.tsx
    └── ...
```

**Composition Rules:**

1. **Pages** = Templates + Data
2. **Templates** = Parts + Patterns
3. **Patterns** = Blocks + Layout
4. **Blocks** = Primitives + Styling

**Anti-pattern:** Direct nesting of blocks inside pages (skip templates/patterns)

**Example:**

```tsx
// ❌ Wrong: Page → Blocks (skips template/pattern layers)
function ServicesPage() {
  return (
    <div>
      <Button>Click</Button>
      <Card>Content</Card>
    </div>
  );
}

// ✅ Correct: Page → Template → Patterns → Blocks
function ServicesPage() {
  const data = serviceData;
  return <ServiceTemplate data={data} />;
}

function ServiceTemplate({ data }) {
  return (
    <>
      <HeroPart variant="service" data={data.hero} />
      <ServicesPreviewPattern services={data.services} />
      <CTAPattern {...data.cta} />
    </>
  );
}
```

---

## Success Metrics

| Metric | Target |
|---|---|
| Files > 1,000 lines | Reduce to 0 |
| Files > 500 lines | Reduce by 50% |
| Duplicate CSS pairs eliminated | 100% resolved |
| Data file consolidation | ~3,000 lines saved |
| CSS total reduction | 15-20% of total lines |
| Average CSS file size | < 200 lines |
| Component pattern variants | Max 4 per pattern type |
| routes.tsx | Split to < 300 lines per file |
| Max div nesting levels | ≤ 5 levels |

---

## Design System Compliance (Non-Negotiable)

All changes MUST maintain:

- [ ] 100% CSS variable usage (`var(--font-primary)`, `var(--spacing-*)`, `var(--primary)`, etc.)
- [ ] WordPress utility classes only (`.wp-*` prefix, no Tailwind)
- [ ] Font faces from CSS only (`var(--font-primary)` for Lexend, `var(--font-secondary)` for Manrope)
- [ ] User can update entire site styling by editing CSS files alone
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] WCAG 2.1 AA compliance
- [ ] Phosphor icons only (zero Lucide imports)
- [ ] Semantic HTML (section, article, nav, aside)

**See:** [/guidelines/optimisation.md](../guidelines/optimisation.md), [/guidelines/design-tokens/](../guidelines/design-tokens/)

---

## Deliverables

1. **Audit Report:** `/reports/YYYY-MM/memory-optimisation-report-[date].md`
2. **Task List:** Create tasks in `/tasks/task-list.md` for non-automated fixes
3. **CHANGELOG Entry:** Document all file splits, consolidations, and deletions

---

## Execution Order

1. **Phase 1 (Quick Wins):** Resolve duplicate CSS pairs, consolidate duplicate data files
2. **Phase 2 (File Splitting):** Split routes.tsx, split CSS files > 400 lines, split data files > 500 lines
3. **Phase 3 (Pattern Consolidation):** Merge similar patterns (testimonials, CTAs, stats)
4. **Phase 4 (Layer Cleanup):** Remove unused imports, orphaned files, flatten nesting
5. **Phase 5 (DRY Architecture):** Ensure all pages use blocks → patterns → templates hierarchy

---

**Prompt Location:** `/prompts/optimise-memory.md`  
**Category:** Optimisation  
**Difficulty:** High  
**Estimated Duration:** 60-120 minutes
