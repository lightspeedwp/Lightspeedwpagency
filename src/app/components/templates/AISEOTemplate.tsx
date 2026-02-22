/**
 * AI-Powered SEO Template
 *
 * WordPress template: templates/page-solution-ai-seo.html
 * Route: /solutions/ai-integrations/seo
 */

import { Search } from 'lucide-react';
import { AISubPageTemplate } from './AISubPageTemplate';
import {
  aiSEOHero,
  aiSEOStats,
  aiSEOFeatures,
  aiSEOUseCases,
  aiSEOPricing,
  aiSEOFAQs,
  aiSEOCTA,
} from '../../data/ai-integrations-page';

export function AISEOTemplate() {
  return (
    <AISubPageTemplate
      variant="seo"
      hero={aiSEOHero}
      heroIcon={Search}
      stats={aiSEOStats}
      statsTitle="SEO Intelligence Impact"
      statsDescription="What AI-driven SEO delivers for your business"
      features={aiSEOFeatures}
      featuresTitle="AI SEO Capabilities"
      featuresDescription="Automated intelligence for every aspect of your SEO strategy"
      useCases={aiSEOUseCases}
      useCasesTitle="AI SEO for Every Industry"
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
    />
  );
}
