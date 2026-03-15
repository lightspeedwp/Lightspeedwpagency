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
 * - ✅ FeatureList — Benefits grid (6 items, 3 columns, glow variant)
 * 
 * @migrated March 3, 2026 — Phase 3.1: Migrated inline benefits grid to FeatureList component (~80 lines saved)
 */

import { ChartBar, Target, TrendUp, Users, ChartLine, ChartPie, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router';
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
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at center, var(--border) 1px, transparent 1px)', backgroundSize: '24px 24px', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal animation="fade-up">
              <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                Analytics & Data Intelligence
              </h1>
              
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-10)', lineHeight: 1.6 }}>
                Make data-driven decisions with confidence. Our analytics solutions help you understand 
                your audience, track performance, and optimize for growth with actionable insights.
              </p>
              
              <div className="wp-flex wp-justify-center wp-gap-4 wp-flex-wrap">
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-3) var(--spacing-8)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-weight-bold)', textDecoration: 'none' }}>
                  Get Analytics Audit
                </Link>
                <Link to="/services/ai/search-visibility" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-3) var(--spacing-8)', backgroundColor: 'transparent', color: 'var(--foreground)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-weight-medium)', textDecoration: 'none' }}>
                  View Parent Service
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>What We Offer</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>What You Get</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                Deliverables designed to give you complete visibility into your digital performance
              </p>
            </ScrollReveal>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
            {deliverables.map((deliverable, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div style={{ padding: 'var(--spacing-6)', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                    <CheckCircle size={24} weight="fill" />
                  </div>
                  <span style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-base)', color: 'var(--foreground)' }}>{deliverable}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Proven Results</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
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