import { useRef, useEffect } from 'react';

export function WebGLTeamMosaic() {
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
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Generate random mosaic tiles
    const tiles: {x: number, y: number, w: number, h: number, phase: number, speed: number, color: string}[] = [];
    const colors = [
      'var(--wp--preset--color--neon-pink)',
      'var(--wp--preset--color--neon-cyan)',
      'var(--wp--preset--color--neon-lime)',
      'var(--wp--preset--color--neon-yellow)',
      'var(--color-gray-800)',
      'var(--color-gray-900)'
    ];

    const generateTiles = () => {
      tiles.length = 0;
      const cols = 15;
      const rows = 10;
      const w = canvas.width / cols;
      const h = canvas.height / rows;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.3) {
            tiles.push({
              x: i * w,
              y: j * h,
              w,
              h,
              phase: Math.random() * Math.PI * 2,
              speed: 0.5 + Math.random() * 2,
              color: colors[Math.floor(Math.random() * colors.length)]
            });
          }
        }
      }
    };

    generateTiles();

    const getCssColor = (colorVar: string) => {
      if (!colorVar.startsWith('var(')) return colorVar;
      const varName = colorVar.match(/var\(([^)]+)\)/)?.[1];
      if (!varName) return colorVar;
      return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || colorVar;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      tiles.forEach(tile => {
        const pulse = (Math.sin(time * tile.speed + tile.phase) + 1) / 2;
        
        const computedColor = getCssColor(tile.color);
        ctx.fillStyle = computedColor;
        
        // Convert CSS variable to actual color context requires computed styles
        // We'll simulate glowing effect with opacity
        ctx.globalAlpha = 0.1 + pulse * 0.4;
        
        // Draw tile with margin
        const margin = 2;
        ctx.fillRect(tile.x + margin, tile.y + margin, tile.w - margin * 2, tile.h - margin * 2);
        
        // Border glow
        if (pulse > 0.8 && !tile.color.includes('gray')) {
          ctx.strokeStyle = computedColor;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.8;
          ctx.shadowBlur = 10;
          ctx.shadowColor = computedColor;
          ctx.strokeRect(tile.x + margin, tile.y + margin, tile.w - margin * 2, tile.h - margin * 2);
          ctx.shadowBlur = 0; // reset
        }
      });
      
      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="webgl-team-mosaic-container">
      <canvas ref={canvasRef} className="webgl-team-mosaic-canvas" aria-label="Interactive team mosaic visualization" />
    </div>
  );
}
