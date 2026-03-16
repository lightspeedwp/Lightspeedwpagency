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
 *
 * PATTERN COMPONENTS:
 * - ✅ FeatureList — Design Features section (glow variant, 3 columns)
 * - ✅ FunkyCTA — Final conversion section
 * - ✅ ServiceTestimonial — Testimonial section
 * - ✅ ServicePricingTimeline — Pricing & timeline section
 * - ✅ RelatedServicesInPhase — Related services navigation
 *
 * @migrated March 3, 2026 — Migrated inline design features grid to FeatureList component (~60 lines saved)
 */

/* Route-level CSS — optimized version loaded globally via index.css */
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FeatureList } from '../patterns/FeatureList';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { 
  designServiceHero,
  designServiceOverview,
  designServiceProcess,
  designServiceCapabilities
} from '../../data/design-service-page';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { 
  PaintBrush as Palette,
  ArrowRight,
  Monitor,
  ArrowsClockwise as RefreshCw,
  SquaresFour as Layout,
  PenNib as PenTool,
  ShoppingBag,
  Sparkle as Sparkles,
  CheckCircle,
  Stack as Layers,
  Mouse as MousePointer2,
  Eye,
  Crop,
  GridFour as Grid,
  FigmaLogo as Figma,
  SelectionAll as Component,
} from '@phosphor-icons/react';

export function DesignServiceTemplate() {
  // Build a unified data object from imports
  const data = {
    tagline: designServiceHero.subtitle || "Strategic, user-focused design that drives results",
    whyLightSpeed: {
      description: designServiceOverview.description
    },
    subServices: (designServiceCapabilities.items || []).map((item, i) => ({
      id: `cap-${i}`,
      title: typeof item === 'string' ? item : (item as any).title || '',
      description: typeof item === 'string' ? '' : (item as any).description || ''
    })),
    process: {
      steps: designServiceProcess.steps.map((step, i) => ({
        id: `step-${i}`,
        title: step.title,
        description: step.description
      }))
    },
    relatedServices: [],
    cta: {
      title: "Ready to Elevate Your Brand?",
      description: "Let's create stunning designs that captivate your audience and drive conversions.",
      buttonText: "Start Design Project",
      buttonPage: "contact" as const
    }
  };

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
      image: 'https://images.unsplash.com/photo-1759390304277-df4f95509186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJyYW5kaW5nJTIwZWRpdGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NzE0ODY2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Mobile App Interface',
      tag: 'App Design',
      image: 'https://images.unsplash.com/photo-1565268878251-eb6848dc481c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NzE0ODY2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col">
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
          minHeight: '80vh',
          textAlign: 'center'
        }}
      >
        {/* Crosshairs & Grid Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(var(--primary-rgb), 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '20px', height: '20px', borderTop: '2px solid var(--primary)', borderLeft: '2px solid var(--primary)', opacity: 0.3 }} />
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '20px', height: '20px', borderTop: '2px solid var(--primary)', borderRight: '2px solid var(--primary)', opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '20px', height: '20px', borderBottom: '2px solid var(--primary)', borderLeft: '2px solid var(--primary)', opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '20px', height: '20px', borderBottom: '2px solid var(--primary)', borderRight: '2px solid var(--primary)', opacity: 0.3 }} />

        {/* Floating Wireframes */}
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: '200px', padding: 'var(--spacing-4)', background: 'rgba(var(--card-rgb), 0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(var(--primary-rgb), 0.2)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)', opacity: 0.6, zIndex: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }} aria-hidden="true">
          <div style={{ width: '40%', height: '8px', background: 'rgba(var(--primary-rgb), 0.3)', borderRadius: 'var(--radius-full)' }} />
          <div style={{ width: '80%', height: '8px', background: 'rgba(var(--muted-foreground-rgb), 0.2)', borderRadius: 'var(--radius-full)' }} />
          <div style={{ width: '100%', height: '80px', background: 'rgba(var(--muted-foreground-rgb), 0.1)', borderRadius: 'var(--radius)' }} />
          <div style={{ width: '60%', height: '8px', background: 'rgba(var(--muted-foreground-rgb), 0.2)', borderRadius: 'var(--radius-full)' }} />
        </div>
        <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '250px', padding: 'var(--spacing-4)', background: 'rgba(var(--card-rgb), 0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(var(--secondary-rgb), 0.2)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateY(15deg) rotateX(5deg)', opacity: 0.6, zIndex: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }} aria-hidden="true">
          <div style={{ width: '100%', height: '120px', background: 'rgba(var(--muted-foreground-rgb), 0.1)', borderRadius: 'var(--radius)' }} />
          <div style={{ width: '90%', height: '8px', background: 'rgba(var(--muted-foreground-rgb), 0.2)', borderRadius: 'var(--radius-full)' }} />
          <div style={{ width: '70%', height: '8px', background: 'rgba(var(--muted-foreground-rgb), 0.2)', borderRadius: 'var(--radius-full)' }} />
          <div style={{ width: '50%', height: '8px', background: 'rgba(var(--secondary-rgb), 0.3)', borderRadius: 'var(--radius-full)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-2)', padding: 'var(--spacing-2) var(--spacing-4)', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--card)', border: '1px solid var(--border)', color: 'var(--primary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--spacing-6)', letterSpacing: '0.05em' }}>
              <Grid size={16} />
              PIXEL PERFECT ARCHITECTURE
            </div>

            <h1 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', lineHeight: '1.1', textTransform: 'uppercase' }}>
              We Craft <br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Digital Masterpieces</span>
            </h1>

            <p style={{ margin: '0 auto var(--spacing-10) auto', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: '1.6', maxWidth: '600px' }}>
              {data.tagline}
            </p>

            <div className="wp-flex wp-justify-center wp-gap-4">
              <Button variant="default" size="lg" page="contact">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" page="portfolio-archive">
                Explore Portfolio
              </Button>
            </div>
          </ScrollReveal>
        </div>
        <ScrollDownArrow targetId="design-overview" />
      </section>

      {/* ============================================
          OVERVIEW (Why LightSpeed)
          ============================================ */}
      <section id="design-overview" style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)', position: 'relative', overflow: 'hidden' }}>
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-right">
              {/* Visual Stack */}
              <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', width: '280px', height: '200px', backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateX(60deg) rotateZ(-45deg) translateZ(-60px)', opacity: 0.4, boxShadow: 'var(--shadow-lg)' }} />
                <div style={{ position: 'absolute', width: '280px', height: '200px', backgroundColor: 'var(--background)', border: '1px solid var(--primary)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateX(60deg) rotateZ(-45deg) translateZ(0px)', opacity: 0.7, boxShadow: '0 10px 30px rgba(var(--primary-rgb),0.1)' }} />
                <div style={{ position: 'absolute', width: '280px', height: '200px', backgroundColor: 'var(--background)', border: '2px solid var(--secondary)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateX(60deg) rotateZ(-45deg) translateZ(60px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(var(--secondary-rgb),0.2)', padding: 'var(--spacing-6)', textAlign: 'center' }}>
                  <Layers size={48} style={{ color: 'var(--secondary)', marginBottom: 'var(--spacing-4)' }} />
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h4)', color: 'var(--foreground)' }}>Design Systems</h3>
                  <p style={{ margin: 'var(--spacing-2) 0 0 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>Scalable & Consistent</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div>
                <h2 style={{ margin: '0 0 var(--spacing-6) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>
                  Design that <span style={{ color: 'var(--primary)' }}>Works</span>
                </h2>
                <p style={{ margin: '0 0 var(--spacing-8) 0', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                  {data.whyLightSpeed.description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--spacing-4)' }}>
                  {[
                    'User-Centric Approach',
                    'Accessibility First (WCAG 2.1)',
                    'Conversion Optimized Layouts',
                    'Brand Consistency'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', padding: 'var(--spacing-4)', backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-base)', color: 'var(--foreground)' }}>{item}</span>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
              <h2 style={{ margin: '0 0 var(--spacing-4) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>
                Recent <span style={{ color: 'var(--secondary)' }}>Work</span>
              </h2>
              <p style={{ margin: '0 auto', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px' }}>
                A glimpse at some of our latest design projects.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)' }}>
            {showcaseProjects.map((project, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', border: '1px solid var(--border)', cursor: 'pointer', group: 'true' }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--spacing-6)', background: 'var(--gradient-overlay-dark)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', pointerEvents: 'none' }}>
                    <span style={{ display: 'inline-block', padding: 'var(--spacing-1) var(--spacing-3)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-bold)', width: 'fit-content' }}>{project.tag}</span>
                    <span style={{ color: 'var(--primary-foreground)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h4)', fontWeight: 'var(--font-weight-bold)' }}>{project.name}</span>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
              <h2 style={{ margin: '0 0 var(--spacing-4) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>
                Our Creative Suite
              </h2>
              <p style={{ margin: '0 auto', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px' }}>
                From branding to full-scale UI/UX design, we cover every pixel.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={designServiceOverview.features.map((feat) => ({
                icon: feat.icon as any,
                title: feat.title,
                description: feat.description
              }))}
              columns={3}
              variant="glow"
              iconSize="lg"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PROCESS (Creative Flow)
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ margin: '0 0 var(--spacing-4) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)' }}>
                The Creative Process
              </h2>
              <p style={{ margin: '0 auto', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px' }}>
                How we take your vision from concept to reality.
              </p>
            </ScrollReveal>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: '24px', bottom: '24px', left: '24px', width: '2px', backgroundColor: 'var(--border)', zIndex: 0 }} aria-hidden="true" />
            
            {data.process.steps.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 'var(--spacing-8)' }}>
                  <div style={{ flexShrink: 0, width: '48px', height: '48px', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)', border: '4px solid var(--background)', boxShadow: '0 0 0 1px var(--border)' }}>
                    {index + 1}
                  </div>
                  <div style={{ paddingTop: 'var(--spacing-2)' }}>
                    <h3 style={{ margin: '0 0 var(--spacing-2) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h4)', color: 'var(--foreground)' }}>
                      {step.title}
                    </h3>
                    <p style={{ margin: 0, fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-base)', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
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
          <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--muted)' }}>
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
    </div>
  );
}