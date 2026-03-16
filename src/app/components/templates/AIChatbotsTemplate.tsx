/**
 * AI Chatbots for WordPress Template
 *
 * WordPress template: templates/page-solution-ai-chatbots.html
 * Route: /solutions/ai-integrations/chatbots
 */

import '../../../styles/templates/page-solution-ai-optimized.css';
import { Robot } from '@phosphor-icons/react';
import { AISubPageTemplate } from './AISubPageTemplate';
import {
  aiChatbotsHero,
  aiChatbotsStats,
  aiChatbotsFeatures,
  aiChatbotsUseCases,
  aiChatbotsPricing,
  aiChatbotsFAQs,
  aiChatbotsCTA,
} from '../../data/ai-integrations-page';

export function AIChatbotsTemplate() {
  return (
    <AISubPageTemplate
      variant="chatbots"
      hero={aiChatbotsHero}
      heroIcon={Robot}
      stats={aiChatbotsStats}
      statsTitle="Chatbot performance metrics"
      statsDescription="How AI chatbots transform visitor engagement"
      features={aiChatbotsFeatures}
      featuresTitle="Smart chatbot capabilities"
      featuresDescription="Intelligent conversation features built for WordPress"
      useCases={aiChatbotsUseCases}
      useCasesTitle="AI chatbot use cases"
      useCasesDescription="Conversational AI for every business type"
      pricing={aiChatbotsPricing}
      faqs={aiChatbotsFAQs}
      cta={aiChatbotsCTA}
      ctaBenefits={[
        '24/7 visitor engagement — never miss a lead',
        'Trained on your content and brand voice',
        'Seamless handoff to human agents',
        'GDPR compliant by design',
      ]}
    />
  );
}