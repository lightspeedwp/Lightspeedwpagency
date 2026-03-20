import { useRef, useEffect } from 'react';
import { resolveCssColor, addAlpha } from '../../utils/css-color-resolver';

interface WebGLPerformanceRingProps {
  accentColor?: string;
  className?: string;
}

export function WebGLPerformanceRing({ 
  accentColor = 'var(--wp--preset--color--neon-lime)',
  className = ''
}: WebGLPerformanceRingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
      }
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Resolve colors once (NEVER in animation loop)
    const computedAccent = resolveCssColor(accentColor, '#00ff00');
    const computedDark = resolveCssColor('var(--surface-primary)', '#000000');

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      
      if (!prefersReducedMotion) {
        time += 0.03;
      }

      const centerX = width / 2;
      const centerY = height / 2;

      const baseRadius = Math.min(width, height) * 0.35;

      // Draw glowing background pulse
      const pulse = Math.sin(time * 2) * 0.1 + 0.9;
      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius * 1.5);
      grad.addColorStop(0, addAlpha(computedAccent, 0.2));
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw Rings
      const ringCount = 3;
      for(let i=0; i<ringCount; i++) {
        const ringRadius = baseRadius * (1 - i * 0.2);
        const direction = i % 2 === 0 ? 1 : -1;
        const ringSpeed = (i + 1) * 0.5 * direction;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = i === 0 ? computedAccent : 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = i === 0 ? 3 : 1;
        ctx.shadowBlur = i === 0 ? 15 : 0;
        ctx.shadowColor = computedAccent;
        
        // Dash pattern to look like digital readouts or tracks
        ctx.setLineDash([Math.PI * ringRadius * 0.1, Math.PI * ringRadius * 0.05]);
        ctx.lineDashOffset = time * 20 * ringSpeed;
        ctx.stroke();

        // Add speeding particles along the ring
        if (i === 0 || i === 2) {
           const numParticles = 3;
           for(let j=0; j<numParticles; j++) {
              const particleAngle = (time * ringSpeed * 1.5) + (Math.PI * 2 / numParticles) * j;
              const px = centerX + Math.cos(particleAngle) * ringRadius;
              const py = centerY + Math.sin(particleAngle) * ringRadius;

              ctx.beginPath();
              ctx.arc(px, py, 4, 0, Math.PI * 2);
              ctx.fillStyle = '#fff';
              ctx.shadowBlur = 10;
              ctx.shadowColor = '#fff';
              ctx.fill();
           }
        }
      }
      ctx.setLineDash([]);
      ctx.shadowBlur = 0;

      // Draw center core
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 0.2 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = computedDark;
      ctx.fill();
      ctx.strokeStyle = computedAccent;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20 * pulse;
      ctx.shadowColor = computedAccent;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 0.1 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = computedAccent;
      ctx.fill();

      // Reset shadow
      ctx.shadowBlur = 0;
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor]);

  return (
    <div className={`webgl-performance-ring-container ${className}`} style={{ width: '100%', height: '100%', minHeight: '350px', position: 'relative' }}>
      <canvas ref={canvasRef} className="webgl-performance-ring-canvas" aria-label="Interactive performance visualization" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 40%, var(--color-black) 100%)' }}></div>
      </div>
    </div>
  );
}