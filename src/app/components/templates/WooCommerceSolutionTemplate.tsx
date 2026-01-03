/**
 * WooCommerce E-commerce Solution Template
 * 
 * WordPress template: templates/page-solution-woocommerce.html
 * 
 * **Data Source:** `/src/app/data/solutions.ts` (woocommerce-solution)
 * 
 * **Pattern Order:**
 * - HeroGradient (immersive intro)
 * - ServicesCard (included services)
 * - FeatureComparison (WooCommerce features)
 * - CaseStudyPreview (e-commerce success stories)
 * - TestimonialGrid (client testimonials)
 * - FAQSection (WooCommerce FAQs)
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
 * @see {@link /guidelines/templates/solution-detail.md}
 */

import { SolutionDetailTemplate } from './SolutionDetailTemplate';
import { getSolutionBySlug } from '../../data/solutions';

export function WooCommerceSolutionTemplate() {
  // Get solution data from centralized source
  const solution = getSolutionBySlug('woocommerce-solution');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return <SolutionDetailTemplate solution={solution} />;
}
