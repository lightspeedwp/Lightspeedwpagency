/**
 * Design Playground — Token Data & Types
 *
 * All token arrays and type definitions for the DesignPlaygroundTemplate.
 *
 * @split March 16, 2026
 */

import { Palette, TextT, Ruler, Circle, Stack } from '@phosphor-icons/react';

export type TabId = 'colors' | 'typography' | 'spacing' | 'radius' | 'shadows';

export interface ColorToken {
  name: string;
  variable: string;
  defaultValue: string;
  description: string;
}

export interface SpacingToken {
  name: string;
  variable: string;
  value: string;
  px: number;
}

export interface RadiusToken {
  name: string;
  variable: string;
  value: string;
}

export interface ShadowToken {
  name: string;
  variable: string;
  value: string;
}

export const colorTokens: ColorToken[] = [
  { name: 'Background', variable: '--background', defaultValue: '#FFFFFF', description: 'Page background' },
  { name: 'Foreground', variable: '--foreground', defaultValue: '#090909', description: 'Primary text' },
  { name: 'Card', variable: '--card', defaultValue: '#F9FAFB', description: 'Card background' },
  { name: 'Card Foreground', variable: '--card-foreground', defaultValue: '#090909', description: 'Card text' },
  { name: 'Primary', variable: '--primary', defaultValue: '#1E6AFF', description: 'Brand / interactive' },
  { name: 'Primary Foreground', variable: '--primary-foreground', defaultValue: '#FFFFFF', description: 'Text on primary' },
  { name: 'Secondary', variable: '--secondary', defaultValue: '#7BE7FF', description: 'Accent / decorative' },
  { name: 'Secondary Foreground', variable: '--secondary-foreground', defaultValue: '#0E3278', description: 'Text on secondary' },
  { name: 'Muted', variable: '--muted', defaultValue: '#E1E1E1', description: 'Subtle background' },
  { name: 'Muted Foreground', variable: '--muted-foreground', defaultValue: '#565656', description: 'Secondary text' },
  { name: 'Accent', variable: '--accent', defaultValue: '#7BE7FF', description: 'Highlight / hover' },
  { name: 'Accent Foreground', variable: '--accent-foreground', defaultValue: '#0E3278', description: 'Text on accent' },
  { name: 'Border', variable: '--border', defaultValue: '#D1D5DB', description: 'Default border' },
  { name: 'Ring', variable: '--ring', defaultValue: '#1E6AFF', description: 'Focus ring' },
  { name: 'Destructive', variable: '--destructive', defaultValue: '#DC2626', description: 'Error / delete' },
  { name: 'Success', variable: '--success', defaultValue: '#16A34A', description: 'Success state' },
  { name: 'Warning', variable: '--warning', defaultValue: '#D97706', description: 'Warning state' },
  { name: 'Info', variable: '--info', defaultValue: '#2563EB', description: 'Info state' },
];

export const spacingTokens: SpacingToken[] = [
  { name: '--spacing-1', variable: '--spacing-1', value: '0.25rem', px: 4 },
  { name: '--spacing-2', variable: '--spacing-2', value: '0.5rem', px: 8 },
  { name: '--spacing-3', variable: '--spacing-3', value: '0.75rem', px: 12 },
  { name: '--spacing-4', variable: '--spacing-4', value: '1rem', px: 16 },
  { name: '--spacing-5', variable: '--spacing-5', value: '1.25rem', px: 20 },
  { name: '--spacing-6', variable: '--spacing-6', value: '1.5rem', px: 24 },
  { name: '--spacing-8', variable: '--spacing-8', value: '2rem', px: 32 },
  { name: '--spacing-10', variable: '--spacing-10', value: '2.5rem', px: 40 },
  { name: '--spacing-12', variable: '--spacing-12', value: '3rem', px: 48 },
  { name: '--spacing-16', variable: '--spacing-16', value: '4rem', px: 64 },
  { name: '--spacing-20', variable: '--spacing-20', value: '5rem', px: 80 },
  { name: '--spacing-24', variable: '--spacing-24', value: '6rem', px: 96 },
  { name: '--spacing-32', variable: '--spacing-32', value: '8rem', px: 128 },
];

export const radiusTokens: RadiusToken[] = [
  { name: '--radius-sm', variable: '--radius-sm', value: '2px' },
  { name: '--radius', variable: '--radius', value: '4px' },
  { name: '--radius-md', variable: '--radius-md', value: '6px' },
  { name: '--radius-lg', variable: '--radius-lg', value: '8px' },
  { name: '--radius-xl', variable: '--radius-xl', value: '12px' },
  { name: '--radius-2xl', variable: '--radius-2xl', value: '16px' },
  { name: '--radius-full', variable: '--radius-full', value: '9999px' },
];

export const shadowTokens: ShadowToken[] = [
  { name: '--shadow-sm', variable: '--shadow-sm', value: '0 1px 3px color-mix(in srgb, var(--color-black) 5%, transparent)' },
  { name: '--shadow-md', variable: '--shadow-md', value: '0 4px 6px color-mix(in srgb, var(--color-black) 5%, transparent)' },
  { name: '--shadow-lg', variable: '--shadow-lg', value: '0 10px 40px color-mix(in srgb, var(--color-black) 15%, transparent)' },
  { name: '--shadow-xl', variable: '--shadow-xl', value: '0 20px 40px color-mix(in srgb, var(--color-black) 12%, transparent)' },
  { name: '--shadow-hover', variable: '--shadow-hover', value: '0 8px 16px color-mix(in srgb, var(--color-black) 10%, transparent)' },
  { name: '--shadow-inner', variable: '--shadow-inner', value: 'inset 0 2px 4px color-mix(in srgb, var(--color-black) 6%, transparent)' },
  { name: '--shadow-neon', variable: '--shadow-neon', value: '0 0 8px var(--neon-color), 0 0 20px color-mix(in srgb, var(--neon-color) 40%, transparent)' },
  { name: '--shadow-glow', variable: '--shadow-glow', value: '0 0 15px color-mix(in srgb, var(--primary) 30%, transparent)' },
];

export const typeFonts = [
  { label: 'Lexend (Primary)', value: "'Lexend', sans-serif" },
  { label: 'Manrope (Secondary)', value: "'Manrope', sans-serif" },
  { label: 'System UI', value: 'system-ui, -apple-system, sans-serif' },
  { label: 'Georgia (Serif)', value: 'Georgia, "Times New Roman", serif' },
  { label: 'Monospace', value: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
];

export const typeWeights = [
  { label: '300 Light', value: '300' },
  { label: '400 Regular', value: '400' },
  { label: '500 Medium', value: '500' },
  { label: '600 Semibold', value: '600' },
  { label: '700 Bold', value: '700' },
  { label: '800 Black', value: '800' },
];

export const tabs: { id: TabId; label: string; icon: typeof Palette }[] = [
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: TextT },
  { id: 'spacing', label: 'Spacing', icon: Ruler },
  { id: 'radius', label: 'Radius', icon: Circle },
  { id: 'shadows', label: 'Shadows', icon: Stack },
];

export const typeSpecimens = [
  { label: 'H1 — var(--text-h1)', size: 'var(--text-h1)' },
  { label: 'H2 — var(--text-h2)', size: 'var(--text-h2)' },
  { label: 'H3 — var(--text-h3)', size: 'var(--text-h3)' },
  { label: 'H4 — var(--text-h4)', size: 'var(--text-h4)' },
  { label: 'H5 — var(--text-h5)', size: 'var(--text-h5)' },
  { label: 'H6 — var(--text-h6)', size: 'var(--text-h6)' },
  { label: 'Lead — var(--text-lead)', size: 'var(--text-lead)' },
  { label: 'Base — var(--text-base)', size: 'var(--text-base)' },
  { label: 'Small — var(--text-small)', size: 'var(--text-small)' },
  { label: 'XS — var(--text-xs)', size: 'var(--text-xs)' },
];
