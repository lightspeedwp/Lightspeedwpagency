/**
 * React Performance Utilities
 * 
 * Utilities for optimizing React component performance:
 * - Memoization helpers
 * - Expensive computation optimization
 * - Debounce and throttle hooks
 * - Render tracking (dev only)
 * 
 * @see https://react.dev/reference/react/memo
 * @see https://react.dev/reference/react/useCallback
 * @see https://react.dev/reference/react/useMemo
 */

import { useEffect, useRef, useCallback, useMemo } from 'react';

/**
 * Use Debounce Hook
 * 
 * Delays execution of a callback until after the specified delay.
 * Useful for search inputs, resize handlers, etc.
 * 
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearch = useDebounce(searchTerm, 500);
 * 
 * useEffect(() => {
 *   // API call with debouncedSearch
 * }, [debouncedSearch]);
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Use Throttle Hook
 * 
 * Limits how often a function can be called.
 * Useful for scroll handlers, mouse move events, etc.
 * 
 * @example
 * const handleScroll = useThrottle(() => {
 *   console.log('Scrolling...');
 * }, 200);
 */
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const lastRun = useRef(Date.now());

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = now;
      }
    },
    [callback, delay]
  ) as T;
}

/**
 * Use Render Count Hook
 * 
 * Tracks how many times a component has rendered.
 * Only runs in development mode.
 * 
 * @example
 * function MyComponent() {
 *   useRenderCount('MyComponent');
 *   // ...
 * }
 */
export function useRenderCount(componentName: string) {
  const renderCount = useRef(0);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      renderCount.current += 1;
      console.log(`🔄 ${componentName} rendered ${renderCount.current} times`);
    }
  });
}

/**
 * Use Previous Value Hook
 * 
 * Stores the previous value of a state or prop.
 * Useful for comparing changes.
 * 
 * @example
 * const [count, setCount] = useState(0);
 * const previousCount = usePrevious(count);
 * 
 * console.log(`Changed from ${previousCount} to ${count}`);
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/**
 * Use Memoized Callback with Dependencies
 * 
 * Enhanced useCallback that logs when callback is recreated (dev only).
 * 
 * @example
 * const handleClick = useMemoizedCallback(() => {
 *   console.log('Clicked!');
 * }, [dependency], 'handleClick');
 */
export function useMemoizedCallback<T extends (...args: any[]) => any>(
  callback: T,
  dependencies: any[],
  debugName?: string
): T {
  const prevDeps = usePrevious(dependencies);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && debugName && prevDeps) {
      const changedDeps = dependencies.filter((dep, i) => dep !== prevDeps[i]);
      if (changedDeps.length > 0) {
        console.log(`🔄 ${debugName} callback recreated due to dependency change`);
      }
    }
  }, [dependencies, debugName, prevDeps]);

  return useCallback(callback, dependencies);
}

/**
 * Use Memoized Value with Dependencies
 * 
 * Enhanced useMemo that logs when value is recomputed (dev only).
 * 
 * @example
 * const expensiveValue = useMemoizedValue(
 *   () => computeExpensiveValue(data),
 *   [data],
 *   'expensiveValue'
 * );
 */
export function useMemoizedValue<T>(
  factory: () => T,
  dependencies: any[],
  debugName?: string
): T {
  const prevDeps = usePrevious(dependencies);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && debugName && prevDeps) {
      const changedDeps = dependencies.filter((dep, i) => dep !== prevDeps[i]);
      if (changedDeps.length > 0) {
        console.log(`🔄 ${debugName} value recomputed due to dependency change`);
      }
    }
  }, [dependencies, debugName, prevDeps]);

  return useMemo(factory, dependencies);
}

/**
 * Use Intersection Observer Hook
 * 
 * Detects when an element enters or leaves the viewport.
 * Useful for lazy loading, animations, analytics.
 * 
 * @example
 * const [ref, isIntersecting] = useIntersectionObserver({
 *   threshold: 0.5,
 *   rootMargin: '100px',
 * });
 * 
 * return <div ref={ref}>{isIntersecting ? 'Visible' : 'Hidden'}</div>;
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): [React.RefCallback<HTMLElement>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, options]);

  return [setElement, isIntersecting];
}

/**
 * Performance Profiler Component
 * 
 * Wraps children with React Profiler for performance monitoring.
 * Only active in development mode.
 * 
 * @example
 * <PerformanceProfiler id="ExpensiveComponent">
 *   <ExpensiveComponent />
 * </PerformanceProfiler>
 */
import { Profiler, ProfilerOnRenderCallback } from 'react';
import { useState } from 'react';

interface PerformanceProfilerProps {
  id: string;
  children: React.ReactNode;
}

export function PerformanceProfiler({ id, children }: PerformanceProfilerProps) {
  if (process.env.NODE_ENV !== 'development') {
    return <>{children}</>;
  }

  const onRender: ProfilerOnRenderCallback = (
    profileId,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(`⏱️ [${profileId}] ${phase} render:`, {
      actualDuration: `${actualDuration.toFixed(2)}ms`,
      baseDuration: `${baseDuration.toFixed(2)}ms`,
      startTime: `${startTime.toFixed(2)}ms`,
      commitTime: `${commitTime.toFixed(2)}ms`,
    });
  };

  return (
    <Profiler id={id} onRender={onRender}>
      {children}
    </Profiler>
  );
}

/**
 * Memoization Utility Functions
 */

/**
 * Shallow compare two objects for equality.
 * Useful for React.memo comparison functions.
 */
export function shallowEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  if (obj1 === null || obj2 === null) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

/**
 * Deep compare two values for equality.
 * Warning: Can be expensive for large objects.
 */
export function deepEqual(val1: any, val2: any): boolean {
  if (val1 === val2) return true;
  if (typeof val1 !== 'object' || typeof val2 !== 'object') return false;
  if (val1 === null || val2 === null) return false;
  if (Array.isArray(val1) !== Array.isArray(val2)) return false;

  const keys1 = Object.keys(val1);
  const keys2 = Object.keys(val2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(val1[key], val2[key])) return false;
  }

  return true;
}
