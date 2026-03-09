/**
 * Design Systems Service Template
 * Route: /services/design-systems
 * Parent: /services/design
 * 
 * Pattern Components:
 * - ✅ FeatureList — Benefits grid (glow variant, 3 columns)
 * - ✅ StatsGrid — Results metrics (cards variant, 4 columns)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-design-systems-optimized.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 * 
 * @see /src/styles/templates/page-service-design-systems-optimized.css
 * @migrated March 4, 2026 — Migrated inline benefits grid to FeatureList and results to StatsGrid (~25 lines saved)
 */

import '../../../styles/templates/page-service-design-systems-optimized.css';
import { Stack, Palette, Code, BookOpen, Lightning, Trophy } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import { StatsGrid } from '../patterns/StatsGrid';
import { CheckList } from '../patterns/CheckList';

export const DesignSystemsServiceTemplate = () => {
  const benefits = [
    { icon: Stack, title: 'Component Library Creation', description: 'Build a comprehensive library of reusable UI components in Figma and code.' },
    { icon: Palette, title: 'Design Token System', description: 'Colors, typography, spacing, and styling tokens for perfect consistency.' },
    { icon: Code, title: 'Code Implementation', description: 'React, WordPress, or platform-specific component implementations.' },
    { icon: BookOpen, title: 'Documentation Site', description: 'Searchable documentation with live examples and usage guidelines.' },
    { icon: Lightning, title: 'Faster Development', description: 'Reduce design-to-development time by 60% with pre-built components.' },
    { icon: Trophy, title: 'Brand Consistency', description: 'Ensure perfect brand consistency across all products and platforms.' }
  ];

  const deliverables = ['Figma component library', 'Design token system', 'React/WordPress components', 'Documentation website', 'Usage guidelines', 'Governance framework', 'Implementation training'];

  const results = [
    { value: '60%', label: 'Faster UI Development' },
    { value: '90%', label: 'Brand Consistency Score' },
    { value: '50%', label: 'Reduction in Design Debt' },
    { value: '6-12 wks', label: 'Build Timeline' }
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
          <FeatureList items={benefits} columns={3} variant="glow" />
        </div>
      </section>

      <section className="sub-service-compact__deliverables">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">What You Get</h2>
        </div>
        
        <div className="sub-service-compact__deliverables-grid">
          <CheckList items={deliverables} />
        </div>
      </section>

      <section className="sub-service-compact__results">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Results</h2>
        </div>
        
        <div className="sub-service-compact__results-grid">
          <StatsGrid stats={results} columns={4} variant="cards" />
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