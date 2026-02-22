/**
 * Cart Template
 * 
 * WordPress Template: cart.html
 * 
 * Displays the WooCommerce cart page.
 */

import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { allProducts } from '../../data/woocommerce';
import { X, Minus, Plus } from 'lucide-react';


export function CartTemplate() {
  // Mock cart items
  const cartItems = [
    {
      product: allProducts[0],
      quantity: 1,
      total: allProducts[0].price
    },
    {
      product: allProducts[1],
      quantity: 1,
      total: allProducts[1].price
    }
  ];

  const subtotal = 248.00;
  const tax = 24.80;
  const total = 272.80;

  return (
    <>
      <div className="woocommerce-cart">
        <Container>
          <header className="woocommerce-cart__header">
            <Heading level={1} className="woocommerce-cart__title">Cart</Heading>
          </header>

          <div className="woocommerce-cart__layout">
            <form className="woocommerce-cart-form" action="" method="post">
              <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index} className="woocommerce-cart-form__cart-item cart_item">
                      <td className="product-remove">
                        <button type="button" className="remove" aria-label="Remove this item">
                          <X size={16} />
                        </button>
                      </td>
                      <td className="product-thumbnail">
                        <a href={item.product.permalink}>
                          <img 
                            src={item.product.images[0].src} 
                            alt={item.product.images[0].alt} 
                          />
                        </a>
                      </td>
                      <td className="product-name" data-title="Product">
                        <a href={item.product.permalink}>{item.product.name}</a>
                      </td>
                      <td className="product-price" data-title="Price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi><span className="woocommerce-Price-currencySymbol">$</span>{item.product.price}</bdi>
                        </span>
                      </td>
                      <td className="product-quantity" data-title="Quantity">
                        <div className="quantity">
                          <button type="button" className="minus"><Minus size={12} /></button>
                          <label className="screen-reader-text" htmlFor={`quantity_${index}`}>Quantity</label>
                          <input
                            type="number"
                            id={`quantity_${index}`}
                            className="input-text qty text"
                            step="1"
                            min="0"
                            name={`cart[${index}][qty]`}
                            value={item.quantity}
                            title="Qty"
                            size={4}
                            inputMode="numeric"
                            readOnly
                          />
                          <button type="button" className="plus"><Plus size={12} /></button>
                        </div>
                      </td>
                      <td className="product-subtotal" data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount">
                          <bdi><span className="woocommerce-Price-currencySymbol">$</span>{item.total}</bdi>
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={6} className="actions woocommerce-cart-actions">
                      <div className="coupon woocommerce-cart-coupon">
                        <label htmlFor="coupon_code" className="screen-reader-text">Coupon:</label> 
                        <input type="text" name="coupon_code" className="input-text" id="coupon_code" defaultValue="" placeholder="Coupon code" /> 
                        <button type="submit" className="woocommerce-cart-button woocommerce-cart-button--secondary" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                      </div>
                      <button type="submit" className="woocommerce-cart-button woocommerce-cart-button--muted" name="update_cart" value="Update cart" disabled>Update cart</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            <div className="cart-collaterals">
              <div className="cart_totals">
                <Heading level={2}>Cart totals</Heading>
                <table cellSpacing="0" className="shop_table shop_table_responsive">
                  <tbody>
                    <tr className="cart-subtotal">
                      <th>Subtotal</th>
                      <td data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount">
                          <bdi><span className="woocommerce-Price-currencySymbol">$</span>{subtotal.toFixed(2)}</bdi>
                        </span>
                      </td>
                    </tr>
                    <tr className="order-total">
                      <th>Total</th>
                      <td data-title="Total">
                        <strong>
                          <span className="woocommerce-Price-amount amount">
                            <bdi><span className="woocommerce-Price-currencySymbol">$</span>{total.toFixed(2)}</bdi>
                          </span>
                        </strong> 
                        <small className="includes_tax">
                          (includes <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>{tax.toFixed(2)}</span> Tax)
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="wc-proceed-to-checkout">
                  <a href="/checkout" className="checkout-button button alt wc-forward">
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
