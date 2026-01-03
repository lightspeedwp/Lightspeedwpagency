import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * WordPress Button Block - React Implementation
 * 
 * The Button component provides accessible, themeable buttons that map directly
 * to WordPress core Button blocks. Supports all design system variants and sizes.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors
 * - Uses Lexend font (UI font)
 * - WCAG 2.1 AA compliant (4.5:1 contrast minimum)
 * - Minimum 44×44px touch targets
 */
const meta = {
  title: 'Design Blocks/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Primary button component for user actions. Maps to WordPress core Button block.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost', 'link', 'cta', 'cta-outline', 'cta-ghost'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size (affects padding and font size)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button with primary styling
 */
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    size: 'md',
  },
};

/**
 * Outline variant with transparent background
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
};

/**
 * Ghost variant with minimal styling
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

/**
 * Link variant styled as hyperlink
 */
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'md',
  },
};

/**
 * CTA (Call-to-Action) variant with emphasis
 */
export const CTA: Story = {
  args: {
    children: 'Get Started',
    variant: 'cta',
    size: 'lg',
  },
};

/**
 * Small size button
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'default',
    size: 'sm',
  },
};

/**
 * Medium size button (default)
 */
export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant: 'default',
    size: 'md',
  },
};

/**
 * Large size button
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'default',
    size: 'lg',
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'default',
    size: 'md',
    disabled: true,
  },
};

/**
 * Button with onClick handler
 */
export const WithAction: Story = {
  args: {
    children: 'Click Me',
    variant: 'default',
    size: 'md',
    onClick: () => alert('Button clicked!'),
  },
};

/**
 * All button variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <h3 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-h4)', marginBottom: '0.5rem' }}>
        Button Variants
      </h3>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <h3 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-h4)', marginTop: '1rem', marginBottom: '0.5rem' }}>
        CTA Variants
      </h3>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="cta">CTA</Button>
        <Button variant="cta-outline">CTA Outline</Button>
        <Button variant="cta-ghost">CTA Ghost</Button>
      </div>

      <h3 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-h4)', marginTop: '1rem', marginBottom: '0.5rem' }}>
        Button Sizes
      </h3>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <h3 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-h4)', marginTop: '1rem', marginBottom: '0.5rem' }}>
        States
      </h3>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  ),
};
