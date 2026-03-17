/**
 * LSX Search Product Page Template — Funky Neon Redesign
 *
 * Dedicated page for LSX Search plugin/product.
 * WordPress Mapping: Product detail page
 *
 * Theme: Neon search pulses, glassmorphism cards, floating orbs
 *
 * Layout classes:
 * - product-hero__* (from product-base.css) — hero, orbs, badge, title
 * - product-section__* (from product-base.css) — section headers
 * - product-step__* (from product-base.css) — process steps
 * - product-specs__* (from product-base.css) — specs grid
 * - lsx-search__* (from lsx-search/) — unique sections, funky overrides
 *
 * Pattern components:
 * - FeatureList — Key features section (glow variant)
 * - FAQSection — FAQ section
 * - FunkyCTA — Final conversion section
 *
 * @see /src/styles/templates/lsx-search-page.css
 * @see /src/styles/templates/product-base.css
 */

import '../../../styles/templates/lsx-search-page.css';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { FeatureList } from '../patterns/FeatureList';
import { Buttons } from '../blocks/design/Buttons';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { MagnifyingGlass as Search } from '@phosphor-icons/react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

import {
  lsxSearchHero,
  lsxSearchFeatures,
  lsxSearchBenefits,
  lsxSearchProcess,
  lsxSearchCapabilities,
  lsxSearchSpecs,
  lsxSearchFAQs,
  lsxSearchCTA
} from '../../data/lsx-search-page';

export function LSXSearchTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <div className="product-hero">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'LSX Search' },
        ]}
      />

      {/* Hero section */}
      <section className="product-hero__section">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1759912301996-3b99deda9996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBzZWFyY2glMjB0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NzE1ODQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon search technology digital"
          className="product-hero__bg"
          loading="lazy"
        />
        <div className="product-hero__overlay" />
        <div className="product-hero__grid" />

        {/* Floating orbs */}
        <div className="product-hero__orb product-hero__orb--1" />
        <div className="product-hero__orb product-hero__orb--2" />
        <div className="product-hero__orb product-hero__orb--3" />

        <Container>
          <div className="product-hero__content">
            <span className="product-hero__badge">
              <Search size={16} />
              {lsxSearchHero.badge.text}
            </span>

            <h1 className="product-hero__title">
              {lsxSearchHero.title}{' '}
              <span className="product-hero__highlight">
                {lsxSearchHero.titleHighlight}
              </span>
            </h1>

            <p className="product-hero__subtitle">
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

        <ScrollDownArrow />
      </section>

      {/* Features section */}
      <section className="lsx-search__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="product-section__header">
              <h2 className="product-section__title lsx-search__section-title">Key features</h2>
              <p className="product-section__description">
                Powerful search functionality that your visitors will love
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={lsxSearchFeatures.map((feature) => ({
                icon: feature.icon,
                title: feature.title,
                description: feature.description
              }))}
              columns={3}
              variant="glow"
              iconSize="md"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Benefits section */}
      <section className="lsx-search__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="product-section__header">
              <h2 className="product-section__title lsx-search__section-title">Why LSX Search?</h2>
              <p className="product-section__description">
                Transform your website search experience with advanced functionality
              </p>
            </div>
          </ScrollReveal>

          <div className="lsx-search__benefits-grid responsive-grid-2-cols">
            {lsxSearchBenefits.map((benefit, index) => (
              <ScrollReveal key={`benefit-${index}`} animation="fade-up" delay={index * 100}>
                <div className="lsx-search__benefit-card">
                  <h3 className="lsx-search__benefit-title">{benefit.title}</h3>
                  <p className="lsx-search__benefit-description">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="lsx-search__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="product-section__header">
              <h2 className="product-section__title lsx-search__section-title">How it works</h2>
              <p className="product-section__description">Get started in 4 simple steps</p>
            </div>
          </ScrollReveal>

          <div className="lsx-search__process-grid">
            {lsxSearchProcess.map((step, index) => (
              <ScrollReveal key={`step-${index}`} animation="fade-up" delay={index * 120}>
                <div className="product-step lsx-search__process-step">
                  <div className="product-step__number lsx-search__process-number">{step.step}</div>
                  <div className="product-step__content">
                    <h3 className="product-step__title">{step.title}</h3>
                    <p className="product-step__text">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Search capabilities */}
      <section className="lsx-search__capabilities">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="product-section__header">
              <h2 className="product-section__title lsx-search__section-title">{lsxSearchCapabilities.title}</h2>
              <p className="product-section__description">{lsxSearchCapabilities.description}</p>
            </div>
          </ScrollReveal>

          <div className="lsx-search__capabilities-grid responsive-grid-2-cols">
            {lsxSearchCapabilities.capabilities.map((capability, index) => (
              <ScrollReveal key={`cap-${index}`} animation="fade-up" delay={index * 100}>
                <div className="lsx-search__capability-category">
                  <h3 className="lsx-search__capability-title">{capability.category}</h3>
                  <ul className="lsx-search__capability-list">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={`feat-${featureIndex}`} className="lsx-search__capability-item">
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

      {/* Technical specifications */}
      <section className="lsx-search__specs">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="product-section__header">
              <h2 className="product-section__title lsx-search__section-title">{lsxSearchSpecs.title}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="product-specs">
              {lsxSearchSpecs.specs.map((spec, index) => (
                <div key={`spec-${index}`} className="product-specs__item lsx-search__spec-item">
                  <span className="product-specs__label">{spec.label}</span>
                  <span className="product-specs__value">{spec.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Search demo */}
      <section className="lsx-search__demo">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-search__demo-container">
              <h2 className="lsx-search__demo-title">See it in action</h2>
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

      {/* FAQ section */}
      <section className="lsx-search__faq">
        <Container>
          <ScrollReveal animation="fade-up">
            <FAQSection faqs={lsxSearchFAQs} />
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA section */}
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