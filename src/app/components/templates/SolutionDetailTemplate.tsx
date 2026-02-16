/**
 * Solution Detail Template
 * 
 * WordPress template: templates/page-solution-detail.html
 * 100% CSS variables — no Tailwind.
 * BEM naming: .solution-detail-*
 * 
 * @see /src/styles/templates/solution-detail.css
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { CTASection } from '../patterns/CTASection';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { useNavigation } from '../../contexts/NavigationContext';
import { Check, ArrowRight, LucideIcon } from 'lucide-react';
import '@/styles/templates/solution-detail.css';
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
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: solution.title }
          ]}
        />
      </section>

      {/* Hero Section */}
      <Section 
        spacing="xl"
        className="solution-detail__hero"
      >
        <div 
          className="solution-detail__hero-orb"
          aria-hidden="true"
        />

        <Container style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '896px' }}>
            <span className="solution-detail__category-badge">
              {solution.category}
            </span>

            <h1 className="solution-detail__hero-title">
              {solution.title}
            </h1>

            <p className="solution-detail__hero-tagline">
              {solution.tagline}
            </p>

            <div className="solution-detail__hero-actions">
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
      <Section spacing="xl" className="solution-detail__overview-section">
        <Container>
          <div className="solution-detail__overview-grid">
            {/* Main Description */}
            <div>
              <h2 className="solution-detail__section-title">
                Overview
              </h2>
              <p className="solution-detail__description">
                {solution.description}
              </p>

              {/* Key Benefits */}
              <h3 className="solution-detail__subsection-title">
                Key Benefits
              </h3>
              <ul className="solution-detail__benefits-list">
                {solution.benefits.map((benefit, index) => (
                  <li 
                    key={index}
                    className="solution-detail__benefit-item"
                  >
                    <Check 
                      size={20}
                      className="solution-detail__check-icon"
                    />
                    <span className="solution-detail__benefit-text">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Sidebar */}
            <div>
              <div className="solution-detail__pricing-sidebar">
                <h3 className="solution-detail__sidebar-title">
                  Pricing
                </h3>

                <div className="solution-detail__sidebar-item">
                  <dt className="solution-detail__sidebar-label">
                    Model
                  </dt>
                  <dd className="solution-detail__sidebar-value">
                    {solution.pricing.model}
                  </dd>
                </div>

                <div className="solution-detail__sidebar-item">
                  <dt className="solution-detail__sidebar-label">
                    Starting At
                  </dt>
                  <dd className="solution-detail__price-value">
                    {solution.pricing.starting}
                  </dd>
                </div>

                <div className="solution-detail__sidebar-item">
                  <dt className="solution-detail__sidebar-label">
                    Includes
                  </dt>
                  <dd>
                    <ul className="solution-detail__includes-list">
                      {solution.pricing.includes.map((item, index) => (
                        <li 
                          key={index}
                          className="solution-detail__include-item"
                        >
                          <Check 
                            size={16}
                            className="solution-detail__check-icon"
                          />
                          <span className="solution-detail__include-text">
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
      <Section spacing="xl" className="solution-detail__features-section">
        <Container>
          <div className="solution-detail__section-header">
            <h2 className="solution-detail__section-heading">
              Features &amp; Capabilities
            </h2>
            <p className="solution-detail__section-desc">
              Everything you need to succeed with {solution.title}.
            </p>
          </div>

          <div className="solution-detail__features-grid">
            {solution.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="solution-detail__feature-card"
                >
                  <div className="solution-detail__feature-icon-wrapper">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  
                  <h3 className="solution-detail__feature-title">
                    {feature.title}
                  </h3>
                  
                  <p className="solution-detail__feature-desc">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section spacing="xl" className="solution-detail__usecases-section">
        <Container>
          <div className="solution-detail__section-header">
            <h2 className="solution-detail__section-heading">
              Perfect For
            </h2>
            <p className="solution-detail__section-desc">
              See how {solution.title} can transform different types of projects.
            </p>
          </div>

          <div className="solution-detail__features-grid">
            {solution.useCases.map((useCase, index) => (
              <div
                key={index}
                className="solution-detail__usecase-card"
              >
                <h3 className="solution-detail__usecase-title">
                  {useCase.title}
                </h3>
                
                <p className="solution-detail__usecase-desc">
                  {useCase.description}
                </p>

                <div className="solution-detail__usecase-tags">
                  {useCase.industries.map((industry, idx) => (
                    <span 
                      key={idx}
                      className="solution-detail__usecase-tag"
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
      <Section spacing="xl" className="solution-detail__specs-section">
        <Container>
          <div className="solution-detail__section-header">
            <h2 className="solution-detail__section-heading">
              Technical Specifications
            </h2>
          </div>

          <div className="solution-detail__specs-grid">
            {/* Technology Stack */}
            <div className="solution-detail__spec-card">
              <h3 className="solution-detail__spec-title">
                Technology
              </h3>
              <ul className="solution-detail__spec-list">
                {solution.specifications.technology.map((tech, index) => (
                  <li 
                    key={index}
                    className="solution-detail__spec-item"
                  >
                    &bull; {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="solution-detail__spec-card">
              <h3 className="solution-detail__spec-title">
                Requirements
              </h3>
              <ul className="solution-detail__spec-list">
                {solution.specifications.requirements.map((req, index) => (
                  <li 
                    key={index}
                    className="solution-detail__spec-item"
                  >
                    &bull; {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="solution-detail__spec-card">
              <h3 className="solution-detail__spec-title">
                Support
              </h3>
              <ul className="solution-detail__spec-list">
                {solution.specifications.support.map((sup, index) => (
                  <li 
                    key={index}
                    className="solution-detail__spec-item"
                  >
                    &bull; {sup}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Solutions */}
      {solution.relatedSolutions.length > 0 && (
        <Section spacing="xl" className="solution-detail__related-section">
          <Container>
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">
                Related Solutions
              </h2>
            </div>

            <div className="solution-detail__specs-grid">
              {solution.relatedSolutions.slice(0, 3).map((related) => (
                <a
                  key={related.id}
                  href={`#solution-${related.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`solution-${related.slug}`);
                  }}
                  className="solution-detail__related-card"
                  aria-label={`Learn more about ${related.title}`}
                >
                  <h3 className="solution-detail__feature-title">
                    {related.title}
                  </h3>
                  
                  <p className="solution-detail__feature-desc" style={{ marginBottom: 'var(--spacing-4)' }}>
                    {related.excerpt}
                  </p>

                  <span className="solution-detail__related-link">
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* TestimonialGrid */}
      {testimonials.filter(t => (t as any).solution === solution.title).length > 0 && (
        <TestimonialGrid
          testimonials={testimonials.filter(t => (t as any).solution === solution.title)}
          title="What Our Clients Say"
          description={`Hear from satisfied clients about their experience with ${solution.title}.`}
        />
      )}

      {/* SocialProof */}
      {clientLogos.filter(l => (l as any).solution === solution.title).length > 0 && (
        <SocialProof
          logos={clientLogos.filter(l => (l as any).solution === solution.title)}
          title="Trusted by Leading Brands"
          description={`Join the ranks of satisfied clients using ${solution.title}.`}
        />
      )}

      {/* FAQSection */}
      {servicesFAQs.filter(f => (f as any).solution === solution.title).length > 0 && (
        <FAQSection
          faqs={servicesFAQs.filter(f => (f as any).solution === solution.title)}
          title="Frequently Asked Questions"
          description={`Find answers to common questions about ${solution.title}.`}
        />
      )}

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
    </>
  );
}
