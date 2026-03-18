import { useRef, useEffect } from 'react';

interface WebGLDesignGridProps {
  accentColor?: string;
  gridColor?: string;
  className?: string;
}

export function WebGLDesignGrid({ 
  accentColor = 'var(--wp--preset--color--neon-pink, #ff00ff)',
  gridColor = 'var(--wp--preset--color--slate-800, #1e293b)',
  className = ''
}: WebGLDesignGridProps) {
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

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      const accent = getCssColor(accentColor);
      const grid = getCssColor(gridColor);

      // Draw isometric grid
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(1, 0.5);
      ctx.rotate(Math.PI / 4);

      ctx.strokeStyle = grid;
      ctx.lineWidth = 1;
      
      const gridSize = 40;
      const extent = Math.max(width, height) * 1.5;

      // Moving grid lines
      const offset = (time * 20) % gridSize;

      ctx.beginPath();
      for (let i = -extent; i < extent; i += gridSize) {
        ctx.moveTo(i + offset, -extent);
        ctx.lineTo(i + offset, extent);
        ctx.moveTo(-extent, i + offset);
        ctx.lineTo(extent, i + offset);
      }
      ctx.stroke();

      // Highlighted tiles (design tokens)
      const highlightCount = 10;
      for (let i = 0; i < highlightCount; i++) {
        const hx = Math.floor(Math.sin(i * 123 + time * 0.5) * extent / gridSize / 2) * gridSize;
        const hy = Math.floor(Math.cos(i * 321 + time * 0.5) * extent / gridSize / 2) * gridSize;
        
        ctx.fillStyle = `${accent}${Math.floor((Math.sin(time * 2 + i) * 0.3 + 0.3) * 255).toString(16).padStart(2, '0')}`;
        ctx.fillRect(hx + offset, hy + offset, gridSize - 2, gridSize - 2);
        
        if (i % 3 === 0) {
            ctx.strokeStyle = accent;
            ctx.lineWidth = 2;
            ctx.strokeRect(hx + offset, hy + offset, gridSize - 2, gridSize - 2);
            
            // Extrude up (wireframe box)
            ctx.beginPath();
            ctx.moveTo(hx + offset, hy + offset);
            ctx.lineTo(hx + offset - 20, hy + offset - 20);
            ctx.stroke();
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor, gridColor]);

  return (
    <div className={`webgl-design-grid-container ${className}`} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
      <canvas ref={canvasRef} className="webgl-design-grid-canvas" aria-label="Interactive isometric design grid" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 30%, var(--color-black) 80%)' }}></div>
    </div>
  );
}
