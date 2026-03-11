/**
 * Tour Operator Website & Tour Design Solution Template
 *
 * WordPress template: templates/page-solution-tour-design.html
 *
 * A solution page bundling tour content design, itinerary UX, booking integration,
 * destination management, and travel-specific WordPress development.
 *
 * Pattern order:
 * Hero → Challenges → Features → Process → Services → Results → Pricing → FAQs → CTA
 *
 * Pattern Components:
 * - ✅ FeatureList — Tour features grid (glow variant, 3 columns)
 * - ✅ StatsGrid — Platform performance stats (cards variant, 4 columns)
 * - ✅ FAQSection — Tour operator FAQ section
 *
 * @see /src/styles/templates/page-solution-tour-design.css
 * @see /src/app/data/tour-operator-design-page.ts
 * @migrated March 4, 2026 — Migrated inline feature grid to FeatureList and inline stats to StatsGrid (~30 lines saved)
 */

import '../../../styles/templates/page-solution-tour-design.css';
import { Container } from '../common/Container';
import { FAQSection } from '../patterns/FAQSection';
import { FeatureList } from '../patterns/FeatureList';
import { StatsGrid } from '../patterns/StatsGrid';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { ArrowRight, Check, Warning, Compass } from '@phosphor-icons/react';

import {
  tourDesignHero,
  tourDesignChallenges,
  tourDesignFeatures,
  tourDesignProcess,
  tourDesignServices,
  tourDesignResults,
  tourDesignPricing,
  tourDesignFAQs,
  tourDesignCTA,
} from '../../data/tour-operator-design-page';

export function TourOperatorDesignTemplate() {
  return (
    <div className="tour-design-page">
      {/* Hero */}
      <section className="tour-design-page__hero">
        <Container>
          <div className="tour-design-page__hero-layout">
            <div className="tour-design-page__hero-content">
              <ScrollReveal animation="fade-right">
                <div className="tour-design-page__badge">
                  <tourDesignHero.badge.icon size={14} />
                  {tourDesignHero.badge.text}
                </div>
                <h1 className="tour-design-page__title">
                  Tour Operator Website &{' '}
                  <span className="tour-design-page__highlight">{tourDesignHero.highlight}</span>
                </h1>
                <p className="tour-design-page__tagline">{tourDesignHero.tagline}</p>
                <div className="tour-design-page__btn-row">
                  <Link
                    to={slugToPath(tourDesignHero.primaryButton.page)}
                    className="tour-design-page__btn-primary"
                  >
                    {tourDesignHero.primaryButton.text} <ArrowRight size={18} />
                  </Link>
                  <Link
                    to={slugToPath(tourDesignHero.secondaryButton.page)}
                    className="tour-design-page__btn-outline"
                  >
                    {tourDesignHero.secondaryButton.text}
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="tour-design-page__visual">
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="tour-design-page__orb tour-design-page__orb--1" />
                <div className="tour-design-page__orb tour-design-page__orb--2" />
                <div className="tour-design-page__compass">
                  <Compass size={80} className="tour-design-page__compass-icon" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="tour-design-page__challenges">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="tour-design-page__section-header">
              <h2 className="tour-design-page__section-title">{tourDesignChallenges.title}</h2>
              <p className="tour-design-page__section-desc">{tourDesignChallenges.description}</p>
            </div>
          </ScrollReveal>
          <div className="tour-design-page__challenge-grid responsive-grid-2-cols">
            {tourDesignChallenges.items.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 60}>
                <div className="tour-design-page__challenge-item">
                  <Warning size={18} className="tour-design-page__challenge-icon" />
                  <p className="tour-design-page__challenge-text">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tour-Specific Features */}
      <section className="tour-design-page__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="tour-design-page__section-header">
              <h2 className="tour-design-page__section-title">{tourDesignFeatures.title}</h2>
              <p className="tour-design-page__section-desc">{tourDesignFeatures.description}</p>
            </div>
          </ScrollReveal>
          <FeatureList items={tourDesignFeatures.items} columns={3} variant="glow" />
        </Container>
      </section>

      {/* Process */}
      <section className="tour-design-page__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="tour-design-page__section-header">
              <h2 className="tour-design-page__section-title">{tourDesignProcess.title}</h2>
              <p className="tour-design-page__section-desc">{tourDesignProcess.description}</p>
            </div>
          </ScrollReveal>
          <div className="tour-design-page__process-grid responsive-grid-3-cols">
            {tourDesignProcess.steps.map((step, i) => (
              <ScrollReveal key={step.number} animation="fade-up" delay={i * 80}>
                <div className="tour-design-page__process-step">
                  <div className="tour-design-page__step-header">
                    <div className="tour-design-page__step-number">{step.number}</div>
                    <div className="tour-design-page__step-icon">
                      <step.icon size={20} />
                    </div>
                  </div>
                  <h3 className="tour-design-page__step-title">{step.title}</h3>
                  <p className="tour-design-page__step-description">{step.description}</p>
                  <ul className="tour-design-page__step-deliverables">
                    {step.deliverables.map((d, di) => (
                      <li key={di} className="tour-design-page__step-deliverable">
                        <Check size={12} className="tour-design-page__step-deliverable-icon" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <span className="tour-design-page__step-duration">{step.duration}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Included Services */}
      <section className="tour-design-page__services">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="tour-design-page__section-header">
              <h2 className="tour-design-page__section-title">{tourDesignServices.title}</h2>
              <p className="tour-design-page__section-desc">{tourDesignServices.description}</p>
            </div>
          </ScrollReveal>
          <div className="tour-design-page__services-grid responsive-grid-3-cols">
            {tourDesignServices.items.map((svc, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 60}>
                <Link
                  to={slugToPath(svc.page)}
                  className="tour-design-page__service-card"
                >
                  <div className="tour-design-page__service-icon">
                    <svc.icon size={18} />
                  </div>
                  <h3 className="tour-design-page__service-title">{svc.title}</h3>
                  <p className="tour-design-page__service-desc">{svc.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="tour-design-page__results">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="tour-design-page__section-header">
              <h2 className="tour-design-page__section-title">Platform Performance</h2>
              <p className="tour-design-page__section-desc">How tour operators benefit from our specialised platform.</p>
            </div>
          </ScrollReveal>
          <StatsGrid
            stats={tourDesignResults.map(r => ({ value: r.stat, label: r.label, description: r.description }))}
            columns={4}
            variant="cards"
          />
        </Container>
      </section>

      {/* Pricing */}
      <section className="tour-design-page__pricing">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="tour-design-page__section-header">
              <h2 className="tour-design-page__section-title">{tourDesignPricing.title}</h2>
              <p className="tour-design-page__section-desc">{tourDesignPricing.description}</p>
            </div>
          </ScrollReveal>
          <div className="tour-design-page__pricing-grid">
            {tourDesignPricing.packages.map((pkg, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className={`tour-design-page__pricing-card ${pkg.recommended ? 'tour-design-page__pricing-card--featured' : ''}`}>
                  <h3 className="tour-design-page__pricing-name">{pkg.name}</h3>
                  <p className="tour-design-page__pricing-description">{pkg.description}</p>
                  <div className="tour-design-page__pricing-price">{pkg.price}</div>
                  <ul className="tour-design-page__pricing-features">
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className="tour-design-page__pricing-feature">
                        <Check size={14} className="tour-design-page__pricing-feature-icon" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="tour-design-page__pricing-cta"
                  >
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="tour-design-page__faq">
        <Container>
          <FAQSection faqs={tourDesignFAQs} />
        </Container>
      </section>

      {/* CTA */}
      <section className="tour-design-page__cta">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="tour-design-page__cta-content">
              <h2 className="tour-design-page__cta-title">{tourDesignCTA.title}</h2>
              <p className="tour-design-page__cta-desc">{tourDesignCTA.description}</p>
              <Link
                to={slugToPath(tourDesignCTA.buttonPage)}
                className="tour-design-page__btn-primary"
              >
                {tourDesignCTA.buttonText} <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}