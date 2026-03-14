/**
 * LazyRelatedPosts Component
 */
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternPlaceholder } from '../PatternPlaceholder';
import { RelatedPosts } from '../RelatedPosts';

import type { RelatedPostsProps } from '../RelatedPosts';

export function LazyRelatedPosts(props: RelatedPostsProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder minHeight="400px" ariaLabel="Related posts loading" />
      ) : (
        <RelatedPosts {...props} />
      )}
    </div>
  );
}