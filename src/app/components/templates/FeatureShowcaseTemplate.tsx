/**
 * Feature Showcase Template
 * 
 * Comprehensive demonstration of Option 1 & 2 features.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .showcase-*
 *
 * Pattern Components:
 * - ✅ StatsGrid — Feature stats section (cards variant, 4 columns, with icons)
 * 
 * @see /src/styles/templates/feature-showcase.css
 * @migrated March 4, 2026 — Migrated inline stats grid to StatsGrid component (~25 lines saved)
 * 
 * Lower sections (Animations + Interactive Cards) extracted to
 * FeatureShowcaseLowerSections.tsx for file size compliance.
 */

import '../../../styles/templates/feature-showcase.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { Heading } from '../common/Heading';
import { motion } from 'motion/react';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureShowcaseLowerSections } from './FeatureShowcaseLowerSections';

import { 
  InteractiveCard,
  InteractiveCardContent
} from '../common/InteractiveCard';

import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOptions
} from '../../utils/scrollAnimations';

import { 
  Sparkle, 
  Lightning, 
  Rocket, 
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
                className="wp-text-primary"
              />
              <Heading level={1}>
                Feature showcase
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
          <StatsGrid
            stats={[
              { label: 'New Templates', value: '2', icon: Layout },
              { label: 'Animation Variants', value: '15+', icon: Lightning },
              { label: 'Card Combinations', value: '25', icon: Palette },
              { label: 'Loading Components', value: '8+', icon: Rocket }
            ]}
          />
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
              New archive templates
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
            className="wp-grid-2-cols wp-gap-8"
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
                        <CheckCircle size={16} className="wp-text-primary" />
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
                        <CheckCircle size={16} className="wp-text-primary" />
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

      {/* Animation Variants + Interactive Cards */}
      <FeatureShowcaseLowerSections />
    </>
  );
}