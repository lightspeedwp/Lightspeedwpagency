/**
 * Portfolio Single Template
 * 
 * WordPress template: templates/single-portfolio.html
 * 
 * Pattern order: Breadcrumbs → Hero → Meta → Challenge → Solution → Results → Features → Gallery → Process → Testimonial → Related Projects → CTA
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Buttons, Button } from '../blocks/design/Buttons';
import { CTASection } from '../patterns/CTASection';
import { Hero } from '../patterns/Hero';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { 
  Code,
  Calendar,
  Clock,
  Users,
  DollarSign,
  ExternalLink,
  CheckCircle,
  Star,
  ArrowRight,
  Quote
} from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';

// Import centralized data
import {
  projectPageHero,
  projectPageMeta,
  projectPageServices,
  projectPageTechnologies,
  projectPageChallenge,
  projectPageSolution,
  projectPageResults,
  projectPageFeatures,
  projectPageGallery,
  projectPageTestimonial,
  projectPageProcess,
  projectPageRelated,
  projectPageCTA
} from '../../data/portfolio-project-page';

interface PortfolioSingleTemplateProps {
  slug?: string;
}

export function PortfolioSingleTemplate({ slug = 'armd-digital' }: PortfolioSingleTemplateProps) {
  const { navigateTo } = useNavigation();

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          style={{
            paddingTop: 'var(--spacing-4)',
            paddingBottom: 'var(--spacing-4)',
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: projectPageHero.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Hero
          variant="page"
          align="left"
          maxWidth="5xl"
          gradient="blue"
          spacing="xl"
          badge={{
            icon: Code,
            text: projectPageHero.badge.text
          }}
          title={projectPageHero.title}
          description={projectPageHero.description}
        />

        {/* Featured Image */}
        <Section spacing="none" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto', marginTop: '-80px', position: 'relative', zIndex: 10 }}>
              <div
                style={{
                  width: '100%',
                  height: '500px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundImage: `url(${projectPageHero.featuredImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                  border: '4px solid var(--background)'
                }}
              />
            </div>
          </Container>
        </Section>

        {/* Project Meta */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)', paddingTop: '80px' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: 'var(--spacing-6)'
                }}
              >
                {/* Client */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--muted-foreground)',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Client
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)'
                    }}
                  >
                    {projectPageMeta.client}
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--muted-foreground)',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Industry
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)'
                    }}
                  >
                    {projectPageMeta.industry}
                  </div>
                </div>

                {/* Completed */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--muted-foreground)',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Completed
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)'
                    }}
                  >
                    {projectPageMeta.completedDate}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--muted-foreground)',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Duration
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)'
                    }}
                  >
                    {projectPageMeta.duration}
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--muted-foreground)',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    <Users size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Team
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)'
                    }}
                  >
                    {projectPageMeta.teamSize}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--muted-foreground)',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    <DollarSign size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Budget
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)'
                    }}
                  >
                    {projectPageMeta.budget}
                  </div>
                </div>
              </div>

              {/* Services & Technologies */}
              <div className="wp-grid-2-cols" style={{ gap: 'var(--spacing-8)', marginTop: 'var(--spacing-12)' }}>
                {/* Services */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--foreground)',
                      marginBottom: '16px'
                    }}
                  >
                    Services Provided
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {projectPageServices.map((service, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: 'var(--text-small)',
                          fontFamily: 'var(--font-secondary)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--primary)',
                          backgroundColor: 'var(--primary-soft)',
                          padding: '6px 12px',
                          borderRadius: 'var(--radius)',
                          border: '1px solid var(--primary)'
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--foreground)',
                      marginBottom: '16px'
                    }}
                  >
                    Technologies Used
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {projectPageTechnologies.map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: 'var(--text-small)',
                          fontFamily: 'var(--font-secondary)',
                          color: 'var(--foreground)',
                          backgroundColor: 'var(--muted)',
                          padding: '6px 12px',
                          borderRadius: 'var(--radius)',
                          border: '1px solid var(--border)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Challenge Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-4xl" style={{ margin: '0 auto' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                  color: 'var(--foreground)',
                  textAlign: 'center'
                }}
              >
                {projectPageChallenge.title}
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.8',
                  color: 'var(--foreground)',
                  marginBottom: '40px',
                  textAlign: 'center',
                  maxWidth: '700px',
                  margin: '0 auto 40px'
                }}
              >
                "{projectPageChallenge.description}"
              </p>

              <div className="wp-grid-2-cols" style={{ gap: 'var(--spacing-6)' }}>
                {projectPageChallenge.keyIssues.map((issue, index) => {
                  const Icon = issue.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '24px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: 'var(--destructive-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={24} style={{ color: 'var(--destructive)' }} />
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {issue.issue}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {issue.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Solution Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-4xl" style={{ margin: '0 auto' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                  color: 'var(--foreground)',
                  textAlign: 'center'
                }}
              >
                {projectPageSolution.title}
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.8',
                  color: 'var(--foreground)',
                  marginBottom: '40px',
                  textAlign: 'center',
                  maxWidth: '700px',
                  margin: '0 auto 40px'
                }}
              >
                {projectPageSolution.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                {projectPageSolution.keyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '24px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)',
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'flex-start'
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: 'var(--success-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon size={24} style={{ color: 'var(--success)' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-lg)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'var(--foreground)',
                            marginBottom: '8px'
                          }}
                        >
                          {feature.feature}
                        </h3>
                        <p
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-base)',
                            lineHeight: '1.6',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Results Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '48px',
                  color: 'var(--foreground)',
                  textAlign: 'center'
                }}
              >
                Project Results
              </h2>

              <div className="wp-grid-4-cols" style={{ gap: 'var(--spacing-8)' }}>
                {projectPageResults.map((result, index) => {
                  const Icon = result.icon;
                  return (
                    <div
                      key={index}
                      className="wp-text-center"
                      style={{
                        padding: '32px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <Icon size={40} style={{ marginBottom: '16px', color: 'var(--primary)' }} />
                      <div
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-h2)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: '8px',
                          color: 'var(--foreground)'
                        }}
                      >
                        {result.value}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          marginBottom: '8px',
                          color: 'var(--foreground)'
                        }}
                      >
                        {result.metric}
                      </div>
                      <p
                        style={{
                          fontFamily: 'var(--font-secondary)',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.5',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {result.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Gallery Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginBottom: '32px',
                  color: 'var(--foreground)',
                  textAlign: 'center'
                }}
              >
                Project Gallery
              </h2>

              <div className="wp-grid-2-cols" style={{ gap: 'var(--spacing-6)' }}>
                {projectPageGallery.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '300px',
                        backgroundImage: `url(${image.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div
                      style={{
                        padding: '16px',
                        backgroundColor: 'var(--card)'
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-secondary)',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                          textAlign: 'center'
                        }}
                      >
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Testimonial Section */}
        <Section 
          spacing="xl" 
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'var(--primary-foreground)'
          }}
        >
          <Container>
            <TestimonialGrid
              testimonials={[{
                quote: projectPageTestimonial.quote,
                author: projectPageTestimonial.author,
                role: projectPageTestimonial.position,
                company: projectPageTestimonial.company,
                avatar: projectPageTestimonial.avatar,
                rating: projectPageTestimonial.rating
              }]}
              columns={1}
              variant="featured"
              showRating
              showAvatar
            />
          </Container>
        </Section>

        {/* Related Projects Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginBottom: '32px',
                  color: 'var(--foreground)',
                  textAlign: 'center'
                }}
              >
                Related Projects
              </h2>

              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
                {projectPageRelated.map((project, index) => (
                  <div
                    key={index}
                    onClick={() => navigateTo('portfolio-single')}
                    style={{
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }}
                  >
                    <div
                      style={{
                        height: '200px',
                        backgroundImage: `url(${project.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          padding: '4px 12px',
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                          borderRadius: 'var(--radius)',
                          fontSize: 'var(--text-small)',
                          fontFamily: 'var(--font-secondary)',
                          fontWeight: 'var(--font-weight-medium)'
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: '8px',
                          color: 'var(--foreground)'
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--muted-foreground)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        View Case Study <ArrowRight size={16} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title={projectPageCTA.title}
          description={projectPageCTA.description}
          primaryButtonText={projectPageCTA.buttons[0].text}
          primaryButtonPage={projectPageCTA.buttons[0].page}
          secondaryButtonText={projectPageCTA.buttons[1].text}
          secondaryButtonPage={projectPageCTA.buttons[1].page}
          gradient="blue"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
