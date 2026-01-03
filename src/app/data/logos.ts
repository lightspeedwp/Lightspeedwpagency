/**
 * Logos & Social Proof Mock Data
 * 
 * Client logos, partner badges, awards, and certifications for LSX Design.
 * 
 * **WordPress Mapping:**
 * - Could be custom post type 'partner' or 'award'
 * - Or ACF gallery fields
 * - Used for social proof and trust building
 * 
 * **Business Context:**
 * LSX Design showcases partnerships with leading WordPress
 * and WooCommerce companies, plus industry certifications.
 */

export interface Logo {
  id: string;
  src: string;
  alt: string;
  href?: string;  // Optional link to partner site
  category: 'client' | 'partner' | 'award' | 'certification';
}

/**
 * Client Logos
 * Real clients we've worked with
 */
export const clientLogos: Logo[] = [
  {
    id: 'client-1',
    src: '/logos/wordpress.svg',
    alt: 'WordPress',
    href: 'https://wordpress.org',
    category: 'client'
  },
  {
    id: 'client-2',
    src: '/logos/woocommerce.svg',
    alt: 'WooCommerce',
    href: 'https://woocommerce.com',
    category: 'client'
  },
  {
    id: 'client-3',
    src: '/logos/automattic.svg',
    alt: 'Automattic',
    href: 'https://automattic.com',
    category: 'client'
  },
  {
    id: 'client-4',
    src: '/logos/jetpack.svg',
    alt: 'Jetpack',
    href: 'https://jetpack.com',
    category: 'client'
  },
  {
    id: 'client-5',
    src: '/logos/elementor.svg',
    alt: 'Elementor',
    href: 'https://elementor.com',
    category: 'client'
  },
  {
    id: 'client-6',
    src: '/logos/yoast.svg',
    alt: 'Yoast',
    href: 'https://yoast.com',
    category: 'client'
  }
];

/**
 * Technology Partner Logos
 * Companies we partner with
 */
export const partnerLogos: Logo[] = [
  {
    id: 'partner-wpengine',
    src: '/logos/wpengine.svg',
    alt: 'WP Engine',
    href: 'https://wpengine.com',
    category: 'partner'
  },
  {
    id: 'partner-kinsta',
    src: '/logos/kinsta.svg',
    alt: 'Kinsta',
    href: 'https://kinsta.com',
    category: 'partner'
  },
  {
    id: 'partner-cloudflare',
    src: '/logos/cloudflare.svg',
    alt: 'Cloudflare',
    href: 'https://cloudflare.com',
    category: 'partner'
  },
  {
    id: 'partner-github',
    src: '/logos/github.svg',
    alt: 'GitHub',
    href: 'https://github.com',
    category: 'partner'
  },
  {
    id: 'partner-stripe',
    src: '/logos/stripe.svg',
    alt: 'Stripe',
    href: 'https://stripe.com',
    category: 'partner'
  }
];

/**
 * Award Logos
 * Industry recognition and awards
 */
export const awardLogos: Logo[] = [
  {
    id: 'award-awwwards',
    src: '/logos/awwwards.svg',
    alt: 'Awwwards Honorable Mention',
    category: 'award'
  },
  {
    id: 'award-css-design',
    src: '/logos/css-design-awards.svg',
    alt: 'CSS Design Awards',
    category: 'award'
  },
  {
    id: 'award-webby',
    src: '/logos/webby-awards.svg',
    alt: 'Webby Awards Nominee',
    category: 'award'
  },
  {
    id: 'award-w3',
    src: '/logos/w3-awards.svg',
    alt: 'W3 Awards Gold',
    category: 'award'
  }
];

/**
 * Certification Logos
 * Professional certifications and partnerships
 */
export const certificationLogos: Logo[] = [
  {
    id: 'cert-wp-vip',
    src: '/logos/wordpress-vip.svg',
    alt: 'WordPress VIP Partner',
    href: 'https://wpvip.com',
    category: 'certification'
  },
  {
    id: 'cert-woo-expert',
    src: '/logos/woocommerce-expert.svg',
    alt: 'WooCommerce Expert Certification',
    category: 'certification'
  },
  {
    id: 'cert-google-partner',
    src: '/logos/google-partner.svg',
    alt: 'Google Partner',
    href: 'https://www.google.com/partners/',
    category: 'certification'
  },
  {
    id: 'cert-wcag',
    src: '/logos/wcag-certified.svg',
    alt: 'WCAG 2.1 AA Certified Developer',
    category: 'certification'
  }
];

/**
 * All Logos Combined
 */
export const allLogos: Logo[] = [
  ...clientLogos,
  ...partnerLogos,
  ...awardLogos,
  ...certificationLogos
];

/**
 * Helper Functions
 */

export function getLogoById(id: string): Logo | undefined {
  return allLogos.find(logo => logo.id === id);
}

export function getLogosByCategory(category: Logo['category']): Logo[] {
  return allLogos.filter(logo => logo.category === category);
}

export function getLogosForHomepage(): Logo[] {
  // Featured clients for homepage
  return clientLogos.slice(0, 6);
}

export function getLogosForAboutPage(): Logo[] {
  // Partners for about page
  return partnerLogos;
}

export function getLogosForPortfolio(): Logo[] {
  // Clients for portfolio page
  return clientLogos;
}
