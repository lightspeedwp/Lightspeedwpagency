/**
 * Particle Field WebGL Component
 * 
 * Floating particle field with gentle movement and connections.
 * Optimized for performance with CSS variable caching and reduced motion support.
 * 
 * Used in: Impact Travel prototype showcase
 */

import { useEffect, useRef } from 'react';

interface ParticleFieldProps {
  accentColor?: string;
  className?: string;
  particleCount?: number;
}

export function ParticleField({ 
  accentColor = 'var(--accent-green)',
  className = '',
  particleCount = 80
}: ParticleFieldProps) {
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
    const r = rgbMatch ? parseInt(rgbMatch[0]) : 76;
    const g = rgbMatch ? parseInt(rgbMatch[1]) : 175;
    const b = rgbMatch ? parseInt(rgbMatch[2]) : 80;

    let width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    let height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulsePhase: number;
      trailHistory: Array<{ x: number; y: number }>;
    }

    const particles: Particle[] = [];
    const connectionDistance = 180;
    let time = 0;

    // Create particles with enhanced properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (width / window.devicePixelRatio),
        y: Math.random() * (height / window.devicePixelRatio),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 1.5 + Math.random() * 3,
        pulsePhase: Math.random() * Math.PI * 2,
        trailHistory: []
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;

      time += 0.02;

      // Clear with trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width / window.devicePixelRatio, height / window.devicePixelRatio);

      // Color cycling for enhanced neon effect
      const colorShift = Math.sin(time * 0.3) * 0.2;
      const rMod = Math.floor(r + colorShift * 40);
      const gMod = Math.floor(g + colorShift * 40);
      const bMod = Math.floor(b - colorShift * 20);

      // Draw connections first (behind particles)
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.4;
            
            // Enhanced glow on connections
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${rMod}, ${gMod}, ${bMod}, ${opacity})`;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(${rMod}, ${gMod}, ${bMod}, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            
            ctx.shadowBlur = 0;
          }
        }
      });

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Store position history for trails
        particle.trailHistory.push({ x: particle.x, y: particle.y });
        if (particle.trailHistory.length > 8) {
          particle.trailHistory.shift();
        }

        // Boundary check with wrapping
        if (particle.x < 0) particle.x = width / window.devicePixelRatio;
        if (particle.x > width / window.devicePixelRatio) particle.x = 0;
        if (particle.y < 0) particle.y = height / window.devicePixelRatio;
        if (particle.y > height / window.devicePixelRatio) particle.y = 0;

        // Draw particle trail
        particle.trailHistory.forEach((pos, index) => {
          const trailOpacity = (index / particle.trailHistory.length) * 0.3;
          const trailSize = particle.size * (index / particle.trailHistory.length);
          
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rMod}, ${gMod}, ${bMod}, ${trailOpacity})`;
          ctx.fill();
        });

        // Pulsing size effect
        particle.pulsePhase += 0.05;
        const pulseSize = particle.size + Math.sin(particle.pulsePhase) * 0.8;

        // Draw main particle with intense glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = `rgba(${rMod}, ${gMod}, ${bMod}, 0.9)`;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        
        // Gradient fill for particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize
        );
        gradient.addColorStop(0, `rgba(${rMod + 50}, ${gMod + 50}, ${bMod + 50}, 1)`);
        gradient.addColorStop(0.5, `rgba(${rMod}, ${gMod}, ${bMod}, 0.9)`);
        gradient.addColorStop(1, `rgba(${rMod}, ${gMod}, ${bMod}, 0.3)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Outer ring for extra glow
        ctx.strokeStyle = `rgba(${rMod}, ${gMod}, ${bMod}, 0.6)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.shadowBlur = 0;
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
  }, [accentColor, particleCount]);

  return (
    <div className={`webgl-particle-field ${className}`.trim()}>
      <canvas 
        ref={canvasRef} 
        className="webgl-particle-field__canvas"
        aria-hidden="true" 
      />
    </div>
  );
}