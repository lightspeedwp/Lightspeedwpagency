/**
 * Solution Detail Template
 * 
 * WordPress template: templates/page-solution-detail.html
 * 
 * Single detail archetype for individual solution pages.
 * Pattern order: Hero → Overview → Features → Use Cases → PricingTable → FeatureComparison → TestimonialGrid → SocialProof → FAQSection → CTA
 * 
 * **Conversion Strategy:**
 * - PricingTable: Clear pricing for solution packages
 * - FeatureComparison: Help users choose the right plan
 * - TestimonialGrid: Build trust with solution-specific testimonials
 * - SocialProof: Show brands using this solution
 * - FAQSection: Address common questions
 * 
 * **Accessibility:**
 * - Keyboard navigation for all interactive elements
 * - Screen reader friendly solution details
 * - ARIA labels for specification tables
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/solution-detail.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { CTASection } from '../patterns/CTASection';
import { PricingTable } from '../patterns/PricingTable';
import { FeatureComparison } from '../patterns/FeatureComparison';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { useNavigation } from '../../contexts/NavigationContext';
import { Check, ArrowRight, LucideIcon } from 'lucide-react';
import { websitePackages } from '../../data/pricing';
import { testimonials } from '../../data/testimonials';
import { clientLogos } from '../../data/logos';
import { servicesFAQs } from '../../data/faqs';

interface SolutionDetailProps {
  solution: {
    title: string;
    slug: string;
    category: string;
    tagline: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
      icon: LucideIcon;
    }>;
    benefits: string[];
    useCases: Array<{
      title: string;
      description: string;
      industries: string[];
    }>;
    specifications: {
      technology: string[];
      requirements: string[];
      support: string[];
    };
    pricing: {
      model: string;
      starting: string;
      includes: string[];
    };
    relatedSolutions: Array<{
      id: string;
      title: string;
      slug: string;
      excerpt: string;
    }>;
  };
}

export function SolutionDetailTemplate({ solution }: SolutionDetailProps) {
  const { navigateTo } = useNavigation();

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
                { label: 'Solutions', href: '/solutions' },
                { label: solution.title }
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
                {solution.category}
              </span>

              <h1 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 'var(--line-height-tight)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '24px',
                  color: 'var(--primary-foreground)'
                }}
              >
                {solution.title}
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
                {solution.tagline}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary"
                  size="lg"
                  page="contact"
                  aria-label="Request a demo for this solution"
                >
                  Request Demo
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('details');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label="Learn more about this solution"
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
                  {solution.description}
                </p>

                {/* Key Benefits */}
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
                  Key Benefits
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {solution.benefits.map((benefit, index) => (
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
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Sidebar */}
              <div>
                <div 
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '32px',
                    position: 'sticky',
                    top: '100px',
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--card-foreground)',
                      marginBottom: '24px'
                    }}
                  >
                    Pricing
                  </h3>

                  {/* Pricing Model */}
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
                      Model
                    </dt>
                    <dd 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--card-foreground)'
                      }}
                    >
                      {solution.pricing.model}
                    </dd>
                  </div>

                  {/* Starting Price */}
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
                      Starting At
                    </dt>
                    <dd 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h2)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--primary)'
                      }}
                    >
                      {solution.pricing.starting}
                    </dd>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <dt 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--muted-foreground)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '12px'
                      }}
                    >
                      Includes
                    </dt>
                    <dd>
                      <ul className="space-y-2">
                        {solution.pricing.includes.map((item, index) => (
                          <li 
                            key={index}
                            className="flex items-start gap-2"
                          >
                            <Check 
                              size={16}
                              style={{ 
                                color: 'var(--primary)',
                                flexShrink: 0,
                                marginTop: '2px'
                              }}
                            />
                            <span 
                              style={{
                                fontFamily: 'Lexend, sans-serif',
                                fontSize: 'var(--text-small)',
                                color: 'var(--card-foreground)',
                                lineHeight: '1.5'
                              }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>

                  <Button 
                    variant="primary"
                    size="md"
                    page="contact"
                    aria-label="Get started with this solution"
                  >
                    Get Started
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
                Features & Capabilities
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
                Everything you need to succeed with {solution.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solution.features.map((feature, index) => {
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

        {/* Use Cases */}
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
                Perfect For
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
                See how {solution.title} can transform different types of projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solution.useCases.map((useCase, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '32px'
                  }}
                >
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
                    {useCase.title}
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
                    {useCase.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--primary)',
                          backgroundColor: 'var(--muted)',
                          padding: '4px 10px',
                          borderRadius: 'var(--radius)'
                        }}
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Technical Specifications */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
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
              Technical Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Technology Stack */}
              <div 
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--card-foreground)',
                    marginBottom: '16px'
                  }}
                >
                  Technology
                </h3>
                <ul className="space-y-2">
                  {solution.specifications.technology.map((tech, index) => (
                    <li 
                      key={index}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6'
                      }}
                    >
                      • {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div 
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--card-foreground)',
                    marginBottom: '16px'
                  }}
                >
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {solution.specifications.requirements.map((req, index) => (
                    <li 
                      key={index}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6'
                      }}
                    >
                      • {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div 
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--card-foreground)',
                    marginBottom: '16px'
                  }}
                >
                  Support
                </h3>
                <ul className="space-y-2">
                  {solution.specifications.support.map((sup, index) => (
                    <li 
                      key={index}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6'
                      }}
                    >
                      • {sup}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Solutions */}
        {solution.relatedSolutions.length > 0 && (
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
                Related Solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solution.relatedSolutions.slice(0, 3).map((related) => (
                  <a
                    key={related.id}
                    href={`#solution-${related.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(`solution-${related.slug}`);
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

        {/* PricingTable */}
        <PricingTable
          plans={websitePackages}
          title="Choose the Right Plan"
          description="Select the plan that best fits your needs and budget."
        />

        {/* FeatureComparison */}
        <FeatureComparison
          plans={websitePackages}
          title="Compare Plans"
          description="See which features are included in each plan."
        />

        {/* TestimonialGrid */}
        <TestimonialGrid
          testimonials={testimonials.filter(t => t.solution === solution.title)}
          title="What Our Clients Say"
          description="Hear from satisfied clients about their experience with {solution.title}."
        />

        {/* SocialProof */}
        <SocialProof
          logos={clientLogos.filter(l => l.solution === solution.title)}
          title="Trusted by Leading Brands"
          description="Join the ranks of satisfied clients using {solution.title}."
        />

        {/* FAQSection */}
        <FAQSection
          faqs={servicesFAQs.filter(f => f.solution === solution.title)}
          title="Frequently Asked Questions"
          description="Find answers to common questions about {solution.title}."
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          description="Let's discuss how this solution can transform your WordPress project."
          primaryButtonText="Request Demo"
          primaryButtonPage="contact"
          secondaryButtonText="View All Solutions"
          secondaryButtonPage="solutions"
          variant="highlighted"
          buttonSize="lg"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}