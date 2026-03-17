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
 * @bem March 17, 2026 — Migrated ~15 inline style blocks to BEM classes
 */

import '../../../../styles/templates/discovery-body-sections.css';
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
      <section className="service-section service-section--bg-card" aria-label="Why discovery">
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-right">
              <div className="discovery-body__image-wrapper">
                <div className="discovery-body__image-glow" aria-hidden="true" />
                <img
                  src={heroImageUrl}
                  alt="Strategy planning session on a whiteboard"
                  className="discovery-body__image"
                  loading="lazy"
                />
                <div className="discovery-body__floating-badge">
                  <div className="discovery-body__badge-icon">
                    <Search size={20} />
                  </div>
                  <div>
                    <span className="discovery-body__badge-title">Deep analysis</span>
                    <span className="discovery-body__badge-subtitle">Risk-free project launch</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div>
                <span className="service-section__eyebrow">Why Discovery</span>
                <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                  Insight that{' '}<span className="service-hero__gradient-text">empowers</span>
                </h2>
                <p className="service-section__description service-section__description--left" style={{ marginBottom: 'var(--spacing-8)', lineHeight: 'var(--line-height-comfortable)' }}>{whyDescription}</p>
                <ul className="discovery-body__checklist">
                  {['Data-driven decision making', 'Stakeholder alignment from day one', 'Risk identification & mitigation', 'Clear technical roadmap'].map((item) => (
                    <li key={item} className="discovery-body__checklist-item">
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
      <section className="service-section service-section--bg-background service-section--overflow-hidden" style={{ position: 'relative' }} aria-label="Discovery sub-services">
        <div className="discovery-body__dot-pattern" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <span className="service-section__eyebrow">Our Discovery Core</span>
              <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                Three pillars of strategic&nbsp;<span className="service-hero__gradient-text">intelligence</span>
              </h2>
              <p className="service-section__description" style={{ lineHeight: 'var(--line-height-comfortable)' }}>
                The three pillars of our strategic foundation — each one calibrated to eliminate guesswork and amplify clarity.
              </p>
            </div>
          </ScrollReveal>

          <div className="discovery-body__services-grid">
            {subServices.map((service, i) => {
              const Icon = subServiceIcons[service.id] || Search;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={i * 100}>
                  <article className="discovery-body__service-card">
                    <div className="discovery-body__service-number">0{i + 1}</div>
                    <div className="discovery-body__service-icon">
                      <Icon size={28} />
                    </div>
                    <h3 className="discovery-body__service-title">{service.title}</h3>
                    <p className="discovery-body__service-desc">{service.description}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. PROCESS — "SIGNAL TRACE" TIMELINE */}
      <section className="service-section service-section--bg-card" aria-label="Discovery process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <span className="service-section__eyebrow">The process</span>
              <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                From signal to&nbsp;<span className="service-hero__gradient-text">strategy</span>
              </h2>
              <p className="service-section__description" style={{ lineHeight: 'var(--line-height-comfortable)' }}>
                {process.description || 'How we move from ambiguity to clarity.'}
              </p>
            </div>
          </ScrollReveal>

          <div className="discovery-body__timeline">
            <div className="discovery-body__timeline-line" aria-hidden="true">
              <div className="discovery-body__timeline-gradient" />
            </div>
            <div className="discovery-body__timeline-steps">
              {process.steps.map((step, i) => {
                const StepIcon = processIcons[i] || Search;
                return (
                  <ScrollReveal key={step.id} animation="fade-up" delay={i * 100}>
                    <div className="discovery-body__step-row">
                      <div className="discovery-body__step-number">
                        {step.number}
                      </div>
                      <div className="discovery-body__step-card">
                        <div className="discovery-body__step-icon"><StepIcon size={24} /></div>
                        <h3 className="discovery-body__step-title">{step.title}</h3>
                        <p className="discovery-body__step-desc">{step.description}</p>
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
      <section className="service-section service-section--bg-background" aria-label="Discovery deliverables">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <span className="service-section__eyebrow">Deliverables</span>
              <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                Your discovery&nbsp;<span className="service-hero__gradient-text">package</span>
              </h2>
              <p className="service-section__description" style={{ lineHeight: 'var(--line-height-comfortable)' }}>
                Every engagement ends with a comprehensive package of actionable documents — no fluff, pure signal.
              </p>
            </div>
          </ScrollReveal>

          <div className="discovery-body__deliverables-grid">
            {deliverables.map((d, i) => {
              const DIcon = d.icon;
              return (
                <ScrollReveal key={d.title} animation="fade-up" delay={i * 80}>
                  <div className="discovery-body__deliverable-card">
                    <div className="discovery-body__deliverable-icon">
                      <DIcon size={24} />
                    </div>
                    <div>
                      <h3 className="discovery-body__deliverable-title">{d.title}</h3>
                      <p className="discovery-body__deliverable-desc">{d.desc}</p>
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
