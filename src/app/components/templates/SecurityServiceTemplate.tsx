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
 * - All styling via @/styles/templates/page-service-security.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 *
 * PATTERN COMPONENTS:
 * - ✅ FeatureList — Defense Protocols section (glow variant, 4 columns)
 * - ✅ ProcessTimeline — Security Protocol section (vertical orientation)
 * - ✅ StatsGrid — Security metrics section (cards variant)
 * - ✅ FunkyCTA — Final conversion section
 * - ✅ FAQSection — FAQ section
 * - ✅ ServiceTestimonial — Testimonial section
 * - ✅ ServicePricingTimeline — Pricing & timeline section
 * - ✅ RelatedServicesInPhase — Related services navigation
 *
 * @migrated March 3, 2026 — Migrated inline defense protocols grid to FeatureList and inline security protocol grid to ProcessTimeline components
 */

import { useState, useEffect } from 'react';
import '../../../styles/templates/page-service-security.css';
import { Container } from '../common/Container';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FeatureList } from '../patterns/FeatureList';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { StatsGrid } from '../patterns/StatsGrid';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { servicePricingTimeline } from '../../data/services';
import { Button } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { 
  Shield, 
  Lock, 
  Terminal, 
  ChartLineUp as Activity, 
  Eye, 
  MagnifyingGlass as Search, 
  Warning as AlertTriangle, 
  CheckCircle, 
  HardDrives as Server, 
  Lightning as Zap, 
  Trash, 
  FileCode
} from '@phosphor-icons/react';

// Import detailed data
import { 
  securityServiceHero,
  securityServiceFeatures,
  securityServiceProcess,
  securityServiceCTA
} from '../../data/security-service-page';

export function SecurityServiceTemplate() {
  // Build a unified data object from imports
  const data = {
    tagline: securityServiceHero.subtitle || "Your WordPress site is under attack 24/7.",
    whyLightSpeed: {
      description: securityServiceFeatures.description || "Comprehensive protection against hackers, malware, and data breaches"
    },
    subServices: securityServiceFeatures.features?.map((feat, i) => ({
      id: `service-${i}`,
      title: feat.title,
      description: feat.description
    })) || [],
    process: {
      title: securityServiceProcess.title,
      description: securityServiceProcess.description || "Our systematic approach to securing your WordPress site",
      steps: securityServiceProcess.steps.map((step, i) => ({
        id: `step-${i}`,
        number: `${i + 1}`,
        title: step.title,
        description: step.description
      }))
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
      <section className="security-page__hero">
        <div className="security-page__grid-bg" aria-hidden="true" />
        <div className="security-page__radar" aria-hidden="true" />
        
        <Container>
          <div className="security-page__hero-grid">
            <div className="security-page__hero-content">
              <ScrollReveal animation="fade-right">
                <span className="security-page__badge">
                  <Shield size={16} />
                  <span>CYBER DEFENSE ACTIVE</span>
                </span>
                
                <h1 className="security-page__title">
                  Digital <br />
                  <span>Fortress.</span>
                </h1>
                
                <p className="security-page__desc">
                  {data.tagline} We build an impenetrable perimeter around your digital assets.
                </p>

                <div className="security-page__buttons">
                  <Button
                    variant="default"
                    size="lg"
                    page="contact"
                    className="security-page__btn-scan"
                  >
                    <Terminal size={20} />
                    INITIATE_SCAN
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    page="hosting"
                    className="security-page__btn-protocols"
                  >
                    VIEW_PROTOCOLS
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="security-page__hero-visual">
               {/* Terminal Visual */}
               <ScrollReveal animation="fade-left">
                 <div className="security-page__monitor">
                   <div className="security-page__monitor-header">
                     <div className="security-page__monitor-dots">
                       <div className="security-page__monitor-dot security-page__monitor-dot--red" />
                       <div className="security-page__monitor-dot security-page__monitor-dot--yellow" />
                       <div className="security-page__monitor-dot security-page__monitor-dot--green" />
                     </div>
                     <div className="security-page__monitor-user">root@lightspeed:~</div>
                   </div>
                   <div className="security-page__monitor-screen">
                     <div className="security-page__monitor-welcome">
                       Welcome to LightSpeed Defense System v4.0<br/>
                       Copyright (c) 2025 LightSpeed Agency
                     </div>
                     {logs.map((log, i) => (
                       <div key={i} className="security-page__log-entry">
                         <span className="security-page__log-time">{new Date().toLocaleTimeString()} &gt;</span> 
                         <span className={
                           log.includes("detected") ? "security-page__log-alert" : 
                           log.includes("OK") ? "security-page__log-ok" : ""
                         }>
                           {log}
                         </span>
                       </div>
                     ))}
                     <div className="security-page__terminal-cursor">_</div>
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
      <section className="security-page__threat-intel">
        <Container>
          <div className="security-page__intel-header">
            <ScrollReveal animation="fade-up">
              <h2 className="security-page__intel-title">
                <span className="security-page__intel-title-accent">&gt;</span> 
                SYSTEM_STATUS: SECURE
              </h2>
              <p className="security-page__intel-desc">
                {data.whyLightSpeed.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="security-page__intel-grid">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="security-page__intel-card security-page__intel-card--alert">
                <div className="security-page__intel-icon security-page__intel-icon--alert">
                  <Activity size={32} />
                </div>
                <h3 className="security-page__intel-heading">Real-time Monitoring</h3>
                <p className="security-page__intel-text">24/7 surveillance of file changes, login attempts, and traffic spikes.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="security-page__intel-card security-page__intel-card--safe">
                <div className="security-page__intel-icon security-page__intel-icon--safe">
                  <Lock size={32} />
                </div>
                <h3 className="security-page__intel-heading">Hardened Core</h3>
                <p className="security-page__intel-text">Database encryption, salt key rotation, and strict file permissions.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="security-page__intel-card security-page__intel-card--info">
                <div className="security-page__intel-icon security-page__intel-icon--info">
                  <Zap size={32} />
                </div>
                <h3 className="security-page__intel-heading">Rapid Response</h3>
                <p className="security-page__intel-text">Immediate containment and cleanup if any breach attempts occur.</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          DEFENSE PROTOCOLS (Sub-Services)
          ============================================ */}
      <section className="security-page__services">
        <Container>
          <div className="security-page__services-header">
            <div className="security-page__divider" />
            <h2 className="security-page__services-title">
              Defense Protocols
            </h2>
            <div className="security-page__divider" />
          </div>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={securityServiceFeatures.features.map((feat) => ({
                icon: feat.icon as any, // Features already have icons from data
                title: feat.title,
                description: feat.description
              }))}
              columns={4}
              variant="glow"
              iconSize="md"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          SYSTEM SCAN (Process)
          ============================================ */}
      <section className="security-page__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <ProcessTimeline
              heading={securityServiceProcess.title}
              description={securityServiceProcess.description || "Our systematic approach to securing your WordPress site"}
              steps={securityServiceProcess.steps.map((step, i) => ({
                id: `step-${i}`,
                number: i + 1,
                title: step.step,
                description: step.description
              }))}
              showNumbers={true}
              orientation="vertical"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          STATS (Metrics)
          ============================================ */}
      <section className="security-page__stats">
        <Container>
          <StatsGrid
            stats={[
              { number: '24/7', label: 'Monitoring' },
              { number: '100%', label: 'Uptime Goal' },
              { number: '<1hr', label: 'Response Time' },
              { number: 'Zero', label: 'Data Loss' }
            ]}
            columns={4}
            variant="cards"
          />
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={[
        { question: "How often do you scan my site?", answer: "We perform real-time monitoring and daily deep scans of all file changes." },
        { question: "Can you fix a hacked site?", answer: "Yes, our Malware Removal service is designed specifically to clean and restore compromised websites." },
        { question: "Do I need security if I have hosting?", answer: "While hosting provides server-level security, our service protects the application layer (WordPress) where most hacks occur." },
        { question: "Will security plugins slow down my site?", answer: "No, our security measures are optimized for performance and run efficiently at the server level where possible." }
      ]} variant="dark" />

      {/* CTA Section */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
          subtitle="Strengthen your security posture with these additional services"
          services={data.relatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="security"
        subtitle="Our security service is part of these comprehensive solution packages"
      />
      <ServiceTestimonial
        serviceSlug="security"
        subtitle="Clients who trust us to protect their WordPress infrastructure"
      />
      
      {/* ============================================
          PRICING & TIMELINE
          ============================================ */}
      {servicePricingTimeline.security && (
        <ScrollReveal animation="fade-up">
          <section className="security-service__pricing-section">
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.security.pricing}
                timeline={servicePricingTimeline.security.timeline}
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
        currentServicePage="security"
      />

      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Comprehensive vulnerability assessment',
          'Malware removal & prevention',
          '24/7 monitoring & rapid response',
          'SSL, firewall & hardening included'
        ]}
      />
    </>
  );
}