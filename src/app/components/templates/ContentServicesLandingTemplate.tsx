/**
 * Content Services Landing Template
 *
 * Parent landing page for all content-related services.
 * Route: /services/content/
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * @see /src/styles/templates/sub-service-base.css
 */

import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyProcessTimeline } from '../patterns/AgencyProcessTimeline';
import { FunkyCTA } from '../patterns/FunkyCTA';
import {
  FileMagnifyingGlass,
  Target,
  PenNib,
  Camera,
  PencilSimple,
  MagnifyingGlass,
  ShieldCheck,
  BookOpen,
} from '@phosphor-icons/react';

import { BreadcrumbPart } from '../parts/BreadcrumbPart';

/* ============================================
   LOCAL DATA
   ============================================ */

const serviceItems = [
  {
    icon: FileMagnifyingGlass,
    title: 'Content audit',
    description: 'Comprehensive analysis of your existing content to identify gaps, redundancies, and optimisation opportunities.',
  },
  {
    icon: Target,
    title: 'Content strategy',
    description: 'Data-driven content plans aligned with your business goals, audience needs, and search intent.',
  },
  {
    icon: PencilSimple,
    title: 'Content creation',
    description: 'Professional blog posts, landing pages, and marketing content crafted for engagement and conversion.',
  },
  {
    icon: PenNib,
    title: 'Copywriting',
    description: 'Persuasive copy for websites, emails, and campaigns that drives action and builds brand voice.',
  },
  {
    icon: MagnifyingGlass,
    title: 'SEO content',
    description: 'Search-optimised content designed to rank, drive organic traffic, and convert visitors into customers.',
  },
  {
    icon: Camera,
    title: 'Content collection',
    description: 'Professional photography, video, and interview capture for authentic, high-quality brand assets.',
  },
  {
    icon: ShieldCheck,
    title: 'Content governance',
    description: 'Editorial workflows, style guides, and quality frameworks to maintain content consistency at scale.',
  },
  {
    icon: BookOpen,
    title: 'Content overview',
    description: 'A holistic view of your full content ecosystem with recommendations for improvement and growth.',
  },
];

const timelineSteps = [
  {
    title: 'Discovery and audit',
    description: 'We analyse your existing content, competitors, and audience to uncover opportunities and gaps.',
  },
  {
    title: 'Strategy and planning',
    description: 'We create a data-driven content roadmap aligned with your business goals and SEO targets.',
  },
  {
    title: 'Creation and optimisation',
    description: 'Our team produces high-quality content optimised for search, engagement, and conversion.',
  },
  {
    title: 'Measurement and iteration',
    description: 'We track performance, refine strategy, and continuously improve based on real data.',
  },
];

export function ContentServicesLandingTemplate() {
  return (
    <div>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Content services' },
        ]}
      />

      {/* Hero section */}
      <section className="sub-service-base__hero" aria-labelledby="content-hero-title">
        <div className="sub-service-base__hero-content">
          <ScrollReveal animation="fade-down">
            <h1 id="content-hero-title" className="sub-service-base__hero-title">
              Content that converts
            </h1>

            <p className="sub-service-base__hero-description">
              From strategy to creation, audit to governance — we deliver
              comprehensive content services that drive organic traffic, build
              authority, and convert visitors into customers.
            </p>

            <div className="sub-service-base__hero-cta">
              <Link to={getPageUrl('contact')} className="sub-service-base__cta-button sub-service-base__cta-button--primary">
                Start content project
              </Link>
              <a href="#services" className="sub-service-base__cta-button sub-service-base__cta-button--secondary">
                Explore services
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollDownArrow />
      </section>

      {/* Services grid */}
      <section id="services" className="sub-service-base__benefits" aria-labelledby="content-services-title">
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="Content services"
              subheading="End-to-end content solutions for every stage of your content lifecycle."
              capabilities={serviceItems.map((item, i) => ({
                id: `content-srv-${i}`,
                title: item.title,
                description: item.description,
                icon: item.icon as any
              }))}
              columns={3}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Process */}
      <section className="sub-service-base__results" aria-labelledby="content-process-title">
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyProcessTimeline
              heading="Our content process"
              subheading="A proven methodology from discovery to ongoing optimisation."
              steps={timelineSteps}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <FunkyCTA
        title="Ready to transform your content?"
        description="Get a free content audit and discover how strategic content can drive measurable growth for your business."
        buttonText="Request free content audit"
        buttonPage="contact"
        benefits={[
          'Content inventory analysis',
          'SEO gap identification',
          'Audience persona review',
          'Actionable strategy roadmap'
        ]}
      />
    </div>
  );
}
