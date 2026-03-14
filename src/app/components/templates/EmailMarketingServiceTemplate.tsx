/**
 * Email Marketing Service Template
 * Route: /services/email-marketing
 * Parent: /services/content
 */

import { Envelope, Crosshair, Lightning, Users, ChartBar, TrendUp, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';

export const EmailMarketingServiceTemplate = () => {
  const benefits = [
    { icon: Envelope, title: 'Campaign Strategy & Planning', description: 'Strategic email campaigns aligned with sales cycles and customer journeys.' },
    { icon: Crosshair, title: 'Advanced Segmentation', description: 'Behavioral targeting, dynamic content, and personalized messaging at scale.' },
    { icon: Lightning, title: 'Marketing Automation', description: 'Sophisticated workflows that nurture leads and drive conversions automatically.' },
    { icon: Users, title: 'List Growth & Acquisition', description: 'Lead magnets, landing pages, and campaigns designed to grow your list.' },
    { icon: ChartBar, title: 'A/B Testing & Optimization', description: 'Continuous testing and improvement of subject lines, content, and CTAs.' },
    { icon: TrendUp, title: 'Revenue Attribution', description: 'Track email marketing contribution to revenue and customer lifetime value.' }
  ];

  const deliverables = ['Email marketing strategy', 'Campaign calendar', 'Email template library', 'Automation workflows', 'Segmentation strategy', 'Monthly performance reports', 'Conversion optimization roadmap'];

  const results = [
    { id: 'res-1', value: '25%', label: 'Avg Conversion Rate' },
    { id: 'res-2', value: '38:1', label: 'Avg ROI (Email Marketing)' },
    { id: 'res-3', value: '200%', label: 'Revenue Growth (12 mo)' },
    { id: 'res-4', value: '50%', label: 'Reduction in Manual Work' }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="email-marketing">
      {/* HERO SECTION */}
      <section 
        style={{
          position: 'relative',
          padding: 'var(--spacing-32) 0',
          backgroundColor: 'var(--background)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
              <BreadcrumbPart
                links={[
                  { to: '/services', label: 'Services' },
                  { to: '/services/content', label: 'Content' },
                  { label: 'Email Marketing' }
                ]}
              />
            </div>
            
            <h1 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', lineHeight: '1.1' }}>
              Email Marketing <br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Services</span>
            </h1>
            
            <p style={{ margin: '0 auto var(--spacing-10) auto', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: '1.6', maxWidth: '600px' }}>
              Turn email into your highest-ROI channel. Strategic campaigns, advanced automation, and continuous 
              optimization that consistently drives revenue and customer loyalty.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)' }}>
                Get Email Marketing Plan
              </Link>
              <Link to="/services/content" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', textDecoration: 'none' }}>
                View Parent Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="Email Marketing Services"
              subheading="Comprehensive email marketing strategies that convert."
              capabilities={benefits.map((item, i) => ({
                id: `em-ben-${i}`,
                title: item.title,
                description: item.description,
                icon: item.icon as any
              }))}
              columns={3}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* DELIVERABLES */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-up">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-2)', padding: 'var(--spacing-2) var(--spacing-4)', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--card)', border: '1px solid var(--border)', color: 'var(--secondary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--spacing-4)' }}>
                  <Package size={16} weight="duotone" />
                  What You Get
                </div>
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Complete Campaign Assets</h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)' }}>End-to-end management from templates to automated flows.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-8)' }}>
                <CheckList items={deliverables} columns={1} />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* RESULTS */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading="Results"
              subheading="The ROI of targeted email campaigns."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <ServiceTestimonial serviceSlug="email-marketing" />

      {/* CTA */}
      <section>
        <FunkyCTA
          title="Ready for Email Marketing ROI?"
          description="Get a free email marketing audit and strategy session."
          buttonText="Request Free Audit"
          buttonPage="contact"
          benefits={['Account structure review', 'Deliverability check', 'Automation recommendations', 'Conversion path analysis']}
        />
      </section>
    </div>
  );
};