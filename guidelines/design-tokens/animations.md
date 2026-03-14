# Animation Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Philosophy
Animations should enhance user experience without causing distraction or performance issues. In the Funky neon aesthetic, animations should be lively but deliberate, focusing on hover states, neon glow pulses, and smooth transitions.

**Core Principles:**
- **Accessibility-first:** ALWAYS respect `prefers-reduced-motion`.
- **Performance-conscious:** Rely on `transform` and `opacity`. Avoid animating `box-shadow` directly if it causes layout thrashing; use pseudo-elements for glowing effects where possible.
- **BEM Compliance:** Use state modifiers (`.block__element--is-active`) rather than utility classes to trigger animations.

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