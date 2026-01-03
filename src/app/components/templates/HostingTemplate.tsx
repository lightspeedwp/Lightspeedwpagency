/**
 * Hosting Template
 * 
 * WordPress template: templates/page-hosting.html
 * 
 * Hosting page archetype showcasing WordPress hosting plans and features.
 * Pattern order: Hero → Features → PricingTable → FeatureComparison → 
 *                TestimonialGrid → FAQ → CTA
 * 
 * **Conversion Strategy:**
 * - PricingTable: Transparent pricing builds trust and facilitates decision-making
 * - FeatureComparison: Detailed feature matrix helps users choose the right plan
 * - TestimonialGrid: Client validation reduces purchase anxiety
 * - FAQ: Addresses common objections before conversion
 * - CTA: Final conversion opportunity with free trial offer
 * 
 * **Accessibility:**
 * - Keyboard navigation for pricing cards and feature comparison
 * - ARIA labels for interactive pricing elements
 * - Focus management for modal interactions
 * - Screen reader friendly pricing tables
 * - Semantic HTML for pricing structure
 * 
 * @see {@link /guidelines/templates/hosting.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { PricingTable } from '../patterns/PricingTable';
import { FeatureComparison } from '../patterns/FeatureComparison';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { hostingFAQs } from '../../data/faqs';
import { hostingPlans, hostingFeatures } from '../../data/hosting';
import { testimonials } from '../../data/testimonials';
import { Server, Lock, Zap, Clock, HeadphonesIcon, Globe } from 'lucide-react';

export function HostingTemplate() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decoration */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--glass-bg-strong)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center px-6 py-3 mb-8"
              style={{
                backgroundColor: 'var(--glass-bg-strong)',
                backdropFilter: 'blur(10px)',
                color: 'var(--primary-foreground)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--glass-border)',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              WordPress Managed Hosting
            </div>

            <h1 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h1)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 'var(--line-height-tight)',
                letterSpacing: 'var(--letter-spacing-tight)',
                marginBottom: '24px',
                color: 'var(--primary-foreground)'
              }}
            >
              WordPress Hosting Built for Speed
            </h1>

            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lead)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--primary-foreground)',
                opacity: 0.95,
                maxWidth: '700px',
                margin: '0 auto 32px'
              }}
            >
              Enterprise-grade WordPress hosting with expert support, automatic backups, and 99.9% uptime guarantee. Optimized for WooCommerce and high-traffic sites.
            </p>

            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('pricing');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="View hosting plans and pricing"
            >
              View Plans & Pricing
            </Button>
          </div>
        </Section>

        {/* Features Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading level={2} style={{ marginBottom: '16px' }}>
                Why Choose Our WordPress Hosting
              </Heading>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.7'
                }}
              >
                Everything you need to run a fast, secure WordPress website
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hostingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '32px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }}
                  >
                    <div 
                      className="mb-6"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary)',
                        color: 'var(--primary-foreground)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={28} strokeWidth={2} />
                    </div>

                    <h3 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--card-foreground)',
                        marginBottom: '12px',
                        lineHeight: '1.3'
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.7'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Pricing Section */}
        <Section id="pricing" spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading level={2} style={{ marginBottom: '16px' }}>
                Choose Your Hosting Plan
              </Heading>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.7'
                }}
              >
                Flexible WordPress hosting plans that scale with your business
              </p>
            </div>

            <PricingTable
              plans={hostingPlans}
              onPlanSelect={(plan) => {
                const element = document.getElementById('feature-comparison');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </Container>
        </Section>

        {/* Feature Comparison Section */}
        <Section id="feature-comparison" spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading level={2} style={{ marginBottom: '16px' }}>
                Feature Comparison
              </Heading>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.7'
                }}
              >
                Detailed comparison of our hosting plans
              </p>
            </div>

            <FeatureComparison
              plans={hostingPlans}
              features={hostingFeatures}
            />
          </Container>
        </Section>

        {/* Testimonial Grid Section */}
        <Section id="testimonials" spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading level={2} style={{ marginBottom: '16px' }}>
                What Our Clients Say
              </Heading>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.7'
                }}
              >
                Real-world experiences from satisfied customers
              </p>
            </div>

            <TestimonialGrid
              testimonials={testimonials}
            />
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about our WordPress hosting services"
          faqs={hostingFAQs}
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to Experience Premium WordPress Hosting?"
          description="Start your free 30-day trial today. No credit card required. Migrate your existing WordPress site for free."
          primaryButtonText="Start Free Trial"
          primaryButtonPage="contact"
          secondaryButtonText="View Pricing"
          secondaryButtonPage="pricing"
          variant="highlighted"
          buttonSize="lg"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}