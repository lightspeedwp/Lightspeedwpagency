/**
 * Site Map Template
 *
 * WordPress template: templates/page-sitemap.html
 *
 * Comprehensive sitemap page covering ALL routes — static and data-driven.
 * Data is sourced from /src/app/data/sitemap-data.ts.
 *
 * All styling uses BEM classes from /src/styles/templates/site-map.css
 * and CSS variables — zero Tailwind, zero hardcoded values.
 *
 * Pattern Components:
 * - StatsGrid — Site statistics section (grid variant, 4 columns)
 *
 * @see /guidelines/routes.md
 * @migrated March 4, 2026 — Migrated inline stats grid to StatsGrid component (~12 lines saved)
 * @split March 16, 2026 — Extracted data to sitemap-data.ts (640→~190 lines)
 */

import '../../../styles/templates/site-map.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Link } from 'react-router';
import { Button } from '../blocks/design/Buttons';
import { StatsGrid } from '../patterns/StatsGrid';
import { blogPosts } from '../../data/blog-posts';
import { portfolioArchiveItems } from '../../data/archive-items';
import { testimonialEntries } from '../../data/testimonials-extended';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  Globe, CheckCircle, CaretRight as ChevronRight, MagnifyingGlass as Search,
  WarningCircle as AlertCircle, Wrench,
} from '@phosphor-icons/react';

import { buildSiteMapSections, resolvePath } from '../../data/sitemap-data';

export function SiteMapTemplate() {
  const { ref: heroRef, style: heroStyle } = useScrollReveal();

  const siteMapSections = buildSiteMapSections();

  const totalRoutes = siteMapSections.reduce((acc, s) => acc + s.pages.length, 0);
  const activeRoutes = siteMapSections.reduce(
    (acc, s) => acc + s.pages.filter((p) => p.status === 'active').length,
    0
  );
  const sectionCount = siteMapSections.length;

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Site Map' },
        ]}
      />

      {/* Hero */}
      <Section spacing="xl" className="site-map__hero">
        <div className="site-map__hero-orb" aria-hidden="true" />

        <Container>
          <div ref={heroRef} className="site-map__hero-inner" style={heroStyle}>
            <div className="site-map__hero-badge">
              <Globe size={14} />
              Site Map
            </div>

            <h1 className="site-map__hero-title">Complete Site Navigation</h1>

            <p className="site-map__hero-subtitle">
              {totalRoutes} navigable pages across {sectionCount} sections
            </p>

            {/* Quick Stats */}
            <div className="site-map__hero-stats">
              {[
                { value: totalRoutes, label: 'Total Pages' },
                { value: sectionCount, label: 'Sections' },
                { value: blogPosts.length, label: 'Blog Posts' },
                { value: portfolioArchiveItems.length, label: 'Projects' },
                { value: testimonialEntries.length, label: 'Testimonials' },
              ].map((stat, i) => (
                <div key={i} className="site-map__hero-stat">
                  <span className="site-map__hero-stat-value">{stat.value}</span>
                  <span className="site-map__hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick Jump Nav */}
      <Section spacing="md" className="site-map__jump-nav-section">
        <Container>
          <nav className="site-map__jump-nav" aria-label="Jump to section">
            {siteMapSections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.title}
                  href={`#section-${section.title.toLowerCase().replace(/[\s&/]+/g, '-')}`}
                  className="site-map__jump-link"
                >
                  <Icon size={14} />
                  <span>{section.title}</span>
                  <span className="site-map__jump-count">{section.pages.length}</span>
                </a>
              );
            })}
          </nav>
        </Container>
      </Section>

      {/* Card Grid */}
      <Section spacing="xl" className="site-map__grid-section">
        <Container>
          <div className="site-map__grid">
            {siteMapSections.map((section, sectionIndex) => {
              const Icon = section.icon;
              const anchorId = `section-${section.title.toLowerCase().replace(/[\s&/]+/g, '-')}`;

              return (
                <div key={sectionIndex} className="site-map__card" id={anchorId}>
                  {/* Card Header */}
                  <div className="site-map__card-header">
                    <div className={`site-map__card-icon ${section.colorClass}`}>
                      <Icon size={20} />
                    </div>

                    <h2 className="site-map__card-title">{section.title}</h2>

                    <span className="site-map__card-count">{section.pages.length}</span>
                  </div>

                  {/* Pages List */}
                  <div className="site-map__card-body">
                    <ul className="site-map__list">
                      {section.pages.map((page, pageIndex) => {
                        const path = resolvePath(page, section.title);
                        const isMissing = page.status === 'missing';

                        return (
                          <li key={pageIndex}>
                            <Link
                              to={isMissing ? '#' : path}
                              className={`site-map__link${isMissing ? ' site-map__link--missing' : ''}`}
                              aria-disabled={isMissing || undefined}
                            >
                              {isMissing ? (
                                <AlertCircle
                                  size={14}
                                  className="site-map__link-icon site-map__icon--warning"
                                />
                              ) : (
                                <CheckCircle
                                  size={14}
                                  className="site-map__link-icon site-map__icon--success"
                                />
                              )}
                              <span className="site-map__link-label">
                                {page.label}
                                {isMissing && ' (route missing)'}
                              </span>
                              <ChevronRight
                                size={14}
                                className="site-map__link-arrow"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Statistics */}
      <Section spacing="xl" className="site-map__stats">
        <Container>
          <div className="site-map__stats-inner">
            <h2 className="site-map__stats-title">Site Statistics</h2>

            <StatsGrid
              stats={[
                { label: 'Total Pages', number: totalRoutes.toString() },
                { label: 'Active', number: activeRoutes.toString() },
                { label: 'Sections', number: sectionCount.toString() },
                { label: 'Content Types', number: '8' },
              ]}
              columns={4}
            />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="xl" className="site-map__cta-section">
        <Container>
          <div className="site-map__cta-inner">
            <h2 className="site-map__cta-title">Need Help Finding Something?</h2>

            <p className="site-map__cta-text">
              Can't find what you're looking for? Try the search page or explore
              our developer tools for a complete system overview.
            </p>

            <div className="site-map__cta-buttons">
              <Button page="search" size="lg">
                <Search size={18} />
                Search Site
              </Button>
              <Button page="dev-tools" size="lg" variant="outline">
                <Wrench size={18} />
                Dev Tools
              </Button>
              <Button page="front-page" size="lg" variant="outline">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
