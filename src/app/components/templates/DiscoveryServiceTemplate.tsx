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
 * PATTERN COMPONENTS:
 * - ✅ StatsGrid — Hero stats section (3-column layout)
 * - ✅ FunkyCTA — Final conversion section
 * - ✅ ServiceTestimonial — Testimonial section
 * - ✅ ServicePricingTimeline — Pricing & timeline section
 * - ✅ RelatedServicesInPhase — Related services navigation
 *
 * @see /guidelines/templates/overview-templates.md
 * @migrated March 3, 2026 — Migrated inline StatCounter to StatsGrid component
 */

import { useState, useEffect } from 'react';
/* Route-level CSS — optimized version loaded globally via index.css */
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StatsGrid } from '../patterns/StatsGrid';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { 
  discoveryServiceHero,
  discoveryServiceOverview,
  discoveryServiceProcess,
  discoveryServiceDeliverables,
  discoveryServiceCTA
} from '../../data/discovery-service-page';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { slugToPath } from '../../utils/route-map';
import { 
  MagnifyingGlass as Search,
  Users,
  ChartLine as TrendingUp,
  Target,
  Lightbulb,
  FileText,
  Presentation as PresentationChart,
  CheckCircle,
  MapTrifold as Map,
  Compass,
  Binoculars,
  Strategy,
  ArrowRight
} from '@phosphor-icons/react';

/* ─────────────────────────────────────────────
   STATIC DATA
   ───────────────────────────────────────────── */

const heroStats = [
  { value: '250+', label: 'Projects Launched', icon: Search },
  { value: '98%', label: 'Client Satisfaction', icon: CheckCircle },
  { value: '12yr', label: 'Industry Experience', icon: Compass },
];

const subServiceIcons: Record<string, typeof Target> = {
  'goal-alignment': Target,
  'risk-mitigation': Binoculars,
  'opportunity-spotting': Strategy,
};

const deliverables = [
  { icon: FileText, title: 'Technical Specification', desc: 'Detailed architecture & stack recommendations' },
  { icon: PresentationChart, title: 'Competitor Analysis', desc: 'Market landscape & opportunity report' },
  { icon: Users, title: 'User Personas', desc: 'Audience profiles & journey maps' },
  { icon: Map, title: 'Sitemap & IA', desc: 'Information architecture & navigation structure' },
  { icon: TrendingUp, title: 'Budget & Timeline', desc: 'Transparent cost breakdown & milestones' },
  { icon: Lightbulb, title: 'Strategy Playbook', desc: 'Actionable roadmap to launch day' },
];

const processIcons = [Search, Users, Target, Lightbulb, Target];

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-1)' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--primary)', lineHeight: 1 }}>
        {count}{suffix}
      </span>
      <span style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TEMPLATE
   ───────────────────────────────────────────── */

export function DiscoveryServiceTemplate() {
  // Build unified data object from imports
  const data = {
    tagline: discoveryServiceHero.subtitle || "Before you build, know exactly what to build.",
    whyLightSpeed: {
      description: discoveryServiceOverview.description
    },
    subServices: discoveryServiceOverview.benefits?.map((benefit, i) => ({
      id: `benefit-${i}`,
      title: benefit.title,
      description: benefit.description
    })) || [],
    process: {
      description: discoveryServiceProcess.description,
      steps: discoveryServiceProcess.steps.map((step, i) => ({
        id: `step-${i}`,
        number: `${i + 1}`,
        title: step.title,
        description: step.description
      }))
    },
    relatedServices: [],
    cta: {
      title: discoveryServiceCTA.title,
      description: discoveryServiceCTA.description,
      buttonText: discoveryServiceCTA.buttonText,
      buttonPage: "contact" as const
    }
  };

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
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        {/* Background ambient image */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1687125114692-54f19a0fd438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcmFkYXIlMjBob2xvZ3JhbSUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxNTA5MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            aria-hidden="true"
          />
        </div>

        {/* Radar rings (purely decorative) */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', opacity: 0.05, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true">
          <div style={{ position: 'absolute', inset: '10%', border: '1px solid var(--primary)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: '30%', border: '1px solid var(--primary)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: '50%', border: '1px solid var(--primary)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: '70%', border: '1px solid var(--primary)', borderRadius: '50%' }} />
        </div>

        <Container>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal animation="fade-up">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-2)', padding: 'var(--spacing-2) var(--spacing-4)', backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--spacing-6)' }}>
                <Search size={14} />
                Strategic Discovery
              </span>

              <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)', lineHeight: 1.1 }}>
                We Scan&nbsp;Deep to Build&nbsp;
                <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>What Matters</span>
              </h1>

              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 'var(--spacing-10)' }}>{data.tagline}</p>

              <div className="wp-flex wp-justify-center wp-gap-4 wp-flex-wrap wp-mb-16">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                >
                  Start Discovery
                  <ArrowRight size={16} style={{ marginLeft: 'var(--spacing-2)' }} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="portfolio-archive"
                >
                  View Case Studies
                </Button>
              </div>
            </ScrollReveal>

            {/* Mini Stat Bar */}
            <ScrollReveal animation="fade-up" delay={200}>
              <StatsGrid
                stats={heroStats.map((s, i) => ({
                  id: `hero-stat-${i}`,
                  value: s.value,
                  label: s.label
                }))}
                columns={3}
                variant="default"
              />
            </ScrollReveal>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          2. WHY DISCOVERY — "MISSION BRIEFING"
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)' }}>
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            {/* Left — visual card */}
            <ScrollReveal animation="fade-right">
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 20%, transparent) 0%, transparent 70%)', zIndex: 0 }} aria-hidden="true" />
                <img
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHdoaXRlYm9hcmQlMjBwbGFubmluZyUyMHdvcmtzaG9wJTIwdGVhbXxlbnwxfHx8fDE3NzE1MDkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Strategy planning session on a whiteboard"
                  style={{ position: 'relative', zIndex: 1, borderRadius: 'var(--radius-xl)', width: '100%', border: '1px solid var(--border)' }}
                />
                {/* Floating Intel Card */}
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', boxShadow: 'var(--shadow-xl)', zIndex: 2 }}>
                  <div style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', padding: 'var(--spacing-2)', borderRadius: 'var(--radius)' }}>
                    <Search size={20} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--foreground)' }}>Deep Analysis</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>Risk-free project launch</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — copy */}
            <ScrollReveal animation="fade-left">
              <div>
                <span style={{ display: 'inline-block', color: 'var(--primary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-4)' }}>Why Discovery</span>
                <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                  Insight That{' '}
                  <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Empowers</span>
                </h2>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 'var(--spacing-8)' }}>{data.whyLightSpeed.description}</p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  {[
                    'Data-Driven Decision Making',
                    'Stakeholder Alignment from Day One',
                    'Risk Identification & Mitigation',
                    'Clear Technical Roadmap',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-base)', color: 'var(--foreground)' }}>
                      <CheckCircle size={20} color="var(--primary)" weight="fill" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          3. SUB-SERVICES — "SIGNAL NODES"
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)', position: 'relative', overflow: 'hidden' }}>
        {/* Dot-matrix background */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
              <span style={{ display: 'inline-block', color: 'var(--primary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-4)' }}>Our Discovery Core</span>
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                Three Pillars of Strategic&nbsp;
                <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Intelligence</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                The three pillars of our strategic foundation — each one calibrated
                to eliminate guesswork and amplify clarity.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)', position: 'relative', zIndex: 1 }}>
            {data.subServices.map((service, i) => {
              const Icon = subServiceIcons[service.id] || Search;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={i * 100}>
                  <article style={{ position: 'relative', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-8)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform var(--transition-base), box-shadow var(--transition-base)', cursor: 'default' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary) 50%, transparent)'; e.currentTarget.style.boxShadow = '0 12px 30px color-mix(in srgb, var(--primary) 15%, transparent)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, padding: 'var(--spacing-4)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-4xl)', color: 'var(--border)', opacity: 0.5, fontWeight: 'var(--font-weight-bold)', pointerEvents: 'none' }}>0{i + 1}</div>
                    
                    <div style={{ width: '56px', height: '56px', backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
                      <Icon size={28} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h3)', color: 'var(--foreground)', marginBottom: 'var(--spacing-3)' }}>{service.title}</h3>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-base)', color: 'var(--muted-foreground)', lineHeight: 1.6, flex: 1, margin: 0 }}>{service.description}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. PROCESS — "SIGNAL TRACE" TIMELINE
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
              <span style={{ display: 'inline-block', color: 'var(--primary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-4)' }}>The Process</span>
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                From Signal to&nbsp;
                <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Strategy</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                {data.process.description || 'How we move from ambiguity to clarity.'}
              </p>
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-8) 0' }}>
            {/* Vertical connecting line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '24px', width: '2px', backgroundColor: 'var(--border)', zIndex: 0 }} aria-hidden="true">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, var(--primary), transparent)', opacity: 0.5 }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              {data.process.steps.map((step, i) => {
                const StepIcon = processIcons[i] || Search;
                return (
                  <ScrollReveal
                    key={step.id}
                    animation="fade-up"
                    delay={i * 100}
                  >
                    <div style={{ display: 'flex', gap: 'var(--spacing-6)', position: 'relative', zIndex: 1 }}>
                      {/* Node dot on timeline */}
                      <div style={{ flexShrink: 0, width: '48px', height: '48px', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-lg)', position: 'relative', boxShadow: '0 0 0 8px var(--card)' }}>
                        {step.number}
                      </div>

                      {/* Card */}
                      <div style={{ flex: 1, backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-6)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                        <div style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-2)' }}>
                          <StepIcon size={24} />
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-xl)', color: 'var(--foreground)', margin: 0 }}>{step.title}</h3>
                        <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-base)', color: 'var(--muted-foreground)', lineHeight: 1.6, margin: 0 }}>{step.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          5. DELIVERABLES — "MISSION PACKAGE"
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
              <span style={{ display: 'inline-block', color: 'var(--primary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-4)' }}>Deliverables</span>
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                Your Discovery&nbsp;
                <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Package</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                Every engagement ends with a comprehensive package of
                actionable documents — no fluff, pure signal.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
            {deliverables.map((d, i) => {
              const DIcon = d.icon;
              return (
                <ScrollReveal key={d.title} animation="fade-up" delay={i * 80}>
                  <div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-6)', display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-4)', height: '100%', transition: 'border-color var(--transition-base)', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}>
                    <div style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-md)' }}>
                      <DIcon size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--foreground)', margin: '0 0 var(--spacing-1) 0' }}>{d.title}</h3>
                      <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', lineHeight: 1.5, margin: 0 }}>{d.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          6. RELATED SERVICES
          ============================================ */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--card)' }}>
          <Container>
            <ScrollReveal animation="fade-up">
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
                <span style={{ display: 'inline-block', color: 'var(--primary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-4)' }}>What's Next</span>
                <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Continue the Journey</h2>
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
              {data.relatedServices.map((rel, i) => (
                <ScrollReveal key={rel.page} animation="fade-up" delay={i * 100}>
                  <Link
                    to={slugToPath(rel.page)}
                    style={{ display: 'block', padding: 'var(--spacing-6)', backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', textDecoration: 'none', transition: 'all var(--transition-base)', group: 'true' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
                  >
                    <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-lg)', color: 'var(--foreground)', margin: '0 0 var(--spacing-2) 0' }}>
                      {rel.title}
                      <ArrowRight size={16} style={{ color: 'var(--primary)', transition: 'transform var(--transition-base)' }} />
                    </h3>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', margin: 0, lineHeight: 1.5 }}>{rel.description}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
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
          <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
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