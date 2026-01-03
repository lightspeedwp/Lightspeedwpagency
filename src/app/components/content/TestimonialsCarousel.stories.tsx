import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { featuredReviews } from '../../data/seo';

/**
 * Testimonials Carousel - Social Proof Slider
 * 
 * Auto-rotating carousel for customer testimonials with manual controls.
 * Includes pagination dots, keyboard navigation, and pause on hover.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors
 * - Uses Lexend for names, Manrope for quotes
 * - WCAG 2.1 AA compliant
 * - Reduced motion support
 * 
 * ## Features
 * - Auto-play with pause on hover
 * - Manual navigation (prev/next)
 * - Pagination dots
 * - Keyboard navigation
 * - Touch/swipe support (mobile)
 * 
 * ## Use Cases
 * - Homepage testimonials
 * - Service pages
 * - Limited space sections
 * - Social proof showcases
 */
const meta = {
  title: 'Content Enhancements/TestimonialsCarousel',
  component: TestimonialsCarousel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Auto-rotating testimonials carousel with manual controls and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TestimonialsCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Variant
 */
export const Default: Story = {
  args: {
    testimonials: featuredReviews,
    variant: 'default',
    autoplay: true,
    interval: 5000,
    showArrows: true,
    showDots: true,
    showRating: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default carousel variant with all features enabled. Auto-rotates every 5 seconds.',
      },
    },
  },
};

/**
 * Card Variant
 */
export const CardVariant: Story = {
  args: {
    testimonials: featuredReviews,
    variant: 'card',
    autoplay: true,
    interval: 5000,
    showArrows: true,
    showDots: true,
    showRating: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Card-style carousel with border and padding. More prominent design.',
      },
    },
  },
};

/**
 * Minimal Variant
 */
export const MinimalVariant: Story = {
  args: {
    testimonials: featuredReviews,
    variant: 'minimal',
    autoplay: true,
    interval: 5000,
    showArrows: true,
    showDots: true,
    showRating: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal design without quote icon. Clean and simple.',
      },
    },
  },
};

/**
 * Without Rating
 */
export const WithoutRating: Story = {
  args: {
    testimonials: featuredReviews,
    variant: 'default',
    autoplay: true,
    interval: 5000,
    showArrows: true,
    showDots: true,
    showRating: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel without star ratings. Focus on testimonial content.',
      },
    },
  },
};

/**
 * Without Arrows
 */
export const WithoutArrows: Story = {
  args: {
    testimonials: featuredReviews,
    variant: 'default',
    autoplay: true,
    interval: 5000,
    showArrows: false,
    showDots: true,
    showRating: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Auto-play only carousel without navigation arrows. Pagination dots still available.',
      },
    },
  },
};

/**
 * Without Dots
 */
export const WithoutDots: Story = {
  args: {
    testimonials: featuredReviews,
    variant: 'default',
    autoplay: true,
    interval: 5000,
    showArrows: true,
    showDots: false,
    showRating: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel without pagination dots. Use arrows or auto-play to navigate.',
      },
    },
  },
};

/**
 * Manual Only (No Autoplay)
 */
export const ManualOnly: Story = {
  args: {
    testimonials: featuredReviews,
    variant: 'card',
    autoplay: false,
    showArrows: true,
    showDots: true,
    showRating: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Manual navigation only. User controls when to advance slides.',
      },
    },
  },
};

/**
 * Fast Rotation
 */
export const FastRotation: Story = {
  args: {
    testimonials: featuredReviews,
    variant: 'default',
    autoplay: true,
    interval: 2000,
    showArrows: true,
    showDots: true,
    showRating: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Fast auto-rotation (2 seconds). Good for quick showcases.',
      },
    },
  },
};

/**
 * Slow Rotation
 */
export const SlowRotation: Story = {
  args: {
    testimonials: featuredReviews,
    variant: 'default',
    autoplay: true,
    interval: 10000,
    showArrows: true,
    showDots: true,
    showRating: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Slow auto-rotation (10 seconds). Gives users time to read.',
      },
    },
  },
};

/**
 * Complete Section
 */
export const CompleteSection: Story = {
  render: () => (
    <div style={{ padding: '4rem 1.5rem', backgroundColor: 'var(--muted)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h2)',
              fontWeight: '700',
              color: 'var(--foreground)',
              marginBottom: '0.5rem',
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-lg)',
              color: 'var(--muted-foreground)',
            }}
          >
            Real testimonials from real customers
          </p>
        </div>

        {/* Carousel */}
        <TestimonialsCarousel
          testimonials={featuredReviews}
          variant="card"
          autoplay
          interval={5000}
          showArrows
          showDots
          showRating
        />

        {/* CTA */}
        <div className="text-center mt-8">
          <button
            style={{
              padding: '0.75rem 2rem',
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
            Read All Reviews
          </button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete testimonials section with header, carousel, and CTA button.',
      },
    },
  },
};

/**
 * Homepage Hero Section
 */
export const HomepageHero: Story = {
  render: () => (
    <div
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            padding: '3rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <TestimonialsCarousel
            testimonials={featuredReviews.slice(0, 3)}
            variant="minimal"
            autoplay
            interval={6000}
            showArrows
            showDots
            showRating
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Testimonials carousel in hero section with glassmorphism background.',
      },
    },
  },
};

/**
 * Sidebar Widget
 */
export const SidebarWidget: Story = {
  render: () => (
    <div style={{ maxWidth: '350px' }}>
      <div
        style={{
          padding: '1.5rem',
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
        }}
      >
        <h3
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h5)',
            fontWeight: '600',
            color: 'var(--foreground)',
            marginBottom: '1rem',
          }}
        >
          Customer Reviews
        </h3>

        <TestimonialsCarousel
          testimonials={featuredReviews.slice(0, 3)}
          variant="minimal'
          autoplay
          interval={4000}
          showArrows={false}
          showDots
          showRating
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact carousel for sidebars. No arrows, just dots and auto-play.',
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
        <TestimonialsCarousel
          testimonials={featuredReviews}
          variant="card"
          autoplay
          interval={5000}
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
            <code>--card</code> / <code>--background</code> - Card background
          </li>
          <li>
            <code>--foreground</code> - Text color
          </li>
          <li>
            <code>--primary</code> - Stars, active dots, quote icon
          </li>
          <li>
            <code>--muted-foreground</code> - Author title
          </li>
          <li>
            <code>--border</code> - Card border, button borders
          </li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates automatic theme adaptation. All colors use CSS variables.',
      },
    },
  },
};
