/**
 * Migrations Service Page
 * 
 * WordPress template: templates/page-service-migrations.html
 * 
 * **Data Source:** `/src/app/data/services.ts` (website-migration service)
 * 
 * **Pattern Order:**
 * - HeroMinimal (service introduction)
 * - ServicesCard (key features grid)
 * - ProcessTimeline (migration process)
 * - TestimonialGrid (client testimonials)
 * - FAQSection (migration service FAQs)
 * - CTASection (conversion)
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body
 * - Manrope for small text
 * - Tailwind spacing classes
 * 
 * **Accessibility:**
 * - WCAG 2.1 AA compliant
 * - Keyboard navigation
 * - Screen reader friendly
 * 
 * @see {@link /guidelines/templates/service-detail.md}
 */

import { ServiceDetailTemplate } from './ServiceDetailTemplate';
import { getServiceBySlug } from '../../data/services';

export function MigrationsServiceTemplate() {
  // Get service data from centralized source
  const service = getServiceBySlug('website-migration');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailTemplate service={service} />;
}
