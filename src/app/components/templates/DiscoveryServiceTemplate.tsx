/**
 * Discovery Service Page
 * 
 * WordPress template: templates/page-service-discovery.html
 * 
 * **Data Source:** `/src/app/data/services.ts` (discovery-strategy service)
 * 
 * **Pattern Order:**
 * - HeroMinimal (service introduction)
 * - ServicesCard (key features grid)
 * - ProcessTimeline (discovery process)
 * - TestimonialGrid (client testimonials)
 * - FAQSection (discovery service FAQs)
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

export function DiscoveryServiceTemplate() {
  // Get service data from centralized source
  const service = getServiceBySlug('discovery-strategy');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailTemplate service={service} />;
}
