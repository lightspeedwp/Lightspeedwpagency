/**
 * Product Archive Template
 * 
 * Displays a grid of WooCommerce products using the centralized mock data.
 * Demonstrates support for Simple, Subscription, Composite, and Bundle products.
 */

import '../../../styles/woocommerce/product-archive.css';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { allProducts } from '../../data/woocommerce';
import { ShoppingCart, Filter } from 'lucide-react';


export function ProductArchiveTemplate() {
  return (
    <>
      <div className="woocommerce-archive">
        <Container>
          <header className="woocommerce-products-header">
            <Heading level={1} className="woocommerce-products-header__title">Shop</Heading>
            <Paragraph className="woocommerce-products-header__description">
              Official plugins, themes, and services for your WordPress agency.
            </Paragraph>
          </header>

          <div className="wp-block-woocommerce-layout">
            {/* Sidebar Filters */}
            <aside className="wp-block-woocommerce-sidebar">
              <div className="woocommerce-widget">
                <Heading level={3} className="woocommerce-widget__title">
                  <Filter size={16} /> Filters
                </Heading>
                <div className="woocommerce-widget__list-item">
                  <Heading level={4} className="woocommerce-widget__subtitle">Product Type</Heading>
                  <ul className="woocommerce-widget__list">
                    <li className="woocommerce-widget__list-item">
                      <label className="woocommerce-widget__label">
                        <input type="checkbox" /> Simple Product
                      </label>
                    </li>
                    <li className="woocommerce-widget__list-item">
                      <label className="woocommerce-widget__label">
                        <input type="checkbox" /> Subscription
                      </label>
                    </li>
                    <li className="woocommerce-widget__list-item">
                      <label className="woocommerce-widget__label">
                        <input type="checkbox" /> Composite
                      </label>
                    </li>
                    <li className="woocommerce-widget__list-item">
                      <label className="woocommerce-widget__label">
                        <input type="checkbox" /> Bundle
                      </label>
                    </li>
                  </ul>
                </div>
                <div>
                  <Heading level={4} className="woocommerce-widget__subtitle">Price Range</Heading>
                  <input type="range" className="woocommerce-widget__range-input" />
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="wp-block-product-grid">
              {allProducts.map((product) => (
                <article key={product.id} className="wp-block-product-card">
                  <div className="wp-block-product-card__image-wrapper">
                    <img 
                      src={product.images[0]?.src} 
                      alt={product.images[0]?.alt}
                      className="wp-block-product-card__image"
                    />
                    {product.on_sale && (
                      <span className="wp-block-product-card__badge wp-block-product-card__badge--sale">Sale</span>
                    )}
                    <span className="wp-block-product-card__badge wp-block-product-card__badge--type">
                      {product.type.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <div className="wp-block-product-card__content">
                    <div className="wp-block-product-card__category">
                      {product.categories[0]?.name}
                    </div>
                    <Heading level={2} className="wp-block-product-card__title">{product.name}</Heading>
                    <div className="wp-block-product-card__excerpt" dangerouslySetInnerHTML={{ __html: product.short_description }} />
                    
                    <div className="wp-block-product-card__footer">
                      <div className="wp-block-product-card__price">
                        {product.sale_price ? (
                          <>
                            <del>${product.regular_price}</del>
                            <span>${product.sale_price}</span>
                          </>
                        ) : (
                          <span>${product.price}</span>
                        )}
                      </div>
                      <button className="wp-block-product-card__button" aria-label="Add to cart">
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}