/**
 * Pricing Template
 * 
 * WordPress template: templates/page-pricing.html
 * 
 * Pattern order: Breadcrumbs → Hero → Website Packages → Support Packages → Feature Comparison → Payment Options → CTA
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
import { CTASection } from '../patterns/CTASection';
import { Hero } from '../patterns/Hero';
import { 
  DollarSign,
  Check
} from 'lucide-react';

// Import centralized data
import {
  pricingPageHero,
  websitePackages,
  supportPackages,
  featureComparison,
  paymentOptions,
  pricingCTA
} from '../../data/pricing-page';

export function PricingTemplate() {
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
                { label: pricingPageHero.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Hero
          variant="page"
          align="center"
          maxWidth="4xl"
          gradient="cyan"
          spacing="xl"
          badge={{
            icon: DollarSign,
            text: pricingPageHero.badge.text
          }}
          title="Simple, Transparent Pricing"
          titleHighlight="Transparent"
          description={pricingPageHero.description}
        />

        {/* Website Packages Section */}
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
                  Website Build Packages
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
                  One-time investment to build your WordPress website
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {websitePackages.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={plan.id}
                      style={{
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: plan.popular 
                          ? '2px solid #0891b2' 
                          : '1px solid var(--border-soft)',
                        padding: '32px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      {plan.popular && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#0891b2',
                            color: 'white',
                            padding: '4px 16px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-small)',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 'var(--font-weight-semibold)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Most Popular
                        </div>
                      )}

                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: 'rgba(8, 145, 178, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={24} style={{ color: '#0891b2' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h4)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: '8px',
                          color: 'var(--foreground)'
                        }}
                      >
                        {plan.name}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                          marginBottom: '16px'
                        }}
                      >
                        {plan.tagline}
                      </p>

                      <div style={{ marginBottom: '24px' }}>
                        <div
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-h1)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: '#0891b2',
                            marginBottom: '4px'
                          }}
                        >
                          {plan.price.display}
                        </div>
                        <div
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {plan.price.period}
                        </div>
                      </div>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--foreground)',
                          marginBottom: '24px',
                          flexGrow: 1
                        }}
                      >
                        {plan.description}
                      </p>

                      <ul style={{ marginBottom: '24px' }}>
                        {plan.features.slice(0, 8).map((feature, index) => (
                          <li
                            key={index}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              marginBottom: '12px'
                            }}
                          >
                            {feature.included ? (
                              <Check size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                            ) : (
                              <X size={20} style={{ color: 'var(--muted-foreground)', flexShrink: 0, marginTop: '2px' }} />
                            )}
                            <span
                              style={{
                                fontFamily: 'Lexend, sans-serif',
                                fontSize: 'var(--text-base)',
                                color: feature.included ? 'var(--foreground)' : 'var(--muted-foreground)'
                              }}
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        page={plan.cta.page as any}
                        size="lg"
                        variant={plan.popular ? 'default' : 'outline'}
                        style={{
                          width: '100%',
                          ...(plan.popular && {
                            backgroundColor: '#0891b2',
                            color: 'white'
                          })
                        }}
                      >
                        {plan.cta.text}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Support Packages Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
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
                  Support & Maintenance Plans
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
                  Monthly plans to keep your website secure, fast, and up-to-date
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {supportPackages.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={plan.id}
                      style={{
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: plan.popular 
                          ? '2px solid #0891b2' 
                          : '1px solid var(--border-soft)',
                        padding: '32px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      {plan.popular && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#0891b2',
                            color: 'white',
                            padding: '4px 16px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-small)',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 'var(--font-weight-semibold)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Most Popular
                        </div>
                      )}

                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: 'rgba(8, 145, 178, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={24} style={{ color: '#0891b2' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h4)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: '8px',
                          color: 'var(--foreground)'
                        }}
                      >
                        {plan.name}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                          marginBottom: '16px'
                        }}
                      >
                        {plan.tagline}
                      </p>

                      <div style={{ marginBottom: '24px' }}>
                        <div
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-h1)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: '#0891b2',
                            marginBottom: '4px'
                          }}
                        >
                          {plan.price.display}
                        </div>
                        <div
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {plan.price.period}
                        </div>
                      </div>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--foreground)',
                          marginBottom: '24px',
                          flexGrow: 1
                        }}
                      >
                        {plan.description}
                      </p>

                      <ul style={{ marginBottom: '24px' }}>
                        {plan.features.slice(0, 8).map((feature, index) => (
                          <li
                            key={index}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              marginBottom: '12px'
                            }}
                          >
                            {feature.included ? (
                              <Check size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                            ) : (
                              <X size={20} style={{ color: 'var(--muted-foreground)', flexShrink: 0, marginTop: '2px' }} />
                            )}
                            <span
                              style={{
                                fontFamily: 'Lexend, sans-serif',
                                fontSize: 'var(--text-base)',
                                color: feature.included ? 'var(--foreground)' : 'var(--muted-foreground)'
                              }}
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        page={plan.cta.page as any}
                        size="lg"
                        variant={plan.popular ? 'default' : 'outline'}
                        style={{
                          width: '100%',
                          ...(plan.popular && {
                            backgroundColor: '#0891b2',
                            color: 'white'
                          })
                        }}
                      >
                        {plan.cta.text}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Payment Options Section */}
        <Section spacing="lg" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                {paymentOptions.title}
              </h2>
              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  marginBottom: '48px'
                }}
              >
                {paymentOptions.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {paymentOptions.options.map((option, index) => (
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
                    <Zap size={32} style={{ color: '#0891b2', margin: '0 auto 16px' }} />
                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h5)',
                        fontWeight: 'var(--font-weight-bold)',
                        marginBottom: '8px',
                        color: 'var(--foreground)'
                      }}
                    >
                      {option.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        marginBottom: '12px'
                      }}
                    >
                      {option.description}
                    </p>
                    <div
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: '#0891b2',
                        fontWeight: 'var(--font-weight-semibold)',
                        marginBottom: '8px'
                      }}
                    >
                      {option.discount}
                    </div>
                    <p
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {option.terms}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title={pricingCTA.title}
          description={pricingCTA.description}
          primaryButtonText={pricingCTA.buttons[0].text}
          primaryButtonPage={pricingCTA.buttons[0].page as any}
          secondaryButtonText={pricingCTA.buttons[1]?.text}
          secondaryButtonPage={pricingCTA.buttons[1]?.page as any}
          gradient="cyan"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}