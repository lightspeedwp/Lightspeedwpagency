/**
 * Included Solutions Pattern
 * 
 * Shows which solutions include a specific service.
 * Used on service detail pages for cross-linking.
 * 
 * WordPress equivalent: Custom query block showing related solutions
 * 
 * Design: Glassmorphism cards with neon gradient borders
 * 
 * CRITICAL: 100% Design System Compliance
 * - Fonts: var(--font-primary), var(--font-secondary) ONLY
 * - Colors: var(--primary), var(--foreground), var(--background), etc.
 * - Spacing: var(--spacing-*)
 * - Borders: var(--radius-*)
 * - NO hardcoded values
 * 
 * @see /src/styles/patterns/included-solutions.css
 * @see /src/app/data/service-solution-map.ts
 * 
 * @example
 * <IncludedSolutions serviceSlug="design" />
 * <IncludedSolutions serviceSlug="development" limit={3} />
 * <IncludedSolutions serviceSlug="seo" featuredOnly />
 */

import { Link } from 'react-router';
import { ArrowRight, Package } from 'lucide-react';
import { getSolutionsForService, getFeaturedSolutionsForService, type SolutionReference } from '../../data/service-solution-map';
import { useScrollReveal, ScrollReveal } from '../../hooks/useScrollReveal';
// CSS imported centrally via /src/styles/index.css

export interface IncludedSolutionsProps {
  /** Service slug to look up solutions for */
  serviceSlug: string;
  
  /** Section title */
  title?: string;
  
  /** Section description */
  description?: string;
  
  /** Maximum number of solutions to show */
  limit?: number;
  
  /** Show only featured solutions */
  featuredOnly?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Included Solutions Pattern Component
 * 
 * Displays solutions that include a specific service
 */
export function IncludedSolutions({
  serviceSlug,
  title = 'Included in These Solutions',
  description = 'This service is a key component of the following comprehensive solutions.',
  limit,
  featuredOnly = false,
  className = '',
}: IncludedSolutionsProps) {
  // Get solutions for this service
  const allSolutions = featuredOnly 
    ? getFeaturedSolutionsForService(serviceSlug)
    : getSolutionsForService(serviceSlug);
  
  // Apply limit if provided
  const solutions = limit ? allSolutions.slice(0, limit) : allSolutions;
  
  // Don't render if no solutions
  if (solutions.length === 0) {
    return null;
  }
  
  // ScrollReveal for header
  const { ref: headerRef, style: headerStyle } = useScrollReveal({ 
    animation: 'fade-up',
    duration: 600,
  });
  
  return (
    <div className={`included-solutions ${className}`}>
      {/* Header */}
      <div 
        className="included-solutions__header"
        ref={headerRef as React.RefObject<HTMLDivElement>}
        style={headerStyle}
      >
        <div className="included-solutions__icon-wrapper">
          <Package size={32} className="included-solutions__icon" aria-hidden="true" />
        </div>
        
        <h2 className="included-solutions__title">{title}</h2>
        
        {description && (
          <p className="included-solutions__description">{description}</p>
        )}
      </div>
      
      {/* Solutions Grid */}
      <div className="included-solutions__grid">
        {solutions.map((solution, index) => (
          <ScrollReveal
            key={solution.id}
            animation="fade-up"
            delay={100 + (index * 50)}
            duration={600}
          >
            <SolutionCard solution={solution} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

/**
 * Solution Card Sub-component
 * 
 * Individual solution card with glassmorphism styling
 */
interface SolutionCardProps {
  solution: SolutionReference;
}

function SolutionCard({ solution }: SolutionCardProps) {
  const Icon = solution.icon;
  
  return (
    <Link
      to={`/solutions/${solution.slug}`}
      className="included-solutions__card"
      aria-label={`View ${solution.title}`}
    >
      {/* Decorative gradient stripe */}
      <div className="included-solutions__card-stripe" aria-hidden="true" />
      
      <div className="included-solutions__card-content">
        {/* Featured Badge */}
        {solution.featured && (
          <span className="included-solutions__badge">Featured</span>
        )}
        
        {/* Icon */}
        <div className="included-solutions__card-icon-wrapper">
          <Icon size={24} className="included-solutions__card-icon" aria-hidden="true" />
        </div>
        
        {/* Title */}
        <h3 className="included-solutions__card-title">{solution.title}</h3>
        
        {/* Tagline */}
        <p className="included-solutions__card-tagline">{solution.tagline}</p>
        
        {/* Pricing (if available) */}
        {solution.pricing && (
          <div className="included-solutions__card-pricing">
            <span className="included-solutions__card-price">
              {solution.pricing.from}
            </span>
            <span className="included-solutions__card-price-label">
              {solution.pricing.label}
            </span>
          </div>
        )}
        
        {/* CTA */}
        <div className="included-solutions__card-cta">
          <span className="included-solutions__card-cta-text">View Solution</span>
          <ArrowRight size={16} className="included-solutions__card-cta-icon" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
