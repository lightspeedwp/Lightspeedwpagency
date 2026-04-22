/**
 * Funky CTA Pattern
 * 
 * High-impact call-to-action section with gradient backgrounds, animated orbs,
 * and emphasis features for the LSX Design "Funky" aesthetic.
 */

import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { Check } from '@phosphor-icons/react';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import '@/styles/patterns/funky-cta.css';

interface FunkyCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonPage?: string;
  buttonHref?: string;
  benefits?: string[];
  className?: string;
}

export function FunkyCTA({ 
  title, 
  description, 
  buttonText, 
  buttonPage, 
  buttonHref = '#', 
  benefits = [],
  className = ''
}: FunkyCTAProps) {
  return (
    <Container 
      spacing="none" 
      className={`funky-cta ${className}`}
    >
      <div className="funky-cta__bg-grid" />
      <div className="funky-cta__glow" />
      
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="funky-cta__inner">
            <div className="funky-cta__content">
              <h2 className="cta-base__title funky-cta__title">
                {title}
              </h2>
              <p className="cta-base__description funky-cta__description">
                {description}
              </p>
              
              <div className="cta-base__actions funky-cta__action">
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

            {benefits.length > 0 && (
            <div className="funky-cta__benefits">
              <ul className="funky-cta__list">
                {(benefits || []).map((benefit, index) => (
                  <li key={index} className="funky-cta__item">
                    <div className="funky-cta__check-wrapper">
                      <Check size={20} className="funky-cta__check" />
                    </div>
                    <span className="funky-cta__text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </Container>
  );
}