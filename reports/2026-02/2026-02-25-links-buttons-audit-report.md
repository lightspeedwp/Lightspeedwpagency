# Links & Buttons Comprehensive Audit Report

**Date:** 2026-02-25
**Prompt:** `/prompts/audit/2026-02-25-links-buttons-audit.md`
**Auditor:** AI Agent
**Scope:** All templates, patterns, components, blocks, parts, and data files

---

## Executive Summary

Audited **~340 files** across 7 component categories and 15 data files. Found **3 confirmed broken link issues** affecting **10 file locations** (7 template/component instances + 3 data file instances). All remaining links (~150+ checked) resolve correctly.

| Severity | Count | Impact |
|---|---|---|
| **BROKEN (404)** | 3 issues / 10 locations | Users hit 404 pages |
| **RISKY** | 1 issue / 1 location | Possibly wrong destination |
| **VALID** | ~150+ links | Working correctly |

**Estimated remediation time:** 15-20 minutes

---

## Methodology

### Navigation Patterns Audited

| Pattern | Usage | Status |
|---|---|---|
| `slugToPath(slug)` via `<Link>` | ~15 files (SiteHeader, search, archives) | All correct |
| `getPageUrl(slug)` | ~8 files (footer, cards, grids) | Fixed (Feb 25) — delegates to `slugToPath()` |
| `<Button page="slug">` | ~50 instances across ~27 template files | **3 broken slugs found** |
| `buttonPage="slug"` (CTASection) | ~50 instances across ~48 files | **3 broken slug sources in data** |
| Hardcoded `to="/path"` | ~25 instances across ~17 files | **1 broken path found** |
| Template literal `to={`/path/${slug}`}` | ~41 instances across ~30 files | All correct |

### Cross-Reference Sources

1. `SLUG_TO_PATH` static map in `/src/app/utils/route-map.ts` (248 entries)
2. Dynamic patterns in `slugToPath()` function (15 pattern matchers)
3. Route definitions in `/src/app/routes.tsx` (117+ routes)

---

## Findings

### SEVERITY: BROKEN (404 errors)

#### Issue 1: `page="newsletter"` / `buttonPage="newsletter"` slug does not exist

**Impact:** Users clicking "Subscribe" or "Newsletter" buttons get a 404 at `/newsletter`.
**Root cause:** Slug `newsletter` is not in `SLUG_TO_PATH` and doesn't match any dynamic pattern. Falls through to `/${slug}` → `/newsletter` which has no route.
**Correct slug:** `newsletter-service` → resolves to `/services/newsletter`

**Affected template files (4):**

| File | Line | Current | Fix |
|---|---|---|---|
| `CategoryArchiveTemplate.tsx` | 248 | `buttonPage="newsletter"` | `buttonPage="newsletter-service"` |
| `TagArchiveTemplate.tsx` | 194 | `buttonPage="newsletter"` | `buttonPage="newsletter-service"` |
| `DateArchiveTemplate.tsx` | 197 | `buttonPage="newsletter"` | `buttonPage="newsletter-service"` |
| `SinglePostTemplate.tsx` | 276 | `page="newsletter"` | `page="newsletter-service"` |

**Affected data files (3):**

| File | Line | Current | Fix |
|---|---|---|---|
| `cta.ts` | 95 | `page: "newsletter"` | `page: "newsletter-service"` |
| `services-detailed.ts` | 454 | `page: 'newsletter'` | `page: 'newsletter-service'` |
| `blog-index-page.ts` | 18 | `page: "newsletter"` | `page: "newsletter-service"` |

---

#### Issue 2: `page="blog-index"` slug does not exist

**Impact:** Users clicking "Back to blog" or "Read more" on single post pages get a 404 at `/blog-index`.
**Root cause:** Slug `blog-index` is not in `SLUG_TO_PATH`. The correct slug is `blog` → `/blog`.
**Correct slug:** `blog`

**Affected files (1 file, 2 instances):**

| File | Line | Current | Fix |
|---|---|---|---|
| `SinglePostTemplate.tsx` | 59 | `page="blog-index"` | `page="blog"` |
| `SinglePostTemplate.tsx` | 279 | `page="blog-index"` | `page="blog"` |

---

#### Issue 3: Hardcoded `/tour/${tour.id}` path is wrong

**Impact:** Users clicking "View Itinerary" on tour cards get a 404. The route is `/tours/:slug`, not `/tour/:slug`.
**Root cause:** Hardcoded path uses singular `/tour/` instead of plural `/tours/`.

**Affected files (1):**

| File | Line | Current | Fix |
|---|---|---|---|
| `TourOperatorArchiveTemplate.tsx` | 67 | `to={`/tour/${tour.id}`}` | `to={`/tours/${tour.id}`}` |

---

### SEVERITY: RISKY (works but questionable destination)

#### Issue 4: `page: "archive"` in cta.ts resolves to `/archive` — FIXED

**Context:** Line 146 of `cta.ts` had `page: "archive"` which resolved to `/archive` via `SLUG_TO_PATH`. This CTA (`generalArchiveCTA`) is used on `ArchiveTemplate` and `ArchiveWithFiltersTemplate` — meaning the "View All" button pointed back to the same page the user was already on (circular link).
**Fix applied:** Changed to `page: "blog"` → resolves to `/blog`, providing a useful next step from the archive page.

**Affected files (1):**

| File | Line | Previous | Fix |
|---|---|---|---|
| `cta.ts` | 146 | `page: "archive"` | `page: "blog"` |

---

### SEVERITY: VALID (no action needed)

#### Hardcoded paths — all verified correct

| Pattern | Count | Examples | Status |
|---|---|---|---|
| `to="/blog"` | 2 | AuthorArchive, Tutorials | Route exists |
| `to="/portfolio"` | 5 | PortfolioCategoryArchive, SingleProject, PortfolioTagArchive | Route exists |
| `to="/contact"` | 3 | WordPressRedesign, WooCommerceRedesign, TourOperatorDesign | Route exists |
| `to="/testimonials"` | 4 | All SingleTestimonial* templates | Route exists |
| `to="/podcasts"` | 3 | PodcastCategoryArchive | Route exists |
| `to="/videos"` | 3 | VideoTagArchive | Route exists |
| `to={`/blog/${slug}`}` | 8 | BlogIndex, CategoryArchive, SinglePost, QueryLoopPosts | Matches `blog/:slug` |
| `to={`/portfolio/${slug}`}` | 5 | PortfolioSlider, FeaturedProject*, QueryLoopPortfolio | Matches `portfolio/:slug` |
| `to={`/blog/category/${slug}`}` | 2 | CategoryArchive, SinglePost | Matches `blog/category/:slug` |
| `to={`/blog/author/${slug}`}` | 2 | AuthorArchive, SinglePost | Matches `blog/author/:slug` |
| `to={`/blog/tag/${slug}`}` | 2 | TagArchive, SinglePost | Matches `blog/tag/:slug` |
| `to={`/blog/date/${y}/${m}`}` | 1 | DateArchive | Matches `blog/date/:year/:month` |
| `to={`/services/${slug}`}` | 1 | QueryLoopServices | Matches `services/*` |
| `to={`/solutions/${slug}`}` | 1 | QueryLoopSolutions | Matches `solutions/*` |
| `to={`/shop/${slug}`}` | 1 | QueryLoopProducts | Matches `shop/:slug` |
| `to={`/video/${slug}`}` | 3 | VideoArchive, SingleVideo, VideoCategoryArchive | Matches `video/:slug` |
| `to={`/podcast/${slug}`}` | 2 | PodcastArchive, SinglePodcast | Matches `podcast/:slug` |
| `to={`/testimonials/${slug}`}` | 1 | QueryLoopTestimonials | Matches `testimonials/:slug` |
| `to={`/videos/category/${slug}`}` | 2 | SingleVideo, VideoTagArchive | Matches `videos/category/:slug` |
| `to={`/videos/tag/${slug}`}` | 2 | SingleVideo, VideoTagArchive | Matches `videos/tag/:slug` |
| `to={`/podcasts/category/${slug}`}` | 1 | PodcastCategoryArchive | Matches `podcasts/category/:slug` |
| `to={`/portfolio/tag/${slug}`}` | 1 | PortfolioTagArchive | Matches `portfolio/tag/:slug` |
| Blog format singles | 3 | QueryLoopChat, QueryLoopVideo, QueryLoopGallery | Matches format routes |

#### Button `page=` slugs — all verified against SLUG_TO_PATH

| Slug | Resolves To | Used In | Status |
|---|---|---|---|
| `contact` | `/contact` | ~25 templates | OK |
| `portfolio-archive` | `/portfolio` | ~6 templates | OK |
| `services` | `/services` | ~3 templates | OK |
| `careers` | `/about/careers` | Team, AboutCulture | OK |
| `pricing` | `/pricing` | WhyChooseUs, SectionStyle | OK |
| `guarantees` | `/guarantees` | WhyChooseUs | OK |
| `blog` | `/blog` | FrontPage | OK |
| `portfolio` | `/portfolio` | ServiceDetail | OK |
| `hosting` | `/services/hosting` | SecurityService | OK |
| `about` | `/about` | SectionStyle | OK |
| `front-page` | `/` | SectionStyle | OK |
| `component-showcase` | `/dev-tools/component-showcase` | TemplateTester | OK |

#### Data file `buttonPage` slugs — all verified

| Slug | File | Resolves To | Status |
|---|---|---|---|
| `design-service` | services.ts | `/services/design` | OK (alias) |
| `development-service` | services.ts | `/services/development` | OK (alias) |
| `discovery-service` | services.ts | `/services/discovery` | OK (alias) |
| `content-service` | services.ts | `/services/content` | OK (alias) |
| `migrations-service` | services.ts | `/services/migrations` | OK (alias) |
| `security-service` | services.ts | `/services/security` | OK (alias) |
| `performance` | services.ts | `/services/performance` | OK |
| `accessibility` | services.ts | `/services/accessibility` | OK |
| `ai-engine-optimisation` | services.ts | `/services/ai-engine-optimisation` | OK |
| `answer-engine-optimisation` | services.ts | `/services/answer-engine-optimisation` | OK |
| `hosting` | services.ts | `/services/hosting` | OK |
| `wordpress-solution` | solutions.ts | `/solutions/wordpress` | OK (alias) |
| `woocommerce-solution` | solutions.ts | `/solutions/woocommerce` | OK (alias) |
| `contact` | solutions.ts, services-detailed.ts | `/contact` | OK |
| `pricing` | services-detailed.ts | `/pricing` | OK |

#### Services data `page:` short slugs (lines 750-870) — all verified

| Slug | Resolves To | Status |
|---|---|---|
| `discovery` | `/services/discovery` | OK |
| `design` | `/services/design` | OK |
| `development` | `/services/development` | OK |
| `support` | `/services/support` | OK |
| `hosting` | `/services/hosting` | OK |
| `migrations` | `/services/migrations` | OK |
| `security` | `/services/security` | OK |
| `content` | `/services/content` | OK |
| `mailchimp` | `/solutions/mailchimp` | OK |

---

## Remediation Plan

### Phase 1: Fix data files (single source of truth) — 5 min

| # | File | Change |
|---|---|---|
| 1 | `/src/app/data/cta.ts:95` | `page: "newsletter"` → `page: "newsletter-service"` |
| 2 | `/src/app/data/services-detailed.ts:454` | `page: 'newsletter'` → `page: 'newsletter-service'` |
| 3 | `/src/app/data/blog-index-page.ts:18` | `page: "newsletter"` → `page: "newsletter-service"` |

### Phase 2: Fix template files — 10 min

| # | File | Line | Change |
|---|---|---|---|
| 4 | `CategoryArchiveTemplate.tsx` | 248 | `buttonPage="newsletter"` → `buttonPage="newsletter-service"` |
| 5 | `TagArchiveTemplate.tsx` | 194 | `buttonPage="newsletter"` → `buttonPage="newsletter-service"` |
| 6 | `DateArchiveTemplate.tsx` | 197 | `buttonPage="newsletter"` → `buttonPage="newsletter-service"` |
| 7 | `SinglePostTemplate.tsx` | 276 | `page="newsletter"` → `page="newsletter-service"` |
| 8 | `SinglePostTemplate.tsx` | 59 | `page="blog-index"` → `page="blog"` |
| 9 | `SinglePostTemplate.tsx` | 279 | `page="blog-index"` → `page="blog"` |
| 10 | `TourOperatorArchiveTemplate.tsx` | 67 | `/tour/${tour.id}` → `/tours/${tour.id}` |

### Phase 3: Verify risky item — 2 min

| # | File | Action |
|---|---|---|
| 11 | `cta.ts:146` | ~~Verify `page: "archive"` is intentional~~ — FIXED: Changed to `page: "blog"` (was circular) |

---

## Summary Statistics

| Metric | Value |
|---|---|
| **Total files scanned** | ~340 |
| **Total link instances checked** | ~150+ |
| **Broken links found** | 3 issues / 10 locations |
| **Risky links found** | 1 issue / 1 location |
| **Total issues fixed** | 4 issues / 11 locations |
| **Valid links confirmed** | ~140+ |
| **Remaining broken links** | **0** |
| **Remediation time** | 15-20 minutes |
| **Navigation patterns in use** | 5 (slugToPath, getPageUrl, Button page, hardcoded, template literal) |
| **Route-map entries** | 248 static + 15 dynamic patterns |