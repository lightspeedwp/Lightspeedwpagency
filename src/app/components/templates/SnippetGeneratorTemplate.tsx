/**
 * Snippet Generator Template
 *
 * Dev tool for generating code snippets for common WordPress block
 * patterns, design tokens, and component usage. Provides copy-ready
 * snippets with configurable options.
 *
 * WordPress template: N/A (dev tool)
 * BEM naming: .snippet-gen-*
 * 100% CSS variables — zero Tailwind, zero hardcoded values.
 *
 * @see /src/app/components/templates/DevToolsTemplate.tsx
 */

import '../../../styles/templates/snippet-generator.css';
import { useState, useCallback, useMemo } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import {
  Scissors,
  Copy,
  Check,
  CodeBlock,
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

type SnippetCategory = 'tokens' | 'components' | 'patterns' | 'blocks';

interface SnippetPreset {
  id: string;
  label: string;
  category: SnippetCategory;
  icon: React.ReactNode;
  description: string;
  generate: (options: SnippetOptions) => string;
}

interface SnippetOptions {
  componentName: string;
  variant: string;
  includeProps: boolean;
  includeImport: boolean;
}

/* ═══════════════════════════════════════════
 * Snippet Generators
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

const presets: SnippetPreset[] = [
  {
    id: 'token-colors',
    label: 'Colour Tokens',
    category: 'tokens',
    icon: <Palette size={16} />,
    description: 'Semantic colour variables for backgrounds, text, and borders.',
    generate: () => generateTokenSnippet('colors'),
  },
  {
    id: 'token-typography',
    label: 'Typography Tokens',
    category: 'tokens',
    icon: <TextT size={16} />,
    description: 'Font family, size, weight, and line-height variables.',
    generate: () => generateTokenSnippet('typography'),
  },
  {
    id: 'token-spacing',
    label: 'Spacing Tokens',
    category: 'tokens',
    icon: <Ruler size={16} />,
    description: 'Padding, margin, and gap spacing scale variables.',
    generate: () => generateTokenSnippet('spacing'),
  },
  {
    id: 'token-radius',
    label: 'Border Radius Tokens',
    category: 'tokens',
    icon: <Cube size={16} />,
    description: 'Border radius scale for cards, buttons, and badges.',
    generate: () => generateTokenSnippet('radius'),
  },
  {
    id: 'pattern-hero',
    label: 'Hero Pattern',
    category: 'patterns',
    icon: <Stack size={16} />,
    description: 'Full hero section with badge, title, subtitle, and CTAs.',
    generate: () => generatePatternSnippet('hero'),
  },
  {
    id: 'pattern-card-grid',
    label: 'Card Grid Pattern',
    category: 'patterns',
    icon: <Stack size={16} />,
    description: 'Responsive card grid with icons, titles, and descriptions.',
    generate: () => generatePatternSnippet('card-grid'),
  },
  {
    id: 'pattern-cta',
    label: 'CTA Pattern',
    category: 'patterns',
    icon: <Stack size={16} />,
    description: 'Call-to-action section with title, text, and button.',
    generate: () => generatePatternSnippet('cta'),
  },
  {
    id: 'block-button',
    label: 'Button Block',
    category: 'blocks',
    icon: <Cube size={16} />,
    description: 'Button with icon, page navigation, and variant options.',
    generate: () => generateBlockSnippet('button'),
  },
  {
    id: 'block-breadcrumb',
    label: 'Breadcrumb Part',
    category: 'blocks',
    icon: <Cube size={16} />,
    description: 'Breadcrumb navigation with page slug links.',
    generate: () => generateBlockSnippet('breadcrumb'),
  },
  {
    id: 'block-section',
    label: 'Section + Container',
    category: 'blocks',
    icon: <Cube size={16} />,
    description: 'Standard section wrapper with container layout.',
    generate: () => generateBlockSnippet('section'),
  },
  {
    id: 'component-custom',
    label: 'Custom Component',
    category: 'components',
    icon: <FileCode size={16} />,
    description: 'Generate a component usage snippet with configurable options.',
    generate: (opts) => generateComponentSnippet(opts),
  },
];

/* ═══════════════════════════════════════════
 * Category Config
 * ═══════════════════════════════════════════ */

const categoryMeta: Record<SnippetCategory, { label: string; icon: React.ReactNode }> = {
  tokens: { label: 'Design Tokens', icon: <Palette size={16} /> },
  components: { label: 'Components', icon: <FileCode size={16} /> },
  patterns: { label: 'Patterns', icon: <Stack size={16} /> },
  blocks: { label: 'Blocks', icon: <Cube size={16} /> },
};

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function SnippetGeneratorTemplate() {
  const [activeCategory, setActiveCategory] = useState<SnippetCategory>('tokens');
  const [activePreset, setActivePreset] = useState<string>('token-colors');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState<SnippetOptions>({
    componentName: 'MyComponent',
    variant: 'default',
    includeProps: true,
    includeImport: true,
  });

  const filteredPresets = useMemo(
    () => presets.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const currentPreset = useMemo(
    () => presets.find((p) => p.id === activePreset),
    [activePreset]
  );

  const generatedCode = useMemo(
    () => currentPreset?.generate(options) ?? '',
    [currentPreset, options]
  );

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  }, [generatedCode]);

  const handlePresetClick = useCallback((presetId: string) => {
    setActivePreset(presetId);
  }, []);

  const handleCategoryChange = useCallback((cat: SnippetCategory) => {
    setActiveCategory(cat);
    const firstPreset = presets.find((p) => p.category === cat);
    if (firstPreset) setActivePreset(firstPreset.id);
  }, []);

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Dev Tools', page: 'dev-tools' },
          { label: 'Snippet Generator' },
        ]}
      />

      {/* Hero */}
      <Section spacing="xl" className="snippet-gen__hero">
        <div className="snippet-gen__hero-orb" aria-hidden="true" />
        <Container>
          <div className="snippet-gen__hero-inner">
            <div className="snippet-gen__hero-badge">
              <Scissors size={14} />
              Dev Tool
            </div>
            <h1 className="snippet-gen__hero-title">Snippet Generator</h1>
            <p className="snippet-gen__hero-subtitle">
              Copy-ready code snippets for design tokens, patterns, blocks, and
              components. Select a preset, customise options, and copy.
            </p>
          </div>
        </Container>
      </Section>

      {/* Category Tabs */}
      <Section spacing="sm">
        <Container>
          <div className="snippet-gen__tabs" role="tablist" aria-label="Snippet categories">
            {(Object.entries(categoryMeta) as [SnippetCategory, { label: string; icon: React.ReactNode }][]).map(
              ([key, meta]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={activeCategory === key}
                  className={`snippet-gen__tab${activeCategory === key ? ' snippet-gen__tab--active' : ''}`}
                  onClick={() => handleCategoryChange(key)}
                >
                  {meta.icon}
                  {meta.label}
                </button>
              )
            )}
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section spacing="xl">
        <Container>
          <div className="snippet-gen__layout">
            {/* Sidebar — Preset List */}
            <aside className="snippet-gen__sidebar">
              <div className="snippet-gen__card">
                <h2 className="snippet-gen__card-title">Presets</h2>
                <div className="snippet-gen__presets">
                  {filteredPresets.map((preset) => (
                    <button
                      key={preset.id}
                      className={`snippet-gen__preset${activePreset === preset.id ? ' snippet-gen__preset--active' : ''}`}
                      onClick={() => handlePresetClick(preset.id)}
                    >
                      <span className="snippet-gen__preset-icon">{preset.icon}</span>
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Options (only for component category) */}
              {activeCategory === 'components' && (
                <div className="snippet-gen__card">
                  <h2 className="snippet-gen__card-title">Options</h2>
                  <div className="snippet-gen__field">
                    <label className="snippet-gen__label" htmlFor="comp-name">
                      Component Name
                    </label>
                    <input
                      id="comp-name"
                      type="text"
                      className="snippet-gen__input"
                      value={options.componentName}
                      onChange={(e) =>
                        setOptions((prev) => ({ ...prev, componentName: e.target.value }))
                      }
                      placeholder="MyComponent"
                    />
                  </div>
                  <div className="snippet-gen__field">
                    <label className="snippet-gen__label" htmlFor="comp-variant">
                      Variant
                    </label>
                    <select
                      id="comp-variant"
                      className="snippet-gen__select"
                      value={options.variant}
                      onChange={(e) =>
                        setOptions((prev) => ({ ...prev, variant: e.target.value }))
                      }
                    >
                      <option value="default">Default</option>
                      <option value="primary">Primary</option>
                      <option value="outline">Outline</option>
                      <option value="ghost">Ghost</option>
                    </select>
                  </div>
                  <div className="snippet-gen__options-row">
                    <label className="snippet-gen__label">
                      <input
                        type="checkbox"
                        checked={options.includeImport}
                        onChange={(e) =>
                          setOptions((prev) => ({
                            ...prev,
                            includeImport: e.target.checked,
                          }))
                        }
                      />{' '}
                      Include import
                    </label>
                    <label className="snippet-gen__label">
                      <input
                        type="checkbox"
                        checked={options.includeProps}
                        onChange={(e) =>
                          setOptions((prev) => ({
                            ...prev,
                            includeProps: e.target.checked,
                          }))
                        }
                      />{' '}
                      Include props
                    </label>
                  </div>
                </div>
              )}
            </aside>

            {/* Main — Output */}
            <div className="snippet-gen__main" role="region" aria-label="Generated snippet output">
              {currentPreset && (
                <>
                  <div className="snippet-gen__card">
                    <h2 className="snippet-gen__card-title">{currentPreset.label}</h2>
                    <p className="snippet-gen__card-description">{currentPreset.description}</p>
                  </div>

                  <div className="snippet-gen__output">
                    <div className="snippet-gen__output-header">
                      <h3 className="snippet-gen__output-title">
                        <CodeBlock size={20} style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
                        Generated Snippet
                      </h3>
                      <button
                        className={`snippet-gen__copy-btn${copied ? ' snippet-gen__copy-btn--success' : ''}`}
                        onClick={handleCopy}
                        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>

                    <div className="snippet-gen__code-block" aria-live="polite" aria-atomic="true">
                      <code className="snippet-gen__code">{generatedCode}</code>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default SnippetGeneratorTemplate;