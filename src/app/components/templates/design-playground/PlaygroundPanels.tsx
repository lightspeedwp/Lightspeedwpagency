/**
 * Design Playground — Spacing, Radius & Shadows Panels
 *
 * Extracted from DesignPlaygroundTemplate for file size compliance.
 *
 * @split March 16, 2026
 */

import type { TabId } from '../../../data/design-playground-data';
import { spacingTokens, radiusTokens, shadowTokens } from '../../../data/design-playground-data';

interface PanelProps {
  activeTab: TabId;
}

export function SpacingPanel({ activeTab }: PanelProps) {
  const maxPx = 128;
  return (
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
  );
}

export function RadiusPanel({ activeTab }: PanelProps) {
  return (
    <div
      className={`playground__panel${activeTab === 'radius' ? ' playground__panel--active' : ''}`}
      role="tabpanel"
      aria-label="Radius"
    >
      <h2 className="playground__section-title">Border radius tokens</h2>
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
  );
}

export function ShadowsPanel({ activeTab }: PanelProps) {
  return (
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
  );
}