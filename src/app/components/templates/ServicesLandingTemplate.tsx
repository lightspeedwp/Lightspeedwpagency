/**
 * Services Landing Template — Funky Redesign
 *
 * Theme: "The Nexus" (Violet/Blue/Pink)
 *
 * Composition of sub-components:
 * - ServicesLandingHero — Hero section + clients bar
 * - ServicesLandingAbout — "Why LightSpeed" two-column layout
 * - ServicesLandingHubs — AI + Content category hub cards
 * - ServicesLandingGrid — Individual service cards + featured project
 *
 * PATTERN COMPONENTS:
 * - ✅ StatsGrid — Featured Project Stats (in Grid sub-component)
 * - ✅ ContentStatsWidget — Delivery stats section
 * - ✅ RelatedContentWidget — Related insights section
 *
 * @migrated March 3, 2026 — Migrated inline featured stats to StatsGrid component (~85 lines saved). Phase 2 COMPLETE!
 * @split March 16, 2026 — Split from 833 lines into 4 sub-components + composition (master audit file size compliance)
 */

/* Route-level CSS — OPTIMIZED (Phase 3.3 Batch 6) */
import '../../../styles/templates/page-services-landing-optimized.css';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';

// Sub-components
import { ServicesLandingHero } from './services-landing/ServicesLandingHero';
import { ServicesLandingAbout } from './services-landing/ServicesLandingAbout';
import { ServicesLandingHubs } from './services-landing/ServicesLandingHubs';
import { ServicesLandingGrid } from './services-landing/ServicesLandingGrid';

// Dynamic content widgets
import { ContentStatsWidget } from '../patterns/ContentStatsWidget';
import { RelatedContentWidget } from '../patterns/RelatedContentWidget';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export function ServicesLandingTemplate() {
  return (
    <div className="service-page services-landing">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Hero + Clients Bar */}
      <ServicesLandingHero />

      {/* Why LightSpeed (The Hub) */}
      <ServicesLandingAbout />

      {/* Service Category Hubs (AI + Content) */}
      <ServicesLandingHubs />

      {/* Services Grid + Featured Project */}
      <ServicesLandingGrid />

      {/* Delivery Stats (Dynamic Content Widget) */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <h2 className="service-section__title">
                Delivered results
              </h2>
              <p className="service-section__description">
                Live stats from our portfolio, blog, and client feedback.
              </p>
            </div>
          </ScrollReveal>
          <ContentStatsWidget
            include={['portfolio', 'clients', 'experience', 'services']}
            variant="funky"
          />
        </Container>
      </section>

      {/* Related Content (Dynamic Widget) */}
      <section className="service-section service-section--bg-background">
        <Container>
          <RelatedContentWidget
            tags={['wordpress', 'development', 'design', 'woocommerce']}
            count={4}
            title="Insights & Case Studies"
            label="From Our Blog & Portfolio"
          />
        </Container>
      </section>
    </div>
  );
}