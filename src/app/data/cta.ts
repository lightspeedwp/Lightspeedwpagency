/**
 * CTA (Call-to-Action) Data
 * 
 * Centralized CTA content for archive templates.
 * Provides title, supporting text, and button labels for conversion-focused sections.
 * 
 * Usage: Import appropriate CTA for each archive type
 */

export interface CTAData {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'cta';
  modalTitle?: string;
  modalDescription?: string;
}

/**
 * General Archive CTA
 * Used for: Default archives, generic content archives
 */
export const generalArchiveCTA: CTAData = {
  id: 'general-archive',
  title: 'Ready to Transform Your WordPress Site?',
  description: 'Let\'s discuss how our design system and block theme expertise can elevate your digital presence. Get a free consultation today.',
  buttonText: 'Start Your Project',
  buttonVariant: 'primary',
  modalTitle: 'Let\'s Build Something Amazing',
  modalDescription: 'Fill out the form below and we\'ll get back to you within 24 hours to discuss your project requirements.'
};

/**
 * Blog Archive CTA
 * Used for: Blog index, category archives, tag archives, date archives
 */
export const blogArchiveCTA: CTAData = {
  id: 'blog-archive',
  title: 'Want Expert WordPress Guidance?',
  description: 'Subscribe to our newsletter for weekly tips on WordPress development, design systems, and modern web best practices.',
  buttonText: 'Get Free Consultation',
  buttonVariant: 'primary',
  modalTitle: 'Talk to a WordPress Expert',
  modalDescription: 'Share your project details and we\'ll connect you with one of our WordPress specialists for a free 30-minute consultation.'
};

/**
 * Portfolio Archive CTA
 * Used for: Portfolio archives, project showcases
 */
export const portfolioArchiveCTA: CTAData = {
  id: 'portfolio-archive',
  title: 'Like What You See?',
  description: 'These are just a few examples of our work. Let\'s create something exceptional together that showcases your brand and drives results.',
  buttonText: 'Discuss Your Project',
  buttonVariant: 'cta',
  modalTitle: 'Start Your Project Today',
  modalDescription: 'Tell us about your vision and we\'ll craft a custom solution that exceeds your expectations.'
};

/**
 * Services Archive CTA
 * Used for: Services listings, offerings pages
 */
export const servicesArchiveCTA: CTAData = {
  id: 'services-archive',
  title: 'Ready to Get Started?',
  description: 'Our team is ready to help you build a better WordPress experience. Schedule a free consultation to discuss your needs and timeline.',
  buttonText: 'Book Free Consultation',
  buttonVariant: 'primary',
  modalTitle: 'Book Your Free Consultation',
  modalDescription: 'Let\'s discuss your project requirements and how we can help you achieve your goals.'
};

/**
 * Team/Author Archive CTA
 * Used for: Team member pages, author archives
 */
export const teamArchiveCTA: CTAData = {
  id: 'team-archive',
  title: 'Work With Our Expert Team',
  description: 'Our talented team of designers and developers is ready to bring your WordPress vision to life with cutting-edge solutions.',
  buttonText: 'Meet the Team',
  buttonVariant: 'primary',
  modalTitle: 'Let\'s Connect',
  modalDescription: 'Interested in working together? Fill out the form and one of our team members will reach out within 24 hours.'
};

/**
 * Product/WooCommerce Archive CTA
 * Used for: WooCommerce product archives, shop pages
 */
export const productArchiveCTA: CTAData = {
  id: 'product-archive',
  title: 'Need a Custom E-commerce Solution?',
  description: 'From custom WooCommerce development to complete store design, we create online shopping experiences that convert.',
  buttonText: 'Request a Quote',
  buttonVariant: 'cta',
  modalTitle: 'E-commerce Project Inquiry',
  modalDescription: 'Tell us about your e-commerce needs and we\'ll provide a detailed proposal and timeline.'
};

/**
 * Helper function to get CTA by archive type
 */
export function getCTAByArchiveType(archiveType: string): CTAData {
  const ctaMap: Record<string, CTAData> = {
    'general': generalArchiveCTA,
    'blog': blogArchiveCTA,
    'category': blogArchiveCTA,
    'tag': blogArchiveCTA,
    'date': blogArchiveCTA,
    'author': teamArchiveCTA,
    'portfolio': portfolioArchiveCTA,
    'services': servicesArchiveCTA,
    'team': teamArchiveCTA,
    'product': productArchiveCTA,
    'woocommerce': productArchiveCTA
  };

  return ctaMap[archiveType] || generalArchiveCTA;
}

/**
 * All CTAs for easy access
 */
export const allCTAs = {
  general: generalArchiveCTA,
  blog: blogArchiveCTA,
  portfolio: portfolioArchiveCTA,
  services: servicesArchiveCTA,
  team: teamArchiveCTA,
  product: productArchiveCTA
};
