/**
 * AI-Powered SEO Template
 *
 * WordPress template: templates/page-solution-ai-seo.html
 * Route: /solutions/ai-integrations/seo
 */

import '../../../styles/templates/page-solution-ai-optimized.css';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { AISubPageTemplate } from './AISubPageTemplate';
import {
  aiSEOHero,
  aiSEOStats,
  aiSEOFeatures,
  aiSEOUseCases,
  aiSEOPricing,
  aiSEOFAQs,
  aiSEOCTA,
  seoLifecycle,
  seoTrustSignal,
  seoRelatedServices,
  seoRelatedSolutions,
} from '../../data/ai-integrations-page';

export function AISEOTemplate() {
  return (
    <AISubPageTemplate
      variant="seo"
      hero={aiSEOHero}
      heroIcon={MagnifyingGlass}
      stats={aiSEOStats}
      statsTitle="SEO intelligence impact"
      statsDescription="What AI-driven SEO delivers for your business"
      features={aiSEOFeatures}
      featuresTitle="AI SEO capabilities"
      featuresDescription="Automated intelligence for every aspect of your SEO strategy"
      useCases={aiSEOUseCases}
      useCasesTitle="AI SEO for every industry"
      useCasesDescription="Tailored SEO automation for your specific needs"
      pricing={aiSEOPricing}
      faqs={aiSEOFAQs}
      cta={aiSEOCTA}
      ctaBenefits={[
        '156% average organic traffic growth',
        'Real-time content scoring in the editor',
        'Auto-generated schema markup',
        'Competitor monitoring and gap analysis',
      ]}
      lifecycleStages={[seoLifecycle]}
      trustSignal={seoTrustSignal}
      relatedServices={seoRelatedServices}
      relatedSolutions={seoRelatedSolutions}
      showPricing={false}
    />
  );
}