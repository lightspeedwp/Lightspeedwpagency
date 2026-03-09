/**
 * AI Integrations Landing Template
 *
 * WordPress template: templates/page-solution-ai.html
 *
 * Landing hub for all AI Integration solutions.
 *
 * Pattern order:
 * Hero -> Stats -> Features -> Sub-Page Cards -> FAQs -> CTA
 */

import '../../../styles/templates/page-solution-ai-optimized.css';
import { Container } from '../common/Container';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Brain, Sparkle, ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';


import {
  aiLandingHero,
  aiLandingStats,
  aiLandingFeatures,
  aiSubPages,
  aiLandingFAQs,
  aiLandingCTA,
} from '../../data/ai-integrations-page';

export function AIIntegrationsTemplate() {
  return (
    <div className="ai-page">
      {/* ════════════════ HERO ════════════════ */}
      <section className="ai-page__hero">
        <div className="ai-page__hero-grid" />
        <div className="ai-page__orb ai-page__orb--1" />
        <div className="ai-page__orb ai-page__orb--2" />

        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-12">
            {/* Left: Content */}
            <div className="ai-page__hero-content">
              <ScrollReveal animation="fade-right">
                <div className="ai-page__badge">
                  <Brain size={14} />
                  {aiLandingHero.badge.text}
                </div>

                <h1 className="ai-page__title">
                  <span className="ai-page__highlight">{aiLandingHero.titleHighlight}</span>
                  <br />
                  WordPress Solutions
                </h1>

                <p className="ai-page__tagline">{aiLandingHero.tagline}</p>

                <div className="wp-flex wp-gap-4">
                  <Link
                    to={slugToPath(aiLandingHero.primaryButton.page)}
                    className="ai-page__btn-primary"
                  >
                    {aiLandingHero.primaryButton.text} <ArrowRight size={18} />
                  </Link>
                  <Link
                    to={slugToPath(aiLandingHero.secondaryButton.page)}
                    className="ai-page__btn-outline"
                  >
                    {aiLandingHero.secondaryButton.text}
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Animated AI visual */}
            <div className="ai-page__visual">
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="ai-page__brain-graphic">
                  <div className="ai-page__brain-ring ai-page__brain-ring--1" />
                  <div className="ai-page__brain-ring ai-page__brain-ring--2" />
                  <div className="ai-page__brain-ring ai-page__brain-ring--3" />
                  <Brain size={72} className="ai-page__brain-icon" />
                  <div className="ai-page__orbit-node ai-page__orbit-node--1">
                    <Sparkle size={16} />
                  </div>
                  <div className="ai-page__orbit-node ai-page__orbit-node--2">
                    <ArrowRight size={16} />
                  </div>
                  <div className="ai-page__orbit-node ai-page__orbit-node--3">
                    <Sparkle size={16} />
                  </div>
                  <div className="ai-page__orbit-node ai-page__orbit-node--4">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ════════════════ STATS ════════════════ */}
      <section className="ai-page__stats">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="ai-page__section-header">
              <h2 className="ai-page__section-title">AI Impact by the Numbers</h2>
              <p className="ai-page__section-description">Real results from businesses using AI with WordPress</p>
            </div>
            <StatsGrid
              stats={aiLandingStats.map((s) => ({
                icon: s.icon,
                value: s.value,
                label: s.label,
                description: s.description,
              }))}
              columns={4}
              variant="default"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ════════════════ FEATURES ════════════════ */}
      <FeatureGrid
        title="What AI Can Do for Your WordPress Site"
        description="A complete suite of AI capabilities purpose-built for WordPress"
        items={aiLandingFeatures}
        columns={3}
        variant="default"
      />

      {/* ════════════════ SUB-PAGE CARDS ════════════════ */}
      <section className="ai-page__cards-section">
        <Container>
          <div className="ai-page__cards-header">
            <ScrollReveal animation="fade-up">
              <h2 className="ai-page__cards-title">Explore AI Solutions</h2>
              <p className="ai-page__cards-description">
                Dive deeper into each AI capability. Every solution is designed to integrate seamlessly with your WordPress site.
              </p>
            </ScrollReveal>
          </div>

          <div className="ai-page__cards-grid">
            {aiSubPages.map((card, index) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.slug} animation="fade-up" delay={index * 100}>
                  <Link
                    to={slugToPath(card.slug)}
                    className="ai-page__card"
                    style={{ '--card-accent': `var(--wp--preset--color--${card.accent})` } as React.CSSProperties}
                    aria-label={`Learn more about ${card.title}`}
                  >
                    <div className="ai-page__card-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="ai-page__card-title">{card.title}</h3>
                    <p className="ai-page__card-description">{card.description}</p>
                    <span className="ai-page__card-link">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════ FAQS ════════════════ */}
      <FAQSection
        title="AI Integration FAQs"
        description="Common questions about adding AI to WordPress"
        faqs={aiLandingFAQs}
        variant="muted"
      />

      {/* ════════════════ CTA ════════════════ */}
      <FunkyCTA
        title={aiLandingCTA.title}
        description={aiLandingCTA.description}
        buttonText={aiLandingCTA.buttons[0].text}
        buttonPage={aiLandingCTA.buttons[0].page}
        benefits={[
          'AI content, SEO, chatbots, and analytics',
          'WordPress-native — works with your existing setup',
          'GDPR compliant and privacy-first',
          'Measurable ROI within 30 days',
        ]}
      />
    </div>
  );
}