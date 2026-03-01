/**
 * ComponentDocumentation Component
 *
 * Display interactive component documentation
 * Shows props, examples, accessibility, and best practices
 *
 * Features:
 * - Props table
 * - Code examples
 * - Copy code button
 * - Accessibility checklist
 * - Best practices
 * - CSS variables reference
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.component-docs)
 *
 * @see /guidelines/components/ComponentDocumentation.md
 */

import { useState } from 'react';
import { Copy, Check, Code, Eye, Accessibility, Lightbulb, Palette } from 'lucide-react';
import { ComponentDocs } from '../../hooks/useComponentDocs';

export interface ComponentDocumentationProps {
  docs: ComponentDocs;
}

export const ComponentDocumentation = ({ docs }: ComponentDocumentationProps) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, exampleTitle: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(exampleTitle);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="component-docs">
      {/* Header */}
      <div className="component-docs__header">
        <h2 className="component-docs__title">{docs.name}</h2>
        <span className="component-docs__category">{docs.category}</span>
      </div>

      <p className="component-docs__description">{docs.description}</p>

      {/* Props Table */}
      <section className="component-docs__section">
        <div className="component-docs__section-header">
          <Code size={20} />
          <h3 className="component-docs__section-title">Props</h3>
        </div>

        <div className="component-docs__table-wrapper">
          <table className="component-docs__table">
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
              {docs.props.map((prop) => (
                <tr key={prop.name}>
                  <td>
                    <code className="component-docs__prop-name">{prop.name}</code>
                  </td>
                  <td>
                    <code className="component-docs__prop-type">{prop.type}</code>
                  </td>
                  <td>
                    <span
                      className={`component-docs__badge ${
                        prop.required
                          ? 'component-docs__badge--required'
                          : 'component-docs__badge--optional'
                      }`}
                    >
                      {prop.required ? 'Required' : 'Optional'}
                    </span>
                  </td>
                  <td>
                    {prop.default ? (
                      <code className="component-docs__prop-default">{prop.default}</code>
                    ) : (
                      <span className="component-docs__prop-none">—</span>
                    )}
                  </td>
                  <td>{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Examples */}
      <section className="component-docs__section">
        <div className="component-docs__section-header">
          <Eye size={20} />
          <h3 className="component-docs__section-title">Examples</h3>
        </div>

        <div className="component-docs__examples">
          {docs.examples.map((example) => (
            <div key={example.title} className="component-docs__example">
              <div className="component-docs__example-header">
                <div>
                  <h4 className="component-docs__example-title">{example.title}</h4>
                  <p className="component-docs__example-description">{example.description}</p>
                </div>
                <button
                  className="component-docs__copy-button"
                  onClick={() => copyCode(example.code, example.title)}
                >
                  {copiedCode === example.title ? (
                    <>
                      <Check size={16} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <pre className="component-docs__code">
                <code>{example.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility */}
      <section className="component-docs__section">
        <div className="component-docs__section-header">
          <Accessibility size={20} />
          <h3 className="component-docs__section-title">Accessibility</h3>
        </div>

        <ul className="component-docs__list">
          {docs.accessibility.map((item, index) => (
            <li key={index} className="component-docs__list-item">
              <span className="component-docs__list-icon">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Best Practices */}
      <section className="component-docs__section">
        <div className="component-docs__section-header">
          <Lightbulb size={20} />
          <h3 className="component-docs__section-title">Best Practices</h3>
        </div>

        <ul className="component-docs__list">
          {docs.bestPractices.map((item, index) => (
            <li key={index} className="component-docs__list-item">
              <span className="component-docs__list-icon">💡</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CSS Variables */}
      <section className="component-docs__section">
        <div className="component-docs__section-header">
          <Palette size={20} />
          <h3 className="component-docs__section-title">CSS Variables</h3>
        </div>

        <div className="component-docs__variables">
          {docs.cssVariables.map((variable, index) => (
            <code key={index} className="component-docs__variable">
              {variable}
            </code>
          ))}
        </div>
      </section>
    </div>
  );
};
