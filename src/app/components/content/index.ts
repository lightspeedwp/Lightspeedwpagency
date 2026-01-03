/**
 * Content Enhancement Components
 * 
 * Complete content component library for engaging user experiences.
 * All components use CSS variables and support light/dark themes.
 * 
 * **Components:**
 * - Instagram Feed - Social media integration
 * - Video Testimonials - Customer video stories
 * - Countdown Timers - Urgency and FOMO
 * - Testimonials Carousel - Social proof slider
 * - Weather Widget - Live weather display
 * 
 * **Design System:**
 * - All components use CSS variables
 * - Fonts: Lexend (UI), Manrope (body)
 * - Light/dark theme support
 * - WCAG 2.1 AA compliant
 * 
 * **WordPress Integration:**
 * - Instagram API integration
 * - Video embeds (YouTube, Vimeo, hosted)
 * - Real-time countdown timers
 * - Auto-rotating carousels
 * - Weather API integration
 * 
 * @see /guidelines/components/content/
 */

// ============================================================================
// INSTAGRAM FEED
// ============================================================================
export {
  InstagramFeed,
  type InstagramPost,
} from './InstagramFeed';

// ============================================================================
// VIDEO TESTIMONIALS
// ============================================================================
export {
  VideoTestimonial,
  VideoTestimonialGrid,
} from './VideoTestimonial';

// ============================================================================
// COUNTDOWN TIMERS
// ============================================================================
export {
  CountdownTimer,
  FlashSaleCountdown,
  EventCountdown,
  InlineCountdown,
} from './CountdownTimer';

// ============================================================================
// TESTIMONIALS CAROUSEL
// ============================================================================
export {
  TestimonialsCarousel,
} from './TestimonialsCarousel';

// ============================================================================
// WEATHER WIDGET
// ============================================================================
export {
  WeatherWidget,
  type WeatherData,
  type ForecastDay,
} from './WeatherWidget';