/**
 * Newsletter Service Template
 * Route: /services/newsletter
 * Parent: /services/content
 */

import { Mail, Users, TrendingUp, Calendar, BarChart, Award } from 'lucide-react';
import { Link } from 'react-router';

export const NewsletterServiceTemplate = () => {
  const benefits = [
    { icon: Mail, title: 'Newsletter Strategy & Planning', description: 'Content calendar, editorial themes, and subscriber growth strategies.' },
    { icon: Users, title: 'List Building & Segmentation', description: 'Grow your list and segment by behavior, interests, and engagement level.' },
    { icon: TrendingUp, title: 'Content Creation & Design', description: 'Engaging newsletter content with on-brand design templates.' },
    { icon: Calendar, title: 'Automated Email Sequences', description: 'Welcome series, nurture campaigns, and re-engagement flows.' },
    { icon: BarChart, title: 'Performance Optimization', description: 'A/B testing, analytics, and continuous improvement based on data.' },
    { icon: Award, title: 'Platform Setup & Management', description: 'Mailchimp, ConvertKit, or custom ESP setup and ongoing management.' }
  ];

  const deliverables = ['Newsletter strategy document', 'Content calendar (6-12 months)', 'Email template design', 'List segmentation setup', 'Automated sequences', 'Monthly analytics reports', 'Subscriber growth plan'];

  const results = [
    { metric: '45%', label: 'Avg Open Rate' },
    { metric: '8%', label: 'Avg Click Rate' },
    { metric: '150%', label: 'List Growth (12 mo)' },
    { metric: '3-6 mo', label: 'Time to Positive ROI' }
  ];

  return (
    <div className="sub-service-compact" data-service="newsletter">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/content" className="sub-service-compact__breadcrumb-link">Content</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">Newsletter</span>
          </div>
          
          <h1 className="sub-service-compact__hero-title">Newsletter Services</h1>
          
          <p className="sub-service-compact__hero-description">
            Build a thriving email audience. Expert newsletter strategy, content creation, and optimization 
            that turns subscribers into customers and advocates.
          </p>
          
          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Start Newsletter Strategy
            </Link>
            <Link to="/services/content" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Newsletter Services</h2>
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
          <h2 className="sub-service-compact__cta-title">Ready to Grow Your List?</h2>
          <p className="sub-service-compact__cta-description">
            Get a free newsletter strategy consultation.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Request Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
