/**
 * LazyPricingTable Component
 */
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternPlaceholder } from '../PatternPlaceholder';
import { PricingTable } from '../PricingTable';

import type { PricingTableProps } from '../PricingTable';

export function LazyPricingTable(props: PricingTableProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder minHeight="600px" ariaLabel="Pricing table loading" />
      ) : (
        <PricingTable {...props} />
      )}
    </div>
  );
}