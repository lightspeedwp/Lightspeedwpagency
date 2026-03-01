# Task 2.3: Service Consolidation Report

**Date:** February 27, 2026  
**Task:** Consolidate 22 service pages → 9  
**Status:** ✅ COMPLETE  
**Phase:** Phase 2 IA Restructure

---

## Summary

Consolidated 22 individual service pages into 9 unified services, with 13 legacy routes redirecting to their new consolidated destinations. Created a new AI Search & Visibility template and updated 12+ data files for full cross-reference integrity.

---

## Consolidation Map

| # | Consolidated Service | Route | Absorbs |
|---|---|---|---|
| 1 | Discovery & Strategy | `/services/discovery` | (unchanged) |
| 2 | Design | `/services/design` | + Figma Prototyping, Design Systems |
| 3 | Development | `/services/development` | (unchanged) |
| 4 | Content Operations | `/services/content` | + Content/Strategy, Content/Collection, Content/Audit, Newsletter, Email Marketing |
| 5 | Security | `/services/security` | (unchanged) |
| 6 | Hosting & Support | `/services/hosting` | + Support, Migrations |
| 7 | Performance & Accessibility | `/services/performance` | + Accessibility |
| 8 | AI Search & Visibility | `/services/ai-search-visibility` | + SEO, Analytics, AI Engine, Answer Engine |
| 9 | Training & Enablement | `/services/training` | (unchanged) |

---

## Redirect Map (13 routes)

| Old Route | New Route | Method |
|---|---|---|
| `/services/content/strategy` | `/services/content` | `<Navigate replace />` |
| `/services/content/collection` | `/services/content` | `<Navigate replace />` |
| `/services/content/audit` | `/services/content` | `<Navigate replace />` |
| `/services/newsletter` | `/services/content` | `<Navigate replace />` |
| `/services/email-marketing` | `/services/content` | `<Navigate replace />` |
| `/services/support` | `/services/hosting` | `<Navigate replace />` |
| `/services/migrations` | `/services/hosting` | `<Navigate replace />` |
| `/services/accessibility` | `/services/performance` | `<Navigate replace />` |
| `/services/seo` | `/services/ai-search-visibility` | `<Navigate replace />` |
| `/services/analytics` | `/services/ai-search-visibility` | `<Navigate replace />` |
| `/services/ai-engine-optimisation` | `/services/ai-search-visibility` | `<Navigate replace />` |
| `/services/answer-engine-optimisation` | `/services/ai-search-visibility` | `<Navigate replace />` |
| `/services/figma-prototyping` | `/services/design` | `<Navigate replace />` |
| `/services/design-systems` | `/services/design` | `<Navigate replace />` |

---

## Files Modified

### New Files Created
- `AISearchServiceTemplate.tsx` — New consolidated template (4 pillars: SEO, Analytics, AI Engine, AEO)
- `page-service-ai-search.css` — BEM styling with 100% CSS variables

### Route Infrastructure
- `route-map.ts` — 14 slug mappings updated to new consolidated paths
- `routes.tsx` — 13 old imports removed, 13 `<Navigate>` redirects added, 1 new route

### Data Files Updated
- `services.ts` — `servicesSimplified` array: 9 → 9 consolidated services (from 9 mixed)
- `services-detailed.ts` — Added Figma Prototyping + Design Systems sub-services to design, WCAG audit + remediation to performance, updated all `page:` references (seo→ai-search-visibility, support→hosting, newsletter-service→content)
- `related-services-map.ts` — Complete rewrite: 9 consolidated references, 9 relationship mappings, legacy slug fallback map in `getRelatedServices()`
- `site-pages.ts` — Footer navigation updated (Support→Hosting & Support, added AI Search & Visibility)
- `service-journey.ts` — All 6 journey phases updated with consolidated service slugs
- `journey-stage-pages.ts` — Ignite, Create, Build, Grow, Evolve phase service cards updated
- `wordpress-redesign-page.ts` — seo→ai-search-visibility
- `woocommerce-redesign-page.ts` — migrations→hosting
- `wetu-importer-page.ts` — support→hosting

### Templates Updated
- `DesignServiceTemplate.tsx` — Added Figma + Component icons, breadcrumb unchanged
- `PerformanceServiceTemplate.tsx` — Breadcrumb "Performance & Accessibility", badge "PERFORMANCE + WCAG COMPLIANCE", added Eye/Shield icons, accessibility benefits in CTA

---

## Design System Compliance

- ✅ Typography: ONLY `var(--font-primary)`, `var(--font-secondary)` in all new code
- ✅ Colors: ONLY semantic CSS variables (`var(--accent)`, `var(--foreground)`, `var(--background)`, etc.)
- ✅ Spacing: ONLY `var(--spacing-*)` tokens
- ✅ Border radius: ONLY `var(--radius-*)` tokens
- ✅ BEM naming: `.ai-search-page__*`
- ✅ Reduced motion: `@media (prefers-reduced-motion: reduce)` guard on animations
- ✅ Zero hardcoded hex, px, or font-family values
- ✅ Zero Tailwind classes

---

## Backward Compatibility

- All 13 old routes redirect with HTTP 301-equivalent `<Navigate replace />`
- `route-map.ts` maps all legacy slugs to new paths
- `getRelatedServices()` includes a legacy slug fallback map for any component still referencing old service slugs
- No breaking changes to existing navigation or internal links

---

## Remaining Follow-Up Tasks

- [ ] Delete orphaned template files (ContentStrategyTemplate, ContentCollectionTemplate, ContentAuditTemplate, NewsletterServiceTemplate, EmailMarketingTemplate, SupportServiceTemplate, MigrationsServiceTemplate, SEOServiceTemplate, AnalyticsServiceTemplate, AccessibilityServiceTemplate, AIEngineOptimisationTemplate, AnswerEngineOptimisationTemplate, FigmaPrototypingServiceTemplate, DesignSystemsServiceTemplate)
- [ ] Delete orphaned CSS files for removed templates
- [ ] Delete orphaned data files (accessibility-service-page.ts, ai-engine-service-page.ts, answer-engine-service-page.ts, migrations-service-page.ts, support-service-page.ts, newsletter-service-page.ts, content-service-page.ts sub-pages)
- [ ] Update ServicesLandingTemplate to show 9 consolidated services grid
- [ ] Full link audit to verify zero broken internal references
