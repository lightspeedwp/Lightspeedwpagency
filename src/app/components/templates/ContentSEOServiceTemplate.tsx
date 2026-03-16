/**
 * SEO Content Service Template
 * Route: /services/content/seo-content
 * Parent: /services/content
 */

import { MagnifyingGlass, TrendUp, FileText, Crosshair, ChartBar, ArrowsClockwise, Package } from '@phosphor-icons/react';
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

export const ContentSEOServiceTemplate = () => {
  const benefits = [
    { icon: MagnifyingGlass, title: 'Keyword-Targeted Articles', description: 'Research-backed content targeting high-value search terms with genuine user intent.' },
    { icon: TrendUp, title: 'Topic Cluster Strategy', description: 'Interconnected pillar pages and cluster content that builds topical authority.' },
    { icon: FileText, title: 'Meta & Schema Writing', description: 'Optimised meta titles, descriptions, and structured data for maximum click-through rates.' },
    { icon: Crosshair, title: 'Search Intent Matching', description: 'Content aligned to informational, navigational, commercial, and transactional intent.' },
    { icon: ChartBar, title: 'Performance Tracking', description: 'Keyword ranking, organic traffic, and conversion metrics with monthly reporting.' },
    { icon: ArrowsClockwise, title: 'Content Refresh Programme', description: 'Systematic updates to existing content to maintain and improve search rankings.' },
  ];

  const deliverables = [
    'SEO content audit',
    'Keyword opportunity mapping',
    'Topic cluster architecture',
    'Monthly SEO articles (4-8)',
    'Meta data optimisation',
    'Internal linking strategy',
    'Monthly ranking reports',
  ];

  const results = [
    { id: 'res-1', value: '250%', label: 'Organic Traffic Growth' },
    { id: 'res-2', value: '10x', label: 'More Keywords Ranking' },
    { id: 'res-3', value: '65%', label: 'Higher Click-Through' },
    { id: 'res-4', value: '3-6 mo', label: 'Results Timeline' },
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="content-seo">
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
                { label: 'SEO Content' },
              ]}
            />
            
            <h1 className="service-hero__title">
              Content SEO <br />
              <span className="service-hero__gradient-text">Services</span>
            </h1>
            
            <p className="service-hero__description service-hero__description--centered">
              Content that ranks and converts. We combine keyword research, search intent analysis,
              and editorial quality to create content that search engines and humans love.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to={getPageUrl('contact')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(var(--secondary-rgb), 0.3)' }}>
                Get SEO Content Plan
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
              heading="What We Do"
              subheading="SEO-optimised content that drives organic growth"
              capabilities={benefits.map((item, i) => ({
                id: `seo-ben-${i}`,
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
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Comprehensive SEO Content Deliverables</h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)' }}>A complete roadmap from research to execution and reporting.</p>
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
              subheading="Data-backed outcomes from SEO content"
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <ServiceTestimonial serviceSlug="content-seo" />

      {/* CTA */}
      <section>
        <FunkyCTA
          title="Ready to Rank Higher?"
          description="Get an SEO content plan tailored to your industry and competition."
          buttonText="Request SEO Content Plan"
          buttonPage="contact"
          benefits={['Keyword opportunity review', 'Topic cluster strategy', 'Competitor content analysis', 'Measurable ROI expectations']}
        />
      </section>
    </div>
  );
};