/**
 * Single Product Template — "Neon Commerce" Funky Redesign
 * 
 * WordPress template: woocommerce/single-product.html
 * 
 * Features:
 * - "Neon Commerce" aesthetic (dark mode optimization, glow effects)
 * - Sticky product summary
 * - Gallery with thumbnail grid
 * - Dynamic pricing box based on product type
 * - Tabbed content area
 * - FunkyCTA for cross-sell/upsell
 * 
 * @see /src/styles/templates/page-single-product.css
 */

import '../../../../styles/templates/page-single-product.css';
import { useState } from 'react';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { Heading } from '@/app/components/blocks/text/Heading';
import { Paragraph } from '@/app/components/blocks/text/Paragraph';
import { Button } from '@/app/components/blocks/design/Buttons';
import { FunkyCTA } from '@/app/components/patterns/FunkyCTA';
import { ScrollReveal } from '@/app/hooks/useScrollReveal';
import { allProducts } from '@/app/data/woocommerce';
import { 
  ShoppingCart, 
  Heart, 
  ShareNetwork as Share2, 
  Tag, 
  Info, 
  Truck, 
  ArrowsClockwise as RefreshCw, 
  Stack as Layers, 
  Package as Box, 
  Star, 
  ShieldCheck, 
  Lightning as Zap, 
  CreditCard 
} from '@phosphor-icons/react';

export function SingleProductTemplate({ slug = 'lsx-theme-pro' }: { slug?: string }) {
  const product = allProducts.find(p => p.slug === slug) || allProducts[0];
  const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'reviews'>('description');
  const [activeImage, setActiveImage] = useState(0);

  // Render different pricing/add-to-cart sections based on type
  const renderAddToCart = () => {
    switch (product.type) {
      case 'subscription':
        return (
          <div className="product-page__pricing-box">
            <div className="product-page__type-badge">
              <RefreshCw size={12} />
              Subscription Plan
            </div>
            
            <div className="product-page__price-row">
              <div className="product-page__price product-page__price--sale">
                ${product.meta_data.find(m => m.key === '_subscription_price')?.value}
              </div>
              <span className="product-page__price-period">/ month</span>
            </div>
            
            <Paragraph className="product-page__short-desc wp-mb-6">
              Sign up fee: ${product.meta_data.find(m => m.key === '_subscription_sign_up_fee')?.value}. Cancel anytime.
            </Paragraph>
            
            <div className="product-page__actions">
              <Button variant="primary" size="xl" className="wp-w-full">
                Sign Up Now
              </Button>
            </div>
            
            <div className="product-page__trust-badges">
              <span className="product-page__trust-item"><ShieldCheck size={14} /> Secure Payment</span>
              <span className="product-page__trust-item"><Zap size={14} /> Instant Access</span>
            </div>
          </div>
        );

      case 'bundle':
        return (
          <div className="product-page__pricing-box">
            <div className="product-page__type-badge">
              <Box size={12} />
              Bundle Deal
            </div>
            
            <div className="product-page__price-row">
              <div className="product-page__price product-page__price--sale">
                ${product.sale_price}
              </div>
              <div className="product-page__price-original">
                ${product.regular_price}
              </div>
            </div>

            <div className="product-page__bundle-list-wrapper">
              <p className="wp-font-bold wp-mb-3">What's Included:</p>
              <ul className="product-page__bundle-list">
                <li className="product-page__bundle-item">
                  <Check size={16} className="product-page__bundle-icon" /> 
                  <span>LSX Theme Pro</span>
                </li>
                <li className="product-page__bundle-item">
                  <Check size={16} className="product-page__bundle-icon" /> 
                  <span>All Extensions</span>
                </li>
                <li className="product-page__bundle-item">
                  <Check size={16} className="product-page__bundle-icon" /> 
                  <span>Priority Support</span>
                </li>
              </ul>
            </div>
            
            <div className="product-page__actions">
              <Button variant="primary" size="xl" className="wp-w-full">
                Add Bundle to Cart
              </Button>
            </div>
          </div>
        );

      case 'composite':
        return (
          <div className="product-page__pricing-box">
            <div className="product-page__type-badge">
              <Layers size={12} />
              Configurable Product
            </div>
            
            <div className="product-page__price-row">
              <div className="product-page__price">
                From ${product.price}
              </div>
            </div>

            <div className="wp-flex wp-flex-col wp-gap-4 wp-mb-6">
              <div className="woocommerce-composite-field">
                <label className="wp-font-bold wp-text-sm wp-mb-2">Step 1: Choose Theme</label>
                <select className="woocommerce-composite-select wp-w-full wp-p-2 wp-rounded wp-border">
                  <option>LSX Theme Pro (+$49)</option>
                  <option>Standard Theme (Free)</option>
                </select>
              </div>
              <div className="woocommerce-composite-field">
                <label className="wp-font-bold wp-text-sm wp-mb-2">Step 2: Select Support</label>
                <select className="woocommerce-composite-select wp-w-full wp-p-2 wp-rounded wp-border">
                  <option>None</option>
                  <option>Monthly Maintenance (+$199)</option>
                </select>
              </div>
            </div>
            
            <div className="product-page__actions">
              <Button variant="primary" size="xl" className="wp-w-full">
                Build Configuration
              </Button>
            </div>
          </div>
        );

      default:
        return (
          <div className="product-page__pricing-box">
            <div className="product-page__price-row">
              <div className="product-page__price">
                ${product.price}
              </div>
            </div>
            
            <div className="product-page__actions">
              <Button variant="primary" size="xl" className="wp-w-full">
                <ShoppingCart size={20} className="wp-mr-2" />
                Add to Cart
              </Button>
            </div>
            
            <div className="product-page__trust-badges">
              <span className="product-page__trust-item"><ShieldCheck size={14} /> 30-Day Guarantee</span>
              <span className="product-page__trust-item"><CreditCard size={14} /> Secure Checkout</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="product-page">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.name },
        ]}
      />

      {/* Hero / Main Product Section */}
      <section className="product-page__hero">
        <div className="product-page__hero-orb" aria-hidden="true" />
        
        <Container>
          <div className="product-page__layout">
            
            {/* Left Column: Gallery */}
            <ScrollReveal animation="fade-right">
              <div className="product-page__gallery">
                <div className="product-page__image-main">
                  <img 
                    src={product.images[activeImage]?.src} 
                    alt={product.images[activeImage]?.alt || product.name} 
                    loading="eager"
                  />
                </div>
                
                {/* Thumbnails (Mocked if only 1 image) */}
                <div className="product-page__thumbs">
                  {product.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`product-page__thumb ${activeImage === index ? 'product-page__thumb--active' : ''}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img src={img.src} alt={img.alt} className="wp-w-full wp-h-full wp-object-cover" />
                    </div>
                  ))}
                  {/* Mock thumbnails if needed */}
                  {product.images.length === 1 && [1, 2, 3].map((_, i) => (
                    <div key={`mock-${i}`} className="product-page__thumb">
                      <div className="wp-w-full wp-h-full wp-bg-card wp-flex wp-items-center wp-justify-center wp-text-muted-foreground">
                        <Box size={24} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Summary & Pricing */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="product-page__summary">
                <div className="product-page__header">
                  <Heading level={1} className="product-page__title">
                    {product.name}
                  </Heading>
                  
                  <div className="product-page__meta">
                    <span className="product-page__sku">SKU: {product.sku}</span>
                    <div className="product-page__rating">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < (product.average_rating || 5) ? "currentColor" : "none"} 
                          className={i < (product.average_rating || 5) ? "text-warning" : "text-muted"}
                        />
                      ))}
                      <span className="wp-text-xs wp-ml-1">({product.rating_count} reviews)</span>
                    </div>
                  </div>
                </div>

                <div 
                  className="product-page__short-desc"
                  dangerouslySetInnerHTML={{ __html: product.short_description }}
                />

                {/* Pricing / Add to Cart */}
                {renderAddToCart()}

                {/* Attributes */}
                <div className="product-page__attributes">
                  <div className="wp-flex wp-gap-2 wp-text-sm wp-mb-2">
                    <span className="wp-font-bold">Categories:</span>
                    <span className="wp-text-muted-foreground">{product.categories.map(c => c.name).join(', ')}</span>
                  </div>
                  <div className="wp-flex wp-gap-2 wp-text-sm">
                    <span className="wp-font-bold">Tags:</span>
                    <span className="wp-text-muted-foreground">{product.tags.map(t => t.name).join(', ')}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Tabs Section */}
      <Section spacing="lg" className="product-page__tabs">
        <Container>
          <div className="product-page__tabs-nav">
            <button 
              className={`product-page__tab-link ${activeTab === 'description' ? 'product-page__tab-link--active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`product-page__tab-link ${activeTab === 'additional' ? 'product-page__tab-link--active' : ''}`}
              onClick={() => setActiveTab('additional')}
            >
              Additional Information
            </button>
            <button 
              className={`product-page__tab-link ${activeTab === 'reviews' ? 'product-page__tab-link--active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.rating_count})
            </button>
          </div>

          <div className="product-page__tab-content">
            {activeTab === 'description' && (
              <ScrollReveal animation="fade-up">
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
                
                {/* Funky Feature Grid (Mocked for visual appeal) */}
                <div className="product-page__features-grid">
                  <div className="product-page__feature-card">
                    <h3 className="product-page__feature-title">
                      <Zap size={18} className="product-page__feature-icon" /> Lightning Fast
                    </h3>
                    <p className="wp-text-sm wp-text-muted-foreground">Optimized for Core Web Vitals with sub-second load times.</p>
                  </div>
                  <div className="product-page__feature-card">
                    <h3 className="product-page__feature-title">
                      <ShieldCheck size={18} className="product-page__feature-icon" /> Secure & Reliable
                    </h3>
                    <p className="wp-text-sm wp-text-muted-foreground">Built with security-first architecture and best practices.</p>
                  </div>
                  <div className="product-page__feature-card">
                    <h3 className="product-page__feature-title">
                      <Layers size={18} className="product-page__feature-icon" /> Scalable Design
                    </h3>
                    <p className="wp-text-sm wp-text-muted-foreground">Grow your business without technical debt.</p>
                  </div>
                </div>
              </ScrollReveal>
            )}
            {activeTab === 'additional' && (
              <ScrollReveal animation="fade-up">
                <p>Additional product specifications and details would go here.</p>
              </ScrollReveal>
            )}
            {activeTab === 'reviews' && (
              <ScrollReveal animation="fade-up">
                <p>Customer reviews and ratings would be displayed here.</p>
              </ScrollReveal>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Need Help Choosing?"
        description="Our team of WordPress experts can help you select the right solution for your specific needs."
        buttonText="Contact Sales"
        buttonPage="contact"
        benefits={[
          'Expert guidance',
          'Custom quotes',
          'Technical consultation',
          'Migration assistance'
        ]}
      />
    </div>
  );
}