import { useRef, useEffect } from 'react';

interface WebGLProcessOrbitalProps {
  accentColor?: string;
  className?: string;
}

export function WebGLProcessOrbital({ 
  accentColor = 'var(--wp--preset--color--neon-cyan)',
  className = ''
}: WebGLProcessOrbitalProps) {
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
        // High DPI canvas
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

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const centerX = width / 2;
      const centerY = height / 2;
      
      const computedAccent = getCssColor(accentColor);
      const computedDark = getCssColor('var(--color-black)') || '#000';

      const nodes = 4;
      const baseRadius = Math.min(width, height) * 0.3;

      // Draw central hub
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fillStyle = computedDark;
      ctx.fill();
      ctx.strokeStyle = computedAccent;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20;
      ctx.shadowColor = computedAccent;
      ctx.stroke();

      // Pulsing center dot
      const centerPulse = (Math.sin(time * 5) + 1) / 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5 + centerPulse * 5, 0, Math.PI * 2);
      ctx.fillStyle = computedAccent;
      ctx.fill();

      // Draw orbits
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.shadowBlur = 0;
      ctx.stroke();

      // Draw orbiting nodes
      for (let i = 0; i < nodes; i++) {
        const angle = time + (Math.PI * 2 * i) / nodes;
        const x = centerX + Math.cos(angle) * baseRadius;
        const y = centerY + Math.sin(angle) * baseRadius;

        // Connecting line to center
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.05)`;
        ctx.stroke();

        // Node circle
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fillStyle = computedDark;
        ctx.fill();
        ctx.strokeStyle = computedAccent;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = computedAccent;
        ctx.stroke();
        
        // Node inner dot
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = computedAccent;
        ctx.shadowBlur = 5;
        ctx.fill();
      }

      ctx.shadowBlur = 0; // reset
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor]);

  return (
    <div className={`webgl-process-orbital-container ${className}`} style={{ width: '100%', height: '100%', minHeight: '300px' }}>
      <canvas ref={canvasRef} className="webgl-process-orbital-canvas" aria-label="Interactive process visualization" />
    </div>
  );
}
