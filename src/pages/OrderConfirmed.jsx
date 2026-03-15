import "../styles/OrderConfirmed.css";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../store/StoreContext";

const OrderConfirmed = () => {
  const { lastOrder } = useStore();

  const order =
    lastOrder ??
    {
      id: "GN41856994",
      deliveryMode: "pickup",
      customer: {
        fullName: "John Doe",
        email: "John.doe@gmail.com",
        phone: "647-879-2134",
      },
      items: [
        { title: "Golden Shakshuka", price: 18.45, qty: 1 },
        { title: "Sunny Spice Stack", price: 16.5, qty: 1 },
      ],
      totals: {
        subtotal: 34.95,
        tax: 2.8,
        deliveryFee: 0,
        total: 37.75,
      },
    };

  return (
    <main className="order-page">
      <section className="order-hero">
        <div className="order-hero-inner">
          <div className="order-check" aria-hidden="true">
            <Check size={26} strokeWidth={3} />
          </div>
          <h1>Order Confirmed</h1>
          <p className="order-sub">Thank you for your order.</p>

          <div className="order-card">
            <div className="order-card-top">
              <div>
                <div className="k">Order Number</div>
                <div className="v">#{order.id}</div>
              </div>
              <div className="right">
                <div className="k">Estimated Pickup Time</div>
                <div className="v">25-30 mins</div>
              </div>
            </div>

            <div className="divider" />

            <div className="section">
              <div className="title">Customer Detail</div>
              <div className="kv">
                <span>Name:</span> {order.customer?.fullName ?? ""}
              </div>
              <div className="kv">
                <span>Email:</span> {order.customer?.email ?? ""}
              </div>
              <div className="kv">
                <span>Phone:</span> {order.customer?.phone ?? ""}
              </div>
            </div>

            <div className="divider" />

            <div className="section">
              <div className="title">Order items</div>
              <div className="items">
                {order.items.map((it) => (
                  <div key={it.title} className="item">
                    <span className="name">{it.title}</span>
                    <span className="amt">
                      ${(it.price * (it.qty ?? 1)).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="totals">
                <div className="trow">
                  <span>Subtotal</span>
                  <span>${order.totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="trow">
                  <span>Tax (8%)</span>
                  <span>${order.totals.tax.toFixed(2)}</span>
                </div>
                <div className="trow">
                  <span>{order.deliveryMode === "delivery" ? "Delivery" : "Pickup"}</span>
                  <span>
                    {order.totals.deliveryFee === 0
                      ? "Free"
                      : `$${order.totals.deliveryFee.toFixed(2)}`}
                  </span>
                </div>
              </div>
            </div>

            <div className="divider" />

            <div className="paid">
              <div>
                <div className="paid-title">Total Paid</div>
                <div className="receipt">
                  *Receipt sent to {order.customer?.email ?? ""}
                </div>
              </div>
              <div className="paid-amt">${order.totals.total.toFixed(2)}</div>
            </div>

            <div className="actions">
              <Link to="/menu" className="btn btn-grad">
                New Order
              </Link>
              <Link to="/" className="btn btn-outline">
                Close
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderConfirmed;
