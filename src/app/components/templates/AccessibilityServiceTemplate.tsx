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

import { Eye, Ear, Keyboard, Cursor, CheckCircle, Shield, TrendUp } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { FunkyCTA } from '../patterns/FunkyCTA';
import '../../../styles/templates/accessibility-service-optimized.css';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { NeonStats } from '../common/NeonStats';
import { WebGLScanner } from '../patterns/WebGLScanner';

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
    <div className="service-page accessibility-service">
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
          
          <JourneyPhaseIndicator currentPhase="grow" currentServicePage="accessibility" />
          
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

      {/* Interactive Accessibility Scanner (WebGL) */}
      <section className="sub-service-base__benefits accessibility-service__scanner" style={{ padding: 'var(--spacing-16) 0', background: 'var(--color-black)' }}>
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title" style={{ color: 'var(--color-white)' }}>Continuous compliance</h2>
          <p className="sub-service-base__section-description" style={{ color: 'var(--color-gray-400)' }}>
            Real-time accessibility monitoring and issue detection.
          </p>
        </div>
        <div style={{ maxWidth: 'var(--max-w-5xl)', margin: '0 auto', padding: '0 var(--spacing-6)' }}>
          <WebGLScanner />
        </div>
      </section>

      {/* Results Section Using Contextual NeonStats */}
      <section className="sub-service-base__results accessibility-service__results" style={{ background: 'var(--color-black)', padding: 'var(--spacing-16) 0' }}>
        <NeonStats
          stats={[
            { id: '1', value: '100%', label: 'WCAG 2.1 AA Compliance', icon: CheckCircle },
            { id: '2', value: '0', label: 'Critical Accessibility Errors', icon: Shield },
            { id: '3', value: '30%', label: 'Broader Audience Reach', icon: TrendUp },
            { id: '4', value: '2-3', label: 'Months to Full Compliance', icon: CheckCircle }
          ]}
          title="Expected outcomes"
          columns={4}
          accentColor="var(--wp--preset--color--neon-lime)"
          variant="glass"
        />
      </section>

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="accessibility" />

      {/* CTA Section */}
      <FunkyCTA
        title="Ready for inclusive design?"
        description="Get a free accessibility audit and discover how to make your website accessible to everyone."
        buttonText="Request free audit"
        buttonPage="contact"
        benefits={[
          'WCAG 2.1 AA/AAA compliance',
          'Reduce legal risks',
          'Expand your audience reach',
          'Improve overall UX and SEO'
        ]}
      />
    </div>
  );
};
