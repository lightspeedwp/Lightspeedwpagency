/**
 * Component Playground
 * 
 * Interactive component preview system with prop editors
 * Allows real-time component testing with editable props
 * 
 * **Features:**
 * - Live component preview
 * - Interactive prop editors (text, boolean, select)
 * - Code snippet generation
 * - Dark mode compatible
 * - Copy to clipboard functionality
 * 
 * **Design System:**
 * - Uses CSS variables exclusively
 * - Lexend font family only
 * - Tailwind spacing classes
 */

import { useState } from 'react';
import { Copy, Check, Code2, Eye, Settings } from 'lucide-react';

interface PropDefinition {
  name: string;
  type: 'string' | 'boolean' | 'select' | 'number';
  default: any;
  options?: string[];
  description?: string;
  required?: boolean;
}

interface ComponentPlaygroundProps {
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
    <div
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        marginBottom: '32px'
      }}
    >
      {/* Header */}
      <div
        className="p-6"
        style={{
          borderBottom: '1px solid var(--border-soft)',
          backgroundColor: 'var(--muted)'
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--foreground)',
            marginBottom: '8px'
          }}
        >
          {componentName}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
            lineHeight: '1.6',
            margin: 0
          }}
        >
          {description}
        </p>
      </div>

      {/* Tabs */}
      <div
        className="px-6 py-4"
        style={{
          display: 'flex',
          gap: '4px',
          borderBottom: '1px solid var(--border-soft)',
          backgroundColor: 'var(--background)'
        }}
      >
        {[
          { id: 'preview', label: 'Preview', icon: Eye },
          { id: 'props', label: 'Props', icon: Settings },
          { id: 'code', label: 'Code', icon: Code2 }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className="px-4 py-2.5"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: activeTab === id ? 'var(--primary)' : 'transparent',
              color: activeTab === id ? 'var(--primary-foreground)' : 'var(--foreground)',
              border: activeTab === id ? 'none' : '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== id) {
                e.currentTarget.style.borderColor = 'var(--primary)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== id) {
                e.currentTarget.style.borderColor = 'var(--border)';
              }
            }}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Preview Tab */}
        {activeTab === 'preview' && (
          <div
            className="p-6"
            style={{
              minHeight: '300px',
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'auto'
            }}
          >
            {renderComponent(propValues)}
          </div>
        )}

        {/* Props Tab */}
        {activeTab === 'props' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {propDefinitions.map((prop) => (
              <div key={prop.name}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)'
                  }}
                >
                  {prop.name}
                  {prop.required && (
                    <span style={{ color: 'var(--destructive)', fontSize: 'var(--text-small)' }}>
                      *
                    </span>
                  )}
                </label>

                {prop.description && (
                  <p
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                      marginBottom: '8px',
                      margin: '0 0 8px 0'
                    }}
                  >
                    {prop.description}
                  </p>
                )}

                {/* String Input */}
                {prop.type === 'string' && (
                  <input
                    type="text"
                    value={propValues[prop.name] || ''}
                    onChange={(e) => updateProp(prop.name, e.target.value)}
                    className="px-4 py-3"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--input)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  />
                )}

                {/* Number Input */}
                {prop.type === 'number' && (
                  <input
                    type="number"
                    value={propValues[prop.name] || 0}
                    onChange={(e) => updateProp(prop.name, parseInt(e.target.value))}
                    className="px-4 py-3"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--input)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  />
                )}

                {/* Boolean Toggle */}
                {prop.type === 'boolean' && (
                  <button
                    onClick={() => updateProp(prop.name, !propValues[prop.name])}
                    className="px-5 py-3"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      backgroundColor: propValues[prop.name] ? 'var(--primary)' : 'var(--muted)',
                      color: propValues[prop.name] ? 'var(--primary-foreground)' : 'var(--foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '24px',
                        backgroundColor: propValues[prop.name] ? 'var(--primary-foreground)' : 'var(--border)',
                        borderRadius: '12px',
                        position: 'relative',
                        transition: 'background-color 0.2s ease'
                      }}
                    >
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: propValues[prop.name] ? 'var(--primary)' : 'var(--foreground)',
                          borderRadius: '50%',
                          position: 'absolute',
                          top: '2px',
                          left: propValues[prop.name] ? '22px' : '2px',
                          transition: 'left 0.2s ease'
                        }}
                      />
                    </div>
                    {propValues[prop.name] ? 'Enabled' : 'Disabled'}
                  </button>
                )}

                {/* Select Dropdown */}
                {prop.type === 'select' && prop.options && (
                  <select
                    value={propValues[prop.name]}
                    onChange={(e) => updateProp(prop.name, e.target.value)}
                    className="px-4 py-3"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--input)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      cursor: 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
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
              className="px-6 py-3"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--foreground)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--foreground)';
              }}
            >
              Reset to Defaults
            </button>
          </div>
        )}

        {/* Code Tab */}
        {activeTab === 'code' && (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  margin: 0
                }}
              >
                Component Code
              </h4>
              <button
                onClick={copyCode}
                className="px-4 py-2"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: copied ? 'var(--primary)' : 'transparent',
                  color: copied ? 'var(--primary-foreground)' : 'var(--foreground)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
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

            <pre
              className="p-5"
              style={{
                backgroundColor: 'var(--muted)',
                border: '1px solid var(--border-soft)',
                borderRadius: 'var(--radius-lg)',
                fontFamily: 'monospace',
                fontSize: 'var(--text-small)',
                color: 'var(--foreground)',
                lineHeight: '1.6',
                overflow: 'auto',
                margin: 0
              }}
            >
              <code>{generateCode()}</code>
            </pre>

            <p
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
                marginTop: '16px',
                lineHeight: '1.6'
              }}
            >
              Import this component:
            </p>
            <pre
              className="p-3"
              style={{
                backgroundColor: 'var(--muted)',
                border: '1px solid var(--border-soft)',
                borderRadius: 'var(--radius-lg)',
                fontFamily: 'monospace',
                fontSize: 'var(--text-small)',
                color: 'var(--foreground)',
                marginTop: '8px'
              }}
            >
              <code>{`import { ${componentName} } from './patterns/${componentName}';`}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}