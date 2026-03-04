/**
 * Feature Showcase Template
 * 
 * Comprehensive demonstration of Option 1 & 2 features.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .showcase-*
 * 
 * @see /src/styles/templates/feature-showcase.css
 */

import '../../../styles/templates/feature-showcase.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { Heading } from '../common/Heading';
import { motion } from 'motion/react';


import { 
  InteractiveCard,
  InteractiveCardContent
} from '../common/InteractiveCard';

import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  scaleIn,
  bounceIn,
  rotateIn,
  staggerContainer,
  staggerItem,
  viewportOptions
} from '../../utils/scrollAnimations';

import { 
  Sparkle, 
  Lightning, 
  Rocket, 
  Code, 
  Palette, 
  Layout,
  ArrowRight,
  CheckCircle,
  Tag,
  Calendar
} from '@phosphor-icons/react';

export function FeatureShowcaseTemplate() {
  return (
    <>
      {/* Hero Section */}
      <Section background="default" spacing="lg">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="showcase__hero-inner"
          >
            <div className="showcase__hero-title-row">
              <Sparkle 
                size={32} 
                style={{ color: 'var(--primary)' }}
              />
              <Heading level={1}>
                Feature Showcase
              </Heading>
            </div>
            
            <p className="showcase__hero-desc">
              Explore the new interactive features, animations, and components added in Options 1 &amp; 2. 
              All features maintain 100% design system compliance with CSS variables, Lexend/Manrope fonts, 
              and WCAG AA accessibility.
            </p>

            <div className="showcase__hero-actions">
              <Button href="#new-templates" size="lg">
                View New Templates
              </Button>
              <Button href="#animations" variant="secondary" size="lg">
                See Animations
              </Button>
              <Button href="#interactive-cards" variant="ghost" size="lg">
                Interactive Cards
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Feature Stats */}
      <Section background="muted" spacing="md">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="wp-grid-4-cols"
            style={{ gap: 'var(--spacing-6)' }}
          >
            {[
              { label: 'New Templates', value: '2', icon: Layout },
              { label: 'Animation Variants', value: '15+', icon: Lightning },
              { label: 'Card Combinations', value: '25', icon: Palette },
              { label: 'Loading Components', value: '8+', icon: Rocket }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="showcase__stat-card"
              >
                <stat.icon 
                  size={32} 
                  style={{ color: 'var(--primary)', margin: '0 auto var(--spacing-4)' }}
                />
                <div className="showcase__stat-value">
                  {stat.value}
                </div>
                <div className="showcase__stat-label">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* New Archive Templates */}
      <Section background="default" spacing="md" id="new-templates">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="showcase__section-header"
          >
            <h2 className="showcase__section-title">
              New Archive Templates
            </h2>
            <p className="showcase__section-desc">
              Browse content by tag or date with beautiful, interactive archive pages
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="wp-grid-2-cols"
            style={{ gap: 'var(--spacing-8)' }}
          >
            {/* Tag Archive */}
            <motion.div variants={staggerItem}>
              <InteractiveCard
                href="/tag-gutenberg"
                variant="elevated"
                hoverEffect="lift"
              >
                <InteractiveCardContent>
                  <Tag 
                    size={48} 
                    className="showcase__template-icon"
                  />
                  <h3 className="showcase__template-title">
                    Tag Archive Template
                  </h3>
                  <p className="showcase__template-desc">
                    Browse posts by tag with related tags navigation, smart filtering, 
                    and animated tag pills. Perfect for content discovery.
                  </p>
                  <ul className="showcase__feature-list">
                    {[
                      'Related tags detection',
                      'Post count statistics',
                      'Smart tag descriptions',
                      'Stagger animations'
                    ].map(feature => (
                      <li 
                        key={feature}
                        className="showcase__feature-item"
                      >
                        <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="showcase__template-link">
                    <span>View Tag Archive</span>
                    <ArrowRight size={16} />
                  </div>
                </InteractiveCardContent>
              </InteractiveCard>
            </motion.div>

            {/* Date Archive */}
            <motion.div variants={staggerItem}>
              <InteractiveCard
                href="/date-2024"
                variant="elevated"
                hoverEffect="lift"
              >
                <InteractiveCardContent>
                  <Calendar 
                    size={48} 
                    className="showcase__template-icon"
                  />
                  <h3 className="showcase__template-title">
                    Date Archive Template
                  </h3>
                  <p className="showcase__template-desc">
                    Browse posts by year or month with interactive calendar navigation, 
                    month grids, and timeline views. Perfect for historical content.
                  </p>
                  <ul className="showcase__feature-list">
                    {[
                      'Year/month navigation',
                      'Interactive month grid',
                      'Post count visualization',
                      'Smooth transitions'
                    ].map(feature => (
                      <li 
                        key={feature}
                        className="showcase__feature-item"
                      >
                        <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="showcase__template-link">
                    <span>View Date Archive</span>
                    <ArrowRight size={16} />
                  </div>
                </InteractiveCardContent>
              </InteractiveCard>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Animation Variants */}
      <Section background="default" spacing="md" id="animations">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="showcase__section-header"
          >
            <h2 className="showcase__section-title">
              Animation Variants
            </h2>
            <p className="showcase__section-desc">
              15+ pre-built animation variants for scroll-triggered effects
            </p>
          </motion.div>

          <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-6)' }}>
            {[
              { name: 'Fade In Up', desc: 'Most common animation. Opacity + upward movement with smooth easing.', variant: fadeInUp },
              { name: 'Fade In Down', desc: 'Header animation. Opacity + downward movement for titles.', variant: fadeInDown },
              { name: 'Fade In Left', desc: 'Directional animation. Slides in from left with fade.', variant: fadeInLeft },
              { name: 'Scale In', desc: 'Emphasis animation. Zooms in with opacity for attention.', variant: scaleIn },
              { name: 'Bounce In', desc: 'Playful animation. Spring bounce effect for fun elements.', variant: bounceIn },
              { name: 'Rotate In', desc: 'Dynamic animation. Spinning entrance for icons/logos.', variant: rotateIn },
            ].map((anim) => (
              <motion.div
                key={anim.name}
                variants={anim.variant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="showcase__anim-card"
              >
                <Code size={32} className="showcase__anim-icon" />
                <h3 className="showcase__anim-title">
                  {anim.name}
                </h3>
                <p className="showcase__anim-desc">
                  {anim.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="showcase__section-footer">
            <p className="showcase__section-footer-text">
              + 9 more variants including blur, reveal, parallax, and stagger effects
            </p>
            <Button href="/style-guide" variant="secondary">
              View Complete Animation Guide
            </Button>
          </div>
        </Container>
      </Section>

      {/* Interactive Cards */}
      <Section background="default" spacing="md" id="interactive-cards">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="showcase__section-header"
          >
            <h2 className="showcase__section-title">
              Interactive Cards
            </h2>
            <p className="showcase__section-desc">
              5 variants &times; 5 hover effects = 25 unique card combinations
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="wp-grid-3-cols"
            style={{ gap: 'var(--spacing-6)' }}
          >
            {[
              { title: 'Default + Lift', desc: 'Most common. Card rises on hover with enhanced shadow.', variant: 'default' as const, effect: 'lift' as const },
              { title: 'Elevated + Scale', desc: 'Emphasis. Card grows slightly without vertical movement.', variant: 'elevated' as const, effect: 'scale' as const },
              { title: 'Bordered + Tilt', desc: 'Playful 3D. Card tilts based on mouse position.', variant: 'bordered' as const, effect: 'tilt' as const },
              { title: 'Muted + Glow', desc: 'Subtle background with colored glow on hover.', variant: 'muted' as const, effect: 'glow' as const },
              { title: 'Gradient + Shine', desc: 'Premium look. Gradient background with light reflection.', variant: 'gradient' as const, effect: 'shine' as const },
            ].map((card) => (
              <motion.div key={card.title} variants={staggerItem}>
                <InteractiveCard variant={card.variant} hoverEffect={card.effect}>
                  <InteractiveCardContent>
                    <h3 
                      className="showcase__card-title"
                      style={card.variant === 'gradient' ? { color: 'var(--primary-foreground)' } : undefined}
                    >
                      {card.title}
                    </h3>
                    <p 
                      className="showcase__card-desc"
                      style={card.variant === 'gradient' ? { color: 'var(--primary-foreground)', opacity: 0.9 } : undefined}
                    >
                      {card.desc}
                    </p>
                  </InteractiveCardContent>
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="showcase__section-footer">
            <Button href="/components#cards" variant="outline">
              View All Combinations
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}