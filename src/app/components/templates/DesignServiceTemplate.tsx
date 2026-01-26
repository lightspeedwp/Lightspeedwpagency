/**
 * Design Service Template
 * 
 * WordPress template: templates/page-design-service.html
 * 
 * Pattern order: Breadcrumbs → Hero → Overview → Services → Process → Principles → Tools → Packages → FAQs → CTA
 * 
 * CSS: /src/styles/design-service.css
 * - 100% CSS classes (no Tailwind)
 * - Light/dark mode adaptive
 * - Fluid padding (32px → 24px → 16px)
 * - 100% CSS variables (user-controllable)
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Buttons, Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { 
  Palette,
  CheckCircle,
  Check
} from 'lucide-react';
import { useState } from 'react';
import '@/styles/design-service.css';

// Import centralized data
import {
  designServiceHero,
  designServiceOverview,
  designServices,
  designProcess,
  designPrinciples,
  designTools,
  designPackages,
  designServiceFAQs,
  designServiceCTA
} from '../../data/design-service-page';

export function DesignServiceTemplate() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section className="design-service-breadcrumbs design-service-section">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: designServiceHero.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <section className="design-service-hero design-service-section">
          {/* Gradient orb decoration */}
          <div className="design-service-hero__orb" aria-hidden="true" />

          <Container>
            <div className="design-service-hero__content">
              <div className="design-service-hero__badge">
                <Palette size={14} />
                WordPress Design
              </div>

              <h1 className="design-service-hero__title">
                Modern Web <span className="design-service-hero__title-gradient">Design</span> That Converts Visitors Into Customers
              </h1>

              <p className="design-service-hero__tagline">
                {designServiceHero.tagline}
              </p>

              <p className="design-service-hero__description">
                {designServiceHero.description}
              </p>

              <Buttons alignment="center" gap="md">
                <Button 
                  page="contact" 
                  size="lg"
                  variant="default"
                >
                  Start Your Project
                </Button>
                <Button 
                  page="portfolio" 
                  size="lg"
                  variant="outline"
                >
                  View Portfolio
                </Button>
              </Buttons>
            </div>
          </Container>
        </section>

        {/* Overview Section */}
        <section className="design-service-overview design-service-section">
          <Container>
            <div className="design-service-overview__container">
              <div className="design-service-section-header">
                <h2 className="design-service-section-header__title">
                  {designServiceOverview.title}
                </h2>

                <p className="design-service-section-header__description" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  {designServiceOverview.description}
                </p>
              </div>

              {/* Stats */}
              <div className="design-service-overview__stats">
                {designServiceOverview.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="design-service-stat-card">
                      <Icon size={32} className="design-service-stat-card__icon" />
                      <div className="design-service-stat-card__value">
                        {stat.value}
                      </div>
                      <div className="design-service-stat-card__label">
                        {stat.label}
                      </div>
                      <p className="design-service-stat-card__description">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Design Services Section */}
        <section className="design-service-services design-service-section">
          <Container>
            <div className="design-service-services__container">
              <div className="design-service-section-header">
                <h2 className="design-service-section-header__title">
                  Our Design Services
                </h2>

                <p className="design-service-section-header__description">
                  Comprehensive web design solutions
                </p>
              </div>

              <div className="design-service-services__grid">
                {designServices.map((service) => {
                  const Icon = service.icon;
                  const isHovered = hoveredService === service.id;

                  return (
                    <div
                      key={service.id}
                      className="design-service-service-card"
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div className="design-service-service-card__icon-wrapper">
                        <Icon size={24} className="design-service-service-card__icon" />
                      </div>

                      <h3 className="design-service-service-card__title">
                        {service.title}
                      </h3>

                      <p className="design-service-service-card__description">
                        {service.description}
                      </p>

                      <ul className="design-service-service-card__features">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="design-service-service-card__feature">
                            <CheckCircle size={14} style={{ color: 'var(--success)', flexShrink: 0 }} />
                            <span className="design-service-service-card__feature-text">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Design Process Section */}
        <section className="design-service-process design-service-section">
          <Container>
            <div className="design-service-process__container">
              <div className="design-service-section-header">
                <h2 className="design-service-section-header__title">
                  Our Design Process
                </h2>

                <p className="design-service-section-header__description">
                  A proven 4-step process for exceptional results
                </p>
              </div>

              <div className="design-service-process__grid">
                {designProcess.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.step} className="design-service-process-card">
                      <div className="design-service-process-card__badge">
                        {step.step}
                      </div>

                      <div className="design-service-process-card__icon-wrapper">
                        <Icon size={28} className="design-service-process-card__icon" />
                      </div>

                      <h3 className="design-service-process-card__title">
                        {step.title}
                      </h3>

                      <p className="design-service-process-card__description">
                        {step.description}
                      </p>

                      <ul className="design-service-process-card__deliverables">
                        {step.deliverables.map((item, idx) => (
                          <li key={idx} className="design-service-process-card__deliverable">
                            <CheckCircle size={12} style={{ color: 'var(--success)', flexShrink: 0 }} />
                            <span className="design-service-process-card__deliverable-text">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Design Principles Section */}
        <section className="design-service-principles design-service-section">
          <Container>
            <div className="design-service-principles__container">
              <div className="design-service-section-header">
                <h2 className="design-service-section-header__title">
                  Our Design Principles
                </h2>

                <p className="design-service-section-header__description">
                  The foundation of every design we create
                </p>
              </div>

              <div className="design-service-principles__grid">
                {designPrinciples.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <div key={index} className="design-service-principle-card">
                      <div className="design-service-principle-card__icon-wrapper">
                        <Icon size={24} className="design-service-principle-card__icon" />
                      </div>

                      <h3 className="design-service-principle-card__title">
                        {principle.title}
                      </h3>

                      <p className="design-service-principle-card__description">
                        {principle.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Design Tools Section */}
        <section className="design-service-tools design-service-section">
          <Container>
            <div className="design-service-tools__container">
              <div className="design-service-section-header">
                <h2 className="design-service-section-header__title">
                  Design Tools & Technologies
                </h2>

                <p className="design-service-section-header__description">
                  Industry-leading tools for professional results
                </p>
              </div>

              <div className="design-service-tools__grid">
                {designTools.map((category, index) => (
                  <div key={index} className="design-service-tools-category">
                    <h3 className="design-service-tools-category__title">
                      {category.category}
                    </h3>

                    <div className="design-service-tools-category__list">
                      {category.tools.map((tool, idx) => (
                        <span key={idx} className="design-service-tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Design Packages Section */}
        <section className="design-service-packages design-service-section">
          <Container>
            <div className="design-service-packages__container">
              <div className="design-service-section-header">
                <h2 className="design-service-section-header__title">
                  Design Packages
                </h2>

                <p className="design-service-section-header__description">
                  Choose the right design package for your needs
                </p>
              </div>

              <div className="design-service-packages__grid">
                {designPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`design-service-package-card ${pkg.recommended ? 'design-service-package-card--recommended' : ''}`}
                  >
                    {pkg.recommended && (
                      <div className="design-service-package-card__badge">
                        Most Popular
                      </div>
                    )}

                    <h3 className="design-service-package-card__name">
                      {pkg.name}
                    </h3>

                    <div className="design-service-package-card__price">
                      {pkg.price}
                    </div>

                    <p className="design-service-package-card__description">
                      {pkg.description}
                    </p>

                    <ul className="design-service-package-card__features">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="design-service-package-card__feature">
                          <Check size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />
                          <span className="design-service-package-card__feature-text">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      page="contact" 
                      size="md"
                      variant={pkg.recommended ? 'default' : 'outline'}
                      style={{ width: '100%' }}
                    >
                      Get Started
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about web design services"
          faqs={designServiceFAQs}
          variant="muted"
        />

        {/* CTA Section */}
        <section className="design-service-cta design-service-section">
          <Container>
            <div className="design-service-cta__container">
              <h2 className="design-service-cta__title">
                {designServiceCTA.title}
              </h2>

              <p className="design-service-cta__description">
                {designServiceCTA.description}
              </p>

              <Buttons alignment="center" gap="md">
                <Button 
                  page={designServiceCTA.buttons[0].page as any} 
                  size="lg"
                  variant="default"
                  style={{
                    backgroundColor: 'var(--primary-foreground)',
                    color: 'var(--primary)'
                  }}
                >
                  {designServiceCTA.buttons[0].text}
                </Button>
                <Button 
                  page={designServiceCTA.buttons[1].page as any} 
                  size="lg"
                  variant="outline"
                  style={{
                    borderColor: 'var(--primary-foreground)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  {designServiceCTA.buttons[1].text}
                </Button>
              </Buttons>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}