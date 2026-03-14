/**
 * Support Service Template
 * 
 * Sub-service page for Website Support under Hosting
 * Route: /services/support
 * Parent: /services/hosting
 */

import { Headphones, Clock, Wrench, Shield, Lightning, TrendUp } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { FeatureList } from '../patterns/FeatureList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { StatsGrid } from '../patterns/StatsGrid';
import { ScrollReveal } from '../../hooks/useScrollReveal';

export const SupportServiceTemplate = () => {
  const benefits = [
    {
      icon: Headphones as any,
      title: '24/7 Support Availability',
      description: 'Round-the-clock support for critical issues with guaranteed response times.'
    },
    {
      icon: Clock as any,
      title: 'Fast Response Times',
      description: 'Under 1 hour response for critical issues, under 4 hours for standard requests.'
    },
    {
      icon: Wrench as any,
      title: 'Proactive Maintenance',
      description: 'Regular updates, backups, and monitoring to prevent issues before they occur.'
    },
    {
      icon: Shield as any,
      title: 'Security Monitoring',
      description: 'Continuous security scans and immediate response to threats.'
    },
    {
      icon: Lightning as any,
      title: 'Performance Optimization',
      description: 'Ongoing speed improvements and resource optimization.'
    },
    {
      icon: TrendUp as any,
      title: 'Priority Support Queue',
      description: 'Jump the queue with dedicated support team members.'
    }
  ];

  const plans = [
    {
      name: 'Essential Support',
      price: '$199/mo',
      features: ['5 hours/month', 'Email support', '24hr response time', 'Monthly backups', 'Plugin updates']
    },
    {
      name: 'Priority Support',
      price: '$499/mo',
      features: ['15 hours/month', 'Phone + email', '4hr response time', 'Weekly backups', 'Priority queue', 'Security monitoring']
    },
    {
      name: 'Enterprise Support',
      price: 'Custom',
      features: ['Unlimited hours', '24/7 phone support', '<1hr critical response', 'Daily backups', 'Dedicated team', 'Custom SLA']
    }
  ];

  const results = [
    { id: 'metric-1', value: '<1hr', label: 'Critical Issue Response' },
    { id: 'metric-2', value: '99.9%', label: 'Uptime Guarantee' },
    { id: 'metric-3', value: '4.9/5', label: 'Customer Satisfaction' },
    { id: 'metric-4', value: '24/7', label: 'Support Availability' }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Support' },
        ]}
      />

      <JourneyPhaseIndicator currentPhase="build" currentServicePage="support" />

      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal animation="fade-up">
              <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                Website Support & Maintenance
              </h1>
              
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-10)', lineHeight: 1.6 }}>
                Focus on your business while we keep your website running perfectly. Proactive maintenance, 
                fast support, and peace of mind with 24/7 monitoring and expert care.
              </p>
              
              <div className="wp-flex wp-justify-center wp-gap-4 wp-flex-wrap">
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-3) var(--spacing-8)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-weight-bold)', textDecoration: 'none' }}>
                  Get Support Plan
                </Link>
                <Link to="/services/hosting" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-3) var(--spacing-8)', backgroundColor: 'transparent', color: 'var(--foreground)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-weight-medium)', textDecoration: 'none' }}>
                  View Parent Service
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Support Features</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive support and maintenance for WordPress and WooCommerce sites
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList 
              items={benefits}
              columns={3}
              variant="glow"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Support Plans</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                Choose the support level that fits your needs
              </p>
            </ScrollReveal>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)' }}>
            {plans.map((plan, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div style={{ padding: 'var(--spacing-8)', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-2xl)', color: 'var(--foreground)', marginBottom: 'var(--spacing-2)' }}>{plan.name}</h3>
                  <div style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h3)', color: 'var(--primary)', marginBottom: 'var(--spacing-6)' }}>{plan.price}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', flex: 1 }}>
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', fontFamily: 'var(--font-secondary)', color: 'var(--muted-foreground)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 'var(--spacing-8)' }}>
                    <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: 'var(--spacing-3)', backgroundColor: index === 1 ? 'var(--primary)' : 'transparent', color: index === 1 ? 'var(--primary-foreground)' : 'var(--foreground)', border: index === 1 ? 'none' : '1px solid var(--border)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-weight-medium)', textDecoration: 'none' }}>
                      Choose Plan
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Support Metrics</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                Our commitment to excellent support
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <StatsGrid
              stats={results}
              columns={4}
              variant="cards"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Client Testimonials */}
      <ServiceTestimonial serviceSlug="support" />

      <FunkyCTA
        title="Ready for Peace of Mind?"
        description="Get a free consultation and find the perfect support plan for your website."
        buttonText="Request Free Consultation"
        buttonPage="contact"
        benefits={[
          '24/7 dedicated support team',
          'Proactive security monitoring',
          'Regular backups and updates',
          'Guaranteed response times'
        ]}
      />
    </div>
  );
};