import { useRef, useEffect } from 'react';

interface WebGLWireframeProps {
  accentColor?: string;
  gridColor?: string;
  className?: string;
}

export function WebGLWireframe({ 
  accentColor = 'var(--wp--preset--color--neon-purple, #b14dff)',
  gridColor = 'var(--wp--preset--color--slate-800, #1e293b)',
  className = ''
}: WebGLWireframeProps) {
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

    // UI elements to draw
    const elements: {x: number, y: number, w: number, h: number, type: string, delay: number}[] = [
      {x: 0.1, y: 0.1, w: 0.8, h: 0.1, type: 'header', delay: 0},
      {x: 0.1, y: 0.25, w: 0.25, h: 0.4, type: 'sidebar', delay: 1},
      {x: 0.4, y: 0.25, w: 0.5, h: 0.2, type: 'card', delay: 2},
      {x: 0.4, y: 0.5, w: 0.23, h: 0.15, type: 'card', delay: 3},
      {x: 0.67, y: 0.5, w: 0.23, h: 0.15, type: 'card', delay: 4},
      {x: 0.1, y: 0.7, w: 0.8, h: 0.2, type: 'footer', delay: 5}
    ];

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.03;

      const accent = getCssColor(accentColor);
      const grid = getCssColor(gridColor);

      // Draw Grid Background
      ctx.strokeStyle = grid;
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

      // Draw UI Wireframes
      elements.forEach((el) => {
         const ex = el.x * width;
         const ey = el.y * height;
         const ew = el.w * width;
         const eh = el.h * height;

         const progress = Math.max(0, Math.min(1, (time * 0.5 - el.delay * 0.5) % 3));
         
         if (progress > 0) {
             const alpha = progress < 0.5 ? progress * 2 : 2 - progress * 2;
             
             ctx.strokeStyle = `${accent}${Math.floor(alpha * 0.8 * 255).toString(16).padStart(2, '0')}`;
             ctx.lineWidth = 2;
             
             // Draw rect outline
             ctx.strokeRect(ex, ey, ew, eh);
             
             // Inner skeleton details
             if (el.type === 'card' || el.type === 'header') {
                 ctx.beginPath();
                 ctx.moveTo(ex + 10, ey + 10);
                 ctx.lineTo(ex + ew * 0.5, ey + 10);
                 ctx.strokeStyle = `${accent}${Math.floor(alpha * 0.4 * 255).toString(16).padStart(2, '0')}`;
                 ctx.stroke();
                 
                 ctx.beginPath();
                 ctx.moveTo(ex + 10, ey + 25);
                 ctx.lineTo(ex + ew * 0.8, ey + 25);
                 ctx.stroke();
                 
                 ctx.beginPath();
                 ctx.moveTo(ex + 10, ey + 40);
                 ctx.lineTo(ex + ew * 0.7, ey + 40);
                 ctx.stroke();
             }
             
             // Draw cross for image placeholder
             if (el.type === 'sidebar' || el.type === 'footer') {
                 ctx.beginPath();
                 ctx.moveTo(ex, ey);
                 ctx.lineTo(ex + ew, ey + eh);
                 ctx.moveTo(ex + ew, ey);
                 ctx.lineTo(ex, ey + eh);
                 ctx.strokeStyle = `${accent}${Math.floor(alpha * 0.2 * 255).toString(16).padStart(2, '0')}`;
                 ctx.stroke();
             }
             
             // Active cursor simulation
             if (progress > 0.4 && progress < 0.6 && el.type === 'card') {
                const cx = ex + ew/2 + Math.sin(time*2) * 20;
                const cy = ey + eh/2 + Math.cos(time*2) * 20;
                
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + 10, cy + 15);
                ctx.lineTo(cx + 5, cy + 15);
                ctx.lineTo(cx + 8, cy + 22);
                ctx.lineTo(cx + 4, cy + 23);
                ctx.lineTo(cx, cy + 17);
                ctx.lineTo(cx - 5, cy + 20);
                ctx.closePath();
                ctx.fillStyle = accent;
                ctx.fill();
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 1;
                ctx.stroke();
             }
         }
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
    <div className={`webgl-wireframe-container ${className}`} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
      <canvas ref={canvasRef} className="webgl-wireframe-canvas" aria-label="Interactive UI wireframe visualization" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 30%, var(--color-black) 90%)' }}></div>
    </div>
  );
}
