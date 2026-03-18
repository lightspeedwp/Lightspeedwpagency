# Audit WebGL — Architecture & compliance audit

**Type:** Audit  
**Created:** 2026-03-15  
**Updated:** 2026-03-18  
**Version:** 2.0.0  
**Status:** Ready  
**Trigger Word:** `audit webgl`

---

## Prompt purpose

**Objective:** Comprehensive audit of all WebGL implementations. Validates component organization, data-driven design, standardized props, performance, accessibility, and ES5 bundler compatibility. Generates a compliance report and prioritized task list.

**When to use:** After creating or modifying WebGL components, before releases, or as part of the full `audit` orchestrator.

**Estimated duration:** ~30 minutes (single session)

**Reference guidelines:**
- `/guidelines/design-tokens/animations.md`
- `/guidelines/design-tokens/dark-light-mode.md`
- `/guidelines/accessibility.md`
- `/guidelines/performance.md`
- `/guidelines/components/components-vs-patterns.md`

**Important:** This environment does not support the `konva` React package. Use raw Canvas API or WebGL directly.

---

## Architecture guidelines (compliance targets)

### Component organization

#### WebGL graphics (`/components/webgl/`)

Reusable, self-contained WebGL visuals.

**Requirements:**
- MUST use `WebGLCanvas` base component (if it exists)
- MUST accept standardized props: `width`, `height`, `speed`, `neonColor`, `className`
- MUST implement `onInit`, `onRender`, `onCleanup` lifecycle callbacks
- MUST use ES5-compatible syntax (no `?.`, `??`, `for...of`)
- MUST NOT hardcode colors, dimensions, or speed values
- MUST clean up GL contexts, buffers, and textures on unmount

#### WebGL patterns (`/components/patterns/webgl/`)

Template parts combining WebGL graphics with text/UI overlays.

**Requirements:**
- MUST import graphics from `/components/webgl/`
- MUST accept configuration from data files (`/data/mock/ui/webgl-patterns.ts`)
- MUST use BEM CSS classes (`.wp-*` prefix)
- MUST be responsive
- MUST support light/dark mode via CSS variables

#### WebGL data files (`/data/mock/ui/`)

Centralized configuration for all WebGL patterns.

**Required files:**
- `webgl-graphics.ts` — graphics registry (component name, default props, performance tier)
- `webgl-patterns.ts` — pattern configurations (section-specific overrides)

**Data structure:**
```ts
export interface WebGLPatternConfig {
  graphicComponent: string;
  graphicWidth: number;
  graphicHeight: number;
  speed: number;
  color: string;
  title: string;
  description: string;
}

export const webglPatternData: Record<string, WebGLPatternConfig> = { ... };
```

### Standardized props

**WebGL graphics props:**
```ts
{
  width?: number;        // Canvas width (default: 400)
  height?: number;       // Canvas height (default: 400)
  speed?: number;        // Animation speed multiplier (default: 1)
  neonColor?: string;    // Primary neon color (CSS variable)
  className?: string;    // BEM CSS class
}
```

**WebGL pattern props:**
```ts
{
  sectionId: string;     // Data lookup key
  className?: string;    // Additional BEM classes
}
```

### Performance tiers

| Tier | Vertices | Target |
|---|---|---|
| Low | 50–150 | 60fps on all devices |
| Medium | 150–500 | 60fps on desktop, reduced on mobile |
| High | 500–1500 | 60fps desktop only, disabled on mobile |

---

## Workflow steps

### Step 1: Scan for WebGL files

Scan the entire codebase for:

1. **Canvas elements:** `<canvas` in all `.tsx` files — list every instance with file path and purpose
2. **WebGL contexts:** `getContext('webgl')`, `getContext('2d')`, `getContext('webgl2')`
3. **Animation libraries:** Three.js, PixiJS, p5.js, or any WebGL wrapper imports
4. **Shader usage:** GLSL shader strings or `.glsl`/`.frag`/`.vert` file imports
5. **CSS visual effects:** Existing `backdrop-filter`, `filter`, `mix-blend-mode`, `clip-path` that serve similar purposes

Record each instance with: file path, component name, purpose, line count.

### Step 2: Validate component organization

For each WebGL file found, check:

1. **Location compliance:**
   - Graphics in `/components/webgl/`? ✅/❌
   - Patterns in `/components/patterns/webgl/`? ✅/❌
   - Direct WebGL usage in page/template components? ❌ (violation)
2. **Base component usage:** Does it use `WebGLCanvas`? ✅/❌
3. **Import chain:** Do patterns import from `/components/webgl/` (not raw canvas)? ✅/❌

### Step 3: Check hardcoded values

For each WebGL component, search for:

1. **Hardcoded colors:** Hex values (`#FF10F0`), RGB, HSL instead of props/CSS variables
2. **Hardcoded dimensions:** Fixed `width`/`height` instead of props
3. **Hardcoded speeds:** Animation multipliers not passed via props
4. **Hardcoded text:** Content strings not sourced from data files
5. **Inline font names:** Font families not using CSS variables

Flag each as: `CRITICAL` (colors/dimensions), `HIGH` (speeds/text), `MEDIUM` (other)

### Step 4: Verify data-driven design

1. **Data file exists:** `/data/mock/ui/webgl-graphics.ts` — ✅/❌
2. **Data file exists:** `/data/mock/ui/webgl-patterns.ts` — ✅/❌
3. **All graphics registered:** Every WebGL graphic has an entry in the registry — ✅/❌
4. **All patterns configured:** Every WebGL pattern reads from centralized config — ✅/❌
5. **Type safety:** Data files export typed interfaces — ✅/❌

### Step 5: Audit ES5 bundler compatibility

Search all WebGL files for:

1. Optional chaining (`?.`) — ❌ not allowed
2. Nullish coalescing (`??`) — ❌ not allowed
3. `for...of` loops — ❌ not allowed
4. Template literals in shader strings — ⚠️ verify bundler support
5. `const enum` — ❌ not allowed

### Step 6: Validate performance

For each WebGL instance:

1. **`requestAnimationFrame`:** Used for rendering loop? ✅/❌
2. **Cleanup on unmount:** GL context, buffers, textures disposed? ✅/❌
3. **Resize handling:** Responds to viewport changes without leaking listeners? ✅/❌
4. **Mobile handling:** Disabled or simplified below 768px? ✅/❌
5. **Vertex count:** Within performance tier limits? ✅/❌
6. **Frame budget:** Estimated frame time impact documented? ✅/❌

### Step 7: Verify accessibility

1. **`prefers-reduced-motion`:** All animations check and stop/reduce? ✅/❌
2. **`prefers-color-scheme`:** Effects read CSS variables for theme? ✅/❌
3. **Focus management:** Canvas does not trap keyboard focus? ✅/❌
4. **Decorative canvases:** `aria-hidden="true"` applied? ✅/❌
5. **Interactive canvases:** ARIA labels and descriptions present? ✅/❌
6. **Seizure safety:** No effects flash > 3 times/second (WCAG 2.3.1)? ✅/❌

### Step 8: Identify safe integration points

Recommend locations for new WebGL enhancements:

1. **Hero backgrounds:** Animated mesh, particles, noise textures
2. **Section transitions:** Gradient transitions, parallax depth
3. **Accent elements:** Glow orbs, data visualizations
4. **Loading states:** GPU-accelerated shimmer/progress
5. **Interactive elements:** Hover ripples, magnetic cursor, card tilts

For each recommendation specify:
- Performance budget (max frame time impact)
- CSS-only fallback
- Disable conditions (`prefers-reduced-motion`, mobile, low-power)

### Step 9: Generate report

Save to `/reports/YYYY-MM/webgl-audit-YYYY-MM-DD.md` with:

1. **Executive summary** — compliance rate (percentage), total violations count
2. **Inventory** — all WebGL graphics and patterns with status
3. **Violations** — categorized by severity (Critical/High/Medium)
4. **Recommendations** — immediate / short-term / long-term
5. **Compliance checklist** — full pass/fail table

### Step 10: Create task list

Save to `/tasks/webgl-audit-tasks.md` with:

1. **Critical priority** — fix immediately (hardcoded values, missing cleanup)
2. **High priority** — fix this week (organization, data files)
3. **Medium priority** — fix this month (performance optimization, new integrations)
4. **Completion tracking** — checkboxes for each item

---

## Common violations reference

| Category | Violation | Severity |
|---|---|---|
| Hardcoded values | Colors defined inline instead of via props/CSS vars | Critical |
| Hardcoded values | Dimensions hardcoded instead of responsive | Critical |
| Hardcoded values | Speed values not customizable | High |
| Organization | Graphics in wrong folder | High |
| Organization | Patterns not using data files | High |
| Organization | Direct WebGL in page components | High |
| Data files | No entry in `webgl-graphics.ts` | High |
| Data files | Pattern configs not centralized | High |
| ES5 | Optional chaining (`?.`) | Critical |
| ES5 | Nullish coalescing (`??`) | Critical |
| ES5 | `for...of` loops | Critical |
| Performance | No resource cleanup on unmount | Critical |
| Performance | Excessive vertex count | Medium |
| Performance | No mobile optimization | Medium |
| Accessibility | Missing `prefers-reduced-motion` | Critical |
| Accessibility | Missing `aria-hidden` on decorative canvas | High |

---

## Success criteria

- [ ] Complete inventory of all canvas/WebGL usage in codebase
- [ ] Component organization validated against architecture guidelines
- [ ] Zero hardcoded colors, dimensions, or speeds in WebGL components
- [ ] All WebGL patterns driven by centralized data files
- [ ] ES5 bundler compatibility confirmed
- [ ] Performance impact documented per instance with tier classification
- [ ] All effects respect `prefers-reduced-motion` and `prefers-color-scheme`
- [ ] No seizure-risk flash rates (WCAG 2.3.1)
- [ ] Safe integration points identified with fallback strategies
- [ ] Report saved to `/reports/YYYY-MM/`
- [ ] Task list saved to `/tasks/`
