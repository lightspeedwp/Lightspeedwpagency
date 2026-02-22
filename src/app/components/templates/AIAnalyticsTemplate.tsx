/**
 * AI Analytics & Insights Template
 *
 * WordPress template: templates/page-solution-ai-analytics.html
 * Route: /solutions/ai-integrations/analytics
 */

import { LineChart } from 'lucide-react';
import { AISubPageTemplate } from './AISubPageTemplate';
import {
  aiAnalyticsHero,
  aiAnalyticsStats,
  aiAnalyticsFeatures,
  aiAnalyticsUseCases,
  aiAnalyticsPricing,
  aiAnalyticsFAQs,
  aiAnalyticsCTA,
} from '../../data/ai-integrations-page';

export function AIAnalyticsTemplate() {
  return (
    <AISubPageTemplate
      variant="analytics"
      hero={aiAnalyticsHero}
      heroIcon={LineChart}
      stats={aiAnalyticsStats}
      statsTitle="Analytics Impact"
      statsDescription="What AI-powered analytics delivers for your business"
      features={aiAnalyticsFeatures}
      featuresTitle="AI Analytics Capabilities"
      featuresDescription="Turn raw data into strategic decisions automatically"
      useCases={aiAnalyticsUseCases}
      useCasesTitle="AI Analytics Use Cases"
      useCasesDescription="Data intelligence for every department and industry"
      pricing={aiAnalyticsPricing}
      faqs={aiAnalyticsFAQs}
      cta={aiAnalyticsCTA}
      ctaBenefits={[
        '200+ auto-generated insights per month',
        '92% prediction accuracy for traffic',
        '15 hours saved on manual reporting',
        'Works alongside Google Analytics',
      ]}
    />
  );
}
