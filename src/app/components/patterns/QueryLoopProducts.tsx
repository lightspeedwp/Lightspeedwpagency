/**
 * Query Loop — WooCommerce Products
 *
 * WordPress pattern: woocommerce/product-query
 *
 * Renders products with images, prices, sale badges, and stock status.
 *
 * @see /src/styles/patterns/query-loop.css
 */

import { ShoppingCart, Tag } from 'lucide-react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import type { WooProduct } from '../../data/woocommerce';

export interface QueryLoopProductsProps {
  products: WooProduct[];
  heading?: string;
  description?: string;
  columns?: 2 | 3 | 4;
}

export function QueryLoopProducts({
  products,
  heading = 'Products',
  description,
  columns = 3,
}: QueryLoopProductsProps) {
  const { containerRef, itemStyle } = useStaggerReveal({
    animation: 'fade-up',
    stagger: 60,
  });

  return (
    <QueryLoop
      heading={heading}
      description={description}
      columns={columns}
      isEmpty={products.length === 0}
      emptyMessage="No products found."
    >
      {products.map((product, index) => {
        const imageUrl = (product as any).images?.[0]?.src
          || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop';

        return (
          <Link
            key={product.id}
            to={`/shop/${product.slug}`}
            className="query-loop-card query-loop-card--clickable"
            ref={index === 0 ? containerRef as any : undefined}
            style={itemStyle(index)}
            aria-label={`View product: ${product.name}`}
          >
            <div className="query-loop-card__image-wrapper">
              <img
                src={imageUrl}
                alt={product.name}
                className="query-loop-card__image"
                loading="lazy"
              />
              {product.on_sale && (
                <span className="query-loop-card__duration">
                  <Tag size={10} /> Sale
                </span>
              )}
            </div>

            <div className="query-loop-card__body">
              <h3 className="query-loop-card__title">{product.name}</h3>
              <p className="query-loop-card__excerpt">{product.short_description}</p>

              <div className="query-loop-card__footer" style={{ border: 'none', padding: 0 }}>
                <div className="query-loop-card__price">
                  {product.on_sale && product.sale_price ? (
                    <>
                      <span style={{ textDecoration: 'line-through', color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                        ${product.regular_price}
                      </span>{' '}
                      ${product.sale_price}
                    </>
                  ) : (
                    <>
                      <span className="query-loop-card__price-from">From </span>
                      ${product.price}
                    </>
                  )}
                </div>
                <ShoppingCart size={18} style={{ color: 'var(--primary)' }} />
              </div>
            </div>
          </Link>
        );
      })}
    </QueryLoop>
  );
}
