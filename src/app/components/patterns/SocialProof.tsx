/**
 * Social Proof Pattern
 * 
 * Client logos, partner badges, awards, and certifications pattern for LSX Design.
 * Maps to WordPress pattern: lsx-design/trust/social-proof
 * 
 * All styling in /src/styles/social-proof.css (user-editable)
 * 
 * **Design Token Compliance:**
 * - Typography: Uses ONLY CSS variables (var(--text-*))
 * - Fonts: var(--font-primary), var(--font-secondary)
 * - Colors: Uses ONLY CSS variables (var(--*))
 * - Spacing: Uses ONLY CSS variables
 * - Transitions: Pure CSS hover effects
 * 
 * **WordPress Mapping:**
 * - Block: core/gallery or core/group
 * - Section Style: testimonial-highlight
 * - Pattern Slug: lsx-design/trust/social-proof
 */

import React from 'react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Grid } from '../blocks/design/Grid';
import type { Logo } from '../../data/logos';

export interface SocialProofProps {
  heading?: string;
  logos: Logo[];
  columns?: 3 | 4 | 5 | 6;
  variant?: 'logos' | 'awards' | 'certifications';
  caption?: string;
  showCaption?: boolean;
}

/**
 * SocialProof Pattern Component
 * 
 * Displays client logos, partner badges, awards, or certifications
 * in a responsive grid layout with grayscale hover effect.
 * 
 * @example
 * ```tsx
 * import { clientLogos } from '../../data';
 * 
 * <SocialProof 
 *   heading="Trusted By Industry Leaders"
 *   logos={clientLogos}
 *   columns={5}
 *   variant="logos"
 * />
 * ```
 */
export function SocialProof({
  heading = "Trusted By Industry Leaders",
  logos,
  columns = 5,
  variant = 'logos',
  caption,
  showCaption = true
}: SocialProofProps) {
  // Default captions based on variant
  const defaultCaption = variant === 'logos' 
    ? 'Join hundreds of businesses that trust our services'
    : variant === 'awards'
    ? 'Recognized for excellence in web design and development'
    : 'Certified professionals committed to quality';

  const finalCaption = caption || defaultCaption;

  // Build social proof classes
  const socialProofClass = `social-proof--${variant}`;

  return (
    <Section sectionStyle="testimonial-highlight" className={socialProofClass}>
      <Container>
        {/* Heading */}
        <Heading 
          level={3} 
          className="social-proof__heading"
        >
          {heading}
        </Heading>

        {/* Logo Grid */}
        <Grid 
          columns={columns} 
          gap={8}
          className="social-proof__grid"
        >
          {logos.map((logo) => {
            const LogoImage = (
              <img
                src={logo.src}
                alt={logo.alt}
                className="social-proof__logo"
              />
            );

            // If logo has link, wrap in anchor
            if (logo.href) {
              return (
                <a
                  key={logo.id}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-proof__logo-wrapper"
                  aria-label={`Visit ${logo.alt} website`}
                >
                  {LogoImage}
                </a>
              );
            }

            return (
              <div key={logo.id}>
                {LogoImage}
              </div>
            );
          })}
        </Grid>

        {/* Caption */}
        {showCaption && (
          <p className="social-proof__caption">
            {finalCaption}
          </p>
        )}
      </Container>
    </Section>
  );
}
