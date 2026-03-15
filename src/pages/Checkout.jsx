import "../styles/Checkout.css";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Assets from "../assets/Assets";
import { useStore } from "../store/StoreContext";

const DeliveryPinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M12 13.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
      stroke="currentColor"
      strokeWidth="2.2"
    />
  </svg>
);

const DeliveryClockIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
      stroke="currentColor"
      strokeWidth="2.2"
    />
    <path
      d="M12 6.5v6l4 2"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, placeOrder } = useStore();

  const items = useMemo(
    () =>
      cartItems.map((it) => ({
        id: it.product.id,
        title: it.product.title,
        price: it.product.price,
        qty: it.qty,
      })),
    [cartItems],
  );

  const [delivery, setDelivery] = useState("pickup");
  const [summaryOpen, setSummaryOpen] = useState(true);

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const tax = subtotal * 0.08;
  const deliveryFee = delivery === "delivery" ? 4 : 0;
  const total = subtotal + tax + deliveryFee;
  const isEmpty = items.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEmpty) return;

    const fd = new FormData(e.currentTarget);
    const customer = {
      fullName: String(fd.get("fullName") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
    };

    placeOrder({ deliveryMode: delivery, customer });
    navigate("/order-confirmed");
  };

  return (
    <main className="checkout-page">
      <section className="checkout-hero">
        <div className="checkout-hero-inner">
          <h1>Add to Cart</h1>
        </div>
      </section>

      <section className="checkout-content">
        <div className="checkout-inner">
          {isEmpty ? (
            <div className="checkout-error" role="alert">
              Your cart is empty. Add items from the menu to continue checkout.
            </div>
          ) : null}
          <div className="checkout-grid">
            <form
              id="checkout-form"
              className="checkout-left"
              onSubmit={onSubmit}
            >
              <section className="panel">
                <h2>Delivery Method</h2>
                <ul className="bullets">
                  <li>
                    <span className="bullet-icon">
                      <DeliveryPinIcon />
                    </span>
                    <span>Free pickup at 17 Portland Street</span>
                  </li>
                  <li>
                    <span className="bullet-icon">
                      <DeliveryClockIcon />
                    </span>
                    <span>Ready in 25-30 mins</span>
                  </li>
                </ul>
              </section>

              <section className="panel">
                <h2>Contact Information</h2>
                <div className="fields">
                  <label>
                    <input
                      name="fullName"
                      placeholder="Full Name*"
                      aria-label="Full Name"
                      required
                    />
                  </label>
                  <div className="row">
                    <label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Email*"
                        aria-label="Email"
                        required
                      />
                    </label>
                    <label>
                      <input
                        name="phone"
                        placeholder="Phone Number*"
                        aria-label="Phone Number"
                        required
                      />
                    </label>
                  </div>

                  <label className="check">
                    <input type="checkbox" defaultChecked />
                    <span>Send receipt to my email</span>
                  </label>
                  <label className="check">
                    <input type="checkbox" />
                    <span>SMS notification when order is ready</span>
                  </label>
                </div>
              </section>

              <section className="panel">
                <h2>Payment Detail</h2>
                <p className="muted">All transactions are secure and encrypted</p>
                <div className="fields">
                  <label>
                    <input placeholder="Card Number*" aria-label="Card Number" required />
                  </label>
                  <label>
                    <input
                      placeholder="Cardholder Name"
                      aria-label="Cardholder Name"
                      required
                    />
                  </label>
                  <div className="row">
                    <label>
                      <input
                        placeholder="Expiry Date*"
                        aria-label="Expiry Date"
                        required
                      />
                    </label>
                    <label>
                      <input placeholder="CVV*" aria-label="CVV" required />
                    </label>
                  </div>
                </div>
              </section>

              <section className="panel">
                <h2>Note</h2>
                <textarea
                  placeholder="Any special requests or dietary requirements?"
                  rows={6}
                />
              </section>
            </form>

            <aside className="checkout-summary">
              <h2>Order Summary</h2>

              <div className="summary-head">
                <div className="summary-items">
                  Order summary ({items.length}) items
                </div>
                <button
                  type="button"
                  className="chev"
                  aria-expanded={summaryOpen}
                  aria-controls="order-summary-details"
                  onClick={() => setSummaryOpen((v) => !v)}
                >
                  <img src={Assets.upArrowIcon} alt="" />
                </button>
              </div>

              <div id="order-summary-details" hidden={!summaryOpen}>
                <div className="summary-rows">
                  <div className="row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="row">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="row">
                    <span>{delivery === "pickup" ? "Pickup" : "Delivery"}</span>
                    <span>
                      {deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="row total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="coupon">
                  <input placeholder="Add coupon/ gift card" />
                </div>

                <div className="summary-divider" />

                <button
                  type="submit"
                  form="checkout-form"
                  className="place"
                  disabled={isEmpty}
                >
                  Place Order ${total.toFixed(2)}
                </button>

                <div className="delivery-box">
                  <div className="delivery-title">Delivery Options</div>
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
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
