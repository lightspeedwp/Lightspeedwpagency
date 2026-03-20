/**
 * WebGL Loader Component
 * 
 * Dynamically loads and renders WebGL components based on component name.
 * Provides fallback for missing components and reduced motion support.
 */

import { RippleWave } from './RippleWave';
import { ParticleField } from './ParticleField';
import { GradientOrbs } from './GradientOrbs';
import { NeonGrid } from './NeonGrid';
import { GeometricGrid } from './GeometricGrid';

interface WebGLLoaderProps {
  componentName: string;
  accentColor?: string;
  className?: string;
}

// Component mapping - all imported directly to avoid lazy loading issues
const componentMap: Record<string, React.ComponentType<any>> = {
  RippleWave,
  ParticleField,
  GradientOrbs,
  NeonGrid,
  GeometricGrid,
  // Aliases for component variants
  FloatingShapes: ParticleField,
  ColorWaves: GradientOrbs,
  AngularShapes: GeometricGrid,
  LiquidGradient: GradientOrbs,
  HolographicFoil: NeonGrid,
};

export function WebGLLoader({ 
  componentName, 
  accentColor = 'var(--primary-500)',
  className = '' 
}: WebGLLoaderProps) {
  const Component = componentMap[componentName];

  if (!Component) {
    // Fallback: simple gradient background
    return (
      <div 
        className={`webgl-fallback ${className}`.trim()}
        style={{
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${accentColor}15, transparent)`,
          borderRadius: 'var(--radius-lg)',
        }}
        aria-hidden="true"
      />
    );
  }

  return <Component accentColor={accentColor} className={className} />;
}