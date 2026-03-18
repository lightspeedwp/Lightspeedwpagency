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
import { WebGLCyberRadar } from '../patterns/WebGLCyberRadar';
import { 
  Shield, 
  Terminal,
} from '@phosphor-icons/react';
import { securityTerminalMessages, securityThreatCards } from '../../data/security-service-template-data';

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
    const messages = securityTerminalMessages;
    
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
          <div className="service-section__grid service-section__grid--2 service-section__grid--align-center service-section__grid--gap-lg">
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

                <div className="service-hero__cta-group">
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
               {/* Cyber Radar Visual */}
               <ScrollReveal animation="fade-left">
                 <div style={{ background: 'var(--card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                   <div style={{ height: '300px', position: 'relative' }}>
                     <WebGLCyberRadar />
                   </div>
                   <div className="security-terminal" style={{ margin: 0, border: 'none', borderTop: '1px solid var(--border)', borderRadius: 0, borderBottomLeftRadius: 'var(--radius-lg)', borderBottomRightRadius: 'var(--radius-lg)' }}>
                     <div className="security-terminal__header">
                       <div className="security-terminal__dots">
                         <div className="security-terminal__dot security-terminal__dot--red" />
                         <div className="security-terminal__dot security-terminal__dot--yellow" />
                         <div className="security-terminal__dot security-terminal__dot--green" />
                       </div>
                       <div className="security-terminal__title">root@lightspeed:~</div>
                     </div>
                     <div className="security-terminal__body">
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
            {securityThreatCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className={`security-threat__card security-threat__card--${card.variant}`}>
                    <div className={`security-threat__card-icon security-threat__card-icon--${card.variant}`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="security-threat__card-title">{card.title}</h3>
                    <p className="security-threat__card-desc">{card.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
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