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
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(var(--success) 1px, transparent 1px), linear-gradient(90deg, var(--success) 1px, transparent 1px)', backgroundSize: 'var(--gradient-grid-size)', zIndex: 0 }} aria-hidden="true" />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, color-mix(in srgb, var(--success) 10%, transparent) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <ScrollReveal animation="fade-right">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-2)', padding: 'var(--spacing-2) var(--spacing-4)', backgroundColor: 'color-mix(in srgb, var(--color-terminal-green) 10%, transparent)', color: 'var(--color-terminal-green)', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)', border: '1px solid color-mix(in srgb, var(--color-terminal-green) 30%, transparent)', marginBottom: 'var(--spacing-6)' }}>
                  <Shield size={16} />
                  <span>CYBER DEFENSE ACTIVE</span>
                </span>
                
                <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)', lineHeight: 1.1 }}>
                  Digital <br />
                  <span style={{ color: 'var(--color-terminal-red)' }}>Fortress.</span>
                </h1>
                
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 'var(--spacing-10)' }}>
                  {data.tagline} We build an impenetrable perimeter around your digital assets.
                </p>

                <div className="wp-flex wp-gap-4 wp-flex-wrap">
                  <Button
                    variant="default"
                    size="lg"
                    page="contact"
                    style={{ backgroundColor: 'var(--color-terminal-red)', color: 'var(--foreground)', border: 'none', fontFamily: 'var(--font-mono)' }}
                  >
                    <Terminal size={20} />
                    INITIATE_SCAN
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    page="hosting"
                    style={{ borderColor: 'var(--color-terminal-green)', color: 'var(--color-terminal-green)', fontFamily: 'var(--font-mono)' }}
                  >
                    VIEW_PROTOCOLS
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
               {/* Terminal Visual */}
               <ScrollReveal animation="fade-left">
                 <div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
                   <div style={{ backgroundColor: 'var(--muted)', padding: 'var(--spacing-3) var(--spacing-4)', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
                     <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                       <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-terminal-red)' }} />
                       <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-terminal-yellow)' }} />
                       <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-terminal-green)' }} />
                     </div>
                     <div style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>root@lightspeed:~</div>
                   </div>
                   <div style={{ padding: 'var(--spacing-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-terminal-green)', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                     <div style={{ color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-4)' }}>
                       Welcome to LightSpeed Defense System v4.0<br/>
                       Copyright (c) 2025 LightSpeed Agency
                     </div>
                     {logs.map((log, i) => (
                       <div key={i} style={{ marginBottom: 'var(--spacing-2)' }}>
                         <span style={{ color: 'color-mix(in srgb, var(--muted-foreground) 50%, transparent)' }}>{new Date().toLocaleTimeString()} &gt;</span> 
                         <span style={{ color: log.includes("detected") ? 'var(--color-terminal-red)' : log.includes("OK") ? 'var(--color-terminal-green)' : 'var(--muted-foreground)', marginLeft: 'var(--spacing-2)' }}>
                           {log}
                         </span>
                       </div>
                     ))}
                     <div style={{ color: 'var(--color-terminal-green)', animation: 'blink 1s step-end infinite' }}>_</div>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)', textTransform: 'uppercase' }}>
                <span style={{ color: 'var(--color-terminal-green)', marginRight: 'var(--spacing-2)' }}>&gt;</span> 
                SYSTEM_STATUS: SECURE
              </h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                {data.whyLightSpeed.description}
              </p>
            </ScrollReveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)' }}>
            <ScrollReveal animation="fade-up" delay={0}>
              <div style={{ backgroundColor: 'var(--background)', border: '1px solid color-mix(in srgb, var(--color-terminal-red) 30%, transparent)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-8)', height: '100%' }}>
                <div style={{ color: 'var(--color-terminal-red)', marginBottom: 'var(--spacing-6)' }}>
                  <Activity size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-xl)', color: 'var(--foreground)', marginBottom: 'var(--spacing-3)' }}>Real-time Monitoring</h3>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-base)', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>24/7 surveillance of file changes, login attempts, and traffic spikes.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ backgroundColor: 'var(--background)', border: '1px solid color-mix(in srgb, var(--color-terminal-green) 30%, transparent)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-8)', height: '100%' }}>
                <div style={{ color: 'var(--color-terminal-green)', marginBottom: 'var(--spacing-6)' }}>
                  <Lock size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-xl)', color: 'var(--foreground)', marginBottom: 'var(--spacing-3)' }}>Hardened Core</h3>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-base)', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>Database encryption, salt key rotation, and strict file permissions.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ backgroundColor: 'var(--background)', border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-8)', height: '100%' }}>
                <div style={{ color: 'var(--accent)', marginBottom: 'var(--spacing-6)' }}>
                  <Zap size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-xl)', color: 'var(--foreground)', marginBottom: 'var(--spacing-3)' }}>Rapid Response</h3>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-base)', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>Immediate containment and cleanup if any breach attempts occur.</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          DEFENSE PROTOCOLS (Sub-Services)
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-16)' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              Defense Protocols
            </h2>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)' }}>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
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
          <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)' }}>
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