/**
 * Template Tester — WordPress Archetype Testing Interface
 *
 * Complete testing interface for all WordPress templates and page archetypes.
 * Organized by WordPress template hierarchy and archetype patterns.
 *
 * Data sourced from /src/app/data/template-tester-data.ts.
 *
 * @see {@link /guidelines/templates/overview-templates.md}
 * @split March 16, 2026 — Extracted data to template-tester-data.ts (589→~280 lines)
 */

import '../../../styles/templates/template-tester.css';
import { Button } from '../blocks/design/Buttons';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { useState } from 'react';
import { ArrowRight, Funnel, GridNine, Code } from '@phosphor-icons/react';

import { templateCategories } from '../../data/template-tester-data';
import type { TemplatePage } from '../../data/template-tester-data';

/** Shared page card link */
function PageCard({ page }: { page: TemplatePage }) {
  return (
    <Link
      to={slugToPath(page.page)}
      className="template-tester__page-button"
    >
      <div className="template-tester__page-button-header">
        <span className="template-tester__page-label">{page.label}</span>
        <ArrowRight size={16} className="wp-text-primary" />
      </div>
      <span className="template-tester__page-slug">{page.slug}</span>
      <span className="template-tester__page-template">{page.template}</span>
    </Link>
  );
}

export function TemplateTester() {
  const [sortBy, setSortBy] = useState<'category' | 'type'>('category');

  const totalTemplates = templateCategories.reduce((acc, cat) => {
    if (cat.templates) return acc + cat.templates.reduce((sum, t) => sum + t.pages.length, 0);
    return acc + (cat.pages?.length || 0);
  }, 0);
  const archetypes = templateCategories.find(c => c.id === 'archetypes')?.templates?.length || 0;
  const categories = templateCategories.length;

  const getTemplatesByType = () => {
    const byType: Record<string, (TemplatePage & { categoryTitle: string; archetypeName?: string })[]> = {};
    templateCategories.forEach(category => {
      if (category.templates) {
        category.templates.forEach(template => {
          const type = template.archetype;
          if (!byType[type]) byType[type] = [];
          template.pages.forEach(page => {
            byType[type].push({ ...page, categoryTitle: category.title, archetypeName: template.name });
          });
        });
      } else if (category.pages) {
        const type = category.title;
        if (!byType[type]) byType[type] = [];
        category.pages.forEach(page => {
          byType[type].push({ ...page, categoryTitle: category.title });
        });
      }
    });
    return byType;
  };

  const templatesByType = sortBy === 'type' ? getTemplatesByType() : {};

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Developer Tools', page: 'dev-tools' },
          { label: 'Template Tester' },
        ]}
      />

      {/* Hero Header */}
      <Section background="default" spacing="lg">
        <Container>
          <div className="template-tester__hero">
            <h1 className="template-tester__hero-title">WordPress template tester</h1>
            <p className="template-tester__hero-subtitle">
              Test all WordPress templates, page archetypes, and design patterns in one place
            </p>
            <div className="wp-grid-3-cols template-tester__stats-grid">
              {[
                { value: totalTemplates, label: 'Total Templates' },
                { value: archetypes, label: 'Page Archetypes' },
                { value: categories, label: 'Categories' },
              ].map((stat) => (
                <div key={stat.label} className="template-tester__stat-card">
                  <div className="template-tester__stat-value">{stat.value}</div>
                  <div className="template-tester__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Toolbar */}
      <Section background="default" spacing="sm">
        <Container>
          <div className="template-tester__toolbar">
            <div className="template-tester__sort-controls">
              <Funnel size={20} className="wp-text-muted-foreground" />
              <span className="template-tester__sort-label">Sort by:</span>
              <div className="template-tester__sort-buttons">
                <button
                  onClick={() => setSortBy('category')}
                  className={`template-tester__sort-button ${sortBy === 'category' ? 'template-tester__sort-button--active' : ''}`}
                >
                  Category
                </button>
                <button
                  onClick={() => setSortBy('type')}
                  className={`template-tester__sort-button ${sortBy === 'type' ? 'template-tester__sort-button--active' : ''}`}
                >
                  Type
                </button>
              </div>
            </div>
            <Button variant="outline" size="md" page="component-showcase" icon={<GridNine size={20} />} aria-label="View Component Showcase">
              Component Showcase
            </Button>
          </div>
        </Container>
      </Section>

      {/* Template Categories */}
      {sortBy === 'category' ? (
        templateCategories.map((category) => (
          <Section key={category.id} background="default" spacing="lg">
            <Container>
              <div className="template-tester__category-header">
                <div className={`template-tester__category-icon ${category.bgClass}`}>
                  <category.icon size={24} />
                </div>
                <div>
                  <h2 className="template-tester__category-title">{category.title}</h2>
                  <p className="template-tester__category-desc">{category.description}</p>
                </div>
              </div>

              {category.templates ? (
                <div className="template-tester__archetype-list">
                  {category.templates.map((archetype) => (
                    <div key={archetype.id}>
                      <div className="template-tester__archetype-card">
                        <div className="template-tester__archetype-inner">
                          <archetype.icon size={20} className="template-tester__archetype-icon" />
                          <div>
                            <div className="template-tester__archetype-title-row">
                              <h3 className="template-tester__archetype-title">{archetype.name}</h3>
                              <span className="template-tester__archetype-badge">{archetype.archetype}</span>
                            </div>
                            <p className="template-tester__archetype-desc">{archetype.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="wp-grid-3-cols template-tester__pages-grid">
                        {archetype.pages.map((page) => (
                          <PageCard key={page.page} page={page} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="wp-grid-3-cols template-tester__pages-grid">
                  {category.pages?.map((page) => (
                    <PageCard key={page.page} page={page} />
                  ))}
                </div>
              )}
            </Container>
          </Section>
        ))
      ) : (
        Object.keys(templatesByType).map(type => (
          <Section key={type} background="default" spacing="lg">
            <Container>
              <div className="template-tester__category-header">
                <div className="template-tester__category-icon wp-bg-primary">
                  <Code size={24} />
                </div>
                <div>
                  <h2 className="template-tester__category-title">{type}</h2>
                  <p className="template-tester__category-desc">Template type</p>
                </div>
              </div>
              <div className="wp-grid-3-cols template-tester__pages-grid">
                {templatesByType[type].map((page) => (
                  <PageCard key={page.page} page={page} />
                ))}
              </div>
            </Container>
          </Section>
        ))
      )}
    </>
  );
}