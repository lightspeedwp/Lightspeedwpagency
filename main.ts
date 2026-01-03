import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    // Only include .stories.tsx files from components/blocks
    '../src/app/components/blocks/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // MDX documentation files
    '../src/**/*.mdx',
    '../guidelines/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y', // Accessibility testing
    '@storybook/addon-themes', // Theme switching
    '@chromatic-com/storybook', // Visual testing
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': '/src',
          '@/components': '/src/app/components',
          '@/data': '/src/app/data',
          '@/hooks': '/src/app/hooks',
          '@/utils': '/src/app/utils',
        },
      },
      optimizeDeps: {
        include: ['react', 'react-dom'],
        exclude: ['@storybook/blocks'],
      },
      build: {
        rollupOptions: {
          external: [],
        },
      },
    });
  },
  staticDirs: ['../public'],
};

export default config;
