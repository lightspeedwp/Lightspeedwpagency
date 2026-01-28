/**
 * Product Archive Template
 * 
 * Displays a grid of WooCommerce products using the centralized mock data.
 * Demonstrates support for Simple, Subscription, Composite, and Bundle products.
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { allProducts } from '../../data/woocommerce';
import { ShoppingCart, Tag, Filter } from 'lucide-react';

export function ProductArchiveTemplate() {
  return (
    <>
      <SiteHeader />
      <main className="fluid-py-lg">
        <Container>
          <header className="wp-block-header fluid-mb-xl wp-text-center">
            <h1 style={{ fontSize: 'var(--text-h1)', marginBottom: 'var(--spacing-4)' }}>Shop</h1>
            <p style={{ fontSize: 'var(--text-lead)', color: 'var(--muted-foreground)' }}>
              Official plugins, themes, and services for your WordPress agency.
            </p>
          </header>

          <div className="wp-grid-columns" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: 'var(--spacing-8)' }}>
            {/* Sidebar Filters */}
            <aside className="wp-block-sidebar" style={{ display: 'none', md: { display: 'block' } }}>
              <div style={{ padding: 'var(--spacing-6)', background: 'var(--card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: 'var(--text-h4)', marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Filter size={16} /> Filters
                </h3>
                <div style={{ marginBottom: 'var(--spacing-6)' }}>
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'bold', marginBottom: 'var(--spacing-2)' }}>Product Type</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '8px' }}><label><input type="checkbox" /> Simple Product</label></li>
                    <li style={{ marginBottom: '8px' }}><label><input type="checkbox" /> Subscription</label></li>
                    <li style={{ marginBottom: '8px' }}><label><input type="checkbox" /> Composite</label></li>
                    <li style={{ marginBottom: '8px' }}><label><input type="checkbox" /> Bundle</label></li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'bold', marginBottom: 'var(--spacing-2)' }}>Price Range</h4>
                  <input type="range" style={{ width: '100%' }} />
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-6)' }}>
              {allProducts.map((product) => (
                <article key={product.id} className="wp-block-product-card" style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', aspectRatio: '1/1', background: 'var(--muted)', overflow: 'hidden' }}>
                    <img 
                      src={product.images[0]?.src} 
                      alt={product.images[0]?.alt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {product.on_sale && (
                      <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--destructive)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>Sale</span>
                    )}
                    <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                      {product.type.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <div style={{ padding: 'var(--spacing-5)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: 'var(--spacing-2)', color: 'var(--muted-foreground)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {product.categories[0]?.name}
                    </div>
                    <h2 style={{ fontSize: 'var(--text-h4)', marginBottom: 'var(--spacing-2)' }}>{product.name}</h2>
                    <div style={{ marginBottom: 'var(--spacing-4)', color: 'var(--foreground)' }} dangerouslySetInnerHTML={{ __html: product.short_description }} />
                    
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ fontWeight: 'bold', fontSize: 'var(--text-lg)' }}>
                        {product.sale_price ? (
                          <>
                            <span style={{ textDecoration: 'line-through', color: 'var(--muted-foreground)', marginRight: '8px', fontSize: 'var(--text-sm)' }}>${product.regular_price}</span>
                            <span>${product.sale_price}</span>
                          </>
                        ) : (
                          <span>${product.price}</span>
                        )}
                      </div>
                      <button style={{ 
                        background: 'var(--primary)', 
                        color: 'var(--primary-foreground)', 
                        border: 'none', 
                        padding: '8px', 
                        borderRadius: '50%', 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
