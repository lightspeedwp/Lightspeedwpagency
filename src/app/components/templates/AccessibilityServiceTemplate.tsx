/**
 * Accessibility Service Template
 * 
 * Sub-service page for Web Accessibility under Performance
 * Route: /services/accessibility
 * Parent: /services/performance
 */

import { Eye, Ear, Keyboard, Cursor, CheckCircle, Shield } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import '../../../styles/templates/accessibility-service-optimized.css';

export const AccessibilityServiceTemplate = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'WCAG 2.1 AA/AAA compliant color contrast, text sizing, and screen reader optimization.'
    },
    {
      icon: Ear,
      title: 'Audio & Video Accessibility',
      description: 'Captions, transcripts, and audio descriptions for all multimedia content.'
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Full keyboard operability with clear focus indicators and logical tab order.'
    },
    {
      icon: Cursor,
      title: 'Motor Accessibility',
      description: 'Large touch targets, generous spacing, and support for assistive input devices.'
    },
    {
      icon: CheckCircle,
      title: 'WCAG Compliance Audits',
      description: 'Comprehensive testing against WCAG 2.1 Level AA/AAA standards with detailed reports.'
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Meet ADA, Section 508, and international accessibility regulations.'
    }
  ];

  const wcagLevels = [
    {
      level: 'Level A',
      description: 'Essential accessibility features',
      criteria: [
        'Text alternatives for images',
        'Keyboard accessible functionality',
        'Meaningful link text',
        'Proper heading hierarchy'
      ]
    },
    {
      level: 'Level AA',
      description: 'Enhanced accessibility (industry standard)',
      criteria: [
        '4.5:1 contrast ratio minimum',
        'Resizable text up to 200%',
        'Multiple navigation methods',
        'Consistent navigation patterns'
      ]
    },
    {
      level: 'Level AAA',
      description: 'Highest accessibility standard',
      criteria: [
        '7:1 contrast ratio minimum',
        'Sign language interpretation',
        'Extended audio descriptions',
        'Context-sensitive help'
      ]
    }
  ];

  const deliverables = [
    'Complete WCAG 2.1 accessibility audit',
    'Accessibility remediation roadmap',
    'Screen reader optimization',
    'Keyboard navigation fixes',
    'Color contrast corrections',
    'ARIA landmark implementation',
    'Form accessibility enhancement',
    'Monthly compliance monitoring'
  ];

  const results = [
    { metric: '100%', label: 'WCAG 2.1 AA Compliance' },
    { metric: '0', label: 'Critical Accessibility Errors' },
    { metric: '30%', label: 'Broader Audience Reach' },
    { metric: '2-3 mo', label: 'Time to Full Compliance' }
  ];

  return (
    <div className="accessibility-service">
      {/* Hero Section */}
      <section className="accessibility-service__hero">
        <div className="accessibility-service__hero-content">
          <div className="accessibility-service__breadcrumb">
            <Link to="/services" className="accessibility-service__breadcrumb-link">Services</Link>
            <span className="accessibility-service__breadcrumb-separator">/</span>
            <Link to="/services/performance" className="accessibility-service__breadcrumb-link">Performance</Link>
            <span className="accessibility-service__breadcrumb-separator">/</span>
            <span className="accessibility-service__breadcrumb-current">Accessibility</span>
          </div>
          
          <h1 className="accessibility-service__hero-title">
            Web Accessibility Services
          </h1>
          
          <p className="accessibility-service__hero-description">
            Make your website accessible to everyone. Achieve WCAG 2.1 AA/AAA compliance, reduce legal risk, 
            and expand your audience by 20-30% with inclusive design.
          </p>
          
          <div className="accessibility-service__hero-cta">
            <Link to="/contact" className="accessibility-service__cta-button accessibility-service__cta-button--primary">
              Get Accessibility Audit
            </Link>
            <Link to="/services/performance" className="accessibility-service__cta-button accessibility-service__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="accessibility-service__benefits">
        <div className="accessibility-service__section-header">
          <h2 className="accessibility-service__section-title">What We Fix</h2>
          <p className="accessibility-service__section-description">
            Comprehensive accessibility services covering all disability types
          </p>
        </div>
        
        <FeatureList 
          items={benefits}
          columns={3}
          variant="glass"
          iconStyle="rounded"
          className="accessibility-service__benefits-grid"
        />
      </section>

      {/* WCAG Levels */}
      <section className="accessibility-service__wcag">
        <div className="accessibility-service__section-header">
          <h2 className="accessibility-service__section-title">WCAG Compliance Levels</h2>
          <p className="accessibility-service__section-description">
            We help you achieve the right accessibility level for your needs
          </p>
        </div>
        
        <div className="accessibility-service__wcag-grid">
          {wcagLevels.map((level, index) => (
            <div key={index} className="accessibility-service__wcag-card">
              <div className="accessibility-service__wcag-badge">{level.level}</div>
              <h3 className="accessibility-service__wcag-title">{level.description}</h3>
              <ul className="accessibility-service__wcag-list">
                {level.criteria.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-service__wcag-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="accessibility-service__deliverables">
        <div className="accessibility-service__section-header">
          <h2 className="accessibility-service__section-title">What You Get</h2>
          <p className="accessibility-service__section-description">
            Complete accessibility implementation and ongoing monitoring
          </p>
        </div>
        
        <CheckList 
          items={deliverables}
          variant="default"
          className="accessibility-service__deliverables-grid"
        />
      </section>

      {/* Results Section */}
      <section className="accessibility-service__results">
        <div className="accessibility-service__section-header">
          <h2 className="accessibility-service__section-title">Expected Outcomes</h2>
          <p className="accessibility-service__section-description">
            Measurable improvements in accessibility and compliance
          </p>
        </div>
        
        <div className="accessibility-service__results-grid">
          {results.map((result, index) => (
            <div key={index} className="accessibility-service__result-card">
              <div className="accessibility-service__result-metric">{result.metric}</div>
              <div className="accessibility-service__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="accessibility" />

      {/* CTA Section */}
      <section className="accessibility-service__cta">
        <div className="accessibility-service__cta-content">
          <h2 className="accessibility-service__cta-title">Ready for Inclusive Design?</h2>
          <p className="accessibility-service__cta-description">
            Get a free accessibility audit and discover how to make your website accessible to everyone.
          </p>
          <Link to="/contact" className="accessibility-service__cta-button accessibility-service__cta-button--primary">
            Request Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};