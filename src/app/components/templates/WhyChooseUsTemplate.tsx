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
        <Section variant="default" style={{ paddingTop: 'var(--spacing-24)', paddingBottom: 0 }}>
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
        <Section variant="default" style={{ paddingTop: 'var(--spacing-8)', paddingBottom: 'var(--spacing-16)' }}>
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="wp-text-center wp-max-w-4xl"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
              <h1 
                style={{
                  marginBottom: 'var(--spacing-6)',
                  fontSize: 'var(--text-h1)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Why 150+ Businesses Choose LSX Design
              </h1>
              
              <p 
                style={{
                  marginBottom: 'var(--spacing-8)',
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'var(--font-primary)',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.6
                }}
              >
                We're not just developers — we're WordPress experts committed to building 
                accessible, high-performance websites that drive real business results.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-4)' }}>
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
              className="wp-grid-4-cols"
              style={{ gap: 'var(--spacing-6)' }}
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
                  className="wp-text-center"
                  style={{
                    padding: 'var(--spacing-6)',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <stat.icon 
                    size={32} 
                    style={{ 
                      display: 'block',
                      margin: '0 auto var(--spacing-4)',
                      color: 'var(--primary)' 
                    }}
                  />
                  <div 
                    style={{
                      marginBottom: 'var(--spacing-2)',
                      fontSize: 'var(--text-h2)',
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 500,
                      color: 'var(--foreground)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'var(--font-secondary)',
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
              className="wp-text-center"
              style={{ marginBottom: 'var(--spacing-12)' }}
            >
              <h2 
                style={{
                  marginBottom: 'var(--spacing-4)',
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                What Sets Us Apart
              </h2>
              <p 
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'var(--font-primary)',
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
              className="wp-grid-3-cols"
              style={{ gap: 'var(--spacing-8)' }}
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
                        style={{ 
                          marginBottom: 'var(--spacing-6)',
                          color: 'var(--primary)' 
                        }}
                      />
                      <h3 
                        style={{
                          marginBottom: 'var(--spacing-4)',
                          fontSize: 'var(--text-h4)',
                          fontFamily: 'var(--font-primary)',
                          fontWeight: 500,
                          color: 'var(--foreground)'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        style={{
                          fontSize: 'var(--text-base)',
                          fontFamily: 'var(--font-primary)',
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
              className="wp-text-center"
              style={{ marginBottom: 'var(--spacing-12)' }}
            >
              <h2 
                style={{
                  marginBottom: 'var(--spacing-4)',
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Our Proven Process
              </h2>
              <p 
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'var(--font-primary)',
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
              className="wp-grid-2-cols wp-max-w-4xl"
              style={{ gap: 'var(--spacing-8)', marginLeft: 'auto', marginRight: 'auto' }}
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
                  style={{ display: 'flex', gap: 'var(--spacing-4)' }}
                >
                  <div 
                    style={{
                      flexShrink: 0,
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h3 
                      style={{
                        marginBottom: 'var(--spacing-2)',
                        fontSize: 'var(--text-lg)',
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'var(--font-primary)',
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
              className="wp-text-center"
              style={{ marginBottom: 'var(--spacing-12)' }}
            >
              <h2 
                style={{
                  marginBottom: 'var(--spacing-4)',
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Risk-Free Guarantees
              </h2>
              <p 
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'var(--font-primary)',
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
              className="wp-grid-3-cols"
              style={{ gap: 'var(--spacing-6)' }}
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
                  className="wp-text-center"
                  style={{
                    padding: 'var(--spacing-6)',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <Shield 
                    size={48} 
                    style={{ 
                      display: 'block',
                      margin: '0 auto var(--spacing-4)',
                      color: 'var(--primary)' 
                    }}
                  />
                  <h3 
                    style={{
                      marginBottom: 'var(--spacing-3)',
                      fontSize: 'var(--text-lg)',
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 500,
                      color: 'var(--foreground)'
                    }}
                  >
                    {guarantee.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'var(--font-secondary)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    {guarantee.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="wp-text-center" style={{ marginTop: 'var(--spacing-8)' }}>
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
