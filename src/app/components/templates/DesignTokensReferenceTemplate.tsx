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
import { Copy, Check, Palette, Type, RulerIcon, BoxSelect, Circle, Layers, Zap, Eye } from 'lucide-react';


/* ═══════════════════════════════════════════
 * Token Data Definitions
 * ═══════════════════════════════════════════ */

interface ColorToken {
  variable: string;
  label: string;
  description: string;
}

interface TypographyToken {
  variable: string;
  label: string;
  sizeHint: string;
  fontFamily: string;
}

interface SpacingToken {
  variable: string;
  px: number;
  label: string;
}

interface ShadowToken {
  variable: string;
  label: string;
  description: string;
}

interface RadiusToken {
  variable: string;
  label: string;
  value: string;
}

interface ZIndexToken {
  variable: string;
  value: number;
  label: string;
}

interface AnimationToken {
  variable: string;
  label: string;
  description: string;
  value: string;
}

interface OverlayToken {
  variable: string;
  label: string;
}

interface BorderToken {
  variable: string;
  label: string;
  value: string;
  style: string;
}

/* ─── Color Tokens ─── */
const colorTokens: ColorToken[] = [
  { variable: '--background', label: 'Background', description: 'Page background' },
  { variable: '--foreground', label: 'Foreground', description: 'Body text' },
  { variable: '--card', label: 'Card', description: 'Card / panel background' },
  { variable: '--card-foreground', label: 'Card Foreground', description: 'Text on cards' },
  { variable: '--card-hover', label: 'Card Hover', description: 'Card hover state' },
  { variable: '--primary', label: 'Primary', description: 'Brand / CTA color' },
  { variable: '--primary-foreground', label: 'Primary Foreground', description: 'Text on primary' },
  { variable: '--primary-soft', label: 'Primary Soft', description: 'Badges, tags (10%)' },
  { variable: '--primary-dark', label: 'Primary Dark', description: 'Hover state on links' },
  { variable: '--secondary', label: 'Secondary', description: 'Secondary buttons' },
  { variable: '--secondary-foreground', label: 'Secondary Foreground', description: 'Text on secondary' },
  { variable: '--muted', label: 'Muted', description: 'Disabled / subtle backgrounds' },
  { variable: '--muted-foreground', label: 'Muted Foreground', description: 'Secondary text' },
  { variable: '--accent', label: 'Accent', description: 'Hover states, active links' },
  { variable: '--accent-foreground', label: 'Accent Foreground', description: 'Text on accent' },
  { variable: '--destructive', label: 'Destructive', description: 'Error / delete' },
  { variable: '--destructive-foreground', label: 'Destructive FG', description: 'Text on destructive' },
  { variable: '--warning', label: 'Warning', description: 'Caution alerts' },
  { variable: '--warning-foreground', label: 'Warning FG', description: 'Text on warning' },
  { variable: '--success', label: 'Success', description: 'Confirmations' },
  { variable: '--success-foreground', label: 'Success FG', description: 'Text on success' },
  { variable: '--info', label: 'Info', description: 'Informational tips' },
  { variable: '--info-foreground', label: 'Info FG', description: 'Text on info' },
  { variable: '--border', label: 'Border', description: 'Input borders, dividers' },
  { variable: '--border-soft', label: 'Border Soft', description: 'Subtle card borders' },
  { variable: '--border-extra-soft', label: 'Border Extra Soft', description: 'Very subtle dividers' },
  { variable: '--input', label: 'Input', description: 'Form field background' },
  { variable: '--ring', label: 'Ring', description: 'Focus ring color' },
];

/* ─── Typography Tokens ─── */
const typographyTokens: TypographyToken[] = [
  { variable: '--text-h1', label: 'H1', sizeHint: '40px → 64px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h2', label: 'H2', sizeHint: '32px → 48px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h3', label: 'H3', sizeHint: '24px → 36px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h4', label: 'H4', sizeHint: '20px → 28px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h5', label: 'H5', sizeHint: '18px → 24px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h6', label: 'H6', sizeHint: '16px → 20px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-lead', label: 'Lead', sizeHint: '20px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-xl', label: 'XL', sizeHint: '20px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-lg', label: 'LG', sizeHint: '18px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-base', label: 'Base', sizeHint: '16px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-small', label: 'Small', sizeHint: '14px', fontFamily: 'var(--font-secondary)' },
  { variable: '--text-xs', label: 'XS', sizeHint: '12px', fontFamily: 'var(--font-secondary)' },
  { variable: '--text-2xs', label: '2XS', sizeHint: '10px', fontFamily: 'var(--font-secondary)' },
];

/* ─── Spacing Tokens ─── */
const spacingTokens: SpacingToken[] = [
  { variable: '--spacing-0', px: 0, label: '0' },
  { variable: '--spacing-1', px: 4, label: '1' },
  { variable: '--spacing-1-5', px: 6, label: '1.5' },
  { variable: '--spacing-2', px: 8, label: '2' },
  { variable: '--spacing-3', px: 12, label: '3' },
  { variable: '--spacing-4', px: 16, label: '4' },
  { variable: '--spacing-5', px: 20, label: '5' },
  { variable: '--spacing-6', px: 24, label: '6' },
  { variable: '--spacing-7', px: 28, label: '7' },
  { variable: '--spacing-8', px: 32, label: '8' },
  { variable: '--spacing-9', px: 36, label: '9' },
  { variable: '--spacing-10', px: 40, label: '10' },
  { variable: '--spacing-12', px: 48, label: '12' },
  { variable: '--spacing-14', px: 56, label: '14' },
  { variable: '--spacing-16', px: 64, label: '16' },
  { variable: '--spacing-20', px: 80, label: '20' },
  { variable: '--spacing-24', px: 96, label: '24' },
  { variable: '--spacing-32', px: 128, label: '32' },
  { variable: '--spacing-48', px: 192, label: '48' },
  { variable: '--spacing-64', px: 256, label: '64' },
];

/* ─── Shadow Tokens ─── */
const shadowTokens: ShadowToken[] = [
  { variable: '--shadow-sm', label: 'Small', description: 'Subtle elevation' },
  { variable: '--shadow-md', label: 'Medium', description: 'Card elevation' },
  { variable: '--shadow-lg', label: 'Large', description: 'Modal elevation' },
  { variable: '--shadow-xl', label: 'Extra Large', description: 'Floating element' },
  { variable: '--shadow-hover', label: 'Hover', description: 'Interactive hover' },
  { variable: '--shadow-inner', label: 'Inner', description: 'Inset shadow' },
  { variable: '--shadow-card-hover', label: 'Card Hover', description: 'Card hover state' },
  { variable: '--shadow-subtle', label: 'Subtle', description: 'Barely visible' },
  { variable: '--shadow-cta', label: 'CTA', description: 'Call-to-action button' },
  { variable: '--shadow-neon', label: 'Neon', description: 'Neon glow effect' },
  { variable: '--shadow-neon-intense', label: 'Neon Intense', description: 'Strong neon glow' },
  { variable: '--shadow-glow', label: 'Glow', description: 'Soft ambient glow' },
  { variable: '--shadow-glow-sm', label: 'Glow Small', description: 'Subtle glow' },
  { variable: '--shadow-glow-lg', label: 'Glow Large', description: 'Large ambient glow' },
  { variable: '--shadow-focus-ring', label: 'Focus Ring', description: 'Focus outline shadow' },
];

/* ─── Radius Tokens ─── */
const radiusTokens: RadiusToken[] = [
  { variable: '--radius-sm', label: 'SM', value: '2px' },
  { variable: '--radius', label: 'Default', value: '4px' },
  { variable: '--radius-md', label: 'MD', value: '6px' },
  { variable: '--radius-lg', label: 'LG', value: '8px' },
  { variable: '--radius-xl', label: 'XL', value: '12px' },
  { variable: '--radius-2xl', label: '2XL', value: '16px' },
  { variable: '--radius-full', label: 'Full', value: '9999px' },
];

/* ─── Z-Index Tokens ─── */
const zIndexTokens: ZIndexToken[] = [
  { variable: '--z-base', value: 0, label: 'Base' },
  { variable: '--z-dropdown', value: 1000, label: 'Dropdown' },
  { variable: '--z-sticky', value: 1100, label: 'Sticky' },
  { variable: '--z-fixed', value: 1200, label: 'Fixed' },
  { variable: '--z-modal-backdrop', value: 1300, label: 'Modal Backdrop' },
  { variable: '--z-modal', value: 1400, label: 'Modal' },
  { variable: '--z-popover', value: 1500, label: 'Popover' },
  { variable: '--z-tooltip', value: 1600, label: 'Tooltip' },
];

/* ─── Animation Tokens ─── */
const animationTokens: AnimationToken[] = [
  { variable: '--transition-fast', label: 'Fast', description: 'Hover states, toggles', value: '150ms' },
  { variable: '--transition-base', label: 'Base', description: 'Standard transitions', value: '200ms' },
  { variable: '--transition-slow', label: 'Slow', description: 'Expanding, collapsing', value: '300ms' },
  { variable: '--transition-slower', label: 'Slower', description: 'Page transitions, modals', value: '500ms' },
  { variable: '--ease-in-out', label: 'Ease In Out', description: 'General purpose easing', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  { variable: '--ease-out', label: 'Ease Out', description: 'Entering animations', value: 'cubic-bezier(0, 0, 0.2, 1)' },
  { variable: '--ease-in', label: 'Ease In', description: 'Exiting animations', value: 'cubic-bezier(0.4, 0, 1, 1)' },
];

/* ─── Overlay Tokens ─── */
const overlayTokens: OverlayToken[] = [
  { variable: '--overlay-subtle', label: 'Subtle (5%)' },
  { variable: '--overlay-extra-light', label: 'Extra Light (10%)' },
  { variable: '--overlay-15', label: '15%' },
  { variable: '--overlay-light', label: 'Light (20%)' },
  { variable: '--overlay-30', label: '30%' },
  { variable: '--overlay-medium', label: 'Medium (40%)' },
  { variable: '--overlay-backdrop', label: 'Backdrop (50%)' },
  { variable: '--overlay-dark', label: 'Dark (70%)' },
  { variable: '--overlay-darker', label: 'Darker (80%)' },
  { variable: '--overlay-white-soft', label: 'White Soft (10%)' },
  { variable: '--overlay-white-15', label: 'White 15%' },
  { variable: '--overlay-white-subtle', label: 'White Subtle (20%)' },
  { variable: '--overlay-white-medium', label: 'White Medium (30%)' },
  { variable: '--overlay-white-muted', label: 'White Muted (70%)' },
  { variable: '--overlay-white-heavy', label: 'White Heavy (80%)' },
  { variable: '--overlay-white-opaque', label: 'White Opaque (90%)' },
];

/* ─── Border Tokens ─── */
const borderWidthTokens: BorderToken[] = [
  { variable: '--wp--preset--border-width--1', label: '1px', value: '1px', style: 'solid' },
  { variable: '--wp--preset--border-width--2', label: '2px', value: '2px', style: 'solid' },
  { variable: '--wp--preset--border-width--4', label: '4px', value: '4px', style: 'solid' },
  { variable: '--wp--preset--border-width--8', label: '8px', value: '8px', style: 'solid' },
];

const borderStyleTokens: BorderToken[] = [
  { variable: '--wp--preset--border-style--solid', label: 'Solid', value: '2px', style: 'solid' },
  { variable: '--wp--preset--border-style--dashed', label: 'Dashed', value: '2px', style: 'dashed' },
  { variable: '--wp--preset--border-style--dotted', label: 'Dotted', value: '2px', style: 'dotted' },
  { variable: '--wp--preset--border-style--double', label: 'Double', value: '4px', style: 'double' },
];

/* ─── Section Anchors ─── */
const sections = [
  { id: 'colors', label: 'Colors', icon: <Palette size={16} /> },
  { id: 'typography', label: 'Typography', icon: <Type size={16} /> },
  { id: 'spacing', label: 'Spacing', icon: <RulerIcon size={16} /> },
  { id: 'shadows', label: 'Shadows', icon: <BoxSelect size={16} /> },
  { id: 'radius', label: 'Radius', icon: <Circle size={16} /> },
  { id: 'borders', label: 'Borders', icon: <BoxSelect size={16} /> },
  { id: 'overlays', label: 'Overlays', icon: <Eye size={16} /> },
  { id: 'zindex', label: 'Z-Index', icon: <Layers size={16} /> },
  { id: 'animations', label: 'Animations', icon: <Zap size={16} /> },
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
      ? <Check size={14} style={{ color: 'var(--success)' }} />
      : <Copy size={14} style={{ color: 'var(--muted-foreground)' }} />
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
              Click any token to copy its <code style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--primary)', background: 'var(--primary-soft)', padding: 'var(--spacing-1) var(--spacing-2)', borderRadius: 'var(--radius)' }}>var()</code> reference.
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
                  className={`tokens-ref__nav-link ${activeSection === id ? 'tokens-ref__nav-link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}
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
                    Semantic color tokens. All colors automatically switch between light and dark mode via the <code style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--primary)' }}>.dark</code> class.
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
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    Font families, fluid heading sizes, and body text scale. Headings use <code style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--primary)' }}>clamp()</code> for smooth responsive scaling.
                  </p>
                </div>

                {/* Font families */}
                <h3 className="tokens-ref__subsection-title">Font Families</h3>
                <div className="tokens-ref__font-grid">
                  <button className="tokens-ref__font-card" onClick={() => copyToken('--font-primary')} title="Copy var(--font-primary)">
                    <p className="tokens-ref__font-sample" style={{ fontFamily: 'var(--font-primary)' }}>Aa Bb Cc</p>
                    <p className="tokens-ref__font-name">--font-primary</p>
                    <p className="tokens-ref__font-desc">Lexend — Headings, body, UI</p>
                  </button>
                  <button className="tokens-ref__font-card" onClick={() => copyToken('--font-secondary')} title="Copy var(--font-secondary)">
                    <p className="tokens-ref__font-sample" style={{ fontFamily: 'var(--font-secondary)' }}>Aa Bb Cc</p>
                    <p className="tokens-ref__font-name">--font-secondary</p>
                    <p className="tokens-ref__font-desc">Manrope — Small text, metadata</p>
                  </button>
                  <button className="tokens-ref__font-card" onClick={() => copyToken('--font-mono')} title="Copy var(--font-mono)">
                    <p className="tokens-ref__font-sample" style={{ fontFamily: 'var(--font-mono)' }}>Aa Bb Cc</p>
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
                <h3 className="tokens-ref__subsection-title" style={{ marginTop: 'var(--spacing-8)' }}>Font Weights</h3>
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
                        className="tokens-ref__type-preview"
                        style={{
                          fontSize: 'var(--text-lg)',
                          fontFamily: 'var(--font-primary)',
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
                    4px base unit spacing scale. Use for padding, gap, and margin values. Maps to WordPress <code style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--primary)' }}>theme.json</code> spacing presets.
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
                <h3 className="tokens-ref__subsection-title" style={{ marginTop: 'var(--spacing-8)' }}>Semantic Aliases</h3>
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
                    Border width and style presets aligned with WordPress <code style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-small)', color: 'var(--primary)' }}>theme.json</code>.
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

                <h3 className="tokens-ref__subsection-title" style={{ marginTop: 'var(--spacing-6)' }}>Border Styles</h3>
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
                        className="tokens-ref__zindex-row"
                        onClick={() => copyToken(token.variable)}
                        title={`Copy var(${token.variable})`}
                        style={{ background: 'var(--card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius)' }}
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
                      className="tokens-ref__anim-card"
                      onClick={() => copyToken(token.variable)}
                      title={`Copy var(${token.variable})`}
                      style={{ textAlign: 'left', cursor: 'pointer', border: '1px solid var(--border-soft)' }}
                    >
                      <p className="tokens-ref__anim-label">{token.variable}</p>
                      <p className="tokens-ref__anim-desc">{token.label} — {token.description}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                        <div
                          className="tokens-ref__anim-demo"
                          style={{
                            transition: `transform ${token.value.includes('cubic') ? '300ms' : token.value} ${token.value.includes('cubic') ? token.value : 'var(--ease-in-out)'}`,
                          }}
                        />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>
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