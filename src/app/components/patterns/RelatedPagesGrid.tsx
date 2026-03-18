/**
 * Related Pages Grid
 *
 * Responsive grid of linked cards for "Related services" / "Related solutions".
 * Used in AI service/solution pages to show cross-links within the ecosystem.
 *
 * BEM: .related-pages
 * CSS: /src/styles/patterns/related-pages-grid.css
 *
 * @see /src/app/data/ai-services-lifecycle-data.tsx
 */

import '../../../styles/patterns/related-pages-grid.css';
import { Link } from 'react-router';
import { ArrowRight } from '@phosphor-icons/react';
import type { UniversalIcon } from '../utils/icon-map';

export interface RelatedPageItem {
  title: string;
  description: string;
  href: string;
  icon?: UniversalIcon;
  accent?: string;
}

interface RelatedPagesGridProps {
  /** Section heading */
  title?: string;
  /** Optional description */
  description?: string;
  /** Array of related page links */
  items: RelatedPageItem[];
  /** Number of columns (2-4, default 3) */
  columns?: 2 | 3 | 4;
}

export function RelatedPagesGrid({
  title = 'Related services',
  description,
  items,
  columns = 3
}: RelatedPagesGridProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="related-pages" aria-labelledby="related-pages-title">
      <div className="related-pages__container">
        <div className="related-pages__header">
          <h2 id="related-pages-title" className="related-pages__title">
            {title}
          </h2>
          {description && (
            <p className="related-pages__description">{description}</p>
          )}
        </div>

        <div
          className={`related-pages__grid related-pages__grid--cols-${columns}`}
          role="list"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className="related-pages__card"
                role="listitem"
                style={
                  item.accent
                    ? ({ '--_card-accent': item.accent } as React.CSSProperties)
                    : undefined
                }
              >
                {Icon && (
                  <div className="related-pages__icon-wrapper">
                    <Icon size={32} className="related-pages__icon" />
                  </div>
                )}
                <div className="related-pages__content">
                  <h3 className="related-pages__card-title">{item.title}</h3>
                  <p className="related-pages__card-description">{item.description}</p>
                  <div className="related-pages__link-wrapper">
                    <span className="related-pages__link-text">Learn more</span>
                    <ArrowRight size={16} className="related-pages__link-arrow" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}