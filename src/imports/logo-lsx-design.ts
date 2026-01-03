/**
 * LSX Design Logo SVG
 * 
 * Modern geometric logo with "LSX" mark and "Design" text
 * Uses design system colors from theme.css
 */

export const LSXDesignLogo = `
<svg width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradient for modern look -->
    <linearGradient id="lsx-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:var(--primary);stop-opacity:1" />
      <stop offset="100%" style="stop-color:var(--accent);stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- LSX Icon Mark - Geometric L, S, X shapes -->
  <g id="lsx-mark">
    <!-- L shape -->
    <path d="M 4 8 L 4 32 L 16 32 L 16 28 L 8 28 L 8 8 Z" fill="url(#lsx-gradient)"/>
    
    <!-- S shape - modern geometric curve -->
    <path d="M 22 8 L 34 8 L 34 12 L 26 12 L 26 18 L 34 18 L 34 32 L 22 32 L 22 28 L 30 28 L 30 22 L 22 22 Z" fill="url(#lsx-gradient)"/>
    
    <!-- X shape - diagonal cross -->
    <path d="M 40 8 L 45 8 L 48 14 L 51 8 L 56 8 L 51 20 L 56 32 L 51 32 L 48 26 L 45 32 L 40 32 L 45 20 Z" fill="url(#lsx-gradient)"/>
  </g>
  
  <!-- DESIGN Text -->
  <g id="design-text" fill="currentColor" font-family="Lexend, sans-serif" font-size="24" font-weight="500">
    <text x="68" y="28" letter-spacing="-0.02">Design</text>
  </g>
</svg>
`;

export const LSXDesignLogoCompact = `
<svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lsx-gradient-compact" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:var(--primary);stop-opacity:1" />
      <stop offset="100%" style="stop-color:var(--accent);stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- LSX Icon Mark Only -->
  <g id="lsx-mark-compact">
    <!-- L shape -->
    <path d="M 4 8 L 4 32 L 16 32 L 16 28 L 8 28 L 8 8 Z" fill="url(#lsx-gradient-compact)"/>
    
    <!-- S shape -->
    <path d="M 22 8 L 34 8 L 34 12 L 26 12 L 26 18 L 34 18 L 34 32 L 22 32 L 22 28 L 30 28 L 30 22 L 22 22 Z" fill="url(#lsx-gradient-compact)"/>
    
    <!-- X shape -->
    <path d="M 40 8 L 45 8 L 48 14 L 51 8 L 56 8 L 51 20 L 56 32 L 51 32 L 48 26 L 45 32 L 40 32 L 45 20 Z" fill="url(#lsx-gradient-compact)"/>
  </g>
</svg>
`;

export const LSXDesignLogoLight = `
<svg width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lsx-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(30, 106, 255, 1);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgba(123, 231, 255, 1);stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- LSX Icon Mark -->
  <g id="lsx-mark-light">
    <path d="M 4 8 L 4 32 L 16 32 L 16 28 L 8 28 L 8 8 Z" fill="url(#lsx-gradient-light)"/>
    <path d="M 22 8 L 34 8 L 34 12 L 26 12 L 26 18 L 34 18 L 34 32 L 22 32 L 22 28 L 30 28 L 30 22 L 22 22 Z" fill="url(#lsx-gradient-light)"/>
    <path d="M 40 8 L 45 8 L 48 14 L 51 8 L 56 8 L 51 20 L 56 32 L 51 32 L 48 26 L 45 32 L 40 32 L 45 20 Z" fill="url(#lsx-gradient-light)"/>
  </g>
  
  <!-- DESIGN Text - Light Mode -->
  <g id="design-text-light" fill="rgba(9, 9, 9, 1)" font-family="Lexend, sans-serif" font-size="24" font-weight="500">
    <text x="68" y="28" letter-spacing="-0.02">Design</text>
  </g>
</svg>
`;

export const LSXDesignLogoDark = `
<svg width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lsx-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(123, 231, 255, 1);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgba(30, 106, 255, 1);stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- LSX Icon Mark -->
  <g id="lsx-mark-dark">
    <path d="M 4 8 L 4 32 L 16 32 L 16 28 L 8 28 L 8 8 Z" fill="url(#lsx-gradient-dark)"/>
    <path d="M 22 8 L 34 8 L 34 12 L 26 12 L 26 18 L 34 18 L 34 32 L 22 32 L 22 28 L 30 28 L 30 22 L 22 22 Z" fill="url(#lsx-gradient-dark)"/>
    <path d="M 40 8 L 45 8 L 48 14 L 51 8 L 56 8 L 51 20 L 56 32 L 51 32 L 48 26 L 45 32 L 40 32 L 45 20 Z" fill="url(#lsx-gradient-dark)"/>
  </g>
  
  <!-- DESIGN Text - Dark Mode -->
  <g id="design-text-dark" fill="rgba(255, 255, 255, 1)" font-family="Lexend, sans-serif" font-size="24" font-weight="500">
    <text x="68" y="28" letter-spacing="-0.02">Design</text>
  </g>
</svg>
`;

export default LSXDesignLogo;
