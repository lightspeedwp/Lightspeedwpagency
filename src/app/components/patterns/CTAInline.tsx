/**
 * CTA Inline Pattern
 * 
 * Compact mid-content call-to-action pattern for LSX Design.
 * Maps to WordPress pattern: lsx-design/cta/inline
 * 
 * **Design Token Compliance:**
 * - Typography: Uses ONLY CSS variables (var(--text-*))
 * - Fonts: Lexend (headings), Manrope (body) ONLY
 * - Colors: Uses ONLY CSS variables (var(--*))
 * - Spacing: Uses ONLY Tailwind classes and rem values
 * - Border Radius: Uses ONLY CSS variables (var(--radius*))
 * 
 * **WordPress Mapping:**
 * - Block: core/group
 * - Section Style: cta-accent
 * - Pattern Slug: lsx-design/cta/inline
 * - Max Width: 800px (constrained)
 * 
 * @see {@link /guidelines/patterns/CTAInline.md}
 */

import React from 'react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { ArrowRight } from '@phosphor-icons/react';
import '@/styles/patterns/cta-inline.css';

export interface CTAInlineProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  showIcon?: boolean;
}

/**
 * CTAInline Pattern Component
 * 
 * Compact CTA for breaking up long-form content.
 * Smaller than FunkyCTA with 800px max-width.
 */
export function CTAInline({
  heading = "Ready to Get Started?",
  description = "Let's build something amazing together.",
  buttonText = "Start Your Project",
  buttonHref = "/contact",
  secondaryText,
  secondaryHref,
  showIcon = true
}: CTAInlineProps) {
  return (
    <Section sectionStyle="cta-accent" spacing="sm" className="cta-inline">
      <Container maxWidth="800px">
        <div className="cta-base__container cta-inline__container">
          {/* Heading */}
          <Heading 
            level={3} 
            className="cta-base__title cta-inline__heading"
          >
            {heading}
          </Heading>
          
          {/* Description */}
          <p className="cta-base__description cta-inline__description">
            {description}
          </p>
          
          {/* Buttons */}
          <div className="cta-base__actions cta-base__actions--centered">
            <Button 
              size="md" 
              href={buttonHref}
              className="cta-inline__button--primary"
            >
              {buttonText}
              {showIcon && (
                <ArrowRight 
                  size={16} 
                  className="cta-inline__icon"
                />
              )}
            </Button>
            
            {secondaryText && secondaryHref && (
              <Button 
                size="md" 
                href={secondaryHref}
                variant="outline"
                className="cta-inline__button--secondary"
              >
                {secondaryText}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}