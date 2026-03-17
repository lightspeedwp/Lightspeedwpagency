/**
 * Feature showcase lower sections
 *
 * Extracted from FeatureShowcaseTemplate.tsx for file size compliance (300 line limit).
 * Contains: Animation Variants + Interactive Cards sections.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
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

import { Code } from '@phosphor-icons/react';

export function FeatureShowcaseLowerSections() {
  return (
    <>
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
              Animation variants
            </h2>
            <p className="showcase__section-desc">
              15+ pre-built animation variants for scroll-triggered effects
            </p>
          </motion.div>

          <div className="wp-grid-3-cols wp-gap-6">
            {[
              { name: 'Fade in up', desc: 'Most common animation. Opacity + upward movement with smooth easing.', variant: fadeInUp },
              { name: 'Fade in down', desc: 'Header animation. Opacity + downward movement for titles.', variant: fadeInDown },
              { name: 'Fade in left', desc: 'Directional animation. Slides in from left with fade.', variant: fadeInLeft },
              { name: 'Scale in', desc: 'Emphasis animation. Zooms in with opacity for attention.', variant: scaleIn },
              { name: 'Bounce in', desc: 'Playful animation. Spring bounce effect for fun elements.', variant: bounceIn },
              { name: 'Rotate in', desc: 'Dynamic animation. Spinning entrance for icons/logos.', variant: rotateIn },
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
              View complete animation guide
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
              Interactive cards
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
            className="wp-grid-3-cols wp-gap-6"
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
              View all combinations
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
