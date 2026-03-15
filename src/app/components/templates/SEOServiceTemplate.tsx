/**
 * SEO Service Template
 * 
 * Sub-service page for SEO optimization under AI Search & Visibility
 * Route: /services/seo
 * Parent: /services/ai-search-visibility
 * 
 * Features:
 * - Hero section with service overview
 * - Key benefits grid
 * - Technical SEO deliverables
 * - Process timeline
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

import { MagnifyingGlass, TrendUp, Target, ChartBar, FileMagnifyingGlass, Trophy } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import '../../../styles/templates/seo-service-optimized.css';

export const SEOServiceTemplate = () => {
  const benefits = [
    {
      icon: MagnifyingGlass,
      title: 'Keyword Research & Strategy',
      description: 'Data-driven keyword analysis to target high-value search terms your audience is actually using.'
    },
    {
      icon: TrendUp,
      title: 'Technical SEO Optimization',
      description: 'Fix crawl errors, improve site architecture, and ensure search engines can properly index your content.'
    },
    {
      icon: Target,
      title: 'On-Page SEO',
      description: 'Optimize meta tags, headings, content structure, and internal linking for maximum relevance.'
    },
    {
      icon: ChartBar,
      title: 'Performance Tracking',
      description: 'Monitor rankings, traffic, and conversions with comprehensive analytics and reporting.'
    },
    {
      icon: FileMagnifyingGlass,
      title: 'Content Optimization',
      description: 'Enhance existing content and create new SEO-optimized pages that rank and convert.'
    },
    {
      icon: Trophy,
      title: 'Competitive Analysis',
      description: 'Understand your competitive landscape and identify opportunities to outrank competitors.'
    }
  ];

  const deliverables = [
    {
      phase: 'Discovery & Audit',
      items: [
        'Complete technical SEO audit',
        'Competitor analysis report',
        'Keyword research document',
        'Content gap analysis'
      ]
    },
    {
      phase: 'Strategy & Planning',
      items: [
        'SEO strategy roadmap',
        'Keyword targeting plan',
        'Content calendar',
        'Technical optimization plan'
      ]
    },
    {
      phase: 'Implementation',
      items: [
        'On-page optimization',
        'Technical fixes',
        'Content creation/optimization',
        'Link building strategy'
      ]
    },
    {
      phase: 'Monitoring & Reporting',
      items: [
        'Monthly performance reports',
        'Ranking tracking dashboard',
        'Traffic & conversion analytics',
        'Ongoing optimization recommendations'
      ]
    }
  ];

  const results = [
    { metric: '150%', label: 'Average Organic Traffic Increase' },
    { metric: '10x', label: 'First Page Rankings Growth' },
    { metric: '85%', label: 'Click-Through Rate Improvement' },
    { metric: '3-6 mo', label: 'Time to See Results' }
  ];

  return (
    <div className="seo-service">
      {/* Hero Section */}
      <section className="seo-service__hero">
        <div className="seo-service__hero-content">
          <div className="seo-service__breadcrumb">
            <Link to="/services" className="seo-service__breadcrumb-link">Services</Link>
            <span className="seo-service__breadcrumb-separator">/</span>
            <Link to="/services/ai" className="seo-service__breadcrumb-link">AI Services</Link>
            <span className="seo-service__breadcrumb-separator">/</span>
            <span className="seo-service__breadcrumb-current">SEO</span>
          </div>
          
          <h1 className="seo-service__hero-title">
            SEO Services
          </h1>
          
          <p className="seo-service__hero-description">
            Get found by the right audience at the right time. Our data-driven SEO strategies 
            help you rank higher, drive quality traffic, and convert visitors into customers.
          </p>
          
          <div className="seo-service__hero-cta">
            <Link to="/contact" className="seo-service__cta-button seo-service__cta-button--primary">
              Get SEO Audit
            </Link>
            <Link to="/services/ai" className="seo-service__cta-button seo-service__cta-button--secondary">
              View AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="seo-service__benefits">
        <div className="seo-service__section-header">
          <h2 className="seo-service__section-title">What We Do</h2>
          <p className="seo-service__section-description">
            Comprehensive SEO services that cover every aspect of search optimization
          </p>
        </div>
        
        <FeatureList 
          items={benefits} 
          columns={3} 
          variant="glow" 
          iconSize="lg"
        />
      </section>

      {/* Deliverables Timeline */}
      <section className="seo-service__deliverables">
        <div className="seo-service__section-header">
          <h2 className="seo-service__section-title">What You Get</h2>
          <p className="seo-service__section-description">
            Comprehensive deliverables across four key phases
          </p>
        </div>
        
        <div className="seo-service__timeline">
          {deliverables.map((phase, index) => (
            <div key={index} className="seo-service__timeline-item">
              <div className="seo-service__timeline-marker">
                <span className="seo-service__timeline-number">{index + 1}</span>
              </div>
              <div className="seo-service__timeline-content">
                <h3 className="seo-service__timeline-title">{phase.phase}</h3>
                <ul className="seo-service__timeline-list">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="seo-service__timeline-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="seo-service__results">
        <div className="seo-service__section-header">
          <h2 className="seo-service__section-title">Expected Results</h2>
          <p className="seo-service__section-description">
            Data-backed outcomes from our SEO campaigns
          </p>
        </div>
        
        <div className="seo-service__results-grid">
          {results.map((result, index) => (
            <div key={index} className="seo-service__result-card">
              <div className="seo-service__result-metric">{result.metric}</div>
              <div className="seo-service__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="seo-service__cta">
        <div className="seo-service__cta-content">
          <h2 className="seo-service__cta-title">Ready to Rank Higher?</h2>
          <p className="seo-service__cta-description">
            Get a free SEO audit and discover opportunities to improve your search visibility.
          </p>
          <Link to="/contact" className="seo-service__cta-button seo-service__cta-button--primary">
            Request Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};