/**
 * WooCommerce Solution — Hero Section
 *
 * Cyberpunk storefront hero with holographic product card,
 * neon grid background, and scanline effects.
 *
 * BEM Block: .wc-hero
 *
 * @see /src/styles/templates/woocommerce-solution.css
 * @see /src/app/components/templates/WooCommerceSolutionTemplate.tsx
 */

import { Container } from '../../common/Container';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../../common/ScrollDownArrow';
import { ShoppingBag, ArrowRight } from '@phosphor-icons/react';

interface WooCommerceHeroProps {
  tagline: string;
}

export function WooCommerceHero({ tagline }: WooCommerceHeroProps) {
  return (
    <section className="wc-hero">
      {/* Neon Grid Background */}
      <div className="wc-hero__grid-bg" />

      <Container>
        <div className="wp-grid-2-cols wp-items-center wp-gap-12 wc-hero__content">
          {/* Left: Content */}
          <div className="wp-flex wp-flex-col">
            <ScrollReveal animation="fade-right">
              <div className="wp-inline-flex wp-items-center wp-gap-2 wp-mb-6 wc-hero__badge">
                <ShoppingBag size={14} weight="bold" />
                ECOMMERCE 2.0
              </div>

              <h1 className="wp-m-0 wp-mb-6 wc-hero__title">
                Sell Anywhere, <br />
                <span className="wc-hero__gradient-text">
                  Scale Everywhere
                </span>
              </h1>

              <p className="wp-m-0 wp-mb-8 wp-max-w-xl wc-hero__description">
                {tagline}
              </p>

              <div className="wp-flex wp-gap-4">
                <a
                  href="#contact"
                  className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2 wc-hero__btn-primary"
                >
                  Start Selling <ArrowRight size={18} weight="bold" />
                </a>
                <a
                  href="#features"
                  className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2 wc-hero__btn-secondary"
                >
                  View Features
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Holographic Product */}
          <div className="wp-hide-mobile wp-flex wp-justify-center wc-hero__hologram-wrapper">
            <ScrollReveal animation="fade-left" delay={200}>
              {/* Glowing Hologram Backdrop */}
              <div className="wc-hero__hologram-backdrop" />

              {/* Holographic Card */}
              <div className="wp-flex wp-flex-col wp-p-6 wc-hero__hologram-card">
                {/* Scanline overlay */}
                <div className="wc-hero__scanlines" />

                <div className="wp-flex wp-justify-between wp-items-center wp-mb-6 wc-hero__product-header">
                  <span className="wc-hero__product-id">
                    ID: #8392-X
                  </span>
                  <ShoppingBag size={20} color="var(--primary)" weight="duotone" />
                </div>

                <div className="wp-flex wp-flex-col wp-gap-3 wp-mb-6 wc-hero__skeleton-group">
                  <div className="wc-hero__skeleton-bar wc-hero__skeleton-bar--primary" />
                  <div className="wc-hero__skeleton-bar wc-hero__skeleton-bar--secondary wc-hero__skeleton-bar--w60" />
                  <div className="wc-hero__skeleton-bar wc-hero__skeleton-bar--secondary wc-hero__skeleton-bar--w90" />
                </div>

                <div className="wp-flex wp-justify-between wp-items-end wp-mt-auto wp-pt-4 wc-hero__product-footer">
                  <span className="wc-hero__price">
                    $2,499.00
                  </span>
                  <span className="wc-hero__stock">
                    IN STOCK
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>

      <div className="wc-hero__scroll-arrow">
        <ScrollDownArrow />
      </div>
    </section>
  );
}
