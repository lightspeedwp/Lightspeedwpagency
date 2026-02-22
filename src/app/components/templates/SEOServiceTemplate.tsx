/**
 * SEO Service Template — Funky Redesign v2
 *
 * Theme: "Search Matrix" (Rankings / Data Grid / Growth)
 * Palette: Indigo → Blue → Amber (mapped to category tokens)
 *
 * Sections:
 *  1. Hero          — Data grid BG, floating search elements, metrics dashboard
 *  2. Why SEO       — Audit checklist + ranking visualization
 *  3. Services      — SEO Suite capability cards
 *  4. Process       — Rank & Grow protocol step cards
 *  5. Results       — Growth metrics stat cards
 *  6. FunkyCTA      — Reusable conversion block
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 *  - Zero Tailwind classes
 *  - All styling via /src/styles/templates/page-service-seo.css
 *  - Colors from semantic tokens (auto light / dark)
 *  - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 *
 * @see /guidelines/templates/overview-templates.md
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { seoServiceDetailed } from '../../data/services-detailed';

import {
  Search,
  BarChart,
  LineChart,
  Globe,
  Target,
  ArrowUp,
  CheckCircle,
  Map,
  FileText,
  Settings,
  TrendingUp,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   STATIC DATA
   ───────────────────────────────────────────── */

const serviceIcons: Record<string, typeof Search> = {
  'technical-seo': Settings,
  'on-page-optimization': FileText,
  'content-strategy': Target,
  'local-seo': Map,
  'link-building': Globe,
  'keyword-research': Search,
};

const processIcons: Record<string, typeof Search> = {
  'audit': Search,
  'strategy': Map,
  'optimization': Settings,
  'content': FileText,
  'monitoring': LineChart,
};

const auditChecklist = [
  'Technical SEO & Core Web Vitals',
  'Schema markup & structured data',
  'Mobile-first indexing readiness',
  'Competitor keyword gap analysis',
  'Internal linking optimization',
];

const rankingItems = [
  { rank: '#1', name: 'Your Business', fill: 100, active: true },
  { rank: '#2', name: 'Competitor A', fill: 72, active: false },
  { rank: '#3', name: 'Competitor B', fill: 55, active: false },
  { rank: '#4', name: 'Competitor C', fill: 40, active: false },
];

const resultStats = [
  { value: '+145%', label: 'Organic Traffic' },
  { value: '#1', label: 'Keyword Ranking' },
  { value: '3.5x', label: 'ROI Increase' },
  { value: '98%', label: 'Client Retention' },
];

/* ─────────────────────────────────────────────
   TEMPLATE
   ───────────────────────────────────────────── */

export function SEOServiceTemplate() {
  const data = seoServiceDetailed;

  return (
    <>
      {/* ── Breadcrumbs ── */}
      <section className="wp-block-breadcrumbs-section">
        <BreadcrumbPart
          items={[
            { label: 'Home', page: 'front-page' },
            { label: 'Services', page: 'services' },
            { label: 'SEO' },
          ]}
        />
      </section>

      {/* ============================================
          1. HERO — "SEARCH MATRIX"
          ============================================ */}
      <section className="seo-hero">
        <div className="seo-hero__grid-bg" aria-hidden="true" />

        {/* Floating elements */}
        <div className="seo-hero__float seo-hero__float--1" aria-hidden="true">
          <Search size={18} />
        </div>
        <div className="seo-hero__float seo-hero__float--2" aria-hidden="true">
          <BarChart size={24} />
        </div>
        <div className="seo-hero__float seo-hero__float--3" aria-hidden="true">
          <ArrowUp size={16} />
          <span>Rank #1</span>
        </div>

        <Container>
          <div className="seo-hero__content">
            <ScrollReveal animation="fade-up">
              <span className="seo-hero__badge">
                <Globe size={14} />
                Global Visibility Protocol
              </span>

              <h1 className="seo-hero__title">
                Dominate{' '}
                <span className="seo-gradient-text">Search Results</span>
              </h1>

              <p className="seo-hero__desc">{data.tagline}</p>

              <div className="seo-hero__actions">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  className="seo-hero__btn-primary"
                >
                  Get Free Audit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="portfolio-archive"
                  className="seo-hero__btn-outline"
                >
                  View Case Studies
                </Button>
              </div>
            </ScrollReveal>

            {/* Metrics Dashboard */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="seo-hero__dashboard">
                <div className="seo-hero__dash-header">
                  <div className="seo-hero__dash-dots">
                    <div className="seo-hero__dash-dot seo-hero__dash-dot--red" />
                    <div className="seo-hero__dash-dot seo-hero__dash-dot--yellow" />
                    <div className="seo-hero__dash-dot seo-hero__dash-dot--green" />
                  </div>
                  <span className="seo-hero__dash-label">
                    live_tracking.json
                  </span>
                </div>

                <div className="seo-hero__metrics">
                  {/* Metric 1: Traffic */}
                  <div className="seo-hero__metric">
                    <span className="seo-hero__metric-value seo-hero__metric-value--green">
                      +145%
                    </span>
                    <span className="seo-hero__metric-label">Organic Traffic</span>
                    <div className="seo-hero__bars">
                      <div className="seo-hero__bar" style={{ height: '40%' }} />
                      <div className="seo-hero__bar" style={{ height: '60%' }} />
                      <div className="seo-hero__bar" style={{ height: '50%' }} />
                      <div className="seo-hero__bar" style={{ height: '80%' }} />
                      <div className="seo-hero__bar" style={{ height: '100%' }} />
                    </div>
                  </div>

                  {/* Metric 2: Keyword */}
                  <div className="seo-hero__metric">
                    <span className="seo-hero__metric-value">#1</span>
                    <span className="seo-hero__metric-label">Keyword Ranking</span>
                    <div className="seo-hero__search-pill">
                      <Search size={14} className="seo-hero__search-pill-icon" />
                      <span className="seo-hero__search-pill-text">
                        wordpress agency
                      </span>
                    </div>
                  </div>

                  {/* Metric 3: ROI */}
                  <div className="seo-hero__metric">
                    <span className="seo-hero__metric-value seo-hero__metric-value--green">
                      3.5x
                    </span>
                    <span className="seo-hero__metric-label">ROI Increase</span>
                    <div className="seo-hero__metric-icon">
                      <TrendingUp size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. WHY SEO — "AUDIT REPORT"
          ============================================ */}
      <Section spacing="xl" className="seo-why" background="card">
        <Container>
          <div className="seo-why__grid">
            {/* Left — audit checklist */}
            <ScrollReveal animation="fade-right">
              <div>
                <span className="seo-section-label">Why LightSpeed</span>
                <h2 className="seo-section-heading">
                  Visibility That{' '}
                  <span className="seo-gradient-text">Drives Growth</span>
                </h2>
                <p className="seo-body-text">
                  {data.whyLightSpeed.description}
                </p>

                <div className="seo-why__checklist">
                  {auditChecklist.map((item, i) => (
                    <div key={i} className="seo-why__check-item">
                      <CheckCircle size={18} className="seo-why__check-icon" />
                      <span className="seo-why__check-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — ranking visual */}
            <ScrollReveal animation="fade-left">
              <div className="seo-why__rank-visual">
                <div className="seo-why__rank-list">
                  {rankingItems.map((item, i) => (
                    <div
                      key={i}
                      className={`seo-why__rank-item ${item.active ? 'seo-why__rank-item--active' : ''}`}
                    >
                      <span className="seo-why__rank-number">{item.rank}</span>
                      <span className="seo-why__rank-name">{item.name}</span>
                      <div className="seo-why__rank-bar">
                        <div
                          className="seo-why__rank-bar-fill"
                          style={{ width: `${item.fill}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ============================================
          3. SERVICES — "SEO SUITE"
          ============================================ */}
      <section className="seo-services">
        <Container>
          <div className="seo-services__header">
            <ScrollReveal animation="fade-up">
              <span className="seo-section-label">SEO Services</span>
              <h2 className="seo-section-heading">
                Comprehensive{' '}
                <span className="seo-gradient-text">SEO Suite</span>
              </h2>
              <p className="seo-body-text">
                Full-spectrum search optimization for WordPress and WooCommerce.
              </p>
            </ScrollReveal>
          </div>

          <div className="seo-services__grid">
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || Search;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                  <div className="seo-services__card">
                    <div className="seo-services__card-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="seo-services__card-title">{service.title}</h3>
                    <p className="seo-services__card-desc">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. PROCESS — "RANK & GROW PROTOCOL"
          ============================================ */}
      <section className="seo-process">
        <Container>
          <div className="seo-process__header">
            <ScrollReveal animation="fade-up">
              <span className="seo-section-label">Methodology</span>
              <h2 className="seo-section-heading">
                Rank &amp; Grow{' '}
                <span className="seo-gradient-text">Protocol</span>
              </h2>
              <p className="seo-body-text">
                Our proven methodology for sustainable search growth.
              </p>
            </ScrollReveal>
          </div>

          <div className="seo-process__steps">
            {data.process.steps.map((step, index) => {
              const Icon = processIcons[step.id] || Target;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                  <div className="seo-process__step">
                    <span className="seo-process__step-number">
                      0{step.number}
                    </span>
                    <div className="seo-process__step-icon">
                      <Icon size={20} />
                    </div>
                    <h3 className="seo-process__step-title">{step.title}</h3>
                    <p className="seo-process__step-desc">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          5. RESULTS — "GROWTH METRICS"
          ============================================ */}
      <section className="seo-results">
        <Container>
          <div className="seo-services__header">
            <ScrollReveal animation="fade-up">
              <span className="seo-section-label">Proven Results</span>
              <h2 className="seo-section-heading">
                Numbers That{' '}
                <span className="seo-gradient-text">Speak</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="seo-results__grid">
            {resultStats.map((stat, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="seo-results__card">
                  <div className="seo-results__card-value">{stat.value}</div>
                  <div className="seo-results__card-label">{stat.label}</div>
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
          subtitle="Supercharge your SEO with these complementary services"
          services={data.relatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="seo"
        subtitle="Our SEO service is part of these comprehensive solution packages"
      />
      <ServiceTestimonial
        serviceSlug="seo"
        subtitle="See how our SEO strategies drive measurable organic growth"
      />
      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Comprehensive technical SEO audit',
          'Keyword research & strategy',
          'On-page & off-page optimization',
          'Monthly reports & insights',
          'Core Web Vitals optimization',
        ]}
      />
    </>
  );
}