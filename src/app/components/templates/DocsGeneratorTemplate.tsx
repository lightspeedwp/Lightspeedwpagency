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
 * P3.1 Memory Reduction (March 5, 2026):
 * - Extracted ~540 lines of component documentation data to
 *   /src/app/data/component-docs-data.ts
 * - Template reduced from 991 lines → ~450 lines
 *
 * @see /tasks/memory-reduction-tasks.md - Priority 3.1
 * @see /src/app/data/component-docs-data.ts
 */

import '../../../styles/templates/docs-generator.css';
import { useState, useMemo, useCallback } from 'react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import {
  MagnifyingGlass,
  CaretRight,
  Copy,
  Check,
  FileText,
  Stack,
  Cube,
  DotsSix,
  CodeBlock,
  Database,
  PuzzlePiece,
  PenNib,
  FileCode,
  MagnifyingGlassMinus,
  BookOpen,
} from '@phosphor-icons/react';
import { componentDocs, type ComponentDoc, type PropDef } from '../../data/component-docs-data';

/* ═══════════════════════════════════════════
 * Category Config
 * ═══════════════════════════════════════════ */

const categoryMeta: Record<string, { icon: React.ReactNode; label: string }> = {
  Templates: { icon: <FileText size={18} />, label: 'Templates' },
  Patterns: { icon: <PuzzlePiece size={18} />, label: 'Patterns' },
  Blocks: { icon: <Cube size={18} />, label: 'Blocks' },
  Common: { icon: <DotsSix size={18} />, label: 'Common' },
  Parts: { icon: <PenNib size={18} />, label: 'Parts' },
  Hooks: { icon: <CodeBlock size={18} />, label: 'Hooks' },
  Data: { icon: <Database size={18} />, label: 'Data Files' },
};

const categoryOrder: ComponentDoc['category'][] = [
  'Common', 'Parts', 'Patterns', 'Blocks', 'Templates', 'Hooks', 'Data',
];

const badgeClass: Record<string, string> = {
  Templates: 'docs-gen__card-badge--template',
  Patterns: 'docs-gen__card-badge--pattern',
  Blocks: 'docs-gen__card-badge--block',
  Common: 'docs-gen__card-badge--common',
  Parts: 'docs-gen__card-badge--common',
  Hooks: 'docs-gen__card-badge--hook',
  Data: 'docs-gen__card-badge--data',
};

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
          <div className="docs-gen__chips" style={{ marginTop: 'var(--spacing-3)' }}>
            {['All', ...categoryOrder].map(cat => (
              <button
                key={cat}
                type="button"
                className={`docs-gen__chip ${activeCategory === cat ? 'docs-gen__chip--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? 'All' : categoryMeta[cat]?.label ?? cat}
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
                  {categoryMeta[category]?.label ?? category} ({items.length})
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
                    {categoryMeta[category]?.icon}
                    {categoryMeta[category]?.label ?? category}
                    <span className="docs-gen__category-count-badge">{docs.length}</span>
                  </h2>

                  {docs.map(doc => (
                    <article
                      key={doc.id}
                      id={`doc-${doc.id}`}
                      className="docs-gen__doc-card"
                    >
                      {/* Header */}
                      <div className="docs-gen__card-header">
                        <div className="docs-gen__card-header-left">
                          <div className="docs-gen__card-icon">
                            {categoryMeta[doc.category]?.icon ?? <FileCode size={20} />}
                          </div>
                          <div>
                            <h3 className="docs-gen__card-name">{doc.name}</h3>
                            <p className="docs-gen__card-path">{doc.filePath}</p>
                          </div>
                        </div>
                        <div className="docs-gen__card-badge-row">
                          <span className={`docs-gen__card-badge ${badgeClass[doc.category] ?? ''}`}>
                            {doc.category}
                          </span>
                          {doc.wpBlock && (
                            <span className="docs-gen__card-badge docs-gen__card-badge--block">
                              {doc.wpBlock}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="docs-gen__card-desc">{doc.description}</p>

                      {/* Props Table (collapsible) */}
                      {doc.props.length > 0 && (
                        <>
                          <button
                            type="button"
                            className="docs-gen__props-toggle"
                            onClick={() => toggleProps(doc.id)}
                            aria-expanded={expandedProps.has(doc.id)}
                          >
                            <CaretRight
                              size={16}
                              className={`docs-gen__props-toggle-icon ${expandedProps.has(doc.id) ? 'docs-gen__props-toggle-icon--open' : ''}`}
                            />
                            {doc.category === 'Hooks'
                              ? `Returns (${doc.props.length})`
                              : `Props (${doc.props.length})`}
                          </button>

                          {expandedProps.has(doc.id) && (
                            <div className="docs-gen__props-table-wrap">
                              <table className="docs-gen__props-table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Required</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {doc.props.map(prop => (
                                    <tr key={prop.name}>
                                      <td>
                                        <span className="docs-gen__prop-name">{prop.name}</span>
                                      </td>
                                      <td>
                                        <span className="docs-gen__prop-type">{prop.type}</span>
                                      </td>
                                      <td>
                                        <span
                                          className={`docs-gen__prop-required ${prop.required ? 'docs-gen__prop-required--yes' : 'docs-gen__prop-required--no'}`}
                                        >
                                          {prop.required ? 'Yes' : 'No'}
                                        </span>
                                      </td>
                                      <td>
                                        {prop.default ? (
                                          <span className="docs-gen__prop-default">{prop.default}</span>
                                        ) : (
                                          <span className="docs-gen__prop-default">—</span>
                                        )}
                                      </td>
                                      <td>{prop.description}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </>
                      )}

                      {/* Code Snippet: Import */}
                      <div className="docs-gen__code-block">
                        <div className="docs-gen__code-header">
                          <span className="docs-gen__code-label">Import</span>
                          <button
                            type="button"
                            className={`docs-gen__copy-btn ${copiedId === `import-${doc.id}` ? 'docs-gen__copy-btn--copied' : ''}`}
                            onClick={() => copyToClipboard(doc.importStatement, `import-${doc.id}`)}
                          >
                            {copiedId === `import-${doc.id}` ? <Check size={12} /> : <Copy size={12} />}
                            {copiedId === `import-${doc.id}` ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                        <pre className="docs-gen__code-content">{doc.importStatement}</pre>
                      </div>

                      {/* Code Snippet: Usage */}
                      <div className="docs-gen__code-block">
                        <div className="docs-gen__code-header">
                          <span className="docs-gen__code-label">Usage</span>
                          <button
                            type="button"
                            className={`docs-gen__copy-btn ${copiedId === `usage-${doc.id}` ? 'docs-gen__copy-btn--copied' : ''}`}
                            onClick={() => copyToClipboard(doc.usageExample, `usage-${doc.id}`)}
                          >
                            {copiedId === `usage-${doc.id}` ? <Check size={12} /> : <Copy size={12} />}
                            {copiedId === `usage-${doc.id}` ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                        <pre className="docs-gen__code-content">{doc.usageExample}</pre>
                      </div>

                      {/* See Also / Used In */}
                      {(doc.seeAlso || doc.usedIn) && (
                        <div className="docs-gen__see-also">
                          {doc.seeAlso?.map(ref => {
                            const target = componentDocs.find(d => d.name === ref);
                            return (
                              <button
                                key={ref}
                                type="button"
                                className="docs-gen__see-link"
                                onClick={() => target && scrollToDoc(target.id)}
                                title={`See: ${ref}`}
                              >
                                <Stack size={12} />
                                {ref}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </article>
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
