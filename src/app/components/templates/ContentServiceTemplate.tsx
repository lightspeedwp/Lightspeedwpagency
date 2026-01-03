/**
 * Content Service Page
 * 
 * WordPress template: templates/page-service-content.html
 * 
 * **Data Source:** `/src/app/data/services.ts` (content-strategy service)
 * 
 * **Pattern Order:**
 * - HeroMinimal (service introduction)
 * - ServicesCard (key features grid)
 * - ProcessTimeline (content creation process)
 * - TestimonialGrid (client testimonials)
 * - FAQSection (content service FAQs)
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

export function ContentServiceTemplate() {
  // Get service data from centralized source
  const service = getServiceBySlug('content-strategy');

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailTemplate service={service} />;
}
