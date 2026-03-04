/**
 * Development Service Template - Funky Redesign
 * 
 * Theme: "Code Growth" (Emerald/Blue)
 * 
 * Features:
 * - Terminal Hero with typing effect
 * - Matrix/Circuit background patterns
 * - System Status Overview
 * - Execution Pipeline Timeline
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/page-service-development.css
 * - Colors mapped to global semantic tokens for auto light/dark
 *
 * PATTERN COMPONENTS:
 * - ✅ FeatureList — Tech Stack capabilities section (glow variant)
 * - ✅ ProcessTimeline — Execution Pipeline section (vertical orientation)
 * - ✅ FunkyCTA — Final conversion section
 * - ✅ ServiceTestimonial — Testimonial section
 * - ✅ ServicePricingTimeline — Pricing & timeline section
 * - ✅ RelatedServicesInPhase — Related services navigation
 *
 * @migrated March 3, 2026 — Migrated inline services grid to FeatureList and inline process timeline to ProcessTimeline components
 */

import { useEffect, useState } from 'react';
/* Route-level CSS */
import '../../../styles/templates/page-service-development.css';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FeatureList } from '../patterns/FeatureList';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { 
  developmentServiceHero, 
  developmentServiceOverview, 
  developmentServices as developmentServiceFeatures, 
  developmentProcess 
} from '../../data/development-service-page';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { 
  Code,
  Globe,
  ShoppingCart as ShoppingBag,
  ArrowsLeftRight as Move,
  SquaresFour as Layout,
  Plug,
  MagnifyingGlass as Search,
  MapTrifold as Map,
  Rocket,
  Shield,
  TrendUp,
  CheckCircle,
  Terminal,
  Cpu,
  Database,
  HardDrives as Server
} from '@phosphor-icons/react';

export function DevelopmentServiceTemplate() {
  // Build unified data object
  const data = {
    tagline: developmentServiceOverview.description,
    whyLightSpeed: {
      description: developmentServiceOverview.description
    },
    subServices: developmentServiceFeatures.map((service, i) => ({
      id: service.slug || `service-${i}`,
      title: service.title,
      description: service.description
    })),
    process: {
      steps: developmentProcess.map((step, i) => ({
        id: step.slug || `step-${i}`,
        number: `${i + 1}`,
        title: step.title,
        description: step.description
      }))
    },
    relatedServices: [],
    cta: {
      title: "Ready to Build Your Custom WordPress Solution?",
      description: "Let's engineer a scalable, high-performance WordPress application that drives your business forward.",
      buttonText: "Start Your Project",
      buttonPage: "contact" as const
    }
  };
  
  const [typedText, setTypedText] = useState('');
  const fullText = "Engineering the Future of WordPress";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Icon mapping
  const serviceIcons: Record<string, any> = {
    'wordpress-websites': Globe,
    'woocommerce-stores': ShoppingBag,
    'migrations': Move,
    'theme-development': Layout,
    'plugin-development': Plug,
    'api-integration': Server,
    'headless-wordpress': Cpu,
    'custom-wordpress': Code
  };

  const processIcons: Record<string, any> = {
    'architecture': Map,
    'development': Code,
    'testing': Search,
    'deployment': Rocket,
    'maintenance': Shield,
    'grow': TrendUp
  };

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'WordPress Development' },
        ]}
      />

      {/* Journey Phase Indicator */}
      <JourneyPhaseIndicator currentPhase="build" currentServicePage="development" />

      {/* ============================================
          HERO SECTION (Terminal)
          ============================================ */}
      <section className="dev-page__hero">
        <div className="dev-page__code-rain" aria-hidden="true" />
        <div className="dev-page__scan-line" aria-hidden="true" />
        <div className="dev-page__glow-orb" aria-hidden="true" />
        <div className="dev-page__glow-orb dev-page__glow-orb--secondary" aria-hidden="true" />
        
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="dev-page__hero-content">
              <span className="dev-page__hero-badge">⚡ Custom WordPress Development</span>
              <div className="dev-page__terminal-window">
                <div className="dev-page__terminal-header">
                  <div className="dev-page__terminal-dots">
                    <div className="dev-page__terminal-dot dev-page__terminal-dot--red" />
                    <div className="dev-page__terminal-dot dev-page__terminal-dot--yellow" />
                    <div className="dev-page__terminal-dot dev-page__terminal-dot--green" />
                  </div>
                  <div className="dev-page__terminal-title">
                    user@lightspeed:~/projects/future
                  </div>
                </div>
                
                <div className="dev-page__terminal-body">
                  <div className="dev-page__command">
                    $ init_sequence --optimize
                  </div>
                  
                  <h1 className="dev-page__hero-title">
                    {typedText}<span className="dev-page__cursor" />
                  </h1>
                  
                  <p className="dev-page__hero-desc">
                    {'>'} {data.tagline}
                    <br />
                    {'>'} System Status: <span className="dev-page__status-ok">OPTIMAL</span>
                  </p>

                  <div className="dev-page__hero-actions">
                    <Button
                      variant="default"
                      size="lg"
                      page="contact"
                      className="dev-page__cta-button"
                    >
                      Execute Project
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      page="portfolio-archive"
                      className="dev-page__outline-button"
                    >
                      View Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
        <ScrollDownArrow targetId="dev-overview" />
      </section>

      {/* ============================================
          OVERVIEW (System Status)
          ============================================ */}
      <section id="dev-overview" className="dev-page__overview">
        <Container>
          <div className="dev-page__overview-grid">
            <ScrollReveal animation="fade-right">
              <div className="dev-page__system-status">
                <div className="dev-page__status-card">
                  <div className="dev-page__status-icon-wrapper">
                    <Cpu size={120} />
                  </div>
                  
                  <h3 className="dev-page__status-title">
                    <Terminal className="dev-page__feature-icon" />
                    System Architecture
                  </h3>
                  
                  <ul className="dev-page__status-list">
                    <li className="dev-page__status-item">
                      <span>Core Framework</span>
                      <span className="dev-page__status-value">WordPress / Headless</span>
                    </li>
                    <li className="dev-page__status-item">
                      <span>Performance</span>
                      <span className="dev-page__status-value">99.9% Uptime</span>
                    </li>
                    <li className="dev-page__status-item">
                      <span>Security Protocol</span>
                      <span className="dev-page__status-value">Enterprise Grade</span>
                    </li>
                    <li className="dev-page__status-item">
                      <span>Integration</span>
                      <span className="dev-page__status-value">API First</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="dev-page__content">
                <span className="dev-page__label">
                  Why LightSpeed?
                </span>
                <h2 className="dev-page__section-title">
                  Code that <span className="dev-page__gradient-text">Scales</span>
                </h2>
                <p className="dev-page__text">
                  {data.whyLightSpeed.description}
                </p>
                <div className="dev-page__feature-grid">
                  {[
                    'Clean Architecture',
                    'CI/CD Pipelines',
                    'Automated Testing',
                    'Performance Audits'
                  ].map((item, i) => (
                    <div key={i} className="dev-page__feature-item">
                      <CheckCircle size={16} className="dev-page__feature-icon" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (Tech Stack)
          ============================================ */}
      <section className="dev-page__services">
        <Container>
          <div className="dev-page__text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="dev-page__section-title dev-page__section-title--neon">
                <span className="dev-page__bracket">{'<'}</span>Capabilities <span className="dev-page__bracket">{'/>'}</span>
              </h2>
              <p className="dev-page__text dev-page__max-w-2xl">
                Full-stack expertise for modern web applications.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={developmentServiceFeatures.map((service) => ({
                icon: service.icon,
                title: service.title,
                description: service.description
              }))}
              columns={3}
              variant="glow"
              iconSize="md"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PROCESS (Execution Pipeline)
          ============================================ */}
      <section className="dev-page__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <ProcessTimeline
              heading="Execution Pipeline"
              description="Our systematic approach to deployment."
              steps={developmentProcess.map((step, i) => ({
                id: step.slug || `step-${i}`,
                number: i + 1,
                title: step.title,
                description: step.description,
                icon: step.icon
              }))}
              showNumbers={true}
              orientation="vertical"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesInPhase
          title="Related Services"
          subtitle="Extend your build with these complementary services"
          services={data.relatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="development"
        subtitle="Our development service is included in these complete solution packages"
      />
      <ServiceTestimonial
        serviceSlug="development"
        subtitle="Hear from clients who built exceptional WordPress experiences with us"
      />
      
      {/* ============================================
          PRICING & TIMELINE
          ============================================ */}
      {servicePricingTimeline.development && (
        <ScrollReveal animation="fade-up">
          <section className="dev-service__pricing-section">
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.development.pricing}
                timeline={servicePricingTimeline.development.timeline}
                showPhases={true}
                showVariables={true}
              />
            </Container>
          </section>
        </ScrollReveal>
      )}
      
      {/* Related Services in Build Phase */}
      <RelatedServicesInPhase 
        currentPhase="build"
        currentServicePage="development"
      />

      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Clean, documented codebase',
          'Automated CI/CD pipelines',
          'Enterprise-grade security',
          '99.9% uptime guarantee',
          'Ongoing maintenance & support'
        ]}
      />
    </>
  );
}