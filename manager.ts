import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

/**
 * Custom Storybook Theme - LSX Design
 */
const lsxTheme = create({
  base: 'light',
  
  // Brand
  brandTitle: 'LSX Design System',
  brandUrl: 'https://lsxdesign.com',
  brandImage: '/logo-light.svg',
  brandTarget: '_self',

  // UI
  appBg: '#F8F9FA',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E5E7EB',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Manrope", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1F2937',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#6B7280',

  // Toolbar default and active colors
  barTextColor: '#6B7280',
  barSelectedColor: '#2563EB',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E5E7EB',
  inputTextColor: '#1F2937',
  inputBorderRadius: 4,

  // Color palette
  colorPrimary: '#2563EB',
  colorSecondary: '#10B981',
});

addons.setConfig({
  theme: lsxTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['components'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
