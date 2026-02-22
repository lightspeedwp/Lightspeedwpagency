/**
 * Support Service Template - Funky Redesign
 * 
 * Theme: "Mission Control" (Blue/Green/Red)
 * 
 * Features:
 * - HUD Interface Hero
 * - Live Status Indicators
 * - Terminal Diagnostics
 * - System Modules Grid
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - Zero inline styles (except CSS variable dynamic values)
 * - All styling via @/styles/templates/page-service-support.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 */

import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Button } from '../blocks/design/Buttons';
import { supportServiceDetailed } from '../../data/services-detailed';
import { ScrollReveal } from '../../hooks/useScrollReveal';

import { 
  LifeBuoy, Code, Move, Server, Chrome, AlertTriangle, Bug, MessageCircle, 
  Shield, GitBranch, Database, Plug, Trash2, Share2, Smartphone, Image, 
  Share, Layout, Zap, Activity
} from 'lucide-react';

export function SupportServiceTemplate() {
  const data = supportServiceDetailed;

  // Icon mapping
  const serviceIcons: Record<string, any> = {
    'design-development-support': Code,
    'migrations-support': Move,
    'hosting-support': Server,
    'browser-compatibility': Chrome,
    'error-messages': AlertTriangle,
    'bug-fixes': Bug,
    'advice': MessageCircle,
    'security-support': Shield,
    'staging-environments': GitBranch,
    'structured-data': Database,
    'integrate-plugins': Plug,
    'spam': Trash2,
    '301-redirects': Share2,
    'mobile-bug-fixes': Smartphone,
    'image-optimization': Image,
    'open-graph-tags': Share,
    'broken-design': Layout,
    'site-speed': Zap
  };

  return (
    <>
      {/* ============================================
          HERO SECTION (The Dashboard)
          ============================================ */}
      <section className="support-page__hero">
        <div className="support-page__grid" aria-hidden="true" />
        <div className="support-page__radar" aria-hidden="true" />
        
        <Container>
          <div className="support-page__hero-content">
            <ScrollReveal animation="fade-down">
              {/* Live Status Badge */}
              <div className="support-page__status-badge">
                <span className="support-page__status-dot" />
                SYSTEMS ONLINE: 99.9% UPTIME
              </div>
              
              <h1 className="support-page__title">
                Mission Control for <br />
                <span className="support-page__title-gradient">
                  WordPress
                </span>
              </h1>
              
              <p className="support-page__hero-desc">
                {data.tagline}
              </p>

              <div className="support-page__hero-buttons">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  className="support-page__btn-primary"
                >
                  Request Support
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="pricing"
                  className="support-page__btn-outline"
                >
                  View Plans
                </Button>
              </div>

              {/* Live Metrics Strip */}
              <div className="support-page__metrics">
                <div className="support-page__metric-item">
                  <div className="support-page__metric-value">24/7</div>
                  <div className="support-page__metric-label">Monitoring</div>
                </div>
                <div className="support-page__metric-item">
                  <div className="support-page__metric-value support-page__metric-value--success">&lt; 1h</div>
                  <div className="support-page__metric-label">Response</div>
                </div>
                <div className="support-page__metric-item">
                  <div className="support-page__metric-value">100%</div>
                  <div className="support-page__metric-label">Secure</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          OVERVIEW (Terminal)
          ============================================ */}
      <section className="support-page__overview">
        <Container>
          <div className="support-page__overview-grid">
            <ScrollReveal animation="fade-right">
              <div>
                <div className="support-page__diagnostic-label">
                  <Activity size={20} className="support-page__diagnostic-label-icon" />
                  <span className="support-page__diagnostic-label-text">
                    System Diagnostic
                  </span>
                </div>
                <h2 className="support-page__modules-title">
                  {data.whyLightSpeed.title}
                </h2>
                <p className="support-page__overview-desc">
                  {data.whyLightSpeed.description}
                </p>
                
                <ul className="support-page__checklist">
                  {[
                    'Real-time Threat Detection',
                    'Automated Performance Tuning',
                    'Daily Off-site Backups',
                    'Emergency Recovery Protocol'
                  ].map((item, i) => (
                    <li key={i} className="support-page__checklist-item">
                      <div className="support-page__checklist-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            
            {/* Visual: Terminal Window */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="support-page__terminal">
                <div className="support-page__terminal-header">
                  <div className="support-page__terminal-dots">
                    <div className="support-page__dot support-page__dot--red" />
                    <div className="support-page__dot support-page__dot--yellow" />
                    <div className="support-page__dot support-page__dot--green" />
                  </div>
                  <div className="support-page__terminal-title">root@lightspeed:~</div>
                </div>
                <div className="support-page__terminal-body">
                  <div className="support-page__cmd">$ run diagnostics --full</div>
                  <div className="support-page__output">✓ Core Systems......... [OK]</div>
                  <div className="support-page__output">✓ Database............. [OPTIMIZED]</div>
                  <div className="support-page__output">✓ Security Layer....... [ACTIVE]</div>
                  <div className="support-page__output">✓ CDN Status........... [ONLINE]</div>
                  <div className="support-page__cmd">
                    $ _<span className="support-page__cursor" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          MODULES GRID (Cards)
          ============================================ */}
      <section className="support-page__modules">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="support-page__modules-header">
              <div>
                <h2 className="support-page__modules-title">Active Modules</h2>
                <p className="support-page__modules-subtitle">/// SYSTEM CAPABILITIES_V2.0</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="support-page__grid-layout">
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || LifeBuoy;
              return (
                <ScrollReveal key={service.id || index} animation="fade-up" delay={index * 50}>
                  <div className="support-page__card">
                    <div className="support-page__card-icon">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="support-page__card-title">
                      {service.title}
                    </h3>
                    <p className="support-page__card-desc">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          RELATED SERVICES
          ============================================ */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
          subtitle="Combine support with these services for maximum impact"
          services={data.relatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="support"
        subtitle="Our support service is part of these comprehensive solution packages"
      />
      <ServiceTestimonial
        serviceSlug="support"
        subtitle="Hear from clients who rely on our ongoing WordPress support"
      />

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Proactive monitoring & alerts',
          'Security patches & updates',
          'Performance optimisation',
          'Priority ticket support',
          'Monthly health reports'
        ]}
      />
    </>
  );
}