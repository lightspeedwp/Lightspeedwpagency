/**
 * WooCommerce Routes
 * 
 * Routes for WooCommerce shop functionality
 * 
 * URL Patterns:
 * - `/shop` — Product archive
 * - `/shop/:slug` — Single product
 * - `/cart` — Shopping cart
 * - `/checkout` — Checkout page
 * 
 * CSS Bundles:
 * - All WooCommerce routes load 'utility' bundle (~12-18KB gzipped)
 * 
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/utility-bundle.css
 */

import React, { lazy, Suspense } from 'react';
import { useParams, type RouteObject } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Lazy Template Imports
 * ═══════════════════════════════════════════ */

const ProductArchiveTemplate = lazy(() => import('../components/templates/ProductArchiveTemplate').then(m => ({ default: m.ProductArchiveTemplate })));
const SingleProductTemplate = lazy(() => import('../components/templates/woocommerce/SingleProductTemplate').then(m => ({ default: m.SingleProductTemplate })));
const CartTemplate = lazy(() => import('../components/templates/CartTemplate').then(m => ({ default: m.CartTemplate })));
const CheckoutTemplate = lazy(() => import('../components/templates/CheckoutTemplate').then(m => ({ default: m.CheckoutTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function ProductArchiveRoute() {
  loadCSSBundle('utility');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ProductArchiveTemplate />
    </Suspense>
  );
}

function SingleProductRoute() {
  const { slug } = useParams();
  loadCSSBundle('utility');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleProductTemplate slug={slug} />
    </Suspense>
  );
}

function CartRoute() {
  loadCSSBundle('utility');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <CartTemplate />
    </Suspense>
  );
}

function CheckoutRoute() {
  loadCSSBundle('utility');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <CheckoutTemplate />
    </Suspense>
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const woocommerceRoutes: RouteObject[] = [
  /* ── WooCommerce ── */
  { path: 'shop', Component: ProductArchiveRoute },
  { path: 'shop/:slug', Component: SingleProductRoute },
  { path: 'cart', Component: CartRoute },
  { path: 'checkout', Component: CheckoutRoute },
];