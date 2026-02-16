/**
 * Why Choose Us Template
 * 
 * WordPress template: templates/page-why-choose-us.html
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wcu-*
 * 
 * @see /src/styles/templates/why-choose-us.css
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CTASection } from '../patterns/CTASection';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
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
import '@/styles/templates/why-choose-us.css';

export function WhyChooseUsTemplate() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Why Choose Us', href: '/why-choose-us' }
          ]}
        />
      </section>

      {/* Hero Section */}
      <Section spacing="md" background="default">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="wcu__hero-inner"
          >
            <h1 className="wcu__hero-title">
              Why 150+ Businesses Choose LSX Design
            </h1>
            
            <p className="wcu__hero-desc">
              We're not just developers — we're WordPress experts committed to building 
              accessible, high-performance websites that drive real business results.
            </p>

            <div className="wcu__hero-actions">
              <Button href="/pricing" size="lg">
                View Pricing
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                See Our Work
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="muted">
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
                className="wcu__stat-card"
              >
                <stat.icon 
                  size={32} 
                  className="wcu__stat-icon"
                />
                <div className="wcu__stat-value">
                  {stat.value}
                </div>
                <div className="wcu__stat-label">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Value Propositions */}
      <Section background="default">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="wcu__section-header"
          >
            <h2 className="wcu__section-title">
              What Sets Us Apart
            </h2>
            <p className="wcu__section-desc">
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
            ].map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <InteractiveCard variant="elevated" hoverEffect="lift">
                  <InteractiveCardContent>
                    <item.icon 
                      size={48} 
                      className="wcu__vp-icon"
                    />
                    <h3 className="wcu__vp-title">
                      {item.title}
                    </h3>
                    <p className="wcu__vp-desc">
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
      <Section sectionStyle="muted" spacing="lg">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="wcu__section-header"
          >
            <h2 className="wcu__section-title">
              Our Proven Process
            </h2>
            <p className="wcu__section-desc">
              A systematic approach refined over 150+ successful projects
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="wp-grid-2-cols wp-max-w-4xl"
            style={{ gap: 'var(--spacing-8)' }}
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
            ].map((step) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="wcu__step"
              >
                <div className="wcu__step-icon">
                  <step.icon size={24} />
                </div>
                <div>
                  <h3 className="wcu__step-title">
                    {step.title}
                  </h3>
                  <p className="wcu__step-desc">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Client Guarantees Preview */}
      <Section background="default">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="wcu__section-header"
          >
            <h2 className="wcu__section-title">
              Risk-Free Guarantees
            </h2>
            <p className="wcu__section-desc">
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
            ].map((guarantee) => (
              <motion.div
                key={guarantee.title}
                variants={staggerItem}
                className="wcu__guarantee-card"
              >
                <Shield 
                  size={48} 
                  className="wcu__guarantee-icon"
                />
                <h3 className="wcu__guarantee-title">
                  {guarantee.title}
                </h3>
                <p className="wcu__guarantee-desc">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="wcu__section-footer">
            <Button href="/guarantees" variant="outline">
              View All Guarantees &rarr;
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
    </>
  );
}
