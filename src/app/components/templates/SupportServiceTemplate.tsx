/**
 * Support Service Template
 * 
 * Sub-service page for Website Support under Hosting
 * Route: /services/support
 * Parent: /services/hosting
 */

import { Headphones, Clock, Wrench, Shield, Lightning, TrendUp } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';

export const SupportServiceTemplate = () => {
  const benefits = [
    {
      icon: Headphones,
      title: '24/7 Support Availability',
      description: 'Round-the-clock support for critical issues with guaranteed response times.'
    },
    {
      icon: Clock,
      title: 'Fast Response Times',
      description: 'Under 1 hour response for critical issues, under 4 hours for standard requests.'
    },
    {
      icon: Wrench,
      title: 'Proactive Maintenance',
      description: 'Regular updates, backups, and monitoring to prevent issues before they occur.'
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Continuous security scans and immediate response to threats.'
    },
    {
      icon: Lightning,
      title: 'Performance Optimization',
      description: 'Ongoing speed improvements and resource optimization.'
    },
    {
      icon: TrendUp,
      title: 'Priority Support Queue',
      description: 'Jump the queue with dedicated support team members.'
    }
  ];

  const plans = [
    {
      name: 'Essential Support',
      price: '$199/mo',
      features: ['5 hours/month', 'Email support', '24hr response time', 'Monthly backups', 'Plugin updates']
    },
    {
      name: 'Priority Support',
      price: '$499/mo',
      features: ['15 hours/month', 'Phone + email', '4hr response time', 'Weekly backups', 'Priority queue', 'Security monitoring']
    },
    {
      name: 'Enterprise Support',
      price: 'Custom',
      features: ['Unlimited hours', '24/7 phone support', '<1hr critical response', 'Daily backups', 'Dedicated team', 'Custom SLA']
    }
  ];

  const results = [
    { metric: '<1hr', label: 'Critical Issue Response' },
    { metric: '99.9%', label: 'Uptime Guarantee' },
    { metric: '4.9/5', label: 'Customer Satisfaction' },
    { metric: '24/7', label: 'Support Availability' }
  ];

  return (
    <div className="support-service">
      <section className="support-service__hero">
        <div className="support-service__hero-content">
          <div className="support-service__breadcrumb">
            <Link to="/services" className="support-service__breadcrumb-link">Services</Link>
            <span className="support-service__breadcrumb-separator">/</span>
            <Link to="/services/hosting" className="support-service__breadcrumb-link">Hosting</Link>
            <span className="support-service__breadcrumb-separator">/</span>
            <span className="support-service__breadcrumb-current">Support</span>
          </div>
          
          <h1 className="support-service__hero-title">
            Website Support & Maintenance
          </h1>
          
          <p className="support-service__hero-description">
            Focus on your business while we keep your website running perfectly. Proactive maintenance, 
            fast support, and peace of mind with 24/7 monitoring and expert care.
          </p>
          
          <div className="support-service__hero-cta">
            <Link to="/contact" className="support-service__cta-button support-service__cta-button--primary">
              Get Support Plan
            </Link>
            <Link to="/services/hosting" className="support-service__cta-button support-service__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      <section className="support-service__benefits">
        <div className="support-service__section-header">
          <h2 className="support-service__section-title">Support Features</h2>
          <p className="support-service__section-description">
            Comprehensive support and maintenance for WordPress and WooCommerce sites
          </p>
        </div>
        
        <FeatureList 
          items={benefits}
          columns={3}
          variant="glass"
          iconStyle="rounded"
          className="support-service__benefits-grid"
        />
      </section>

      <section className="support-service__plans">
        <div className="support-service__section-header">
          <h2 className="support-service__section-title">Support Plans</h2>
          <p className="support-service__section-description">
            Choose the support level that fits your needs
          </p>
        </div>
        
        <div className="support-service__plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className="support-service__plan-card">
              <h3 className="support-service__plan-name">{plan.name}</h3>
              <div className="support-service__plan-price">{plan.price}</div>
              <ul className="support-service__plan-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="support-service__plan-feature">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="support-service__results">
        <div className="support-service__section-header">
          <h2 className="support-service__section-title">Support Metrics</h2>
          <p className="support-service__section-description">
            Our commitment to excellent support
          </p>
        </div>
        
        <div className="support-service__results-grid">
          {results.map((result, index) => (
            <div key={index} className="support-service__result-card">
              <div className="support-service__result-metric">{result.metric}</div>
              <div className="support-service__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="support" />

      <section className="support-service__cta">
        <div className="support-service__cta-content">
          <h2 className="support-service__cta-title">Ready for Peace of Mind?</h2>
          <p className="support-service__cta-description">
            Get a free consultation and find the perfect support plan for your website.
          </p>
          <Link to="/contact" className="support-service__cta-button support-service__cta-button--primary">
            Request Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};