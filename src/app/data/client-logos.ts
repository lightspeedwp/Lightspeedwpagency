/**
 * Client Logos Data
 *
 * Client and partner logos for social proof
 * Real and placeholder logos for the LightSpeed WP Agency portfolio
 *
 * **WordPress Mapping:**
 * - Custom post type: 'client' or 'partner'
 * - Featured images as logos
 * - Custom fields for URL, featured status
 */

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  url?: string;
  featured?: boolean;
  category?: 'client' | 'partner' | 'technology';
}

/**
 * Featured Clients
 * High-profile clients to showcase
 */
export const featuredClients: ClientLogo[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    logo: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png',
    url: 'https://wordpress.org',
    featured: true,
    category: 'technology',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    logo: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png',
    url: 'https://woocommerce.com',
    featured: true,
    category: 'technology',
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200',
    url: 'https://mailchimp.com',
    featured: true,
    category: 'partner',
  },
];

/**
 * Technology Partners
 * Tools and platforms we work with
 */
export const technologyPartners: ClientLogo[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200',
    url: 'https://aws.amazon.com',
    category: 'technology',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=200',
    url: 'https://cloudflare.com',
    category: 'technology',
  },
  {
    id: 'github',
    name: 'GitHub',
    logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=200',
    url: 'https://github.com',
    category: 'technology',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    logo: 'https://images.unsplash.com/photo-1603444786765-6a64f31f9f52?w=200',
    url: 'https://stripe.com',
    category: 'technology',
  },
];

/**
 * Client Logos
 * All clients combined (featured + technology partners)
 */
export const allClientLogos: ClientLogo[] = [
  ...featuredClients,
  ...technologyPartners,
  {
    id: 'google',
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200',
    url: 'https://google.com',
    category: 'partner',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200',
    url: 'https://microsoft.com',
    category: 'partner',
  },
  {
    id: 'adobe',
    name: 'Adobe',
    logo: 'https://images.unsplash.com/photo-1611926653670-f5e7a2718964?w=200',
    url: 'https://adobe.com',
    category: 'partner',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    logo: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=200',
    url: 'https://shopify.com',
    category: 'partner',
  },
  {
    id: 'netlify',
    name: 'Netlify',
    logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200',
    url: 'https://netlify.com',
    category: 'technology',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    logo: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=200',
    url: 'https://vercel.com',
    category: 'technology',
  },
];

/**
 * Homepage Logos
 * Subset of logos to display on homepage
 * (6-8 most recognizable brands)
 */
export const homepageLogos: ClientLogo[] = allClientLogos.slice(0, 8);

/**
 * Helper: Get logos by category
 */
export const getLogosByCategory = (
  category: 'client' | 'partner' | 'technology'
): ClientLogo[] => {
  return allClientLogos.filter((logo) => logo.category === category);
};

/**
 * Helper: Get featured logos
 */
export const getFeaturedLogos = (): ClientLogo[] => {
  return allClientLogos.filter((logo) => logo.featured === true);
};
