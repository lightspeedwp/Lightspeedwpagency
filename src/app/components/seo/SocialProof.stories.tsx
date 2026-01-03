import type { Meta, StoryObj } from '@storybook/react';
import {
  LiveVisitorCount,
  RecentActivityNotification,
  CustomerStats,
  ReviewStars,
  VerifiedBadge,
  SocialFollowerCount,
  ActivityFeed,
} from './SocialProof';
import { socialProofMetrics, recentActivities } from '../../data/seo';
import { Users, Heart, Award } from 'lucide-react';

/**
 * Social Proof - Trust & Urgency Indicators
 * 
 * Components for displaying social proof including live visitor counts,
 * recent activity, customer statistics, and review displays.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors
 * - Uses Manrope font for all text
 * - WCAG 2.1 AA compliant
 * - Smooth animations with reduced motion support
 * 
 * ## Use Cases
 * - Product pages (live visitors, recent purchases)
 * - Landing pages (customer statistics)
 * - Homepage (social followers, reviews)
 * - Checkout (trust signals)
 */
const meta = {
  title: 'SEO & Marketing/SocialProof',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Social proof components for building trust and creating urgency through real-time indicators and statistics.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

/**
 * Live Visitor Count
 */
export const LiveVisitors: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      <LiveVisitorCount count={247} />
      <LiveVisitorCount count={42} label="viewing this product" />
      <LiveVisitorCount count={1284} label="online shoppers" showIcon={false} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows number of people currently viewing. Creates urgency and FOMO (Fear Of Missing Out).',
      },
    },
  },
};

/**
 * Recent Activity Notification
 */
export const RecentActivity: StoryObj = {
  render: () => (
    <div className="relative p-6" style={{ minHeight: '200px' }}>
      <RecentActivityNotification
        activity={{
          user: 'Sarah from Cape Town',
          action: 'purchased',
          item: 'WordPress Development Package',
          timeAgo: '3 minutes ago',
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast-style notification showing recent user actions. Automatically disappears after 5 seconds.',
      },
    },
  },
};

/**
 * Customer Statistics
 */
export const CustomerStatistics: StoryObj = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <CustomerStats
        count={socialProofMetrics.totalCustomers}
        label="Happy Customers"
      />
      <CustomerStats
        count={socialProofMetrics.projectsCompleted}
        label="Projects Completed"
        icon={<Award className="w-6 h-6" />}
        showTrending
      />
      <CustomerStats
        count={socialProofMetrics.activeProjects}
        label="Active Projects"
        icon={<Heart className="w-6 h-6" />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Display customer statistics with optional trending indicator. Perfect for homepage or about page.',
      },
    },
  },
};

/**
 * Review Stars
 */
export const Stars: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      <ReviewStars rating={5} reviewCount={247} />
      <ReviewStars rating={4.5} reviewCount={89} size="lg" />
      <ReviewStars rating={4.2} reviewCount={1523} size="sm" />
      <ReviewStars rating={3.8} reviewCount={45} showCount={false} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Star rating display with review count. Supports half stars and three sizes (sm, md, lg).',
      },
    },
  },
};

/**
 * Verified Badge
 */
export const Verified: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      <VerifiedBadge />
      <VerifiedBadge text="Verified Purchase" />
      <VerifiedBadge text="Certified Partner" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Small badge indicating verified purchase or certification. Perfect for reviews and testimonials.',
      },
    },
  },
};

/**
 * Social Follower Count
 */
export const SocialFollowers: StoryObj = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <SocialFollowerCount
        platform="facebook"
        count={socialProofMetrics.socialFollowers.facebook}
        url="https://facebook.com/lsxdesign"
      />
      <SocialFollowerCount
        platform="instagram"
        count={socialProofMetrics.socialFollowers.instagram}
        url="https://instagram.com/lsxdesign"
      />
      <SocialFollowerCount
        platform="linkedin"
        count={socialProofMetrics.socialFollowers.linkedin}
        url="https://linkedin.com/company/lsxdesign"
      />
      <SocialFollowerCount
        platform="twitter"
        count={socialProofMetrics.socialFollowers.twitter}
        url="https://twitter.com/lsxdesign"
      />
      <SocialFollowerCount
        platform="youtube"
        count={socialProofMetrics.socialFollowers.youtube}
        url="https://youtube.com/@lsxdesign"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Display social media follower counts. Clickable links to social profiles.',
      },
    },
  },
};

/**
 * Activity Feed
 */
export const Feed: StoryObj = {
  render: () => (
    <div style={{ maxWidth: '400px', padding: '1.5rem' }}>
      <ActivityFeed activities={recentActivities} maxVisible={5} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Scrolling list of recent activities. Shows user engagement and creates social proof.',
      },
    },
  },
};

/**
 * Complete Social Proof Section
 */
export const CompleteSocialProofSection: StoryObj = {
  render: () => (
    <div className="p-6" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h2)',
            fontWeight: '600',
            color: 'var(--foreground)',
            marginBottom: '0.5rem',
          }}>
            Trusted by Thousands
          </h2>
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-lg)',
            color: 'var(--muted-foreground)',
          }}>
            Join our growing community of satisfied customers
          </p>
        </div>

        {/* Live Visitors */}
        <div className="flex justify-center mb-8">
          <LiveVisitorCount count={247} />
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <CustomerStats
            count={socialProofMetrics.totalCustomers}
            label="Happy Customers"
            icon={<Users className="w-6 h-6" />}
          />
          <CustomerStats
            count={socialProofMetrics.projectsCompleted}
            label="Projects Completed"
            icon={<Award className="w-6 h-6" />}
            showTrending
          />
          <CustomerStats
            count={socialProofMetrics.customerSatisfaction}
            label="Customer Satisfaction"
            icon={<Heart className="w-6 h-6" />}
          />
        </div>

        {/* Reviews */}
        <div className="flex justify-center mb-8">
          <ReviewStars rating={4.9} reviewCount={247} size="lg" />
        </div>

        {/* Social Followers */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <SocialFollowerCount
            platform="facebook"
            count={socialProofMetrics.socialFollowers.facebook}
          />
          <SocialFollowerCount
            platform="instagram"
            count={socialProofMetrics.socialFollowers.instagram}
          />
          <SocialFollowerCount
            platform="linkedin"
            count={socialProofMetrics.socialFollowers.linkedin}
          />
          <SocialFollowerCount
            platform="twitter"
            count={socialProofMetrics.socialFollowers.twitter}
          />
          <SocialFollowerCount
            platform="youtube"
            count={socialProofMetrics.socialFollowers.youtube}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete social proof section combining multiple components. Perfect for homepage or landing pages.',
      },
    },
  },
};

/**
 * Product Page Example
 */
export const ProductPageExample: StoryObj = {
  render: () => (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto',
      padding: '2rem',
    }}>
      {/* Product Header */}
      <h1 style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-h2)',
        fontWeight: '600',
        color: 'var(--foreground)',
        marginBottom: '1rem',
      }}>
        WordPress Development Package
      </h1>

      {/* Reviews & Live Visitors */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <ReviewStars rating={4.9} reviewCount={89} />
        <LiveVisitorCount count={42} label="viewing now" />
        <VerifiedBadge text="Verified Service" />
      </div>

      {/* Product Description */}
      <p style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: 'var(--text-base)',
        color: 'var(--foreground)',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
      }}>
        Professional WordPress development service with custom theme design, 
        plugin integration, and ongoing support.
      </p>

      {/* Price */}
      <div style={{
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--muted)',
        marginBottom: '1.5rem',
      }}>
        <p style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h3)',
          fontWeight: '700',
          color: 'var(--foreground)',
        }}>
          R 12,500
        </p>
      </div>

      {/* CTA Button */}
      <button style={{
        width: '100%',
        padding: '1rem',
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        border: 'none',
        borderRadius: 'var(--radius)',
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: '600',
        cursor: 'pointer',
        marginBottom: '1rem',
      }}>
        Get Started Now
      </button>

      {/* Recent Activity */}
      <div className="mt-6">
        <ActivityFeed 
          activities={recentActivities.slice(0, 3)} 
          maxVisible={3} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of social proof on a product/service page.',
      },
    },
  },
};
