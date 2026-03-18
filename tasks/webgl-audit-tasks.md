# WebGL Audit — Task List

**Generated:** 2026-03-18  
**Source:** `/reports/2026-03/2026-03-18-webgl-audit.md`  
**Overall compliance:** 18%  
**Total violations:** 143

---

## Critical priority (fix immediately)

- [ ] **C1** Create `WebGLCanvas` base component at `/src/app/components/webgl/WebGLCanvas.tsx` with canvas setup, DPR resize, cleanup, and `prefers-reduced-motion` guard
- [ ] **C2** Add `prefers-reduced-motion` check to all 21 WebGL components — stop animation, render static frame
- [ ] **C3** Fix ES5 violations — replace `?.` with null checks in: WebGLConstellation, WebGLScanner, WebGLTopology, WebGLKnowledgeGraph, WebGLAINetwork
- [ ] **C4** Replace hardcoded `#ffffff` with CSS variable resolution in: WebGLConstellation, WebGLScanner, WebGLKnowledgeGraph, WebGLDataNodes
- [ ] **C5** Replace hardcoded `rgba(255,255,255,...)` with CSS variable + alpha in: WebGLTopology, WebGLKnowledgeGraph, WebGLProcessOrbital, WebGLWorldMap, WebGLTeamSphere, WebGLNeuralNetwork, WebGLPerformanceRing, WebGLAINetwork, WebGLScanner
- [ ] **C6** Replace hardcoded `rgba(0,0,0,...)` with CSS variable + alpha in: WebGLScanner, WebGLTopology, WebGLKnowledgeGraph, WebGLAINetwork, WebGLCyberRadar, WebGLContentInk

## High priority (fix this week)

- [ ] **H1** Create `/src/data/mock/ui/webgl-graphics.ts` — registry of all 21 graphics with default props and performance tier
- [ ] **H2** Create `/src/data/mock/ui/webgl-patterns.ts` — per-section configuration for all WebGL pattern instances
- [ ] **H3** Add `aria-hidden="true"` to decorative canvases in 20 components (all except WebGLTopology which already has it)
- [ ] **H4** Move `getComputedStyle` calls outside render loop in Gen 1 components: WebGLConstellation (×2), WebGLTopology, WebGLAINetwork — cache resolved colors
- [ ] **H5** Refactor all 21 components to use `WebGLCanvas` base component — eliminate duplicated boilerplate
- [ ] **H6** Standardize color prop naming across all components: `accentColor` (primary neon), `secondaryColor` (secondary neon), `className`

## Medium priority (fix this month)

- [ ] **M1** Reorganize file structure: move pure graphics to `/components/webgl/`, create pattern wrappers in `/patterns/webgl/`
- [ ] **M2** Add standardized `width`, `height`, `speed` props to all 21 components
- [ ] **M3** Add mobile optimization — disable or simplify animations below 768px viewport
- [ ] **M4** Replace inline styles on container `<div>` elements with BEM CSS classes (`.wp-webgl-*`) in `/src/styles/blocks/`
- [ ] **M5** Wire all WebGL pattern instances to read from `webgl-patterns.ts` data file
- [ ] **M6** Document performance tier (Low/Medium/High) for each component based on vertex/node count

---

## Completion tracking

| Priority | Total | Done | Remaining |
|---|---|---|---|
| Critical | 6 | 0 | 6 |
| High | 6 | 0 | 6 |
| Medium | 6 | 0 | 6 |
| **Total** | **18** | **0** | **18** |