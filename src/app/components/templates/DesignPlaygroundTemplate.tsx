/**
 * Design System Playground Template
 *
 * Interactive sandbox for experimenting with CSS custom properties.
 * Change colours, preview typography, test spacing — all live.
 * Overrides are injected via a `<style>` block and never persisted.
 *
 * WordPress template: page-design-playground.html
 * BEM naming: .playground-*
 * 100% CSS variables — no Tailwind, no hardcoded values.
 *
 * @see /tasks/task-list.md — Section 12
 */

import '../../../styles/templates/design-playground.css';
import { useState, useCallback, useMemo } from 'react';
import { RotateCcw, Copy, Check, Palette, Type, Ruler, Circle, Layers } from 'lucide-react';

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

type TabId = 'colors' | 'typography' | 'spacing' | 'radius' | 'shadows';

interface ColorToken {
  name: string;
  variable: string;
  defaultValue: string;
  description: string;
}

interface SpacingToken {
  name: string;
  variable: string;
  value: string;
  px: number;
}

interface RadiusToken {
  name: string;
  variable: string;
  value: string;
}

interface ShadowToken {
  name: string;
  variable: string;
  value: string;
}

/* ═══════════════════════════════════════════
 * Token Data
 * ═══════════════════════════════════════════ */

const colorTokens: ColorToken[] = [
  { name: 'Background', variable: '--background', defaultValue: '#FFFFFF', description: 'Page background' },
  { name: 'Foreground', variable: '--foreground', defaultValue: '#090909', description: 'Primary text' },
  { name: 'Card', variable: '--card', defaultValue: '#F9FAFB', description: 'Card background' },
  { name: 'Card Foreground', variable: '--card-foreground', defaultValue: '#090909', description: 'Card text' },
  { name: 'Primary', variable: '--primary', defaultValue: '#1E6AFF', description: 'Brand / interactive' },
  { name: 'Primary Foreground', variable: '--primary-foreground', defaultValue: '#FFFFFF', description: 'Text on primary' },
  { name: 'Secondary', variable: '--secondary', defaultValue: '#7BE7FF', description: 'Accent / decorative' },
  { name: 'Secondary Foreground', variable: '--secondary-foreground', defaultValue: '#0E3278', description: 'Text on secondary' },
  { name: 'Muted', variable: '--muted', defaultValue: '#E1E1E1', description: 'Subtle background' },
  { name: 'Muted Foreground', variable: '--muted-foreground', defaultValue: '#565656', description: 'Secondary text' },
  { name: 'Accent', variable: '--accent', defaultValue: '#7BE7FF', description: 'Highlight / hover' },
  { name: 'Accent Foreground', variable: '--accent-foreground', defaultValue: '#0E3278', description: 'Text on accent' },
  { name: 'Border', variable: '--border', defaultValue: '#D1D5DB', description: 'Default border' },
  { name: 'Ring', variable: '--ring', defaultValue: '#1E6AFF', description: 'Focus ring' },
  { name: 'Destructive', variable: '--destructive', defaultValue: '#DC2626', description: 'Error / delete' },
  { name: 'Success', variable: '--success', defaultValue: '#16A34A', description: 'Success state' },
  { name: 'Warning', variable: '--warning', defaultValue: '#D97706', description: 'Warning state' },
  { name: 'Info', variable: '--info', defaultValue: '#2563EB', description: 'Info state' },
];

const spacingTokens: SpacingToken[] = [
  { name: '--spacing-1', variable: '--spacing-1', value: '0.25rem', px: 4 },
  { name: '--spacing-2', variable: '--spacing-2', value: '0.5rem', px: 8 },
  { name: '--spacing-3', variable: '--spacing-3', value: '0.75rem', px: 12 },
  { name: '--spacing-4', variable: '--spacing-4', value: '1rem', px: 16 },
  { name: '--spacing-5', variable: '--spacing-5', value: '1.25rem', px: 20 },
  { name: '--spacing-6', variable: '--spacing-6', value: '1.5rem', px: 24 },
  { name: '--spacing-8', variable: '--spacing-8', value: '2rem', px: 32 },
  { name: '--spacing-10', variable: '--spacing-10', value: '2.5rem', px: 40 },
  { name: '--spacing-12', variable: '--spacing-12', value: '3rem', px: 48 },
  { name: '--spacing-16', variable: '--spacing-16', value: '4rem', px: 64 },
  { name: '--spacing-20', variable: '--spacing-20', value: '5rem', px: 80 },
  { name: '--spacing-24', variable: '--spacing-24', value: '6rem', px: 96 },
  { name: '--spacing-32', variable: '--spacing-32', value: '8rem', px: 128 },
];

const radiusTokens: RadiusToken[] = [
  { name: '--radius-sm', variable: '--radius-sm', value: '2px' },
  { name: '--radius', variable: '--radius', value: '4px' },
  { name: '--radius-md', variable: '--radius-md', value: '6px' },
  { name: '--radius-lg', variable: '--radius-lg', value: '8px' },
  { name: '--radius-xl', variable: '--radius-xl', value: '12px' },
  { name: '--radius-2xl', variable: '--radius-2xl', value: '16px' },
  { name: '--radius-full', variable: '--radius-full', value: '9999px' },
];

const shadowTokens: ShadowToken[] = [
  { name: '--shadow-sm', variable: '--shadow-sm', value: '0 1px 3px rgba(0,0,0,0.05)' },
  { name: '--shadow-md', variable: '--shadow-md', value: '0 4px 6px rgba(0,0,0,0.05)' },
  { name: '--shadow-lg', variable: '--shadow-lg', value: '0 10px 40px rgba(0,0,0,0.15)' },
  { name: '--shadow-xl', variable: '--shadow-xl', value: '0 20px 40px rgba(0,0,0,0.12)' },
  { name: '--shadow-hover', variable: '--shadow-hover', value: '0 8px 16px rgba(0,0,0,0.1)' },
  { name: '--shadow-inner', variable: '--shadow-inner', value: 'inset 0 2px 4px rgba(0,0,0,0.06)' },
  { name: '--shadow-neon', variable: '--shadow-neon', value: '0 0 8px #7BE7FF, 0 0 20px rgba(123,231,255,0.4)' },
  { name: '--shadow-glow', variable: '--shadow-glow', value: '0 0 15px rgba(30,106,255,0.3)' },
];

const typeFonts = [
  { label: 'Lexend (Primary)', value: "'Lexend', sans-serif" },
  { label: 'Manrope (Secondary)', value: "'Manrope', sans-serif" },
  { label: 'System UI', value: 'system-ui, -apple-system, sans-serif' },
  { label: 'Georgia (Serif)', value: 'Georgia, "Times New Roman", serif' },
  { label: 'Monospace', value: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
];

const typeWeights = [
  { label: '300 Light', value: '300' },
  { label: '400 Regular', value: '400' },
  { label: '500 Medium', value: '500' },
  { label: '600 Semibold', value: '600' },
  { label: '700 Bold', value: '700' },
  { label: '800 Black', value: '800' },
];

const tabs: { id: TabId; label: string; icon: typeof Palette }[] = [
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'spacing', label: 'Spacing', icon: Ruler },
  { id: 'radius', label: 'Radius', icon: Circle },
  { id: 'shadows', label: 'Shadows', icon: Layers },
];

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function DesignPlaygroundTemplate() {
  const [activeTab, setActiveTab] = useState<TabId>('colors');
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [previewFont, setPreviewFont] = useState("'Lexend', sans-serif");
  const [previewWeight, setPreviewWeight] = useState('500');
  const [copied, setCopied] = useState(false);

  /* ── Helpers ── */

  const changeCount = Object.keys(overrides).length;

  const setOverride = useCallback((variable: string, value: string) => {
    setOverrides(prev => ({ ...prev, [variable]: value }));
  }, []);

  const resetAll = useCallback(() => {
    setOverrides({});
    setPreviewFont("'Lexend', sans-serif");
    setPreviewWeight('500');
  }, []);

  const cssSnippet = useMemo(() => {
    if (changeCount === 0) return '/* No overrides — using design system defaults */';
    let css = ':root {\n';
    for (const [k, v] of Object.entries(overrides)) {
      css += `  ${k}: ${v};\n`;
    }
    css += '}';
    return css;
  }, [overrides, changeCount]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(cssSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard API unavailable — silent fail */
    }
  }, [cssSnippet]);

  /* ── Override style block ── */

  const overrideStyleBlock = useMemo(() => {
    if (changeCount === 0) return null;
    let css = ':root{';
    for (const [k, v] of Object.entries(overrides)) {
      css += `${k}:${v};`;
    }
    css += '}';
    return <style dangerouslySetInnerHTML={{ __html: css }} />;
  }, [overrides, changeCount]);

  /* ── Breadcrumbs ── */

  const breadcrumbs = [
    { label: 'Home', page: 'home' as const },
    { label: 'Developer Tools', page: 'dev-tools' as const },
    { label: 'Design Playground' },
  ];

  /* ── Max bar width for spacing visualisation (scaled to 128px max) ── */
  const maxPx = 128;

  return (
    <>
      {overrideStyleBlock}

      {/* Breadcrumbs */}
      <BreadcrumbPart items={breadcrumbs} />

      <div className="playground">
        {/* Header */}
        <div className="playground__header">
          <h1 className="playground__title">Design System Playground</h1>
          <p className="playground__description">
            Experiment with the LSX design tokens in real time. Changes apply instantly
            via CSS variable overrides and are never persisted.
          </p>
        </div>

        {/* Actions */}
        <div className="playground__actions">
          <button
            type="button"
            className="playground__btn playground__btn--destructive"
            onClick={resetAll}
            aria-label="Reset all overrides"
          >
            <RotateCcw size={14} style={{ marginRight: 'var(--spacing-1)', verticalAlign: 'middle' }} />
            Reset All
          </button>

          <button
            type="button"
            className="playground__btn playground__btn--primary"
            onClick={handleCopy}
            aria-label="Copy CSS overrides"
          >
            {copied
              ? <><Check size={14} style={{ marginRight: 'var(--spacing-1)', verticalAlign: 'middle' }} /> Copied!</>
              : <><Copy size={14} style={{ marginRight: 'var(--spacing-1)', verticalAlign: 'middle' }} /> Export CSS</>
            }
          </button>

          {changeCount > 0 && (
            <span className="playground__change-count">{changeCount} override{changeCount !== 1 ? 's' : ''}</span>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="playground__tabs" role="tablist" aria-label="Playground sections">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={activeTab === tab.id}
                className={`playground__tab${activeTab === tab.id ? ' playground__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={14} style={{ marginRight: 'var(--spacing-1)', verticalAlign: 'middle' }} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════
            Colors Panel
            ════════════════════════════════════════════ */}
        <div
          className={`playground__panel${activeTab === 'colors' ? ' playground__panel--active' : ''}`}
          role="tabpanel"
          aria-label="Colors"
        >
          <h2 className="playground__section-title">Color Experimenter</h2>
          <p className="playground__section-description">
            Click any swatch to pick a new colour. The override is injected as a CSS variable
            and updates every element that references it.
          </p>

          <div className="playground__colors-grid">
            {colorTokens.map(token => {
              const currentValue = overrides[token.variable] || token.defaultValue;
              return (
                <div key={token.variable} className="playground__color-card">
                  <div className="playground__color-input-wrapper">
                    <div
                      className="playground__color-swatch"
                      style={{ backgroundColor: currentValue }}
                    />
                    <input
                      type="color"
                      className="playground__color-picker"
                      value={currentValue}
                      onChange={e => setOverride(token.variable, e.target.value)}
                      aria-label={`Pick colour for ${token.name}`}
                    />
                  </div>
                  <div className="playground__color-info">
                    <p className="playground__color-name">{token.name}</p>
                    <p className="playground__color-var">var({token.variable})</p>
                    <p className="playground__color-value">{currentValue}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Preview */}
          <div className="playground__preview">
            <h3 className="playground__preview-title">Live Preview</h3>
            <div className="playground__preview-card">
              <h4 className="playground__preview-card-title">Sample Card Component</h4>
              <p className="playground__preview-card-text">
                This card updates in real time as you change colour tokens above.
                All borders, backgrounds, and text respond to your overrides.
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
                <span className="playground__preview-badge">Badge</span>
                <span className="playground__preview-badge">Design System</span>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-4)' }}>
                <button type="button" className="playground__preview-btn">Primary Button</button>
                <button type="button" className="playground__preview-btn playground__preview-btn--outline">Outline</button>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            Typography Panel
            ════════════════════════════════════════════ */}
        <div
          className={`playground__panel${activeTab === 'typography' ? ' playground__panel--active' : ''}`}
          role="tabpanel"
          aria-label="Typography"
        >
          <h2 className="playground__section-title">Typography Experimenter</h2>
          <p className="playground__section-description">
            Preview different font families, weights, and the full type scale.
            The heading specimens use the fluid clamp() values from the design system.
          </p>

          <div className="playground__type-controls">
            <div className="playground__type-control">
              <label className="playground__type-label" htmlFor="font-family-select">Font Family</label>
              <select
                id="font-family-select"
                className="playground__type-select"
                value={previewFont}
                onChange={e => setPreviewFont(e.target.value)}
              >
                {typeFonts.map(f => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>

            <div className="playground__type-control">
              <label className="playground__type-label" htmlFor="font-weight-select">Weight</label>
              <select
                id="font-weight-select"
                className="playground__type-select"
                value={previewWeight}
                onChange={e => setPreviewWeight(e.target.value)}
              >
                {typeWeights.map(w => (
                  <option key={w.value} value={w.value}>{w.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="playground__type-preview">
            {[
              { label: 'H1 — var(--text-h1)', size: 'var(--text-h1)' },
              { label: 'H2 — var(--text-h2)', size: 'var(--text-h2)' },
              { label: 'H3 — var(--text-h3)', size: 'var(--text-h3)' },
              { label: 'H4 — var(--text-h4)', size: 'var(--text-h4)' },
              { label: 'H5 — var(--text-h5)', size: 'var(--text-h5)' },
              { label: 'H6 — var(--text-h6)', size: 'var(--text-h6)' },
              { label: 'Lead — var(--text-lead)', size: 'var(--text-lead)' },
              { label: 'Base — var(--text-base)', size: 'var(--text-base)' },
              { label: 'Small — var(--text-small)', size: 'var(--text-small)' },
              { label: 'XS — var(--text-xs)', size: 'var(--text-xs)' },
            ].map(specimen => (
              <div key={specimen.label} className="playground__type-specimen">
                <span className="playground__type-specimen-label">{specimen.label}</span>
                <p
                  className="playground__type-specimen-text"
                  style={{
                    fontFamily: previewFont,
                    fontWeight: previewWeight,
                    fontSize: specimen.size,
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════
            Spacing Panel
            ════════════════════════════════════════════ */}
        <div
          className={`playground__panel${activeTab === 'spacing' ? ' playground__panel--active' : ''}`}
          role="tabpanel"
          aria-label="Spacing"
        >
          <h2 className="playground__section-title">Spacing Scale</h2>
          <p className="playground__section-description">
            Visual representation of every spacing token. The bar width is proportional
            to the pixel value (capped at {maxPx}px for display).
          </p>

          <div className="playground__spacing-list">
            {spacingTokens.map(token => (
              <div key={token.name} className="playground__spacing-row">
                <span className="playground__spacing-label">{token.name}</span>
                <div className="playground__spacing-bar-wrap">
                  <div
                    className="playground__spacing-bar"
                    style={{ width: `${Math.min(token.px, maxPx) / maxPx * 100}%` }}
                    aria-hidden="true"
                  />
                  <span className="playground__spacing-value">{token.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════
            Radius Panel
            ════════════════════════════════════════════ */}
        <div
          className={`playground__panel${activeTab === 'radius' ? ' playground__panel--active' : ''}`}
          role="tabpanel"
          aria-label="Radius"
        >
          <h2 className="playground__section-title">Border Radius Tokens</h2>
          <p className="playground__section-description">
            Each shape uses the actual CSS variable so it responds to theme overrides.
          </p>

          <div className="playground__radius-grid">
            {radiusTokens.map(token => (
              <div key={token.name} className="playground__radius-card">
                <div
                  className="playground__radius-preview"
                  style={{ borderRadius: `var(${token.variable})` }}
                  aria-hidden="true"
                />
                <span className="playground__radius-name">var({token.variable})</span>
                <span className="playground__radius-value">{token.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════
            Shadows Panel
            ════════════════════════════════════════════ */}
        <div
          className={`playground__panel${activeTab === 'shadows' ? ' playground__panel--active' : ''}`}
          role="tabpanel"
          aria-label="Shadows"
        >
          <h2 className="playground__section-title">Shadow Presets</h2>
          <p className="playground__section-description">
            Live preview of every shadow preset. The cards use the actual CSS variable.
          </p>

          <div className="playground__shadow-grid">
            {shadowTokens.map(token => (
              <div key={token.name} className="playground__shadow-card">
                <div
                  className="playground__shadow-demo"
                  style={{ boxShadow: `var(${token.variable})` }}
                  aria-hidden="true"
                />
                <span className="playground__shadow-name">var({token.variable})</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════
            CSS Output (always visible)
            ════════════════════════════════════════════ */}
        <div className="playground__css-output">
          <h3 className="playground__css-output-title">
            Generated CSS
            {changeCount > 0 && (
              <span className="playground__change-count">{changeCount} override{changeCount !== 1 ? 's' : ''}</span>
            )}
          </h3>
          <pre className="playground__css-code">{cssSnippet}</pre>
        </div>
      </div>
    </>
  );
}