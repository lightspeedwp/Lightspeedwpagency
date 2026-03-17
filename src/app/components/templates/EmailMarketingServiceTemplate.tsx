/**
 * Email Marketing Service Template
 * Route: /services/email-marketing
 * Parent: /services/content
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { Envelope, Crosshair, Lightning, Users, ChartBar, TrendUp } from '@phosphor-icons/react';
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
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';

export const EmailMarketingServiceTemplate = () => {
  const benefits = [
    { icon: Envelope, title: 'Campaign strategy and planning', description: 'Strategic email campaigns aligned with sales cycles and customer journeys.' },
    { icon: Crosshair, title: 'Advanced segmentation', description: 'Behavioral targeting, dynamic content, and personalized messaging at scale.' },
    { icon: Lightning, title: 'Marketing automation', description: 'Sophisticated workflows that nurture leads and drive conversions automatically.' },
    { icon: Users, title: 'List growth and acquisition', description: 'Lead magnets, landing pages, and campaigns designed to grow your list.' },
    { icon: ChartBar, title: 'A/B testing and optimization', description: 'Continuous testing and improvement of subject lines, content, and CTAs.' },
    { icon: TrendUp, title: 'Revenue attribution', description: 'Track email marketing contribution to revenue and customer lifetime value.' }
  ];

  const deliverables = ['Email marketing strategy', 'Campaign calendar', 'Email template library', 'Automation workflows', 'Segmentation strategy', 'Monthly performance reports', 'Conversion optimization roadmap'];

  const results = [
    { id: 'res-1', value: '25%', label: 'Avg Conversion Rate' },
    { id: 'res-2', value: '38:1', label: 'Avg ROI (Email Marketing)' },
    { id: 'res-3', value: '200%', label: 'Revenue Growth (12 mo)' },
    { id: 'res-4', value: '50%', label: 'Reduction in Manual Work' }
  ];

  return (
    <div data-service="email-marketing">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Content', href: '/services/content' },
              { label: 'Email marketing' }
            ]}
          />
          
          <JourneyPhaseIndicator currentPhase="grow" currentServicePage="email-marketing" />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Email marketing services
            </h1>

            <p className="sub-service-base__hero-description">
              Turn email into your highest-ROI channel. Strategic campaigns, advanced automation, and continuous
              optimization that consistently drives revenue and customer loyalty.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Get email marketing plan
              </Link>
              <Link to={getPageUrl('content')} className="sub-service-base__cta-button sub-service-base__cta-button--secondary">
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
              heading="Email marketing services"
              subheading="Comprehensive email marketing strategies that convert."
              capabilities={benefits.map((item, i) => ({
                id: `em-ben-${i}`,
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
              End-to-end management from templates to automated flows.
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
              subheading="The ROI of targeted email campaigns."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Testimonials */}
      <ServiceTestimonial serviceSlug="email-marketing" />

      {/* CTA */}
      <FunkyCTA
        title="Ready for email marketing ROI?"
        description="Get a free email marketing audit and strategy session."
        buttonText="Request free audit"
        buttonPage="contact"
        benefits={['Account structure review', 'Deliverability check', 'Automation recommendations', 'Conversion path analysis']}
      />
    </div>
  );
};
