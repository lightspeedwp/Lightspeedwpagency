/**
 * Funky CTA Pattern
 * 
 * A bold, high-energy call-to-action section with neon accents,
 * grid backgrounds, and a distinctive layout.
 * 
 * Features:
 * - "Funky" aesthetic (neon shadows, grid patterns)
 * - Feature list with checkmarks
 * - Responsive layout (stack on mobile, side-by-side on desktop)
 * - Fully reusable
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { Check } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollReveal';


interface FunkyCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonPage?: string;
  buttonHref?: string;
  benefits: string[];
  className?: string;
}

export function FunkyCTA({ 
  title, 
  description, 
  buttonText, 
  buttonPage, 
  buttonHref = '#', 
  benefits,
  className = ''
}: FunkyCTAProps) {
  return (
    <Section 
      spacing="none" 
      className={`funky-cta ${className}`}
    >
      <div className="funky-cta__bg-grid" />
      <div className="funky-cta__glow" />
      
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="funky-cta__inner">
            <div className="funky-cta__content">
              <h2 className="funky-cta__title">
                {title}
              </h2>
              <p className="funky-cta__description">
                {description}
              </p>
              
              <div className="funky-cta__action">
                <Button 
                  variant="default" 
                  size="lg" 
                  page={buttonPage as any}
                  href={buttonHref}
                  className="funky-cta__button"
                >
                  {buttonText}
                </Button>
              </div>
            </div>

            <div className="funky-cta__benefits">
              <ul className="funky-cta__list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="funky-cta__item">
                    <div className="funky-cta__check-wrapper">
                      <Check size={20} className="funky-cta__check" />
                    </div>
                    <span className="funky-cta__text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}