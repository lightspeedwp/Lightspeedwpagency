/**
 * Content Strategy Service Template
 * Route: /services/content/strategy
 * Parent: /services/content
 */

import { Target, Users, FileText, TrendingUp, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';

export const ContentStrategyServiceTemplate = () => {
  const benefits = [
    { icon: Target, title: 'Audience Research & Personas', description: 'Deep understanding of your target audience needs and content preferences.' },
    { icon: Users, title: 'Competitive Content Analysis', description: 'Identify content gaps and opportunities in your market.' },
    { icon: FileText, title: 'Content Pillar Development', description: 'Build comprehensive topic clusters that establish authority.' },
    { icon: TrendingUp, title: 'SEO Content Planning', description: 'Keyword-driven content roadmap aligned with search intent.' },
    { icon: Calendar, title: 'Editorial Calendar Creation', description: '12-month content calendar with themes, topics, and distribution schedule.' },
    { icon: Award, title: 'Content Governance Framework', description: 'Brand voice guidelines, style guides, and quality standards.' }
  ];

  const deliverables = ['Content audit report', 'Audience personas (3-5)', 'Content pillar framework', 'Keyword strategy document', '12-month editorial calendar', 'Content style guide', 'Distribution strategy'];

  const results = [
    { metric: '3x', label: 'More Qualified Traffic' },
    { metric: '250%', label: 'Increase in Leads' },
    { metric: '75%', label: 'Higher Engagement' },
    { metric: '6-12 mo', label: 'ROI Timeline' }
  ];

  return (
    <div className="content-strategy-service">
      <section className="content-strategy-service__hero">
        <div className="content-strategy-service__hero-content">
          <div className="content-strategy-service__breadcrumb">
            <Link to="/services" className="content-strategy-service__breadcrumb-link">Services</Link>
            <span className="content-strategy-service__breadcrumb-separator">/</span>
            <Link to="/services/content" className="content-strategy-service__breadcrumb-link">Content</Link>
            <span className="content-strategy-service__breadcrumb-separator">/</span>
            <span className="content-strategy-service__breadcrumb-current">Content Strategy</span>
          </div>
          
          <h1 className="content-strategy-service__hero-title">Content Strategy Services</h1>
          
          <p className="content-strategy-service__hero-description">
            Stop guessing what content to create. Get a data-driven content strategy that attracts your ideal customers, 
            builds authority, and drives measurable business results.
          </p>
          
          <div className="content-strategy-service__hero-cta">
            <Link to="/contact" className="content-strategy-service__cta-button content-strategy-service__cta-button--primary">
              Get Content Strategy
            </Link>
            <Link to="/services/content" className="content-strategy-service__cta-button content-strategy-service__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      <section className="content-strategy-service__benefits">
        <div className="content-strategy-service__section-header">
          <h2 className="content-strategy-service__section-title">Strategic Content Planning</h2>
          <p className="content-strategy-service__section-description">Comprehensive strategy services that align content with business goals</p>
        </div>
        
        <FeatureList 
          items={benefits}
          columns={3}
          variant="glass"
          iconStyle="rounded"
          className="content-strategy-service__benefits-grid"
        />
      </section>

      <section className="content-strategy-service__deliverables">
        <div className="content-strategy-service__section-header">
          <h2 className="content-strategy-service__section-title">What You Get</h2>
          <p className="content-strategy-service__section-description">Complete strategic framework for content success</p>
        </div>
        
        <CheckList 
          items={deliverables}
          variant="default"
          className="content-strategy-service__deliverables-grid"
        />
      </section>

      <section className="content-strategy-service__results">
        <div className="content-strategy-service__section-header">
          <h2 className="content-strategy-service__section-title">Expected Results</h2>
        </div>
        
        <div className="content-strategy-service__results-grid">
          {results.map((result, index) => (
            <div key={index} className="content-strategy-service__result-card">
              <div className="content-strategy-service__result-metric">{result.metric}</div>
              <div className="content-strategy-service__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="content-strategy" />

      <section className="content-strategy-service__cta">
        <div className="content-strategy-service__cta-content">
          <h2 className="content-strategy-service__cta-title">Ready for Strategic Content?</h2>
          <p className="content-strategy-service__cta-description">
            Get a free content audit and strategy consultation.
          </p>
          <Link to="/contact" className="content-strategy-service__cta-button content-strategy-service__cta-button--primary">
            Request Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};