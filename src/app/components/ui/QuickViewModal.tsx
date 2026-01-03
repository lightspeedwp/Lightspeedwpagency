/**
 * Quick View Modal Component
 * 
 * Production-grade quick view modal for products, portfolio items, etc.
 * 
 * Features:
 * - Full-screen overlay
 * - Image gallery
 * - Product details
 * - Add to cart/wishlist
 * - Keyboard navigation (ESC to close)
 * - Focus trap
 * - Smooth animations
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <QuickViewModal
 *   isOpen={isOpen}
 *   onClose={handleClose}
 *   item={selectedItem}
 * />
 */

import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, ShoppingCart, ExternalLink } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';
import { useFocusTrap } from '../../hooks/useFocusTrap';

export interface QuickViewItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  originalPrice?: string;
  images: string[];
  badge?: string;
  rating?: number;
  reviewCount?: number;
  features?: string[];
  inStock?: boolean;
  url?: string;
}

export interface QuickViewModalProps {
  /** Modal open state */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Item to display */
  item: QuickViewItem;
  /** Add to cart handler */
  onAddToCart?: (itemId: string) => void;
  /** Add to wishlist handler */
  onAddToWishlist?: (itemId: string) => void;
  /** View full details handler */
  onViewDetails?: (itemId: string) => void;
}

export function QuickViewModal({
  isOpen,
  onClose,
  item,
  onAddToCart,
  onAddToWishlist,
  onViewDetails,
}: QuickViewModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Focus trap
  useFocusTrap(modalRef, isOpen);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset image index when item changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setImageLoaded(false);
  }, [item.id]);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === item.images.length - 1 ? 0 : prev + 1
    );
    setImageLoaded(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    );
    setImageLoaded(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl"
        style={{
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          maxHeight: '90vh',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10"
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-full)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--destructive)';
            e.currentTarget.style.color = 'var(--destructive-foreground)';
            e.currentTarget.style.borderColor = 'var(--destructive)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--background)';
            e.currentTarget.style.color = 'var(--foreground)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
          aria-label="Close quick view"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8 overflow-y-auto" style={{ maxHeight: '90vh' }}>
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div
              className="relative mb-4"
              style={{
                backgroundColor: 'var(--muted)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                aspectRatio: '1',
              }}
            >
              {!imageLoaded && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--muted)',
                  }}
                >
                  <div
                    className="animate-spin"
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '4px solid var(--border)',
                      borderTopColor: 'var(--primary)',
                      borderRadius: '50%',
                    }}
                  />
                </div>
              )}

              <img
                src={item.images[currentImageIndex]}
                alt={`${item.name} - Image ${currentImageIndex + 1}`}
                onLoad={() => setImageLoaded(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Navigation Arrows */}
              {item.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'var(--background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-full)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'var(--background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-full)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Badge */}
              {item.badge && (
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-semibold)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {item.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setImageLoaded(false);
                    }}
                    style={{
                      width: '80px',
                      height: '80px',
                      border: `2px solid ${
                        index === currentImageIndex
                          ? 'var(--primary)'
                          : 'var(--border)'
                      }`,
                      borderRadius: 'var(--radius)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                    }}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${item.name} thumbnail ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            {/* Title */}
            <h2
              id="quick-view-title"
              className="mb-2"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
              {item.name}
            </h2>

            {/* Rating */}
            {item.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color:
                          i < Math.floor(item.rating!)
                            ? 'var(--warning)'
                            : 'var(--muted-foreground)',
                        fontSize: 'var(--text-base)',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {item.reviewCount && (
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    ({item.reviewCount} reviews)
                  </span>
                )}
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--primary)',
                }}
              >
                {item.price}
              </span>
              {item.originalPrice && (
                <span
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    textDecoration: 'line-through',
                  }}
                >
                  {item.originalPrice}
                </span>
              )}
            </div>

            {/* Stock Status */}
            {item.inStock !== undefined && (
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-medium)',
                    backgroundColor: item.inStock
                      ? 'var(--success-soft)'
                      : 'var(--destructive-soft)',
                    color: item.inStock
                      ? 'var(--success)'
                      : 'var(--destructive)',
                    borderRadius: 'var(--radius)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: item.inStock
                        ? 'var(--success)'
                        : 'var(--destructive)',
                      borderRadius: '50%',
                    }}
                  />
                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            )}

            {/* Description */}
            {item.description && (
              <p
                className="mb-6"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--foreground)',
                  lineHeight: '1.6',
                }}
              >
                {item.description}
              </p>
            )}

            {/* Features */}
            {item.features && item.features.length > 0 && (
              <div className="mb-6">
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    margin: 0,
                  }}
                >
                  Key Features
                </h3>
                <ul className="space-y-2" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2"
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--foreground)',
                      }}
                    >
                      <span style={{ color: 'var(--primary)', marginTop: '2px' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="mt-auto pt-6 space-y-3">
              <div className="flex gap-3">
                {onAddToCart && (
                  <Button
                    variant="default"
                    onClick={() => onAddToCart(item.id)}
                    className="flex-1"
                    disabled={item.inStock === false}
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </Button>
                )}

                {onAddToWishlist && (
                  <button
                    onClick={() => onAddToWishlist(item.id)}
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'var(--background)',
                      color: 'var(--foreground)',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--background)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                    aria-label="Add to wishlist"
                  >
                    <Heart size={20} />
                  </button>
                )}
              </div>

              {onViewDetails && item.url && (
                <Button
                  variant="outline"
                  onClick={() => onViewDetails(item.id)}
                  className="w-full"
                >
                  <ExternalLink size={20} />
                  View Full Details
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
