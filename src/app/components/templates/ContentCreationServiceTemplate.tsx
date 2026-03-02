/**
 * Content Creation Service Template
 * Route: /services/content/creation
 * Parent: /services/content
 */

import { PenTool, BookOpen, FileText, Newspaper, Award, Users } from 'lucide-react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';

export const ContentCreationServiceTemplate = () => {
  const benefits = [
    { icon: PenTool, title: 'Blog Posts & Articles', description: 'Engaging, SEO-optimised long-form content that establishes authority and drives organic traffic.' },
    { icon: BookOpen, title: 'Case Studies & Whitepapers', description: 'In-depth content showcasing your expertise, methodology, and client results.' },
    { icon: FileText, title: 'Landing Page Copy', description: 'Conversion-focused copy for service pages, product pages, and campaign landing pages.' },
    { icon: Newspaper, title: 'Social Media Content', description: 'Platform-specific content calendars with engaging posts, graphics direction, and hashtag strategy.' },
    { icon: Award, title: 'Email Newsletter Content', description: 'Regular newsletter content that nurtures leads and keeps your audience engaged.' },
    { icon: Users, title: 'Thought Leadership', description: 'Executive bylines, opinion pieces, and industry commentary that positions your brand as a leader.' },
  ];

  const deliverables = [
    'Monthly blog content (4-8 posts)',
    'Quarterly case studies',
    'Landing page copy packages',
    'Social media content calendar',
    'Email newsletter templates',
    'Brand voice documentation',
    'Content performance reports',
  ];

  const results = [
    { metric: '300%', label: 'More Organic Traffic' },
    { metric: '5x', label: 'Lead Generation Lift' },
    { metric: '85%', label: 'Higher Engagement' },
    { metric: '2-4 wks', label: 'First Delivery' },
  ];

  return (
    <div className="sub-service-compact" data-service="content-creation">
      <section className="sub-service-compact__hero">
        <div className="sub-service-compact__hero-content">
          <div className="sub-service-compact__breadcrumb">
            <Link to="/services" className="sub-service-compact__breadcrumb-link">Services</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <Link to="/services/content" className="sub-service-compact__breadcrumb-link">Content</Link>
            <span className="sub-service-compact__breadcrumb-separator">/</span>
            <span className="sub-service-compact__breadcrumb-current">Content Creation</span>
          </div>

          <h1 className="sub-service-compact__hero-title">Content Creation</h1>

          <p className="sub-service-compact__hero-description">
            Professional content production that drives traffic, builds authority, and converts
            visitors into customers. From blog posts to case studies, we create content that works.
          </p>

          <div className="sub-service-compact__hero-cta">
            <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
              Start Creating
            </Link>
            <Link to="/services/content" className="sub-service-compact__cta-button sub-service-compact__cta-button--secondary">
              All Content Services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="sub-service-compact__benefits">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">What We Create</h2>
          <p className="sub-service-compact__section-description">
            Professional content across every format your business needs
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

      {/* Deliverables */}
      <section className="sub-service-compact__deliverables">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">What You Get</h2>
          <p className="sub-service-compact__section-description">
            Complete content deliverables tailored to your business
          </p>
        </div>

        <CheckList 
          items={deliverables}
          variant="default"
          className="sub-service-compact__deliverables-grid"
        />
      </section>

      {/* Results */}
      <section className="sub-service-compact__results">
        <div className="sub-service-compact__section-header">
          <h2 className="sub-service-compact__section-title">Expected Results</h2>
          <p className="sub-service-compact__section-description">
            Measurable outcomes from our content creation programmes
          </p>
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
      <ServiceTestimonial serviceSlug="content-creation" />

      {/* CTA */}
      <section className="sub-service-compact__cta">
        <div className="sub-service-compact__cta-content">
          <h2 className="sub-service-compact__cta-title">Ready to Create Content That Works?</h2>
          <p className="sub-service-compact__cta-description">
            Let us build a content engine that drives sustainable growth for your business.
          </p>
          <Link to="/contact" className="sub-service-compact__cta-button sub-service-compact__cta-button--primary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};