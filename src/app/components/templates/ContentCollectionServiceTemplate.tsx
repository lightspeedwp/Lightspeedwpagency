/**
 * Content Collection Service Template
 * Route: /services/content/collection
 * Parent: /services/content
 */

import { Camera, VideoCamera, Microphone, FileText, Users, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router';
import '../../../styles/templates/sub-service-compact.css';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';

export const ContentCollectionServiceTemplate = () => {
  const benefits = [
    { icon: Camera, title: 'Professional Photography', description: 'High-quality product, team, and location photography for web and marketing.' },
    { icon: VideoCamera, title: 'Video Production', description: 'Engaging video content from product demos to customer testimonials.' },
    { icon: Microphone, title: 'Interview & Testimonial Recording', description: 'Capture authentic customer stories and expert interviews.' },
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
          <BreadcrumbPart
            links={[
              { to: '/services', label: 'Services' },
              { to: '/services/content', label: 'Content' },
              { label: 'Content Collection' }
            ]}
          />
          
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
      <ServiceTestimonial serviceSlug="content-collection" />

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