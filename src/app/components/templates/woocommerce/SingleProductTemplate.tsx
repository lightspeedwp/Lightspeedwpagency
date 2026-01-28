/**
 * Single Product Template
 * 
 * Handles all WooCommerce product types:
 * - Simple
 * - Subscription
 * - Composite
 * - Bundle
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allProducts } from '@/app/data/woocommerce';
import { ShoppingCart, Check, RefreshCw, Layers, Box, Info } from 'lucide-react';

export function SingleProductTemplate({ slug = 'lsx-theme-pro' }: { slug?: string }) {
  const product = allProducts.find(p => p.slug === slug) || allProducts[0];
  
  // Render different pricing/add-to-cart sections based on type
  const renderAddToCart = () => {
    switch (product.type) {
      case 'subscription':
        return (
          <div className="bg-[var(--secondary)] p-6 rounded-xl border border-[var(--border-soft)] mb-8">
            <div className="flex items-center gap-2 text-[var(--primary)] font-bold mb-4">
              <RefreshCw size={20} />
              <span>Subscription Plan</span>
            </div>
            <div className="text-3xl font-bold mb-2">
              ${product.meta_data.find(m => m.key === '_subscription_price')?.value} 
              <span className="text-base font-normal text-[var(--muted-foreground)]"> / month</span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mb-6">
              Sign up fee: ${product.meta_data.find(m => m.key === '_subscription_sign_up_fee')?.value}
            </p>
            <button className="w-full py-3 bg-[var(--primary)] text-white rounded-lg font-bold hover:bg-opacity-90 transition-colors">
              Sign Up Now
            </button>
          </div>
        );
      case 'bundle':
        return (
          <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border-soft)] mb-8 shadow-sm">
            <div className="flex items-center gap-2 text-[var(--primary)] font-bold mb-4">
              <Box size={20} />
              <span>Bundle Deal</span>
            </div>
            <div className="mb-6 space-y-3">
              <p className="font-semibold">Includes:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[var(--success)]" /> LSX Theme Pro</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[var(--success)]" /> All Extensions</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} className="text-[var(--success)]" /> Priority Support</li>
              </ul>
            </div>
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-bold">${product.sale_price}</span>
              <span className="text-xl text-[var(--muted-foreground)] line-through decoration-[var(--destructive)]">${product.regular_price}</span>
            </div>
            <button className="w-full py-3 bg-[var(--primary)] text-white rounded-lg font-bold hover:bg-opacity-90 transition-colors">
              Add Bundle to Cart
            </button>
          </div>
        );
      case 'composite':
        return (
          <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border-soft)] mb-8">
            <div className="flex items-center gap-2 text-[var(--primary)] font-bold mb-4">
              <Layers size={20} />
              <span>Configurable Product</span>
            </div>
            <div className="mb-6 space-y-4">
              <div className="p-4 border border-[var(--border)] rounded-lg">
                <label className="block text-sm font-bold mb-2">Step 1: Choose Theme</label>
                <select className="w-full p-2 border border-[var(--border)] rounded">
                  <option>LSX Theme Pro (+$49)</option>
                  <option>Standard Theme (Free)</option>
                </select>
              </div>
              <div className="p-4 border border-[var(--border)] rounded-lg">
                <label className="block text-sm font-bold mb-2">Step 2: Select Support</label>
                <select className="w-full p-2 border border-[var(--border)] rounded">
                  <option>None</option>
                  <option>Monthly Maintenance (+$199)</option>
                </select>
              </div>
            </div>
            <div className="text-3xl font-bold mb-6">From ${product.price}</div>
            <button className="w-full py-3 bg-[var(--primary)] text-white rounded-lg font-bold hover:bg-opacity-90 transition-colors">
              Build Configuration
            </button>
          </div>
        );
      default:
        return (
          <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border-soft)] mb-8">
            <div className="text-3xl font-bold mb-6">${product.price}</div>
            <button className="w-full py-3 bg-[var(--primary)] text-white rounded-lg font-bold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        );
    }
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-4 border-b border-[var(--border-soft)]">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '/shop' },
                { label: product.name }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Gallery */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--muted)] border border-[var(--border-soft)]">
                  <img 
                    src={product.images[0]?.src} 
                    alt={product.images[0]?.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Thumbnails placeholder */}
                <div className="grid grid-cols-4 gap-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="aspect-square rounded-lg bg-[var(--muted)] border border-[var(--border-soft)]"></div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-primary)]">{product.name}</h1>
                <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)] mb-6">
                  <span className="bg-[var(--secondary)] text-[var(--primary)] px-2 py-1 rounded font-bold uppercase text-xs">
                    {product.type}
                  </span>
                  <span>SKU: {product.sku}</span>
                </div>

                <div className="prose prose-lg mb-8" dangerouslySetInnerHTML={{ __html: product.short_description }} />

                {renderAddToCart()}

                <div className="border-t border-[var(--border-soft)] pt-6 space-y-4">
                  <div className="flex gap-2 text-sm">
                    <span className="font-bold text-[var(--foreground)]">Categories:</span>
                    <span className="text-[var(--primary)]">{product.categories.map(c => c.name).join(', ')}</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="font-bold text-[var(--foreground)]">Tags:</span>
                    <span className="text-[var(--primary)]">{product.tags.map(t => t.name).join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs / Description */}
            <div className="mt-20">
              <div className="border-b border-[var(--border-soft)] flex gap-8 mb-8">
                <button className="pb-4 border-b-2 border-[var(--primary)] font-bold text-[var(--foreground)]">Description</button>
                <button className="pb-4 border-b-2 border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]">Additional Information</button>
                <button className="pb-4 border-b-2 border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]">Reviews ({product.rating_count})</button>
              </div>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
