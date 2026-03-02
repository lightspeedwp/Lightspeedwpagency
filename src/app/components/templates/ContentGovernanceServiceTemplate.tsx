/**
 * Content Governance Service Template
 * Route: /services/content/governance
 * Parent: /services/content
 */

import { ShieldCheck, BookOpen, Users, CheckSquare, FileText, BarChart3 } from 'lucide-react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';

export const ContentGovernanceServiceTemplate = () => {
  const benefits = [
    { icon: ShieldCheck, title: 'Content Quality Standards', description: 'Establish clear quality benchmarks, scoring rubrics, and editorial standards for every piece of content.' },
    { icon: BookOpen, title: 'Style Guide Creation', description: 'Comprehensive brand voice, tone, and writing style guides that ensure consistency across all channels.' },
    { icon: Users, title: 'Approval Workflows', description: 'Design efficient review and approval processes that balance speed with quality control.' },
    { icon: CheckSquare, title: 'Compliance Frameworks', description: 'Ensure content meets accessibility (WCAG), legal, regulatory, and brand compliance requirements.' },
    { icon: FileText, title: 'Content Lifecycle Management', description: 'Policies for content creation, review, archival, and deletion to keep your library relevant.' },
    { icon: BarChart3, title: 'Quality Reporting', description: 'Regular audits and dashboards tracking content quality, consistency, and compliance metrics.' },
  ];

  const deliverables = [
    'Brand style guide document',
    'Content quality scorecard',
    'Approval workflow diagrams',
    'Compliance checklist templates',
    'Content lifecycle policies',
    'Team training materials',
    'Quarterly quality audit reports',
  ];

  const results = [
    { metric: '90%', label: 'Brand Consistency' },
    { metric: '50%', label: 'Faster Approvals' },
    { metric: '100%', label: 'Compliance Coverage' },
    { metric: '4-6 wks', label: 'Implementation Time' },
  ];

  return (
    <div className="sub-service-compact" data-service="content-governance">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/content" className="sub-service-compact__breadcrumb-link">Content</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">Content Governance</span>
          </div>

          <h1 className="sub-service-compact__hero-title">Content Governance</h1>

          <p className="sub-service-compact__hero-description">
            Establish the standards, workflows, and quality frameworks that keep your content
            consistent, compliant, and on-brand at scale.
          </p>

          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Start Governance Project
            </Link>
            <Link to="/services/content" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              All Content Services
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">What We Deliver</h2>
          <p className="sub-service-compact__section-description">
            Governance frameworks that scale with your organisation
          </p>
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
          <p className="sub-service-compact__section-description">Complete governance deliverables</p>
        </div>
        <CheckList 
          items={deliverables}
          variant="default"
          className="sub-service-compact__deliverables-grid"
        />
      </section>

      <section className="sub-service-compact__results">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Expected Results</h2>
          <p className="sub-service-compact__section-description">Measurable governance outcomes</p>
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

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="content-governance" />

      <section className="sub-service-compact__cta">
        <div className="sub-service-compact__cta-content">
          <h2 className="sub-service-compact__cta-title">Ready for Consistent, Quality Content?</h2>
          <p className="sub-service-compact__cta-description">
            Build governance frameworks that keep your content on-brand and compliant at scale.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Start Governance Project
          </Link>
        </div>
      </section>
    </div>
  );
};