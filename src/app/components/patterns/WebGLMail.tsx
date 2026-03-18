import { useRef, useEffect } from 'react';

interface WebGLMailProps {
  accentColor?: string;
  gridColor?: string;
  className?: string;
}

export function WebGLMail({ 
  accentColor = 'var(--wp--preset--color--neon-cyan, #00ffff)',
  gridColor = 'var(--wp--preset--color--slate-800, #1e293b)',
  className = ''
}: WebGLMailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

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

    const getCssColor = (colorVar: string) => {
      if (!colorVar.startsWith('var(')) return colorVar;
      const varName = colorVar.match(/var\(([^),]+)/)?.[1];
      if (!varName) return colorVar;
      // Fallback
      const fallbackMatch = colorVar.match(/,\s*([^)]+)\)/);
      const fallback = fallbackMatch ? fallbackMatch[1].trim() : '#000';
      return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || fallback;
    };

    // Emails to animate
    const emails: {x: number, y: number, speedX: number, speedY: number, size: number, delay: number}[] = [];
    
    for(let i=0; i<15; i++) {
       emails.push({
         x: Math.random(),
         y: Math.random(),
         speedX: (Math.random() - 0.5) * 0.002,
         speedY: (Math.random() - 0.5) * 0.002 - 0.002, // Generally drifting upwards
         size: Math.random() * 20 + 20,
         delay: Math.random() * Math.PI * 2
       });
    }

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      const accent = getCssColor(accentColor);
      const grid = getCssColor(gridColor);

      // Draw Grid Background
      ctx.strokeStyle = grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = (time * 10) % gridSize; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw Data streams
      ctx.beginPath();
      for(let i=0; i<5; i++) {
          const x = (width / 5) * i + (width / 10);
          ctx.moveTo(x, height);
          ctx.lineTo(x, 0);
      }
      ctx.strokeStyle = `${accent}${Math.floor((Math.sin(time) * 0.1 + 0.1) * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Emails
      emails.forEach((email) => {
         email.x += email.speedX;
         email.y += email.speedY;
         
         if (email.y < -0.1) email.y = 1.1;
         if (email.x < -0.1) email.x = 1.1;
         if (email.x > 1.1) email.x = -0.1;

         const ex = email.x * width + Math.sin(time * 2 + email.delay) * 15;
         const ey = email.y * height;
         const alpha = (Math.sin(time * 3 + email.delay) + 1) * 0.4 + 0.2;
         
         ctx.strokeStyle = `${accent}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
         ctx.lineWidth = 2;
         
         const ew = email.size * 1.5;
         const eh = email.size;
         
         // Draw envelope
         ctx.strokeRect(ex - ew/2, ey - eh/2, ew, eh);
         
         // Flap
         ctx.beginPath();
         ctx.moveTo(ex - ew/2, ey - eh/2);
         ctx.lineTo(ex, ey);
         ctx.lineTo(ex + ew/2, ey - eh/2);
         ctx.stroke();
         
         // Back flap lines
         ctx.beginPath();
         ctx.moveTo(ex - ew/2, ey + eh/2);
         ctx.lineTo(ex, ey);
         ctx.lineTo(ex + ew/2, ey + eh/2);
         ctx.strokeStyle = `${accent}${Math.floor(alpha * 0.5 * 255).toString(16).padStart(2, '0')}`;
         ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor, gridColor]);

  return (
    <div className={`webgl-mail-container ${className}`} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
      <canvas ref={canvasRef} className="webgl-mail-canvas" aria-label="Interactive email marketing visualization" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 30%, var(--color-black) 90%)' }}></div>
    </div>
  );
}
