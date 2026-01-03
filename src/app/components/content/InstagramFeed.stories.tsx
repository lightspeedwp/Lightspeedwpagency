import type { Meta, StoryObj } from '@storybook/react';
import { InstagramFeed } from './InstagramFeed';

/**
 * Instagram Feed - Social Media Integration
 * 
 * Real Instagram Graph API integration with auto-refresh every 24 hours.
 * Shows engagement metrics, captions, and responsive grid layouts.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors (theme-aware)
 * - Uses Lexend for headings, Manrope for captions
 * - WCAG 2.1 AA compliant in both light and dark modes
 * - Hover effects with overlay
 * 
 * ## API Integration
 * - Instagram Graph API
 * - Auto-refresh every 24 hours
 * - Rate limiting support
 * - Error handling with fallback
 * 
 * ## Use Cases
 * - Homepage social proof
 * - Footer social feed
 * - About page team culture
 * - Contact page authenticity
 */
const meta = {
  title: 'Content Enhancements/InstagramFeed',
  component: InstagramFeed,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Instagram feed component with real API integration, engagement metrics, and auto-refresh. Perfect for showcasing social media presence.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    accessToken: {
      control: 'text',
      description: 'Instagram Graph API access token',
    },
    limit: {
      control: { type: 'number', min: 1, max: 25 },
      description: 'Number of posts to display',
    },
    columns: {
      control: 'select',
      options: [2, 3, 4],
      description: 'Grid columns (responsive)',
    },
  },
} satisfies Meta<typeof InstagramFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic Feed (Mock Data)
 */
export const Basic: Story = {
  args: {
    useMockData: true,
    limit: 6,
    columns: 3,
    showEngagement: true,
    showCaptions: false,
    showFollowButton: true,
    username: 'lsxdesign',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic Instagram feed with 6 posts in a 3-column grid. Uses mock data for demonstration.',
      },
    },
  },
};

/**
 * With Captions
 */
export const WithCaptions: Story = {
  args: {
    useMockData: true,
    limit: 6,
    columns: 3,
    showEngagement: true,
    showCaptions: true,
    showFollowButton: true,
    username: 'lsxdesign',
  },
  parameters: {
    docs: {
      description: {
        story: 'Instagram feed showing post captions on hover. Captions are truncated to 80 characters.',
      },
    },
  },
};

/**
 * Without Engagement
 */
export const WithoutEngagement: Story = {
  args: {
    useMockData: true,
    limit: 6,
    columns: 3,
    showEngagement: false,
    showCaptions: false,
    showFollowButton: true,
    username: 'lsxdesign',
  },
  parameters: {
    docs: {
      description: {
        story: 'Clean feed without likes/comments. Perfect for minimal designs.',
      },
    },
  },
};

/**
 * 2 Columns Layout
 */
export const TwoColumns: Story = {
  args: {
    useMockData: true,
    limit: 4,
    columns: 2,
    showEngagement: true,
    showCaptions: false,
    showFollowButton: true,
    username: 'lsxdesign',
  },
  parameters: {
    docs: {
      description: {
        story: '2-column grid layout. Great for sidebars or narrow spaces.',
      },
    },
  },
};

/**
 * 4 Columns Layout
 */
export const FourColumns: Story = {
  args: {
    useMockData: true,
    limit: 8,
    columns: 4,
    showEngagement: true,
    showCaptions: false,
    showFollowButton: true,
    username: 'lsxdesign',
  },
  parameters: {
    docs: {
      description: {
        story: '4-column grid layout for wider sections. Responsive: 2 cols on mobile, 4 cols on desktop.',
      },
    },
  },
};

/**
 * Without Follow Button
 */
export const WithoutFollowButton: Story = {
  args: {
    useMockData: true,
    limit: 6,
    columns: 3,
    showEngagement: true,
    showCaptions: false,
    showFollowButton: false,
    username: 'lsxdesign',
  },
  parameters: {
    docs: {
      description: {
        story: 'Feed without the "Follow" button. Use when you want to keep users on your site.',
      },
    },
  },
};

/**
 * Custom Title
 */
export const CustomTitle: Story = {
  args: {
    useMockData: true,
    limit: 6,
    columns: 3,
    showEngagement: true,
    showCaptions: false,
    showFollowButton: true,
    username: 'lsxdesign',
    title: 'Behind the Scenes',
  },
  parameters: {
    docs: {
      description: {
        story: 'Feed with custom title. Perfect for themed sections.',
      },
    },
  },
};

/**
 * Small Feed (Limited Posts)
 */
export const SmallFeed: Story = {
  args: {
    useMockData: true,
    limit: 3,
    columns: 3,
    showEngagement: true,
    showCaptions: false,
    showFollowButton: true,
    username: 'lsxdesign',
  },
  parameters: {
    docs: {
      description: {
        story: 'Smaller feed with only 3 posts. Great for footers or sidebars.',
      },
    },
  },
};

/**
 * Footer Feed
 */
export const FooterFeed: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: 'var(--muted)',
        padding: '3rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <InstagramFeed
          useMockData
          limit={6}
          columns={3}
          showEngagement={false}
          showCaptions={false}
          showFollowButton={true}
          username="lsxdesign"
          title="Follow Our Journey"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Instagram feed styled for footer placement. Muted background with centered content.',
      },
    },
  },
};

/**
 * Homepage Section
 */
export const HomepageSection: Story = {
  render: () => (
    <div style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h2)',
              fontWeight: '700',
              color: 'var(--foreground)',
              marginBottom: '0.5rem',
            }}
          >
            See What We're Up To
          </h2>
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-lg)',
              color: 'var(--muted-foreground)',
            }}
          >
            Follow us on Instagram for daily inspiration and behind-the-scenes content
          </p>
        </div>

        {/* Instagram Feed */}
        <InstagramFeed
          useMockData
          limit={6}
          columns={3}
          showEngagement={true}
          showCaptions={false}
          showFollowButton={true}
          username="lsxdesign"
          title=""
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete homepage section with Instagram feed. Includes section header and description.',
      },
    },
  },
};

/**
 * Loading State
 */
export const LoadingState: Story = {
  render: () => {
    const [key, setKey] = React.useState(0);

    return (
      <div>
        <button
          onClick={() => setKey((k) => k + 1)}
          style={{
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            border: 'none',
            borderRadius: 'var(--radius)',
            fontFamily: 'Lexend, sans-serif',
            cursor: 'pointer',
          }}
        >
          Reload Feed
        </button>

        <InstagramFeed
          key={key}
          useMockData
          limit={6}
          columns={3}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates loading state. Click "Reload Feed" to see the loader animation.',
      },
    },
  },
};

/**
 * Theme Comparison
 */
export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h4)',
            marginBottom: '1rem',
            color: 'var(--foreground)',
          }}
        >
          Current Theme
        </h3>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            marginBottom: '1rem',
            color: 'var(--muted-foreground)',
          }}
        >
          Toggle theme using the toolbar above to see automatic color adaptation.
        </p>
        <InstagramFeed
          useMockData
          limit={6}
          columns={3}
          showEngagement={true}
          username="lsxdesign"
        />
      </div>

      <div style={{ padding: '1.5rem' }}>
        <h4
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h5)',
            marginBottom: '0.5rem',
            color: 'var(--foreground)',
          }}
        >
          CSS Variables Used:
        </h4>
        <ul
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
            listStyle: 'disc',
            paddingLeft: '1.5rem',
          }}
        >
          <li>
            <code>--background</code> - Overlay background
          </li>
          <li>
            <code>--foreground</code> - Text color
          </li>
          <li>
            <code>--primary</code> - Follow button, engagement icons
          </li>
          <li>
            <code>--primary-foreground</code> - Button text
          </li>
          <li>
            <code>--muted-foreground</code> - Engagement counts
          </li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates automatic theme adaptation. All colors use CSS variables that update based on theme.',
      },
    },
  },
};

/**
 * API Integration Example
 */
export const APIIntegration: Story = {
  render: () => (
    <div>
      <div
        style={{
          padding: '1rem',
          marginBottom: '1.5rem',
          backgroundColor: 'var(--muted)',
          borderRadius: 'var(--radius)',
        }}
      >
        <h4
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h5)',
            marginBottom: '0.5rem',
            color: 'var(--foreground)',
          }}
        >
          How to Use Real Instagram API:
        </h4>
        <ol
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
            paddingLeft: '1.5rem',
          }}
        >
          <li>Create a Facebook App at developers.facebook.com</li>
          <li>Add Instagram Graph API product</li>
          <li>Generate long-lived access token</li>
          <li>Store token in environment variable</li>
          <li>Pass token to InstagramFeed component</li>
        </ol>

        <pre
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: 'var(--background)',
            borderRadius: 'var(--radius)',
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: 'var(--text-small)',
            color: 'var(--foreground)',
          }}
        >
          {`<InstagramFeed
  accessToken={process.env.REACT_APP_INSTAGRAM_TOKEN}
  limit={9}
  columns={3}
  showEngagement
  username="lsxdesign"
/>`}
        </pre>
      </div>

      <InstagramFeed
        useMockData
        limit={6}
        columns={3}
        showEngagement
        username="lsxdesign"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how to integrate with real Instagram Graph API. Includes setup instructions and code example.',
      },
    },
  },
};
