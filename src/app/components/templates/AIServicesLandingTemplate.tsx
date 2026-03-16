import '../../../styles/templates/ai-services-landing.css';

import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { AgencyProcessTimeline } from '../patterns/AgencyProcessTimeline';
import { FunkyCTA } from '../patterns/FunkyCTA';
import {
  Brain,
  MagnifyingGlass,
  ChartBar,
  ChatCentered,
  Eye,
  Robot,
} from '@phosphor-icons/react';

import { BreadcrumbPart } from '../parts/BreadcrumbPart';

/* ============================================
   LOCAL DATA — Service items, stats, approach steps
   ============================================ */

const serviceItems = [
  {
    icon: Brain,
    title: 'AI content generation',
    description: 'Create on-brand blog posts, product descriptions, and marketing copy at scale using AI trained on your voice.',
  },
  {
    icon: MagnifyingGlass,
    title: 'AI-powered SEO',
    description: 'Automated keyword research, content scoring, schema markup, and competitor analysis powered by machine learning.',
  },
  {
    icon: ChatCentered,
    title: 'AI chatbots',
    description: 'Intelligent WordPress chatbots that engage visitors 24/7, qualify leads, and hand off to human agents seamlessly.',
  },
  {
    icon: ChartBar,
    title: 'AI analytics & insights',
    description: 'Turn raw data into strategic decisions with automated dashboards, traffic predictions, and anomaly detection.',
  },
  {
    icon: Eye,
    title: 'AI search readiness',
    description: 'Optimise your site for AI-powered search engines like ChatGPT, Perplexity, and Google SGE.',
  },
  {
    icon: Robot,
    title: 'AI engine optimisation',
    description: 'Ensure your content is discoverable, citable, and ranked by the next generation of AI discovery platforms.',
  },
];

const statsItems = [
  { value: '156%', label: 'Average organic traffic increase' },
  { value: '10x', label: 'Content production speed' },
  { value: '92%', label: 'Prediction accuracy for traffic' },
  { value: '30+', label: 'AI integrations deployed' },
];

const approachSteps = [
  {
    title: 'Discovery & audit',
    description: 'We analyse your current digital footprint, content strategy, and search performance to identify AI opportunities.',
  },
  {
    title: 'Strategy & architecture',
    description: 'We design a tailored AI integration plan aligned with your business goals, tech stack, and budget.',
  },
  {
    title: 'Implementation & training',
    description: 'We deploy AI tools, integrate with your WordPress site, and train your team on best practices.',
  },
  {
    title: 'Optimisation & scale',
    description: 'We monitor performance, refine models, and scale successful AI initiatives across your digital ecosystem.',
  },
];

export function AIServicesLandingTemplate() {
  return (
    <div className="ai-landing">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'AI Services' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        aria-labelledby="ai-hero-title"
        className="ai-landing__hero"
      >
        {/* Background Grid Pattern */}
        <div className="ai-landing__hero-grid" />

        <div className="ai-landing__hero-content">
          <ScrollReveal animation="fade-down">
            <div className="ai-landing__badge">
              <Robot size={16} weight="duotone" aria-hidden="true" />
              AI-Powered Services
            </div>

            <h1 id="ai-hero-title" className="ai-landing__title">
              Artificial Intelligence <br />
              <span className="ai-landing__highlight">
                Services
              </span>
            </h1>

            <p className="ai-landing__subtitle">
              From technical SEO to AI engine optimisation, we help your WordPress site
              dominate both traditional search and the new wave of AI-powered discovery
              platforms.
            </p>

            <div className="ai-landing__actions">
              <Link
                to={getPageUrl('contact')}
                className="ai-landing__btn-primary"
              >
                Get AI Audit
              </Link>
              <a
                href="#services"
                className="ai-landing__btn-outline"
              >
                Explore Services
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="ai-landing__scroll-down">
          <ScrollDownArrow />
        </div>
      </section>

      {/* ============================================
          SERVICES GRID
          ============================================ */}
      <section
        id="services"
        aria-labelledby="ai-services-title"
        className="ai-landing__section ai-landing__section--muted"
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="AI & search services"
              subheading="Comprehensive AI-powered services to maximise your digital visibility across every search channel."
              capabilities={serviceItems.map((item, i) => ({
                id: `ai-srv-${i}`,
                title: item.title,
                description: item.description,
                icon: item.icon as any
              }))}
              columns={3}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          STATS
          ============================================ */}
      <section
        aria-labelledby="ai-stats-title"
        className="ai-landing__section ai-landing__section--bg"
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading="Results that matter"
              subheading="Data-backed outcomes from our AI and search optimisation campaigns."
              stats={statsItems}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          APPROACH
          ============================================ */}
      <section
        aria-labelledby="ai-approach-title"
        className="ai-landing__section ai-landing__section--muted"
      >
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyProcessTimeline
              heading="Our approach"
              subheading="A proven four-phase methodology that delivers measurable results."
              steps={approachSteps}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section aria-labelledby="ai-cta-title">
        <FunkyCTA
          title="Ready to harness AI?"
          description="Get a free AI readiness audit and discover how to future-proof your search visibility in the age of artificial intelligence."
          buttonText="Request free AI audit"
          buttonPage="contact"
          benefits={[
            'Technical SEO audit included',
            'AI prompt strategy session',
            'Performance benchmarking',
            'Data-driven action plan'
          ]}
        />
      </section>
    </div>
  );
}