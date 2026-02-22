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
import type { Logo } from '../../data/logos';


export interface SocialProofProps {
  heading?: string;
  /** Alias for heading — accepted for convenience */
  title?: string;
  logos: Logo[];
  columns?: 3 | 4 | 5 | 6;
  variant?: 'logos' | 'awards' | 'certifications' | 'funky';
  caption?: string;
  /** Alias for caption — accepted for convenience */
  description?: string;
  showCaption?: boolean;
}

export function SocialProof({
  heading,
  title,
  logos,
  columns = 5,
  variant = 'logos',
  caption,
  description,
  showCaption = true
}: SocialProofProps) {
  const resolvedHeading = heading || title || "Trusted By Industry Leaders";
  const resolvedCaption = caption || description;
  // Default captions based on variant
  const defaultCaption = variant === 'logos' 
    ? 'Join hundreds of businesses that trust our services'
    : variant === 'awards'
    ? 'Recognized for excellence in web design and development'
    : 'Certified professionals committed to quality';

  const finalCaption = resolvedCaption || defaultCaption;

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
          {resolvedHeading}
        </Heading>

        {/* Logo Grid */}
        <div className="social-proof__grid">
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
              <div key={logo.id} className="social-proof__logo-wrapper">
                {LogoImage}
              </div>
            );
          })}
        </div>

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