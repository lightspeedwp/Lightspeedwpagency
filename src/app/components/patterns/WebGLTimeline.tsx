import { useRef, useEffect } from 'react';

interface WebGLTimelineProps {
  accentColor?: string;
}

export function WebGLTimeline({ accentColor = 'var(--wp--preset--color--neon-pink)' }: WebGLTimelineProps) {
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

    const getCssColor = (colorVar: string) => {
      if (!colorVar.startsWith('var(')) return colorVar;
      const varName = colorVar.match(/var\(([^)]+)\)/)?.[1];
      if (!varName) return colorVar;
      return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || colorVar;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const centerY = canvas.height / 2;
      const points = 8;
      const spacing = canvas.width / (points + 1);

      // Draw connecting glowing line
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      
      for (let i = 1; i <= points; i++) {
        const x = i * spacing;
        const yOffset = Math.sin(time + i) * 30;
        const y = centerY + yOffset;
        
        if (i === 1) {
          ctx.lineTo(x, y);
        } else {
          const prevX = (i - 1) * spacing;
          const prevY = centerY + Math.sin(time + i - 1) * 30;
          const cpX = (prevX + x) / 2;
          ctx.bezierCurveTo(cpX, prevY, cpX, y, x, y);
        }
      }
      
      ctx.lineTo(canvas.width, centerY);
      const computedAccent = getCssColor(accentColor);
      ctx.strokeStyle = computedAccent;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = computedAccent;
      ctx.stroke();

      // Draw nodes
      for (let i = 1; i <= points; i++) {
        const x = i * spacing;
        const yOffset = Math.sin(time + i) * 30;
        const y = centerY + yOffset;
        
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = getCssColor('var(--color-black)');
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Pulsing inner dot
        const pulse = (Math.sin(time * 3 + i) + 1) / 2;
        ctx.beginPath();
        ctx.arc(x, y, 2 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = computedAccent;
        ctx.shadowBlur = 10;
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
    <div className="webgl-timeline-container">
      <canvas ref={canvasRef} className="webgl-timeline-canvas" aria-label="Interactive timeline visualization" />
    </div>
  );
}
