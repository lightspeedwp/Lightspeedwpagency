# Phase 2: IA and Navigation — Kickoff Report

**Date:** February 27, 2026  
**Session:** Phase 2 Strategy Evolution Kickoff  
**Status:** 🚀 READY TO START  

---

## Executive Summary

Phase 1 Remediation is **100% COMPLETE** (all 10 tasks finished). We are now ready to begin **Phase 2: IA and Navigation Restructure**, which focuses on renaming key sections (/portfolio → /work, /blog → /insights) and consolidating the 22 service pages into ~10 focused offerings.

**Phase 1 Achievements:**
- ✅ Systems Hub created (/systems with 5 pillar pages)
- ✅ Primary navigation restructured (Work/Solutions/Systems/Insights/About/Contact)
- ✅ Footer restructured (Company/Systems/Proof/Contact)
- ✅ CTAs standardized ("Request a Systems Audit")
- ✅ Code splitting implemented (75 templates lazy-loaded)
- ✅ DefinitionBlock pattern created
- ✅ Three-tier model data file created
- ✅ Hero messaging updated (ServicesLanding + Contact)

**Phase 2 Focus:**
- Portfolio → Work rename
- Blog → Insights rename
- Service page consolidation (22 → ~10)
- URL redirect mapping
- Sub-category creation

---

## Phase 2 Overview

**Estimated Effort:** 24-34 hours  
**Dependencies:** Phase 1 (✅ COMPLETE)  
**Priority:** Critical (IA changes affect SEO, URLs, internal links)  

**Goals:**
1. **Align taxonomy with brand positioning** (Work > Portfolio, Insights > Blog)
2. **Reduce service page complexity** (22 pages is overwhelming)
3. **Create clear content categories** (Insights sub-categories)
4. **Maintain SEO value** (301 redirects for all old URLs)
5. **Improve user navigation** (clearer IA, fewer choices)

---

## Phase 2 Tasks Breakdown

### Critical Tasks (Must Complete)

#### **Task 2.1: Rename /portfolio → /work**
**Effort:** 4-6 hours  
**Files Affected:** ~30-40 files

**What to Update:**
1. **Routes** (`/src/app/routes.tsx`)
   - Change `/portfolio` path to `/work`
   - Change `/portfolio/:slug` to `/work/:slug`
   - Update all portfolio-related route imports

2. **Navigation** (`/src/app/data/pages.ts`)
   - Update mainNavigation "Portfolio" → "Work"
   - Update URL from `/portfolio` to `/work`

3. **Data Files**
   - `/src/app/data/portfolio.ts` → Keep filename (data structure)
   - Update all path references internally

4. **Route Map** (`/src/app/utils/route-map.ts`)
   - Update slug mappings: `'work': '/work'`
   - Update portfolio slugs to work slugs

5. **Breadcrumbs**
   - Update all breadcrumb references from "Portfolio" → "Work"

6. **Internal Links**
   - Search all templates for `/portfolio` and update to `/work`
   - Update footer links
   - Update CTA links

**Testing:**
- [ ] Navigate to `/work` (should render archive)
- [ ] Navigate to `/work/cafe-europa` (should render single project)
- [ ] Check all breadcrumbs show "Work" not "Portfolio"
- [ ] Verify all internal links point to `/work`
- [ ] Verify navigation shows "Work"

**Redirect Mapping:**
```
/portfolio → /work (301)
/portfolio/:slug → /work/:slug (301)
```

---

#### **Task 2.2: Rename /blog → /insights**
**Effort:** 4-6 hours  
**Files Affected:** ~35-45 files

**What to Update:**
1. **Routes** (`/src/app/routes.tsx`)
   - Change `/blog` path to `/insights`
   - Change all blog sub-routes to insights sub-routes
   - Update BlogIndexTemplate → InsightsIndexTemplate (optional rename)

2. **Navigation** (`/src/app/data/pages.ts`)
   - Update mainNavigation "Blog" → "Insights"
   - Update URL from `/blog` to `/insights`

3. **Data Files**
   - `/src/app/data/posts.ts` → Keep filename (data structure)
   - Update all path references internally
   - Update category URLs: `/blog/category/*` → `/insights/category/*`
   - Update author URLs: `/blog/author/*` → `/insights/author/*`
   - Update tag URLs: `/blog/tag/*` → `/insights/tag/*`

4. **Route Map** (`/src/app/utils/route-map.ts`)
   - Update slug mappings: `'insights': '/insights'`
   - Update all blog-related slugs

5. **Breadcrumbs**
   - Update all breadcrumb references from "Blog" → "Insights"

6. **Internal Links**
   - Search all templates for `/blog` and update to `/insights`
   - Update footer links
   - Update CTA links
   - Update newsletter signup references

**Testing:**
- [ ] Navigate to `/insights` (should render blog index)
- [ ] Navigate to `/insights/wordpress-block-themes` (should render single post)
- [ ] Navigate to `/insights/category/wordpress` (should render category archive)
- [ ] Navigate to `/insights/author/john-doe` (should render author archive)
- [ ] Navigate to `/insights/tag/performance` (should render tag archive)
- [ ] Check all breadcrumbs show "Insights" not "Blog"
- [ ] Verify all internal links point to `/insights`
- [ ] Verify navigation shows "Insights"

**Redirect Mapping:**
```
/blog → /insights (301)
/blog/:slug → /insights/:slug (301)
/blog/category/:slug → /insights/category/:slug (301)
/blog/author/:slug → /insights/author/:slug (301)
/blog/tag/:slug → /insights/tag/:slug (301)
```

---

#### **Task 2.3: Consolidate 22 service pages → ~10**
**Effort:** 12-16 hours  
**Files Affected:** ~60-80 files (templates, data, routes)

**Current Services (22 total):**

**Ignite (3):**
1. Discovery
2. Content Audit
3. Content Strategy

**Create (5):**
4. Design
5. Figma Prototyping
6. Design Systems
7. Content Collection
8. Email Marketing

**Build (3):**
9. Development
10. Security
11. Migrations

**Launch (2):**
12. Hosting
13. Training

**Grow (5):**
14. Performance
15. SEO
16. Analytics
17. Accessibility
18. Support

**Evolve (2):**
19. AI Engine Optimisation
20. Answer Engine Optimisation

**Uncategorized (2):**
21. Newsletter Service
22. AI Integration (if exists)

---

**Proposed Consolidated Services (~10):**

**1. Strategy & Discovery**
- **Merges:** Discovery + Content Audit + Content Strategy
- **New Route:** `/services/strategy`
- **Why:** All pre-project planning services
- **Template:** StrategyServiceTemplate (new)

**2. Design & Prototyping**
- **Merges:** Design + Figma Prototyping + Design Systems
- **New Route:** `/services/design`
- **Why:** All design services under one roof
- **Template:** DesignServiceTemplate (update existing)

**3. Content Operations**
- **Merges:** Content Collection + Email Marketing + Newsletter Service
- **New Route:** `/services/content`
- **Why:** All content creation and distribution
- **Template:** ContentServiceTemplate (update existing)

**4. Development & Migration**
- **Merges:** Development + Migrations
- **New Route:** `/services/development`
- **Why:** Build and migration are closely related
- **Template:** DevelopmentServiceTemplate (update existing)

**5. Security & Performance**
- **Merges:** Security + Performance
- **New Route:** `/services/security-performance`
- **Why:** Both are technical optimization services
- **Template:** SecurityPerformanceServiceTemplate (new)

**6. SEO & AI Search**
- **Merges:** SEO + AI Engine + Answer Engine
- **New Route:** `/services/seo-ai`
- **Why:** All search optimization under one umbrella
- **Template:** SEOAIServiceTemplate (new)

**7. Analytics & Insights**
- **Keep:** Analytics (already created)
- **Route:** `/services/analytics` (existing)
- **Template:** AnalyticsServiceTemplate (existing)

**8. Accessibility Compliance**
- **Keep:** Accessibility (standalone service)
- **Route:** `/services/accessibility` (existing)
- **Template:** AccessibilityServiceTemplate (existing)

**9. Hosting & Infrastructure**
- **Keep:** Hosting (standalone service)
- **Route:** `/services/hosting` (existing)
- **Template:** HostingTemplate (existing)

**10. Support & Training**
- **Merges:** Support + Training
- **New Route:** `/services/support`
- **Why:** Ongoing support includes training
- **Template:** SupportServiceTemplate (update existing)

---

**Migration Path:**

**Step 1: Create New Consolidated Templates**
- [ ] StrategyServiceTemplate (Discovery + Content Audit + Content Strategy)
- [ ] SecurityPerformanceServiceTemplate (Security + Performance)
- [ ] SEOAIServiceTemplate (SEO + AI Engine + Answer Engine)

**Step 2: Update Existing Templates**
- [ ] DesignServiceTemplate (add Figma Prototyping + Design Systems content)
- [ ] ContentServiceTemplate (add Email Marketing + Newsletter content)
- [ ] DevelopmentServiceTemplate (add Migrations content)
- [ ] SupportServiceTemplate (add Training content)

**Step 3: Update Routes**
- [ ] Remove old service routes from routes.tsx
- [ ] Add new consolidated routes
- [ ] Update route-map.ts

**Step 4: Update Data Files**
- [ ] Merge service data into consolidated files
- [ ] Update journey-stage-pages.ts
- [ ] Update solutions data (which services are included)

**Step 5: Update Navigation**
- [ ] Update Services menu with new structure
- [ ] Update footer Services column
- [ ] Update related services grids

**Step 6: Update Internal Links**
- [ ] Search all templates for old service URLs
- [ ] Update CTA links
- [ ] Update solution package references

**Redirect Mapping:**
```
/services/discovery → /services/strategy (301)
/services/content/audit → /services/strategy (301)
/services/content/strategy → /services/strategy (301)

/services/figma-prototyping → /services/design (301)
/services/design-systems → /services/design (301)

/services/content/collection → /services/content (301)
/services/email-marketing → /services/content (301)
/services/newsletter → /services/content (301)

/services/migrations → /services/development (301)

/services/security → /services/security-performance (301)
/services/performance → /services/security-performance (301)

/services/seo → /services/seo-ai (301)
/services/ai-engine-optimisation → /services/seo-ai (301)
/services/answer-engine-optimisation → /services/seo-ai (301)

/services/training → /services/support (301)
```

---

### High Priority Tasks (Should Complete)

#### **Task 2.4: Create URL Redirect Map Document**
**Effort:** 2-3 hours

Create comprehensive redirect map for WordPress implementation:

**File:** `/docs/url-redirect-map.md`

**Sections:**
1. Portfolio → Work redirects
2. Blog → Insights redirects
3. Service consolidation redirects
4. Journey stage page redirects (if phasing out)
5. .htaccess syntax examples
6. Redirection plugin configuration

---

#### **Task 2.5: Create Insights Sub-Categories**
**Effort:** 4-6 hours

**Proposed Categories:**
1. **Research** — Long-form analysis, industry reports
2. **Build Notes** — Technical tutorials, code snippets
3. **Editorial Systems** — Content strategy, editorial workflows
4. **AI Governance** — AI integration, ethics, best practices

**Routes:**
- `/insights/research`
- `/insights/build-notes`
- `/insights/editorial-systems`
- `/insights/ai-governance`

**Implementation:**
- [ ] Create category archive templates
- [ ] Update posts.ts with category data
- [ ] Create category navigation
- [ ] Update breadcrumbs

---

#### **Task 2.6: Create Work Sub-Sections**
**Effort:** 3-5 hours

**Proposed Sub-Sections:**
1. **Case Studies** — Main archive (existing)
2. **Patterns** — Design pattern library
3. **Playbooks** — Process documentation
4. **Results** — Metrics and outcomes

**Routes:**
- `/work` (main archive)
- `/work/patterns` (optional)
- `/work/playbooks` (optional)
- `/work/results` (optional)

---

#### **Task 2.7: Update All Internal Link References**
**Effort:** 4-6 hours

**Comprehensive Link Audit:**
- [ ] Search all templates for `/portfolio`
- [ ] Search all templates for `/blog`
- [ ] Search all templates for old service URLs
- [ ] Update data files (pages.ts, portfolio.ts, posts.ts, etc.)
- [ ] Update CTA data files
- [ ] Update breadcrumb logic
- [ ] Update sitemap

**Tools:**
- `file_search` for finding all references
- Batch search and replace

---

### Medium Priority Tasks (Nice to Have)

#### **Task 2.8: Phase Out Journey Stage Pages**
**Effort:** 2-3 hours

**Current Journey Stage Pages (6):**
- /services/ignite
- /services/create
- /services/build
- /services/launch
- /services/grow
- /services/evolve

**Options:**
1. **Keep as-is** (educational content about phases)
2. **Redirect to /services** (remove journey concept)
3. **Integrate into service pages** (phase badge on each service)

**Recommendation:** Keep for now, revisit after service consolidation

---

#### **Task 2.9: Review AI Sub-Pages Placement**
**Effort:** 1-2 hours

**Current AI Pages:**
- /services/ai-engine-optimisation
- /services/answer-engine-optimisation
- /systems/ai-search-readiness

**Question:** Should AI pages live under /solutions/ or /systems/?

**Recommendation:** Keep AI services under /services/, keep AI system under /systems/

---

#### **Task 2.10: Clean Up Dev-Tools Routes**
**Effort:** 1-2 hours

**Current Dev-Tools (20 routes):**
- /dev-tools/demo-*
- /dev-tools/page-*
- /dev-tools/test-*

**Options:**
1. Add `noindex` meta tags
2. Exclude from sitemap
3. Remove from production build
4. Gate behind environment variable

**Recommendation:** Add noindex + exclude from sitemap

---

## Recommended Approach

### Week 1: URL Renames (Tasks 2.1, 2.2, 2.4)

**Day 1-2: Portfolio → Work**
- Update routes, navigation, data files
- Test all portfolio pages
- Document redirects

**Day 3-4: Blog → Insights**
- Update routes, navigation, data files
- Test all blog pages (index, single, category, author, tag)
- Document redirects

**Day 5: Create Redirect Map**
- Comprehensive redirect documentation
- .htaccess syntax
- WordPress plugin configuration

---

### Week 2: Service Consolidation (Task 2.3)

**Day 1-2: Create New Templates**
- StrategyServiceTemplate
- SecurityPerformanceServiceTemplate
- SEOAIServiceTemplate

**Day 3-4: Update Existing Templates**
- DesignServiceTemplate (add prototyping + design systems)
- ContentServiceTemplate (add email + newsletter)
- DevelopmentServiceTemplate (add migrations)
- SupportServiceTemplate (add training)

**Day 5: Update Routes & Data**
- Update routes.tsx
- Update journey-stage-pages.ts
- Update solutions data
- Test all service pages

---

### Week 3: Sub-Categories & Cleanup (Tasks 2.5, 2.6, 2.7)

**Day 1-2: Insights Sub-Categories**
- Create category archive templates
- Update posts data
- Create category navigation

**Day 3: Work Sub-Sections**
- Create patterns/playbooks/results sections (optional)

**Day 4-5: Internal Link Audit**
- Search and replace all old URLs
- Update data files
- Final testing

---

## Testing Checklist

### After Task 2.1 (Portfolio → Work)
- [ ] `/work` renders correctly
- [ ] `/work/:slug` renders correctly
- [ ] Navigation shows "Work"
- [ ] Breadcrumbs show "Work"
- [ ] Footer links to `/work`
- [ ] All internal links updated

### After Task 2.2 (Blog → Insights)
- [ ] `/insights` renders correctly
- [ ] `/insights/:slug` renders correctly
- [ ] `/insights/category/:slug` renders correctly
- [ ] `/insights/author/:slug` renders correctly
- [ ] `/insights/tag/:slug` renders correctly
- [ ] Navigation shows "Insights"
- [ ] Breadcrumbs show "Insights"
- [ ] Footer links to `/insights`
- [ ] All internal links updated

### After Task 2.3 (Service Consolidation)
- [ ] All 10 consolidated service pages render
- [ ] Journey phase pages updated with new services
- [ ] Related services grids updated
- [ ] Solutions packages reference correct services
- [ ] Navigation updated
- [ ] Footer updated
- [ ] All redirects documented

---

## Risk Assessment

### High Risk
- **Broken internal links** — Mitigate with comprehensive search/replace
- **SEO impact** — Mitigate with 301 redirects
- **User confusion** — Mitigate with clear messaging and redirects

### Medium Risk
- **Data inconsistencies** — Mitigate with thorough testing
- **Breadcrumb errors** — Mitigate with breadcrumb logic updates
- **Journey phase confusion** — Mitigate with phase indicator updates

### Low Risk
- **Dev-tools routes** — Already excluded from production
- **Template naming** — Internal only, no user impact

---

## Success Criteria

**Phase 2 is complete when:**
- [ ] `/portfolio` → `/work` rename complete (all routes, links, data)
- [ ] `/blog` → `/insights` rename complete (all routes, links, data)
- [ ] Service pages consolidated from 22 → ~10
- [ ] URL redirect map document created
- [ ] All internal links updated
- [ ] Insights sub-categories created
- [ ] Work sub-sections created
- [ ] All tests passing
- [ ] Zero broken links
- [ ] SEO redirects documented

---

## Next Steps

**Ready to start Phase 2?**

**Option 1: Start with Task 2.1 (Portfolio → Work)**
- Lowest risk
- Clean, isolated change
- Tests the rename workflow

**Option 2: Start with Task 2.2 (Blog → Insights)**
- More complex (category/author/tag routes)
- Higher impact (more content)

**Option 3: Start with Task 2.3 (Service Consolidation)**
- Highest impact
- Most complex
- Requires careful planning

**Recommendation:** Start with Task 2.1 (Portfolio → Work) to validate the rename workflow, then proceed to Task 2.2, then Task 2.3.

---

**Ready to proceed?** Let me know which task to start with!

---

**Report generated:** February 27, 2026  
**Reporter:** AI Assistant (Claude)  
**Project:** LSX Design — Funky Redesign v3.0  
**Phase 1 Status:** ✅ 100% COMPLETE  
**Phase 2 Status:** 🚀 READY TO START
