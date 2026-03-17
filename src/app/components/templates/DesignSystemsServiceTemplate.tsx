/**
 * Design Systems Service Template
 * Route: /services/design-systems
 * Parent: /services/design
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { Stack, Palette, Code, BookOpen, Lightning, Trophy } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export const DesignSystemsServiceTemplate = () => {
  const benefits = [
    { icon: Stack, title: 'Component library creation', description: 'Build a comprehensive library of reusable UI components in Figma and code.' },
    { icon: Palette, title: 'Design token system', description: 'Colors, typography, spacing, and styling tokens for perfect consistency.' },
    { icon: Code, title: 'Code implementation', description: 'React, WordPress, or platform-specific component implementations.' },
    { icon: BookOpen, title: 'Documentation site', description: 'Searchable documentation with live examples and usage guidelines.' },
    { icon: Lightning, title: 'Faster development', description: 'Reduce design-to-development time by 60% with pre-built components.' },
    { icon: Trophy, title: 'Brand consistency', description: 'Ensure perfect brand consistency across all products and platforms.' }
  ];

  const deliverables = ['Figma component library', 'Design token system', 'React/WordPress components', 'Documentation website', 'Usage guidelines', 'Governance framework', 'Implementation training'];

  const results = [
    { id: 'result-1', value: '60%', label: 'Faster UI Development' },
    { id: 'result-2', value: '90%', label: 'Brand Consistency Score' },
    { id: 'result-3', value: '50%', label: 'Reduction in Design Debt' },
    { id: 'result-4', value: '6-12 wks', label: 'Build Timeline' }
  ];

  return (
    <div data-service="design-systems">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Design', href: '/services/design' },
              { label: 'Design systems' },
            ]}
          />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Design systems services
            </h1>

            <p className="sub-service-base__hero-description">
              Scale your design operations. A comprehensive design system gives your team a single source of truth,
              accelerates development, and ensures perfect brand consistency across every touchpoint.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Build design system
              </Link>
              <Link to={getPageUrl('design')} className="sub-service-base__cta-button sub-service-base__cta-button--secondary">
                View parent service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="sub-service-base__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="Design system services"
              subheading="Everything you need to build, scale, and govern your design system."
              capabilities={benefits.map((item, i) => ({
                id: `ds-ben-${i}`,
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
              We deliver a complete system integrated directly into your development workflow with governance tools to keep it thriving.
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
              subheading="The quantifiable impact of implementing a robust design system."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <FunkyCTA
        title="Ready for a design system?"
        description="Get a free design system audit and implementation roadmap."
        buttonText="Request free audit"
        buttonPage="contact"
        benefits={[
          'UI component audit',
          'Codebase consistency check',
          'Token architecture roadmap',
          'Estimated ROI calculation'
        ]}
      />
    </div>
  );
};
