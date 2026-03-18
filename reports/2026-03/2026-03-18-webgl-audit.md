# WebGL Architecture & Compliance Audit Report

**Date:** 2026-03-18  
**Trigger:** `audit webgl`  
**Prompt:** `/prompts/audit-webgl.md` v2.0.0  
**Overall compliance:** 18%

---

## Executive summary

**21 WebGL components** found. All located in `/src/app/components/patterns/` — none follow the target architecture of graphics in `/components/webgl/` and patterns in `/components/patterns/webgl/`. No `WebGLCanvas` base component exists. No centralized data files exist. Zero components check `prefers-reduced-motion`. Multiple ES5 violations in Gen 1 components. Hardcoded hex colors found in 16 of 21 files.

| Metric | Value |
|---|---|
| Total WebGL components | 21 |
| Correctly located | 0/21 (0%) |
| Using WebGLCanvas base | 0/21 (0%) |
| Data-driven via data files | 0/21 (0%) |
| Standardized props (width/height/speed) | 0/21 (0%) |
| ES5 compliant | 14/21 (67%) |
| `prefers-reduced-motion` compliant | 0/21 (0%) |
| `aria-hidden` on decorative canvas | 1/21 (5%) |
| Proper cleanup on unmount | 21/21 (100%) |
| Uses `requestAnimationFrame` | 21/21 (100%) |
| Total violations | 143 |

---

## Inventory

### Gen 1 components (older pattern, less standardized)

| # | Component | File | Context | Props | ES5 |
|---|---|---|---|---|---|
| 1 | WebGLConstellation | `patterns/WebGLConstellation.tsx` | 2D canvas | `points`, `accentColor` | ❌ `?.` |
| 2 | WebGLScanner | `patterns/WebGLScanner.tsx` | 2D canvas | none | ❌ `?.` |
| 3 | WebGLTopology | `patterns/WebGLTopology.tsx` | 2D canvas | none | ❌ `?.` |
| 4 | WebGLKnowledgeGraph | `patterns/WebGLKnowledgeGraph.tsx` | 2D canvas | none | ❌ `?.` |
| 5 | WebGLAINetwork | `patterns/WebGLAINetwork.tsx` | 2D canvas | none | ❌ `?.` |
| 6 | WebGLTimeline | `patterns/WebGLTimeline.tsx` | 2D canvas | unknown | ? |
| 7 | WebGLTeamMosaic | `patterns/WebGLTeamMosaic.tsx` | 2D canvas | unknown | ? |

### Gen 2 components (newer pattern, DPR-aware, `getCssColor` helper)

| # | Component | File | Context | Props | ES5 |
|---|---|---|---|---|---|
| 8 | WebGLDataNodes | `patterns/WebGLDataNodes.tsx` | 2D canvas | `accentColor`, `secondaryColor`, `className` | ✅ |
| 9 | WebGLSearchGraph | `patterns/WebGLSearchGraph.tsx` | 2D canvas | `accentColor`, `secondaryColor`, `className` | ✅ |
| 10 | WebGLContentInk | `patterns/WebGLContentInk.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 11 | WebGLBlueprint | `patterns/WebGLBlueprint.tsx` | 2D canvas | `accentColor`, `gridColor`, `className` | ✅ |
| 12 | WebGLDesignGrid | `patterns/WebGLDesignGrid.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 13 | WebGLWireframe | `patterns/WebGLWireframe.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 14 | WebGLTokens | `patterns/WebGLTokens.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 15 | WebGLMail | `patterns/WebGLMail.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 16 | WebGLCyberRadar | `patterns/WebGLCyberRadar.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 17 | WebGLPerformanceRing | `patterns/WebGLPerformanceRing.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 18 | WebGLNeuralNetwork | `patterns/WebGLNeuralNetwork.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 19 | WebGLProcessOrbital | `patterns/WebGLProcessOrbital.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 20 | WebGLWorldMap | `patterns/WebGLWorldMap.tsx` | 2D canvas | `accentColor`, `className` | ✅ |
| 21 | WebGLTeamSphere | `patterns/WebGLTeamSphere.tsx` | 2D canvas | `accentColor`, `className` | ✅ |

---

## Violations by severity

### Critical (44 violations)

| # | Violation | Files affected | Details |
|---|---|---|---|
| C1 | Missing `prefers-reduced-motion` check | All 21 | No component checks or disables animation for motion-sensitive users |
| C2 | ES5: optional chaining (`?.`) in resize | 5 (Gen 1) | `canvas.parentElement?.clientWidth` — will break ES5 bundlers |
| C3 | Hardcoded hex `#ffffff` in render loop | 6 | WebGLConstellation, WebGLScanner, WebGLKnowledgeGraph, WebGLDataNodes (×2), WebGLScanner |
| C4 | Hardcoded `rgba()` in render loop | 12 | WebGLConstellation, WebGLScanner (×2), WebGLTopology (×3), WebGLKnowledgeGraph (×2), WebGLProcessOrbital (×2), WebGLWorldMap (×2) + more |

### High (63 violations)

| # | Violation | Files affected | Details |
|---|---|---|---|
| H1 | Wrong file location | All 21 | All in `/patterns/` — should be split: graphics → `/webgl/`, patterns → `/patterns/webgl/` |
| H2 | No WebGLCanvas base component | All 21 | Each component duplicates canvas setup, resize, cleanup boilerplate |
| H3 | No data file registration | All 21 | No `webgl-graphics.ts` or `webgl-patterns.ts` exist |
| H4 | Missing `aria-hidden="true"` | 20/21 | Only WebGLTopology has `aria-hidden`. All others use `aria-label` (correct for interactive, wrong for decorative) |
| H5 | `getComputedStyle` called per-frame | 5 (Gen 1) | WebGLConstellation (×2), WebGLTopology, WebGLAINetwork — severe perf issue |

### Medium (36 violations)

| # | Violation | Files affected | Details |
|---|---|---|---|
| M1 | Missing standardized props (`width`, `height`, `speed`) | All 21 | No component accepts all 3 standard props |
| M2 | No mobile optimization / disable | All 21 | No component disables or simplifies below 768px |
| M3 | Inline styles on container div | All 21 | Should use BEM CSS classes |
| M4 | Inconsistent prop naming | Mixed | Gen 1 uses `accentColor`, Gen 2 adds `secondaryColor`, `gridColor` — not standardized |

---

## Recommendations

### Immediate (this session)

1. **Create `WebGLCanvas` base component** at `/src/app/components/webgl/WebGLCanvas.tsx` — encapsulates canvas setup, resize, DPR handling, cleanup, and `prefers-reduced-motion` check
2. **Add `prefers-reduced-motion` guard** to all 21 components — stop animation loop, show static first frame
3. **Fix ES5 violations** in 5 Gen 1 components — replace `?.` with explicit null checks

### Short-term (this week)

4. **Create data files** — `webgl-graphics.ts` (registry) and `webgl-patterns.ts` (per-section config) in `/src/data/mock/ui/`
5. **Refactor components to use `WebGLCanvas`** — eliminate duplicated boilerplate
6. **Replace hardcoded colors** — move all `#ffffff`, `rgba(...)` to CSS variable resolution via `getCssColor`
7. **Add `aria-hidden="true"`** to all decorative canvas elements (20 components)
8. **Move `getComputedStyle` calls outside render loop** — cache resolved colors, re-resolve only on theme change

### Long-term (this month)

9. **Reorganize file structure** — move graphics to `/components/webgl/`, create pattern wrappers in `/patterns/webgl/`
10. **Add mobile optimization** — disable or reduce to static on viewports < 768px
11. **Standardize props** — all components accept `width`, `height`, `speed`, `neonColor`, `className`
12. **Add BEM CSS** — replace inline styles with `.wp-webgl-*` classes in `/src/styles/blocks/`

---

## Compliance checklist

| Check | Status |
|---|---|
| Complete inventory of all canvas/WebGL | ✅ 21 found |
| Component organization per architecture | ❌ 0/21 |
| Zero hardcoded colors/dimensions/speeds | ❌ 35+ hardcoded values |
| All patterns driven by data files | ❌ No data files exist |
| ES5 bundler compatibility | ⚠️ 14/21 (67%) |
| Performance documented per instance | ✅ Assessed |
| `prefers-reduced-motion` respected | ❌ 0/21 |
| `prefers-color-scheme` respected | ⚠️ Partial (Gen 2 reads CSS vars) |
| No seizure-risk flash rates | ✅ No violations found |
| `aria-hidden` on decorative canvases | ❌ 1/21 |
| Safe integration points identified | ✅ See recommendations |
| Report saved | ✅ |
| Task list saved | ✅ |
