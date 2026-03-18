import { useRef, useEffect } from 'react';

interface WebGLTokensProps {
  accentColor?: string;
  gridColor?: string;
  className?: string;
}

export function WebGLTokens({ 
  accentColor = 'var(--wp--preset--color--neon-lime, #bfff00)',
  gridColor = 'var(--wp--preset--color--slate-800, #1e293b)',
  className = ''
}: WebGLTokensProps) {
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

    // Design tokens to animate
    const tokens: {x: number, y: number, type: string, size: number, delay: number}[] = [];
    
    // Generate scattered tokens
    for(let i=0; i<30; i++) {
       const typeRand = Math.random();
       let type = 'color';
       if (typeRand > 0.4) type = 'typography';
       if (typeRand > 0.7) type = 'spacing';
       if (typeRand > 0.9) type = 'radius';
       
       tokens.push({
         x: Math.random() * 0.9 + 0.05,
         y: Math.random() * 0.9 + 0.05,
         type: type,
         size: Math.random() * 20 + 10,
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

      // Draw Subdued Grid
      ctx.strokeStyle = grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      const gridSize = 50;
      for (let x = (time * 10) % gridSize; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = (time * 10) % gridSize; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw Connection Lines between nodes
      ctx.beginPath();
      for(let i=0; i<tokens.length; i++) {
         for(let j=i+1; j<tokens.length; j++) {
            const dx = (tokens[i].x - tokens[j].x) * width;
            const dy = (tokens[i].y - tokens[j].y) * height;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < 150) {
               ctx.moveTo(tokens[i].x * width, tokens[i].y * height);
               ctx.lineTo(tokens[j].x * width, tokens[j].y * height);
            }
         }
      }
      ctx.strokeStyle = `${accent}${Math.floor((Math.sin(time) * 0.1 + 0.1) * 255).toString(16).padStart(2, '0')}`;
      ctx.stroke();

      // Draw Tokens
      tokens.forEach((token) => {
         const tx = token.x * width + Math.sin(time + token.delay) * 10;
         const ty = token.y * height + Math.cos(time + token.delay) * 10;
         const alpha = (Math.sin(time * 2 + token.delay) + 1) * 0.4 + 0.2;
         
         ctx.strokeStyle = `${accent}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
         ctx.lineWidth = 2;
         
         if (token.type === 'color') {
             // Circle for color token
             ctx.beginPath();
             ctx.arc(tx, ty, token.size / 2, 0, Math.PI * 2);
             ctx.fillStyle = `${accent}${Math.floor(alpha * 0.3 * 255).toString(16).padStart(2, '0')}`;
             ctx.fill();
             ctx.stroke();
         } else if (token.type === 'typography') {
             // "Aa" for typography
             const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-primary').trim() || 'sans-serif';
             ctx.fillStyle = accent;
             ctx.font = `${Math.floor(token.size)}px ${fontFamily}`;
             ctx.textAlign = 'center';
             ctx.textBaseline = 'middle';
             ctx.globalAlpha = alpha;
             ctx.fillText('Aa', tx, ty);
             ctx.globalAlpha = 1.0;
         } else if (token.type === 'spacing') {
             // Double arrow line for spacing
             ctx.beginPath();
             ctx.moveTo(tx - token.size/2, ty);
             ctx.lineTo(tx + token.size/2, ty);
             ctx.moveTo(tx - token.size/2 + 5, ty - 5);
             ctx.lineTo(tx - token.size/2, ty);
             ctx.lineTo(tx - token.size/2 + 5, ty + 5);
             ctx.moveTo(tx + token.size/2 - 5, ty - 5);
             ctx.lineTo(tx + token.size/2, ty);
             ctx.lineTo(tx + token.size/2 - 5, ty + 5);
             ctx.stroke();
         } else if (token.type === 'radius') {
             // Rounded corner for radius
             ctx.beginPath();
             ctx.moveTo(tx - token.size/2, ty + token.size/2);
             ctx.lineTo(tx - token.size/2, ty - token.size/2 + 5);
             ctx.arcTo(tx - token.size/2, ty - token.size/2, tx - token.size/2 + 5, ty - token.size/2, 5);
             ctx.lineTo(tx + token.size/2, ty - token.size/2);
             ctx.stroke();
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
    <div className={`webgl-tokens-container ${className}`} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
      <canvas ref={canvasRef} className="webgl-tokens-canvas" aria-label="Interactive design tokens visualization" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 30%, var(--color-black) 90%)' }}></div>
    </div>
  );
}
