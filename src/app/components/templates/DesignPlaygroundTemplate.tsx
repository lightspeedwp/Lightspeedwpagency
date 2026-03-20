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
 * Sub-components:
 * - PlaygroundPanels — Spacing, Radius, Shadows panels
 * - design-playground-data — Types + token arrays
 *
 * @split March 16, 2026 — Extracted data + panels (509→~280 lines)
 */

import '../../../styles/templates/design-playground.css';
import { useState, useCallback, useMemo } from 'react';
import { ArrowCounterClockwise, Copy, Check } from '@phosphor-icons/react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

import {
  colorTokens,
  typeFonts,
  typeWeights,
  typeSpecimens,
  tabs,
  type TabId,
} from '../../data/design-playground-data';

import { SpacingPanel, RadiusPanel, ShadowsPanel } from './design-playground/PlaygroundPanels';

export function DesignPlaygroundTemplate() {
  const [activeTab, setActiveTab] = useState<TabId>('colors');
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [previewFont, setPreviewFont] = useState("'Lexend', sans-serif");
  const [previewWeight, setPreviewWeight] = useState('500');
  const [copied, setCopied] = useState(false);

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
    for (const [k, v] of Object.entries(overrides)) { css += `  ${k}: ${v};\n`; }
    css += '}';
    return css;
  }, [overrides, changeCount]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(cssSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard API unavailable */ }
  }, [cssSnippet]);

  const overrideStyleBlock = useMemo(() => {
    if (changeCount === 0) return null;
    let css = ':root{';
    for (const [k, v] of Object.entries(overrides)) { css += `${k}:${v};`; }
    css += '}';
    return <style dangerouslySetInnerHTML={{ __html: css }} />;
  }, [overrides, changeCount]);

  return (
    <>
      {overrideStyleBlock}
      <BreadcrumbPart items={[
        { label: 'Home', page: 'home' as const },
        { label: 'Developer Tools', page: 'dev-tools' as const },
        { label: 'Design Playground' },
      ]} />

      <div className="playground">
        <div className="playground__header">
          <h1 className="playground__title">Design system playground</h1>
          <p className="playground__description">
            Experiment with the LSX design tokens in real time. Changes apply instantly
            via CSS variable overrides and are never persisted.
          </p>
        </div>

        <div className="playground__actions">
          <button type="button" className="playground__btn playground__btn--destructive" onClick={resetAll} aria-label="Reset all overrides">
            <ArrowCounterClockwise size={14} className="wp-mr-1" style={{ verticalAlign: 'middle' }} /> Reset All
          </button>
          <button type="button" className="playground__btn playground__btn--primary" onClick={handleCopy} aria-label="Copy CSS overrides">
            {copied
              ? <><Check size={14} className="wp-mr-1" style={{ verticalAlign: 'middle' }} /> Copied!</>
              : <><Copy size={14} className="wp-mr-1" style={{ verticalAlign: 'middle' }} /> Export CSS</>
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
              <button key={tab.id} role="tab" type="button" aria-selected={activeTab === tab.id}
                className={`playground__tab${activeTab === tab.id ? ' playground__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={14} className="wp-mr-1" style={{ verticalAlign: 'middle' }} /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Colors Panel */}
        <div className={`playground__panel${activeTab === 'colors' ? ' playground__panel--active' : ''}`} role="tabpanel" aria-label="Colors">
          <h2 className="playground__section-title">Color experimenter</h2>
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
                    <div className="playground__color-swatch" style={{ backgroundColor: currentValue }} />
                    <input type="color" className="playground__color-picker" value={currentValue}
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
          <div className="playground__preview">
            <h3 className="playground__preview-title">Live preview</h3>
            <div className="playground__preview-card">
              <h4 className="playground__preview-card-title">Sample card component</h4>
              <p className="playground__preview-card-text">
                This card updates in real time as you change colour tokens above.
                All borders, backgrounds, and text respond to your overrides.
              </p>
              <div className="wp-flex wp-gap-2 wp-flex-wrap">
                <span className="playground__preview-badge">Badge</span>
                <span className="playground__preview-badge">Design System</span>
              </div>
              <div className="wp-flex wp-gap-3 wp-mt-4">
                <button type="button" className="playground__preview-btn">Primary Button</button>
                <button type="button" className="playground__preview-btn playground__preview-btn--outline">Outline</button>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Panel */}
        <div className={`playground__panel${activeTab === 'typography' ? ' playground__panel--active' : ''}`} role="tabpanel" aria-label="Typography">
          <h2 className="playground__section-title">Typography experimenter</h2>
          <p className="playground__section-description">
            Preview different font families, weights, and the full type scale.
          </p>
          <div className="playground__type-controls">
            <div className="playground__type-control">
              <label className="playground__type-label" htmlFor="font-family-select">Font Family</label>
              <select id="font-family-select" className="playground__type-select" value={previewFont} onChange={e => setPreviewFont(e.target.value)}>
                {typeFonts.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
              </select>
            </div>
            <div className="playground__type-control">
              <label className="playground__type-label" htmlFor="font-weight-select">Weight</label>
              <select id="font-weight-select" className="playground__type-select" value={previewWeight} onChange={e => setPreviewWeight(e.target.value)}>
                {typeWeights.map(w => <option key={w.value} value={w.value}>{w.label}</option>)}
              </select>
            </div>
          </div>
          <div className="playground__type-preview">
            {typeSpecimens.map(specimen => (
              <div key={specimen.label} className="playground__type-specimen">
                <span className="playground__type-specimen-label">{specimen.label}</span>
                <p className="playground__type-specimen-text" style={{ fontFamily: previewFont, fontWeight: previewWeight, fontSize: specimen.size }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Extracted panels */}
        <SpacingPanel activeTab={activeTab} />
        <RadiusPanel activeTab={activeTab} />
        <ShadowsPanel activeTab={activeTab} />

        {/* CSS Output */}
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