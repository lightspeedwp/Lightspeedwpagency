/**
 * Content Audit Service Template
 * Route: /services/content/audit
 * Parent: /services/content
 */

import { MagnifyingGlass, ListChecks as FileCheck, TrendDown, WarningCircle, Crosshair, Trophy } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';

export const ContentAuditServiceTemplate = () => {
  const benefits = [
    { icon: MagnifyingGlass, title: 'Complete Content Inventory', description: 'Catalog every page, post, and asset with metadata and performance metrics.' },
    { icon: FileCheck, title: 'Quality Assessment', description: 'Evaluate content against E-E-A-T, readability, and brand consistency standards.' },
    { icon: TrendDown, title: 'Performance Analysis', description: 'Identify low-performing content and optimization opportunities.' },
    { icon: WarningCircle, title: 'Gap Analysis', description: 'Find missing topics and content gaps in your market coverage.' },
    { icon: Crosshair, title: 'SEO Evaluation', description: 'Assess keyword targeting, meta data, and technical SEO issues.' },
    { icon: Trophy, title: 'Actionable Recommendations', description: 'Prioritized action plan: update, consolidate, redirect, or delete.' }
  ];

  const deliverables = ['Complete content inventory spreadsheet', 'Performance dashboard', 'Quality scorecard', 'Gap analysis report', 'SEO audit findings', 'Action plan with priorities', 'Content refresh roadmap'];

  const results = [
    { metric: '100%', label: 'Content Cataloged' },
    { metric: '40%', label: 'Avg Performance Lift' },
    { metric: '2-3x', label: 'More Strategic Focus' },
    { metric: '2-3 wks', label: 'Audit Timeline' }
  ];

  return (
    <div className="sub-service-compact" data-service="content-audit">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/content" className="sub-service-compact__breadcrumb-link">Content</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">Content Audit</span>
          </div>
          
          <h1 className="sub-service-compact__hero-title">Content Audit Services</h1>
          
          <p className="sub-service-compact__hero-description">
            Know exactly what content you have, how it's performing, and what to do next. Our comprehensive audits 
            reveal quick wins and long-term opportunities to improve content ROI.
          </p>
          
          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Get Content Audit
            </Link>
            <Link to="/services/content" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Audit Services</h2>
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
        </div>
        
        <CheckList 
          items={deliverables}
          variant="default"
          className="sub-service-compact__deliverables-grid"
        />
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
          <h2 className="sub-service-compact__cta-title">Ready to Audit Your Content?</h2>
          <p className="sub-service-compact__cta-description">
            Get a free sample audit of 10 pages.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Request Free Sample Audit
          </Link>
        </div>
      </section>
    </div>
  );
};