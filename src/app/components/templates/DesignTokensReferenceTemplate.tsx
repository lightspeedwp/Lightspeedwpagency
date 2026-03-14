/**
 * Design Tokens Reference Template
 *
 * Single-page reference of all CSS custom properties used in the LSX Design System.
 * Displays colors, typography, spacing, shadows, radii, overlays, z-index, and animations
 * as live-rendered previews with copy-to-clipboard.
 *
 * WordPress template: page-design-tokens.html
 * BEM naming: .tokens-ref-*
 * 100% CSS variables — no Tailwind.
 *
 * @see /src/styles/templates/design-tokens-reference.css
 * @see /src/styles/theme-base.css — Shared tokens
 * @see /src/styles/theme-light.css — Light mode colors
 * @see /src/styles/theme-dark.css — Dark mode colors
 */

import '../../../styles/templates/design-tokens-reference.css';
import { useState, useCallback, useRef, useEffect } from 'react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Copy, Check, Palette, TextT, Ruler, BoundingBox, Circle, Stack, Lightning, Eye } from '@phosphor-icons/react';

/* ═══════════════════════════════════════════
 * Token Data Definitions
 * ═══════════════════════════════════════════ */

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
} from '../../data/design-tokens-reference';

/* ─── Section Anchors ─── */
const sections = [
  { id: 'colors', label: 'Colors', icon: <Palette size={16} /> },
  { id: 'typography', label: 'Typography', icon: <TextT size={16} /> },
  { id: 'spacing', label: 'Spacing', icon: <Ruler size={16} /> },
  { id: 'shadows', label: 'Shadows', icon: <BoundingBox size={16} /> },
  { id: 'radius', label: 'Radius', icon: <Circle size={16} /> },
  { id: 'borders', label: 'Borders', icon: <BoundingBox size={16} /> },
  { id: 'overlays', label: 'Overlays', icon: <Eye size={16} /> },
  { id: 'zindex', label: 'Z-Index', icon: <Stack size={16} /> },
  { id: 'animations', label: 'Animations', icon: <Lightning size={16} /> },
];

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function DesignTokensReferenceTemplate() {
  const [copiedVar, setCopiedVar] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('colors');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Copy a CSS variable reference to clipboard */
  const copyToken = useCallback((variable: string) => {
    const text = `var(${variable})`;
    navigator.clipboard.writeText(text).catch(() => {
      /* Fallback for environments without clipboard API */
    });
    setCopiedVar(variable);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopiedVar(null), 2000);
  }, []);

  /** Scroll spy for sidebar navigation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /** Get the live computed value of a CSS variable */
  const getComputedVar = useCallback((variable: string): string => {
    if (typeof window === 'undefined') return '';
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  }, []);

  const breadcrumbs = [
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Design Tokens' },
  ];

  const maxSpacing = 256; // max px for bar width calculation

  const CopyIcon = ({ variable }: { variable: string }) => (
    copiedVar === variable
      ? <Check size={14} className="wp-text-success" />
      : <Copy size={14} className="wp-text-muted-foreground" />
  );

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart items={breadcrumbs} />

      <div className="tokens-ref">
        <div className="tokens-ref__inner">

          {/* ── Hero ── */}
          <div className="tokens-ref__hero">
            <h1 className="tokens-ref__title">Design Tokens Reference</h1>
            <p className="tokens-ref__subtitle">
              Complete reference of all CSS custom properties in the LSX Design System.
              Click any token to copy its <code className="wp-font-mono wp-text-sm wp-text-primary wp-bg-primary/10 wp-px-2 wp-py-1 wp-rounded">var()</code> reference.
            </p>
            <div className="tokens-ref__stats">
              <div className="tokens-ref__stat">
                <div className="tokens-ref__stat-value">{colorTokens.length}</div>
                <div className="tokens-ref__stat-label">Colors</div>
              </div>
              <div className="tokens-ref__stat">
                <div className="tokens-ref__stat-value">{typographyTokens.length + 3}</div>
                <div className="tokens-ref__stat-label">Typography</div>
              </div>
              <div className="tokens-ref__stat">
                <div className="tokens-ref__stat-value">{spacingTokens.length}</div>
                <div className="tokens-ref__stat-label">Spacing</div>
              </div>
              <div className="tokens-ref__stat">
                <div className="tokens-ref__stat-value">{shadowTokens.length + radiusTokens.length + animationTokens.length}</div>
                <div className="tokens-ref__stat-label">Effects</div>
              </div>
            </div>
          </div>

          {/* ── Body (sidebar + content) ── */}
          <div className="tokens-ref__body">

            {/* Sticky sidebar nav (desktop only) */}
            <nav className="tokens-ref__nav" aria-label="Token sections">
              {sections.map(({ id, label, icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`tokens-ref__nav-link wp-flex wp-items-center wp-gap-2 ${activeSection === id ? 'tokens-ref__nav-link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </nav>

            {/* Main content */}
            <div className="tokens-ref__content">

              {/* ═══ COLORS ═══ */}
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
                      <div
                        className="tokens-ref__color-swatch"
                        style={{ backgroundColor: `var(${token.variable})` }}
                      />
                      <div className="tokens-ref__color-info">
                        <div className="wp-flex wp-justify-between wp-items-center">
                          <p className="tokens-ref__color-name">{token.variable}</p>
                          <CopyIcon variable={token.variable} />
                        </div>
                        <p className="tokens-ref__color-value">{token.label} — {token.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* ═══ TYPOGRAPHY ═══ */}
              <div id="typography" className="tokens-ref__section">
                <div className="tokens-ref__section-header">
                  <h2 className="tokens-ref__section-title">Typography</h2>
                  <p className="tokens-ref__section-desc">
                    Font families, fluid heading sizes, and body text scale. Headings use <code className="wp-font-mono wp-text-sm wp-text-primary">clamp()</code> for smooth responsive scaling.
                  </p>
                </div>

                {/* Font families */}
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

                {/* Type scale */}
                <h3 className="tokens-ref__subsection-title">Type Scale</h3>
                <div className="tokens-ref__type-grid">
                  {typographyTokens.map((token) => (
                    <button
                      key={token.variable}
                      className="tokens-ref__type-row"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable})`}
                    >
                      <div className="tokens-ref__type-meta">
                        <span className="tokens-ref__type-var">{token.variable}</span>
                        <span className="tokens-ref__type-size">{token.sizeHint}</span>
                      </div>
                      <p
                        className="tokens-ref__type-preview"
                        style={{
                          fontSize: `var(${token.variable})`,
                          fontFamily: token.fontFamily,
                          fontWeight: token.variable.includes('h') ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
                        }}
                      >
                        The quick brown fox jumps over the lazy dog
                      </p>
                    </button>
                  ))}
                </div>

                {/* Font weights */}
                <h3 className="tokens-ref__subsection-title wp-mt-8">Font Weights</h3>
                <div className="tokens-ref__type-grid">
                  {[
                    { variable: '--font-weight-light', label: 'Light', value: '300' },
                    { variable: '--font-weight-regular', label: 'Regular', value: '400' },
                    { variable: '--font-weight-medium', label: 'Medium', value: '500' },
                    { variable: '--font-weight-semibold', label: 'Semibold', value: '600' },
                    { variable: '--font-weight-bold', label: 'Bold', value: '700' },
                    { variable: '--font-weight-black', label: 'Black', value: '800' },
                  ].map((w) => (
                    <button
                      key={w.variable}
                      className="tokens-ref__type-row"
                      onClick={() => copyToken(w.variable)}
                      title={`Copy var(${w.variable})`}
                    >
                      <div className="tokens-ref__type-meta">
                        <span className="tokens-ref__type-var">{w.variable}</span>
                        <span className="tokens-ref__type-size">{w.value}</span>
                      </div>
                      <p
                        className="tokens-ref__type-preview wp-font-primary wp-text-lg"
                        style={{
                          fontWeight: `var(${w.variable})`,
                        }}
                      >
                        {w.label} — {w.value}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* ═══ SPACING ═══ */}
              <div id="spacing" className="tokens-ref__section">
                <div className="tokens-ref__section-header">
                  <h2 className="tokens-ref__section-title">Spacing</h2>
                  <p className="tokens-ref__section-desc">
                    4px base unit spacing scale. Use for padding, gap, and margin values. Maps to WordPress <code className="wp-font-mono wp-text-sm wp-text-primary">theme.json</code> spacing presets.
                  </p>
                </div>
                <div className="tokens-ref__spacing-grid">
                  {spacingTokens.map((token) => (
                    <button
                      key={token.variable}
                      className="tokens-ref__spacing-row"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable})`}
                    >
                      <span className="tokens-ref__spacing-var">{token.variable}</span>
                      <div className="tokens-ref__spacing-bar-wrap">
                        <div
                          className="tokens-ref__spacing-bar"
                          style={{ width: `${Math.max((token.px / maxSpacing) * 100, 1)}%` }}
                        />
                      </div>
                      <span className="tokens-ref__spacing-px">{token.px}px</span>
                    </button>
                  ))}
                </div>

                {/* Semantic aliases */}
                <h3 className="tokens-ref__subsection-title wp-mt-8">Semantic Aliases</h3>
                <div className="tokens-ref__spacing-grid">
                  {[
                    { variable: '--spacing-xs', px: 8, alias: '--spacing-2' },
                    { variable: '--spacing-sm', px: 16, alias: '--spacing-4' },
                    { variable: '--spacing-md', px: 24, alias: '--spacing-6' },
                    { variable: '--spacing-lg', px: 32, alias: '--spacing-8' },
                    { variable: '--spacing-xl', px: 48, alias: '--spacing-12' },
                    { variable: '--spacing-2xl', px: 64, alias: '--spacing-16' },
                    { variable: '--spacing-3xl', px: 96, alias: '--spacing-24' },
                    { variable: '--spacing-4xl', px: 128, alias: '--spacing-32' },
                  ].map((token) => (
                    <button
                      key={token.variable}
                      className="tokens-ref__spacing-row"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable}) → ${token.alias}`}
                    >
                      <span className="tokens-ref__spacing-var">{token.variable}</span>
                      <div className="tokens-ref__spacing-bar-wrap">
                        <div
                          className="tokens-ref__spacing-bar"
                          style={{
                            width: `${Math.max((token.px / maxSpacing) * 100, 1)}%`,
                            opacity: 0.7,
                          }}
                        />
                      </div>
                      <span className="tokens-ref__spacing-px">{token.px}px</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* ═══ SHADOWS ═══ */}
              <div id="shadows" className="tokens-ref__section">
                <div className="tokens-ref__section-header">
                  <h2 className="tokens-ref__section-title">Shadows</h2>
                  <p className="tokens-ref__section-desc">
                    Elevation and glow shadow presets. Includes standard elevation shadows, neon effects, and focus ring shadows.
                  </p>
                </div>
                <div className="tokens-ref__shadow-grid">
                  {shadowTokens.map((token) => (
                    <button
                      key={token.variable}
                      className="tokens-ref__shadow-card"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable})`}
                    >
                      <div
                        className="tokens-ref__shadow-preview"
                        style={{ boxShadow: `var(${token.variable})` }}
                      />
                      <p className="tokens-ref__shadow-name">{token.variable}</p>
                      <p className="tokens-ref__shadow-desc">{token.label} — {token.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* ═══ RADIUS ═══ */}
              <div id="radius" className="tokens-ref__section">
                <div className="tokens-ref__section-header">
                  <h2 className="tokens-ref__section-title">Border Radius</h2>
                  <p className="tokens-ref__section-desc">
                    Consistent border radius scale from subtle rounding to fully circular shapes.
                  </p>
                </div>
                <div className="tokens-ref__radius-grid">
                  {radiusTokens.map((token) => (
                    <button
                      key={token.variable}
                      className="tokens-ref__radius-card"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable})`}
                    >
                      <div
                        className="tokens-ref__radius-shape"
                        style={{ borderRadius: `var(${token.variable})` }}
                      />
                      <p className="tokens-ref__radius-name">{token.label}</p>
                      <p className="tokens-ref__radius-value">{token.variable} ({token.value})</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* ═══ BORDERS ═══ */}
              <div id="borders" className="tokens-ref__section">
                <div className="tokens-ref__section-header">
                  <h2 className="tokens-ref__section-title">Borders</h2>
                  <p className="tokens-ref__section-desc">
                    Border width and style presets aligned with WordPress <code className="wp-font-mono wp-text-sm wp-text-primary">theme.json</code>.
                  </p>
                </div>

                <h3 className="tokens-ref__subsection-title">Border Widths</h3>
                <div className="tokens-ref__border-grid">
                  {borderWidthTokens.map((token) => (
                    <button
                      key={token.variable}
                      className="tokens-ref__border-card"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable})`}
                    >
                      <div className="tokens-ref__border-meta">
                        <p className="tokens-ref__border-name">{token.variable}</p>
                        <p className="tokens-ref__border-value">{token.label} {token.style}</p>
                      </div>
                      <div
                        className="tokens-ref__border-sample"
                        style={{
                          borderBottom: `${token.value} ${token.style} var(--foreground)`,
                        }}
                      />
                    </button>
                  ))}
                </div>

                <h3 className="tokens-ref__subsection-title wp-mt-6">Border Styles</h3>
                <div className="tokens-ref__border-grid">
                  {borderStyleTokens.map((token) => (
                    <button
                      key={token.variable}
                      className="tokens-ref__border-card"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable})`}
                    >
                      <div className="tokens-ref__border-meta">
                        <p className="tokens-ref__border-name">{token.variable}</p>
                        <p className="tokens-ref__border-value">{token.label}</p>
                      </div>
                      <div
                        className="tokens-ref__border-sample"
                        style={{
                          borderBottom: `${token.value} ${token.style} var(--foreground)`,
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* ═══ OVERLAYS ═══ */}
              <div id="overlays" className="tokens-ref__section">
                <div className="tokens-ref__section-header">
                  <h2 className="tokens-ref__section-title">Overlays</h2>
                  <p className="tokens-ref__section-desc">
                    Semi-transparent overlay values for backdrops, modals, and glass effects. Shown on a checkerboard to reveal opacity.
                  </p>
                </div>
                <div className="tokens-ref__overlay-grid">
                  {overlayTokens.map((token) => (
                    <button
                      key={token.variable}
                      className="tokens-ref__overlay-card"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable})`}
                    >
                      <div className="tokens-ref__overlay-preview">
                        <div
                          className="tokens-ref__overlay-swatch"
                          style={{ backgroundColor: `var(${token.variable})` }}
                        />
                      </div>
                      <p className="tokens-ref__overlay-name">{token.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* ═══ Z-INDEX ═══ */}
              <div id="zindex" className="tokens-ref__section">
                <div className="tokens-ref__section-header">
                  <h2 className="tokens-ref__section-title">Z-Index Scale</h2>
                  <p className="tokens-ref__section-desc">
                    Layering scale for stacking context management. Higher values render on top.
                  </p>
                </div>
                <div className="tokens-ref__zindex-stack">
                  {[...zIndexTokens].reverse().map((token) => {
                    const maxZ = 1600;
                    const pct = Math.max((token.value / maxZ) * 100, 2);
                    const hue = (token.value / maxZ) * 240; // blue → violet gradient
                    return (
                      <button
                        key={token.variable}
                        className="tokens-ref__zindex-row wp-bg-card wp-border wp-border-soft wp-rounded"
                        onClick={() => copyToken(token.variable)}
                        title={`Copy var(${token.variable})`}
                      >
                        <span className="tokens-ref__zindex-var">{token.variable}</span>
                        <div className="tokens-ref__zindex-bar-wrap">
                          <div
                            className="tokens-ref__zindex-bar"
                            style={{
                              width: `${pct}%`,
                              background: `hsl(${hue}, 70%, 55%)`,
                            }}
                          />
                        </div>
                        <span className="tokens-ref__zindex-value">{token.value}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ═══ ANIMATIONS ═══ */}
              <div id="animations" className="tokens-ref__section">
                <div className="tokens-ref__section-header">
                  <h2 className="tokens-ref__section-title">Animation Tokens</h2>
                  <p className="tokens-ref__section-desc">
                    Duration and easing presets for transitions and animations. Hover over each card to preview the timing.
                  </p>
                </div>
                <div className="tokens-ref__anim-grid">
                  {animationTokens.map((token) => (
                    <button
                      key={token.variable}
                      className="tokens-ref__anim-card wp-text-left wp-cursor-pointer wp-border wp-border-soft"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable})`}
                    >
                      <p className="tokens-ref__anim-label">{token.variable}</p>
                      <p className="tokens-ref__anim-desc">{token.label} — {token.description}</p>
                      <div className="wp-flex wp-items-center wp-gap-4">
                        <div
                          className="tokens-ref__anim-demo"
                          style={{
                            transition: `transform ${token.value.includes('cubic') ? '300ms' : token.value} ${token.value.includes('cubic') ? token.value : 'var(--ease-in-out)'}`,
                          }}
                        />
                        <span className="wp-font-mono wp-text-xs wp-text-muted-foreground">
                          {token.value}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Copy toast */}
      <div className={`tokens-ref__toast ${copiedVar ? 'tokens-ref__toast--visible' : ''}`}>
        Copied: var({copiedVar})
      </div>
    </>
  );
}

export default DesignTokensReferenceTemplate;