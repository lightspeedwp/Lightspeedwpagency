/**
 * Prototype Showcase Pattern
 * 
 * Reusable pattern component for displaying Figma Make prototypes.
 * Can be used on service pages, solution pages, or standalone.
 * 
 * BEM: .prototype-showcase
 * CSS: /styles/patterns/prototype-showcase.css
 */

import { Sparkle, ArrowRight } from '@phosphor-icons/react';
import { PrototypeCard } from '../blocks/PrototypeCard';
import { FigmaPrototype, figmaPrototypes, getPrototypesByCategory } from '../../data/figma-prototypes';

interface PrototypeShowcaseProps {
  title?: string;
  description?: string;
  category?: 'tour-operator' | 'ecommerce' | 'publishing' | 'agency' | 'all';
  limit?: number;
  variant?: 'grid' | 'carousel' | 'featured';
  showCta?: boolean;
  className?: string;
}

export function PrototypeShowcase({
  title = 'Figma Make prototypes',
  description = 'Explore our collection of AI-generated, production-ready prototypes built with Figma Make.',
  category = 'all',
  limit,
  variant = 'grid',
  showCta = true,
  className = '',
}: PrototypeShowcaseProps) {
  // Get prototypes based on category
  const prototypes = category === 'all' 
    ? figmaPrototypes 
    : getPrototypesByCategory(category);
  
  // Apply limit if specified
  const displayedPrototypes = limit ? prototypes.slice(0, limit) : prototypes;
  
  const showcaseClass = `prototype-showcase prototype-showcase--${variant} ${className}`.trim();

  return (
    <section className={showcaseClass}>
      {/* Header */}
      <div className="prototype-showcase__header">
        <div className="prototype-showcase__header-icon">
          <Sparkle size={32} weight="duotone" />
        </div>
        
        <div className="prototype-showcase__header-content">
          <h2 className="prototype-showcase__title">{title}</h2>
          {description && (
            <p className="prototype-showcase__description">{description}</p>
          )}
        </div>

        {showCta && (
          <a href="/showcase/figma-make" className="prototype-showcase__view-all">
            <span>View all prototypes</span>
            <ArrowRight size={20} weight="bold" />
          </a>
        )}
      </div>

      {/* Prototypes grid */}
      <div className="prototype-showcase__grid">
        {displayedPrototypes.map((prototype, index) => (
          <PrototypeCard
            key={prototype.id}
            prototype={prototype}
            variant={variant === 'featured' && index === 0 ? 'featured' : 'default'}
          />
        ))}
      </div>

      {/* Empty state */}
      {displayedPrototypes.length === 0 && (
        <div className="prototype-showcase__empty">
          <p>No prototypes found in this category.</p>
        </div>
      )}

      {/* Stats summary */}
      {variant === 'featured' && (
        <div className="prototype-showcase__summary">
          <div className="prototype-showcase__stat">
            <span className="prototype-showcase__stat-value">11</span>
            <span className="prototype-showcase__stat-label">Total prototypes</span>
          </div>
          <div className="prototype-showcase__stat">
            <span className="prototype-showcase__stat-value">500+</span>
            <span className="prototype-showcase__stat-label">Pages built</span>
          </div>
          <div className="prototype-showcase__stat">
            <span className="prototype-showcase__stat-value">1,100+</span>
            <span className="prototype-showcase__stat-label">Components</span>
          </div>
          <div className="prototype-showcase__stat">
            <span className="prototype-showcase__stat-value">3+ months</span>
            <span className="prototype-showcase__stat-label">Development time</span>
          </div>
        </div>
      )}
    </section>
  );
}
