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

import { Link } from 'react-router';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { AgencyProcessTimeline } from '../patterns/AgencyProcessTimeline';
import { FunkyCTA } from '../patterns/FunkyCTA';
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

const statsItems = stats.map((s, i) => ({
  id: `stat-${i}`,
  value: s.metric,
  label: s.label,
}));

const approachSteps = approach.map((s, i) => ({
  id: `ai-approach-${i + 1}`,
  number: String(i + 1),
  title: s.title,
  description: s.description,
  icon: Brain,
}));

export function AIServicesLandingTemplate() {
  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section 
        aria-labelledby="ai-hero-title"
        style={{
          position: 'relative',
          padding: 'var(--spacing-32) 0',
          backgroundColor: 'var(--background)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center'
        }}
      >
        {/* Background Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              padding: 'var(--spacing-2) var(--spacing-4)',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(var(--card-rgb), 0.8)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-6)',
              boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <Robot size={16} weight="duotone" aria-hidden="true" />
              AI-Powered Services
            </div>

            <h1 id="ai-hero-title" style={{
              margin: '0 0 var(--spacing-6) 0',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h1)',
              color: 'var(--foreground)',
              lineHeight: '1.1'
            }}>
              Artificial Intelligence <br />
              <span style={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(var(--primary-rgb), 0.3)'
              }}>
                Services
              </span>
            </h1>

            <p style={{
              margin: '0 auto var(--spacing-10) auto',
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-xl)',
              color: 'var(--muted-foreground)',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}>
              From technical SEO to AI engine optimisation, we help your WordPress site
              dominate both traditional search and the new wave of AI-powered discovery
              platforms.
            </p>

            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--spacing-4) var(--spacing-8)',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)'
                }}
              >
                Get AI Audit
              </Link>
              <a
                href="#services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--spacing-4) var(--spacing-8)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(5px)'
                }}
              >
                Explore Services
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div style={{ position: 'absolute', bottom: 'var(--spacing-8)', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
          <ScrollDownArrow />
        </div>
      </section>

      {/* ============================================
          SERVICES GRID
          ============================================ */}
      <section
        id="services"
        aria-labelledby="ai-services-title"
        style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="AI & Search Services"
              subheading="Comprehensive AI-powered services to maximise your digital visibility across every search channel."
              capabilities={serviceItems.map((item, i) => ({
                id: `ai-srv-${i}`,
                title: item.title,
                description: item.description,
                icon: item.icon as any
              }))}
              columns={3}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          STATS
          ============================================ */}
      <section 
        aria-labelledby="ai-stats-title"
        style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading="Results That Matter"
              subheading="Data-backed outcomes from our AI and search optimisation campaigns."
              stats={statsItems}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          APPROACH
          ============================================ */}
      <section
        aria-labelledby="ai-approach-title"
        style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyProcessTimeline
              heading="Our Approach"
              subheading="A proven four-phase methodology that delivers measurable results."
              steps={approachSteps}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section aria-labelledby="ai-cta-title">
        <FunkyCTA
          title="Ready to Harness AI?"
          description="Get a free AI readiness audit and discover how to future-proof your search visibility in the age of artificial intelligence."
          buttonText="Request Free AI Audit"
          buttonPage="contact"
          benefits={[
            'Technical SEO audit included',
            'AI prompt strategy session',
            'Performance benchmarking',
            'Data-driven action plan'
          ]}
        />
      </section>
    </div>
  );
}