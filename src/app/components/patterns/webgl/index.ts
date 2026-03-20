/**
 * WebGL Components Index
 * 
 * Central export point for all WebGL canvas components.
 * Organized by generation and performance tier.
 */

// Figma Make Showcase Graphics
export { RippleWave } from './RippleWave';
export { ParticleField } from './ParticleField';
export { GradientOrbs } from './GradientOrbs';
export { NeonGrid } from './NeonGrid';
export { GeometricGrid } from './GeometricGrid';
export { WebGLLoader } from './WebGLLoader';

// Export component map for dynamic loading
export const webglComponents = {
  RippleWave: 'RippleWave',
  ParticleField: 'ParticleField',
  FloatingShapes: 'FloatingShapes',
  GradientOrbs: 'GradientOrbs',
  NeonGrid: 'NeonGrid',
  GeometricGrid: 'GeometricGrid',
  ColorWaves: 'ColorWaves',
  AngularShapes: 'AngularShapes',
  LiquidGradient: 'LiquidGradient',
  HolographicFoil: 'HolographicFoil',
  NeuralNetwork: 'NeuralNetwork',
} as const;

export type WebGLComponentName = keyof typeof webglComponents;