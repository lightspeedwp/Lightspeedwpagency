/**
 * Content Governance Service Template
 * Route: /services/content/governance
 * Parent: /services/content
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { ShieldCheck, BookOpen, Users, CheckSquare, FileText, ChartBar } from '@phosphor-icons/react';
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

export const ContentGovernanceServiceTemplate = () => {
  const benefits = [
    { icon: ShieldCheck, title: 'Content quality standards', description: 'Establish clear quality benchmarks, scoring rubrics, and editorial standards for every piece of content.' },
    { icon: BookOpen, title: 'Style guide creation', description: 'Comprehensive brand voice, tone, and writing style guides that ensure consistency across all channels.' },
    { icon: Users, title: 'Approval workflows', description: 'Design efficient review and approval processes that balance speed with quality control.' },
    { icon: CheckSquare, title: 'Compliance frameworks', description: 'Ensure content meets accessibility (WCAG), legal, regulatory, and brand compliance requirements.' },
    { icon: FileText, title: 'Content lifecycle management', description: 'Policies for content creation, review, archival, and deletion to keep your library relevant.' },
    { icon: ChartBar, title: 'Quality reporting', description: 'Regular audits and dashboards tracking content quality, consistency, and compliance metrics.' },
  ];

  const deliverables = [
    'Brand style guide document',
    'Content quality scorecard',
    'Approval workflow diagrams',
    'Compliance checklist templates',
    'Content lifecycle policies',
    'Team training materials',
    'Quarterly quality audit reports',
  ];

  const results = [
    { id: 'res-1', value: '90%', label: 'Brand Consistency' },
    { id: 'res-2', value: '50%', label: 'Faster Approvals' },
    { id: 'res-3', value: '100%', label: 'Compliance Coverage' },
    { id: 'res-4', value: '4-6 wks', label: 'Implementation Time' },
  ];

  return (
    <div data-service="content-governance">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Content', href: '/services/content' },
              { label: 'Content governance' },
            ]}
          />
          
          <JourneyPhaseIndicator currentPhase="optimise" currentServicePage="content-governance" />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Content governance services
            </h1>

            <p className="sub-service-base__hero-description">
              Establish the standards, workflows, and quality frameworks that keep your content
              consistent, compliant, and on-brand at scale.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Start governance project
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
              heading="What we deliver"
              subheading="Governance frameworks that scale with your organisation."
              capabilities={benefits.map((item, i) => ({
                id: `gov-ben-${i}`,
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
              The policies and documents your team needs to succeed.
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
              subheading="Measurable governance outcomes."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Testimonials */}
      <ServiceTestimonial serviceSlug="content-governance" />

      {/* CTA */}
      <FunkyCTA
        title="Ready for consistent, quality content?"
        description="Build governance frameworks that keep your content on-brand and compliant at scale."
        buttonText="Start governance project"
        buttonPage="contact"
        benefits={['Streamlined workflows', 'Quality assurance', 'Risk mitigation', 'Clear accountability']}
      />
    </div>
  );
};
