/**
 * Content Collection Service Template
 * Route: /services/content/collection
 * Parent: /services/content
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
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
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';

export const ContentCollectionServiceTemplate = () => {
  const benefits = [
    { icon: Camera, title: 'Professional photography', description: 'High-quality product, team, and location photography for web and marketing.' },
    { icon: VideoCamera, title: 'Video production', description: 'Engaging video content from product demos to customer testimonials.' },
    { icon: Microphone, title: 'Interview and testimonial recording', description: 'Capture authentic customer stories and expert interviews.' },
    { icon: FileText, title: 'Subject matter expert interviews', description: 'Extract knowledge from your team to create authoritative content.' },
    { icon: Users, title: 'User-generated content curation', description: 'Collect and organize customer content, reviews, and social media posts.' },
    { icon: CheckCircle, title: 'Content rights and licensing', description: 'Ensure all collected content has proper permissions and usage rights.' }
  ];

  const deliverables = ['On-site photography session', 'Video recording and editing', 'Audio interviews and transcription', 'SME interview sessions', 'Content organization and tagging', 'Rights documentation', 'Final content library'];

  const results = [
    { id: 'res-1', value: '100+', label: 'Assets Per Session' },
    { id: 'res-2', value: '90%', label: 'Time Saved vs DIY' },
    { id: 'res-3', value: '2-3x', label: 'More Engagement' },
    { id: 'res-4', value: '1-2 wks', label: 'Delivery Timeline' }
  ];

  return (
    <div data-service="content-collection">
      {/* Hero section */}
      <section className="sub-service-base__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Content', href: '/services/content' },
              { label: 'Content collection' }
            ]}
          />
          
          <JourneyPhaseIndicator currentPhase="create" currentServicePage="content-collection" />

          <ScrollReveal animation="fade-down">
            <h1 className="sub-service-base__hero-title">
              Content collection services
            </h1>

            <p className="sub-service-base__hero-description">
              Stop struggling with DIY content creation. We capture professional photos, videos, interviews, and testimonials
              that make your brand shine across all channels.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Book content session
              </Link>
              <Link to={getPageUrl('content')} className="sub-service-base__cta-button sub-service-base__cta-button--secondary">
                View parent service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="sub-service-base__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="Content collection services"
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

      {/* Deliverables */}
      <section className="sub-service-base__results">
        <Container>
          <div className="sub-service-base__section-header">
            <h2 className="sub-service-base__section-title">What you get</h2>
            <p className="sub-service-base__section-description">
              We deliver production-ready assets organized perfectly for your marketing team.
            </p>
          </div>
          <ScrollReveal animation="fade-up">
            <CheckList items={deliverables} columns={2} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Results */}
      <section className="sub-service-base__benefits">
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

      {/* Testimonials */}
      <ServiceTestimonial serviceSlug="content-collection" />

      {/* CTA */}
      <FunkyCTA
        title="Ready for professional content?"
        description="Get a free consultation and content collection plan."
        buttonText="Request free consultation"
        buttonPage="contact"
        benefits={['Professional studio setup', 'Experienced crew', 'Fast turnaround', 'Rights included']}
      />
    </div>
  );
};
