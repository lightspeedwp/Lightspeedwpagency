/**
 * Services Landing — Services Grid + Featured Project
 *
 * Sub-component of ServicesLandingTemplate.
 * Individual service cards grid and featured case study showcase.
 *
 * @see ServicesLandingTemplate.tsx — Parent template
 */

import { useState } from 'react';
import { Container } from '../../common/Container';
import { Button } from '../../blocks/design/Buttons';
import { StatsGrid } from '../../patterns/StatsGrid';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { Link } from 'react-router';
import { slugToPath } from '../../../utils/route-map';
import {
  Target,
  TrendUp,
  ArrowRight,
  Check,
  Trophy as Award,
  Lightning as Zap,
} from '@phosphor-icons/react';

import { services } from '../../../data/services';

export function ServicesLandingGrid() {
  const [, setHoveredService] = useState<string | null>(null);

  const servicesData = services.map(service => ({
    id: service.id,
    icon: service.icon,
    title: service.name,
    description: service.description,
    link: service.buttonPage,
    linkText: service.buttonText
  }));

  const featuredStats = [
    { icon: TrendUp, value: '600K+', label: 'Monthly users' },
    { icon: Check,   value: '99.9%', label: 'Uptime' },
    { icon: Zap,     value: '0.8s',  label: 'Load time' },
    { icon: Award,   value: '100',   label: 'SEO score' }
  ];

  return (
    <>
      {/* Services Grid (Portal Gates) */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
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

          <div className="service-section__grid service-section__grid--3">
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
                      lineHeight: 'var(--line-height-comfortable)',
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

      {/* Featured Project (Success Portal) */}
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
              <div className="service-section__grid service-section__grid--2 service-section__grid--align-center">
                <div style={{ padding: 'var(--spacing-16)' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                    letterSpacing: 'var(--letter-spacing-widest)',
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
                    lineHeight: 'var(--line-height-comfortable)'
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

                  <div className="service-section__actions" style={{ marginTop: 'var(--spacing-8)' }}>
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
                    loading="lazy"
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
    </>
  );
}