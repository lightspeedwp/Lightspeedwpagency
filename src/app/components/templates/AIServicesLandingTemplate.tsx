import '../../../styles/templates/ai-services-landing.css';

import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { AgencyProcessTimeline } from '../patterns/AgencyProcessTimeline';
import { FunkyCTA } from '../patterns/FunkyCTA';
import {
  Brain,
  MagnifyingGlass,
  ChartBar,
  ChatCentered,
  Eye,
  Robot,
  Binoculars,
  Blueprint,
  Rocket,
  TrendUp,
} from '@phosphor-icons/react';

import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { legacyServiceItems, legacyStatsItems, legacyApproachSteps } from '../../data/ai-services-lifecycle-data';

export function AIServicesLandingTemplate() {
  return (
    <div className="ai-landing">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'AI Services' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        aria-labelledby="ai-hero-title"
        className="ai-landing__hero"
      >
        {/* Background Grid Pattern */}
        <div className="ai-landing__hero-grid" />

        <div className="ai-landing__hero-content">
          <ScrollReveal animation="fade-down">
            <div className="ai-landing__badge">
              <Robot size={16} weight="duotone" aria-hidden="true" />
              AI-Powered Services
            </div>

            <h1 id="ai-hero-title" className="ai-landing__title">
              Artificial Intelligence <br />
              <span className="ai-landing__highlight">
                Services
              </span>
            </h1>

            <p className="ai-landing__subtitle">
              From technical SEO to AI engine optimisation, we help your WordPress site
              dominate both traditional search and the new wave of AI-powered discovery
              platforms.
            </p>

            <div className="ai-landing__actions">
              <Link
                to={getPageUrl('contact')}
                className="ai-landing__btn-primary"
              >
                Get AI Audit
              </Link>
              <a
                href="#services"
                className="ai-landing__btn-outline"
              >
                Explore Services
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="ai-landing__scroll-down">
          <ScrollDownArrow />
        </div>
      </section>

      {/* ============================================
          SERVICES GRID
          ============================================ */}
      <section
        id="services"
        aria-labelledby="ai-services-title"
        className="ai-landing__section ai-landing__section--muted"
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="AI & search services"
              subheading="Comprehensive AI-powered services to maximise your digital visibility across every search channel."
              capabilities={legacyServiceItems.map((item, i) => ({
                id: `ai-srv-${i}`,
                title: item.title,
                description: item.description,
                icon: item.icon as any
              }))}
              columns={3}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          STATS
          ============================================ */}
      <section
        aria-labelledby="ai-stats-title"
        className="ai-landing__section ai-landing__section--bg"
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading="Results that matter"
              subheading="Data-backed outcomes from our AI and search optimisation campaigns."
              stats={legacyStatsItems}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          APPROACH
          ============================================ */}
      <section
        aria-labelledby="ai-approach-title"
        className="ai-landing__section ai-landing__section--muted"
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyProcessTimeline
              heading="Our approach"
              subheading="A proven four-phase methodology that delivers measurable results."
              steps={legacyApproachSteps}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section aria-labelledby="ai-cta-title">
        <FunkyCTA
          title="Ready to harness AI?"
          description="Get a free AI readiness audit and discover how to future-proof your search visibility in the age of artificial intelligence."
          buttonText="Request free AI audit"
          buttonPage="contact"
          benefits={[
            'Technical SEO audit included',
            'AI prompt strategy session',
            'Performance benchmarking',
            'Data-driven action plan'
          ]}
        />
      </section>
    </div>
  );
}