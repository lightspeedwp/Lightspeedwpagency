/**
 * Data Exports
 *
 * Central export file for all data modules.
 *
 * NOTE: Some page-specific data files define local interfaces (FAQ, ProcessStep)
 * that collide with canonical definitions in faqs.ts / process.ts.
 * Those files are excluded from this barrel and must be imported directly:
 *   - pages.ts          (deprecated wrapper — use site-pages.ts)
 *   - services-page.ts  (local ProcessStep + FAQ)
 *   - services-detailed.ts (local ProcessStep)
 *   - service-page.ts   (local ProcessStep)
 */

/* Core content */
export * from './site-pages';
export * from './blog-posts';
export * from './portfolio-projects';
export * from './services';
export * from './solutions';
export * from './about';
export * from './team';
export * from './careers-page';
export * from './contact-page';
export * from './faqs';
export * from './pricing';
export * from './testimonials-consolidated';
export * from './guarantees';
export * from './front-page';
export * from './process';
export * from './cta';
export * from './logos';
export * from './hosting';
export * from './taxonomies';
export * from './tutorials';
export * from './videos';
export * from './podcasts';
export * from './search';
export * from './legal';
export * from './company';
export * from './maintenance';
export * from './social-proof';
export * from './seo';
export * from './woocommerce';
export * from './posts-formats';
export * from './comparisons';
export * from './archive-items';

/* Solution pages */
export * from './mailchimp-solution-page';
export * from './wetu-solution-page';
export * from './lsx-solution-page';
export * from './wordpress-solution-page';
export * from './woocommerce-solution-page';
export * from './publishers-solution-page';

/* Service pages (collision-free only) */
export * from './services-landing-page';
export * from './content-service-page';
export * from './design-service-page';
export * from './development-service-page';
export * from './discovery-service-page';
export * from './migrations-service-page';
export * from './newsletter-service-page';
export * from './security-service-page';
export * from './support-service-page';
export * from './performance-service-page';
export * from './accessibility-service-page';
export * from './ai-engine-service-page';
export * from './answer-engine-service-page';

/* Template-specific data */
export * from './why-choose-us-page';
export * from './why-choose-us';
export * from './faq-page';
export * from './portfolio-archive-page';
export * from './blog-index-page';
export * from './blog-post-page';
export * from './portfolio-project-page';
export * from './guarantees-page';
export * from './team-page';
export * from './roi-calculator-page';
export * from './author-archive';
export * from './about-page';
export * from './hosting-page';
export * from './pricing-page';
export * from './homepage';
export * from './error-404';
export * from './404-page';
export * from './publishers-page';
export * from './wetu-importer-page';
export * from './lsx-search-page';
export * from './lsx-sharing-page';
export * from './lsx-design-page';
export * from './woocommerce-redesign-page';
export * from './wordpress-redesign-page';

/* Extended data */
export * from './faqs-extended';
export * from './solutions-detailed';

/* UI data */
export * from './page-switcher';

/* AI Integrations */
export * from './ai-integrations-page';

/* Service Journey */
export * from './service-journey';

/* Journey Stage Pages */
export * from './journey-stage-pages';