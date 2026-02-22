/**
 * useReducedMotion Hook
 *
 * Tracks the user's `prefers-reduced-motion` operating system setting
 * and re-renders the component when the preference changes in real time.
 *
 * This hook listens for the `change` event on the `MediaQueryList` object
 * so that if a user toggles the setting while the page is open, all
 * consuming components update immediately without a page reload.
 *
 * Safe for SSR: returns `false` on the server.
 *
 * @returns {boolean} `true` when the user has enabled "Reduce Motion"
 *
 * @example
 * ```tsx
 * import { useReducedMotion } from '../hooks/useReducedMotion';
 *
 * function HeroSection() {
 *   const reducedMotion = useReducedMotion();
 *
 *   return (
 *     <section className="hero">
 *       <h1>Welcome</h1>
 *       {!reducedMotion && (
 *         <div className="hero__orb" aria-hidden="true" />
 *       )}
 *     </section>
 *   );
 * }
 * ```
 *
 * @see /guidelines/REDUCED-MOTION-STANDARDS.md
 * @see /src/app/utils/animations.ts — prefersReducedMotion() one-time check
 */

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);

    // Sync initial value (covers hydration mismatch)
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
