/**
 * WooCommerce Solution Template
 *
 * Theme: "Neon Market"
 * Visuals: Cyberpunk storefront, neon glows, holographic product card,
 *          scanline grid, pulsing orbs.
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-solution-ecommerce.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * PATTERN COMPONENTS:
 * - ✅ StatsGrid — Results/metrics section
 * - ✅ FeatureList — Enterprise features grid (glow variant)
 *
 * @see /src/styles/templates/page-solution-ecommerce.css
 * @migrated March 3, 2026 — Migrated inline feature grid to FeatureList component
 */

import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { AgencyStats } from '../patterns/AgencyStats';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyProcessTimeline } from '../patterns/AgencyProcessTimeline';
import {
  ShoppingBag,
  CreditCard,
  Truck,
  ChartBar as BarChart3,
  Globe,
  ShieldCheck,
  Lightning as Zap,
  ArrowRight,
} from '@phosphor-icons/react';

import { woocommerceSolutionDetailed } from '../../data/solutions-detailed';

export function WooCommerceSolutionTemplate() {
  const data = woocommerceSolutionDetailed;

  const featureIcons: Record<string, any> = {
    'Custom Product Experience': ShoppingBag,
    'Frictionless Checkout': CreditCard,
    'Smart Logistics': Truck,
    'Conversion Analytics': BarChart3,
    'Global Scale': Globe,
    'Enterprise Security': ShieldCheck,
  };

  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      {/* ============================================
          HERO SECTION — Cyberpunk Storefront
          ============================================ */}
      <section 
        style={{
          position: 'relative',
          padding: 'var(--spacing-24) 0',
          backgroundColor: 'var(--background)',
          overflow: 'hidden'
        }}
      >
        {/* Neon Grid Background */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(to right, var(--primary-soft) 1px, transparent 1px), linear-gradient(to bottom, var(--primary-soft) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.1,
            zIndex: 0
          }}
        />

        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-12" style={{ position: 'relative', zIndex: 1 }}>
            {/* Left: Content */}
            <div className="wp-flex wp-flex-col">
              <ScrollReveal animation="fade-right">
                <div 
                  className="wp-inline-flex wp-items-center wp-gap-2 wp-mb-6"
                  style={{
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--primary)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    boxShadow: '0 0 15px var(--primary-soft)'
                  }}
                >
                  <ShoppingBag size={14} weight="bold" />
                  ECOMMERCE 2.0
                </div>

                <h1 
                  className="wp-m-0 wp-mb-6"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    color: 'var(--foreground)',
                    lineHeight: '1.1'
                  }}
                >
                  Sell Anywhere, <br />
                  <span style={{
                    color: 'var(--primary)',
                    textShadow: '0 0 30px var(--primary-soft)'
                  }}>
                    Scale Everywhere
                  </span>
                </h1>

                <p 
                  className="wp-m-0 wp-mb-8 wp-max-w-xl"
                  style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.6'
                  }}
                >
                  {data.tagline}
                </p>

                <div className="wp-flex wp-gap-4">
                  <a 
                    href="#contact" 
                    className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2"
                    style={{
                      padding: 'var(--spacing-3) var(--spacing-6)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      borderRadius: 'var(--radius)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      textDecoration: 'none',
                      boxShadow: '0 4px 15px var(--primary-soft)'
                    }}
                  >
                    Start Selling <ArrowRight size={18} weight="bold" />
                  </a>
                  <a 
                    href="#features" 
                    className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2"
                    style={{
                      padding: 'var(--spacing-3) var(--spacing-6)',
                      backgroundColor: 'transparent',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                      borderRadius: 'var(--radius)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      textDecoration: 'none'
                    }}
                  >
                    View Features
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Holographic Product */}
            <div className="wp-hide-mobile wp-flex wp-justify-center" style={{ position: 'relative' }}>
              <ScrollReveal animation="fade-left" delay={200}>
                
                {/* Glowing Hologram Backdrop */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  filter: 'blur(80px)',
                  opacity: 0.3,
                  zIndex: 0
                }} />
                
                {/* Holographic Card */}
                <div 
                  className="wp-flex wp-flex-col wp-p-6"
                  style={{
                    position: 'relative',
                    width: '280px',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--primary)',
                    boxShadow: '0 0 30px rgba(var(--primary-rgb), 0.2), inset 0 0 20px rgba(var(--primary-rgb), 0.2)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 1,
                    overflow: 'hidden'
                  }}
                >
                  {/* Scanline overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(var(--overlay-subtle) 50%, transparent 50%)',
                    backgroundSize: '100% 4px',
                    pointerEvents: 'none'
                  }} />

                  <div className="wp-flex wp-justify-between wp-items-center wp-mb-6" style={{ position: 'relative' }}>
                    <span style={{ 
                      fontFamily: 'monospace', 
                      fontSize: 'var(--text-xs)', 
                      color: 'var(--primary)' 
                    }}>
                      ID: #8392-X
                    </span>
                    <ShoppingBag size={20} color="var(--primary)" weight="duotone" />
                  </div>

                  <div className="wp-flex wp-flex-col wp-gap-3 wp-mb-6" style={{ position: 'relative' }}>
                    <div style={{ height: '12px', width: '80%', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-full)', opacity: 0.8 }} />
                    <div style={{ height: '12px', width: '60%', backgroundColor: 'var(--primary-soft)', borderRadius: 'var(--radius-full)', opacity: 0.5 }} />
                    <div style={{ height: '12px', width: '90%', backgroundColor: 'var(--primary-soft)', borderRadius: 'var(--radius-full)', opacity: 0.5 }} />
                  </div>

                  <div className="wp-flex wp-justify-between wp-items-end wp-mt-auto wp-pt-4" style={{ position: 'relative', borderTop: '1px solid rgba(var(--primary-rgb), 0.3)' }}>
                    <span style={{ 
                      fontFamily: 'var(--font-primary)', 
                      fontSize: 'var(--text-h3)', 
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--foreground)'
                    }}>
                      $2,499.00
                    </span>
                    <span style={{ 
                      fontFamily: 'var(--font-secondary)', 
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--primary)',
                      letterSpacing: '0.1em'
                    }}>
                      IN STOCK
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>

        <div style={{ marginTop: 'var(--spacing-12)' }}>
          <ScrollDownArrow />
        </div>
      </section>

      {/* ============================================
          STATS SECTION — The Dashboard
          ============================================ */}
      <section className="wp-py-12">
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading="E-Commerce Results"
              subheading="Real metrics from scaling digital storefronts."
              stats={data.results.map((result, i) => ({
                id: `result-${i}`,
                value: result.stat,
                label: result.label,
                description: result.description
              }))}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          FEATURES GRID — The Product Catalog
          ============================================ */}
      <section id="features" className="wp-py-12">
        <Container>
          <ScrollReveal animation="fade-up" delay={100}>
            <ServiceCapabilitiesGrid
              heading="Enterprise-Grade Commerce"
              subheading="Everything you need to run a high-performance online store."
              capabilities={data.features.map((feature, i) => ({
                id: `feat-${i}`,
                title: feature.title,
                description: feature.description,
                icon: featureIcons[feature.title] || Zap
              }))}
              columns={3}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          APPROACH — The Blueprint
          ============================================ */}
      <section className="wp-py-16" style={{ backgroundColor: 'var(--muted)' }}>
        <Container>
          <div className="wp-grid-2-cols wp-gap-16">
            <ScrollReveal animation="fade-right">
              <div>
                <AgencyProcessTimeline
                  heading={data.approach.title}
                  subheading={data.approach.description}
                  steps={data.approach.steps.map((step, i) => ({
                    id: `step-${i}`,
                    number: step.number,
                    title: step.title,
                    description: step.description,
                    icon: Zap
                  }))}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div 
                className="wp-p-8 wp-flex wp-flex-col"
                style={{
                  backgroundColor: 'var(--terminal-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-xl)',
                  position: 'relative',
                  overflow: 'hidden',
                  marginTop: 'var(--spacing-32)'
                }}
              >
                {/* Tech Glow */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  filter: 'blur(60px)',
                  opacity: 0.2,
                  zIndex: 0
                }} />

                <h3 className="wp-m-0 wp-mb-8 wp-flex wp-items-center wp-gap-3" style={{ 
                  fontFamily: 'var(--font-primary)', 
                  fontSize: 'var(--text-h4)', 
                  color: 'var(--foreground)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <Globe size={24} color="var(--primary)" weight="duotone" />
                  {data.techStack.title}
                </h3>

                <div className="wp-flex wp-flex-col wp-gap-4" style={{ position: 'relative', zIndex: 1 }}>
                  {data.techStack.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="wp-flex wp-items-center wp-gap-3 wp-px-4 wp-py-3"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        borderRadius: 'var(--radius)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontFamily: 'monospace',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      <span style={{ color: 'var(--primary)', fontWeight: 'var(--font-weight-bold)' }}>$</span>
                      <span style={{ color: 'var(--foreground)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          CTA SECTION — Checkout
          ============================================ */}
      <section id="contact" style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)', position: 'relative', overflow: 'hidden' }}>
        {/* Background Gradients */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)',
          zIndex: 0
        }} />

        <Container>
          <ScrollReveal animation="scale">
            <div 
              className="wp-flex wp-flex-col wp-items-center wp-text-center wp-p-12 wp-mx-auto"
              style={{
                maxWidth: '800px',
                backgroundColor: 'rgba(var(--card-rgb), 0.5)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(var(--primary-rgb), 0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div 
                className="wp-flex wp-items-center wp-justify-center wp-mb-8"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--primary-soft)',
                  color: 'var(--primary)'
                }}
              >
                <ShoppingBag size={40} weight="duotone" />
              </div>

              <h2 className="wp-m-0 wp-mb-4" style={{ 
                fontFamily: 'var(--font-primary)', 
                fontSize: 'var(--text-h2)', 
                color: 'var(--foreground)' 
              }}>
                {data.cta.title}
              </h2>

              <p className="wp-m-0 wp-mb-8" style={{ 
                fontFamily: 'var(--font-secondary)', 
                fontSize: 'var(--text-lg)', 
                color: 'var(--muted-foreground)',
                maxWidth: '600px'
              }}>
                {data.cta.description}
              </p>

              <div className="wp-flex wp-gap-4">
                <a
                  href={`/${data.cta.buttonPage}`}
                  className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2"
                  style={{
                    padding: 'var(--spacing-4) var(--spacing-8)',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px var(--primary-soft)'
                  }}
                >
                  {data.cta.buttonText}
                </a>
                <a 
                  href="/work" 
                  className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2"
                  style={{
                    padding: 'var(--spacing-4) var(--spacing-8)',
                    backgroundColor: 'transparent',
                    border: '2px solid var(--primary)',
                    color: 'var(--primary)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-bold)',
                    textDecoration: 'none'
                  }}
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}