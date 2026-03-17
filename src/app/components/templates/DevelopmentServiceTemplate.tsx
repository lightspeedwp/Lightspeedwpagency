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
 * Sub-components:
 * - DevelopmentLowerSections — Capabilities, Process, Related,
 *   Pricing, CTA sections
 *
 * @migrated March 3, 2026 — Migrated inline services grid to FeatureList and inline process timeline to ProcessTimeline components
 */

import { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { 
  developmentServiceHero, 
  developmentServiceOverview, 
} from '../../data/development-service-page';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { DevelopmentLowerSections } from './development-service/DevelopmentLowerSections';
import { 
  Code,
  Terminal,
  Cpu,
  CheckCircle,
} from '@phosphor-icons/react';

export function DevelopmentServiceTemplate() {
  // Build unified data object
  const data = {
    tagline: developmentServiceOverview.description,
    whyLightSpeed: {
      description: developmentServiceOverview.description
    },
    subServices: [],
    process: {
      steps: []
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

  return (
    <div className="service-page">
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
      <section className="dev-service__hero">
        {/* Background Effects */}
        <div className="dev-service__hero-grid" aria-hidden="true" />
        
        <div className="dev-service__hero-orb" aria-hidden="true" />
        
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="dev-service__hero-content">
              <div className="dev-service__badge">
                ⚡ Custom WordPress Development
              </div>
              
              {/* Terminal Window */}
              <div className="dev-service__terminal">
                {/* Terminal Header */}
                <div className="dev-service__terminal-header">
                  <div className="dev-service__terminal-dots">
                    <div className="dev-service__terminal-dot dev-service__terminal-dot--red" />
                    <div className="dev-service__terminal-dot dev-service__terminal-dot--yellow" />
                    <div className="dev-service__terminal-dot dev-service__terminal-dot--green" />
                  </div>
                  <div className="dev-service__terminal-path">
                    user@lightspeed:~/projects/future
                  </div>
                </div>
                
                {/* Terminal Body */}
                <div className="dev-service__terminal-body">
                  <div className="dev-service__terminal-prompt">
                    $ init_sequence --optimize
                  </div>
                  
                  <h1 className="dev-service__terminal-heading">
                    {typedText}
                    <span className="dev-service__terminal-cursor" />
                  </h1>
                  
                  <p className="dev-service__terminal-text">
                    {'>'} {data.tagline}
                    <br />
                    {'>'} System Status: <span className="dev-service__terminal-status">OPTIMAL</span>
                  </p>

                  <div className="service-hero__cta-group">
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
      <section id="dev-overview" className="dev-service__section dev-service__section--alt">
        <Container>
          <div className="service-section__grid service-section__grid--2 service-section__grid--align-center service-section__grid--gap-lg">
            <ScrollReveal animation="fade-right">
              <div>
                <div className="dev-service__system-card">
                  <div className="dev-service__system-card-icon">
                    <Cpu size={180} />
                  </div>
                  
                  <h3 className="dev-service__system-title">
                    <Terminal size={24} color="var(--primary)" />
                    System Architecture
                  </h3>
                  
                  <ul className="dev-service__system-list">
                    <li className="dev-service__system-item">
                      <span>Core Framework</span>
                      <span className="dev-service__system-value">WordPress / Headless</span>
                    </li>
                    <li className="dev-service__system-item">
                      <span>Performance</span>
                      <span className="dev-service__system-value">99.9% Uptime</span>
                    </li>
                    <li className="dev-service__system-item">
                      <span>Security Protocol</span>
                      <span className="dev-service__system-value">Enterprise Grade</span>
                    </li>
                    <li className="dev-service__system-item">
                      <span>Integration</span>
                      <span className="dev-service__system-value">API First</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div>
                <span className="dev-service__eyebrow">
                  Why LightSpeed?
                </span>
                <h2 className="dev-service__heading">
                  Code that <span className="dev-service__gradient-text">Scales</span>
                </h2>
                <p className="dev-service__description">
                  {data.whyLightSpeed.description}
                </p>
                <div className="dev-service__checklist">
                  {[
                    'Clean Architecture',
                    'CI/CD Pipelines',
                    'Automated Testing',
                    'Performance Audits'
                  ].map((item, i) => (
                    <div key={i} className="dev-service__check-item">
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

      {/* Lower sections extracted for file size compliance */}
      <DevelopmentLowerSections
        relatedServices={data.relatedServices}
        cta={data.cta}
      />
    </div>
  );
}