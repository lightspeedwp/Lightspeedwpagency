# Orphaned Imports & Dead Code Report

**Date:** February 25, 2026
**Prompt:** `/prompts/cleanup/02-orphaned-imports.md`

## Orphaned Import Files

| File | Type | Imported By | Action |
|---|---|---|---|
| `/src/imports/LsxDesignPrototype.tsx` | Figma import | NOTHING (self-referencing only) | **DELETE** |
| `/src/imports/svg-gz05pxbb5w.ts` | SVG data | `LsxDesignPrototype.tsx` only | **DELETE** |

## Unused Utility Files

| File | Type | Imported By | Action |
|---|---|---|---|
| `/src/app/utils/sampleAuditor.ts` | Utility | NOTHING | **DELETE** |
| `/src/app/utils/componentAuditor.ts` | Utility | NOTHING | **DELETE** |
| `/src/app/utils/performanceMonitoring.ts` | Utility | NOTHING | **DELETE** |
| `/src/app/utils/contrastValidator.ts` | Utility | NOTHING | **DELETE** |
| `/src/app/utils/designSystemValidator.ts` | Utility | NOTHING | **DELETE** |
| `/src/app/utils/imageOptimization.ts` | Utility | NOTHING | **DELETE** |
| `/src/app/utils/codeSplitting.ts` | Utility | NOTHING | **DELETE** |
| `/src/app/utils/performance.ts` | Utility | NOTHING | **DELETE** |
| `/src/app/utils/animations.ts` | Utility | NOTHING | **DELETE** |

## In-Use Files (Confirmed)

| File | Imported By |
|---|---|
| `/src/app/utils/route-map.ts` | SiteHeader, GlobalSearchOverlay, RelatedServicesGrid, IncludedInSolutions, SearchResultsTemplate |
| `/src/app/utils/cn.ts` | Multiple components |
| `/src/app/utils/scrollAnimations.ts` | FeatureShowcaseTemplate |
| `/src/app/utils/designSystemChecker.ts` | DesignSystemChecker |
| `/src/app/utils/performanceTester.ts` | ComplianceScorecard |

## Summary

- **11 orphaned files** identified for deletion
- **5 utility files** confirmed in use
- **Estimated savings:** ~3,000-5,000 lines of dead code removed
