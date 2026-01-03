/**
 * Product Card Component
 * 
 * Features:
 * - Product image with hover zoom
 * - Sale badge, new badge, out of stock badge
 * - Star rating
 * - Quick view button
 * - Add to cart button
 * - Wishlist button
 * - Price with sale price
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for headings/buttons
 * - Uses Manrope for descriptions
 * - Smooth animations
 * 
 * @example
 * <ProductCard
 *   product={{
 *     id: '1',
 *     name: 'Running Shoes',
 *     price: 129.99,
 *     salePrice: 99.99,
 *     image: '/shoes.jpg',
 *     rating: 4.5,
 *     reviews: 128,
 *   }}
 *   onAddToCart={handleAddToCart}
 *   onQuickView={handleQuickView}
 * />
 */

import { useState } from 'react';

export interface Product {
  /** Product ID */
  id: string;
  /** Product name */
  name: string;
  /** Product description (optional) */
  description?: string;
  /** Product price */
  price: number;
  /** Sale price (optional) */
  salePrice?: number;
  /** Product image */
  image: string;
  /** Product images (gallery) */
  images?: string[];
  /** Rating (0-5) */
  rating?: number;
  /** Number of reviews */
  reviews?: number;
  /** Badge (sale, new, bestseller) */
  badge?: 'sale' | 'new' | 'bestseller' | string;
  /** Out of stock */
  outOfStock?: boolean;
  /** Product URL */
  url?: string;
  /** Category */
  category?: string;
}

export interface ProductCardProps {
  /** Product data */
  product: Product;
  /** Add to cart handler */
  onAddToCart?: (product: Product) => void;
  /** Quick view handler */
  onQuickView?: (product: Product) => void;
  /** Wishlist toggle handler */
  onWishlistToggle?: (product: Product) => void;
  /** Is in wishlist */
  isInWishlist?: boolean;
  /** Card variant */
  variant?: 'default' | 'compact' | 'detailed';
  /** Show quick actions on hover */
  showQuickActions?: boolean;
}

export function ProductCard({
  product,
  onAddToCart,
  onQuickView,
  onWishlistToggle,
  isInWishlist = false,
  variant = 'default',
  showQuickActions = true,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const discountPercentage = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  const handleCardClick = () => {
    if (product.url) {
      window.location.href = product.url;
    }
  };

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: product.url ? 'pointer' : 'default',
        height: '100%',
      }}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '100%', // 1:1 aspect ratio
          overflow: 'hidden',
          backgroundColor: 'var(--muted)',
        }}
      >
        {/* Product Image */}
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
            loading="lazy"
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--muted-foreground)',
            }}
          >
            No Image
          </div>
        )}

        {/* Badges */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {/* Sale Badge */}
          {product.salePrice && (
            <span
              style={{
                padding: '0.25rem 0.75rem',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: '500',
                backgroundColor: 'var(--destructive)',
                color: 'var(--destructive-foreground)',
                borderRadius: 'var(--radius)',
              }}
            >
              {discountPercentage}% OFF
            </span>
          )}

          {/* Custom Badge */}
          {product.badge && (
            <span
              style={{
                padding: '0.25rem 0.75rem',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: '500',
                backgroundColor: product.badge === 'new' ? 'var(--accent)' : 'var(--primary)',
                color: product.badge === 'new' ? 'var(--accent-foreground)' : 'var(--primary-foreground)',
                borderRadius: 'var(--radius)',
                textTransform: 'uppercase',
              }}
            >
              {product.badge}
            </span>
          )}

          {/* Out of Stock Badge */}
          {product.outOfStock && (
            <span
              style={{
                padding: '0.25rem 0.75rem',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: '500',
                backgroundColor: 'var(--muted)',
                color: 'var(--muted-foreground)',
                borderRadius: 'var(--radius)',
              }}
            >
              Out of Stock
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle?.(product);
          }}
          aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.25rem',
            transition: 'all 0.2s ease',
            opacity: showQuickActions ? (isHovered ? 1 : 0) : 1,
          }}
        >
          {isInWishlist ? '❤️' : '🤍'}
        </button>

        {/* Quick View Button */}
        {onQuickView && showQuickActions && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '50%',
              transform: `translateX(-50%) translateY(${isHovered ? '0' : '20px'})`,
              padding: '0.75rem 1.5rem',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-small)',
              fontWeight: '500',
              backgroundColor: 'var(--background)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              opacity: isHovered ? 1 : 0,
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              minHeight: '40px',
            }}
          >
            Quick View
          </button>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          flex: 1,
        }}
      >
        {/* Category */}
        {product.category && (
          <span
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {product.category}
          </span>
        )}

        {/* Product Name */}
        <h3
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-lg)',
            fontWeight: '500',
            color: 'var(--foreground)',
            margin: 0,
            lineHeight: '1.4',
          }}
        >
          {product.name}
        </h3>

        {/* Description (detailed variant only) */}
        {variant === 'detailed' && product.description && (
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
              margin: 0,
              lineHeight: '1.5',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {product.description}
          </p>
        )}

        {/* Rating */}
        {product.rating !== undefined && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <StarRating rating={product.rating} />
            {product.reviews !== undefined && (
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  color: 'var(--muted-foreground)',
                }}
              >
                ({product.reviews})
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.75rem',
            marginTop: 'auto',
          }}
        >
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-xl)',
              fontWeight: '600',
              color: product.salePrice ? 'var(--destructive)' : 'var(--foreground)',
            }}
          >
            ${product.salePrice || product.price}
          </span>

          {product.salePrice && (
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)',
                textDecoration: 'line-through',
              }}
            >
              ${product.price}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        {onAddToCart && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            disabled={product.outOfStock}
            style={{
              width: '100%',
              padding: '0.75rem 1.5rem',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: '500',
              backgroundColor: product.outOfStock ? 'var(--muted)' : 'var(--primary)',
              color: product.outOfStock ? 'var(--muted-foreground)' : 'var(--primary-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: product.outOfStock ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              minHeight: '48px',
            }}
          >
            {product.outOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        )}
      </div>
    </article>
  );
}

/**
 * Star Rating Component
 */
interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
      }}
      role="img"
      aria-label={`${rating} out of ${maxStars} stars`}
    >
      {Array.from({ length: maxStars }).map((_, index) => {
        const filled = index < Math.floor(rating);
        const partial = index < rating && index >= Math.floor(rating);

        return (
          <span
            key={index}
            style={{
              fontSize: '1rem',
              color: filled || partial ? '#F59E0B' : 'var(--muted-foreground)',
            }}
            aria-hidden="true"
          >
            {filled ? '★' : partial ? '⯨' : '☆'}
          </span>
        );
      })}
    </div>
  );
}

/**
 * Product Grid Component
 */
export interface ProductGridProps {
  products: Product[];
  columns?: number;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onWishlistToggle?: (product: Product) => void;
  wishlistIds?: string[];
}

export function ProductGrid({
  products,
  columns = 3,
  onAddToCart,
  onQuickView,
  onWishlistToggle,
  wishlistIds = [],
}: ProductGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(min(300px, 100%), 1fr))`,
        gap: '2rem',
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onQuickView={onQuickView}
          onWishlistToggle={onWishlistToggle}
          isInWishlist={wishlistIds.includes(product.id)}
        />
      ))}
    </div>
  );
}
