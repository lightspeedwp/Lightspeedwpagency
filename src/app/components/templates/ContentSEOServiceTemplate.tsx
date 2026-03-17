/**
 * SEO Content Service Template
 * Route: /services/content/seo-content
 * Parent: /services/content
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { MagnifyingGlass, TrendUp, FileText, Crosshair, ChartBar, ArrowsClockwise } from '@phosphor-icons/react';
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

export const ContentSEOServiceTemplate = () => {
  const benefits = [
    { icon: MagnifyingGlass, title: 'Keyword-targeted articles', description: 'Research-backed content targeting high-value search terms with genuine user intent.' },
    { icon: TrendUp, title: 'Topic cluster strategy', description: 'Interconnected pillar pages and cluster content that builds topical authority.' },
    { icon: FileText, title: 'Meta and schema writing', description: 'Optimised meta titles, descriptions, and structured data for maximum click-through rates.' },
    { icon: Crosshair, title: 'Search intent matching', description: 'Content aligned to informational, navigational, commercial, and transactional intent.' },
    { icon: ChartBar, title: 'Performance tracking', description: 'Keyword ranking, organic traffic, and conversion metrics with monthly reporting.' },
    { icon: ArrowsClockwise, title: 'Content refresh programme', description: 'Systematic updates to existing content to maintain and improve search rankings.' },
  ];

  const deliverables = [
    'SEO content audit',
    'Keyword opportunity mapping',
    'Topic cluster architecture',
    'Monthly SEO articles (4-8)',
    'Meta data optimisation',
    'Internal linking strategy',
    'Monthly ranking reports',
  ];

  const results = [
    { id: 'res-1', value: '250%', label: 'Organic Traffic Growth' },
    { id: 'res-2', value: '10x', label: 'More Keywords Ranking' },
    { id: 'res-3', value: '65%', label: 'Higher Click-Through' },
    { id: 'res-4', value: '3-6 mo', label: 'Results Timeline' },
  ];

  return (
    <div data-service="content-seo">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Content', href: '/services/content' },
              { label: 'SEO content' },
            ]}
          />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Content SEO services
            </h1>

            <p className="sub-service-base__hero-description">
              Content that ranks and converts. We combine keyword research, search intent analysis,
              and editorial quality to create content that search engines and humans love.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Get SEO content plan
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
              heading="What we do"
              subheading="SEO-optimised content that drives organic growth."
              capabilities={benefits.map((item, i) => ({
                id: `seo-ben-${i}`,
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
              A complete roadmap from research to execution and reporting.
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
              subheading="Data-backed outcomes from SEO content."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Testimonials */}
      <ServiceTestimonial serviceSlug="content-seo" />

      {/* CTA */}
      <FunkyCTA
        title="Ready to rank higher?"
        description="Get an SEO content plan tailored to your industry and competition."
        buttonText="Request SEO content plan"
        buttonPage="contact"
        benefits={['Keyword opportunity review', 'Topic cluster strategy', 'Competitor content analysis', 'Measurable ROI expectations']}
      />
    </div>
  );
};
