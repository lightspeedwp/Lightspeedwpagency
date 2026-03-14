/**
 * Featured Project Showcase Pattern
 * 
 * Large hero-style showcase for a single featured project.
 * Maps to WordPress pattern: lsx-design/hero/featured-project
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/patterns/featured-project-showcase.css
 * - Typography: ONLY CSS variables (var(--text-*))
 * - Fonts: Lexend (headings), Manrope (body)
 * - Colors: ONLY CSS variables (var(--*))
 * - Spacing: ONLY rem values and CSS variables
 * - Border Radius: ONLY CSS variables (var(--radius*))
 * 
 * **WordPress Mapping:**
 * - Pattern Slug: lsx-design/hero/featured-project
 * - Max Width: 1400px (container)
 * - Full-bleed background
 * 
 * @see {@link /guidelines/patterns/FeaturedProjectShowcase.md}
 */

import React from 'react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { ArrowSquareOut as ExternalLink } from '@phosphor-icons/react';

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
  background?: 'default' | 'card' | 'muted' | 'transparent';
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
  background = 'default',
  reverseLayout = false
}: FeaturedProjectShowcaseProps) {
  // Build grid classes
  const gridClasses = [
    'featured-project__grid',
    reverseLayout && 'featured-project__grid--reverse'
  ].filter(Boolean).join(' ');

  return (
    <Section spacing={spacing} background={background as any}>
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