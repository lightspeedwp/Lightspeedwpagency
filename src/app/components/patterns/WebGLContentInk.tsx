import { useRef, useEffect } from 'react';
import { resolveCssColor, addAlpha } from '../../utils/css-color-resolver';

interface WebGLContentInkProps {
  accentColor?: string;
  secondaryColor?: string;
  className?: string;
}

export function WebGLContentInk({ 
  accentColor = 'var(--wp--preset--color--neon-pink, #ff00ff)',
  secondaryColor = 'var(--wp--preset--color--neon-purple, #b14dff)',
  className = ''
}: WebGLContentInkProps) {
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
    const primary = resolveCssColor(accentColor, '#ff00ff');
    const secondary = resolveCssColor(secondaryColor, '#b14dff');

    // Particles for fluid/ink simulation
    const particles: {x: number, y: number, vx: number, vy: number, life: number, maxLife: number, size: number}[] = [];
    const numParticles = 80;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.002,
        vy: (Math.random() - 0.5) * 0.002,
        life: Math.random(),
        maxLife: Math.random() * 0.5 + 0.5,
        size: Math.random() * 30 + 10
      });
    }

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      // Fluid fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      time += 0.01;

      // Noise field for fluid motion
      const noise = (x: number, y: number, t: number) => {
         return {
           x: Math.sin(y * 5 + t) * 0.002 + Math.cos(x * 3 - t) * 0.001,
           y: Math.cos(x * 5 + t) * 0.002 + Math.sin(y * 3 - t) * 0.001
         };
      };

      ctx.globalCompositeOperation = 'screen';

      particles.forEach((p, i) => {
        // Flow logic
        const flow = noise(p.x, p.y, time);
        p.vx += flow.x;
        p.vy += flow.y;
        
        // Dampen
        p.vx *= 0.95;
        p.vy *= 0.95;

        p.x += p.vx;
        p.y += p.vy;

        // Life cycle
        p.life -= 0.002;
        if (p.life <= 0 || p.x < -0.1 || p.x > 1.1 || p.y < -0.1 || p.y > 1.1) {
           p.x = Math.random();
           p.y = Math.random();
           p.vx = 0;
           p.vy = 0;
           p.life = p.maxLife;
        }

        const x = p.x * width;
        const y = p.y * height;
        
        // Render ink drop
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size);
        const color = i % 2 === 0 ? primary : secondary;
        const alpha = Math.sin(p.life / p.maxLife * Math.PI) * 0.3; // Fade in and out
        
        gradient.addColorStop(0, `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor, secondaryColor]);

  return (
    <div className={`webgl-content-ink-container ${className}`} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
      <canvas ref={canvasRef} className="webgl-content-ink-canvas" aria-label="Interactive digital ink visualization" style={{ width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 30%, var(--color-black) 90%)' }}></div>
    </div>
  );
}