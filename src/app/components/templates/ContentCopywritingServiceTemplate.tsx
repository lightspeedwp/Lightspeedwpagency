/**
 * Copywriting & UX Writing Service Template
 * Route: /services/content/copywriting
 * Parent: /services/content
 */

import { PencilSimple, TextT, Cursor, Envelope, Megaphone, BookOpen, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export const ContentCopywritingServiceTemplate = () => {
  const benefits = [
    { icon: PencilSimple, title: 'Website Copywriting', description: 'Clear, compelling website copy that communicates your value proposition and drives conversions.' },
    { icon: TextT, title: 'UX Microcopy', description: 'Button labels, error messages, tooltips, and interface text that guides users effortlessly.' },
    { icon: Cursor, title: 'CTA Optimisation', description: 'A/B tested calls-to-action that maximise click-through rates and conversion.' },
    { icon: Envelope, title: 'Email Campaigns', description: 'Subject lines, body copy, and sequences that nurture leads through your sales funnel.' },
    { icon: Megaphone, title: 'Ad & Campaign Copy', description: 'Punchy headlines and persuasive copy for paid search, social ads, and display campaigns.' },
    { icon: BookOpen, title: 'Brand Voice & Tone', description: 'Develop a distinctive brand voice with guidelines your entire team can follow.' },
  ];

  const deliverables = [
    'Website copy audit & recommendations',
    'Full website copy rewrite',
    'UX writing style guide',
    'Email sequence templates',
    'Ad copy variants for A/B testing',
    'Brand voice documentation',
    'Conversion-focused landing pages',
  ];

  const results = [
    { id: 'res-1', value: '45%', label: 'Higher Conversions' },
    { id: 'res-2', value: '2.5x', label: 'Better Click-Through' },
    { id: 'res-3', value: '60%', label: 'Reduced Bounce Rate' },
    { id: 'res-4', value: '1-3 wks', label: 'Turnaround Time' },
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="content-copywriting">
      {/* HERO SECTION */}
      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--secondary-rgb), 0.15) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div className="service-hero__content" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <BreadcrumbPart
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Content', href: '/services/content' },
                { label: 'Copywriting & UX Writing' },
              ]}
            />
            
            <h1 className="service-hero__title">
              Copywriting <br />
              <span className="service-hero__gradient-text">Services</span>
            </h1>
            
            <p className="service-hero__description service-hero__description--centered">
              Words that work harder. From website headlines to interface microcopy,
              we craft conversion-focused copy that guides users and drives action.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to={getPageUrl('contact')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(var(--secondary-rgb), 0.3)' }}>
                Get Copy Audit
              </Link>
              <Link to={getPageUrl('content')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', textDecoration: 'none' }}>
                All Content Services
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
              heading="What We Write"
              subheading="Conversion-focused copywriting across every touchpoint"
              capabilities={benefits.map((item, i) => ({
                id: `cw-ben-${i}`,
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
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Complete Copywriting Deliverables</h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)' }}>Polished, strategic copy ready for implementation.</p>
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
              heading="Expected Results"
              subheading="Measurable improvements from better copy"
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <ServiceTestimonial serviceSlug="content-copywriting" />

      {/* CTA */}
      <section>
        <FunkyCTA
          title="Ready for Copy That Converts?"
          description="Get a free copy audit and discover how strategic words can transform your conversion rates."
          buttonText="Request Copy Audit"
          buttonPage="contact"
          benefits={['Actionable feedback', 'Tone of voice analysis', 'Conversion rate recommendations', 'No obligation']}
        />
      </section>
    </div>
  );
};