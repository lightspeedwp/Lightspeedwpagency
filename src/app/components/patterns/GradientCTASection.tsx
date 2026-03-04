/**
 * GradientCTASection Pattern — LSX Design
 */

import { CheckCircle } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { ReactNode } from 'react';


export interface GradientCTASectionProps {
  /** Section title */
  title: string;
  /** Section description */
  description: string;
  /** Benefits checklist */
  benefits: string[];
  /** Primary button text */
  buttonText: string;
  /** Primary button page */
  buttonPage: string;
  /** Gradient variant */
  gradient?: 'blue' | 'purple' | 'green' | 'orange' | 'custom';
  /** Custom gradient value (if gradient='custom') */
  customGradient?: string;
  /** Optional graphic element (icon or component) */
  graphic?: ReactNode;
  /** Button icon */
  buttonIcon?: UniversalIcon;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Show background pattern */
  showPattern?: boolean;
}

export function GradientCTASection({
  title,
  description,
  benefits,
  buttonText,
  buttonPage,
  gradient = 'blue',
  customGradient,
  graphic,
  buttonIcon: ButtonIcon,
  spacing = 'xl',
  showPattern = true
}: GradientCTASectionProps) {
  // Gradient backgrounds
  const gradientBg = customGradient || {
    blue: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
    purple: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
    green: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
    orange: 'linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%)'
  }[gradient];

  return (
    <Section 
      spacing={spacing}
      className="gradient-cta-section"
      style={{ background: gradientBg }}
    >
      {/* Background Pattern */}
      {showPattern && (
        <div className="gradient-cta-section__pattern" />
      )}

      <Container>
        <div className="gradient-cta-section__grid">
          {/* Left: Content */}
          <div className="gradient-cta-section__content">
            {/* Title */}
            <h2 className="gradient-cta-section__title">
              {title}
            </h2>

            {/* Description */}
            <p className="gradient-cta-section__description">
              {description}
            </p>

            {/* Benefits Checklist */}
            <ul className="gradient-cta-section__benefits">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="gradient-cta-section__benefit-item"
                >
                  <CheckCircle size={20} className="gradient-cta-section__benefit-icon" />
                  <span className="gradient-cta-section__benefit-text">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              variant="default"
              size="lg"
              page={buttonPage}
              className="gradient-cta-section__button"
            >
              {buttonText}
              {ButtonIcon && <ButtonIcon size={20} />}
            </Button>
          </div>

          {/* Right: Graphic */}
          {graphic && (
            <div className="gradient-cta-section__graphic-wrapper">
              <div className="gradient-cta-section__graphic-box">
                {graphic}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}