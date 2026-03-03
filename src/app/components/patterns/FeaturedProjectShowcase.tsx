/**
 * Featured Project Showcase Pattern
 * 
 * WordPress pattern: lsx-design/content/featured-project-showcase
 * 
 * Displays a featured project/case study with stats, testimonial, and CTA.
 * Two-column layout: Content (left) + Image with testimonial overlay (right).
 * 
 * All styling in /src/styles/featured-project-showcase.css (user-editable)
 * 
 * **Usage:**
 * ```tsx
 * <FeaturedProjectShowcase
 *   badge="FEATURED PROJECT"
 *   badgeIcon={Sparkles}
 *   title="Our work speaks for itself"
 *   description="See our recent case study and discover how we helped transform their online presence."
 *   stats={[
 *     { value: '500K+', label: 'Websites Hosted' },
 *     { value: '15+', label: 'Years Experience' }
 *   ]}
 *   ctaLabel="View Full Project"
 *   ctaPage="portfolio"
 *   image={{
 *     src: 'https://...',
 *     alt: 'Featured project mockup'
 *   }}
 *   testimonial={{
 *     initials: 'JL',
 *     name: 'James Laughton',
 *     role: 'Marketing Operations Specialist',
 *     quote: 'Professional, skilled and supportive...'
 *   }}
 * />
 * ```
 */

import type { UniversalIcon } from '../../utils/icon-map';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { ExternalLink } from 'lucide-react';


export interface FeaturedProjectStat {
  /** Stat value (e.g., "500K+", "99.9%") */
  value: string;
  /** Stat label/description */
  label: string;
}

export interface FeaturedProjectImage {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
}

export interface FeaturedProjectTestimonial {
  /** Client initials for avatar */
  initials: string;
  /** Client name */
  name: string;
  /** Client role/title */
  role: string;
  /** Testimonial quote */
  quote: string;
}

export interface FeaturedProjectShowcaseProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: UniversalIcon;
  /** Section title */
  title: string;
  /** Section description */
  description: string;
  /** Stats to display (3 recommended) */
  stats: FeaturedProjectStat[];
  /** CTA button label */
  ctaLabel: string;
  /** CTA button page (for navigation) */
  ctaPage: string;
  /** Project image */
  image: FeaturedProjectImage;
  /** Optional testimonial overlay */
  testimonial?: FeaturedProjectTestimonial;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background color override */
  backgroundColor?: string;
  /** Reverse layout (image left, content right) */
  reverseLayout?: boolean;
}

export function FeaturedProjectShowcase({
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  stats,
  ctaLabel,
  ctaPage,
  image,
  testimonial,
  spacing = 'xl',
  backgroundColor = 'var(--background)',
  reverseLayout = false
}: FeaturedProjectShowcaseProps) {
  // Build grid classes
  const gridClasses = [
    'featured-project__grid',
    reverseLayout && 'featured-project__grid--reverse'
  ].filter(Boolean).join(' ');

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        <div className={gridClasses}>
          {/* Content Column */}
          <div className="featured-project__content">
            {/* Badge */}
            {badge && (
              <div className="featured-project__badge">
                {BadgeIcon && <BadgeIcon size={14} />}
                {badge}
              </div>
            )}

            {/* Title */}
            <h2 className="featured-project__title">
              {title}
            </h2>

            {/* Description */}
            <p className="featured-project__description">
              {description}
            </p>

            {/* Stats Grid */}
            {stats && stats.length > 0 && (
              <div className="featured-project__stats">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="featured-project__stat-value">
                      {stat.value}
                    </div>
                    <div className="featured-project__stat-label">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <Button
              variant="default"
              size="lg"
              page={ctaPage}
            >
              {ctaLabel}
              <ExternalLink size={20} />
            </Button>
          </div>

          {/* Image Column */}
          <div className="featured-project__image-wrapper">
            {/* Project Image */}
            <div className="featured-project__image-container">
              <img
                src={image.src}
                alt={image.alt}
                className="featured-project__image"
              />
            </div>

            {/* Testimonial Card Overlay */}
            {testimonial && (
              <div className="featured-project__testimonial">
                <div className="featured-project__testimonial-header">
                  {/* Avatar */}
                  <div className="featured-project__avatar">
                    <span className="featured-project__avatar-initials">
                      {testimonial.initials}
                    </span>
                  </div>

                  {/* Author Info */}
                  <div>
                    <div className="featured-project__author-name">
                      {testimonial.name}
                    </div>
                    <div className="featured-project__author-role">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="featured-project__quote">
                  "{testimonial.quote}"
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedProjectShowcase;
