/**
 * Migrations Service Template
 * 
 * Sub-service page for Website Migrations under Hosting
 * Route: /services/migrations
 * Parent: /services/hosting
 */

import { Package, Database, CloudUpload, CheckCircle, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router';

export const MigrationsServiceTemplate = () => {
  const benefits = [
    {
      icon: Package,
      title: 'Platform Migrations',
      description: 'Seamlessly migrate from any platform to WordPress, WooCommerce, or custom solutions.'
    },
    {
      icon: Database,
      title: 'Complete Data Transfer',
      description: 'Migrate all content, media, databases, and settings with zero data loss.'
    },
    {
      icon: CloudUpload,
      title: 'Hosting Migration',
      description: 'Move to better hosting with minimal downtime and improved performance.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Comprehensive testing ensures everything works perfectly post-migration.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Secure transfer protocols and backup systems protect your data throughout.'
    },
    {
      icon: Zap,
      title: 'Minimal Downtime',
      description: 'Strategic planning keeps your site running during the migration process.'
    }
  ];

  const migrationTypes = [
    {
      type: 'Platform Migration',
      examples: ['Wix → WordPress', 'Squarespace → WooCommerce', 'Shopify → WooCommerce', 'Custom CMS → WordPress']
    },
    {
      type: 'Hosting Migration',
      examples: ['Shared → VPS', 'Any Host → WP Engine', 'Any Host → Kinsta', 'On-Premise → Cloud']
    },
    {
      type: 'Version Upgrade',
      examples: ['WordPress Major Upgrade', 'PHP Version Upgrade', 'MySQL → MariaDB', 'HTTP → HTTPS']
    }
  ];

  const process = [
    { step: 'Pre-Migration Audit', description: 'Complete site analysis and backup' },
    { step: 'Migration Plan', description: 'Detailed roadmap with timeline' },
    { step: 'Staging Migration', description: 'Test migration on staging server' },
    { step: 'QA & Testing', description: 'Comprehensive testing and fixes' },
    { step: 'Live Migration', description: 'Production deployment with monitoring' },
    { step: 'Post-Migration Support', description: '30 days of dedicated support' }
  ];

  const results = [
    { metric: '99.9%', label: 'Data Transfer Success Rate' },
    { metric: '<2hr', label: 'Average Downtime' },
    { metric: '100%', label: 'Sites Tested Pre-Launch' },
    { metric: '30 days', label: 'Post-Migration Support' }
  ];

  return (
    <div className="migrations-service">
      <section className="migrations-service__hero">
        <div className="migrations-service__hero-content">
          <div className="migrations-service__breadcrumb">
            <Link to="/services" className="migrations-service__breadcrumb-link">Services</Link>
            <span className="migrations-service__breadcrumb-separator">/</span>
            <Link to="/services/hosting" className="migrations-service__breadcrumb-link">Hosting</Link>
            <span className="migrations-service__breadcrumb-separator">/</span>
            <span className="migrations-service__breadcrumb-current">Migrations</span>
          </div>
          
          <h1 className="migrations-service__hero-title">
            Website Migration Services
          </h1>
          
          <p className="migrations-service__hero-description">
            Move your website with confidence. Expert migrations with zero data loss, minimal downtime, 
            and comprehensive testing ensure a smooth transition to your new platform or host.
          </p>
          
          <div className="migrations-service__hero-cta">
            <Link to="/contact" className="migrations-service__cta-button migrations-service__cta-button--primary">
              Get Migration Quote
            </Link>
            <Link to="/services/hosting" className="migrations-service__cta-button migrations-service__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      <section className="migrations-service__benefits">
        <div className="migrations-service__section-header">
          <h2 className="migrations-service__section-title">Migration Expertise</h2>
          <p className="migrations-service__section-description">
            Comprehensive migration services for every scenario
          </p>
        </div>
        
        <div className="migrations-service__benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="migrations-service__benefit-card">
                <div className="migrations-service__benefit-icon">
                  <Icon className="migrations-service__benefit-icon-svg" />
                </div>
                <h3 className="migrations-service__benefit-title">{benefit.title}</h3>
                <p className="migrations-service__benefit-description">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="migrations-service__types">
        <div className="migrations-service__section-header">
          <h2 className="migrations-service__section-title">Migration Types</h2>
          <p className="migrations-service__section-description">
            We handle all types of website migrations
          </p>
        </div>
        
        <div className="migrations-service__types-grid">
          {migrationTypes.map((item, index) => (
            <div key={index} className="migrations-service__type-card">
              <h3 className="migrations-service__type-title">{item.type}</h3>
              <ul className="migrations-service__type-list">
                {item.examples.map((example, exIndex) => (
                  <li key={exIndex} className="migrations-service__type-list-item">{example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="migrations-service__process">
        <div className="migrations-service__section-header">
          <h2 className="migrations-service__section-title">Migration Process</h2>
          <p className="migrations-service__section-description">
            Six-step process ensures zero data loss
          </p>
        </div>
        
        <div className="migrations-service__process-grid">
          {process.map((item, index) => (
            <div key={index} className="migrations-service__process-card">
              <div className="migrations-service__process-number">{index + 1}</div>
              <h3 className="migrations-service__process-title">{item.step}</h3>
              <p className="migrations-service__process-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="migrations-service__results">
        <div className="migrations-service__section-header">
          <h2 className="migrations-service__section-title">Migration Guarantees</h2>
          <p className="migrations-service__section-description">
            Our commitment to successful migrations
          </p>
        </div>
        
        <div className="migrations-service__results-grid">
          {results.map((result, index) => (
            <div key={index} className="migrations-service__result-card">
              <div className="migrations-service__result-metric">{result.metric}</div>
              <div className="migrations-service__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="migrations-service__cta">
        <div className="migrations-service__cta-content">
          <h2 className="migrations-service__cta-title">Ready to Migrate?</h2>
          <p className="migrations-service__cta-description">
            Get a free migration assessment and detailed quote for your project.
          </p>
          <Link to="/contact" className="migrations-service__cta-button migrations-service__cta-button--primary">
            Request Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};
