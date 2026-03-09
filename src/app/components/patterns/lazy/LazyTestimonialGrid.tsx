/**
 * LazyTestimonialGrid Component
 * 
 * Lazy-loading wrapper for TestimonialGrid pattern.
 * Loads testimonial grid only when it enters the viewport.
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
 * <LazyTestimonialGrid testimonials={testimonials} />
 * ```
 * 
 * @see /src/app/components/patterns/TestimonialGrid.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-2-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded TestimonialGrid component
const TestimonialGrid = lazy(() => import('../TestimonialGrid').then(module => ({ default: module.TestimonialGrid })));

// Re-export TestimonialGrid props type
export type { TestimonialGridProps } from '../TestimonialGrid';

/**
 * LazyTestimonialGrid Component
 * 
 * Lazy-loading wrapper for TestimonialGrid pattern
 * 
 * @param props - TestimonialGrid props
 * @returns Lazy-loaded TestimonialGrid
 */
export function LazyTestimonialGrid(props: import('../TestimonialGrid').TestimonialGridProps) {
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
          minHeight="500px" 
          ariaLabel="Testimonials loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={6} showHeader={true} />}>
          <TestimonialGrid {...props} />
        </Suspense>
      )}
    </div>
  );
}