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
 * All styling in /src/styles/cta-section.css (user-editable)
 * 
 * **Pattern Guidelines:**
 * - Maximum 1 primary button per section
 * - Maximum 1 secondary button (optional)
 * - Uses CSS variables for all styling
 * - WCAG 2.1 AA compliant
 * 
 * **NEW (Jan 20, 2025):**
 * - Added `gradient` prop for gradient backgrounds
 * - 11 gradient variants available (blue, purple, red, green, amber, cyan, sky, slate, violet, purple-light, purple-indigo)
 * - Automatic orb decoration for gradient variants
 * - 100% WCAG 2.1 AA compliant
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import '@/styles/patterns/cta-section.css';

type GradientVariant = 
  | 'blue' 
  | 'purple' 
  | 'purple-light' 
  | 'purple-indigo' 
  | 'red' 
  | 'green' 
  | 'amber' 
  | 'cyan' 
  | 'sky' 
  | 'slate' 
  | 'violet';

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
  gradient?: GradientVariant; // NEW: Gradient background variant
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
  buttonSize = 'lg', // Default to large for CTA sections
  gradient // NEW: Gradient variant prop
}: CTASectionProps) {
  const isHighlighted = variant === 'highlighted';
  const hasGradient = !!gradient;

  // Build section class names
  const sectionClasses = [
    hasGradient ? `wp-gradient-${gradient}` : 
    isHighlighted ? 'cta-section--highlighted' : 
    'cta-section--default'
  ].filter(Boolean).join(' ');

  // Determine orb color based on gradient (maps gradient name to orb color)
  const orbColor = gradient || 'blue';

  return (
    <Section 
      spacing="xl"
      className={sectionClasses}
    >
      {/* Gradient Orb Decoration (NEW) */}
      {hasGradient && (
        <div 
          className={`wp-gradient-orb wp-gradient-orb--${orbColor} wp-gradient-orb--top-right`}
          aria-hidden="true"
        />
      )}

      {/* Decorative elements for highlighted variant (legacy) */}
      {isHighlighted && !hasGradient && (
        <>
          {/* Subtle gradient overlay */}
          <div 
            className="cta-section__gradient-overlay"
            aria-hidden="true"
          />
          {/* Decorative gradient orb */}
          <div 
            className="cta-section__gradient-orb"
            aria-hidden="true"
          />
        </>
      )}

      <Container className="cta-section__container">
        <div className="cta-section__content">
          {/* Title */}
          <h2 className="cta-section__title">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="cta-section__description">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="cta-section__buttons">
            {/* Primary Button */}
            <Button 
              variant={(isHighlighted || hasGradient) ? 'secondary' : 'primary'}
              size={buttonSize}
              href={primaryButtonHref}
              page={primaryButtonPage}
              className={(isHighlighted || hasGradient) ? 'cta-section__button--primary-highlighted' : undefined}
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
                className={(isHighlighted || hasGradient) ? 'cta-section__button--secondary-highlighted' : undefined}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>

          {/* Trust indicators (only for highlighted variant) */}
          {variant === 'highlighted' && (
            <div className="cta-section__trust-indicators">
              <span className="cta-section__trust-item">
                <span className="cta-section__trust-check">✓</span> Free consultation
              </span>
              <span className="cta-section__trust-item">
                <span className="cta-section__trust-check">✓</span> Expert guides
              </span>
              <span className="cta-section__trust-item">
                <span className="cta-section__trust-check">✓</span> Flexible booking
              </span>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
