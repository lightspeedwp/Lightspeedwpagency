/**
 * Breadcrumbs Component
 * 
 * Features:
 * - Hierarchical navigation trail
 * - Auto-collapse on mobile (show last 2 items)
 * - Custom separators
 * - Current page indicator
 * - Schema.org markup for SEO
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Manrope font
 * - Proper link styling
 * 
 * @example
 * <Breadcrumbs
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Shoes', href: '/products/shoes' },
 *     { label: 'Running Shoes' }, // Current page
 *   ]}
 * />
 */

import { Fragment } from 'react';

export interface BreadcrumbItem {
  /** Breadcrumb label */
  label: string;
  /** Link href (omit for current page) */
  href?: string;
  /** Click handler */
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  /** Breadcrumb items */
  items: BreadcrumbItem[];
  /** Separator character */
  separator?: string;
  /** Show home icon */
  showHomeIcon?: boolean;
  /** Max items to show (collapse middle items) */
  maxItems?: number;
  /** Aria label */
  ariaLabel?: string;
}

export function Breadcrumbs({
  items,
  separator = '/',
  showHomeIcon = false,
  maxItems,
  ariaLabel = 'Breadcrumb navigation',
}: BreadcrumbsProps) {
  // Collapse breadcrumbs if maxItems is set
  const displayItems = maxItems && items.length > maxItems
    ? [
        ...items.slice(0, 1),
        { label: '...', href: undefined },
        ...items.slice(items.length - (maxItems - 2)),
      ]
    : items;

  return (
    <nav aria-label={ariaLabel}>
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
        }}
      >
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isCollapsed = item.label === '...';

          return (
            <Fragment key={index}>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {/* Home Icon (first item only) */}
                {showHomeIcon && index === 0 ? (
                  <span
                    style={{
                      marginRight: '0.5rem',
                      fontSize: '1rem',
                    }}
                    aria-hidden="true"
                  >
                    🏠
                  </span>
                ) : null}

                {/* Link or Current Page */}
                {item.href && !isCollapsed ? (
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    itemProp="item"
                    style={{
                      color: 'var(--primary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                  >
                    <span itemProp="name">{item.label}</span>
                  </a>
                ) : (
                  <span
                    itemProp="name"
                    style={{
                      color: isLast ? 'var(--foreground)' : 'var(--muted-foreground)',
                      fontWeight: isLast ? '500' : '400',
                    }}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}

                {/* Position for schema.org */}
                <meta itemProp="position" content={String(index + 1)} />
              </li>

              {/* Separator */}
              {!isLast && (
                <li
                  aria-hidden="true"
                  style={{
                    color: 'var(--muted-foreground)',
                    userSelect: 'none',
                  }}
                >
                  {separator}
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Compact Breadcrumbs (Mobile-optimized)
 * 
 * Shows only first and last items with ellipsis.
 */
export interface CompactBreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: string;
}

export function CompactBreadcrumbs({ items, separator = '/' }: CompactBreadcrumbsProps) {
  if (items.length <= 2) {
    return <Breadcrumbs items={items} separator={separator} />;
  }

  const compactItems = [
    items[0],
    { label: '...', href: undefined },
    items[items.length - 1],
  ];

  return <Breadcrumbs items={compactItems} separator={separator} />;
}

/**
 * Responsive Breadcrumbs
 * 
 * Shows full breadcrumbs on desktop, compact on mobile.
 */
export function ResponsiveBreadcrumbs({ items, separator = '/' }: CompactBreadcrumbsProps) {
  return (
    <>
      {/* Desktop: Full breadcrumbs */}
      <div
        style={{
          display: 'none',
        }}
        className="md:block"
      >
        <Breadcrumbs items={items} separator={separator} />
      </div>

      {/* Mobile: Compact breadcrumbs */}
      <div
        style={{
          display: 'block',
        }}
        className="md:hidden"
      >
        <CompactBreadcrumbs items={items} separator={separator} />
      </div>
    </>
  );
}
