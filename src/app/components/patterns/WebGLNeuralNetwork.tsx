import { useRef, useEffect } from 'react';
import { resolveCssColor, addAlpha } from '../../utils/css-color-resolver';

interface WebGLNeuralNetworkProps {
  accentColor?: string;
  className?: string;
}

export function WebGLNeuralNetwork({ 
  accentColor = 'var(--wp--preset--color--neon-purple)',
  className = ''
}: WebGLNeuralNetworkProps) {
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
    const computedAccent = resolveCssColor(accentColor, '#b535f6');
    const computedDark = resolveCssColor('var(--surface-primary)', '#000000');

    // Initialize nodes
    const nodeCount = 20;
    const nodes: { x: number, y: number, vx: number, vy: number, radius: number, isCenter: boolean }[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random(), // relative 0-1
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.002,
        vy: (Math.random() - 0.5) * 0.002,
        radius: Math.random() * 3 + 2,
        isCenter: i === 0 // Make the first node the center "Brain" node
      });
    }

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.02;
      
      // Update node positions
      nodes.forEach((node, i) => {
        if (node.isCenter) {
          node.x = 0.5;
          node.y = 0.5 + Math.sin(time * 0.5) * 0.05; // slight hover
        } else {
          node.x += node.vx;
          node.y += node.vy;
          
          if (node.x < 0 || node.x > 1) node.vx *= -1;
          if (node.y < 0 || node.y > 1) node.vy *= -1;
        }
      });

      // Draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 0.3) {
            const opacity = (1 - distance / 0.3) * 0.5;
            
            // Draw gradient line
            const grad = ctx.createLinearGradient(
              nodes[i].x * width, nodes[i].y * height,
              nodes[j].x * width, nodes[j].y * height
            );
            grad.addColorStop(0, addAlpha(computedAccent, opacity));
            grad.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.2})`);
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
            ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
            ctx.strokeStyle = grad;
            ctx.stroke();

            // Draw pulses along the lines randomly
            if (Math.random() > 0.98) {
              const pulsePos = (time * 2 + j) % 1;
              const px = nodes[i].x * width + (nodes[j].x * width - nodes[i].x * width) * pulsePos;
              const py = nodes[i].y * height + (nodes[j].y * height - nodes[i].y * height) * pulsePos;
              
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fillStyle = '#fff';
              ctx.shadowBlur = 10;
              ctx.shadowColor = computedAccent;
              ctx.fill();
              ctx.shadowBlur = 0; // reset
            }
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        const nx = node.x * width;
        const ny = node.y * height;
        
        ctx.beginPath();
        if (node.isCenter) {
          ctx.arc(nx, ny, 25, 0, Math.PI * 2);
          ctx.fillStyle = computedDark;
          ctx.fill();
          ctx.strokeStyle = computedAccent;
          ctx.lineWidth = 3;
          ctx.shadowBlur = 30 + Math.sin(time * 3) * 10;
          ctx.shadowColor = computedAccent;
          ctx.stroke();
          
          // Inner glowing core
          ctx.beginPath();
          ctx.arc(nx, ny, 15, 0, Math.PI * 2);
          ctx.fillStyle = computedAccent;
          ctx.globalAlpha = 0.5 + Math.sin(time * 3) * 0.2;
          ctx.fill();
          ctx.globalAlpha = 1.0;
        } else {
          ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = computedDark;
          ctx.fill();
          ctx.strokeStyle = computedAccent;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 15;
          ctx.shadowColor = computedAccent;
          ctx.stroke();
        }
      });

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
    <div className={`webgl-neural-network-container ${className}`} style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative' }}>
      <canvas ref={canvasRef} className="webgl-neural-network-canvas" aria-label="Interactive neural network visualization" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 40%, var(--color-black) 100%)' }}></div>
      </div>
    </div>
  );
}