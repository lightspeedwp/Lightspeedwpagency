/**
 * Migrations Service Template — Funky Redesign v2
 *
 * Theme: "Warp Drive" (Data Teleportation / Warp Tunnel)
 * Palette: Cyan → Amber → Green (mapped to category tokens)
 *
 * Sections:
 *  1. Hero          — Warp-tunnel rings, data-stream particles, glassmorphism
 *  2. Why Migrate   — Benefits dossier with intel card overlay
 *  3. Services      — Warp Capability cards with gradient top-borders
 *  4. Process       — Vertical timeline, alternating layout
 *  5. Platforms     — Departure-gate badge grid
 *  6. Case Study    — Mission Log quote card with stats
 *  7. FAQ           — FAQSection pattern
 *  8. FunkyCTA      — Reusable conversion block
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 *  - Zero Tailwind classes
 *  - All styling via /src/styles/templates/page-service-migrations.css
 *  - Colors from semantic tokens (auto light / dark)
 *  - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 *
 * @see /guidelines/templates/overview-templates.md
 */

import { useState, useEffect } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import {
  Move,
  ArrowRight,
  Database,
  Server,
  CheckCircle,
  Shield,
  Zap,
  RefreshCw,
  Layers,
  FileText,
  Globe,
  Search,
  ShoppingCart,
  Award,
  Clock,
} from 'lucide-react';

// Import centralized data
import {
  migrationsHero,
  whyMigrateWithLSX,
  migrationServices,
  migrationProcess,
  supportedPlatforms,
  migrationCaseStudy,
  migrationsFAQs,
  migrationsCTA,
  migrationsRelatedServices,
} from '../../data/migrations-service-page';

/* ─────────────────────────────────────────────
   STATIC DATA
   ───────────────────────────────────────────── */

const heroStats = [
  { value: '500+', label: 'Sites Migrated', icon: Zap },
  { value: '100%', label: 'Success Rate', icon: Award },
  { value: '0min', label: 'Avg Downtime', icon: Clock },
];

const serviceIcons: Record<string, typeof Move> = {
  'Platform to WordPress': RefreshCw,
  'Host Migration': Server,
  'eCommerce Replatforming': ShoppingCart,
  'Multisite Consolidation': Globe,
  'Content Migration': FileText,
  'SEO Migration': Search,
};

/* ─────────────────────────────────────────────
   ANIMATED COUNTER HOOK
   ───────────────────────────────────────────── */

function useCounter(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

function StatCounter({ value, label }: { value: string; label: string }) {
  const numeric = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[\d]/g, '');
  const count = useCounter(numeric);
  return (
    <div className="mig-hero__stat">
      <span className="mig-hero__stat-value">
        {count}{suffix}
      </span>
      <span className="mig-hero__stat-label">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TEMPLATE
   ───────────────────────────────────────────── */

export function MigrationsServiceTemplate() {
  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Migrations' },
        ]}
      />

      {/* ============================================
          1. HERO — "WARP TUNNEL"
          ============================================ */}
      <section className="mig-hero">
        {/* Background ambient image */}
        <img
          src="https://images.unsplash.com/photo-1650466858294-4b141fc289cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGF0YSUyMHRyYW5zZmVyJTIwdHVubmVsJTIwbmVvbnxlbnwxfHx8fDE3NzE1MTI3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="mig-hero__bg"
          aria-hidden="true"
        />

        {/* Warp tunnel rings (decorative) */}
        <div className="mig-hero__tunnel" aria-hidden="true">
          <div className="mig-hero__ring mig-hero__ring--1" />
          <div className="mig-hero__ring mig-hero__ring--2" />
          <div className="mig-hero__ring mig-hero__ring--3" />
          <div className="mig-hero__ring mig-hero__ring--4" />
        </div>

        {/* Data stream particles */}
        <div className="mig-hero__particles" aria-hidden="true">
          <div className="mig-hero__particle mig-hero__particle--1" />
          <div className="mig-hero__particle mig-hero__particle--2" />
          <div className="mig-hero__particle mig-hero__particle--3" />
          <div className="mig-hero__particle mig-hero__particle--4" />
          <div className="mig-hero__particle mig-hero__particle--5" />
        </div>

        <Container>
          <div className="mig-hero__content">
            <ScrollReveal animation="fade-up">
              <span className="mig-hero__badge">
                <Move size={14} />
                Zero Downtime Migrations
              </span>

              <h1 className="mig-hero__title">
                Seamless Data&nbsp;
                <span className="mig-hero__highlight">Teleportation</span>
              </h1>

              <p className="mig-hero__desc">
                {migrationsHero.description}
              </p>

              <div className="mig-hero__actions">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  className="mig-hero__btn-primary"
                >
                  {migrationsHero.cta.primary.text}
                  <ArrowRight size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="portfolio-archive"
                  className="mig-hero__btn-outline"
                >
                  {migrationsHero.cta.secondary.text}
                </Button>
              </div>
            </ScrollReveal>

            {/* Mini Stat Bar */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mig-hero__stats">
                {heroStats.map((s) => (
                  <StatCounter key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. WHY MIGRATE — "MISSION BRIEFING"
          ============================================ */}
      <Section spacing="xl" className="mig-why" background="card">
        <Container>
          <div className="mig-why__grid">
            {/* Left — visual card */}
            <ScrollReveal animation="fade-right">
              <div className="mig-why__visual">
                <div className="mig-why__glow" aria-hidden="true" />
                <img
                  src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwZGF0YSUyMGNlbnRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNDE5NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern server room with data transfer technology"
                  className="mig-why__image"
                />
                {/* Floating Intel Card */}
                <div className="mig-why__intel-card">
                  <Database size={20} />
                  <div>
                    <span className="mig-why__intel-title">Data Integrity</span>
                    <span className="mig-why__intel-sub">100% verified transfer</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — copy */}
            <ScrollReveal animation="fade-left">
              <div className="mig-why__copy">
                <span className="mig-section-label">Why Trust Us</span>
                <h2 className="mig-section-heading">
                  Your Data,{' '}
                  <span className="mig-gradient-text">Safely Delivered</span>
                </h2>
                <p className="mig-body-text">
                  {whyMigrateWithLSX.description}
                </p>

                <div className="mig-why__benefits">
                  {whyMigrateWithLSX.benefits.map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={i} className="mig-why__benefit">
                        <div className="mig-why__benefit-icon">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="mig-why__benefit-title">{benefit.title}</div>
                          <div className="mig-why__benefit-desc">{benefit.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ============================================
          3. SERVICES — "WARP CAPABILITIES"
          ============================================ */}
      <section className="mig-services">
        <Container>
          <div className="mig-services__header">
            <ScrollReveal animation="fade-up">
              <span className="mig-section-label">Migration Services</span>
              <h2 className="mig-section-heading">
                Warp&nbsp;
                <span className="mig-gradient-text">Capabilities</span>
              </h2>
              <p className="mig-body-text">
                Full-spectrum migration services for any platform, any scale.
              </p>
            </ScrollReveal>
          </div>

          <div className="mig-services__grid">
            {migrationServices.map((service, index) => {
              const Icon = serviceIcons[service.title] || Move;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                  <div className="mig-services__card">
                    <div className="mig-services__card-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="mig-services__card-title">{service.title}</h3>
                    <p className="mig-services__card-desc">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. PROCESS — "WARP SEQUENCE"
          ============================================ */}
      <section className="mig-process">
        <Container>
          <div className="mig-process__header">
            <ScrollReveal animation="fade-up">
              <span className="mig-section-label">The Roadmap</span>
              <h2 className="mig-section-heading">
                Warp&nbsp;
                <span className="mig-gradient-text">Sequence</span>
              </h2>
              <p className="mig-body-text">
                A proven 5-step approach to successful, stress-free migrations.
              </p>
            </ScrollReveal>
          </div>

          <div className="mig-process__timeline">
            <div className="mig-process__line" aria-hidden="true" />

            {migrationProcess.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <ScrollReveal
                  key={index}
                  animation={isLeft ? 'fade-right' : 'fade-left'}
                  delay={index * 100}
                >
                  <div className={`mig-process__step ${isLeft ? 'mig-process__step--left' : 'mig-process__step--right'}`}>
                    {!isLeft && <div className="mig-process__spacer" />}

                    <div className="mig-process__card">
                      <span className="mig-process__step-number">
                        Step {step.step}
                      </span>
                      <h3 className="mig-process__step-title">{step.title}</h3>
                      <p className="mig-process__step-desc">{step.description}</p>
                    </div>

                    <div className="mig-process__marker" />

                    {isLeft && <div className="mig-process__spacer" />}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          5. PLATFORMS — "DEPARTURE GATES"
          ============================================ */}
      <section className="mig-platforms">
        <Container>
          <div className="mig-platforms__header">
            <ScrollReveal animation="fade-up">
              <span className="mig-section-label">Supported Platforms</span>
              <h2 className="mig-section-heading">
                {supportedPlatforms.title}
              </h2>
              <p className="mig-body-text">
                {supportedPlatforms.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="mig-platforms__grid">
            {supportedPlatforms.platforms.map((platform, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 60}>
                <div className="mig-platforms__card">
                  <CheckCircle size={14} className="mig-platforms__card-check" />
                  <span>{platform.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          6. CASE STUDY — "MISSION LOG"
          ============================================ */}
      <section className="mig-casestudy">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="mig-casestudy__wrapper">
              <div className="mig-casestudy__glow" aria-hidden="true" />

              <div className="mig-casestudy__inner">
                <span className="mig-casestudy__badge">
                  Success Story
                </span>

                <h3 className="mig-casestudy__quote">
                  &ldquo;{migrationCaseStudy.quote}&rdquo;
                </h3>

                <div className="mig-casestudy__results">
                  {migrationCaseStudy.results.map((result, index) => (
                    <div key={index} className="mig-casestudy__result">
                      <div className="mig-casestudy__result-metric">
                        {result.metric}
                      </div>
                      <div className="mig-casestudy__result-label">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="mig-casestudy__author-name">
                    {migrationCaseStudy.author}
                  </div>
                  <div className="mig-casestudy__author-role">
                    {migrationCaseStudy.role}, {migrationCaseStudy.client}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <FAQSection faqs={migrationsFAQs} variant="muted" />

      {/* ── CTA ── */}
      {migrationsRelatedServices && migrationsRelatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
          subtitle="Complement your migration with these essential services"
          services={migrationsRelatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="migrations"
        subtitle="Our migration service is part of these comprehensive solution packages"
      />
      <ServiceTestimonial
        serviceSlug="migrations"
        subtitle="Hear from clients who migrated seamlessly with zero downtime"
      />
      <FunkyCTA
        title={migrationsCTA.title}
        description={migrationsCTA.description}
        buttonText={migrationsCTA.buttons[0].text}
        buttonPage={migrationsCTA.buttons[0].page}
        benefits={[
          'Zero downtime migration guarantee',
          'Full SEO & URL preservation',
          'Complete data integrity verification',
          'Post-migration support & training',
        ]}
      />
    </>
  );
}