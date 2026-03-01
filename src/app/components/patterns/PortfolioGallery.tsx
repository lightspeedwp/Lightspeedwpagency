/**
 * PortfolioGallery Component
 *
 * Masonry-style portfolio gallery with filtering
 * For portfolio archives and showcases
 *
 * Features:
 * - Responsive grid layout
 * - Filter integration
 * - Masonry-style (staggered heights)
 * - Smooth transitions
 * - Empty state
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes
 * - BEM naming (.portfolio-gallery)
 *
 * @see /guidelines/patterns/PortfolioGallery.md
 */

import { PortfolioCard, PortfolioCardProps } from './PortfolioCard';

export interface PortfolioGalleryProps {
  /** Portfolio items */
  items: PortfolioCardProps[];
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Optional title */
  title?: string;
  /** Optional description */
  description?: string;
}

export const PortfolioGallery = ({
  items,
  columns = 3,
  title,
  description,
}: PortfolioGalleryProps) => {
  const gridClass = `wp-grid-${columns}-cols`;

  return (
    <section className="portfolio-gallery">
      <div className="portfolio-gallery__container">
        {(title || description) && (
          <div className="portfolio-gallery__header">
            {title && <h2 className="portfolio-gallery__title">{title}</h2>}
            {description && (
              <p className="portfolio-gallery__description">{description}</p>
            )}
          </div>
        )}

        {items.length > 0 ? (
          <div className={`portfolio-gallery__grid ${gridClass}`}>
            {items.map((item, index) => (
              <div
                key={index}
                className="portfolio-gallery__item"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <PortfolioCard {...item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="portfolio-gallery__empty">
            <div className="portfolio-gallery__empty-icon">📁</div>
            <h3 className="portfolio-gallery__empty-title">No projects found</h3>
            <p className="portfolio-gallery__empty-description">
              Try adjusting your filters or check back later
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
