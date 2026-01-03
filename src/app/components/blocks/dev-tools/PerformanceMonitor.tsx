/**
 * Performance Monitor Component
 * 
 * Monitors Core Web Vitals and provides performance insights.
 * Only runs in development mode to avoid production overhead.
 * 
 * Core Web Vitals Measured:
 * - LCP (Largest Contentful Paint) - Target: < 2.5s
 * - FID (First Input Delay) - Target: < 100ms
 * - CLS (Cumulative Layout Shift) - Target: < 0.1
 * - FCP (First Contentful Paint) - Target: < 1.8s
 * - TTFB (Time to First Byte) - Target: < 600ms
 * 
 * @see https://web.dev/vitals/
 */

import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const metrics: PerformanceMetrics = {};

    // Measure TTFB (Time to First Byte)
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const nav = navigationEntries[0] as PerformanceNavigationTiming;
      metrics.ttfb = nav.responseStart - nav.requestStart;
    }

    // Measure FCP (First Contentful Paint)
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      metrics.fcp = fcpEntry.startTime;
    }

    // Measure LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Measure CLS (Cumulative Layout Shift)
        let clsScore = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsScore += (entry as any).value;
              metrics.cls = clsScore;
            }
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Measure FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            metrics.fid = (entry as any).processingStart - entry.startTime;
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Log metrics after page load
        setTimeout(() => {
          console.group('📊 Core Web Vitals');
          console.log('TTFB:', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A', '(Target: < 600ms)');
          console.log('FCP:', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A', '(Target: < 1800ms)');
          console.log('LCP:', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A', '(Target: < 2500ms)');
          console.log('FID:', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A', '(Target: < 100ms)');
          console.log('CLS:', metrics.cls !== undefined ? metrics.cls.toFixed(4) : 'N/A', '(Target: < 0.1)');
          console.groupEnd();

          // Performance grade
          const getGrade = () => {
            const issues = [];
            if (metrics.ttfb && metrics.ttfb > 600) issues.push('TTFB');
            if (metrics.fcp && metrics.fcp > 1800) issues.push('FCP');
            if (metrics.lcp && metrics.lcp > 2500) issues.push('LCP');
            if (metrics.fid && metrics.fid > 100) issues.push('FID');
            if (metrics.cls && metrics.cls > 0.1) issues.push('CLS');

            if (issues.length === 0) return '✅ EXCELLENT - All Core Web Vitals passed!';
            if (issues.length <= 1) return `⚠️ GOOD - 1 metric needs improvement: ${issues[0]}`;
            return `🔴 NEEDS WORK - ${issues.length} metrics need improvement: ${issues.join(', ')}`;
          };

          console.log('\n' + getGrade() + '\n');
        }, 3000);
      } catch (error) {
        console.warn('Performance monitoring not supported in this browser');
      }
    }
  }, []);

  // This component doesn't render anything
  return null;
}

/**
 * Performance Timing Hook
 * 
 * Utility hook for measuring component render performance.
 * 
 * @example
 * const { startTiming, endTiming } = usePerformanceTiming('MyComponent');
 * 
 * useEffect(() => {
 *   startTiming();
 *   // ... expensive operation
 *   endTiming();
 * }, []);
 */
export function usePerformanceTiming(componentName: string) {
  const startTiming = () => {
    if (process.env.NODE_ENV === 'development') {
      performance.mark(`${componentName}-start`);
    }
  };

  const endTiming = () => {
    if (process.env.NODE_ENV === 'development') {
      performance.mark(`${componentName}-end`);
      performance.measure(
        componentName,
        `${componentName}-start`,
        `${componentName}-end`
      );

      const measure = performance.getEntriesByName(componentName)[0];
      if (measure) {
        console.log(`⏱️ ${componentName}: ${measure.duration.toFixed(2)}ms`);
      }
    }
  };

  return { startTiming, endTiming };
}
