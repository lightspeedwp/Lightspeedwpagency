/**
 * AI Engine Optimisation Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/ai-engine-optimisation/
 * 
 * AI model optimization service data including model selection, prompt engineering,
 * inference caching, and cost management.
 */

import { DetailedService } from './types';

/**
 * AI Engine Optimisation Service Detailed Data
 * 
 * Complete AI engine optimization service information for the AI engine service page template.
 */
export const aiEngineOptimisationDetailed: DetailedService = {
  id: 'ai-engine-optimisation',
  slug: 'ai-engine-optimisation',
  headline: 'AI Engine Optimisation for WordPress',
  tagline: 'Fine-tune, accelerate, and scale AI models running on or alongside your WordPress stack — from inference speed to cost efficiency.',
  description: 'Making AI integrations faster, cheaper, and more reliable inside WordPress.',

  whyLightSpeed: {
    title: 'Your AI is only as good as its engine.',
    description: 'Bolting AI onto WordPress is easy. Making it perform at scale without blowing your hosting budget is hard. We optimise prompt chains, model selection, caching layers, and API orchestration so your AI features load fast and cost less per request.'
  },

  subServices: [
    {
      id: 'model-selection',
      title: 'Model Selection & Benchmarking',
      description: 'Comparing GPT-4o, Claude, Gemini, Llama, and open-source models against your specific use case for cost, latency, and quality.'
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering & Tuning',
      description: 'Crafting system prompts, few-shot examples, and chain-of-thought strategies that maximise accuracy and minimise token usage.'
    },
    {
      id: 'inference-caching',
      title: 'Inference Caching & CDN',
      description: 'Implementing semantic caching with Redis or edge functions so repeated queries return instantly without another API call.'
    },
    {
      id: 'cost-optimisation',
      title: 'Cost & Rate-Limit Management',
      description: 'Setting up tiered model routing, request batching, and budget alerts to keep AI costs predictable and under control.'
    }
  ],

  process: {
    title: 'AI Engine Optimisation Protocol',
    description: 'From bloated AI bills to lean, mean inference machines.',
    steps: [
      {
        id: 'baseline',
        number: 1,
        title: 'Baseline Measurement',
        description: 'Profiling current latency, token usage, error rates, and monthly costs across all AI endpoints.'
      },
      {
        id: 'architecture',
        number: 2,
        title: 'Architecture Review',
        description: 'Mapping your prompt chains, model calls, and data flows to identify bottlenecks and redundancies.'
      },
      {
        id: 'optimise',
        number: 3,
        title: 'Optimisation Sprint',
        description: 'Implementing caching, prompt compression, model downsizing, and batching to cut costs and latency.'
      },
      {
        id: 'validate',
        number: 4,
        title: 'Quality Validation',
        description: 'A/B testing optimised vs. original outputs to ensure quality holds while costs drop.'
      },
      {
        id: 'dashboard',
        number: 5,
        title: 'Monitoring Dashboard',
        description: 'Deploying real-time dashboards for cost, latency, and quality metrics with automated budget alerts.'
      }
    ]
  },

  cta: {
    title: 'Optimise Your AI Stack',
    description: 'Stop overspending on AI API calls. Our engineers will cut your inference costs by up to 60% while maintaining output quality.',
    buttonText: 'Request a Systems Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Answer Engine Optimisation',
      description: 'Get your brand cited by AI search engines like ChatGPT, Perplexity, and Google AI Overviews.',
      page: 'answer-engine-optimisation'
    },
    {
      title: 'WordPress Development',
      description: 'Custom integrations to connect AI models with your WordPress site securely and efficiently.',
      page: 'development'
    },
    {
      title: 'Performance Optimization',
      description: 'Ensure AI features don\'t slow down your site with server-level performance tuning.',
      page: 'performance'
    }
  ]
};
