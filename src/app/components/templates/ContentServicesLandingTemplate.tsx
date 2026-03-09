/**
 * Content Services Landing Template
 *
 * Parent landing page for all content-related services.
 * Route: /services/content/
 *
 * Pattern Components:
 * - ✅ FeatureList — Service cards (glow variant, 2 columns, with links + sub-features)
 * - ✅ ProcessTimeline — 4-step content process (horizontal orientation)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-content-landing-optimized.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 *
 * @see /src/styles/templates/page-service-content-landing-optimized.css
 * @migrated March 4, 2026 — Migrated inline services grid to FeatureList and process to ProcessTimeline (~40 lines saved)
 */

import '../../../styles/templates/page-service-content-landing-optimized.css';
import { Link } from 'react-router';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { FeatureList } from '../patterns/FeatureList';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import {
  FileMagnifyingGlass,
  Target,
  PenNib,
  Camera,
  PencilSimple,
  MagnifyingGlass,
  ShieldCheck,
  BookOpen,
} from '@phosphor-icons/react';

/** Content sub-service definitions */
const contentServices = [
  {
    id: 'audit',
    icon: FileMagnifyingGlass,
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
    icon: PenNib,
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
    icon: PencilSimple,
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
    icon: MagnifyingGlass,
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

/* ── Map data to pattern component shapes ── */
const serviceItems = contentServices.map((s) => ({
  icon: s.icon,
  title: s.name,
  description: s.description,
  features: s.features,
  link: s.path,
  linkText: 'Learn more →',
}));

const timelineSteps = processSteps.map((s, i) => ({
  id: `content-process-${i + 1}`,
  number: i + 1,
  title: s.title,
  description: s.description,
}));

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

          <FeatureList
            items={serviceItems}
            columns={2}
            variant="glow"
          />
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

          <ProcessTimeline
            steps={timelineSteps}
            orientation="horizontal"
          />
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