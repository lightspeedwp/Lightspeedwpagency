/**
 * CSS Color Resolver Utility
 * 
 * Resolves CSS variable references to actual color values for use in Canvas API.
 * Canvas doesn't support CSS variables directly, so we need to resolve them first.
 * 
 * CRITICAL: This function is cached and should NOT be called inside animation loops.
 * Call it once before the animation loop starts.
 */

/**
 * Resolves a CSS color variable to an actual hex/rgb color value
 * 
 * @param colorVar - Color value (can be CSS variable like 'var(--primary)' or hex like '#ff00ff')
 * @param fallback - Fallback color if resolution fails (default: '#00ffff')
 * @returns Resolved color as hex/rgb string
 * 
 * @example
 * const color = resolveCssColor('var(--primary-500)', '#00ffff');
 * // Returns actual computed color value or fallback
 * 
 * @example
 * const color = resolveCssColor('#ff00ff');
 * // Returns '#ff00ff' unchanged
 */
export function resolveCssColor(colorVar: string, fallback: string = '#00ffff'): string {
  // If it's not a CSS variable, return as-is
  if (!colorVar || !colorVar.includes('var(')) {
    return colorVar || fallback;
  }

  try {
    // Extract variable name from var(--variable-name)
    const varMatch = colorVar.match(/var\(([^,)]+)(?:,\s*([^)]+))?\)/);
    if (!varMatch) {
      return fallback;
    }

    const varName = varMatch[1].trim();
    const cssFallback = varMatch[2]?.trim();

    // Get computed value from document
    const computedValue = getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();

    // If we got a value, return it
    if (computedValue && computedValue !== '' && !computedValue.includes('var(')) {
      return computedValue;
    }

    // Try CSS fallback from var(--name, fallback)
    if (cssFallback && !cssFallback.includes('var(')) {
      return cssFallback;
    }

    // Return function fallback
    return fallback;
  } catch (error) {
    console.warn('[resolveCssColor] Failed to resolve color:', colorVar, error);
    return fallback;
  }
}

/**
 * Converts a hex color to rgba format with alpha
 * 
 * @param hex - Hex color (e.g., '#ff00ff' or 'ff00ff')
 * @param alpha - Alpha value 0-1 (default: 1)
 * @returns rgba color string
 * 
 * @example
 * hexToRgba('#ff00ff', 0.5) // Returns 'rgba(255, 0, 255, 0.5)'
 */
export function hexToRgba(hex: string, alpha: number = 1): string {
  // Remove # if present
  const cleanHex = hex.replace('#', '');
  
  // Parse RGB
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  // Validate
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    console.warn('[hexToRgba] Invalid hex color:', hex);
    return `rgba(0, 255, 255, ${alpha})`; // Fallback cyan
  }
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Adds alpha transparency to any color format
 * 
 * @param color - Color value (hex, rgb, rgba, or CSS variable)
 * @param alpha - Alpha value 0-1
 * @returns Color with alpha applied
 * 
 * @example
 * addAlpha('#ff00ff', 0.5) // Returns 'rgba(255, 0, 255, 0.5)'
 * addAlpha('rgb(255, 0, 255)', 0.5) // Returns 'rgba(255, 0, 255, 0.5)'
 */
export function addAlpha(color: string, alpha: number): string {
  // If already rgba, just replace alpha
  if (color.startsWith('rgba(')) {
    return color.replace(/[\d.]+\)$/, `${alpha})`);
  }
  
  // If rgb, convert to rgba
  if (color.startsWith('rgb(')) {
    return color.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
  }
  
  // If hex, convert to rgba
  if (color.startsWith('#')) {
    return hexToRgba(color, alpha);
  }
  
  // Unknown format, return with alpha appended (best effort)
  console.warn('[addAlpha] Unknown color format:', color);
  return `rgba(0, 255, 255, ${alpha})`; // Fallback cyan
}
