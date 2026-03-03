/**
 * Discovery Service Template — Funky Redesign v2
 *
 * Theme: "Signal Intelligence" (Radar / Sonar / Deep Scan)
 * Palette: Cyan → Indigo → Blue (mapped to category tokens)
 *
 * Sections:
 *  1. Hero          — Radar-pulse rings, scanning animation, glassmorphism panel
 *  2. Why Discovery — Mission Briefing dossier with stat counters
 *  3. Sub-Services  — "Signal Nodes" orbital cards with glow borders
 *  4. Process       — Vertical signal-trace timeline, alternating layout
 *  5. Deliverables  — (NEW) Mission Package icon grid
 *  6. Related       — Minimal 2-col link cards
 *  7. FunkyCTA      — Reusable conversion block
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 *  - Zero Tailwind classes
 *  - All styling via /src/styles/templates/page-service-discovery.css
 *  - Colors from semantic tokens (auto light / dark)
 *  - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 *
 * @see /guidelines/templates/overview-templates.md
 */

import { useState, useEffect } from 'react';
/* Route-level CSS */
import '../../../styles/templates/page-service-discovery.css';
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { discoveryServiceDetailed } from '../../data/services';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { slugToPath } from '../../utils/route-map';
import {
  Search,
  ArrowRight,
  Target,
  ShieldAlert,
  Telescope,
  CheckCircle,
  Radar,
  ScanSearch,
  FileText,
  BarChart3,
  Users,
  Globe,
  Crosshair,
  Zap,
  BookOpen,
  PieChart,
  Lightbulb,
  Award,
  Clock,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   STATIC DATA
   ───────────────────────────────────────────── */

const heroStats = [
  { value: '250+', label: 'Projects Launched', icon: Zap },
  { value: '98%', label: 'Client Satisfaction', icon: Award },
  { value: '12yr', label: 'Industry Experience', icon: Clock },
];

const subServiceIcons: Record<string, typeof Target> = {
  'goal-alignment': Target,
  'risk-mitigation': ShieldAlert,
  'opportunity-spotting': Telescope,
};

const deliverables = [
  { icon: FileText, title: 'Technical Specification', desc: 'Detailed architecture & stack recommendations' },
  { icon: BarChart3, title: 'Competitor Analysis', desc: 'Market landscape & opportunity report' },
  { icon: Users, title: 'User Personas', desc: 'Audience profiles & journey maps' },
  { icon: Globe, title: 'Sitemap & IA', desc: 'Information architecture & navigation structure' },
  { icon: PieChart, title: 'Budget & Timeline', desc: 'Transparent cost breakdown & milestones' },
  { icon: BookOpen, title: 'Strategy Playbook', desc: 'Actionable roadmap to launch day' },
];

const processIcons = [ScanSearch, Users, Crosshair, Lightbulb, Target];

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
    <div className="disc-hero__stat">
      <span className="disc-hero__stat-value">
        {count}{suffix}
      </span>
      <span className="disc-hero__stat-label">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TEMPLATE
   ───────────────────────────────────────────── */

export function DiscoveryServiceTemplate() {
  const data = discoveryServiceDetailed;

  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Discovery & Strategy' },
        ]}
      />

      {/* Journey Phase Indicator */}
      <JourneyPhaseIndicator currentPhase="ignite" currentServicePage="discovery" />

      {/* ============================================
          1. HERO — "RADAR SCAN"
          ============================================ */}
      <section className="disc-hero">
        {/* Background ambient image */}
        <img
          src="https://images.unsplash.com/photo-1687125114692-54f19a0fd438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcmFkYXIlMjBob2xvZ3JhbSUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxNTA5MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="disc-hero__bg"
          aria-hidden="true"
        />

        {/* Radar rings (purely decorative) */}
        <div className="disc-hero__rings" aria-hidden="true">
          <div className="disc-hero__ring disc-hero__ring--1" />
          <div className="disc-hero__ring disc-hero__ring--2" />
          <div className="disc-hero__ring disc-hero__ring--3" />
          <div className="disc-hero__ring disc-hero__ring--4" />
          {/* Sweep arm */}
          <div className="disc-hero__sweep" />
        </div>

        {/* Scan-line overlay */}
        <div className="disc-hero__scanlines" aria-hidden="true" />

        <Container>
          <div className="disc-hero__content">
            <ScrollReveal animation="fade-up">
              <span className="disc-hero__badge">
                <Radar size={14} />
                Strategic Discovery
              </span>

              <h1 className="disc-hero__title">
                We Scan&nbsp;Deep to Build&nbsp;
                <span className="disc-hero__highlight">What Matters</span>
              </h1>

              <p className="disc-hero__desc">{data.tagline}</p>

              <div className="disc-hero__actions">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  className="disc-hero__btn-primary"
                >
                  Start Discovery
                  <ArrowRight size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="portfolio-archive"
                  className="disc-hero__btn-outline"
                >
                  View Case Studies
                </Button>
              </div>
            </ScrollReveal>

            {/* Mini Stat Bar */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="disc-hero__stats">
                {heroStats.map((s) => (
                  <StatCounter key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          2. WHY DISCOVERY — "MISSION BRIEFING"
          ============================================ */}
      <Section spacing="xl" className="disc-why" background="card">
        <Container>
          <div className="disc-why__grid">
            {/* Left — visual card */}
            <ScrollReveal animation="fade-right">
              <div className="disc-why__visual">
                <div className="disc-why__glow" aria-hidden="true" />
                <img
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHdoaXRlYm9hcmQlMjBwbGFubmluZyUyMHdvcmtzaG9wJTIwdGVhbXxlbnwxfHx8fDE3NzE1MDkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Strategy planning session on a whiteboard"
                  className="disc-why__image"
                />
                {/* Floating Intel Card */}
                <div className="disc-why__intel-card">
                  <ScanSearch size={20} />
                  <div>
                    <span className="disc-why__intel-title">Deep Analysis</span>
                    <span className="disc-why__intel-sub">Risk-free project launch</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — copy */}
            <ScrollReveal animation="fade-left">
              <div className="disc-why__copy">
                <span className="disc-section-label">Why Discovery</span>
                <h2 className="disc-section-heading">
                  Insight That{' '}
                  <span className="disc-gradient-text">Empowers</span>
                </h2>
                <p className="disc-body-text">{data.whyLightSpeed.description}</p>

                <ul className="disc-why__checklist">
                  {[
                    'Data-Driven Decision Making',
                    'Stakeholder Alignment from Day One',
                    'Risk Identification & Mitigation',
                    'Clear Technical Roadmap',
                  ].map((item) => (
                    <li key={item} className="disc-why__check-item">
                      <CheckCircle size={18} className="disc-why__check-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ============================================
          3. SUB-SERVICES — "SIGNAL NODES"
          ============================================ */}
      <Section spacing="xl" className="disc-services">
        {/* Dot-matrix background */}
        <div className="disc-services__dots" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="disc-services__header">
              <span className="disc-section-label">Our Discovery Core</span>
              <h2 className="disc-section-heading">
                Three Pillars of Strategic&nbsp;
                <span className="disc-gradient-text">Intelligence</span>
              </h2>
              <p className="disc-body-text disc-max-w-2xl">
                The three pillars of our strategic foundation — each one calibrated
                to eliminate guesswork and amplify clarity.
              </p>
            </div>
          </ScrollReveal>

          <div className="disc-services__nodes">
            {data.subServices.map((service, i) => {
              const Icon = subServiceIcons[service.id] || Search;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={i * 100}>
                  <article className="disc-node">
                    {/* Glow ring */}
                    <div className="disc-node__ring" aria-hidden="true" />
                    <div className="disc-node__icon-wrap">
                      <Icon size={28} />
                    </div>
                    <h3 className="disc-node__title">{service.title}</h3>
                    <p className="disc-node__desc">{service.description}</p>
                    <span className="disc-node__index">0{i + 1}</span>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============================================
          4. PROCESS — "SIGNAL TRACE" TIMELINE
          ============================================ */}
      <Section spacing="xl" className="disc-process" background="card">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="disc-process__header">
              <span className="disc-section-label">The Process</span>
              <h2 className="disc-section-heading">
                From Signal to&nbsp;
                <span className="disc-gradient-text">Strategy</span>
              </h2>
              <p className="disc-body-text disc-max-w-2xl">
                {data.process.description || 'How we move from ambiguity to clarity.'}
              </p>
            </div>
          </ScrollReveal>

          <div className="disc-process__track">
            {/* Vertical connecting line */}
            <div className="disc-process__line" aria-hidden="true" />

            {data.process.steps.map((step, i) => {
              const StepIcon = processIcons[i] || Search;
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal
                  key={step.id}
                  animation={isEven ? 'fade-right' : 'fade-left'}
                  delay={i * 100}
                >
                  <div
                    className={`disc-step ${isEven ? 'disc-step--left' : 'disc-step--right'}`}
                  >
                    {/* Node dot on timeline */}
                    <div className="disc-step__dot">
                      <span className="disc-step__num">{step.number}</span>
                      <div className="disc-step__pulse" aria-hidden="true" />
                    </div>

                    {/* Card */}
                    <div className="disc-step__card">
                      <div className="disc-step__icon">
                        <StepIcon size={22} />
                      </div>
                      <h3 className="disc-step__title">{step.title}</h3>
                      <p className="disc-step__desc">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============================================
          5. DELIVERABLES — "MISSION PACKAGE"
          ============================================ */}
      <Section spacing="xl" className="disc-deliver">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="disc-deliver__header">
              <span className="disc-section-label">Deliverables</span>
              <h2 className="disc-section-heading">
                Your Discovery&nbsp;
                <span className="disc-gradient-text">Package</span>
              </h2>
              <p className="disc-body-text disc-max-w-2xl">
                Every engagement ends with a comprehensive package of
                actionable documents — no fluff, pure signal.
              </p>
            </div>
          </ScrollReveal>

          <div className="disc-deliver__grid">
            {deliverables.map((d, i) => {
              const DIcon = d.icon;
              return (
                <ScrollReveal key={d.title} animation="fade-up" delay={i * 80}>
                  <div className="disc-deliver__card">
                    <div className="disc-deliver__icon">
                      <DIcon size={24} />
                    </div>
                    <h3 className="disc-deliver__title">{d.title}</h3>
                    <p className="disc-deliver__desc">{d.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============================================
          6. RELATED SERVICES
          ============================================ */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <Section spacing="lg" className="disc-related" background="card">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="disc-related__header">
                <span className="disc-section-label">What's Next</span>
                <h2 className="disc-section-heading">Continue the Journey</h2>
              </div>
            </ScrollReveal>

            <div className="disc-related__grid">
              {data.relatedServices.map((rel, i) => (
                <ScrollReveal key={rel.page} animation="fade-up" delay={i * 100}>
                  <Link
                    to={slugToPath(rel.page)}
                    className="disc-related__card"
                  >
                    <h3 className="disc-related__title">
                      {rel.title}
                      <ArrowRight size={16} className="disc-related__arrow" />
                    </h3>
                    <p className="disc-related__desc">{rel.description}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ============================================
          7. FUNKY CTA
          ============================================ */}
      <IncludedInSolutions
        serviceSlug="discovery"
        subtitle="Our discovery service is part of these comprehensive solution packages"
      />
      <ServiceTestimonial
        serviceSlug="discovery"
        subtitle="See how our discovery process set the foundation for project success"
      />
      
      {/* ============================================
          PRICING & TIMELINE
          ============================================ */}
      {servicePricingTimeline.discovery && (
        <ScrollReveal animation="fade-up">
          <section className="discovery-service__pricing-section">
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.discovery.pricing}
                timeline={servicePricingTimeline.discovery.timeline}
                showPhases={true}
                showVariables={true}
              />
            </Container>
          </section>
        </ScrollReveal>
      )}
      
      {/* Related Services in Ignite Phase */}
      <RelatedServicesInPhase 
        currentPhase="ignite"
        currentServicePage="discovery"
      />

      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Detailed technical specification',
          'Clear project timeline & budget',
          'Competitor analysis report',
          'User persona definition',
          'Risk assessment matrix',
        ]}
      />
    </>
  );
}