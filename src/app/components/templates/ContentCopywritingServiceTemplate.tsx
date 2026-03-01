/**
 * Copywriting & UX Writing Service Template
 * Route: /services/content/copywriting
 * Parent: /services/content
 */

import { Edit3, Type, MousePointer, Mail, Megaphone, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

export const ContentCopywritingServiceTemplate = () => {
  const benefits = [
    { icon: Edit3, title: 'Website Copywriting', description: 'Clear, compelling website copy that communicates your value proposition and drives conversions.' },
    { icon: Type, title: 'UX Microcopy', description: 'Button labels, error messages, tooltips, and interface text that guides users effortlessly.' },
    { icon: MousePointer, title: 'CTA Optimisation', description: 'A/B tested calls-to-action that maximise click-through rates and conversion.' },
    { icon: Mail, title: 'Email Campaigns', description: 'Subject lines, body copy, and sequences that nurture leads through your sales funnel.' },
    { icon: Megaphone, title: 'Ad & Campaign Copy', description: 'Punchy headlines and persuasive copy for paid search, social ads, and display campaigns.' },
    { icon: BookOpen, title: 'Brand Voice & Tone', description: 'Develop a distinctive brand voice with guidelines your entire team can follow.' },
  ];

  const deliverables = [
    'Website copy audit & recommendations',
    'Full website copy rewrite',
    'UX writing style guide',
    'Email sequence templates',
    'Ad copy variants for A/B testing',
    'Brand voice documentation',
    'Conversion-focused landing pages',
  ];

  const results = [
    { metric: '45%', label: 'Higher Conversions' },
    { metric: '2.5x', label: 'Better Click-Through' },
    { metric: '60%', label: 'Reduced Bounce Rate' },
    { metric: '1-3 wks', label: 'Turnaround Time' },
  ];

  return (
    <div className="sub-service-compact" data-service="content-copywriting">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/content" className="sub-service-compact__breadcrumb-link">Content</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">Copywriting & UX Writing</span>
          </div>

          <h1 className="sub-service-compact__hero-title">Copywriting & UX Writing</h1>

          <p className="sub-service-compact__hero-description">
            Words that work harder. From website headlines to interface microcopy,
            we craft conversion-focused copy that guides users and drives action.
          </p>

          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Get Copy Audit
            </Link>
            <Link to="/services/content" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              All Content Services
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">What We Write</h2>
          <p className="sub-service-compact__section-description">
            Conversion-focused copywriting across every touchpoint
          </p>
        </div>
        <div className="sub-service-compact__benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="sub-service-compact__benefit-card">
                <div className="sub-service-compact__benefit-icon">
                  <Icon className="sub-service-compact__benefit-icon-svg" aria-hidden="true" />
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
          <p className="sub-service-compact__section-description">Complete copywriting deliverables</p>
        </div>
        <div className="sub-service-compact__deliverables-grid">
          {deliverables.map((item, index) => (
            <div key={index} className="sub-service-compact__deliverable-item">
              <div className="sub-service-compact__deliverable-icon" aria-hidden="true">✓</div>
              <span className="sub-service-compact__deliverable-text">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sub-service-compact__results">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Expected Results</h2>
          <p className="sub-service-compact__section-description">Measurable improvements from better copy</p>
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
          <h2 className="sub-service-compact__cta-title">Ready for Copy That Converts?</h2>
          <p className="sub-service-compact__cta-description">
            Get a free copy audit and discover how strategic words can transform your conversion rates.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Request Copy Audit
          </Link>
        </div>
      </section>
    </div>
  );
};
