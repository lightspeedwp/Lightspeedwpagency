/**
 * Tour Operator Solutions Template
 * 
 * WordPress template: templates/page-tour-operator.html
 * 
 * Tour operator solutions page for travel and tourism industry.
 * 
 * Pattern order:
 * Hero → Challenges → Solutions → Integrations → Benefits → FAQs → CTA
 * 
 * **Migration Status:**
 * - ✅ Hero → Hero pattern (gradient with plane icon)
 * - ✅ Challenges → ChallengesGrid pattern
 * - ✅ Solutions → SolutionsDetailGrid pattern
 * - ✅ Integrations → IntegrationsGrid pattern
 * - ✅ Benefits → StatsGrid pattern
 * - ✅ FAQs → FAQSection pattern
 * - ✅ CTA → FunkyCTA pattern
 * 
 * **Code Reduction:** 491 → 183 lines (62.7% reduction)
 */

import '../../../styles/templates/page-solution-tour-design.css';
import { Hero } from '../patterns/Hero';
import { ChallengesGrid } from '../patterns/ChallengesGrid';
import { SolutionsDetailGrid } from '../patterns/SolutionsDetailGrid';
import { IntegrationsGrid } from '../patterns/IntegrationsGrid';
import { StatsGrid } from '../patterns/StatsGrid';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';

// Import centralized data
import {
  tourOperatorHero,
  tourOperatorChallenges,
  tourOperatorSolutions,
  tourOperatorIntegrations,
  tourOperatorBenefits,
  tourOperatorFAQs,
  tourOperatorCTA
} from '../../data/tour-operator-page';

export function TourOperatorTemplate() {
  return (
    <>
        {/* Hero Section */}
        <Hero
          variant="service"
          gradient="cyan"
          title={tourOperatorHero.title}
          description={tourOperatorHero.description}
          badge={{
            icon: tourOperatorHero.badge.icon,
            text: tourOperatorHero.badge.text
          }}
          buttons={[
            {
              label: tourOperatorHero.buttons[0].label,
              page: tourOperatorHero.buttons[0].page as any,
              variant: tourOperatorHero.buttons[0].variant as any
            },
            {
              label: tourOperatorHero.buttons[1].label,
              page: tourOperatorHero.buttons[1].page as any,
              variant: tourOperatorHero.buttons[1].variant as any
            }
          ]}
          heroIcon={tourOperatorHero.heroIcon}
        />

        {/* Tour Industry Challenges */}
        <ChallengesGrid
          title={tourOperatorChallenges.title}
          description={tourOperatorChallenges.description}
          challenges={tourOperatorChallenges.items}
          columns={4}
          spacing="xl"
          backgroundColor="var(--background)"
        />

        {/* Tour Operator Solutions Grid */}
        <SolutionsDetailGrid
          title={tourOperatorSolutions.title}
          description={tourOperatorSolutions.description}
          solutions={tourOperatorSolutions.items}
          columns={3}
          spacing="xl"
          backgroundColor="var(--muted)"
        />

        {/* Integrations Section */}
        <IntegrationsGrid
          title={tourOperatorIntegrations.title}
          description={tourOperatorIntegrations.description}
          integrations={tourOperatorIntegrations.items}
          columns={3}
          spacing="xl"
          backgroundColor="var(--background)"
        />

        {/* Benefits Section */}
        <StatsGrid
          stats={tourOperatorBenefits}
          columns={4}
          variant="cards"
          spacing="xl"
        />

        {/* FAQ Section */}
        <FAQSection
          title="Tour Operator FAQs"
          description="Common questions about tour operator websites"
          faqs={tourOperatorFAQs}
        />

        {/* CTA Section */}
        <FunkyCTA
          title={tourOperatorCTA.title}
          description={tourOperatorCTA.description}
          buttonText={tourOperatorCTA.primaryButtonText}
          buttonPage={tourOperatorCTA.primaryButtonPage as any}
          benefits={[
            'Stunning tour itineraries',
            'Interactive maps & booking',
            'Wetu integration support',
            'Responsive tour galleries',
            'SEO-optimised tour pages'
          ]}
        />
    </>
  );
}

export default TourOperatorTemplate;