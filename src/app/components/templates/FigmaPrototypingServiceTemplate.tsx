/**
 * Figma Prototyping Service Template
 * Route: /services/figma-prototyping
 * Parent: /services/design
 */

import { Figma, Zap, Users, Layout, MousePointer, Award } from 'lucide-react';
import { Link } from 'react-router';

export const FigmaPrototypingServiceTemplate = () => {
  const benefits = [
    { icon: Figma, title: 'Interactive Prototypes', description: 'Clickable, realistic prototypes that demonstrate the complete user experience.' },
    { icon: Zap, title: 'Rapid Iteration', description: 'Quick iterations and design refinement based on stakeholder feedback.' },
    { icon: Users, title: 'Stakeholder Alignment', description: 'Get everyone on the same page before development begins.' },
    { icon: Layout, title: 'Component Libraries', description: 'Reusable design systems that scale across your entire product.' },
    { icon: MousePointer, title: 'User Testing Ready', description: 'Prototypes optimized for user testing and feedback collection.' },
    { icon: Award, title: 'Developer Handoff', description: 'Clean, documented designs with specs ready for development.' }
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
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/design" className="sub-service-compact__breadcrumb-link">Design</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">Figma Prototyping</span>
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
