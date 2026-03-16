/**
 * Discovery Service — Body Sections
 *
 * Sections 2-5 extracted from DiscoveryServiceTemplate:
 * - Why Discovery (Mission Briefing)
 * - Sub-Services (Signal Nodes)
 * - Process (Signal Trace Timeline)
 * - Deliverables (Mission Package)
 *
 * @split March 16, 2026
 */

import { Container } from '../../common/Container';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import {
  MagnifyingGlass as Search,
  CheckCircle,
} from '@phosphor-icons/react';
import { subServiceIcons, deliverables, processIcons } from '../../../data/discovery-service-template-data';

interface SubService {
  id: string;
  title: string;
  description: string;
}

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface BodySectionsProps {
  whyDescription: string;
  subServices: SubService[];
  process: {
    description: string;
    steps: ProcessStep[];
  };
  heroImageUrl: string;
}

export function DiscoveryBodySections({ whyDescription, subServices, process, heroImageUrl }: BodySectionsProps) {
  return (
    <>
      {/* 2. WHY DISCOVERY — "MISSION BRIEFING" */}
      <section className="service-section service-section--bg-card">
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-right">
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 20%, transparent) 0%, transparent 70%)', zIndex: 0 }} aria-hidden="true" />
                <img
                  src={heroImageUrl}
                  alt="Strategy planning session on a whiteboard"
                  style={{ position: 'relative', zIndex: 1, borderRadius: 'var(--radius-xl)', width: '100%', border: '1px solid var(--border)' }}
                />
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

            <ScrollReveal animation="fade-left">
              <div>
                <span className="service-section__eyebrow" style={{ letterSpacing: 'var(--letter-spacing-widest)' }}>Why Discovery</span>
                <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                  Insight That{' '}<span className="service-hero__gradient-text">Empowers</span>
                </h2>
                <p className="service-section__description service-section__description--left" style={{ marginBottom: 'var(--spacing-8)', lineHeight: 'var(--line-height-comfortable)' }}>{whyDescription}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  {['Data-Driven Decision Making', 'Stakeholder Alignment from Day One', 'Risk Identification & Mitigation', 'Clear Technical Roadmap'].map((item) => (
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

      {/* 3. SUB-SERVICES — "SIGNAL NODES" */}
      <section className="service-section service-section--bg-background service-section--overflow-hidden" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <span className="service-section__eyebrow">Our Discovery Core</span>
              <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                Three Pillars of Strategic&nbsp;<span className="service-hero__gradient-text">Intelligence</span>
              </h2>
              <p className="service-section__description" style={{ lineHeight: 'var(--line-height-comfortable)' }}>
                The three pillars of our strategic foundation — each one calibrated to eliminate guesswork and amplify clarity.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)', position: 'relative', zIndex: 1 }}>
            {subServices.map((service, i) => {
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

      {/* 4. PROCESS — "SIGNAL TRACE" TIMELINE */}
      <section className="service-section service-section--bg-card">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <span className="service-section__eyebrow">The Process</span>
              <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                From Signal to&nbsp;<span className="service-hero__gradient-text">Strategy</span>
              </h2>
              <p className="service-section__description" style={{ lineHeight: 'var(--line-height-comfortable)' }}>
                {process.description || 'How we move from ambiguity to clarity.'}
              </p>
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-8) 0' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '24px', width: '2px', backgroundColor: 'var(--border)', zIndex: 0 }} aria-hidden="true">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, var(--primary), transparent)', opacity: 0.5 }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              {process.steps.map((step, i) => {
                const StepIcon = processIcons[i] || Search;
                return (
                  <ScrollReveal key={step.id} animation="fade-up" delay={i * 100}>
                    <div style={{ display: 'flex', gap: 'var(--spacing-6)', position: 'relative', zIndex: 1 }}>
                      <div style={{ flexShrink: 0, width: '48px', height: '48px', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-lg)', position: 'relative', boxShadow: '0 0 0 8px var(--card)' }}>
                        {step.number}
                      </div>
                      <div style={{ flex: 1, backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-6)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                        <div style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-2)' }}><StepIcon size={24} /></div>
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

      {/* 5. DELIVERABLES — "MISSION PACKAGE" */}
      <section className="service-section service-section--bg-background">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <span className="service-section__eyebrow">Deliverables</span>
              <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                Your Discovery&nbsp;<span className="service-hero__gradient-text">Package</span>
              </h2>
              <p className="service-section__description" style={{ lineHeight: 'var(--line-height-comfortable)' }}>
                Every engagement ends with a comprehensive package of actionable documents — no fluff, pure signal.
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
    </>
  );
}
