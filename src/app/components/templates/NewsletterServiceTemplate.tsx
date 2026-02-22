/**
 * Newsletter Service Template - Funky Redesign
 * 
 * Theme: "Inbox Zero" (Yellow/Teal/White)
 * 
 * Features:
 * - Air Mail Pattern Hero
 * - Flying Paper Planes
 * - Automation Flow Timeline
 * - Platform Integration Grid
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/page-service-newsletter.css
 * - Colors mapped to global semantic tokens for auto light/dark
 */

import { Container } from '../common/Container';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Button } from '../blocks/design/Buttons';
import { newsletterServiceDetailed } from '../../data/services-detailed';
import { ScrollReveal } from '../../hooks/useScrollReveal';

import { 
  Mail, ArrowRight, Users, TrendingUp, Target, Zap, 
  BarChart, Settings, FileText, Send, Paperclip
} from 'lucide-react';

export function NewsletterServiceTemplate() {
  const data = newsletterServiceDetailed;

  // Icon mapping
  const serviceIcons: Record<string, any> = {
    'integration': Settings,
    'templates': FileText,
    'automation': Zap,
    'analytics': BarChart,
    'strategy': Target,
    'optimization': TrendingUp
  };

  // Platform logos (Static UI data)
  const platforms = [
    { name: 'Mailchimp' },
    { name: 'ConvertKit' },
    { name: 'ActiveCampaign' },
    { name: 'Constant Contact' },
    { name: 'SendGrid' },
    { name: 'Klaviyo' }
  ];

  // FAQs (Static UI data)
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
      {/* ============================================
          HERO SECTION (The Mailroom)
          ============================================ */}
      <section className="newsletter-page__hero">
        <div className="newsletter-page__pattern" aria-hidden="true" />
        
        {/* Floating Paper Planes */}
        <div className="newsletter-page__plane newsletter-page__plane--1"><Send /></div>
        <div className="newsletter-page__plane newsletter-page__plane--2"><Send /></div>
        <div className="newsletter-page__plane newsletter-page__plane--3"><Send /></div>

        <Container>
          <div className="newsletter-page__hero-content">
            <ScrollReveal animation="fade-up">
              <div className="newsletter-page__badge">
                <Mail size={16} />
                INBOX ZERO ACHIEVED
              </div>
              
              <h1 className="newsletter-page__title">
                Email That Gets <br />
                <span>Opened.</span>
              </h1>
              
              <p className="newsletter-page__desc">
                {data.tagline}
              </p>

              <div className="newsletter-page__hero-buttons">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  className="newsletter-page__btn-primary"
                >
                  Start Sending
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="portfolio-archive"
                  className="newsletter-page__btn-outline"
                >
                  View Examples
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (The Sort)
          ============================================ */}
      <section className="newsletter-page__services">
        <Container>
          <div className="newsletter-page__services-header">
            <ScrollReveal animation="fade-right">
              <div className="newsletter-page__max-w-2xl">
                <span className="newsletter-page__label">
                  Deliverables
                </span>
                <h2 className="newsletter-page__section-title">
                  {data.whyLightSpeed.title}
                </h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left">
               <div className="newsletter-page__stats-pill">
                 <div className="newsletter-page__stat newsletter-page__stat--up">
                   <TrendingUp size={12} /> +124% Open Rate
                 </div>
                 <div className="newsletter-page__stat newsletter-page__stat--subs">
                   <Users size={12} /> +5k Subs
                 </div>
               </div>
            </ScrollReveal>
          </div>

          <div className="newsletter-page__grid">
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || Mail;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                  <div className="newsletter-page__card">
                    <div className="newsletter-page__card-icon">
                      <Icon size={32} />
                    </div>
                    
                    <h3 className="newsletter-page__card-title">
                      {service.title}
                    </h3>
                    
                    <p className="newsletter-page__card-desc">
                      {service.description}
                    </p>
                    
                    <div className="newsletter-page__card-footer">
                      <div className="newsletter-page__card-link">
                        Learn More <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          PLATFORMS (The Integrations)
          ============================================ */}
      <section className="newsletter-page__platforms">
        <Container>
          <div className="newsletter-page__platforms-header">
            <ScrollReveal animation="fade-up">
              <h2 className="newsletter-page__platforms-title">
                We Speak Your Language
              </h2>
              <p className="newsletter-page__platforms-desc">
                Whether you're on Mailchimp, Klaviyo, or custom SMTP, we integrate seamlessly with your stack.
              </p>
            </ScrollReveal>
          </div>

          <div className="newsletter-page__platforms-grid">
            {platforms.map((platform, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 50}>
                <div className="newsletter-page__platform-card">
                  <div className="newsletter-page__platform-icon">
                     <Paperclip size={18} />
                  </div>
                  <div className="newsletter-page__platform-name">
                    {platform.name}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          PROCESS (The Delivery)
          ============================================ */}
      <section className="newsletter-page__process">
        <Container>
           <div className="newsletter-page__process-grid">
            <div className="newsletter-page__process-sticky">
              <ScrollReveal animation="fade-right">
                <div className="newsletter-page__process-icon">
                  <Send size={32} />
                </div>
                <h2 className="newsletter-page__process-title">
                  Ready for <br />
                  <span className="newsletter-page__process-highlight">Liftoff</span>
                </h2>
                <p className="newsletter-page__process-desc">
                  {data.process.description}
                </p>
                
                {/* Stats Widget */}
                <div className="newsletter-page__stat-widget">
                   <div className="newsletter-page__widget-header">
                     <span className="newsletter-page__widget-label">Avg. Delivery Rate</span>
                     <span className="newsletter-page__widget-value">99.8%</span>
                   </div>
                   <div className="newsletter-page__progress-bar">
                     <div className="newsletter-page__progress-fill" style={{ width: '99.8%' }}></div>
                   </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="newsletter-page__timeline">
              {data.process.steps.map((step, index) => {
                const stepIcons = [Target, Settings, FileText, Zap, BarChart, TrendingUp];
                const Icon = stepIcons[index] || Target;
                
                return (
                  <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                    <div className="newsletter-page__step">
                      <div className="newsletter-page__step-marker">
                        {step.number}
                      </div>
                      
                      <div className="newsletter-page__step-card">
                        <div className="newsletter-page__step-header">
                          <Icon size={24} className="newsletter-page__step-icon" />
                          <h3 className="newsletter-page__step-title">
                            {step.title}
                          </h3>
                        </div>
                        <p className="newsletter-page__step-desc">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={newsletterFAQs} 
        title="Inbox Insights"
        description="Common questions about our email marketing services"
        variant="default"
      />

      {/* CTA Section */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
          subtitle="Boost your email strategy with these complementary services"
          services={data.relatedServices}
        />
      )}
      <ServiceTestimonial
        serviceSlug="newsletter"
        subtitle="Discover how our email marketing expertise boosts engagement"
      />
      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Increase Open Rates',
          'Automate Customer Journeys',
          'Professional Template Design',
          'Full Analytics Reporting'
        ]}
      />
    </>
  );
}