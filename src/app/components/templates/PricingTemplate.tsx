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
  Check,
  X,
  Zap
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
          style={{
            paddingTop: 'var(--spacing-4)',
            paddingBottom: 'var(--spacing-4)',
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
            <div className="wp-max-w-6xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--foreground)'
                  }}
                >
                  Website Build Packages
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    maxWidth: '700px',
                    margin: '0 auto'
                  }}
                >
                  One-time investment to build your WordPress website
                </p>
              </div>

              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
                {websitePackages.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={plan.id}
                      style={{
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: plan.popular 
                          ? '2px solid var(--primary)' 
                          : '1px solid var(--border-soft)',
                        padding: 'var(--spacing-8)',
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
                            backgroundColor: 'var(--primary)',
                            color: 'var(--primary-foreground)',
                            padding: '4px 16px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-small)',
                            fontFamily: 'var(--font-secondary)',
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
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 'var(--spacing-4)'
                        }}
                      >
                        <Icon size={24} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-h4)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: 'var(--spacing-2)',
                          color: 'var(--foreground)'
                        }}
                      >
                        {plan.name}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                          marginBottom: 'var(--spacing-4)'
                        }}
                      >
                        {plan.tagline}
                      </p>

                      <div style={{ marginBottom: 'var(--spacing-6)' }}>
                        <div
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-h1)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'var(--primary)',
                            marginBottom: 'var(--spacing-1)'
                          }}
                        >
                          {plan.price.display}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-secondary)',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {plan.price.period}
                        </div>
                      </div>

                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--foreground)',
                          marginBottom: 'var(--spacing-6)',
                          flexGrow: 1
                        }}
                      >
                        {plan.description}
                      </p>

                      <ul style={{ marginBottom: 'var(--spacing-6)' }}>
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
                              <Check size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                            ) : (
                              <X size={20} style={{ color: 'var(--muted-foreground)', flexShrink: 0, marginTop: '2px' }} />
                            )}
                            <span
                              style={{
                                fontFamily: 'var(--font-primary)',
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
                            backgroundColor: 'var(--primary)',
                            color: 'var(--primary-foreground)'
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
            <div className="wp-max-w-6xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--foreground)'
                  }}
                >
                  Support & Maintenance Plans
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    maxWidth: '700px',
                    margin: '0 auto'
                  }}
                >
                  Monthly plans to keep your website secure, fast, and up-to-date
                </p>
              </div>

              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
                {supportPackages.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={plan.id}
                      style={{
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: plan.popular 
                          ? '2px solid var(--primary)' 
                          : '1px solid var(--border-soft)',
                        padding: 'var(--spacing-8)',
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
                            backgroundColor: 'var(--primary)',
                            color: 'var(--primary-foreground)',
                            padding: '4px 16px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-small)',
                            fontFamily: 'var(--font-secondary)',
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
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 'var(--spacing-4)'
                        }}
                      >
                        <Icon size={24} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-h4)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: 'var(--spacing-2)',
                          color: 'var(--foreground)'
                        }}
                      >
                        {plan.name}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                          marginBottom: 'var(--spacing-4)'
                        }}
                      >
                        {plan.tagline}
                      </p>

                      <div style={{ marginBottom: 'var(--spacing-6)' }}>
                        <div
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-h1)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'var(--primary)',
                            marginBottom: 'var(--spacing-1)'
                          }}
                        >
                          {plan.price.display}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-secondary)',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {plan.price.period}
                        </div>
                      </div>

                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--foreground)',
                          marginBottom: 'var(--spacing-6)',
                          flexGrow: 1
                        }}
                      >
                        {plan.description}
                      </p>

                      <ul style={{ marginBottom: 'var(--spacing-6)' }}>
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
                              <Check size={20} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                            ) : (
                              <X size={20} style={{ color: 'var(--muted-foreground)', flexShrink: 0, marginTop: '2px' }} />
                            )}
                            <span
                              style={{
                                fontFamily: 'var(--font-primary)',
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
                            backgroundColor: 'var(--primary)',
                            color: 'var(--primary-foreground)'
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
            <div className="wp-max-w-4xl wp-text-center">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--foreground)'
                }}
              >
                {paymentOptions.title}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  marginBottom: 'var(--spacing-12)'
                }}
              >
                {paymentOptions.description}
              </p>

              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-6)' }}>
                {paymentOptions.options.map((option, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      padding: 'var(--spacing-6)',
                      textAlign: 'center'
                    }}
                  >
                    <Zap size={32} style={{ color: 'var(--primary)', margin: '0 auto var(--spacing-4)' }} />
                    <h3
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-h5)',
                        fontWeight: 'var(--font-weight-bold)',
                        marginBottom: 'var(--spacing-2)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {option.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        marginBottom: 'var(--spacing-3)'
                      }}
                    >
                      {option.description}
                    </p>
                    <div
                      style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-small)',
                        color: 'var(--primary)',
                        fontWeight: 'var(--font-weight-semibold)',
                        marginBottom: 'var(--spacing-2)'
                      }}
                    >
                      {option.discount}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-secondary)',
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