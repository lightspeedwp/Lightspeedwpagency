/**
 * Neon Grid WebGL Component
 * 
 * Animated neon grid with perspective and pulsing lines.
 * Optimized for performance with CSS variable caching and reduced motion support.
 * 
 * Used in: LightSpeedWP.Agency prototype showcase
 */

import { useEffect, useRef } from 'react';

interface NeonGridProps {
  accentColor?: string;
  className?: string;
}

export function NeonGrid({ 
  accentColor = 'var(--neon-cyan)',
  className = ''
}: NeonGridProps) {
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
    const r = rgbMatch ? parseInt(rgbMatch[0]) : 0;
    const g = rgbMatch ? parseInt(rgbMatch[1]) : 255;
    const b = rgbMatch ? parseInt(rgbMatch[2]) : 255;

    let width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    let height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const gridSize = 40;
    const perspective = 300;
    let offset = 0;
    let time = 0;

    // Data stream particles
    const dataStreams: Array<{ x: number; y: number; speed: number; life: number }> = [];
    
    const createDataStream = () => {
      if (dataStreams.length < 15) {
        dataStreams.push({
          x: Math.random() * 20 - 10,
          y: -10,
          speed: Math.random() * 0.3 + 0.2,
          life: 1
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      time += 0.01;

      // Clear canvas with subtle fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
      ctx.fillRect(0, 0, width / window.devicePixelRatio, height / window.devicePixelRatio);

      const centerX = (width / window.devicePixelRatio) / 2;
      const centerY = (height / window.devicePixelRatio) / 2;

      offset += 0.5;

      // Color cycling effect
      const colorShift = Math.sin(time * 0.5) * 0.3;
      const rMod = Math.floor(r + colorShift * 50);
      const gMod = Math.floor(g + colorShift * 30);
      const bMod = Math.floor(b - colorShift * 20);

      // Draw grid lines with perspective
      for (let i = -10; i < 10; i++) {
        const y = (i * gridSize + (offset % gridSize)) - centerY;
        const scale = perspective / (perspective + y);
        
        if (scale > 0 && scale < 2) {
          const x1 = centerX - (400 * scale);
          const x2 = centerX + (400 * scale);
          const drawY = centerY + (y * scale);
          
          // Enhanced pulse effect with color cycling
          const pulse = Math.sin(offset * 0.05 + i * 0.3) * 0.4 + 0.8;
          const opacity = Math.min(0.7, scale * pulse);

          // Glow effect on grid lines
          ctx.shadowBlur = 15 * scale;
          ctx.shadowColor = `rgba(${rMod}, ${gMod}, ${bMod}, ${opacity * 0.8})`;

          ctx.beginPath();
          ctx.moveTo(x1, drawY);
          ctx.lineTo(x2, drawY);
          ctx.strokeStyle = `rgba(${rMod}, ${gMod}, ${bMod}, ${opacity})`;
          ctx.lineWidth = scale * 2;
          ctx.stroke();

          // Reset shadow
          ctx.shadowBlur = 0;
        }
      }

      // Vertical lines with enhanced glow
      for (let i = -10; i < 10; i++) {
        const x = i * gridSize;
        
        for (let j = 0; j < 20; j++) {
          const y1 = (j * gridSize + (offset % gridSize)) - centerY;
          const y2 = ((j + 1) * gridSize + (offset % gridSize)) - centerY;
          
          const scale1 = perspective / (perspective + y1);
          const scale2 = perspective / (perspective + y2);
          
          if (scale1 > 0 && scale1 < 2 && scale2 > 0 && scale2 < 2) {
            const drawX1 = centerX + (x * scale1);
            const drawY1 = centerY + (y1 * scale1);
            const drawX2 = centerX + (x * scale2);
            const drawY2 = centerY + (y2 * scale2);
            
            const avgScale = (scale1 + scale2) / 2;
            const opacity = Math.min(0.5, avgScale * 0.6);

            ctx.beginPath();
            ctx.moveTo(drawX1, drawY1);
            ctx.lineTo(drawX2, drawY2);
            ctx.strokeStyle = `rgba(${rMod}, ${gMod}, ${bMod}, ${opacity})`;
            ctx.lineWidth = avgScale * 1.2;
            ctx.stroke();
          }
        }
      }

      // Create new data streams randomly
      if (Math.random() < 0.1) {
        createDataStream();
      }

      // Update and draw data streams
      dataStreams.forEach((stream, index) => {
        stream.y += stream.speed;
        stream.life -= 0.005;

        if (stream.life <= 0 || stream.y > 10) {
          dataStreams.splice(index, 1);
          return;
        }

        const y = (stream.y * gridSize + (offset % gridSize)) - centerY;
        const scale = perspective / (perspective + y);
        
        if (scale > 0 && scale < 2) {
          const drawX = centerX + (stream.x * gridSize * scale);
          const drawY = centerY + (y * scale);
          
          // Draw glowing data particle
          const particleSize = 4 * scale;
          ctx.shadowBlur = 20 * scale;
          ctx.shadowColor = `rgba(${rMod}, ${gMod}, ${bMod}, ${stream.life})`;
          
          ctx.fillStyle = `rgba(${rMod}, ${gMod}, ${bMod}, ${stream.life})`;
          ctx.beginPath();
          ctx.arc(drawX, drawY, particleSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw trailing line
          ctx.strokeStyle = `rgba(${rMod}, ${gMod}, ${bMod}, ${stream.life * 0.3})`;
          ctx.lineWidth = 1 * scale;
          ctx.beginPath();
          ctx.moveTo(drawX, drawY);
          ctx.lineTo(drawX, drawY - 20 * scale);
          ctx.stroke();
          
          ctx.shadowBlur = 0;
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
    <div className={`webgl-neon-grid ${className}`.trim()}>
      <canvas 
        ref={canvasRef} 
        className="webgl-neon-grid__canvas"
        aria-hidden="true" 
      />
    </div>
  );
}