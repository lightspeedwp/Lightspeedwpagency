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
 * - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono)
 *
 * PATTERN COMPONENTS:
 * - ✅ StatsGrid — Results/metrics section
 * - ✅ FeatureList — Enterprise features grid (glow variant)
 *
 * @see /src/styles/templates/page-solution-ecommerce.css
 * @migrated March 3, 2026 — Migrated inline feature grid to FeatureList component
 */

import '../../../styles/templates/page-solution-ecommerce.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureList } from '../patterns/FeatureList';
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
    <div className="ecommerce-page">
      {/* ============================================
          HERO SECTION — Cyberpunk Storefront
          ============================================ */}
      <section className="ecommerce-page__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="ecommerce-page__hero-layout">
              {/* Left: Content */}
              <div className="ecommerce-page__hero-content">
                <span className="ecommerce-page__badge">ECOMMERCE 2.0</span>

                <h1 className="ecommerce-page__title">
                  Sell Anywhere, <br />
                  <span className="ecommerce-page__highlight">Scale Everywhere</span>
                </h1>

                <p className="ecommerce-page__tagline">{data.tagline}</p>

                <div className="ecommerce-page__hero-buttons">
                  <a href="#contact" className="ecommerce-page__btn-primary">
                    Start Selling <ArrowRight size={20} />
                  </a>
                  <a href="#features" className="ecommerce-page__btn-outline">
                    View Features
                  </a>
                </div>
              </div>

              {/* Right: Holographic Product */}
              <div className="ecommerce-page__hologram-wrapper">
                <div className="ecommerce-page__hologram">
                  <div className="ecommerce-page__hologram-scan" />
                  <span className="ecommerce-page__hologram-id">ID: #8392-X</span>

                  <div className="ecommerce-page__hologram-body">
                    <div className="ecommerce-page__hologram-bar ecommerce-page__hologram-bar--accent" />
                    <div className="ecommerce-page__hologram-bar ecommerce-page__hologram-bar--muted" />
                    <div className="ecommerce-page__hologram-footer">
                      <span className="ecommerce-page__hologram-price">$2,499.00</span>
                      <span className="ecommerce-page__hologram-stock">IN STOCK</span>
                    </div>
                  </div>
                </div>

                <div className="ecommerce-page__hologram-glow" aria-hidden="true" />
              </div>
            </div>
          </ScrollReveal>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          STATS SECTION — The Dashboard
          ============================================ */}
      <section className="ecommerce-page__stats">
        <Container>
          <ScrollReveal animation="fade-up">
            <StatsGrid
              stats={data.results.map((result) => ({
                number: result.stat,
                label: result.label,
                description: result.description
              }))}
              columns={4}
              variant="cards"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          FEATURES GRID — The Product Catalog
          ============================================ */}
      <section className="ecommerce-page__features" id="features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="ecommerce-page__features-header">
              <span className="ecommerce-page__features-label">
                {'// SYSTEM MODULES'}
              </span>
              <h2 className="ecommerce-page__features-title">
                Enterprise-Grade Commerce
              </h2>
              <p className="ecommerce-page__features-desc">
                Everything you need to run a high-performance online store.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={data.features.map((feature, index) => ({
                icon: featureIcons[feature.title] || Zap,
                title: feature.title,
                description: feature.description
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
          APPROACH — The Blueprint
          ============================================ */}
      <section className="ecommerce-page__approach">
        <Container>
          <div className="ecommerce-page__approach-grid">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="ecommerce-page__approach-title">{data.approach.title}</h2>
                <p className="ecommerce-page__approach-desc">{data.approach.description}</p>

                <div className="ecommerce-page__steps">
                  {data.approach.steps.map((step, index) => (
                    <div key={index} className="ecommerce-page__step">
                      <div className="ecommerce-page__step-number">{step.number}</div>
                      <div>
                        <h4 className="ecommerce-page__step-title">{step.title}</h4>
                        <p className="ecommerce-page__step-desc">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="ecommerce-page__tech-sidebar">
                <h3 className="ecommerce-page__tech-header">
                  <Globe size={20} className="ecommerce-page__tech-header-icon" />
                  {data.techStack.title}
                </h3>
                <div className="ecommerce-page__tech-grid">
                  {data.techStack.items.map((item, idx) => (
                    <div key={idx} className="ecommerce-page__tech-item">
                      <span className="ecommerce-page__tech-prompt">$</span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="ecommerce-page__tech-sidebar-glow" aria-hidden="true" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          CTA SECTION — Checkout
          ============================================ */}
      <section className="ecommerce-page__cta" id="contact">
        <Container>
          <ScrollReveal animation="scale">
            <div className="ecommerce-page__cta-content">
              <ShoppingBag size={48} className="ecommerce-page__cta-icon" />
              <h2 className="ecommerce-page__cta-title">{data.cta.title}</h2>
              <p className="ecommerce-page__cta-desc">{data.cta.description}</p>

              <div className="ecommerce-page__cta-buttons">
                <a
                  href={`/${data.cta.buttonPage}`}
                  className="ecommerce-page__btn-primary"
                >
                  {data.cta.buttonText}
                </a>
                <a href="/work" className="ecommerce-page__btn-outline">
                  View Case Studies
                </a>
              </div>
            </div>
          </ScrollReveal>
          <div className="ecommerce-page__cta-grid-bg" aria-hidden="true" />
        </Container>
      </section>
    </div>
  );
}