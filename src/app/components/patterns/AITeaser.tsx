/**
 * AI Teaser Pattern
 *
 * AI & thought leadership section for homepage.
 * Highlights AI-ready publishing capabilities and links to AI solutions.
 *
 * BEM block: .ai-teaser
 *
 * @see /src/styles/patterns/ai-teaser.css
 */

import { Link } from 'react-router';
import type { UniversalIcon } from '../../utils/icon-map';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight } from '@phosphor-icons/react';

interface AIFeature {
  icon: UniversalIcon;
  title: string;
  description: string;
}

interface AITeaserProps {
  badge: string;
  title: string;
  description: string;
  features: AIFeature[];
  link: {
    text: string;
    page: string;
  };
}

export function AITeaser({ badge, title, description, features, link }: AITeaserProps) {
  return (
    <section className="ai-teaser" aria-labelledby="ai-heading">
      <ScrollReveal animation="fade-up">
        <div className="ai-teaser__header">
          <span className="ai-teaser__badge">{badge}</span>
          <h2 id="ai-heading" className="ai-teaser__title">{title}</h2>
          <p className="ai-teaser__description">{description}</p>
        </div>
      </ScrollReveal>

      <div className="ai-teaser__features">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <ScrollReveal key={feature.title} animation="fade-up" delay={index * 100}>
              <div className="ai-teaser__feature">
                <div className="ai-teaser__feature-icon">
                  <Icon size={28} weight="duotone" />
                </div>
                <h3 className="ai-teaser__feature-title">{feature.title}</h3>
                <p className="ai-teaser__feature-description">{feature.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal animation="fade-up" delay={300}>
        <div className="ai-teaser__footer">
          <Link to={`/${link.page}`} className="ai-teaser__link">
            {link.text}
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
