/**
 * Wishlist Button Component
 * 
 * Production-grade wishlist/favorites functionality with:
 * - Heart icon animation
 * - Local storage persistence
 * - Toast notifications
 * - Optimistic UI updates
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <WishlistButton
 *   itemId="product-123"
 *   itemData={productData}
 *   variant="icon"
 * />
 */

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

export interface WishlistItem {
  id: string;
  name: string;
  image?: string;
  price?: string;
  url?: string;
  [key: string]: any;
}

export interface WishlistButtonProps {
  /** Unique item identifier */
  itemId: string;
  /** Item data to store */
  itemData: WishlistItem;
  /** Button variant */
  variant?: 'icon' | 'button' | 'compact';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Show label */
  showLabel?: boolean;
  /** Custom label */
  label?: string;
  /** Callback when wishlist changes */
  onToggle?: (isInWishlist: boolean) => void;
}

const WISHLIST_KEY = 'lsx-wishlist';

export function WishlistButton({
  itemId,
  itemData,
  variant = 'icon',
  size = 'md',
  showLabel = false,
  label,
  onToggle,
}: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { showToast } = useToast();

  // Check if item is in wishlist on mount
  useEffect(() => {
    const wishlist = getWishlist();
    setIsInWishlist(wishlist.some(item => item.id === itemId));
  }, [itemId]);

  // Get wishlist from localStorage
  const getWishlist = (): WishlistItem[] => {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(WISHLIST_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading wishlist:', error);
      return [];
    }
  };

  // Save wishlist to localStorage
  const saveWishlist = (wishlist: WishlistItem[]): void => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch (error) {
      console.error('Error saving wishlist:', error);
    }
  };

  // Toggle wishlist
  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    const wishlist = getWishlist();
    const itemIndex = wishlist.findIndex(item => item.id === itemId);

    let newIsInWishlist: boolean;

    if (itemIndex >= 0) {
      // Remove from wishlist
      wishlist.splice(itemIndex, 1);
      newIsInWishlist = false;
      
      showToast({
        title: 'Removed from wishlist',
        description: `${itemData.name} has been removed from your wishlist.`,
        variant: 'default',
      });
    } else {
      // Add to wishlist
      wishlist.push(itemData);
      newIsInWishlist = true;
      
      showToast({
        title: 'Added to wishlist',
        description: `${itemData.name} has been added to your wishlist.`,
        variant: 'success',
      });
    }

    saveWishlist(wishlist);
    setIsInWishlist(newIsInWishlist);
    
    if (onToggle) {
      onToggle(newIsInWishlist);
    }
  };

  // Icon sizes
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  // Button sizes
  const buttonSizes = {
    sm: { width: '32px', height: '32px' },
    md: { width: '40px', height: '40px' },
    lg: { width: '48px', height: '48px' },
  };

  // Icon variant
  if (variant === 'icon') {
    return (
      <button
        onClick={handleToggle}
        className={isAnimating ? 'animate-scale' : ''}
        style={{
          ...buttonSizes[size],
          backgroundColor: isInWishlist
            ? 'var(--primary)'
            : 'var(--background)',
          color: isInWishlist
            ? 'var(--primary-foreground)'
            : 'var(--foreground)',
          border: `2px solid ${
            isInWishlist ? 'var(--primary)' : 'var(--border)'
          }`,
          borderRadius: 'var(--radius-full)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          if (!isInWishlist) {
            e.currentTarget.style.backgroundColor = 'var(--muted)';
            e.currentTarget.style.borderColor = 'var(--primary)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isInWishlist) {
            e.currentTarget.style.backgroundColor = 'var(--background)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }
        }}
        aria-label={
          isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'
        }
      >
        <Heart
          size={iconSizes[size]}
          fill={isInWishlist ? 'currentColor' : 'none'}
          strokeWidth={2}
        />
      </button>
    );
  }

  // Button variant
  if (variant === 'button') {
    return (
      <button
        onClick={handleToggle}
        className={`flex items-center gap-2 px-4 py-2 ${
          isAnimating ? 'animate-scale' : ''
        }`}
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          backgroundColor: isInWishlist
            ? 'var(--primary)'
            : 'var(--background)',
          color: isInWishlist
            ? 'var(--primary-foreground)'
            : 'var(--foreground)',
          border: `2px solid ${
            isInWishlist ? 'var(--primary)' : 'var(--border)'
          }`,
          borderRadius: 'var(--radius-lg)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          if (!isInWishlist) {
            e.currentTarget.style.backgroundColor = 'var(--muted)';
            e.currentTarget.style.borderColor = 'var(--primary)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isInWishlist) {
            e.currentTarget.style.backgroundColor = 'var(--background)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }
        }}
        aria-label={
          isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'
        }
      >
        <Heart
          size={iconSizes[size]}
          fill={isInWishlist ? 'currentColor' : 'none'}
          strokeWidth={2}
        />
        <span>
          {label ||
            (isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist')}
        </span>
      </button>
    );
  }

  // Compact variant (icon with label)
  return (
    <button
      onClick={handleToggle}
      className={`flex items-center gap-2 ${isAnimating ? 'animate-scale' : ''}`}
      style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-small)',
        fontWeight: 'var(--font-weight-medium)',
        color: isInWishlist ? 'var(--primary)' : 'var(--foreground)',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--primary)';
      }}
      onMouseLeave={(e) => {
        if (!isInWishlist) {
          e.currentTarget.style.color = 'var(--foreground)';
        }
      }}
      aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        size={iconSizes[size]}
        fill={isInWishlist ? 'currentColor' : 'none'}
        strokeWidth={2}
      />
      {showLabel && (
        <span>
          {label || (isInWishlist ? 'Saved' : 'Save')}
        </span>
      )}
    </button>
  );
}

/**
 * Wishlist Counter Badge
 * 
 * Shows total number of items in wishlist.
 */
export function WishlistCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      if (typeof window === 'undefined') return;
      
      try {
        const stored = localStorage.getItem(WISHLIST_KEY);
        const wishlist = stored ? JSON.parse(stored) : [];
        setCount(wishlist.length);
      } catch (error) {
        console.error('Error reading wishlist:', error);
      }
    };

    updateCount();

    // Listen for storage changes
    window.addEventListener('storage', updateCount);
    
    // Listen for custom wishlist update event
    window.addEventListener('wishlist-updated', updateCount);

    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('wishlist-updated', updateCount);
    };
  }, []);

  if (count === 0) return null;

  return (
    <span
      className="flex items-center justify-center"
      style={{
        position: 'absolute',
        top: '-6px',
        right: '-6px',
        width: '20px',
        height: '20px',
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-small)',
        fontWeight: 'var(--font-weight-bold)',
        backgroundColor: 'var(--destructive)',
        color: 'var(--destructive-foreground)',
        borderRadius: 'var(--radius-full)',
        border: '2px solid var(--background)',
      }}
    >
      {count > 99 ? '99+' : count}
    </span>
  );
}

/**
 * Wishlist utilities
 */
export const wishlistUtils = {
  getAll: (): WishlistItem[] => {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(WISHLIST_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading wishlist:', error);
      return [];
    }
  },

  add: (item: WishlistItem): void => {
    const wishlist = wishlistUtils.getAll();
    
    if (!wishlist.some(i => i.id === item.id)) {
      wishlist.push(item);
      
      try {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
        window.dispatchEvent(new Event('wishlist-updated'));
      } catch (error) {
        console.error('Error saving wishlist:', error);
      }
    }
  },

  remove: (itemId: string): void => {
    let wishlist = wishlistUtils.getAll();
    wishlist = wishlist.filter(item => item.id !== itemId);
    
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
      window.dispatchEvent(new Event('wishlist-updated'));
    } catch (error) {
      console.error('Error saving wishlist:', error);
    }
  },

  clear: (): void => {
    try {
      localStorage.removeItem(WISHLIST_KEY);
      window.dispatchEvent(new Event('wishlist-updated'));
    } catch (error) {
      console.error('Error clearing wishlist:', error);
    }
  },

  isInWishlist: (itemId: string): boolean => {
    const wishlist = wishlistUtils.getAll();
    return wishlist.some(item => item.id === itemId);
  },

  getCount: (): number => {
    return wishlistUtils.getAll().length;
  },
};
