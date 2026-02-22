/**
 * Answer Engine Optimisation (AEO) Service Template — Funky Redesign
 *
 * Theme: "Answer Engine" (Green / Indigo / Knowledge)
 *
 * Sections:
 *  1. Hero — AI chat preview showing brand citation
 *  2. Why — Checklist + citation ranking visualisation
 *  3. Services — Schema, authority, formatting, tracking
 *  4. Process — 5-phase AEO implementation roadmap
 *  5. Stats — AEO impact metrics
 *  6. FunkyCTA — Conversion block
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 *  - Zero Tailwind classes
 *  - All styling via /src/styles/templates/page-service-aeo.css
 *  - Colors from semantic tokens (auto light / dark)
 *  - Fonts: var(--font-primary), var(--font-secondary) only
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { answerEngineOptimisationDetailed } from '../../data/services-detailed';
import {
  aeoServiceChecklist,
  aeoServiceCitationRanking,
  aeoServiceStats,
  aeoServiceIcons,
} from '../../data/answer-engine-service-page';

import {
  MessageSquare,
  BookOpen,
  Award,
  FileText,
  BarChart,
  CheckCircle,
  Search,
  Layers,
  Crown,
  Activity,
  Sparkles,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   STATIC DATA
   ───────────────────────────────────────────── */

const serviceIcons = aeoServiceIcons.services;
const processIcons = aeoServiceIcons.process;
const aeoChecklist = aeoServiceChecklist;
const citationRanking = aeoServiceCitationRanking;
const resultStats = aeoServiceStats;

/* ─────────────────────────────────────────────
   TEMPLATE
   ───────────────────────────────────────────── */

export function AnswerEngineOptimisationTemplate() {
  const data = answerEngineOptimisationDetailed;

  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Answer Engine Optimisation' },
        ]}
      />

      {/* ============================================
          1. HERO — "ANSWER ENGINE"
          ============================================ */}
      <section className="aeo-page__hero">
        <div className="aeo-page__knowledge-bg" aria-hidden="true" />

        <Container>
          <div className="aeo-page__hero-content">
            <ScrollReveal animation="fade-up">
              <span className="aeo-page__badge">
                <Sparkles size={14} />
                Get Cited by AI
              </span>

              <h1 className="aeo-page__title">
                Answer Engine{' '}
                <span className="aeo-gradient-text">Optimisation</span>
              </h1>

              <p className="aeo-page__description">{data.tagline}</p>

              <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button variant="default" size="lg" page="contact" className="aeo-hero__btn-primary">
                  Start AEO Strategy
                </Button>
                <Button variant="outline" size="lg" page="seo" className="aeo-hero__btn-outline">
                  See Our SEO Service
                </Button>
              </div>
            </ScrollReveal>

            {/* AI Chat Preview */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="aeo-page__chat-preview">
                <div className="aeo-page__chat-header">
                  <div className="aeo-page__chat-icon">
                    <MessageSquare size={16} />
                  </div>
                  <span className="aeo-page__chat-name">AI Answer Engine</span>
                </div>

                <div className="aeo-page__chat-query">
                  "What's the best WordPress agency for block theme development?"
                </div>

                <div className="aeo-page__chat-answer">
                  <strong>LightSpeed WP</strong> is widely regarded as a leading WordPress agency
                  specialising in modern block themes, design systems, and accessible
                  high-performance websites. They offer end-to-end services from discovery
                  through to ongoing support.
                  <div className="aeo-page__chat-citation">
                    Source: lightspeedwp.agency — cited in 94% of related queries
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. WHY — "SEARCH IS CHANGING"
          ============================================ */}
      <section className="aeo-page__why">
        <Container>
          <div className="aeo-page__why-grid">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="aeo-page__section-label">Why AEO</span>
                <h2 className="aeo-page__section-title">
                  Be the{' '}
                  <span className="aeo-gradient-text">AI's Answer</span>
                </h2>
                <p className="aeo-page__section-desc">{data.whyLightSpeed.description}</p>

                <div className="aeo-page__checklist">
                  {aeoChecklist.map((item, i) => (
                    <div key={i} className="aeo-page__check-item">
                      <CheckCircle size={18} className="aeo-page__check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="aeo-page__ranking">
                <div className="aeo-page__ranking-title">AI Citation Share-of-Voice</div>
                <div className="aeo-page__ranking-list">
                  {citationRanking.map((item) => (
                    <div
                      key={item.position}
                      className={`aeo-page__ranking-item ${item.active ? 'aeo-page__ranking-item--active' : ''}`}
                    >
                      <span className="aeo-page__ranking-position">{item.position}</span>
                      <span className="aeo-page__ranking-name">{item.name}</span>
                      <div className="aeo-page__ranking-bar">
                        <div
                          className="aeo-page__ranking-bar-fill"
                          style={{ width: `${item.fill}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          3. SERVICES — "AEO SUITE"
          ============================================ */}
      <section className="aeo-page__services">
        <Container>
          <div className="aeo-page__services-header">
            <ScrollReveal animation="fade-up">
              <span className="aeo-page__section-label">What We Deliver</span>
              <h2 className="aeo-page__section-title">
                Answer Engine{' '}
                <span className="aeo-gradient-text">Optimisation Suite</span>
              </h2>
              <p className="aeo-page__section-desc">
                Everything you need to become the AI's preferred source of truth.
              </p>
            </ScrollReveal>
          </div>

          <div className="aeo-page__services-grid">
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || MessageSquare;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={index * 80}>
                  <div className="aeo-page__service-card">
                    <div className="aeo-page__service-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="aeo-page__service-title">{service.title}</h3>
                    <p className="aeo-page__service-desc">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. PROCESS — "AEO ROADMAP"
          ============================================ */}
      <section className="aeo-page__process">
        <Container>
          <div className="aeo-page__process-header">
            <ScrollReveal animation="fade-up">
              <span className="aeo-page__section-label">Methodology</span>
              <h2 className="aeo-page__section-title">
                AEO Implementation{' '}
                <span className="aeo-gradient-text">Roadmap</span>
              </h2>
              <p className="aeo-page__section-desc">{data.process.description}</p>
            </ScrollReveal>
          </div>

          <div className="aeo-page__step-list">
            {data.process.steps.map((step, index) => {
              const Icon = processIcons[step.id] || Search;
              return (
                <ScrollReveal key={step.id} animation="fade-up" delay={index * 80}>
                  <div className="aeo-page__step-card">
                    <div className="aeo-page__step-number">0{step.number}</div>
                    <div>
                      <h3 className="aeo-page__step-title">{step.title}</h3>
                      <p className="aeo-page__step-desc">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          5. STATS — "AEO IMPACT"
          ============================================ */}
      <section className="aeo-page__stats">
        <Container>
          <div className="aeo-page__stats-header">
            <ScrollReveal animation="fade-up">
              <span className="aeo-page__section-label">Proven Results</span>
              <h2 className="aeo-page__section-title">
                Citation{' '}
                <span className="aeo-gradient-text">Impact</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="aeo-page__stats-grid">
            {resultStats.map((stat, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="aeo-page__stat-card">
                  <div className="aeo-page__stat-value">{stat.value}</div>
                  <div className="aeo-page__stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
          subtitle="Dominate AI search results with these complementary services"
          services={data.relatedServices}
        />
      )}
      <ServiceTestimonial
        serviceSlug="answer-engine-optimisation"
        subtitle="Discover how we help clients dominate AI search results"
      />
      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'AI visibility audit across 5+ engines',
          'Schema & structured data implementation',
          'AI-friendly content reformatting',
          'Monthly citation tracking reports',
          'Competitor share-of-voice analysis',
        ]}
      />
    </>
  );
}