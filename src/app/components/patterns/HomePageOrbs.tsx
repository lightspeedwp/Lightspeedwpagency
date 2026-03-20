/**
 * Homepage Orbs Background
 *
 * Animated gradient orbs that float in the background
 * of the homepage hero section. Creates depth and funky atmosphere.
 *
 * BEM block: .homepage-orbs
 *
 * @see /src/styles/patterns/homepage-orbs.css
 */

import { useEffect, useRef } from 'react';

export function HomePageOrbs() {
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !orbsRef.current) return;

    // Add parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbsRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      const orbs = orbsRef.current.querySelectorAll('.homepage-orbs__orb');
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 10;
        const x = xPercent * speed;
        const y = yPercent * speed;
        
        (orb as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="homepage-orbs" ref={orbsRef} aria-hidden="true">
      <div className="homepage-orbs__orb homepage-orbs__orb--1"></div>
      <div className="homepage-orbs__orb homepage-orbs__orb--2"></div>
      <div className="homepage-orbs__orb homepage-orbs__orb--3"></div>
      <div className="homepage-orbs__orb homepage-orbs__orb--4"></div>
      <div className="homepage-orbs__orb homepage-orbs__orb--5"></div>
    </div>
  );
}
