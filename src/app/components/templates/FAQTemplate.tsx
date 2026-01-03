/**
 * FAQ Page Template
 * 
 * WordPress template: templates/page-faq.html
 * 
 * Page archetype: Utility page with comprehensive FAQ listing
 * Pattern order: Hero → FAQ Categories → CTAInline → ContactForm → CTA
 * 
 * **Conversion Strategy:**
 * - FAQ Categories: Organized information reduces support burden
 * - CTAInline: Mid-page conversion opportunity after FAQ consumption
 * - ContactForm: Direct support access for unanswered questions
 * - Final CTA: Catch-all conversion point
 * 
 * **Accessibility:**
 * - Keyboard navigation for FAQ accordions
 * - ARIA labels for expandable sections
 * - Focus management for form inputs
 * - Screen reader friendly FAQ structure
 * - Semantic HTML for questions and answers
 * 
 * URL: /faq/
 * 
 * @see {@link /guidelines/templates/faq.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { FAQSection } from '../patterns/FAQSection';
import { CTAInline } from '../patterns/CTAInline';
import { ContactForm } from '../patterns/ContactForm';
import { Button } from '../blocks/design/Buttons';

export function FAQTemplate() {
  // General FAQs
  const generalFAQs = [
    {
      question: 'What services does LSX Design offer?',
      answer: 'We specialize in WordPress and WooCommerce development, including custom block theme development, design systems, e-commerce solutions, migrations, performance optimization, and ongoing maintenance and support.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple WordPress site typically takes 4-6 weeks, while custom WooCommerce stores or enterprise solutions can take 12-16 weeks. We provide detailed timelines during the discovery phase.'
    },
    {
      question: 'Do you work with clients internationally?',
      answer: 'Yes! We work with clients across 30+ countries. Our remote-first structure and async communication processes ensure seamless collaboration regardless of time zones.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer both project-based and retainer pricing. Project rates are determined during discovery based on scope, complexity, and timeline. Retainer packages start at $3,000/month for ongoing support and development.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Absolutely! We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. All projects include 30 days of post-launch support.'
    }
  ];

  // Technical FAQs
  const technicalFAQs = [
    {
      question: 'What is WordPress Full Site Editing (FSE)?',
      answer: 'FSE is WordPress\'s modern approach to theme development using blocks, patterns, and templates. It provides more flexibility and control without requiring code, while maintaining professional design standards through theme.json configuration.'
    },
    {
      question: 'Why use block themes instead of classic themes?',
      answer: 'Block themes offer better performance, easier maintenance, visual editing without code, better accessibility, and future-proof architecture. They\'re the recommended approach for all new WordPress sites.'
    },
    {
      question: 'What is a design system and why do I need one?',
      answer: 'A design system is a collection of reusable components, patterns, and tokens that ensure consistency across your website. It improves development speed, maintains brand consistency, and makes future updates easier and more affordable.'
    },
    {
      question: 'Do you build headless WordPress sites?',
      answer: 'Yes, we have experience with headless WordPress using Next.js, Gatsby, and other frontend frameworks. However, we generally recommend FSE block themes for most projects due to better editor experience and lower maintenance costs.'
    },
    {
      question: 'What hosting do you recommend?',
      answer: 'We recommend managed WordPress hosting providers like WP Engine, Kinsta, or Flywheel for optimal performance, security, and support. We also offer our own managed hosting service optimized for block themes.'
    }
  ];

  // Process FAQs
  const processFAQs = [
    {
      question: 'What is your development process?',
      answer: 'We follow a four-phase approach: Discovery & Strategy, Design & Planning, Development & Build, and Testing & Launch. Each phase includes regular check-ins, demos, and opportunities for feedback.'
    },
    {
      question: 'How involved do I need to be during development?',
      answer: 'We recommend weekly sync meetings (30-60 minutes) and availability for async feedback via our project management tools. Most clients spend 2-4 hours per week reviewing progress and providing input.'
    },
    {
      question: 'What do you need from us to get started?',
      answer: 'We need access to existing sites/systems, brand assets (logos, fonts, colors), content strategy or sitemap, stakeholder availability for discovery workshops, and clearly defined project goals and success criteria.'
    },
    {
      question: 'Can we make changes during development?',
      answer: 'Minor changes are included. Major scope changes require change orders to adjust timeline and budget. We use agile sprints with demo checkpoints to minimize surprises and ensure alignment.'
    },
    {
      question: 'What happens if we\'re not happy with the result?',
      answer: 'We include multiple review cycles in each phase. If you\'re not satisfied, we work iteratively until the deliverable meets expectations. Our contracts include clear revision policies and approval gates.'
    }
  ];

  // WooCommerce FAQs
  const woocommerceFAQs = [
    {
      question: 'How many products can WooCommerce handle?',
      answer: 'WooCommerce can handle thousands of products with proper optimization. We\'ve built stores with 10,000+ SKUs. Performance depends on hosting, optimization, and architecture—which we address in every build.'
    },
    {
      question: 'Can you integrate with my existing inventory system?',
      answer: 'Yes! We regularly integrate WooCommerce with ERPs, inventory systems, shipping providers, and accounting software. Common integrations include QuickBooks, ShipStation, and custom REST APIs.'
    },
    {
      question: 'Do you handle payment gateway setup?',
      answer: 'Yes, we configure and test all payment gateways including Stripe, PayPal, Square, and regional providers. We ensure PCI compliance and secure checkout flows.'
    },
    {
      question: 'Can WooCommerce handle subscriptions?',
      answer: 'Yes, using WooCommerce Subscriptions extension. We\'ve built membership sites, subscription boxes, SaaS billing, and recurring service businesses on WooCommerce.'
    },
    {
      question: 'What about multi-currency and international shipping?',
      answer: 'We implement multi-currency using plugins like WooCommerce Payments or Multi-Currency. For shipping, we integrate with carriers like FedEx, UPS, and DHL, including real-time rate calculations.'
    }
  ];

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'FAQ' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
              opacity: '0.1',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
          
          {/* Decorative gradient orb */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--accent)',
              opacity: '0.1',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
            aria-hidden="true"
          />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            <div className="text-center max-w-4xl mx-auto">
              <span 
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
                Support
              </span>

              <h1 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 'var(--line-height-tight)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '24px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Frequently Asked Questions
              </h1>

              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lead)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--primary-foreground)',
                  opacity: 0.95,
                  marginBottom: 0
                }}
              >
                Find answers to common questions about our services, process, and WordPress development
              </p>
            </div>
          </Container>
        </Section>

        {/* General FAQs */}
        <FAQSection
          title="General Questions"
          description="Learn about our services, pricing, and how we work"
          faqs={generalFAQs}
          variant="default"
        />

        {/* Technical FAQs */}
        <FAQSection
          title="Technical Questions"
          description="WordPress, WooCommerce, and development best practices"
          faqs={technicalFAQs}
          variant="muted"
        />

        {/* Process FAQs */}
        <FAQSection
          title="Process & Timeline"
          description="How we plan, build, and deliver WordPress projects"
          faqs={processFAQs}
          variant="default"
        />

        {/* WooCommerce FAQs */}
        <FAQSection
          title="WooCommerce & E-commerce"
          description="Everything about building online stores with WooCommerce"
          faqs={woocommerceFAQs}
          variant="muted"
        />

        {/* CTAInline Section */}
        <CTAInline
          title="Still Have Questions?"
          description="Our team is here to help. Get in touch and we'll respond within 24 hours."
          button={{
            label: "Contact Us",
            page: "contact",
            variant: "primary",
            size: "lg",
            style: {
              backgroundColor: 'var(--primary-foreground)',
              color: 'var(--primary)'
            }
          }}
        />

        {/* ContactForm Section */}
        <Section 
          spacing="xl"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            textAlign: 'center'
          }}
        >
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: '24px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Didn't Find Your Answer?
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  marginBottom: '32px',
                  lineHeight: '1.7',
                  opacity: 0.95
                }}
              >
                Our team is here to help. Get in touch and we'll respond within 24 hours.
              </p>
              <ContactForm
                title="Contact Us"
                description="Fill out the form below to get in touch with our team."
                button={{
                  label: "Submit",
                  variant: "primary",
                  size: "lg",
                  style: {
                    backgroundColor: 'var(--primary-foreground)',
                    color: 'var(--primary)'
                  }
                }}
              />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}

export default FAQTemplate;