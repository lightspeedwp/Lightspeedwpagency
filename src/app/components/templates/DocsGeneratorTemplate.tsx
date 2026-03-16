/**
 * Documentation Generator Template
 *
 * Auto-generated documentation from component JSDoc comments.
 * Renders structured docs with props tables, usage examples,
 * and cross-reference links for every component in the system.
 *
 * WordPress template: N/A (dev tool)
 * BEM naming: .docs-gen-*
 *
 * Sub-components:
 * - DocCard — individual doc card with props, code blocks, cross-refs
 *   (docs-generator/DocCard.tsx)
 *
 * @see /tasks/memory-reduction-tasks.md - Priority 3.1
 * @see /src/app/data/component-docs-data.ts
 */

import '../../../styles/templates/docs-generator.css';
import { useState, useMemo, useCallback } from 'react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import {
  MagnifyingGlass,
  MagnifyingGlassMinus,
  BookOpen,
} from '@phosphor-icons/react';
import { componentDocs, type ComponentDoc } from '../../data/component-docs-data';
import { DocCard, categoryMetaMap } from './docs-generator/DocCard';

const categoryOrder: ComponentDoc['category'][] = [
  'Common', 'Parts', 'Patterns', 'Blocks', 'Templates', 'Hooks', 'Data',
];

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function DocsGeneratorTemplate() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedProps, setExpandedProps] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);

  /* Filter logic */
  const filtered = useMemo(() => {
    let docs = componentDocs;
    if (activeCategory !== 'All') {
      docs = docs.filter(d => d.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      docs = docs.filter(
        d =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.filePath.toLowerCase().includes(q)
      );
    }
    return docs;
  }, [searchQuery, activeCategory]);

  /* Group by category */
  const grouped = useMemo(() => {
    return categoryOrder
      .map(cat => ({
        category: cat,
        docs: filtered.filter(d => d.category === cat),
      }))
      .filter(g => g.docs.length > 0);
  }, [filtered]);

  /* Sidebar items */
  const sidebarGroups = useMemo(() => {
    return categoryOrder.map(cat => ({
      category: cat,
      items: componentDocs.filter(d => d.category === cat),
    })).filter(g => g.items.length > 0);
  }, []);

  /* Handlers */
  const toggleProps = useCallback((id: string) => {
    setExpandedProps(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const copyToClipboard = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  const scrollToDoc = useCallback((id: string) => {
    const el = document.getElementById(`doc-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  /* Stats */
  const stats = useMemo(() => ({
    total: componentDocs.length,
    templates: componentDocs.filter(d => d.category === 'Templates').length,
    patterns: componentDocs.filter(d => d.category === 'Patterns').length,
    blocks: componentDocs.filter(d => d.category === 'Blocks').length,
  }), []);

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Developer Tools', page: 'dev-tools' },
          { label: 'Documentation Generator' },
        ]}
      />

      <div className="docs-gen">
        {/* Hero */}
        <div className="docs-gen__hero">
          <div className="docs-gen__hero-orb" />
          <div className="docs-gen__hero-inner">
            <div className="docs-gen__hero-badge">
              <BookOpen size={14} />
              Auto-Generated Docs
            </div>
            <h1 className="docs-gen__hero-title">Documentation Generator</h1>
            <p className="docs-gen__hero-subtitle">
              Structured documentation for every component, pattern, block, hook, and data file in the LSX Design system
              — parsed from JSDoc annotations.
            </p>

            {/* Stats */}
            <div className="docs-gen__stats-row">
              {[
                { value: stats.total, label: 'Documented' },
                { value: stats.templates, label: 'Templates' },
                { value: stats.patterns, label: 'Patterns' },
                { value: stats.blocks, label: 'Blocks' },
              ].map((s, i) => (
                <div key={i} className="docs-gen__stat-card">
                  <div className="docs-gen__stat-value">{s.value}</div>
                  <div className="docs-gen__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search + Filter Bar */}
        <div className="docs-gen__search-bar">
          <div className="docs-gen__search-wrapper">
            <div className="docs-gen__search-input-wrap">
              <MagnifyingGlass size={18} className="docs-gen__search-icon" />
              <input
                type="text"
                className="docs-gen__search-input"
                placeholder="Search components, patterns, hooks..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Search documentation"
              />
            </div>
            <span className="docs-gen__result-count">
              {filtered.length} of {componentDocs.length} entries
            </span>
          </div>

          {/* Category chips */}
          <div className="docs-gen__chips wp-mt-3">
            {['All', ...categoryOrder].map(cat => (
              <button
                key={cat}
                type="button"
                className={`docs-gen__chip ${activeCategory === cat ? 'docs-gen__chip--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? 'All' : categoryMetaMap[cat]?.label ?? cat}
              </button>
            ))}
          </div>
        </div>

        {/* Body: Sidebar + Main */}
        <div className="docs-gen__body">
          {/* Sidebar */}
          <aside className="docs-gen__sidebar" aria-label="Component navigation">
            {sidebarGroups.map(({ category, items }) => (
              <div key={category} className="docs-gen__sidebar-group">
                <div className="docs-gen__sidebar-label">
                  {categoryMetaMap[category]?.label ?? category} ({items.length})
                </div>
                {items.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    className="docs-gen__sidebar-item"
                    onClick={() => scrollToDoc(item.id)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <div className="docs-gen__main">
            {grouped.length === 0 ? (
              <div className="docs-gen__empty">
                <MagnifyingGlassMinus size={48} className="docs-gen__empty-icon" />
                <h3 className="docs-gen__empty-title">No results found</h3>
                <p className="docs-gen__empty-desc">
                  Try a different search term or clear the category filter.
                </p>
              </div>
            ) : (
              grouped.map(({ category, docs }) => (
                <div key={category} className="docs-gen__category-section">
                  <h2 className="docs-gen__category-title">
                    {categoryMetaMap[category]?.icon}
                    {categoryMetaMap[category]?.label ?? category}
                    <span className="docs-gen__category-count-badge">{docs.length}</span>
                  </h2>

                  {docs.map(doc => (
                    <DocCard
                      key={doc.id}
                      doc={doc}
                      expandedProps={expandedProps}
                      copiedId={copiedId}
                      onToggleProps={toggleProps}
                      onCopy={copyToClipboard}
                      onScrollToDoc={scrollToDoc}
                    />
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DocsGeneratorTemplate;
