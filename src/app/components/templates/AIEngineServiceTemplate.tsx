/**
 * AI Engine Optimization Service Template
 * 
 * Sub-service page for AI Engine Optimization (AEO) under AI Search & Visibility
 * Route: /services/ai-engine-optimisation
 * Parent: /services/ai-search-visibility
 */

import { Brain, Sparkles, Target, Zap, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export const AIEngineServiceTemplate = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'AI-First Content Strategy',
      description: 'Structure content to be understood and surfaced by AI systems like ChatGPT, Claude, and Perplexity.'
    },
    {
      icon: Sparkles,
      title: 'Entity Optimization',
      description: 'Build strong entity associations and knowledge graph relationships for AI comprehension.'
    },
    {
      icon: Target,
      title: 'Intent Matching',
      description: 'Align content with AI interpretation of user queries and contextual understanding.'
    },
    {
      icon: Zap,
      title: 'Structured Data Enhancement',
      description: 'Implement schema markup that AI engines use to understand and categorize your content.'
    },
    {
      icon: CheckCircle,
      title: 'Authoritative Signals',
      description: 'Build E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust) for AI credibility scoring.'
    },
    {
      icon: TrendingUp,
      title: 'AI Visibility Tracking',
      description: 'Monitor your brand presence across AI-generated responses and recommendations.'
    }
  ];

  const process = [
    {
      title: 'AI Audit',
      description: 'Analyze how AI engines currently understand and reference your brand',
      deliverables: ['AI citation audit', 'Entity relationship mapping', 'Content structure analysis']
    },
    {
      title: 'Strategy Development',
      description: 'Create a roadmap for improving AI engine visibility',
      deliverables: ['AEO strategy document', 'Priority content targets', 'Implementation timeline']
    },
    {
      title: 'Content Optimization',
      description: 'Enhance content for AI understanding and citation',
      deliverables: ['Content restructuring', 'Schema implementation', 'Authority building']
    },
    {
      title: 'Monitoring & Refinement',
      description: 'Track AI visibility and refine strategy based on results',
      deliverables: ['Monthly AI visibility reports', 'Citation tracking', 'Strategy adjustments']
    }
  ];

  const results = [
    { metric: '250%', label: 'Increase in AI Citations' },
    { metric: '3x', label: 'More AI-Generated Referrals' },
    { metric: '90%', label: 'Accuracy of AI Brand Info' },
    { metric: '6-9 mo', label: 'Time to Significant Impact' }
  ];

  return (
    <div className="ai-engine-service">
      {/* Hero Section */}
      <section className="ai-engine-service__hero">
        <div className="ai-engine-service__hero-content">
          <div className="ai-engine-service__breadcrumb">
            <Link to="/services" className="ai-engine-service__breadcrumb-link">Services</Link>
            <span className="ai-engine-service__breadcrumb-separator">/</span>
            <Link to="/services/ai-search-visibility" className="ai-engine-service__breadcrumb-link">AI Search & Visibility</Link>
            <span className="ai-engine-service__breadcrumb-separator">/</span>
            <span className="ai-engine-service__breadcrumb-current">AI Engine Optimization</span>
          </div>
          
          <h1 className="ai-engine-service__hero-title">
            AI Engine Optimization (AEO)
          </h1>
          
          <p className="ai-engine-service__hero-description">
            Position your brand for the AI-powered future of search. Get cited by ChatGPT, Claude, 
            Perplexity, and other AI systems that are becoming the new search engines.
          </p>
          
          <div className="ai-engine-service__hero-cta">
            <Link to="/contact" className="ai-engine-service__cta-button ai-engine-service__cta-button--primary">
              Get AI Visibility Audit
            </Link>
            <Link to="/services/ai-search-visibility" className="ai-engine-service__cta-button ai-engine-service__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="ai-engine-service__benefits">
        <div className="ai-engine-service__section-header">
          <h2 className="ai-engine-service__section-title">Why AI Engine Optimization Matters</h2>
          <p className="ai-engine-service__section-description">
            AI systems are becoming primary information sources. Be visible where your audience asks questions.
          </p>
        </div>
        
        <div className="ai-engine-service__benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="ai-engine-service__benefit-card">
                <div className="ai-engine-service__benefit-icon">
                  <Icon className="ai-engine-service__benefit-icon-svg" />
                </div>
                <h3 className="ai-engine-service__benefit-title">{benefit.title}</h3>
                <p className="ai-engine-service__benefit-description">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="ai-engine-service__process">
        <div className="ai-engine-service__section-header">
          <h2 className="ai-engine-service__section-title">Our Process</h2>
          <p className="ai-engine-service__section-description">
            Four-phase approach to AI engine visibility
          </p>
        </div>
        
        <div className="ai-engine-service__process-grid">
          {process.map((phase, index) => (
            <div key={index} className="ai-engine-service__process-card">
              <div className="ai-engine-service__process-number">{index + 1}</div>
              <h3 className="ai-engine-service__process-title">{phase.title}</h3>
              <p className="ai-engine-service__process-description">{phase.description}</p>
              <ul className="ai-engine-service__process-list">
                {phase.deliverables.map((item, itemIndex) => (
                  <li key={itemIndex} className="ai-engine-service__process-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="ai-engine-service__results">
        <div className="ai-engine-service__section-header">
          <h2 className="ai-engine-service__section-title">Expected Results</h2>
          <p className="ai-engine-service__section-description">
            Measurable improvements in AI visibility and brand presence
          </p>
        </div>
        
        <div className="ai-engine-service__results-grid">
          {results.map((result, index) => (
            <div key={index} className="ai-engine-service__result-card">
              <div className="ai-engine-service__result-metric">{result.metric}</div>
              <div className="ai-engine-service__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ai-engine-service__cta">
        <div className="ai-engine-service__cta-content">
          <h2 className="ai-engine-service__cta-title">Ready for AI-Powered Visibility?</h2>
          <p className="ai-engine-service__cta-description">
            Get a free AI visibility audit and see where your brand appears (or doesn't) in AI responses.
          </p>
          <Link to="/contact" className="ai-engine-service__cta-button ai-engine-service__cta-button--primary">
            Request Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};
