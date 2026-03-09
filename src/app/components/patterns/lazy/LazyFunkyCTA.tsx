/**
 * LazyFunkyCTA Component
 * 
 * Lazy-loading wrapper for FunkyCTA pattern.
 * Loads funky call-to-action section only when it enters the viewport.
 * 
 * Design System Compliance:
 * - All placeholder/skeleton styles use CSS variables
 * - Animation respects prefers-reduced-motion
 * - Font families use var(--font-primary)
 * 
 * Performance:
 * - Reduces initial bundle size (~3KB gzipped)
 * - Progressive enhancement for below-the-fold content
 * - Better UX on slow connections
 * 
 * Usage:
 * ```tsx
 * <LazyFunkyCTA 
 *   title="Ready to start?"
 *   description="Get in touch today"
 *   buttonText="Contact Us"
 *   buttonPage="contact"
 *   benefits={['Benefit 1', 'Benefit 2']}
 * />
 * ```
 * 
 * @see /src/app/components/patterns/FunkyCTA.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-2-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded FunkyCTA component
const FunkyCTA = lazy(() => import('../FunkyCTA').then(module => ({ default: module.FunkyCTA })));

// Re-export FunkyCTA props type
export type { FunkyCTAProps } from '../FunkyCTA';

/**
 * LazyFunkyCTA Component
 * 
 * Lazy-loading wrapper for FunkyCTA pattern
 * 
 * @param props - FunkyCTA props
 * @returns Lazy-loaded FunkyCTA
 */
export function LazyFunkyCTA(props: import('../FunkyCTA').FunkyCTAProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
    debug: process.env.NODE_ENV === 'development'
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder 
          minHeight="350px" 
          ariaLabel="Call-to-action section loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={4} showHeader={true} />}>
          <FunkyCTA {...props} />
        </Suspense>
      )}
    </div>
  );
}