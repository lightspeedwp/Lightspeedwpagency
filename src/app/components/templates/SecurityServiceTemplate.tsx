/**
 * Security Service Template - Funky Redesign
 * 
 * Theme: "Cyber Defense" (Red/Slate/Green)
 * 
 * Features:
 * - Terminal Monitor with real-time logs
 * - Radar scanning background
 * - Threat Intel grid
 * - Defense Protocols list
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via BEM classes in security-service.css + service-hero.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 *
 * PATTERN COMPONENTS:
 * - FeatureList, ProcessTimeline, StatsGrid, FunkyCTA
 * - FAQSection, ServiceTestimonial, ServicePricingTimeline, RelatedServicesInPhase
 *
 * Sub-components:
 * - SecurityLowerSections — Defense Protocols, Process, Stats, FAQ,
 *   Related, Pricing, CTA sections
 *
 * BEM Blocks: .security-hero, .security-terminal, .security-threat
 *
 * @see /src/styles/templates/security-service.css
 */

import { useState, useEffect } from 'react';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { Button } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { SecurityLowerSections } from './security-service/SecurityLowerSections';
import { 
  Shield, 
  Lock, 
  Terminal, 
  ChartLineUp as Activity, 
  Lightning as Zap, 
} from '@phosphor-icons/react';

// Import detailed data
import { 
  securityServiceHero,
  securityServiceFeatures,
  securityServiceCTA
} from '../../data/security-service-page';

export function SecurityServiceTemplate() {
  // Build a unified data object from imports
  const data = {
    tagline: securityServiceHero.subtitle || "Your WordPress site is under attack 24/7.",
    whyLightSpeed: {
      description: securityServiceFeatures.description || "Comprehensive protection against hackers, malware, and data breaches"
    },
    relatedServices: [],
    cta: {
      title: securityServiceCTA.title,
      description: securityServiceCTA.description,
      buttonText: securityServiceCTA.buttonText,
      buttonPage: "contact" as const
    }
  };
  
  const [logs, setLogs] = useState<string[]>([]);

  // Simulated Terminal Logs
  useEffect(() => {
    const messages = [
      "Initializing defense protocols...",
      "Scanning file system integrity...",
      "[OK] Core files verified.",
      "Checking database for injection risks...",
      "[OK] Database sanitized.",
      "Monitoring traffic patterns...",
      "Threat detected: IP 192.168.x.x blocked.",
      "Firewall active. System secure."
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev, messages[currentIndex]];
        if (newLogs.length > 6) newLogs.shift();
        return newLogs;
      });
      currentIndex = (currentIndex + 1) % messages.length;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Security' },
        ]}
      />

      {/* Journey Phase Indicator */}
      <JourneyPhaseIndicator currentPhase="build" currentServicePage="security" />

      {/* ============================================
          HERO SECTION (The Fortress)
          ============================================ */}
      <section className="service-hero--split security-hero">
        <div className="security-hero__grid-bg" aria-hidden="true" />
        <div className="security-hero__radial-bg" aria-hidden="true" />
        
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <div className="security-hero__content">
              <ScrollReveal animation="fade-right">
                <span className="service-hero__badge service-hero__badge--custom service-hero__badge--mono" style={{ '--badge-color': 'var(--color-terminal-green)' } as React.CSSProperties}>
                  <Shield size={16} />
                  <span>CYBER DEFENSE ACTIVE</span>
                </span>
                
                <h1 className="service-hero__title">
                  Digital <br />
                  <span className="security-hero__title-accent">Fortress.</span>
                </h1>
                
                <p className="service-hero__description service-hero__description--mono">
                  {data.tagline} We build an impenetrable perimeter around your digital assets.
                </p>

                <div className="wp-flex wp-gap-4 wp-flex-wrap">
                  <Button
                    variant="default"
                    size="lg"
                    page="contact"
                    className="security-hero__btn-scan"
                  >
                    <Terminal size={20} />
                    INITIATE_SCAN
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    page="hosting"
                    className="security-hero__btn-protocols"
                  >
                    VIEW_PROTOCOLS
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="security-hero__content">
               {/* Terminal Visual */}
               <ScrollReveal animation="fade-left">
                 <div className="security-terminal">
                   <div className="security-terminal__header">
                     <div className="security-terminal__dots">
                       <div className="security-terminal__dot security-terminal__dot--red" />
                       <div className="security-terminal__dot security-terminal__dot--yellow" />
                       <div className="security-terminal__dot security-terminal__dot--green" />
                     </div>
                     <div className="security-terminal__title">root@lightspeed:~</div>
                   </div>
                   <div className="security-terminal__body">
                     <div className="security-terminal__welcome">
                       Welcome to LightSpeed Defense System v4.0<br/>
                       Copyright (c) 2025 LightSpeed Agency
                     </div>
                     {logs.map((log, i) => (
                       <div key={i} className="security-terminal__log-entry">
                         <span className="security-terminal__log-time">{new Date().toLocaleTimeString()} &gt;</span> 
                         <span className={`security-terminal__log-text ${
                           log.includes("detected") ? 'security-terminal__log-text--alert' :
                           log.includes("OK") ? 'security-terminal__log-text--ok' :
                           'security-terminal__log-text--info'
                         }`}>
                           {log}
                         </span>
                       </div>
                     ))}
                     <div className="security-terminal__cursor">_</div>
                   </div>
                 </div>
               </ScrollReveal>
            </div>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          THREAT INTEL (Why LightSpeed)
          ============================================ */}
      <section className="service-section service-section--bg-card service-section--bordered">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="security-threat__heading">
                <span className="security-threat__heading-prompt">&gt;</span> 
                SYSTEM_STATUS: SECURE
              </h2>
              <p className="service-section__description">
                {data.whyLightSpeed.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="service-section__grid">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="security-threat__card security-threat__card--red">
                <div className="security-threat__card-icon security-threat__card-icon--red">
                  <Activity size={32} />
                </div>
                <h3 className="security-threat__card-title">Real-time monitoring</h3>
                <p className="security-threat__card-desc">24/7 surveillance of file changes, login attempts, and traffic spikes.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="security-threat__card security-threat__card--green">
                <div className="security-threat__card-icon security-threat__card-icon--green">
                  <Lock size={32} />
                </div>
                <h3 className="security-threat__card-title">Hardened core</h3>
                <p className="security-threat__card-desc">Database encryption, salt key rotation, and strict file permissions.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="security-threat__card security-threat__card--accent">
                <div className="security-threat__card-icon security-threat__card-icon--accent">
                  <Zap size={32} />
                </div>
                <h3 className="security-threat__card-title">Rapid response</h3>
                <p className="security-threat__card-desc">Immediate containment and cleanup if any breach attempts occur.</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Lower sections extracted for file size compliance */}
      <SecurityLowerSections
        relatedServices={data.relatedServices}
        ctaTitle={data.cta.title}
        ctaDescription={data.cta.description}
        ctaButtonText={data.cta.buttonText}
        ctaButtonPage={data.cta.buttonPage}
      />
    </>
  );
}