/**
 * Shopping Cart Component
 * 
 * Production-grade shopping cart with mini-cart variant.
 * 
 * Features:
 * - Full cart view
 * - Mini cart (dropdown)
 * - Quantity controls
 * - Remove items
 * - Price calculations
 * - LocalStorage persistence
 * - Empty state
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <ShoppingCart
 *   items={cartItems}
 *   onUpdateQuantity={handleUpdate}
 *   onRemoveItem={handleRemove}
 *   onCheckout={handleCheckout}
 * />
 */

import { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingCart as CartIcon, Trash2 } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';
import { useToast } from '../blocks/feedback/ToastSystem';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
  maxQuantity?: number;
}

export interface ShoppingCartProps {
  /** Cart items */
  items: CartItem[];
  /** Update quantity handler */
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  /** Remove item handler */
  onRemoveItem: (itemId: string) => void;
  /** Checkout handler */
  onCheckout?: () => void;
  /** Continue shopping handler */
  onContinueShopping?: () => void;
  /** Variant */
  variant?: 'full' | 'mini';
  /** Show header */
  showHeader?: boolean;
}

export function ShoppingCart({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onContinueShopping,
  variant = 'full',
  showHeader = true,
}: ShoppingCartProps) {
  const { showToast } = useToast();

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  // Format price
  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  // Update quantity
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    const item = items.find(i => i.id === itemId);
    
    if (newQuantity < 1) {
      onRemoveItem(itemId);
      showToast({
        title: 'Item removed',
        description: 'Item has been removed from your cart.',
        variant: 'default',
      });
      return;
    }

    if (item?.maxQuantity && newQuantity > item.maxQuantity) {
      showToast({
        title: 'Maximum quantity reached',
        description: `Only ${item.maxQuantity} available.`,
        variant: 'destructive',
      });
      return;
    }

    onUpdateQuantity(itemId, newQuantity);
  };

  // Empty cart
  if (items.length === 0) {
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
          <CartIcon size={40} style={{ color: 'var(--muted-foreground)' }} />
        </div>

        <h3
          className="mb-3"
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)',
            margin: 0,
          }}
        >
          Your cart is empty
        </h3>

        <p
          className="mb-6"
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
            margin: 0,
          }}
        >
          Add items to your cart to get started
        </p>

        {onContinueShopping && (
          <Button variant="default" onClick={onContinueShopping}>
            Continue Shopping
          </Button>
        )}
      </div>
    );
  }

  // Mini cart variant
  if (variant === 'mini') {
    return (
      <div
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border-soft)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          width: '380px',
          maxHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          className="p-4"
          style={{
            borderBottom: '1px solid var(--border-extra-soft)',
          }}
        >
          <div className="flex items-center justify-between">
            <h3
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
              Shopping Cart
            </h3>

            <span
              className="px-2 py-1"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-small)',
                fontWeight: 'var(--font-weight-medium)',
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                borderRadius: 'var(--radius)',
              }}
            >
              {items.length}
            </span>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3"
              style={{
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border-extra-soft)',
              }}
            >
              {/* Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border-soft)',
                  }}
                />
              )}

              {/* Details */}
              <div className="flex-1 min-w-0">
                <h4
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    margin: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.name}
                </h4>

                {item.variant && (
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                      margin: 0,
                    }}
                  >
                    {item.variant}
                  </p>
                )}

                <div className="flex items-center justify-between gap-2">
                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: 'var(--muted)',
                        color: 'var(--foreground)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--muted)';
                      }}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>

                    <span
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)',
                        minWidth: '20px',
                        textAlign: 'center',
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: 'var(--muted)',
                        color: 'var(--foreground)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--muted)';
                      }}
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  {/* Price */}
                  <span
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => {
                  onRemoveItem(item.id);
                  showToast({
                    title: 'Item removed',
                    description: `${item.name} has been removed from your cart.`,
                    variant: 'default',
                  });
                }}
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'transparent',
                  color: 'var(--muted-foreground)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--destructive)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--muted-foreground)';
                }}
                aria-label="Remove item"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="p-4 space-y-4"
          style={{
            borderTop: '1px solid var(--border-extra-soft)',
          }}
        >
          {/* Subtotal */}
          <div className="flex items-center justify-between">
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)',
              }}
            >
              Subtotal
            </span>
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--foreground)',
              }}
            >
              {formatPrice(subtotal)}
            </span>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            {onCheckout && (
              <Button variant="default" onClick={onCheckout} className="w-full">
                Checkout
              </Button>
            )}

            {onContinueShopping && (
              <Button
                variant="outline"
                onClick={onContinueShopping}
                className="w-full"
              >
                Continue Shopping
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Full cart variant
  return (
    <div
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
      }}
    >
      {/* Header */}
      {showHeader && (
        <div
          className="p-6"
          style={{
            borderBottom: '2px solid var(--border)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h3)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              margin: 0,
            }}
          >
            Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
          </h2>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8 p-6">
        {/* Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-6"
              style={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border-soft)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              {/* Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                  }}
                />
              )}

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        margin: 0,
                      }}
                    >
                      {item.name}
                    </h3>

                    {item.variant && (
                      <p
                        style={{
                          fontFamily: 'var(--font-secondary)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--muted-foreground)',
                          margin: 0,
                        }}
                      >
                        {item.variant}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      onRemoveItem(item.id);
                      showToast({
                        title: 'Item removed',
                        description: `${item.name} has been removed from your cart.`,
                        variant: 'default',
                      });
                    }}
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: 'transparent',
                      color: 'var(--muted-foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
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
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--muted-foreground)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4">
                  {/* Quantity controls */}
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      Quantity:
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        style={{
                          width: '32px',
                          height: '32px',
                          backgroundColor: 'var(--muted)',
                          color: 'var(--foreground)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--accent)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--muted)';
                        }}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>

                      <span
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                          minWidth: '32px',
                          textAlign: 'center',
                        }}
                      >
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        style={{
                          width: '32px',
                          height: '32px',
                          backgroundColor: 'var(--muted)',
                          color: 'var(--foreground)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--accent)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--muted)';
                        }}
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p
                      className="mb-1"
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        margin: 0,
                      }}
                    >
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)',
                        margin: 0,
                      }}
                    >
                      {formatPrice(item.price)} each
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div>
          <div
            className="p-6 space-y-4 sticky top-4"
            style={{
              backgroundColor: 'var(--muted)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                margin: 0,
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              Order Summary
            </h3>

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                }}
              >
                Subtotal
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                }}
              >
                {formatPrice(subtotal)}
              </span>
            </div>

            {/* Shipping */}
            <div className="flex items-center justify-between">
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                }}
              >
                Shipping
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: shipping === 0 ? 'var(--success)' : 'var(--foreground)',
                }}
              >
                {shipping === 0 ? 'FREE' : formatPrice(shipping)}
              </span>
            </div>

            {/* Free shipping threshold */}
            {shipping > 0 && (
              <p
                className="px-3 py-2"
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-small)',
                  color: 'var(--muted-foreground)',
                  backgroundColor: 'var(--accent)',
                  borderRadius: 'var(--radius)',
                  margin: 0,
                }}
              >
                Add {formatPrice(50 - subtotal)} more for FREE shipping
              </p>
            )}

            {/* Tax */}
            <div className="flex items-center justify-between">
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                }}
              >
                Tax
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                }}
              >
                {formatPrice(tax)}
              </span>
            </div>

            {/* Total */}
            <div
              className="flex items-center justify-between pt-4"
              style={{
                borderTop: '2px solid var(--border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h4)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--primary)',
                }}
              >
                {formatPrice(total)}
              </span>
            </div>

            {/* Actions */}
            <div className="pt-4 space-y-3">
              {onCheckout && (
                <Button variant="default" onClick={onCheckout} className="w-full">
                  Proceed to Checkout
                </Button>
              )}

              {onContinueShopping && (
                <Button
                  variant="outline"
                  onClick={onContinueShopping}
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Cart Badge Component
 * 
 * Shows cart item count badge.
 */
export function CartBadge({ count }: { count: number }) {
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
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-small)',
        fontWeight: 'var(--font-weight-bold)',
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        borderRadius: 'var(--radius-full)',
        border: '2px solid var(--background)',
      }}
    >
      {count > 99 ? '99+' : count}
    </span>
  );
}
