/**
 * LazyTestimonialGrid Component
 */
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternPlaceholder } from '../PatternPlaceholder';
import { TestimonialGrid } from '../TestimonialGrid';

import type { TestimonialGridProps } from '../TestimonialGrid';

export function LazyTestimonialGrid(props: TestimonialGridProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder minHeight="400px" ariaLabel="Testimonials loading" />
      ) : (
        <TestimonialGrid {...props} />
      )}
    </div>
  );
}