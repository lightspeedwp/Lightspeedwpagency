import { useRef, useEffect } from 'react';
import { resolveCssColor, addAlpha } from '../../utils/css-color-resolver';

interface WebGLDataNodesProps {
  accentColor?: string;
  secondaryColor?: string;
  className?: string;
}

export function WebGLDataNodes({ 
  accentColor = 'var(--wp--preset--color--neon-cyan, #00ffff)',
  secondaryColor = 'var(--wp--preset--color--neon-pink, #ff00ff)',
  className = ''
}: WebGLDataNodesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

    // Resolve colors once (NEVER in animation loop)
    const primary = resolveCssColor(accentColor, '#00ffff');
    const secondary = resolveCssColor(secondaryColor, '#ff00ff');

    // Initialize nodes
    const numNodes = 40;
    const nodes: {x: number, y: number, vx: number, vy: number, radius: number, type: number}[] = [];
    
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.001,
        vy: (Math.random() - 0.5) * 0.001,
        radius: Math.random() * 2 + 1,
        type: Math.random() > 0.5 ? 0 : 1
      });
    }

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.02;
      
      // Draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          const dx = (nodes[i].x - nodes[j].x) * width;
          const dy = (nodes[i].y - nodes[j].y) * height;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = Math.min(width, height) * 0.25;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.4;
            const gradient = ctx.createLinearGradient(
              nodes[i].x * width, nodes[i].y * height,
              nodes[j].x * width, nodes[j].y * height
            );
            gradient.addColorStop(0, addAlpha(nodes[i].type === 0 ? primary : secondary, alpha));
            gradient.addColorStop(1, addAlpha(nodes[j].type === 0 ? primary : secondary, alpha));
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
            ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
            ctx.strokeStyle = gradient;
            ctx.stroke();
            
            // Draw flowing data packet if connected
            if (dist < maxDist * 0.8 && (i + j) % 5 === 0) {
              const flowPos = (time * (1 + (i % 3) * 0.5) + i * 0.1) % 1;
              const fx = nodes[i].x * width + dx * -flowPos;
              const fy = nodes[i].y * height + dy * -flowPos;
              
              ctx.beginPath();
              ctx.arc(fx, fy, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = '#ffffff';
              ctx.shadowBlur = 5;
              ctx.shadowColor = '#ffffff';
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move
        node.x += node.vx;
        node.y += node.vy;
        
        // Add subtle wave motion
        node.y += Math.sin(time + node.x * 10) * 0.0005;

        // Wrap around
        if (node.x < -0.1) node.x = 1.1;
        if (node.x > 1.1) node.x = -0.1;
        if (node.y < -0.1) node.y = 1.1;
        if (node.y > 1.1) node.y = -0.1;

        const x = node.x * width;
        const y = node.y * height;
        const color = node.type === 0 ? primary : secondary;

        // Draw node
        ctx.beginPath();
        const pulse = Math.sin(time * 2 + i) * 0.5 + 1;
        ctx.arc(x, y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = color;
        
        // Node glow
        ctx.shadowBlur = 10 * pulse;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor, secondaryColor]);

  return (
    <div className={`webgl-data-nodes-container ${className}`} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      <canvas ref={canvasRef} className="webgl-data-nodes-canvas" aria-label="Interactive data network visualization" style={{ width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 20%, var(--color-black) 90%)' }}></div>
    </div>
  );
}