/**
 * Filter Presets Component
 * 
 * WordPress concept: Saved filter combinations
 * Pattern: `lsx-design/filters/filter-presets`
 * 
 * Save and load filter combinations for quick access.
 * Perfect for complex filters users apply frequently.
 * 
 * **Purpose:**
 * - Save filter combinations
 * - Quick filter application
 * - User convenience
 * - Reduce friction
 * 
 * **Features:**
 * - Save current filters
 * - Load saved presets
 * - Delete presets
 * - Share presets via URL
 * - Local storage persistence
 * 
 * **Design System:**
 * - Typography: Lexend for headings, Manrope for labels
 * - Colors: var(--primary) for active presets
 * - Spacing: Tailwind classes
 * - Fonts: Lexend/Manrope only
 * 
 * **Accessibility:**
 * - Keyboard navigation
 * - ARIA labels
 * - Screen reader support
 * 
 * @example
 * // Basic usage
 * <FilterPresets
 *   currentFilters={filters}
 *   onApplyPreset={setFilters}
 * />
 */

import React, { useState, useEffect } from 'react';
import { Save, Bookmark, Trash2, Share2 } from 'lucide-react';

/**
 * Filter preset structure
 */
export interface FilterPreset {
  id: string;
  name: string;
  filters: Record<string, any>;
  createdAt: Date;
}

/**
 * Filter Presets component props
 */
interface FilterPresetsProps {
  /**
   * Current filter values
   */
  currentFilters: Record<string, any>;

  /**
   * Apply preset callback
   */
  onApplyPreset: (filters: Record<string, any>) => void;

  /**
   * Storage key for localStorage
   * 
   * @default "filter-presets"
   */
  storageKey?: string;

  /**
   * Maximum number of presets
   * 
   * @default 10
   */
  maxPresets?: number;

  /**
   * Show share button
   * 
   * @default true
   */
  showShare?: boolean;

  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Filter Presets Component
 * 
 * Save and load filter combinations.
 * 
 * @param props - FilterPresetsProps
 * @returns Filter presets UI
 */
export function FilterPresets({
  currentFilters,
  onApplyPreset,
  storageKey = 'filter-presets',
  maxPresets = 10,
  showShare = true,
  className = '',
}: FilterPresetsProps) {
  const [presets, setPresets] = useState<FilterPreset[]>([]);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [presetName, setPresetName] = useState('');

  // Load presets from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPresets(
          parsed.map((p: any) => ({
            ...p,
            createdAt: new Date(p.createdAt),
          }))
        );
      }
    } catch (error) {
      console.error('Failed to load filter presets:', error);
    }
  }, [storageKey]);

  // Save presets to localStorage
  const saveToStorage = (newPresets: FilterPreset[]) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(newPresets));
    } catch (error) {
      console.error('Failed to save filter presets:', error);
    }
  };

  // Save current filters as preset
  const savePreset = () => {
    if (!presetName.trim()) return;

    const newPreset: FilterPreset = {
      id: Date.now().toString(),
      name: presetName.trim(),
      filters: currentFilters,
      createdAt: new Date(),
    };

    const updatedPresets = [newPreset, ...presets].slice(0, maxPresets);
    setPresets(updatedPresets);
    saveToStorage(updatedPresets);
    setPresetName('');
    setShowSaveDialog(false);
  };

  // Delete preset
  const deletePreset = (id: string) => {
    const updatedPresets = presets.filter((p) => p.id !== id);
    setPresets(updatedPresets);
    saveToStorage(updatedPresets);
  };

  // Share preset (copy URL with filters)
  const sharePreset = (preset: FilterPreset) => {
    const params = new URLSearchParams();
    Object.entries(preset.filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        params.set(key, value.join(','));
      } else if (value !== null && value !== undefined) {
        params.set(key, String(value));
      }
    });

    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url);
    
    // Show success feedback (you might want to add a toast notification)
    alert('Filter URL copied to clipboard!');
  };

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          Filter Presets
        </h3>

        <button
          onClick={() => setShowSaveDialog(true)}
          className="flex items-center gap-2 px-3 py-2 rounded transition-colors hover:opacity-80"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            border: 'none',
            borderRadius: 'var(--radius)',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          <Save className="w-4 h-4" />
          Save Current
        </button>
      </div>

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className="mb-4 p-4 rounded border" style={{ backgroundColor: 'var(--muted)', borderColor: 'var(--border)', borderRadius: 'var(--radius-lg)' }}>
          <input
            type="text"
            placeholder="Preset name..."
            value={presetName}
            onChange={(e) => setPresetName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && savePreset()}
            className="w-full px-3 py-2 mb-3 rounded border"
            style={{
              backgroundColor: 'var(--input-background)',
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius)',
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--foreground)',
            }}
            autoFocus
          />
          <div className="flex gap-2">
            <button
              onClick={savePreset}
              disabled={!presetName.trim()}
              className="px-4 py-2 rounded transition-opacity hover:opacity-80"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: '600',
                cursor: presetName.trim() ? 'pointer' : 'not-allowed',
                opacity: presetName.trim() ? 1 : 0.5,
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setShowSaveDialog(false);
                setPresetName('');
              }}
              className="px-4 py-2 rounded transition-colors hover:opacity-80"
              style={{
                backgroundColor: 'var(--muted)',
                color: 'var(--foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Presets List */}
      {presets.length === 0 ? (
        <p
          className="text-center py-8"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
          }}
        >
          No saved presets yet
        </p>
      ) : (
        <div className="space-y-2">
          {presets.map((preset) => (
            <div
              key={preset.id}
              className="flex items-center justify-between p-3 rounded border transition-colors hover:opacity-80"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: 'var(--radius)',
              }}
            >
              <button
                onClick={() => onApplyPreset(preset.filters)}
                className="flex items-center gap-3 flex-1 text-left"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <Bookmark className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                <div>
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: '600',
                      color: 'var(--foreground)',
                    }}
                  >
                    {preset.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {preset.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </button>

              <div className="flex items-center gap-2">
                {showShare && (
                  <button
                    onClick={() => sharePreset(preset)}
                    className="p-2 rounded transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--muted)',
                      border: 'none',
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                    }}
                    aria-label="Share preset"
                  >
                    <Share2 className="w-4 h-4" style={{ color: 'var(--foreground)' }} />
                  </button>
                )}

                <button
                  onClick={() => deletePreset(preset.id)}
                  className="p-2 rounded transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: 'var(--destructive)',
                    border: 'none',
                    borderRadius: 'var(--radius)',
                    cursor: 'pointer',
                  }}
                  aria-label="Delete preset"
                >
                  <Trash2 className="w-4 h-4" style={{ color: 'var(--destructive-foreground)' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/filters/filter-presets
 * Category: filters
 */
