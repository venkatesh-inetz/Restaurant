import "../styles/Product.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Assets from "../assets/Assets";
import { useStore } from "../store/StoreContext";
import { getProductById } from "../data/menuData";
import { ChevronDown, ChevronLeft, ChevronUp } from "lucide-react";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, products } = useStore();
  const product = getProductById(productId);
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const thumbs = useMemo(() => {
    const first = product?.images?.[0];
    if (!first) return [];
    // Match screenshot: thumbnails are the same image as the main image.
    return [first, first, first, first];
  }, [product]);

  const suggest = useMemo(() => {
    if (!product) return [];
    const sameCategory = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
    if (sameCategory.length >= 3) return sameCategory;
    return products.filter((p) => p.id !== product.id).slice(0, 3);
  }, [product, products]);

  if (!product) {
    return (
      <main className="product-page">
        <section className="product-top">
          <div className="product-top-inner">
            <Link to="/menu" className="product-back">
              <ChevronLeft size={20} strokeWidth={2.6} aria-hidden="true" />
              <span>Back</span>
            </Link>
            <h1 style={{ margin: 0 }}>Item not found</h1>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="product-page">
      <section className="product-top">
        <div className="product-top-inner">
          <Link to="/menu" className="product-back">
            <ChevronLeft size={20} strokeWidth={2.6} aria-hidden="true" />
            <span>Back</span>
          </Link>

          <div className="product-grid">
            <div className="product-media">
              <div className="product-main-img">
                <img
                  src={product.images?.[activeImg] ?? product.images?.[0]}
                  alt={product.title}
                />
              </div>
              <div className="product-thumbs" aria-label="More images">
                {thumbs.map((src, idx) => (
                  <button
                    key={`${src}-${idx}`}
                    type="button"
                    className={`thumb${idx === activeImg ? " is-active" : ""}`}
                    aria-label={`Thumbnail ${idx + 1}`}
                    onClick={() => setActiveImg(idx)}
                  >
                    <img src={src} alt="" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-info">
              <h1>{product.title}</h1>
              <div className="product-price">${product.price.toFixed(2)}</div>
              <div className="product-rule" aria-hidden="true" />
              <p className="product-lede">{product.description}</p>

              <div className="product-meta">
                <div>
                  <span className="meta-k">CATEGORY:</span>{" "}
                  <span className="meta-v">{product.category}</span>
                </div>
                <div>
                  <span className="meta-k">TAGS:</span>{" "}
                  <span className="meta-v">Recipes, Sweet, Tasty</span>
                </div>
              </div>

              <div className="product-actions">
                <div className="qty-stepper" aria-label="Quantity">
                  <button
                    type="button"
                    className="qty-step"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <ChevronUp size={16} strokeWidth={3} aria-hidden="true" />
                  </button>
                  <div className="qty-number" aria-label={`Quantity ${qty}`}>
                    {qty}
                  </div>
                  <button
                    type="button"
                    className="qty-step"
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <ChevronDown size={16} strokeWidth={3} aria-hidden="true" />
                  </button>
                </div>

                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    addToCart(product.id, qty);
                    navigate("/cart");
                  }}
                >
                  Order Now
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => addToCart(product.id, qty)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div
            className="product-tabs"
            role="tablist"
            aria-label="Product tabs"
          >
            <button
              type="button"
              className={`tab${activeTab === "description" ? " is-active" : ""}`}
              aria-selected={activeTab === "description"}
              onClick={() => setActiveTab("description")}
            >
              DESCRIPTION
            </button>
            <button
              type="button"
              className={`tab${activeTab === "reviews" ? " is-active" : ""}`}
              aria-selected={activeTab === "reviews"}
              onClick={() => setActiveTab("reviews")}
            >
              REVIEWS (2)
            </button>
          </div>
          <div className="product-tabs-rule" aria-hidden="true" />
        </div>
      </section>

      <section className="product-lower">
        {activeTab === "description" ? (
          <section className="product-desc">
            <div className="product-desc-inner">
              <h2>Description</h2>
              <p>
                ipsum enim. odio consectetur volutpat varius elit. non, vitae
                elit scelerisque ipsum ex efficitur. Donec tincidunt volutpat
                efficitur.ipsum enim. odio consectetur volutpat varius elit.
                non, vitae elit scelerisque ipsum ex efficitur. Donec tincidunt
                volutpat efficitur. Donec tincidunt volutpat efficitur. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam
                quidem quam recusandae expedita sint explicabo illum eaque,
                alias soluta distinctio iure, veniam neque. Sit, aspernatur?
                Amet rerum deserunt perferendis!
              </p>
            </div>
          </section>
        ) : (
          <section className="product-reviews">
            <div className="product-reviews-inner">
              <h2>Reviews</h2>
              <div className="reviews-list">
                <article className="review">
                  <div className="review-head">
                    <div className="review-name">Sarah Hamilton</div>
                    <div className="review-stars" aria-label="Rating 5 stars">
                      {"\u2605\u2605\u2605\u2605\u2605"}
                    </div>
                  </div>
                  <p className="review-body">
                    Absolutely delicious and full of flavor. Will definitely
                    order again.
                  </p>
                </article>
                <article className="review">
                  <div className="review-head">
                    <div className="review-name">James Carter</div>
                    <div className="review-stars" aria-label="Rating 4 stars">
                      {"\u2605\u2605\u2605\u2605"}
                      <span className="review-stars-muted" aria-hidden="true">
                        {"\u2605"}
                      </span>
                    </div>
                  </div>
                  <p className="review-body">
                    Great portion size and taste. The sauce was really good.
                  </p>
                </article>
              </div>
            </div>
          </section>
        )}

        <section className="suggest">
          <div className="suggest-inner">
            <h2>Suggest Dish</h2>
            <div className="suggest-grid">
              {suggest.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="suggest-card"
                >
                  <img src={p.images?.[0] ?? Assets.item1} alt={p.title} />
                  <div>{p.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <img
          src={Assets.ring}
          alt="product-lower-ring"
          aria-hidden="true"
          className="product-lower-ring"
        />
        <img className="productbg" src={Assets.productbg} alt="productbg" />
      </section>
    </main>
  );
};

export default Product;
