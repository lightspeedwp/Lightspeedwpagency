/**
 * Figma Prototyping Service Template
 * Route: /services/figma-prototyping
 * Parent: /services/design
 */

import { FigmaLogo, Lightning, Users, Layout, Cursor, Trophy, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';

export const FigmaPrototypingServiceTemplate = () => {
  const benefits = [
    { icon: FigmaLogo, title: 'Interactive Prototypes', description: 'Clickable, realistic prototypes that demonstrate the complete user experience.' },
    { icon: Lightning, title: 'Rapid Iteration', description: 'Quick iterations and design refinement based on stakeholder feedback.' },
    { icon: Users, title: 'Stakeholder Alignment', description: 'Get everyone on the same page before development begins.' },
    { icon: Layout, title: 'Component Libraries', description: 'Reusable design systems that scale across your entire product.' },
    { icon: Cursor, title: 'User Testing Ready', description: 'Prototypes optimized for user testing and feedback collection.' },
    { icon: Trophy, title: 'Developer Handoff', description: 'Clean, documented designs with specs ready for development.' }
  ];

  const deliverables = ['Interactive Figma prototype', 'Component library', 'Design system documentation', 'User flow diagrams', 'Responsive breakpoints', 'Developer handoff package', 'Design revision rounds (3)'];

  const results = [
    { id: 'res-1', value: '70%', label: 'Faster Development' },
    { id: 'res-2', value: '50%', label: 'Fewer Design Changes' },
    { id: 'res-3', value: '3x', label: 'Better Stakeholder Alignment' },
    { id: 'res-4', value: '2-4 wks', label: 'Typical Timeline' }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="figma-prototyping">
      {/* HERO SECTION */}
      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div className="service-hero__content" style={{ padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
              <BreadcrumbPart
                links={[
                  { to: '/services', label: 'Services' },
                  { to: '/services/design', label: 'Design' },
                  { label: 'Figma Prototyping' }
                ]}
              />
            </div>
            
            <h1 className="service-hero__title">
              Figma Prototyping <br />
              <span className="service-hero__gradient-text">Services</span>
            </h1>
            
            <p className="service-hero__description service-hero__description--centered">
              See your product before it's built. Interactive Figma prototypes let you test ideas, get feedback, 
              and refine the experience before writing a single line of code.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to={getPageUrl('contact')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)' }}>
                Start Prototype Project
              </Link>
              <Link to={getPageUrl('design')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', textDecoration: 'none' }}>
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
              heading="Prototyping Services"
              subheading="Everything you need to visualize your product."
              capabilities={benefits.map((item, i) => ({
                id: `fp-ben-${i}`,
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
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Complete Prototyping Assets</h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)' }}>End-to-end deliverables ready for developer handoff.</p>
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
              subheading="The value of interactive prototypes."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <ServiceTestimonial serviceSlug="figma-prototyping" />

      {/* CTA */}
      <section>
        <FunkyCTA
          title="Ready to Prototype?"
          description="Get a free prototyping consultation and project estimate."
          buttonText="Request Free Consultation"
          buttonPage="contact"
          benefits={['Interactive design validation', 'User testing readiness', 'Clear developer specs', 'Faster time to market']}
        />
      </section>
    </div>
  );
};