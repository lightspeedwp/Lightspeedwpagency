/**
 * Portfolio Single Template
 * 
 * WordPress template: templates/single-portfolio.html
 * 
 * Pattern order: Breadcrumbs → Hero → Meta → Challenge → Solution → Results → Features → Gallery → Process → Testimonial → Related Projects → CTA
 */

/* Route-level CSS */
import '../../../styles/templates/portfolio-single.css';
import '../../../styles/templates/single-project-optimized.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Hero } from '../patterns/Hero';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { ProjectCaseStudy } from '../patterns/ProjectCaseStudy';
import { TechnologyStack } from '../patterns/TechnologyStack';
import {
  armdCaseStudy,
  armdTechnologyStack,
} from '../../data/portfolio-case-study-enhanced';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Code, Calendar, Clock, Users, CurrencyDollar, ArrowRight } from '@phosphor-icons/react';

// Import centralized data
import {
  projectPageHero,
  projectPageMeta,
  projectPageServices,
  projectPageTechnologies,
  projectPageChallenge,
  projectPageSolution,
  projectPageResults,
  projectPageGallery,
  projectPageTestimonial,
  projectPageRelated,
  projectPageCTA
} from '../../data/portfolio-project-page';

interface PortfolioSingleTemplateProps {
  slug?: string;
}

export function PortfolioSingleTemplate({ slug = 'armd-digital' }: PortfolioSingleTemplateProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work' },
          { label: slug },
        ]}
      />

      {/* Hero Section */}
      <Hero
        variant="page"
        align="left"
        maxWidth="5xl"
        gradient="blue"
        spacing="xl"
        badge={{
          icon: Code,
          text: projectPageHero.badge.text
        }}
        title={projectPageHero.title}
        description={projectPageHero.description}
      />

      {/* Featured Image */}
      <Section spacing="none" className="portfolio-single__featured-image-section">
        <Container>
          <div className="portfolio-single__featured-image-container">
            <div
              className="portfolio-single__featured-image"
              style={{
                backgroundImage: `url(${projectPageHero.featuredImage})`,
              }}
            />
          </div>
        </Container>
      </Section>

      {/* Project Meta */}
      <Section spacing="xl" className="portfolio-single__meta-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="portfolio-single__meta-grid">
              {/* Client */}
              <div>
                <div className="portfolio-single__meta-label">
                  Client
                </div>
                <div className="portfolio-single__meta-value">
                  {projectPageMeta.client}
                </div>
              </div>

              {/* Industry */}
              <div>
                <div className="portfolio-single__meta-label">
                  Industry
                </div>
                <div className="portfolio-single__meta-value">
                  {projectPageMeta.industry}
                </div>
              </div>

              {/* Completed */}
              <div>
                <div className="portfolio-single__meta-label">
                  <Calendar size={12} />
                  Completed
                </div>
                <div className="portfolio-single__meta-value">
                  {projectPageMeta.completedDate}
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="portfolio-single__meta-label">
                  <Clock size={12} />
                  Duration
                </div>
                <div className="portfolio-single__meta-value">
                  {projectPageMeta.duration}
                </div>
              </div>

              {/* Team Size */}
              <div>
                <div className="portfolio-single__meta-label">
                  <Users size={12} />
                  Team
                </div>
                <div className="portfolio-single__meta-value">
                  {projectPageMeta.teamSize}
                </div>
              </div>

              {/* Budget */}
              <div>
                <div className="portfolio-single__meta-label">
                  <CurrencyDollar size={12} />
                  Budget
                </div>
                <div className="portfolio-single__meta-value">
                  {projectPageMeta.budget}
                </div>
              </div>
            </div>

            {/* Services & Technologies */}
            <div className="portfolio-single__services-grid wp-grid-2-cols wp-gap-8">
              {/* Services */}
              <div>
                <Heading level={3} className="portfolio-single__services-title">
                  Services Provided
                </Heading>
                <div className="portfolio-single__tags-container">
                  {projectPageServices.map((service, index) => (
                    <span
                      key={index}
                      className="portfolio-single__service-tag"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <Heading level={3} className="portfolio-single__services-title">
                  Technologies Used
                </Heading>
                <div className="portfolio-single__tags-container">
                  {projectPageTechnologies.map((tech, index) => (
                    <span
                      key={index}
                      className="portfolio-single__tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Study: Challenge / Solution / Results */}
      <ProjectCaseStudy
        challenge={armdCaseStudy.challenge}
        solution={armdCaseStudy.solution}
        results={armdCaseStudy.results}
        variant="glassmorphism"
      />

      {/* Technology Stack */}
      <TechnologyStack
        technologies={armdTechnologyStack}
        title="Technology stack"
        description="Modern technologies and tools used to deliver this project"
        groupByCategory={true}
        variant="badges"
      />

      {/* Results Section (kept for backward compatibility) */}
      <Section spacing="xl" className="portfolio-single__results-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <Heading level={2} className="portfolio-single__section-title">
              Project Results
            </Heading>

            <div className="wp-grid-4-cols wp-gap-8">
              {projectPageResults.map((result, index) => {
                const Icon = result.icon;
                return (
                  <div
                    key={index}
                    className="portfolio-single__result-card"
                  >
                    <Icon size={40} className="portfolio-single__result-icon" />
                    <div className="portfolio-single__result-value">
                      {result.value}
                    </div>
                    <div className="portfolio-single__result-metric">
                      {result.metric}
                    </div>
                    <Paragraph className="portfolio-single__result-desc">
                      {result.description}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section spacing="xl" className="portfolio-single__gallery-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <Heading level={2} className="portfolio-single__section-title">
              Project Gallery
            </Heading>

            <div className="wp-grid-2-cols wp-gap-6">
              {projectPageGallery.map((image, index) => (
                <div
                  key={index}
                  className="portfolio-single__gallery-item"
                >
                  <div
                    className="portfolio-single__gallery-image"
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  <div className="portfolio-single__gallery-caption">
                    <Paragraph>
                      {image.caption}
                    </Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonial Section */}
      <Section 
        spacing="xl" 
        className="portfolio-single__testimonial-section"
      >
        <Container>
          <TestimonialGrid
            testimonials={[{
              quote: projectPageTestimonial.quote,
              author: projectPageTestimonial.author,
              role: projectPageTestimonial.position,
              company: projectPageTestimonial.company,
              avatar: projectPageTestimonial.avatar,
              rating: projectPageTestimonial.rating
            }]}
            columns={1}
            variant="featured"
            showRating
            showAvatar
          />
        </Container>
      </Section>

      {/* Related Projects Section */}
      <Section spacing="xl" className="portfolio-single__related-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <Heading level={2} className="portfolio-single__section-title">
              Related Projects
            </Heading>

            <div className="wp-grid-3-cols wp-gap-8">
              {projectPageRelated.map((project, index) => (
                <div
                  key={index}
                  className="portfolio-single__related-card"
                >
                  <div
                    className="portfolio-single__related-image"
                    style={{
                      backgroundImage: `url(${project.imageUrl})`,
                    }}
                  />
                  <div className="portfolio-single__related-content">
                    <div className="portfolio-single__related-category">
                      {project.category}
                    </div>
                    <Heading level={3} className="portfolio-single__related-title">
                      {project.title}
                    </Heading>
                    <Paragraph className="portfolio-single__related-excerpt">
                      {project.description}
                    </Paragraph>
                    <Paragraph className="wp-text-base wp-text-muted-foreground wp-flex wp-items-center wp-gap-2">
                      View Case Study <ArrowRight size={16} />
                    </Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <FunkyCTA
        title={projectPageCTA.title}
        description={projectPageCTA.description}
        buttonText={projectPageCTA.buttons[0].text}
        buttonPage={projectPageCTA.buttons[0].page}
        benefits={[
          'Custom WordPress solutions tailored to your goals',
          'Full-stack development & design expertise',
          'Ongoing support & maintenance included',
          'Proven track record with 150+ projects'
        ]}
      />
    </>
  );
}