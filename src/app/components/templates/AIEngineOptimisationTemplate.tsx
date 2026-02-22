/**
 * AI Engine Optimisation Service Template — Funky Redesign
 *
 * Theme: "AI Engine" (Cyan / Magenta / Tech)
 *
 * Sections:
 *  1. Hero — Engine metrics dashboard, cost/latency preview
 *  2. Why — Checklist + before/after cost comparison
 *  3. Services — Model selection, prompt tuning, caching, cost management
 *  4. Process — 5-step optimisation protocol
 *  5. Stats — Optimisation impact metrics
 *  6. FunkyCTA — Conversion block
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 *  - Zero Tailwind classes
 *  - All styling via /src/styles/templates/page-service-ai-engine.css
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
import { aiEngineOptimisationDetailed } from '../../data/services-detailed';
import {
  aiEngineServiceChecklist,
  aiEngineServiceStats,
  aiEngineServiceIcons,
} from '../../data/ai-engine-service-page';

import {
  Brain,
  Cpu,
  Zap,
  DollarSign,
  CheckCircle,
  Gauge,
  GitBranch,
  BarChart,
  TestTube,
  Activity,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   STATIC DATA
   ───────────────────────────────────────────── */

const serviceIcons = aiEngineServiceIcons.services;
const processIcons = aiEngineServiceIcons.process;
const aiChecklist = aiEngineServiceChecklist;
const resultStats = aiEngineServiceStats;

/* ─────────────────────────────────────────────
   TEMPLATE
   ───────────────────────────────────────────── */

export function AIEngineOptimisationTemplate() {
  const data = aiEngineOptimisationDetailed;

  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'AI Engine Optimisation' },
        ]}
      />

      {/* ============================================
          1. HERO — "AI ENGINE"
          ============================================ */}
      <section className="aio-page__hero">
        <div className="aio-page__circuit-bg" aria-hidden="true" />

        <Container>
          <div className="aio-page__hero-content">
            <ScrollReveal animation="fade-up">
              <span className="aio-page__badge">
                <Cpu size={14} />
                AI Performance Engineering
              </span>

              <h1 className="aio-page__title">
                Optimise Your{' '}
                <span className="aio-gradient-text">AI Engine</span>
              </h1>

              <p className="aio-page__description">{data.tagline}</p>

              <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button variant="default" size="lg" page="contact" className="aio-hero__btn-primary">
                  Get an AI Audit
                </Button>
                <Button variant="outline" size="lg" page="ai-integrations" className="aio-hero__btn-outline">
                  AI Solutions
                </Button>
              </div>
            </ScrollReveal>

            {/* Engine Dashboard */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="aio-page__dashboard">
                <div className="aio-page__dash-header">
                  <div className="aio-page__dash-dots">
                    <div className="aio-page__dash-dot aio-page__dash-dot--red" />
                    <div className="aio-page__dash-dot aio-page__dash-dot--yellow" />
                    <div className="aio-page__dash-dot aio-page__dash-dot--green" />
                  </div>
                  <span className="aio-page__dash-label">ai_engine_metrics.json</span>
                </div>

                <div className="aio-page__metrics">
                  <div className="aio-page__metric">
                    <div className="aio-page__metric-value">-60%</div>
                    <div className="aio-page__metric-label">API Cost Reduction</div>
                  </div>
                  <div className="aio-page__metric">
                    <div className="aio-page__metric-value">120ms</div>
                    <div className="aio-page__metric-label">Avg. Latency</div>
                  </div>
                  <div className="aio-page__metric">
                    <div className="aio-page__metric-value">99.5%</div>
                    <div className="aio-page__metric-label">Quality Score</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. WHY — "YOUR AI BUDGET"
          ============================================ */}
      <section className="aio-page__why">
        <Container>
          <div className="aio-page__why-grid">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="aio-page__section-label">Why Optimise</span>
                <h2 className="aio-page__section-title">
                  Faster, Cheaper,{' '}
                  <span className="aio-gradient-text">Smarter AI</span>
                </h2>
                <p className="aio-page__section-desc">{data.whyLightSpeed.description}</p>

                <div className="aio-page__checklist">
                  {aiChecklist.map((item, i) => (
                    <div key={i} className="aio-page__check-item">
                      <CheckCircle size={18} className="aio-page__check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="aio-page__comparison">
                <div className="aio-page__comparison-bars">
                  <div className="aio-page__bar-group">
                    <div className="aio-page__bar-value">$2,400/mo</div>
                    <div className="aio-page__bar aio-page__bar--before" style={{ height: '85%' }} />
                    <div className="aio-page__bar-label">Before</div>
                  </div>
                  <div className="aio-page__bar-group">
                    <div className="aio-page__bar-value aio-page__bar-value--optimised">$960/mo</div>
                    <div className="aio-page__bar aio-page__bar--after" style={{ height: '35%' }} />
                    <div className="aio-page__bar-label">After</div>
                  </div>
                </div>
                <div className="aio-page__comparison-label">
                  MONTHLY AI COSTS: <span className="aio-page__comparison-accent">60% SAVINGS</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          3. SERVICES — "AI OPTIMISATION SUITE"
          ============================================ */}
      <section className="aio-page__services">
        <Container>
          <div className="aio-page__services-header">
            <ScrollReveal animation="fade-up">
              <span className="aio-page__section-label">What We Deliver</span>
              <h2 className="aio-page__section-title">
                AI Engine{' '}
                <span className="aio-gradient-text">Optimisation Suite</span>
              </h2>
              <p className="aio-page__section-desc">
                From model selection to cost management — we make your AI stack lean and fast.
              </p>
            </ScrollReveal>
          </div>

          <div className="aio-page__services-grid">
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || Brain;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={index * 80}>
                  <div className="aio-page__service-card">
                    <div className="aio-page__service-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="aio-page__service-title">{service.title}</h3>
                    <p className="aio-page__service-desc">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. PROCESS — "OPTIMISATION PROTOCOL"
          ============================================ */}
      <section className="aio-page__process">
        <Container>
          <div className="aio-page__process-header">
            <ScrollReveal animation="fade-up">
              <span className="aio-page__section-label">Methodology</span>
              <h2 className="aio-page__section-title">
                Optimisation{' '}
                <span className="aio-gradient-text">Protocol</span>
              </h2>
              <p className="aio-page__section-desc">{data.process.description}</p>
            </ScrollReveal>
          </div>

          <div className="aio-page__step-list">
            {data.process.steps.map((step, index) => {
              const Icon = processIcons[step.id] || Zap;
              return (
                <ScrollReveal key={step.id} animation="fade-up" delay={index * 80}>
                  <div className="aio-page__step-card">
                    <div className="aio-page__step-number">0{step.number}</div>
                    <div>
                      <h3 className="aio-page__step-title">{step.title}</h3>
                      <p className="aio-page__step-desc">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          5. STATS — "ENGINE METRICS"
          ============================================ */}
      <section className="aio-page__stats">
        <Container>
          <div className="aio-page__stats-header">
            <ScrollReveal animation="fade-up">
              <span className="aio-page__section-label">Proven Results</span>
              <h2 className="aio-page__section-title">
                Engine{' '}
                <span className="aio-gradient-text">Performance</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="aio-page__stats-grid">
            {resultStats.map((stat, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="aio-page__stat-card">
                  <div className="aio-page__stat-value">{stat.value}</div>
                  <div className="aio-page__stat-label">{stat.label}</div>
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
          subtitle="Optimise your AI stack with these complementary services"
          services={data.relatedServices}
        />
      )}
      <ServiceTestimonial
        serviceSlug="ai-engine-optimisation"
        subtitle="Hear from clients optimising their AI-powered experiences"
      />
      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Multi-model cost benchmarking',
          'Prompt chain optimisation',
          'Semantic inference caching',
          'Real-time cost dashboards',
          'Quality regression testing',
        ]}
      />
    </>
  );
}