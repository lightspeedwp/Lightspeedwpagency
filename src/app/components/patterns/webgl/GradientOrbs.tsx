/**
 * Gradient Orbs WebGL Component
 * 
 * Floating gradient orbs with smooth movement and blur effects.
 * Optimized for performance with CSS variable caching and reduced motion support.
 * 
 * Used in: Tour Operator Demo prototype showcase
 */

import { useEffect, useRef } from 'react';

interface GradientOrbsProps {
  accentColor?: string;
  className?: string;
}

export function GradientOrbs({ 
  accentColor = 'var(--accent-orange)',
  className = ''
}: GradientOrbsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cache CSS variable resolution
    const tempDiv = document.createElement('div');
    tempDiv.style.display = 'none';
    tempDiv.style.color = accentColor;
    document.body.appendChild(tempDiv);
    const resolvedColor = getComputedStyle(tempDiv).color;
    document.body.removeChild(tempDiv);

    // Parse RGB
    const rgbMatch = resolvedColor.match(/\d+/g);
    const r = rgbMatch ? parseInt(rgbMatch[0]) : 255;
    const g = rgbMatch ? parseInt(rgbMatch[1]) : 152;
    const b = rgbMatch ? parseInt(rgbMatch[2]) : 0;

    let width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    let height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    interface Orb {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      hue: number;
    }

    const orbs: Orb[] = [];
    const orbCount = 6;

    // Create orbs
    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * (width / window.devicePixelRatio),
        y: Math.random() * (height / window.devicePixelRatio),
        radius: 50 + Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        hue: Math.random() * 60 - 30
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear with fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width / window.devicePixelRatio, height / window.devicePixelRatio);

      // Update and draw orbs
      orbs.forEach(orb => {
        // Update position
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Boundary check with bounce
        if (orb.x - orb.radius < 0 || orb.x + orb.radius > width / window.devicePixelRatio) {
          orb.vx *= -1;
        }
        if (orb.y - orb.radius < 0 || orb.y + orb.radius > height / window.devicePixelRatio) {
          orb.vy *= -1;
        }

        // Draw orb with gradient
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );
        
        // Adjust color based on hue offset
        const adjustedR = Math.max(0, Math.min(255, r + orb.hue));
        const adjustedG = Math.max(0, Math.min(255, g + orb.hue));
        const adjustedB = Math.max(0, Math.min(255, b + orb.hue));

        gradient.addColorStop(0, `rgba(${adjustedR}, ${adjustedG}, ${adjustedB}, 0.8)`);
        gradient.addColorStop(0.5, `rgba(${adjustedR}, ${adjustedG}, ${adjustedB}, 0.4)`);
        gradient.addColorStop(1, `rgba(${adjustedR}, ${adjustedG}, ${adjustedB}, 0)`);

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    let animationId = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [accentColor]);

  return (
    <div className={`webgl-gradient-orbs ${className}`.trim()}>
      <canvas 
        ref={canvasRef} 
        className="webgl-gradient-orbs__canvas"
        aria-hidden="true" 
      />
    </div>
  );
}
