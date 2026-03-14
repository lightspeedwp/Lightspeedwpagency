/**
 * Newsletter Service Template
 * Route: /services/newsletter
 * Parent: /services/content
 */

import { Envelope, Users, TrendUp, Calendar, ChartBar, Trophy, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
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
      <section 
        style={{
          position: 'relative',
          padding: 'var(--spacing-32) 0',
          backgroundColor: 'var(--background)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
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
            
            <h1 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', lineHeight: '1.1' }}>
              Newsletter <br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Services</span>
            </h1>
            
            <p style={{ margin: '0 auto var(--spacing-10) auto', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: '1.6', maxWidth: '600px' }}>
              Build a thriving email audience. Expert newsletter strategy, content creation, and optimization 
              that turns subscribers into customers and advocates.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)' }}>
                Start Newsletter Strategy
              </Link>
              <Link to="/services/content" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', textDecoration: 'none' }}>
                View Parent Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-up">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-2)', padding: 'var(--spacing-2) var(--spacing-4)', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--card)', border: '1px solid var(--border)', color: 'var(--secondary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--spacing-4)' }}>
                  <Package size={16} weight="duotone" />
                  What You Get
                </div>
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Complete Newsletter Solutions</h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)' }}>End-to-end email marketing campaigns that deliver results.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-8)' }}>
                <CheckList items={deliverables} columns={1} />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* RESULTS */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
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