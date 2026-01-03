import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbsBar } from './BreadcrumbsBar';

/**
 * BreadcrumbsBar Component - Complete Navigation Bar
 * 
 * A full-width breadcrumb navigation bar with background, border, and responsive padding.
 * Automatically adapts to light/dark themes using CSS variables from the design system.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors (theme-aware)
 * - Uses Manrope font for breadcrumb text
 * - WCAG 2.1 AA compliant in both light and dark modes
 * - Responsive padding and layout
 * 
 * ## WordPress Mapping
 * - Template part: parts/breadcrumbs-bar.html
 * - Pattern: lsx-design/nav/breadcrumbs-bar
 * - Placement: After header, before main content
 * 
 * ## Accessibility
 * - Semantic <nav> with aria-label
 * - Ordered list structure
 * - aria-current="page" on current page
 * - Keyboard navigable (Tab, Enter)
 * - Focus visible with ring outline
 * - Screen reader friendly separators
 */
const meta = {
  title: 'Navigation/BreadcrumbsBar',
  component: BreadcrumbsBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete breadcrumb navigation bar with background and automatic light/dark theme support. Maps to WordPress template part for consistent navigation across all pages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items from root to current page',
      table: {
        type: { summary: 'BreadcrumbItem[]' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes for container styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
} satisfies Meta<typeof BreadcrumbsBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Homepage - Single item (current page only)
 */
export const Homepage: Story = {
  args: {
    items: [
      { label: 'Home', page: 'front-page' }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Homepage breadcrumb with single item. Typically used when there is no parent navigation needed.',
      },
    },
  },
};

/**
 * Archive Page - Two levels
 */
export const ArchivePage: Story = {
  args: {
    items: [
      { label: 'Home', page: 'front-page' },
      { label: 'Portfolio' }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Archive page breadcrumb with Home → Archive. Most common pattern for category/archive pages.',
      },
    },
  },
};

/**
 * Blog Post - Three levels
 */
export const BlogPost: Story = {
  args: {
    items: [
      { label: 'Home', page: 'front-page' },
      { label: 'Blog', page: 'blog' },
      { label: 'Getting Started with WordPress' }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Single blog post breadcrumb with Home → Blog → Post. Shows clear hierarchy for content.',
      },
    },
  },
};

/**
 * Deep Hierarchy - Four levels
 */
export const DeepHierarchy: Story = {
  args: {
    items: [
      { label: 'Home', page: 'front-page' },
      { label: 'Portfolio', page: 'portfolio-archive' },
      { label: 'E-commerce', page: 'portfolio-archive' },
      { label: 'African Safari Consultants' }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Deep hierarchy with 4 levels. Shows how breadcrumbs handle multiple parent pages.',
      },
    },
  },
};

/**
 * Long Text - Responsive wrapping
 */
export const LongText: Story = {
  args: {
    items: [
      { label: 'Home', page: 'front-page' },
      { label: 'Portfolio', page: 'portfolio-archive' },
      { label: 'WordPress Development Projects', page: 'portfolio-archive' },
      { label: 'African Safari Consultants - Custom E-commerce Platform for Travel Agency' }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb with long text to test responsive wrapping behavior. Items wrap gracefully on narrow screens.',
      },
    },
  },
};

/**
 * Services Hierarchy
 */
export const ServicesPage: Story = {
  args: {
    items: [
      { label: 'Home', page: 'front-page' },
      { label: 'Services', page: 'services' },
      { label: 'WordPress Development' }
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Services section breadcrumb showing service category hierarchy.',
      },
    },
  },
};

/**
 * With Custom Margin
 */
export const WithMargin: Story = {
  args: {
    items: [
      { label: 'Home', page: 'front-page' },
      { label: 'About', page: 'about' },
      { label: 'Our Team' }
    ],
    className: 'mb-8',
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb bar with additional bottom margin applied via className prop.',
      },
    },
  },
};

/**
 * All Breadcrumb Patterns
 */
export const AllPatterns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h5)', 
          marginBottom: '1rem',
          padding: '0 1.5rem',
          color: 'var(--foreground)',
        }}>
          Homepage (1 level)
        </h3>
        <BreadcrumbsBar 
          items={[
            { label: 'Home', page: 'front-page' }
          ]} 
        />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h5)', 
          marginBottom: '1rem',
          padding: '0 1.5rem',
          color: 'var(--foreground)',
        }}>
          Archive Page (2 levels)
        </h3>
        <BreadcrumbsBar 
          items={[
            { label: 'Home', page: 'front-page' },
            { label: 'Portfolio' }
          ]} 
        />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h5)', 
          marginBottom: '1rem',
          padding: '0 1.5rem',
          color: 'var(--foreground)',
        }}>
          Single Post (3 levels)
        </h3>
        <BreadcrumbsBar 
          items={[
            { label: 'Home', page: 'front-page' },
            { label: 'Blog', page: 'blog' },
            { label: 'WordPress Best Practices 2024' }
          ]} 
        />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h5)', 
          marginBottom: '1rem',
          padding: '0 1.5rem',
          color: 'var(--foreground)',
        }}>
          Deep Hierarchy (4 levels)
        </h3>
        <BreadcrumbsBar 
          items={[
            { label: 'Home', page: 'front-page' },
            { label: 'Portfolio', page: 'portfolio-archive' },
            { label: 'E-commerce', page: 'portfolio-archive' },
            { label: 'African Safari Consultants' }
          ]} 
        />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h5)', 
          marginBottom: '1rem',
          padding: '0 1.5rem',
          color: 'var(--foreground)',
        }}>
          Services Breadcrumb
        </h3>
        <BreadcrumbsBar 
          items={[
            { label: 'Home', page: 'front-page' },
            { label: 'Services', page: 'services' },
            { label: 'Custom WordPress Development' }
          ]} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all common breadcrumb patterns from 1 to 4 levels deep.',
      },
    },
  },
};

/**
 * Theme Comparison (Light vs Dark)
 */
export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h4)', 
          marginBottom: '1rem',
          padding: '0 1.5rem',
          color: 'var(--foreground)',
        }}>
          Current Theme
        </h3>
        <p style={{ 
          fontFamily: 'Manrope, sans-serif', 
          fontSize: 'var(--text-base)', 
          marginBottom: '1rem',
          padding: '0 1.5rem',
          color: 'var(--muted-foreground)',
        }}>
          Toggle theme using the toolbar above to see automatic color adaptation.
        </p>
        <BreadcrumbsBar 
          items={[
            { label: 'Home', page: 'front-page' },
            { label: 'Portfolio', page: 'portfolio-archive' },
            { label: 'Current Project' }
          ]} 
        />
      </div>

      <div style={{ padding: '1.5rem' }}>
        <h4 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h5)', 
          marginBottom: '0.5rem',
          color: 'var(--foreground)',
        }}>
          CSS Variables Used:
        </h4>
        <ul style={{ 
          fontFamily: 'Manrope, sans-serif', 
          fontSize: 'var(--text-small)', 
          color: 'var(--muted-foreground)',
          listStyle: 'disc',
          paddingLeft: '1.5rem',
        }}>
          <li><code>--muted</code> - Background color (adapts to theme)</li>
          <li><code>--border</code> - Border color (subtle in both themes)</li>
          <li><code>--muted-foreground</code> - Link color (accessible contrast)</li>
          <li><code>--foreground</code> - Current page and hover color</li>
          <li><code>--text-small</code> - Font size (14px)</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates automatic theme adaptation. Use the theme switcher in the toolbar to see the breadcrumbs update their colors automatically based on CSS variables.',
      },
    },
  },
};

/**
 * Interactive Demo
 */
export const InteractiveDemo: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ 
            fontFamily: 'Lexend, sans-serif', 
            fontSize: 'var(--text-h4)', 
            marginBottom: '0.5rem',
            color: 'var(--foreground)',
          }}>
            Try Clicking Links
          </h3>
          <p style={{ 
            fontFamily: 'Manrope, sans-serif', 
            fontSize: 'var(--text-base)', 
            color: 'var(--muted-foreground)',
          }}>
            Hover over and click the "Home" and "Portfolio" links to see interactive states.
          </p>
        </div>

        <BreadcrumbsBar 
          items={[
            { label: 'Home', page: 'front-page' },
            { label: 'Portfolio', page: 'portfolio-archive' },
            { label: 'Current Project' }
          ]} 
        />

        <div style={{ padding: '1.5rem' }}>
          <h4 style={{ 
            fontFamily: 'Lexend, sans-serif', 
            fontSize: 'var(--text-h5)', 
            marginBottom: '0.5rem',
            color: 'var(--foreground)',
          }}>
            Interactive Features:
          </h4>
          <ul style={{ 
            fontFamily: 'Manrope, sans-serif', 
            fontSize: 'var(--text-small)', 
            color: 'var(--muted-foreground)',
            listStyle: 'disc',
            paddingLeft: '1.5rem',
          }}>
            <li><strong>Hover:</strong> Links change color and show underline</li>
            <li><strong>Focus:</strong> Keyboard navigation shows focus ring</li>
            <li><strong>Click:</strong> Triggers navigation via useNavigation hook</li>
            <li><strong>Current Page:</strong> Non-interactive, higher font weight</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of breadcrumb link states. Try hovering, tabbing, and clicking the links.',
      },
    },
  },
};
