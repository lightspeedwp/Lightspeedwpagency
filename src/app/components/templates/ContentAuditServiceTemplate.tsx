/**
 * Content Audit Service Template
 * Route: /services/content/audit
 * Parent: /services/content
 */

import { MagnifyingGlass, ListChecks as FileCheck, TrendDown, WarningCircle, Crosshair, Trophy, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

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
      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--secondary-rgb), 0.1) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div className="service-hero__content" style={{ padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <BreadcrumbPart
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Content', href: '/services/content' },
                { label: 'Content Audit' },
              ]}
            />
            
            <h1 className="service-hero__title">
              Content Audit <br />
              <span className="service-hero__gradient-text">Services</span>
            </h1>
            
            <p className="service-hero__description service-hero__description--centered">
              Know exactly what content you have, how it's performing, and what to do next. Our comprehensive audits 
              reveal quick wins and long-term opportunities to improve content ROI.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to={getPageUrl('contact')} className="sub-service-base__content-btn sub-service-base__content-btn--primary">
                Get Content Audit
              </Link>
              <Link to={getPageUrl('content')} className="sub-service-base__content-btn sub-service-base__content-btn--outline">
                View Parent Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="service-section service-section--bg-muted">
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
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-up">
              <div>
                <div className="sub-service-base__eyebrow-badge">
                  <Package size={16} weight="duotone" />
                  What You Get
                </div>
                <h2 className="sub-service-base__deliverables-title">Actionable Reports & Roadmaps</h2>
                <p className="sub-service-base__deliverables-description">Clear, prioritized next steps to improve your content performance.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="sub-service-base__deliverables-card">
                <CheckList items={deliverables} columns={1} />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* RESULTS */}
      <section className="service-section service-section--bg-muted">
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