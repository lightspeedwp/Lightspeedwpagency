/**
 * Snippet Generator Template
 *
 * Interactive code snippet builder for BEM patterns.
 * Select a pattern, configure options, get copy-ready JSX + CSS + WordPress HTML.
 *
 * WordPress template: N/A (dev tool)
 * BEM naming: .snippet-gen-*
 *
 * @see /src/styles/templates/snippet-generator.css
 * @see /tasks/task-list.md — Section 15
 */

import { useState, useMemo, useCallback } from 'react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import {
  Search,
  Copy,
  Check,
  Code2,
  Layers,
  LayoutGrid,
  BarChart3,
  Star,
  Megaphone,
  ArrowRight,
  Sparkles,
  SearchX,
  FileCode,
  FileText,
  Globe,
  SlidersHorizontal,
} from 'lucide-react';
import '@/styles/templates/snippet-generator.css';

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

type PatternCategory = 'layout' | 'content' | 'cta' | 'listing' | 'nav' | 'meta' | 'hero' | 'related';

interface ConfigOption {
  id: string;
  label: string;
  type: 'select' | 'text' | 'number';
  options?: string[];
  default: string | number;
}

interface PatternDef {
  id: string;
  name: string;
  category: PatternCategory;
  description: string;
  componentPath: string;
  cssPath: string;
  wpBlock: string;
  configOptions: ConfigOption[];
  /** Generates JSX given current config state */
  generateJSX: (config: Record<string, string | number>) => string;
  /** Generates associated CSS */
  generateCSS: () => string;
  /** Generates WordPress block markup */
  generateWP: (config: Record<string, string | number>) => string;
}

/* ═══════════════════════════════════════════
 * Category metadata
 * ═══════════════════════════════════════════ */

const CATEGORY_META: Record<PatternCategory, { label: string; icon: React.ReactNode }> = {
  layout:  { label: 'Layout',   icon: <LayoutGrid size={14} /> },
  hero:    { label: 'Hero',     icon: <Sparkles size={14} /> },
  content: { label: 'Content',  icon: <FileText size={14} /> },
  cta:     { label: 'CTA',      icon: <Megaphone size={14} /> },
  listing: { label: 'Listing',  icon: <Layers size={14} /> },
  nav:     { label: 'Nav',      icon: <ArrowRight size={14} /> },
  meta:    { label: 'Meta',     icon: <BarChart3 size={14} /> },
  related: { label: 'Related',  icon: <Star size={14} /> },
};

const CATEGORY_ICONS: Record<PatternCategory, React.ReactNode> = {
  layout:  <LayoutGrid size={16} />,
  hero:    <Sparkles size={16} />,
  content: <FileText size={16} />,
  cta:     <Megaphone size={16} />,
  listing: <Layers size={16} />,
  nav:     <ArrowRight size={16} />,
  meta:    <BarChart3 size={16} />,
  related: <Star size={16} />,
};

/* ═══════════════════════════════════════════
 * Pattern Definitions
 *
 * Each pattern knows how to generate JSX, CSS
 * and WordPress block markup from its config.
 * ═══════════════════════════════════════════ */

const PATTERNS: PatternDef[] = [
  /* ── Hero ── */
  {
    id: 'hero-home',
    name: 'HeroHome',
    category: 'hero',
    description: 'Full-width homepage hero with gradient orb background, heading, subtitle, and dual CTA buttons.',
    componentPath: '/src/app/components/patterns/HeroHome.tsx',
    cssPath: '/src/styles/patterns/hero-home.css',
    wpBlock: 'core/cover',
    configOptions: [
      { id: 'title', label: 'Heading', type: 'text', default: 'Build Something Amazing' },
      { id: 'subtitle', label: 'Subtitle', type: 'text', default: 'We design and develop modern WordPress websites.' },
      { id: 'primaryCTA', label: 'Primary CTA', type: 'text', default: 'Get Started' },
      { id: 'secondaryCTA', label: 'Secondary CTA', type: 'text', default: 'View Our Work' },
      { id: 'spacing', label: 'Section Spacing', type: 'select', options: ['sm', 'md', 'lg'], default: 'lg' },
    ],
    generateJSX: (c) => `<Section spacing="${c.spacing}">
  <Container>
    <div className="hero-home">
      <div className="hero-home__orb" />
      <h1 className="hero-home__title">${c.title}</h1>
      <p className="hero-home__subtitle">${c.subtitle}</p>
      <div className="hero-home__actions">
        <Button size="lg" page="contact">${c.primaryCTA}</Button>
        <Button size="lg" variant="outline" page="portfolio">${c.secondaryCTA}</Button>
      </div>
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.hero-home {
  position: relative;
  text-align: center;
  padding: var(--spacing-16) 0;
}

.hero-home__orb {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  border-radius: var(--radius-full);
  background: radial-gradient(circle, color-mix(in srgb, var(--primary) 15%, transparent), transparent 70%);
  pointer-events: none;
}

.hero-home__title {
  font-family: var(--font-primary);
  font-size: var(--text-h1);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin: 0 0 var(--spacing-4);
}

.hero-home__subtitle {
  font-family: var(--font-primary);
  font-size: var(--text-lead);
  color: var(--muted-foreground);
  max-width: 640px;
  margin: 0 auto var(--spacing-8);
}

.hero-home__actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  flex-wrap: wrap;
}`,
    generateWP: (c) => `<!-- wp:cover {"overlayColor":"background","minHeight":500} -->
<div class="wp-block-cover" style="min-height:500px">
  <div class="wp-block-cover__inner-container">
    <!-- wp:heading {"level":1,"textAlign":"center"} -->
    <h1 class="has-text-align-center">${c.title}</h1>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">${c.subtitle}</p>
    <!-- /wp:paragraph -->
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
      <!-- wp:button -->
      <div class="wp-block-button"><a class="wp-block-button__link">${c.primaryCTA}</a></div>
      <!-- /wp:button -->
      <!-- wp:button {"className":"is-style-outline"} -->
      <div class="wp-block-button is-style-outline"><a class="wp-block-button__link">${c.secondaryCTA}</a></div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
  </div>
</div>
<!-- /wp:cover -->`,
  },

  /* ── Hero (Inner page) ── */
  {
    id: 'hero',
    name: 'Hero',
    category: 'hero',
    description: 'Inner-page hero with breadcrumbs support, heading, subtitle and optional badge.',
    componentPath: '/src/app/components/patterns/Hero.tsx',
    cssPath: '/src/styles/patterns/hero.css',
    wpBlock: 'core/group',
    configOptions: [
      { id: 'title', label: 'Heading', type: 'text', default: 'Page Title' },
      { id: 'subtitle', label: 'Subtitle', type: 'text', default: 'A brief description of this page.' },
      { id: 'badge', label: 'Badge Text', type: 'text', default: '' },
      { id: 'background', label: 'Background', type: 'select', options: ['default', 'card', 'muted'], default: 'card' },
    ],
    generateJSX: (c) => {
      const badge = c.badge ? `\n      <span className="hero__badge">${c.badge}</span>` : '';
      return `<Section background="${c.background}" spacing="lg">
  <Container>${badge}
    <h1 className="hero__title">${c.title}</h1>
    <p className="hero__subtitle">${c.subtitle}</p>
  </Container>
</Section>`;
    },
    generateCSS: () => `.hero__badge {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  color: var(--primary);
  font-family: var(--font-secondary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wider);
  margin-bottom: var(--spacing-4);
}

.hero__title {
  font-family: var(--font-primary);
  font-size: var(--text-h1);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin: 0 0 var(--spacing-4);
}

.hero__subtitle {
  font-family: var(--font-primary);
  font-size: var(--text-lead);
  color: var(--muted-foreground);
  max-width: 720px;
  margin: 0;
}`,
    generateWP: (c) => `<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:heading {"level":1} -->
  <h1>${c.title}</h1>
  <!-- /wp:heading -->
  <!-- wp:paragraph -->
  <p>${c.subtitle}</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->`,
  },

  /* ── CTA Section ── */
  {
    id: 'cta-section',
    name: 'CTASection',
    category: 'cta',
    description: 'Full-width call-to-action section with heading, description and primary + optional secondary button.',
    componentPath: '/src/app/components/patterns/CTASection.tsx',
    cssPath: '/src/styles/patterns/cta-section.css',
    wpBlock: 'core/group',
    configOptions: [
      { id: 'title', label: 'Heading', type: 'text', default: 'Ready to Get Started?' },
      { id: 'description', label: 'Description', type: 'text', default: 'Let\'s discuss your project today.' },
      { id: 'primaryLabel', label: 'Primary Button', type: 'text', default: 'Contact Us' },
      { id: 'secondaryLabel', label: 'Secondary Button', type: 'text', default: '' },
      { id: 'sectionStyle', label: 'Section Style', type: 'select', options: ['default', 'primary', 'dark', 'gradient-primary'], default: 'primary' },
    ],
    generateJSX: (c) => {
      const secondary = c.secondaryLabel
        ? `\n        <Button variant="outline" size="lg" page="portfolio">${c.secondaryLabel}</Button>`
        : '';
      return `<Section sectionStyle="${c.sectionStyle}" spacing="lg">
  <Container>
    <div className="cta-section wp-text-center">
      <h2 className="cta-section__title">${c.title}</h2>
      <p className="cta-section__description">${c.description}</p>
      <div className="cta-section__actions">${
        `\n        <Button size="lg" page="contact">${c.primaryLabel}</Button>${secondary}`
      }
      </div>
    </div>
  </Container>
</Section>`;
    },
    generateCSS: () => `.cta-section {
  text-align: center;
}

.cta-section__title {
  font-family: var(--font-primary);
  font-size: var(--text-h2);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin: 0 0 var(--spacing-4);
}

.cta-section__description {
  font-family: var(--font-primary);
  font-size: var(--text-lead);
  color: var(--muted-foreground);
  max-width: 640px;
  margin: 0 auto var(--spacing-8);
}

.cta-section__actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  flex-wrap: wrap;
}`,
    generateWP: (c) => `<!-- wp:group {"className":"is-style-${c.sectionStyle}","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-${c.sectionStyle}">
  <!-- wp:heading {"textAlign":"center"} -->
  <h2 class="has-text-align-center">${c.title}</h2>
  <!-- /wp:heading -->
  <!-- wp:paragraph {"align":"center"} -->
  <p class="has-text-align-center">${c.description}</p>
  <!-- /wp:paragraph -->
  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
  <div class="wp-block-buttons">
    <!-- wp:button -->
    <div class="wp-block-button"><a class="wp-block-button__link">${c.primaryLabel}</a></div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->`,
  },

  /* ── Card Grid ── */
  {
    id: 'card-grid',
    name: 'CardGrid',
    category: 'listing',
    description: 'Responsive card grid for archive/listing pages. Supports 2, 3, or 4 column layouts.',
    componentPath: '/src/app/components/patterns/CardGrid.tsx',
    cssPath: '/src/styles/patterns/card-grid.css',
    wpBlock: 'core/query',
    configOptions: [
      { id: 'columns', label: 'Columns', type: 'select', options: ['2', '3', '4'], default: '3' },
      { id: 'items', label: 'Number of Items', type: 'number', default: 6 },
      { id: 'spacing', label: 'Section Spacing', type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    ],
    generateJSX: (c) => `<Section spacing="${c.spacing}">
  <Container>
    <div className="wp-grid-${c.columns}-cols" style={{ gap: 'var(--spacing-8)' }}>
      {items.map(item => (
        <article key={item.id} className="card-grid__card">
          <div className="card-grid__image-wrapper">
            <img src={item.image} alt={item.title} className="card-grid__image" loading="lazy" />
          </div>
          <div className="card-grid__content">
            <h3 className="card-grid__title">{item.title}</h3>
            <p className="card-grid__excerpt">{item.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.card-grid__card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.card-grid__card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.card-grid__image-wrapper {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.card-grid__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-grid__content {
  padding: var(--spacing-6);
}

.card-grid__title {
  font-family: var(--font-primary);
  font-size: var(--text-h5);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin: 0 0 var(--spacing-2);
}

.card-grid__excerpt {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  margin: 0;
}`,
    generateWP: (c) => `<!-- wp:query {"queryId":1,"query":{"perPage":${c.items},"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date"}} -->
<div class="wp-block-query">
  <!-- wp:post-template {"layout":{"type":"grid","columnCount":${c.columns}}} -->
    <!-- wp:group {"className":"card-grid__card"} -->
    <div class="wp-block-group card-grid__card">
      <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"} /-->
      <!-- wp:group {"className":"card-grid__content"} -->
      <div class="wp-block-group card-grid__content">
        <!-- wp:post-title {"isLink":true,"level":3} /-->
        <!-- wp:post-excerpt /-->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
  <!-- /wp:post-template -->
</div>
<!-- /wp:query -->`,
  },

  /* ── FAQ Section ── */
  {
    id: 'faq-section',
    name: 'FAQSection',
    category: 'content',
    description: 'Collapsible FAQ accordion with structured data support. Questions use --text-lg, NOT --text-h4.',
    componentPath: '/src/app/components/patterns/FAQSection.tsx',
    cssPath: '/src/styles/patterns/faq-section.css',
    wpBlock: 'core/details',
    configOptions: [
      { id: 'title', label: 'Section Title', type: 'text', default: 'Frequently Asked Questions' },
      { id: 'items', label: 'Number of Items', type: 'number', default: 5 },
      { id: 'background', label: 'Background', type: 'select', options: ['default', 'card', 'muted'], default: 'default' },
    ],
    generateJSX: (c) => `<Section background="${c.background}" spacing="md">
  <Container>
    <h2 className="faq-section__title">${c.title}</h2>
    <div className="faq-section__list">
      {faqs.map((faq, i) => (
        <details key={i} className="faq-section__item">
          <summary className="faq-section__question">{faq.question}</summary>
          <div className="faq-section__answer">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.faq-section__title {
  font-family: var(--font-primary);
  font-size: var(--text-h2);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  text-align: center;
  margin: 0 0 var(--spacing-8);
}

.faq-section__list {
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.faq-section__item {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.faq-section__question {
  font-family: var(--font-primary);
  font-size: var(--text-lg); /* MUST be --text-lg, NOT --text-h4 */
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  padding: var(--spacing-4) var(--spacing-6);
  cursor: pointer;
  list-style: none;
}

.faq-section__question::-webkit-details-marker {
  display: none;
}

.faq-section__answer {
  padding: 0 var(--spacing-6) var(--spacing-4);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--muted-foreground);
  line-height: var(--line-height-relaxed);
}`,
    generateWP: (c) => `<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:heading {"textAlign":"center"} -->
  <h2 class="has-text-align-center">${c.title}</h2>
  <!-- /wp:heading -->
  <!-- wp:details -->
  <details class="wp-block-details">
    <summary>What services do you offer?</summary>
    <!-- wp:paragraph -->
    <p>We offer WordPress development, design, and support services.</p>
    <!-- /wp:paragraph -->
  </details>
  <!-- /wp:details -->
</div>
<!-- /wp:group -->`,
  },

  /* ── Feature Grid ── */
  {
    id: 'feature-grid',
    name: 'FeatureGrid',
    category: 'content',
    description: 'Icon-based feature grid with title, description and icon per item. Great for service features or benefits.',
    componentPath: '/src/app/components/patterns/FeatureGrid.tsx',
    cssPath: '/src/styles/patterns/feature-grid.css',
    wpBlock: 'core/columns',
    configOptions: [
      { id: 'columns', label: 'Columns', type: 'select', options: ['2', '3', '4'], default: '3' },
      { id: 'items', label: 'Number of Items', type: 'number', default: 6 },
      { id: 'sectionStyle', label: 'Section Style', type: 'select', options: ['default', 'muted', 'card'], default: 'default' },
    ],
    generateJSX: (c) => `<Section background="${c.sectionStyle}" spacing="md">
  <Container>
    <div className="wp-grid-${c.columns}-cols" style={{ gap: 'var(--spacing-8)' }}>
      {features.map((feature, i) => (
        <div key={i} className="feature-grid__item">
          <div className="feature-grid__icon">
            {feature.icon}
          </div>
          <h3 className="feature-grid__title">{feature.title}</h3>
          <p className="feature-grid__description">{feature.description}</p>
        </div>
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.feature-grid__item {
  text-align: center;
  padding: var(--spacing-6);
}

.feature-grid__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  color: var(--primary);
  margin-bottom: var(--spacing-4);
}

.feature-grid__title {
  font-family: var(--font-primary);
  font-size: var(--text-h5);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin: 0 0 var(--spacing-2);
}

.feature-grid__description {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  line-height: var(--line-height-normal);
  margin: 0;
}`,
    generateWP: (c) => `<!-- wp:columns -->
<div class="wp-block-columns">
  <!-- wp:column -->
  <div class="wp-block-column">
    <!-- wp:group {"className":"feature-grid__item","layout":{"type":"constrained"}} -->
    <div class="wp-block-group feature-grid__item">
      <!-- wp:heading {"level":3} -->
      <h3>Feature Title</h3>
      <!-- /wp:heading -->
      <!-- wp:paragraph -->
      <p>Feature description goes here.</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:column -->
</div>
<!-- /wp:columns -->`,
  },

  /* ── Team Grid ── */
  {
    id: 'team-grid',
    name: 'TeamGrid',
    category: 'listing',
    description: 'Team member grid with photo, name, role and optional social links.',
    componentPath: '/src/app/components/patterns/TeamGrid.tsx',
    cssPath: '/src/styles/patterns/team-grid.css',
    wpBlock: 'core/columns',
    configOptions: [
      { id: 'columns', label: 'Columns', type: 'select', options: ['2', '3', '4'], default: '4' },
      { id: 'showSocial', label: 'Show Social Links', type: 'select', options: ['yes', 'no'], default: 'yes' },
    ],
    generateJSX: (c) => `<Section spacing="md">
  <Container>
    <div className="wp-grid-${c.columns}-cols" style={{ gap: 'var(--spacing-8)' }}>
      {team.map(member => (
        <div key={member.id} className="team-grid__card">
          <div className="team-grid__photo-wrapper">
            <img src={member.photo} alt={member.name} className="team-grid__photo" loading="lazy" />
          </div>
          <h3 className="team-grid__name">{member.name}</h3>
          <p className="team-grid__role">{member.role}</p>${c.showSocial === 'yes' ? `
          <div className="team-grid__social">
            {/* Social links */}
          </div>` : ''}
        </div>
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.team-grid__card {
  text-align: center;
  padding: var(--spacing-6);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.team-grid__photo-wrapper {
  width: 120px;
  height: 120px;
  border-radius: var(--radius-full);
  overflow: hidden;
  margin: 0 auto var(--spacing-4);
}

.team-grid__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-grid__name {
  font-family: var(--font-primary);
  font-size: var(--text-h5);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin: 0 0 var(--spacing-1);
}

.team-grid__role {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  margin: 0;
}`,
    generateWP: (c) => `<!-- wp:columns -->
<div class="wp-block-columns">
  <!-- wp:column -->
  <div class="wp-block-column">
    <!-- wp:image {"align":"center","className":"is-style-rounded"} -->
    <figure class="wp-block-image aligncenter is-style-rounded">
      <img src="team-photo.jpg" alt="Team Member" />
    </figure>
    <!-- /wp:image -->
    <!-- wp:heading {"textAlign":"center","level":3} -->
    <h3 class="has-text-align-center">Name</h3>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">Role</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:column -->
</div>
<!-- /wp:columns -->`,
  },

  /* ── Testimonial Grid ── */
  {
    id: 'testimonial-grid',
    name: 'TestimonialGrid',
    category: 'related',
    description: 'Grid of testimonial cards with quote, author name, role and optional star rating.',
    componentPath: '/src/app/components/patterns/TestimonialGrid.tsx',
    cssPath: '/src/styles/patterns/testimonial-grid.css',
    wpBlock: 'core/group',
    configOptions: [
      { id: 'columns', label: 'Columns', type: 'select', options: ['1', '2', '3'], default: '3' },
      { id: 'showRating', label: 'Show Ratings', type: 'select', options: ['yes', 'no'], default: 'yes' },
      { id: 'background', label: 'Background', type: 'select', options: ['default', 'muted', 'card'], default: 'muted' },
    ],
    generateJSX: (c) => `<Section background="${c.background}" spacing="md">
  <Container>
    <h2 className="testimonial-grid__title">What Our Clients Say</h2>
    <div className="wp-grid-${c.columns}-cols" style={{ gap: 'var(--spacing-6)' }}>
      {testimonials.map((t, i) => (
        <blockquote key={i} className="testimonial-grid__card">
          ${c.showRating === 'yes' ? '<div className="testimonial-grid__rating">{"★".repeat(5)}</div>' : ''}
          <p className="testimonial-grid__quote">{t.quote}</p>
          <footer className="testimonial-grid__author">
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.testimonial-grid__title {
  font-family: var(--font-primary);
  font-size: var(--text-h2);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  text-align: center;
  margin: 0 0 var(--spacing-8);
}

.testimonial-grid__card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  margin: 0;
}

.testimonial-grid__rating {
  color: var(--warning, #f59e0b);
  font-size: var(--text-sm);
  margin-bottom: var(--spacing-3);
}

.testimonial-grid__quote {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--foreground);
  line-height: var(--line-height-relaxed);
  font-style: italic;
  margin: 0 0 var(--spacing-4);
}

.testimonial-grid__author {
  display: flex;
  flex-direction: column;
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
}

.testimonial-grid__author strong {
  color: var(--foreground);
  font-weight: var(--font-weight-semibold);
}

.testimonial-grid__author span {
  color: var(--muted-foreground);
}`,
    generateWP: (c) => `<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:heading {"textAlign":"center"} -->
  <h2 class="has-text-align-center">What Our Clients Say</h2>
  <!-- /wp:heading -->
  <!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:quote -->
      <blockquote class="wp-block-quote">
        <p>Testimonial text goes here.</p>
        <cite>Author Name, Role</cite>
      </blockquote>
      <!-- /wp:quote -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->`,
  },

  /* ── Services Card ── */
  {
    id: 'services-card',
    name: 'ServicesCard',
    category: 'listing',
    description: 'Service offering cards with icon, title, description and feature list. Links to service detail pages.',
    componentPath: '/src/app/components/patterns/ServicesCard.tsx',
    cssPath: '/src/styles/patterns/services-card.css',
    wpBlock: 'core/group',
    configOptions: [
      { id: 'columns', label: 'Columns', type: 'select', options: ['2', '3'], default: '3' },
      { id: 'showFeatures', label: 'Show Features List', type: 'select', options: ['yes', 'no'], default: 'yes' },
    ],
    generateJSX: (c) => `<Section spacing="md">
  <Container>
    <div className="wp-grid-${c.columns}-cols" style={{ gap: 'var(--spacing-8)' }}>
      {services.map(service => (
        <a key={service.slug} href={service.url} className="services-card">
          <div className="services-card__icon">{service.icon}</div>
          <h3 className="services-card__title">{service.title}</h3>
          <p className="services-card__description">{service.description}</p>${c.showFeatures === 'yes' ? `
          <ul className="services-card__features">
            {service.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>` : ''}
        </a>
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.services-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-6);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.services-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.services-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  color: var(--primary);
  margin-bottom: var(--spacing-4);
}

.services-card__title {
  font-family: var(--font-primary);
  font-size: var(--text-h5);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin: 0 0 var(--spacing-2);
}

.services-card__description {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  margin: 0 0 var(--spacing-4);
}

.services-card__features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
}`,
    generateWP: (c) => `<!-- wp:group {"className":"services-card","layout":{"type":"constrained"}} -->
<div class="wp-block-group services-card">
  <!-- wp:heading {"level":3} -->
  <h3>Service Title</h3>
  <!-- /wp:heading -->
  <!-- wp:paragraph -->
  <p>Service description goes here.</p>
  <!-- /wp:paragraph -->
  <!-- wp:list -->
  <ul><li>Feature one</li><li>Feature two</li></ul>
  <!-- /wp:list -->
</div>
<!-- /wp:group -->`,
  },

  /* ── Newsletter Signup ── */
  {
    id: 'newsletter-signup',
    name: 'NewsletterSignup',
    category: 'cta',
    description: 'Email newsletter signup form with heading, description and inline email input + submit button.',
    componentPath: '/src/app/components/patterns/NewsletterSignup.tsx',
    cssPath: '/src/styles/patterns/newsletter-signup.css',
    wpBlock: 'core/group',
    configOptions: [
      { id: 'title', label: 'Heading', type: 'text', default: 'Stay in the Loop' },
      { id: 'description', label: 'Description', type: 'text', default: 'Get the latest WordPress tips and insights delivered to your inbox.' },
      { id: 'buttonText', label: 'Button Text', type: 'text', default: 'Subscribe' },
      { id: 'sectionStyle', label: 'Section Style', type: 'select', options: ['default', 'muted', 'dark', 'gradient-subtle'], default: 'muted' },
    ],
    generateJSX: (c) => `<Section sectionStyle="${c.sectionStyle}" spacing="md">
  <Container>
    <div className="newsletter-signup wp-text-center">
      <h2 className="newsletter-signup__title">${c.title}</h2>
      <p className="newsletter-signup__description">${c.description}</p>
      <form className="newsletter-signup__form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="newsletter-signup__input"
          placeholder="your@email.com"
          required
        />
        <Button type="submit">${c.buttonText}</Button>
      </form>
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.newsletter-signup {
  max-width: 560px;
  margin: 0 auto;
}

.newsletter-signup__title {
  font-family: var(--font-primary);
  font-size: var(--text-h3);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin: 0 0 var(--spacing-3);
}

.newsletter-signup__description {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--muted-foreground);
  margin: 0 0 var(--spacing-6);
}

.newsletter-signup__form {
  display: flex;
  gap: var(--spacing-3);
}

.newsletter-signup__input {
  flex: 1;
  padding: var(--spacing-3) var(--spacing-4);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--foreground);
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}`,
    generateWP: (c) => `<!-- wp:group {"className":"newsletter-signup","layout":{"type":"constrained"}} -->
<div class="wp-block-group newsletter-signup">
  <!-- wp:heading {"textAlign":"center"} -->
  <h2 class="has-text-align-center">${c.title}</h2>
  <!-- /wp:heading -->
  <!-- wp:paragraph {"align":"center"} -->
  <p class="has-text-align-center">${c.description}</p>
  <!-- /wp:paragraph -->
  <!-- wp:html -->
  <form class="newsletter-signup__form">
    <input type="email" placeholder="your@email.com" />
    <button type="submit">${c.buttonText}</button>
  </form>
  <!-- /wp:html -->
</div>
<!-- /wp:group -->`,
  },

  /* ── Pricing Table ── */
  {
    id: 'pricing-table',
    name: 'PricingTable',
    category: 'content',
    description: 'Pricing cards with plan name, price, features list and CTA button. Highlighted "popular" plan.',
    componentPath: '/src/app/components/patterns/PricingTable.tsx',
    cssPath: '/src/styles/patterns/pricing-table.css',
    wpBlock: 'core/columns',
    configOptions: [
      { id: 'plans', label: 'Number of Plans', type: 'select', options: ['2', '3', '4'], default: '3' },
      { id: 'currency', label: 'Currency Symbol', type: 'text', default: '$' },
    ],
    generateJSX: (c) => `<Section spacing="lg">
  <Container>
    <h2 className="pricing-table__title">Choose Your Plan</h2>
    <div className="wp-grid-${c.plans}-cols" style={{ gap: 'var(--spacing-6)' }}>
      {plans.map(plan => (
        <div key={plan.id} className={\`pricing-table__card \${plan.popular ? 'pricing-table__card--popular' : ''}\`}>
          {plan.popular && <span className="pricing-table__badge">Most Popular</span>}
          <h3 className="pricing-table__plan-name">{plan.name}</h3>
          <div className="pricing-table__price">
            <span className="pricing-table__currency">${c.currency}</span>
            <span className="pricing-table__amount">{plan.price}</span>
            <span className="pricing-table__period">/month</span>
          </div>
          <ul className="pricing-table__features">
            {plan.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <Button page="contact" size="lg">{plan.cta}</Button>
        </div>
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.pricing-table__title {
  font-family: var(--font-primary);
  font-size: var(--text-h2);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  text-align: center;
  margin: 0 0 var(--spacing-10);
}

.pricing-table__card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-8);
  text-align: center;
  position: relative;
}

.pricing-table__card--popular {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.pricing-table__badge {
  position: absolute;
  top: calc(-1 * var(--spacing-3));
  left: 50%;
  transform: translateX(-50%);
  padding: var(--spacing-1) var(--spacing-4);
  background: var(--primary);
  color: var(--primary-foreground);
  font-family: var(--font-secondary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-full);
  text-transform: uppercase;
}

.pricing-table__plan-name {
  font-family: var(--font-primary);
  font-size: var(--text-h4);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin: 0 0 var(--spacing-4);
}

.pricing-table__price {
  margin-bottom: var(--spacing-6);
}

.pricing-table__currency {
  font-size: var(--text-h4);
  color: var(--muted-foreground);
  vertical-align: top;
}

.pricing-table__amount {
  font-family: var(--font-primary);
  font-size: var(--text-h1);
  font-weight: var(--font-weight-bold);
  color: var(--foreground);
}

.pricing-table__period {
  font-size: var(--text-sm);
  color: var(--muted-foreground);
}

.pricing-table__features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  text-align: left;
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
}`,
    generateWP: (c) => `<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide">
  <!-- wp:column {"className":"pricing-table__card"} -->
  <div class="wp-block-column pricing-table__card">
    <!-- wp:heading {"textAlign":"center","level":3} -->
    <h3 class="has-text-align-center">Plan Name</h3>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"align":"center","className":"pricing-table__price"} -->
    <p class="has-text-align-center pricing-table__price">$99/month</p>
    <!-- /wp:paragraph -->
    <!-- wp:list -->
    <ul><li>Feature one</li><li>Feature two</li></ul>
    <!-- /wp:list -->
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
      <!-- wp:button -->
      <div class="wp-block-button"><a class="wp-block-button__link">Get Started</a></div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
  </div>
  <!-- /wp:column -->
</div>
<!-- /wp:columns -->`,
  },

  /* ── Stats Section ── */
  {
    id: 'stats-section',
    name: 'StatsSection',
    category: 'meta',
    description: 'Key metrics/statistics section with large numbers, labels and optional icons.',
    componentPath: '/src/app/components/patterns/StatsSection.tsx',
    cssPath: '/src/styles/patterns/stats-section.css',
    wpBlock: 'core/columns',
    configOptions: [
      { id: 'columns', label: 'Columns', type: 'select', options: ['3', '4'], default: '4' },
      { id: 'background', label: 'Background', type: 'select', options: ['default', 'card', 'muted'], default: 'card' },
    ],
    generateJSX: (c) => `<Section background="${c.background}" spacing="md">
  <Container>
    <div className="wp-grid-${c.columns}-cols" style={{ gap: 'var(--spacing-8)' }}>
      {stats.map((stat, i) => (
        <div key={i} className="stats-section__item">
          <span className="stats-section__value">{stat.value}</span>
          <span className="stats-section__label">{stat.label}</span>
        </div>
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.stats-section__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-6);
}

.stats-section__value {
  font-family: var(--font-primary);
  font-size: var(--text-h1);
  font-weight: var(--font-weight-bold);
  color: var(--primary);
  line-height: var(--line-height-tight);
}

.stats-section__label {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  margin-top: var(--spacing-2);
}`,
    generateWP: (c) => `<!-- wp:columns -->
<div class="wp-block-columns">
  <!-- wp:column -->
  <div class="wp-block-column">
    <p class="has-text-align-center stats-section__value">100+</p>
    <p class="has-text-align-center stats-section__label">Projects Delivered</p>
  </div>
  <!-- /wp:column -->
</div>
<!-- /wp:columns -->`,
  },

  /* ── Contact Form ── */
  {
    id: 'contact-form',
    name: 'ContactForm',
    category: 'content',
    description: 'Full contact form with name, email, subject, message fields and validation states.',
    componentPath: '/src/app/components/patterns/ContactForm.tsx',
    cssPath: '/src/styles/patterns/contact-form.css',
    wpBlock: 'core/html',
    configOptions: [
      { id: 'showSubject', label: 'Show Subject Field', type: 'select', options: ['yes', 'no'], default: 'yes' },
      { id: 'showPhone', label: 'Show Phone Field', type: 'select', options: ['yes', 'no'], default: 'no' },
      { id: 'buttonText', label: 'Submit Button Text', type: 'text', default: 'Send Message' },
    ],
    generateJSX: (c) => `<form className="contact-form" onSubmit={handleSubmit}>
  <div className="contact-form__row">
    <div className="contact-form__field">
      <label className="contact-form__label" htmlFor="name">Name</label>
      <input className="contact-form__input" id="name" type="text" required />
    </div>
    <div className="contact-form__field">
      <label className="contact-form__label" htmlFor="email">Email</label>
      <input className="contact-form__input" id="email" type="email" required />
    </div>
  </div>${c.showPhone === 'yes' ? `
  <div className="contact-form__field">
    <label className="contact-form__label" htmlFor="phone">Phone</label>
    <input className="contact-form__input" id="phone" type="tel" />
  </div>` : ''}${c.showSubject === 'yes' ? `
  <div className="contact-form__field">
    <label className="contact-form__label" htmlFor="subject">Subject</label>
    <input className="contact-form__input" id="subject" type="text" required />
  </div>` : ''}
  <div className="contact-form__field">
    <label className="contact-form__label" htmlFor="message">Message</label>
    <textarea className="contact-form__textarea" id="message" rows={5} required />
  </div>
  <Button type="submit" size="lg">${c.buttonText}</Button>
</form>`,
    generateCSS: () => `.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4);
}

.contact-form__field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.contact-form__label {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
}

.contact-form__input,
.contact-form__textarea {
  padding: var(--spacing-3) var(--spacing-4);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--foreground);
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  outline: none;
  transition: border-color 0.2s ease;
}

.contact-form__input:focus,
.contact-form__textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary) 25%, transparent);
}

.contact-form__textarea {
  resize: vertical;
  min-height: 120px;
}`,
    generateWP: (c) => `<!-- wp:html -->
<form class="contact-form">
  <div class="contact-form__row">
    <div class="contact-form__field">
      <label for="name">Name</label>
      <input type="text" id="name" required />
    </div>
    <div class="contact-form__field">
      <label for="email">Email</label>
      <input type="email" id="email" required />
    </div>
  </div>
  <div class="contact-form__field">
    <label for="message">Message</label>
    <textarea id="message" rows="5" required></textarea>
  </div>
  <button type="submit">${c.buttonText}</button>
</form>
<!-- /wp:html -->`,
  },

  /* ── Pagination Nav ── */
  {
    id: 'pagination-nav',
    name: 'PaginationNav',
    category: 'nav',
    description: 'Pagination navigation with previous/next buttons and page number indicators.',
    componentPath: '/src/app/components/patterns/PaginationNav.tsx',
    cssPath: '/src/styles/patterns/pagination-nav.css',
    wpBlock: 'core/query-pagination',
    configOptions: [
      { id: 'totalPages', label: 'Total Pages', type: 'number', default: 5 },
      { id: 'showNumbers', label: 'Show Page Numbers', type: 'select', options: ['yes', 'no'], default: 'yes' },
    ],
    generateJSX: (c) => `<nav className="pagination-nav" aria-label="Pagination">
  <button className="pagination-nav__btn" aria-label="Previous page">
    &larr; Previous
  </button>${c.showNumbers === 'yes' ? `
  <div className="pagination-nav__pages">
    {Array.from({ length: ${c.totalPages} }, (_, i) => (
      <button
        key={i}
        className={\`pagination-nav__page \${i === 0 ? 'pagination-nav__page--active' : ''}\`}
      >
        {i + 1}
      </button>
    ))}
  </div>` : ''}
  <button className="pagination-nav__btn" aria-label="Next page">
    Next &rarr;
  </button>
</nav>`,
    generateCSS: () => `.pagination-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-6) 0;
}

.pagination-nav__btn {
  padding: var(--spacing-2) var(--spacing-4);
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--muted-foreground);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.15s ease;
}

.pagination-nav__btn:hover {
  color: var(--foreground);
  border-color: var(--foreground);
}

.pagination-nav__pages {
  display: flex;
  gap: var(--spacing-1);
}

.pagination-nav__page {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  background: none;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
}

.pagination-nav__page--active {
  color: var(--primary);
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  border-color: var(--primary);
  font-weight: var(--font-weight-semibold);
}`,
    generateWP: (c) => `<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
  <!-- wp:query-pagination-previous /-->
  <!-- wp:query-pagination-numbers /-->
  <!-- wp:query-pagination-next /-->
<!-- /wp:query-pagination -->`,
  },

  /* ── Process Timeline ── */
  {
    id: 'process-timeline',
    name: 'ProcessTimeline',
    category: 'content',
    description: 'Vertical process/timeline with numbered steps, titles and descriptions. Ideal for workflows.',
    componentPath: '/src/app/components/patterns/ProcessTimeline.tsx',
    cssPath: '/src/styles/patterns/process-timeline.css',
    wpBlock: 'core/group',
    configOptions: [
      { id: 'steps', label: 'Number of Steps', type: 'number', default: 4 },
      { id: 'title', label: 'Section Title', type: 'text', default: 'Our Process' },
    ],
    generateJSX: (c) => `<Section spacing="md">
  <Container>
    <h2 className="process-timeline__title">${c.title}</h2>
    <div className="process-timeline__list">
      {steps.map((step, i) => (
        <div key={i} className="process-timeline__step">
          <div className="process-timeline__marker">
            <span className="process-timeline__number">{i + 1}</span>
          </div>
          <div className="process-timeline__content">
            <h3 className="process-timeline__step-title">{step.title}</h3>
            <p className="process-timeline__step-desc">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.process-timeline__title {
  font-family: var(--font-primary);
  font-size: var(--text-h2);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  text-align: center;
  margin: 0 0 var(--spacing-10);
}

.process-timeline__list {
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.process-timeline__step {
  display: flex;
  gap: var(--spacing-4);
}

.process-timeline__marker {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: var(--primary);
  color: var(--primary-foreground);
}

.process-timeline__number {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
}

.process-timeline__step-title {
  font-family: var(--font-primary);
  font-size: var(--text-h5);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin: 0 0 var(--spacing-1);
}

.process-timeline__step-desc {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  margin: 0;
}`,
    generateWP: (c) => `<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:heading {"textAlign":"center"} -->
  <h2 class="has-text-align-center">${c.title}</h2>
  <!-- /wp:heading -->
  <!-- wp:group {"className":"process-timeline__step"} -->
  <div class="wp-block-group process-timeline__step">
    <span class="process-timeline__number">1</span>
    <!-- wp:heading {"level":3} -->
    <h3>Step Title</h3>
    <!-- /wp:heading -->
    <!-- wp:paragraph -->
    <p>Step description.</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->`,
  },

  /* ── Logo Grid ── */
  {
    id: 'logo-grid',
    name: 'LogoGrid',
    category: 'related',
    description: 'Client/partner logo grid with grayscale-to-color hover effect. Social proof pattern.',
    componentPath: '/src/app/components/patterns/LogoGrid.tsx',
    cssPath: '/src/styles/patterns/logo-grid.css',
    wpBlock: 'core/gallery',
    configOptions: [
      { id: 'columns', label: 'Columns', type: 'select', options: ['3', '4', '5', '6'], default: '5' },
      { id: 'title', label: 'Section Title', type: 'text', default: 'Trusted By' },
    ],
    generateJSX: (c) => `<Section spacing="sm" background="muted">
  <Container>
    <p className="logo-grid__title">${c.title}</p>
    <div className="logo-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(${c.columns}, 1fr)',
      gap: 'var(--spacing-8)',
      alignItems: 'center',
      justifyItems: 'center',
    }}>
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className="logo-grid__logo"
          loading="lazy"
        />
      ))}
    </div>
  </Container>
</Section>`,
    generateCSS: () => `.logo-grid__title {
  font-family: var(--font-secondary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--muted-foreground);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wider);
  text-align: center;
  margin-bottom: var(--spacing-6);
}

.logo-grid__logo {
  max-height: 40px;
  width: auto;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.logo-grid__logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}`,
    generateWP: (c) => `<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:paragraph {"align":"center","className":"logo-grid__title"} -->
  <p class="has-text-align-center logo-grid__title">${c.title}</p>
  <!-- /wp:paragraph -->
  <!-- wp:gallery {"columns":${c.columns},"linkTo":"none","className":"logo-grid"} -->
  <figure class="wp-block-gallery has-nested-images columns-${c.columns} logo-grid">
    <!-- wp:image -->
    <figure class="wp-block-image"><img src="logo.png" alt="Client Logo" /></figure>
    <!-- /wp:image -->
  </figure>
  <!-- /wp:gallery -->
</div>
<!-- /wp:group -->`,
  },
];

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

type CodeTab = 'jsx' | 'css' | 'wordpress';

export function SnippetGeneratorTemplate() {
  const [selectedPatternId, setSelectedPatternId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<PatternCategory | 'all'>('all');
  const [activeTab, setActiveTab] = useState<CodeTab>('jsx');
  const [copiedTab, setCopiedTab] = useState<CodeTab | null>(null);
  const [config, setConfig] = useState<Record<string, string | number>>({});

  /* ── Derived ── */
  const selectedPattern = useMemo(
    () => PATTERNS.find(p => p.id === selectedPatternId) ?? null,
    [selectedPatternId],
  );

  const filteredPatterns = useMemo(() => {
    let list = PATTERNS;
    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.includes(q),
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const categories: (PatternCategory | 'all')[] = useMemo(() => {
    const cats = Array.from(new Set(PATTERNS.map(p => p.category)));
    return ['all', ...cats] as (PatternCategory | 'all')[];
  }, []);

  /* ── Handlers ── */
  const handleSelectPattern = useCallback(
    (id: string) => {
      setSelectedPatternId(id);
      const pattern = PATTERNS.find(p => p.id === id);
      if (pattern) {
        const defaults: Record<string, string | number> = {};
        pattern.configOptions.forEach(opt => {
          defaults[opt.id] = opt.default;
        });
        setConfig(defaults);
      }
      setActiveTab('jsx');
    },
    [],
  );

  const handleConfigChange = useCallback(
    (id: string, value: string | number) => {
      setConfig(prev => ({ ...prev, [id]: value }));
    },
    [],
  );

  const handleCopy = useCallback(
    async (tab: CodeTab) => {
      if (!selectedPattern) return;
      let text = '';
      if (tab === 'jsx') text = selectedPattern.generateJSX(config);
      else if (tab === 'css') text = selectedPattern.generateCSS();
      else text = selectedPattern.generateWP(config);

      try {
        await navigator.clipboard.writeText(text);
        setCopiedTab(tab);
        setTimeout(() => setCopiedTab(null), 2000);
      } catch {
        /* clipboard may be blocked in sandboxed environments */
      }
    },
    [selectedPattern, config],
  );

  /* ── Code output ── */
  const codeOutput = useMemo(() => {
    if (!selectedPattern) return '';
    if (activeTab === 'jsx') return selectedPattern.generateJSX(config);
    if (activeTab === 'css') return selectedPattern.generateCSS();
    return selectedPattern.generateWP(config);
  }, [selectedPattern, activeTab, config]);

  const importStatement = useMemo(() => {
    if (!selectedPattern) return '';
    return `import { ${selectedPattern.name} } from '${selectedPattern.componentPath.replace('/src/app/', '@/').replace('.tsx', '')}';
import '${selectedPattern.cssPath.replace('/src/', '@/')}';`;
  }, [selectedPattern]);

  /* ── Render ── */
  return (
    <>
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section wp-block-breadcrumbs-section--border">
        <Breadcrumbs
          items={[
            { label: 'Home', page: 'home' },
            { label: 'Developer Tools', page: 'dev-tools' },
            { label: 'Snippet Generator' },
          ]}
        />
      </section>

      <div className="snippet-gen">
        {/* Hero */}
        <div className="snippet-gen__hero">
          <div className="snippet-gen__hero-orb" />
          <div className="snippet-gen__hero-inner">
            <span className="snippet-gen__hero-badge">
              <Code2 size={12} />
              Dev Tool
            </span>
            <h1 className="snippet-gen__hero-title">Snippet Generator</h1>
            <p className="snippet-gen__hero-subtitle">
              Select a BEM pattern, configure options, and get copy-ready JSX, CSS and WordPress block markup.
            </p>
          </div>
        </div>

        {/* Body: Sidebar + Main */}
        <div className="snippet-gen__body">
          {/* ── Sidebar ── */}
          <aside className="snippet-gen__sidebar">
            <span className="snippet-gen__sidebar-label">Patterns</span>

            {/* Search */}
            <div className="snippet-gen__search">
              <Search size={16} className="snippet-gen__search-icon" />
              <input
                type="text"
                className="snippet-gen__search-input"
                placeholder="Search patterns..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category chips */}
            <div className="snippet-gen__category-chips">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`snippet-gen__chip${activeCategory === cat ? ' snippet-gen__chip--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                >
                  {cat === 'all' ? 'All' : CATEGORY_META[cat as PatternCategory].label}
                </button>
              ))}
            </div>

            {/* Pattern list */}
            {filteredPatterns.length > 0 ? (
              <ul className="snippet-gen__pattern-list">
                {filteredPatterns.map(pattern => (
                  <li key={pattern.id}>
                    <button
                      className={`snippet-gen__pattern-item${
                        selectedPatternId === pattern.id ? ' snippet-gen__pattern-item--active' : ''
                      }`}
                      onClick={() => handleSelectPattern(pattern.id)}
                      type="button"
                    >
                      <span className="snippet-gen__pattern-icon">
                        {CATEGORY_ICONS[pattern.category]}
                      </span>
                      <span className="snippet-gen__pattern-name">{pattern.name}</span>
                      <span className="snippet-gen__pattern-category-tag">
                        {pattern.category}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="snippet-gen__no-results">
                <SearchX size={32} className="snippet-gen__no-results-icon" />
                <span className="snippet-gen__no-results-text">No patterns found</span>
              </div>
            )}
          </aside>

          {/* ── Main Panel ── */}
          <div className="snippet-gen__main">
            {selectedPattern ? (
              <>
                {/* Pattern header */}
                <div className="snippet-gen__selected-header">
                  <div className="snippet-gen__selected-icon">
                    {CATEGORY_ICONS[selectedPattern.category]}
                  </div>
                  <div className="snippet-gen__selected-info">
                    <h2 className="snippet-gen__selected-name">{selectedPattern.name}</h2>
                    <p className="snippet-gen__selected-desc">{selectedPattern.description}</p>
                    <div className="snippet-gen__selected-meta">
                      <span className="snippet-gen__meta-badge snippet-gen__meta-badge--primary">
                        {selectedPattern.category}
                      </span>
                      <span className="snippet-gen__meta-badge">
                        <Globe size={10} /> {selectedPattern.wpBlock}
                      </span>
                      <span className="snippet-gen__meta-badge">
                        <FileCode size={10} /> {selectedPattern.cssPath.split('/').pop()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Configuration panel */}
                {selectedPattern.configOptions.length > 0 && (
                  <div className="snippet-gen__config">
                    <h3 className="snippet-gen__config-title">
                      <SlidersHorizontal size={16} /> Configuration
                    </h3>
                    <div className="snippet-gen__config-grid">
                      {selectedPattern.configOptions.map(opt => (
                        <div key={opt.id} className="snippet-gen__config-field">
                          <label className="snippet-gen__config-label" htmlFor={`cfg-${opt.id}`}>
                            {opt.label}
                          </label>
                          {opt.type === 'select' ? (
                            <select
                              id={`cfg-${opt.id}`}
                              className="snippet-gen__config-select"
                              value={config[opt.id] ?? opt.default}
                              onChange={e => handleConfigChange(opt.id, e.target.value)}
                            >
                              {opt.options?.map(o => (
                                <option key={o} value={o}>
                                  {o}
                                </option>
                              ))}
                            </select>
                          ) : opt.type === 'number' ? (
                            <input
                              id={`cfg-${opt.id}`}
                              className="snippet-gen__config-number"
                              type="number"
                              min={1}
                              max={20}
                              value={config[opt.id] ?? opt.default}
                              onChange={e => handleConfigChange(opt.id, parseInt(e.target.value) || 1)}
                            />
                          ) : (
                            <input
                              id={`cfg-${opt.id}`}
                              className="snippet-gen__config-input"
                              type="text"
                              value={config[opt.id] ?? opt.default}
                              onChange={e => handleConfigChange(opt.id, e.target.value)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Import statement */}
                <div className="snippet-gen__code-wrapper">
                  <div className="snippet-gen__code-header">
                    <span className="snippet-gen__code-lang">Import</span>
                    <button
                      className={`snippet-gen__code-copy${copiedTab === 'jsx' && activeTab === 'jsx' ? '' : ''}`}
                      onClick={() => {
                        navigator.clipboard.writeText(importStatement).catch(() => {});
                      }}
                      type="button"
                    >
                      <Copy size={12} /> Copy
                    </button>
                  </div>
                  <pre className="snippet-gen__code-block">{importStatement}</pre>
                </div>

                {/* Code output tabs */}
                <div className="snippet-gen__output">
                  <div className="snippet-gen__tabs">
                    {([
                      { id: 'jsx' as CodeTab, label: 'JSX' },
                      { id: 'css' as CodeTab, label: 'CSS' },
                      { id: 'wordpress' as CodeTab, label: 'WordPress HTML' },
                    ]).map(tab => (
                      <button
                        key={tab.id}
                        className={`snippet-gen__tab${activeTab === tab.id ? ' snippet-gen__tab--active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                        type="button"
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="snippet-gen__code-wrapper">
                    <div className="snippet-gen__code-header">
                      <span className="snippet-gen__code-lang">
                        {activeTab === 'jsx' ? 'TSX' : activeTab === 'css' ? 'CSS' : 'HTML'}
                      </span>
                      <button
                        className={`snippet-gen__code-copy${copiedTab === activeTab ? ' snippet-gen__code-copy--copied' : ''}`}
                        onClick={() => handleCopy(activeTab)}
                        type="button"
                      >
                        {copiedTab === activeTab ? (
                          <><Check size={12} /> Copied</>
                        ) : (
                          <><Copy size={12} /> Copy</>
                        )}
                      </button>
                    </div>
                    <pre className="snippet-gen__code-block">{codeOutput}</pre>
                  </div>
                </div>
              </>
            ) : (
              /* Empty state */
              <div className="snippet-gen__empty">
                <Code2 size={56} className="snippet-gen__empty-icon" />
                <h2 className="snippet-gen__empty-title">Select a Pattern</h2>
                <p className="snippet-gen__empty-desc">
                  Choose a BEM pattern from the sidebar to generate copy-ready JSX, CSS and WordPress block markup.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SnippetGeneratorTemplate;
