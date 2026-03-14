/**
 * LazyFunkyCTA Component
 */
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternPlaceholder } from '../PatternPlaceholder';
import { FunkyCTA } from '../FunkyCTA';

import type { FunkyCTAProps } from '../FunkyCTA';

export function LazyFunkyCTA(props: FunkyCTAProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder minHeight="350px" ariaLabel="Call-to-action section loading" />
      ) : (
        <FunkyCTA {...props} />
      )}
    </div>
  );
}