/**
 * Call to Action (CTA) Data
 * 
 * Centralized CTA content for use across various templates.
 * 
 * **Variations:**
 * - General (Contact us)
 * - Newsletter (Subscribe)
 * - Service-specific (Book consultation)
 * - Resource (Download/View)
 */

import { Envelope, Calendar, ArrowRight, DownloadSimple, ChatCentered, MagnifyingGlass, ShoppingCart } from '@phosphor-icons/react';
import type { ComponentType } from 'react';

export interface CTAData {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    page: string;
    icon?: ComponentType<{ size?: number; className?: string }>;
  };
  secondaryButton?: {
    text: string;
    page: string;
    icon?: ComponentType<{ size?: number; className?: string }>;
  };
  variant?: 'default' | 'highlighted' | 'minimal' | 'glass';
  backgroundImage?: string;
}

/**
 * General Site-wide CTA
 * Used on: Home, About, General pages
 */
export const generalCTA: CTAData = {
  title: "Ready to Transform Your Digital Presence?",
  description: "Let's discuss how we can help you build a high-performance WordPress website that drives results.",
  primaryButton: {
    text: "Get Started",
    page: "contact",
    icon: ArrowRight
  },
  secondaryButton: {
    text: "View Portfolio",
    page: "portfolio-archive"
  },
  variant: "highlighted"
};

/**
 * Service Page CTA
 * Used on: Service detail pages
 */
export const serviceCTA: CTAData = {
  title: "Need Expert WordPress Assistance?",
  description: "Our team of senior developers and designers is ready to tackle your project complexities.",
  primaryButton: {
    text: "Book a Consultation",
    page: "contact",
    icon: Calendar
  },
  secondaryButton: {
    text: "See Our Work",
    page: "portfolio-archive"
  },
  variant: "default"
};

/**
 * Audit/Strategy CTA
 * Used on: Strategy, Performance pages
 */
export const auditCTA: CTAData = {
  title: "Unsure Where to Start?",
  description: "Get a comprehensive audit of your current website. We'll identify performance bottlenecks, accessibility issues, and growth opportunities.",
  primaryButton: {
    text: "Request an Audit",
    page: "contact",
    icon: MagnifyingGlass
  },
  variant: "minimal"
};

/**
 * Newsletter CTA
 * Used on: Blog, Resources
 */
export const newsletterCTA: CTAData = {
  title: "Stay Ahead of the Curve",
  description: "Join 5,000+ developers and business owners receiving our monthly WordPress insights, tips, and resources.",
  primaryButton: {
    text: "Subscribe Now",
    page: "newsletter-service",
    icon: Envelope
  },
  variant: "glass"
};

/**
 * WooCommerce CTA
 * Used on: WooCommerce solution pages
 */
export const woocommerceCTA: CTAData = {
  title: "Scale Your Online Store",
  description: "Take your e-commerce business to the next level with a performance-optimized WooCommerce platform.",
  primaryButton: {
    text: "Start Selling",
    page: "contact",
    icon: ShoppingCart
  },
  variant: "highlighted"
};

/**
 * Portfolio Archive CTA
 * Used on: Portfolio archive pages
 */
export const portfolioPageCTA: CTAData = {
  title: "Ready to Start Your Project?",
  description: "Let's build something award-winning together.",
  primaryButton: {
    text: "Get a Quote",
    page: "contact",
    icon: ChatCentered
  },
  variant: "default"
};

/**
 * Portfolio Archive CTA (Alias)
 * Fixes missing export error
 */
export const portfolioArchiveCTA = portfolioPageCTA;

/**
 * General Archive CTA
 * Used on: Generic archive templates
 */
export const generalArchiveCTA: CTAData = {
  title: "Explore Our Content",
  description: "Browse our latest articles, resources, and updates.",
  primaryButton: {
    text: "View All",
    page: "blog",
    icon: ArrowRight
  },
  variant: "default"
};