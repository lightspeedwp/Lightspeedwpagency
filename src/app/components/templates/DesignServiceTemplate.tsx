/**
 * Design Service Template - Funky Redesign
 * 
 * Theme: "Pixel Perfect Blueprint" (Indigo/Cyan/White)
 * 
 * Features:
 * - Wireframe/Blueprint Hero
 * - Crosshair Grid Background
 * - 3D Layer Stack Visualization
 * - Process Timeline with connection lines
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/page-service-design.css
 * - Colors mapped to global semantic tokens for auto light/dark
 */

/* Route-level CSS */
import '../../../styles/templates/page-service-design.css';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { designServiceDetailed } from '../../data/services';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { 
  Palette,
  ArrowRight,
  Monitor,
  RefreshCw,
  Layout,
  PenTool,
  ShoppingBag,
  Sparkles,
  CheckCircle,
  Layers,
  MousePointer2,
  Eye,
  Crop,
  Grid,
  Figma,
  Component,
} from 'lucide-react';

export function DesignServiceTemplate() {
  const data = designServiceDetailed;

  // Icon mapping for Sub-services
  const serviceIcons: Record<string, any> = {
    'new-website-design': Monitor,
    'website-redesign': RefreshCw,
    'landing-pages': Layout,
    'icons-illustrations': PenTool,
    'product-images': ShoppingBag,
    'branding': Palette,
    'figma-prototyping': Figma,
    'design-systems': Component,
  };

  // Showcase projects (design portfolio preview)
  const showcaseProjects = [
    {
      name: 'E-Commerce Redesign',
      tag: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1604074131228-9d48b811bd80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwZGVza3RvcHxlbnwxfHx8fDE3NzE0NTU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Brand Identity System',
      tag: 'Branding',
      image: 'https://images.unsplash.com/photo-1759390304277-df4f95509186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJyYW5kaW5nJTIwaWRlbnRpdHklMjBkZXNpZ258ZW58MXx8fHwxNzcxNDg2NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Mobile App Interface',
      tag: 'App Design',
      image: 'https://images.unsplash.com/photo-1565268878251-eb6848dc481c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NzE0ODY2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Web Design' },
        ]}
      />

      {/* Journey Phase Indicator */}
      <JourneyPhaseIndicator currentPhase="create" currentServicePage="design" />

      {/* ============================================
          HERO SECTION (The Blueprint)
          ============================================ */}
      <section className="design-page__hero">
        {/* Crosshairs */}
        <div className="design-page__crosshair design-page__crosshair--tl" />
        <div className="design-page__crosshair design-page__crosshair--tr" />
        <div className="design-page__crosshair design-page__crosshair--bl" />
        <div className="design-page__crosshair design-page__crosshair--br" />

        {/* Floating Wireframes */}
        <div className="design-page__wireframe design-page__wireframe--1" aria-hidden="true">
          <div className="design-page__wire-line" style={{ width: '40%' }} />
          <div className="design-page__wire-line" style={{ width: '80%' }} />
          <div className="design-page__wire-block" />
          <div className="design-page__wire-line" style={{ width: '60%' }} />
        </div>
        <div className="design-page__wireframe design-page__wireframe--2" aria-hidden="true">
          <div className="design-page__wire-block" style={{ height: '80px' }} />
          <div className="design-page__wire-line" style={{ width: '90%' }} />
          <div className="design-page__wire-line" style={{ width: '70%' }} />
          <div className="design-page__wire-line" style={{ width: '50%' }} />
        </div>

        <Container>
          <div className="design-page__hero-content">
            <ScrollReveal animation="fade-down">
              <div className="design-page__badge">
                <Grid size={16} />
                PIXEL PERFECT ARCHITECTURE
              </div>

              <h1 className="design-page__title">
                We Craft <br />
                <span className="design-page__highlight">Digital Masterpieces</span>
              </h1>

              <p className="design-page__description">
                {data.tagline}
              </p>

              <div className="design-page__hero-buttons">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="portfolio-archive"
                >
                  Explore Portfolio
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
        <ScrollDownArrow targetId="design-overview" />
      </section>

      {/* ============================================
          OVERVIEW (Why LightSpeed)
          ============================================ */}
      <section id="design-overview" className="design-page__overview">
        <Container>
          <div className="design-page__overview-grid">
            <ScrollReveal animation="fade-right">
              {/* Visual Stack */}
              <div className="design-page__stack">
                <div className="design-page__layer" />
                <div className="design-page__layer" />
                <div className="design-page__layer">
                  <Layers size={48} className="design-page__layer-icon" />
                  <h3 className="design-page__layer-title">Design Systems</h3>
                  <p className="design-page__layer-subtitle">Scalable & Consistent</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div>
                <h2 className="design-page__section-title">
                  Design that <span className="design-page__highlight">Works</span>
                </h2>
                <p className="design-page__section-desc">
                  {data.whyLightSpeed.description}
                </p>
                <div className="design-page__feature-list">
                  {[
                    'User-Centric Approach',
                    'Accessibility First (WCAG 2.1)',
                    'Conversion Optimized Layouts',
                    'Brand Consistency'
                  ].map((item, i) => (
                    <div key={i} className="design-page__feature-item">
                      <CheckCircle size={20} className="design-page__feature-icon" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          SHOWCASE (Portfolio Preview)
          ============================================ */}
      <section className="design-page__showcase">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="design-page__showcase-header">
              <h2 className="design-page__section-title">
                Recent <span className="design-page__highlight">Work</span>
              </h2>
              <p className="design-page__section-desc design-page__max-w-2xl">
                A glimpse at some of our latest design projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="design-page__showcase-grid">
            {showcaseProjects.map((project, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="design-page__project-card">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="design-page__project-image"
                    loading="lazy"
                  />
                  <div className="design-page__project-overlay">
                    <span className="design-page__project-tag">{project.tag}</span>
                    <span className="design-page__project-title">{project.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID
          ============================================ */}
      <section className="design-page__services">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="design-page__showcase-header">
              <h2 className="design-page__section-title">
                Our Creative Suite
              </h2>
              <p className="design-page__section-desc design-page__max-w-2xl">
                From branding to full-scale UI/UX design, we cover every pixel.
              </p>
            </div>
          </ScrollReveal>

          <div className="design-page__services-grid">
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || Sparkles;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 60}>
                  <div className="design-page__service-card">
                    <div className="design-page__service-icon">
                      <Icon size={28} />
                    </div>
                    
                    <h3 className="design-page__service-title">
                      {service.title}
                    </h3>
                    
                    <p className="design-page__service-desc">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          PROCESS (Creative Flow)
          ============================================ */}
      <section className="design-page__process">
        <Container>
          <div className="design-page__showcase-header">
            <ScrollReveal animation="fade-up">
              <h2 className="design-page__section-title">
                The Creative Process
              </h2>
              <p className="design-page__section-desc design-page__max-w-2xl">
                How we take your vision from concept to reality.
              </p>
            </ScrollReveal>
          </div>

          <div className="design-page__process-timeline">
            <div className="design-page__process-line" aria-hidden="true" />
            
            {data.process.steps.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="design-page__process-step">
                  <div className="design-page__step-circle">
                    {index + 1}
                  </div>
                  <h3 className="design-page__step-title">
                    {step.title}
                  </h3>
                  <p className="design-page__step-desc">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
          subtitle="Pair design with these services for a complete digital experience"
          services={data.relatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="design"
        subtitle="Our design service is bundled into these complete solution packages"
      />
      <ServiceTestimonial
        serviceSlug="design"
        subtitle="Hear from clients who transformed their brand with our design expertise"
      />
      
      {/* ============================================
          PRICING & TIMELINE
          ============================================ */}
      {servicePricingTimeline.design && (
        <ScrollReveal animation="fade-up">
          <section className="design-service__pricing-section">
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.design.pricing}
                timeline={servicePricingTimeline.design.timeline}
                showPhases={true}
                showVariables={true}
              />
            </Container>
          </section>
        </ScrollReveal>
      )}
      
      {/* Related Services in Create Phase */}
      <RelatedServicesInPhase 
        currentPhase="create"
        currentServicePage="design"
      />

      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'User-centric design methodology',
          'WCAG 2.1 AA accessibility baked in',
          'Conversion-optimised layouts',
          'Full design system handoff'
        ]}
      />
    </>
  );
}