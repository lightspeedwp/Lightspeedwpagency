/**
 * Why Choose Us Template
 * 
 * WordPress template: templates/page-why-choose-us.html
 * 
 * Conversion-focused page showcasing unique value propositions:
 * - 15+ years WordPress expertise
 * - 150+ successful projects
 * - WCAG AA certified team
 * - 90+ Lighthouse scores
 * - Dedicated account managers
 * - Transparent communication
 * 
 * Pattern order: Hero → Stats → Value Props → Team Expertise → Process → TestimonialGrid → SocialProof → FAQSection → CTASection
 * 
 * **Conversion Strategy:**
 * - TestimonialGrid: Build trust with client testimonials
 * - SocialProof: Show client logos and awards
 * - FAQSection: Address common objections
 * - CTASection: Convert convinced visitors
 * 
 * **Accessibility:**
 * - Keyboard navigation for all elements
 * - Screen reader friendly stats
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/why-choose-us.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CTASection } from '../patterns/CTASection';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { testimonials } from '../../data/testimonials';
import { clientLogos } from '../../data/logos';
import { aboutFAQs } from '../../data/faqs';
import { motion } from 'motion/react';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem,
  viewportOptions 
} from '../../utils/scrollAnimations';
import {
  InteractiveCard,
  InteractiveCardContent
} from '../common/InteractiveCard';
import {
  Award,
  Shield,
  Users,
  Zap,
  Heart,
  TrendingUp,
  CheckCircle,
  Star,
  Clock,
  Target,
  Briefcase,
  MessageCircle
} from 'lucide-react';

export function WhyChooseUsTemplate() {
  return (
    <>
      <SiteHeader />
      
      <main id="main-content">
        {/* Breadcrumbs */}
        <Section variant="default" className="pt-24 pb-0">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Why Choose Us', href: '/why-choose-us' }
              ]}
            />
          </Container>
        </Section>

        {/* Hero Section */}
        <Section variant="default" className="pt-8 pb-16">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              <h1 
                className="mb-6"
                style={{
                  fontSize: 'var(--text-h1)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Why 150+ Businesses Choose LSX Design
              </h1>
              
              <p 
                className="mb-8"
                style={{
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.6
                }}
              >
                We're not just developers — we're WordPress experts committed to building 
                accessible, high-performance websites that drive real business results.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/pricing" size="lg">
                  View Pricing
                </Button>
                <Button href="/portfolio-archive" variant="secondary" size="lg">
                  See Our Work
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Stats Section */}
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
                { label: 'Years Experience', value: '15+', icon: Award },
                { label: 'Projects Delivered', value: '150+', icon: Briefcase },
                { label: 'Average Lighthouse', value: '90+', icon: Zap },
                { label: 'Client Satisfaction', value: '98%', icon: Star }
              ].map((stat) => (
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
                    style={{ color: 'var(--primary)' }}
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

        {/* Value Propositions */}
        <Section variant="default">
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
                What Sets Us Apart
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
                We don't just build websites — we build accessible, high-performance 
                digital experiences that grow with your business.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Shield,
                  title: 'WCAG AA Certified',
                  description: 'Every site we build meets or exceeds WCAG 2.1 Level AA standards. Accessibility isn\'t optional — it\'s mandatory for modern web.'
                },
                {
                  icon: Zap,
                  title: '90+ Lighthouse Scores',
                  description: 'Guaranteed performance optimization. We achieve 90+ scores across Performance, Accessibility, Best Practices, and SEO.'
                },
                {
                  icon: Users,
                  title: 'Dedicated Account Manager',
                  description: 'You\'ll have a single point of contact who knows your business, understands your goals, and responds within 4 hours.'
                },
                {
                  icon: Heart,
                  title: 'Transparent Communication',
                  description: 'No jargon, no surprises. Weekly progress updates, shared project boards, and clear milestone tracking.'
                },
                {
                  icon: Target,
                  title: 'Business-Focused Strategy',
                  description: 'We start with your business goals, not technology. Every design decision is tied to measurable outcomes.'
                },
                {
                  icon: TrendingUp,
                  title: 'Future-Proof Architecture',
                  description: 'Built on WordPress block themes and design systems. Easy for your team to maintain and scale over time.'
                }
              ].map((item, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <InteractiveCard variant="elevated" hoverEffect="lift">
                    <InteractiveCardContent>
                      <item.icon 
                        size={48} 
                        className="mb-6"
                        style={{ color: 'var(--primary)' }}
                      />
                      <h3 
                        className="mb-4"
                        style={{
                          fontSize: 'var(--text-h4)',
                          fontFamily: 'Lexend, sans-serif',
                          fontWeight: 500,
                          color: 'var(--foreground)'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        style={{
                          fontSize: 'var(--text-base)',
                          fontFamily: 'Lexend, sans-serif',
                          color: 'var(--muted-foreground)',
                          lineHeight: 1.6
                        }}
                      >
                        {item.description}
                      </p>
                    </InteractiveCardContent>
                  </InteractiveCard>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Our Process Advantages */}
        <Section variant="background">
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
                Our Proven Process
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
                A systematic approach refined over 150+ successful projects
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: MessageCircle,
                  title: '1. Discovery Call',
                  description: 'We start by understanding your business goals, target audience, and success metrics. No sales pitch — just listening.'
                },
                {
                  icon: Target,
                  title: '2. Strategic Planning',
                  description: 'Detailed project roadmap, wireframes, and content strategy aligned with your conversion goals and timeline.'
                },
                {
                  icon: Briefcase,
                  title: '3. Design & Development',
                  description: 'Weekly sprints with regular check-ins. You\'ll see progress every week and provide feedback at each stage.'
                },
                {
                  icon: CheckCircle,
                  title: '4. Testing & Launch',
                  description: 'Comprehensive QA across devices, browsers, and accessibility standards. Smooth launch with zero downtime.'
                },
                {
                  icon: TrendingUp,
                  title: '5. Training & Handoff',
                  description: 'Video tutorials, documentation, and live training sessions so your team can confidently manage the site.'
                },
                {
                  icon: Clock,
                  title: '6. Ongoing Support',
                  description: 'Optional maintenance plans with priority support, performance monitoring, and monthly updates.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex gap-4"
                >
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h3 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif',
                        color: 'var(--muted-foreground)',
                        lineHeight: 1.6
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Client Guarantees Preview */}
        <Section variant="default">
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
                Risk-Free Guarantees
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
                We stand behind our work with industry-leading guarantees
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: '30-Day Money-Back',
                  description: 'If you\'re not satisfied within 30 days, we\'ll refund your deposit. No questions asked.'
                },
                {
                  title: '90+ Lighthouse Score',
                  description: 'Guaranteed performance optimization or we work for free until targets are met.'
                },
                {
                  title: 'WCAG AA Compliance',
                  description: 'Full accessibility compliance or we fix it at no additional cost.'
                }
              ].map((guarantee, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="p-6 rounded-lg text-center"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <Shield 
                    size={48} 
                    className="mx-auto mb-4"
                    style={{ color: 'var(--primary)' }}
                  />
                  <h3 
                    className="mb-3"
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 500,
                      color: 'var(--foreground)'
                    }}
                  >
                    {guarantee.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    {guarantee.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-8">
              <Button href="/guarantees" variant="ghost">
                View All Guarantees →
              </Button>
            </div>
          </Container>
        </Section>

        {/* TestimonialGrid */}
        <TestimonialGrid
          testimonials={testimonials.slice(0, 6)}
          title="What Our Clients Say"
          description="Don't just take our word for it—hear from the businesses we've helped succeed."
          variant="default"
        />

        {/* SocialProof */}
        <SocialProof
          logos={clientLogos}
          title="Trusted by Leading Brands"
          description="Join hundreds of businesses who trust our WordPress expertise."
          variant="default"
        />

        {/* FAQSection */}
        <FAQSection
          faqs={aboutFAQs}
          title="Frequently Asked Questions"
          description="Get answers to common questions about working with us."
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to Work With WordPress Experts?"
          description="Join 150+ businesses who trust LSX Design for accessible, high-performance websites."
          primaryButtonText="View Pricing"
          primaryButtonPage="pricing"
          secondaryButtonText="Book Free Call"
          secondaryButtonPage="contact"
          variant="highlighted"
          buttonSize="lg"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}