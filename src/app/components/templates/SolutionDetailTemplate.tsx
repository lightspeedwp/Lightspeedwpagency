/**
 * Solution Detail Template — Funky Neon Redesign
 *
 * WordPress template: templates/page-solution-detail.html
 * 100% CSS variables — no Tailwind.
 * BEM naming: .solution-detail-*
 *
 * Migration notes:
 *  - `useNavigation()` → declarative `<Link>` from react-router
 *  - Added neon mesh hero with orb glows + badge
 *  - `CTASection` → `FunkyCTA`
 *  - Related solutions use `<Link>` navigation
 *
 * @see /src/styles/templates/solution-detail.css
 * @see /src/app/components/templates/solution-detail/ — Sub-components
 */

import '../../../styles/templates/solution-detail.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Check, Sparkle } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';
import { SolutionDetailLowerSections } from './solution-detail/SolutionDetailLowerSections';

interface SolutionDetailProps {
  solution: {
    title: string;
    slug: string;
    category: string;
    tagline: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
      icon: UniversalIcon;
    }>;
    benefits: string[];
    useCases?: Array<{
      title: string;
      description: string;
      industries: string[];
    }>;
    specifications?: {
      technology: string[];
      requirements: string[];
      support: string[];
    };
    pricing?: {
      model: string;
      starting: string;
      includes: string[];
    };
    relatedSolutions?: Array<{
      id: string;
      title: string;
      slug: string;
      excerpt: string;
    }>;
  };
}

export function SolutionDetailTemplate({ solution }: SolutionDetailProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: solution.title },
        ]}
      />

      {/* ── HERO — Neon Mesh ── */}
      <section className="solution-detail__hero">
        <div className="solution-detail__hero-mesh" aria-hidden="true" />
        <div className="solution-detail__hero-orb solution-detail__hero-orb--1" aria-hidden="true" />
        <div className="solution-detail__hero-orb solution-detail__hero-orb--2" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__hero-inner">
              <div className="solution-detail__hero-badge">
                <Sparkle size={14} className="solution-detail__badge-pulse" />
                <span>{solution.category}</span>
              </div>

              <h1 className="solution-detail__hero-title">{solution.title}</h1>
              <p className="solution-detail__hero-tagline">{solution.tagline}</p>

              <div className="solution-detail__hero-actions">
                <Button variant="default" size="lg" page="contact" className="neon-hover" aria-label="Request a demo for this solution">
                  Request Demo
                </Button>
                <Button
                  variant="outline" size="lg"
                  onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                  className="neon-hover"
                  aria-label="Learn more about this solution"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Overview Section */}
      <Section spacing="xl" className="solution-detail__overview-section">
        <Container>
          <div className="solution-detail__overview-grid">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="solution-detail__section-title">Overview</h2>
                <p className="solution-detail__description">{solution.description}</p>
                <h3 className="solution-detail__subsection-title">Key benefits</h3>
                <CheckList items={solution.benefits} />
              </div>
            </ScrollReveal>

            {/* Pricing Sidebar */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div>
                <div className="solution-detail__pricing-sidebar">
                  <h3 className="solution-detail__sidebar-title">Pricing</h3>
                  <div className="solution-detail__sidebar-item">
                    <dt className="solution-detail__sidebar-label">Model</dt>
                    <dd className="solution-detail__sidebar-value">{solution.pricing?.model}</dd>
                  </div>
                  <div className="solution-detail__sidebar-item">
                    <dt className="solution-detail__sidebar-label">Starting At</dt>
                    <dd className="solution-detail__price-value">{solution.pricing?.starting}</dd>
                  </div>
                  <div className="solution-detail__sidebar-item">
                    <dt className="solution-detail__sidebar-label">Includes</dt>
                    <dd>
                      <ul className="solution-detail__includes-list">
                        {solution.pricing?.includes.map((item, index) => (
                          <li key={index} className="solution-detail__include-item">
                            <Check size={16} className="solution-detail__check-icon" />
                            <span className="solution-detail__include-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <Button variant="default" size="md" page="contact" className="neon-hover" aria-label="Get started with this solution">
                    Get Started
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section spacing="xl" className="solution-detail__features-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">Features &amp; capabilities</h2>
              <p className="solution-detail__section-desc">
                Everything you need to succeed with {solution.title}.
              </p>
            </div>
          </ScrollReveal>
          <FeatureList items={solution.features} columns={3} variant="glass" iconStyle="rounded" />
        </Container>
      </Section>

      {/* Lower Sections (Use Cases, Specs, Related, Testimonials, FAQ, CTA) */}
      <SolutionDetailLowerSections solution={solution} />
    </>
  );
}