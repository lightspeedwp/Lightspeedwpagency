/**
 * LazyFeatureComparison Component
 */
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternPlaceholder } from '../PatternPlaceholder';
import { FeatureComparison } from '../FeatureComparison';

import type { FeatureComparisonProps } from '../FeatureComparison';

export function LazyFeatureComparison(props: FeatureComparisonProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder minHeight="500px" ariaLabel="Feature comparison loading" />
      ) : (
        <FeatureComparison {...props} />
      )}
    </div>
  );
}