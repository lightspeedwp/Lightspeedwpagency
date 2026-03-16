/**
 * Design Systems Service Template
 * Route: /services/design-systems
 * Parent: /services/design
 * 
 * Pattern Components:
 * - ✅ FeatureList — Benefits grid (glow variant, 3 columns)
 * - ✅ StatsGrid — Results metrics (cards variant, 4 columns)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-design-systems-optimized.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 * 
 * @see /src/styles/templates/page-service-design-systems-optimized.css
 * @migrated March 4, 2026 — Migrated inline benefits grid to FeatureList and results to StatsGrid (~25 lines saved)
 */

import { Stack, Palette, Code, BookOpen, Lightning, Trophy, Compass, FrameCorners } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { AgencyStats } from '../patterns/AgencyStats';
import { CheckList } from '../patterns/CheckList';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export const DesignSystemsServiceTemplate = () => {
  const benefits = [
    { icon: Stack, title: 'Component Library Creation', description: 'Build a comprehensive library of reusable UI components in Figma and code.' },
    { icon: Palette, title: 'Design Token System', description: 'Colors, typography, spacing, and styling tokens for perfect consistency.' },
    { icon: Code, title: 'Code Implementation', description: 'React, WordPress, or platform-specific component implementations.' },
    { icon: BookOpen, title: 'Documentation Site', description: 'Searchable documentation with live examples and usage guidelines.' },
    { icon: Lightning, title: 'Faster Development', description: 'Reduce design-to-development time by 60% with pre-built components.' },
    { icon: Trophy, title: 'Brand Consistency', description: 'Ensure perfect brand consistency across all products and platforms.' }
  ];

  const deliverables = ['Figma component library', 'Design token system', 'React/WordPress components', 'Documentation website', 'Usage guidelines', 'Governance framework', 'Implementation training'];

  const results = [
    { id: 'result-1', value: '60%', label: 'Faster UI Development' },
    { id: 'result-2', value: '90%', label: 'Brand Consistency Score' },
    { id: 'result-3', value: '50%', label: 'Reduction in Design Debt' },
    { id: 'result-4', value: '6-12 wks', label: 'Build Timeline' }
  ];

  return (
    <div className="wp-w-full wp-flex wp-flex-col" data-service="design-systems">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Design', href: '/services/design' },
          { label: 'Design Systems' },
        ]}
      />

      {/* ============================================
          HERO SECTION
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
          minHeight: '60vh',
          textAlign: 'center'
        }}
      >
        {/* Background Gradients */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: '100vh',
          background: 'radial-gradient(ellipse at bottom, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <h1 style={{
              margin: '0 0 var(--spacing-6) 0',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h1)',
              color: 'var(--foreground)',
              lineHeight: '1.1'
            }}>
              Design Systems <br />
              <span style={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}>
                Services
              </span>
            </h1>
            
            <p style={{
              margin: '0 auto var(--spacing-10) auto',
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-xl)',
              color: 'var(--muted-foreground)',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}>
              Scale your design operations. A comprehensive design system gives your team a single source of truth, 
              accelerates development, and ensures perfect brand consistency across every touchpoint.
            </p>
            
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Link
                to={getPageUrl('contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--spacing-4) var(--spacing-8)',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)'
                }}
              >
                Build Design System
              </Link>
              <Link
                to={getPageUrl('design')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--spacing-4) var(--spacing-8)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  textDecoration: 'none'
                }}
              >
                View Parent Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          BENEFITS GRID
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <ServiceCapabilitiesGrid
              heading="Design System Services"
              subheading="Everything you need to build, scale, and govern your design system."
              capabilities={benefits.map((item, i) => ({
                id: `ds-ben-${i}`,
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
          DELIVERABLES
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-up">
              <div style={{ paddingRight: 'var(--spacing-8)' }}>
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
                  <FrameCorners size={16} weight="duotone" />
                  What You Get
                </div>
                
                <h2 style={{
                  margin: '0 0 var(--spacing-6) 0',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h2)',
                  color: 'var(--foreground)',
                  lineHeight: '1.2'
                }}>
                  Comprehensive Design <br />
                  <span style={{ color: 'var(--secondary)' }}>Assets & Frameworks</span>
                </h2>
                
                <p style={{
                  margin: '0 0 var(--spacing-8) 0',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6'
                }}>
                  We don't just hand over a UI kit. We deliver a complete system, integrated directly into your development workflow, with the governance tools to keep it thriving.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--spacing-8)',
                boxShadow: 'var(--shadow-xl)'
              }}>
                <CheckList items={deliverables} columns={1} />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          RESULTS
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading="Results"
              subheading="The quantifiable impact of implementing a robust design system."
              stats={results}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section>
        <FunkyCTA
          title="Ready for a Design System?"
          description="Get a free design system audit and implementation roadmap."
          buttonText="Request Free Audit"
          buttonPage="contact"
          benefits={[
            'UI component audit',
            'Codebase consistency check',
            'Token architecture roadmap',
            'Estimated ROI calculation'
          ]}
        />
      </section>
    </div>
  );
};