/**
 * LSX Design Complete Solution Template
 * 
 * WordPress template: templates/page-solution-lsx-design.html
 * 
 * **Data Source:** `/src/app/data/solutions.ts` (lsx-design solution)
 * 
 * **Pattern Order:**
 * - HeroGradient (immersive intro)
 * - ServicesCard (included services)
 * - FeatureComparison (solution vs competitors)
 * - CaseStudyPreview (success stories)
 * - TestimonialGrid (client testimonials)
 * - FAQSection (solution FAQs)
 * - FunkyCTA (conversion)
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

import '../../../styles/templates/solution-detail.css';
import { SolutionDetailTemplate } from './SolutionDetailTemplate';
import { getSolutionBySlug } from '../../data/solutions';

export function LSXSolutionTemplate() {
  // Get solution data from centralized source
  const solution = getSolutionBySlug('lsx-design');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  // Map Solution data to SolutionDetailTemplate's expected shape
  const templateData = {
    title: solution.name,
    slug: solution.slug,
    category: solution.category,
    tagline: solution.tagline,
    description: solution.description,
    benefits: solution.benefits,
    featuresList: solution.features,
    pricing: {
      model: solution.pricing.model,
      starting: solution.pricing.starting,
      includes: solution.deliverables,
    },
  };

  return <SolutionDetailTemplate solution={templateData} />;
}