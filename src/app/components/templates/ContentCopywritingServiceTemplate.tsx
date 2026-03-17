/**
 * Copywriting and UX Writing Service Template
 * Route: /services/content/copywriting
 * Parent: /services/content
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { PencilSimple, TextT, Cursor, Envelope, Megaphone, BookOpen } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export const ContentCopywritingServiceTemplate = () => {
  const benefits = [
    { icon: PencilSimple, title: 'Website copywriting', description: 'Clear, compelling website copy that communicates your value proposition and drives conversions.' },
    { icon: TextT, title: 'UX microcopy', description: 'Button labels, error messages, tooltips, and interface text that guides users effortlessly.' },
    { icon: Cursor, title: 'CTA optimisation', description: 'A/B tested calls-to-action that maximise click-through rates and conversion.' },
    { icon: Envelope, title: 'Email campaigns', description: 'Subject lines, body copy, and sequences that nurture leads through your sales funnel.' },
    { icon: Megaphone, title: 'Ad and campaign copy', description: 'Punchy headlines and persuasive copy for paid search, social ads, and display campaigns.' },
    { icon: BookOpen, title: 'Brand voice and tone', description: 'Develop a distinctive brand voice with guidelines your entire team can follow.' },
  ];

  const deliverables = [
    'Website copy audit and recommendations',
    'Full website copy rewrite',
    'UX writing style guide',
    'Email sequence templates',
    'Ad copy variants for A/B testing',
    'Brand voice documentation',
    'Conversion-focused landing pages',
  ];

  const results = [
    { id: 'res-1', value: '45%', label: 'Higher Conversions' },
    { id: 'res-2', value: '2.5x', label: 'Better Click-Through' },
    { id: 'res-3', value: '60%', label: 'Reduced Bounce Rate' },
    { id: 'res-4', value: '1-3 wks', label: 'Turnaround Time' },
  ];

  return (
    <div data-service="content-copywriting">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Content', href: '/services/content' },
              { label: 'Copywriting and UX writing' },
            ]}
          />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Copywriting services
            </h1>

            <p className="sub-service-base__hero-description">
              Words that work harder. From website headlines to interface microcopy,
              we craft conversion-focused copy that guides users and drives action.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Get copy audit
              </Link>
              <Link to={getPageUrl('content')} className="sub-service-base__cta-button sub-service-base__cta-button--secondary">
                All content services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="sub-service-base__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="What we write"
              subheading="Conversion-focused copywriting across every touchpoint."
              capabilities={benefits.map((item, i) => ({
                id: `cw-ben-${i}`,
                title: item.title,
                description: item.description,
                icon: item.icon as any
              }))}
              columns={3}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="sub-service-base__results">
        <Container>
          <div className="sub-service-base__section-header">
            <h2 className="sub-service-base__section-title">What you get</h2>
            <p className="sub-service-base__section-description">
              Polished, strategic copy ready for implementation.
            </p>
          </div>
          <ScrollReveal animation="fade-up">
            <CheckList items={deliverables} columns={2} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Results */}
      <section className="sub-service-base__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading="Expected results"
              subheading="Measurable improvements from better copy."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Testimonials */}
      <ServiceTestimonial serviceSlug="content-copywriting" />

      {/* CTA */}
      <FunkyCTA
        title="Ready for copy that converts?"
        description="Get a free copy audit and discover how strategic words can transform your conversion rates."
        buttonText="Request copy audit"
        buttonPage="contact"
        benefits={['Actionable feedback', 'Tone of voice analysis', 'Conversion rate recommendations', 'No obligation']}
      />
    </div>
  );
};
