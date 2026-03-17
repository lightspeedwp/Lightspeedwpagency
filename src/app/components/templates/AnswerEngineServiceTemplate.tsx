/**
 * Answer Engine Optimization Service Template
 * 
 * Sub-service page for Answer Engine Optimization (AEO) under AI Search & Visibility
 * Route: /services/ai/answer-engine-optimisation
 * Parent: /services/ai
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * Theme classes: answer-engine-service__* (from answer-engine-service-optimized.css)
 *
 * Pattern Components:
 * - FeatureList — Benefits grid (6 items, 3 columns, glow variant)
 *
 * @see /src/styles/templates/answer-engine-service-optimized.css
 * @see /src/styles/templates/sub-service-base.css
 */

import { ChatCircle, Lightbulb, Users, Trophy, TrendUp, Target } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { FeatureList } from '../patterns/FeatureList';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import '../../../styles/templates/answer-engine-service-optimized.css';

export const AnswerEngineServiceTemplate = () => {
  const benefits = [
    {
      icon: ChatCircle,
      title: 'Conversational content optimization',
      description: 'Structure content to answer natural language questions that users ask AI assistants and voice search.'
    },
    {
      icon: Lightbulb,
      title: 'Featured snippet optimization',
      description: 'Format content to be selected as direct answers in Google featured snippets and AI responses.'
    },
    {
      icon: Users,
      title: 'Question-answer mapping',
      description: 'Identify and answer the exact questions your target audience is asking across all platforms.'
    },
    {
      icon: Trophy,
      title: 'Authority building',
      description: 'Establish your brand as the definitive source for answers in your industry or niche.'
    },
    {
      icon: TrendUp,
      title: 'Zero-click optimization',
      description: 'Capture visibility even when users get answers without clicking through to websites.'
    },
    {
      icon: Target,
      title: 'Multi-platform coverage',
      description: 'Optimize for Google, Bing, voice assistants, and AI engines simultaneously.'
    }
  ];

  const process = [
    {
      phase: 'Question research',
      description: 'Identify the questions your audience is asking',
      deliverables: [
        'Question inventory (500+ questions)',
        'Search intent mapping',
        'Competitor question analysis',
        'Question priority matrix'
      ]
    },
    {
      phase: 'Answer development',
      description: 'Create comprehensive, authoritative answers',
      deliverables: [
        'Direct answer creation',
        'Long-form content development',
        'FAQ schema implementation',
        'Answer structure optimization'
      ]
    },
    {
      phase: 'Format optimization',
      description: 'Structure content for answer engines',
      deliverables: [
        'Featured snippet formatting',
        'People Also Ask optimization',
        'Voice search optimization',
        'Conversational tone adaptation'
      ]
    },
    {
      phase: 'Monitoring & refinement',
      description: 'Track answer visibility and improve',
      deliverables: [
        'Answer visibility tracking',
        'Featured snippet monitoring',
        'Voice search performance',
        'Monthly optimization reports'
      ]
    }
  ];

  const results = [
    { metric: '400%', label: 'Increase in Featured Snippets' },
    { metric: '3x', label: 'More Voice Search Visibility' },
    { metric: '85%', label: 'Answer Accuracy Rate' },
    { metric: '2-4 mo', label: 'Time to First Results' }
  ];

  return (
    <div className="answer-engine-service">
      {/* Hero Section */}
      <section className="sub-service-base__hero answer-engine-service__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'AI Services', href: '/services/ai' },
              { label: 'Answer engine optimization' },
            ]}
          />
          
          <h1 className="sub-service-base__hero-title">
            Answer engine optimization (AEO)
          </h1>
          
          <p className="sub-service-base__hero-description">
            Be the answer. Get featured in Google snippets, voice search results, and AI-generated responses. 
            Position your content as the authoritative source for questions in your industry.
          </p>
          
          <div className="sub-service-base__hero-cta">
            <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
              Get question analysis
            </Link>
            <Link to={getPageUrl('ai-search-visibility')} className="sub-service-base__cta-button sub-service-base__cta-button--secondary">
              View parent service
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="sub-service-base__benefits answer-engine-service__benefits">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">Why answer engine optimization matters</h2>
          <p className="sub-service-base__section-description">
            Users want quick, accurate answers. Be the source they find first.
          </p>
        </div>
        
        <FeatureList 
          items={benefits} 
          columns={3} 
          variant="glow" 
          iconSize="lg"
        />
      </section>

      {/* Process Timeline */}
      <section className="sub-service-base__benefits answer-engine-service__process">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">Our process</h2>
          <p className="sub-service-base__section-description">
            Four-phase approach to answer visibility
          </p>
        </div>
        
        <div className="sub-service-base__types-grid">
          {process.map((phase, index) => (
            <div key={index} className="sub-service-base__type-card">
              <h3 className="sub-service-base__type-card-title">{phase.phase}</h3>
              <p className="sub-service-base__section-description">{phase.description}</p>
              <ul className="sub-service-base__type-list">
                {phase.deliverables.map((item, itemIndex) => (
                  <li key={itemIndex} className="sub-service-base__type-list-item">
                    <span className="sub-service-base__type-list-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="sub-service-base__results answer-engine-service__results">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">Expected results</h2>
          <p className="sub-service-base__section-description">
            Measurable improvements in answer visibility
          </p>
        </div>
        
        <div className="sub-service-base__results-grid">
          {results.map((result, index) => (
            <div key={index} className="sub-service-base__result-card">
              <div className="sub-service-base__result-metric">{result.metric}</div>
              <div className="sub-service-base__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="sub-service-base__cta answer-engine-service__cta">
        <div className="sub-service-base__cta-content">
          <h2 className="sub-service-base__cta-title">Ready to be the answer?</h2>
          <p className="sub-service-base__cta-description">
            Get a free question analysis and see what your audience is asking.
          </p>
          <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
            Request free analysis
          </Link>
        </div>
      </section>
    </div>
  );
};
