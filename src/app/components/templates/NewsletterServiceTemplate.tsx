/**
 * Newsletter Service Template
 * Route: /services/newsletter
 * Parent: /services/content
 */

import { Envelope, Users, TrendUp, Calendar, ChartBar, Trophy, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';

export const NewsletterServiceTemplate = () => {
  const benefits = [
    { icon: Envelope, title: 'Newsletter Strategy & Planning', description: 'Content calendar, editorial themes, and subscriber growth strategies.' },
    { icon: Users, title: 'List Building & Segmentation', description: 'Grow your list and segment by behavior, interests, and engagement level.' },
    { icon: TrendUp, title: 'Content Creation & Design', description: 'Engaging newsletter content with on-brand design templates.' },
    { icon: Calendar, title: 'Automated Email Sequences', description: 'Welcome series, nurture campaigns, and re-engagement flows.' },
    { icon: ChartBar, title: 'Performance Optimization', description: 'A/B testing, analytics, and continuous improvement based on data.' },
    { icon: Trophy, title: 'Platform Setup & Management', description: 'Mailchimp, ConvertKit, or custom ESP setup and ongoing management.' }
  ];

  const deliverables = ['Newsletter strategy document', 'Content calendar (6-12 months)', 'Email template design', 'List segmentation setup', 'Automated sequences', 'Monthly analytics reports', 'Subscriber growth plan'];

  const results = [
    { id: 'res-1', value: '45%', label: 'Avg Open Rate' },
    { id: 'res-2', value: '8%', label: 'Avg Click Rate' },
    { id: 'res-3', value: '150%', label: 'List Growth (12 mo)' },
    { id: 'res-4', value: '3-6 mo', label: 'Time to Positive ROI' }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="newsletter">
      {/* HERO SECTION */}
      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div className="service-hero__content" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
              <BreadcrumbPart
                links={[
                  { to: '/services', label: 'Services' },
                  { to: '/services/content', label: 'Content' },
                  { label: 'Newsletter' }
                ]}
              />
            </div>
            
            <h1 className="service-hero__title">
              Newsletter & Email <br />
              <span className="service-hero__gradient-text">Services</span>
            </h1>
            
            <p className="service-hero__description service-hero__description--centered">
              Build a thriving email audience. Expert newsletter strategy, content creation, and optimization 
              that turns subscribers into customers and advocates.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to={getPageUrl('contact')} className="sub-service-base__content-btn sub-service-base__content-btn--primary">
                Start Newsletter Strategy
              </Link>
              <Link to={getPageUrl('content')} className="sub-service-base__content-btn sub-service-base__content-btn--outline">
                View Parent Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="Newsletter Services"
              subheading="Everything you need for successful email campaigns."
              capabilities={benefits.map((item, i) => ({
                id: `nl-ben-${i}`,
                title: item.title,
                description: item.description,
                icon: item.icon as any
              }))}
              columns={3}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* DELIVERABLES */}
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-up">
              <div>
                <div className="sub-service-base__eyebrow-badge">
                  <Package size={16} weight="duotone" />
                  What You Get
                </div>
                <h2 className="sub-service-base__deliverables-title">Complete Newsletter Solutions</h2>
                <p className="sub-service-base__deliverables-description">End-to-end email marketing campaigns that deliver results.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="sub-service-base__deliverables-card">
                <CheckList items={deliverables} columns={1} />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* RESULTS */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading="Results"
              subheading="The value of engaging email content."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <ServiceTestimonial serviceSlug="newsletter" />

      {/* CTA */}
      <section>
        <FunkyCTA
          title="Ready to Grow Your List?"
          description="Get a free newsletter strategy consultation."
          buttonText="Request Free Consultation"
          buttonPage="contact"
          benefits={['Audience growth tactics', 'Content ideation', 'Platform review', 'Actionable roadmaps']}
        />
      </section>
    </div>
  );
};