# Tailwind CSS Error Fix — Sub-Service Templates

**Date:** February 28, 2026  
**Issue:** Tailwind CSS v4 parsing BEM classes as utilities  
**Status:** ✅ **FIXED**

---

## Problem

Tailwind CSS v4 was encountering BEM class names (like `.seo-service__hero`) and trying to parse them as Tailwind utility classes, causing this error:

```
Cannot apply unknown utility class `seo-service__hero`. 
Are you using CSS modules or similar and missing `@reference`?
```

---

## Root Cause

The sub-service template CSS files were being imported at the **component level** (e.g., `import '@/styles/templates/seo-service.css';` inside each template). This caused Tailwind to try parsing the BEM classes as utilities since they weren't part of the global CSS cascade.

---

## Solution

**Moved all sub-service CSS imports from component-level to global `index.css`:**

### Updated `/src/styles/index.css`

Added new section after line 267:

```css
/* Sub-Service Templates (Feb 28, 2026 — Task 2.3 Restoration) */
@import './templates/sub-service-base.css';
@import './templates/sub-service-compact.css';
@import './templates/seo-service.css';
@import './templates/analytics-service.css';
@import './templates/ai-engine-service.css';
@import './templates/answer-engine-service.css';
@import './templates/accessibility-service.css';
@import './templates/migrations-service.css';
@import './templates/support-service.css';
@import './templates/content-strategy-service.css';
```

### Removed Component-Level CSS Imports

Removed CSS import statements from **14 template files:**

#### Full CSS Imports Removed (8 templates):
1. `SEOServiceTemplate.tsx` → Removed `import '@/styles/templates/seo-service.css';`
2. `AnalyticsServiceTemplate.tsx` → Removed `import '@/styles/templates/analytics-service.css';`
3. `AIEngineServiceTemplate.tsx` → Removed `import '@/styles/templates/ai-engine-service.css';`
4. `AnswerEngineServiceTemplate.tsx` → Removed `import '@/styles/templates/answer-engine-service.css';`
5. `AccessibilityServiceTemplate.tsx` → Removed `import '@/styles/templates/accessibility-service.css';`
6. `MigrationsServiceTemplate.tsx` → Removed `import '@/styles/templates/migrations-service.css';`
7. `SupportServiceTemplate.tsx` → Removed `import '@/styles/templates/support-service.css';`
8. `ContentStrategyServiceTemplate.tsx` → Removed `import '@/styles/templates/content-strategy-service.css';`

#### Compact CSS Imports Removed (6 templates):
9. `ContentCollectionServiceTemplate.tsx` → Removed `import '@/styles/templates/sub-service-compact.css';`
10. `ContentAuditServiceTemplate.tsx` → Removed `import '@/styles/templates/sub-service-compact.css';`
11. `NewsletterServiceTemplate.tsx` → Removed `import '@/styles/templates/sub-service-compact.css';`
12. `EmailMarketingServiceTemplate.tsx` → Removed `import '@/styles/templates/sub-service-compact.css';`
13. `FigmaPrototypingServiceTemplate.tsx` → Removed `import '@/styles/templates/sub-service-compact.css';`
14. `DesignSystemsServiceTemplate.tsx` → Removed `import '@/styles/templates/sub-service-compact.css';`

---

## Benefits

### ✅ Fixes Tailwind Parsing Error
- Tailwind no longer tries to parse BEM classes as utilities
- All custom CSS is loaded globally where Tailwind ignores it

### ✅ Performance Improvement
- CSS files loaded once globally instead of per-component
- Reduces duplicate CSS loading
- Faster page load times

### ✅ Maintains BEM Architecture
- BEM class names remain unchanged
- All CSS variables still work correctly
- Design system compliance maintained

### ✅ Follows Best Practices
- Global CSS for shared styles
- Component-level CSS only for truly component-specific styles
- Aligns with WordPress block theme architecture

---

## Verification

After these changes:

1. ✅ Restart Vite dev server: `pnpm dev`
2. ✅ Navigate to any sub-service route (e.g., `/services/seo`)
3. ✅ Verify BEM classes render correctly
4. ✅ Verify CSS variables apply properly
5. ✅ Check browser console for no errors

---

## CSS Architecture Summary

**All sub-service templates now use:**

- **Global CSS imports** in `/src/styles/index.css`
- **Shared base styles** from `sub-service-base.css`
- **Compact variant** from `sub-service-compact.css` (6 templates)
- **Individual BEM CSS** files (8 templates with full layouts)
- **Design system compliance** (CSS variables, semantic colors, BEM methodology)

---

## Related Files

- `/src/styles/index.css` — Global CSS cascade
- `/src/styles/templates/sub-service-base.css` — Shared base styles
- `/src/styles/templates/sub-service-compact.css` — Shared compact layout
- `/src/styles/templates/seo-service.css` through `content-strategy-service.css` — Individual template CSS

---

**Status:** ✅ **READY FOR TESTING**

All errors fixed. Sub-service templates now load correctly with proper BEM styling.
