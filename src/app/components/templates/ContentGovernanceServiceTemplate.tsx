/**
 * Content Governance Service Template
 * Route: /services/content/governance
 * Parent: /services/content
 */

import { ShieldCheck, BookOpen, Users, CheckSquare, FileText, ChartBar, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';

export const ContentGovernanceServiceTemplate = () => {
  const benefits = [
    { icon: ShieldCheck, title: 'Content Quality Standards', description: 'Establish clear quality benchmarks, scoring rubrics, and editorial standards for every piece of content.' },
    { icon: BookOpen, title: 'Style Guide Creation', description: 'Comprehensive brand voice, tone, and writing style guides that ensure consistency across all channels.' },
    { icon: Users, title: 'Approval Workflows', description: 'Design efficient review and approval processes that balance speed with quality control.' },
    { icon: CheckSquare, title: 'Compliance Frameworks', description: 'Ensure content meets accessibility (WCAG), legal, regulatory, and brand compliance requirements.' },
    { icon: FileText, title: 'Content Lifecycle Management', description: 'Policies for content creation, review, archival, and deletion to keep your library relevant.' },
    { icon: ChartBar, title: 'Quality Reporting', description: 'Regular audits and dashboards tracking content quality, consistency, and compliance metrics.' },
  ];

  const deliverables = [
    'Brand style guide document',
    'Content quality scorecard',
    'Approval workflow diagrams',
    'Compliance checklist templates',
    'Content lifecycle policies',
    'Team training materials',
    'Quarterly quality audit reports',
  ];

  const results = [
    { id: 'res-1', value: '90%', label: 'Brand Consistency' },
    { id: 'res-2', value: '50%', label: 'Faster Approvals' },
    { id: 'res-3', value: '100%', label: 'Compliance Coverage' },
    { id: 'res-4', value: '4-6 wks', label: 'Implementation Time' },
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="content-governance">
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
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--secondary-rgb), 0.15) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-2)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-6)' }}>
              <Link to="/services" style={{ color: 'inherit', textDecoration: 'none', transition: 'color var(--transition-base)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}>Services</Link>
              <span style={{ color: 'var(--border)' }}>/</span>
              <Link to="/services/content" style={{ color: 'inherit', textDecoration: 'none', transition: 'color var(--transition-base)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}>Content</Link>
              <span style={{ color: 'var(--border)' }}>/</span>
              <span style={{ color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)' }}>Content Governance</span>
            </div>
            
            <h1 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', lineHeight: '1.1' }}>
              Content <br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--secondary), var(--primary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Governance</span>
            </h1>
            
            <p style={{ margin: '0 auto var(--spacing-10) auto', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: '1.6', maxWidth: '600px' }}>
              Establish the standards, workflows, and quality frameworks that keep your content
              consistent, compliant, and on-brand at scale.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(var(--secondary-rgb), 0.3)' }}>
                Start Governance Project
              </Link>
              <Link to="/services/content" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', textDecoration: 'none' }}>
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
              heading="What We Deliver"
              subheading="Governance frameworks that scale with your organisation"
              capabilities={benefits.map((item, i) => ({
                id: `gov-ben-${i}`,
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
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Complete Governance Deliverables</h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)' }}>The policies and documents your team needs to succeed.</p>
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
              subheading="Measurable governance outcomes"
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <ServiceTestimonial serviceSlug="content-governance" />

      {/* CTA */}
      <section>
        <FunkyCTA
          title="Ready for Consistent, Quality Content?"
          description="Build governance frameworks that keep your content on-brand and compliant at scale."
          buttonText="Start Governance Project"
          buttonPage="contact"
          benefits={['Streamlined workflows', 'Quality assurance', 'Risk mitigation', 'Clear accountability']}
        />
      </section>
    </div>
  );
};