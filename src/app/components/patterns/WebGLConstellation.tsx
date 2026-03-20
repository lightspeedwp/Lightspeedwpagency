import { useEffect, useRef, useState } from 'react';

interface ConstellationProps {
  points?: Array<{ x: number; y: number; label: string }>;
  accentColor?: string;
}

export function WebGLConstellation({ points, accentColor = 'var(--wp--preset--color--neon-cyan)' }: ConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cache CSS variable resolution (move outside render loop for performance)
    const neonColor = getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--neon-cyan').trim() || '#00ffff';
    const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-primary').trim() || 'sans-serif';

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };
    
    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const defaultPoints = points || [
        { x: 0.2, y: 0.3, label: 'Innovation' },
        { x: 0.5, y: 0.2, label: 'Accessibility' },
        { x: 0.8, y: 0.4, label: 'Collaboration' },
        { x: 0.3, y: 0.7, label: 'AI Stewardship' },
        { x: 0.7, y: 0.8, label: 'Sustainability' }
      ];

      // Draw lines
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
      ctx.lineWidth = 1;
      for (let i = 0; i < defaultPoints.length; i++) {
        for (let j = i + 1; j < defaultPoints.length; j++) {
          const p1 = defaultPoints[i];
          const p2 = defaultPoints[j];
          // Use cached time (0 for static, animated otherwise)
          const offset = prefersReducedMotion ? 0 : time;
          ctx.moveTo(p1.x * canvas.width + Math.sin(offset + i) * 10, p1.y * canvas.height + Math.cos(offset + i) * 10);
          ctx.lineTo(p2.x * canvas.width + Math.sin(offset + j) * 10, p2.y * canvas.height + Math.cos(offset + j) * 10);
        }
      }
      ctx.stroke();

      // Draw nodes
      defaultPoints.forEach((point, i) => {
        const offset = prefersReducedMotion ? 0 : time;
        const x = point.x * canvas.width + Math.sin(offset + i) * 10;
        const y = point.y * canvas.height + Math.cos(offset + i) * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = neonColor; // Use cached color
        ctx.fill();
        
        // Glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = neonColor; // Use cached color

        ctx.font = `14px ${fontFamily}`; // Use cached font
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 0;
        ctx.fillText(point.label, x + 12, y + 4);
      });

      // Only continue animation if motion is not reduced
      if (!prefersReducedMotion) {
        time += 0.01;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [points, accentColor]);

  return (
    <div className="webgl-canvas-container" style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--color-black)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} aria-label="Interactive Constellation visualization" />
    </div>
  );
}