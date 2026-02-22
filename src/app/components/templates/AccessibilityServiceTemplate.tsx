/**
 * Accessibility Compliance Service Template — Funky Redesign
 *
 * Theme: "Universal Access" (Purple / Teal / Inclusive)
 *
 * Sections:
 *  1. Hero — WCAG compliance dashboard, score cards
 *  2. Why — Checklist + WCAG level visualisation
 *  3. Services — Audit, remediation, inclusive design, assistive testing
 *  4. Process — 5-step compliance workflow
 *  5. Stats — Accessibility impact metrics
 *  6. FunkyCTA — Conversion block
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 *  - Zero Tailwind classes
 *  - All styling via /src/styles/templates/page-service-accessibility.css
 *  - Colors from semantic tokens (auto light / dark)
 *  - Fonts: var(--font-primary), var(--font-secondary) only
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { accessibilityServiceDetailed } from '../../data/services-detailed';
import {
  accessibilityServiceWcagLevels,
  accessibilityServiceChecklist,
  accessibilityServiceStats,
  accessibilityServiceIcons,
} from '../../data/accessibility-service-page';

import {
  Accessibility,
  Eye,
  Keyboard,
  MonitorSmartphone,
  CheckCircle,
  FileSearch,
  ClipboardCheck,
  Wrench,
  RefreshCw,
  Shield,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   STATIC DATA
   ───────────────────────────────────────────── */

const serviceIcons = accessibilityServiceIcons.services;
const processIcons = accessibilityServiceIcons.process;
const wcagLevels = accessibilityServiceWcagLevels;
const complianceChecklist = accessibilityServiceChecklist;
const resultStats = accessibilityServiceStats;

/* ─────────────────────────────────────────────
   TEMPLATE
   ───────────────────────────────────────────── */

export function AccessibilityServiceTemplate() {
  const data = accessibilityServiceDetailed;

  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Accessibility' },
        ]}
      />

      {/* ============================================
          1. HERO — "UNIVERSAL ACCESS"
          ============================================ */}
      <section className="a11y-page__hero">
        <div className="a11y-page__grid-bg" aria-hidden="true" />

        <Container>
          <div className="a11y-page__hero-content">
            <ScrollReveal animation="fade-up">
              <span className="a11y-page__badge">
                <Accessibility size={14} />
                WCAG 2.1 AA/AAA Compliant
              </span>

              <h1 className="a11y-page__title">
                Accessible{' '}
                <span className="a11y-gradient-text">For Everyone</span>
              </h1>

              <p className="a11y-page__description">{data.tagline}</p>

              <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button variant="default" size="lg" page="contact" className="a11y-hero__btn-primary">
                  Book an Audit
                </Button>
                <Button variant="outline" size="lg" page="portfolio-archive" className="a11y-hero__btn-outline">
                  View Case Studies
                </Button>
              </div>
            </ScrollReveal>

            {/* Compliance Dashboard */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="a11y-page__dashboard">
                <div className="a11y-page__dashboard-header">
                  <span className="a11y-page__dashboard-title">Compliance Score</span>
                  <span className="a11y-page__dashboard-status">
                    <CheckCircle size={14} />
                    PASSING
                  </span>
                </div>

                <div className="a11y-page__score-grid">
                  <div className="a11y-page__score-item">
                    <div className="a11y-page__score-value">100%</div>
                    <div className="a11y-page__score-label">Perceivable</div>
                  </div>
                  <div className="a11y-page__score-item">
                    <div className="a11y-page__score-value">100%</div>
                    <div className="a11y-page__score-label">Operable</div>
                  </div>
                  <div className="a11y-page__score-item">
                    <div className="a11y-page__score-value">100%</div>
                    <div className="a11y-page__score-label">Understandable</div>
                  </div>
                  <div className="a11y-page__score-item">
                    <div className="a11y-page__score-value">100%</div>
                    <div className="a11y-page__score-label">Robust</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. WHY — "COMPLIANCE MATTERS"
          ============================================ */}
      <section className="a11y-page__why">
        <Container>
          <div className="a11y-page__why-grid">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="a11y-page__section-label">Why Accessibility</span>
                <h2 className="a11y-page__section-title">
                  Inclusion That{' '}
                  <span className="a11y-gradient-text">Protects &amp; Grows</span>
                </h2>
                <p className="a11y-page__section-desc">{data.whyLightSpeed.description}</p>

                <div className="a11y-page__checklist">
                  {complianceChecklist.map((item, i) => (
                    <div key={i} className="a11y-page__check-item">
                      <CheckCircle size={18} className="a11y-page__check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="a11y-page__levels">
                {wcagLevels.map((level) => (
                  <div
                    key={level.level}
                    className={`a11y-page__level-card ${level.active ? 'a11y-page__level-card--active' : ''}`}
                  >
                    <div className="a11y-page__level-badge">{level.level}</div>
                    <div className="a11y-page__level-info">
                      <h4>{level.name}</h4>
                      <p>{level.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          3. SERVICES — "ACCESSIBILITY SUITE"
          ============================================ */}
      <section className="a11y-page__services">
        <Container>
          <div className="a11y-page__services-header">
            <ScrollReveal animation="fade-up">
              <span className="a11y-page__section-label">What We Deliver</span>
              <h2 className="a11y-page__section-title">
                Comprehensive{' '}
                <span className="a11y-gradient-text">Accessibility Suite</span>
              </h2>
              <p className="a11y-page__section-desc">
                End-to-end accessibility services from audit to ongoing compliance monitoring.
              </p>
            </ScrollReveal>
          </div>

          <div className="a11y-page__services-grid">
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || Accessibility;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={index * 80}>
                  <div className="a11y-page__service-card">
                    <div className="a11y-page__service-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="a11y-page__service-title">{service.title}</h3>
                    <p className="a11y-page__service-desc">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. PROCESS — "COMPLIANCE WORKFLOW"
          ============================================ */}
      <section className="a11y-page__process">
        <Container>
          <div className="a11y-page__process-header">
            <ScrollReveal animation="fade-up">
              <span className="a11y-page__section-label">Methodology</span>
              <h2 className="a11y-page__section-title">
                {data.process.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="a11y-gradient-text">{data.process.title.split(' ').slice(-1)}</span>
              </h2>
              <p className="a11y-page__section-desc">{data.process.description}</p>
            </ScrollReveal>
          </div>

          <div className="a11y-page__step-list">
            {data.process.steps.map((step, index) => {
              const Icon = processIcons[step.id] || Keyboard;
              return (
                <ScrollReveal key={step.id} animation="fade-up" delay={index * 80}>
                  <div className="a11y-page__step-card">
                    <div className="a11y-page__step-number">0{step.number}</div>
                    <div>
                      <h3 className="a11y-page__step-title">{step.title}</h3>
                      <p className="a11y-page__step-desc">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          5. STATS — "IMPACT METRICS"
          ============================================ */}
      <section className="a11y-page__stats">
        <Container>
          <div className="a11y-page__stats-header">
            <ScrollReveal animation="fade-up">
              <span className="a11y-page__section-label">Proven Impact</span>
              <h2 className="a11y-page__section-title">
                Accessibility{' '}
                <span className="a11y-gradient-text">Delivers Results</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="a11y-page__stats-grid">
            {resultStats.map((stat, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="a11y-page__stat-card">
                  <div className="a11y-page__stat-value">{stat.value}</div>
                  <div className="a11y-page__stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
          subtitle="Build an inclusive web experience with these complementary services"
          services={data.relatedServices}
        />
      )}
      <ServiceTestimonial
        serviceSlug="accessibility"
        subtitle="See how we helped clients achieve full WCAG compliance"
      />
      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Comprehensive WCAG 2.1 AA/AAA audit',
          'Prioritised remediation roadmap',
          'Assistive technology testing',
          'Ongoing compliance monitoring',
          'Legal risk reduction',
        ]}
      />
    </>
  );
}