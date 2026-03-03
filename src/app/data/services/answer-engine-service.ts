/**
 * Answer Engine Optimisation Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/answer-engine-optimisation/
 * 
 * Answer Engine Optimization (AEO) service data including structured data,
 * entity authority, content formatting, and AI citation tracking.
 */

import { DetailedService } from './types';

/**
 * Answer Engine Optimisation Service Detailed Data
 * 
 * Complete AEO service information for the answer engine optimization service page template.
 */
export const answerEngineOptimisationDetailed: DetailedService = {
  id: 'answer-engine-optimisation',
  slug: 'answer-engine-optimisation',
  headline: 'Answer Engine Optimisation',
  tagline: 'Get your brand cited by ChatGPT, Perplexity, Gemini, and AI Overviews — the new front page of the internet.',
  description: 'Optimising your content to be the answer AI engines serve to millions.',

  whyLightSpeed: {
    title: 'Search is becoming conversation.',
    description: 'Traditional SEO gets you ranked. Answer Engine Optimisation (AEO) gets you quoted. As users shift from Google\'s blue links to AI-generated answers, your content must be structured, authoritative, and machine-readable enough for LLMs to cite you as the source of truth.'
  },

  subServices: [
    {
      id: 'structured-data',
      title: 'Schema & Structured Data',
      description: 'Implementing JSON-LD, FAQ schema, HowTo schema, and entity markup so AI crawlers can parse your expertise.'
    },
    {
      id: 'entity-authority',
      title: 'Entity & Authority Building',
      description: 'Establishing your brand as a trusted knowledge entity through consistent NAP, author markup, and topical authority signals.'
    },
    {
      id: 'content-formatting',
      title: 'AI-Friendly Content Format',
      description: 'Restructuring pages with clear Q&A pairs, concise definitions, summary paragraphs, and layered depth — the format LLMs prefer to cite.'
    },
    {
      id: 'citation-tracking',
      title: 'AI Citation Monitoring',
      description: 'Tracking where and how often AI engines cite your brand, measuring share-of-voice in AI-generated answers across ChatGPT, Perplexity, and Google AI Overviews.'
    }
  ],

  process: {
    title: 'AEO Implementation Roadmap',
    description: 'From invisible to the AI\'s go-to source in five phases.',
    steps: [
      {
        id: 'visibility-audit',
        number: 1,
        title: 'AI Visibility Audit',
        description: 'Querying ChatGPT, Perplexity, and Google AI Overviews for your target topics to measure current citation status.'
      },
      {
        id: 'content-gap',
        number: 2,
        title: 'Content Gap Analysis',
        description: 'Identifying questions your audience asks AI engines where your brand is absent or under-represented.'
      },
      {
        id: 'optimisation',
        number: 3,
        title: 'Content & Schema Optimisation',
        description: 'Rewriting and marking up key pages with FAQ schema, entity data, and AI-citation-friendly formatting.'
      },
      {
        id: 'authority',
        number: 4,
        title: 'Authority Signal Amplification',
        description: 'Building topical authority through pillar content, backlinks, expert authorship, and consistent entity signals.'
      },
      {
        id: 'monitoring',
        number: 5,
        title: 'Citation Tracking & Iteration',
        description: 'Monthly AI citation reports with share-of-voice trends, competitor benchmarking, and content iteration recommendations.'
      }
    ]
  },

  cta: {
    title: 'Get Cited by AI Engines',
    description: 'The next generation of search is here. Position your brand as the authoritative answer before your competitors do.',
    buttonText: 'Request a Systems Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'SEO Services',
      description: 'Traditional SEO and AEO work together — rank in Google and get cited by AI.',
      page: 'ai-search-visibility'
    },
    {
      title: 'Content Strategy',
      description: 'AI-citation-friendly content requires structured, authoritative writing.',
      page: 'content'
    },
    {
      title: 'AI Engine Optimisation',
      description: 'Optimise the AI models your own site uses alongside your answer engine strategy.',
      page: 'ai-engine-optimisation'
    }
  ]
};
