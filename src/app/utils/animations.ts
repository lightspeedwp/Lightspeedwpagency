/**
 * Animation Utilities
 * 
 * CSS-in-JS animations using design system tokens.
 * All animations respect prefers-reduced-motion.
 */

import { CSSProperties } from 'react';

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Fade In Animation
 */
export const fadeIn: CSSProperties = {
  animation: prefersReducedMotion() ? 'none' : 'fadeIn 0.6s ease forwards',
};

/**
 * Slide Up Animation
 */
export const slideUp: CSSProperties = {
  animation: prefersReducedMotion() ? 'none' : 'slideUp 0.6s ease forwards',
};

/**
 * Slide Down Animation
 */
export const slideDown: CSSProperties = {
  animation: prefersReducedMotion() ? 'none' : 'slideDown 0.6s ease forwards',
};

/**
 * Zoom In Animation
 */
export const zoomIn: CSSProperties = {
  animation: prefersReducedMotion() ? 'none' : 'zoomIn 0.6s ease forwards',
};

/**
 * Pulse Animation
 */
export const pulse: CSSProperties = {
  animation: prefersReducedMotion() ? 'none' : 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
};

/**
 * Bounce Animation
 */
export const bounce: CSSProperties = {
  animation: prefersReducedMotion() ? 'none' : 'bounce 1s ease infinite',
};

/**
 * Shake Animation
 */
export const shake: CSSProperties = {
  animation: prefersReducedMotion() ? 'none' : 'shake 0.5s ease',
};

/**
 * Spin Animation
 */
export const spin: CSSProperties = {
  animation: prefersReducedMotion() ? 'none' : 'spin 1s linear infinite',
};

/**
 * Page Transition
 */
export const pageTransition: CSSProperties = {
  animation: prefersReducedMotion() ? 'none' : 'pageTransition 0.4s ease-in-out',
};

/**
 * Hover Lift Effect
 */
export function createHoverLift(translateY: string = '-8px'): CSSProperties {
  return {
    transition: prefersReducedMotion() ? 'none' : 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };
}

/**
 * Smooth Transition
 */
export function createTransition(properties: string[], duration: number = 300): CSSProperties {
  if (prefersReducedMotion()) {
    return {};
  }

  return {
    transition: properties.map((prop) => `${prop} ${duration}ms ease`).join(', '),
  };
}

/**
 * Stagger Animation Delay
 */
export function staggerDelay(index: number, delayMs: number = 100): CSSProperties {
  if (prefersReducedMotion()) {
    return {};
  }

  return {
    animationDelay: `${index * delayMs}ms`,
  };
}

/**
 * Keyframe Animations (Add to global.css)
 */
export const keyframes = `
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide Down */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Zoom In */
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Bounce */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Shake */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

/* Spin */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Page Transition */
@keyframes pageTransition {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Respect Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

/**
 * Animation Presets
 */
export const animationPresets = {
  fadeIn,
  slideUp,
  slideDown,
  zoomIn,
  pulse,
  bounce,
  shake,
  spin,
  pageTransition,
};

/**
 * Create Custom Animation
 */
export function createAnimation(
  name: string,
  duration: number = 600,
  easing: string = 'ease',
  fillMode: 'forwards' | 'backwards' | 'both' | 'none' = 'forwards'
): CSSProperties {
  if (prefersReducedMotion()) {
    return {};
  }

  return {
    animation: `${name} ${duration}ms ${easing} ${fillMode}`,
  };
}

/**
 * Parallax Scroll Effect
 */
export function createParallaxStyle(speed: number = 0.5): CSSProperties {
  if (prefersReducedMotion()) {
    return {};
  }

  return {
    transform: `translateY(calc(var(--scroll-y) * ${speed}px))`,
    transition: 'transform 0.3s ease-out',
  };
}
