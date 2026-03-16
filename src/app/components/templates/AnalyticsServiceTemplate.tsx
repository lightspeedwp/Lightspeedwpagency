/**
 * Analytics Service Template
 * 
 * Sub-service page for Analytics & Data Intelligence under AI Search & Visibility
 * Route: /services/analytics
 * Parent: /services/ai-search-visibility
 * 
 * Features:
 * - Hero section with service overview
 * - Key benefits grid
 * - Analytics deliverables
 * - Results showcase
 * - CTA section
 * 
 * Design System Compliance:
 * - Uses CSS variables from /src/styles/theme-base.css
 * - Uses semantic colors from /src/styles/theme-light.css
 * - BEM methodology for all class names
 * - No hardcoded colors or spacing values
 * - Font families: var(--font-primary) and var(--font-secondary) only
 * 
 * Pattern Components:
 * - FeatureList — Benefits grid (6 items, 3 columns, glow variant)
 * 
 * BEM: Uses .service-hero, .service-section, .perf-checklist shared blocks
 *
 * @see /src/styles/templates/service-hero.css
 * @see /src/styles/templates/performance-service.css
 */

import { ChartBar, Target, TrendUp, Users, ChartLine, ChartPie, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { FeatureList } from '../patterns/FeatureList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { StatsGrid } from '../patterns/StatsGrid';
import { ScrollReveal } from '../../hooks/useScrollReveal';

export const AnalyticsServiceTemplate = () => {
  const benefits = [
    {
      icon: ChartBar,
      title: 'Data Collection & Integration',
      description: 'Set up comprehensive tracking across all touchpoints to capture meaningful user behavior data.'
    },
    {
      icon: Target,
      title: 'Goal Tracking & Conversion',
      description: 'Define and monitor key performance indicators that align with your business objectives.'
    },
    {
      icon: TrendUp,
      title: 'Traffic & Behavior Analysis',
      description: 'Understand how visitors interact with your site and identify opportunities for improvement.'
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Break down your audience into meaningful segments to personalize content and marketing.'
    },
    {
      icon: ChartLine,
      title: 'Performance Reporting',
      description: 'Actionable insights delivered through custom dashboards and automated reports.'
    },
    {
      icon: ChartPie,
      title: 'Attribution Modeling',
      description: 'Understand which channels and touchpoints drive conversions across the customer journey.'
    }
  ];

  const deliverables = [
    'Google Analytics 4 setup and configuration',
    'Custom event tracking implementation',
    'Conversion funnel analysis',
    'Custom dashboard creation',
    'Monthly performance reports',
    'Data-driven optimization recommendations'
  ];

  const results = [
    { metric: '200%', label: 'Increase in Actionable Insights' },
    { metric: '45%', label: 'Improvement in Conversion Tracking' },
    { metric: '10x', label: 'Faster Reporting with Dashboards' },
    { metric: '30%', label: 'Reduction in Data Silos' }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'AI Search & Visibility', page: 'services/ai-search-visibility' },
          { label: 'Analytics' },
        ]}
      />

      <JourneyPhaseIndicator currentPhase="ignite" currentServicePage="analytics" />

      {/* Hero Section */}
      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at center, var(--border) 1px, transparent 1px)', backgroundSize: '24px 24px', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div className="service-hero__content service-hero__content--centered" style={{ textAlign: 'center' }}>
            <ScrollReveal animation="fade-up">
              <h1 className="service-hero__title">
                Analytics & Data Intelligence
              </h1>
              
              <p className="service-hero__description service-hero__description--centered">
                Make data-driven decisions with confidence. Our analytics solutions help you understand 
                your audience, track performance, and optimize for growth with actionable insights.
              </p>
              
              <div className="wp-flex wp-justify-center wp-gap-4 wp-flex-wrap">
                <Link to={getPageUrl('contact')} className="wp-inline-flex wp-items-center wp-justify-center wc-hero__btn-primary" style={{ borderRadius: 'var(--radius)' }}>
                  Get Analytics Audit
                </Link>
                <Link to={getPageUrl('ai-search-visibility')} className="wp-inline-flex wp-items-center wp-justify-center wc-hero__btn-secondary">
                  View Parent Service
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">What We Offer</h2>
              <p className="service-section__description">
                Comprehensive analytics services that turn data into actionable business intelligence
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={benefits.map(b => ({ ...b, icon: b.icon as any }))}
              columns={3}
              variant="glow"
              iconSize="lg"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">What You Get</h2>
              <p className="service-section__description">
                Deliverables designed to give you complete visibility into your digital performance
              </p>
            </ScrollReveal>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
            {deliverables.map((deliverable, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="perf-checklist__card" style={{ padding: 'var(--spacing-6)', backgroundColor: 'var(--card)', borderRadius: 'var(--radius-lg)' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                    <CheckCircle size={24} weight="fill" />
                  </div>
                  <span className="perf-checklist__card-text">{deliverable}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="service-section service-section--bg-card">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Proven Results</h2>
              <p className="service-section__description">
                Real outcomes from our analytics implementations
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <StatsGrid
              stats={results.map((r, i) => ({ id: `analytics-stat-${i}`, value: r.metric, label: r.label }))}
              columns={4}
              variant="cards"
            />
          </ScrollReveal>
        </Container>
      </section>

      <ServiceTestimonial serviceSlug="ai-search" />

      {/* CTA */}
      <FunkyCTA
        title="Ready to unlock your data's potential?"
        description="Let's build an analytics strategy that drives measurable business growth."
        buttonText="Get Started"
        buttonPage="contact"
      />
    </div>
  );
};
