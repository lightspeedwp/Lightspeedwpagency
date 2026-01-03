import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeGroup, NotificationBadge } from './Badge';

/**
 * Badge Component - Status Indicators
 * 
 * Badges display status, categories, or counts with multiple style variants.
 * 
 * ## Design System Compliance
 * - Uses Lexend font (UI)
 * - All colors use CSS variables
 * - WCAG 2.1 AA compliant
 */
const meta = {
  title: 'Utility/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    dot: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge
 */
export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'default',
    size: 'md',
  },
};

/**
 * Primary badge
 */
export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    size: 'md',
  },
};

/**
 * Success badge
 */
export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
    size: 'md',
  },
};

/**
 * Warning badge
 */
export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
    size: 'md',
  },
};

/**
 * Error badge
 */
export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
    size: 'md',
  },
};

/**
 * Badge with dot indicator
 */
export const WithDot: Story = {
  args: {
    children: 'Online',
    variant: 'success',
    size: 'md',
    dot: true,
  },
};

/**
 * Removable badge
 */
export const Removable: Story = {
  args: {
    children: 'Removable',
    variant: 'primary',
    size: 'md',
    onRemove: () => alert('Badge removed'),
  },
};

/**
 * All badge variants
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-h5)', marginBottom: '1rem' }}>
          Badge Variants
        </h3>
        <BadgeGroup spacing="md">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-h5)', marginBottom: '1rem' }}>
          Badge Sizes
        </h3>
        <BadgeGroup spacing="md">
          <Badge variant="primary" size="sm">Small</Badge>
          <Badge variant="primary" size="md">Medium</Badge>
          <Badge variant="primary" size="lg">Large</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-h5)', marginBottom: '1rem' }}>
          With Dot Indicators
        </h3>
        <BadgeGroup spacing="md">
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="warning" dot>Pending</Badge>
          <Badge variant="error" dot>Offline</Badge>
        </BadgeGroup>
      </div>

      <div>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-h5)', marginBottom: '1rem' }}>
          Notification Badges
        </h3>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ fontSize: '2rem' }}>🔔</span>
            <div style={{ position: 'absolute', top: -8, right: -8 }}>
              <NotificationBadge count={5} variant="error" />
            </div>
          </div>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ fontSize: '2rem' }}>✉️</span>
            <div style={{ position: 'absolute', top: -8, right: -8 }}>
              <NotificationBadge count={99} variant="primary" />
            </div>
          </div>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ fontSize: '2rem' }}>📋</span>
            <div style={{ position: 'absolute', top: -8, right: -8 }}>
              <NotificationBadge count={150} max={99} variant="error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Product status example
 */
export const ProductStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
        <h4 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-base)', marginBottom: '0.5rem' }}>
          Running Shoes
        </h4>
        <BadgeGroup spacing="sm">
          <Badge variant="success">In Stock</Badge>
          <Badge variant="primary">New Arrival</Badge>
          <Badge variant="warning">Limited</Badge>
        </BadgeGroup>
      </div>

      <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
        <h4 style={{ fontFamily: 'Lexend, sans-serif', fontSize: 'var(--text-base)', marginBottom: '0.5rem' }}>
          Winter Jacket
        </h4>
        <BadgeGroup spacing="sm">
          <Badge variant="error">Out of Stock</Badge>
          <Badge variant="info">Pre-order</Badge>
        </BadgeGroup>
      </div>
    </div>
  ),
};
