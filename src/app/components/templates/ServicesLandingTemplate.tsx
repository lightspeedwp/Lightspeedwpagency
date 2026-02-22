/**
 * Services Landing Template — Funky Redesign
 *
 * Theme: "The Nexus" (Violet/Blue/Pink)
 *
 * Features:
 * - 3D Grid Horizon Hero with Parallax
 * - Portal/Hub Layout
 * - Interactive Service Cards with Glow
 * - Success Portal (Featured Project)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/page-services-landing.css
 * - Colors mapped to global semantic tokens for auto light/dark
 */

import { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';

import {
  Sparkles,
  Palette,
  Target,
  TrendingUp,
  ArrowRight,
  Check,
  Award,
  Cpu,
  Globe,
  Zap,
  Layers
} from 'lucide-react';

// Import mock data
import { services } from '../../data/services';
import { clientLogos } from '../../data/logos';

// Dynamic content widgets
import { ContentStatsWidget } from '../patterns/ContentStatsWidget';
import { RelatedContentWidget } from '../patterns/RelatedContentWidget';

export function ServicesLandingTemplate() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const parallaxRef = useHeroParallax(0.2);

  const servicesData = services.map(service => ({
    id: service.id,
    icon: service.icon,
    title: service.name,
    description: service.description,
    link: service.buttonPage,
    linkText: service.buttonText
  }));

  const clients = clientLogos.filter(logo => logo.category === 'client').slice(0, 6);

  const featuredStats = [
    { icon: TrendingUp, value: '600K+', label: 'Monthly users' },
    { icon: Check,      value: '99.9%', label: 'Uptime' },
    { icon: Zap,        value: '0.8s',  label: 'Load time' },
    { icon: Award,      value: '100',   label: 'SEO score' }
  ];

  return (
    <>
      {/* ============================================
          HERO SECTION (Nexus)
          ============================================ */}
      <section className="services-landing__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNwYWNlJTIwZ3JpZCUyMG5lb24lMjBwdXJwbGV8ZW58MXx8fHwxNzc1NDU1NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract digital nexus"
          className="services-landing__hero-bg"
          aria-hidden="true"
        />
        <div className="services-landing__hero-overlay" />
        <div className="services-landing__hero-grid" />

        <Container>
          <div className="services-landing__hero-content">
            <ScrollReveal animation="fade-up">
              <div className="services-landing__hero-badge">
                <Cpu size={14} />
                SYSTEM.INIT_SERVICES
              </div>

              <h1 className="services-landing__hero-title">
                Your Digital <br />
                <span style={{ color: 'var(--nexus-primary)' }}>Success Nexus</span>
              </h1>

              <p className="services-landing__hero-subtitle">
                We design and develop high-performance digital experiences that take your business to the next dimension.
              </p>

              <div className="services-landing__hero-buttons">
                <Button variant="default" size="lg" page="contact">
                  Start a project
                </Button>
                <Button variant="outline" size="lg" page="portfolio-archive">
                  View our work
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          CLIENTS BAR
          ============================================ */}
      <div className="services-landing__clients">
        <Container>
          <div className="services-landing__clients-inner">
            <p className="services-landing__clients-label">
              Trusted by industry leaders
            </p>
            <div className="services-landing__clients-logos">
              {clients.map((client, index) => (
                <div key={index} className="services-landing__client-name">
                  {client.name}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ============================================
          WHY LIGHTSPEED (The Hub)
          ============================================ */}
      <section className="services-landing__why">
        <div className="services-landing__why-glow" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="services-landing__why-grid">
              <div className="services-landing__why-content">
                <h2 className="services-landing__why-title">
                  Experience meets{' '}
                  <span className="services-landing__why-accent">Innovation</span>
                </h2>

                <div className="services-landing__why-text">
                  <p>
                    We don't just build websites; we architect digital ecosystems that are secure, scalable, and built for future growth.
                  </p>
                  <p>
                    From the first line of code to the final pixel, our team of experts ensures every aspect of your digital presence is optimized for performance and conversion.
                  </p>
                </div>

                <div className="services-landing__why-pills">
                  <div className="services-landing__why-pill">
                    <Sparkles className="services-landing__why-pill-icon" size={16} />
                    <span>WordPress Core</span>
                  </div>
                  <div className="services-landing__why-pill">
                    <Palette className="services-landing__why-pill-icon services-landing__why-pill-icon--alt" size={16} />
                    <span>UI/UX Design</span>
                  </div>
                  <div className="services-landing__why-pill">
                    <Layers className="services-landing__why-pill-icon" size={16} />
                    <span>Scalable Arch</span>
                  </div>
                </div>
              </div>

              <div className="services-landing__why-image-wrapper">
                <div className="services-landing__why-image-glow" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="services-landing__why-image"
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (Portal Gates)
          ============================================ */}
      <section className="services-landing__grid-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="services-landing__grid-header">
              <div className="services-landing__grid-badge">
                <Target size={14} />
                Full-Stack Capabilities
              </div>
              <h2 className="services-landing__grid-title">
                Choose Your Path
              </h2>
              <p className="services-landing__grid-desc">
                From discovery to deployment and beyond, we provide comprehensive services tailored to your needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="services-landing__grid">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={index * 80}>
                  <Link
                    to={slugToPath(service.link || 'services')}
                    className="services-landing__card"
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="services-landing__card-glow" />

                    <div className="services-landing__card-icon">
                      <Icon size={24} />
                    </div>

                    <h3 className="services-landing__card-title">
                      {service.title}
                    </h3>

                    <p className="services-landing__card-desc">
                      {service.description}
                    </p>

                    <div className="services-landing__card-link">
                      {service.linkText}
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          FEATURED PROJECT (Success Portal)
          ============================================ */}
      <section className="services-landing__featured">
        <div className="services-landing__portal-ring" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="services-landing__featured-header">
              <div className="services-landing__featured-badge">
                CASE_STUDY.LATEST
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale">
            <div className="services-landing__featured-grid">
              <div className="services-landing__featured-text-col">
                <h3 className="services-landing__featured-heading">
                  Scaling to <span style={{ color: 'var(--nexus-primary)' }}>600k+ Users</span>
                </h3>
                <p className="services-landing__featured-desc">
                  See how we helped transform a major media publisher's online presence with a headless WordPress architecture, resulting in 99.9% uptime and lightning-fast load times.
                </p>

                <div className="services-landing__featured-stats">
                  {featuredStats.map((stat, i) => (
                    <div key={i} className="services-landing__featured-stat">
                      <div className="services-landing__featured-stat-icon">
                        <stat.icon size={16} />
                      </div>
                      <div>
                        <div className="services-landing__featured-stat-value">{stat.value}</div>
                        <div className="services-landing__featured-stat-label">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="services-landing__featured-buttons">
                  <Button variant="default" page="portfolio-single">
                    Read Case Study
                  </Button>
                  <Button variant="outline" page="portfolio-archive">
                    All Projects
                  </Button>
                </div>
              </div>

              <div className="services-landing__featured-image-col">
                <div className="services-landing__featured-image">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
                    alt="Project dashboard"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          DELIVERY STATS (Dynamic Content Widget)
          ============================================ */}
      <section className="services-landing__grid-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="services-landing__grid-header">
              <h2 className="services-landing__grid-title">
                Delivered Results
              </h2>
              <p className="services-landing__grid-desc">
                Live stats from our portfolio, blog, and client feedback.
              </p>
            </div>
          </ScrollReveal>
          <ContentStatsWidget
            include={['portfolio', 'clients', 'experience', 'services']}
            variant="funky"
          />
        </Container>
      </section>

      {/* ============================================
          RELATED CONTENT (Dynamic Widget)
          ============================================ */}
      <section className="services-landing__why">
        <Container>
          <RelatedContentWidget
            tags={['wordpress', 'development', 'design', 'woocommerce']}
            count={4}
            title="Insights & Case Studies"
            label="From Our Blog & Portfolio"
          />
        </Container>
      </section>
    </>
  );
}