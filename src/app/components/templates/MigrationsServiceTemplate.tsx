/**
 * Migrations Service Template
 * 
 * Sub-service page for Website Migrations under Hosting
 * Route: /services/migrations
 * Parent: /services/hosting
 */

import { Package, Database, CloudArrowUp, CheckCircle, Shield, Lightning } from '@phosphor-icons/react';
import { Link } from 'react-router';
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

      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal animation="fade-up">
              <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                Website Migration Services
              </h1>
              
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-10)', lineHeight: 1.6 }}>
                Move your website with confidence. Expert migrations with zero data loss, minimal downtime, 
                and comprehensive testing ensure a smooth transition to your new platform or host.
              </p>
              
              <div className="wp-flex wp-justify-center wp-gap-4 wp-flex-wrap">
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-3) var(--spacing-8)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-weight-bold)', textDecoration: 'none' }}>
                  Get Migration Quote
                </Link>
                <Link to="/services/hosting" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-3) var(--spacing-8)', backgroundColor: 'transparent', color: 'var(--foreground)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-weight-medium)', textDecoration: 'none' }}>
                  View Parent Service
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Migration Expertise</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
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

      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Migration Types</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                We handle all types of website migrations
              </p>
            </ScrollReveal>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)' }}>
            {migrationTypes.map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div style={{ padding: 'var(--spacing-8)', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', height: '100%' }}>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-xl)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>{item.type}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                    {item.examples.map((example, exIndex) => (
                      <li key={exIndex} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', fontFamily: 'var(--font-secondary)', color: 'var(--muted-foreground)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
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

      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
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

      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Migration Guarantees</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
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