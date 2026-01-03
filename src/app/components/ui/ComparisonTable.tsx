/**
 * Comparison Table Component
 * 
 * Production-grade comparison table for products, services, plans, etc.
 * 
 * Features:
 * - Side-by-side comparison
 * - Sticky header
 * - Highlight differences
 * - Add/remove items
 * - Mobile-responsive
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <ComparisonTable
 *   items={items}
 *   onRemove={handleRemove}
 *   onAddMore={handleAddMore}
 * />
 */

import { useState } from 'react';
import { X, Plus, Check, Minus } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

export interface ComparisonItem {
  id: string;
  name: string;
  image?: string;
  price?: string;
  badge?: string;
  features: Record<string, boolean | string | number>;
}

export interface ComparisonTableProps {
  /** Items to compare */
  items: ComparisonItem[];
  /** Remove item handler */
  onRemove: (id: string) => void;
  /** Add more items handler */
  onAddMore?: () => void;
  /** Maximum items allowed */
  maxItems?: number;
  /** Feature labels mapping */
  featureLabels?: Record<string, string>;
  /** Highlight differences */
  highlightDifferences?: boolean;
}

export function ComparisonTable({
  items,
  onRemove,
  onAddMore,
  maxItems = 4,
  featureLabels = {},
  highlightDifferences = true,
}: ComparisonTableProps) {
  const [stickyHeader, setStickyHeader] = useState(false);

  // Get all unique features across all items
  const allFeatures = Array.from(
    new Set(items.flatMap(item => Object.keys(item.features)))
  );

  // Check if a feature has different values across items
  const isDifferent = (featureKey: string): boolean => {
    if (!highlightDifferences) return false;
    
    const values = items.map(item => item.features[featureKey]);
    return new Set(values).size > 1;
  };

  // Render feature value
  const renderValue = (value: boolean | string | number) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check size={20} style={{ color: 'var(--success)' }} />
      ) : (
        <Minus size={20} style={{ color: 'var(--muted-foreground)' }} />
      );
    }
    
    return (
      <span
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--foreground)',
        }}
      >
        {value}
      </span>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <div
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border-soft)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
        }}
      >
        {/* Header Row */}
        <div
          className="grid gap-4 p-6"
          style={{
            gridTemplateColumns: `200px repeat(${items.length}, 1fr)`,
            backgroundColor: 'var(--muted)',
            borderBottom: '2px solid var(--border)',
            position: stickyHeader ? 'sticky' : 'relative',
            top: 0,
            zIndex: 10,
          }}
        >
          {/* Empty corner cell */}
          <div />

          {/* Item headers */}
          {items.map((item) => (
            <div key={item.id} className="text-center">
              {/* Remove button */}
              <button
                onClick={() => onRemove(item.id)}
                className="mb-4 ml-auto flex items-center justify-center"
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--destructive)',
                  color: 'var(--destructive-foreground)',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                aria-label={`Remove ${item.name}`}
              >
                <X size={16} />
              </button>

              {/* Image */}
              {item.image && (
                <div className="mb-4 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                    }}
                  />
                </div>
              )}

              {/* Badge */}
              {item.badge && (
                <div className="mb-2 flex justify-center">
                  <span
                    className="px-3 py-1"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
              )}

              {/* Name */}
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h4)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  margin: 0,
                }}
              >
                {item.name}
              </h3>

              {/* Price */}
              {item.price && (
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--primary)',
                    margin: 0,
                  }}
                >
                  {item.price}
                </p>
              )}
            </div>
          ))}

          {/* Add more button */}
          {onAddMore && items.length < maxItems && (
            <div className="flex items-center justify-center">
              <button
                onClick={onAddMore}
                className="flex flex-col items-center justify-center gap-2 p-6"
                style={{
                  backgroundColor: 'var(--muted)',
                  border: '2px dashed var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  width: '100%',
                  height: '200px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--muted)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <Plus size={32} style={{ color: 'var(--muted-foreground)' }} />
                <span
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Add Item
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Feature Rows */}
        <div>
          {allFeatures.map((featureKey, index) => {
            const different = isDifferent(featureKey);
            const label = featureLabels[featureKey] || featureKey;

            return (
              <div
                key={featureKey}
                className="grid gap-4 p-6"
                style={{
                  gridTemplateColumns: `200px repeat(${items.length}, 1fr)`,
                  backgroundColor:
                    index % 2 === 0 ? 'var(--card)' : 'var(--muted)',
                  borderBottom:
                    index < allFeatures.length - 1
                      ? '1px solid var(--border-extra-soft)'
                      : 'none',
                }}
              >
                {/* Feature label */}
                <div
                  className="flex items-center"
                  style={{
                    backgroundColor: different
                      ? 'var(--accent)'
                      : 'transparent',
                    marginLeft: different ? '-24px' : '0',
                    paddingLeft: different ? '24px' : '0',
                    paddingRight: '12px',
                    borderRadius: different ? 'var(--radius)' : '0',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: different
                        ? 'var(--font-weight-semibold)'
                        : 'var(--font-weight-medium)',
                      color: different
                        ? 'var(--foreground)'
                        : 'var(--muted-foreground)',
                    }}
                  >
                    {label}
                  </span>
                </div>

                {/* Feature values */}
                {items.map((item) => (
                  <div
                    key={`${item.id}-${featureKey}`}
                    className="flex items-center justify-center"
                  >
                    {renderValue(item.features[featureKey])}
                  </div>
                ))}

                {/* Empty cell for add button column */}
                {onAddMore && items.length < maxItems && <div />}
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div
          className="flex items-center justify-between gap-4 p-6"
          style={{
            backgroundColor: 'var(--muted)',
            borderTop: '2px solid var(--border)',
          }}
        >
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            Comparing {items.length} {items.length === 1 ? 'item' : 'items'}
          </p>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => items.forEach(item => onRemove(item.id))}
            >
              Clear All
            </Button>

            {onAddMore && items.length < maxItems && (
              <Button variant="default" onClick={onAddMore}>
                <Plus size={16} />
                Add Item
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Scroll Hint */}
      <p
        className="mt-4 text-center md:hidden"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          color: 'var(--muted-foreground)',
          margin: 0,
        }}
      >
        ← Scroll horizontally to view all items →
      </p>
    </div>
  );
}

/**
 * Mobile Comparison Card
 * 
 * Vertical card layout for mobile devices.
 */
export function MobileComparisonCard({
  items,
  onRemove,
  featureLabels = {},
}: Pick<ComparisonTableProps, 'items' | 'onRemove' | 'featureLabels'>) {
  const allFeatures = Array.from(
    new Set(items.flatMap(item => Object.keys(item.features)))
  );

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border-soft)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            className="p-6"
            style={{
              backgroundColor: 'var(--muted)',
              borderBottom: '2px solid var(--border)',
            }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                {item.badge && (
                  <span
                    className="inline-block px-3 py-1 mb-2"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {item.badge}
                  </span>
                )}

                <h3
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    margin: 0,
                  }}
                >
                  {item.name}
                </h3>

                {item.price && (
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--primary)',
                      margin: 0,
                    }}
                  >
                    {item.price}
                  </p>
                )}
              </div>

              <button
                onClick={() => onRemove(item.id)}
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--destructive)',
                  color: 'var(--destructive-foreground)',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label={`Remove ${item.name}`}
              >
                <X size={16} />
              </button>
            </div>

            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-soft)',
                }}
              />
            )}
          </div>

          {/* Features */}
          <div className="p-6 space-y-3">
            {allFeatures.map((featureKey) => {
              const label = featureLabels[featureKey] || featureKey;
              const value = item.features[featureKey];

              return (
                <div
                  key={featureKey}
                  className="flex items-center justify-between gap-4"
                >
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {label}
                  </span>

                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {typeof value === 'boolean' ? (
                      value ? (
                        <Check size={20} style={{ color: 'var(--success)' }} />
                      ) : (
                        <Minus
                          size={20}
                          style={{ color: 'var(--muted-foreground)' }}
                        />
                      )
                    ) : (
                      value
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
