/**
 * LSX Search Product Page Template — Funky Neon Redesign
 *
 * Dedicated page for LSX Search plugin/product.
 * WordPress Mapping: Product detail page
 *
 * Theme: Neon search pulses, glassmorphism cards, floating orbs
 * Features:
 * - Parallax hero with floating orbs + mesh grid
 * - Neon glow badge
 * - Glassmorphism feature/benefit cards
 * - Process steps with neon numbering
 * - Search capabilities showcase
 * - Interactive search demo
 * - FAQ section
 * - FunkyCTA conversion section
 * - ScrollReveal entry animations
 * - 100% CSS variable compliance
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/lsx-search-page.css
 * - BEM naming throughout
 */

import { Section } from '@/app/components/common/Section';
import { Container } from '@/app/components/common/Container';
import { FunkyCTA } from '@/app/components/patterns/FunkyCTA';
import { FAQSection } from '@/app/components/patterns/FAQSection';
import { Buttons } from '@/app/components/blocks/design/Buttons';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Search } from 'lucide-react';

import {
  lsxSearchHero,
  lsxSearchFeatures,
  lsxSearchBenefits,
  lsxSearchProcess,
  lsxSearchCapabilities,
  lsxSearchSpecs,
  lsxSearchFAQs,
  lsxSearchCTA
} from '@/app/data/lsx-search-page';

/**
 * LSX Search Product Page Template
 */
export function LSXSearchTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <div className="lsx-search">
      {/* ============================================
          1. HERO SECTION (Parallax + Floating Orbs)
          ============================================ */}
      <section className="lsx-search__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1759912301996-3b99deda9996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBzZWFyY2glMjB0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NzE1ODQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon search technology digital"
          className="lsx-search__hero-bg"
        />
        <div className="lsx-search__hero-overlay" />
        <div className="lsx-search__hero-grid" />

        {/* Floating Orbs */}
        <div className="lsx-search__orb lsx-search__orb--1" />
        <div className="lsx-search__orb lsx-search__orb--2" />
        <div className="lsx-search__orb lsx-search__orb--3" />

        <Container>
          <div className="lsx-search__hero-content">
            <span className="lsx-search__hero-badge">
              <Search size={16} />
              {lsxSearchHero.badge.text}
            </span>

            <h1 className="lsx-search__hero-title">
              {lsxSearchHero.title}{' '}
              <span className="lsx-search__hero-highlight">
                {lsxSearchHero.titleHighlight}
              </span>
            </h1>

            <p className="lsx-search__hero-subtitle">
              {lsxSearchHero.description}
            </p>

            <Buttons
              buttons={[
                { text: lsxSearchHero.cta.primary.text, page: lsxSearchHero.cta.primary.page, variant: 'default', size: 'lg' },
                { text: lsxSearchHero.cta.secondary.text, page: lsxSearchHero.cta.secondary.page, variant: 'outline', size: 'lg' }
              ]}
              alignment="center"
            />
          </div>
        </Container>
      </section>

      {/* ============================================
          2. FEATURES SECTION
          ============================================ */}
      <section className="lsx-search__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">Key Features</h2>
              <p className="lsx-search__section-description">
                Powerful search functionality that your visitors will love
              </p>
            </div>
          </ScrollReveal>

          <div className="lsx-search__features-grid">
            {lsxSearchFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                  <div className="lsx-search__feature-card">
                    <div className="lsx-search__feature-glow" />
                    <div className="lsx-search__feature-icon">
                      <Icon />
                    </div>
                    <h3 className="lsx-search__feature-title">{feature.title}</h3>
                    <p className="lsx-search__feature-description">{feature.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          3. BENEFITS SECTION
          ============================================ */}
      <section className="lsx-search__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">Why LSX Search?</h2>
              <p className="lsx-search__section-description">
                Transform your website search experience with advanced functionality
              </p>
            </div>
          </ScrollReveal>

          <div className="lsx-search__benefits-grid">
            {lsxSearchBenefits.map((benefit, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="lsx-search__benefit-card">
                  <h3 className="lsx-search__benefit-title">{benefit.title}</h3>
                  <p className="lsx-search__benefit-description">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. HOW IT WORKS
          ============================================ */}
      <section className="lsx-search__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">How It Works</h2>
              <p className="lsx-search__section-description">Get started in 4 simple steps</p>
            </div>
          </ScrollReveal>

          <div className="lsx-search__process-grid">
            {lsxSearchProcess.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 120}>
                <div className="lsx-search__process-step">
                  <div className="lsx-search__process-number">{step.step}</div>
                  <div className="lsx-search__process-content">
                    <h3 className="lsx-search__process-title">{step.title}</h3>
                    <p className="lsx-search__process-description">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          5. SEARCH CAPABILITIES
          ============================================ */}
      <section className="lsx-search__capabilities">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">{lsxSearchCapabilities.title}</h2>
              <p className="lsx-search__section-description">{lsxSearchCapabilities.description}</p>
            </div>
          </ScrollReveal>

          <div className="lsx-search__capabilities-grid">
            {lsxSearchCapabilities.capabilities.map((capability, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="lsx-search__capability-category">
                  <h3 className="lsx-search__capability-title">{capability.category}</h3>
                  <ul className="lsx-search__capability-list">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="lsx-search__capability-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          6. TECHNICAL SPECIFICATIONS
          ============================================ */}
      <section className="lsx-search__specs">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">{lsxSearchSpecs.title}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="lsx-search__specs-grid">
              {lsxSearchSpecs.specs.map((spec, index) => (
                <div key={index} className="lsx-search__spec-item">
                  <span className="lsx-search__spec-label">{spec.label}</span>
                  <span className="lsx-search__spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          7. SEARCH DEMO
          ============================================ */}
      <section className="lsx-search__demo">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-search__demo-container">
              <h2 className="lsx-search__demo-title">See It In Action</h2>
              <div className="lsx-search__demo-input-wrapper">
                <Search size={20} className="lsx-search__demo-icon" />
                <input
                  type="search"
                  placeholder="Try searching for something..."
                  className="lsx-search__demo-input"
                  aria-label="Search demo"
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          8. FAQ SECTION
          ============================================ */}
      <section className="lsx-search__faq">
        <Container>
          <ScrollReveal animation="fade-up">
            <FAQSection faqs={lsxSearchFAQs} />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          9. CTA SECTION (FunkyCTA)
          ============================================ */}
      <FunkyCTA
        title={lsxSearchCTA.title}
        description={lsxSearchCTA.description}
        buttonText={lsxSearchCTA.buttons[0].text}
        buttonPage={lsxSearchCTA.buttons[0].page}
        benefits={[
          'Lightning-fast search results',
          'Faceted filtering built-in',
          'WordPress native integration',
          'AJAX-powered instant results',
          'Free community support'
        ]}
      />
    </div>
  );
}
