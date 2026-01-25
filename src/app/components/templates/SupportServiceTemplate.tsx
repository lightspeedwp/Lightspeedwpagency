/**
 * Support Service Template
 * 
 * WordPress template: templates/page-support-service.html
 * 
 * Pattern order: Breadcrumbs → Hero → Overview → Services → Plans → What's Included → Process → Issues → Why Choose Us → FAQs → CTA
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
import { Hero } from '../patterns/Hero';
import { 
  Wrench,
  CheckCircle,
  ArrowRight,
  Check
} from 'lucide-react';
import { useState } from 'react';

// Import centralized data
import {
  supportServiceHero,
  supportServiceOverview,
  supportServices,
  supportPlans,
  supportIncludes,
  supportProcess,
  commonIssues,
  whyChooseUs,
  supportServiceFAQs,
  supportServiceCTA
} from '../../data/support-service-page';

export function SupportServiceTemplate() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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
                { label: 'Services', href: '/services' },
                { label: supportServiceHero.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Hero
          title={supportServiceHero.title}
          titleHighlight={supportServiceHero.titleHighlight}
          subtitle={supportServiceHero.tagline}
          description={supportServiceHero.description}
          badge={{
            icon: Wrench,
            text: supportServiceHero.badge.text
          }}
          buttons={[
            {
              label: 'Get Started Today',
              page: 'contact',
              variant: 'primary'
            },
            {
              label: 'View Plans',
              page: 'pricing',
              variant: 'outline'
            }
          ]}
          variant="service"
          gradient="cyan"
          spacing="xl"
        />

        {/* Overview Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  {supportServiceOverview.title}
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}
                >
                  {supportServiceOverview.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportServiceOverview.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center"
                      style={{
                        padding: '32px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <Icon size={32} style={{ marginBottom: '12px', color: '#0891b2' }} />
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h2)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: '4px',
                          color: 'var(--foreground)'
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          marginBottom: '8px',
                          color: 'var(--foreground)'
                        }}
                      >
                        {stat.label}
                      </div>
                      <p
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.5',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Support Services Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Our Support Services
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Comprehensive WordPress support and maintenance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {supportServices.map((service) => {
                  const Icon = service.icon;
                  const isHovered = hoveredService === service.id;

                  return (
                    <div
                      key={service.id}
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                      style={{
                        padding: '24px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: isHovered ? '1px solid #0891b2' : '1px solid var(--border-soft)',
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: isHovered ? '#0891b2' : 'var(--muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Icon size={24} style={{ color: isHovered ? 'white' : '#0891b2' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {service.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)',
                          marginBottom: '16px'
                        }}
                      >
                        {service.description}
                      </p>

                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '8px'
                            }}
                          >
                            <CheckCircle size={14} style={{ color: 'var(--success)', flexShrink: 0 }} />
                            <span
                              style={{
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: 'var(--text-small)',
                                color: 'var(--foreground)'
                              }}
                            >
                              {feature}
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

        {/* Support Plans Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Support Plans
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Choose the right support level for your website
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {supportPlans.map((plan, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '40px',
                      backgroundColor: plan.recommended ? 'rgba(8, 145, 178, 0.1)' : 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: plan.recommended ? '2px solid #0891b2' : '1px solid var(--border-soft)',
                      position: 'relative'
                    }}
                  >
                    {plan.recommended && (
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
                          fontWeight: 'var(--font-weight-semibold)'
                        }}
                      >
                        Most Popular
                      </div>
                    )}

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h3)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '8px'
                      }}
                    >
                      {plan.name}
                    </h3>

                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h2)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: '#0891b2',
                        marginBottom: '8px'
                      }}
                    >
                      {plan.price}
                    </div>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)',
                        marginBottom: '24px'
                      }}
                    >
                      {plan.description}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '12px'
                          }}
                        >
                          <Check size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />
                          <span
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--foreground)'
                            }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      page="contact" 
                      size="md"
                      variant={plan.recommended ? 'default' : 'outline'}
                      style={{ width: '100%' }}
                    >
                      Get Started
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* What's Included Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  What's Included
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Everything you need for worry-free WordPress maintenance
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {supportIncludes.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="text-center"
                      style={{
                        padding: '20px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: 'rgba(8, 145, 178, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 12px'
                        }}
                      >
                        <Icon size={24} style={{ color: '#0891b2' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '6px'
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.5',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Support Process Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  How Our Support Works
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Simple and efficient support process
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportProcess.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.step}
                      className="text-center"
                      style={{
                        padding: '24px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)',
                        position: 'relative'
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '16px',
                          right: '16px',
                          width: '32px',
                          height: '32px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: '#0891b2',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-bold)'
                        }}
                      >
                        {step.step}
                      </div>

                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'rgba(8, 145, 178, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px'
                        }}
                      >
                        <Icon size={28} style={{ color: '#0891b2' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Common Issues Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Common Issues We Solve
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  We handle all types of WordPress problems
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commonIssues.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '24px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <h3
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'var(--foreground)',
                            marginBottom: '6px'
                          }}
                        >
                          {item.issue}
                        </h3>
                        <p
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-small)',
                            lineHeight: '1.6',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Why Choose Us Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Why Choose Our WordPress Support?
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  What makes our support service different
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '24px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
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
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {reason.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {reason.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about WordPress support"
          faqs={supportServiceFAQs}
          variant="muted"
        />

        {/* CTA Section */}
        <Section 
          spacing="xl" 
          style={{
            background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
            color: 'var(--primary-foreground)'
          }}
        >
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  color: 'var(--primary-foreground)'
                }}
              >
                {supportServiceCTA.title}
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '32px'
                }}
              >
                {supportServiceCTA.description}
              </p>

              <Buttons alignment="center" gap="md">
                <Button 
                  page={supportServiceCTA.buttons[0].page as any} 
                  size="lg"
                  variant="default"
                  style={{
                    backgroundColor: 'var(--primary-foreground)',
                    color: '#0891b2'
                  }}
                >
                  {supportServiceCTA.buttons[0].text}
                </Button>
                <Button 
                  page={supportServiceCTA.buttons[1].page as any} 
                  size="lg"
                  variant="outline"
                  style={{
                    borderColor: 'var(--primary-foreground)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  {supportServiceCTA.buttons[1].text}
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}