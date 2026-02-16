/**
 * Newsletter Service Template
 * 
 * WordPress template: templates/page-newsletter-service.html
 * 
 * Email newsletter and marketing service page.
 * 
 * Pattern order:
 * Hero → Service Offerings → Platforms → Benefits → Process Steps → CTA → FAQs
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { FAQSection } from '../patterns/FAQSection';
import { Hero } from '../patterns/Hero';
import { ServiceOfferingsGrid } from '../patterns/ServiceOfferingsGrid';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { CTASection } from '../patterns/CTASection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { 
  Mail,
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Zap,
  BarChart,
  Settings,
  FileText
} from 'lucide-react';
import '@/styles/templates/service-detail.css';

export function NewsletterServiceTemplate() {
  // Newsletter services (6 offerings)
  const newsletterServices = [
    {
      id: 'integration',
      icon: Settings,
      title: 'Platform Integration',
      description: 'Seamless integration with Mailchimp, ConvertKit, and other email platforms. API integration, forms, lists.',
      buttonText: 'Learn More',
      buttonPage: 'contact' as const
    },
    {
      id: 'templates',
      icon: FileText,
      title: 'Email Templates',
      description: 'Custom-designed email templates that match your brand. Responsive design, brand styling, A/B testing.',
      buttonText: 'Learn More',
      buttonPage: 'contact' as const
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automated email sequences and customer journeys. Welcome series, drip campaigns, behavior triggers.',
      buttonText: 'Learn More',
      buttonPage: 'contact' as const
    },
    {
      id: 'analytics',
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Track performance with detailed analytics and insights. Open rates, click tracking, conversions.',
      buttonText: 'Learn More',
      buttonPage: 'contact' as const
    },
    {
      id: 'strategy',
      icon: Target,
      title: 'Email Strategy',
      description: 'Strategic planning for effective email marketing campaigns. Content calendar, audience segmentation.',
      buttonText: 'Learn More',
      buttonPage: 'contact' as const
    },
    {
      id: 'optimization',
      icon: TrendingUp,
      title: 'Campaign Optimization',
      description: 'Continuous improvement of email performance and engagement. A/B testing, subject line optimization.',
      buttonText: 'Learn More',
      buttonPage: 'contact' as const
    }
  ];

  // Platform logos
  const platforms = [
    { name: 'Mailchimp', description: 'Most popular email marketing platform' },
    { name: 'ConvertKit', description: 'For creators and bloggers' },
    { name: 'ActiveCampaign', description: 'Advanced automation platform' },
    { name: 'Constant Contact', description: 'Small business focused' },
    { name: 'SendGrid', description: 'Transactional and marketing emails' },
    { name: 'Klaviyo', description: 'Ecommerce email marketing' }
  ];

  // Benefits for FeatureGrid
  const benefits = [
    {
      icon: Users,
      title: 'Grow Your Audience',
      description: 'Build and nurture your email list with proven strategies'
    },
    {
      icon: TrendingUp,
      title: 'Increase Engagement',
      description: 'Higher open rates and click-through rates with optimized campaigns'
    },
    {
      icon: Target,
      title: 'Better Conversions',
      description: 'Turn subscribers into customers with targeted messaging'
    },
    {
      icon: Zap,
      title: 'Save Time',
      description: 'Automated workflows that run on autopilot'
    }
  ];

  // Process steps (6 steps)
  const processSteps = [
    {
      step: 1,
      title: 'Strategy & Planning',
      description: 'Define goals, audience segments, and content strategy',
      icon: Target
    },
    {
      step: 2,
      title: 'Platform Setup',
      description: 'Configure email platform and integrate with your website',
      icon: Settings
    },
    {
      step: 3,
      title: 'Design & Templates',
      description: 'Create branded email templates and signup forms',
      icon: FileText
    },
    {
      step: 4,
      title: 'Automation Setup',
      description: 'Build automated workflows and customer journeys',
      icon: Zap
    },
    {
      step: 5,
      title: 'Launch & Monitor',
      description: 'Launch campaigns and track performance metrics',
      icon: BarChart
    },
    {
      step: 6,
      title: 'Optimize & Scale',
      description: 'Continuous testing and optimization for better results',
      icon: TrendingUp
    }
  ];

  // FAQs
  const newsletterFAQs = [
    {
      question: 'Which email marketing platform should I use?',
      answer: 'The best platform depends on your needs and budget. Mailchimp is great for beginners with its free tier and user-friendly interface. ConvertKit is ideal for bloggers and creators. ActiveCampaign offers advanced automation for larger businesses. Klaviyo is perfect for ecommerce stores. We help you choose the right platform and handle the complete setup and integration.'
    },
    {
      question: 'How do I grow my email list?',
      answer: 'Effective list growth strategies include: valuable lead magnets (ebooks, guides, templates), popup forms with exit intent, content upgrades for blog posts, giveaways and contests, social media promotion, and partner collaborations. We implement proven strategies tailored to your audience and regularly test and optimize for better conversion rates.'
    },
    {
      question: 'What types of emails should I send?',
      answer: 'A balanced email strategy includes: welcome series for new subscribers, regular newsletters with valuable content, promotional campaigns for products/services, educational content and tips, customer success stories, abandoned cart emails (for ecommerce), re-engagement campaigns for inactive subscribers, and seasonal or event-based campaigns. We help create a content calendar that keeps your audience engaged without overwhelming them.'
    },
    {
      question: 'How often should I send emails to my list?',
      answer: 'Email frequency depends on your industry, content value, and audience expectations. Most businesses succeed with 1-4 emails per month. Ecommerce sites may send more frequently (2-3 per week) with promotional content. The key is consistency and value - send when you have something valuable to share. We help establish the right cadence based on engagement metrics and subscriber feedback.'
    },
    {
      question: 'Can you help with email deliverability issues?',
      answer: 'Yes! Email deliverability is crucial for campaign success. We improve deliverability through: proper domain authentication (SPF, DKIM, DMARC), list hygiene and removing inactive subscribers, avoiding spam trigger words, maintaining good sender reputation, proper email structure and coding, testing across email clients, and monitoring blacklists. We can also help recover from deliverability problems.'
    },
    {
      question: 'Do you provide ongoing email marketing management?',
      answer: 'Yes! We offer comprehensive email marketing management including monthly campaign planning and execution, content creation and design, automation setup and optimization, list segmentation and management, A/B testing and optimization, analytics reporting and insights, and strategic recommendations. Packages start at $500/month depending on send volume and complexity. We also offer one-time setup services if you prefer to manage campaigns yourself.'
    }
  ];

  return (
    <>
        {/* Hero Section */}
        <Hero
          variant="service"
          align="center"
          maxWidth="4xl"
          gradient="blue"
          spacing="xl"
          badge={{
            icon: Mail,
            text: 'NEWSLETTER SERVICES'
          }}
          title="Email Marketing That Drives Results"
          description="Strategic email marketing services including platform integration, automation setup, and campaign management to grow your business."
          buttons={[
            {
              label: 'Get Started',
              page: 'contact',
              variant: 'default',
              icon: ArrowRight,
              style: {
                backgroundColor: 'var(--color-white)',
                color: 'var(--primary)',
                boxShadow: 'var(--shadow-lg)'
              }
            },
            {
              label: 'View Work',
              page: 'portfolio-archive',
              variant: 'outline',
              style: {
                borderColor: 'var(--overlay-white-medium)',
                color: 'var(--color-white)',
                backgroundColor: 'transparent'
              }
            }
          ]}
        />

        {/* Newsletter Services */}
        <ServiceOfferingsGrid
          title="What We Offer"
          description="Complete email marketing solutions"
          offerings={newsletterServices}
          columns={3}
          backgroundColor="var(--background)"
          spacing="xl"
        />

        {/* Platforms Section */}
        <Section spacing="xl" className="service-detail__overview-section">
          <Container>
            <div className="service-detail__section-header">
              <Heading level={2} className="service-detail__title">
                Platforms We Work With
              </Heading>

              <Paragraph className="service-detail__description">
                Expert integration with all major email marketing platforms
              </Paragraph>
            </div>

            {/* Platform Cards */}
            <div className="wp-grid-3-cols wp-gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="service-detail__tech-card wp-text-center"
                >
                  <Heading level={3} className="service-detail__tech-title wp-mb-2">
                    {platform.name}
                  </Heading>
                  <Paragraph className="service-detail__stat-desc">
                    {platform.description}
                  </Paragraph>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Benefits Grid */}
        <FeatureGrid
          title="Why Email Marketing?"
          description="Proven benefits of email marketing for your business"
          features={benefits}
          columns={4}
          variant="cards"
          backgroundColor="var(--background)"
          spacing="xl"
        />

        {/* Process Steps */}
        <Section spacing="xl" background="muted">
          <Container>
            <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-12)' }}>
              <Heading level={1} align="center" className="wp-mb-4" style={{ color: 'var(--foreground)' }}>
                Our Process
              </Heading>

              <Paragraph
                size="large"
                align="center"
                style={{
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                From strategy to optimization, we handle every step
              </Paragraph>
            </div>

            <ProcessSteps
              steps={processSteps}
              columns={6}
              variant="cards"
              badgeStyle="circle"
              maxWidth="6xl"
            />
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Grow Your Email List?"
          description="Let's create an email marketing strategy that drives real results for your business."
          primaryButton={{
            label: 'Start Your Campaign',
            page: 'contact'
          }}
          secondaryButton={{
            label: 'View Portfolio',
            page: 'portfolio-archive'
          }}
          variant="centered"
          sectionStyle="default"
        />

        {/* FAQ Section */}
        <FAQSection
          faqs={newsletterFAQs}
          title="Email Marketing FAQs"
          description="Common questions about our email marketing services"
          variant="accordion"
          spacing="xl"
          backgroundColor="var(--background)"
        />
    </>
  );
}