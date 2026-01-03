/**
 * Shopping Cart Components
 * 
 * Features:
 * - Cart item with quantity controls
 * - Remove item button
 * - Cart summary with totals
 * - Empty cart state
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for headings/buttons
 * - Uses Manrope for text
 */

import { Product } from './ProductCard';

export interface CartItem extends Product {
  quantity: number;
}

export interface ShoppingCartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onCheckout?: () => void;
  currency?: string;
}

export function ShoppingCart({
  items,
  onUpdateQuantity,
  onRemove,
  onCheckout,
  currency = '$',
}: ShoppingCartProps) {
  const subtotal = items.reduce((sum, item) => {
    const price = item.salePrice || item.price;
    return sum + price * item.quantity;
  }, 0);

  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div
        style={{
          padding: '3rem',
          textAlign: 'center',
          color: 'var(--muted-foreground)',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
        <h3
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: '500',
            marginBottom: '0.5rem',
          }}
        >
          Your cart is empty
        </h3>
        <p style={{ fontFamily: 'Manrope, sans-serif' }}>
          Add some products to get started!
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Cart Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map((item) => (
          <CartItemRow
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
            currency={currency}
          />
        ))}
      </div>

      {/* Cart Summary */}
      <div
        style={{
          padding: '1.5rem',
          backgroundColor: 'var(--muted)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Manrope, sans-serif' }}>Subtotal</span>
            <span style={{ fontFamily: 'Lexend, sans-serif', fontWeight: '500' }}>
              {currency}{subtotal.toFixed(2)}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Manrope, sans-serif' }}>Tax</span>
            <span style={{ fontFamily: 'Lexend, sans-serif', fontWeight: '500' }}>
              {currency}{tax.toFixed(2)}
            </span>
          </div>
          <div
            style={{
              height: '1px',
              backgroundColor: 'var(--border)',
              margin: '0.5rem 0',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                fontWeight: '600',
              }}
            >
              Total
            </span>
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                fontWeight: '600',
              }}
            >
              {currency}{total.toFixed(2)}
            </span>
          </div>
        </div>

        {onCheckout && (
          <button
            onClick={onCheckout}
            style={{
              width: '100%',
              marginTop: '1.5rem',
              padding: '1rem',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: '500',
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              minHeight: '48px',
            }}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Cart Item Row
 */
interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  currency: string;
}

function CartItemRow({ item, onUpdateQuantity, onRemove, currency }: CartItemRowProps) {
  const price = item.salePrice || item.price;
  const itemTotal = price * item.quantity;

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',
          borderRadius: 'var(--radius)',
          flexShrink: 0,
        }}
      />

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '500',
            margin: 0,
          }}
        >
          {item.name}
        </h4>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-lg)',
              fontWeight: '600',
              color: item.salePrice ? 'var(--destructive)' : 'var(--foreground)',
            }}
          >
            {currency}{price.toFixed(2)}
          </span>
          {item.salePrice && (
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
                textDecoration: 'line-through',
              }}
            >
              {currency}{item.price.toFixed(2)}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
          {/* Quantity Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
              }}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: '500',
                minWidth: '32px',
                textAlign: 'center',
              }}
            >
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
              }}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Item Total */}
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: '600',
              marginLeft: 'auto',
            }}
          >
            {currency}{itemTotal.toFixed(2)}
          </span>

          {/* Remove Button */}
          <button
            onClick={() => onRemove(item.id)}
            style={{
              padding: '0.5rem',
              backgroundColor: 'transparent',
              color: 'var(--muted-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              fontSize: '1.25rem',
            }}
            aria-label="Remove item"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
