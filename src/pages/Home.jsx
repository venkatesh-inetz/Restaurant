import "../styles/Home.css";
import Assets from "../assets/Assets";

const Home = () => {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="balloon-wrap">
          <img src={Assets.ballon} alt="Balloon decoration" />
        </div>
        <div className="ellipse-wrap">
          <img src={Assets.ellipse} alt="Ellipse decoration" />
        </div>

        <div className="hero-wrap">
          <div className="hero-left">
            <p className="hero-top-badge">Number 1 Restaurant in the Canada</p>
            <h1>
              Authentic {}
              <span>
                Hakka <br /> Flavours,
              </span>
              {}Crafted to <br /> Perfection
            </h1>
            <p className="hero-description">
              Where Chinese tradition meets bold Indo-Hakka taste fresh,
              flavorful, unforgettable. At Lagoon Hakka, we bring you the true
              taste of Hakka Chinese cuisine, blending rich spices, sizzling
              woks, and time-honored recipes to create dishes you&apos;ll crave
              again and again.
            </p>

            <div className="hero-cta-row">
              <button type="button" className="hero-btn hero-btn--gold">
                View Menu
              </button>
              <button type="button" className="hero-btn hero-btn--light">
                Online Order
              </button>
            </div>
          </div>

          <div className="hero-right">
            <img src={Assets.heroleft} alt="Hakka noodles" />
          </div>
          <div className="hero-review-row">
            <img
              src="https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=420&q=80"
              alt="Crispy chilli chicken"
            />
            <img
              src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=420&q=80"
              alt="Loaded fries"
            />
            <div className="hero-rating">
              <p className="stars">
                ★★★★★ <span>5.0</span>
              </p>
              <p>
                Best Hakka food in Mississauga! The flavors are authentic,
                portions are generous, and the service is always friendly. Our
                go-to spot for Chili Chicken!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
