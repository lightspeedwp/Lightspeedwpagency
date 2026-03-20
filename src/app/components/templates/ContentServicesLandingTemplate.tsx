/**
 * Content Services Landing Template — Funky Neon Redesign
 *
 * Parent landing page for all content-related services.
 * Route: /services/content/
 *
 * Design: Funky neon aesthetic with glassmorphism cards, animated grid, floating shapes
 */

import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
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
import '../../../styles/templates/content-services-landing-funky.css';

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
    <div className="content-landing-funky">
      {/* Breadcrumbs */}
      <div className="content-landing-funky__breadcrumb-wrapper">
        <BreadcrumbPart
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Content services' },
          ]}
        />
      </div>

      {/* Hero section with animated grid background */}
      <section className="content-landing-funky__hero" aria-labelledby="content-hero-title">
        <div className="content-landing-funky__hero-content">
          <h1 id="content-hero-title" className="content-landing-funky__hero-title">
            Content that converts
          </h1>

          <p className="content-landing-funky__hero-description">
            From strategy to creation, audit to governance — we deliver
            comprehensive content services that drive organic traffic, build
            authority, and convert visitors into customers.
          </p>

          <div className="content-landing-funky__hero-cta">
            <Link to={getPageUrl('contact')} className="content-landing-funky__cta-button content-landing-funky__cta-button--primary">
              Start content project
            </Link>
            <a href="#services" className="content-landing-funky__cta-button content-landing-funky__cta-button--secondary">
              Explore services
            </a>
          </div>
        </div>
      </section>

      {/* Services grid with glassmorphism cards */}
      <section id="services" className="content-landing-funky__services" aria-labelledby="content-services-title">
        <div className="content-landing-funky__section-header">
          <h2 id="content-services-title" className="content-landing-funky__section-title">
            Content services
          </h2>
          <p className="content-landing-funky__section-subtitle">
            End-to-end content solutions for every stage of your content lifecycle.
          </p>
        </div>

        <div className="content-landing-funky__services-grid">
          {serviceItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="content-landing-funky__service-card">
                <div className="content-landing-funky__service-icon">
                  <IconComponent weight="duotone" size={32} />
                </div>
                <h3 className="content-landing-funky__service-title">{item.title}</h3>
                <p className="content-landing-funky__service-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process timeline with neon styling */}
      <section className="content-landing-funky__process" aria-labelledby="content-process-title">
        <div className="content-landing-funky__section-header">
          <h2 id="content-process-title" className="content-landing-funky__section-title">
            Our content process
          </h2>
          <p className="content-landing-funky__section-subtitle">
            A proven methodology from discovery to ongoing optimisation.
          </p>
        </div>

        <div className="content-landing-funky__process-timeline">
          {timelineSteps.map((step, index) => (
            <div key={index} className="content-landing-funky__process-step">
              <div className="content-landing-funky__process-number">{index + 1}</div>
              <h3 className="content-landing-funky__process-title">{step.title}</h3>
              <p className="content-landing-funky__process-description">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section with glow effect */}
      <section className="content-landing-funky__cta-section">
        <div className="content-landing-funky__cta-content">
          <h2 className="content-landing-funky__cta-title">
            Ready to transform your content?
          </h2>
          <p className="content-landing-funky__cta-description">
            Get a free content audit and discover how strategic content can drive measurable growth for your business.
          </p>
          <Link to={getPageUrl('contact')} className="content-landing-funky__cta-button content-landing-funky__cta-button--primary">
            Request free content audit
          </Link>
        </div>
      </section>
    </div>
  );
}