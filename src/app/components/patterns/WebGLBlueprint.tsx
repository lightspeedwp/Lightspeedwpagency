import { useRef, useEffect } from 'react';

interface WebGLBlueprintProps {
  accentColor?: string;
  gridColor?: string;
  className?: string;
}

export function WebGLBlueprint({ 
  accentColor = 'var(--wp--preset--color--neon-cyan, #00ffff)',
  gridColor = 'var(--wp--preset--color--slate-800, #1e293b)',
  className = ''
}: WebGLBlueprintProps) {
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

    // Construct blueprint nodes (like architectural blocks)
    const blocks: {x: number, y: number, w: number, h: number, delay: number}[] = [];
    for(let i=0; i<15; i++) {
       blocks.push({
         x: Math.random() * 0.8 + 0.1,
         y: Math.random() * 0.8 + 0.1,
         w: Math.random() * 0.2 + 0.05,
         h: Math.random() * 0.2 + 0.05,
         delay: Math.random() * Math.PI * 2
       });
    }

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      const accent = getCssColor(accentColor);
      const grid = getCssColor(gridColor);

      // Draw Grid Background
      ctx.strokeStyle = grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      const gridSize = 30;
      for (let x = (time * 5) % gridSize; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = (time * 5) % gridSize; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw Blueprint Blocks
      blocks.forEach((block) => {
         const bx = block.x * width;
         const by = block.y * height;
         const bw = block.w * width;
         const bh = block.h * height;

         const alpha = (Math.sin(time + block.delay) + 1) * 0.3 + 0.1;
         
         ctx.strokeStyle = `${accent}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
         ctx.lineWidth = 2;
         ctx.strokeRect(bx, by, bw, bh);
         
         // Inner cross lines
         ctx.beginPath();
         ctx.moveTo(bx, by);
         ctx.lineTo(bx + bw, by + bh);
         ctx.moveTo(bx + bw, by);
         ctx.lineTo(bx, by + bh);
         ctx.strokeStyle = `${accent}${Math.floor(alpha * 100).toString(16).padStart(2, '0')}`;
         ctx.stroke();
         
         // Measurement lines
         if (alpha > 0.5) {
             ctx.beginPath();
             ctx.moveTo(bx, by - 10);
             ctx.lineTo(bx + bw, by - 10);
             ctx.strokeStyle = accent;
             ctx.lineWidth = 1;
             ctx.stroke();
             
             // Text marker
             const fontMono = getComputedStyle(document.documentElement).getPropertyValue('--font-mono').trim() || 'monospace';
             ctx.fillStyle = accent;
             ctx.font = `10px ${fontMono}`;
             ctx.fillText(`${Math.floor(bw)}px`, bx + bw/2 - 15, by - 15);
         }
      });
      
      // Floating particles
      for(let i=0; i<20; i++) {
         const px = ((i * 123 + time * 20) % width);
         const py = ((i * 321 - time * 10) % height);
         if (py < 0) continue;
         
         ctx.fillStyle = accent;
         ctx.globalAlpha = 0.5;
         ctx.fillRect(px, py, 2, 2);
         ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor, gridColor]);

  return (
    <div className={`webgl-blueprint-container ${className}`} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
      <canvas ref={canvasRef} className="webgl-blueprint-canvas" aria-label="Interactive architectural blueprint visualization" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 30%, var(--color-black) 90%)' }}></div>
    </div>
  );
}
