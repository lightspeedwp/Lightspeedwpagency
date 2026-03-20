/**
 * Services Slider Pattern
 *
 * WordPress pattern: lsx-design/services/slider
 *
 * Horizontal scrolling slider showcasing featured services.
 * Features:
 * - Touch/mouse drag scrolling
 * - Glassmorphic cards with neon accents
 * - Icon-driven design with Phosphor Icons
 * - Smooth scroll snap behavior
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - BEM methodology: .services-slider__*
 * - Typography: var(--font-primary), var(--font-secondary)
 * - Colors: 100% CSS variables
 * - Spacing: var(--spacing-*)
 *
 * @see /src/styles/patterns/services-slider.css
 * @see /src/app/data/services-slider.ts
 */

import '../../../styles/patterns/services-slider.css';

import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import type { ServiceSlide } from '../../data/services-slider';

export interface ServicesSliderProps {
  title?: string;
  description?: string;
  services: ServiceSlide[];
}

export function ServicesSlider({
  title = 'Our services',
  description,
  services,
}: ServicesSliderProps) {
  return (
    <div className="services-slider">
      {/* Section Header */}
      {(title || description) && (
        <div className="services-slider__header">
          {title && (
            <h2 className="services-slider__title">
              {title}
            </h2>
          )}
          {description && (
            <p className="services-slider__description">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Slider Track */}
      <div className="services-slider__track">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.id}
              to={service.href}
              className="services-slider__card"
              style={{ '--service-accent': service.accent } as React.CSSProperties}
            >
              {/* Icon */}
              <div className="services-slider__icon">
                <Icon size={40} weight="duotone" />
              </div>

              {/* Content */}
              <div className="services-slider__content">
                <h3 className="services-slider__card-title">
                  {service.title}
                </h3>
                <p className="services-slider__card-description">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="services-slider__arrow">
                <ArrowRight size={20} weight="bold" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Scroll Hint */}
      <div className="services-slider__hint" aria-hidden="true">
        <span className="services-slider__hint-text">Scroll to explore</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}
