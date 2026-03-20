/**
 * Solution Cards Grid Pattern
 *
 * Displays solution categories in a grid layout for homepage.
 * Shows 6 key solutions with icons, descriptions, and links.
 *
 * BEM block: .solution-cards-grid
 *
 * @see /src/styles/patterns/solution-cards-grid.css
 */

import { Link } from 'react-router';
import type { UniversalIcon } from '../../utils/icon-map';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight } from '@phosphor-icons/react';

interface SolutionCard {
  icon: UniversalIcon;
  title: string;
  description: string;
  link: string;
  featured?: boolean;
}

interface SolutionCardsGridProps {
  title: string;
  description: string;
  solutions: SolutionCard[];
  cta?: {
    text: string;
    page: string;
  };
}

export function SolutionCardsGrid({ title, description, solutions, cta }: SolutionCardsGridProps) {
  return (
    <section className="solution-cards-grid" aria-labelledby="solutions-heading">
      <ScrollReveal animation="fade-up">
        <div className="solution-cards-grid__header">
          <h2 id="solutions-heading" className="solution-cards-grid__title">{title}</h2>
          <p className="solution-cards-grid__description">{description}</p>
        </div>
      </ScrollReveal>

      <div className="solution-cards-grid__grid">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <ScrollReveal key={solution.title} animation="fade-up" delay={index * 80}>
              <Link
                to={solution.link}
                className={`solution-cards-grid__card${
                  solution.featured ? ' solution-cards-grid__card--featured' : ''
                }`}
                aria-label={`Learn more about ${solution.title}`}
              >
                <div className="solution-cards-grid__card-icon">
                  <Icon size={28} weight="duotone" />
                </div>
                
                <h3 className="solution-cards-grid__card-title">{solution.title}</h3>
                <p className="solution-cards-grid__card-description">{solution.description}</p>
                
                <span className="solution-cards-grid__card-link">
                  Learn more
                  <ArrowRight size={14} weight="bold" />
                </span>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>

      {cta && (
        <ScrollReveal animation="fade-up" delay={480}>
          <div className="solution-cards-grid__footer">
            <Link to={`/${cta.page}`} className="solution-cards-grid__cta">
              {cta.text}
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
        </ScrollReveal>
      )}
    </section>
  );
}
