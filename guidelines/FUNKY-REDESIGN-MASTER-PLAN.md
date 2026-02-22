# Funky Redesign Plan (Neon & Bright)

**Status:** ✅ Complete
**Date:** January 2026
**Theme:** "Funky" - High energy, neon palette, fluid animations, and glow effects.

---

## 1. Vision & Aesthetics

The "Funky" redesign moves away from the sterile, minimal corporate look to a vibrant, energetic interface. 

### Key Visual Pillars
1.  **Neon Palette:** Cyan, Magenta, Lime, and Yellow on dark backgrounds.
2.  **Fluid Motion:** Continuous floating elements ("Orbs") and breathing glow effects.
3.  **Glow Cards:** Double-layer borders using pseudo-elements to create a neon rim light effect.
4.  **Interactive Bounce:** Spring-based transitions on hover.

---

## 2. Architecture & Technical Strategy

### CSS Architecture
*   **Tokens (`theme-variables.css`):** 
    *   New neon color palette added as `--wp--preset--color--neon-*`.
    *   New gradients and shadows.
*   **Global Styles (`globals.css`):** 
    *   Keyframe animations (`funky-float`, `funky-glow-pulse`, `funky-rotate`).
    *   Utility classes (`.funky-orb`, `.funky-card-glow`).
    *   **Accessibility:** Mandatory `@media (prefers-reduced-motion)` guard to disable animations for sensitive users.

### Component Architecture

| Component | Pattern Name | Changes Implemented |
|-----------|--------------|---------------------|
| **Hero** | `Hero.tsx` | Added background "Orbs", applied neon text shadow to H1, adjusted z-indexing for overlay. |
| **Process Steps** | `HowItWorksSection.tsx` | Converted to "Glow Card" layout. Added hover rotation to icons. |
| **Detail Cards** | `ValuesGridSection.tsx` | Converted to "Glow Card" layout. Added neon color to icons. |
| **Promise Banner** | `ValuePropositionSection.tsx` | Implemented CSS Grid (`1.2fr 0.8fr`) and responsive spacing. |

---

## 3. Implementation Checklist

### Phase 1: Foundation (Tokens & Global CSS)
- [x] Define Neon Color Palette (Pink, Cyan, Lime, Yellow).
- [x] Create `funky-float` and `funky-glow-pulse` keyframes.
- [x] Create `.funky-card-glow` utility class with pseudo-element borders.
- [x] Implement Reduced Motion media query.

### Phase 2: Component Refactoring
- [x] **Hero:** Implement floating orbs and neon typography.
- [x] **HowItWorks:** Refactor step items into glow cards.
- [x] **ValuesGrid:** Refactor value items into glow cards with spring hover.
- [x] **ValueProposition:** Update grid layout for desktop alignment.

### Phase 3: Documentation
- [x] Create `/guidelines/design-tokens/funky-theme.md`.
- [x] Update task list.

---

## 4. Maintenance & Extensions

*   **Dark Mode:** The neon theme is primarily designed for Dark Mode but works in Light Mode by using the `dark:` prefix logic in Tailwind/CSS variables.
*   **Performance:** Animations use `transform` and `opacity` only to ensure 60fps rendering.
