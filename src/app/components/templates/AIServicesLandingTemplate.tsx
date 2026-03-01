/**
 * AI Services Landing Template
 *
 * Parent landing page for all AI-related services.
 * Route: /services/ai/
 *
 * Sub-services:
 * - /services/ai/search-visibility (AI Search & Visibility)
 * - /services/ai/seo (Technical SEO)
 * - /services/ai/analytics (Analytics & Reporting)
 * - /services/ai/engine-optimisation (AI Engine Optimisation)
 * - /services/ai/answer-engine-optimisation (Answer Engine Optimisation)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-ai-landing.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 *
 * @see /src/styles/templates/page-service-ai-landing.css
 */

import '../../../styles/templates/page-service-ai-landing.css';
import { Link } from 'react-router';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import {
  Brain,
  Search,
  BarChart,
  MessageSquare,
  ArrowRight,
  Eye,
  Bot,
} from 'lucide-react';

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
    icon: Search,
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
    icon: BarChart,
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
    icon: MessageSquare,
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
              <Bot size={14} aria-hidden="true" />
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

          <div className="ai-landing__services-grid">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal
                  key={service.id}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <Link
                    to={service.path}
                    className="ai-landing__service-card"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <div className="ai-landing__service-icon">
                      <Icon
                        className="ai-landing__service-icon-svg"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="ai-landing__service-name">{service.name}</h3>
                    <p className="ai-landing__service-desc">
                      {service.description}
                    </p>
                    <ul className="ai-landing__service-features">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="ai-landing__service-feature"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="ai-landing__service-link">
                      Learn more <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
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

          <div className="ai-landing__stats-grid">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label} animation="fade-up">
                <div className="ai-landing__stat-card">
                  <div className="ai-landing__stat-metric">{stat.metric}</div>
                  <div className="ai-landing__stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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

          <div className="ai-landing__approach-grid">
            {approach.map((step, index) => (
              <ScrollReveal
                key={step.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="ai-landing__approach-step">
                  <div className="ai-landing__approach-number">{index + 1}</div>
                  <div className="ai-landing__approach-content">
                    <h3 className="ai-landing__approach-title">{step.title}</h3>
                    <p className="ai-landing__approach-desc">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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