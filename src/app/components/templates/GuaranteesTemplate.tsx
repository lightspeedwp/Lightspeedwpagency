/**
 * Guarantees Template
 * 
 * WordPress template: templates/page-guarantees.html
 * 
 * Pattern order: Breadcrumbs → Hero → Main Guarantees → How It Works → Trust Signals → FAQs → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { FAQSection } from '../patterns/FAQSection';
import '@/styles/templates/guarantees.css';

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
        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section wp-block-breadcrumbs-section--border">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: guaranteesPageHero.title }
              ]}
            />
        </section>

        {/* Hero Section */}
        <Section 
          className="wp-gradient-green wp-overflow-hidden"
          spacing="xl"
        >
          {/* Gradient orb decorations */}
          <div className="wp-gradient-orb wp-gradient-orb--green wp-gradient-orb--top-right" />

          <Container>
            <div className="wp-max-w-4xl wp-mx-auto wp-text-center wp-relative" style={{ zIndex: 10 }}>
              <div className="wp-inline-block wp-mb-6">
                <Badge variant="outline" style={{ color: 'var(--primary-foreground)', borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'var(--overlay-white-soft)', backdropFilter: 'blur(4px)' }}>
                  <guaranteesPageHero.badge.icon size={14} className="wp-inline wp-mr-2" />
                  {guaranteesPageHero.badge.text}
                </Badge>
              </div>

              <Heading level={1} className="wp-mb-6" style={{ color: 'var(--primary-foreground)' }}>
                Our <span style={{ background: 'var(--gradient-gold)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Guarantees</span>
              </Heading>

              <Paragraph 
                size="large"
                className="wp-mb-4 wp-max-w-3xl wp-mx-auto"
                style={{ color: 'var(--primary-foreground)', opacity: 0.95 }}
              >
                {guaranteesPageHero.tagline}
              </Paragraph>

              <Paragraph
                className="wp-max-w-3xl wp-mx-auto"
                style={{ color: 'var(--primary-foreground)', opacity: 0.85 }}
              >
                {guaranteesPageHero.description}
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Main Guarantees Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl wp-mx-auto">
              <div className="wp-text-center wp-mb-12">
                <Heading level={2} className="wp-mb-4">
                  Our Core Guarantees
                </Heading>
                <Paragraph style={{ color: 'var(--muted-foreground)' }} className="wp-max-w-3xl wp-mx-auto">
                  Every guarantee is backed by real commitments, not empty promises
                </Paragraph>
              </div>

              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
                {mainGuarantees.map((guarantee) => {
                  const Icon = guarantee.icon;
                  return (
                    <div
                      key={guarantee.id}
                      className="guarantees__card"
                    >
                      {guarantee.badge && (
                        <div className="wp-absolute top-4 right-4">
                          <Badge variant="success">
                            {guarantee.badge}
                          </Badge>
                        </div>
                      )}

                      <div className="guarantees__icon-box">
                        <Icon size={28} />
                      </div>

                      <Heading level={3} className="wp-mb-2">
                        {guarantee.title}
                      </Heading>

                      <Paragraph className="wp-mb-4" style={{ color: 'var(--muted-foreground)' }}>
                        {guarantee.description}
                      </Paragraph>

                      <ul className="wp-mt-4" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                        {guarantee.details.map((detail, index) => (
                          <li
                            key={index}
                            className="wp-flex wp-items-start"
                            style={{ gap: 'var(--spacing-3)' }}
                          >
                            <Check size={16} className="wp-mt-1" style={{ flexShrink: 0, color: 'var(--primary)' }} />
                            <span style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-sm)', color: 'var(--foreground)' }}>
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
            <div className="wp-max-w-4xl wp-mx-auto">
              <div className="wp-text-center wp-mb-12">
                <Heading level={2} className="wp-mb-4">
                  {guaranteesProcess.title}
                </Heading>
                <Paragraph style={{ color: 'var(--muted-foreground)' }}>
                  {guaranteesProcess.description}
                </Paragraph>
              </div>

              <div className="wp-grid-2-cols" style={{ gap: 'var(--spacing-8)' }}>
                {guaranteesProcess.steps.map((step) => (
                  <div
                    key={step.number}
                    className="guarantees__card guarantees__card--compact guarantees__card--flex"
                  >
                    <div className="guarantees__step-number">
                      {step.number}
                    </div>

                    <div>
                      <Heading level={3} className="wp-mb-2">
                        {step.title}
                      </Heading>

                      <Paragraph style={{ color: 'var(--muted-foreground)' }}>
                        {step.description}
                      </Paragraph>
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
            <div className="wp-max-w-4xl wp-mx-auto">
              <div className="wp-text-center wp-mb-12">
                <Heading level={2} className="wp-mb-4">
                  {trustSignals.title}
                </Heading>
                <Paragraph style={{ color: 'var(--muted-foreground)' }}>
                  {trustSignals.description}
                </Paragraph>
              </div>

              <div className="wp-grid-4-cols" style={{ gap: 'var(--spacing-6)' }}>
                {trustSignals.signals.map((signal, index) => {
                  const Icon = signal.icon;
                  return (
                    <div
                      key={index}
                      className="guarantees__card guarantees__card--compact wp-text-center"
                    >
                      <Icon size={32} className="guarantees__signal-icon" />
                      
                      <div className="guarantees__signal-stat">
                        {signal.stat}
                      </div>

                      <div className="guarantees__signal-label">
                        {signal.label}
                      </div>

                      <Paragraph size="small" style={{ color: 'var(--muted-foreground)' }}>
                        {signal.description}
                      </Paragraph>
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
    </>
  );
}