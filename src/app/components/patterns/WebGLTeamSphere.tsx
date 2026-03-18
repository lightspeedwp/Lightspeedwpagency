import { useRef, useEffect } from 'react';

interface WebGLTeamSphereProps {
  accentColor?: string;
  className?: string;
}

export function WebGLTeamSphere({ 
  accentColor = 'var(--wp--preset--color--neon-pink)',
  className = ''
}: WebGLTeamSphereProps) {
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

    // Pre-generate sphere points
    const points: { x: number, y: number, z: number, size: number }[] = [];
    const numPoints = 80;
    const radius = 100;
    
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      
      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        size: Math.random() * 2 + 1
      });
    }

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const centerX = width / 2;
      const centerY = height / 2;
      
      const computedAccent = getCssColor(accentColor);
      const computedDark = getCssColor('var(--color-black)') || '#000';

      const projectedPoints = points.map(p => {
        // Rotate around Y axis
        const cosY = Math.cos(time);
        const sinY = Math.sin(time);
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate around X axis
        const cosX = Math.cos(time * 0.5);
        const sinX = Math.sin(time * 0.5);
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Perspective projection
        const fov = 300;
        const viewerZ = 300;
        const scale = fov / (viewerZ + z2);

        return {
          x2d: x1 * scale + centerX,
          y2d: y1 * scale + centerY,
          scale,
          z: z2,
          size: p.size
        };
      });

      // Sort by Z to draw back to front
      projectedPoints.sort((a, b) => b.z - a.z);

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const dx = projectedPoints[i].x2d - projectedPoints[j].x2d;
          const dy = projectedPoints[i].y2d - projectedPoints[j].y2d;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Connect nearby points in 2D space for a web effect
          if (dist < 40 && projectedPoints[i].z < 50 && projectedPoints[j].z < 50) {
            ctx.beginPath();
            ctx.moveTo(projectedPoints[i].x2d, projectedPoints[i].y2d);
            ctx.lineTo(projectedPoints[j].x2d, projectedPoints[j].y2d);
            ctx.stroke();
          }
        }
      }

      // Draw points
      projectedPoints.forEach(p => {
        const radius = Math.max(0.1, p.size * p.scale);
        
        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, radius * 3, 0, Math.PI * 2);
        
        // Front points are bright/colored, back points are dim/white
        if (p.z < 0) {
          ctx.fillStyle = computedAccent;
          ctx.shadowBlur = 10;
          ctx.shadowColor = computedAccent;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + p.scale * 0.3})`;
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Node outline for front points
        if (p.z < -20) {
          ctx.beginPath();
          ctx.arc(p.x2d, p.y2d, radius * 8, 0, Math.PI * 2);
          ctx.strokeStyle = computedAccent;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1.0;
        }
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
    <div className={`webgl-team-sphere-container ${className}`} style={{ width: '100%', height: '100%', minHeight: '300px' }}>
      <canvas ref={canvasRef} className="webgl-team-sphere-canvas" aria-label="Interactive team connectivity sphere" />
    </div>
  );
}
