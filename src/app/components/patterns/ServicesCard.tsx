/**
 * Services Card Pattern
 * 
 * WordPress pattern: lsx-design/content/services-card
 * 
 * Displays a service offering with icon, title, description, features list, and link.
 * Uses Group block architecture with innerBlocks for WordPress FSE compatibility.
 * 
 * Design System Requirements:
 * - Typography: Uses CSS variables (--text-h3, --text-base) with Lexend/Manrope fonts
 * - Colors: Uses semantic color tokens (--card, --foreground, --primary, etc.)
 * - Spacing: Uses CSS variables and wp-* utility classes for consistent spacing
 * - Border Radius: Uses CSS variable (--radius-xl)
 * - Icons: Lucide React icons with design system sizing
 * 
 * WordPress Mapping:
 * - Group block (core/group) as container
 *   ├── Icon (custom block or image block)
 *   ├── Heading (core/heading innerBlock)
 *   ├── Paragraph (core/paragraph innerBlock)
 *   ├── List (core/list innerBlock)
 *   └── Button (core/button innerBlock with link style)
 * 
 * @example
 * import { ServicesCard } from '../patterns/ServicesCard';
 * import { wordpressServices } from '../../data/services';
 * 
 * <ServicesCard service={wordpressServices[0]} />
 */

import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/pages';
import type { Service } from '../../data/services';


export interface ServicesCardProps {
  /** Service data object */
  service: Service;
  /** Optional custom className */
  className?: string;
  /** Optional layout variant */
  variant?: 'default' | 'featured' | 'compact';
}

/**
 * Services Card Pattern
 * 
 * Displays a service offering in a card format with WordPress block structure.
 */
export function ServicesCard({
  service,
  className = '',
  variant = 'default'
}: ServicesCardProps) {
  const Icon = service.icon;

  const isFeatured = variant === 'featured' || service.featured;

  return (
    <article
      className={`services-card ${isFeatured ? 'services-card--featured' : ''} ${className}`}
      onMouseEnter={(e) => {
        // Hover handled by CSS
      }}
      onMouseLeave={(e) => {
        // Hover handled by CSS
      }}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="services-card__badge">
          Popular
        </div>
      )}

      {/* Icon innerBlock */}
      <div className="services-card__icon">
        <Icon size={32} strokeWidth={2} />
      </div>

      {/* Heading innerBlock (core/heading) */}
      <h3 className="services-card__title">
        {service.title}
      </h3>

      {/* Paragraph innerBlock (core/paragraph) */}
      <p className="services-card__description">
        {service.description}
      </p>

      {/* List innerBlock (core/list) */}
      <ul className="services-card__features">
        {service.features.map((feature, index) => (
          <li
            key={index}
            className="services-card__feature-item"
          >
            {/* Checkmark icon */}
            <svg
              className="services-card__check-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="var(--primary)"
                opacity="0.1"
              />
              <path
                d="M6 10L9 13L14 7"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button innerBlock (core/button with link style) */}
      <Link
        to={getPageUrl(service.link.page)}
        className="services-card__link"
        aria-label={`Learn more about ${service.title}`}
      >
        <span>{service.link.text}</span>
        <ArrowRight 
          size={20} 
          className="services-card__arrow"
        />
      </Link>
    </article>
  );
}

/**
 * Services Card Grid Pattern
 * 
 * Displays multiple service cards in a responsive grid layout.
 * 
 * @example
 * <ServicesCardGrid services={wordpressServices} />
 */
export interface ServicesCardGridProps {
  /** Array of services to display */
  services: Service[];
  /** Grid columns (responsive) */
  columns?: {
    mobile?: 1;
    tablet?: 2;
    desktop?: 2 | 3 | 4;
  };
  /** Optional className */
  className?: string;
}

export function ServicesCardGrid({
  services,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  className = ''
}: ServicesCardGridProps) {
  // Map column config to wp-grid utility class
  const gridClass = columns.desktop === 4
    ? 'wp-grid-4-cols'
    : columns.desktop === 2
      ? 'wp-grid-2-cols'
      : 'wp-grid-3-cols';

  return (
    <div 
      className={`${gridClass} ${className}`}
      style={{ gap: 'var(--spacing-8)' }}
      role="list"
    >
      {services.map((service) => (
        <div key={service.id} role="listitem">
          <ServicesCard service={service} />
        </div>
      ))}
    </div>
  );
}