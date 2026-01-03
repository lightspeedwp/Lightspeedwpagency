/**
 * Vitest Configuration
 * 
 * Test configuration for LSX Design system components and utilities.
 * 
 * **Features:**
 * - React component testing with Testing Library
 * - Accessibility testing with jest-axe
 * - TypeScript support
 * - Coverage reporting
 * - Fast watch mode
 * 
 * **Usage:**
 * ```bash
 * npm test           # Run all tests
 * npm test:watch     # Watch mode
 * npm test:coverage  # Generate coverage report
 * npm test:ui        # Open Vitest UI
 * ```
 */

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  test: {
    // Test environment
    environment: 'jsdom',
    
    // Setup files
    setupFiles: ['./__tests__/setup.ts'],
    
    // Global test utilities
    globals: true,
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        '__tests__/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/dist/',
        'scripts/',
      ],
      include: [
        'src/app/components/**/*.{ts,tsx}',
        'src/app/data/**/*.{ts,tsx}',
        'src/app/contexts/**/*.{ts,tsx}',
      ],
      all: true,
      lines: 80,
      functions: 80,
      branches: 75,
      statements: 80,
    },
    
    // Test file patterns
    include: [
      '**/__tests__/**/*.test.{ts,tsx}',
      '**/*.spec.{ts,tsx}',
    ],
    
    // Exclude patterns
    exclude: [
      'node_modules/',
      'dist/',
      '.next/',
      'out/',
    ],
    
    // Timeout for tests (ms)
    testTimeout: 10000,
    
    // Bail on first failure in CI
    bail: process.env.CI === 'true' ? 1 : 0,
    
    // Reporter configuration
    reporters: process.env.CI === 'true' 
      ? ['verbose', 'json', 'junit']
      : ['verbose'],
      
    // Output configuration
    outputFile: {
      json: './test-results/results.json',
      junit: './test-results/junit.xml',
    },
  },
  
  // Resolve aliases (match tsconfig paths)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/app/components'),
      '@/data': path.resolve(__dirname, './src/app/data'),
      '@/contexts': path.resolve(__dirname, './src/app/contexts'),
      '@/styles': path.resolve(__dirname, './src/styles'),
    },
  },
});
