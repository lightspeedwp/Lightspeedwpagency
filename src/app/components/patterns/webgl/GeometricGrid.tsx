/**
 * Geometric Grid WebGL Component
 * 
 * Animated geometric grid with rotating shapes.
 * Optimized for performance with CSS variable caching and reduced motion support.
 * 
 * Used in: Bento News prototype showcase
 */

import { useEffect, useRef } from 'react';

interface GeometricGridProps {
  accentColor?: string;
  className?: string;
}

export function GeometricGrid({ 
  accentColor = 'var(--accent-red)',
  className = ''
}: GeometricGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cache CSS variable resolution
    const tempDiv = document.createElement('div');
    tempDiv.style.display = 'none';
    tempDiv.style.color = accentColor;
    document.body.appendChild(tempDiv);
    const resolvedColor = getComputedStyle(tempDiv).color;
    document.body.removeChild(tempDiv);

    // Parse RGB
    const rgbMatch = resolvedColor.match(/\d+/g);
    const r = rgbMatch ? parseInt(rgbMatch[0]) : 239;
    const g = rgbMatch ? parseInt(rgbMatch[1]) : 68;
    const b = rgbMatch ? parseInt(rgbMatch[2]) : 68;

    let width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    let height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    interface Shape {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: 'square' | 'triangle' | 'hexagon';
      opacity: number;
    }

    const shapes: Shape[] = [];
    const gridCols = 8;
    const gridRows = 5;
    const spacing = 80;

    // Create grid of shapes
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const types: Array<'square' | 'triangle' | 'hexagon'> = ['square', 'triangle', 'hexagon'];
        shapes.push({
          x: col * spacing + spacing / 2,
          y: row * spacing + spacing / 2,
          size: 20 + Math.random() * 15,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          type: types[Math.floor(Math.random() * types.length)],
          opacity: 0.3 + Math.random() * 0.5
        });
      }
    }

    const drawSquare = (x: number, y: number, size: number, rotation: number) => {
      if (!ctx) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeRect(-size / 2, -size / 2, size, size);
      ctx.restore();
    };

    const drawTriangle = (x: number, y: number, size: number, rotation: number) => {
      if (!ctx) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(size / 2, size / 2);
      ctx.lineTo(-size / 2, size / 2);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    };

    const drawHexagon = (x: number, y: number, size: number, rotation: number) => {
      if (!ctx) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = (size / 2) * Math.cos(angle);
        const hy = (size / 2) * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, width / window.devicePixelRatio, height / window.devicePixelRatio);

      // Draw shapes
      shapes.forEach(shape => {
        shape.rotation += shape.rotationSpeed;

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${shape.opacity})`;
        ctx.lineWidth = 2;

        if (shape.type === 'square') {
          drawSquare(shape.x, shape.y, shape.size, shape.rotation);
        } else if (shape.type === 'triangle') {
          drawTriangle(shape.x, shape.y, shape.size, shape.rotation);
        } else {
          drawHexagon(shape.x, shape.y, shape.size, shape.rotation);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    let animationId = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [accentColor]);

  return (
    <div className={`webgl-geometric-grid ${className}`.trim()}>
      <canvas 
        ref={canvasRef} 
        className="webgl-geometric-grid__canvas"
        aria-hidden="true" 
      />
    </div>
  );
}
