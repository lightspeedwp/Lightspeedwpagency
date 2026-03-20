# Animation Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 2.0.0  
**Last Updated:** 2026-03-18  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Philosophy
Animations should enhance user experience without causing distraction or performance issues. In the Funky neon aesthetic, animations should be lively but deliberate, focusing on hover states, neon glow pulses, smooth transitions, and WebGL/canvas visualizations.

**Core Principles:**
- **Accessibility-first:** ALWAYS respect `prefers-reduced-motion`.
- **Performance-conscious:** Rely on `transform` and `opacity`. Avoid animating `box-shadow` directly if it causes layout thrashing; use pseudo-elements for glowing effects where possible.
- **BEM Compliance:** Use state modifiers (`.block__element--is-active`) rather than utility classes to trigger animations.
- **GPU Budget:** Canvas/WebGL animations must stay within 15ms/frame budget (60fps).

---

## 📊 WebGL / Canvas Animations

### Architecture

All WebGL/Canvas animations follow a standardized architecture:

**File Structure:**
```
/src/app/components/
  /webgl/                    ← Graphics components (reusable canvas animations)
    WebGLCanvas.tsx          ← Base component (handles setup, resize, cleanup)
    NeonParticles.tsx        ← Example graphic component
  /patterns/webgl/           ← Pattern wrappers (graphics + UI overlay)
    HeroParticlePattern.tsx  ← Example pattern
```

**Data-Driven:**
```
/src/app/data/
  webgl-patterns.ts          ← Configuration for all WebGL patterns
```

### Base Component Requirements

ALL WebGL/Canvas graphics MUST:

1. **Use `WebGLCanvas` base component** (or extend it) for:
   - Canvas element setup
   - High-DPI (devicePixelRatio) handling
   - Resize event listening
   - `requestAnimationFrame` loop management
   - Cleanup on unmount
   - `prefers-reduced-motion` detection
   - Mobile viewport detection

2. **Accept standardized props:**
```tsx
interface WebGLGraphicProps {
  width?: number;        // Canvas width (default: parent width)
  height?: number;       // Canvas height (default: parent height)
  speed?: number;        // Animation speed multiplier (default: 1.0)
  neonColor?: string;    // Primary neon color (CSS variable)
  className?: string;    // BEM CSS class
}
```

3. **Implement accessibility:**
```tsx
// For decorative canvases
<canvas ref={canvasRef} aria-hidden="true" />

// For interactive visualizations
<canvas 
  ref={canvasRef} 
  role="img"
  aria-label="Interactive neural network visualization"
/>
```

### Performance Requirements

**GPU Budget:** Max 15ms/frame per WebGL component (60fps target)

**Performance Tiers:**
| Tier | Particle/Vertex Count | Target | Use Case |
|---|---|---|---|
| Low | 50–150 | 60fps all devices | Simple backgrounds, footer effects |
| Medium | 150–500 | 60fps desktop, 30fps mobile | Hero backgrounds, section accents |
| High | 500–1500 | 60fps desktop only | Flagship pages (homepage, about) |

**Mobile Optimization:**
```tsx
useEffect(() => {
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    // Option 1: Disable entirely
    return;
    
    // Option 2: Reduce complexity
    particleCount = Math.floor(particleCount / 2);
  }
  
  // Continue with animation...
}, []);
```

### Accessibility (CRITICAL)

**`prefers-reduced-motion` Compliance:**

ALL WebGL/Canvas animations MUST check `prefers-reduced-motion` and either:
1. **Disable animation loop** (preferred for decorative canvases)
2. **Render static first frame** (acceptable alternative)
3. **Simplify animation** (for interactive visualizations)

```tsx
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Render static first frame and stop
    renderStaticFrame(ctx);
    return; // No animation loop
  }

  // Continue with normal animation loop
  const draw = () => {
    // ... animation code
    animationFrameId = requestAnimationFrame(draw);
  };
  draw();

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}, []);
```

**WCAG 2.3.1 (Seizure Safety):** No effects may flash more than 3 times per second.

### Color Resolution (Performance)

**DO NOT** call `getComputedStyle()` inside `requestAnimationFrame` loop:

```tsx
// ❌ WRONG: getComputedStyle called 60 times/second
const draw = () => {
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue('--wp--preset--color--neon-cyan').trim();
  
  // Render...
  requestAnimationFrame(draw);
};

// ✅ CORRECT: Resolve colors ONCE on mount and theme change
const [colors, setColors] = useState({ primary: '', secondary: '' });

useEffect(() => {
  const resolveColors = () => {
    setColors({
      primary: getComputedStyle(document.documentElement)
        .getPropertyValue('--wp--preset--color--neon-cyan').trim() || '#00f0ff',
      secondary: getComputedStyle(document.documentElement)
        .getPropertyValue('--wp--preset--color--neon-pink').trim() || '#ff00ff',
    });
  };
  
  resolveColors();
  
  // Listen for theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', resolveColors);
  return () => mediaQuery.removeEventListener('change', resolveColors);
}, []);

const draw = () => {
  const { primary, secondary } = colors; // Use cached colors
  // Render...
  requestAnimationFrame(draw);
};
```

### Data-Driven Configuration

ALL WebGL patterns MUST read configuration from `/src/app/data/webgl-patterns.ts`:

```tsx
// /src/app/data/webgl-patterns.ts
export interface WebGLPatternConfig {
  componentName: string;
  particleCount: number;
  speed: number;
  primaryColor: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
  performanceTier: 'low' | 'medium' | 'high';
  disableOnMobile: boolean;
}

export const webglPatternData: Record<string, WebGLPatternConfig> = {
  'home-hero': {
    componentName: 'NeonParticles',
    particleCount: 80,
    speed: 1.0,
    primaryColor: 'var(--wp--preset--color--neon-cyan)',
    performanceTier: 'medium',
    disableOnMobile: true,
  },
  // ... more configurations
};
```

**Pattern Component:**
```tsx
import { webglPatternData } from '../../data/webgl-patterns';

export function HeroParticlePattern({ sectionId }: { sectionId: string }) {
  const config = webglPatternData[sectionId];
  
  return (
    <NeonParticles
      particleCount={config.particleCount}
      speed={config.speed}
      neonColor={config.primaryColor}
    />
  );
}
```

---

## ♿ Reduced Motion & Accessibility

**CRITICAL:** All animations MUST respect user motion preferences.

```css
/* Base Animation */
.card {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
  .card,
  .card * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 🎨 Funky Neon Animation Variables
Include these CSS variables in your `/src/styles/` (or use existing ones) to keep animation timings consistent.

```css
:root {
  --anim-duration-fast: 0.15s;
  --anim-duration-normal: 0.3s;
  --anim-duration-slow: 0.5s;
  --anim-easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --anim-easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🔄 Interaction Guidelines

### Hover States
- **Buttons:** Scale up slightly (`transform: scale(1.05)`), intensify the neon border/text-shadow.
- **Cards:** Lift up (`transform: translateY(-4px)`) and increase drop shadow or neon glow.
- **Links:** Use an underline animation or text color transition.

### Neon Pulse Effects
For the funky neon aesthetic, use keyframes for a breathing glow effect.

```css
@keyframes neon-pulse {
  0% { box-shadow: 0 0 5px var(--wp--preset--color--neon-pink), 0 0 10px var(--wp--preset--color--neon-pink); }
  50% { box-shadow: 0 0 10px var(--wp--preset--color--neon-pink), 0 0 20px var(--wp--preset--color--neon-pink); }
  100% { box-shadow: 0 0 5px var(--wp--preset--color--neon-pink), 0 0 10px var(--wp--preset--color--neon-pink); }
}

.element--glowing {
  animation: neon-pulse 2s infinite ease-in-out;
}
```