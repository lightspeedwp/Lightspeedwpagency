/**
 * Wetu Importer Product Page Template — Funky Neon Redesign
 *
 * Dedicated page for Wetu Importer plugin/product.
 * WordPress Mapping: Product detail page
 *
 * Theme: Neon data flow, glassmorphism cards, floating orbs
 * Features:
 * - Parallax hero with floating orbs + mesh grid
 * - Neon glow badge
 * - Glassmorphism feature/benefit cards
 * - Process steps with neon numbering
 * - Pricing cards with neon hover
 * - FAQ section
 * - FunkyCTA conversion section
 * - ScrollReveal entry animations
 * - 100% CSS variable compliance
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/wetu-importer-page.css
 * - BEM naming throughout
 * 
 * PATTERN COMPONENTS:
 * - ✅ FeatureList — Key features (glassmorphism variant)
 * - ✅ FeatureList — Benefits grid (4 items, 2 columns)
 * - ✅ ProcessTimeline — 4-step process (numbered variant)
 * - ✅ FAQSection — FAQ accordion
 * - ✅ FunkyCTA — Final CTA section
 * 
 * @migrated March 3, 2026 — Phase 3.2: Migrated inline benefits + process (~65 lines saved)
 */

import '../../../styles/templates/wetu-importer-page.css';
import { Check, UploadSimple as Upload, Database, ArrowsClockwise as RefreshCw, Lightning as Zap, Gear as Settings, Globe } from '@phosphor-icons/react';
import { Section } from '@/app/components/common/Section';
import { Container } from '@/app/components/common/Container';
import { FunkyCTA } from '@/app/components/patterns/FunkyCTA';
import { FAQSection } from '@/app/components/patterns/FAQSection';
import { FeatureList } from '@/app/components/patterns/FeatureList';
import { ProcessTimeline } from '@/app/components/patterns/ProcessTimeline';
import { Buttons } from '@/app/components/blocks/design/Buttons';
import { Heading } from '@/app/components/common/Heading';
import { Paragraph } from '@/app/components/blocks/text/Paragraph';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';

import {
  wetuImporterHero,
  wetuImporterFeatures,
  wetuImporterBenefits,
  wetuImporterProcess,
  wetuImporterSpecs,
  wetuImporterPricing,
  wetuImporterFAQs,
  wetuImporterCTA
} from '@/app/data/wetu-importer-page';

/**
 * Wetu Importer Product Page Template
 */
export function WetuImporterTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <div className="wetu-importer">
      {/* ============================================
          1. HERO SECTION (Parallax + Floating Orbs)
          ============================================ */}
      <section className="wetu-importer__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1607184023678-63ea486d62cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBkYXRhJTIwaW1wb3J0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE1ODQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon data import technology"
          className="wetu-importer__hero-bg"
        />
        <div className="wetu-importer__hero-overlay" />
        <div className="wetu-importer__hero-grid" />

        {/* Floating Orbs */}
        <div className="wetu-importer__orb wetu-importer__orb--1" />
        <div className="wetu-importer__orb wetu-importer__orb--2" />
        <div className="wetu-importer__orb wetu-importer__orb--3" />

        <Container>
          <div className="wetu-importer__hero-content">
            <span className="wetu-importer__hero-badge">
              <Upload size={16} />
              {wetuImporterHero.badge.text}
            </span>

            <h1 className="wetu-importer__hero-title">
              {wetuImporterHero.title}{' '}
              <span className="wetu-importer__hero-highlight">
                {wetuImporterHero.titleHighlight}
              </span>
            </h1>

            <p className="wetu-importer__hero-subtitle">
              {wetuImporterHero.description}
            </p>

            <Buttons
              buttons={[
                { text: wetuImporterHero.cta.primary.text, page: wetuImporterHero.cta.primary.page, variant: 'default', size: 'lg' },
                { text: wetuImporterHero.cta.secondary.text, page: wetuImporterHero.cta.secondary.page, variant: 'outline', size: 'lg' }
              ]}
              alignment="center"
            />
          </div>
        </Container>
      </section>

      {/* ============================================
          2. FEATURES SECTION
          ============================================ */}
      <section className="wetu-importer__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wetu-importer__section-header">
              <Heading level={2} className="wetu-importer__section-title">
                Key Features
              </Heading>
              <Paragraph className="wetu-importer__section-description">
                Everything you need to automate your tour content management
              </Paragraph>
            </div>
          </ScrollReveal>

          <div className="wetu-importer__features-grid">
            <FeatureList
              items={wetuImporterFeatures}
              columns={3}
              variant="glow"
              iconSize="md"
            />
          </div>
        </Container>
      </section>

      {/* ============================================
          3. BENEFITS SECTION
          ============================================ */}
      <section className="wetu-importer__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wetu-importer__section-header">
              <Heading level={2} className="wetu-importer__section-title">
                Why Choose Wetu Importer?
              </Heading>
              <Paragraph className="wetu-importer__section-description">
                Transform how you manage tour content with automation and reliability
              </Paragraph>
            </div>
          </ScrollReveal>

          <div className="wetu-importer__benefits-grid">
            <FeatureList
              items={wetuImporterBenefits}
              columns={2}
              variant="glow"
              iconSize="md"
            />
          </div>
        </Container>
      </section>

      {/* ============================================
          4. HOW IT WORKS (Process Steps)
          ============================================ */}
      <section className="wetu-importer__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wetu-importer__section-header">
              <Heading level={2} className="wetu-importer__section-title">
                How It Works
              </Heading>
              <Paragraph className="wetu-importer__section-description">
                Get started in 4 simple steps
              </Paragraph>
            </div>
          </ScrollReveal>

          <div className="wetu-importer__process-grid">
            <ProcessTimeline
              steps={wetuImporterProcess}
              variant="numbered"
            />
          </div>
        </Container>
      </section>

      {/* ============================================
          5. TECHNICAL SPECIFICATIONS
          ============================================ */}
      <section className="wetu-importer__specs">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wetu-importer__section-header">
              <Heading level={2} className="wetu-importer__section-title">
                {wetuImporterSpecs.title}
              </Heading>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="wetu-importer__specs-grid">
              {wetuImporterSpecs.specs.map((spec, index) => (
                <div key={index} className="wetu-importer__spec-item">
                  <span className="wetu-importer__spec-label">
                    {spec.label}
                  </span>
                  <span className="wetu-importer__spec-value">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          6. PRICING SECTION
          ============================================ */}
      <section className="wetu-importer__pricing">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wetu-importer__section-header">
              <Heading level={2} className="wetu-importer__section-title">
                {wetuImporterPricing.title}
              </Heading>
              <Paragraph className="wetu-importer__section-description">
                {wetuImporterPricing.description}
              </Paragraph>
            </div>
          </ScrollReveal>

          <div className="wetu-importer__pricing-grid">
            {wetuImporterPricing.plans.map((plan, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div
                  className={`wetu-importer__pricing-card ${
                    plan.popular ? 'wetu-importer__pricing-card--popular' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="wetu-importer__pricing-badge">
                      Most Popular
                    </div>
                  )}

                  <Heading level={3} className="wetu-importer__pricing-name">
                    {plan.name}
                  </Heading>
                  <Paragraph className="wetu-importer__pricing-tagline">
                    {plan.tagline}
                  </Paragraph>

                  <div className="wetu-importer__pricing-price">
                    <span className="wetu-importer__pricing-amount">
                      {plan.price.display}
                    </span>
                    <span className="wetu-importer__pricing-period">
                      {plan.price.period}
                    </span>
                  </div>

                  <div className="wetu-importer__pricing-features">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="wetu-importer__pricing-feature">
                        <Check />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Buttons
                    buttons={[
                      {
                        text: plan.cta.text,
                        page: plan.cta.page,
                        variant: plan.popular ? 'default' : 'outline',
                        size: 'md'
                      }
                    ]}
                    alignment="center"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          7. FAQ SECTION
          ============================================ */}
      <section className="wetu-importer__faq">
        <Container>
          <ScrollReveal animation="fade-up">
            <FAQSection faqs={wetuImporterFAQs} />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          8. CTA SECTION (FunkyCTA)
          ============================================ */}
      <FunkyCTA
        title={wetuImporterCTA.title}
        description={wetuImporterCTA.description}
        buttonText={wetuImporterCTA.buttons[0].text}
        buttonPage={wetuImporterCTA.buttons[0].page}
        benefits={[
          'Automated Wetu content sync',
          'Real-time data updates',
          'WordPress native integration',
          'Dedicated technical support',
          'Free setup assistance'
        ]}
      />
    </div>
  );
}