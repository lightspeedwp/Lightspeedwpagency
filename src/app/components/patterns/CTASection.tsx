/**
 * CTA Section Pattern
 * 
 * WordPress pattern: lsx-design/cta/section
 * 
 * Call-to-action section with primary and optional secondary button.
 * Follows LSX Design button size standards:
 * - Large buttons (lg) for hero CTAs
 * - Medium buttons (md) for standard CTAs (default)
 * 
 * **Pattern Guidelines:**
 * - Maximum 1 primary button per section
 * - Maximum 1 secondary button (optional)
 * - Uses CSS variables for all styling
 * - WCAG 2.1 AA compliant
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButtonText: string;
  primaryButtonHref?: string;
  primaryButtonPage?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonPage?: string;
  variant?: 'default' | 'highlighted';
  buttonSize?: 'sm' | 'md' | 'lg'; // Button size (default: lg for CTAs)
}

export function CTASection({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonHref = '#',
  primaryButtonPage,
  secondaryButtonText,
  secondaryButtonHref = '#',
  secondaryButtonPage,
  variant = 'default',
  buttonSize = 'lg' // Default to large for CTA sections
}: CTASectionProps) {
  const isHighlighted = variant === 'highlighted';

  return (
    <Section 
      spacing="xl"
      className={isHighlighted ? 'relative overflow-hidden' : ''}
      style={isHighlighted ? {
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)'
      } : {
        backgroundColor: 'var(--muted)',
        color: 'var(--foreground)'
      }}
    >
      {/* Decorative elements for highlighted variant */}
      {isHighlighted && (
        <>
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
              opacity: '0.1',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
          {/* Decorative gradient orb */}
          <div 
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full"
            style={{
              background: 'var(--accent)',
              opacity: '0.1',
              filter: 'blur(80px)'
            }}
            aria-hidden="true"
          />
        </>
      )}

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 
            className="mb-8"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h2)',  /* Use CSS variable for fluid typography */
              fontWeight: 'var(--font-weight-medium)',  /* Modern: size provides hierarchy */
              lineHeight: 'var(--line-height-snug)',
              letterSpacing: 'var(--letter-spacing-tight)',
              color: isHighlighted ? 'var(--primary-foreground)' : 'var(--foreground)',
              margin: 0
            }}
          >
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p 
              className="mb-10 mx-auto"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lead)',  /* Use CSS variable (20px) for lead text */
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-relaxed)',
                color: isHighlighted ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                opacity: isHighlighted ? 0.95 : 1,
                maxWidth: '700px'
              }}
            >
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {/* Primary Button */}
            <Button 
              variant={isHighlighted ? 'secondary' : 'primary'}
              size={buttonSize}
              href={primaryButtonHref}
              page={primaryButtonPage}
              style={isHighlighted ? {
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              } : undefined}
            >
              {primaryButtonText}
            </Button>

            {/* Secondary Button (optional) */}
            {secondaryButtonText && (
              <Button 
                variant="outline"
                size={buttonSize}
                href={secondaryButtonHref}
                page={secondaryButtonPage}
                style={isHighlighted ? {
                  borderColor: 'var(--primary-foreground)',
                  color: 'var(--primary-foreground)',
                  backgroundColor: 'transparent'
                } : undefined}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>

          {/* Trust indicators (only for highlighted variant) */}
          {variant === 'highlighted' && (
            <div 
              className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8"
              style={{
                borderTop: '1px solid var(--primary-foreground)',
                opacity: 0.6
              }}
            >
              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--primary-foreground)',
                  opacity: 0.9,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontSize: 'var(--text-lead)' }}>✓</span> Free consultation
              </span>
              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--primary-foreground)',
                  opacity: 0.9,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontSize: 'var(--text-lead)' }}>✓</span> Expert guides
              </span>
              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--primary-foreground)',
                  opacity: 0.9,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontSize: 'var(--text-lead)' }}>✓</span> Flexible booking
              </span>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}