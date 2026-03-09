/**
 * LazyFAQSection Component
 * 
 * Lazy-loading wrapper for FAQSection pattern.
 * Loads FAQ accordion only when it enters the viewport.
 * 
 * Design System Compliance:
 * - All placeholder/skeleton styles use CSS variables
 * - Animation respects prefers-reduced-motion
 * - Font families use var(--font-primary)
 * 
 * Performance:
 * - Reduces initial bundle size (~4KB gzipped)
 * - Progressive enhancement for below-the-fold content
 * - Better UX on slow connections
 * 
 * Usage:
 * ```tsx
 * <LazyFAQSection faqs={faqs} />
 * ```
 * 
 * @see /src/app/components/patterns/FAQSection.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-2-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded FAQSection component
const FAQSection = lazy(() => import('../FAQSection').then(module => ({ default: module.FAQSection })));

// Re-export FAQSection props type
export type { FAQSectionProps } from '../FAQSection';

/**
 * LazyFAQSection Component
 * 
 * Lazy-loading wrapper for FAQSection pattern
 * 
 * @param props - FAQSection props
 * @returns Lazy-loaded FAQSection
 */
export function LazyFAQSection(props: import('../FAQSection').FAQSectionProps) {
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
          minHeight="400px" 
          ariaLabel="FAQ section loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={5} showHeader={true} />}>
          <FAQSection {...props} />
        </Suspense>
      )}
    </div>
  );
}