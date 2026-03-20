/**
 * Theme Blocks Showcase
 * 
 * Showcase all WordPress theme blocks (Site Title, Logo, Navigation, etc.).
 * Demonstrates adaptive behavior in different contexts (Light/Dark).
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - WCAG 2.1 AA compliant
 * 
 * @see /src/styles/templates/theme-blocks-showcase.css
 */

import '../../../styles/templates/theme-blocks-showcase.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Code, NavigationArrow, ImageSquare, LinkSimple, List } from '@phosphor-icons/react';

// Block Imports
import { SiteLogo } from '../blocks/theme/SiteLogo';
import { Navigation } from '../blocks/theme/Navigation';
import { Pagination } from '../blocks/theme/Pagination';
import { Breadcrumbs } from '../blocks/theme/Breadcrumbs';
import { MegaMenu } from '../blocks/theme/MegaMenu';
import { mockNavItems } from '../../data/theme-blocks-showcase-data';

export function ThemeBlocksShowcase() {
  const breadcrumbs = [
    { label: 'Home', page: 'home' as const },
    { label: 'Developer Tools', page: 'dev-tools' as const },
    { label: 'Theme Blocks' },
  ];

  return (
    <div className="theme-showcase">
      <BreadcrumbPart items={breadcrumbs} />

      {/* Hero */}
      <section className="theme-showcase__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <h1 className="theme-showcase__hero-title">Theme blocks</h1>
            <p className="theme-showcase__hero-desc">
              Global site components that form the identity and navigation structure.
              Context-aware and completely customizable via FSE.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <Container>
        {/* 1. Identity (Logo & Title) */}
        <ScrollReveal animation="fade-up" delay={100}>
          <section className="theme-showcase__section">
            <div className="theme-showcase__section-header">
              <ImageSquare className="theme-showcase__section-icon" size={20} />
              <h2 className="theme-showcase__section-title">Site identity</h2>
            </div>
            
            <div className="theme-showcase__context-grid">
              <div className="theme-showcase__context-card theme-showcase__context-card--light">
                <span className="theme-showcase__demo-title">Light Context</span>
                <SiteLogo width={180} />
                <p className="wp-mt-4 wp-opacity-80">Logo automatically uses dark text/icon.</p>
              </div>

              <div className="theme-showcase__context-card theme-showcase__context-card--dark">
                <span className="theme-showcase__demo-title wp-text-foreground/70">Dark Context</span>
                {/* We simulate dark mode by wrapping in a class if needed, or relying on component logic */}
                <div className="dark wp-bg-transparent">
                  <SiteLogo width={180} />
                </div>
                <p className="wp-mt-4 wp-opacity-80">Logo automatically switches to light text/icon.</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 2. Navigation */}
        <ScrollReveal animation="fade-up" delay={200}>
          <section className="theme-showcase__section">
            <div className="theme-showcase__section-header">
              <NavigationArrow className="theme-showcase__section-icon" size={20} />
              <h2 className="theme-showcase__section-title">Navigation</h2>
            </div>

            <div className="theme-showcase__demo">
              <span className="theme-showcase__demo-title">Standard Navigation</span>
              <div className="wp-border wp-border-border-soft wp-p-4 wp-rounded-md">
                <Navigation 
                  items={mockNavItems}
                  orientation="horizontal"
                />
              </div>
            </div>

            <div className="theme-showcase__demo">
              <span className="theme-showcase__demo-title">Mega Menu Preview</span>
              <p className="wp-mb-4">Hover over "Services" to see the mega menu interaction.</p>
              <div className="theme-showcase__demo-container">
                <MegaMenu />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 3. Navigation Utilities (Breadcrumbs & Pagination) */}
        <ScrollReveal animation="fade-up" delay={300}>
          <section className="theme-showcase__section">
            <div className="theme-showcase__section-header">
              <List className="theme-showcase__section-icon" size={20} />
              <h2 className="theme-showcase__section-title">Nav utilities</h2>
            </div>

            <div className="theme-showcase__demo">
              <span className="theme-showcase__demo-title">Breadcrumbs</span>
              <Breadcrumbs 
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Category', href: '#' },
                  { label: 'Current Page' }
                ]}
              />
            </div>

            <div className="theme-showcase__demo">
              <span className="theme-showcase__demo-title">Pagination</span>
              <Pagination 
                currentPage={2}
                totalPages={10}
                baseUrl="/insights/page"
              />
            </div>
          </section>
        </ScrollReveal>
      </Container>
    </div>
  );
}