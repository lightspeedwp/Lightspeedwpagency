/**
 * Content Creation Service Template
 * Route: /services/content/creation
 * Parent: /services/content
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { PenNib, BookOpen, FileText, Newspaper, Trophy, Users } from '@phosphor-icons/react';
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
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';

export const ContentCreationServiceTemplate = () => {
  const benefits = [
    { icon: PenNib, title: 'Blog posts and articles', description: 'Engaging, SEO-optimised long-form content that establishes authority and drives organic traffic.' },
    { icon: BookOpen, title: 'Case studies and whitepapers', description: 'In-depth content showcasing your expertise, methodology, and client results.' },
    { icon: FileText, title: 'Landing page copy', description: 'Conversion-focused copy for service pages, product pages, and campaign landing pages.' },
    { icon: Newspaper, title: 'Social media content', description: 'Platform-specific content calendars with engaging posts, graphics direction, and hashtag strategy.' },
    { icon: Trophy, title: 'Email newsletter content', description: 'Regular newsletter content that nurtures leads and keeps your audience engaged.' },
    { icon: Users, title: 'Thought leadership', description: 'Executive bylines, opinion pieces, and industry commentary that positions your brand as a leader.' },
  ];

  const deliverables = [
    'Monthly blog content (4-8 posts)',
    'Quarterly case studies',
    'Landing page copy packages',
    'Social media content calendar',
    'Email newsletter templates',
    'Brand voice documentation',
    'Content performance reports',
  ];

  const results = [
    { id: 'res-1', value: '300%', label: 'More Organic Traffic' },
    { id: 'res-2', value: '5x', label: 'Lead Generation Lift' },
    { id: 'res-3', value: '85%', label: 'Higher Engagement' },
    { id: 'res-4', value: '2-4 wks', label: 'First Delivery' },
  ];

  return (
    <div data-service="content-creation">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Content', href: '/services/content' },
              { label: 'Content creation' },
            ]}
          />
          
          <JourneyPhaseIndicator currentPhase="create" currentServicePage="content-creation" />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Content creation services
            </h1>

            <p className="sub-service-base__hero-description">
              Professional content production that drives traffic, builds authority, and converts
              visitors into customers. From blog posts to case studies, we create content that works.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Start creating
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
              heading="What we create"
              subheading="Professional content across every format your business needs."
              capabilities={benefits.map((item, i) => ({
                id: `cc-ben-${i}`,
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
              Tailored packages that scale with your marketing needs.
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
              subheading="Measurable outcomes from our content creation programmes."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Testimonials */}
      <ServiceTestimonial serviceSlug="content-creation" />

      {/* CTA */}
      <FunkyCTA
        title="Ready to create content that works?"
        description="Let us build a content engine that drives sustainable growth for your business."
        buttonText="Get started"
        buttonPage="contact"
        benefits={['Professional writers', 'SEO-first approach', 'Dedicated editors', 'Scaleable production']}
      />
    </div>
  );
};
