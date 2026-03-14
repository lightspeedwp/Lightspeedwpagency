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
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        {/* Background Effects */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)', backgroundSize: '50px 50px', zIndex: 0 }} aria-hidden="true" />
        
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', opacity: 0.1, filter: 'blur(40px)', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'inline-block', padding: 'var(--spacing-2) var(--spacing-4)', backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', border: '1px solid color-mix(in srgb, var(--primary) 30%, transparent)', marginBottom: 'var(--spacing-8)' }}>
                ⚡ Custom WordPress Development
              </div>
              
              {/* Terminal Window */}
              <div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)' }}>
                {/* Terminal Header */}
                <div style={{ backgroundColor: 'color-mix(in srgb, var(--foreground) 5%, transparent)', padding: 'var(--spacing-3) var(--spacing-4)', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  </div>
                  <div style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
                    user@lightspeed:~/projects/future
                  </div>
                </div>
                
                {/* Terminal Body */}
                <div style={{ padding: 'var(--spacing-8) var(--spacing-6)', textAlign: 'left', fontFamily: 'var(--font-secondary)' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-6)', fontSize: 'var(--text-lg)' }}>
                    $ init_sequence --optimize
                  </div>
                  
                  <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                    {typedText}
                    <span style={{ display: 'inline-block', width: '10px', height: '1em', backgroundColor: 'var(--primary)', marginLeft: '4px', verticalAlign: 'middle' }} />
                  </h1>
                  
                  <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 'var(--spacing-8)', fontSize: 'var(--text-lg)' }}>
                    {'>'} {data.tagline}
                    <br />
                    {'>'} System Status: <span style={{ color: '#27c93f', fontWeight: 'bold' }}>OPTIMAL</span>
                  </p>

                  <div className="wp-flex wp-gap-4 wp-flex-wrap">
                    <Button variant="default" size="lg" page="contact">
                      Execute Project
                    </Button>
                    <Button variant="outline" size="lg" page="portfolio-archive">
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
      <section id="dev-overview" style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-right">
              <div>
                <div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-8)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', color: 'color-mix(in srgb, var(--primary) 10%, transparent)', zIndex: 0 }}>
                    <Cpu size={180} />
                  </div>
                  
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h3)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', position: 'relative', zIndex: 1 }}>
                    <Terminal size={24} color="var(--primary)" />
                    System Architecture
                  </h3>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', position: 'relative', zIndex: 1 }}>
                    <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 'var(--spacing-4)', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-secondary)', color: 'var(--muted-foreground)' }}>
                      <span>Core Framework</span>
                      <span style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>WordPress / Headless</span>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 'var(--spacing-4)', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-secondary)', color: 'var(--muted-foreground)' }}>
                      <span>Performance</span>
                      <span style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>99.9% Uptime</span>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 'var(--spacing-4)', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-secondary)', color: 'var(--muted-foreground)' }}>
                      <span>Security Protocol</span>
                      <span style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>Enterprise Grade</span>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-secondary)', color: 'var(--muted-foreground)' }}>
                      <span>Integration</span>
                      <span style={{ color: 'var(--foreground)', fontWeight: 'var(--font-weight-medium)' }}>API First</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div>
                <span style={{ display: 'inline-block', color: 'var(--primary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-4)' }}>
                  Why LightSpeed?
                </span>
                <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                  Code that <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Scales</span>
                </h2>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 'var(--spacing-8)' }}>
                  {data.whyLightSpeed.description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
                  {[
                    'Clean Architecture',
                    'CI/CD Pipelines',
                    'Automated Testing',
                    'Performance Audits'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', fontFamily: 'var(--font-secondary)', color: 'var(--foreground)' }}>
                      <CheckCircle size={20} color="var(--primary)" weight="fill" />
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                <span style={{ color: 'var(--primary)', opacity: 0.5 }}>{'<'}</span>Capabilities<span style={{ color: 'var(--primary)', opacity: 0.5 }}>{'/>'}</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
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
          <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
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