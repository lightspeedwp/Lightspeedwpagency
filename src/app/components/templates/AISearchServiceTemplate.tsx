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
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FeatureList } from '../patterns/FeatureList';
import { StatsGrid } from '../patterns/StatsGrid';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import {
  MagnifyingGlass,
  ChartBar,
  Brain,
  ChatCentered,
  Eye,
} from '@phosphor-icons/react';

/** Service pillars — the 4 merged sub-services */
const pillars = [
  {
    id: 'seo',
    icon: MagnifyingGlass,
    name: 'Technical SEO',
    description:
      'Comprehensive technical SEO audits, keyword research, on-page optimisation, and ongoing monitoring to dominate organic search results.',
    features: [
      'Technical SEO audit & remediation',
      'Keyword research & content gaps',
      'On-page & schema markup',
      'Link authority building',
      'Monthly ranking reports',
    ],
  },
  {
    id: 'analytics',
    icon: ChartBar,
    name: 'Analytics & Reporting',
    description:
      'Data-driven insights with custom dashboards, conversion tracking, and actionable reporting that connects marketing spend to revenue.',
    features: [
      'GA4 & tag management setup',
      'Custom KPI dashboards',
      'Conversion funnel analysis',
      'Attribution modelling',
      'Monthly performance reports',
    ],
  },
  {
    id: 'ai-engine',
    icon: Brain,
    name: 'AI Engine Optimisation',
    description:
      'Fine-tune, accelerate, and scale AI models on your WordPress stack — from inference speed to cost efficiency. Cut AI costs by 60%.',
    features: [
      'Model benchmarking (6+ providers)',
      'Prompt engineering & tuning',
      'Semantic inference caching',
      'Cost & rate-limit management',
      'Quality regression testing',
    ],
  },
  {
    id: 'answer-engine',
    icon: ChatCentered,
    name: 'Answer Engine Optimisation',
    description:
      'Get cited by ChatGPT, Perplexity, and AI Overviews. Optimise your content to be the answer AI engines serve.',
    features: [
      'AI citation audit',
      'Entity authority building',
      'AI-friendly content formatting',
      'Citation tracking (5+ engines)',
      'Monthly share-of-voice reports',
    ],
  },
];

/** Process steps */
const processSteps = [
  { number: '01', title: 'Audit', description: 'Full-stack visibility audit across search engines and AI platforms.' },
  { number: '02', title: 'Strategy', description: 'Custom roadmap combining SEO, AEO, and AI optimisation priorities.' },
  { number: '03', title: 'Implement', description: 'Technical fixes, content restructuring, schema, and AI model tuning.' },
  { number: '04', title: 'Measure', description: 'Ongoing tracking, citation monitoring, and monthly performance reports.' },
];

/* ── Map pillars to FeatureList shape ── */
const pillarItems = pillars.map((p) => ({
  icon: p.icon,
  title: p.name,
  description: p.description,
  features: p.features,
}));

/* ── Map process steps to ProcessTimeline shape ── */
const timelineSteps = processSteps.map((s) => ({
  id: `ai-step-${s.number}`,
  number: parseInt(s.number, 10),
  title: s.title,
  description: s.description,
}));

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
            items={pillarItems}
            columns={2}
            variant="glow"
          />
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
            steps={timelineSteps}
            orientation="horizontal"
          />
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          RELATED SERVICES
          ══════════════════════════════════════════ */}
      <RelatedServicesGrid
        currentServiceSlug="ai-search-visibility"
        title="Related Services"
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