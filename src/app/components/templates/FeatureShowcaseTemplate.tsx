/**
 * Feature Showcase Template
 * 
 * Comprehensive demonstration of Option 1 & 2 features:
 * - New archive templates (Tag, Date)
 * - 15+ animation variants
 * - Interactive cards (5 variants × 5 hover effects)
 * - Loading states (8+ components)
 * - Real-world examples
 * 
 * This is a prototype showcase page (not a WordPress template).
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../ui/BackToTopButton';
import { motion } from 'motion/react';
import { useState } from 'react';

// Import new features
import { 
  InteractiveCard,
  InteractiveCardHeader,
  InteractiveCardContent,
  InteractiveCardFooter 
} from '../common/InteractiveCard';

import {
  LoadingSpinner,
  CardSkeleton,
  ProgressBar,
  DotsLoader,
  PulseLoader,
  SkeletonLine,
  SkeletonCircle
} from '../common/LoadingStates';

import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  bounceIn,
  rotateIn,
  staggerContainer,
  staggerItem,
  viewportOptions
} from '../../utils/scrollAnimations';

import { 
  Sparkles, 
  Zap, 
  Rocket, 
  Code, 
  Palette, 
  Layout,
  ArrowRight,
  CheckCircle,
  Tag,
  Calendar
} from 'lucide-react';

export function FeatureShowcaseTemplate() {
  const [showLoadingDemo, setShowLoadingDemo] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate progress bar
  const startProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <>
      <SiteHeader />
      
      <main id="main-content">
        {/* Hero Section */}
        <Section variant="default" className="pt-24 md:pt-32 pb-16">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles 
                  size={32} 
                  style={{ color: 'var(--primary)' }}
                />
                <h1 
                  style={{ 
                    fontSize: 'var(--text-h1)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Feature Showcase
                </h1>
              </div>
              
              <p 
                className="mb-8"
                style={{
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.6
                }}
              >
                Explore the new interactive features, animations, and components added in Options 1 & 2. 
                All features maintain 100% design system compliance with CSS variables, Lexend/Manrope fonts, 
                and WCAG AA accessibility.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
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
        <Section variant="muted">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { label: 'New Templates', value: '2', icon: Layout, color: 'var(--primary)' },
                { label: 'Animation Variants', value: '15+', icon: Zap, color: 'var(--primary)' },
                { label: 'Card Combinations', value: '25', icon: Palette, color: 'var(--primary)' },
                { label: 'Loading Components', value: '8+', icon: Rocket, color: 'var(--primary)' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="p-6 rounded-lg text-center"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <stat.icon 
                    size={32} 
                    className="mx-auto mb-4"
                    style={{ color: stat.color }}
                  />
                  <div 
                    className="mb-2"
                    style={{
                      fontSize: 'var(--text-h2)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 500,
                      color: 'var(--foreground)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* New Archive Templates */}
        <Section variant="default" id="new-templates">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="text-center mb-12"
            >
              <h2 
                className="mb-4"
                style={{
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                New Archive Templates
              </h2>
              <p 
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Browse content by tag or date with beautiful, interactive archive pages
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                      className="mb-6"
                      style={{ color: 'var(--primary)' }}
                    />
                    <h3 
                      className="mb-4"
                      style={{
                        fontSize: 'var(--text-h3)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Tag Archive Template
                    </h3>
                    <p 
                      className="mb-6"
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif',
                        color: 'var(--muted-foreground)',
                        lineHeight: 1.6
                      }}
                    >
                      Browse posts by tag with related tags navigation, smart filtering, 
                      and animated tag pills. Perfect for content discovery.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Related tags detection',
                        'Post count statistics',
                        'Smart tag descriptions',
                        'Stagger animations'
                      ].map(feature => (
                        <li 
                          key={feature}
                          className="flex items-center gap-2"
                          style={{
                            fontSize: 'var(--text-sm)',
                            fontFamily: 'Manrope, sans-serif',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2" style={{ color: 'var(--primary)' }}>
                      <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}>
                        View Tag Archive
                      </span>
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
                      className="mb-6"
                      style={{ color: 'var(--primary)' }}
                    />
                    <h3 
                      className="mb-4"
                      style={{
                        fontSize: 'var(--text-h3)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Date Archive Template
                    </h3>
                    <p 
                      className="mb-6"
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif',
                        color: 'var(--muted-foreground)',
                        lineHeight: 1.6
                      }}
                    >
                      Browse posts by year or month with interactive calendar navigation, 
                      month grids, and timeline views. Perfect for historical content.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Year/month navigation',
                        'Interactive month grid',
                        'Post count visualization',
                        'Smooth transitions'
                      ].map(feature => (
                        <li 
                          key={feature}
                          className="flex items-center gap-2"
                          style={{
                            fontSize: 'var(--text-sm)',
                            fontFamily: 'Manrope, sans-serif',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2" style={{ color: 'var(--primary)' }}>
                      <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}>
                        View Date Archive
                      </span>
                      <ArrowRight size={16} />
                    </div>
                  </InteractiveCardContent>
                </InteractiveCard>
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* Animation Variants */}
        <Section variant="background" id="animations">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="text-center mb-12"
            >
              <h2 
                className="mb-4"
                style={{
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Animation Variants
              </h2>
              <p 
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                15+ pre-built animation variants for scroll-triggered effects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Fade In Up */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Code size={32} className="mb-4" style={{ color: 'var(--primary)' }} />
                <h3 
                  className="mb-2"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Fade In Up
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Most common animation. Opacity + upward movement with smooth easing.
                </p>
              </motion.div>

              {/* Fade In Down */}
              <motion.div
                variants={fadeInDown}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Code size={32} className="mb-4" style={{ color: 'var(--primary)' }} />
                <h3 
                  className="mb-2"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Fade In Down
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Header animation. Opacity + downward movement for titles.
                </p>
              </motion.div>

              {/* Fade In Left */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Code size={32} className="mb-4" style={{ color: 'var(--primary)' }} />
                <h3 
                  className="mb-2"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Fade In Left
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Directional animation. Slides in from left with fade.
                </p>
              </motion.div>

              {/* Scale In */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Code size={32} className="mb-4" style={{ color: 'var(--primary)' }} />
                <h3 
                  className="mb-2"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Scale In
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Emphasis animation. Zooms in with opacity for attention.
                </p>
              </motion.div>

              {/* Bounce In */}
              <motion.div
                variants={bounceIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Code size={32} className="mb-4" style={{ color: 'var(--primary)' }} />
                <h3 
                  className="mb-2"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Bounce In
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Playful animation. Spring bounce effect for fun elements.
                </p>
              </motion.div>

              {/* Rotate In */}
              <motion.div
                variants={rotateIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Code size={32} className="mb-4" style={{ color: 'var(--primary)' }} />
                <h3 
                  className="mb-2"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Rotate In
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Dynamic animation. Spinning entrance for icons/logos.
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <p 
                className="mb-4"
                style={{
                  fontSize: 'var(--text-base)',
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--muted-foreground)'
                }}
              >
                + 9 more variants including blur, reveal, parallax, and stagger effects
              </p>
              <Button href="/style-guide" variant="secondary">
                View Complete Animation Guide
              </Button>
            </div>
          </Container>
        </Section>

        {/* Interactive Cards */}
        <Section variant="default" id="interactive-cards">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="text-center mb-12"
            >
              <h2 
                className="mb-4"
                style={{
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Interactive Cards
              </h2>
              <p 
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                5 variants × 5 hover effects = 25 unique card combinations
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Default + Lift */}
              <motion.div variants={staggerItem}>
                <InteractiveCard variant="default" hoverEffect="lift">
                  <InteractiveCardContent>
                    <h3 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Default + Lift
                    </h3>
                    <p 
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Most common. Card rises on hover with enhanced shadow.
                    </p>
                  </InteractiveCardContent>
                </InteractiveCard>
              </motion.div>

              {/* Elevated + Scale */}
              <motion.div variants={staggerItem}>
                <InteractiveCard variant="elevated" hoverEffect="scale">
                  <InteractiveCardContent>
                    <h3 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Elevated + Scale
                    </h3>
                    <p 
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Emphasis. Card grows slightly without vertical movement.
                    </p>
                  </InteractiveCardContent>
                </InteractiveCard>
              </motion.div>

              {/* Bordered + Tilt */}
              <motion.div variants={staggerItem}>
                <InteractiveCard variant="bordered" hoverEffect="tilt">
                  <InteractiveCardContent>
                    <h3 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Bordered + Tilt
                    </h3>
                    <p 
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Playful 3D. Card tilts based on mouse position.
                    </p>
                  </InteractiveCardContent>
                </InteractiveCard>
              </motion.div>

              {/* Glass + Glow */}
              <motion.div variants={staggerItem}>
                <InteractiveCard variant="glass" hoverEffect="glow">
                  <InteractiveCardContent>
                    <h3 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Glass + Glow
                    </h3>
                    <p 
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Premium. Glassmorphism with glowing shadow and shine.
                    </p>
                  </InteractiveCardContent>
                </InteractiveCard>
              </motion.div>

              {/* Gradient + Lift */}
              <motion.div variants={staggerItem}>
                <InteractiveCard variant="gradient" hoverEffect="lift">
                  <InteractiveCardContent>
                    <h3 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Gradient + Lift
                    </h3>
                    <p 
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Eye-catching. Subtle gradient with lift effect.
                    </p>
                  </InteractiveCardContent>
                </InteractiveCard>
              </motion.div>

              {/* Default + None */}
              <motion.div variants={staggerItem}>
                <InteractiveCard variant="default" hoverEffect="none">
                  <InteractiveCardContent>
                    <h3 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Any + None
                    </h3>
                    <p 
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Static. Disable animations for dense layouts.
                    </p>
                  </InteractiveCardContent>
                </InteractiveCard>
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* Loading States */}
        <Section variant="muted" id="loading-states">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="text-center mb-12"
            >
              <h2 
                className="mb-4"
                style={{
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Loading States
              </h2>
              <p 
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                8+ skeleton loaders and loading indicators for better UX
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Loading Spinners */}
              <div 
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <h3 
                  className="mb-6"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Spinners
                </h3>
                <div className="flex items-center justify-around gap-4 mb-6">
                  <div className="text-center">
                    <LoadingSpinner size="sm" />
                    <p 
                      className="mt-2"
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Small
                    </p>
                  </div>
                  <div className="text-center">
                    <LoadingSpinner size="md" />
                    <p 
                      className="mt-2"
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Medium
                    </p>
                  </div>
                  <div className="text-center">
                    <LoadingSpinner size="lg" />
                    <p 
                      className="mt-2"
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Large
                    </p>
                  </div>
                </div>
              </div>

              {/* Other Loaders */}
              <div 
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <h3 
                  className="mb-6"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Alternative Loaders
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span 
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--foreground)'
                      }}
                    >
                      Dots Loader
                    </span>
                    <DotsLoader />
                  </div>
                  <div className="flex items-center justify-between">
                    <span 
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--foreground)'
                      }}
                    >
                      Pulse Loader
                    </span>
                    <PulseLoader size={48} />
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div 
                className="p-6 rounded-lg lg:col-span-2"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 500,
                      color: 'var(--foreground)'
                    }}
                  >
                    Progress Bar
                  </h3>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={startProgress}
                  >
                    Start Demo
                  </Button>
                </div>
                <ProgressBar progress={progress} showLabel={true} />
              </div>

              {/* Skeleton Components */}
              <div 
                className="p-6 rounded-lg lg:col-span-2"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 500,
                      color: 'var(--foreground)'
                    }}
                  >
                    Skeleton Loaders
                  </h3>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowLoadingDemo(!showLoadingDemo)}
                  >
                    {showLoadingDemo ? 'Hide Demo' : 'Show Demo'}
                  </Button>
                </div>
                
                {showLoadingDemo && (
                  <div className="space-y-6">
                    <div>
                      <p 
                        className="mb-3"
                        style={{
                          fontSize: 'var(--text-sm)',
                          fontFamily: 'Manrope, sans-serif',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        Skeleton Lines
                      </p>
                      <div className="space-y-2">
                        <SkeletonLine width="100%" height={20} />
                        <SkeletonLine width="80%" height={20} />
                        <SkeletonLine width="60%" height={20} />
                      </div>
                    </div>

                    <div>
                      <p 
                        className="mb-3"
                        style={{
                          fontSize: 'var(--text-sm)',
                          fontFamily: 'Manrope, sans-serif',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        Skeleton with Avatar
                      </p>
                      <div className="flex items-center gap-4">
                        <SkeletonCircle size={48} />
                        <div className="flex-1 space-y-2">
                          <SkeletonLine width="60%" height={16} />
                          <SkeletonLine width="40%" height={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section variant="default">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 
                className="mb-4"
                style={{
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Ready to Use These Features?
              </h2>
              <p 
                className="mb-8"
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.6
                }}
              >
                All features maintain 100% design system compliance with CSS variables, 
                approved fonts (Lexend/Manrope), and WCAG AA accessibility.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/style-guide" size="lg">
                  View Style Guide
                </Button>
                <Button href="/front-page" variant="secondary" size="lg">
                  Back to Home
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}