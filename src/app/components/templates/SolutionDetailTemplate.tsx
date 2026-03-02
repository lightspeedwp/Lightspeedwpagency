/**
 * Solution Detail Template — Funky Neon Redesign
 *
 * WordPress template: templates/page-solution-detail.html
 * 100% CSS variables — no Tailwind.
 * BEM naming: .solution-detail-*
 *
 * Migration notes:
 *  - `useNavigation()` → declarative `<Link>` from react-router
 *  - Added neon mesh hero with orb glows + badge
 *  - `CTASection` → `FunkyCTA`
 *  - Related solutions use `<Link>` navigation
 *
 * @see /src/styles/templates/solution-detail.css
 */

import '../../../styles/templates/solution-detail.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Check, ArrowRight, LucideIcon, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
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
  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: solution.title },
        ]}
      />

      {/* ============================================
          HERO — Neon Mesh
          ============================================ */}
      <section className="solution-detail__hero">
        {/* Decorative layers */}
        <div className="solution-detail__hero-mesh" aria-hidden="true" />
        <div className="solution-detail__hero-orb solution-detail__hero-orb--1" aria-hidden="true" />
        <div className="solution-detail__hero-orb solution-detail__hero-orb--2" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__hero-inner">
              {/* Neon badge */}
              <div className="solution-detail__hero-badge">
                <Sparkles size={14} className="solution-detail__badge-pulse" />
                <span>{solution.category}</span>
              </div>

              <h1 className="solution-detail__hero-title">
                {solution.title}
              </h1>

              <p className="solution-detail__hero-tagline">
                {solution.tagline}
              </p>

              <div className="solution-detail__hero-actions">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  className="neon-hover"
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
                  className="neon-hover"
                  aria-label="Learn more about this solution"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Overview Section */}
      <Section spacing="xl" className="solution-detail__overview-section">
        <Container>
          <div className="solution-detail__overview-grid">
            {/* Main Description */}
            <ScrollReveal animation="fade-right">
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
                <CheckList items={solution.benefits} />
              </div>
            </ScrollReveal>

            {/* Pricing Sidebar */}
            <ScrollReveal animation="fade-left" delay={200}>
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
                    variant="default"
                    size="md"
                    page="contact"
                    className="neon-hover"
                    aria-label="Get started with this solution"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section spacing="xl" className="solution-detail__features-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">
                Features &amp; Capabilities
              </h2>
              <p className="solution-detail__section-desc">
                Everything you need to succeed with {solution.title}.
              </p>
            </div>
          </ScrollReveal>

          <FeatureList 
            items={solution.features}
            columns={3}
            variant="glass"
            iconStyle="rounded"
          />
        </Container>
      </Section>

      {/* Use Cases */}
      <Section spacing="xl" className="solution-detail__usecases-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">
                Perfect For
              </h2>
              <p className="solution-detail__section-desc">
                See how {solution.title} can transform different types of projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="solution-detail__features-grid">
            {solution.useCases.map((useCase, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="solution-detail__usecase-card">
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
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Specifications */}
      <Section spacing="xl" className="solution-detail__specs-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">
                Technical Specifications
              </h2>
            </div>
          </ScrollReveal>

          <div className="solution-detail__specs-grid">
            {/* Technology Stack */}
            <ScrollReveal animation="fade-up" delay={0}>
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
            </ScrollReveal>

            {/* Requirements */}
            <ScrollReveal animation="fade-up" delay={100}>
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
            </ScrollReveal>

            {/* Support */}
            <ScrollReveal animation="fade-up" delay={200}>
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
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Related Solutions — <Link> navigation */}
      {solution.relatedSolutions.length > 0 && (
        <Section spacing="xl" className="solution-detail__related-section">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="solution-detail__section-header">
                <h2 className="solution-detail__section-heading">
                  Related Solutions
                </h2>
              </div>
            </ScrollReveal>

            <div className="solution-detail__specs-grid">
              {solution.relatedSolutions.slice(0, 3).map((related, index) => (
                <ScrollReveal key={related.id} animation="fade-up" delay={index * 100}>
                  <Link
                    to={slugToPath(`solution-${related.slug}`) || `/solutions/${related.slug}`}
                    className="solution-detail__related-card"
                    aria-label={`Learn more about ${related.title}`}
                  >
                    <h3 className="solution-detail__feature-title">
                      {related.title}
                    </h3>

                    <p className="solution-detail__feature-desc">
                      {related.excerpt}
                    </p>

                    <span className="solution-detail__related-link">
                      Learn More
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* TestimonialGrid — funky variant */}
      <Section spacing="xl">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">
                What Our Clients Say
              </h2>
              <p className="solution-detail__section-desc">
                Hear from satisfied clients about their experience with {solution.title}.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <TestimonialGrid
              testimonials={testimonials.slice(0, 3)}
              variant="funky"
              columns={3}
              showRating={true}
              showAvatar={true}
            />
          </ScrollReveal>
        </Container>
      </Section>

      {/* SocialProof — funky variant */}
      <SocialProof
        logos={clientLogos.slice(0, 8)}
        title="Trusted by Leading Brands"
        description={`Join the ranks of satisfied clients using ${solution.title}.`}
        variant="funky"
      />

      {/* FAQSection */}
      <ScrollReveal animation="fade-up">
        <FAQSection
          faqs={servicesFAQs.slice(0, 6)}
          title="Frequently Asked Questions"
          description={`Find answers to common questions about ${solution.title}.`}
          variant="muted"
        />
      </ScrollReveal>

      {/* CTA Section — FunkyCTA */}
      <FunkyCTA
        title="Ready to Get Started?"
        description="Let's discuss how this solution can transform your WordPress project."
        buttonText="Request Demo"
        buttonPage="contact"
        benefits={[
          'Tailored solution architecture',
          'Enterprise-grade scalability',
          'Dedicated implementation team',
          'Comprehensive documentation',
          'Post-launch optimisation',
        ]}
      />
    </>
  );
}