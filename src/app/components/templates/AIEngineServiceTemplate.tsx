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

import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { 
  aiEngineServiceBenefits, 
  aiEngineServiceProcess, 
  aiEngineServiceResults,
  aiEngineLifecycleStages,
  aiEngineTrustSignal,
  aiEngineRelatedSolutions,
  aiEngineRelatedServices,
  llmTxtContent,
  aiCitationStrategy,
} from '../../data/ai-engine-service-template-data';
import { FeatureList } from '../patterns/FeatureList';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { WebGLAINetwork } from '../patterns/WebGLAINetwork';
import { NeonStats } from '../common/NeonStats';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { LifecycleStageBadge } from '../parts/LifecycleStageBadge';
import { LifecycleFlowStrip } from '../parts/LifecycleFlowStrip';
import { TestimonialCard } from '../patterns/TestimonialCard';
import { RelatedPagesGrid } from '../patterns/RelatedPagesGrid';
import { Rocket } from '@phosphor-icons/react';
import { Brain, Target, CheckCircle, Lightning, Sparkle } from '@phosphor-icons/react';

export const AIEngineServiceTemplate = () => {
  const benefits = aiEngineServiceBenefits;

  const process = aiEngineServiceProcess;

  const results = aiEngineServiceResults;

  return (
    <div className="service-page ai-engine-service">
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'AI Search & Visibility', page: 'services/ai-search-visibility' },
          { label: 'AI Engine Optimization' },
        ]}
      />

      <JourneyPhaseIndicator currentPhase="evolve" currentServicePage="ai-engine-optimization" />

      {/* Hero Section */}
      <section className="service-hero" style={{ minHeight: '60vh', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <WebGLAINetwork />
        </div>
        
        <Container>
          <div className="service-hero__content service-hero__content--centered">
            <ScrollReveal animation="fade-up">
              {/* Dual Lifecycle Badges */}
              <div style={{ display: 'flex', gap: 'var(--spacing-3)', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
                {aiEngineLifecycleStages.map((stage) => (
                  <LifecycleStageBadge
                    key={stage.slug}
                    slug={stage.slug}
                    name={stage.name}
                    icon={stage.icon}
                    accent={stage.accent}
                  />
                ))}
              </div>

              <h1 className="service-hero__title">
                AI Engine Optimization (AEO)
              </h1>
              
              <p className="service-hero__description service-hero__description--centered">
                Position your brand for the AI-powered future of search. Get cited by ChatGPT, Claude, 
                Perplexity, and other AI systems that are becoming the new search engines.
              </p>
              
              <div className="service-hero__cta-group service-hero__cta-group--centered">
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

      {/* AI Network Interactive Visualization */}
      <section className="service-section" style={{ padding: 'var(--spacing-16) 0', background: 'var(--color-black)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header" style={{ marginBottom: 'var(--spacing-8)' }}>
              <h2 className="service-section__title" style={{ color: 'var(--color-white)' }}>AI citation network</h2>
              <p className="service-section__description" style={{ color: 'var(--color-gray-400)' }}>
                Visualizing how your knowledge graph connects to large language models.
              </p>
            </div>
            <WebGLAINetwork />
          </ScrollReveal>
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

      {/* Results Section Using Contextual NeonStats */}
      <section className="service-section service-page__results" style={{ padding: 'var(--spacing-16) 0', background: 'var(--color-black)' }}>
        <Container>
          <ScrollReveal animation="fade-up" delay={100}>
            <NeonStats
              stats={results.map((r, i) => ({ 
                id: `stat-${i}`, 
                value: r.metric, 
                label: r.label,
                icon: i % 2 === 0 ? CheckCircle : Sparkle // fallback icons if not in data
              }))}
              title="Expected results"
              subtitle="Measurable improvements in AI visibility and brand presence"
              columns={4}
              variant="glass"
              accentColor="var(--wp--preset--color--neon-lime)"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Lifecycle Flow spanning Grow → Evolve */}
      <section aria-label="Lifecycle context">
        <Container>
          <ScrollReveal animation="fade-up">
            <LifecycleFlowStrip
              prevStage={{
                slug: 'grow',
                name: 'Grow',
                icon: aiEngineLifecycleStages[0].icon,
                accent: 'var(--category-green)',
              }}
              currentStage={aiEngineLifecycleStages[1]}
              nextStage={undefined}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* LLM.txt Content Section */}
      <section className="service-section service-section--bg-muted" aria-label="LLM.txt standard">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">{llmTxtContent.heading}</h2>
              <p className="service-section__description">
                {llmTxtContent.description}
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList 
              items={llmTxtContent.benefits.map((b, i) => ({ 
                ...b, 
                icon: [Brain, Target, CheckCircle][i] as any 
              }))}
              columns={3}
              variant="glow"
              iconSize="lg"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* AI Citation Strategy Section */}
      <section className="service-section service-section--bg-background" aria-label="Citation strategy">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">{aiCitationStrategy.heading}</h2>
              <p className="service-section__description">
                {aiCitationStrategy.description}
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList 
              items={aiCitationStrategy.strategies.map((s, i) => ({ 
                ...s, 
                icon: [CheckCircle, Target, Lightning, Sparkle][i] as any 
              }))}
              columns={2}
              variant="glow"
              iconSize="lg"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Trust Signal */}
      <section aria-label="Client testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <TestimonialCard
              quote={aiEngineTrustSignal.quote}
              author={aiEngineTrustSignal.author}
              role={aiEngineTrustSignal.role}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Related Solutions */}
      <section aria-label="Related solutions">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Related solutions</h2>
              <p className="service-section__description">
                Explore AI-powered solutions that work alongside engine optimisation
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={100}>
            <RelatedPagesGrid pages={aiEngineRelatedSolutions} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Related Services */}
      <section aria-label="Related services">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Related services</h2>
              <p className="service-section__description">
                Complementary services that enhance your AI strategy
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={100}>
            <RelatedPagesGrid pages={aiEngineRelatedServices} />
          </ScrollReveal>
        </Container>
      </section>

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