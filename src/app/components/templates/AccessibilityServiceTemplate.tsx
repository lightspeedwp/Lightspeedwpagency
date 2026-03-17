/**
 * Accessibility Service Template
 * 
 * Sub-service page for Web Accessibility under Performance
 * Route: /services/accessibility
 * Parent: /services/performance
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * Theme classes: accessibility-service__* (from accessibility-service-optimized.css)
 *
 * @see /src/styles/templates/accessibility-service-optimized.css
 * @see /src/styles/templates/sub-service-base.css
 */

import { Eye, Ear, Keyboard, Cursor, CheckCircle, Shield } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import '../../../styles/templates/accessibility-service-optimized.css';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export const AccessibilityServiceTemplate = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Visual accessibility',
      description: 'WCAG 2.1 AA/AAA compliant color contrast, text sizing, and screen reader optimization.'
    },
    {
      icon: Ear,
      title: 'Audio & video accessibility',
      description: 'Captions, transcripts, and audio descriptions for all multimedia content.'
    },
    {
      icon: Keyboard,
      title: 'Keyboard navigation',
      description: 'Full keyboard operability with clear focus indicators and logical tab order.'
    },
    {
      icon: Cursor,
      title: 'Motor accessibility',
      description: 'Large touch targets, generous spacing, and support for assistive input devices.'
    },
    {
      icon: CheckCircle,
      title: 'WCAG compliance audits',
      description: 'Comprehensive testing against WCAG 2.1 Level AA/AAA standards with detailed reports.'
    },
    {
      icon: Shield,
      title: 'Legal compliance',
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
      <section className="sub-service-base__hero accessibility-service__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Performance', href: '/services/performance' },
              { label: 'Accessibility' },
            ]}
          />
          
          <h1 className="sub-service-base__hero-title">
            Web accessibility services
          </h1>
          
          <p className="sub-service-base__hero-description">
            Make your website accessible to everyone. Achieve WCAG 2.1 AA/AAA compliance, reduce legal risk, 
            and expand your audience by 20-30% with inclusive design.
          </p>
          
          <div className="sub-service-base__hero-cta">
            <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
              Get accessibility audit
            </Link>
            <Link to={getPageUrl('performance')} className="sub-service-base__cta-button sub-service-base__cta-button--secondary">
              View parent service
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="sub-service-base__benefits accessibility-service__benefits">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">What we fix</h2>
          <p className="sub-service-base__section-description">
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
      <section className="sub-service-base__benefits accessibility-service__wcag">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">WCAG compliance levels</h2>
          <p className="sub-service-base__section-description">
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
      <section className="sub-service-base__benefits accessibility-service__deliverables">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">What you get</h2>
          <p className="sub-service-base__section-description">
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
      <section className="sub-service-base__results accessibility-service__results">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">Expected outcomes</h2>
          <p className="sub-service-base__section-description">
            Measurable improvements in accessibility and compliance
          </p>
        </div>
        
        <div className="sub-service-base__results-grid">
          {results.map((result, index) => (
            <div key={index} className="sub-service-base__result-card">
              <div className="sub-service-base__result-metric">{result.metric}</div>
              <div className="sub-service-base__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="accessibility" />

      {/* CTA Section */}
      <section className="sub-service-base__cta accessibility-service__cta">
        <div className="sub-service-base__cta-content">
          <h2 className="sub-service-base__cta-title">Ready for inclusive design?</h2>
          <p className="sub-service-base__cta-description">
            Get a free accessibility audit and discover how to make your website accessible to everyone.
          </p>
          <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
            Request free audit
          </Link>
        </div>
      </section>
    </div>
  );
};
