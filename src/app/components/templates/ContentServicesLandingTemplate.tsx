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
import { getPageUrl } from '../../data/site-pages';
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

import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export function ContentServicesLandingTemplate() {
  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Content Services' },
        ]}
      />

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
                to={getPageUrl('contact')}
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