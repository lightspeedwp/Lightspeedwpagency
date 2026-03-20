import { useEffect, useRef } from 'react';

export function WebGLKnowledgeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cache CSS variable resolution (move outside render loop for performance)
    const neonColor = getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--neon-purple').trim() || '#b535f6';
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--neon-lime').trim() || '#32cd32';
    const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-primary').trim() || 'sans-serif';

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };
    
    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;
    let time = 0;

    const nodes = [
      { id: 'WordPress', x: 0.5, y: 0.5, size: 20 },
      { id: 'Blocks', x: 0.3, y: 0.3, size: 15 },
      { id: 'React', x: 0.7, y: 0.3, size: 15 },
      { id: 'Theme.json', x: 0.2, y: 0.6, size: 12 },
      { id: 'Patterns', x: 0.8, y: 0.6, size: 12 },
      { id: 'AI', x: 0.5, y: 0.2, size: 18 },
    ];

    const edges = [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 3], [2, 4], [1, 5], [2, 5]
    ];

    const render = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Use static position if motion is reduced, otherwise animate
      const animTime = prefersReducedMotion ? 0 : time;

      // Draw edges
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1.5;
      edges.forEach(([a, b]) => {
        const p1 = nodes[a];
        const p2 = nodes[b];
        
        const x1 = p1.x * canvas.width + Math.sin(animTime + a) * 20;
        const y1 = p1.y * canvas.height + Math.cos(animTime + a) * 20;
        const x2 = p2.x * canvas.width + Math.sin(animTime + b) * 20;
        const y2 = p2.y * canvas.height + Math.cos(animTime + b) * 20;
        
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      });
      ctx.stroke();

      // Draw nodes
      nodes.forEach((node, i) => {
        const x = node.x * canvas.width + Math.sin(animTime + i) * 20;
        const y = node.y * canvas.height + Math.cos(animTime + i) * 20;
        
        // Ensure radius is never negative
        const radius = Math.max(1, node.size + Math.sin(animTime*2 + i) * 2);
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        
        const isCore = i === 0 || i === 5;
        ctx.fillStyle = isCore ? neonColor : secondaryColor; // Use cached colors
        ctx.shadowBlur = isCore ? 20 : 10;
        ctx.shadowColor = ctx.fillStyle;
        
        ctx.fill();
        
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#ffffff';
        ctx.font = `14px ${fontFamily}`; // Use cached font
        ctx.textAlign = 'center';
        ctx.fillText(node.id, x, y + node.size + 15);
      });

      // Only continue animation if motion is not reduced
      if (!prefersReducedMotion) {
        time += 0.01;
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
    <div className="webgl-knowledge-graph" style={{ width: '100%', height: '400px', background: 'var(--color-black)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} aria-label="Interactive Knowledge Graph" />
    </div>
  );
}