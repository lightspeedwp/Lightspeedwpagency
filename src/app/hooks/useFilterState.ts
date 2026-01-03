/**
 * Filter State Management Hook
 * 
 * Manages filter state with URL synchronization.
 * Enables shareable filter URLs and browser back/forward support.
 * 
 * **Features:**
 * - URL query parameter sync
 * - Browser history integration
 * - Type-safe filter state
 * - Debounced URL updates
 * - Initial state from URL
 * 
 * **Design System:**
 * - No UI - pure logic hook
 * - Integrates with filter components
 * - WordPress-compatible URLs
 * 
 * **URL Format Examples:**
 * ```
 * ?categories=web-design,wordpress
 * &priceMin=100&priceMax=500
 * &dateFrom=2024-01-01&dateTo=2024-01-31
 * &rating=4
 * ```
 * 
 * @example
 * // Basic usage
 * const [filters, setFilters] = useFilterState({
 *   categories: [],
 *   priceRange: [0, 1000],
 *   dateRange: { from: null, to: null },
 * });
 * 
 * @example
 * // With URL sync
 * const [filters, setFilters, { updateFilter, resetFilters, getFilterUrl }] = useFilterState(
 *   initialFilters,
 *   { syncWithUrl: true, debounceMs: 300 }
 * );
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Filter state options
 */
export interface FilterStateOptions {
  /**
   * Sync with URL query parameters
   * 
   * @default true
   */
  syncWithUrl?: boolean;

  /**
   * Debounce URL updates (milliseconds)
   * 
   * @default 300
   */
  debounceMs?: number;

  /**
   * Replace or push history state
   * 
   * @default "replace"
   */
  historyMode?: 'replace' | 'push';

  /**
   * Base URL for filter links
   * 
   * @default window.location.pathname
   */
  baseUrl?: string;
}

/**
 * Filter state utilities
 */
export interface FilterStateUtils<T> {
  /**
   * Update single filter value
   */
  updateFilter: <K extends keyof T>(key: K, value: T[K]) => void;

  /**
   * Reset all filters to initial state
   */
  resetFilters: () => void;

  /**
   * Get current filter URL
   */
  getFilterUrl: () => string;

  /**
   * Check if filters are active
   */
  hasActiveFilters: () => boolean;

  /**
   * Get filter count
   */
  getFilterCount: () => number;
}

/**
 * Parse URL query parameters
 */
function parseUrlParams(): URLSearchParams {
  if (typeof window === 'undefined') return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}

/**
 * Serialize filter value to URL parameter
 */
function serializeValue(value: any): string | null {
  if (value === null || value === undefined) return null;
  if (Array.isArray(value)) return value.length > 0 ? value.join(',') : null;
  if (typeof value === 'object') {
    // Handle date ranges, etc.
    if (value.from && value.to) {
      return `${value.from.toISOString().split('T')[0]},${value.to.toISOString().split('T')[0]}`;
    }
    return null;
  }
  return String(value);
}

/**
 * Deserialize URL parameter to filter value
 */
function deserializeValue(value: string | null, defaultValue: any): any {
  if (value === null) return defaultValue;

  // Array values (comma-separated)
  if (Array.isArray(defaultValue)) {
    return value.split(',').filter(Boolean);
  }

  // Number values
  if (typeof defaultValue === 'number') {
    const num = Number(value);
    return isNaN(num) ? defaultValue : num;
  }

  // Boolean values
  if (typeof defaultValue === 'boolean') {
    return value === 'true';
  }

  // Date range objects
  if (defaultValue && typeof defaultValue === 'object' && 'from' in defaultValue) {
    const [from, to] = value.split(',');
    return {
      from: from ? new Date(from) : null,
      to: to ? new Date(to) : null,
    };
  }

  // String values
  return value;
}

/**
 * Use Filter State Hook
 * 
 * Manages filter state with URL synchronization.
 * 
 * @param initialState - Initial filter values
 * @param options - Configuration options
 * @returns [filters, setFilters, utils]
 */
export function useFilterState<T extends Record<string, any>>(
  initialState: T,
  options: FilterStateOptions = {}
): [T, React.Dispatch<React.SetStateAction<T>>, FilterStateUtils<T>] {
  const {
    syncWithUrl = true,
    debounceMs = 300,
    historyMode = 'replace',
    baseUrl = typeof window !== 'undefined' ? window.location.pathname : '',
  } = options;

  // Initialize state from URL or initial values
  const getInitialState = useCallback((): T => {
    if (!syncWithUrl || typeof window === 'undefined') return initialState;

    const params = parseUrlParams();
    const stateFromUrl = { ...initialState };

    Object.keys(initialState).forEach((key) => {
      const urlValue = params.get(key);
      if (urlValue !== null) {
        (stateFromUrl as any)[key] = deserializeValue(urlValue, initialState[key]);
      }
    });

    return stateFromUrl;
  }, [initialState, syncWithUrl]);

  const [filters, setFilters] = useState<T>(getInitialState);
  const debounceTimer = useRef<NodeJS.Timeout>();

  // Sync filters to URL
  useEffect(() => {
    if (!syncWithUrl || typeof window === 'undefined') return;

    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Debounce URL update
    debounceTimer.current = setTimeout(() => {
      const params = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        const serialized = serializeValue(value);
        if (serialized !== null) {
          params.set(key, serialized);
        }
      });

      const newUrl = params.toString()
        ? `${baseUrl}?${params.toString()}`
        : baseUrl;

      if (historyMode === 'replace') {
        window.history.replaceState({}, '', newUrl);
      } else {
        window.history.pushState({}, '', newUrl);
      }
    }, debounceMs);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [filters, syncWithUrl, debounceMs, historyMode, baseUrl]);

  // Listen to browser back/forward
  useEffect(() => {
    if (!syncWithUrl || typeof window === 'undefined') return;

    const handlePopState = () => {
      setFilters(getInitialState());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [syncWithUrl, getInitialState]);

  // Utilities
  const updateFilter = useCallback(
    <K extends keyof T>(key: K, value: T[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const resetFilters = useCallback(() => {
    setFilters(initialState);
  }, [initialState]);

  const getFilterUrl = useCallback((): string => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      const serialized = serializeValue(value);
      if (serialized !== null) {
        params.set(key, serialized);
      }
    });

    return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
  }, [filters, baseUrl]);

  const hasActiveFilters = useCallback((): boolean => {
    return Object.entries(filters).some(([key, value]) => {
      const initial = initialState[key];
      
      // Array comparison
      if (Array.isArray(value) && Array.isArray(initial)) {
        return value.length !== initial.length || value.some((v, i) => v !== initial[i]);
      }
      
      // Object comparison (date ranges, etc.)
      if (value && typeof value === 'object' && initial && typeof initial === 'object') {
        return JSON.stringify(value) !== JSON.stringify(initial);
      }
      
      // Primitive comparison
      return value !== initial;
    });
  }, [filters, initialState]);

  const getFilterCount = useCallback((): number => {
    return Object.entries(filters).filter(([key, value]) => {
      const initial = initialState[key];
      
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      
      if (value && typeof value === 'object') {
        return JSON.stringify(value) !== JSON.stringify(initial);
      }
      
      return value !== initial;
    }).length;
  }, [filters, initialState]);

  const utils: FilterStateUtils<T> = {
    updateFilter,
    resetFilters,
    getFilterUrl,
    hasActiveFilters,
    getFilterCount,
  };

  return [filters, setFilters, utils];
}

/**
 * Get current URL parameters as object
 */
export function getUrlParams<T extends Record<string, string>>(): Partial<T> {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  const result: any = {};
  
  params.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
}

/**
 * Build URL with parameters
 */
export function buildFilterUrl(
  baseUrl: string,
  params: Record<string, any>
): string {
  const urlParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    const serialized = serializeValue(value);
    if (serialized !== null) {
      urlParams.set(key, serialized);
    }
  });
  
  return urlParams.toString() ? `${baseUrl}?${urlParams.toString()}` : baseUrl;
}
