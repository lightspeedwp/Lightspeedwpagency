/**
 * Single Product Template
 * 
 * Handles all WooCommerce product types:
 * - Simple
 * - Subscription
 * - Composite
 * - Bundle
 */

import { Container } from '@/app/components/common/Container';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { Heading } from '@/app/components/common/Heading';
import { Paragraph } from '@/app/components/blocks/text/Paragraph';
import { allProducts } from '@/app/data/woocommerce';
import { ShoppingCart, Check, RefreshCw, Layers, Box } from 'lucide-react';
import '@/styles/woocommerce/single-product.css';

export function SingleProductTemplate({ slug = 'lsx-theme-pro' }: { slug?: string }) {
  const product = allProducts.find(p => p.slug === slug) || allProducts[0];
  
  // Render different pricing/add-to-cart sections based on type
  const renderAddToCart = () => {
    switch (product.type) {
      case 'subscription':
        return (
          <div className="woocommerce-pricing-box">
            <div className="woocommerce-pricing-box__header">
              <RefreshCw size={20} />
              <span>Subscription Plan</span>
            </div>
            <div className="woocommerce-pricing-box__price">
              ${product.meta_data.find(m => m.key === '_subscription_price')?.value} 
              <span className="woocommerce-product-summary__meta--inline">/ month</span>
            </div>
            <p className="woocommerce-product-summary__meta woocommerce-product-summary__meta--spacing">
              Sign up fee: ${product.meta_data.find(m => m.key === '_subscription_sign_up_fee')?.value}
            </p>
            <button className="woocommerce-pricing-box__button">
              Sign Up Now
            </button>
          </div>
        );
      case 'bundle':
        return (
          <div className="woocommerce-pricing-box">
            <div className="woocommerce-pricing-box__header">
              <Box size={20} />
              <span>Bundle Deal</span>
            </div>
            <div className="woocommerce-product-summary__description woocommerce-product-summary__description--base">
              <Paragraph className="woocommerce-bundle-includes-label">Includes:</Paragraph>
              <ul className="woocommerce-bundle-list">
                <li className="woocommerce-bundle-list-item">
                  <Check size={16} className="woocommerce-bundle-list-icon" /> LSX Theme Pro
                </li>
                <li className="woocommerce-bundle-list-item">
                  <Check size={16} className="woocommerce-bundle-list-icon" /> All Extensions
                </li>
                <li className="woocommerce-bundle-list-item">
                  <Check size={16} className="woocommerce-bundle-list-icon" /> Priority Support
                </li>
              </ul>
            </div>
            <div className="woocommerce-pricing-box__price">
              <span>${product.sale_price}</span>
              <del>${product.regular_price}</del>
            </div>
            <button className="woocommerce-pricing-box__button">
              Add Bundle to Cart
            </button>
          </div>
        );
      case 'composite':
        return (
          <div className="woocommerce-pricing-box">
            <div className="woocommerce-pricing-box__header">
              <Layers size={20} />
              <span>Configurable Product</span>
            </div>
            <div className="woocommerce-product-attributes woocommerce-composite-attributes">
              <div className="woocommerce-composite-field">
                <label className="woocommerce-composite-label">Step 1: Choose Theme</label>
                <select className="woocommerce-composite-select">
                  <option>LSX Theme Pro (+$49)</option>
                  <option>Standard Theme (Free)</option>
                </select>
              </div>
              <div className="woocommerce-composite-field">
                <label className="woocommerce-composite-label">Step 2: Select Support</label>
                <select className="woocommerce-composite-select">
                  <option>None</option>
                  <option>Monthly Maintenance (+$199)</option>
                </select>
              </div>
            </div>
            <div className="woocommerce-pricing-box__price">From ${product.price}</div>
            <button className="woocommerce-pricing-box__button">
              Build Configuration
            </button>
          </div>
        );
      default:
        return (
          <div className="woocommerce-pricing-box">
            <div className="woocommerce-pricing-box__price">${product.price}</div>
            <button className="woocommerce-pricing-box__button">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        );
    }
  };

  return (
    <>
      <div className="woocommerce-product">
        <Container>
          <section style={{ marginBottom: 'var(--spacing-8)' }}>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '/shop' },
                { label: product.name }
              ]}
            />
          </section>

          <div className="woocommerce-product__layout">
            {/* Product Gallery */}
            <div className="woocommerce-product-gallery">
              <div className="woocommerce-product-gallery__main">
                <img 
                  src={product.images[0]?.src} 
                  alt={product.images[0]?.alt} 
                  className="woocommerce-product-gallery__image"
                />
              </div>
              {/* Thumbnails placeholder */}
              <div className="woocommerce-product-gallery__thumbs">
                {[1,2,3].map(i => (
                  <div key={i} className="woocommerce-product-gallery__thumb"></div>
                ))}
              </div>
            </div>

            {/* Product Summary */}
            <div className="woocommerce-product-summary">
              <Heading level={1} className="woocommerce-product-summary__title">{product.name}</Heading>
              <div className="woocommerce-product-summary__meta">
                <span className="woocommerce-product-summary__type">
                  {product.type}
                </span>
                <span>SKU: {product.sku}</span>
              </div>

              <div className="woocommerce-product-summary__description" dangerouslySetInnerHTML={{ __html: product.short_description }} />

              <div className="woocommerce-product-summary__cart">
                {renderAddToCart()}
              </div>

              <div className="woocommerce-product-attributes">
                <div className="woocommerce-product-attribute">
                  <span className="woocommerce-product-attribute__label">Categories:</span>
                  <span className="woocommerce-product-attribute__value">{product.categories.map(c => c.name).join(', ')}</span>
                </div>
                <div className="woocommerce-product-attribute">
                  <span className="woocommerce-product-attribute__label">Tags:</span>
                  <span className="woocommerce-product-attribute__value">{product.tags.map(t => t.name).join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs / Description */}
          <div className="woocommerce-tabs">
            <div className="woocommerce-tabs__nav">
              <button className="woocommerce-tabs__link woocommerce-tabs__link--active">Description</button>
              <button className="woocommerce-tabs__link">Additional Information</button>
              <button className="woocommerce-tabs__link">Reviews ({product.rating_count})</button>
            </div>
            <div className="woocommerce-tabs__content" dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        </Container>
      </div>
    </>
  );
}
