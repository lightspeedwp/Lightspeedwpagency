/**
 * Figma Prototyping Service Template
 * Route: /services/figma-prototyping
 * Parent: /services/design
 */

import { FigmaLogo, Lightning, Users, Layout, Cursor, Trophy } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';

export const FigmaPrototypingServiceTemplate = () => {
  const benefits = [
    { icon: FigmaLogo, title: 'Interactive Prototypes', description: 'Clickable, realistic prototypes that demonstrate the complete user experience.' },
    { icon: Lightning, title: 'Rapid Iteration', description: 'Quick iterations and design refinement based on stakeholder feedback.' },
    { icon: Users, title: 'Stakeholder Alignment', description: 'Get everyone on the same page before development begins.' },
    { icon: Layout, title: 'Component Libraries', description: 'Reusable design systems that scale across your entire product.' },
    { icon: Cursor, title: 'User Testing Ready', description: 'Prototypes optimized for user testing and feedback collection.' },
    { icon: Trophy, title: 'Developer Handoff', description: 'Clean, documented designs with specs ready for development.' }
  ];

  const deliverables = ['Interactive Figma prototype', 'Component library', 'Design system documentation', 'User flow diagrams', 'Responsive breakpoints', 'Developer handoff package', 'Design revision rounds (3)'];

  const results = [
    { metric: '70%', label: 'Faster Development' },
    { metric: '50%', label: 'Fewer Design Changes' },
    { metric: '3x', label: 'Better Stakeholder Alignment' },
    { metric: '2-4 wks', label: 'Typical Timeline' }
  ];

  return (
    <div className="sub-service-compact" data-service="figma-prototyping">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <BreadcrumbPart
              links={[
                { to: '/services', label: 'Services' },
                { to: '/services/design', label: 'Design' },
                { label: 'Figma Prototyping' }
              ]}
            />
          </div>
          
          <h1 className="sub-service-compact__hero-title">Figma Prototyping Services</h1>
          
          <p className="sub-service-compact__hero-description">
            See your product before it's built. Interactive Figma prototypes let you test ideas, get feedback, 
            and refine the experience before writing a single line of code.
          </p>
          
          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Start Prototype Project
            </Link>
            <Link to="/services/design" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Prototyping Services</h2>
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

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="figma-prototyping" />

      <section className="sub-service-compact__cta">
        <div className="sub-service-compact__cta-content">
          <h2 className="sub-service-compact__cta-title">Ready to Prototype?</h2>
          <p className="sub-service-compact__cta-description">
            Get a free prototyping consultation and project estimate.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Request Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};