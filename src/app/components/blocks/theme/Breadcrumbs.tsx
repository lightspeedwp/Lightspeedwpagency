/**
 * Breadcrumbs Block Component
 *
 * WordPress Block: custom (or Yoast/RankMath)
 * Style: .wp-block-breadcrumbs
 *
 * Funky `//` prefix style — each crumb is rendered as `// LABEL`
 * in uppercase monospace. No chevron separators.
 *
 * This is the canonical breadcrumb pattern used site-wide.
 * Templates should consume this via the BreadcrumbPart template part.
 *
 * @see /src/app/utils/icon-map.ts
 * @see /src/styles/blocks/theme/breadcrumbs.css
 * @see /src/app/components/parts/BreadcrumbPart.tsx
 */

import React from 'react';
import { DotsThree as MoreHorizontal } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { slugToPath } from '../../../utils/route-map';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  page?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  maxItems?: number;
}

export function Breadcrumbs({
  items,
  className = '',
  maxItems,
}: BreadcrumbsProps) {
  // Collapse breadcrumbs if maxItems is set
  const displayItems =
    maxItems && items.length > maxItems
      ? [
          items[0],
          { label: '…', href: undefined, icon: MoreHorizontal },
          ...items.slice(items.length - (maxItems - 1)),
        ]
      : items;

  return (
    <nav
      className={`wp-block-breadcrumbs ${className}`.trim()}
      aria-label="Breadcrumb"
    >
      <ol className="wp-block-breadcrumbs__list">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const Icon = item.icon;
          const isCollapsed = item.label === '…';

          // Strip any existing `// ` prefix so labels are always clean
          const cleanLabel = item.label.replace(/^\/\/\s*/, '');

          return (
            <li key={index} className="wp-block-breadcrumbs__item">
              {/* Decorative // prefix — hidden from assistive tech */}
              <span className="wp-block-breadcrumbs__prefix" aria-hidden="true">
                //
              </span>

              {isLast ? (
                <span
                  className="wp-block-breadcrumbs__current"
                  aria-current="page"
                >
                  {Icon && <Icon size={14} className="wp-block-breadcrumbs__icon" />}
                  {cleanLabel}
                </span>
              ) : item.page ? (
                <Link
                  to={slugToPath(item.page)}
                  className="wp-block-breadcrumbs__link"
                >
                  {Icon && <Icon size={14} className="wp-block-breadcrumbs__icon" />}
                  {cleanLabel}
                </Link>
              ) : item.href ? (
                <Link
                  to={item.href}
                  className="wp-block-breadcrumbs__link"
                >
                  {Icon && <Icon size={14} className="wp-block-breadcrumbs__icon" />}
                  {cleanLabel}
                </Link>
              ) : (
                <span className="wp-block-breadcrumbs__link">
                  {Icon && <Icon size={14} className="wp-block-breadcrumbs__icon" />}
                  {isCollapsed ? '…' : cleanLabel}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}