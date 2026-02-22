/**
 * Component Playground Block Component
 * 
 * WordPress Block: dev-tools/component-playground
 * 
 * Interactive component preview system with prop editors.
 * 
 * @see /src/styles/blocks/dev-tools/component-playground.css
 */

import { useState } from 'react';
import { Copy, Check, Code2, Eye, Settings } from 'lucide-react';

export interface PropDefinition {
  name: string;
  type: 'string' | 'boolean' | 'select' | 'number';
  default: any;
  options?: string[];
  description?: string;
  required?: boolean;
}

export interface ComponentPlaygroundProps {
  componentName: string;
  description: string;
  props: PropDefinition[];
  renderComponent: (props: Record<string, any>) => React.ReactNode;
  defaultProps?: Record<string, any>;
}

export function ComponentPlayground({
  componentName,
  description,
  props: propDefinitions,
  renderComponent,
  defaultProps = {}
}: ComponentPlaygroundProps) {
  // Initialize prop values
  const initialProps = propDefinitions.reduce((acc, prop) => {
    acc[prop.name] = defaultProps[prop.name] ?? prop.default;
    return acc;
  }, {} as Record<string, any>);

  const [propValues, setPropValues] = useState(initialProps);
  const [activeTab, setActiveTab] = useState<'preview' | 'props' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  // Update prop value
  const updateProp = (name: string, value: any) => {
    setPropValues(prev => ({ ...prev, [name]: value }));
  };

  // Generate code snippet
  const generateCode = () => {
    const propsString = Object.entries(propValues)
      .filter(([key, value]) => {
        // Only include non-default values
        const propDef = propDefinitions.find(p => p.name === key);
        return value !== propDef?.default;
      })
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `  ${key}="${value}"`;
        } else if (typeof value === 'boolean') {
          return value ? `  ${key}` : '';
        } else {
          return `  ${key}={${JSON.stringify(value)}}`;
        }
      })
      .filter(Boolean)
      .join('\n');

    return `<${componentName}\n${propsString}\n/>`;
  };

  // Copy to clipboard
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generateCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Reset to defaults
  const resetProps = () => {
    setPropValues(initialProps);
  };

  return (
    <div className="wp-block-component-playground">
      {/* Header */}
      <div className="wp-block-component-playground__header">
        <h3 className="wp-block-component-playground__title">
          {componentName}
        </h3>
        <p className="wp-block-component-playground__description">
          {description}
        </p>
      </div>

      {/* Tabs */}
      <div className="wp-block-component-playground__tabs">
        {[
          { id: 'preview', label: 'Preview', icon: Eye },
          { id: 'props', label: 'Props', icon: Settings },
          { id: 'code', label: 'Code', icon: Code2 }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`wp-block-component-playground__tab ${activeTab === id ? 'wp-block-component-playground__tab--active' : ''}`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="wp-block-component-playground__content">
        {/* Preview Tab */}
        {activeTab === 'preview' && (
          <div className="wp-block-component-playground__preview">
            {renderComponent(propValues)}
          </div>
        )}

        {/* Props Tab */}
        {activeTab === 'props' && (
          <div className="wp-block-component-playground__props">
            {propDefinitions.map((prop) => (
              <div key={prop.name} className="wp-block-component-playground__prop-item">
                <label className="wp-block-component-playground__label">
                  {prop.name}
                  {prop.required && (
                    <span className="wp-block-component-playground__required">
                      *
                    </span>
                  )}
                </label>

                {prop.description && (
                  <p className="wp-block-component-playground__prop-desc">
                    {prop.description}
                  </p>
                )}

                {/* String Input */}
                {prop.type === 'string' && (
                  <input
                    type="text"
                    value={propValues[prop.name] || ''}
                    onChange={(e) => updateProp(prop.name, e.target.value)}
                    className="wp-block-component-playground__input"
                  />
                )}

                {/* Number Input */}
                {prop.type === 'number' && (
                  <input
                    type="number"
                    value={propValues[prop.name] || 0}
                    onChange={(e) => updateProp(prop.name, parseInt(e.target.value))}
                    className="wp-block-component-playground__input"
                  />
                )}

                {/* Boolean Toggle */}
                {prop.type === 'boolean' && (
                  <button
                    onClick={() => updateProp(prop.name, !propValues[prop.name])}
                    className={`wp-block-component-playground__toggle ${propValues[prop.name] ? 'wp-block-component-playground__toggle--active' : ''}`}
                  >
                    <div className="wp-block-component-playground__toggle-track">
                      <div className="wp-block-component-playground__toggle-thumb" />
                    </div>
                    {propValues[prop.name] ? 'Enabled' : 'Disabled'}
                  </button>
                )}

                {/* Select Dropdown */}
                {prop.type === 'select' && prop.options && (
                  <select
                    value={propValues[prop.name]}
                    onChange={(e) => updateProp(prop.name, e.target.value)}
                    className="wp-block-component-playground__select"
                  >
                    {prop.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}

            {/* Reset Button */}
            <button
              onClick={resetProps}
              className="wp-block-component-playground__reset"
            >
              Reset to Defaults
            </button>
          </div>
        )}

        {/* Code Tab */}
        {activeTab === 'code' && (
          <div>
            <div className="wp-block-component-playground__code-header">
              <h4 className="wp-block-component-playground__code-title">
                Component Code
              </h4>
              <button
                onClick={copyCode}
                className={`wp-block-component-playground__copy ${copied ? 'wp-block-component-playground__copy--active' : ''}`}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Code
                  </>
                )}
              </button>
            </div>

            <pre className="wp-block-component-playground__pre">
              <code>{generateCode()}</code>
            </pre>

            <p className="wp-block-component-playground__import-label">
              Import this component:
            </p>
            <pre className="wp-block-component-playground__import-pre">
              <code>{`import { ${componentName} } from './patterns/${componentName}';`}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
