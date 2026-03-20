/**
 * Figma Make Showcase Template
 *
 * Dedicated landing page showcasing all 11 Figma Make prototypes
 * with category filtering, comprehensive stats, and trust signals.
 *
 * Features:
 * - Hero section with aggregated metrics
 * - Category filtering system
 * - Dynamic prototype grid
 * - AI strategy section
 * - Trust signals and CTAs
 * - 100% CSS variable compliance
 * - Phosphor icons (duotone weight)
 * - WCAG 2.2 AA accessible
 *
 * BEM: .figma-showcase
 * CSS: /styles/templates/page-figma-showcase.css
 *
 * @see /src/app/data/figma-prototypes.ts
 */

import { useState } from 'react';
import {
  Sparkle,
  Layout,
  Package,
  Lightning,
  Palette,
  Compass,
  ShoppingCart,
  Newspaper,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Target,
  Rocket,
  Brain,
  Users,
  ShieldCheck,
  Code,
  TrendUp,
} from '@phosphor-icons/react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Badge } from '../blocks/design/Badge';
import { Button } from '../blocks/design/Buttons';
import { StatsGrid } from '../patterns/StatsGrid';
import { PrototypeCard } from '../blocks/PrototypeCard';
import {
  figmaPrototypes,
  getCategoriesWithCounts,
  FigmaPrototype,
} from '../../data/figma-prototypes';
import '../../../styles/templates/page-figma-showcase.css';

export function FigmaMakeShowcaseTemplate() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = getCategoriesWithCounts();

  // Filter prototypes based on selected category
  const filteredPrototypes =
    selectedCategory === 'all'
      ? figmaPrototypes
      : figmaPrototypes.filter((p) => p.category === selectedCategory);

  // Category icons mapping
  const categoryIcons: Record<string, JSX.Element> = {
    'tour-operator': <Compass size={20} weight="duotone" />,
    ecommerce: <ShoppingCart size={20} weight="duotone" />,
    publishing: <Newspaper size={20} weight="duotone" />,
    agency: <Briefcase size={20} weight="duotone" />,
  };

  // Aggregated showcase stats
  const showcaseStats = [
    { number: '11', label: 'Unique prototypes', icon: Palette },
    { number: '500+', label: 'Pages built', icon: Layout },
    { number: '1,100+', label: 'Components created', icon: Package },
    { number: '100%', label: 'AI generated', icon: Lightning },
  ];

  // AI capabilities
  const aiCapabilities = [
    {
      icon: Brain,
      title: 'AI-powered strategy',
      description:
        'Each prototype includes comprehensive AI-generated strategy, content planning, and user experience design tailored to industry best practices.',
    },
    {
      icon: Rocket,
      title: 'Production ready',
      description:
        'Built with React, TypeScript, and modern best practices. Every component is optimized, accessible, and ready for deployment.',
    },
    {
      icon: Target,
      title: 'Industry focused',
      description:
        'Real-world solutions for tour operators, e-commerce stores, publishing platforms, and agency businesses with specific needs.',
    },
    {
      icon: Code,
      title: 'Fully documented',
      description:
        'Complete documentation, design systems, component APIs, and implementation guides for every prototype and pattern.',
    },
  ];

  // Trust signals
  const trustSignals = [
    { icon: CheckCircle, value: '3+', label: 'Months of development' },
    { icon: Users, value: '4', label: 'Industry categories' },
    { icon: ShieldCheck, value: '100%', label: 'WCAG AA compliant' },
    { icon: TrendUp, value: '100%', label: 'Responsive design' },
  ];

  return (
    <div className="figma-showcase">
      {/* Hero Section */}
      <Section className="figma-showcase__hero">
        <div className="figma-showcase__hero-background" aria-hidden="true">
          <div className="figma-showcase__hero-gradient" />
        </div>

        <Container>
          <div className="figma-showcase__hero-content">
            <Badge className="figma-showcase__hero-badge">
              <Sparkle size={20} weight="duotone" />
              <span>Portfolio showcase</span>
            </Badge>

            <Heading level={1} className="figma-showcase__hero-title">
              Figma Make prototypes
            </Heading>

            <Paragraph className="figma-showcase__hero-description">
              Explore 11 AI-generated, AI-strategized prototypes built over 3+
              months demonstrating the full capabilities of Figma Make. Each
              prototype is a production-ready platform showcasing different
              industries, use cases, and design approaches.
            </Paragraph>

            {/* Hero Stats */}
            <div className="figma-showcase__hero-stats">
              <StatsGrid
                stats={showcaseStats}
                columns={4}
                variant="inline"
                className="figma-showcase__stats-grid"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Category Filters */}
      <Section className="figma-showcase__filters">
        <Container>
          <div className="figma-showcase__filters-header">
            <Heading level={2} className="figma-showcase__filters-title">
              Browse by category
            </Heading>
            <Paragraph className="figma-showcase__filters-description">
              Filter prototypes by industry and use case
            </Paragraph>
          </div>

          <div className="figma-showcase__category-grid">
            {/* All category */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`figma-showcase__category ${
                selectedCategory === 'all'
                  ? 'figma-showcase__category--active'
                  : ''
              }`}
              aria-pressed={selectedCategory === 'all'}
            >
              <div className="figma-showcase__category-icon">
                <Sparkle size={24} weight="duotone" />
              </div>
              <div className="figma-showcase__category-content">
                <span className="figma-showcase__category-name">
                  All prototypes
                </span>
                <span className="figma-showcase__category-count">
                  {figmaPrototypes.length}
                </span>
              </div>
              <div className="figma-showcase__category-arrow">
                <ArrowRight size={20} weight="bold" />
              </div>
            </button>

            {/* Dynamic categories */}
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`figma-showcase__category ${
                  selectedCategory === category.key
                    ? 'figma-showcase__category--active'
                    : ''
                }`}
                aria-pressed={selectedCategory === category.key}
              >
                <div className="figma-showcase__category-icon">
                  {categoryIcons[category.key]}
                </div>
                <div className="figma-showcase__category-content">
                  <span className="figma-showcase__category-name">
                    {category.title}
                  </span>
                  <span className="figma-showcase__category-count">
                    {category.count}
                  </span>
                </div>
                <div className="figma-showcase__category-arrow">
                  <ArrowRight size={20} weight="bold" />
                </div>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Prototypes Grid */}
      <Section className="figma-showcase__content">
        <Container>
          <div className="figma-showcase__results">
            <Heading level={3} className="figma-showcase__results-title">
              {selectedCategory === 'all'
                ? 'All prototypes'
                : categories.find((c) => c.key === selectedCategory)?.title}
            </Heading>
            <span className="figma-showcase__results-count">
              {filteredPrototypes.length}{' '}
              {filteredPrototypes.length === 1 ? 'prototype' : 'prototypes'}
            </span>
          </div>

          <div className="figma-showcase__grid">
            {filteredPrototypes.map((prototype) => (
              <PrototypeCard
                key={prototype.id}
                prototype={prototype}
                showWebGL={false}
              />
            ))}
          </div>

          {filteredPrototypes.length === 0 && (
            <div className="figma-showcase__empty">
              <Paragraph>No prototypes found in this category.</Paragraph>
            </div>
          )}
        </Container>
      </Section>

      {/* AI Strategy Section */}
      <Section className="figma-showcase__ai-section">
        <Container>
          <div className="figma-showcase__ai-header">
            <Badge>
              <Brain size={20} weight="duotone" />
              <span>AI-powered development</span>
            </Badge>
            <Heading level={2} className="figma-showcase__ai-title">
              How AI drives every prototype
            </Heading>
            <Paragraph className="figma-showcase__ai-description">
              Each prototype leverages generative AI and Figma Make to produce
              production-ready platforms. We use AI for strategic planning,
              content generation, design systems, and implementation—demonstrating
              LightSpeed's commitment to innovation and efficiency.
            </Paragraph>
          </div>

          <div className="figma-showcase__capabilities-grid">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="figma-showcase__capability">
                  <div className="figma-showcase__capability-icon">
                    <Icon size={32} weight="duotone" />
                  </div>
                  <Heading level={3} className="figma-showcase__capability-title">
                    {capability.title}
                  </Heading>
                  <Paragraph className="figma-showcase__capability-description">
                    {capability.description}
                  </Paragraph>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Trust Signals Section */}
      <Section className="figma-showcase__trust">
        <Container>
          <div className="figma-showcase__trust-header">
            <Heading level={2} className="figma-showcase__trust-title">
              Built with expertise
            </Heading>
            <Paragraph className="figma-showcase__trust-description">
              Every prototype demonstrates our commitment to quality, accessibility,
              and modern development practices
            </Paragraph>
          </div>

          <StatsGrid
            stats={trustSignals.map((signal) => ({
              number: signal.value,
              label: signal.label,
              icon: signal.icon,
            }))}
            columns={4}
            variant="cards"
          />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="figma-showcase__cta">
        <Container>
          <div className="figma-showcase__cta-content">
            <div className="figma-showcase__cta-icon">
              <Lightning size={48} weight="duotone" />
            </div>
            <Heading level={2} className="figma-showcase__cta-title">
              Ready to build with Figma Make?
            </Heading>
            <Paragraph className="figma-showcase__cta-description">
              These prototypes demonstrate what's possible with AI-powered design
              and development. Let's create something incredible together.
            </Paragraph>
            <div className="figma-showcase__cta-actions">
              <Button
                variant="primary"
                href="/contact"
                className="figma-showcase__cta-button"
              >
                Start a project
                <ArrowRight size={20} weight="bold" />
              </Button>
              <Button
                variant="secondary"
                href="/services"
                className="figma-showcase__cta-button"
              >
                Explore services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}