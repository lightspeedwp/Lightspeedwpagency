/**
 * AI Search & Visibility Service Template
 *
 * Consolidated from: SEO, Analytics, AI Engine Optimisation, Answer Engine Optimisation
 * Theme: "Signal Amplifier" (Cyan/Green/Blue)
 *
 * Task 2.3: Service consolidation (22 → ~10)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-ai-search.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 *
 * @see /src/styles/templates/page-service-ai-search.css
 */

import '../../../styles/templates/page-service-ai-search.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import {
  Search,
  BarChart,
  Brain,
  MessageSquare,
  CheckCircle,
  Target,
  TrendingUp,
  Zap,
  Eye,
  Globe,
  FileText,
  Shield,
} from 'lucide-react';

/** Service pillars — the 4 merged sub-services */
const pillars = [
  {
    id: 'seo',
    icon: Search,
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
    icon: BarChart,
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
    icon: MessageSquare,
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
              <Eye style={{ width: 14, height: 14 }} />
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
            <div className="ai-search-page__hero-stats">
              <div className="ai-search-page__stat">
                <span className="ai-search-page__stat-value">60%</span>
                <span className="ai-search-page__stat-label">Lower AI costs</span>
              </div>
              <div className="ai-search-page__stat">
                <span className="ai-search-page__stat-value">5+</span>
                <span className="ai-search-page__stat-label">AI engines tracked</span>
              </div>
              <div className="ai-search-page__stat">
                <span className="ai-search-page__stat-value">3x</span>
                <span className="ai-search-page__stat-label">Organic growth</span>
              </div>
              <div className="ai-search-page__stat">
                <span className="ai-search-page__stat-value">100%</span>
                <span className="ai-search-page__stat-label">Schema coverage</span>
              </div>
            </div>
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

          <div className="ai-search-page__pillars-grid">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <ScrollReveal key={pillar.id} animation="fade-up">
                  <div className="ai-search-page__pillar-card">
                    <div className="ai-search-page__pillar-icon">
                      <IconComp style={{ width: 24, height: 24 }} />
                    </div>
                    <h3 className="ai-search-page__pillar-name">{pillar.name}</h3>
                    <p className="ai-search-page__pillar-description">{pillar.description}</p>
                    <ul className="ai-search-page__pillar-features">
                      {pillar.features.map((feat) => (
                        <li key={feat} className="ai-search-page__pillar-feature">
                          <CheckCircle style={{ width: 14, height: 14 }} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
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

          <div className="ai-search-page__process-grid">
            {processSteps.map((step) => (
              <ScrollReveal key={step.number} animation="fade-up">
                <div className="ai-search-page__process-step">
                  <div className="ai-search-page__step-number">{step.number}</div>
                  <h3 className="ai-search-page__step-title">{step.title}</h3>
                  <p className="ai-search-page__step-desc">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
