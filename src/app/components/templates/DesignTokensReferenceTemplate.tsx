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
 * Sub-components:
 * - ColorsSection, TypographySection, SpacingSection, EffectsSections
 *
 * @see /src/styles/templates/design-tokens-reference.css
 * @split March 16, 2026 — Extracted section renderers to design-tokens-ref/TokenSections.tsx (582→~120 lines)
 */

import '../../../styles/templates/design-tokens-reference.css';
import { useState, useCallback, useRef, useEffect } from 'react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Palette, TextT, Ruler, BoundingBox, Circle, Stack, Lightning, Eye } from '@phosphor-icons/react';

import {
  colorTokens,
  typographyTokens,
  spacingTokens,
  shadowTokens,
  radiusTokens,
  animationTokens,
} from '../../data/design-tokens-reference';

import {
  ColorsSection,
  TypographySection,
  SpacingSection,
  EffectsSections,
} from './design-tokens-ref/TokenSections';

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

export function DesignTokensReferenceTemplate() {
  const [copiedVar, setCopiedVar] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('colors');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyToken = useCallback((variable: string) => {
    const text = `var(${variable})`;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedVar(variable);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopiedVar(null), 2000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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

  return (
    <>
      <BreadcrumbPart items={[
        { label: 'Home', page: 'home' },
        { label: 'Dev Tools', page: 'dev-tools' },
        { label: 'Design Tokens' },
      ]} />

      <div className="tokens-ref">
        <div className="tokens-ref__inner">

          {/* Hero */}
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

          {/* Body (sidebar + content) */}
          <div className="tokens-ref__body">

            {/* Sticky sidebar nav */}
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

            {/* Main content — section renderers */}
            <div className="tokens-ref__content">
              <ColorsSection copyToken={copyToken} copiedVar={copiedVar} />
              <TypographySection copyToken={copyToken} copiedVar={copiedVar} />
              <SpacingSection copyToken={copyToken} copiedVar={copiedVar} />
              <EffectsSections copyToken={copyToken} copiedVar={copiedVar} />
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
