import { useEffect, useRef } from 'react';

interface ConstellationProps {
  points?: Array<{ x: number; y: number; label: string }>;
  accentColor?: string;
}

export function WebGLConstellation({ points, accentColor = 'var(--wp--preset--color--neon-cyan)' }: ConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };
    
    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const defaultPoints = points || [
        { x: 0.2, y: 0.3, label: 'Innovation' },
        { x: 0.5, y: 0.2, label: 'Accessibility' },
        { x: 0.8, y: 0.4, label: 'Collaboration' },
        { x: 0.3, y: 0.7, label: 'AI Stewardship' },
        { x: 0.7, y: 0.8, label: 'Sustainability' }
      ];

      // Draw lines
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
      ctx.lineWidth = 1;
      for (let i = 0; i < defaultPoints.length; i++) {
        for (let j = i + 1; j < defaultPoints.length; j++) {
          const p1 = defaultPoints[i];
          const p2 = defaultPoints[j];
          ctx.moveTo(p1.x * canvas.width + Math.sin(time + i) * 10, p1.y * canvas.height + Math.cos(time + i) * 10);
          ctx.lineTo(p2.x * canvas.width + Math.sin(time + j) * 10, p2.y * canvas.height + Math.cos(time + j) * 10);
        }
      }
      ctx.stroke();

      // Draw nodes
      defaultPoints.forEach((point, i) => {
        const x = point.x * canvas.width + Math.sin(time + i) * 10;
        const y = point.y * canvas.height + Math.cos(time + i) * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--neon-cyan').trim() || '#00ffff';
        ctx.fill();
        
        // Glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--neon-cyan').trim() || '#00ffff';

        ctx.font = `14px ${getComputedStyle(document.documentElement).getPropertyValue('--font-primary').trim() || 'sans-serif'}`;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 0;
        ctx.fillText(point.label, x + 12, y + 4);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [points, accentColor]);

  return (
    <div className="webgl-canvas-container" style={{ width: '100%', height: '400px', position: 'relative', background: 'var(--color-black)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} aria-label="Interactive Constellation visualization" />
    </div>
  );
}
