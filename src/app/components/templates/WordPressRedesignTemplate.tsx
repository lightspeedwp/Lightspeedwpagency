/**
 * WordPress Website Redesign Solution Template
 *
 * WordPress template: templates/page-solution-wordpress-redesign.html
 *
 * A solution page bundling discovery, design, development, content migration,
 * and performance services into a single WordPress redesign workflow.
 *
 * Pattern order:
 * Hero → Challenges → Process → Included Services → Results → Pricing → FAQs → CTA
 *
 * @see /src/styles/templates/page-solution-redesign.css
 * @see /src/app/data/wordpress-redesign-page.ts
 */

import '../../../styles/templates/page-solution-redesign.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FAQSection } from '../patterns/FAQSection';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { ArrowRight, Check, AlertTriangle } from 'lucide-react';


import {
  wpRedesignHero,
  wpRedesignChallenges,
  wpRedesignProcess,
  wpRedesignServices,
  wpRedesignResults,
  wpRedesignPricing,
  wpRedesignFAQs,
  wpRedesignCTA,
} from '../../data/wordpress-redesign-page';

export function WordPressRedesignTemplate() {
  return (
    <div className="redesign-page redesign-page--wordpress">
      {/* Hero */}
      <section className="redesign-page__hero">
        <Container>
          <div className="redesign-page__hero-layout">
            <div className="redesign-page__hero-content">
              <ScrollReveal animation="fade-right">
                <div className="redesign-page__badge">
                  <wpRedesignHero.badge.icon size={14} />
                  {wpRedesignHero.badge.text}
                </div>
                <h1 className="redesign-page__title">
                  {wpRedesignHero.title.replace(wpRedesignHero.highlight, '').trim()}{' '}
                  <span className="redesign-page__highlight">{wpRedesignHero.highlight}</span>
                </h1>
                <p className="redesign-page__tagline">{wpRedesignHero.tagline}</p>
                <div className="redesign-page__btn-row">
                  <Link
                    to={slugToPath(wpRedesignHero.primaryButton.page)}
                    className="redesign-page__btn-primary"
                  >
                    {wpRedesignHero.primaryButton.text} <ArrowRight size={18} />
                  </Link>
                  <Link
                    to={slugToPath(wpRedesignHero.secondaryButton.page)}
                    className="redesign-page__btn-outline"
                  >
                    {wpRedesignHero.secondaryButton.text}
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="redesign-page__visual">
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="redesign-page__orb redesign-page__orb--1" />
                <div className="redesign-page__orb redesign-page__orb--2" />
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="redesign-page__challenges">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="redesign-page__section-header">
              <h2 className="redesign-page__section-title">{wpRedesignChallenges.title}</h2>
              <p className="redesign-page__section-desc">{wpRedesignChallenges.description}</p>
            </div>
          </ScrollReveal>
          <div className="redesign-page__challenge-grid">
            {wpRedesignChallenges.items.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 60}>
                <div className="redesign-page__challenge-item">
                  <AlertTriangle size={18} className="redesign-page__challenge-icon" />
                  <p className="redesign-page__challenge-text">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="redesign-page__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="redesign-page__section-header">
              <h2 className="redesign-page__section-title">{wpRedesignProcess.title}</h2>
              <p className="redesign-page__section-desc">{wpRedesignProcess.description}</p>
            </div>
          </ScrollReveal>
          <div className="redesign-page__process-grid">
            {wpRedesignProcess.steps.map((step, i) => (
              <ScrollReveal key={step.number} animation="fade-up" delay={i * 80}>
                <div className="redesign-page__process-step">
                  <div className="redesign-page__step-header">
                    <div className="redesign-page__step-number">{step.number}</div>
                    <div className="redesign-page__step-icon">
                      <step.icon size={20} />
                    </div>
                  </div>
                  <h3 className="redesign-page__step-title">{step.title}</h3>
                  <p className="redesign-page__step-description">{step.description}</p>
                  <ul className="redesign-page__step-deliverables">
                    {step.deliverables.map((d, di) => (
                      <li key={di} className="redesign-page__step-deliverable">
                        <Check size={12} className="redesign-page__step-deliverable-icon" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <span className="redesign-page__step-duration">{step.duration}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Included Services */}
      <section className="redesign-page__services">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="redesign-page__section-header">
              <h2 className="redesign-page__section-title">{wpRedesignServices.title}</h2>
              <p className="redesign-page__section-desc">{wpRedesignServices.description}</p>
            </div>
          </ScrollReveal>
          <div className="redesign-page__services-grid">
            {wpRedesignServices.items.map((svc, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 60}>
                <Link
                  to={slugToPath(svc.page)}
                  className="redesign-page__service-card"
                >
                  <div className="redesign-page__service-icon">
                    <svc.icon size={18} />
                  </div>
                  <h3 className="redesign-page__service-title">{svc.title}</h3>
                  <p className="redesign-page__service-desc">{svc.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="redesign-page__results">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="redesign-page__section-header">
              <h2 className="redesign-page__section-title">Results That Speak</h2>
              <p className="redesign-page__section-desc">Average improvements our clients see after a website redesign.</p>
            </div>
          </ScrollReveal>
          <div className="redesign-page__stats-grid">
            {wpRedesignResults.map((stat, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div className="redesign-page__stat-card">
                  <div className="redesign-page__stat-value">{stat.stat}</div>
                  <div className="redesign-page__stat-label">{stat.label}</div>
                  <p className="redesign-page__stat-desc">{stat.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="redesign-page__pricing">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="redesign-page__section-header">
              <h2 className="redesign-page__section-title">{wpRedesignPricing.title}</h2>
              <p className="redesign-page__section-desc">{wpRedesignPricing.description}</p>
            </div>
          </ScrollReveal>
          <div className="redesign-page__pricing-grid">
            {wpRedesignPricing.packages.map((pkg, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className={`redesign-page__pricing-card ${pkg.recommended ? 'redesign-page__pricing-card--featured' : ''}`}>
                  <h3 className="redesign-page__pricing-name">{pkg.name}</h3>
                  <p className="redesign-page__pricing-description">{pkg.description}</p>
                  <div className="redesign-page__pricing-price">{pkg.price}</div>
                  <ul className="redesign-page__pricing-features">
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className="redesign-page__pricing-feature">
                        <Check size={14} className="redesign-page__pricing-feature-icon" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="redesign-page__pricing-cta"
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
      <section className="redesign-page__faq">
        <Container>
          <FAQSection faqs={wpRedesignFAQs} />
        </Container>
      </section>

      {/* CTA */}
      <section className="redesign-page__cta">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="redesign-page__cta-content">
              <h2 className="redesign-page__cta-title">{wpRedesignCTA.title}</h2>
              <p className="redesign-page__cta-desc">{wpRedesignCTA.description}</p>
              <Link
                to={slugToPath(wpRedesignCTA.buttonPage)}
                className="redesign-page__btn-primary"
              >
                {wpRedesignCTA.buttonText} <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}