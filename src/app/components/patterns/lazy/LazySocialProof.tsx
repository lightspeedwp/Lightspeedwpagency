/**
 * LazySocialProof Component
 */
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternPlaceholder } from '../PatternPlaceholder';
import { SocialProof } from '../SocialProof';

import type { SocialProofProps } from '../SocialProof';

export function LazySocialProof(props: SocialProofProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder minHeight="200px" ariaLabel="Social proof loading" />
      ) : (
        <SocialProof {...props} />
      )}
    </div>
  );
}