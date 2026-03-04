/**
 * PortfolioCard Component
 *
 * Interactive portfolio card with hover effects
 * For portfolio grids and showcases
 *
 * Features:
 * - Image with overlay on hover
 * - Category badge
 * - Title and description
 * - View project button
 * - Smooth transitions
 * - Click to open lightbox
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.portfolio-card)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/PortfolioCard.md
 */

import { useState } from 'react';
import { ArrowSquareOut, Eye } from '@phosphor-icons/react';
import { Lightbox, LightboxImage } from '../ui/Lightbox';

export interface PortfolioCardProps {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Category/type */
  category: string;
  /** Main image */
  image: string;
  /** Gallery images (for lightbox) */
  gallery?: LightboxImage[];
  /** External link */
  link?: string;
  /** Click handler */
  onClick?: () => void;
  /** Color variant */
  variant?: 'default' | 'primary' | 'accent';
}

export const PortfolioCard = ({
  title,
  description,
  category,
  image,
  gallery = [],
  link,
  onClick,
  variant = 'default',
}: PortfolioCardProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else if (gallery.length > 0) {
      setLightboxOpen(true);
    }
  };

  const handleViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (gallery.length > 0) {
      setLightboxOpen(true);
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`portfolio-card portfolio-card--${variant}`}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        {/* Image Container */}
        <div className="portfolio-card__image-wrapper">
          <img
            src={image}
            alt={title}
            className="portfolio-card__image"
          />

          {/* Overlay */}
          <div className="portfolio-card__overlay">
            <div className="portfolio-card__overlay-content">
              <button
                className="portfolio-card__action"
                onClick={handleViewClick}
                aria-label="View project gallery"
              >
                <Eye size={24} />
                View Project
              </button>
            </div>
          </div>

          {/* Category Badge */}
          <div className="portfolio-card__badge">{category}</div>
        </div>

        {/* Content */}
        <div className="portfolio-card__content">
          <h3 className="portfolio-card__title">{title}</h3>
          <p className="portfolio-card__description">{description}</p>

          {/* Actions */}
          {link && (
            <a
              href={link}
              className="portfolio-card__link"
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Site
              <ArrowSquareOut size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {gallery.length > 0 && (
        <Lightbox
          images={gallery}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};