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
 * @split March 16, 2026 — Extracted data to snippet-generator-data.tsx (564→~230 lines)
 */

import '../../../styles/templates/snippet-generator.css';
import { useState, useCallback, useMemo } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Scissors, Copy, Check, CodeBlock } from '@phosphor-icons/react';

import {
  presets,
  categoryMeta,
  type SnippetCategory,
  type SnippetOptions,
} from '../../data/snippet-generator-data';

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

  const filteredPresets = useMemo(() => presets.filter((p) => p.category === activeCategory), [activeCategory]);
  const currentPreset = useMemo(() => presets.find((p) => p.id === activePreset), [activePreset]);
  const generatedCode = useMemo(() => currentPreset?.generate(options) ?? '', [currentPreset, options]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard not available */ }
  }, [generatedCode]);

  const handlePresetClick = useCallback((presetId: string) => { setActivePreset(presetId); }, []);

  const handleCategoryChange = useCallback((cat: SnippetCategory) => {
    setActiveCategory(cat);
    const firstPreset = presets.find((p) => p.category === cat);
    if (firstPreset) setActivePreset(firstPreset.id);
  }, []);

  return (
    <>
      <BreadcrumbPart items={[
        { label: 'Home', page: 'home' },
        { label: 'Dev Tools', page: 'dev-tools' },
        { label: 'Snippet Generator' },
      ]} />

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
                    <label className="snippet-gen__label" htmlFor="comp-name">Component Name</label>
                    <input
                      id="comp-name"
                      type="text"
                      className="snippet-gen__input"
                      value={options.componentName}
                      onChange={(e) => setOptions((prev) => ({ ...prev, componentName: e.target.value }))}
                      placeholder="MyComponent"
                    />
                  </div>
                  <div className="snippet-gen__field">
                    <label className="snippet-gen__label" htmlFor="comp-variant">Variant</label>
                    <select
                      id="comp-variant"
                      className="snippet-gen__select"
                      value={options.variant}
                      onChange={(e) => setOptions((prev) => ({ ...prev, variant: e.target.value }))}
                    >
                      <option value="default">Default</option>
                      <option value="primary">Primary</option>
                      <option value="outline">Outline</option>
                      <option value="ghost">Ghost</option>
                    </select>
                  </div>
                  <div className="snippet-gen__options-row">
                    <label className="snippet-gen__label">
                      <input type="checkbox" checked={options.includeImport} onChange={(e) => setOptions((prev) => ({ ...prev, includeImport: e.target.checked }))} />{' '}
                      Include import
                    </label>
                    <label className="snippet-gen__label">
                      <input type="checkbox" checked={options.includeProps} onChange={(e) => setOptions((prev) => ({ ...prev, includeProps: e.target.checked }))} />{' '}
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
