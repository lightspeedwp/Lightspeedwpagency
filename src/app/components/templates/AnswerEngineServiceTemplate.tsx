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

import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { 
  answerEngineServiceBenefits, 
  answerEngineServiceProcess, 
  answerEngineServiceResults,
  answerEngineLifecycle,
  answerEngineTrustSignal,
  answerEngineRelatedSolutions,
  answerEngineRelatedServices,
  voiceSearchContent,
  zeroClickContent,
} from '../../data/answer-engine-service-template-data';
import { FeatureList } from '../patterns/FeatureList';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { LifecycleStageBadge } from '../parts/LifecycleStageBadge';
import { LifecycleFlowStrip } from '../parts/LifecycleFlowStrip';
import { TestimonialCard } from '../patterns/TestimonialCard';
import { RelatedPagesGrid } from '../patterns/RelatedPagesGrid';
import { Rocket, Brain, ChatCircle, Target, Lightbulb, Trophy } from '@phosphor-icons/react';
import '../../../styles/templates/answer-engine-service-optimized.css';

export const AnswerEngineServiceTemplate = () => {
  const benefits = answerEngineServiceBenefits;

  const process = answerEngineServiceProcess;

  const results = answerEngineServiceResults;

  return (
    <div className="answer-engine-service">
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'AI Search & Visibility', page: 'services/ai-search-visibility' },
          { label: 'Answer engine optimization' },
        ]}
      />

      <JourneyPhaseIndicator currentPhase="grow" currentServicePage="answer-engine" />

      {/* Hero Section */}
      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at center, var(--border) 1px, transparent 1px)', backgroundSize: '24px 24px', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div className="service-hero__content service-hero__content--centered">
            <ScrollReveal animation="fade-up">
              {/* Lifecycle Badge */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
                <LifecycleStageBadge
                  slug={answerEngineLifecycle.slug}
                  name={answerEngineLifecycle.name}
                  icon={answerEngineLifecycle.icon}
                  accent={answerEngineLifecycle.accent}
                />
              </div>

              <h1 className="service-hero__title">
                Answer engine optimization (AEO)
              </h1>
              
              <p className="service-hero__description service-hero__description--centered">
                Be the answer. Get featured in Google snippets, voice search results, and AI-generated responses. 
                Position your content as the authoritative source for questions in your industry.
              </p>
              
              <div className="service-hero__cta-group service-hero__cta-group--centered">
                <Link to={getPageUrl('contact')} className="sub-service-base__hero-btn sub-service-base__hero-btn--primary">
                  Get question analysis
                </Link>
                <Link to={getPageUrl('ai-search-visibility')} className="sub-service-base__hero-btn sub-service-base__hero-btn--outline">
                  View parent service
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
              <h2 className="service-section__title">Why answer engine optimization matters</h2>
              <p className="service-section__description">
                Users want quick, accurate answers. Be the source they find first.
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

      {/* Process Timeline */}
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Our process</h2>
              <p className="service-section__description">
                Four-phase approach to answer visibility
              </p>
            </ScrollReveal>
          </div>
          
          <div className="sub-service-base__types-grid">
            {process.map((phase, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="sub-service-base__type-card">
                  <h3 className="sub-service-base__type-card-title">{phase.phase}</h3>
                  <p className="service-section__description">{phase.description}</p>
                  <ul className="sub-service-base__type-list">
                    {phase.deliverables.map((item, itemIndex) => (
                      <li key={itemIndex} className="sub-service-base__type-list-item">
                        <span className="sub-service-base__type-list-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="service-section service-section--bg-card">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Expected results</h2>
              <p className="service-section__description">
                Measurable improvements in answer visibility
              </p>
            </ScrollReveal>
          </div>
          
          <div className="sub-service-base__results-grid">
            {results.map((result, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="sub-service-base__result-card">
                  <div className="sub-service-base__result-metric">{result.metric}</div>
                  <div className="sub-service-base__result-label">{result.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Lifecycle Flow */}
      <section aria-label="Lifecycle context">
        <Container>
          <ScrollReveal animation="fade-up">
            <LifecycleFlowStrip
              prevStage={{
                slug: 'launch',
                name: 'Launch',
                icon: Rocket,
                accent: 'var(--category-amber)',
              }}
              currentStage={answerEngineLifecycle}
              nextStage={{
                slug: 'evolve',
                name: 'Evolve',
                icon: Brain,
                accent: 'var(--category-indigo)',
              }}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Voice Search Optimization Section */}
      <section className="service-section service-section--bg-muted" aria-label="Voice search optimization">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">{voiceSearchContent.heading}</h2>
              <p className="service-section__description">
                {voiceSearchContent.description}
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList 
              items={voiceSearchContent.strategies.map((s, i) => ({ 
                ...s, 
                icon: [ChatCircle, Target, Lightbulb, Trophy][i] as any 
              }))}
              columns={2}
              variant="glow"
              iconSize="lg"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Zero-Click Optimization Section */}
      <section className="service-section service-section--bg-background" aria-label="Zero-click optimization">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">{zeroClickContent.heading}</h2>
              <p className="service-section__description">
                {zeroClickContent.description}
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList 
              items={zeroClickContent.tactics.map((t, i) => ({ 
                ...t, 
                icon: [Lightbulb, Target, ChatCircle, Trophy][i] as any 
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
              quote={answerEngineTrustSignal.quote}
              author={answerEngineTrustSignal.author}
              role={answerEngineTrustSignal.role}
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
                Explore AI-powered solutions that work alongside answer engine optimization
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={100}>
            <RelatedPagesGrid pages={answerEngineRelatedSolutions} />
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
                Complementary services that enhance your answer visibility strategy
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={100}>
            <RelatedPagesGrid pages={answerEngineRelatedServices} />
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA Section */}
      <FunkyCTA
        title="Ready to be the answer?"
        description="Get a free question analysis and see what your audience is asking."
        buttonText="Request free analysis"
        buttonPage="contact"
        benefits={[
          'Detailed question mapping',
          'AEO strategy overview',
          'Content gap identification',
          'Featured snippet opportunities'
        ]}
      />
    </div>
  );
};