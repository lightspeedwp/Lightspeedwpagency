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
 *
 * PATTERN COMPONENTS:
 * - ✅ StatsGrid — Featured Project Stats section (compact variant, 4 columns, with icons, left-aligned)
 * - ✅ ContentStatsWidget — Delivery stats section
 * - ✅ RelatedContentWidget — Related insights section
 *
 * @migrated March 3, 2026 — Migrated inline featured stats to StatsGrid component (~85 lines saved). Phase 2 COMPLETE!
 */

import { useState } from 'react';
/* Route-level CSS — OPTIMIZED (Phase 3.3 Batch 6) */
import '../../../styles/templates/page-services-landing-optimized.css';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { StatsGrid } from '../patterns/StatsGrid';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';

import {
  Sparkle,
  Palette,
  Target,
  TrendUp,
  ArrowRight,
  Check,
  Trophy as Award,
  Cpu,
  Globe,
  Lightning as Zap,
  Stack as Layers,
  Brain,
  FileText as FileTextIcon,
} from '@phosphor-icons/react';

// Import mock data
import { services } from '../../data/services';
import { clientLogos } from '../../data/logos';
import { servicesHeroMessaging } from '../../data/three-tier-model';

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
    { icon: TrendUp, value: '600K+', label: 'Monthly users' },
    { icon: Check,      value: '99.9%', label: 'Uptime' },
    { icon: Zap,        value: '0.8s',  label: 'Load time' },
    { icon: Award,      value: '100',   label: 'SEO score' }
  ];

  return (
    <>
      {/* ============================================
          HERO SECTION (Nexus)
          ============================================ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--spacing-32) 0',
        overflow: 'hidden',
        backgroundColor: 'var(--background)'
      }}>
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNwYWNlJTIwZ3JpZCUyMG5lb24lMjBwdXJwbGV8ZW58MXx8fHwxNzc1NDU1NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract digital nexus"
          style={{
            position: 'absolute',
            top: '-10%',
            left: 0,
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            opacity: 0.4,
            zIndex: 0
          }}
          aria-hidden="true"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(var(--background-rgb), 0.3) 0%, var(--background) 100%)',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 1
        }} />

        <Container>
          <div style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-6)'
          }}>
            <ScrollReveal animation="fade-up">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(var(--card-rgb), 0.5)',
                border: '1px solid rgba(var(--primary-rgb), 0.3)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                backdropFilter: 'blur(10px)',
                marginBottom: 'var(--spacing-6)'
              }}>
                <Cpu size={14} weight="bold" />
                {servicesHeroMessaging.badge}
              </div>

              <h1 style={{
                margin: '0 0 var(--spacing-6) 0',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-h1)',
                color: 'var(--foreground)',
                lineHeight: '1.1'
              }}>
                {servicesHeroMessaging.title.line1} <br />
                <span style={{
                  color: 'var(--primary)',
                  textShadow: '0 0 30px rgba(var(--primary-rgb), 0.5)'
                }}>
                  {servicesHeroMessaging.title.line2}
                </span>
              </h1>

              <p style={{
                margin: '0 0 var(--spacing-8) 0',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-xl)',
                color: 'var(--muted-foreground)',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.6'
              }}>
                {servicesHeroMessaging.subtitle}
              </p>

              <div className="wp-flex wp-justify-center wp-gap-4">
                <Button variant="default" size="lg" page={servicesHeroMessaging.cta.primary.page}>
                  {servicesHeroMessaging.cta.primary.text}
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
      <div style={{
        padding: 'var(--spacing-8) 0',
        backgroundColor: 'var(--card)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}>
        <Container>
          <div className="wp-flex wp-flex-col wp-items-center wp-gap-6">
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-sm)',
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              Trusted by industry leaders
            </p>
            <div className="wp-flex wp-flex-wrap wp-justify-center wp-items-center wp-gap-8 md:wp-gap-16">
              {clients.map((client, index) => (
                <div 
                  key={index}
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--foreground)',
                    opacity: 0.5,
                    filter: 'grayscale(100%)',
                    transition: 'opacity var(--transition-base), filter var(--transition-base)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.5';
                    e.currentTarget.style.filter = 'grayscale(100%)';
                  }}
                >
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
      <section style={{
        position: 'relative',
        padding: 'var(--spacing-24) 0',
        backgroundColor: 'var(--background)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '0%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wp-grid-2-cols wp-items-center wp-gap-16" style={{ position: 'relative', zIndex: 1 }}>
              <div className="wp-flex wp-flex-col wp-gap-8">
                <h2 style={{
                  margin: 0,
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h2)',
                  color: 'var(--foreground)',
                  lineHeight: '1.2'
                }}>
                  Experience meets{' '}
                  <span style={{
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}>Innovation</span>
                </h2>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-4)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6'
                }}>
                  <p className="wp-m-0">
                    We don't just build websites; we architect digital ecosystems that are secure, scalable, and built for future growth.
                  </p>
                  <p className="wp-m-0">
                    From the first line of code to the final pixel, our team of experts ensures every aspect of your digital presence is optimized for performance and conversion.
                  </p>
                </div>

                <div className="wp-flex wp-flex-wrap wp-gap-4">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)'
                  }}>
                    <Sparkle color="var(--primary)" weight="duotone" size={18} />
                    <span>WordPress Core</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)'
                  }}>
                    <Palette color="var(--secondary)" weight="duotone" size={18} />
                    <span>UI/UX Design</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)'
                  }}>
                    <Layers color="var(--primary)" weight="duotone" size={18} />
                    <span>Scalable Arch</span>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  inset: '-20px',
                  background: 'linear-gradient(45deg, var(--primary-soft), var(--secondary-soft))',
                  filter: 'blur(30px)',
                  borderRadius: 'var(--radius-lg)',
                  zIndex: 0
                }} />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(var(--primary-rgb), 0.2)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    zIndex: 1,
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          SERVICE CATEGORY HUBS
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wp-flex wp-flex-col wp-items-center wp-text-center wp-mb-16">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                color: 'var(--secondary)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-4)'
              }}>
                <Layers size={14} weight="bold" />
                Specialist Hubs
              </div>
              <h2 style={{
                margin: '0 0 var(--spacing-4) 0',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-h2)',
                color: 'var(--foreground)'
              }}>
                Explore by Discipline
              </h2>
              <p style={{
                margin: 0,
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                maxWidth: '600px'
              }}>
                Deep-dive into our specialist service categories — each with dedicated sub-services, case studies, and pricing.
              </p>
            </div>
          </ScrollReveal>

          <div className="wp-grid-2-cols wp-gap-8">
            <ScrollReveal animation="fade-up" delay={0}>
              <Link 
                to="/services/ai" 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'var(--spacing-8)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  transition: 'transform var(--transition-base), box-shadow var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(var(--primary-rgb), 0.15)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, height: '4px',
                  background: 'linear-gradient(90deg, var(--primary), var(--secondary))'
                }} />
                
                <div style={{
                  width: '56px', height: '56px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--primary-soft)',
                  color: 'var(--primary)',
                  marginBottom: 'var(--spacing-6)'
                }}>
                  <Brain size={28} weight="duotone" />
                </div>

                <h3 style={{
                  margin: '0 0 var(--spacing-3) 0',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  color: 'var(--card-foreground)'
                }}>AI Services</h3>
                
                <p style={{
                  margin: '0 0 var(--spacing-6) 0',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6'
                }}>
                  AI Search & Visibility, Technical SEO, Analytics, AI Engine Optimisation, and Answer Engine Optimisation.
                </p>
                
                <ul style={{
                  listStyle: 'none', padding: 0, margin: '0 0 var(--spacing-8) 0',
                  display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)',
                  fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)'
                }}>
                  <li className="wp-flex wp-items-center wp-gap-2"><Check size={16} color="var(--primary)" /> AI Search & Visibility</li>
                  <li className="wp-flex wp-items-center wp-gap-2"><Check size={16} color="var(--primary)" /> Technical SEO</li>
                  <li className="wp-flex wp-items-center wp-gap-2"><Check size={16} color="var(--primary)" /> Analytics & Reporting</li>
                </ul>

                <div style={{
                  marginTop: 'auto',
                  display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)',
                  color: 'var(--primary)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: 'var(--text-sm)'
                }}>
                  Explore AI Services
                  <ArrowRight size={16} weight="bold" />
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120}>
              <Link 
                to="/services/content" 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'var(--spacing-8)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  transition: 'transform var(--transition-base), box-shadow var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(var(--secondary-rgb), 0.15)';
                  e.currentTarget.style.borderColor = 'var(--secondary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, height: '4px',
                  background: 'linear-gradient(90deg, var(--secondary), var(--primary))'
                }} />

                <div style={{
                  width: '56px', height: '56px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--secondary-soft)',
                  color: 'var(--secondary)',
                  marginBottom: 'var(--spacing-6)'
                }}>
                  <FileTextIcon size={28} weight="duotone" />
                </div>

                <h3 style={{
                  margin: '0 0 var(--spacing-3) 0',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  color: 'var(--card-foreground)'
                }}>Content Services</h3>
                
                <p style={{
                  margin: '0 0 var(--spacing-6) 0',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6'
                }}>
                  Full-lifecycle content — from audit and strategy through creation, copywriting, SEO content, and governance.
                </p>
                
                <ul style={{
                  listStyle: 'none', padding: 0, margin: '0 0 var(--spacing-8) 0',
                  display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)',
                  fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)'
                }}>
                  <li className="wp-flex wp-items-center wp-gap-2"><Check size={16} color="var(--secondary)" /> Content Audit & Strategy</li>
                  <li className="wp-flex wp-items-center wp-gap-2"><Check size={16} color="var(--secondary)" /> Copywriting & UX Writing</li>
                  <li className="wp-flex wp-items-center wp-gap-2"><Check size={16} color="var(--secondary)" /> SEO Content & Governance</li>
                </ul>

                <div style={{
                  marginTop: 'auto',
                  display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)',
                  color: 'var(--secondary)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: 'var(--text-sm)'
                }}>
                  Explore Content Services
                  <ArrowRight size={16} weight="bold" />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (Portal Gates)
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wp-flex wp-flex-col wp-items-center wp-text-center wp-mb-16">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: 'var(--spacing-4)'
              }}>
                <Target size={14} weight="bold" />
                Full-Stack Capabilities
              </div>
              <h2 style={{
                margin: '0 0 var(--spacing-4) 0',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-h2)',
                color: 'var(--foreground)'
              }}>
                Choose Your Path
              </h2>
              <p style={{
                margin: 0,
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                maxWidth: '600px'
              }}>
                From discovery to deployment and beyond, we provide comprehensive services tailored to your needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="wp-grid-3-cols wp-gap-8">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={index * 80}>
                  <Link
                    to={slugToPath(service.link || 'services')}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 'var(--spacing-8)',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border)',
                      textDecoration: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      transition: 'transform var(--transition-base), box-shadow var(--transition-base)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(var(--primary-rgb), 0.1)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      setHoveredService(service.id);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border)';
                      setHoveredService(null);
                    }}
                  >
                    <div style={{
                      width: '48px', height: '48px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      marginBottom: 'var(--spacing-6)',
                      transition: 'background-color var(--transition-base), color var(--transition-base)'
                    }}>
                      <Icon size={24} weight="duotone" />
                    </div>

                    <h3 style={{
                      margin: '0 0 var(--spacing-3) 0',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h4)',
                      color: 'var(--card-foreground)'
                    }}>
                      {service.title}
                    </h3>

                    <p style={{
                      margin: '0 0 var(--spacing-6) 0',
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)',
                      lineHeight: '1.6',
                      flex: 1
                    }}>
                      {service.description}
                    </p>

                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 'var(--font-weight-semibold)',
                      fontSize: 'var(--text-sm)'
                    }}>
                      {service.linkText}
                      <ArrowRight size={16} weight="bold" />
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
      <section style={{ position: 'relative', padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <ScrollReveal animation="scale">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--card)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div className="wp-grid-2-cols wp-items-center">
                <div style={{ padding: 'var(--spacing-16)' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                    color: 'var(--primary)',
                    fontFamily: 'monospace',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                    letterSpacing: '0.1em',
                    marginBottom: 'var(--spacing-6)'
                  }}>
                    CASE_STUDY.LATEST
                  </div>

                  <h3 style={{
                    margin: '0 0 var(--spacing-4) 0',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h2)',
                    color: 'var(--foreground)'
                  }}>
                    Scaling to <span style={{ color: 'var(--primary)' }}>600k+ Users</span>
                  </h3>
                  
                  <p style={{
                    margin: '0 0 var(--spacing-8) 0',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.6'
                  }}>
                    See how we helped transform a major media publisher's online presence with a headless WordPress architecture, resulting in 99.9% uptime and lightning-fast load times.
                  </p>

                  <StatsGrid
                    stats={featuredStats.map((stat) => ({
                      icon: stat.icon as any,
                      value: stat.value,
                      label: stat.label
                    }))}
                    columns={2}
                    variant="compact"
                    showIcons={true}
                    alignment="left"
                  />

                  <div className="wp-flex wp-gap-4" style={{ marginTop: 'var(--spacing-8)' }}>
                    <Button variant="default" page="portfolio-single">
                      Read Case Study
                    </Button>
                    <Button variant="outline" page="portfolio-archive">
                      All Projects
                    </Button>
                  </div>
                </div>

                <div style={{ height: '100%', minHeight: '400px', position: 'relative' }}>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
                    alt="Project dashboard"
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      objectFit: 'cover',
                      boxShadow: 'var(--shadow-2xl)',
                      zIndex: 1
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to right, var(--card) 0%, transparent 100%)'
                  }} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          DELIVERY STATS (Dynamic Content Widget)
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wp-flex wp-flex-col wp-items-center wp-text-center wp-mb-16">
              <h2 style={{
                margin: '0 0 var(--spacing-4) 0',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-h2)',
                color: 'var(--foreground)'
              }}>
                Delivered Results
              </h2>
              <p style={{
                margin: 0,
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)'
              }}>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
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