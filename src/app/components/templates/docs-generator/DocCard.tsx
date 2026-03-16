/**
 * Documentation Card Component
 *
 * Renders a single component documentation card with props table,
 * import statement, usage example, and cross-references.
 *
 * Extracted from DocsGeneratorTemplate.tsx for file size compliance.
 *
 * @see /src/app/data/component-docs-data.ts
 */

import {
  CaretRight,
  Copy,
  Check,
  FileCode,
  Stack,
} from '@phosphor-icons/react';
import { componentDocs, type ComponentDoc } from '../../../data/component-docs-data';

const categoryMeta: Record<string, { icon: React.ReactNode; label: string }> = {};

// Re-import icons for category meta
import {
  FileText,
  PuzzlePiece,
  Cube,
  DotsSix,
  CodeBlock,
  Database,
  PenNib,
} from '@phosphor-icons/react';

export const categoryMetaMap: Record<string, { icon: React.ReactNode; label: string }> = {
  Templates: { icon: <FileText size={18} />, label: 'Templates' },
  Patterns: { icon: <PuzzlePiece size={18} />, label: 'Patterns' },
  Blocks: { icon: <Cube size={18} />, label: 'Blocks' },
  Common: { icon: <DotsSix size={18} />, label: 'Common' },
  Parts: { icon: <PenNib size={18} />, label: 'Parts' },
  Hooks: { icon: <CodeBlock size={18} />, label: 'Hooks' },
  Data: { icon: <Database size={18} />, label: 'Data Files' },
};

export const badgeClass: Record<string, string> = {
  Templates: 'docs-gen__card-badge--template',
  Patterns: 'docs-gen__card-badge--pattern',
  Blocks: 'docs-gen__card-badge--block',
  Common: 'docs-gen__card-badge--common',
  Parts: 'docs-gen__card-badge--common',
  Hooks: 'docs-gen__card-badge--hook',
  Data: 'docs-gen__card-badge--data',
};

interface DocCardProps {
  doc: ComponentDoc;
  expandedProps: Set<string>;
  copiedId: string | null;
  onToggleProps: (id: string) => void;
  onCopy: (text: string, id: string) => void;
  onScrollToDoc: (id: string) => void;
}

export function DocCard({
  doc,
  expandedProps,
  copiedId,
  onToggleProps,
  onCopy,
  onScrollToDoc,
}: DocCardProps) {
  return (
    <article
      id={`doc-${doc.id}`}
      className="docs-gen__doc-card"
    >
      {/* Header */}
      <div className="docs-gen__card-header">
        <div className="docs-gen__card-header-left">
          <div className="docs-gen__card-icon">
            {categoryMetaMap[doc.category]?.icon ?? <FileCode size={20} />}
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
            onClick={() => onToggleProps(doc.id)}
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
            onClick={() => onCopy(doc.importStatement, `import-${doc.id}`)}
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
            onClick={() => onCopy(doc.usageExample, `usage-${doc.id}`)}
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
                onClick={() => target && onScrollToDoc(target.id)}
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
  );
}
