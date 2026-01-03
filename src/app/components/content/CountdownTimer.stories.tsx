import type { Meta, StoryObj } from '@storybook/react';
import {
  CountdownTimer,
  FlashSaleCountdown,
  EventCountdown,
  InlineCountdown,
} from './CountdownTimer';

/**
 * Countdown Timer - Urgency & FOMO
 * 
 * Real-time countdown timer with auto-refresh every second.
 * Creates urgency for sales, events, and limited-time offers.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors
 * - Uses Lexend for numbers, Manrope for labels
 * - WCAG 2.1 AA compliant
 * - ARIA live regions for accessibility
 * 
 * ## Features
 * - Auto-refresh every second
 * - Multiple display variants
 * - Completion callbacks
 * - Timezone support
 * 
 * ## Use Cases
 * - Flash sales
 * - Event countdowns
 * - Limited-time offers
 * - Product launches
 */
const meta = {
  title: 'Content Enhancements/CountdownTimer',
  component: CountdownTimer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Countdown timer component with multiple variants and auto-refresh. Perfect for creating urgency.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CountdownTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper: Get date 2 hours from now
const twoHoursFromNow = () => {
  const date = new Date();
  date.setHours(date.getHours() + 2);
  return date.toISOString();
};

// Helper: Get date 3 days from now
const threeDaysFromNow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date.toISOString();
};

// Helper: Get date 30 days from now
const thirtyDaysFromNow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date.toISOString();
};

/**
 * Card Variant (Default)
 */
export const CardVariant: Story = {
  args: {
    targetDate: threeDaysFromNow(),
    title: 'Flash Sale Ends In',
    variant: 'card',
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Card-style countdown with background boxes for each time unit. Default variant.',
      },
    },
  },
};

/**
 * Large Variant
 */
export const LargeVariant: Story = {
  args: {
    targetDate: thirtyDaysFromNow(),
    title: 'Product Launch In',
    variant: 'large',
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large countdown for hero sections. Bigger numbers and spacing.',
      },
    },
  },
};

/**
 * Inline Variant
 */
export const InlineVariant: Story = {
  args: {
    targetDate: twoHoursFromNow(),
    title: 'Offer expires in',
    variant: 'inline',
    showLabels: true,
    showDays: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact inline countdown for banners or headers. No days display.',
      },
    },
  },
};

/**
 * Without Labels
 */
export const WithoutLabels: Story = {
  args: {
    targetDate: threeDaysFromNow(),
    title: 'Time Remaining',
    variant: 'card',
    showLabels: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Countdown without unit labels. Cleaner look.',
      },
    },
  },
};

/**
 * Flash Sale Countdown
 */
export const FlashSale: Story = {
  render: () => (
    <FlashSaleCountdown
      endDate={threeDaysFromNow()}
      title="🔥 Flash Sale Ends In"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pre-configured flash sale countdown with border and emoji. Eye-catching design.',
      },
    },
  },
};

/**
 * Event Countdown
 */
export const Event: Story = {
  render: () => (
    <EventCountdown
      eventDate={thirtyDaysFromNow()}
      eventName="Annual WordPress Conference 2024"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pre-configured event countdown with calendar icon and large variant.',
      },
    },
  },
};

/**
 * Inline Countdown
 */
export const Inline: Story = {
  render: () => (
    <div
      style={{
        padding: '1rem 1.5rem',
        backgroundColor: 'var(--primary)',
        borderRadius: 'var(--radius)',
      }}
    >
      <InlineCountdown
        targetDate={twoHoursFromNow()}
        prefix="Special offer ends in"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact inline countdown for top banners or headers.',
      },
    },
  },
};

/**
 * Hours and Minutes Only
 */
export const HoursMinutesOnly: Story = {
  args: {
    targetDate: twoHoursFromNow(),
    title: 'Limited Time Offer',
    variant: 'card',
    showLabels: true,
    showDays: false,
    showSeconds: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Countdown showing only hours and minutes. Perfect for short-term offers.',
      },
    },
  },
};

/**
 * Complete Banner
 */
export const CompleteBanner: Story = {
  render: () => (
    <div
      style={{
        width: '100%',
        padding: '2rem',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h2)',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
          }}
        >
          Black Friday Sale
        </h2>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-lg)',
            color: '#FFFFFF',
            opacity: 0.9,
            marginBottom: '2rem',
          }}
        >
          Up to 50% off all WordPress development packages
        </p>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <CountdownTimer
            targetDate={threeDaysFromNow()}
            title=""
            variant="large"
            showLabels={true}
          />
        </div>

        <button
          style={{
            marginTop: '2rem',
            padding: '1rem 2.5rem',
            backgroundColor: '#FFFFFF',
            color: 'var(--primary)',
            border: 'none',
            borderRadius: 'var(--radius)',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Complete sale banner with countdown timer, gradient background, and CTA button.',
      },
    },
  },
};

/**
 * Product Page Countdown
 */
export const ProductPage: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div
        style={{
          padding: '1.5rem',
          marginBottom: '1.5rem',
          backgroundColor: 'var(--destructive)',
          borderRadius: 'var(--radius)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '600',
            color: 'var(--destructive-foreground)',
          }}
        >
          ⚡ Limited Time Offer
        </p>
      </div>

      <h1
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h2)',
          fontWeight: '700',
          color: 'var(--foreground)',
          marginBottom: '1rem',
        }}
      >
        WordPress Development Package
      </h1>

      <div
        style={{
          padding: '1.5rem',
          marginBottom: '1.5rem',
          backgroundColor: 'var(--muted)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <div className="flex items-baseline gap-3 mb-2">
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h3)',
              fontWeight: '700',
              color: 'var(--foreground)',
            }}
          >
            R 7,500
          </span>
          <span
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--muted-foreground)',
              textDecoration: 'line-through',
            }}
          >
            R 15,000
          </span>
        </div>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--primary)',
            fontWeight: '600',
          }}
        >
          50% OFF - Limited Time
        </p>
      </div>

      <CountdownTimer
        targetDate={twoHoursFromNow()}
        title="Offer Ends In"
        variant="card"
        showDays={false}
      />

      <button
        style={{
          width: '100%',
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          border: 'none',
          borderRadius: 'var(--radius)',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        Get Started Now
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Product page with countdown timer, sale badge, and pricing. Complete conversion-focused layout.',
      },
    },
  },
};
