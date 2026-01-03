/**
 * Product Grid Component
 * 
 * Production-grade product grid with cards and hover effects.
 * 
 * Features:
 * - Responsive grid layout
 * - Product cards with images
 * - Quick actions (wishlist, quick view, compare)
 * - Badge system (sale, new, featured)
 * - Price display with discounts
 * - Rating display
 * - Hover effects
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <ProductGrid
 *   products={products}
 *   onQuickView={handleQuickView}
 *   onAddToWishlist={handleWishlist}
 * />
 */

import { useState } from 'react';
import { Heart, Eye, Scale, ShoppingCart, Star } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  badge?: 'sale' | 'new' | 'featured';
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
}

export interface ProductGridProps {
  /** Products array */
  products: Product[];
  /** Grid columns */
  columns?: 2 | 3 | 4;
  /** Quick view handler */
  onQuickView?: (product: Product) => void;
  /** Add to wishlist handler */
  onAddToWishlist?: (productId: string) => void;
  /** Add to compare handler */
  onAddToCompare?: (productId: string) => void;
  /** Add to cart handler */
  onAddToCart?: (productId: string) => void;
  /** Click handler */
  onProductClick?: (product: Product) => void;
}

export function ProductGrid({
  products,
  columns = 3,
  onQuickView,
  onAddToWishlist,
  onAddToCompare,
  onAddToCart,
  onProductClick,
}: ProductGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const getBadgeStyle = (badge: 'sale' | 'new' | 'featured') => {
    switch (badge) {
      case 'sale':
        return {
          backgroundColor: 'var(--destructive)',
          color: 'var(--destructive-foreground)',
        };
      case 'new':
        return {
          backgroundColor: 'var(--success)',
          color: 'var(--success-foreground)',
        };
      case 'featured':
        return {
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
        };
    }
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
          onAddToWishlist={onAddToWishlist}
          onAddToCompare={onAddToCompare}
          onAddToCart={onAddToCart}
          onProductClick={onProductClick}
          formatPrice={formatPrice}
          getBadgeStyle={getBadgeStyle}
        />
      ))}
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onAddToWishlist?: (productId: string) => void;
  onAddToCompare?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
  onProductClick?: (product: Product) => void;
  formatPrice: (price: number) => string;
  getBadgeStyle: (badge: 'sale' | 'new' | 'featured') => any;
}

function ProductCard({
  product,
  onQuickView,
  onAddToWishlist,
  onAddToCompare,
  onAddToCart,
  onProductClick,
  formatPrice,
  getBadgeStyle,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: onProductClick ? 'pointer' : 'default',
      }}
      onClick={() => onProductClick && onProductClick(product)}
    >
      {/* Image Container */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: '1',
          backgroundColor: 'var(--muted)',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />

        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-3 left-3 px-3 py-1"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-small)',
              fontWeight: 'var(--font-weight-semibold)',
              borderRadius: 'var(--radius)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              ...getBadgeStyle(product.badge),
            }}
          >
            {product.badge}
            {product.badge === 'sale' && discount > 0 && ` -${discount}%`}
          </div>
        )}

        {/* Stock Status */}
        {product.inStock === false && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <span
              className="px-4 py-2"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                backgroundColor: 'var(--destructive)',
                color: 'var(--destructive-foreground)',
                borderRadius: 'var(--radius)',
              }}
            >
              Out of Stock
            </span>
          </div>
        )}

        {/* Quick Actions (hover overlay) */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-2"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
        >
          {onQuickView && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="p-3"
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--background)';
                e.currentTarget.style.color = 'var(--foreground)';
              }}
              aria-label="Quick view"
            >
              <Eye size={20} />
            </button>
          )}

          {onAddToWishlist && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToWishlist(product.id);
              }}
              className="p-3"
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--background)';
                e.currentTarget.style.color = 'var(--foreground)';
              }}
              aria-label="Add to wishlist"
            >
              <Heart size={20} />
            </button>
          )}

          {onAddToCompare && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCompare(product.id);
              }}
              className="p-3"
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--background)';
                e.currentTarget.style.color = 'var(--foreground)';
              }}
              aria-label="Add to compare"
            >
              <Scale size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        {product.rating !== undefined && (
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(product.rating!) ? 'var(--warning)' : 'none'}
                  stroke={i < Math.floor(product.rating!) ? 'var(--warning)' : 'var(--border)'}
                />
              ))}
            </div>

            {product.reviewCount !== undefined && (
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  color: 'var(--muted-foreground)',
                }}
              >
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Name */}
        <h3
          className="mb-3"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)',
            margin: 0,
            lineHeight: '1.4',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-lg)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--primary)',
            }}
          >
            {formatPrice(product.price)}
          </span>

          {product.originalPrice && (
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)',
                textDecoration: 'line-through',
              }}
            >
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        {onAddToCart && product.inStock !== false && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product.id);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              border: 'none',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Product Grid Empty State
 */
export function ProductGridEmpty({ message = 'No products found' }: { message?: string }) {
  return (
    <div
      className="text-center p-12"
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
      }}
    >
      <div
        className="mb-6 mx-auto flex items-center justify-center"
        style={{
          width: '80px',
          height: '80px',
          backgroundColor: 'var(--muted)',
          borderRadius: '50%',
        }}
      >
        <ShoppingCart size={40} style={{ color: 'var(--muted-foreground)' }} />
      </div>

      <h3
        className="mb-2"
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h4)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--foreground)',
          margin: 0,
        }}
      >
        {message}
      </h3>

      <p
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)',
          margin: 0,
        }}
      >
        Try adjusting your filters or search criteria
      </p>
    </div>
  );
}
