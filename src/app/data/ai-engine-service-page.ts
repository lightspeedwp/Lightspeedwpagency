/**
 * AI Engine Optimisation Service Page Data
 *
 * Mock data for the AI Engine Optimisation page (AIEngineOptimisationTemplate).
 *
 * @see /src/app/components/templates/AIEngineOptimisationTemplate.tsx
 */

import {
  Brain,
  Cpu,
  Zap,
  DollarSign,
  Gauge,
  GitBranch,
  BarChart,
  TestTube,
  Activity,
} from 'lucide-react';

export const aiEngineServiceHero = {
  title: 'AI Engine Optimisation',
  subtitle: 'Cut inference costs by 60 %, triple response speed, and keep quality at 99.5 % — without switching models.',
  badge: { text: 'AI COST OPTIMISATION', icon: Brain },
  primaryButton: { text: 'Optimise Your AI', page: 'contact' },
};

export const aiEngineServiceFeatures = {
  title: 'Optimisation Toolbox',
  features: [
    {
      icon: Cpu,
      title: 'Model Selection',
      description: 'Benchmark 6+ LLMs against your real prompts for the best cost / quality ratio.',
    },
    {
      icon: Brain,
      title: 'Prompt Engineering',
      description: 'Compress prompt chains, remove redundancy, and maximise token efficiency.',
    },
    {
      icon: Zap,
      title: 'Inference Caching',
      description: 'Semantic cache layer that serves repeat queries in < 50 ms at near-zero cost.',
    },
    {
      icon: DollarSign,
      title: 'Cost Management',
      description: 'Rate-limit policies, budget alerts, and per-feature spend dashboards.',
    },
  ],
};

export const aiEngineServiceProcess = {
  title: 'Our 5-Step Protocol',
  steps: [
    { step: 'Baseline', description: 'Capture current cost, latency & quality metrics.', icon: Gauge },
    { step: 'Architecture', description: 'Map prompt chains and model routing logic.', icon: GitBranch },
    { step: 'Optimise', description: 'Swap models, compress prompts, add caching.', icon: Zap },
    { step: 'Validate', description: 'Quality regression testing against golden dataset.', icon: TestTube },
    { step: 'Dashboard', description: 'Real-time cost & performance monitoring.', icon: Activity },
  ],
};

export const aiEngineServiceChecklist = [
  'Model benchmarking across 6+ providers',
  'Prompt chain audit & compression',
  'Semantic caching layer implementation',
  'Rate-limit & budget alerting',
  'Quality regression testing pipeline',
];

export const aiEngineServiceStats = [
  { value: '-60%', label: 'API Costs' },
  { value: '3x', label: 'Faster Inference' },
  { value: '99.5%', label: 'Quality Retained' },
  { value: '24/7', label: 'Cost Monitoring' },
];

export const aiEngineServiceIcons = {
  services: {
    'model-selection': Cpu,
    'prompt-engineering': Brain,
    'inference-caching': Zap,
    'cost-optimisation': DollarSign,
  } as Record<string, typeof Brain>,
  process: {
    'baseline': Gauge,
    'architecture': GitBranch,
    'optimise': Zap,
    'validate': TestTube,
    'dashboard': Activity,
  } as Record<string, typeof Brain>,
};

export const aiEngineServiceCTA = {
  title: 'Stop Overpaying for AI',
  description: 'Most teams waste 60 % of their AI budget. We make every token count.',
  button: { text: 'Get an AI Cost Audit', page: 'contact' },
};
