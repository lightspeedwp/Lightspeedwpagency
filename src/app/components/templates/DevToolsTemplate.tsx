/**
 * Dev Tools Landing Page Template
 *
 * Central hub for all developer tools and utilities.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .devtools-*
 * Uses declarative <Link> navigation (react-router).
 *
 * Sub-components:
 * - DevToolsRoadmap — Project roadmap section
 * - dev-tools-data — All data arrays and types
 *
 * Pattern Components:
 * - ✅ StatsGrid — Hero stats section (grid variant, 6 columns)
 *
 * @see /src/styles/templates/dev-tools.css
 * @migrated March 4, 2026 — Migrated inline stats grid to StatsGrid component (~15 lines saved)
 * @split March 16, 2026 — Split from 733 lines: data → dev-tools-data.tsx, roadmap → DevToolsRoadmap.tsx
 */

import '../../../styles/templates/dev-tools.css';
import { StatsGrid } from '../patterns/StatsGrid';
import { CaretRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// Data
import {
  devTools,
  categoryOrder,
  categoryIcons,
  categoryDescriptions,
  quickLinks,
} from '../../data/dev-tools-data';

// Sub-components
import { DevToolsRoadmap } from './dev-tools/DevToolsRoadmap';

export function DevToolsTemplate() {
  const heroRef = useScrollReveal<HTMLDivElement>();

  const toolsByCategory = categoryOrder
    .map((category) => ({
      category,
      tools: devTools.filter((t) => t.category === category),
    }))
    .filter((group) => group.tools.length > 0);

  const totalTools = devTools.length;

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Developer tools' },
        ]}
      />

      {/* Hero */}
      <div className="devtools__hero">
        <div className="devtools__hero-inner">
          <div ref={heroRef} className="devtools__hero-header">
            <div className="devtools__hero-badge">Developer tools</div>
            <h1 className="devtools__hero-title">Developer tools</h1>
            <p className="devtools__hero-description">
              {totalTools} tools for testing, designing, documenting, and deploying
              the LSX Design system. Every tool uses CSS variables and BEM classes for
              full WordPress FSE compatibility.
            </p>
          </div>

          {/* Stats */}
          <StatsGrid
            stats={[
              { value: totalTools, label: 'Total Tools' },
              { value: '90+', label: 'Templates' },
              { value: '117', label: 'Routes' },
              { value: '100%', label: 'CSS Variables' },
              { value: '66', label: 'Block Guidelines' },
              { value: '51', label: 'Patterns' },
            ]}
          />

          {/* Quick Links */}
          <div className="devtools__quick-links">
            <span className="devtools__quick-links-label">Quick Links:</span>
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path} className="devtools__quick-link">
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Category Grids */}
          {toolsByCategory.map(({ category, tools }) => (
            <div key={category} className="devtools__category">
              <div className="devtools__category-header">
                {categoryIcons[category]}
                <h2 className="devtools__category-title">
                  {category}
                </h2>
                <span className="devtools__category-count">{tools.length}</span>
              </div>
              <p className="devtools__category-desc">
                {categoryDescriptions[category]}
              </p>

              <div className="devtools__tools-grid">
                {tools.map((tool) => (
                  <Link
                    key={tool.id}
                    to={tool.path}
                    className="devtools__tool-card"
                  >
                    <div className="devtools__tool-card-header">
                      <div className="devtools__tool-icon">{tool.icon}</div>
                      {tool.badge && (
                        <span className="devtools__tool-badge">{tool.badge}</span>
                      )}
                    </div>
                    <div className="devtools__tool-title-row">
                      <h3 className="devtools__tool-title">{tool.title}</h3>
                      <CaretRight size={16} className="devtools__tool-arrow" />
                    </div>
                    <p className="devtools__tool-desc">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Project Roadmap */}
          <DevToolsRoadmap />
        </div>
      </div>
    </>
  );
}