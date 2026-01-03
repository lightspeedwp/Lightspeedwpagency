/**
 * cn (className) Utility
 * 
 * Merges Tailwind CSS classes with intelligent deduplication.
 * Uses clsx for conditional classes and tailwind-merge to resolve conflicts.
 * 
 * Design Token Compliance:
 * - Works seamlessly with Tailwind utility classes
 * - Ensures correct precedence when classes conflict
 * 
 * @param {...ClassValue[]} inputs - Class names to merge
 * @returns {string} Merged and deduplicated class string
 * 
 * @example
 * // Basic usage
 * cn('px-4 py-2', 'bg-primary')
 * // => 'px-4 py-2 bg-primary'
 * 
 * @example
 * // Conditional classes
 * cn('px-4 py-2', isActive && 'bg-primary')
 * // => 'px-4 py-2 bg-primary' (if isActive is true)
 * 
 * @example
 * // Conflict resolution (last class wins)
 * cn('px-4', 'px-6')
 * // => 'px-6'
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
