/**
 * Figma Prototyping Service Template
 * Route: /services/figma-prototyping
 * Parent: /services/design
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { FigmaLogo, Lightning, Users, Layout, Cursor, Trophy, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';

export const FigmaPrototypingServiceTemplate = () => {
  const benefits = [
    { icon: FigmaLogo, title: 'Interactive prototypes', description: 'Clickable, realistic prototypes that demonstrate the complete user experience.' },
    { icon: Lightning, title: 'Rapid iteration', description: 'Quick iterations and design refinement based on stakeholder feedback.' },
    { icon: Users, title: 'Stakeholder alignment', description: 'Get everyone on the same page before development begins.' },
    { icon: Layout, title: 'Component libraries', description: 'Reusable design systems that scale across your entire product.' },
    { icon: Cursor, title: 'User testing ready', description: 'Prototypes optimized for user testing and feedback collection.' },
    { icon: Trophy, title: 'Developer handoff', description: 'Clean, documented designs with specs ready for development.' }
  ];

  const deliverables = ['Interactive Figma prototype', 'Component library', 'Design system documentation', 'User flow diagrams', 'Responsive breakpoints', 'Developer handoff package', 'Design revision rounds (3)'];

  const results = [
    { id: 'res-1', value: '70%', label: 'Faster Development' },
    { id: 'res-2', value: '50%', label: 'Fewer Design Changes' },
    { id: 'res-3', value: '3x', label: 'Better Stakeholder Alignment' },
    { id: 'res-4', value: '2-4 wks', label: 'Typical Timeline' }
  ];

  return (
    <div data-service="figma-prototyping">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Design', href: '/services/design' },
              { label: 'Figma prototyping' }
            ]}
          />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Figma prototyping services
            </h1>

            <p className="sub-service-base__hero-description">
              See your product before it's built. Interactive Figma prototypes let you test ideas, get feedback,
              and refine the experience before writing a single line of code.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Start prototype project
              </Link>
              <Link to={getPageUrl('design')} className="sub-service-base__cta-button sub-service-base__cta-button--secondary">
                View parent service
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
              heading="Prototyping services"
              subheading="Everything you need to visualize your product."
              capabilities={benefits.map((item, i) => ({
                id: `fp-ben-${i}`,
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
              End-to-end deliverables ready for developer handoff.
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
              heading="Results"
              subheading="The value of interactive prototypes."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Testimonials */}
      <ServiceTestimonial serviceSlug="figma-prototyping" />

      {/* CTA */}
      <FunkyCTA
        title="Ready to prototype?"
        description="Get a free prototyping consultation and project estimate."
        buttonText="Request free consultation"
        buttonPage="contact"
        benefits={['Interactive design validation', 'User testing readiness', 'Clear developer specs', 'Faster time to market']}
      />
    </div>
  );
};
