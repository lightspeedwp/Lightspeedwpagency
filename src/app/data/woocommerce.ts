/**
 * WooCommerce Product Data
 * 
 * Extremely detailed mock data for WooCommerce products, covering:
 * - Simple Products
 * - Variable Products
 * - Subscriptions (WooCommerce Subscriptions)
 * - Composite Products (WooCommerce Composite Products)
 * - Product Bundles (WooCommerce Product Bundles)
 * 
 * Matches WooCommerce database structure and standard meta keys.
 * @see https://github.com/woocommerce/woocommerce/wiki/Database-Description
 */

import { productCategories, productTags } from './taxonomies';

export interface WooProductMeta {
  key: string;
  value: any;
}

export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_modified: string;
  type: 'simple' | 'variable' | 'grouped' | 'external' | 'subscription' | 'variable-subscription' | 'composite' | 'bundle';
  status: 'publish' | 'draft' | 'pending' | 'private';
  featured: boolean;
  catalog_visibility: 'visible' | 'catalog' | 'search' | 'hidden';
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string | null;
  date_on_sale_to: string | null;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: { id: string; name: string; file: string }[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: 'taxable' | 'shipping' | 'none';
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  backorders: 'no' | 'notify' | 'yes';
  backorders_allowed: boolean;
  backordered: boolean;
  low_stock_amount: number | null;
  sold_individually: boolean;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: { id: number; name: string; slug: string }[];
  tags: { id: number; name: string; slug: string }[];
  images: { id: number; src: string; name: string; alt: string }[];
  attributes: { id: number; name: string; position: number; visible: boolean; variation: boolean; options: string[] }[];
  default_attributes: { id: number; name: string; option: string }[];
  variations: number[];
  grouped_products: number[];
  menu_order: number;
  meta_data: WooProductMeta[];
}

// 1. Simple Product (Standard License)
export const simpleProduct: WooProduct = {
  id: 1001,
  name: 'LSX Theme Pro License',
  slug: 'lsx-theme-pro',
  permalink: '/product/lsx-theme-pro/',
  date_created: '2023-01-15T10:00:00',
  date_modified: '2023-06-20T14:30:00',
  type: 'simple',
  status: 'publish',
  featured: true,
  catalog_visibility: 'visible',
  description: '<p>Unlock the full power of the LSX Theme with our Pro license.</p>',
  short_description: '<p>Premium features for the LSX Theme.</p>',
  sku: 'LSX-THEME-PRO',
  price: '49.00',
  regular_price: '49.00',
  sale_price: '',
  date_on_sale_from: null,
  date_on_sale_to: null,
  on_sale: false,
  purchasable: true,
  total_sales: 150,
  virtual: true,
  downloadable: true,
  downloads: [
    { id: 'file_1', name: 'LSX Theme Pro', file: 'https://example.com/file.zip' }
  ],
  download_limit: -1,
  download_expiry: -1,
  external_url: '',
  button_text: '',
  tax_status: 'taxable',
  tax_class: '',
  manage_stock: false,
  stock_quantity: null,
  stock_status: 'instock',
  backorders: 'no',
  backorders_allowed: false,
  backordered: false,
  low_stock_amount: null,
  sold_individually: false,
  weight: '',
  dimensions: { length: '', width: '', height: '' },
  shipping_required: false,
  shipping_taxable: false,
  shipping_class: '',
  shipping_class_id: 0,
  reviews_allowed: true,
  average_rating: '4.8',
  rating_count: 24,
  related_ids: [1002, 1003],
  upsell_ids: [],
  cross_sell_ids: [],
  parent_id: 0,
  purchase_note: '',
  categories: [productCategories[0]], // Themes
  tags: [productTags[0], productTags[1]], // FSE, Block Theme
  images: [
    { id: 2001, src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80', name: 'LSX Theme Pro', alt: 'LSX Theme Pro Cover' }
  ],
  attributes: [],
  default_attributes: [],
  variations: [],
  grouped_products: [],
  menu_order: 0,
  meta_data: [
    { key: '_virtual', value: 'yes' },
    { key: '_downloadable', value: 'yes' }
  ]
};

// 2. Subscription Product (WooCommerce Subscriptions)
export const subscriptionProduct: WooProduct = {
  id: 1002,
  name: 'Agency Maintenance Plan',
  slug: 'agency-maintenance',
  permalink: '/product/agency-maintenance/',
  date_created: '2023-02-01T09:00:00',
  date_modified: '2023-02-01T09:00:00',
  type: 'subscription',
  status: 'publish',
  featured: false,
  catalog_visibility: 'visible',
  description: '<p>Complete peace of mind for your agency website.</p>',
  short_description: '<p>Monthly maintenance and support.</p>',
  sku: 'AGENCY-MAINT',
  price: '199.00',
  regular_price: '199.00',
  sale_price: '',
  date_on_sale_from: null,
  date_on_sale_to: null,
  on_sale: false,
  purchasable: true,
  total_sales: 45,
  virtual: true,
  downloadable: false,
  downloads: [],
  download_limit: -1,
  download_expiry: -1,
  external_url: '',
  button_text: 'Sign Up',
  tax_status: 'taxable',
  tax_class: '',
  manage_stock: false,
  stock_quantity: null,
  stock_status: 'instock',
  backorders: 'no',
  backorders_allowed: false,
  backordered: false,
  low_stock_amount: null,
  sold_individually: true,
  weight: '',
  dimensions: { length: '', width: '', height: '' },
  shipping_required: false,
  shipping_taxable: false,
  shipping_class: '',
  shipping_class_id: 0,
  reviews_allowed: false,
  average_rating: '0.00',
  rating_count: 0,
  related_ids: [],
  upsell_ids: [],
  cross_sell_ids: [],
  parent_id: 0,
  purchase_note: '',
  categories: [productCategories[4]], // Subscriptions
  tags: [productTags[2]], // Services
  images: [
    { id: 2002, src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', name: 'Maintenance Plan', alt: 'Maintenance Support' }
  ],
  attributes: [],
  default_attributes: [],
  variations: [],
  grouped_products: [],
  menu_order: 1,
  meta_data: [
    { key: '_subscription_price', value: '199.00' },
    { key: '_subscription_period', value: 'month' },
    { key: '_subscription_period_interval', value: 1 },
    { key: '_subscription_length', value: 0 },
    { key: '_subscription_trial_length', value: 0 },
    { key: '_subscription_trial_period', value: 'day' },
    { key: '_subscription_sign_up_fee', value: '50.00' },
    { key: '_subscription_limit', value: 'no' },
    { key: '_subscription_one_time_shipping', value: 'no' }
  ]
};

// 3. Composite Product (WooCommerce Composite Products)
export const compositeProduct: WooProduct = {
  id: 1003,
  name: 'Build Your Own Agency Bundle',
  slug: 'build-your-agency-bundle',
  permalink: '/product/build-agency-bundle/',
  date_created: '2023-03-10T11:20:00',
  date_modified: '2023-03-10T11:20:00',
  type: 'composite',
  status: 'publish',
  featured: true,
  catalog_visibility: 'visible',
  description: '<p>Custom build your software stack.</p>',
  short_description: '<p>Select your theme, plugins, and support level.</p>',
  sku: 'BUILD-BUNDLE',
  price: '299.00',
  regular_price: '299.00',
  sale_price: '',
  date_on_sale_from: null,
  date_on_sale_to: null,
  on_sale: false,
  purchasable: true,
  total_sales: 10,
  virtual: true,
  downloadable: false,
  downloads: [],
  download_limit: -1,
  download_expiry: -1,
  external_url: '',
  button_text: 'Build Configuration',
  tax_status: 'taxable',
  tax_class: '',
  manage_stock: false,
  stock_quantity: null,
  stock_status: 'instock',
  backorders: 'no',
  backorders_allowed: false,
  backordered: false,
  low_stock_amount: null,
  sold_individually: false,
  weight: '',
  dimensions: { length: '', width: '', height: '' },
  shipping_required: false,
  shipping_taxable: false,
  shipping_class: '',
  shipping_class_id: 0,
  reviews_allowed: true,
  average_rating: '5.00',
  rating_count: 5,
  related_ids: [],
  upsell_ids: [],
  cross_sell_ids: [],
  parent_id: 0,
  purchase_note: '',
  categories: [productCategories[3]], // Bundles
  tags: [productTags[0], productTags[1]],
  images: [
    { id: 2003, src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', name: 'Custom Bundle', alt: 'Laptop with code' }
  ],
  attributes: [],
  default_attributes: [],
  variations: [],
  grouped_products: [],
  menu_order: 2,
  meta_data: [
    { key: '_bto_base_price', value: '50.00' }, 
    { key: '_bto_pricing_mode', value: 'base' }, // base, items, or both
    { key: '_bto_shipping_mode', value: 'bundled' },
    { key: '_bto_style', value: 'single' }, // single page or progressive
    { 
      key: '_bto_components', 
      value: [
        { 
          id: 'component_1', 
          title: 'Choose Theme', 
          description: 'Select a theme for your site',
          query_type: 'category_ids', 
          query_ids: [20], // Theme category ID
          quantity_min: 1, 
          quantity_max: 1,
          priced_individually: 'yes',
          shipped_individually: 'no',
          default_id: 1001
        },
        { 
          id: 'component_2', 
          title: 'Select Plugins', 
          description: 'Add extra functionality',
          query_type: 'product_ids', 
          query_ids: [1005, 1006], 
          quantity_min: 0, 
          quantity_max: 5,
          priced_individually: 'yes',
          shipped_individually: 'no'
        }
      ] 
    }
  ]
};

// 4. Product Bundle (WooCommerce Product Bundles)
export const bundleProduct: WooProduct = {
  id: 1004,
  name: 'Complete Developer Kit',
  slug: 'developer-kit',
  permalink: '/product/developer-kit/',
  date_created: '2023-04-05T08:45:00',
  date_modified: '2023-04-05T08:45:00',
  type: 'bundle',
  status: 'publish',
  featured: false,
  catalog_visibility: 'visible',
  description: '<p>Get everything you need to start developing.</p>',
  short_description: '<p>Theme + All Plugins + 1 Year Support.</p>',
  sku: 'DEV-KIT',
  price: '149.00',
  regular_price: '200.00',
  sale_price: '149.00',
  date_on_sale_from: null,
  date_on_sale_to: null,
  on_sale: true,
  purchasable: true,
  total_sales: 80,
  virtual: true,
  downloadable: true,
  downloads: [],
  download_limit: -1,
  download_expiry: -1,
  external_url: '',
  button_text: 'Add Bundle to Cart',
  tax_status: 'taxable',
  tax_class: '',
  manage_stock: true,
  stock_quantity: 100,
  stock_status: 'instock',
  backorders: 'no',
  backorders_allowed: false,
  backordered: false,
  low_stock_amount: 5,
  sold_individually: false,
  weight: '',
  dimensions: { length: '', width: '', height: '' },
  shipping_required: false,
  shipping_taxable: false,
  shipping_class: '',
  shipping_class_id: 0,
  reviews_allowed: true,
  average_rating: '4.9',
  rating_count: 32,
  related_ids: [],
  upsell_ids: [],
  cross_sell_ids: [],
  parent_id: 0,
  purchase_note: '',
  categories: [productCategories[3]], // Bundles
  tags: [productTags[0]],
  images: [
    { id: 2004, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', name: 'Dev Kit', alt: 'Code on screen' }
  ],
  attributes: [],
  default_attributes: [],
  variations: [],
  grouped_products: [],
  menu_order: 3,
  meta_data: [
    { key: '_bndl_layout', value: 'default' }, // default, tabular, grid
    { key: '_bndl_group_mode', value: 'parent' }, // parent, child, none
    { 
      key: '_bndl_bundled_items', 
      value: [
        { product_id: 1001, quantity_min: 1, quantity_max: 1, priced_individually: false },
        { product_id: 1005, quantity_min: 1, quantity_max: 1, priced_individually: false }
      ] 
    },
    { key: '_wc_pb_base_price', value: '149.00' }
  ]
};

export const allProducts: WooProduct[] = [
  simpleProduct,
  subscriptionProduct,
  compositeProduct,
  bundleProduct
];
