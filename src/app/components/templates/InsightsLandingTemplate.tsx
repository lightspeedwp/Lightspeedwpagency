/**
 * Insights Landing Template
 *
 * Parent landing page for all Insights content types.
 * Route: /insights/
 *
 * Sub-categories:
 * - /insights/research - Research & Data Studies
 * - /insights/build-notes - Technical Build Notes
 * - /insights/editorial-systems - Editorial Workflows & Content Governance
 * - /insights/ai-governance - AI Governance & Policy
 * - /insights/category/:slug - All other categories
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-insights-landing.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary) only
 *
 * @see /src/styles/templates/page-insights-landing.css
 */

import '../../../styles/templates/page-insights-landing.css';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import {
  BookOpen,
  MagnifyingGlass,
  FileCode,
  TreeStructure,
  Robot,
  ArrowRight,
  TrendUp,
} from '@phosphor-icons/react';

/** Insights sub-category definitions */
const insightsCategories = [
  {
    id: 'research',
    icon: MagnifyingGlass,
    name: 'Research',
    description:
      'Deep dives into web technology research, data-driven findings, and industry analysis from real-world benchmarks and surveys.',
    features: [
      'Benchmark studies across 500+ sites',
      'Industry surveys and adoption rates',
      'Performance analysis and comparisons',
      'Data-backed insights and trends',
    ],
    path: '/insights/category/research',
    color: 'var(--primary)',
  },
  {
    id: 'build-notes',
    icon: FileCode,
    name: 'Build Notes',
    description:
      'Behind-the-scenes technical notes from real projects — architecture decisions, tooling choices, and lessons learnt.',
    features: [
      'Real project architecture',
      'Technical decision documentation',
      'Performance benchmarks',
      'Code implementation patterns',
    ],
    path: '/insights/category/build-notes',
    color: 'var(--accent)',
  },
  {
    id: 'editorial-systems',
    icon: TreeStructure,
    name: 'Editorial Systems',
    description:
      'Content workflows, editorial governance, structured content models, and publishing automation that keeps teams productive.',
    features: [
      'Content governance frameworks',
      'Editorial workflow automation',
      'Structured content models',
      'Multi-channel publishing',
    ],
    path: '/insights/category/editorial-systems',
    color: 'var(--success)',
  },
  {
    id: 'ai-governance',
    icon: Robot,
    name: 'AI Governance',
    description:
      'Responsible AI usage, governance frameworks, ethical considerations, and AI policy for web teams building in the AI era.',
    features: [
      'AI governance frameworks',
      'Ethical AI usage policies',
      'Content authenticity standards',
      'Team training and guidelines',
    ],
    path: '/insights/category/ai-governance',
    color: 'var(--warning)',
  },
  {
    id: 'tutorials',
    icon: BookOpen,
    name: 'Tutorials',
    description:
      'Step-by-step guides, how-tos, and practical walkthroughs for WordPress, WooCommerce, and modern web development.',
    features: [
      'Block theme development',
      'WooCommerce optimization',
      'Performance tuning',
      'Migration strategies',
    ],
    path: '/insights/category/tutorials',
    color: 'var(--info)',
  },
  {
    id: 'industry-news',
    icon: TrendUp,
    name: 'Industry News',
    description:
      'WordPress ecosystem updates, platform announcements, and analysis of trends shaping the future of web development.',
    features: [
      'WordPress ecosystem updates',
      'Full Site Editing evolution',
      'Security best practices',
      'Platform roadmap analysis',
    ],
    path: '/insights/category/industry-news',
    color: 'var(--primary)',
  },
];

/** Stats data */
const stats = [
  { metric: '120+', label: 'In-Depth Articles' },
  { metric: '50+', label: 'Technical Build Notes' },
  { metric: '500+', label: 'Sites Benchmarked' },
  { metric: '15+', label: 'Research Studies' },
];

/** Featured topics */
const featuredTopics = [
  {
    title: 'WordPress Block Themes',
    description:
      'Complete guides, migration strategies, and best practices for modern block-based development.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Real-world benchmarks, Core Web Vitals studies, and proven techniques for faster WordPress sites.',
  },
  {
    title: 'Design Systems',
    description:
      'Design token pipelines, theme.json workflows, and scalable design systems for WordPress FSE.',
  },
  {
    title: 'AI & Automation',
    description:
      'Responsible AI governance, workflow automation, and the impact of AI on web development teams.',
  },
];

export function InsightsLandingTemplate() {
  return (
    <div className="insights-landing">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="insights-landing__hero" aria-labelledby="insights-hero-title">
        <div className="insights-landing__hero-inner">
          <ScrollReveal animation="fade-down">
            <div className="insights-landing__badge">
              <BookOpen size={14} aria-hidden="true" />
              Knowledge Base
            </div>

            <h1 id="insights-hero-title" className="insights-landing__hero-title">
              Insights &{' '}
              <span className="insights-landing__hero-highlight">Research</span>
            </h1>

            <p className="insights-landing__hero-description">
              Deep technical analysis, real-world benchmarks, and behind-the-scenes build
              notes from our WordPress and WooCommerce agency. Data-driven insights you can
              actually use.
            </p>

            <div className="insights-landing__hero-cta">
              <Link
                to={getPageUrl('insights')}
                className="insights-landing__button insights-landing__button--primary"
              >
                Browse All Insights
              </Link>
              <a
                href="#categories"
                className="insights-landing__button insights-landing__button--secondary"
              >
                Explore Categories
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          CATEGORIES GRID
          ============================================ */}
      <section
        className="insights-landing__categories"
        id="categories"
        aria-labelledby="insights-categories-title"
      >
        <Container>
          <div className="insights-landing__section-header">
            <ScrollReveal animation="fade-up">
              <h2 id="insights-categories-title" className="insights-landing__section-title">
                Explore by Topic
              </h2>
              <p className="insights-landing__section-description">
                Browse our insights library organized by topic — from research and data
                studies to technical build notes and editorial systems.
              </p>
            </ScrollReveal>
          </div>

          <div className="insights-landing__categories-grid">
            {insightsCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <ScrollReveal
                  key={category.id}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <Link
                    to={category.path}
                    className="insights-landing__category-card"
                    aria-label={`Browse ${category.name} articles`}
                    data-category={category.id}
                  >
                    <div className="insights-landing__category-icon">
                      <Icon
                        className="insights-landing__category-icon-svg"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="insights-landing__category-name">{category.name}</h3>
                    <p className="insights-landing__category-desc">
                      {category.description}
                    </p>
                    <ul className="insights-landing__category-features">
                      {category.features.map((feature) => (
                        <li
                          key={feature}
                          className="insights-landing__category-feature"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="insights-landing__category-link">
                      Browse articles <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          STATS
          ============================================ */}
      <section className="insights-landing__stats" aria-labelledby="insights-stats-title">
        <Container>
          <div className="insights-landing__section-header">
            <ScrollReveal animation="fade-up">
              <h2 id="insights-stats-title" className="insights-landing__section-title">
                Knowledge at Scale
              </h2>
              <p className="insights-landing__section-description">
                Our insights library is built from real projects, real data, and real
                experience across hundreds of WordPress sites.
              </p>
            </ScrollReveal>
          </div>

          <div className="insights-landing__stats-grid">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label} animation="fade-up">
                <div className="insights-landing__stat-card">
                  <div className="insights-landing__stat-metric">{stat.metric}</div>
                  <div className="insights-landing__stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          FEATURED TOPICS
          ============================================ */}
      <section
        className="insights-landing__topics"
        aria-labelledby="insights-topics-title"
      >
        <Container>
          <div className="insights-landing__section-header">
            <ScrollReveal animation="fade-up">
              <h2 id="insights-topics-title" className="insights-landing__section-title">
                Featured Topics
              </h2>
              <p className="insights-landing__section-description">
                The core themes that run through our research, tutorials, and technical
                writing.
              </p>
            </ScrollReveal>
          </div>

          <div className="insights-landing__topics-grid">
            {featuredTopics.map((topic, index) => (
              <ScrollReveal
                key={topic.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="insights-landing__topic-card">
                  <div className="insights-landing__topic-content">
                    <h3 className="insights-landing__topic-title">{topic.title}</h3>
                    <p className="insights-landing__topic-desc">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section className="insights-landing__cta" aria-labelledby="insights-cta-title">
        <div className="insights-landing__cta-content">
          <ScrollReveal animation="fade-up">
            <h2 id="insights-cta-title" className="insights-landing__cta-title">
              Want to Stay Updated?
            </h2>
            <p className="insights-landing__cta-description">
              Subscribe to our newsletter for new research studies, technical build notes,
              and in-depth WordPress insights delivered monthly.
            </p>
            <Link
              to={getPageUrl('contact')}
              className="insights-landing__button insights-landing__button--cta"
            >
              Subscribe to Newsletter
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}