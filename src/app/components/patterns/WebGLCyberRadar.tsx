import { useRef, useEffect } from 'react';
import { resolveCssColor, addAlpha } from '../../utils/css-color-resolver';

interface WebGLCyberRadarProps {
  accentColor?: string;
  className?: string;
}

export function WebGLCyberRadar({ 
  accentColor = 'var(--wp--preset--color--neon-cyan)',
  className = ''
}: WebGLCyberRadarProps) {
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
    const computedAccent = resolveCssColor(accentColor, '#00ffff');

    const blips: {x: number, y: number, life: number}[] = [];
    for(let i=0; i<8; i++) {
       blips.push({
         x: Math.random() * 2 - 1,
         y: Math.random() * 2 - 1,
         life: Math.random()
       });
    }

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.45;
      
      // Draw Grid
      ctx.strokeStyle = 'var(--color-slate-800, #1e293b)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const gridSize = 20;
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Mask for radar circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.clip();

      // Radar base
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fill();

      // Radar rings
      ctx.strokeStyle = computedAccent;
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * (i / 4), 0, Math.PI * 2);
        ctx.lineWidth = i === 4 ? 2 : 0.5;
        ctx.globalAlpha = 0.3;
        ctx.stroke();
      }

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.globalAlpha = 0.3;
      ctx.stroke();

      // Sweep
      const sweepAngle = time % (Math.PI * 2);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, sweepAngle, sweepAngle + 0.2);
      ctx.lineTo(centerX, centerY);
      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      grad.addColorStop(0, `${computedAccent}00`);
      grad.addColorStop(1, `${computedAccent}aa`);
      ctx.fillStyle = grad;
      ctx.globalAlpha = 1;
      ctx.fill();

      // Line of sweep
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + Math.cos(sweepAngle + 0.2) * radius, centerY + Math.sin(sweepAngle + 0.2) * radius);
      ctx.strokeStyle = computedAccent;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Blips
      blips.forEach(blip => {
         const dx = blip.x * radius;
         const dy = blip.y * radius;
         const distance = Math.sqrt(dx*dx + dy*dy);
         if (distance < radius) {
            const angleToBlip = Math.atan2(dy, dx);
            let angleDiff = sweepAngle + 0.2 - angleToBlip;
            while(angleDiff < 0) angleDiff += Math.PI * 2;
            
            // If recently swept
            if (angleDiff < 0.5) {
               blip.life = 1;
            } else {
               blip.life *= 0.98; // fade out
            }

            if (blip.life > 0.05) {
               ctx.beginPath();
               ctx.arc(centerX + dx, centerY + dy, 4, 0, Math.PI * 2);
               ctx.fillStyle = computedAccent;
               ctx.globalAlpha = blip.life;
               ctx.shadowBlur = 10;
               ctx.shadowColor = computedAccent;
               ctx.fill();
               ctx.shadowBlur = 0;
            }
         }
      });
      ctx.globalAlpha = 1;
      ctx.restore();
      
      // Update blips position occasionally
      if (Math.random() < 0.01) {
         const i = Math.floor(Math.random() * blips.length);
         blips[i] = {
           x: Math.random() * 2 - 1,
           y: Math.random() * 2 - 1,
           life: 0
         };
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor]);

  return (
    <div className={`webgl-cyber-radar-container ${className}`} style={{ width: '100%', height: '100%', minHeight: '350px', position: 'relative' }}>
      <canvas ref={canvasRef} className="webgl-cyber-radar-canvas" aria-label="Interactive cyber security radar visualization" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 30%, var(--color-black) 100%)' }}></div>
      </div>
    </div>
  );
}