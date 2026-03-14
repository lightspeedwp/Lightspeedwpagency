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

export function TourOperatorSolutionTemplate() {
  return (
    <main className="wp-flex wp-flex-col wp-w-full wp-min-h-screen wp-bg-background">
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
        buttons={tourOperatorHero.buttons as any}
        heroIcon={tourOperatorHero.heroIcon}
      />

      {/* Tour Industry Challenges */}
      <section className="wp-py-20 wp-bg-background">
        <ChallengesGrid
          title={tourOperatorChallenges.title}
          description={tourOperatorChallenges.description}
          challenges={tourOperatorChallenges.items}
          columns={4}
          spacing="xl"
        />
      </section>

      {/* Tour Operator Solutions Grid */}
      <section className="wp-py-20 wp-bg-muted">
        <SolutionsDetailGrid
          title={tourOperatorSolutions.title}
          description={tourOperatorSolutions.description}
          solutions={tourOperatorSolutions.items}
          columns={3}
          spacing="xl"
        />
      </section>

      {/* Integrations Section */}
      <section className="wp-py-20 wp-bg-background">
        <IntegrationsGrid
          title={tourOperatorIntegrations.title}
          description={tourOperatorIntegrations.description}
          integrations={tourOperatorIntegrations.items}
          columns={3}
          spacing="xl"
        />
      </section>

      {/* Benefits Section */}
      <section className="wp-py-20 wp-bg-muted">
        <div className="wp-container wp-mx-auto wp-px-6">
          <StatsGrid
            stats={tourOperatorBenefits}
            columns={3}
            variant="cards"
            spacing="xl"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="wp-py-20 wp-bg-background">
        <FAQSection
          title="Tour Operator FAQs"
          description="Common questions about tour operator websites"
          faqs={tourOperatorFAQs}
        />
      </section>

      {/* CTA Section */}
      <section className="wp-pb-20 wp-pt-10 wp-bg-background">
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
      </section>
    </main>
  );
}

export default TourOperatorSolutionTemplate;