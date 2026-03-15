import "../styles/Cart.css";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Assets from "../assets/Assets";
import { useStore } from "../store/StoreContext";

const Cart = () => {
  const { cartItems, setCartQty, removeFromCart } = useStore();
  const [delivery, setDelivery] = useState("pickup");
  const isEmpty = cartItems.length === 0;

  const subtotal = cartItems.reduce(
    (sum, it) => sum + it.product.price * it.qty,
    0,
  );
  const tax = subtotal * 0.08;
  const deliveryFee = delivery === "delivery" ? 4 : 0;
  const total = subtotal + tax + deliveryFee;

  return (
    <main className="cart-page">
      <section className="cart-hero">
        <div className="cart-hero-inner">
          <h1>Add to Cart</h1>
        </div>
      </section>

      <section className="cart-content">
        <div className="cart-content-inner">
          <div className="cart-grid">
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div style={{ color: "#fff", fontWeight: 800 }}>
                  Your cart is empty.
                </div>
              ) : null}

              {cartItems.map(({ product, qty }) => (
                <article key={product.id} className="cart-item">
                  <div className="cart-item-media">
                    <img
                      src={product.images?.[0] ?? Assets.item1}
                      alt={product.title}
                    />
                  </div>

                  <div className="cart-item-info">
                    <h3>{product.title}</h3>
                    <div className="cart-item-price">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="cart-item-controls">
                    <div className="qty" aria-label="Quantity">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => setCartQty(product.id, qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span
                        className="qty-value"
                        aria-label={`Quantity ${qty}`}
                      >
                        {qty}
                      </span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => setCartQty(product.id, qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="trash"
                      onClick={() => removeFromCart(product.id)}
                      aria-label={`Remove ${product.title}`}
                    >
                      <Trash2 size={18} strokeWidth={2} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="cart-summary" aria-label="Order summary">
              <h2>Order Summary</h2>

              <div className="summary-rows">
                <div className="row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="row">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="rule" />
                <div className="row total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {isEmpty ? (
                <button
                  type="button"
                  className="summary-btn summary-btn--primary"
                  disabled
                  aria-disabled="true"
                >
                  Checkout
                </button>
              ) : (
                <Link
                  to="/checkout"
                  className="summary-btn summary-btn--primary"
                >
                  Checkout
                </Link>
              )}
              <Link to="/menu" className="summary-btn summary-btn--ghost">
                Continue Shopping
              </Link>

              <div className="summary-divider" />

              <div className="delivery">
                <h3>Delivery Options</h3>
                <label className="radio">
                  <input
                    type="radio"
                    name="delivery"
                    checked={delivery === "pickup"}
                    onChange={() => setDelivery("pickup")}
                  />
                  <span>Pickup (free)</span>
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="delivery"
                    checked={delivery === "delivery"}
                    onChange={() => setDelivery("delivery")}
                  />
                  <span>Delivery ($4.00)</span>
                </label>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
