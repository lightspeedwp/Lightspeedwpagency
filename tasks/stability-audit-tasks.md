# Stability Audit Tasks

**Created:** March 4, 2026
**Source:** Stability Audit Orchestrator v1.0
**Report:** `/reports/2026-03/stability-audit/full-stability-audit-march-4.md`
**Status:** 89% COMPLETE (41/46 tasks)

---

## Priority 1 — CRITICAL (36 Stale Lucide Imports)

### Task 1.1: Migrate Data Files from Lucide to Phosphor (10 files)
- [x] `cta.ts` — Replace Mail, Calendar, ArrowRight, Download, MessageSquare, Search, ShoppingCart
- [x] `process.ts` — Replace Search, PenTool, Code, CheckCircle, Rocket, HeartHandshake
- [x] `hosting.ts` — Replace Server, Shield, Zap, Clock, Database, Cloud
- [x] `solutions.ts` — Replace Palette, Code, ShoppingCart + remove `LucideIcon` type
- [x] `services-page.ts` — Replace Users, TrendingUp, Award, Heart
- [x] `contact-page.ts` — Replace Mail, Phone, MapPin, Clock, MessageSquare, Headphones, Award, Users
- [x] `about-page.ts` — Replace multiple icons + CheckCircle
- [x] `portfolio-archive-page.ts` — Replace Briefcase
- [x] `team-page.ts` — Replace Users
- [x] `blog-index-page.ts` — Replace BookOpen

### Task 1.2: Migrate User-Facing Templates from Lucide to Phosphor (10 files)
- [x] `SingleVideoTemplate.tsx` — Clock, Calendar, Eye, Tag, Play
- [x] `VideoCategoryArchiveTemplate.tsx` — Play, Clock, Eye, Calendar
- [x] `VideoTagArchiveTemplate.tsx` — Play, Clock, Eye, Calendar
- [x] `PodcastArchiveTemplate.tsx` — Headphones, Clock, Calendar
- [x] `SinglePodcastTemplate.tsx` — Clock, Calendar, Headphones, ExternalLink
- [x] `PodcastCategoryArchiveTemplate.tsx` — Headphones, Clock, Calendar
- [x] `SingleProjectTemplate.tsx` — ArrowLeft, ArrowRight, ExternalLink, Calendar, Layers, Tag
- [x] `SolutionsTemplate.tsx` — 15+ icons + LucideIcon type
- [x] `TutorialsTemplate.tsx` — Clock, BookOpen, ArrowRight, SearchX
- [x] `DesignTokensReferenceTemplate.tsx` — Copy, Check, Palette, Type, RulerIcon, BoxSelect, Circle, Layers, Zap, Eye

### Task 1.3: Migrate Testimonial Archive Templates from Lucide to Phosphor (2 files)
- [x] `testimonials/TestimonialArchiveTemplate.tsx` — Star, Mic, Video, Images, Quote, Users
- [x] `testimonials/SingleTestimonialTemplate.tsx` — Star, Calendar, Briefcase, Tag, ArrowLeft

---

## Priority 2 — HIGH (Dev Tools Lucide + File Splitting)

### Task 2.1: Migrate Dev Tools Templates from Lucide to Phosphor (14 files)
- [x] `TemplateTester.tsx` — Large icon import block
- [x] `ComponentShowcase.tsx` — Large icon import block
- [x] `BlockDocumentation.tsx` — 7 icons
- [x] `ComponentAPI.tsx` — FileCode
- [x] `DesignBlocksShowcase.tsx` — 6 icons
- [x] `ButtonShowcase.tsx` — 7 icons
- [x] `HeaderFooterComparison.tsx` — Layout, PanelTop, PanelBottom
- [x] `IconLibrary.tsx` — Wildcard `* as LucideIcons` + Search, Check (special case: references Lucide library)
- [x] `SectionPresetsShowcase.tsx` — Layers
- [x] `ThemeBlocksShowcase.tsx` — Code, Navigation, Image, Link, List
- [x] `WordPressBlocksProofOfConcept.tsx` — Home, ArrowRight, Check, Star, Award, Shield
- [x] `LivePreview.tsx` — Eye
- [x] `DesignPlaygroundTemplate.tsx` — 8 icons
- [x] `DeploymentReadinessTemplate.tsx` — 15+ icons

### Task 2.2: Split SnippetGeneratorTemplate.tsx (1,897 lines)
- [x] N/A — File does not exist (already merged/renamed). Task skipped.

### Task 2.3: Split site-pages.ts (1,074 lines)
- [x] Split into `/src/app/data/site-pages/` folder (types.ts, pages.ts, navigation.ts, helpers.ts)
- [x] Created barrel re-export in `site-pages/index.ts`; original file is compatibility shim

---

## Priority 3 — MEDIUM (File Splitting + Cleanup)

### Task 3.1: Split Large Templates
- [ ] `DocsGeneratorTemplate.tsx` (991 lines) — Extract into sub-components
- [x] `DesignTokensReferenceTemplate.tsx` — Extracted 229 lines token data to `/src/app/data/design-tokens-reference.ts`

### Task 3.2: Split Large Data Files
- [x] `ai-integrations-page.ts` (971 lines) — ✅ COMPLETE (March 4, 2026): Replaced with 19-line re-export shim. Split files already existed in `/data/ai-integrations/` (6 files, 1,178 lines total). All template importers work unchanged.

### Task 3.3: Filesystem Cleanup
- [ ] `/ATTRIBUTIONS.md` — Protected by system, cannot delete
- [x] Deleted `/reports/2026-02-23-complete-codebase-audit.md` and `/reports/2026-03-02-full-system-audit.md` (misplaced root-level reports)

---

## Priority 4 — LOW (Guidelines Creation)

### Task 4.1: Create Missing Guidelines
- [ ] `/guidelines/data-structure/data-files.md` — Data file size limits, splitting patterns, naming conventions
- [ ] `/guidelines/build/build-optimization.md` — Template size limits, code splitting, lazy loading
- [ ] `/guidelines/site-structure/routes.md` — Complete route table, URL generation, adding new routes

### Task 4.2: Types System Improvement
- [ ] Evaluate creating `/src/app/types/index.ts` barrel file for shared interfaces
- [ ] Document type system approach in guidelines

---

## Completion Tracking

| Priority | Total Tasks | Completed | Percentage |
|----------|------------|-----------|------------|
| Priority 1 | 22 | 22 | 100% |
| Priority 2 | 16 | 16 | 100% |
| Priority 3 | 4 | 3 | 75% |
| Priority 4 | 4 | 0 | 0% |
| **Total** | **46** | **41** | **89.13%** |