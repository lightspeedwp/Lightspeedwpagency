/**
 * SEO Content Service Template
 * Route: /services/content/seo-content
 * Parent: /services/content
 */

import { MagnifyingGlass, TrendUp, FileText, Crosshair, ChartBar, ArrowsClockwise } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';

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
    { metric: '250%', label: 'Organic Traffic Growth' },
    { metric: '10x', label: 'More Keywords Ranking' },
    { metric: '65%', label: 'Higher Click-Through' },
    { metric: '3-6 mo', label: 'Results Timeline' },
  ];

  return (
    <div className="sub-service-compact" data-service="content-seo">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/content" className="sub-service-compact__breadcrumb-link">Content</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">SEO Content</span>
          </div>

          <h1 className="sub-service-compact__hero-title">SEO Content</h1>

          <p className="sub-service-compact__hero-description">
            Content that ranks and converts. We combine keyword research, search intent analysis,
            and editorial quality to create content that search engines and humans love.
          </p>

          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Get SEO Content Plan
            </Link>
            <Link to="/services/content" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              All Content Services
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">What We Do</h2>
          <p className="sub-service-compact__section-description">SEO-optimised content that drives organic growth</p>
        </div>
        <FeatureList 
          items={benefits}
          columns={3}
          variant="glass"
          iconStyle="rounded"
          className="sub-service-compact__benefits-grid"
        />
      </section>

      <section className="sub-service-compact__deliverables">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">What You Get</h2>
          <p className="sub-service-compact__section-description">Comprehensive SEO content deliverables</p>
        </div>
        <CheckList 
          items={deliverables}
          variant="default"
          className="sub-service-compact__deliverables-grid"
        />
      </section>

      <section className="sub-service-compact__results">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Expected Results</h2>
          <p className="sub-service-compact__section-description">Data-backed outcomes from SEO content</p>
        </div>
        <div className="sub-service-compact__results-grid">
          {results.map((result, index) => (
            <div key={index} className="sub-service-compact__result-card">
              <div className="sub-service-compact__result-metric">{result.metric}</div>
              <div className="sub-service-compact__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="content-seo" />

      <section className="sub-service-compact__cta">
        <div className="sub-service-compact__cta-content">
          <h2 className="sub-service-compact__cta-title">Ready to Rank Higher?</h2>
          <p className="sub-service-compact__cta-description">
            Get an SEO content plan tailored to your industry and competition.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Request SEO Content Plan
          </Link>
        </div>
      </section>
    </div>
  );
};