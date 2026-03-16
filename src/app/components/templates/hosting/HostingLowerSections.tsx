/**
 * Hosting Lower Sections
 *
 * Sections 5-8 extracted from HostingTemplate:
 * - Migration Steps (Data Flow)
 * - Guarantees (SLA Dashboard / Terminal)
 * - Testimonials
 * - FAQ
 *
 * @split March 16, 2026
 */

import { Container } from '../../common/Container';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { FAQSection } from '../../patterns/FAQSection';
import { Shield } from '@phosphor-icons/react';

interface MigrationStep {
  step: number;
  title: string;
  description: string;
}

interface Guarantee {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  avatar: string;
  author: string;
  role: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface HostingLowerSectionsProps {
  migrationSteps: MigrationStep[];
  guarantees: { title: string; guarantees: Guarantee[] };
  testimonials: Testimonial[];
  faqs: FAQ[];
}

export function HostingLowerSections({ migrationSteps, guarantees, testimonials, faqs }: HostingLowerSectionsProps) {
  return (
    <>
      {/* 5. MIGRATION STEPS */}
      <section className="hosting-lab__section hosting-lab__migration hosting-lab__section--data-flow">
        <div className="hosting-lab__data-stream-bottom" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag"><span>Zero-downtime migration</span></div>
              <h2 className="hosting-lab__section-title">Switching is effortless</h2>
              <p className="hosting-lab__section-desc">
                Four simple steps — we handle the heavy lifting so you can sit back and relax.
              </p>
            </div>
          </ScrollReveal>
          <div className="hosting-lab__steps">
            {migrationSteps.map((s, index) => (
              <ScrollReveal key={s.step} animation="fade-right" delay={index * 150}>
                <div className="hosting-lab__step">
                  <div className="hosting-lab__step-number hosting-lab__heartbeat">{s.step}</div>
                  <h3 className="hosting-lab__step-title">{s.title}</h3>
                  <p className="hosting-lab__step-desc">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. GUARANTEES — "SLA Dashboard" */}
      <section className="hosting-lab__section hosting-lab__guarantees">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag">
                <Shield size={12} /><span>Written in code</span>
              </div>
              <h2 className="hosting-lab__section-title">{guarantees.title}</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="hosting-lab__guarantee-card hosting-lab__section--terminal">
              <div className="hosting-lab__terminal-bar">
                <span className="hosting-lab__terminal-dot hosting-lab__terminal-dot--red" />
                <span className="hosting-lab__terminal-dot hosting-lab__terminal-dot--yellow" />
                <span className="hosting-lab__terminal-dot hosting-lab__terminal-dot--green" />
                <span className="hosting-lab__terminal-title">
                  sla-dashboard — lightspeed-wp
                  <span className="hosting-lab__terminal-cursor" aria-hidden="true" />
                </span>
              </div>
              <div className="hosting-lab__guarantee-bar" aria-hidden="true" />
              <div className="hosting-lab__guarantee-grid hosting-lab__guarantee-grid--padded">
                {guarantees.guarantees.map((g, idx) => {
                  const Icon = g.icon;
                  return (
                    <div key={idx} className="hosting-lab__guarantee-item">
                      <div className="hosting-lab__guarantee-icon hosting-lab__shield-activate">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="hosting-lab__guarantee-title">{g.title}</h3>
                        <p className="hosting-lab__guarantee-desc">{g.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="hosting-lab__section hosting-lab__testimonials">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag"><span>Customer voices</span></div>
              <h2 className="hosting-lab__section-title">Trusted by agencies worldwide</h2>
            </div>
          </ScrollReveal>
          <div className="hosting-lab__testimonial-grid">
            {testimonials.map((t, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 150}>
                <div className="hosting-lab__testimonial hosting-lab__card--holographic">
                  <p className="hosting-lab__testimonial-quote">{t.quote}</p>
                  <div className="hosting-lab__testimonial-author">
                    <div className="hosting-lab__testimonial-avatar">{t.avatar}</div>
                    <div>
                      <div className="hosting-lab__testimonial-name">{t.author}</div>
                      <div className="hosting-lab__testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. FAQ */}
      <section className="hosting-lab__section hosting-lab__faq">
        <Container>
          <ScrollReveal animation="fade-up">
            <FAQSection
              faqs={faqs}
              title="Hosting questions answered"
              description="Everything you need to know about our managed WordPress hosting."
            />
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
