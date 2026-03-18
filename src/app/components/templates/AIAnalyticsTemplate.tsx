/**
 * AI Analytics & Insights Template
 *
 * WordPress template: templates/page-solution-ai-analytics.html
 * Route: /solutions/ai-integrations/analytics
 */

import '../../../styles/templates/page-solution-ai-optimized.css';
import { ChartLine } from '@phosphor-icons/react';
import { AISubPageTemplate } from './AISubPageTemplate';
import {
  aiAnalyticsHero,
  aiAnalyticsStats,
  aiAnalyticsFeatures,
  aiAnalyticsUseCases,
  aiAnalyticsPricing,
  aiAnalyticsFAQs,
  aiAnalyticsCTA,
  analyticsLifecycleStages,
  analyticsTrustSignal,
  analyticsRelatedServices,
  analyticsRelatedSolutions,
} from '../../data/ai-integrations-page';

export function AIAnalyticsTemplate() {
  return (
    <AISubPageTemplate
      variant="analytics"
      hero={aiAnalyticsHero}
      heroIcon={ChartLine}
      stats={aiAnalyticsStats}
      statsTitle="Analytics impact"
      statsDescription="What AI-powered analytics delivers for your business"
      features={aiAnalyticsFeatures}
      featuresTitle="AI analytics capabilities"
      featuresDescription="Turn raw data into strategic decisions automatically"
      useCases={aiAnalyticsUseCases}
      useCasesTitle="AI analytics use cases"
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
      lifecycleStages={analyticsLifecycleStages}
      trustSignal={analyticsTrustSignal}
      relatedServices={analyticsRelatedServices}
      relatedSolutions={analyticsRelatedSolutions}
      showPricing={false}
    />
  );
}