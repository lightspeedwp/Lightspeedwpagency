/**
 * Migrations Service Template
 * 
 * Sub-service page for Website Migrations under Hosting
 * Route: /services/migrations
 * Parent: /services/hosting
 */

import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { migrationsServiceBenefits, migrationsServiceTypes, migrationsServiceProcess, migrationsServiceResults } from '../../data/migrations-service-template-data';
import { FeatureList } from '../patterns/FeatureList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { StatsGrid } from '../patterns/StatsGrid';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { ScrollReveal } from '../../hooks/useScrollReveal';

export const MigrationsServiceTemplate = () => {
  const benefits = migrationsServiceBenefits;

  const migrationTypes = migrationsServiceTypes;

  const process = migrationsServiceProcess;

  const results = migrationsServiceResults;

  return (
    <div className="service-page migrations-service">
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Migrations' },
        ]}
      />

      <JourneyPhaseIndicator currentPhase="build" currentServicePage="migrations" />

      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div className="service-hero__content service-hero__content--centered">
            <ScrollReveal animation="fade-up">
              <h1 className="service-hero__title">
                Website Migration Services
              </h1>
              
              <p className="service-hero__description service-hero__description--centered">
                Move your website with confidence. Expert migrations with zero data loss, minimal downtime, 
                and comprehensive testing ensure a smooth transition to your new platform or host.
              </p>
              
              <div className="service-hero__cta-group service-hero__cta-group--centered">
                <Link to={getPageUrl('contact')} className="sub-service-base__hero-btn sub-service-base__hero-btn--primary">
                  Get Migration Quote
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
              <h2 className="service-section__title">Migration Expertise</h2>
              <p className="service-section__description">
                Comprehensive migration services for every scenario
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
              <h2 className="service-section__title">Migration Types</h2>
              <p className="service-section__description">
                We handle all types of website migrations
              </p>
            </ScrollReveal>
          </div>
          
          <div className="sub-service-base__types-grid">
            {migrationTypes.map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="sub-service-base__type-card">
                  <h3 className="sub-service-base__type-card-title">{item.type}</h3>
                  <ul className="sub-service-base__type-list">
                    {item.examples.map((example, exIndex) => (
                      <li key={exIndex} className="sub-service-base__type-list-item">
                        <div className="sub-service-base__type-list-dot" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="service-section service-section--bg-muted">
        <Container>
          <ScrollReveal animation="fade-up">
            <ProcessTimeline
              heading="Migration Process"
              description="Six-step process ensures zero data loss"
              steps={process.map((item, i) => ({
                id: item.id,
                number: i + 1,
                title: item.step,
                description: item.description
              }))}
              showNumbers={true}
              orientation="horizontal"
            />
          </ScrollReveal>
        </Container>
      </section>

      <section className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Migration Guarantees</h2>
              <p className="service-section__description">
                Our commitment to successful migrations
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
      <ServiceTestimonial serviceSlug="migrations" />

      <FunkyCTA
        title="Ready to Migrate?"
        description="Get a free migration assessment and detailed quote for your project."
        buttonText="Request Free Assessment"
        buttonPage="contact"
        benefits={[
          'Zero data loss guarantee',
          'Minimal downtime',
          'Expert support throughout',
          'Post-migration testing included'
        ]}
      />
    </div>
  );
};