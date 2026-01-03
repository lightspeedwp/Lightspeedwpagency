/**
 * Guarantees Template
 * 
 * WordPress template: templates/page-guarantees.html
 * 
 * Risk reversal page showcasing all client guarantees:
 * - 30-day money-back guarantee
 * - 90+ Lighthouse score guarantee
 * - WCAG AA compliance guarantee
 * - On-time delivery guarantee
 * - Transparent pricing guarantee
 * - Lifetime support guarantee
 * 
 * Pattern order: Hero → Guarantees Grid → How It Works → TestimonialGrid → SocialProof → FAQSection → CTASection
 * 
 * **Conversion Strategy:**
 * - TestimonialGrid: Build trust with guarantee-focused testimonials
 * - SocialProof: Show brands who trust our guarantees
 * - FAQSection: Address guarantee-related questions
 * - CTASection: Convert convinced visitors
 * 
 * **Accessibility:**
 * - Keyboard navigation for all elements
 * - Screen reader friendly guarantee details
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/guarantees.md}
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
import { BackToTopButton } from '../ui/BackToTopButton';
import { testimonials } from '../../data/testimonials';
import { clientLogos } from '../../data/logos';
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
  Shield,
  DollarSign,
  Zap,
  CheckCircle,
  Clock,
  Lock,
  Award,
  FileText,
  AlertCircle,
  TrendingUp,
  Users,
  RefreshCw
} from 'lucide-react';

// FAQ data for guarantees
const guaranteesFAQs = [
  {
    question: 'What happens if I request a refund within 30 days?',
    answer: 'If you\'re not satisfied within the first 30 days of the project, we\'ll refund your deposit in full. No questions asked, no lengthy process. We\'ll discuss what didn\'t work and part ways professionally.'
  },
  {
    question: 'How do you guarantee 90+ Lighthouse scores?',
    answer: 'We optimize for performance from day one using modern WordPress block themes, optimized images, efficient code, and CDN delivery. If we don\'t hit 90+ on all four metrics (Performance, Accessibility, Best Practices, SEO), we continue working at no additional cost until we do.'
  },
  {
    question: 'What if my site doesn\'t meet WCAG AA standards?',
    answer: 'Every site is tested with automated tools and manual keyboard navigation before launch. If any accessibility issues are found post-launch, we fix them immediately at no charge. Accessibility is non-negotiable.'
  },
  {
    question: 'What happens if the project runs over the estimated timeline?',
    answer: 'We provide detailed timelines upfront and track progress weekly. If delays are on our end, we absorb the cost. If scope changes extend the timeline, we discuss and approve together before proceeding.'
  },
  {
    question: 'Are there any hidden costs or surprise fees?',
    answer: 'Never. Our quotes include everything: design, development, testing, training, and launch. The only additional costs would be third-party services (hosting, premium plugins) which we discuss upfront and you approve before purchase.'
  },
  {
    question: 'How long do your guarantees last?',
    answer: 'Money-back guarantee: 30 days. Performance/accessibility guarantees: lifetime of the site. If future updates break performance or accessibility, we fix it free under our maintenance plans. Even without a maintenance plan, we\'ll help diagnose the issue.'
  }
];

export function GuaranteesTemplate() {
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
                { label: 'Guarantees', href: '/guarantees' }
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
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield 
                  size={48} 
                  style={{ color: 'var(--primary)' }}
                />
              </div>
              
              <h1 
                className="mb-6"
                style={{
                  fontSize: 'var(--text-h1)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Risk-Free Guarantees
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
                We stand behind our work with industry-leading guarantees. 
                Your investment is protected, your expectations are clear, 
                and your success is guaranteed.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/pricing" size="lg">
                  View Pricing
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Book Free Call
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Core Guarantees Grid */}
        <Section variant="muted">
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
                Our Guarantees to You
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
                Every project is protected by these six ironclad guarantees
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
                  icon: DollarSign,
                  title: '30-Day Money-Back Guarantee',
                  description: 'Not satisfied within 30 days? Full refund of your deposit. No hassles, no questions, no hard feelings.',
                  details: [
                    'Valid for first 30 days of project',
                    'Full deposit refund',
                    'No questions asked policy',
                    'Professional handoff of work completed'
                  ]
                },
                {
                  icon: Zap,
                  title: '90+ Lighthouse Score Guarantee',
                  description: 'Your site will score 90+ across Performance, Accessibility, Best Practices, and SEO — or we work for free until it does.',
                  details: [
                    'Performance: 90+ score',
                    'Accessibility: 90+ score',
                    'Best Practices: 90+ score',
                    'SEO: 90+ score'
                  ]
                },
                {
                  icon: Shield,
                  title: 'WCAG AA Compliance Guarantee',
                  description: 'Full WCAG 2.1 Level AA accessibility compliance on every page. If we miss anything, we fix it immediately at no cost.',
                  details: [
                    'WCAG 2.1 Level AA certified',
                    'Automated + manual testing',
                    'Keyboard navigation verified',
                    'Screen reader compatible'
                  ]
                },
                {
                  icon: Clock,
                  title: 'On-Time Delivery Guarantee',
                  description: 'We hit our deadlines or absorb the cost. Detailed timeline upfront, weekly progress updates, and milestone tracking.',
                  details: [
                    'Detailed project timeline',
                    'Weekly progress updates',
                    'Milestone accountability',
                    'Delays = we absorb costs'
                  ]
                },
                {
                  icon: FileText,
                  title: 'Transparent Pricing Guarantee',
                  description: 'No hidden fees, no surprise charges. Fixed-price quotes include everything from discovery to launch and training.',
                  details: [
                    'Fixed-price quotes',
                    'All costs disclosed upfront',
                    'No surprise fees',
                    'Scope changes = new approval'
                  ]
                },
                {
                  icon: RefreshCw,
                  title: 'Lifetime Support Guarantee',
                  description: 'Optional maintenance plans with priority support. Even without a plan, we\'ll help diagnose issues and provide guidance.',
                  details: [
                    'Optional maintenance plans',
                    'Priority support (4-hour response)',
                    'Performance monitoring',
                    'Free diagnosis (always)'
                  ]
                }
              ].map((guarantee, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <InteractiveCard variant="elevated" hoverEffect="lift">
                    <InteractiveCardContent>
                      <guarantee.icon 
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
                        {guarantee.title}
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
                        {guarantee.description}
                      </p>
                      <ul className="space-y-2">
                        {guarantee.details.map((detail, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start gap-2"
                            style={{
                              fontSize: 'var(--text-sm)',
                              fontFamily: 'Manrope, sans-serif',
                              color: 'var(--muted-foreground)'
                            }}
                          >
                            <CheckCircle 
                              size={16} 
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: 'var(--primary)' }}
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </InteractiveCardContent>
                  </InteractiveCard>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* How Our Guarantees Work */}
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
                How It Works
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
                Simple, transparent process for invoking any guarantee
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: AlertCircle,
                  step: '1',
                  title: 'Identify the Issue',
                  description: 'Notice something doesn\'t meet our guaranteed standards? Document it with screenshots or testing results.'
                },
                {
                  icon: Users,
                  step: '2',
                  title: 'Contact Your Manager',
                  description: 'Reach out to your dedicated account manager via email, Slack, or phone. We respond within 4 hours.'
                },
                {
                  icon: Award,
                  step: '3',
                  title: 'We Verify & Fix',
                  description: 'We verify the issue against our guarantee criteria and immediately start work on a solution at no cost to you.'
                },
                {
                  icon: TrendingUp,
                  step: '4',
                  title: 'Confirmation & Testing',
                  description: 'Once fixed, we provide before/after evidence and invite you to test. Your approval = guarantee fulfilled.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="text-center"
                >
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      fontFamily: 'Lexend, sans-serif'
                    }}
                  >
                    {step.step}
                  </div>
                  <step.icon 
                    size={32} 
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
                    {step.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* Why We Offer These Guarantees */}
        <Section variant="background">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="max-w-3xl mx-auto"
            >
              <h2 
                className="mb-6 text-center"
                style={{
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                Why We Stand Behind Our Work
              </h2>
              
              <div className="space-y-6">
                <div 
                  className="p-6 rounded-lg"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <h3 
                    className="mb-3 flex items-center gap-2"
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 500,
                      color: 'var(--foreground)'
                    }}
                  >
                    <Lock size={24} style={{ color: 'var(--primary)' }} />
                    We're Confident in Our Process
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Lexend, sans-serif',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.6
                    }}
                  >
                    After 150+ successful projects, we know our process works. These guarantees 
                    aren't risky for us — they're proof we deliver on our promises every time.
                  </p>
                </div>

                <div 
                  className="p-6 rounded-lg"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <h3 
                    className="mb-3 flex items-center gap-2"
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 500,
                      color: 'var(--foreground)'
                    }}
                  >
                    <Award size={24} style={{ color: 'var(--primary)' }} />
                    Standards Over Shortcuts
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Lexend, sans-serif',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.6
                    }}
                  >
                    WCAG AA and 90+ Lighthouse scores aren't just goals — they're mandatory 
                    standards built into our development workflow from day one. We can't deliver 
                    work that doesn't meet these criteria.
                  </p>
                </div>

                <div 
                  className="p-6 rounded-lg"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <h3 
                    className="mb-3 flex items-center gap-2"
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 500,
                      color: 'var(--foreground)'
                    }}
                  >
                    <Users size={24} style={{ color: 'var(--primary)' }} />
                    Long-Term Relationships
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Lexend, sans-serif',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.6
                    }}
                  >
                    We're building a reputation, not making quick sales. 60% of our work comes 
                    from referrals and repeat clients. Your success is our best marketing.
                  </p>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* TestimonialGrid */}
        <TestimonialGrid
          testimonials={testimonials.slice(0, 6)}
          title="Our Guarantees in Action"
          description="See how our guarantees have helped clients succeed with confidence."
          variant="default"
        />

        {/* SocialProof */}
        <SocialProof
          logos={clientLogos}
          title="Trusted by Leading Brands"
          description="Join hundreds of businesses who trust our guarantees."
          variant="default"
        />

        {/* FAQ Section */}
        <FAQSection faqs={guaranteesFAQs} />

        {/* CTA Section */}
        <CTASection
          title="Ready to Start Risk-Free?"
          description="Our guarantees protect your investment. Your success is guaranteed, or your money back."
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