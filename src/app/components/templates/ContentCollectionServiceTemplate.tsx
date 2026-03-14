/**
 * Content Collection Service Template
 * Route: /services/content/collection
 * Parent: /services/content
 */

import { Camera, VideoCamera, Microphone, FileText, Users, CheckCircle, Package } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';

export const ContentCollectionServiceTemplate = () => {
  const benefits = [
    { icon: Camera, title: 'Professional Photography', description: 'High-quality product, team, and location photography for web and marketing.' },
    { icon: VideoCamera, title: 'Video Production', description: 'Engaging video content from product demos to customer testimonials.' },
    { icon: Microphone, title: 'Interview & Testimonial Recording', description: 'Capture authentic customer stories and expert interviews.' },
    { icon: FileText, title: 'Subject Matter Expert Interviews', description: 'Extract knowledge from your team to create authoritative content.' },
    { icon: Users, title: 'User-Generated Content Curation', description: 'Collect and organize customer content, reviews, and social media posts.' },
    { icon: CheckCircle, title: 'Content Rights & Licensing', description: 'Ensure all collected content has proper permissions and usage rights.' }
  ];

  const deliverables = ['On-site photography session', 'Video recording & editing', 'Audio interviews & transcription', 'SME interview sessions', 'Content organization & tagging', 'Rights documentation', 'Final content library'];

  const results = [
    { id: 'res-1', value: '100+', label: 'Assets Per Session' },
    { id: 'res-2', value: '90%', label: 'Time Saved vs DIY' },
    { id: 'res-3', value: '2-3x', label: 'More Engagement' },
    { id: 'res-4', value: '1-2 wks', label: 'Delivery Timeline' }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="content-collection">
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
                  { label: 'Content Collection' }
                ]}
              />
            </div>
            
            <h1 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', lineHeight: '1.1' }}>
              Content Collection <br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Services</span>
            </h1>
            
            <p style={{ margin: '0 auto var(--spacing-10) auto', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: '1.6', maxWidth: '600px' }}>
              Stop struggling with DIY content creation. We capture professional photos, videos, interviews, and testimonials 
              that make your brand shine across all channels.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-4) var(--spacing-8)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)' }}>
                Book Content Session
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
              heading="Content Collection Services"
              subheading="Everything you need to gather powerful digital assets."
              capabilities={benefits.map((item, i) => ({
                id: `col-ben-${i}`,
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
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>Complete Content Deliverables</h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)' }}>We deliver production-ready assets organized perfectly for your marketing team.</p>
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
              subheading="The impact of professional content collection."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <ServiceTestimonial serviceSlug="content-collection" />

      {/* CTA */}
      <section>
        <FunkyCTA
          title="Ready for Professional Content?"
          description="Get a free consultation and content collection plan."
          buttonText="Request Free Consultation"
          buttonPage="contact"
          benefits={['Professional studio setup', 'Experienced crew', 'Fast turnaround', 'Rights included']}
        />
      </section>
    </div>
  );
};