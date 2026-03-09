/**
 * AI Services Landing Template
 *
 * Parent landing page for all AI-related services.
 * Route: /services/ai/
 *
 * Pattern Components:
 * - ✅ FeatureList — Service pillar cards (glow variant, with links + sub-features)
 * - ✅ StatsGrid — Results metrics (cards variant, 4 columns)
 * - ✅ ProcessTimeline — 4-step approach (horizontal orientation)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-ai-landing-optimized.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 *
 * @see /src/styles/templates/page-service-ai-landing-optimized.css
 * @migrated March 4, 2026 — Migrated inline services grid to FeatureList, stats to StatsGrid, approach to ProcessTimeline (~60 lines saved)
 */

import '../../../styles/templates/page-service-ai-landing-optimized.css';
import { Link } from 'react-router';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { FeatureList } from '../patterns/FeatureList';
import { StatsGrid } from '../patterns/StatsGrid';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import {
  Brain,
  MagnifyingGlass,
  ChartBar,
  ChatCentered,
  Eye,
  Robot,
} from '@phosphor-icons/react';

/** AI sub-service definitions */
const aiServices = [
  {
    id: 'search-visibility',
    icon: Eye,
    name: 'AI Search & Visibility',
    description:
      'Comprehensive visibility strategy combining technical SEO, analytics, and AI engine optimisation to dominate search across traditional and AI-powered platforms.',
    features: [
      'Multi-platform search strategy',
      'AI search readiness audit',
      'Visibility monitoring dashboard',
      'Cross-channel optimisation',
    ],
    path: '/services/ai/search-visibility',
  },
  {
    id: 'seo',
    icon: MagnifyingGlass,
    name: 'Technical SEO',
    description:
      'Data-driven SEO audits, keyword research, on-page optimisation, and ongoing monitoring to dominate organic search results.',
    features: [
      'Technical SEO audit & remediation',
      'Keyword research & content gaps',
      'On-page & schema markup',
      'Monthly ranking reports',
    ],
    path: '/services/ai/seo',
  },
  {
    id: 'analytics',
    icon: ChartBar,
    name: 'Analytics & Reporting',
    description:
      'Custom dashboards, conversion tracking, and actionable reporting that connects marketing spend to revenue.',
    features: [
      'GA4 & tag management setup',
      'Custom KPI dashboards',
      'Conversion funnel analysis',
      'Attribution modelling',
    ],
    path: '/services/ai/analytics',
  },
  {
    id: 'engine-optimisation',
    icon: Brain,
    name: 'AI Engine Optimisation',
    description:
      'Fine-tune, accelerate, and scale AI models on your WordPress stack — from inference speed to cost efficiency.',
    features: [
      'Model benchmarking (6+ providers)',
      'Prompt engineering & tuning',
      'Semantic inference caching',
      'Cost & rate-limit management',
    ],
    path: '/services/ai/engine-optimisation',
  },
  {
    id: 'answer-engine',
    icon: ChatCentered,
    name: 'Answer Engine Optimisation',
    description:
      'Structure your content to appear in AI-generated answers across ChatGPT, Gemini, Perplexity, and other AI assistants.',
    features: [
      'AI answer audit & gap analysis',
      'Schema & structured data',
      'Conversational content optimisation',
      'Citation tracking & monitoring',
    ],
    path: '/services/ai/answer-engine-optimisation',
  },
];

/** Stats data */
const stats = [
  { metric: '60%', label: 'Average Cost Reduction' },
  { metric: '3.2x', label: 'Faster AI Inference' },
  { metric: '150%', label: 'Organic Traffic Lift' },
  { metric: '40+', label: 'AI Models Benchmarked' },
];

/** Approach steps */
const approach = [
  {
    title: 'Audit & Discovery',
    description:
      'We assess your current search presence, AI readiness, and analytics infrastructure to identify gaps and opportunities.',
  },
  {
    title: 'Strategy & Roadmap',
    description:
      'A prioritised action plan covering SEO, AI visibility, analytics, and engine optimisation tailored to your business goals.',
  },
  {
    title: 'Implementation',
    description:
      'Our team executes across all channels — technical SEO, AI content structuring, analytics setup, and model optimisation.',
  },
  {
    title: 'Monitor & Evolve',
    description:
      'Continuous monitoring, A/B testing, and iterative improvements ensure you stay ahead as AI search evolves.',
  },
];

/* ── Map data to pattern component shapes ── */
const serviceItems = aiServices.map((s) => ({
  icon: s.icon,
  title: s.name,
  description: s.description,
  features: s.features,
  link: s.path,
  linkText: 'Learn more →',
}));

const statsItems = stats.map((s) => ({
  value: s.metric,
  label: s.label,
}));

const approachSteps = approach.map((s, i) => ({
  id: `ai-approach-${i + 1}`,
  number: i + 1,
  title: s.title,
  description: s.description,
}));

export function AIServicesLandingTemplate() {
  return (
    <div className="ai-landing">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="ai-landing__hero" aria-labelledby="ai-hero-title">
        <div className="ai-landing__hero-inner">
          <ScrollReveal animation="fade-down">
            <div className="ai-landing__badge">
              <Robot size={14} aria-hidden="true" />
              AI-Powered Services
            </div>

            <h1 id="ai-hero-title" className="ai-landing__hero-title">
              Artificial Intelligence{' '}
              <span className="ai-landing__hero-highlight">Services</span>
            </h1>

            <p className="ai-landing__hero-description">
              From technical SEO to AI engine optimisation, we help your WordPress site
              dominate both traditional search and the new wave of AI-powered discovery
              platforms.
            </p>

            <div className="ai-landing__hero-cta">
              <Link
                to="/contact"
                className="ai-landing__button ai-landing__button--primary"
              >
                Get AI Audit
              </Link>
              <a
                href="#services"
                className="ai-landing__button ai-landing__button--secondary"
              >
                Explore Services
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          SERVICES GRID
          ============================================ */}
      <section
        className="ai-landing__services"
        id="services"
        aria-labelledby="ai-services-title"
      >
        <Container>
          <div className="ai-landing__section-header">
            <ScrollReveal animation="fade-up">
              <h2 id="ai-services-title" className="ai-landing__section-title">
                AI & Search Services
              </h2>
              <p className="ai-landing__section-description">
                Comprehensive AI-powered services to maximise your digital visibility
                across every search channel.
              </p>
            </ScrollReveal>
          </div>

          <FeatureList
            items={serviceItems}
            columns={2}
            variant="glow"
          />
        </Container>
      </section>

      {/* ============================================
          STATS
          ============================================ */}
      <section className="ai-landing__stats" aria-labelledby="ai-stats-title">
        <Container>
          <div className="ai-landing__section-header">
            <ScrollReveal animation="fade-up">
              <h2 id="ai-stats-title" className="ai-landing__section-title">
                Results That Matter
              </h2>
              <p className="ai-landing__section-description">
                Data-backed outcomes from our AI and search optimisation campaigns.
              </p>
            </ScrollReveal>
          </div>

          <StatsGrid
            stats={statsItems}
            columns={4}
            variant="cards"
          />
        </Container>
      </section>

      {/* ============================================
          APPROACH
          ============================================ */}
      <section
        className="ai-landing__approach"
        aria-labelledby="ai-approach-title"
      >
        <Container>
          <div className="ai-landing__section-header">
            <ScrollReveal animation="fade-up">
              <h2 id="ai-approach-title" className="ai-landing__section-title">
                Our Approach
              </h2>
              <p className="ai-landing__section-description">
                A proven four-phase methodology that delivers measurable results.
              </p>
            </ScrollReveal>
          </div>

          <ProcessTimeline
            steps={approachSteps}
            orientation="horizontal"
          />
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section className="ai-landing__cta" aria-labelledby="ai-cta-title">
        <div className="ai-landing__cta-content">
          <ScrollReveal animation="fade-up">
            <h2 id="ai-cta-title" className="ai-landing__cta-title">
              Ready to Harness AI?
            </h2>
            <p className="ai-landing__cta-description">
              Get a free AI readiness audit and discover how to future-proof your
              search visibility in the age of artificial intelligence.
            </p>
            <Link
              to="/contact"
              className="ai-landing__button ai-landing__button--cta"
            >
              Request Free AI Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}