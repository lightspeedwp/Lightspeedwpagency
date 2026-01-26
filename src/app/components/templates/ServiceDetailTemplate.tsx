/**
 * Service Detail Template
 * 
 * WordPress template: templates/page-service-detail.html
 * 
 * Pattern order: Breadcrumbs → Hero → Overview → Features → Process → Sub-Services → Why Choose → Benefits → Related Services → FAQs → CTA
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
  ArrowRight,
  Award,
  Users,
  Clock,
  Target
} from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';

// Import centralized data
import {
  servicePageHero,
  servicePageOverview,
  servicePageFeatures,
  servicePageProcess,
  servicePageSubServices,
  servicePageWhyChoose,
  servicePageBenefits,
  servicePageDeliverables,
  servicePagePricing,
  servicePageRelated,
  servicePageFAQs,
  servicePageCTA
} from '../../data/service-page';

interface ServiceDetailTemplateProps {
  slug?: string;
}

export function ServiceDetailTemplate({ slug = 'wordpress-development' }: ServiceDetailTemplateProps) {
  const { navigateTo } = useNavigation();

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
                { label: 'Services', href: '/services' },
                { label: servicePageHero.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decorations */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '384px',
              height: '384px',
              borderRadius: '9999px',
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="wp-max-w-4xl" style={{ margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
              <div
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  marginBottom: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                <Code size={14} style={{ display: 'inline', marginRight: '8px' }} />
                {servicePageHero.badge.text}
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Expert <span style={{ 
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>WordPress</span> Development Services
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-xl)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '16px',
                  maxWidth: '700px',
                  margin: '0 auto 16px'
                }}
              >
                {servicePageHero.tagline}
              </p>

              <p className="wp-block-service-hero__description">
                {servicePageHero.description}
              </p>

              <Buttons alignment="center" gap="md">
                <Button 
                  page="contact" 
                  size="lg"
                  variant="default"
                  style={{
                    backgroundColor: 'var(--primary-foreground)',
                    color: 'var(--primary)'
                  }}
                >
                  Get a Quote
                </Button>
                <Button 
                  page="portfolio" 
                  size="lg"
                  variant="outline"
                  style={{
                    borderColor: 'var(--primary-foreground)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  View Our Work
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>

        {/* Overview Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
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
                  {servicePageOverview.title}
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
                  {servicePageOverview.description}
                </p>
              </div>

              {/* Stats */}
              <div className="wp-grid-4-cols" style={{ gap: 'var(--spacing-8)' }}>
                {servicePageOverview.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '32px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)',
                        textAlign: 'center'
                      }}
                    >
                      <Icon size={32} style={{ marginBottom: '12px', color: 'var(--primary)' }} />
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

        {/* Features Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
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
                  What We Build
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Comprehensive WordPress development services for modern websites
                </p>
              </div>

              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
                {servicePageFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '32px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px'
                        }}
                      >
                        <Icon size={28} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Process Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
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
                  Our Development Process
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  From discovery to launch, we follow a proven process
                </p>
              </div>

              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
                {servicePageProcess.map((step, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      position: 'relative'
                    }}
                  >
                    {/* Step Number Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-16px',
                        left: '32px',
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--primary)',
                        color: 'var(--primary-foreground)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-bold)'
                      }}
                    >
                      {step.number}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '8px',
                        marginTop: '8px'
                      }}
                    >
                      {step.title}
                    </h3>

                    {step.duration && (
                      <div
                        style={{
                          fontFamily: 'var(--font-secondary)',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--primary)',
                          marginBottom: '12px'
                        }}
                      >
                        <Clock size={14} style={{ display: 'inline', marginRight: '6px' }} />
                        {step.duration}
                      </div>
                    )}

                    <p
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Sub-Services Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
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
                  Specialized Services
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Deep expertise in specific WordPress development areas
                </p>
              </div>

              <div className="wp-grid-2-cols" style={{ gap: 'var(--spacing-8)' }}>
                {servicePageSubServices.map((subService, index) => {
                  const Icon = subService.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '40px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '24px'
                        }}
                      >
                        <Icon size={32} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-h3)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '12px'
                        }}
                      >
                        {subService.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)',
                          marginBottom: '20px'
                        }}
                      >
                        {subService.description}
                      </p>

                      {/* Features List */}
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {subService.features.map((feature, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              marginBottom: '12px'
                            }}
                          >
                            <CheckCircle 
                              size={20} 
                              style={{ 
                                color: 'var(--primary)', 
                                flexShrink: 0,
                                marginTop: '2px'
                              }} 
                            />
                            <span
                              style={{
                                fontFamily: 'var(--font-primary)',
                                fontSize: 'var(--text-base)',
                                lineHeight: '1.5',
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

        {/* Why Choose LightSpeed Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
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
                  Why Choose LightSpeed
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  What sets us apart from other WordPress development agencies
                </p>
              </div>

              <div className="wp-grid-2-cols" style={{ gap: 'var(--spacing-8)' }}>
                {servicePageWhyChoose.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '32px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px'
                        }}
                      >
                        <Icon size={28} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {reason.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
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

        {/* Benefits & Deliverables Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <div className="wp-grid-2-cols" style={{ gap: 'var(--spacing-12)' }}>
                {/* Benefits */}
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--foreground)',
                      marginBottom: '24px'
                    }}
                  >
                    Service Benefits
                  </h2>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {servicePageBenefits.map((benefit, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '16px'
                        }}
                      >
                        <CheckCircle 
                          size={20} 
                          style={{ 
                            color: 'var(--primary)', 
                            flexShrink: 0,
                            marginTop: '2px'
                          }} 
                        />
                        <span
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-base)',
                            lineHeight: '1.6',
                            color: 'var(--foreground)'
                          }}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--foreground)',
                      marginBottom: '24px'
                    }}
                  >
                    What You'll Receive
                  </h2>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {servicePageDeliverables.map((deliverable, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          marginBottom: '16px'
                        }}
                      >
                        <CheckCircle 
                          size={20} 
                          style={{ 
                            color: 'var(--primary)', 
                            flexShrink: 0,
                            marginTop: '2px'
                          }} 
                        />
                        <span
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-base)',
                            lineHeight: '1.6',
                            color: 'var(--foreground)'
                          }}
                        >
                          {deliverable}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Services Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
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
                  Related Services
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Complementary services to enhance your WordPress website
                </p>
              </div>

              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
                {servicePageRelated.map((relatedService, index) => (
                  <div
                    key={index}
                    onClick={() => navigateTo(relatedService.page as any)}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '12px'
                      }}
                    >
                      {relatedService.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)',
                        marginBottom: '16px'
                      }}
                    >
                      {relatedService.description}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--primary)'
                      }}
                    >
                      Learn More <ArrowRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about WordPress development"
          faqs={servicePageFAQs}
          variant="muted"
        />

        {/* CTA Section */}
        <CTASection
          title={servicePageCTA.title}
          description={servicePageCTA.description}
          primaryButtonText={servicePageCTA.buttons[0].text}
          primaryButtonPage={servicePageCTA.buttons[0].page as any}
          secondaryButtonText={servicePageCTA.buttons[1].text}
          secondaryButtonPage={servicePageCTA.buttons[1].page as any}
          gradient="blue"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
