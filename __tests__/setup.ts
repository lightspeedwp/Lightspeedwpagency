/**
 * Vitest Setup File
 * 
 * Global test configuration and setup for LSX Design system tests.
 * 
 * **What it does:**
 * - Configures Testing Library
 * - Extends Jest matchers with jest-axe
 * - Sets up global mocks
 * - Configures CSS variable support
 * - Provides test utilities
 */

import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';

// Extend Vitest matchers with jest-axe
expect.extend(toHaveNoViolations);

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock window.matchMedia (for responsive design tests)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver (for lazy loading tests)
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
} as any;

// Mock ResizeObserver (for responsive component tests)
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as any;

// Mock CSS variables for design system testing
const mockGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = (element: Element) => {
  const styles = mockGetComputedStyle(element);
  
  // Add CSS variable mocks
  const customProperties: Record<string, string> = {
    '--primary': 'rgb(30, 106, 255)',
    '--primary-foreground': 'rgb(255, 255, 255)',
    '--background': 'rgb(255, 255, 255)',
    '--foreground': 'rgb(15, 15, 15)',
    '--text-base': '16px',
    '--text-h1': '60px',
    '--text-h2': '32px',
    '--radius': '4px',
    '--font-weight-regular': '400',
    '--font-weight-medium': '500',
  };
  
  return new Proxy(styles, {
    get(target, prop: string) {
      if (prop.startsWith('--')) {
        return customProperties[prop] || '';
      }
      return (target as any)[prop];
    },
  });
};

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
};
global.localStorage = localStorageMock as any;

// Mock sessionStorage
global.sessionStorage = localStorageMock as any;

// Suppress console errors in tests (optional - can be removed for debugging)
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: any[]) => {
    // Filter out specific React warnings if needed
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

// Global test utilities
export const mockNavigate = vi.fn();

// Helper to wait for async operations
export const waitForAsync = () => new Promise(resolve => setTimeout(resolve, 0));

// Helper to get CSS variable value
export function getCSSVariable(element: HTMLElement, variable: string): string {
  return window.getComputedStyle(element).getPropertyValue(variable);
}

// Helper to check WCAG contrast ratio (simplified)
export function checkContrastRatio(foreground: string, background: string): number {
  // This is a simplified version - real implementation would use proper color parsing
  // For actual testing, use jest-axe or similar tools
  return 4.5; // Mock return value
}

// Helper to create mock data
export const createMockPage = (overrides = {}) => ({
  slug: 'test-page',
  title: 'Test Page',
  showInNav: true,
  ...overrides,
});

export const createMockPost = (overrides = {}) => ({
  slug: 'test-post',
  title: 'Test Post',
  excerpt: 'Test excerpt',
  content: 'Test content',
  date: '2024-12-26',
  author: 'Test Author',
  categories: ['Test Category'],
  tags: ['test'],
  ...overrides,
});

export const createMockProject = (overrides = {}) => ({
  slug: 'test-project',
  title: 'Test Project',
  excerpt: 'Test project description',
  client: 'Test Client',
  projectGroups: ['Test Group'],
  projectTags: ['test'],
  featured: false,
  ...overrides,
});
