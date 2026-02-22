import type { Preview } from '@storybook/react';
import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';

// Import all design system styles (order matters!)
import './src/styles/index.css';

/**
 * Global Decorator - Wraps all stories
 * Ensures design system CSS variables and fonts are available
 * 
 * ✅ USES CSS VARIABLES for user control via CSS files
 */
const withDesignSystem = (Story: any) => {
  return (
    <div
      className="storybook-wrapper"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'var(--font-primary)',    // ✅ FIXED: CSS variable
        padding: 'var(--spacing-8)',          // ✅ FIXED: CSS variable
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    layout: 'fullscreen',
    backgrounds: {
      disable: true, // Use theme backgrounds instead
    },
    docs: {
      toc: true,
      canvas: {
        sourceState: 'shown',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'aria-allowed-attr',
            enabled: true,
          },
        ],
      },
    },
  },
  decorators: [
    withDesignSystem,
    withThemeByClassName({
      themes: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'light',
    }),
  ],
  tags: ['autodocs'],
};

export default preview;
