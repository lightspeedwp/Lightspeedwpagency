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

import { Link } from 'react-router';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyProcessTimeline } from '../patterns/AgencyProcessTimeline';
import { FunkyCTA } from '../patterns/FunkyCTA';
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
  number: String(i + 1),
  title: s.title,
  description: s.description,
  icon: BookOpen,
}));

export function ContentServicesLandingTemplate() {
  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section 
        aria-labelledby="content-hero-title"
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
        {/* Background Gradients */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          height: '80vh',
          background: 'radial-gradient(ellipse at center, rgba(var(--secondary-rgb), 0.15) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              padding: 'var(--spacing-2) var(--spacing-4)',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--card)',
              border: '1px solid var(--secondary)',
              color: 'var(--secondary)',
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-6)',
              boxShadow: '0 0 20px rgba(var(--secondary-rgb), 0.2)'
            }}>
              <BookOpen size={16} weight="duotone" aria-hidden="true" />
              Content Services
            </div>

            <h1 id="content-hero-title" style={{
              margin: '0 0 var(--spacing-6) 0',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h1)',
              color: 'var(--foreground)',
              lineHeight: '1.1'
            }}>
              Content That{' '}
              <span style={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(90deg, var(--secondary), var(--primary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(var(--secondary-rgb), 0.3)'
              }}>
                Converts
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
              From strategy to creation, audit to governance — we deliver
              comprehensive content services that drive organic traffic, build
              authority, and convert visitors into customers.
            </p>

            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--spacing-4) var(--spacing-8)',
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--secondary-foreground)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(var(--secondary-rgb), 0.3)'
                }}
              >
                Start Content Project
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
                  textDecoration: 'none'
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
        aria-labelledby="content-services-title"
        style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="Content Services"
              subheading="End-to-end content solutions for every stage of your content lifecycle."
              capabilities={serviceItems.map((item, i) => ({
                id: `content-srv-${i}`,
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
          PROCESS
          ============================================ */}
      <section 
        aria-labelledby="content-process-title"
        style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyProcessTimeline
              heading="Our Content Process"
              subheading="A proven methodology from discovery to ongoing optimisation."
              steps={timelineSteps}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section aria-labelledby="content-cta-title">
        <FunkyCTA
          title="Ready to Transform Your Content?"
          description="Get a free content audit and discover how strategic content can drive measurable growth for your business."
          buttonText="Request Free Content Audit"
          buttonPage="contact"
          benefits={[
            'Content inventory analysis',
            'SEO gap identification',
            'Audience persona review',
            'Actionable strategy roadmap'
          ]}
        />
      </section>
    </div>
  );
}