/**
 * LazyNewsletterSignup Component
 */
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternPlaceholder } from '../PatternPlaceholder';
import { NewsletterSignup } from '../NewsletterSignup';

import type { NewsletterSignupProps } from '../NewsletterSignup';

export function LazyNewsletterSignup(props: NewsletterSignupProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder minHeight="200px" ariaLabel="Newsletter signup loading" />
      ) : (
        <NewsletterSignup {...props} />
      )}
    </div>
  );
}