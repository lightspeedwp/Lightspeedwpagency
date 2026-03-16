/**
 * AI Engine Optimization Service Template
 * 
 * Sub-service page for AI Engine Optimization (AEO) under AI Search & Visibility
 * Route: /services/ai-engine-optimisation
 * Parent: /services/ai-search-visibility
 * 
 * Pattern Components:
 * - ✅ FeatureList — Benefits grid (6 items, 3 columns, glow variant)
 * 
 * @migrated March 3, 2026 — Phase 3.1: Migrated inline benefits grid to FeatureList component (~80 lines saved)
 */

import { Brain, Sparkle, Target, Lightning, CheckCircle, TrendUp } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { FeatureList } from '../patterns/FeatureList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { StatsGrid } from '../patterns/StatsGrid';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { ScrollReveal } from '../../hooks/useScrollReveal';

export const AIEngineServiceTemplate = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'AI-First Content Strategy',
      description: 'Structure content to be understood and surfaced by AI systems like ChatGPT, Claude, and Perplexity.'
    },
    {
      icon: Sparkle,
      title: 'Entity Optimization',
      description: 'Build strong entity associations and knowledge graph relationships for AI comprehension.'
    },
    {
      icon: Target,
      title: 'Intent Matching',
      description: 'Align content with AI interpretation of user queries and contextual understanding.'
    },
    {
      icon: Lightning,
      title: 'Structured Data Enhancement',
      description: 'Implement schema markup that AI engines use to understand and categorize your content.'
    },
    {
      icon: CheckCircle,
      title: 'Authoritative Signals',
      description: 'Build E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust) for AI credibility scoring.'
    },
    {
      icon: TrendUp,
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
    <div className="wp-w-full wp-flex wp-flex-col">
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'AI Search & Visibility', page: 'services/ai-search-visibility' },
          { label: 'AI Engine Optimization' },
        ]}
      />

      <JourneyPhaseIndicator currentPhase="ignite" currentServicePage="ai-engine-optimization" />

      {/* Hero Section */}
      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at center, var(--border) 1px, transparent 1px)', backgroundSize: '24px 24px', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div className="service-hero__content service-hero__content--centered">
            <ScrollReveal animation="fade-up">
              <h1 className="service-hero__title">
                AI Engine Optimization (AEO)
              </h1>
              
              <p className="service-hero__description service-hero__description--centered">
                Position your brand for the AI-powered future of search. Get cited by ChatGPT, Claude, 
                Perplexity, and other AI systems that are becoming the new search engines.
              </p>
              
              <div className="wp-flex wp-justify-center wp-gap-4 wp-flex-wrap">
                <Link to={getPageUrl('contact')} className="sub-service-base__hero-btn sub-service-base__hero-btn--primary">
                  Get AI Visibility Audit
                </Link>
                <Link to={getPageUrl('ai-search-visibility')} className="sub-service-base__hero-btn sub-service-base__hero-btn--outline">
                  View Parent Service
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Why AI Engine Optimization Matters</h2>
              <p className="service-section__description">
                AI systems are becoming primary information sources. Be visible where your audience asks questions.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList 
              items={benefits.map(b => ({ ...b, icon: b.icon as any }))}
              columns={3}
              variant="glow"
              iconSize="lg"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Process */}
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Our Process</h2>
              <p className="service-section__description">
                Four-phase approach to AI engine visibility
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up">
            <ProcessTimeline
              heading=""
              description=""
              steps={process.map((phase, index) => ({
                id: `phase-${index}`,
                number: index + 1,
                title: phase.title,
                description: `${phase.description}. Deliverables: ${phase.deliverables.join(', ')}`
              }))}
              showNumbers={true}
              orientation="vertical"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Results */}
      <section className="service-section service-section--bg-card">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Expected Results</h2>
              <p className="service-section__description">
                Measurable improvements in AI visibility and brand presence
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <StatsGrid
              stats={results.map((r, i) => ({ id: `stat-${i}`, value: r.metric, label: r.label }))}
              columns={4}
              variant="cards"
            />
          </ScrollReveal>
        </Container>
      </section>

      <ServiceTestimonial serviceSlug="ai-search" />

      {/* CTA */}
      <FunkyCTA
        title="Ready for AI-Powered Visibility?"
        description="Get a free AI visibility audit and see where your brand appears (or doesn't) in AI responses."
        buttonText="Request Free Audit"
        buttonPage="contact"
      />
    </div>
  );
};