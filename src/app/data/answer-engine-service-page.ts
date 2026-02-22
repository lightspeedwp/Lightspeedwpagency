/**
 * Answer Engine Optimisation (AEO) Service Page Data
 *
 * Mock data for the AEO page (AnswerEngineOptimisationTemplate).
 *
 * @see /src/app/components/templates/AnswerEngineOptimisationTemplate.tsx
 */

import {
  MessageSquare,
  BookOpen,
  Award,
  FileText,
  BarChart,
  Search,
  Layers,
  Crown,
  Activity,
  Sparkles,
} from 'lucide-react';

export const aeoServiceHero = {
  title: 'Answer Engine Optimisation',
  subtitle: 'Get your brand cited by ChatGPT, Perplexity, Gemini, and every AI search engine — before your competitors do.',
  badge: { text: 'GET CITED BY AI', icon: Sparkles },
  primaryButton: { text: 'Start AEO Now', page: 'contact' },
};

export const aeoServiceFeatures = {
  title: 'AEO Capabilities',
  features: [
    {
      icon: Layers,
      title: 'Structured Data',
      description: 'JSON-LD schema, FAQ markup, and HowTo on every key page.',
    },
    {
      icon: Crown,
      title: 'Entity Authority',
      description: 'Knowledge Graph signals, author markup, and brand entity optimisation.',
    },
    {
      icon: FileText,
      title: 'Content Formatting',
      description: 'AI-friendly Q&A structures, concise definitions, and citation-ready prose.',
    },
    {
      icon: BarChart,
      title: 'Citation Tracking',
      description: 'Monitor brand mentions across 5+ AI engines with monthly share-of-voice reports.',
    },
  ],
};

export const aeoServiceProcess = {
  title: 'Our 5-Phase Roadmap',
  steps: [
    { step: 'Visibility Audit', description: 'Check current AI citation presence.', icon: Search },
    { step: 'Content Gap', description: 'Identify unanswered queries in your niche.', icon: BookOpen },
    { step: 'Optimisation', description: 'Schema, formatting & entity markup.', icon: FileText },
    { step: 'Authority', description: 'Build topical authority with supporting content.', icon: Award },
    { step: 'Monitoring', description: 'Track citation rank across AI engines.', icon: Activity },
  ],
};

export const aeoServiceChecklist = [
  'JSON-LD & FAQ schema on every key page',
  'Entity markup for brand authority',
  'AI-friendly Q&A content formatting',
  'Citation tracking across 5+ AI engines',
  'Monthly share-of-voice reporting',
];

export const aeoServiceCitationRanking = [
  { position: '#1', name: 'Your Brand', fill: 100, active: true },
  { position: '#2', name: 'Competitor A', fill: 68, active: false },
  { position: '#3', name: 'Competitor B', fill: 45, active: false },
  { position: '#4', name: 'Competitor C', fill: 22, active: false },
];

export const aeoServiceStats = [
  { value: '+340%', label: 'AI Citations' },
  { value: '#1', label: 'Citation Rank' },
  { value: '5+', label: 'AI Engines Tracked' },
  { value: '2x', label: 'Organic Uplift' },
];

export const aeoServiceIcons = {
  services: {
    'structured-data': Layers,
    'entity-authority': Crown,
    'content-formatting': FileText,
    'citation-tracking': BarChart,
  } as Record<string, typeof MessageSquare>,
  process: {
    'visibility-audit': Search,
    'content-gap': BookOpen,
    'optimisation': FileText,
    'authority': Award,
    'monitoring': Activity,
  } as Record<string, typeof MessageSquare>,
};

export const aeoServiceCTA = {
  title: 'Own the AI Search Results',
  description: "If your brand isn't being cited by AI, your competitors' will be. Start now.",
  button: { text: 'Book an AEO Strategy Call', page: 'contact' },
};
