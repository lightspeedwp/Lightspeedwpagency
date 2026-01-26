/**
 * Development Service Template
 * 
 * WordPress template: templates/page-development-service.html
 * 
 * Pattern order: Breadcrumbs → Hero → Overview → Services → Technologies → Process → Standards → Packages → Why Choose Us → FAQs → CTA
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
import { Hero } from '../patterns/Hero';
import { 
  Code,
  CheckCircle,
  Check
} from 'lucide-react';
import { useState } from 'react';

// Import centralized data
import {
  developmentServiceHero,
  developmentServiceOverview,
  developmentServices,
  developmentTechnologies,
  developmentProcess,
  developmentStandards,
  developmentPackages,
  whyChooseDevelopment,
  developmentServiceFAQs,
  developmentServiceCTA
} from '../../data/development-service-page';

export function DevelopmentServiceTemplate() {
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
                { label: developmentServiceHero.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Hero
          title={developmentServiceHero.title}
          titleHighlight={developmentServiceHero.titleHighlight}
          subtitle={developmentServiceHero.tagline}
          description={developmentServiceHero.description}
          badge={{
            icon: Code,
            text: developmentServiceHero.badge.text
          }}
          buttons={[
            {
              label: 'Start Your Project',
              page: 'contact',
              variant: 'primary'
            },
            {
              label: 'View Our Work',
              page: 'portfolio',
              variant: 'outline'
            }
          ]}
          variant="service"
          gradient="purple"
          spacing="xl"
        />

        {/* Overview Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  {developmentServiceOverview.title}
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}
                >
                  {developmentServiceOverview.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {developmentServiceOverview.stats.map((stat, index) => {
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
                      <Icon size={32} style={{ marginBottom: '12px', color: '#8b5cf6' }} />
                      <div
                        style={{
                          fontFamily: 'var(--font-primary)',
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
                          fontFamily: 'var(--font-primary)',
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
                          fontFamily: 'var(--font-secondary)',
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

        {/* Development Services Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Our Development Services
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Comprehensive WordPress development solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {developmentServices.map((service) => {
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
                        border: isHovered ? '1px solid #8b5cf6' : '1px solid var(--border-soft)',
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: isHovered ? '#8b5cf6' : 'var(--muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Icon size={24} style={{ color: isHovered ? 'white' : '#8b5cf6' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
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
                          fontFamily: 'var(--font-primary)',
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
                                fontFamily: 'var(--font-secondary)',
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

        {/* Technologies Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Technologies & Tools
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Modern tech stack for professional development
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentTechnologies.map((category, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '16px'
                      }}
                    >
                      {category.category}
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {category.items.map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: 'var(--text-small)',
                            fontFamily: 'var(--font-secondary)',
                            color: '#8b5cf6',
                            backgroundColor: 'rgba(139, 92, 246, 0.1)',
                            padding: '6px 12px',
                            borderRadius: 'var(--radius)',
                            border: '1px solid #8b5cf6'
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Development Process Section */}
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
                  Our Development Process
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  A proven 4-step process for successful projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {developmentProcess.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.step}
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
                          backgroundColor: '#8b5cf6',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-primary)',
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
                          backgroundColor: 'rgba(139, 92, 246, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={28} style={{ color: '#8b5cf6' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
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
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)',
                          marginBottom: '12px'
                        }}
                      >
                        {step.description}
                      </p>

                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {step.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              marginBottom: '6px'
                            }}
                          >
                            <CheckCircle size={12} style={{ color: 'var(--success)', flexShrink: 0 }} />
                            <span
                              style={{
                                fontFamily: 'var(--font-secondary)',
                                fontSize: 'var(--text-small)',
                                color: 'var(--muted-foreground)'
                              }}
                            >
                              {item}
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

        {/* Development Standards Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Our Development Standards
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Professional standards for every project
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {developmentStandards.map((standard, index) => {
                  const Icon = standard.icon;
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
                          backgroundColor: 'rgba(139, 92, 246, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={24} style={{ color: '#8b5cf6' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {standard.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {standard.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Development Packages Section */}
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
                  Development Packages
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Choose the right development package for your needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {developmentPackages.map((pkg, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '40px',
                      backgroundColor: pkg.recommended ? 'rgba(139, 92, 246, 0.1)' : 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: pkg.recommended ? '2px solid #8b5cf6' : '1px solid var(--border-soft)',
                      position: 'relative'
                    }}
                  >
                    {pkg.recommended && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-12px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: '#8b5cf6',
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
                      {pkg.name}
                    </h3>

                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h2)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: '#8b5cf6',
                        marginBottom: '8px'
                      }}
                    >
                      {pkg.price}
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
                      {pkg.description}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                      {pkg.features.map((feature, idx) => (
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
                      variant={pkg.recommended ? 'default' : 'outline'}
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
                  Why Choose Our Development Services?
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  What sets our development apart
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseDevelopment.map((reason, index) => {
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
                          backgroundColor: 'rgba(139, 92, 246, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={24} style={{ color: '#8b5cf6' }} />
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
          description="Common questions about WordPress development"
          faqs={developmentServiceFAQs}
          variant="muted"
        />

        {/* CTA Section */}
        <CTASection
          title={developmentServiceCTA.title}
          description={developmentServiceCTA.description}
          primaryButtonText={developmentServiceCTA.buttons[0].text}
          primaryButtonPage={developmentServiceCTA.buttons[0].page as any}
          secondaryButtonText={developmentServiceCTA.buttons[1]?.text}
          secondaryButtonPage={developmentServiceCTA.buttons[1]?.page as any}
          gradient="purple"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}

export default DevelopmentServiceTemplate;