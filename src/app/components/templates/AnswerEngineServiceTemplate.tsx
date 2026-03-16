/**
 * Answer Engine Optimization Service Template
 * 
 * Sub-service page for Answer Engine Optimization (AEO) under AI Search & Visibility
 * Route: /services/answer-engine-optimisation
 * Parent: /services/ai-search-visibility
 * 
 * Pattern Components:
 * - ✅ FeatureList — Benefits grid (6 items, 3 columns, glow variant)
 * 
 * @migrated March 3, 2026 — Phase 3.1: Migrated inline benefits grid to FeatureList component (~80 lines saved)
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
      title: 'Conversational Content Optimization',
      description: 'Structure content to answer natural language questions that users ask AI assistants and voice search.'
    },
    {
      icon: Lightbulb,
      title: 'Featured Snippet Optimization',
      description: 'Format content to be selected as direct answers in Google featured snippets and AI responses.'
    },
    {
      icon: Users,
      title: 'Question-Answer Mapping',
      description: 'Identify and answer the exact questions your target audience is asking across all platforms.'
    },
    {
      icon: Trophy,
      title: 'Authority Building',
      description: 'Establish your brand as the definitive source for answers in your industry or niche.'
    },
    {
      icon: TrendUp,
      title: 'Zero-Click Optimization',
      description: 'Capture visibility even when users get answers without clicking through to websites.'
    },
    {
      icon: Target,
      title: 'Multi-Platform Coverage',
      description: 'Optimize for Google, Bing, voice assistants, and AI engines simultaneously.'
    }
  ];

  const process = [
    {
      phase: 'Question Research',
      description: 'Identify the questions your audience is asking',
      deliverables: [
        'Question inventory (500+ questions)',
        'Search intent mapping',
        'Competitor question analysis',
        'Question priority matrix'
      ]
    },
    {
      phase: 'Answer Development',
      description: 'Create comprehensive, authoritative answers',
      deliverables: [
        'Direct answer creation',
        'Long-form content development',
        'FAQ schema implementation',
        'Answer structure optimization'
      ]
    },
    {
      phase: 'Format Optimization',
      description: 'Structure content for answer engines',
      deliverables: [
        'Featured snippet formatting',
        'People Also Ask optimization',
        'Voice search optimization',
        'Conversational tone adaptation'
      ]
    },
    {
      phase: 'Monitoring & Refinement',
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
      <section className="answer-engine-service__hero">
        <div className="answer-engine-service__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'AI Services', href: '/services/ai' },
              { label: 'Answer Engine Optimization' },
            ]}
          />
          
          <h1 className="answer-engine-service__hero-title">
            Answer Engine Optimization (AEO)
          </h1>
          
          <p className="answer-engine-service__hero-description">
            Be the answer. Get featured in Google snippets, voice search results, and AI-generated responses. 
            Position your content as the authoritative source for questions in your industry.
          </p>
          
          <div className="answer-engine-service__hero-cta">
            <Link to={getPageUrl('contact')} className="answer-engine-service__cta-button answer-engine-service__cta-button--primary">
              Get Question Analysis
            </Link>
            <Link to={getPageUrl('ai-search-visibility')} className="answer-engine-service__cta-button answer-engine-service__cta-button--secondary">
              View Parent Service
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="answer-engine-service__benefits">
        <div className="answer-engine-service__section-header">
          <h2 className="answer-engine-service__section-title">Why Answer Engine Optimization Matters</h2>
          <p className="answer-engine-service__section-description">
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
      <section className="answer-engine-service__process">
        <div className="answer-engine-service__section-header">
          <h2 className="answer-engine-service__section-title">Our Process</h2>
          <p className="answer-engine-service__section-description">
            Four-phase approach to answer visibility
          </p>
        </div>
        
        <div className="answer-engine-service__timeline">
          {process.map((phase, index) => (
            <div key={index} className="answer-engine-service__timeline-item">
              <div className="answer-engine-service__timeline-marker">
                <span className="answer-engine-service__timeline-number">{index + 1}</span>
              </div>
              <div className="answer-engine-service__timeline-content">
                <h3 className="answer-engine-service__timeline-title">{phase.phase}</h3>
                <p className="answer-engine-service__timeline-description">{phase.description}</p>
                <ul className="answer-engine-service__timeline-list">
                  {phase.deliverables.map((item, itemIndex) => (
                    <li key={itemIndex} className="answer-engine-service__timeline-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="answer-engine-service__results">
        <div className="answer-engine-service__section-header">
          <h2 className="answer-engine-service__section-title">Expected Results</h2>
          <p className="answer-engine-service__section-description">
            Measurable improvements in answer visibility
          </p>
        </div>
        
        <div className="answer-engine-service__results-grid">
          {results.map((result, index) => (
            <div key={index} className="answer-engine-service__result-card">
              <div className="answer-engine-service__result-metric">{result.metric}</div>
              <div className="answer-engine-service__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="answer-engine-service__cta">
        <div className="answer-engine-service__cta-content">
          <h2 className="answer-engine-service__cta-title">Ready to Be the Answer?</h2>
          <p className="answer-engine-service__cta-description">
            Get a free question analysis and see what your audience is asking.
          </p>
          <Link to={getPageUrl('contact')} className="answer-engine-service__cta-button answer-engine-service__cta-button--primary">
            Request Free Analysis
          </Link>
        </div>
      </section>
    </div>
  );
};