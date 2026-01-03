/**
 * WordPress Core Solution Template
 * 
 * WordPress template: templates/page-solution-wordpress.html
 * 
 * **Data Source:** `/src/app/data/solutions.ts` (wordpress-solution)
 * 
 * **Pattern Order:**
 * - HeroGradient (immersive intro)
 * - ServicesCard (included services)
 * - FeatureComparison (solution features)
 * - CaseStudyPreview (success stories)
 * - TestimonialGrid (client testimonials)
 * - FAQSection (WordPress FAQs)
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

export function WordPressSolutionTemplate() {
  // Get solution data from centralized source
  const solution = getSolutionBySlug('wordpress-solution');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return <SolutionDetailTemplate solution={solution} />;
}
