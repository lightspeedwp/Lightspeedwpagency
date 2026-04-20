import { useEffect, useRef } from 'react';
import '../../../styles/components/webgl-network.css';

export function WebGLAINetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cache CSS variable resolution (move outside render loop for performance)
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--neon-cyan').trim() || '#00f0ff';
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--neon-pink').trim() || '#ff00ff';

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };
    
    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;
    let time = 0;

    const nodes = Array.from({ length: 50 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.002,
      vy: (Math.random() - 0.5) * 0.002,
      size: Math.random() * 3 + 1,
      pulse: Math.random() * Math.PI * 2
    }));

    const render = () => {
      // Clear with very slight fade for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update nodes only if motion is allowed
      if (!prefersReducedMotion) {
        nodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > 1) node.vx *= -1;
          if (node.y < 0 || node.y > 1) node.vy *= -1;

          node.pulse += 0.05;
        });
      }

      nodes.forEach((node, i) => {
        const x = node.x * canvas.width;
        const y = node.y * canvas.height;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 0.15) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(otherNode.x * canvas.width, otherNode.y * canvas.height);
            // Pulsing connection lines (static if motion reduced)
            const pulseEffect = prefersReducedMotion ? 0.5 : (Math.sin(time + node.pulse) * 0.5 + 0.5);
            const alpha = (1 - dist / 0.15) * 0.5 * pulseEffect;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Draw nodes
        const pulseAmount = prefersReducedMotion ? 0 : Math.sin(node.pulse) * 1.5;
        const currentSize = Math.max(0.1, node.size + pulseAmount);
        
        ctx.beginPath();
        ctx.arc(x, y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? secondaryColor : primaryColor; // Use cached colors
        ctx.fill();
        
        // Node glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Only continue animation if motion is not reduced
      if (!prefersReducedMotion) {
        time += 0.05;
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
    <div className="webgl-network">
      <canvas
        ref={canvasRef}
        className="webgl-network__canvas"
      />
      <div className="webgl-network__overlay" />
    </div>
  );
}