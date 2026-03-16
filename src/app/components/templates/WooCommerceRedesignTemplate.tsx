/**
 * WooCommerce Store Redesign Solution Template
 *
 * WordPress template: templates/page-solution-woocommerce-redesign.html
 *
 * A solution page bundling store audit, UX design, WooCommerce development,
 * product migration, checkout optimisation, and performance into one workflow.
 *
 * Pattern order:
 * Hero → Challenges → Process → Included Services → Results → Pricing → FAQs → CTA
 *
 * @see /src/styles/templates/page-solution-redesign-optimized.css
 * @see /src/app/data/woocommerce-redesign-page.ts
 */

import '../../../styles/templates/page-solution-redesign-optimized.css';
import { Container } from '../common/Container';
import { FAQSection } from '../patterns/FAQSection';
import { StatsGrid } from '../patterns/StatsGrid';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { getPageUrl } from '../../data/site-pages';
import { ArrowRight, Check, Warning } from '@phosphor-icons/react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

import {
  wooRedesignHero,
  wooRedesignChallenges,
  wooRedesignProcess,
  wooRedesignServices,
  wooRedesignResults,
  wooRedesignPricing,
  wooRedesignFAQs,
  wooRedesignCTA,
} from '../../data/woocommerce-redesign-page';

export function WooCommerceRedesignTemplate() {
  return (
    <div className="redesign-page redesign-page--woocommerce">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'WooCommerce Redesign' },
        ]}
      />

      {/* Hero */}
      <section className="redesign-page__hero">
        <Container>
          <div className="redesign-page__hero-layout">
            <div className="redesign-page__hero-content">
              <ScrollReveal animation="fade-right">
                <div className="redesign-page__badge">
                  <wooRedesignHero.badge.icon size={14} />
                  {wooRedesignHero.badge.text}
                </div>
                <h1 className="redesign-page__title">
                  {wooRedesignHero.title.replace(wooRedesignHero.highlight, '').trim()}{' '}
                  <span className="redesign-page__highlight">{wooRedesignHero.highlight}</span>
                </h1>
                <p className="redesign-page__tagline">{wooRedesignHero.tagline}</p>
                <div className="redesign-page__btn-row">
                  <Link
                    to={slugToPath(wooRedesignHero.primaryButton.page)}
                    className="redesign-page__btn-primary"
                  >
                    {wooRedesignHero.primaryButton.text} <ArrowRight size={18} />
                  </Link>
                  <Link
                    to={slugToPath(wooRedesignHero.secondaryButton.page)}
                    className="redesign-page__btn-outline"
                  >
                    {wooRedesignHero.secondaryButton.text}
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
              <h2 className="redesign-page__section-title">{wooRedesignChallenges.title}</h2>
              <p className="redesign-page__section-desc">{wooRedesignChallenges.description}</p>
            </div>
          </ScrollReveal>
          <div className="redesign-page__challenge-grid responsive-grid-2-cols">
            {wooRedesignChallenges.items.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 60}>
                <div className="redesign-page__challenge-item">
                  <Warning size={18} className="redesign-page__challenge-icon" />
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
              <h2 className="redesign-page__section-title">{wooRedesignProcess.title}</h2>
              <p className="redesign-page__section-desc">{wooRedesignProcess.description}</p>
            </div>
          </ScrollReveal>
          <div className="redesign-page__process-grid responsive-grid-3-cols">
            {wooRedesignProcess.steps.map((step, i) => (
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
              <h2 className="redesign-page__section-title">{wooRedesignServices.title}</h2>
              <p className="redesign-page__section-desc">{wooRedesignServices.description}</p>
            </div>
          </ScrollReveal>
          <div className="redesign-page__services-grid">
            {wooRedesignServices.items.map((svc, i) => (
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
              <h2 className="redesign-page__section-title">Store Performance After Redesign</h2>
              <p className="redesign-page__section-desc">Average improvements our WooCommerce clients see within 90 days of launch.</p>
            </div>
          </ScrollReveal>
          <StatsGrid
            stats={wooRedesignResults.map((r) => ({
              number: r.stat,
              label: r.label,
              description: r.description
            }))}
            columns={4}
            variant="cards"
          />
        </Container>
      </section>

      {/* Pricing */}
      <section className="redesign-page__pricing">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="redesign-page__section-header">
              <h2 className="redesign-page__section-title">{wooRedesignPricing.title}</h2>
              <p className="redesign-page__section-desc">{wooRedesignPricing.description}</p>
            </div>
          </ScrollReveal>
          <div className="redesign-page__pricing-grid">
            {wooRedesignPricing.packages.map((pkg, i) => (
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
                    to={getPageUrl('contact')}
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
          <FAQSection faqs={wooRedesignFAQs} />
        </Container>
      </section>

      {/* CTA */}
      <section className="redesign-page__cta">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="redesign-page__cta-content">
              <h2 className="redesign-page__cta-title">{wooRedesignCTA.title}</h2>
              <p className="redesign-page__cta-desc">{wooRedesignCTA.description}</p>
              <Link
                to={slugToPath(wooRedesignCTA.buttonPage)}
                className="redesign-page__btn-primary"
              >
                {wooRedesignCTA.buttonText} <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}