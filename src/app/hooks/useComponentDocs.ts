/**
 * useComponentDocs Hook
 *
 * Generate interactive component documentation
 * Extract props, examples, and usage information
 *
 * Features:
 * - Props extraction
 * - Usage examples
 * - Code snippets
 * - Accessibility notes
 * - Best practices
 *
 * Usage:
 * ```tsx
 * const docs = useComponentDocs('Button');
 * ```
 */

import { useState, useCallback } from 'react';

export interface ComponentProp {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

export interface ComponentExample {
  title: string;
  description: string;
  code: string;
}

export interface ComponentDocs {
  name: string;
  description: string;
  category: string;
  props: ComponentProp[];
  examples: ComponentExample[];
  accessibility: string[];
  bestPractices: string[];
  cssVariables: string[];
}

// Sample documentation data
const componentDocsData: Record<string, ComponentDocs> = {
  Button: {
    name: 'Button',
    description: 'Interactive button component with WordPress FSE support',
    category: 'Interactive',
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Button content (text or elements)',
      },
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'outline'",
        required: false,
        default: 'primary',
        description: 'Button style variant',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        required: false,
        default: 'md',
        description: 'Button size',
      },
      {
        name: 'page',
        type: 'string',
        required: false,
        description: 'Navigation page (replaces onClick)',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Disable button interaction',
      },
    ],
    examples: [
      {
        title: 'Primary Button',
        description: 'Default button style with primary colors',
        code: `<Button variant="primary" size="md">
  Click Me
</Button>`,
      },
      {
        title: 'Outline Button',
        description: 'Transparent button with border',
        code: `<Button variant="outline" size="lg">
  Learn More
</Button>`,
      },
      {
        title: 'Navigation Button',
        description: 'Button that navigates to a page',
        code: `<Button page="/contact">
  Get Started
</Button>`,
      },
    ],
    accessibility: [
      'Uses semantic <button> element',
      'Supports keyboard navigation (Enter/Space)',
      'Disabled state prevents interaction',
      'Focus ring visible for keyboard users',
      'ARIA attributes for screen readers',
    ],
    bestPractices: [
      'Use descriptive button text (avoid "Click Here")',
      'Prefer page prop over onClick for navigation',
      'Ensure minimum 44×44px touch target (WCAG AAA)',
      'Provide visual feedback on hover/focus',
      'Use appropriate variant for context',
    ],
    cssVariables: [
      '--primary (button background)',
      '--primary-foreground (button text)',
      '--accent (hover state)',
      '--spacing-3 (padding vertical)',
      '--spacing-6 (padding horizontal)',
      '--radius-full (border radius)',
      '--font-secondary (font family)',
      '--text-sm (font size)',
    ],
  },

  Toast: {
    name: 'Toast',
    description: 'Notification toast with auto-dismiss',
    category: 'Feedback',
    props: [
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Toast message content',
      },
      {
        name: 'variant',
        type: "'success' | 'error' | 'warning' | 'info'",
        required: false,
        default: 'info',
        description: 'Toast variant (affects color)',
      },
      {
        name: 'duration',
        type: 'number',
        required: false,
        default: '5000',
        description: 'Auto-dismiss duration (ms), 0 to disable',
      },
      {
        name: 'onClose',
        type: '() => void',
        required: true,
        description: 'Close callback function',
      },
    ],
    examples: [
      {
        title: 'Success Toast',
        description: 'Green toast for successful operations',
        code: `showToast('Operation completed!', 'success');`,
      },
      {
        title: 'Error Toast',
        description: 'Red toast for errors',
        code: `showToast('An error occurred', 'error');`,
      },
      {
        title: 'Custom Duration',
        description: 'Toast with 10 second display',
        code: `showToast('Important message', 'warning', 10000);`,
      },
    ],
    accessibility: [
      'ARIA live region (polite)',
      'Screen reader announces messages',
      'Close button keyboard accessible',
      'Progress bar visual indicator',
      'Respects prefers-reduced-motion',
    ],
    bestPractices: [
      'Keep messages concise (1-2 sentences)',
      'Use appropriate variant for context',
      'Provide actionable error messages',
      'Limit simultaneous toasts (max 5)',
      'Test with screen readers',
    ],
    cssVariables: [
      '--border (border color)',
      '--spacing-4 (padding)',
      '--spacing-3 (gap)',
      '--radius-lg (border radius)',
      '--font-secondary (font family)',
      '--text-sm (font size)',
    ],
  },

  LoadingSkeleton: {
    name: 'LoadingSkeleton',
    description: 'Loading placeholder with shimmer animation',
    category: 'Feedback',
    props: [
      {
        name: 'variant',
        type: "'text' | 'card' | 'image' | 'circle' | 'button'",
        required: false,
        default: 'text',
        description: 'Skeleton type',
      },
      {
        name: 'width',
        type: 'string | number',
        required: false,
        description: 'Custom width (text/button)',
      },
      {
        name: 'height',
        type: 'string | number',
        required: false,
        description: 'Custom height (image)',
      },
      {
        name: 'size',
        type: 'number',
        required: false,
        default: '48',
        description: 'Circle size in pixels',
      },
      {
        name: 'lines',
        type: 'number',
        required: false,
        default: '1',
        description: 'Number of text lines',
      },
    ],
    examples: [
      {
        title: 'Text Skeleton',
        description: 'Placeholder for text content',
        code: `<LoadingSkeleton variant="text" lines={3} />`,
      },
      {
        title: 'Card Skeleton',
        description: 'Complete card placeholder',
        code: `<LoadingSkeleton variant="card" />`,
      },
      {
        title: 'Circle Skeleton',
        description: 'Avatar placeholder',
        code: `<LoadingSkeleton variant="circle" size={64} />`,
      },
    ],
    accessibility: [
      'Static fallback for reduced motion',
      'ARIA busy state (implicit)',
      'Non-intrusive loading indicator',
      'Clear visual feedback',
    ],
    bestPractices: [
      'Match skeleton to content structure',
      'Use appropriate variant',
      'Show during data fetching',
      'Replace with actual content smoothly',
      'Respect prefers-reduced-motion',
    ],
    cssVariables: [
      '--spacing-2 (gap between lines)',
      '--radius (border radius)',
      '--radius-lg (card radius)',
      '--radius-full (circle radius)',
    ],
  },
};

export const useComponentDocs = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const getDocs = useCallback((componentName: string): ComponentDocs | null => {
    return componentDocsData[componentName] || null;
  }, []);

  const getAllComponents = useCallback((): string[] => {
    return Object.keys(componentDocsData);
  }, []);

  const getComponentsByCategory = useCallback((category: string): ComponentDocs[] => {
    return Object.values(componentDocsData).filter((doc) => doc.category === category);
  }, []);

  const selectComponent = useCallback((componentName: string) => {
    setSelectedComponent(componentName);
  }, []);

  return {
    getDocs,
    getAllComponents,
    getComponentsByCategory,
    selectedComponent,
    selectComponent,
  };
};
