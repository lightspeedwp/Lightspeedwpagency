import '../../../styles/templates/ai-services/index.css';

import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { NeonStats } from '../common/NeonStats';
import { StatsGrid } from '../patterns/StatsGrid';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StickyTimelineNav } from '../parts/StickyTimelineNav';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import {
  Brain,
  Robot,
  ArrowRight,
  GitMerge,
  CheckCircle,
  Sparkle
} from '@phosphor-icons/react';

import { aiServicesLifecycle, legacyStatsItems } from '../../data/ai-services-lifecycle-data';

export function AIServicesLandingTemplate() {
  return (
    <div className="ai-services-lifecycle">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'AI services' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        aria-labelledby="ai-services-hero-title"
        className="ai-services-lifecycle__hero"
      >
        {/* Orbital animation background */}
        <div className="ai-services-lifecycle__orbit-container">
          <div className="ai-services-lifecycle__orbit-ring">
            {/* Central brain icon */}
            <div className="ai-services-lifecycle__orbit-center">
              <Brain size={48} weight="duotone" aria-hidden="true" />
            </div>
            
            {/* Orbiting stage icons */}
            {aiServicesLifecycle.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.slug}
                  className="ai-services-lifecycle__orbit-icon"
                  style={{ '--icon-accent': stage.accent } as React.CSSProperties}
                >
                  <Icon size={24} weight="duotone" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="ai-services-lifecycle__hero-content">
          <ScrollReveal animation="fade-down">
            <div className="ai-services-lifecycle__badge">
              <Robot size={16} weight="duotone" aria-hidden="true" />
              6-Stage Lifecycle
            </div>

            <h1 id="ai-services-hero-title" className="ai-services-lifecycle__title">
              AI Services{' '}
              <span className="ai-services-lifecycle__title-highlight">
                Lifecycle
              </span>
            </h1>

            <p className="ai-services-lifecycle__description">
              From discovery to evolution, we guide you through every stage of AI transformation. 
              Our proven 6-stage methodology delivers measurable results across your entire digital ecosystem.
            </p>

            <div className="ai-services-lifecycle__hero-actions">
              <Link
                to={getPageUrl('contact')}
                className="ai-services-lifecycle__btn-primary"
              >
                Start Your Journey
              </Link>
              <a
                href="#stage-discover"
                className="ai-services-lifecycle__btn-outline"
              >
                Explore Lifecycle
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="ai-landing__scroll-down">
          <ScrollDownArrow />
        </div>
      </section>

      {/* ============================================
          STICKY TIMELINE NAVIGATION
          ============================================ */}
      <StickyTimelineNav
        stages={aiServicesLifecycle.map((stage) => ({
          slug: stage.slug,
          step: stage.step,
          name: stage.name,
          accent: stage.accent,
          icon: stage.icon,
        }))}
      />

      {/* ============================================
          TRUST SIGNALS SECTION
          ============================================ */}
      <section
        aria-labelledby="ai-services-trust-title"
        className="ai-landing__section ai-landing__section--muted"
        style={{ padding: 'var(--spacing-16) var(--spacing-6)' }}
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
              <h2
                id="ai-services-trust-title"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-text)',
                  marginBottom: 'var(--spacing-3)'
                }}
              >
                Trusted by industry leaders
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-muted)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Real results from real clients across the AI lifecycle.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--spacing-8)',
                marginTop: 'var(--spacing-8)'
              }}
            >
              {aiServicesLifecycle.slice(0, 3).map((stage) => (
                <div
                  key={stage.slug}
                  style={{
                    padding: 'var(--spacing-8)',
                    background: 'var(--color-background)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-lg)',
                      lineHeight: 'var(--line-height-relaxed)',
                      color: 'var(--color-text)',
                      marginBottom: 'var(--spacing-4)',
                      fontStyle: 'italic'
                    }}
                  >
                    "{stage.testimonial.quote}"
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    <strong style={{ color: 'var(--color-text)', fontWeight: 'var(--font-weight-semibold)' }}>
                      {stage.testimonial.author}
                    </strong>
                    <span style={{ display: 'block', marginTop: 'var(--spacing-1)', fontSize: 'var(--text-xs)' }}>
                      {stage.testimonial.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          STATS SECTION
          ============================================ */}
      <section
        aria-labelledby="ai-services-stats-title"
        className="ai-landing__section ai-landing__section--bg"
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <NeonStats
              title="Results that matter"
              subtitle="Data-backed outcomes from our AI lifecycle methodology."
              stats={legacyStatsItems.map((stat, index) => ({
                id: `stat-${index}`,
                value: stat.value,
                label: stat.label,
              }))}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          LIFECYCLE STAGE SECTIONS (6 stages)
          ============================================ */}
      {aiServicesLifecycle.map((stage) => {
        const Icon = stage.icon;
        
        return (
          <section
            key={stage.slug}
            id={`stage-${stage.slug}`}
            aria-labelledby={`stage-${stage.slug}-title`}
            className="ai-services-lifecycle__stage"
            style={{ '--stage-accent': stage.accent } as React.CSSProperties}
          >
            <div className="ai-services-lifecycle__stage-inner">
              <ScrollReveal animation="fade-up">
                {/* Stage header */}
                <div className="ai-services-lifecycle__stage-header">
                  <div className="ai-services-lifecycle__stage-step">
                    {stage.step}
                  </div>
                  <h2
                    id={`stage-${stage.slug}-title`}
                    className="ai-services-lifecycle__stage-name"
                  >
                    {stage.name}
                  </h2>
                  <p className="ai-services-lifecycle__stage-tagline">
                    {stage.tagline}
                  </p>
                  <p className="ai-services-lifecycle__stage-description">
                    {stage.description}
                  </p>
                </div>

                {/* Services grid */}
                <div className="ai-services-lifecycle__services-grid">
                  {stage.services.map((service) => {
                    const ServiceIcon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="ai-services-lifecycle__service-card"
                      >
                        <div className="ai-services-lifecycle__service-icon">
                          <ServiceIcon size={24} weight="duotone" aria-hidden="true" />
                        </div>
                        <h3 className="ai-services-lifecycle__service-title">
                          {service.title}
                        </h3>
                        <p className="ai-services-lifecycle__service-description">
                          {service.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>

                {/* Testimonial */}
                <div className="ai-services-lifecycle__testimonial">
                  <p className="ai-services-lifecycle__testimonial-quote">
                    "{stage.testimonial.quote}"
                  </p>
                  <div>
                    <div className="ai-services-lifecycle__testimonial-author">
                      {stage.testimonial.author}
                    </div>
                    <span className="ai-services-lifecycle__testimonial-role">
                      {stage.testimonial.role}
                    </span>
                  </div>
                </div>

                {/* Related links */}
                {(stage.solutionLinks.length > 0 || stage.serviceLinks.length > 0) && (
                  <div className="ai-services-lifecycle__related">
                    {stage.solutionLinks.length > 0 && (
                      <>
                        <h3 className="ai-services-lifecycle__related-title">
                          Related solutions
                        </h3>
                        <div className="ai-services-lifecycle__related-grid">
                          {stage.solutionLinks.map((link) => (
                            <Link
                              key={link.href}
                              to={link.href}
                              className="ai-services-lifecycle__related-link"
                            >
                              <span>{link.label}</span>
                              <ArrowRight size={16} weight="bold" aria-hidden="true" />
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Stage CTA */}
                <div className="ai-services-lifecycle__stage-cta">
                  <h3 className="ai-services-lifecycle__stage-cta-title">
                    {stage.cta.title}
                  </h3>
                  <p className="ai-services-lifecycle__stage-cta-description">
                    {stage.cta.description}
                  </p>
                  <Link
                    to={getPageUrl(stage.cta.buttonPage as any)}
                    className="ai-services-lifecycle__stage-cta-btn"
                  >
                    {stage.cta.buttonText}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* ============================================
          MIGRATIONS CALLOUT
          ============================================ */}
      <section
        aria-labelledby="ai-services-migrations-title"
        className="ai-services-lifecycle__migrations"
      >
        <ScrollReveal animation="fade-up">
          <div className="ai-services-lifecycle__migrations-card">
            <div className="ai-services-lifecycle__migrations-icon">
              <GitMerge size={40} weight="duotone" aria-hidden="true" />
            </div>
            <h2
              id="ai-services-migrations-title"
              className="ai-services-lifecycle__migrations-title"
            >
              Need to migrate platforms?
            </h2>
            <p className="ai-services-lifecycle__migrations-description">
              We specialise in seamless WordPress migrations. Move from any platform to WordPress 
              without losing SEO rankings, content, or momentum.
            </p>
            <Link
              to={getPageUrl('migrations-service')}
              className="ai-services-lifecycle__migrations-btn"
            >
              <CheckCircle size={20} weight="bold" aria-hidden="true" />
              Explore Migration Services
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section aria-labelledby="ai-services-final-cta-title">
        <FunkyCTA
          title="Ready to transform with AI?"
          description="Start your AI lifecycle journey today. Get a free consultation and discover how our 6-stage methodology can revolutionise your digital presence."
          buttonText="Start Your Journey"
          buttonPage="contact"
          benefits={[
            'Free AI readiness assessment',
            'Custom lifecycle roadmap',
            'Technical feasibility review',
            'ROI projections & timeline'
          ]}
        />
      </section>
    </div>
  );
}