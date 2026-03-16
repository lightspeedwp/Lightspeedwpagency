/**
 * Snippet Generator — Data & Generators
 *
 * All types, generator functions, presets, and category metadata
 * for the SnippetGeneratorTemplate.
 *
 * @split March 16, 2026
 */

import {
  Palette,
  TextT,
  Ruler,
  Stack,
  Cube,
  FileCode,
} from '@phosphor-icons/react';

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

export type SnippetCategory = 'tokens' | 'components' | 'patterns' | 'blocks';

export interface SnippetPreset {
  id: string;
  label: string;
  category: SnippetCategory;
  icon: React.ReactNode;
  description: string;
  generate: (options: SnippetOptions) => string;
}

export interface SnippetOptions {
  componentName: string;
  variant: string;
  includeProps: boolean;
  includeImport: boolean;
}

/* ═══════════════════════════════════════════
 * Generators
 * ═══════════════════════════════════════════ */

function generateTokenSnippet(tokenType: string): string {
  const snippets: Record<string, string> = {
    colors: `/* Semantic colour tokens */
.my-component {
  color: var(--foreground);
  background: var(--card);
  border-color: var(--border);
}

.my-component--primary {
  color: var(--primary-foreground);
  background: var(--primary);
}

.my-component--muted {
  color: var(--muted-foreground);
  background: var(--muted);
}`,
    typography: `/* Typography tokens */
.my-heading {
  font-family: var(--font-primary);
  font-size: var(--text-h2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  letter-spacing: var(--letter-spacing-tight);
}

.my-body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

.my-caption {
  font-family: var(--font-secondary);
  font-size: var(--text-small);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
}`,
    spacing: `/* Spacing tokens */
.my-section {
  padding: var(--spacing-12) var(--spacing-6);
  gap: var(--spacing-8);
}

.my-card {
  padding: var(--spacing-6);
  gap: var(--spacing-4);
}

.my-compact {
  padding: var(--spacing-3) var(--spacing-4);
  gap: var(--spacing-2);
}`,
    radius: `/* Border radius tokens */
.my-card {
  border-radius: var(--radius-lg);
}

.my-button {
  border-radius: var(--radius-md);
}

.my-badge {
  border-radius: var(--radius-full);
}`,
  };
  return snippets[tokenType] || snippets.colors;
}

function generateComponentSnippet(opts: SnippetOptions): string {
  const importLine = opts.includeImport
    ? `import { ${opts.componentName} } from '../components/${opts.componentName}';\n\n`
    : '';
  const propsBlock = opts.includeProps
    ? `\n  variant="${opts.variant}"\n  className="wp-block-custom"`
    : '';
  return `${importLine}<${opts.componentName}${propsBlock}>
  {/* Content */}
</${opts.componentName}>`;
}

function generatePatternSnippet(patternType: string): string {
  const snippets: Record<string, string> = {
    hero: `{/* Hero Pattern */}
<Section spacing="xl" className="my-hero">
  <Container>
    <div className="my-hero__inner">
      <div className="my-hero__badge">
        <Icon size={14} />
        Badge Label
      </div>
      <h1 className="my-hero__title">Page Title</h1>
      <p className="my-hero__subtitle">
        Supporting description text goes here.
      </p>
      <div className="my-hero__actions">
        <Button page="contact" size="lg">Primary CTA</Button>
        <Button page="services" size="lg" variant="outline">Secondary CTA</Button>
      </div>
    </div>
  </Container>
</Section>`,
    'card-grid': `{/* Card Grid Pattern */}
<Section spacing="xl">
  <Container>
    <h2 className="my-section__title">Section Title</h2>
    <div className="my-grid">
      {items.map((item) => (
        <div key={item.id} className="my-card">
          <div className="my-card__icon">
            <item.icon size={24} />
          </div>
          <h3 className="my-card__title">{item.title}</h3>
          <p className="my-card__description">{item.description}</p>
        </div>
      ))}
    </div>
  </Container>
</Section>`,
    cta: `{/* CTA Pattern */}
<Section spacing="xl" className="my-cta">
  <Container>
    <div className="my-cta__inner">
      <h2 className="my-cta__title">Call to Action Title</h2>
      <p className="my-cta__text">
        Persuasive text that encourages the user to take action.
      </p>
      <Button page="contact" size="lg">Get Started</Button>
    </div>
  </Container>
</Section>`,
  };
  return snippets[patternType] || snippets.hero;
}

function generateBlockSnippet(blockType: string): string {
  const snippets: Record<string, string> = {
    button: `{/* Button Block */}
<Button
  page="contact"
  size="lg"
  variant="primary"
>
  <EnvelopeSimple size={18} />
  Contact Us
</Button>`,
    breadcrumb: `{/* Breadcrumb Part */}
<BreadcrumbPart
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Current Page' },
  ]}
/>`,
    section: `{/* Section + Container */}
<Section spacing="xl" background="default">
  <Container>
    {/* Section content */}
  </Container>
</Section>`,
  };
  return snippets[blockType] || snippets.section;
}

/* ═══════════════════════════════════════════
 * Presets
 * ═══════════════════════════════════════════ */

export const presets: SnippetPreset[] = [
  { id: 'token-colors', label: 'Colour Tokens', category: 'tokens', icon: <Palette size={16} />, description: 'Semantic colour variables for backgrounds, text, and borders.', generate: () => generateTokenSnippet('colors') },
  { id: 'token-typography', label: 'Typography Tokens', category: 'tokens', icon: <TextT size={16} />, description: 'Font family, size, weight, and line-height variables.', generate: () => generateTokenSnippet('typography') },
  { id: 'token-spacing', label: 'Spacing Tokens', category: 'tokens', icon: <Ruler size={16} />, description: 'Padding, margin, and gap spacing scale variables.', generate: () => generateTokenSnippet('spacing') },
  { id: 'token-radius', label: 'Border Radius Tokens', category: 'tokens', icon: <Cube size={16} />, description: 'Border radius scale for cards, buttons, and badges.', generate: () => generateTokenSnippet('radius') },
  { id: 'pattern-hero', label: 'Hero Pattern', category: 'patterns', icon: <Stack size={16} />, description: 'Full hero section with badge, title, subtitle, and CTAs.', generate: () => generatePatternSnippet('hero') },
  { id: 'pattern-card-grid', label: 'Card Grid Pattern', category: 'patterns', icon: <Stack size={16} />, description: 'Responsive card grid with icons, titles, and descriptions.', generate: () => generatePatternSnippet('card-grid') },
  { id: 'pattern-cta', label: 'CTA Pattern', category: 'patterns', icon: <Stack size={16} />, description: 'Call-to-action section with title, text, and button.', generate: () => generatePatternSnippet('cta') },
  { id: 'block-button', label: 'Button Block', category: 'blocks', icon: <Cube size={16} />, description: 'Button with icon, page navigation, and variant options.', generate: () => generateBlockSnippet('button') },
  { id: 'block-breadcrumb', label: 'Breadcrumb Part', category: 'blocks', icon: <Cube size={16} />, description: 'Breadcrumb navigation with page slug links.', generate: () => generateBlockSnippet('breadcrumb') },
  { id: 'block-section', label: 'Section + Container', category: 'blocks', icon: <Cube size={16} />, description: 'Standard section wrapper with container layout.', generate: () => generateBlockSnippet('section') },
  { id: 'component-custom', label: 'Custom Component', category: 'components', icon: <FileCode size={16} />, description: 'Generate a component usage snippet with configurable options.', generate: (opts) => generateComponentSnippet(opts) },
];

/* ═══════════════════════════════════════════
 * Category Config
 * ═══════════════════════════════════════════ */

export const categoryMeta: Record<SnippetCategory, { label: string; icon: React.ReactNode }> = {
  tokens: { label: 'Design Tokens', icon: <Palette size={16} /> },
  components: { label: 'Components', icon: <FileCode size={16} /> },
  patterns: { label: 'Patterns', icon: <Stack size={16} /> },
  blocks: { label: 'Blocks', icon: <Cube size={16} /> },
};
