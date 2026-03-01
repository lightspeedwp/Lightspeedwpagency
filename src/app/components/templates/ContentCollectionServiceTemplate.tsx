/**
 * Content Collection Service Template
 * Route: /services/content/collection
 * Parent: /services/content
 */

import { Camera, Video, Mic, FileText, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

export const ContentCollectionServiceTemplate = () => {
  const benefits = [
    { icon: Camera, title: 'Professional Photography', description: 'High-quality product, team, and location photography for web and marketing.' },
    { icon: Video, title: 'Video Production', description: 'Engaging video content from product demos to customer testimonials.' },
    { icon: Mic, title: 'Interview & Testimonial Recording', description: 'Capture authentic customer stories and expert interviews.' },
    { icon: FileText, title: 'Subject Matter Expert Interviews', description: 'Extract knowledge from your team to create authoritative content.' },
    { icon: Users, title: 'User-Generated Content Curation', description: 'Collect and organize customer content, reviews, and social media posts.' },
    { icon: CheckCircle, title: 'Content Rights & Licensing', description: 'Ensure all collected content has proper permissions and usage rights.' }
  ];

  const deliverables = ['On-site photography session', 'Video recording & editing', 'Audio interviews & transcription', 'SME interview sessions', 'Content organization & tagging', 'Rights documentation', 'Final content library'];

  const results = [
    { metric: '100+', label: 'Assets Per Session' },
    { metric: '90%', label: 'Time Saved vs DIY' },
    { metric: '2-3x', label: 'More Engagement' },
    { metric: '1-2 wks', label: 'Delivery Timeline' }
  ];

  return (
    <div className="sub-service-compact" data-service="content-collection">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/content" className="sub-service-compact__breadcrumb-link">Content</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">Content Collection</span>
          </div>
          
          <h1 className="sub-service-compact__hero-title">Content Collection Services</h1>
          
          <p className="sub-service-compact__hero-description">
            Stop struggling with DIY content creation. We capture professional photos, videos, interviews, and testimonials 
            that make your brand shine across all channels.
          </p>
          
          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Book Content Session
            </Link>
            <Link to="/services/content" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Content Collection Services</h2>
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
          <h2 className="sub-service-compact__cta-title">Ready for Professional Content?</h2>
          <p className="sub-service-compact__cta-description">
            Get a free consultation and content collection plan.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Request Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
