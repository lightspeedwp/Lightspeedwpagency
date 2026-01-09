/**
 * Service Detail Template
 * 
 * WordPress template: templates/page-service-detail.html
 * 
 * Single detail archetype for individual service pages.
 * Pattern order: Hero → Overview → Features → Process → Benefits → TestimonialGrid → SocialProof → FAQSection → Related Services → CTA
 * 
 * **Conversion Strategy:**
 * - TestimonialGrid: Build trust with service-specific testimonials
 * - SocialProof: Show client logos and credibility
 * - FAQSection: Address common questions about the service
 * - CTASection: Convert interested visitors
 * 
 * **Accessibility:**
 * - Keyboard navigation for all interactive elements
 * - Screen reader friendly service details
 * - ARIA labels for process steps
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/service-detail.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { Button } from '../blocks/design/Buttons';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { useNavigation } from '../../contexts/NavigationContext';
import { Check, ArrowRight, LucideIcon } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { clientLogos } from '../../data/logos';
import { servicesFAQs } from '../../data/faqs';

interface ServiceDetailProps {
  service: {
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
      icon: LucideIcon;
    }>;
    process: Array<{
      step: number;
      title: string;
      description: string;
    }>;
    benefits: string[];
    deliverables: string[];
    timeline: string;
    pricing: string;
    relatedServices: Array<{
      id: string;
      title: string;
      slug: string;
      excerpt: string;
    }>;
  };
}

export function ServiceDetailTemplate({ service }: ServiceDetailProps) {
  const { navigateTo } = useNavigation();

  // Safety check: ensure service is defined
  if (!service) {
    return (
      <>
        <SkipLink />
        <SiteHeader />
        <main id="main-content" role="main">
          <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
            <Container>
              <div className="text-center py-16">
                <p style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)'
                }}>
                  Service not found
                </p>
              </div>
            </Container>
          </Section>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: service.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative gradient orbs */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--accent)',
              opacity: '0.1',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
            aria-hidden="true"
          />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            <div className="max-w-4xl">
              {/* Category badge */}
              <span 
                className="inline-flex items-center px-6 py-3 mb-8"
                style={{
                  backgroundColor: 'var(--primary-foreground)',
                  color: 'var(--primary)',
                  borderRadius: 'var(--radius-xl)',
                  border: 'none',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  opacity: 0.95
                }}
              >
                {service.category}
              </span>

              <h1 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 'var(--line-height-tight)',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                  color: 'var(--primary-foreground)'
                }}
              >
                {service.title}
              </h1>

              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lead)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--primary-foreground)',
                  opacity: 0.95,
                  marginBottom: '32px'
                }}
              >
                {service.excerpt}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary"
                  size="lg"
                  page="contact"
                  aria-label="Get started with this service"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('details');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label="Learn more about this service"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Overview Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Description */}
              <div className="lg:col-span-2">
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '24px',
                    lineHeight: '1.3'
                  }}
                >
                  Overview
                </h2>
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.8',
                    marginBottom: '24px'
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables */}
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginTop: '32px',
                    marginBottom: '16px'
                  }}
                >
                  What's Included
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.deliverables.map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <Check 
                        size={20}
                        style={{ 
                          color: 'var(--primary)',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      />
                      <span 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          color: 'var(--foreground)',
                          lineHeight: '1.6'
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Facts Sidebar */}
              <div>
                <div 
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '32px',
                    position: 'sticky',
                    top: '100px'
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      marginBottom: '24px'
                    }}
                  >
                    Quick Facts
                  </h3>

                  {/* Timeline */}
                  <div className="mb-6">
                    <dt 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--muted-foreground)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '8px'
                      }}
                    >
                      Timeline
                    </dt>
                    <dd 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {service.timeline}
                    </dd>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <dt 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--muted-foreground)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '8px'
                      }}
                    >
                      Investment
                    </dt>
                    <dd 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {service.pricing}
                    </dd>
                  </div>

                  <Button 
                    variant="primary"
                    size="md"
                    page="contact"
                    aria-label="Request a quote for this service"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Features Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}
              >
                Key Features
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Everything you need to succeed with {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '32px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }}
                  >
                    <div 
                      className="mb-6"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-foreground)'
                      }}
                    >
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    
                    <h3 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--card-foreground)',
                        marginBottom: '12px',
                        lineHeight: '1.3'
                      }}
                    >
                      {feature.title}
                    </h3>
                    
                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6',
                        margin: 0
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Process Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}
              >
                Our Process
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                A proven workflow designed to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative'
                  }}
                >
                  {/* Step Number Badge */}
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '16px',
                      boxShadow: 'var(--shadow-primary)'
                    }}
                  >
                    {step.step}
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}
                  >
                    {step.title}
                  </h3>
                  
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)',
                      lineHeight: '1.6',
                      margin: 0
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Connector Arrow (not on last item) */}
                  {index < service.process.length - 1 && (
                    <ArrowRight
                      size={24}
                      style={{
                        color: 'var(--primary)',
                        position: 'absolute',
                        top: '32px',
                        right: '-16px',
                        display: 'none',
                        opacity: 0.3
                      }}
                      className="hidden lg:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '24px',
                  textAlign: 'center',
                  lineHeight: '1.3'
                }}
              >
                Why Choose Us
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {service.benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '24px'
                    }}
                  >
                    <Check 
                      size={24}
                      style={{ 
                        color: 'var(--primary)',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    />
                    <span 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--foreground)',
                        lineHeight: '1.6'
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* TestimonialGrid */}
        <TestimonialGrid
          testimonials={testimonials.filter(testimonial => 
            testimonial.service === service.title || 
            testimonial.serviceType?.includes(service.title)
          ).slice(0, 6)}
          title="What Our Clients Say"
          description={`Hear from satisfied clients about their experience with our ${service.title} service.`}
        />

        {/* SocialProof */}
        <SocialProof
          logos={clientLogos}
          title="Trusted by Leading Brands"
          description={`Join the ranks of satisfied clients who have chosen our ${service.title} service.`}
        />

        {/* FAQSection */}
        <FAQSection
          faqs={servicesFAQs}
          title="Frequently Asked Questions"
          description={`Find answers to common questions about our ${service.title} service.`}
        />

        {/* Related Services */}
        {service.relatedServices.length > 0 && (
          <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
            <Container>
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '48px',
                  textAlign: 'center',
                  lineHeight: '1.3'
                }}
              >
                Related Services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.relatedServices.slice(0, 3).map((related) => (
                  <a
                    key={related.id}
                    href={`#service-${related.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(`service-${related.slug}`);
                    }}
                    style={{
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      display: 'block',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    aria-label={`Learn more about ${related.title}`}
                  >
                    <h3 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h3)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--card-foreground)',
                        marginBottom: '12px',
                        lineHeight: '1.3'
                      }}
                    >
                      {related.title}
                    </h3>
                    
                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6',
                        marginBottom: '16px'
                      }}
                    >
                      {related.excerpt}
                    </p>

                    <span 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </span>
                  </a>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          description="Let's discuss how we can help transform your WordPress project with our expert services."
          primaryButtonText="Start Your Project"
          primaryButtonPage="contact"
          secondaryButtonText="View All Services"
          secondaryButtonPage="services"
          variant="highlighted"
          buttonSize="lg"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}