/**
 * Services Landing — Hero + Clients Bar
 *
 * Sub-component of ServicesLandingTemplate.
 * Contains the full-screen hero section and client logos bar.
 *
 * @see ServicesLandingTemplate.tsx — Parent template
 */

import { Container } from '../../common/Container';
import { Button } from '../../blocks/design/Buttons';
import { useHeroParallax } from '../../../hooks/useHeroParallax';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { Cpu } from '@phosphor-icons/react';
import { servicesHeroMessaging } from '../../../data/three-tier-model';
import { clientLogos } from '../../../data/logos';

export function ServicesLandingHero() {
  const parallaxRef = useHeroParallax(0.2);
  const clients = clientLogos.filter(logo => logo.category === 'client').slice(0, 6);

  return (
    <>
      {/* Hero Section (Nexus) */}
      <section className="service-hero" style={{
        minHeight: '100vh',
        padding: 'var(--spacing-32) 0'
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
              <div className="service-hero__badge" style={{
                backgroundColor: 'rgba(var(--card-rgb), 0.5)',
                border: '1px solid rgba(var(--primary-rgb), 0.3)',
                color: 'var(--primary)',
                backdropFilter: 'blur(10px)',
                marginBottom: 'var(--spacing-6)'
              }}>
                <Cpu size={14} weight="bold" />
                {servicesHeroMessaging.badge}
              </div>

              <h1 className="service-hero__title">
                {servicesHeroMessaging.title.line1} <br />
                <span style={{
                  color: 'var(--primary)',
                  textShadow: '0 0 30px rgba(var(--primary-rgb), 0.5)'
                }}>
                  {servicesHeroMessaging.title.line2}
                </span>
              </h1>

              <p className="service-hero__description service-hero__description--centered">
                {servicesHeroMessaging.subtitle}
              </p>

              <div className="service-hero__cta-group">
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

      {/* Clients Bar */}
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
    </>
  );
}
