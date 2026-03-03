/**
 * Design Systems Service Template
 * Route: /services/design-systems
 * Parent: /services/design
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-design-systems-optimized.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 * 
 * @see /src/styles/templates/page-service-design-systems-optimized.css
 */

import '../../../styles/templates/page-service-design-systems-optimized.css';
import { Layers, Palette, Code, BookOpen, Zap, Award } from 'lucide-react';
import { Link } from 'react-router';

export const DesignSystemsServiceTemplate = () => {
  const benefits = [
    { icon: Layers, title: 'Component Library Creation', description: 'Build a comprehensive library of reusable UI components in Figma and code.' },
    { icon: Palette, title: 'Design Token System', description: 'Colors, typography, spacing, and styling tokens for perfect consistency.' },
    { icon: Code, title: 'Code Implementation', description: 'React, WordPress, or platform-specific component implementations.' },
    { icon: BookOpen, title: 'Documentation Site', description: 'Searchable documentation with live examples and usage guidelines.' },
    { icon: Zap, title: 'Faster Development', description: 'Reduce design-to-development time by 60% with pre-built components.' },
    { icon: Award, title: 'Brand Consistency', description: 'Ensure perfect brand consistency across all products and platforms.' }
  ];

  const deliverables = ['Figma component library', 'Design token system', 'React/WordPress components', 'Documentation website', 'Usage guidelines', 'Governance framework', 'Implementation training'];

  const results = [
    { metric: '60%', label: 'Faster UI Development' },
    { metric: '90%', label: 'Brand Consistency Score' },
    { metric: '50%', label: 'Reduction in Design Debt' },
    { metric: '6-12 wks', label: 'Build Timeline' }
  ];

  return (
    <div className="sub-service-compact" data-service="design-systems">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/design" className="sub-service-compact__breadcrumb-link">Design</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">Design Systems</span>
          </div>
          
          <h1 className="sub-service-compact__hero-title">Design Systems Services</h1>
          
          <p className="sub-service-compact__hero-description">
            Scale your design operations. A comprehensive design system gives your team a single source of truth, 
            accelerates development, and ensures perfect brand consistency across every touchpoint.
          </p>
          
          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Build Design System
            </Link>
            <Link to="/services/design" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Design System Services</h2>
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
          <h2 className="sub-service-compact__cta-title">Ready for a Design System?</h2>
          <p className="sub-service-compact__cta-description">
            Get a free design system audit and implementation roadmap.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Request Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};