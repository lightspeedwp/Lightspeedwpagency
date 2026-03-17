/**
 * Support Service Template
 * 
 * Sub-service page for Website Support under Hosting
 * Route: /services/support
 * Parent: /services/hosting
 */

import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { supportServiceBenefits, supportServicePlans, supportServiceResults } from '../../data/support-service-template-data';
import { FeatureList } from '../patterns/FeatureList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { StatsGrid } from '../patterns/StatsGrid';
import { ScrollReveal } from '../../hooks/useScrollReveal';

export const SupportServiceTemplate = () => {
  const benefits = supportServiceBenefits;

  const plans = supportServicePlans;

  const results = supportServiceResults;

  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Support' },
        ]}
      />

      <JourneyPhaseIndicator currentPhase="build" currentServicePage="support" />

      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div className="service-hero__content service-hero__content--centered">
            <ScrollReveal animation="fade-up">
              <h1 className="service-hero__title">
                Website Support & Maintenance
              </h1>
              
              <p className="service-hero__description service-hero__description--centered">
                Focus on your business while we keep your website running perfectly. Proactive maintenance, 
                fast support, and peace of mind with 24/7 monitoring and expert care.
              </p>
              
              <div className="wp-flex wp-justify-center wp-gap-4 wp-flex-wrap">
                <Link to={getPageUrl('contact')} className="sub-service-base__hero-btn sub-service-base__hero-btn--primary">
                  Get Support Quote
                </Link>
                <Link to={getPageUrl('hosting')} className="sub-service-base__hero-btn sub-service-base__hero-btn--outline">
                  View Parent Service
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="service-section service-section--bg-muted">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Support Features</h2>
              <p className="service-section__description">
                Comprehensive support and maintenance for WordPress and WooCommerce sites
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList 
              items={benefits}
              columns={3}
              variant="glow"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      <section className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Support Plans</h2>
              <p className="service-section__description">
                Choose the support level that fits your needs
              </p>
            </ScrollReveal>
          </div>
          
          <div className="sub-service-base__types-grid">
            {plans.map((plan, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="sub-service-base__plan-card">
                  <h3 className="sub-service-base__plan-card-title">{plan.name}</h3>
                  <div className="sub-service-base__plan-card-price">{plan.price}</div>
                  <ul className="sub-service-base__plan-card-features">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="sub-service-base__type-list-item">
                        <div className="sub-service-base__type-list-dot" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="sub-service-base__plan-card-footer">
                    <Link to={getPageUrl('contact')} className={`sub-service-base__plan-btn ${index === 1 ? 'sub-service-base__plan-btn--primary' : 'sub-service-base__plan-btn--outline'}`}>
                      Choose Plan
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="service-section service-section--bg-muted">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Support Metrics</h2>
              <p className="service-section__description">
                Our commitment to excellent support
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <StatsGrid
              stats={results}
              columns={4}
              variant="cards"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="support" />

      <FunkyCTA
        title="Ready for Peace of Mind?"
        description="Get a free consultation and find the perfect support plan for your website."
        buttonText="Request Free Consultation"
        buttonPage="contact"
        benefits={[
          '24/7 dedicated support team',
          'Proactive security monitoring',
          'Regular backups and updates',
          'Guaranteed response times'
        ]}
      />
    </div>
  );
};