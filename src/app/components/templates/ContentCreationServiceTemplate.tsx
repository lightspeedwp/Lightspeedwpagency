/**
 * Content Creation Service Template
 * Route: /services/content/creation
 * Parent: /services/content
 */

import { PenNib, BookOpen, FileText, Newspaper, Trophy, Users, Package } from '@phosphor-icons/react';
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

export const ContentCreationServiceTemplate = () => {
  const benefits = [
    { icon: PenNib, title: 'Blog Posts & Articles', description: 'Engaging, SEO-optimised long-form content that establishes authority and drives organic traffic.' },
    { icon: BookOpen, title: 'Case Studies & Whitepapers', description: 'In-depth content showcasing your expertise, methodology, and client results.' },
    { icon: FileText, title: 'Landing Page Copy', description: 'Conversion-focused copy for service pages, product pages, and campaign landing pages.' },
    { icon: Newspaper, title: 'Social Media Content', description: 'Platform-specific content calendars with engaging posts, graphics direction, and hashtag strategy.' },
    { icon: Trophy, title: 'Email Newsletter Content', description: 'Regular newsletter content that nurtures leads and keeps your audience engaged.' },
    { icon: Users, title: 'Thought Leadership', description: 'Executive bylines, opinion pieces, and industry commentary that positions your brand as a leader.' },
  ];

  const deliverables = [
    'Monthly blog content (4-8 posts)',
    'Quarterly case studies',
    'Landing page copy packages',
    'Social media content calendar',
    'Email newsletter templates',
    'Brand voice documentation',
    'Content performance reports',
  ];

  const results = [
    { id: 'res-1', value: '300%', label: 'More Organic Traffic' },
    { id: 'res-2', value: '5x', label: 'Lead Generation Lift' },
    { id: 'res-3', value: '85%', label: 'Higher Engagement' },
    { id: 'res-4', value: '2-4 wks', label: 'First Delivery' },
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="content-creation">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Content', href: '/services/content' },
          { label: 'Content Creation' },
        ]}
      />

      {/* HERO SECTION */}
      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--secondary-rgb), 0.15) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div className="service-hero__content" style={{ padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <h1 className="service-hero__title">
              Content Creation <br />
              <span className="service-hero__gradient-text">Services</span>
            </h1>
            
            <p className="service-hero__description service-hero__description--centered">
              Professional content production that drives traffic, builds authority, and converts
              visitors into customers. From blog posts to case studies, we create content that works.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to={getPageUrl('contact')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(var(--secondary-rgb), 0.3)' }}>
                Start Creating
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
              heading="What We Create"
              subheading="Professional content across every format your business needs."
              capabilities={benefits.map((item, i) => ({
                id: `cc-ben-${i}`,
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
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Complete Content Deliverables</h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)' }}>Tailored packages that scale with your marketing needs.</p>
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
              subheading="Measurable outcomes from our content creation programmes."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <ServiceTestimonial serviceSlug="content-creation" />

      {/* CTA */}
      <section>
        <FunkyCTA
          title="Ready to Create Content That Works?"
          description="Let us build a content engine that drives sustainable growth for your business."
          buttonText="Get Started"
          buttonPage="contact"
          benefits={['Professional writers', 'SEO-first approach', 'Dedicated editors', 'Scaleable production']}
        />
      </section>
    </div>
  );
};