/**
 * Solution Detail — Lower Sections
 *
 * Technical specifications, related solutions, testimonials,
 * social proof, FAQ, and CTA sections.
 *
 * @see /src/app/components/templates/SolutionDetailTemplate.tsx
 */

import { Container } from '../../common/Container';
import { Section } from '../../common/Section';
import { TestimonialGrid } from '../../patterns/TestimonialGrid';
import { SocialProof } from '../../patterns/SocialProof';
import { FAQSection } from '../../patterns/FAQSection';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { slugToPath } from '../../../utils/route-map';
import { testimonials } from '../../../data/testimonials';
import { clientLogos } from '../../../data/logos';
import { servicesFAQs } from '../../../data/faqs';

interface SolutionLowerProps {
  solution: {
    title: string;
    useCases?: Array<{
      title: string;
      description: string;
      industries: string[];
    }>;
    specifications?: {
      technology: string[];
      requirements: string[];
      support: string[];
    };
    relatedSolutions?: Array<{
      id: string;
      title: string;
      slug: string;
      excerpt: string;
    }>;
  };
}

export function SolutionDetailLowerSections({ solution }: SolutionLowerProps) {
  const specSections = solution.specifications ? [
    { title: 'Technology', items: solution.specifications.technology },
    { title: 'Requirements', items: solution.specifications.requirements },
    { title: 'Support', items: solution.specifications.support },
  ] : [];

  return (
    <>
      {/* Use Cases */}
      {solution.useCases && solution.useCases.length > 0 && (
      <Section spacing="xl" className="solution-detail__usecases-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">Perfect For</h2>
              <p className="solution-detail__section-desc">
                See how {solution.title} can transform different types of projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="solution-detail__features-grid">
            {solution.useCases.map((useCase, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="solution-detail__usecase-card">
                  <h3 className="solution-detail__usecase-title">{useCase.title}</h3>
                  <p className="solution-detail__usecase-desc">{useCase.description}</p>
                  <div className="solution-detail__usecase-tags">
                    {useCase.industries.map((industry, idx) => (
                      <span key={idx} className="solution-detail__usecase-tag">{industry}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
      )}

      {/* Technical Specifications */}
      {specSections.length > 0 && (
      <Section spacing="xl" className="solution-detail__specs-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">Technical Specifications</h2>
            </div>
          </ScrollReveal>

          <div className="solution-detail__specs-grid">
            {specSections.map((section, sIdx) => (
              <ScrollReveal key={section.title} animation="fade-up" delay={sIdx * 100}>
                <div className="solution-detail__spec-card">
                  <h3 className="solution-detail__spec-title">{section.title}</h3>
                  <ul className="solution-detail__spec-list">
                    {section.items.map((item, index) => (
                      <li key={index} className="solution-detail__spec-item">&bull; {item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
      )}

      {/* Related Solutions */}
      {solution.relatedSolutions && solution.relatedSolutions.length > 0 && (
        <Section spacing="xl" className="solution-detail__related-section">
          <Container>
            <ScrollReveal animation="fade-up">
              <div className="solution-detail__section-header">
                <h2 className="solution-detail__section-heading">Related Solutions</h2>
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
                    <h3 className="solution-detail__feature-title">{related.title}</h3>
                    <p className="solution-detail__feature-desc">{related.excerpt}</p>
                    <span className="solution-detail__related-link">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Testimonials */}
      <Section spacing="xl">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">What our clients say</h2>
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

      {/* Social Proof */}
      <SocialProof
        logos={clientLogos.slice(0, 8)}
        title="Trusted by Leading Brands"
        description={`Join the ranks of satisfied clients using ${solution.title}.`}
        variant="funky"
      />

      {/* FAQ */}
      <ScrollReveal animation="fade-up">
        <FAQSection
          faqs={servicesFAQs.slice(0, 6)}
          title="Frequently asked questions"
          description={`Find answers to common questions about ${solution.title}.`}
          variant="muted"
        />
      </ScrollReveal>

      {/* CTA */}
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