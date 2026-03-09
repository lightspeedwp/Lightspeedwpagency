/**
 * AI Content Generation Template
 *
 * WordPress template: templates/page-solution-ai-content.html
 * Route: /solutions/ai-integrations/content-generation
 */

import '../../../styles/templates/page-solution-ai-optimized.css';
import { PenNib } from '@phosphor-icons/react';
import { AISubPageTemplate } from './AISubPageTemplate';
import {
  aiContentHero,
  aiContentStats,
  aiContentFeatures,
  aiContentUseCases,
  aiContentPricing,
  aiContentFAQs,
  aiContentCTA,
} from '../../data/ai-integrations-page';

export function AIContentGenerationTemplate() {
  return (
    <AISubPageTemplate
      variant="content"
      hero={aiContentHero}
      heroIcon={PenNib}
      stats={aiContentStats}
      statsTitle="Content Generation Impact"
      statsDescription="How AI transforms your content workflow"
      features={aiContentFeatures}
      featuresTitle="AI Content Capabilities"
      featuresDescription="Everything you need to produce quality content at scale"
      useCases={aiContentUseCases}
      useCasesTitle="Who Benefits from AI Content?"
      useCasesDescription="AI-powered content creation across industries"
      pricing={aiContentPricing}
      faqs={aiContentFAQs}
      cta={aiContentCTA}
      ctaBenefits={[
        '10x content output without growing headcount',
        'On-brand AI writing trained on your voice',
        'SEO-optimised from the first draft',
        '30+ language support built in',
      ]}
    />
  );
}