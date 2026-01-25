/**
 * Guarantees Template
 * 
 * WordPress template: templates/page-guarantees.html
 * 
 * Pattern order: Breadcrumbs → Hero → Main Guarantees → How It Works → Trust Signals → FAQs → CTA
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Buttons, Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Check } from 'lucide-react';

// Import centralized data
import {
  guaranteesPageHero,
  mainGuarantees,
  guaranteesProcess,
  trustSignals,
  guaranteesFAQs,
  guaranteesCTA
} from '../../data/guarantees-page';

export function GuaranteesTemplate() {
  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: guaranteesPageHero.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decorations */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div
                className="inline-block px-4 py-2 mb-6"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 'var(--font-weight-semibold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                <guaranteesPageHero.badge.icon size={14} style={{ display: 'inline', marginRight: '8px' }} />
                {guaranteesPageHero.badge.text}
              </div>

              <h1
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Our <span style={{ 
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Guarantees</span>
              </h1>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-xl)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '16px',
                  maxWidth: '700px',
                  margin: '0 auto 16px'
                }}
              >
                {guaranteesPageHero.tagline}
              </p>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.85)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                {guaranteesPageHero.description}
              </p>
            </div>
          </Container>
        </Section>

        {/* Main Guarantees Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Our Core Guarantees
                </h2>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    maxWidth: '700px',
                    margin: '0 auto'
                  }}
                >
                  Every guarantee is backed by real commitments, not empty promises
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mainGuarantees.map((guarantee) => {
                  const Icon = guarantee.icon;
                  return (
                    <div
                      key={guarantee.id}
                      style={{
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)',
                        padding: '32px',
                        position: 'relative'
                      }}
                    >
                      {guarantee.badge && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            backgroundColor: '#10b981',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-small)',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 'var(--font-weight-semibold)'
                          }}
                        >
                          {guarantee.badge}
                        </div>
                      )}

                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={28} style={{ color: '#10b981' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h5)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: '8px',
                          color: 'var(--foreground)'
                        }}
                      >
                        {guarantee.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)',
                          marginBottom: '16px'
                        }}
                      >
                        {guarantee.description}
                      </p>

                      <ul style={{ marginTop: '16px' }}>
                        {guarantee.details.map((detail, index) => (
                          <li
                            key={index}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              marginBottom: '8px'
                            }}
                          >
                            <Check size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
                            <span
                              style={{
                                fontFamily: 'Lexend, sans-serif',
                                fontSize: 'var(--text-small)',
                                color: 'var(--foreground)'
                              }}
                            >
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* How It Works Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  {guaranteesProcess.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {guaranteesProcess.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guaranteesProcess.steps.map((step) => (
                  <div
                    key={step.number}
                    style={{
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      padding: '24px',
                      display: 'flex',
                      gap: '16px'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: '#10b981',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-bold)',
                        flexShrink: 0
                      }}
                    >
                      {step.number}
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h5)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: '8px',
                          color: 'var(--foreground)'
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Trust Signals Section */}
        <Section spacing="lg" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  {trustSignals.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {trustSignals.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trustSignals.signals.map((signal, index) => {
                  const Icon = signal.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)',
                        padding: '24px',
                        textAlign: 'center'
                      }}
                    >
                      <Icon size={32} style={{ color: '#10b981', margin: '0 auto 12px' }} />
                      
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h3)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: '#10b981',
                          marginBottom: '4px'
                        }}
                      >
                        {signal.stat}
                      </div>

                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {signal.label}
                      </div>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {signal.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQs Section */}
        <FAQSection faqs={guaranteesFAQs} />

        {/* CTA Section */}
        <CTASection
          title={guaranteesCTA.title}
          description={guaranteesCTA.description}
          primaryButtonText={guaranteesCTA.buttons[0].text}
          primaryButtonPage={guaranteesCTA.buttons[0].page as any}
          secondaryButtonText={guaranteesCTA.buttons[1]?.text}
          secondaryButtonPage={guaranteesCTA.buttons[1]?.page as any}
          gradient="green"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}