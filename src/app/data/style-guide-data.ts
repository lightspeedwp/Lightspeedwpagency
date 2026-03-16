/**
 * Style Guide Template — Static Data
 *
 * Extracted from StyleGuideTemplate.tsx for file size compliance.
 * Contains all token arrays used by the style guide showcase sections.
 *
 * @see /src/app/components/templates/StyleGuideTemplate.tsx
 */

export const neonEffects = [
  { name: '--shadow-neon',         label: 'Neon' },
  { name: '--shadow-neon-intense', label: 'Neon intense' },
  { name: '--shadow-glow-sm',     label: 'Glow small' },
  { name: '--shadow-glow',        label: 'Glow' },
  { name: '--shadow-glow-lg',     label: 'Glow large' },
];

export const shadowPresets = [
  { name: '--shadow-sm',    label: 'Small' },
  { name: '--shadow-md',    label: 'Medium' },
  { name: '--shadow-lg',    label: 'Large' },
  { name: '--shadow-xl',    label: 'Extra large' },
  { name: '--shadow-hover', label: 'Hover' },
  { name: '--shadow-inner', label: 'Inner' },
];

export const colors = [
  { name: 'Primary',     cssVar: '--primary',     fg: '--primary-foreground' },
  { name: 'Secondary',   cssVar: '--secondary',   fg: '--color-white' },
  { name: 'Accent',      cssVar: '--accent',      fg: '--accent-foreground' },
  { name: 'Success',     cssVar: '--success',     fg: '--color-white' },
  { name: 'Warning',     cssVar: '--warning',     fg: '--color-white' },
  { name: 'Destructive', cssVar: '--destructive', fg: '--destructive-foreground' },
  { name: 'Muted',       cssVar: '--muted',       fg: '--muted-foreground' },
  { name: 'Card',        cssVar: '--card',        fg: '--card-foreground' },
];

export const surfaces = [
  { name: 'Background', cssVar: '--background', fg: '--foreground' },
  { name: 'Card',       cssVar: '--card',       fg: '--card-foreground' },
  { name: 'Sidebar',    cssVar: '--sidebar',    fg: '--color-white' },
  { name: 'Muted',      cssVar: '--muted',      fg: '--muted-foreground' },
];

export const typographyScale = [
  { level: 'H1', cssVar: '--text-h1', weight: '--font-weight-black',    sample: 'The quick brown fox' },
  { level: 'H2', cssVar: '--text-h2', weight: '--font-weight-bold',     sample: 'Jumps over the lazy dog' },
  { level: 'H3', cssVar: '--text-h3', weight: '--font-weight-bold',     sample: 'Design system specimen' },
  { level: 'H4', cssVar: '--text-h4', weight: '--font-weight-bold',     sample: 'Component heading style' },
  { level: 'H5', cssVar: '--text-h5', weight: '--font-weight-semibold', sample: 'Section subtitle text' },
  { level: 'H6', cssVar: '--text-h6', weight: '--font-weight-semibold', sample: 'Small label heading' },
];

export const radiusPresets = [
  { name: '--radius-sm',   label: 'Small' },
  { name: '--radius',      label: 'Default' },
  { name: '--radius-lg',   label: 'Large' },
  { name: '--radius-xl',   label: 'XL' },
  { name: '--radius-2xl',  label: '2XL' },
  { name: '--radius-full', label: 'Full' },
];

export const spacingScale = [
  { name: '--spacing-1',  label: '1 (4px)' },
  { name: '--spacing-2',  label: '2 (8px)' },
  { name: '--spacing-3',  label: '3 (12px)' },
  { name: '--spacing-4',  label: '4 (16px)' },
  { name: '--spacing-6',  label: '6 (24px)' },
  { name: '--spacing-8',  label: '8 (32px)' },
  { name: '--spacing-12', label: '12 (48px)' },
  { name: '--spacing-16', label: '16 (64px)' },
];

export const animationPresets = [
  { mod: 'pulse',       code: 'Glow pulse',       label: 'Badge / notification glow' },
  { mod: 'float',       code: 'Float',            label: 'Decorative orb movement' },
  { mod: 'border-flow', code: 'Neon border flow', label: 'Animated gradient border' },
  { mod: 'grid-drift',  code: 'Grid drift',       label: 'Background pattern movement' },
];
