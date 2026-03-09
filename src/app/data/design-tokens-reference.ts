/**
 * Design Tokens Reference Data
 *
 * Token definitions used by the DesignTokensReferenceTemplate.
 * Extracted for maintainability — token data is separate from rendering.
 *
 * @see /src/app/components/templates/DesignTokensReferenceTemplate.tsx
 * @see /src/styles/theme-base.css
 * @see /src/styles/theme-light.css
 * @see /src/styles/theme-dark.css
 */

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

export interface ColorToken {
  variable: string;
  label: string;
  description: string;
}

export interface TypographyToken {
  variable: string;
  label: string;
  sizeHint: string;
  fontFamily: string;
}

export interface SpacingToken {
  variable: string;
  px: number;
  label: string;
}

export interface ShadowToken {
  variable: string;
  label: string;
  description: string;
}

export interface RadiusToken {
  variable: string;
  label: string;
  value: string;
}

export interface ZIndexToken {
  variable: string;
  value: number;
  label: string;
}

export interface AnimationToken {
  variable: string;
  label: string;
  description: string;
  value: string;
}

export interface OverlayToken {
  variable: string;
  label: string;
}

export interface BorderToken {
  variable: string;
  label: string;
  value: string;
  style: string;
}

/* ═══════════════════════════════════════════
 * Token Data
 * ═══════════════════════════════════════════ */

/* ─── Color Tokens ─── */
export const colorTokens: ColorToken[] = [
  { variable: '--background', label: 'Background', description: 'Page background' },
  { variable: '--foreground', label: 'Foreground', description: 'Body text' },
  { variable: '--card', label: 'Card', description: 'Card / panel background' },
  { variable: '--card-foreground', label: 'Card Foreground', description: 'Text on cards' },
  { variable: '--card-hover', label: 'Card Hover', description: 'Card hover state' },
  { variable: '--primary', label: 'Primary', description: 'Brand / CTA color' },
  { variable: '--primary-foreground', label: 'Primary Foreground', description: 'Text on primary' },
  { variable: '--primary-soft', label: 'Primary Soft', description: 'Badges, tags (10%)' },
  { variable: '--primary-dark', label: 'Primary Dark', description: 'Hover state on links' },
  { variable: '--secondary', label: 'Secondary', description: 'Secondary buttons' },
  { variable: '--secondary-foreground', label: 'Secondary Foreground', description: 'Text on secondary' },
  { variable: '--muted', label: 'Muted', description: 'Disabled / subtle backgrounds' },
  { variable: '--muted-foreground', label: 'Muted Foreground', description: 'Secondary text' },
  { variable: '--accent', label: 'Accent', description: 'Hover states, active links' },
  { variable: '--accent-foreground', label: 'Accent Foreground', description: 'Text on accent' },
  { variable: '--destructive', label: 'Destructive', description: 'Error / delete' },
  { variable: '--destructive-foreground', label: 'Destructive FG', description: 'Text on destructive' },
  { variable: '--warning', label: 'Warning', description: 'Caution alerts' },
  { variable: '--warning-foreground', label: 'Warning FG', description: 'Text on warning' },
  { variable: '--success', label: 'Success', description: 'Confirmations' },
  { variable: '--success-foreground', label: 'Success FG', description: 'Text on success' },
  { variable: '--info', label: 'Info', description: 'Informational tips' },
  { variable: '--info-foreground', label: 'Info FG', description: 'Text on info' },
  { variable: '--border', label: 'Border', description: 'Input borders, dividers' },
  { variable: '--border-soft', label: 'Border Soft', description: 'Subtle card borders' },
  { variable: '--border-extra-soft', label: 'Border Extra Soft', description: 'Very subtle dividers' },
  { variable: '--input', label: 'Input', description: 'Form field background' },
  { variable: '--ring', label: 'Ring', description: 'Focus ring color' },
];

/* ─── Typography Tokens ─── */
export const typographyTokens: TypographyToken[] = [
  { variable: '--text-h1', label: 'H1', sizeHint: '40px → 64px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h2', label: 'H2', sizeHint: '32px → 48px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h3', label: 'H3', sizeHint: '24px → 36px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h4', label: 'H4', sizeHint: '20px → 28px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h5', label: 'H5', sizeHint: '18px → 24px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-h6', label: 'H6', sizeHint: '16px → 20px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-lead', label: 'Lead', sizeHint: '20px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-xl', label: 'XL', sizeHint: '20px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-lg', label: 'LG', sizeHint: '18px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-base', label: 'Base', sizeHint: '16px', fontFamily: 'var(--font-primary)' },
  { variable: '--text-small', label: 'Small', sizeHint: '14px', fontFamily: 'var(--font-secondary)' },
  { variable: '--text-xs', label: 'XS', sizeHint: '12px', fontFamily: 'var(--font-secondary)' },
  { variable: '--text-2xs', label: '2XS', sizeHint: '10px', fontFamily: 'var(--font-secondary)' },
];

/* ─── Spacing Tokens ─── */
export const spacingTokens: SpacingToken[] = [
  { variable: '--spacing-0', px: 0, label: '0' },
  { variable: '--spacing-1', px: 4, label: '1' },
  { variable: '--spacing-1-5', px: 6, label: '1.5' },
  { variable: '--spacing-2', px: 8, label: '2' },
  { variable: '--spacing-3', px: 12, label: '3' },
  { variable: '--spacing-4', px: 16, label: '4' },
  { variable: '--spacing-5', px: 20, label: '5' },
  { variable: '--spacing-6', px: 24, label: '6' },
  { variable: '--spacing-7', px: 28, label: '7' },
  { variable: '--spacing-8', px: 32, label: '8' },
  { variable: '--spacing-9', px: 36, label: '9' },
  { variable: '--spacing-10', px: 40, label: '10' },
  { variable: '--spacing-12', px: 48, label: '12' },
  { variable: '--spacing-14', px: 56, label: '14' },
  { variable: '--spacing-16', px: 64, label: '16' },
  { variable: '--spacing-20', px: 80, label: '20' },
  { variable: '--spacing-24', px: 96, label: '24' },
  { variable: '--spacing-32', px: 128, label: '32' },
  { variable: '--spacing-48', px: 192, label: '48' },
  { variable: '--spacing-64', px: 256, label: '64' },
];

/* ─── Shadow Tokens ─── */
export const shadowTokens: ShadowToken[] = [
  { variable: '--shadow-sm', label: 'Small', description: 'Subtle elevation' },
  { variable: '--shadow-md', label: 'Medium', description: 'Card elevation' },
  { variable: '--shadow-lg', label: 'Large', description: 'Modal elevation' },
  { variable: '--shadow-xl', label: 'Extra Large', description: 'Floating element' },
  { variable: '--shadow-hover', label: 'Hover', description: 'Interactive hover' },
  { variable: '--shadow-inner', label: 'Inner', description: 'Inset shadow' },
  { variable: '--shadow-card-hover', label: 'Card Hover', description: 'Card hover state' },
  { variable: '--shadow-subtle', label: 'Subtle', description: 'Barely visible' },
  { variable: '--shadow-cta', label: 'CTA', description: 'Call-to-action button' },
  { variable: '--shadow-neon', label: 'Neon', description: 'Neon glow effect' },
  { variable: '--shadow-neon-intense', label: 'Neon Intense', description: 'Strong neon glow' },
  { variable: '--shadow-glow', label: 'Glow', description: 'Soft ambient glow' },
  { variable: '--shadow-glow-sm', label: 'Glow Small', description: 'Subtle glow' },
  { variable: '--shadow-glow-lg', label: 'Glow Large', description: 'Large ambient glow' },
  { variable: '--shadow-focus-ring', label: 'Focus Ring', description: 'Focus outline shadow' },
];

/* ─── Radius Tokens ─── */
export const radiusTokens: RadiusToken[] = [
  { variable: '--radius-sm', label: 'SM', value: '2px' },
  { variable: '--radius', label: 'Default', value: '4px' },
  { variable: '--radius-md', label: 'MD', value: '6px' },
  { variable: '--radius-lg', label: 'LG', value: '8px' },
  { variable: '--radius-xl', label: 'XL', value: '12px' },
  { variable: '--radius-2xl', label: '2XL', value: '16px' },
  { variable: '--radius-full', label: 'Full', value: '9999px' },
];

/* ─── Z-Index Tokens ─── */
export const zIndexTokens: ZIndexToken[] = [
  { variable: '--z-base', value: 0, label: 'Base' },
  { variable: '--z-dropdown', value: 1000, label: 'Dropdown' },
  { variable: '--z-sticky', value: 1100, label: 'Sticky' },
  { variable: '--z-fixed', value: 1200, label: 'Fixed' },
  { variable: '--z-modal-backdrop', value: 1300, label: 'Modal Backdrop' },
  { variable: '--z-modal', value: 1400, label: 'Modal' },
  { variable: '--z-popover', value: 1500, label: 'Popover' },
  { variable: '--z-tooltip', value: 1600, label: 'Tooltip' },
];

/* ─── Animation Tokens ─── */
export const animationTokens: AnimationToken[] = [
  { variable: '--transition-fast', label: 'Fast', description: 'Hover states, toggles', value: '150ms' },
  { variable: '--transition-base', label: 'Base', description: 'Standard transitions', value: '200ms' },
  { variable: '--transition-slow', label: 'Slow', description: 'Expanding, collapsing', value: '300ms' },
  { variable: '--transition-slower', label: 'Slower', description: 'Page transitions, modals', value: '500ms' },
  { variable: '--ease-in-out', label: 'Ease In Out', description: 'General purpose easing', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  { variable: '--ease-out', label: 'Ease Out', description: 'Entering animations', value: 'cubic-bezier(0, 0, 0.2, 1)' },
  { variable: '--ease-in', label: 'Ease In', description: 'Exiting animations', value: 'cubic-bezier(0.4, 0, 1, 1)' },
];

/* ─── Overlay Tokens ─── */
export const overlayTokens: OverlayToken[] = [
  { variable: '--overlay-subtle', label: 'Subtle (5%)' },
  { variable: '--overlay-extra-light', label: 'Extra Light (10%)' },
  { variable: '--overlay-15', label: '15%' },
  { variable: '--overlay-light', label: 'Light (20%)' },
  { variable: '--overlay-30', label: '30%' },
  { variable: '--overlay-medium', label: 'Medium (40%)' },
  { variable: '--overlay-backdrop', label: 'Backdrop (50%)' },
  { variable: '--overlay-dark', label: 'Dark (70%)' },
  { variable: '--overlay-darker', label: 'Darker (80%)' },
  { variable: '--overlay-white-soft', label: 'White Soft (10%)' },
  { variable: '--overlay-white-15', label: 'White 15%' },
  { variable: '--overlay-white-subtle', label: 'White Subtle (20%)' },
  { variable: '--overlay-white-medium', label: 'White Medium (30%)' },
  { variable: '--overlay-white-muted', label: 'White Muted (70%)' },
  { variable: '--overlay-white-heavy', label: 'White Heavy (80%)' },
  { variable: '--overlay-white-opaque', label: 'White Opaque (90%)' },
];

/* ─── Border Tokens ─── */
export const borderWidthTokens: BorderToken[] = [
  { variable: '--wp--preset--border-width--1', label: '1px', value: '1px', style: 'solid' },
  { variable: '--wp--preset--border-width--2', label: '2px', value: '2px', style: 'solid' },
  { variable: '--wp--preset--border-width--4', label: '4px', value: '4px', style: 'solid' },
  { variable: '--wp--preset--border-width--8', label: '8px', value: '8px', style: 'solid' },
];

export const borderStyleTokens: BorderToken[] = [
  { variable: '--wp--preset--border-style--solid', label: 'Solid', value: '2px', style: 'solid' },
  { variable: '--wp--preset--border-style--dashed', label: 'Dashed', value: '2px', style: 'dashed' },
  { variable: '--wp--preset--border-style--dotted', label: 'Dotted', value: '2px', style: 'dotted' },
  { variable: '--wp--preset--border-style--double', label: 'Double', value: '4px', style: 'double' },
];
