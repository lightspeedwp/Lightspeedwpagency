/**
 * Email Marketing Service Template
 * Route: /services/email-marketing
 * Parent: /services/content
 */

import { Mail, Target, Zap, Users, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export const EmailMarketingServiceTemplate = () => {
  const benefits = [
    { icon: Mail, title: 'Campaign Strategy & Planning', description: 'Strategic email campaigns aligned with sales cycles and customer journeys.' },
    { icon: Target, title: 'Advanced Segmentation', description: 'Behavioral targeting, dynamic content, and personalized messaging at scale.' },
    { icon: Zap, title: 'Marketing Automation', description: 'Sophisticated workflows that nurture leads and drive conversions automatically.' },
    { icon: Users, title: 'List Growth & Acquisition', description: 'Lead magnets, landing pages, and campaigns designed to grow your list.' },
    { icon: BarChart3, title: 'A/B Testing & Optimization', description: 'Continuous testing and improvement of subject lines, content, and CTAs.' },
    { icon: TrendingUp, title: 'Revenue Attribution', description: 'Track email marketing contribution to revenue and customer lifetime value.' }
  ];

  const deliverables = ['Email marketing strategy', 'Campaign calendar', 'Email template library', 'Automation workflows', 'Segmentation strategy', 'Monthly performance reports', 'Conversion optimization roadmap'];

  const results = [
    { metric: '25%', label: 'Avg Conversion Rate' },
    { metric: '38:1', label: 'Avg ROI (Email Marketing)' },
    { metric: '200%', label: 'Revenue Growth (12 mo)' },
    { metric: '50%', label: 'Reduction in Manual Work' }
  ];

  return (
    <div className="sub-service-compact" data-service="email-marketing">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/content" className="sub-service-compact__breadcrumb-link">Content</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">Email Marketing</span>
          </div>
          
          <h1 className="sub-service-compact__hero-title">Email Marketing Services</h1>
          
          <p className="sub-service-compact__hero-description">
            Turn email into your highest-ROI channel. Strategic campaigns, advanced automation, and continuous 
            optimization that consistently drives revenue and customer loyalty.
          </p>
          
          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Get Email Marketing Plan
            </Link>
            <Link to="/services/content" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Email Marketing Services</h2>
        </div>
        
        <div className="sub-service-compact__benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="sub-service-compact__benefit-card">
                <div className="sub-service-compact__benefit-icon">
                  <Icon className="sub-service-compact__benefit-icon-svg" />
                </div>
                <h3 className="sub-service-compact__benefit-title">{benefit.title}</h3>
                <p className="sub-service-compact__benefit-description">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="sub-service-compact__deliverables">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">What You Get</h2>
        </div>
        
        <div className="sub-service-compact__deliverables-grid">
          {deliverables.map((item, index) => (
            <div key={index} className="sub-service-compact__deliverable-item">
              <div className="sub-service-compact__deliverable-icon">✓</div>
              <div className="sub-service-compact__deliverable-text">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="sub-service-compact__results">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Results</h2>
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

      <section className="sub-service-compact__cta">
        <div className="sub-service-compact__cta-content">
          <h2 className="sub-service-compact__cta-title">Ready for Email Marketing ROI?</h2>
          <p className="sub-service-compact__cta-description">
            Get a free email marketing audit and strategy session.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Request Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};
