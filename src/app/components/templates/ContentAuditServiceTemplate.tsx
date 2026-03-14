/**
 * Content Audit Service Template
 * Route: /services/content/audit
 * Parent: /services/content
 */

import { MagnifyingGlass, ListChecks as FileCheck, TrendDown, WarningCircle, Crosshair, Trophy, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { FunkyCTA } from '../patterns/FunkyCTA';

export const ContentAuditServiceTemplate = () => {
  const benefits = [
    { icon: MagnifyingGlass, title: 'Complete Content Inventory', description: 'Catalog every page, post, and asset with metadata and performance metrics.' },
    { icon: FileCheck, title: 'Quality Assessment', description: 'Evaluate content against E-E-A-T, readability, and brand consistency standards.' },
    { icon: TrendDown, title: 'Performance Analysis', description: 'Identify low-performing content and optimization opportunities.' },
    { icon: WarningCircle, title: 'Gap Analysis', description: 'Find missing topics and content gaps in your market coverage.' },
    { icon: Crosshair, title: 'SEO Evaluation', description: 'Assess keyword targeting, meta data, and technical SEO issues.' },
    { icon: Trophy, title: 'Actionable Recommendations', description: 'Prioritized action plan: update, consolidate, redirect, or delete.' }
  ];

  const deliverables = ['Complete content inventory spreadsheet', 'Performance dashboard', 'Quality scorecard', 'Gap analysis report', 'SEO audit findings', 'Action plan with priorities', 'Content refresh roadmap'];

  const results = [
    { id: 'res-1', value: '100%', label: 'Content Cataloged' },
    { id: 'res-2', value: '40%', label: 'Avg Performance Lift' },
    { id: 'res-3', value: '2-3x', label: 'More Strategic Focus' },
    { id: 'res-4', value: '2-3 wks', label: 'Audit Timeline' }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="content-audit">
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
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--secondary-rgb), 0.1) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-2)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-6)' }}>
              <Link to="/services" style={{ color: 'inherit', textDecoration: 'none', transition: 'color var(--transition-base)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}>Services</Link>
              <span style={{ color: 'var(--border)' }}>/</span>
              <Link to="/services/content" style={{ color: 'inherit', textDecoration: 'none', transition: 'color var(--transition-base)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}>Content</Link>
              <span style={{ color: 'var(--border)' }}>/</span>
              <span style={{ color: 'var(--primary)', fontWeight: 'var(--font-weight-medium)' }}>Content Audit</span>
            </div>
            
            <h1 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', lineHeight: '1.1' }}>
              Content Audit <br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Services</span>
            </h1>
            
            <p style={{ margin: '0 auto var(--spacing-10) auto', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: '1.6', maxWidth: '600px' }}>
              Know exactly what content you have, how it's performing, and what to do next. Our comprehensive audits 
              reveal quick wins and long-term opportunities to improve content ROI.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)' }}>
                Get Content Audit
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
              heading="Audit Services"
              subheading="Comprehensive evaluation of your entire content ecosystem."
              capabilities={benefits.map((item, i) => ({
                id: `audit-ben-${i}`,
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
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Actionable Reports & Roadmaps</h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)' }}>Clear, prioritized next steps to improve your content performance.</p>
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
              subheading="The value of a thorough content audit."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <ServiceTestimonial serviceSlug="content-audit" />

      {/* CTA */}
      <section>
        <FunkyCTA
          title="Ready to Audit Your Content?"
          description="Get a free sample audit of 10 pages."
          buttonText="Request Free Sample Audit"
          buttonPage="contact"
          benefits={['SEO performance check', 'Content gap analysis', 'Actionable insights', 'No commitment required']}
        />
      </section>
    </div>
  );
};