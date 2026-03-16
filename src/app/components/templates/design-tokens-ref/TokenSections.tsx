/**
 * Design Tokens Reference — Section Renderers
 *
 * Individual token display sections extracted from DesignTokensReferenceTemplate
 * for file size compliance (max 300 lines per .tsx).
 *
 * @split March 16, 2026
 */

import { Copy, Check } from '@phosphor-icons/react';
import {
  colorTokens,
  typographyTokens,
  spacingTokens,
  shadowTokens,
  radiusTokens,
  zIndexTokens,
  animationTokens,
  overlayTokens,
  borderWidthTokens,
  borderStyleTokens,
} from '../../../data/design-tokens-reference';

interface SectionProps {
  copyToken: (variable: string) => void;
  copiedVar: string | null;
}

function CopyIcon({ variable, copiedVar }: { variable: string; copiedVar: string | null }) {
  return copiedVar === variable
    ? <Check size={14} className="wp-text-success" />
    : <Copy size={14} className="wp-text-muted-foreground" />;
}

/** Colors */
export function ColorsSection({ copyToken, copiedVar }: SectionProps) {
  return (
    <div id="colors" className="tokens-ref__section">
      <div className="tokens-ref__section-header">
        <h2 className="tokens-ref__section-title">Colors</h2>
        <p className="tokens-ref__section-desc">
          Semantic color tokens. All colors automatically switch between light and dark mode via the <code className="wp-font-mono wp-text-sm wp-text-primary">.dark</code> class.
        </p>
      </div>
      <div className="tokens-ref__color-grid">
        {colorTokens.map((token) => (
          <button
            key={token.variable}
            className="tokens-ref__color-card"
            onClick={() => copyToken(token.variable)}
            title={`Copy var(${token.variable})`}
            style={{ border: copiedVar === token.variable ? '1px solid var(--primary)' : undefined }}
          >
            <div className="tokens-ref__color-swatch" style={{ backgroundColor: `var(${token.variable})` }} />
            <div className="tokens-ref__color-info">
              <div className="wp-flex wp-justify-between wp-items-center">
                <p className="tokens-ref__color-name">{token.variable}</p>
                <CopyIcon variable={token.variable} copiedVar={copiedVar} />
              </div>
              <p className="tokens-ref__color-value">{token.label} — {token.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Typography */
export function TypographySection({ copyToken }: SectionProps) {
  const fontWeights = [
    { variable: '--font-weight-light', label: 'Light', value: '300' },
    { variable: '--font-weight-regular', label: 'Regular', value: '400' },
    { variable: '--font-weight-medium', label: 'Medium', value: '500' },
    { variable: '--font-weight-semibold', label: 'Semibold', value: '600' },
    { variable: '--font-weight-bold', label: 'Bold', value: '700' },
    { variable: '--font-weight-black', label: 'Black', value: '800' },
  ];

  return (
    <div id="typography" className="tokens-ref__section">
      <div className="tokens-ref__section-header">
        <h2 className="tokens-ref__section-title">Typography</h2>
        <p className="tokens-ref__section-desc">
          Font families, fluid heading sizes, and body text scale. Headings use <code className="wp-font-mono wp-text-sm wp-text-primary">clamp()</code> for smooth responsive scaling.
        </p>
      </div>

      <h3 className="tokens-ref__subsection-title">Font Families</h3>
      <div className="tokens-ref__font-grid">
        <button className="tokens-ref__font-card" onClick={() => copyToken('--font-primary')} title="Copy var(--font-primary)">
          <p className="tokens-ref__font-sample wp-font-primary">Aa Bb Cc</p>
          <p className="tokens-ref__font-name">--font-primary</p>
          <p className="tokens-ref__font-desc">Lexend — Headings, body, UI</p>
        </button>
        <button className="tokens-ref__font-card" onClick={() => copyToken('--font-secondary')} title="Copy var(--font-secondary)">
          <p className="tokens-ref__font-sample wp-font-secondary">Aa Bb Cc</p>
          <p className="tokens-ref__font-name">--font-secondary</p>
          <p className="tokens-ref__font-desc">Manrope — Small text, metadata</p>
        </button>
        <button className="tokens-ref__font-card" onClick={() => copyToken('--font-mono')} title="Copy var(--font-mono)">
          <p className="tokens-ref__font-sample wp-font-mono">Aa Bb Cc</p>
          <p className="tokens-ref__font-name">--font-mono</p>
          <p className="tokens-ref__font-desc">Monospace — Code, preformatted</p>
        </button>
      </div>

      <h3 className="tokens-ref__subsection-title">Type Scale</h3>
      <div className="tokens-ref__type-grid">
        {typographyTokens.map((token) => (
          <button key={token.variable} className="tokens-ref__type-row" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable})`}>
            <div className="tokens-ref__type-meta">
              <span className="tokens-ref__type-var">{token.variable}</span>
              <span className="tokens-ref__type-size">{token.sizeHint}</span>
            </div>
            <p className="tokens-ref__type-preview" style={{ fontSize: `var(${token.variable})`, fontFamily: token.fontFamily, fontWeight: token.variable.includes('h') ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)' }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </button>
        ))}
      </div>

      <h3 className="tokens-ref__subsection-title wp-mt-8">Font Weights</h3>
      <div className="tokens-ref__type-grid">
        {fontWeights.map((w) => (
          <button key={w.variable} className="tokens-ref__type-row" onClick={() => copyToken(w.variable)} title={`Copy var(${w.variable})`}>
            <div className="tokens-ref__type-meta">
              <span className="tokens-ref__type-var">{w.variable}</span>
              <span className="tokens-ref__type-size">{w.value}</span>
            </div>
            <p className="tokens-ref__type-preview wp-font-primary wp-text-lg" style={{ fontWeight: `var(${w.variable})` }}>
              {w.label} — {w.value}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Spacing */
export function SpacingSection({ copyToken }: SectionProps) {
  const maxSpacing = 256;
  const semanticAliases = [
    { variable: '--spacing-xs', px: 8, alias: '--spacing-2' },
    { variable: '--spacing-sm', px: 16, alias: '--spacing-4' },
    { variable: '--spacing-md', px: 24, alias: '--spacing-6' },
    { variable: '--spacing-lg', px: 32, alias: '--spacing-8' },
    { variable: '--spacing-xl', px: 48, alias: '--spacing-12' },
    { variable: '--spacing-2xl', px: 64, alias: '--spacing-16' },
    { variable: '--spacing-3xl', px: 96, alias: '--spacing-24' },
    { variable: '--spacing-4xl', px: 128, alias: '--spacing-32' },
  ];

  return (
    <div id="spacing" className="tokens-ref__section">
      <div className="tokens-ref__section-header">
        <h2 className="tokens-ref__section-title">Spacing</h2>
        <p className="tokens-ref__section-desc">
          4px base unit spacing scale. Use for padding, gap, and margin values. Maps to WordPress <code className="wp-font-mono wp-text-sm wp-text-primary">theme.json</code> spacing presets.
        </p>
      </div>
      <div className="tokens-ref__spacing-grid">
        {spacingTokens.map((token) => (
          <button key={token.variable} className="tokens-ref__spacing-row" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable})`}>
            <span className="tokens-ref__spacing-var">{token.variable}</span>
            <div className="tokens-ref__spacing-bar-wrap">
              <div className="tokens-ref__spacing-bar" style={{ width: `${Math.max((token.px / maxSpacing) * 100, 1)}%` }} />
            </div>
            <span className="tokens-ref__spacing-px">{token.px}px</span>
          </button>
        ))}
      </div>

      <h3 className="tokens-ref__subsection-title wp-mt-8">Semantic Aliases</h3>
      <div className="tokens-ref__spacing-grid">
        {semanticAliases.map((token) => (
          <button key={token.variable} className="tokens-ref__spacing-row" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable}) → ${token.alias}`}>
            <span className="tokens-ref__spacing-var">{token.variable}</span>
            <div className="tokens-ref__spacing-bar-wrap">
              <div className="tokens-ref__spacing-bar" style={{ width: `${Math.max((token.px / maxSpacing) * 100, 1)}%`, opacity: 0.7 }} />
            </div>
            <span className="tokens-ref__spacing-px">{token.px}px</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Shadows, Radius, Borders, Overlays, Z-Index, Animations */
export function EffectsSections({ copyToken }: SectionProps) {
  return (
    <>
      {/* Shadows */}
      <div id="shadows" className="tokens-ref__section">
        <div className="tokens-ref__section-header">
          <h2 className="tokens-ref__section-title">Shadows</h2>
          <p className="tokens-ref__section-desc">Elevation and glow shadow presets. Includes standard elevation shadows, neon effects, and focus ring shadows.</p>
        </div>
        <div className="tokens-ref__shadow-grid">
          {shadowTokens.map((token) => (
            <button key={token.variable} className="tokens-ref__shadow-card" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable})`}>
              <div className="tokens-ref__shadow-preview" style={{ boxShadow: `var(${token.variable})` }} />
              <p className="tokens-ref__shadow-name">{token.variable}</p>
              <p className="tokens-ref__shadow-desc">{token.label} — {token.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Radius */}
      <div id="radius" className="tokens-ref__section">
        <div className="tokens-ref__section-header">
          <h2 className="tokens-ref__section-title">Border Radius</h2>
          <p className="tokens-ref__section-desc">Consistent border radius scale from subtle rounding to fully circular shapes.</p>
        </div>
        <div className="tokens-ref__radius-grid">
          {radiusTokens.map((token) => (
            <button key={token.variable} className="tokens-ref__radius-card" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable})`}>
              <div className="tokens-ref__radius-shape" style={{ borderRadius: `var(${token.variable})` }} />
              <p className="tokens-ref__radius-name">{token.label}</p>
              <p className="tokens-ref__radius-value">{token.variable} ({token.value})</p>
            </button>
          ))}
        </div>
      </div>

      {/* Borders */}
      <div id="borders" className="tokens-ref__section">
        <div className="tokens-ref__section-header">
          <h2 className="tokens-ref__section-title">Borders</h2>
          <p className="tokens-ref__section-desc">Border width and style presets aligned with WordPress <code className="wp-font-mono wp-text-sm wp-text-primary">theme.json</code>.</p>
        </div>
        <h3 className="tokens-ref__subsection-title">Border Widths</h3>
        <div className="tokens-ref__border-grid">
          {borderWidthTokens.map((token) => (
            <button key={token.variable} className="tokens-ref__border-card" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable})`}>
              <div className="tokens-ref__border-meta">
                <p className="tokens-ref__border-name">{token.variable}</p>
                <p className="tokens-ref__border-value">{token.label} {token.style}</p>
              </div>
              <div className="tokens-ref__border-sample" style={{ borderBottom: `${token.value} ${token.style} var(--foreground)` }} />
            </button>
          ))}
        </div>
        <h3 className="tokens-ref__subsection-title wp-mt-6">Border Styles</h3>
        <div className="tokens-ref__border-grid">
          {borderStyleTokens.map((token) => (
            <button key={token.variable} className="tokens-ref__border-card" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable})`}>
              <div className="tokens-ref__border-meta">
                <p className="tokens-ref__border-name">{token.variable}</p>
                <p className="tokens-ref__border-value">{token.label}</p>
              </div>
              <div className="tokens-ref__border-sample" style={{ borderBottom: `${token.value} ${token.style} var(--foreground)` }} />
            </button>
          ))}
        </div>
      </div>

      {/* Overlays */}
      <div id="overlays" className="tokens-ref__section">
        <div className="tokens-ref__section-header">
          <h2 className="tokens-ref__section-title">Overlays</h2>
          <p className="tokens-ref__section-desc">Semi-transparent overlay values for backdrops, modals, and glass effects. Shown on a checkerboard to reveal opacity.</p>
        </div>
        <div className="tokens-ref__overlay-grid">
          {overlayTokens.map((token) => (
            <button key={token.variable} className="tokens-ref__overlay-card" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable})`}>
              <div className="tokens-ref__overlay-preview">
                <div className="tokens-ref__overlay-swatch" style={{ backgroundColor: `var(${token.variable})` }} />
              </div>
              <p className="tokens-ref__overlay-name">{token.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Z-Index */}
      <div id="zindex" className="tokens-ref__section">
        <div className="tokens-ref__section-header">
          <h2 className="tokens-ref__section-title">Z-Index Scale</h2>
          <p className="tokens-ref__section-desc">Layering scale for stacking context management. Higher values render on top.</p>
        </div>
        <div className="tokens-ref__zindex-stack">
          {[...zIndexTokens].reverse().map((token) => {
            const maxZ = 1600;
            const pct = Math.max((token.value / maxZ) * 100, 2);
            const hue = (token.value / maxZ) * 240;
            return (
              <button key={token.variable} className="tokens-ref__zindex-row wp-bg-card wp-border wp-border-soft wp-rounded" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable})`}>
                <span className="tokens-ref__zindex-var">{token.variable}</span>
                <div className="tokens-ref__zindex-bar-wrap">
                  <div className="tokens-ref__zindex-bar" style={{ width: `${pct}%`, background: `hsl(${hue}, 70%, 55%)` }} />
                </div>
                <span className="tokens-ref__zindex-value">{token.value}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <div id="animations" className="tokens-ref__section">
        <div className="tokens-ref__section-header">
          <h2 className="tokens-ref__section-title">Animation Tokens</h2>
          <p className="tokens-ref__section-desc">Duration and easing presets for transitions and animations. Hover over each card to preview the timing.</p>
        </div>
        <div className="tokens-ref__anim-grid">
          {animationTokens.map((token) => (
            <button key={token.variable} className="tokens-ref__anim-card wp-text-left wp-cursor-pointer wp-border wp-border-soft" onClick={() => copyToken(token.variable)} title={`Copy var(${token.variable})`}>
              <p className="tokens-ref__anim-label">{token.variable}</p>
              <p className="tokens-ref__anim-desc">{token.label} — {token.description}</p>
              <div className="wp-flex wp-items-center wp-gap-4">
                <div className="tokens-ref__anim-demo" style={{ transition: `transform ${token.value.includes('cubic') ? '300ms' : token.value} ${token.value.includes('cubic') ? token.value : 'var(--ease-in-out)'}` }} />
                <span className="wp-font-mono wp-text-xs wp-text-muted-foreground">{token.value}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
