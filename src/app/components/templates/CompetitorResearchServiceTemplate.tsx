/**
 * Competitor Research Service Template
 * Route: /competitor-research
 */

import { MagnifyingGlass, ChartBar, Target, Lightbulb, TrendUp, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import '../../../styles/templates/competitor-research-service.css';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export const CompetitorResearchServiceTemplate = () => {
  const benefits = [
    { icon: MagnifyingGlass, title: 'Deep Competitive Analysis', description: 'Comprehensive research into competitor strategies, positioning, and market presence.' },
    { icon: ChartBar, title: 'Performance Benchmarking', description: 'Compare your metrics against industry leaders and identify performance gaps.' },
    { icon: Target, title: 'Strategic Positioning', description: 'Find unique positioning opportunities to differentiate from competitors.' },
    { icon: Lightbulb, title: 'Opportunity Identification', description: 'Discover untapped market opportunities and content gaps.' },
    { icon: TrendUp, title: 'Trend Analysis', description: 'Track emerging trends and competitor movements in real-time.' },
    { icon: CheckCircle, title: 'Actionable Insights', description: 'Get clear, data-driven recommendations to outperform competitors.' }
  ];

  const deliverables = [
    'Competitor landscape report',
    'SWOT analysis (3-5 competitors)',
    'Content gap analysis',
    'SEO competitive insights',
    'Social media benchmarking',
    'Pricing & positioning analysis',
    'Strategic recommendations'
  ];

  const results = [
    { metric: '5x', label: 'Better Market Insights' },
    { metric: '180%', label: 'Strategic Clarity' },
    { metric: '65%', label: 'Faster Decision Making' },
    { metric: '4-8 wk', label: 'Delivery Timeline' }
  ];

  return (
    <div className="competitor-research">
      <section className="competitor-research__hero">
        <div className="competitor-research__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Competitor Research' },
            ]}
          />
          
          <h1 className="competitor-research__hero-title">Competitor research services</h1>
          
          <p className="competitor-research__hero-description">
            Gain strategic advantage with deep competitive intelligence. Understand your competitors' strategies, 
            identify market gaps, and position your brand to win in your industry.
          </p>
          
          <div className="competitor-research__hero-cta">
            <Link to={getPageUrl('contact')} className="competitor-research__cta-button competitor-research__cta-button--primary">
              Get Research Report
            </Link>
            <Link to={getPageUrl('services')} className="competitor-research__cta-button competitor-research__cta-button--secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="competitor-research__benefits">
        <div className="competitor-research__section-header">
          <h2 className="competitor-research__section-title">Competitive intelligence</h2>
          <p className="competitor-research__section-description">Comprehensive research services to understand your competitive landscape</p>
        </div>
        
        <FeatureList 
          items={benefits}
          columns={3}
          variant="glass"
          iconStyle="rounded"
          className="competitor-research__benefits-grid"
        />
      </section>

      <section className="competitor-research__deliverables">
        <div className="competitor-research__section-header">
          <h2 className="competitor-research__section-title">What you get</h2>
          <p className="competitor-research__section-description">Complete competitive analysis and strategic recommendations</p>
        </div>
        
        <CheckList 
          items={deliverables}
          variant="default"
          className="competitor-research__deliverables-grid"
        />
      </section>

      <section className="competitor-research__results">
        <div className="competitor-research__section-header">
          <h2 className="competitor-research__section-title">Expected results</h2>
        </div>
        
        <div className="competitor-research__results-grid">
          {results.map((result, index) => (
            <div key={index} className="competitor-research__result-card">
              <div className="competitor-research__result-metric">{result.metric}</div>
              <div className="competitor-research__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      <ServiceTestimonial
        quote="The competitor research opened our eyes to opportunities we never knew existed. We completely repositioned our offering and saw a 3x increase in qualified leads within 6 months."
        author="Sarah Mitchell"
        role="Marketing Director"
        company="TechFlow Solutions"
      />

      <section className="competitor-research__cta-section">
        <div className="competitor-research__cta-content">
          <h2 className="competitor-research__cta-title">Ready to understand your competition?</h2>
          <p className="competitor-research__cta-description">
            Get actionable competitive intelligence that drives strategic decisions.
          </p>
          <Link to={getPageUrl('contact')} className="competitor-research__cta-button competitor-research__cta-button--primary">
            Request Research Proposal
          </Link>
        </div>
      </section>
    </div>
  );
};
