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
 */

import React from 'react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { ArrowRight } from 'lucide-react';

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
 * Smaller than CTASection with 800px max-width.
 * 
 * @example
 * ```tsx
 * <CTAInline 
 *   heading="Ready to Get Started?"
 *   description="Let's build something amazing together."
 *   buttonText="Start Your Project"
 *   buttonHref="/contact"
 * />
 * ```
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
    <Section sectionStyle="cta-accent" spacing="sm">
      <Container maxWidth="800px">
        <div className="text-center">
          {/* Heading - Lexend font, CSS variable size */}
          <Heading 
            level={3} 
            style={{ 
              marginBottom: '1rem',
              fontSize: 'var(--text-h3)',
              fontFamily: 'var(--font-primary)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--accent-foreground)'
            }}
          >
            {heading}
          </Heading>
          
          {/* Description - Manrope font, CSS variable size */}
          <p 
            style={{
              fontSize: 'var(--text-base)',
              fontFamily: 'var(--font-secondary)',
              marginBottom: '2rem',
              color: 'var(--accent-foreground)'
            }}
          >
            {description}
          </p>
          
          {/* Buttons */}
          <div 
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Button 
              size="md" 
              href={buttonHref}
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)'
              }}
            >
              {buttonText}
              {showIcon && (
                <ArrowRight 
                  size={16} 
                  style={{ 
                    marginLeft: '0.5rem',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }} 
                />
              )}
            </Button>
            
            {secondaryText && secondaryHref && (
              <Button 
                size="md" 
                href={secondaryHref}
                variant="outline"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'var(--accent-foreground)',
                  color: 'var(--accent-foreground)'
                }}
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
