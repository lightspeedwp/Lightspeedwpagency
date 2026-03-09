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

import { ChartBar, Target, TrendUp, Users, ChartLine, ChartPie } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';

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
    <div className="analytics-service">
      {/* Hero Section */}
      <section className="analytics-service__hero">
        <div className="analytics-service__hero-content">
          <div className="analytics-service__breadcrumb">
            <Link to="/services" className="analytics-service__breadcrumb-link">Services</Link>
            <span className="analytics-service__breadcrumb-separator">/</span>
            <Link to="/services/ai-search-visibility" className="analytics-service__breadcrumb-link">AI Search & Visibility</Link>
            <span className="analytics-service__breadcrumb-separator">/</span>
            <span className="analytics-service__breadcrumb-current">Analytics</span>
          </div>
          
          <h1 className="analytics-service__hero-title">
            Analytics & Data Intelligence
          </h1>
          
          <p className="analytics-service__hero-description">
            Make data-driven decisions with confidence. Our analytics solutions help you understand 
            your audience, track performance, and optimize for growth with actionable insights.
          </p>
          
          <div className="analytics-service__hero-cta">
            <Link to="/contact" className="analytics-service__cta-button analytics-service__cta-button--primary">
              Get Analytics Audit
            </Link>
            <Link to="/services/ai-search-visibility" className="analytics-service__cta-button analytics-service__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="analytics-service__benefits">
        <div className="analytics-service__section-header">
          <h2 className="analytics-service__section-title">What We Offer</h2>
          <p className="analytics-service__section-description">
            Comprehensive analytics services that turn data into actionable business intelligence
          </p>
        </div>
        
        <FeatureList
          items={benefits}
          columns={3}
          variant="glow"
          iconSize="lg"
        />
      </section>

      {/* Deliverables */}
      <section className="analytics-service__deliverables">
        <div className="analytics-service__section-header">
          <h2 className="analytics-service__section-title">What You Get</h2>
          <p className="analytics-service__section-description">
            Deliverables designed to give you complete visibility into your digital performance
          </p>
        </div>
        
        <div className="analytics-service__deliverables-grid">
          {deliverables.map((deliverable, index) => (
            <div key={index} className="analytics-service__deliverable-item">
              <div className="analytics-service__deliverable-icon">✓</div>
              <span className="analytics-service__deliverable-text">{deliverable}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="analytics-service__results">
        <div className="analytics-service__section-header">
          <h2 className="analytics-service__section-title">Proven Results</h2>
          <p className="analytics-service__section-description">
            Real outcomes from our analytics implementations
          </p>
        </div>
        
        <div className="analytics-service__results-grid">
          {results.map((result, index) => (
            <div key={index} className="analytics-service__result-card">
              <div className="analytics-service__result-metric">{result.metric}</div>
              <div className="analytics-service__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="analytics-service__cta">
        <div className="analytics-service__cta-content">
          <h2 className="analytics-service__cta-title">
            Ready to unlock your data's potential?
          </h2>
          <p className="analytics-service__cta-description">
            Let's build an analytics strategy that drives measurable business growth.
          </p>
          <Link to="/contact" className="analytics-service__cta-button analytics-service__cta-button--primary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};