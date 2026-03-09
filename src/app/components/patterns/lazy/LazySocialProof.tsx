/**
 * LazySocialProof Component
 * 
 * Lazy-loading wrapper for SocialProof pattern.
 * Loads social proof section only when it enters the viewport.
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
 * <LazySocialProof />
 * ```
 * 
 * @see /src/app/components/patterns/SocialProof.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-2-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded SocialProof component
const SocialProof = lazy(() => import('../SocialProof').then(module => ({ default: module.SocialProof })));

// Re-export SocialProof props type
export type { SocialProofProps } from '../SocialProof';

/**
 * LazySocialProof Component
 * 
 * Lazy-loading wrapper for SocialProof pattern
 * 
 * @param props - SocialProof props
 * @returns Lazy-loaded SocialProof
 */
export function LazySocialProof(props: import('../SocialProof').SocialProofProps) {
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
          minHeight="300px" 
          ariaLabel="Social proof section loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={4} showHeader={true} />}>
          <SocialProof {...props} />
        </Suspense>
      )}
    </div>
  );
}