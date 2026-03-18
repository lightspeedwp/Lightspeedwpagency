/**
 * Discovery Service Template — Funky Redesign v2
 *
 * Theme: "Signal Intelligence" (Radar / Sonar / Deep Scan)
 * Palette: Cyan → Indigo → Blue (mapped to category tokens)
 *
 * Sections:
 *  1. Hero          — Radar-pulse rings, scanning animation, glassmorphism panel
 *  2. Why Discovery — Mission Briefing dossier with stat counters
 *  3. Sub-Services  — "Signal Nodes" orbital cards with glow borders
 *  4. Process       — Vertical signal-trace timeline, alternating layout
 *  5. Deliverables  — Mission Package icon grid
 *  6. Related       — Minimal 2-col link cards
 *  7. FunkyCTA      — Reusable conversion block
 *
 * Sub-components:
 * - DiscoveryBodySections — Sections 2-5
 * - discovery-service-template-data — Static data + useCounter
 *
 * @see /guidelines/templates/overview-templates.md
 * @split March 16, 2026 — Extracted body sections + data (541→~210 lines)
 */

/* Route-level CSS — optimized version loaded globally via index.css */
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StatsGrid } from '../patterns/StatsGrid';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import {
  discoveryServiceHero,
  discoveryServiceOverview,
  discoveryServiceProcess,
  discoveryServiceCTA,
} from '../../data/discovery-service-page';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { MagnifyingGlass as Search, ArrowRight } from '@phosphor-icons/react';

import { heroStats } from '../../data/discovery-service-template-data';
import { DiscoveryBodySections } from './discovery-service/DiscoveryBodySections';

import { WebGLBlueprint } from '../patterns/WebGLBlueprint';

export function DiscoveryServiceTemplate() {
  const data = {
    tagline: discoveryServiceHero.subtitle || "Before you build, know exactly what to build.",
    whyLightSpeed: { description: discoveryServiceOverview.description },
    subServices: discoveryServiceOverview.benefits?.map((benefit, i) => ({
      id: `benefit-${i}`, title: benefit.title, description: benefit.description,
    })) || [],
    process: {
      description: discoveryServiceProcess.description,
      steps: discoveryServiceProcess.steps.map((step, i) => ({
        id: `step-${i}`, number: `${i + 1}`, title: step.title, description: step.description,
      })),
    },
    cta: {
      title: discoveryServiceCTA.title,
      description: discoveryServiceCTA.description,
      buttonText: discoveryServiceCTA.buttonText,
      buttonPage: "contact" as const,
    },
  };

  return (
    <div className="service-page discovery-service">
      <BreadcrumbPart items={[
        { label: 'Home', page: 'front-page' },
        { label: 'Services', page: 'services' },
        { label: 'Discovery & Strategy' },
      ]} />

      <JourneyPhaseIndicator currentPhase="discover" currentServicePage="discovery" />

      {/* 1. HERO — "RADAR SCAN" */}
      <section className="service-hero" style={{ position: 'relative' }}>
        <WebGLBlueprint accentColor="var(--wp--preset--color--neon-cyan)" />
        <div className="service-hero__bg-image" aria-hidden="true" style={{ opacity: 0.3, zIndex: 1 }}>
          <img
            src="https://images.unsplash.com/photo-1687125114692-54f19a0fd438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcmFkYXIlMjBob2xvZ3JhbSUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxNTA5MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="" className="service-hero__bg-cover" aria-hidden="true"
            loading="lazy"
          />
        </div>
        <div className="service-hero__decor-rings" aria-hidden="true" style={{ zIndex: 1 }}>
          <div className="service-hero__decor-ring service-hero__decor-ring--1" />
          <div className="service-hero__decor-ring service-hero__decor-ring--2" />
          <div className="service-hero__decor-ring service-hero__decor-ring--3" />
          <div className="service-hero__decor-ring service-hero__decor-ring--4" />
        </div>

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div className="service-hero__content service-hero__content--centered">
            <ScrollReveal animation="fade-up">
              <span className="service-hero__badge service-hero__badge--primary">
                <Search size={14} /> Strategic Discovery
              </span>
              <h1 className="service-hero__title">
                We Scan&nbsp;Deep to Build&nbsp;<span className="service-hero__gradient-text">What Matters</span>
              </h1>
              <p className="service-hero__description service-hero__description--centered">{data.tagline}</p>
              <div className="service-hero__cta-group" style={{ marginBottom: 'var(--spacing-16)' }}>
                <Button variant="default" size="lg" page="contact">
                  Start Discovery <ArrowRight size={16} style={{ marginLeft: 'var(--spacing-2)' }} />
                </Button>
                <Button variant="outline" size="lg" page="portfolio-archive">View Case Studies</Button>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <StatsGrid
                stats={heroStats.map((s, i) => ({ id: `hero-stat-${i}`, number: s.value, label: s.label, icon: s.icon as any }))}
                columns={3} variant="default"
              />
            </ScrollReveal>
          </div>
        </Container>
        <ScrollDownArrow />
      </section>

      {/* Sections 2-5: Why, Sub-Services, Process, Deliverables */}
      <DiscoveryBodySections
        whyDescription={data.whyLightSpeed.description}
        subServices={data.subServices}
        process={data.process}
        heroImageUrl="https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHdoaXRlYm9hcmQlMjBwbGFubmluZyUyMHdvcmtzaG9wJTIwdGVhbXxlbnwxfHx8fDE3NzE1MDkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* Pattern components */}
      <IncludedInSolutions serviceSlug="discovery" subtitle="Our discovery service is part of these comprehensive solution packages" />
      <ServiceTestimonial serviceSlug="discovery" subtitle="See how our discovery process set the foundation for project success" />

      {servicePricingTimeline.discovery && (
        <ScrollReveal animation="fade-up">
          <section className="service-section service-section--bg-muted">
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.discovery.pricing}
                timeline={servicePricingTimeline.discovery.timeline}
                showPhases={true} showVariables={true}
              />
            </Container>
          </section>
        </ScrollReveal>
      )}

      <RelatedServicesInPhase currentPhase="discover" currentServicePage="discovery" />

      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Detailed technical specification',
          'Clear project timeline & budget',
          'Competitor analysis report',
          'User persona definition',
          'Risk assessment matrix',
        ]}
      />
    </div>
  );
}