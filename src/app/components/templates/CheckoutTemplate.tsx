/**
 * Checkout Template
 * 
 * WordPress Template: checkout.html
 * 
 * Displays the WooCommerce checkout page.
 */

import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { allProducts } from '../../data/woocommerce';
import '@/styles/woocommerce/checkout.css';

export function CheckoutTemplate() {
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

  return (
    <>
      <div className="woocommerce-checkout">
        <Container>
          <header className="woocommerce-checkout__header">
            <Heading level={1} className="woocommerce-checkout__title">Checkout</Heading>
          </header>

          <form name="checkout" method="post" className="checkout woocommerce-checkout" action="">
            <div className="woocommerce-checkout__layout">
              <div className="col2-set" id="customer_details">
                <div className="col-1">
                  <Heading level={3} className="woocommerce-checkout__section-title">Billing details</Heading>
                  <div className="woocommerce-billing-fields">
                    <div className="woocommerce-billing-fields__field-wrapper">
                      <p className="form-row form-row-first validate-required" id="billing_first_name_field">
                        <label htmlFor="billing_first_name" className="">First name&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" defaultValue="" autoComplete="given-name" />
                      </p>
                      <p className="form-row form-row-last validate-required" id="billing_last_name_field">
                        <label htmlFor="billing_last_name" className="">Last name&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <input type="text" className="input-text " name="billing_last_name" id="billing_last_name" placeholder="" defaultValue="" autoComplete="family-name" />
                      </p>
                      <p className="form-row form-row-wide" id="billing_company_field">
                        <label htmlFor="billing_company" className="">Company name&nbsp;<span className="optional">(optional)</span></label>
                        <input type="text" className="input-text " name="billing_company" id="billing_company" placeholder="" defaultValue="" autoComplete="organization" />
                      </p>
                      <p className="form-row form-row-wide address-field validate-required" id="billing_country_field">
                        <label htmlFor="billing_country" className="">Country / Region&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <select name="billing_country" id="billing_country" className="country_to_state country_select input-text" autoComplete="country">
                          <option value="US">United States (US)</option>
                          <option value="GB">United Kingdom (UK)</option>
                          <option value="CA">Canada</option>
                        </select>
                      </p>
                      <p className="form-row form-row-wide address-field validate-required" id="billing_address_1_field">
                        <label htmlFor="billing_address_1" className="">Street address&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <input type="text" className="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" defaultValue="" autoComplete="address-line1" />
                      </p>
                      <p className="form-row form-row-wide address-field validate-required" id="billing_city_field">
                        <label htmlFor="billing_city" className="">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <input type="text" className="input-text " name="billing_city" id="billing_city" placeholder="" defaultValue="" autoComplete="address-level2" />
                      </p>
                      <p className="form-row form-row-wide address-field validate-state validate-required" id="billing_state_field">
                        <label htmlFor="billing_state" className="">State&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <select name="billing_state" id="billing_state" className="state_select input-text" autoComplete="address-level1">
                          <option value="">Select an option…</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                        </select>
                      </p>
                      <p className="form-row form-row-wide address-field validate-postcode validate-required" id="billing_postcode_field">
                        <label htmlFor="billing_postcode" className="">ZIP Code&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <input type="text" className="input-text " name="billing_postcode" id="billing_postcode" placeholder="" defaultValue="" autoComplete="postal-code" />
                      </p>
                      <p className="form-row form-row-wide validate-required validate-phone" id="billing_phone_field">
                        <label htmlFor="billing_phone" className="">Phone&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder="" defaultValue="" autoComplete="tel" />
                      </p>
                      <p className="form-row form-row-wide validate-required validate-email" id="billing_email_field">
                        <label htmlFor="billing_email" className="">Email address&nbsp;<abbr className="required" title="required">*</abbr></label>
                        <input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="" defaultValue="" autoComplete="email username" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="order_review" className="woocommerce-checkout-review-order">
                <Heading level={3} id="order_review_heading" className="woocommerce-checkout__section-title">Your order</Heading>
                <table className="shop_table woocommerce-checkout-review-order-table">
                  <thead>
                    <tr>
                      <th className="product-name">Product</th>
                      <th className="product-total">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index} className="cart_item">
                        <td className="product-name">
                          {item.product.name}&nbsp;
                          <strong className="product-quantity">×&nbsp;{item.quantity}</strong>
                        </td>
                        <td className="product-total">
                          <span className="woocommerce-Price-amount amount">
                            <bdi><span className="woocommerce-Price-currencySymbol">$</span>{item.total}</bdi>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="cart-subtotal">
                      <th>Subtotal</th>
                      <td><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>248.00</bdi></span></td>
                    </tr>
                    <tr className="order-total">
                      <th>Total</th>
                      <td><strong><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>272.80</bdi></span></strong> <small className="includes_tax">(includes <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>24.80</span> Tax)</small></td>
                    </tr>
                  </tfoot>
                </table>

                <div id="payment" className="woocommerce-checkout-payment">
                  <ul className="wc_payment_methods payment_methods methods">
                    <li className="wc_payment_method payment_method_bacs">
                      <input id="payment_method_bacs" type="radio" className="input-radio" name="payment_method" value="bacs" defaultChecked />
                      <label htmlFor="payment_method_bacs">
                        Direct bank transfer
                      </label>
                      <div className="payment_box payment_method_bacs">
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                      </div>
                    </li>
                    <li className="wc_payment_method payment_method_cheque">
                      <input id="payment_method_cheque" type="radio" className="input-radio" name="payment_method" value="cheque" />
                      <label htmlFor="payment_method_cheque">
                        Check payments
                      </label>
                    </li>
                  </ul>
                  <div className="form-row place-order">
                    <button type="submit" className="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order">Place order</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
}
