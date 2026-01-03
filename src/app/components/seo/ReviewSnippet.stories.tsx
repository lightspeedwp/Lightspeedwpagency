import type { Meta, StoryObj } from '@storybook/react';
import {
  ReviewSnippet,
  ReviewGrid,
  AggregateRating,
} from './ReviewSnippet';
import { featuredReviews, aggregateRating } from '../../data/seo';

/**
 * Review Snippet - Customer Review Display
 * 
 * Rich review display components with author information, ratings,
 * verified badges, and multiple layout variants.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors
 * - Uses Lexend for reviewer names, Manrope for review text
 * - WCAG 2.1 AA compliant
 * - Responsive layouts
 * 
 * ## WordPress Mapping
 * - Pattern: lsx-design/marketing/review-snippet
 * - Use in: Product pages, testimonials, homepage
 * 
 * ## SEO Benefits
 * - Review schema markup support
 * - Rich snippets with stars
 * - Increased trust signals
 */
const meta = {
  title: 'SEO & Marketing/ReviewSnippet',
  component: ReviewSnippet,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Customer review display components with multiple variants and layouts. Perfect for showcasing testimonials and building trust.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewSnippet>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Variant
 */
export const Default: Story = {
  args: {
    review: featuredReviews[0],
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default review display with full author information, rating stars, and verified badge.',
      },
    },
  },
};

/**
 * Compact Variant
 */
export const Compact: Story = {
  args: {
    review: featuredReviews[1],
    variant: 'compact',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact review display for sidebars or smaller spaces.',
      },
    },
  },
};

/**
 * Card Variant
 */
export const Card: Story = {
  args: {
    review: featuredReviews[2],
    variant: 'card',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card-style review with border, padding, and quote icon. Best for grid layouts.',
      },
    },
  },
};

/**
 * Without Verified Badge
 */
export const WithoutVerified: Story = {
  args: {
    review: {
      ...featuredReviews[0],
      verified: false,
    },
    variant: 'card',
  },
  parameters: {
    docs: {
      description: {
        story: 'Review without verified badge. Use for general testimonials.',
      },
    },
  },
};

/**
 * With Author Photo
 */
export const WithAuthorPhoto: Story = {
  args: {
    review: featuredReviews[0],
    variant: 'card',
  },
  parameters: {
    docs: {
      description: {
        story: 'Review with author photo. More personal and trustworthy.',
      },
    },
  },
};

/**
 * Review Grid - 3 Columns
 */
export const Grid3Columns: Story = {
  render: () => (
    <ReviewGrid
      reviews={featuredReviews.slice(0, 3)}
      layout="grid"
      variant="card"
      columns={3}
    />
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Grid layout with 3 columns (responsive: 1 col mobile, 2 col tablet, 3 col desktop).',
      },
    },
  },
};

/**
 * Review Grid - 2 Columns
 */
export const Grid2Columns: Story = {
  render: () => (
    <ReviewGrid
      reviews={featuredReviews.slice(0, 4)}
      layout="grid"
      variant="card"
      columns={2}
    />
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Grid layout with 2 columns (responsive: 1 col mobile, 2 col desktop).',
      },
    },
  },
};

/**
 * Review List
 */
export const List: Story = {
  render: () => (
    <ReviewGrid
      reviews={featuredReviews.slice(0, 3)}
      layout="list"
      variant="default"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical list layout. Best for detailed review pages.',
      },
    },
  },
};

/**
 * Aggregate Rating
 */
export const AggregateRatingDisplay: Story = {
  render: () => (
    <AggregateRating
      averageRating={aggregateRating.averageRating}
      totalReviews={aggregateRating.totalReviews}
      ratingBreakdown={aggregateRating.ratingBreakdown}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Aggregate rating display with breakdown by star rating. Perfect for product pages.',
      },
    },
  },
};

/**
 * Complete Reviews Page
 */
export const CompleteReviewsPage: Story = {
  render: () => (
    <div className="p-6" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h1)',
            fontWeight: '700',
            color: 'var(--foreground)',
            marginBottom: '1rem',
          }}>
            Customer Reviews
          </h1>
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-lg)',
            color: 'var(--muted-foreground)',
            marginBottom: '2rem',
          }}>
            See what our customers are saying about our WordPress development services
          </p>
        </div>

        {/* Aggregate Rating */}
        <div className="mb-12">
          <AggregateRating
            averageRating={aggregateRating.averageRating}
            totalReviews={aggregateRating.totalReviews}
            ratingBreakdown={aggregateRating.ratingBreakdown}
          />
        </div>

        {/* Review Grid */}
        <ReviewGrid
          reviews={featuredReviews}
          layout="grid"
          variant="card"
          columns={3}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete reviews page with aggregate rating and grid layout.',
      },
    },
  },
};

/**
 * Product Page Reviews Section
 */
export const ProductPageReviewsSection: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      {/* Section Header */}
      <div className="mb-8">
        <h2 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h2)',
          fontWeight: '600',
          color: 'var(--foreground)',
          marginBottom: '1rem',
        }}>
          What Our Customers Say
        </h2>

        {/* Aggregate Rating */}
        <AggregateRating
          averageRating={4.9}
          totalReviews={89}
          ratingBreakdown={{
            5: 78,
            4: 8,
            3: 2,
            2: 1,
            1: 0,
          }}
        />
      </div>

      {/* Featured Reviews */}
      <ReviewGrid
        reviews={featuredReviews.slice(0, 3)}
        layout="grid"
        variant="card"
        columns={3}
      />

      {/* View All Button */}
      <div className="mt-8 text-center">
        <button style={{
          padding: '0.75rem 2rem',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          border: 'none',
          borderRadius: 'var(--radius)',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: '600',
          cursor: 'pointer',
        }}>
          View All Reviews
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Reviews section for a product or service page with aggregate rating and featured reviews.',
      },
    },
  },
};

/**
 * Homepage Testimonials
 */
export const HomepageTestimonials: Story = {
  render: () => (
    <div className="p-6" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h2)',
            fontWeight: '700',
            color: 'var(--foreground)',
            marginBottom: '0.5rem',
          }}>
            Trusted by Industry Leaders
          </h2>
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-lg)',
            color: 'var(--muted-foreground)',
          }}>
            Don't just take our word for it - hear from our clients
          </p>
        </div>

        {/* Reviews Grid */}
        <ReviewGrid
          reviews={featuredReviews.slice(0, 3)}
          layout="grid"
          variant="card"
          columns={3}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Testimonials section for homepage with featured customer reviews.',
      },
    },
  },
};

/**
 * All Variants Showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2rem' }}>
      <div>
        <h3 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h4)',
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Default Variant
        </h3>
        <ReviewSnippet review={featuredReviews[0]} variant="default" />
      </div>

      <div>
        <h3 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h4)',
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Compact Variant
        </h3>
        <ReviewSnippet review={featuredReviews[1]} variant="compact" />
      </div>

      <div>
        <h3 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h4)',
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Card Variant
        </h3>
        <ReviewSnippet review={featuredReviews[2]} variant="card" />
      </div>

      <div>
        <h3 style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h4)',
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Aggregate Rating
        </h3>
        <AggregateRating
          averageRating={aggregateRating.averageRating}
          totalReviews={aggregateRating.totalReviews}
          ratingBreakdown={aggregateRating.ratingBreakdown}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all review component variants.',
      },
    },
  },
};
