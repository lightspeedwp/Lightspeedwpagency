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
 */

import { useEffect, useState } from 'react';
/* Route-level CSS */
import '../../../styles/templates/page-service-development.css';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { developmentServiceDetailed } from '../../data/services';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { 
  Code,
  Globe,
  ShoppingCart,
  Move,
  Layout,
  Plug,
  Search,
  Map,
  Rocket,
  Shield,
  TrendingUp,
  CheckCircle,
  Terminal,
  Cpu,
  Server,
  Database
} from 'lucide-react';

export function DevelopmentServiceTemplate() {
  const data = developmentServiceDetailed;
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
    'woocommerce-stores': ShoppingCart,
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
    'grow': TrendingUp
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

          <div className="dev-page__services-grid">
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || Code;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                  <div className="dev-page__card">
                    <div className="dev-page__card-icon">
                      <Icon size={24} />
                    </div>
                    
                    <h3 className="dev-page__card-title">
                      {service.title}
                    </h3>
                    
                    <p className="dev-page__card-desc">
                      {service.description}
                    </p>
                    
                    <div className="dev-page__tech-stack">
                      {['React', 'PHP', 'Node'].map((tech, i) => (
                        <span key={i} className="dev-page__tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          PROCESS (Execution Pipeline)
          ============================================ */}
      <section className="dev-page__process">
        <Container>
          <div className="dev-page__text-center" style={{ paddingBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 className="dev-page__section-title dev-page__section-title--neon">
                Execution Pipeline
              </h2>
              <p className="dev-page__text dev-page__max-w-2xl">
                Our systematic approach to deployment.
              </p>
            </ScrollReveal>
          </div>

          <div className="dev-page__timeline">
            <div className="dev-page__timeline-line" />
            
            <div className="dev-page__timeline-steps">
              {data.process.steps.map((step, index) => {
                const Icon = processIcons[step.id] || Code;
                const isEven = index % 2 === 0;
                
                return (
                  <ScrollReveal key={index} animation={isEven ? 'fade-left' : 'fade-right'} delay={index * 100}>
                    <div className={`dev-page__timeline-item ${isEven ? 'dev-page__timeline-item--right' : 'dev-page__timeline-item--left'}`}>
                      
                      {/* Marker */}
                      <div className="dev-page__timeline-marker">
                        <div className="dev-page__timeline-dot" />
                      </div>

                      {/* Content */}
                      <div className="dev-page__timeline-content">
                        <div className="dev-page__timeline-header">
                          <h3 className="dev-page__timeline-title">
                            <span className="dev-page__timeline-number">0{step.number} </span>
                            {step.title}
                          </h3>
                        </div>
                        <p className="dev-page__timeline-desc">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesGrid
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