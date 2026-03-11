# Comprehensive Memory Optimization & Codebase Cleanup Orchestrator

**Purpose:** Complete memory optimization, codebase cleanup, and architecture hardening across the LSX Design prototype.  
**Last Updated:** March 10, 2026  
**Version:** 2.0 (Unified)  
**Status:** Active

---

## Overview

This unified orchestrator combines 4 major optimization workflows into one coordinated system:

1. **CSS Memory Optimization** (9 audits)
2. **File Size Reduction** (splitting, DRY, data consolidation)
3. **Codebase Cleanup** (orphans, dead code, stale references)
4. **Content Data Integration** (hardcoding elimination, real content)

**Expected Outcome:**
- **40-60% reduction** in CSS bundle size
- **30-40% reduction** in total file count through consolidation
- **100% design system compliance** (CSS variables only)
- **Zero hardcoded content** in components
- **Zero orphaned files or dead code**

---

## To Answer Your Question

### **Q: Would it help to break files up into smaller files and make components + CSS more reusable/DRY?**

### **A: YES — This is the EXACT strategy this orchestrator implements!**

**Breaking files into smaller pieces + DRY architecture = 3 major wins:**

#### 1. **File Size Reduction (30-50%)**
- **Split large files (>800 lines)** into focused, single-purpose modules
- **Extract base classes** for repeated CSS patterns (cards, icons, grids, headings)
- **Consolidate duplicate CSS** from 31 "optimized" file pairs into single canonical versions
- **Result:** Faster parsing, smaller bundles, easier maintenance

#### 2. **Component Reusability (40-60%)**
- **Pattern consolidation:** Reduce 8 testimonial variants → 3 with props
- **Shared base CSS:** Extract common styles into `/src/styles/base/` files
- **WordPress utilities:** Replace Tailwind with reusable `.wp-*` utility classes
- **Result:** Add new features faster using proven patterns

#### 3. **Memory Efficiency (50-70%)**
- **Data file splitting:** Split `faqs.ts` (1,587 lines) by page context
- **Route splitting:** Split `routes.tsx` (1,147 lines) into route groups
- **CSS deduplication:** Remove duplicate selectors (1,200 → <200)
- **Result:** Lower memory usage during development and build

**Key Strategy:** Extract once, reuse everywhere. A `card-base.css` file used by 50 components saves ~7,500 lines vs. 50 separate card implementations.

---

## Prerequisites

**BEFORE running this orchestrator, read:**

### Design System & CSS Guidelines (CRITICAL)

1. **[/guidelines/development/css-guidelines.md](/guidelines/development/css-guidelines.md)**
   - CSS architecture standards
   - BEM naming conventions
   - Design system integration
   - WordPress CSS utilities

2. **[/guidelines/development/css-memory-optimization.md](/guidelines/development/css-memory-optimization.md)**
   - Deduplication strategies
   - Base class extraction
   - Specificity minimization
   - Media query consolidation

3. **[/guidelines/development/bem-naming-conventions.md](/guidelines/development/bem-naming-conventions.md)**
   - BEM structure and syntax
   - WordPress BEM conventions
   - Common patterns and anti-patterns

### Project Organization Rules

4. **[/guidelines/Guidelines.md](/guidelines/Guidelines.md)**
   - Folder structure (mandatory)
   - Protected files (never delete)
   - Design system compliance
   - File organization rules

---

## Master Execution Plan

Execute **ALL 4 workflows** in this exact sequence:

### Workflow 1: CSS Memory Optimization (9 audits)
**Duration:** 4-6 hours  
**Impact:** 40-60% CSS bundle reduction  
**Output:** `/reports/2026-03/memory-optimization/`

### Workflow 2: File Size Reduction (6 pillars)
**Duration:** 6-8 hours  
**Impact:** 30-40% total file count reduction  
**Output:** `/reports/2026-03/file-size-reduction/`

### Workflow 3: Codebase Cleanup (5 audits)
**Duration:** 3-4 hours  
**Impact:** Zero orphaned files, zero dead code  
**Output:** `/reports/2026-03/codebase-cleanup/`

### Workflow 4: Content Data Integration (4 parts)
**Duration:** 5-7 hours  
**Impact:** Zero hardcoded content, 100% real company data  
**Output:** `/reports/2026-03/content-data-integration/`

**Total Estimated Duration:** 18-25 hours  
**Total Expected Savings:** 50-70% overall file size reduction

---

## Workflow 1: CSS Memory Optimization

**See:** [Original CSS Memory Optimization section below]

### Phase 1: Foundation Analysis (Audits 1-3)

**1. CSS Inventory Audit** ([01-css-inventory-audit.md](./01-css-inventory-audit.md))
   - Catalog all CSS files (~235 files)
   - Measure file sizes
   - Identify largest files (>800 lines)
   - Generate baseline metrics

**2. CSS Duplication Audit** ([02-css-duplication-audit.md](./02-css-duplication-audit.md))
   - Find duplicate selectors (~1,200 duplicates)
   - Identify repeated patterns
   - Calculate potential savings
   - Prioritize extraction candidates

**3. CSS Specificity Audit** ([03-css-specificity-audit.md](./03-css-specificity-audit.md))
   - Measure selector specificity
   - Identify over-nested selectors (>3 levels)
   - Find cascade dependencies
   - Recommend refactoring

**Phase 1 Outputs:**
- `/reports/2026-03/memory-optimization/01-css-inventory.md`
- `/reports/2026-03/memory-optimization/02-css-duplication.md`
- `/reports/2026-03/memory-optimization/03-css-specificity.md`

---

### Phase 2: Pattern Extraction (Audits 4-6)

**4. Base Class Extraction Audit** ([04-base-class-extraction-audit.md](./04-base-class-extraction-audit.md))
   - Extract card base classes → `/src/styles/base/card-base.css`
   - Extract icon base classes → `/src/styles/base/icon-base.css`
   - Extract heading base classes → `/src/styles/base/heading-base.css`
   - Extract button base classes → `/src/styles/base/button-base.css`
   - Extract grid/flex base classes → `/src/styles/base/grid-base.css`

**5. WordPress Utility Audit** ([05-wordpress-utility-audit.md](./05-wordpress-utility-audit.md))
   - Identify Tailwind usage (eliminate 100%)
   - Ensure WordPress utility usage (`.wp-*` classes)
   - Verify CSS variable compliance (100%)
   - Check font family enforcement (`var(--font-primary/secondary)` only)

**6. Media Query Consolidation Audit** ([06-media-query-consolidation-audit.md](./06-media-query-consolidation-audit.md))
   - Find scattered media queries (~200 blocks)
   - Consolidate by breakpoint
   - Standardize breakpoint values (1280px, 1024px, 768px, 480px)
   - Measure savings (target: 50% reduction)

**Phase 2 Outputs:**
- `/reports/2026-03/memory-optimization/04-base-class-extraction.md`
- `/reports/2026-03/memory-optimization/05-wordpress-utility.md`
- `/reports/2026-03/memory-optimization/06-media-query-consolidation.md`
- New base CSS files in `/src/styles/base/`

---

### Phase 3: Component Optimization (Audits 7-9)

**7. Component CSS Audit** ([07-component-css-audit.md](./07-component-css-audit.md))
   - Analyze component CSS files (~105 patterns)
   - Find duplicate component styles
   - Optimize component architecture
   - Reduce component CSS size (target: 40% reduction)

**8. Template CSS Audit** ([08-template-css-audit.md](./08-template-css-audit.md))
   - Analyze template CSS files (~145 templates)
   - Identify shared template patterns
   - Extract template base classes
   - Reduce template CSS size (target: 50% reduction)

**9. Bundle Size Audit** ([09-bundle-size-audit.md](./09-bundle-size-audit.md))
   - Measure total CSS bundle size
   - Identify final optimization opportunities
   - Generate final report
   - Document savings

**Phase 3 Outputs:**
- `/reports/2026-03/memory-optimization/07-component-css.md`
- `/reports/2026-03/memory-optimization/08-template-css.md`
- `/reports/2026-03/memory-optimization/09-bundle-size.md`
- `/reports/2026-03/memory-optimization/00-final-report.md`

---

## Workflow 2: File Size Reduction

**Based on:** `/prompts/memory-optimization-prompt.md` & `/prompts/memory-reduction-audit.md`

### Pillar 1: Eliminate Duplicate CSS File Pairs

**Problem:** 31 template CSS files exist in both original and "-optimized" versions. Both are loaded simultaneously.

**Action:**
1. For each of 31 pairs, determine which version is active
2. Delete the unused file from each pair
3. Update all import references

**Files to Audit (31 pairs):**
- `analytics-service.css` + `analytics-service-optimized.css`
- `accessibility-service.css` + `accessibility-service-optimized.css`
- `ai-engine-service.css` + `ai-engine-service-optimized.css`
- [... 28 more pairs — see `/prompts/memory-reduction-audit.md` for full list]

**Estimated Savings:** 9,743 - 15,000+ lines

**Output:**
- `/reports/2026-03/file-size-reduction/01-duplicate-css-pairs.md`

---

### Pillar 2: Consolidate Duplicate Data Files

**Problem:** Multiple data files contain overlapping or superseded content.

**Files to Consolidate:**

| Domain | Files | Combined Lines | Action |
|--------|-------|----------------|--------|
| **Testimonials** | `testimonials.ts` (220) + `testimonials-extended.ts` (379) + `testimonials-enhanced.ts` (297) | 896 | Merge into single `testimonials.ts` |
| **FAQs** | `faqs.ts` (725) + `faqs-extended.ts` (862) | 1,587 | Split by page context: `faqs/homepage.ts`, `faqs/services.ts`, etc. |
| **Pages/Navigation** | `pages.ts` (86) + `site-pages.ts` (10) + `site-pages/pages.ts` (883) | 979 | Clarify canonical, delete unused |
| **Hosting** | `hosting.ts` (92) + `hosting-page.ts` (346) | 438 | Merge into `hosting.ts` |
| **Why Choose Us** | `why-choose-us.ts` (409) + `why-choose-us-page.ts` (31) | 440 | Merge into `why-choose-us.ts` |

**Estimated Savings:** ~1,500-2,500 lines

**Output:**
- `/reports/2026-03/file-size-reduction/02-data-consolidation.md`

---

### Pillar 3: Split Oversized Files

**Problem:** 10 files exceed 1,000 lines. Harder to maintain, slower to parse.

**Files > 1,000 lines:**

| File | Lines | Split Strategy |
|------|-------|----------------|
| `routes.tsx` | 1,147 | Split into route groups: `routes/about.ts`, `routes/services.ts`, `routes/solutions.ts`, `routes/work.ts`, `routes/insights.ts`, `routes/shop.ts`, `routes/dev-tools.ts`, `routes/index.ts` |
| `site-header.css` | 1,051 | Split: `site-header-base.css`, `site-header-desktop.css`, `site-header-mobile.css` ✅ COMPLETE |
| `page-journey-stage.css` | 1,050 | Split: hero, content, interactive sections |
| `page-service-discovery.css` | 1,045 | Replace with optimized version (see Pillar 1) |

**Files 800-1,000 lines (high priority):**

| File | Lines | Split Strategy |
|------|-------|----------------|
| `page-services-landing.css` | 986 | Replace with optimized (943 lines), then split |
| `mailchimp-solution-page.css` | 961 | Extract to solution-base patterns ✅ COMPLETE |
| `page-solution-tour-design.css` | 939 | Extract to solution-base patterns |
| `page-solution-redesign.css` | 917 | Extract to solution-base patterns |
| `utilities.css` | 805 | Split: grid, text, display, spacing utilities |
| `site-footer.css` | 817 | Split: base, widgets, responsive |

**Output:**
- `/reports/2026-03/file-size-reduction/03-oversized-files.md`

---

### Pillar 4: Clean Up Hidden Layers

**Problem:** Commented-out code, unused imports, orphaned files add dead weight.

**Scan Checklist:**
- [ ] **Commented-out JSX blocks:** Search `{/*` and `//` patterns in templates for disabled sections (> 5 lines)
- [ ] **Unused imports:** Imports declared but never used in the file body
- [ ] **Orphaned CSS files:** CSS files with no corresponding TSX import anywhere
- [ ] **Orphaned data exports:** Named exports in `/src/app/data/` never imported
- [ ] **Dead CSS selectors:** Classes defined in CSS that appear in zero TSX files
- [ ] **Legacy comments:** Block comments describing removed features

**Tools:**
```bash
# Find CSS files not imported anywhere
find src/styles -name "*.css" | while read f; do
  basename=$(basename "$f")
  if ! grep -rl "$basename" src/ --include="*.tsx" --include="*.css" | grep -v "$f" > /dev/null 2>&1; then
    echo "ORPHANED: $f"
  fi
done

# Find unused data exports
grep -r "export " src/app/data/ --include="*.ts" | grep -o "export [a-zA-Z]* [a-zA-Z]*" | sort
```

**Output:**
- `/reports/2026-03/file-size-reduction/04-hidden-layers.md`

---

### Pillar 5: Trim Pattern Variants

**Problem:** Multiple pattern components serve near-identical purposes with minor differences.

**Consolidation Candidates:**

| Pattern Family | Current Count | Target | Components |
|---------------|--------------|--------|------------|
| **Testimonials** | 8 | 3-4 | TestimonialCard, TestimonialGrid, TestimonialSlider, TestimonialInline, FeaturedTestimonial, VideoTestimonial, ServiceTestimonial, ServiceTestimonials |
| **CTAs** | 4 | 2 | FunkyCTA, CTAInline, CTASection, GradientCTASection |
| **Stats** | 3 | 1-2 | StatsGrid, StatsSection, StatCounter |
| **Related Content** | 5 | 2-3 | RelatedPosts, RelatedServices, RelatedServicesGrid, RelatedServicesInPhase, RelatedContentWidget |
| **Query Loops** | 13 | 5-7 | QueryLoop + 12 variants (Posts, Portfolio, Services, etc.) |

**Strategy:** Use component properties (props) instead of separate components:
```tsx
// BEFORE: 8 separate components
<TestimonialCard />
<TestimonialInline />
<FeaturedTestimonial />

// AFTER: 1 component with layout prop
<Testimonial layout="card" />
<Testimonial layout="inline" />
<Testimonial layout="featured" />
```

**Output:**
- `/reports/2026-03/file-size-reduction/05-pattern-consolidation.md`

---

### Pillar 6: Flatten Complex SVGs & Vectors

**Note:** This project uses Phosphor Icons (no custom SVGs in `/src/imports/`). SVG optimization applies to:
- Inline SVG decorations in templates (gradient orbs, circuit patterns)
- CSS-based SVG backgrounds
- Any future SVG imports

**Actions:**
- [ ] Audit inline SVG complexity in hero sections
- [ ] Replace complex SVG decorations with CSS equivalents where possible
- [ ] Ensure CSS `background-image` SVGs are minified

**Output:**
- `/reports/2026-03/file-size-reduction/06-svg-optimization.md`

---

## Workflow 3: Codebase Cleanup

**Based on:** `/prompts/cleanup/00-CODEBASE-CLEANUP-ORCHESTRATOR.md`

**Execution Order:** Run each audit sequentially.

| # | Audit | Prompt File | Report File |
|---|---|---|---|
| 1 | Root Directory Cleanup | `/prompts/cleanup/01-root-cleanup.md` | `01-root-cleanup.md` |
| 2 | Orphaned Imports & Dead Code | `/prompts/cleanup/02-orphaned-imports.md` | `02-orphaned-imports.md` |
| 3 | Unused CSS Files & Styles | `/prompts/cleanup/03-unused-css.md` | `03-unused-css.md` |
| 4 | Stale Guideline References | `/prompts/cleanup/04-stale-references.md` | `04-stale-references.md` |
| 5 | Old Reports Cleanup | `/prompts/cleanup/05-old-reports.md` | `05-old-reports.md` |

**After All Audits:**
1. Consolidate all findings into `/tasks/codebase-cleanup.md`
2. Update `/tasks/task-list.md` with summary
3. Execute safe deletions (files confirmed unused)
4. Fix broken imports

**Quality Gates:**
- [ ] All 5 audit reports written
- [ ] Task list created with actionable items
- [ ] No broken imports after cleanup
- [ ] App still builds and renders correctly

**Outputs:**
- `/reports/2026-03/codebase-cleanup/01-root-cleanup.md`
- `/reports/2026-03/codebase-cleanup/02-orphaned-imports.md`
- `/reports/2026-03/codebase-cleanup/03-unused-css.md`
- `/reports/2026-03/codebase-cleanup/04-stale-references.md`
- `/reports/2026-03/codebase-cleanup/05-old-reports.md`
- `/tasks/codebase-cleanup.md`

---

## Workflow 4: Content Data Integration

**Based on:** `/prompts/content/2026-03-01-content-data-audit-and-integration.md`

### Part A: Hardcoding Audit

**Objective:** Scan every template component and pattern to find content hardcoded in JSX instead of sourced from data files.

**Scope:**
- All `.tsx` files in `/src/app/components/templates/`
- All `.tsx` files in `/src/app/components/patterns/`
- All `.tsx` files in `/src/app/components/parts/`

**A piece of content is hardcoded if it is:**
- A string literal for a heading, paragraph, stat, milestone, team member
- An array of objects defined inside the component body
- A stat object like `{ number: '500+', label: 'Projects Delivered' }` defined inline
- Any content a content editor would need to change that is NOT from `/src/app/data/`

**Action:** Move all hardcoded content to appropriate data files.

**Output:**
- `/reports/2026-03/content-data-integration/01-hardcoding-audit.md`

---

### Part B: Real Content Integration

**Objective:** Update all data files and templates with authentic company content.

**B1. Update `company.ts`**

Apply corrections:
```ts
export const companyData = {
  name: 'LightSpeed',
  legalName: 'LightSpeedDevelopment',
  acronym: 'LSD',
  foundingYear: 2003,  // CORRECT (was 2014 — WRONG)
  headquarters: {
    city: 'Cape Town',
    province: 'Western Cape',
    country: 'South Africa',
    workStyle: 'Hybrid / Remote'
  },
  // ... etc
};
```

**B2. Rebuild `team.ts` with Real Team Members**

Replace ALL placeholder/fictional team members with real extended team (13 members):
1. Ash Shaw (Founder & CEO, joined Jan 2003)
2. Warwick Booth (Lead Developer, joined Dec 2006)
3. Chris Vancoillie (Systems Administrator, joined Sep 2009)
4. Barbara Kerr (COO, CFO & HR Partner, joined 2010)
5. Justin Abrahamse (Frontend Developer, rejoined 2020)
6. Lourens Visser (Project Manager, joined Aug 2021)
7. Adam Wale (Designer, joined 2021)
8. Tibi Buzdugan (Frontend & Backend Developer, joined Jul 2023)
9. Zared Rogers (Web Designer & WordPress Developer, joined Aug 2023)
10. Hugo Gravito (Block Theme Developer Intern, joined 15 Aug 2025)
11. Brandon Marshall (Block Theme Developer Intern, joined 25 Aug 2025)
12. Seren van der Merwe (Block Theme Developer Intern, joined 1 Sep 2025)
13. José Abreu (Block Theme & Block Developer, rejoined 5 Sep 2025)

**B3. Rebuild `about.ts` — Company History & Milestones**

Add new exports:
- `companyMilestones` — Real timeline from 2003 (not 2014)
- `barCampPivot` — The 2006 event that changed everything
- `founderQuotes` — Ash's quotes on entrepreneurship and AI
- `wordCampHistory` — 20+ WordCamps since 2008

**B4. Expand `AboutHistoryTemplate.tsx`**

Rebuild template with richer story:
1. Hero (22-year journey)
2. Origin Story (IT support → BarCamp → WordPress pivot)
3. BarCamp Moment (dedicated spotlight section)
4. Real Milestones Timeline (starts from 2003)
5. AI Transformation (2025 GitHub Copilot rollout)
6. WordCamp Community
7. Stats (imported from `aboutStats`)
8. FAQ
9. CTA

**Output:**
- `/reports/2026-03/content-data-integration/02-real-content-integration.md`

---

### Part C: New Blog Posts

**Objective:** Add 8 new, unique, well-written blog posts to `/src/app/data/blog-posts.ts`.

**Posts to Add:**
1. **The BarCamp Effect** — How BarCamp Cape Town 2006 changed everything
2. **The AI Workflow That Changed Our Team** — 6-month GitHub Copilot retrospective
3. **Hiring for Attitude** — Internship filtering 450 applicants to 2
4. **MCP for WordPress Agencies** — Model Context Protocol primer
5. **Figma Design Systems for WordPress** — WCEU 2025 talk recap
6. **The Wetu Partnership** — Open source with commercial sponsorship
7. **From Design Handoff to Go-Live** — BugHerd workflow
8. **WooCommerce Style Book** — What it is and why it matters

**Each post must have:**
- Full `content` field (150+ words)
- Featured image from Unsplash (`unsplash_tool`)
- Accurate `readingTime`, `date`, `author`, `categories`, `tags`

**Output:**
- `/reports/2026-03/content-data-integration/03-blog-posts.md`

---

### Part D: Audit Execution Steps

**Execute in this exact order:**

1. **Scan for Hardcoded Content** — Search templates/patterns for hardcoded arrays, strings
2. **Create/Extend Data Files** — Move content to appropriate data files
3. **Update Templates to Import from Data** — Replace hardcoded content with imports
4. **Update Data Files with Real Content** — Apply corrections from Part B
5. **Add New Blog Posts** — Add all 8 posts with Unsplash images
6. **Verify and Test** — Zero TypeScript errors, all templates render

**Output:**
- `/reports/2026-03/content-data-integration/04-final-report.md`

---

## Success Metrics

### CSS Memory Optimization Targets

| Metric | Baseline | Target | Reduction |
|--------|----------|--------|-----------|
| Total CSS (uncompressed) | ~120KB | <80KB | 33% |
| Total CSS (gzipped) | ~35KB | <25KB | 29% |
| Largest single file | ~25KB | <15KB | 40% |
| Average template CSS | 300-800 lines | 150-400 lines | 50% |
| Duplicate selectors | ~1,200 | <200 | 83% |
| Media query blocks | ~200 | <100 | 50% |

### File Size Reduction Targets

| Metric | Baseline | Target | Reduction |
|--------|----------|--------|-----------|
| Files > 1,000 lines | 10 | 0 | 100% |
| Duplicate CSS pairs | 31 pairs | 0 pairs | 100% |
| Data file lines saved | ~3,000 | - | Via consolidation |
| Average CSS file size | 264 lines | <200 lines | 24% |
| Testimonial patterns | 8 | 3-4 | 50% |

### Codebase Cleanup Targets

| Metric | Target |
|--------|--------|
| Orphaned files | 0 |
| Unused imports | 0 |
| Dead CSS selectors | 0 |
| Stale guideline references | 0 |
| Old reports (>7 days, superseded) | Archived |

### Content Data Integration Targets

| Metric | Target |
|--------|--------|
| Hardcoded content arrays in components | 0 |
| Company founding year | 2003 ✅ |
| Real team members in `team.ts` | 13 |
| Real milestones (starting from) | 2003 |
| New blog posts added | 8 |

---

## Execution Workflow

### Step 1: Preparation

```bash
# Create working directories
mkdir -p /reports/2026-03/memory-optimization
mkdir -p /reports/2026-03/file-size-reduction
mkdir -p /reports/2026-03/codebase-cleanup
mkdir -p /reports/2026-03/content-data-integration
mkdir -p /tasks/memory-optimization
mkdir -p /tasks/file-size-reduction
mkdir -p /tasks/codebase-cleanup
mkdir -p /tasks/content-data-integration

# Read all prerequisites (REQUIRED)
# - /guidelines/development/css-guidelines.md
# - /guidelines/development/css-memory-optimization.md
# - /guidelines/development/bem-naming-conventions.md
# - /guidelines/Guidelines.md
```

---

### Step 2: Execute Workflow 1 (CSS Memory Optimization)

**Phase 1: Foundation Analysis**
1. Run **01-css-inventory-audit.md**
2. Run **02-css-duplication-audit.md**
3. Run **03-css-specificity-audit.md**

**Phase 2: Pattern Extraction**
4. Run **04-base-class-extraction-audit.md** → Create base CSS files
5. Run **05-wordpress-utility-audit.md** → Eliminate Tailwind
6. Run **06-media-query-consolidation-audit.md** → Consolidate media queries

**Phase 3: Component Optimization**
7. Run **07-component-css-audit.md**
8. Run **08-template-css-audit.md**
9. Run **09-bundle-size-audit.md** → Generate final report

**Checkpoint:**
- [ ] All 9 audit reports saved
- [ ] Base class files created in `/src/styles/base/`
- [ ] Zero Tailwind CSS usage
- [ ] 100% WordPress utility compliance
- [ ] Bundle size reduced 40-60%

---

### Step 3: Execute Workflow 2 (File Size Reduction)

**Pillar 1: Duplicate CSS Pairs**
- Audit all 31 pairs
- Determine which version is active
- Delete unused files
- Update imports

**Pillar 2: Data Consolidation**
- Merge testimonials (3 files → 1)
- Split FAQs by context
- Clarify pages/navigation canonical
- Merge hosting data
- Merge why-choose-us data

**Pillar 3: Split Oversized Files**
- Split `routes.tsx` (1,147 lines) into route groups
- Split `page-journey-stage.css` (1,050 lines)
- Split `utilities.css` (805 lines) by category
- Split `site-footer.css` (817 lines)

**Pillar 4: Clean Hidden Layers**
- Remove commented-out JSX
- Remove unused imports
- Delete orphaned CSS files
- Remove dead CSS selectors

**Pillar 5: Trim Pattern Variants**
- Consolidate testimonials (8 → 3-4)
- Consolidate CTAs (4 → 2)
- Consolidate stats (3 → 1-2)
- Consolidate related content (5 → 2-3)

**Pillar 6: SVG Optimization**
- Audit inline SVG complexity
- Replace with CSS where possible

**Checkpoint:**
- [ ] All 6 pillar reports saved
- [ ] 31 duplicate CSS pairs resolved
- [ ] Data files consolidated
- [ ] Oversized files split
- [ ] Hidden layers removed
- [ ] Pattern variants trimmed

---

### Step 4: Execute Workflow 3 (Codebase Cleanup)

**Sequential Execution:**
1. Root Directory Cleanup
2. Orphaned Imports & Dead Code
3. Unused CSS Files & Styles
4. Stale Guideline References
5. Old Reports Cleanup

**Checkpoint:**
- [ ] All 5 cleanup reports saved
- [ ] Root directory clean (only config + README + CHANGELOG)
- [ ] Zero orphaned imports
- [ ] Zero unused CSS files
- [ ] Zero stale guideline references
- [ ] Old reports archived

---

### Step 5: Execute Workflow 4 (Content Data Integration)

**Part A: Hardcoding Audit**
- Scan all templates for hardcoded content
- Move content to data files
- Update templates to import from data

**Part B: Real Content Integration**
- Fix `company.ts` (founding year 2003)
- Rebuild `team.ts` (13 real team members)
- Rebuild `about.ts` (real milestones, BarCamp, WordCamp)
- Expand `AboutHistoryTemplate.tsx`

**Part C: New Blog Posts**
- Add 8 new blog posts
- Source Unsplash images (8 parallel calls)
- Write full content fields (150+ words each)

**Part D: Verify**
- Zero TypeScript errors
- All templates render
- History page starts from 2003

**Checkpoint:**
- [ ] All 4 part reports saved
- [ ] Zero hardcoded content in components
- [ ] Company data corrected (2003 founding)
- [ ] 13 real team members added
- [ ] Real milestones from 2003
- [ ] 8 new blog posts added

---

### Step 6: Generate Master Final Report

**Consolidate all findings into:**

`/reports/2026-03/00-MASTER-OPTIMIZATION-REPORT.md`

**Report Structure:**
```markdown
# Master Optimization Report — March 10, 2026

## Executive Summary
- Workflows completed: 4/4
- Total duration: X hours
- Total savings: X% file size reduction

## Workflow 1: CSS Memory Optimization
- CSS bundle reduced: X% (Y KB → Z KB)
- Duplicate selectors removed: X
- Base classes extracted: X files
- Media queries consolidated: X%

## Workflow 2: File Size Reduction
- Duplicate CSS pairs resolved: 31/31
- Data files consolidated: X files → Y files
- Oversized files split: X files
- Pattern variants reduced: X%

## Workflow 3: Codebase Cleanup
- Orphaned files deleted: X
- Unused imports removed: X
- Dead CSS selectors removed: X
- Stale references fixed: X

## Workflow 4: Content Data Integration
- Hardcoded items moved to data: X
- Team members added: 13
- Blog posts added: 8
- Company history corrected: 2003 ✅

## Key Achievements
- ✅ 40-60% CSS bundle reduction
- ✅ 30-40% total file count reduction
- ✅ Zero hardcoded content
- ✅ Zero orphaned files
- ✅ 100% design system compliance
- ✅ 100% real company data

## Files Created
- Base CSS files: X
- Route group files: X
- Consolidated data files: X
- New blog posts: 8

## Next Steps
- [ ] Monitor bundle size in future development
- [ ] Enforce base class usage in new components
- [ ] Run quarterly optimization audits
- [ ] Update guidelines with learnings
```

---

### Step 7: Update Task Lists

**Generate consolidated task list:**

`/tasks/00-MASTER-OPTIMIZATION-TASKS.md`

**Task list structure:**
```markdown
# Master Optimization Tasks

**Generated:** March 10, 2026
**Source:** Comprehensive Memory Optimization & Cleanup Orchestrator v2.0
**Priority:** High

## Immediate Tasks (Priority 1)

### CSS Memory Optimization
- [ ] Apply base classes to remaining components
- [ ] Remove final Tailwind CSS references
- [ ] Consolidate remaining scattered media queries

### File Size Reduction
- [ ] Verify all 31 duplicate CSS pairs resolved
- [ ] Test split route groups
- [ ] Verify data file consolidations

### Codebase Cleanup
- [ ] Verify no orphaned files remain
- [ ] Fix any broken imports discovered
- [ ] Archive old reports (>7 days)

### Content Data Integration
- [ ] Verify all hardcoded content moved to data
- [ ] Test `AboutHistoryTemplate` renders correctly
- [ ] Verify all 8 blog posts display

## Maintenance Tasks (Priority 2)

- [ ] Add CSS size limits to CI/CD
- [ ] Create pre-commit hook for BEM validation
- [ ] Document base class usage in component guidelines
- [ ] Add automated CSS duplication detection
- [ ] Add automated hardcoding detection

## Monitoring Tasks (Priority 3)

- [ ] Set up bundle size monitoring
- [ ] Create CSS complexity dashboard
- [ ] Schedule quarterly optimization audits
- [ ] Track optimization metrics over time
- [ ] Monitor for hardcoded content in new PRs
```

**Also update:**
- `/tasks/task-list.md` (general task list)
- Individual workflow task lists as needed

---

## Design System Compliance (Non-Negotiable)

**ALL changes MUST maintain:**

- [ ] **100% CSS variable usage** — `var(--font-primary)`, `var(--spacing-*)`, `var(--primary)`, etc.
- [ ] **WordPress utility classes ONLY** — `.wp-*` prefix, NO Tailwind
- [ ] **Font faces from CSS only** — `var(--font-primary)` for Lexend, `var(--font-secondary)` for Manrope
- [ ] **User control** — Users can update entire site styling by editing CSS files alone
- [ ] **Reduced motion support** — `prefers-reduced-motion` guards on all animations
- [ ] **WCAG 2.1 AA compliance** — Accessibility maintained throughout
- [ ] **BEM naming conventions** — All component CSS uses BEM
- [ ] **No hardcoded values** — Zero hex colors, zero px spacing, zero font names

---

## Quality Checklist

**Before marking orchestrator complete:**

### CSS Memory Optimization Complete
- [ ] CSS inventory generated with file sizes
- [ ] Duplicate selectors reduced 83% (1,200 → <200)
- [ ] Base class files created in `/src/styles/base/`
- [ ] Tailwind CSS eliminated (verified zero usage)
- [ ] WordPress utilities enforced (100% compliance)
- [ ] Media queries consolidated by breakpoint
- [ ] Bundle size reduced 40-60%
- [ ] Final report generated

### File Size Reduction Complete
- [ ] All 31 duplicate CSS pairs resolved
- [ ] Data files consolidated (testimonials, FAQs, pages, hosting)
- [ ] Oversized files split (routes.tsx, CSS files >800 lines)
- [ ] Hidden layers removed (commented code, orphans)
- [ ] Pattern variants trimmed (testimonials 8→4, CTAs 4→2)
- [ ] SVG optimization complete

### Codebase Cleanup Complete
- [ ] Root directory clean (only config + README + CHANGELOG)
- [ ] Zero orphaned imports
- [ ] Zero unused CSS files
- [ ] Zero dead CSS selectors
- [ ] Zero stale guideline references
- [ ] Old reports archived

### Content Data Integration Complete
- [ ] Zero hardcoded content arrays in component bodies
- [ ] `company.ts` foundingYear is 2003
- [ ] `team.ts` contains 13 real team members
- [ ] `about.ts` contains real milestones from 2003
- [ ] `AboutHistoryTemplate.tsx` imports all data (no hardcoded arrays)
- [ ] History page timeline starts from 2003
- [ ] 8 new blog posts added with full content
- [ ] All new posts have Unsplash images

### Architecture Complete
- [ ] BEM naming conventions enforced
- [ ] CSS variable usage at 100%
- [ ] Font family compliance at 100%
- [ ] All guidelines followed
- [ ] Zero build errors
- [ ] Zero TypeScript errors
- [ ] Application renders correctly

### Documentation Complete
- [ ] Master final report created
- [ ] All workflow reports saved
- [ ] Master task list generated
- [ ] Individual task lists created
- [ ] Guidelines updated if needed
- [ ] `/tasks/task-list.md` updated

---

## Troubleshooting

### Issue: "Cannot find duplicate selectors"

**Solution:**
```bash
# Use this command to find duplicates
grep -rh "^\\.\" src/styles/ | sort | uniq -c | sort -rn | awk '$1 > 1'
```

### Issue: "Baseline metrics unclear"

**Solution:**
- Re-run **01-css-inventory-audit.md**
- Use `wc -l` to count lines
- Use `du -h` to measure file sizes
- Document BEFORE starting optimization

### Issue: "Too many files to audit manually"

**Solution:**
- Focus on top 20 largest files first
- Use bash commands to automate detection
- Prioritize templates over components
- Extract base classes incrementally

### Issue: "Visual regressions after optimization"

**Solution:**
- Test each base class individually
- Verify CSS variable values match
- Check BEM class composition in components
- Use browser DevTools to compare computed styles

### Issue: "Circular import dependencies"

**Solution:**
- Map import chain visually
- Extract shared types to separate file
- Use barrel exports (`index.ts`) to break cycles
- Lazy load components where appropriate

---

## Related Documentation

### Core Guidelines
- **[Guidelines.md](/guidelines/Guidelines.md)** — Canonical reference
- **[CSS Guidelines](/guidelines/development/css-guidelines.md)** — Main CSS guide
- **[CSS Memory Optimization](/guidelines/development/css-memory-optimization.md)** — Memory strategies
- **[BEM Naming Conventions](/guidelines/development/bem-naming-conventions.md)** — BEM guide

### System Architecture
- **[WordPress Blocks CSS Architecture](/guidelines/WORDPRESS-BLOCKS-CSS-ARCHITECTURE.md)** — WordPress CSS
- **[Performance Standards](/guidelines/PERFORMANCE-STANDARDS.md)** — Performance targets
- **[Component Overview](/guidelines/overview-components.md)** — Component system
- **[Sitemap Overview](/guidelines/overview-sitemap.md)** — Site structure

### Workflow Documentation
- **[Prompt Generation Guidelines](/guidelines/prompts/prompt-generation-guidelines.md)** — How to create prompts
- **[Reporting Guidelines](/guidelines/reporting/reporting-guidelines.md)** — How to write reports
- **[Planning Guidelines](/guidelines/planning/planning-guidelines.md)** — Project planning

---

## Changelog

### Version 2.0 (March 10, 2026) — UNIFIED ORCHESTRATOR
- **MAJOR:** Combined 4 separate orchestrators into one master system
- Added Workflow 1: CSS Memory Optimization (9 audits)
- Added Workflow 2: File Size Reduction (6 pillars)
- Added Workflow 3: Codebase Cleanup (5 audits)
- Added Workflow 4: Content Data Integration (4 parts)
- Total expected savings: 50-70% overall file size reduction
- Total estimated duration: 18-25 hours
- Comprehensive success metrics and quality checklist
- Master reporting structure
- Consolidated troubleshooting guide

### Version 1.0 (March 5, 2026)
- Initial CSS memory optimization orchestrator
- 9 specialized audit prompts
- Phase-based execution workflow
- Success criteria and metrics

---

**Orchestrator Status:** ✅ Ready to Execute  
**Expected Duration:** 18-25 hours (all 4 workflows)  
**Expected Savings:** 50-70% total file size reduction  
**Questions?** See [/guidelines/README.md](/guidelines/README.md)

---

**Next Step:** Review this orchestrator, then execute workflows sequentially starting with Workflow 1 (CSS Memory Optimization).
