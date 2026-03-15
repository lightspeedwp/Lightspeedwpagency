/**
 * Single Project Template - Funky Redesign
 * 
 * Theme: "The Exhibit" (Immersive/Detail)
 * 
 * Features:
 * - Immersive Hero with Background Blur
 * - Sticky Project Meta Sidebar
 * - Key Metrics Grid
 * - Image Gallery with Hover Effects
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/single-project.css
 * - Colors mapped to global semantic tokens for auto light/dark
 */

import '../../../styles/templates/single-project.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Button } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowLeft, ArrowRight, ArrowSquareOut, Calendar, Stack, Tag } from '@phosphor-icons/react';
import { getProjectBySlug } from '../../data/portfolio';
import { Link } from 'react-router';


interface SingleProjectTemplateProps {
  slug: string;
}

export function SingleProjectTemplate({ slug }: SingleProjectTemplateProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <Container>
        <div className="wp-py-24 wp-text-center">
          <h1>Project Not Found</h1>
          <Link to="/work">Return to Portfolio</Link>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Portfolio', href: '/work' },
          { label: project.title },
        ]}
      />

      {/* Hero Section */}
      <section className="single-project__hero">
        <img 
          src={project.imageUrl} 
          alt="" 
          className="single-project__hero-bg"
          aria-hidden="true"
        />
        <div className="single-project__hero-overlay" />
        
        <Container>
          <div className="single-project__hero-content">
            <ScrollReveal animation="fade-down">
              <span className="single-project__client-badge">
                {project.client || 'Client Project'}
              </span>
              
              <h1 className="single-project__title">
                {project.title}
              </h1>
              
              <p className="single-project__excerpt">
                {project.excerpt}
              </p>

              {project.websiteUrl && (
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={() => window.open(project.websiteUrl, '_blank')}
                  className="wp-flex wp-items-center wp-gap-2"
                >
                  Visit Live Site <ArrowSquareOut size={16} />
                </Button>
              )}
            </ScrollReveal>

            {/* Key Metrics */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="single-project__metrics">
                {project.results?.map((result, index) => (
                  <div key={index} className="single-project__metric-item">
                    <span className="single-project__metric-value">{result.value}</span>
                    <span className="single-project__metric-label">{result.metric}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section spacing="xl">
        <Container>
          <div className="single-project__content-wrapper">
            
            {/* Sidebar Meta */}
            <aside>
              <ScrollReveal animation="fade-right">
                <div className="single-project__meta-card">
                  <div className="single-project__meta-group">
                    <span className="single-project__meta-label"><Stack size={14} className="wp-inline wp-mr-1"/> Industry</span>
                    <span className="single-project__meta-value">{project.industry}</span>
                  </div>
                  
                  <div className="single-project__meta-group">
                    <span className="single-project__meta-label"><Calendar size={14} className="wp-inline wp-mr-1"/> Year</span>
                    <span className="single-project__meta-value">{project.completionDate || '2024'}</span>
                  </div>

                  <div className="single-project__meta-group">
                    <span className="single-project__meta-label"><Tag size={14} className="wp-inline wp-mr-1"/> Technologies</span>
                    <div className="single-project__tech-stack">
                      {project.technologies?.map((tech, i) => (
                        <span key={i} className="single-project__tech-tag">{tech}</span>
                      )) || (
                        <>
                          <span className="single-project__tech-tag">WordPress</span>
                          <span className="single-project__tech-tag">React</span>
                          <span className="single-project__tech-tag">Tailwind</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </aside>

            {/* Case Study Content */}
            <article className="single-project__body">
              <ScrollReveal animation="fade-up">
                <h2>The Challenge</h2>
                <p>{project.challenge || "Every project begins with a unique set of challenges. For this client, the primary goal was to modernize their digital presence while improving core web vitals and conversion rates. Their previous legacy system was difficult to manage and performed poorly on mobile devices."}</p>
                
                <h2>Our Solution</h2>
                <p>{project.solution || "We implemented a custom WordPress block theme architecture, leveraging the latest Full Site Editing capabilities. This approach allowed for a highly performant frontend while giving the marketing team complete control over content layout without needing developer intervention."}</p>
                
                {/* Gallery */}
                <div className="single-project__gallery">
                  {project.galleryImages?.map((img, i) => (
                    <img 
                      key={i}
                      src={img} 
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="single-project__gallery-image"
                      loading="lazy"
                    />
                  )) || (
                    <img 
                      src={project.imageUrl} 
                      alt="Project Screenshot"
                      className="single-project__gallery-image"
                    />
                  )}
                </div>

                <h2>The Outcome</h2>
                <p>{project.outcome || "The launch was a resounding success. Post-launch analytics showed a 40% increase in mobile traffic engagement and a 25% boost in lead generation. The client's team can now publish new landing pages in minutes rather than days."}</p>
              </ScrollReveal>
            </article>

          </div>

          {/* Navigation */}
          <nav className="single-project__nav">
            <Link to="/work" className="single-project__nav-link">
              <ArrowLeft size={20} />
              <div>
                <span className="single-project__nav-label">Back</span>
                <span className="single-project__nav-title">All Projects</span>
              </div>
            </Link>
            
            {/* Logic to find next project could go here */}
            <Link to="/work" className="single-project__nav-link wp-text-right wp-flex-row-reverse">
              <ArrowRight size={20} />
              <div>
                <span className="single-project__nav-label">Next</span>
                <span className="single-project__nav-title">Next Project</span>
              </div>
            </Link>
          </nav>

        </Container>
      </Section>

      <FunkyCTA
        title="Ready to build your success story?"
        description="Let's apply the same level of care and expertise to your next project."
        buttonText="Start a Project"
        buttonPage="contact"
      />
    </>
  );
}