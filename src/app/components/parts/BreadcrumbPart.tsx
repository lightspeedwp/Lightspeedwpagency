/**
 * BreadcrumbPart — Template Part
 *
 * WordPress template part: parts/breadcrumbs.html
 * Pattern: `lsx-design/nav/breadcrumbs`
 *
 * Wraps the Breadcrumbs block in a standardised section with the
 * neon-line border variant.  Every template that needs breadcrumbs
 * should render `<BreadcrumbPart items={[…]} />` instead of
 * assembling the section + component inline.
 *
 * Visual style — `// HOME   // SERVICES   // STRATEGY`
 *
 * @example
 * ```tsx
 * <BreadcrumbPart
 *   items={[
 *     { label: 'Home', page: 'front-page' },
 *     { label: 'Services', page: 'services' },
 *     { label: 'Strategy' },
 *   ]}
 * />
 * ```
 *
 * @see /src/app/components/blocks/theme/Breadcrumbs.tsx
 * @see /src/styles/blocks/theme/breadcrumbs.css
 */

import { Breadcrumbs, type BreadcrumbItem } from '../blocks/theme/Breadcrumbs';

export interface BreadcrumbPartProps {
  /** Ordered breadcrumb trail. Last item is treated as "current page". */
  items: BreadcrumbItem[];
  /** Extra CSS class for the wrapping `<section>`. */
  className?: string;
  /** Collapse long trails to this many visible items. */
  maxItems?: number;
}

export function BreadcrumbPart({
  items,
  className = '',
  maxItems,
}: BreadcrumbPartProps) {
  return (
    <section
      className={`wp-block-breadcrumbs-section wp-block-breadcrumbs-section--border ${className}`.trim()}
    >
      <Breadcrumbs items={items} maxItems={maxItems} />
    </section>
  );
}
