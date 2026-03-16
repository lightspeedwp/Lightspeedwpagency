/**
 * Content Collection Service Template
 * Route: /services/content/collection
 * Parent: /services/content
 */

import { Camera, VideoCamera, Microphone, FileText, Users, CheckCircle, Package } from '@phosphor-icons/react';
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
      <section className="service-hero" style={{ minHeight: '60vh' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at bottom, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div className="service-hero__content" style={{ padding: '0 var(--spacing-8)' }}>
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
            
            <h1 className="service-hero__title">
              Content Collection <br />
              <span className="service-hero__gradient-text">Services</span>
            </h1>
            
            <p className="service-hero__description service-hero__description--centered">
              Stop struggling with DIY content creation. We capture professional photos, videos, interviews, and testimonials 
              that make your brand shine across all channels.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link to={getPageUrl('contact')} className="sub-service-base__content-btn sub-service-base__content-btn--primary">
                Book Content Session
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
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-up">
              <div>
                <div className="sub-service-base__eyebrow-badge">
                  <Package size={16} weight="duotone" />
                  What You Get
                </div>
                <h2 className="sub-service-base__deliverables-title">Complete Content Deliverables</h2>
                <p className="sub-service-base__deliverables-description">We deliver production-ready assets organized perfectly for your marketing team.</p>
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