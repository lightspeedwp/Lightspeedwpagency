import { useEffect, useRef } from 'react';

export function WebGLScanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cache CSS variable resolution (move outside render loop for performance)
    const neonColor = getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--neon-lime').trim() || '#32CD32';
    const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-secondary').trim() || 'sans-serif';

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };
    
    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Use static position if motion is reduced, otherwise animate
      const animTime = prefersReducedMotion ? 0 : time;
      const scanLineY = (Math.sin(animTime) * 0.5 + 0.5) * canvas.height;
      
      ctx.beginPath();
      ctx.moveTo(0, scanLineY);
      ctx.lineTo(canvas.width, scanLineY);
      
      ctx.strokeStyle = neonColor; // Use cached color
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20;
      ctx.shadowColor = neonColor; // Use cached color
      ctx.stroke();

      // Draw accessible nodes
      ctx.shadowBlur = 0;
      for(let i=0; i<5; i++) {
        const x = (i + 1) * (canvas.width / 6);
        const y = canvas.height / 2 + Math.sin(animTime + i) * 50;
        
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        
        if (Math.abs(y - scanLineY) < 20) {
          ctx.fillStyle = neonColor; // Use cached color
          ctx.shadowBlur = 15;
          ctx.shadowColor = neonColor; // Use cached color
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        
        // Label
        ctx.font = `12px ${fontFamily}`; // Use cached font
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Node ${i+1} OK`, x - 25, y - 15);
      }

      // Only continue animation if motion is not reduced
      if (!prefersReducedMotion) {
        time += 0.02;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="webgl-canvas-container" style={{ width: '100%', height: '300px', position: 'relative', background: 'var(--color-black)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--wp--preset--color--neon-lime)' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} aria-label="Interactive accessibility scanning visualization" />
    </div>
  );
}