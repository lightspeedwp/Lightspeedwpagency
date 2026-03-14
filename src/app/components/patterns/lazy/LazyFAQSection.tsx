/**
 * LazyFAQSection Component
 */
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';
import { FAQSection } from '../FAQSection';

import type { FAQSectionProps } from '../FAQSection';

export function LazyFAQSection(props: FAQSectionProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder minHeight="400px" ariaLabel="FAQ section loading" />
      ) : (
        <FAQSection {...props} />
      )}
    </div>
  );
}