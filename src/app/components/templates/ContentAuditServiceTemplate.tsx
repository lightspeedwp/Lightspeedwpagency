/**
 * Content Audit Service Template
 * Route: /services/content/audit
 * Parent: /services/content
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { MagnifyingGlass, ListChecks as FileCheck, TrendDown, WarningCircle, Crosshair, Trophy } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';

export const ContentAuditServiceTemplate = () => {
  const benefits = [
    { icon: MagnifyingGlass, title: 'Complete content inventory', description: 'Catalog every page, post, and asset with metadata and performance metrics.' },
    { icon: FileCheck, title: 'Quality assessment', description: 'Evaluate content against E-E-A-T, readability, and brand consistency standards.' },
    { icon: TrendDown, title: 'Performance analysis', description: 'Identify low-performing content and optimization opportunities.' },
    { icon: WarningCircle, title: 'Gap analysis', description: 'Find missing topics and content gaps in your market coverage.' },
    { icon: Crosshair, title: 'SEO evaluation', description: 'Assess keyword targeting, meta data, and technical SEO issues.' },
    { icon: Trophy, title: 'Actionable recommendations', description: 'Prioritized action plan: update, consolidate, redirect, or delete.' }
  ];

  const deliverables = ['Complete content inventory spreadsheet', 'Performance dashboard', 'Quality scorecard', 'Gap analysis report', 'SEO audit findings', 'Action plan with priorities', 'Content refresh roadmap'];

  const results = [
    { id: 'res-1', value: '100%', label: 'Content Cataloged' },
    { id: 'res-2', value: '40%', label: 'Avg Performance Lift' },
    { id: 'res-3', value: '2-3x', label: 'More Strategic Focus' },
    { id: 'res-4', value: '2-3 wks', label: 'Audit Timeline' }
  ];

  return (
    <div data-service="content-audit">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Content', href: '/services/content' },
              { label: 'Content audit' },
            ]}
          />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Content audit services
            </h1>

            <p className="sub-service-base__hero-description">
              Know exactly what content you have, how it's performing, and what to do next. Our comprehensive audits
              reveal quick wins and long-term opportunities to improve content ROI.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Get content audit
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
              heading="Audit services"
              subheading="Comprehensive evaluation of your entire content ecosystem."
              capabilities={benefits.map((item, i) => ({
                id: `audit-ben-${i}`,
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
              Clear, prioritized next steps to improve your content performance.
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
              subheading="The value of a thorough content audit."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Testimonials */}
      <ServiceTestimonial serviceSlug="content-audit" />

      {/* CTA */}
      <FunkyCTA
        title="Ready to audit your content?"
        description="Get a free sample audit of 10 pages."
        buttonText="Request free sample audit"
        buttonPage="contact"
        benefits={['SEO performance check', 'Content gap analysis', 'Actionable insights', 'No commitment required']}
      />
    </div>
  );
};
