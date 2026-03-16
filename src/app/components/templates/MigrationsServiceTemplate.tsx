/**
 * Migrations Service Template
 * 
 * Sub-service page for Website Migrations under Hosting
 * Route: /services/migrations
 * Parent: /services/hosting
 */

import { Package, Database, CloudArrowUp, CheckCircle, Shield, Lightning } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
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
  const benefits = [
    {
      icon: Package as any,
      title: 'Platform Migrations',
      description: 'Seamlessly migrate from any platform to WordPress, WooCommerce, or custom solutions.'
    },
    {
      icon: Database as any,
      title: 'Complete Data Transfer',
      description: 'Migrate all content, media, databases, and settings with zero data loss.'
    },
    {
      icon: CloudArrowUp as any,
      title: 'Hosting Migration',
      description: 'Move to better hosting with minimal downtime and improved performance.'
    },
    {
      icon: CheckCircle as any,
      title: 'Quality Assurance',
      description: 'Comprehensive testing ensures everything works perfectly post-migration.'
    },
    {
      icon: Shield as any,
      title: 'Security First',
      description: 'Secure transfer protocols and backup systems protect your data throughout.'
    },
    {
      icon: Lightning as any,
      title: 'Minimal Downtime',
      description: 'Strategic planning keeps your site running during the migration process.'
    }
  ];

  const migrationTypes = [
    {
      type: 'Platform Migration',
      examples: ['Wix → WordPress', 'Squarespace → WooCommerce', 'Shopify → WooCommerce', 'Custom CMS → WordPress']
    },
    {
      type: 'Hosting Migration',
      examples: ['Shared → VPS', 'Any Host → WP Engine', 'Any Host → Kinsta', 'On-Premise → Cloud']
    },
    {
      type: 'Version Upgrade',
      examples: ['WordPress Major Upgrade', 'PHP Version Upgrade', 'MySQL → MariaDB', 'HTTP → HTTPS']
    }
  ];

  const process = [
    { id: 'audit', step: 'Pre-Migration Audit', description: 'Complete site analysis and backup' },
    { id: 'plan', step: 'Migration Plan', description: 'Detailed roadmap with timeline' },
    { id: 'staging', step: 'Staging Migration', description: 'Test migration on staging server' },
    { id: 'qa', step: 'QA & Testing', description: 'Comprehensive testing and fixes' },
    { id: 'live', step: 'Live Migration', description: 'Production deployment with monitoring' },
    { id: 'support', step: 'Post-Migration Support', description: '30 days of dedicated support' }
  ];

  const results = [
    { id: 'metric-1', value: '99.9%', label: 'Data Transfer Success Rate' },
    { id: 'metric-2', value: '<2hr', label: 'Average Downtime' },
    { id: 'metric-3', value: '100%', label: 'Sites Tested Pre-Launch' },
    { id: 'metric-4', value: '30 days', label: 'Post-Migration Support' }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col">
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
              
              <div className="wp-flex wp-justify-center wp-gap-4 wp-flex-wrap">
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