/**
 * WebGL Component Registry
 * 
 * Central inventory of all WebGL canvas components in the application.
 * 
 * **Purpose:**
 * - Single source of truth for all WebGL components
 * - Track component locations, generations, and usage
 * - Document performance characteristics
 * - Guide optimization and refactoring efforts
 * 
 * **Generations:**
 * - Gen 1: Legacy components (per-frame getComputedStyle, no prefers-reduced-motion)
 * - Gen 2: Intermediate components (some optimizations)
 * - Gen 3: Modern components (CSS variable caching, mobile detection)
 * 
 * **Performance Tiers:**
 * - Low: <1% CPU, <5% GPU (simple animations, few particles)
 * - Medium: 1-3% CPU, 5-15% GPU (moderate complexity)
 * - High: 3-5% CPU, 15-30% GPU (complex effects)
 * - Critical: >5% CPU, >30% GPU (very expensive, needs optimization)
 * 
 * @version 1.0.0
 * @created March 18, 2026
 */

export interface WebGLComponentMeta {
  /** Component name */
  name: string;
  /** File path relative to /src/app/components/ */
  path: string;
  /** Component generation (1 = legacy, 2 = intermediate, 3 = modern) */
  generation: 1 | 2 | 3;
  /** Performance impact tier */
  performanceTier: 'low' | 'medium' | 'high' | 'critical';
  /** Default accent color CSS variable */
  defaultAccentColor: string;
  /** Whether component accepts accentColor prop */
  hasAccentColorProp: boolean;
  /** Whether component has className prop */
  hasClassNameProp: boolean;
  /** Whether component has prefers-reduced-motion guard */
  hasReducedMotionGuard: boolean;
  /** Whether component has mobile viewport detection */
  hasMobileDetection: boolean;
  /** Whether component caches CSS variable resolution */
  cachesCSSVariables: boolean;
  /** Templates/pages where this component is used */
  usedIn: string[];
  /** Brief description of visual effect */
  description: string;
}

/**
 * Complete registry of all 21 WebGL components
 */
export const webglRegistry: WebGLComponentMeta[] = [
  // === GENERATION 1: Legacy Components (5) ===
  {
    name: 'WebGLConstellation',
    path: 'patterns/WebGLConstellation.tsx',
    generation: 1,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--wp--preset--color--neon-cyan)',
    hasAccentColorProp: true,
    hasClassNameProp: false,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Services Landing', 'About Template'],
    description: 'Animated constellation of connected points with mouse interaction'
  },
  {
    name: 'WebGLScanner',
    path: 'patterns/WebGLScanner.tsx',
    generation: 1,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--wp--preset--color--neon-cyan)',
    hasAccentColorProp: false,
    hasClassNameProp: false,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Security Service'],
    description: 'Scanning radar effect with rotating sweep line'
  },
  {
    name: 'WebGLTopology',
    path: 'patterns/WebGLTopology.tsx',
    generation: 1,
    performanceTier: 'high',
    defaultAccentColor: 'var(--wp--preset--color--neon-pink)',
    hasAccentColorProp: false,
    hasClassNameProp: false,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Hosting Template'],
    description: 'Network topology visualization with animated nodes and connections'
  },
  {
    name: 'WebGLKnowledgeGraph',
    path: 'patterns/WebGLKnowledgeGraph.tsx',
    generation: 1,
    performanceTier: 'high',
    defaultAccentColor: 'var(--wp--preset--color--neon-purple)',
    hasAccentColorProp: false,
    hasClassNameProp: false,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['AI Services Landing'],
    description: 'Knowledge graph with interconnected nodes representing AI concepts'
  },
  {
    name: 'WebGLAINetwork',
    path: 'patterns/WebGLAINetwork.tsx',
    generation: 1,
    performanceTier: 'high',
    defaultAccentColor: 'var(--wp--preset--color--neon-cyan)',
    hasAccentColorProp: false,
    hasClassNameProp: false,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['AI Solutions Hub'],
    description: 'Neural network animation with pulsing connections'
  },

  // === GENERATION 2: Intermediate Components (4) ===
  {
    name: 'WebGLTimeline',
    path: 'patterns/WebGLTimeline.tsx',
    generation: 2,
    performanceTier: 'low',
    defaultAccentColor: 'var(--wp--preset--color--neon-pink)',
    hasAccentColorProp: true,
    hasClassNameProp: false,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['About History'],
    description: 'Animated timeline with flowing particles along path'
  },
  {
    name: 'WebGLTeamMosaic',
    path: 'patterns/WebGLTeamMosaic.tsx',
    generation: 2,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--wp--preset--color--neon-lime)',
    hasAccentColorProp: false,
    hasClassNameProp: false,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Team Template'],
    description: 'Mosaic grid effect with animated tiles'
  },
  {
    name: 'WebGLDataNodes',
    path: 'patterns/WebGLDataNodes.tsx',
    generation: 2,
    performanceTier: 'high',
    defaultAccentColor: 'var(--wp--preset--color--neon-cyan)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Analytics Service'],
    description: 'Floating data nodes with dual-color connections'
  },
  {
    name: 'WebGLSearchGraph',
    path: 'patterns/WebGLSearchGraph.tsx',
    generation: 2,
    performanceTier: 'high',
    defaultAccentColor: 'var(--wp--preset--color--neon-purple)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['AI Search Service'],
    description: 'Search graph with grid background and node connections'
  },

  // === GENERATION 3: Modern Components (12) ===
  {
    name: 'WebGLProcessOrbital',
    path: 'patterns/WebGLProcessOrbital.tsx',
    generation: 3,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--wp--preset--color--neon-cyan)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Process Pages', 'Service Templates'],
    description: 'Orbital animation with rotating elements around center point'
  },
  {
    name: 'WebGLWorldMap',
    path: 'patterns/WebGLWorldMap.tsx',
    generation: 3,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--wp--preset--color--neon-lime)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Global Services', 'Contact Page'],
    description: 'Animated world map with connection lines between locations'
  },
  {
    name: 'WebGLTeamSphere',
    path: 'patterns/WebGLTeamSphere.tsx',
    generation: 3,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--wp--preset--color--neon-pink)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Team Template', 'About Template'],
    description: '3D sphere with orbiting team member particles'
  },
  {
    name: 'WebGLNeuralNetwork',
    path: 'patterns/WebGLNeuralNetwork.tsx',
    generation: 3,
    performanceTier: 'high',
    defaultAccentColor: 'var(--wp--preset--color--neon-purple)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['AI Services', 'Machine Learning Pages'],
    description: 'Neural network visualization with layered nodes and connections'
  },
  {
    name: 'WebGLPerformanceRing',
    path: 'patterns/WebGLPerformanceRing.tsx',
    generation: 3,
    performanceTier: 'low',
    defaultAccentColor: 'var(--wp--preset--color--neon-lime)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Performance Service', 'Speed Optimization'],
    description: 'Circular performance meter with animated ring'
  },
  {
    name: 'WebGLCyberRadar',
    path: 'patterns/WebGLCyberRadar.tsx',
    generation: 3,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--color-terminal-green, #00ff00)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Security Service', 'Monitoring Pages'],
    description: 'Cyber-themed radar with rotating scan and threat indicators'
  },
  {
    name: 'WebGLContentInk',
    path: 'patterns/WebGLContentInk.tsx',
    generation: 3,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--wp--preset--color--neon-pink)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Content Generation', 'Copywriting Services'],
    description: 'Ink splash effect simulating content creation'
  },
  {
    name: 'WebGLBlueprint',
    path: 'patterns/WebGLBlueprint.tsx',
    generation: 3,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--wp--preset--color--neon-cyan)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Development Service', 'Planning Pages'],
    description: 'Blueprint-style grid with technical drawing aesthetic'
  },
  {
    name: 'WebGLDesignGrid',
    path: 'patterns/WebGLDesignGrid.tsx',
    generation: 3,
    performanceTier: 'low',
    defaultAccentColor: 'var(--wp--preset--color--neon-pink)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Design Service', 'UI/UX Pages'],
    description: 'Design grid system with animated alignment guides'
  },
  {
    name: 'WebGLWireframe',
    path: 'patterns/WebGLWireframe.tsx',
    generation: 3,
    performanceTier: 'medium',
    defaultAccentColor: 'var(--wp--preset--color--neon-purple)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Prototyping Service', 'Wireframe Pages'],
    description: '3D wireframe structure with rotating perspective'
  },
  {
    name: 'WebGLTokens',
    path: 'patterns/WebGLTokens.tsx',
    generation: 3,
    performanceTier: 'low',
    defaultAccentColor: 'var(--wp--preset--color--neon-lime)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Design Systems', 'Token Documentation'],
    description: 'Floating design tokens with connection lines'
  },
  {
    name: 'WebGLMail',
    path: 'patterns/WebGLMail.tsx',
    generation: 3,
    performanceTier: 'low',
    defaultAccentColor: 'var(--wp--preset--color--neon-cyan)',
    hasAccentColorProp: true,
    hasClassNameProp: true,
    hasReducedMotionGuard: false,
    hasMobileDetection: false,
    cachesCSSVariables: false,
    usedIn: ['Contact Page', 'Email Services'],
    description: 'Animated email particles flowing to destination'
  }
];

/**
 * Get WebGL components by generation
 */
export function getComponentsByGeneration(gen: 1 | 2 | 3): WebGLComponentMeta[] {
  return webglRegistry.filter(c => c.generation === gen);
}

/**
 * Get WebGL components by performance tier
 */
export function getComponentsByPerformance(tier: 'low' | 'medium' | 'high' | 'critical'): WebGLComponentMeta[] {
  return webglRegistry.filter(c => c.performanceTier === tier);
}

/**
 * Get WebGL components missing specific optimization
 */
export function getComponentsMissingOptimization(optimization: keyof Pick<WebGLComponentMeta, 'hasReducedMotionGuard' | 'hasMobileDetection' | 'cachesCSSVariables'>): WebGLComponentMeta[] {
  return webglRegistry.filter(c => !c[optimization]);
}

/**
 * Get WebGL component by name
 */
export function getComponentByName(name: string): WebGLComponentMeta | undefined {
  return webglRegistry.find(c => c.name === name);
}

/**
 * Registry statistics
 */
export const webglStats = {
  total: webglRegistry.length,
  byGeneration: {
    gen1: getComponentsByGeneration(1).length,
    gen2: getComponentsByGeneration(2).length,
    gen3: getComponentsByGeneration(3).length
  },
  byPerformance: {
    low: getComponentsByPerformance('low').length,
    medium: getComponentsByPerformance('medium').length,
    high: getComponentsByPerformance('high').length,
    critical: getComponentsByPerformance('critical').length
  },
  optimizationCoverage: {
    reducedMotion: webglRegistry.filter(c => c.hasReducedMotionGuard).length,
    mobileDetection: webglRegistry.filter(c => c.hasMobileDetection).length,
    cssVariableCaching: webglRegistry.filter(c => c.cachesCSSVariables).length
  }
};
