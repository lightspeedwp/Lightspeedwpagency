/**
 * Content Services Landing Template
 *
 * Parent landing page for all content-related services.
 * Route: /services/content/
 *
 * Sub-services:
 * - /services/content/audit (Content Audit)
 * - /services/content/strategy (Content Strategy)
 * - /services/content/creation (Content Creation)
 * - /services/content/collection (Content Collection)
 * - /services/content/copywriting (Copywriting & UX Writing)
 * - /services/content/seo-content (SEO Content)
 * - /services/content/governance (Content Governance)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-content-landing.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 *
 * @see /src/styles/templates/page-service-content-landing.css
 */

import '../../../styles/templates/page-service-content-landing.css';
import { Link } from 'react-router';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import {
  FileSearch,
  Target,
  PenTool,
  Camera,
  Edit3,
  Search,
  ShieldCheck,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

/** Content sub-service definitions */
const contentServices = [
  {
    id: 'audit',
    icon: FileSearch,
    name: 'Content Audit',
    description:
      'Comprehensive inventory and analysis of your existing content to identify performance gaps, redundancies, and optimisation opportunities.',
    features: [
      'Complete content inventory',
      'E-E-A-T quality assessment',
      'Performance scoring',
      'Actionable recommendations',
    ],
    path: '/services/content/audit',
  },
  {
    id: 'strategy',
    icon: Target,
    name: 'Content Strategy',
    description:
      'Data-driven content planning with audience research, topic clustering, editorial calendars, and measurable KPIs.',
    features: [
      'Audience personas & research',
      'Content pillar framework',
      '12-month editorial calendar',
      'Content governance framework',
    ],
    path: '/services/content/strategy',
  },
  {
    id: 'creation',
    icon: PenTool,
    name: 'Content Creation',
    description:
      'Professional content production — from blog posts and landing pages to whitepapers, case studies, and social media content.',
    features: [
      'Blog posts & articles',
      'Landing page copy',
      'Whitepapers & case studies',
      'Social media content',
    ],
    path: '/services/content/creation',
  },
  {
    id: 'collection',
    icon: Camera,
    name: 'Content Collection',
    description:
      'On-site photography, video production, interviews, and asset gathering to build a rich content library.',
    features: [
      'Professional photography',
      'Video production',
      'SME interview sessions',
      'User-generated content curation',
    ],
    path: '/services/content/collection',
  },
  {
    id: 'copywriting',
    icon: Edit3,
    name: 'Copywriting & UX Writing',
    description:
      'Conversion-focused copywriting for websites, campaigns, and product interfaces that drives action.',
    features: [
      'Website copy & headlines',
      'Email campaign writing',
      'UX microcopy & CTAs',
      'Brand voice development',
    ],
    path: '/services/content/copywriting',
  },
  {
    id: 'seo-content',
    icon: Search,
    name: 'SEO Content',
    description:
      'Keyword-optimised content that ranks in search engines while providing genuine value to your audience.',
    features: [
      'Keyword-targeted articles',
      'Topic cluster content',
      'Meta & schema writing',
      'Content refresh & optimisation',
    ],
    path: '/services/content/seo-content',
  },
  {
    id: 'governance',
    icon: ShieldCheck,
    name: 'Content Governance',
    description:
      'Establish and maintain content quality standards, style guides, approval workflows, and compliance frameworks.',
    features: [
      'Style guide creation',
      'Content quality standards',
      'Approval workflow design',
      'Compliance & accessibility checks',
    ],
    path: '/services/content/governance',
  },
];

/** Process steps */
const processSteps = [
  {
    title: 'Discover',
    description:
      'We audit your existing content, research your audience, and identify gaps and opportunities in your content landscape.',
  },
  {
    title: 'Plan',
    description:
      'A prioritised content strategy with editorial calendars, topic clusters, and clear KPIs tied to business goals.',
  },
  {
    title: 'Create',
    description:
      'Our editorial team produces high-quality, SEO-optimised content across all channels — from long-form articles to micro-content.',
  },
  {
    title: 'Optimise',
    description:
      'Continuous performance analysis, A/B testing, and content refreshes to maximise engagement and conversions.',
  },
];

export function ContentServicesLandingTemplate() {
  return (
    <div className="content-landing">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="content-landing__hero" aria-labelledby="content-hero-title">
        <div className="content-landing__hero-inner">
          <ScrollReveal animation="fade-down">
            <div className="content-landing__badge">
              <BookOpen size={14} aria-hidden="true" />
              Content Services
            </div>

            <h1 id="content-hero-title" className="content-landing__hero-title">
              Content That{' '}
              <span className="content-landing__hero-highlight">Converts</span>
            </h1>

            <p className="content-landing__hero-description">
              From strategy to creation, audit to governance — we deliver
              comprehensive content services that drive organic traffic, build
              authority, and convert visitors into customers.
            </p>

            <div className="content-landing__hero-cta">
              <Link
                to="/contact"
                className="content-landing__button content-landing__button--primary"
              >
                Start Content Project
              </Link>
              <a
                href="#services"
                className="content-landing__button content-landing__button--secondary"
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
        className="content-landing__services"
        id="services"
        aria-labelledby="content-services-title"
      >
        <Container>
          <div className="content-landing__section-header">
            <ScrollReveal animation="fade-up">
              <h2 id="content-services-title" className="content-landing__section-title">
                Content Services
              </h2>
              <p className="content-landing__section-description">
                End-to-end content solutions for every stage of your content lifecycle.
              </p>
            </ScrollReveal>
          </div>

          <div className="content-landing__services-grid">
            {contentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={index * 80}>
                  <Link
                    to={service.path}
                    className="content-landing__service-card"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <div className="content-landing__service-icon">
                      <Icon className="content-landing__service-icon-svg" aria-hidden="true" />
                    </div>
                    <h3 className="content-landing__service-name">{service.name}</h3>
                    <p className="content-landing__service-desc">{service.description}</p>
                    <ul className="content-landing__service-features">
                      {service.features.map((feature) => (
                        <li key={feature} className="content-landing__service-feature">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="content-landing__service-link">
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
          PROCESS
          ============================================ */}
      <section className="content-landing__process" aria-labelledby="content-process-title">
        <Container>
          <div className="content-landing__section-header">
            <ScrollReveal animation="fade-up">
              <h2 id="content-process-title" className="content-landing__section-title">
                Our Content Process
              </h2>
              <p className="content-landing__section-description">
                A proven methodology from discovery to ongoing optimisation.
              </p>
            </ScrollReveal>
          </div>

          <div className="content-landing__process-grid">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} animation="fade-up" delay={index * 100}>
                <div className="content-landing__process-step">
                  <div className="content-landing__process-number">{index + 1}</div>
                  <div className="content-landing__process-content">
                    <h3 className="content-landing__process-title">{step.title}</h3>
                    <p className="content-landing__process-desc">{step.description}</p>
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
      <section className="content-landing__cta" aria-labelledby="content-cta-title">
        <div className="content-landing__cta-content">
          <ScrollReveal animation="fade-up">
            <h2 id="content-cta-title" className="content-landing__cta-title">
              Ready to Transform Your Content?
            </h2>
            <p className="content-landing__cta-description">
              Get a free content audit and discover how strategic content can drive
              measurable growth for your business.
            </p>
            <Link
              to="/contact"
              className="content-landing__button content-landing__button--cta"
            >
              Request Free Content Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
