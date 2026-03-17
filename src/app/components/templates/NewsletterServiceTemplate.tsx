/**
 * Newsletter Service Template
 * Route: /services/newsletter
 * Parent: /services/content
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { Envelope, Users, TrendUp, Calendar, ChartBar, Trophy } from '@phosphor-icons/react';
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

export const NewsletterServiceTemplate = () => {
  const benefits = [
    { icon: Envelope, title: 'Newsletter strategy and planning', description: 'Content calendar, editorial themes, and subscriber growth strategies.' },
    { icon: Users, title: 'List building and segmentation', description: 'Grow your list and segment by behavior, interests, and engagement level.' },
    { icon: TrendUp, title: 'Content creation and design', description: 'Engaging newsletter content with on-brand design templates.' },
    { icon: Calendar, title: 'Automated email sequences', description: 'Welcome series, nurture campaigns, and re-engagement flows.' },
    { icon: ChartBar, title: 'Performance optimization', description: 'A/B testing, analytics, and continuous improvement based on data.' },
    { icon: Trophy, title: 'Platform setup and management', description: 'Mailchimp, ConvertKit, or custom ESP setup and ongoing management.' }
  ];

  const deliverables = ['Newsletter strategy document', 'Content calendar (6-12 months)', 'Email template design', 'List segmentation setup', 'Automated sequences', 'Monthly analytics reports', 'Subscriber growth plan'];

  const results = [
    { id: 'res-1', value: '45%', label: 'Avg Open Rate' },
    { id: 'res-2', value: '8%', label: 'Avg Click Rate' },
    { id: 'res-3', value: '150%', label: 'List Growth (12 mo)' },
    { id: 'res-4', value: '3-6 mo', label: 'Time to Positive ROI' }
  ];

  return (
    <div data-service="newsletter">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Content', href: '/services/content' },
              { label: 'Newsletter' }
            ]}
          />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Newsletter and email services
            </h1>

            <p className="sub-service-base__hero-description">
              Build a thriving email audience. Expert newsletter strategy, content creation, and optimization
              that turns subscribers into customers and advocates.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Start newsletter strategy
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
              heading="Newsletter services"
              subheading="Everything you need for successful email campaigns."
              capabilities={benefits.map((item, i) => ({
                id: `nl-ben-${i}`,
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
              End-to-end email marketing campaigns that deliver results.
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
              subheading="The value of engaging email content."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Testimonials */}
      <ServiceTestimonial serviceSlug="newsletter" />

      {/* CTA */}
      <FunkyCTA
        title="Ready to grow your list?"
        description="Get a free newsletter strategy consultation."
        buttonText="Request free consultation"
        buttonPage="contact"
        benefits={['Audience growth tactics', 'Content ideation', 'Platform review', 'Actionable roadmaps']}
      />
    </div>
  );
};
