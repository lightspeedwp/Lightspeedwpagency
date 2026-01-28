/**
 * Performance Monitoring Utilities
 * 
 * Tools for measuring and monitoring application performance:
 * - Web Vitals tracking (LCP, FID, CLS)
 * - Custom performance marks
 * - Bundle size analysis
 * - Render performance tracking
 * 
 * @example
 * // Track Web Vitals
 * trackWebVitals((metric) => {
 *   console.log(metric.name, metric.value);
 * });
 * 
 * // Measure custom performance
 * const measure = startMeasure('DataFetch');
 * await fetchData();
 * measure.end();
 */

/**
 * Web Vitals metrics
 */
export interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

/**
 * Track Web Vitals
 * 
 * Monitors Core Web Vitals and reports metrics.
 */
export function trackWebVitals(
  onMetric: (metric: WebVitalsMetric) => void
): void {
  if (typeof window === 'undefined') return;
  
  // LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        if (lastEntry) {
          const value = lastEntry.renderTime || lastEntry.loadTime;
          onMetric({
            name: 'LCP',
            value,
            rating: getRating('LCP', value),
            delta: value,
            id: generateId(),
          });
        }
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP tracking failed:', error);
    }
    
    // FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            const value = entry.processingStart - entry.startTime;
            onMetric({
              name: 'FID',
              value,
              rating: getRating('FID', value),
              delta: value,
              id: generateId(),
            });
          }
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID tracking failed:', error);
    }
    
    // CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        onMetric({
          name: 'CLS',
          value: clsValue,
          rating: getRating('CLS', clsValue),
          delta: clsValue,
          id: generateId(),
        });
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS tracking failed:', error);
    }
  }
}

/**
 * Get performance rating based on thresholds
 */
function getRating(
  metric: WebVitalsMetric['name'],
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
    INP: { good: 200, poor: 500 },
  };
  
  const threshold = thresholds[metric];
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Generate unique metric ID
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Performance measure
 */
export interface PerformanceMeasure {
  name: string;
  startTime: number;
  end: () => number;
  duration: () => number;
}

/**
 * Start a performance measure
 */
export function startMeasure(name: string): PerformanceMeasure {
  const startTime = performance.now();
  let endTime: number | null = null;
  
  return {
    name,
    startTime,
    end: () => {
      endTime = performance.now();
      const duration = endTime - startTime;
      
      // console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`);
      
      // Use Performance API if available
      if (typeof window !== 'undefined' && 'performance' in window) {
        try {
          performance.mark(`${name}-end`);
          performance.measure(name, `${name}-start`, `${name}-end`);
        } catch (error) {
          // Ignore errors
        }
      }
      
      return duration;
    },
    duration: () => {
      if (endTime === null) {
        return performance.now() - startTime;
      }
      return endTime - startTime;
    },
  };
}

/**
 * Measure async function
 */
export async function measureAsync<T>(
  name: string,
  fn: () => Promise<T>
): Promise<{ result: T; duration: number }> {
  const measure = startMeasure(name);
  
  try {
    const result = await fn();
    const duration = measure.end();
    
    return { result, duration };
  } catch (error) {
    measure.end();
    throw error;
  }
}

/**
 * Measure sync function
 */
export function measureSync<T>(
  name: string,
  fn: () => T
): { result: T; duration: number } {
  const measure = startMeasure(name);
  
  try {
    const result = fn();
    const duration = measure.end();
    
    return { result, duration };
  } catch (error) {
    measure.end();
    throw error;
  }
}

/**
 * Track component render time
 */
export function useRenderTime(componentName: string): void {
  if (typeof window === 'undefined') return;
  
  const renderStart = performance.now();
  
  // Log render time after render completes
  setTimeout(() => {
    const renderTime = performance.now() - renderStart;
    // console.log(`[Render] ${componentName}: ${renderTime.toFixed(2)}ms`);
  }, 0);
}

/**
 * Performance budget checker
 */
export interface PerformanceBudget {
  lcp: number;  // ms
  fid: number;  // ms
  cls: number;  // score
  bundleSize: number;  // bytes
}

export interface BudgetResult {
  metric: string;
  value: number;
  budget: number;
  status: 'pass' | 'warn' | 'fail';
  percentage: number;
}

export function checkPerformanceBudget(
  metrics: Record<string, number>,
  budget: PerformanceBudget
): BudgetResult[] {
  const results: BudgetResult[] = [];
  
  Object.entries(budget).forEach(([metric, budgetValue]) => {
    const actualValue = metrics[metric] || 0;
    const percentage = (actualValue / budgetValue) * 100;
    
    let status: 'pass' | 'warn' | 'fail';
    if (percentage <= 80) status = 'pass';
    else if (percentage <= 100) status = 'warn';
    else status = 'fail';
    
    results.push({
      metric,
      value: actualValue,
      budget: budgetValue,
      status,
      percentage,
    });
  });
  
  return results;
}

/**
 * Log performance summary
 */
export function logPerformanceSummary(): void {
  if (typeof window === 'undefined') return;
  
  const navigation = performance.getEntriesByType('navigation')[0] as any;
  
  if (!navigation) {
    console.warn('Navigation timing not available');
    return;
  }
  
  if (process.env.NODE_ENV === 'development') {
    // console.group('📊 Performance Summary');
    // ... rest of logging
  }
  
  console.log('⏱️  DNS Lookup:', 
    `${(navigation.domainLookupEnd - navigation.domainLookupStart).toFixed(2)}ms`
  );
  
  console.log('🔌 TCP Connection:', 
    `${(navigation.connectEnd - navigation.connectStart).toFixed(2)}ms`
  );
  
  console.log('📥 Request Time:', 
    `${(navigation.responseStart - navigation.requestStart).toFixed(2)}ms`
  );
  
  console.log('📄 Response Time:', 
    `${(navigation.responseEnd - navigation.responseStart).toFixed(2)}ms`
  );
  
  console.log('🎨 DOM Processing:', 
    `${(navigation.domComplete - navigation.domLoading).toFixed(2)}ms`
  );
  
  console.log('✨ Page Load:', 
    `${(navigation.loadEventEnd - navigation.fetchStart).toFixed(2)}ms`
  );
  
  console.groupEnd();
}

/**
 * Memory usage (if available)
 */
export function logMemoryUsage(): void {
  if (typeof window === 'undefined') return;
  
  const memory = (performance as any).memory;
  
  if (!memory) {
    console.warn('Memory API not available');
    return;
  }
  
  if (process.env.NODE_ENV === 'development') {
    /*
    console.group('💾 Memory Usage');
    
    console.log('Used JS Heap:', 
      `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`
    );
    
    console.log('Total JS Heap:', 
      `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`
    );
    
    console.log('Heap Limit:', 
      `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
    );
    
    const percentUsed = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
    console.log('Heap Usage:', `${percentUsed.toFixed(1)}%`);
    
    console.groupEnd();
    */
  }
}

/**
 * Network information (if available)
 */
export function getNetworkInfo(): {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
} {
  if (typeof window === 'undefined') return {};
  
  const connection = (navigator as any).connection || 
                     (navigator as any).mozConnection || 
                     (navigator as any).webkitConnection;
  
  if (!connection) return {};
  
  return {
    effectiveType: connection.effectiveType,
    downlink: connection.downlink,
    rtt: connection.rtt,
    saveData: connection.saveData,
  };
}

/**
 * Log complete performance report
 */
export function logPerformanceReport(): void {
  if (process.env.NODE_ENV === 'development') {
    /*
    console.log('\n🚀 LSX Design - Performance Report\n');
    
    logPerformanceSummary();
    logMemoryUsage();
    
    const networkInfo = getNetworkInfo();
    if (Object.keys(networkInfo).length > 0) {
      console.group('🌐 Network Information');
      console.log('Connection Type:', networkInfo.effectiveType);
      console.log('Downlink Speed:', `${networkInfo.downlink} Mbps`);
      console.log('Round Trip Time:', `${networkInfo.rtt}ms`);
      console.log('Data Saver:', networkInfo.saveData ? 'ON' : 'OFF');
      console.groupEnd();
    }
    
    console.log('\n');
    */
  }
}
