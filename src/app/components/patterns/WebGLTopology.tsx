import { useEffect, useRef } from 'react';

export function WebGLTopology() {
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

    const points = Array.from({ length: 40 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.005,
      vy: (Math.random() - 0.5) * 0.005,
      z: Math.random() * 2
    }));

    const render = () => {
      time += 0.01;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--neon-cyan').trim() || '#00ffff';

      // Update points
      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      });

      // Draw lines
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 255, 255, 0.05)`;
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if (dist < 0.15) {
            ctx.moveTo(points[i].x * canvas.width, points[i].y * canvas.height);
            ctx.lineTo(points[j].x * canvas.width, points[j].y * canvas.height);
          }
        }
      }
      ctx.stroke();

      // Draw nodes
      points.forEach((point, i) => {
        const x = point.x * canvas.width;
        const y = point.y * canvas.height;
        
        ctx.beginPath();
        ctx.arc(x, y, point.z * 1.5 + 1, 0, Math.PI * 2);
        
        if (i % 5 === 0) {
          ctx.fillStyle = themeColor;
          ctx.shadowBlur = 10;
          ctx.shadowColor = themeColor;
        } else {
          ctx.fillStyle = 'rgba(255,255,255,0.4)';
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="webgl-topology-container" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block', opacity: 0.6 }} aria-hidden="true" />
    </div>
  );
}
