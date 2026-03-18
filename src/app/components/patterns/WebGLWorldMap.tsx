import { useRef, useEffect } from 'react';

interface WebGLWorldMapProps {
  accentColor?: string;
  className?: string;
}

export function WebGLWorldMap({ 
  accentColor = 'var(--wp--preset--color--neon-lime)',
  className = ''
}: WebGLWorldMapProps) {
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
      const varName = colorVar.match(/var\(([^)]+)\)/)?.[1];
      if (!varName) return colorVar;
      return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || colorVar;
    };

    // Pre-generate random "cities"
    const cities = Array.from({ length: 30 }, () => ({
      x: Math.random() * 0.8 + 0.1, // normalized 0.1 to 0.9
      y: Math.random() * 0.6 + 0.2, // normalized 0.2 to 0.8
      pulseOffset: Math.random() * Math.PI * 2,
      size: Math.random() * 2 + 1
    }));

    // Pre-generate connections between random cities
    const connections = Array.from({ length: 25 }, () => {
      const from = cities[Math.floor(Math.random() * cities.length)];
      let to = cities[Math.floor(Math.random() * cities.length)];
      while (to === from) {
        to = cities[Math.floor(Math.random() * cities.length)];
      }
      return { from, to, progress: Math.random() };
    });

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.01;
      
      const computedAccent = getCssColor(accentColor);
      const gridColor = 'rgba(255, 255, 255, 0.05)';

      // Draw latitude/longitude abstract grid
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let i = 0; i < height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }

      // Draw connections
      connections.forEach((conn) => {
        const x1 = conn.from.x * width;
        const y1 = conn.from.y * height;
        const x2 = conn.to.x * width;
        const y2 = conn.to.y * height;
        
        // Curved line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        const cpX = (x1 + x2) / 2;
        const cpY = Math.min(y1, y2) - 50; // curve upwards
        ctx.quadraticCurveTo(cpX, cpY, x2, y2);
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Moving dot
        conn.progress += 0.005;
        if (conn.progress > 1) conn.progress = 0;
        
        const t = conn.progress;
        const px = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cpX + t * t * x2;
        const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cpY + t * t * y2;
        
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = computedAccent;
        ctx.shadowBlur = 10;
        ctx.shadowColor = computedAccent;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Draw cities
      cities.forEach(city => {
        const x = city.x * width;
        const y = city.y * height;
        
        // Inner dot
        ctx.beginPath();
        ctx.arc(x, y, city.size, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        
        // Pulsing outer ring
        const pulse = (Math.sin(time + city.pulseOffset) + 1) / 2;
        ctx.beginPath();
        ctx.arc(x, y, city.size + pulse * 6, 0, Math.PI * 2);
        ctx.strokeStyle = computedAccent;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 1 - pulse;
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor]);

  return (
    <div className={`webgl-world-map-container ${className}`} style={{ width: '100%', height: '100%', minHeight: '300px' }}>
      <canvas ref={canvasRef} className="webgl-world-map-canvas" aria-label="Interactive global network map" />
    </div>
  );
}
