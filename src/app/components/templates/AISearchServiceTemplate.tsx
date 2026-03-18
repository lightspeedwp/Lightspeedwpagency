/**
 * AI Search & Visibility Service Template
 *
 * Consolidated from: SEO, Analytics, AI Engine Optimisation, Answer Engine Optimisation
 * Theme: "Signal Amplifier" (Cyan/Green/Blue)
 *
 * Task 2.3: Service consolidation (22 → ~10)
 *
 * Pattern Components:
 * - ✅ FeatureList — Service pillar cards (glow variant, 2 columns, with sub-features)
 * - ✅ StatsGrid — Hero stats (inline variant, 4 columns)
 * - ✅ ProcessTimeline — 4-step process (horizontal orientation)
 * - ✅ FunkyCTA — Final conversion section
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-ai-search.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 *
 * @see /src/styles/templates/page-service-ai-search.css
 * @migrated March 4, 2026 — Migrated inline pillar cards to FeatureList, hero stats to StatsGrid, process to ProcessTimeline (~50 lines saved)
 */

import '../../../styles/templates/page-service-ai-search.css';
import '../../../styles/parts/lifecycle-flow.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FeatureList } from '../patterns/FeatureList';
import { StatsGrid } from '../patterns/StatsGrid';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { RelatedPagesGrid } from '../patterns/RelatedPagesGrid';
import { LifecycleFlowStrip } from '../parts/LifecycleFlowStrip';
import { TestimonialCard } from '../patterns/TestimonialCard';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Eye } from '@phosphor-icons/react';
import {
  aiSearchServicePillars,
  aiSearchServiceProcessSteps,
  aiSearchLifecycleStages,
  aiSearchTrustSignal,
  aiSearchRelatedSolutions,
  aiSearchRelatedServices,
} from '../../data/ai-search-service-template-data';

export function AISearchServiceTemplate() {
  return (
    <div className="ai-search-page">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'AI Search & Visibility' },
        ]}
      />

      {/* ══════════════════════════════════════════
          HERO — Signal Amplifier
          ══════════════════════════════════════════ */}
      <section className="ai-search-page__hero" aria-label="AI Search & Visibility hero">
        <div className="ai-search-page__hero-grid" aria-hidden="true" />
        <div className="ai-search-page__hero-glow" aria-hidden="true" />

        <div className="ai-search-page__hero-content">
          <ScrollReveal animation="fade-down">
            <div className="ai-search-page__badge">
              <Eye size={14} />
              AI Search & Visibility
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <h1 className="ai-search-page__hero-title">
              Be found by <span>every search engine</span> — human and AI
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <p className="ai-search-page__hero-desc">
              Unified search visibility combining traditional SEO, analytics, AI engine optimisation,
              and answer engine optimisation into one cohesive strategy.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <StatsGrid
              stats={[
                { value: '60%', label: 'Lower AI costs' },
                { value: '5+', label: 'AI engines tracked' },
                { value: '3x', label: 'Organic growth' },
                { value: '100%', label: 'Schema coverage' },
              ]}
            />
          </ScrollReveal>

          <ScrollDownArrow />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIFECYCLE CONTEXT
          ══════════════════════════════════════════ */}
      <section aria-label="Lifecycle context">
        <Container>
          <ScrollReveal animation="fade-up">
            <LifecycleFlowStrip
              prevStage={aiSearchLifecycleStages[0]}
              currentStage={aiSearchLifecycleStages[1]}
              nextStage={aiSearchLifecycleStages[2]}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          CONSOLIDATED SERVICE PILLARS
          ══════════════════════════════════════════ */}
      <section className="ai-search-page__pillars" aria-label="Service pillars">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="ai-search-page__pillars-title">Four pillars of search visibility</h2>
            <p className="ai-search-page__pillars-desc">
              From traditional SEO to cutting-edge AI citation optimisation, we cover every angle
              of how your content gets discovered.
            </p>
          </ScrollReveal>

          <FeatureList
            items={aiSearchServicePillars}
            columns={2}
            variant="glow"
          />
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          TRUST SIGNAL
          ══════════════════════════════════════════ */}
      <section aria-label="Client testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <TestimonialCard
              quote={aiSearchTrustSignal.quote}
              author={aiSearchTrustSignal.author}
              role={aiSearchTrustSignal.role}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
          ══════════════════════════════════════════ */}
      <section className="ai-search-page__process" aria-label="Our process">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="ai-search-page__process-title">How we amplify your signal</h2>
          </ScrollReveal>

          <ProcessTimeline
            steps={aiSearchServiceProcessSteps}
            orientation="horizontal"
          />
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          RELATED SOLUTIONS
          ══════════════════════════════════════════ */}
      <RelatedPagesGrid
        title="Related solutions"
        description="Explore AI-powered solutions that complement this service"
        items={aiSearchRelatedSolutions}
        columns={3}
      />

      {/* ══════════════════════════════════════════
          RELATED SERVICES
          ══════════════════════════════════════════ */}
      <RelatedPagesGrid
        title="Related services"
        description="Discover other services in the AI visibility ecosystem"
        items={aiSearchRelatedServices}
        columns={4}
      />

      {/* ══════════════════════════════════════════
          CTA
          ══════════════════════════════════════════ */}
      <FunkyCTA
        title="Ready to be found everywhere?"
        description="Request a comprehensive search visibility audit covering traditional SEO, AI citations, and performance analytics."
        buttonText="Request a Systems Audit"
        buttonPage="contact"
      />
    </div>
  );
}