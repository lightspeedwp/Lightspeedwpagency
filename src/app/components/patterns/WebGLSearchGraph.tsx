import { useRef, useEffect } from 'react';

interface WebGLSearchGraphProps {
  accentColor?: string;
  gridColor?: string;
  className?: string;
}

export function WebGLSearchGraph({ 
  accentColor = 'var(--wp--preset--color--neon-purple, #b14dff)',
  gridColor = 'var(--wp--preset--color--slate-800, #1e293b)',
  className = ''
}: WebGLSearchGraphProps) {
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

    const lines: {x1: number, y1: number, amp: number, freq: number, phase: number, width: number}[] = [];
    for(let i=0; i<6; i++) {
       lines.push({
         x1: 0,
         y1: 0, // will compute dynamically
         amp: Math.random() * 40 + 20,
         freq: Math.random() * 0.02 + 0.01,
         phase: Math.random() * Math.PI * 2,
         width: Math.random() * 1.5 + 0.5
       });
    }

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      const computedAccent = getCssColor(accentColor);
      const computedGrid = getCssColor(gridColor);

      // Draw Grid Background
      ctx.strokeStyle = computedGrid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      const gridSize = 40;
      for (let x = (time * 10) % gridSize; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Trend Lines (Upward Graph)
      lines.forEach((line, index) => {
        ctx.beginPath();
        const startY = height * 0.8 - (index * height * 0.1);
        ctx.moveTo(0, startY);
        
        for (let x = 0; x <= width; x += 10) {
           // Growth function + wave
           const growth = -Math.pow(x / width, 2) * height * 0.5; // Curves upwards
           const wave = Math.sin(x * line.freq + time + line.phase) * line.amp;
           ctx.lineTo(x, startY + growth + wave);
        }

        ctx.strokeStyle = computedAccent;
        ctx.lineWidth = line.width;
        ctx.globalAlpha = 1 - (index * 0.15); // Fade back lines
        
        // Shadow for glowing effect
        ctx.shadowBlur = index === 0 ? 15 : 5;
        ctx.shadowColor = computedAccent;
        ctx.stroke();
        
        ctx.shadowBlur = 0;
      });
      
      // Data Points along the top line
      const topLine = lines[0];
      const pointCount = 5;
      for (let i = 1; i <= pointCount; i++) {
         const x = (width / pointCount) * i - (time * 20) % (width / pointCount);
         if (x > 0 && x < width) {
            const startY = height * 0.8;
            const growth = -Math.pow(x / width, 2) * height * 0.5;
            const wave = Math.sin(x * topLine.freq + time + topLine.phase) * topLine.amp;
            const y = startY + growth + wave;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.shadowBlur = 10;
            ctx.shadowColor = computedAccent;
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.strokeStyle = computedAccent;
            ctx.lineWidth = 1;
            ctx.stroke();
         }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor, gridColor]);

  return (
    <div className={`webgl-search-graph-container ${className}`} style={{ width: '100%', height: '100%', minHeight: '300px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      <canvas ref={canvasRef} className="webgl-search-graph-canvas" aria-label="Interactive SEO trend graph visualization" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to right, var(--color-black) 0%, transparent 20%, transparent 80%, var(--color-black) 100%), linear-gradient(to bottom, var(--color-black) 0%, transparent 20%, transparent 80%, var(--color-black) 100%)' }}></div>
      </div>
    </div>
  );
}
