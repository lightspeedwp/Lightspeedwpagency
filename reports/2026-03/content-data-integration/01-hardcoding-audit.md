# Workflow 4, Part A: Hardcoding Audit

**Date:** March 13, 2026  
**Status:** AUDIT COMPLETE  
**Scope:** All `.tsx` files in `/src/app/components/templates/`, `/patterns/`, `/parts/`

---

## Executive Summary

Scanned 130+ template files, 50+ pattern files, and 10+ template part files for hardcoded content that should be sourced from centralized data files in `/src/app/data/`.

**Results:**
- **34 template files** contain hardcoded content arrays inside component bodies
- **4 data files** contain incorrect founding year (should be 2003, not 2010/2014)
- **1 pattern file** has a UI mapping array (acceptable, not content)
- **0 template parts** have hardcoded content (clean)

**Severity:** Medium — content works but violates single-source-of-truth principle. Content editors cannot change service benefits, package details, or "Why" page content without editing component code.

---

## Finding 1: Hardcoded Content Arrays in Templates (34 files)

### 1.1 Service Templates — `benefits[]` arrays (16 files)

These templates define inline benefits/features arrays instead of importing from service data files.

| # | File | Array | Lines | Data File Exists? |
|---|---|---|---|---|
| 1 | `SEOServiceTemplate.tsx` | `benefits[]` | ~30 | Yes (`seo.ts` or `services/seo.ts`) |
| 2 | `AnalyticsServiceTemplate.tsx` | `benefits[]` | ~30 | Partial |
| 3 | `AIEngineServiceTemplate.tsx` | `benefits[]` | ~30 | Partial |
| 4 | `AnswerEngineServiceTemplate.tsx` | `benefits[]` | ~30 | Partial |
| 5 | `AccessibilityServiceTemplate.tsx` | `benefits[]` | ~30 | Partial |
| 6 | `MigrationsServiceTemplate.tsx` | `benefits[]` | ~30 | Partial |
| 7 | `SupportServiceTemplate.tsx` | `benefits[]` + `plans[]` | ~60 | Partial |
| 8 | `ContentStrategyServiceTemplate.tsx` | `benefits[]` | ~20 | Partial |
| 9 | `ContentCollectionServiceTemplate.tsx` | `benefits[]` | ~20 | Partial |
| 10 | `ContentAuditServiceTemplate.tsx` | `benefits[]` | ~20 | Partial |
| 11 | `NewsletterServiceTemplate.tsx` | `benefits[]` | ~20 | Partial |
| 12 | `EmailMarketingServiceTemplate.tsx` | `benefits[]` | ~20 | Partial |
| 13 | `FigmaPrototypingServiceTemplate.tsx` | `benefits[]` | ~20 | No |
| 14 | `DesignSystemsServiceTemplate.tsx` | `benefits[]` | ~20 | Partial |
| 15 | `ContentCreationServiceTemplate.tsx` | `benefits[]` | ~20 | Partial |
| 16 | `ContentCopywritingServiceTemplate.tsx` | `benefits[]` | ~20 | Partial |

**Estimated inline lines:** ~420 lines

### 1.2 Content Service Templates — Additional (2 files)

| # | File | Array | Lines |
|---|---|---|---|
| 17 | `ContentSEOServiceTemplate.tsx` | `benefits[]` | ~20 |
| 18 | `ContentGovernanceServiceTemplate.tsx` | `benefits[]` | ~20 |

### 1.3 "Why" Landing Templates — `features[]` + `testimonials[]` (5 files)

Each "Why" template has TWO hardcoded arrays:

| # | File | Arrays | Lines |
|---|---|---|---|
| 19 | `WhyWooTemplate.tsx` | `features[]` + `testimonials[]` | ~60 |
| 20 | `WhyWPTemplate.tsx` | `features[]` + `testimonials[]` | ~60 |
| 21 | `WhyMailchimpTemplate.tsx` | `features[]` + `testimonials[]` | ~60 |
| 22 | `WhyLSXTemplate.tsx` | `features[]` + `testimonials[]` | ~60 |
| 23 | `WhyLightSpeedTemplate.tsx` | `features[]` + `testimonials[]` | ~60 |

**Estimated inline lines:** ~300 lines

### 1.4 Landing/Hub Templates — `stats[]` arrays (2 files)

| # | File | Array | Lines |
|---|---|---|---|
| 24 | `AIServicesLandingTemplate.tsx` | `stats[]` | ~10 |
| 25 | `InsightsLandingTemplate.tsx` | `stats[]` | ~10 |

### 1.5 About Templates — `steps[]` / `milestones[]` (2 files)

| # | File | Array | Lines |
|---|---|---|---|
| 26 | `AboutProcessTemplate.tsx` | `steps[]` | ~40 |
| 27 | `AboutHistoryTemplate.tsx` | `milestones[]` | ~60 |

### 1.6 Utility/Marketing Templates (4 files)

| # | File | Array | Lines |
|---|---|---|---|
| 28 | `WebsitePackagesTemplate.tsx` | `packages[]` | ~80 |
| 29 | `ReferralsTemplate.tsx` | `steps[]` | ~30 |
| 30 | `AISearchServiceTemplate.tsx` | `pillars[]` | ~40 |
| 31 | `TestimonialsTemplate.tsx` | `services[]` (filter list) | ~5 |

### 1.7 Reference/System Templates (acceptable exceptions)

| # | File | Array | Verdict |
|---|---|---|---|
| 32 | `DesignTokensReferenceTemplate.tsx` | `sections[]` | **ACCEPTABLE** — UI navigation anchors, not content |
| 33 | `PortfolioArchiveTemplate.tsx` | `categories[]` | **ACCEPTABLE** — Derived from data via `.map()` |

---

## Finding 2: Incorrect Company Data (4 data files)

The company was founded in **2003**, not 2010 or 2014.

| File | Field | Current Value | Correct Value |
|---|---|---|---|
| `/src/app/data/company.ts` | `foundingDate` | `'2014'` | `'2003'` |
| `/src/app/data/company.ts` | `registrationNumber` | `'2014/123456/07'` | Update year prefix |
| `/src/app/data/about.ts` | `companyHistory[0].year` | `'2014'` | `'2003'` |
| `/src/app/data/about-page.ts` | `aboutTimeline[0].year` | `'2010'` | `'2003'` |
| `/src/app/data/about-page.ts` | `aboutStory[0].text` | `"Founded in 2010..."` | `"Founded in 2003..."` |
| `/src/app/data/team.ts` | Ash Shaw bio | `"founded LightSpeed in 2014"` | `"founded LightSpeed in 2003"` |

**Already correct:**
- `/src/app/data/homepage.ts` — `'2003'` and `'Since 2003'`
- `/src/app/data/services-page.ts` — `'Established in 2003'`

---

## Finding 3: Template Parts — Clean

All files in `/src/app/components/parts/` (SiteHeader, SiteFooter, etc.) import content from data files or receive it via props. **No hardcoded content found.**

---

## Finding 4: Pattern Components — Clean

Only 1 match found (`ProjectCaseStudy.tsx` sections array) — this is a UI structure mapping, not content. **No action needed.**

---

## Summary Statistics

| Metric | Count |
|---|---|
| Templates with hardcoded arrays | 31 (actionable) |
| Templates with acceptable inline arrays | 2 (UI/derived) |
| Incorrect founding year references | 6 fields across 4 files |
| Estimated hardcoded content lines | ~870 lines |
| Pattern files with issues | 0 |
| Template parts with issues | 0 |

---

## Recommended Actions (Part A → Part B handoff)

### Priority 1: Fix founding year (Part B prerequisite)
1. Update `company.ts` foundingDate → `'2003'`
2. Update `about.ts` companyHistory → starts at 2003
3. Update `about-page.ts` timeline → starts at 2003
4. Update `team.ts` Ash Shaw bio → "founded in 2003"

### Priority 2: Create missing data files for hardcoded templates
1. Create `why-pages.ts` — shared features/testimonials for 5 "Why" templates
2. Create service-specific data exports for 18 service templates missing benefits data
3. Create `referrals-page.ts` — steps data for ReferralsTemplate
4. Create `website-packages.ts` — packages data for WebsitePackagesTemplate

### Priority 3: Migrate templates to use data imports
1. Update 31 templates to import from data files instead of defining inline arrays
2. Estimated effort: 3-4 hours
3. Estimated lines moved to data: ~870 lines

---

**Next Step:** Workflow 4, Part B — Real Content Integration (fix founding year, rebuild team.ts, rebuild about.ts)
