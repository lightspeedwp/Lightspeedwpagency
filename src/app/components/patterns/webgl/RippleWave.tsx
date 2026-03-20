/**
 * Ripple Wave WebGL Component
 * 
 * Animated ripple wave effect with expanding circles.
 * Optimized for performance with CSS variable caching and reduced motion support.
 * 
 * Used in: Tour Operator Plugin prototype showcase
 */

import { useEffect, useRef } from 'react';

interface RippleWaveProps {
  accentColor?: string;
  className?: string;
}

export function RippleWave({ 
  accentColor = 'var(--accent-cyan)',
  className = ''
}: RippleWaveProps) {
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

    // Parse RGB for gradient
    const rgbMatch = resolvedColor.match(/\d+/g);
    const r = rgbMatch ? parseInt(rgbMatch[0]) : 0;
    const g = rgbMatch ? parseInt(rgbMatch[1]) : 255;
    const b = rgbMatch ? parseInt(rgbMatch[2]) : 255;

    let width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    let height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      opacity: number;
    }

    const ripples: Ripple[] = [];
    const maxRipples = 5;
    let lastRippleTime = 0;

    const createRipple = () => {
      ripples.push({
        x: Math.random() * (width / window.devicePixelRatio),
        y: Math.random() * (height / window.devicePixelRatio),
        radius: 0,
        maxRadius: 100 + Math.random() * 150,
        speed: 0.5 + Math.random() * 0.5,
        opacity: 0.8
      });
    };

    const animate = (time: number) => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width / window.devicePixelRatio, height / window.devicePixelRatio);

      // Create new ripples periodically
      if (time - lastRippleTime > 1500 && ripples.length < maxRipples) {
        createRipple();
        lastRippleTime = time;
      }

      // Animate ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += ripple.speed;
        ripple.opacity -= 0.003;

        // Draw ripple
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner glow (ensure radius is never negative)
        const innerRadius = Math.max(0, ripple.radius - 5);
        if (innerRadius > 0) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, innerRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${ripple.opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Remove dead ripples
        if (ripple.opacity <= 0 || ripple.radius > ripple.maxRadius) {
          ripples.splice(i, 1);
        }
      }

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
    <div className={`webgl-ripple-wave ${className}`.trim()}>
      <canvas 
        ref={canvasRef} 
        className="webgl-ripple-wave__canvas"
        aria-hidden="true" 
      />
    </div>
  );
}