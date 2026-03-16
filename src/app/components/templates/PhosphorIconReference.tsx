/**
 * Phosphor Icon Reference — DevTools Page
 *
 * Lists all Phosphor icons needed for the Lucide -> Phosphor migration.
 * Shows all 6 weight variants, search/filter, copy-to-clipboard.
 *
 * Data extracted to /src/app/data/phosphor-icon-data.ts
 *
 * @see /guidelines/design-tokens/iconography.md
 * @see /reports/2026-03/phosphor-icon-audit.md
 */

import '@/styles/templates/phosphor-icon-reference.css';
import { useState, useMemo, useCallback } from 'react';
import { Lightning, MagnifyingGlass } from '@phosphor-icons/react';
import type { IconWeight } from '@phosphor-icons/react';
import {
  ICON_DATA,
  WEIGHTS,
  SAMPLE_ICONS_FOR_COMPARISON,
  type IconEntry,
} from '../../data/phosphor-icon-data';

export function PhosphorIconReference() {
  const [search, setSearch] = useState('');
  const [activeWeight, setActiveWeight] = useState<IconWeight>('regular');
  const [iconSize, setIconSize] = useState(28);
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // Group icons by category
  const categories = useMemo(() => {
    const filtered = ICON_DATA.filter(icon =>
      icon.phosphorName.toLowerCase().includes(search.toLowerCase()) ||
      icon.lucideName.toLowerCase().includes(search.toLowerCase()) ||
      icon.category.toLowerCase().includes(search.toLowerCase())
    );

    const grouped: Record<string, IconEntry[]> = {};
    filtered.forEach(icon => {
      if (!grouped[icon.category]) grouped[icon.category] = [];
      grouped[icon.category].push(icon);
    });

    return Object.entries(grouped).sort(([, a], [, b]) =>
      b.reduce((s, i) => s + i.usageCount, 0) - a.reduce((s, i) => s + i.usageCount, 0)
    );
  }, [search]);

  const totalIcons = ICON_DATA.length;
  const totalUsages = ICON_DATA.reduce((sum, i) => sum + i.usageCount, 0);

  const handleCopy = useCallback((icon: IconEntry) => {
    const importStr = `import { ${icon.phosphorName} } from '@phosphor-icons/react';`;
    navigator.clipboard.writeText(importStr).catch(() => {});
    setCopiedIcon(icon.phosphorName);
    setTimeout(() => setCopiedIcon(null), 2000);
  }, []);

  return (
    <div className="phosphor-ref">
      {/* Hero */}
      <section className="phosphor-ref__hero">
        <div className="phosphor-ref__hero-inner">
          <div className="phosphor-ref__hero-badge">
            <Lightning size={14} weight="fill" aria-hidden="true" />
            DevTools
          </div>
          <h1 className="phosphor-ref__hero-title">
            Phosphor Icon Reference
          </h1>
          <p className="phosphor-ref__hero-desc">
            Complete Lucide-to-Phosphor mapping for the LSX Design icon migration.
            All 6 weight variants, search, filter, and copy-to-clipboard.
          </p>
          <div className="phosphor-ref__hero-stats">
            <div>
              <div className="phosphor-ref__hero-stat-value">{totalIcons}</div>
              <div className="phosphor-ref__hero-stat-label">Icons Mapped</div>
            </div>
            <div>
              <div className="phosphor-ref__hero-stat-value">{totalUsages}</div>
              <div className="phosphor-ref__hero-stat-label">Total Usages</div>
            </div>
            <div>
              <div className="phosphor-ref__hero-stat-value">6</div>
              <div className="phosphor-ref__hero-stat-label">Weight Variants</div>
            </div>
            <div>
              <div className="phosphor-ref__hero-stat-value">262</div>
              <div className="phosphor-ref__hero-stat-label">Files to Migrate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <div className="phosphor-ref__controls">
        <div className="phosphor-ref__controls-inner">
          <input
            type="search"
            className="phosphor-ref__search"
            placeholder="Search icons by Phosphor or Lucide name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search icons"
          />

          <div className="phosphor-ref__weight-selector" role="group" aria-label="Icon weight">
            {WEIGHTS.map(w => (
              <button
                key={w}
                className={`phosphor-ref__weight-btn ${activeWeight === w ? 'phosphor-ref__weight-btn--active' : ''}`}
                onClick={() => setActiveWeight(w)}
                aria-pressed={activeWeight === w}
              >
                {w}
              </button>
            ))}
          </div>

          <div className="phosphor-ref__size-selector">
            <label htmlFor="icon-size" className="phosphor-ref__size-label">Size:</label>
            <input
              id="icon-size"
              type="number"
              className="phosphor-ref__size-input"
              value={iconSize}
              onChange={e => setIconSize(Number(e.target.value))}
              min={12}
              max={64}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="phosphor-ref__content">

        {/* Weight Comparison */}
        <section className="phosphor-ref__comparison">
          <h2 className="phosphor-ref__comparison-title">Weight Comparison</h2>
          {SAMPLE_ICONS_FOR_COMPARISON.map(sample => (
            <div key={sample.name} className="wp-mb-6">
              <p className="wp-font-secondary wp-text-sm wp-text-muted-foreground wp-mb-3">
                {sample.name}
              </p>
              <div className="phosphor-ref__comparison-grid">
                {WEIGHTS.map(w => {
                  const IconComp = sample.component;
                  return (
                    <div key={w} className="phosphor-ref__comparison-item">
                      <IconComp size={32} weight={w} aria-hidden="true" />
                      <span className="phosphor-ref__comparison-weight">{w}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Icon Grid by Category */}
        {categories.length === 0 ? (
          <div className="phosphor-ref__empty">
            <MagnifyingGlass size={48} weight="light" className="phosphor-ref__empty-icon" aria-hidden="true" />
            <p className="phosphor-ref__empty-text">No icons match "{search}"</p>
          </div>
        ) : (
          categories.map(([category, icons]) => (
            <section key={category} className="phosphor-ref__category">
              <h2 className="phosphor-ref__category-title">{category}</h2>
              <p className="phosphor-ref__category-count">
                {icons.length} icons | {icons.reduce((s, i) => s + i.usageCount, 0)} total usages
              </p>
              <div className="phosphor-ref__grid">
                {icons.map(icon => {
                  const IconComp = icon.component;
                  const isCopied = copiedIcon === icon.phosphorName;
                  return (
                    <button
                      key={icon.phosphorName}
                      className={`phosphor-ref__card ${isCopied ? 'phosphor-ref__card--copied' : ''}`}
                      onClick={() => handleCopy(icon)}
                      title={`Copy: import { ${icon.phosphorName} } from '@phosphor-icons/react';`}
                      aria-label={`Copy import for ${icon.phosphorName}`}
                    >
                      <IconComp
                        size={iconSize}
                        weight={activeWeight}
                        className="phosphor-ref__card-icon"
                        aria-hidden="true"
                      />
                      <span className="phosphor-ref__card-name">
                        {icon.phosphorName}
                      </span>
                      <span className="phosphor-ref__card-lucide">
                        {isCopied ? 'Copied!' : `was: ${icon.lucideName}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
