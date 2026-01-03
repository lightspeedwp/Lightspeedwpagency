/**
 * Social Proof Pattern
 * 
 * Client logos, partner badges, awards, and certifications pattern for LSX Design.
 * Maps to WordPress pattern: lsx-design/trust/social-proof
 * 
 * **Design Token Compliance:**
 * - Typography: Uses ONLY CSS variables (var(--text-*))
 * - Fonts: Lexend (headings), Manrope (caption) ONLY
 * - Colors: Uses ONLY CSS variables (var(--*))
 * - Spacing: Uses ONLY Tailwind classes
 * - Transitions: Uses ONLY CSS variables
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

  return (
    <Section sectionStyle="testimonial-highlight">
      <Container>
        {/* Heading - Lexend font, CSS variable size */}
        <Heading 
          level={3} 
          style={{ 
            textAlign: 'center', 
            marginBottom: '3rem',
            fontSize: 'var(--text-h3)',
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)'
          }}
        >
          {heading}
        </Heading>

        {/* Logo Grid */}
        <Grid 
          columns={columns} 
          gap={8}
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {logos.map((logo) => {
            const maxWidth = variant === 'certifications' ? '100px' : '120px';
            
            const LogoImage = (
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth,
                  height: 'auto',
                  opacity: 0.7,
                  filter: 'grayscale(100%)',
                  transition: 'all var(--transition-base, 200ms) var(--ease-in-out, ease-in-out)',
                  margin: '0 auto',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                  e.currentTarget.style.filter = 'grayscale(100%)';
                }}
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
                  style={{
                    display: 'block',
                    textDecoration: 'none'
                  }}
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

        {/* Caption - Manrope font, small size */}
        {showCaption && (
          <p
            style={{
              textAlign: 'center',
              fontSize: 'var(--text-small)',
              fontFamily: 'Manrope, sans-serif',
              color: 'var(--muted-foreground)',
              marginTop: '2rem'
            }}
          >
            {finalCaption}
          </p>
        )}
      </Container>
    </Section>
  );
}
