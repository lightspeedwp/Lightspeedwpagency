import type { Meta, StoryObj } from '@storybook/react';
import { VideoTestimonial, VideoTestimonialGrid } from './VideoTestimonial';

/**
 * Video Testimonial - Customer Video Stories
 * 
 * Video player component with testimonial information overlay.
 * Supports YouTube, Vimeo, and self-hosted videos.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors
 * - Uses Lexend for names, Manrope for quotes
 * - WCAG 2.1 AA compliant
 * - Custom video controls
 * 
 * ## Video Sources
 * - YouTube embeds
 * - Vimeo embeds
 * - Self-hosted MP4 files
 * 
 * ## Use Cases
 * - Homepage testimonials
 * - Case study pages
 * - About page team stories
 * - Product pages
 */
const meta = {
  title: 'Content Enhancements/VideoTestimonial',
  component: VideoTestimonial,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Video testimonial component with author information and custom controls. Supports multiple video sources.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VideoTestimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * YouTube Video
 */
export const YouTube: Story = {
  args: {
    videoType: 'youtube',
    videoId: 'dQw4w9WgXcQ',
    author: 'Sarah Johnson',
    authorTitle: 'CEO, African Safari Consultants',
    quote: 'LSX Design transformed our online presence completely',
    duration: '2:30',
  },
  parameters: {
    docs: {
      description: {
        story: 'Video testimonial with YouTube embed. No custom controls needed - YouTube provides them.',
      },
    },
  },
};

/**
 * Vimeo Video
 */
export const Vimeo: Story = {
  args: {
    videoType: 'vimeo',
    vimeoId: '76979871',
    author: 'Michael Chen',
    authorTitle: 'Founder, TechStartup Co',
    quote: 'The best WordPress agency we\'ve ever worked with',
    duration: '1:45',
  },
  parameters: {
    docs: {
      description: {
        story: 'Video testimonial with Vimeo embed. Clean player with minimal branding.',
      },
    },
  },
};

/**
 * Self-Hosted Video
 */
export const SelfHosted: Story = {
  args: {
    videoType: 'hosted',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    posterImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop',
    author: 'Emily Rodriguez',
    authorTitle: 'Marketing Director, GreenEnergy Solutions',
    quote: 'Professional, responsive, and results-driven',
    duration: '3:15',
    showControls: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Self-hosted video with custom controls (play/pause, mute, fullscreen). Shows poster image before play.',
      },
    },
  },
};

/**
 * With Author Photo
 */
export const WithAuthorPhoto: Story = {
  args: {
    videoType: 'youtube',
    videoId: 'dQw4w9WgXcQ',
    author: 'David Thompson',
    authorTitle: 'Owner, Mountain Gear Outfitters',
    authorPhoto: 'https://i.pravatar.cc/150?img=8',
    quote: 'Outstanding support and beautiful design work',
  },
  parameters: {
    docs: {
      description: {
        story: 'Video testimonial with author photo. More personal and trustworthy.',
      },
    },
  },
};

/**
 * Without Quote
 */
export const WithoutQuote: Story = {
  args: {
    videoType: 'youtube',
    videoId: 'dQw4w9WgXcQ',
    author: 'Jessica Martinez',
    authorTitle: 'Director, Cultural Heritage Foundation',
  },
  parameters: {
    docs: {
      description: {
        story: 'Video testimonial without quote text. The video speaks for itself.',
      },
    },
  },
};

/**
 * Video Grid
 */
export const GridLayout: Story = {
  render: () => (
    <VideoTestimonialGrid
      testimonials={[
        {
          videoType: 'youtube',
          videoId: 'dQw4w9WgXcQ',
          author: 'Sarah Johnson',
          authorTitle: 'CEO, Safari Consultants',
          authorPhoto: 'https://i.pravatar.cc/150?img=1',
          quote: 'Exceptional WordPress development',
        },
        {
          videoType: 'youtube',
          videoId: 'dQw4w9WgXcQ',
          author: 'Michael Chen',
          authorTitle: 'Founder, TechStartup Co',
          authorPhoto: 'https://i.pravatar.cc/150?img=12',
          quote: 'Best WooCommerce developer',
        },
      ]}
      columns={2}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple video testimonials in a 2-column grid layout. Responsive to 1 column on mobile.',
      },
    },
  },
};

/**
 * Complete Section
 */
export const CompleteSection: Story = {
  render: () => (
    <div style={{ padding: '4rem 1.5rem', backgroundColor: 'var(--background)' }}>
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
            Hear From Our Clients
          </h2>
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-lg)',
              color: 'var(--muted-foreground)',
            }}
          >
            Real stories from real customers
          </p>
        </div>

        {/* Video Testimonials */}
        <VideoTestimonialGrid
          testimonials={[
            {
              videoType: 'youtube',
              videoId: 'dQw4w9WgXcQ',
              author: 'Sarah Johnson',
              authorTitle: 'CEO, African Safari Consultants',
              authorPhoto: 'https://i.pravatar.cc/150?img=1',
              quote: 'LSX Design delivered exceptional results',
            },
            {
              videoType: 'youtube',
              videoId: 'dQw4w9WgXcQ',
              author: 'Michael Chen',
              authorTitle: 'Founder, TechStartup Co',
              authorPhoto: 'https://i.pravatar.cc/150?img=12',
              quote: 'The best WordPress developers we\'ve worked with',
            },
          ]}
          columns={2}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete video testimonials section with header and grid layout.',
      },
    },
  },
};
